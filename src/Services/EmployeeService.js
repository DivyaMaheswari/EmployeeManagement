import axios from "axios";

const EMPLOYEE_API_CONST_URL = "http://localhost:8080/api/v1/employees";
const getAll = ()=>{
    return axios.get(EMPLOYEE_API_CONST_URL);
}

const create = (data) =>{
    return axios.post(EMPLOYEE_API_CONST_URL,data);
}

const getById = (id)=>{
    return axios.get(`http://localhost:8080/api/v1/employees/${id}`);
}

const update = (data)=>{
    return axios.post(EMPLOYEE_API_CONST_URL,data);
}

const deleteById = (id)=>{
    return axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
}

export default {getAll,create,getById,update,deleteById};

