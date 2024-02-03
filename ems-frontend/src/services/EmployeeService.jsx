import axios from 'axios'

const REST_API_BASE_URL="http://localhost:8081/api/employees";

const listEmployees = ()=>{
return axios.get(REST_API_BASE_URL);
}
export default listEmployees

export const createEmployee = (employee) =>  axios.post(REST_API_BASE_URL,employee);

export const getEmployee=(employeeId)=>{
return axios.get(REST_API_BASE_URL+'/'+employeeId);
}
export function updateEmployee(employeeId, employee) 
{
   return axios.put(REST_API_BASE_URL+'/'+employeeId, employee);
}
export function deleteEmployee(employeeId) {
   return axios.delete(REST_API_BASE_URL+'/'+employeeId);
}
