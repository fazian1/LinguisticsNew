

import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
import {getRegistrations, updateRegistration} from "../../Apis/apiForRegistrations"

function StudentDataForAdmin() {
  let {id} = useParams()
  const [items, setItems] = useState([])
  const location = useLocation();
  const history = useHistory()
  var serialNumber = 0

  useEffect(() => {
    const fetchItems = async function() {
      const teachers = await getRegistrations(location.state)
      setItems(teachers)
    }
    fetchItems()
  }, []);

  const Swal = require('sweetalert2')


  const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
          <td>{serialNumber}</td>
      )
  }
  const handleOnClickApprove = (data) => {
    data.confirmation = "Approved"
    updateRegistration(data, data._id)
    Swal.fire(data.name + " Approved", 
    '',
    'success')
  }

  const handleOnClickDisapprove = (data) => {
    data.confirmation = "Disapproved"
    updateRegistration(data, data._id)
    Swal.fire(data.name + " Disapproved", 
      '',
      'warning')
  }

  const handleOnClickRemove = (data) => {
    axios.delete('http://localhost:7000/testimonials/delete/' + data._id)
    .then((res) => {
        console.log('Student successfully deleted!')
        window.location.reload(false)
    }).catch((error) => {
        console.log(error)
    })
    Swal.fire(data.name + " Removed", 
      '',
      'warning')
  }
  const handleOnClickInfo = (data) => {
      history.push({
        pathname:`/admin/student-details/${id}`,
        state: data
      })
  }

  const handleOnClickActivity = (data) => {
    history.push({
      pathname:`/admin/results-category-students/${id}`,
      state: data
    })
  }

  const handleOnPerfomance = (data) => {
    history.push({
      pathname:`/admin/category-for-performance/${id}`,
      state: data
    })
  }
    return (
                    <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid mt-5">
    {/* Page Heading */}
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Student Data</h1>
    
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List Of {/*{location.state.gender}*/} students</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                            <tr>
                              <th>Serial Number</th>
                              <th>Full Name</th>
                              <th>Gender</th>
                              <th>Email</th>
                              <th>Status</th>
                        
                              <th colSpan="4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(students => (
                                <tr key={students._id}>
                                 {handlingSerialNumber()}
                                <td>
                                <Link to={{
                                        pathname: `/admin/student-details/${id}`,
                                        state: students,
                                      }} className = "text-dark">{students.name}</Link>
                                </td>
                                <td>
                                  <Link to ={{
                                    pathname : `/admin/student-details/${id}`,
                                    state: students,

                                  }} className = "text-dark">{students.gender}</Link>
                                    
                                </td>
                               
                                <td>
                                <Link to ={{
                                    pathname : `/admin/student-details/${id}`,
                                    state: students,

                                  }} className = "text-dark">
                                    {students.email}</Link>
                                </td>
                                <td>
                                    {students.confirmation}
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickActivity(students)}>View Activity</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnPerfomance(students)}>View Perfomance Stats</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickApprove(students)}>Approve</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickDisapprove(students)}>Disapprove</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickRemove(students)}>Remove</button>
                                  </div>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-transparent">
  <div className="containerBlackDashboard my-auto">
    <div className="copyright text-center my-auto">
      <span></span>
    </div>
  </div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
        </div>
      </>
    )
}

export default StudentDataForAdmin
