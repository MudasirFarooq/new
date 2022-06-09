import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login(props) {

    const initialState = { username : "" , email : "" , password : ""}
    const [formValues , setformValues] = useState(initialState)
    const [formErrors , setformErrors] = useState({})
    const [isSubmit , setisSubmit] = useState(false) 
    const [list ,setlist] = useState([])

    const changehandle = (e) =>{
        const {name , value} = e.target
        setformValues({ ...formValues , [name]: value})
    }
    const submithandle = (e) => {
        e.preventDefault();
       setformErrors(validate(formValues))   
       setisSubmit(true)     
    }
    useEffect( () => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
            axios.post('http://localhost:3006/contacts' , formValues)
            .then( (res) => {

            })
        }
    } ,[formErrors])
     
    const validate = (values) => {
        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!values.username){
            errors.username = "username is required"
        }
        if(!values.email){
            errors.email = "email is required"
        } else if(!regex.test(values.email)){
            errors.email = "email is invalid"
        }
        if(!values.password){
            errors.password = "password is required"
        }
        return errors;
    }

    useEffect( () => {
        const fetchdata = async () => {
            const response = await axios
              .get("http://localhost:3006/contacts")
              .then((res) => {
                console.log(res.data)
                setlist(res.data)
              })
              .catch((e) => console.log(e));
          };
          fetchdata(); 
    } , [])

    const deletehandle = (id) => {
        axios.delete(`http://localhost:3006/contacts/${id}`)
    }
    const edithandle = (list) => {
        setformValues(list)
    }
    return (
    
        <>
        
        <div className='login shadow-lg p-5'>
            <form onSubmit={submithandle}>
                <div className="">
                    <label htmlFor="exampleInputname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" 
                    name="username"  onChange={changehandle}/>
                </div>
                <p className='p'>{formErrors.username}</p>
                <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name='email'  onChange={changehandle} />
                </div>
                <p className='p'> {formErrors.email}</p>
                <div className="">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    name='password' onChange={changehandle}/>
                </div>
                <p className='p'>{formErrors.password}</p>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        <div className='container'>
            <h1>list of user</h1>
            {
                list.map( (list) =>(
                    <div  key={list.id}>
                    <h3> <b>username</b> -- {list.username} --  <b>email</b> -- {list.email} -- <b>password</b> -- {list.password}</h3>
                    <button className='btn btn-info' onClick={() => edithandle(list)}>edit</button>
                    <button className='btn btn-danger' onClick={() => deletehandle(list.id)}>delete</button>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Login;