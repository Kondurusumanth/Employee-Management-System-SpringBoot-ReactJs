import React,{useState,useEffect} from 'react'
import listEmployees, { deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {
  
const [employees,setEmployees]=useState([]);
const navigator=useNavigate();

useEffect(()=>{
  allEmployee();
},[])
 const allEmployee=()=>{
  listEmployees() .then((response)=>{
    setEmployees(response.data);
  }).catch(error=>{
    console.error(error);
  })
}
const addEmployee=()=>{
navigator('/add-employee');
}
function updateEmployee(id){
  navigator(`/edit-employee/${id}`);
}
function removeEmployee(id){
deleteEmployee(id).then(res=>{
  allEmployee();
  console.log(res.data+' for this id number'+id);
  
}).catch(error=>{
  console.log(error);
})
}
  return (
    <div className='container '>
      <h2 className='text-center'>List Of Employees</h2>
      <button className='btn btn-primary mb-3' onClick={addEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody >
            {
                employees.map(employee=>
                  <tr key={employee.id} >
                   <td>{employee.id}</td> 
                   <td>{employee.firstName}</td>
                   <td>{employee.lastName}</td>
                   <td>{employee.email}</td>
                   <td>
                    <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update </button>
                    <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)} 
                    style={{marginLeft:'10px'} }
                    >Delete</button>
                   </td>
                  </tr> 
                  
                  )
            }
        </tbody>
      </table>

    </div>
  )
}

export default ListEmployeeComponent

