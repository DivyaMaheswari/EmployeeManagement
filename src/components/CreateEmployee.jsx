import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
const CreateEmployee = ()=>  {
   
    const [Name,setName] = useState({
        firstName:"",
        lastName:"",
        emailId:""
    });

    const {id} = useParams();

    const employee = {...Name,id};
    const handleInputs=(e)=>{
        const newdata={...Name};
        newdata[e.target.name]=e.target.value;
        setName(newdata);
    }
    const saveEmployee= (e)=>{
        e.preventDefault();
        if(id){
            //update employee
            EmployeeService.update(employee)
            .then((res)=>{
                console.log("updated succesfully");
                setName(res.data);
                setName({
                    firstName:'',
                    lastName:'',
                    emailId:''
                });
                alert("Updated employee record succesfully");
            })

        }else{
            //create employee
            EmployeeService.create(employee)
        .then((res)=>{
            console.log("created employee record succesfully");
            setName(res.data);
            setName({
                firstName:'',
                lastName:'',
                emailId:''
            });
            alert("Added employee succesfully");
        });
        }
        
    }

    useEffect(()=>{
        if(id){
            EmployeeService.getById(id)
            .then(employee=>{
                setName(employee.data);
            })
        }
    },[])

    
            return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h4 className='text-center'>Add Employee</h4>
                            <hr/>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input 
                                        placeholder='First Name' 
                                        name='firstName' 
                                        className='form-control' 
                                        value={Name.firstName} 
                                        onChange = {handleInputs}
                                        />
                                    </div>
                                    <br />
                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input 
                                        placeholder='Last Name'
                                        name='lastName'  
                                        className='form-control' 
                                        value={Name.lastName} 
                                        onChange = {handleInputs}
                                        />
                                    </div>
                                    <br />
                                    <div className='form-group'>
                                        <label>Email Id: </label>
                                        <input 
                                        placeholder='Email Id'  
                                        name='emailId'
                                        className='form-control' 
                                        value={Name.emailId} 
                                        onChange = {handleInputs}
                                        />
                                    </div>
                                    <br />
                                    <button className='btn btn-success' onClick={saveEmployee} >
                                          Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


export default CreateEmployee;