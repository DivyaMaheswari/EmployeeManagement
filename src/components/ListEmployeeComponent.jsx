import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";
const ListEmployeeComponent = () => {
    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        init();
    },[])

    const init=()=>{
        EmployeeService.getAll()
        .then( res=>{
            setEmployees(res.data);
        })
    }
    const handleDelete =(id)=>{
        EmployeeService.deleteById(id)
        .then(res=>{
            console.log("Deletion succesful",res.data);
            alert("employee deleted succesfully");
            init();
        })
    }
    return ( 
        <div>
            <h4 style={{textAlign:'center'}}>Employee details</h4>
<div>
    <table className="table table-bordered table-striped">
       <tbody>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email id</th>
            <th>Actions</th>
        </tr>
        
        {
            employees.map( employee => (
                <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                        <Link to={`/employees/edit/${employee.id}`} className="btn btn-success">Update</Link>{' '}{' '}
                        <button className="btn btn-danger " onClick={(e)=>{
                            handleDelete(employee.id)
                        }}>Delete</button>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
</div>

        </div>
     );
}
 
export default ListEmployeeComponent;