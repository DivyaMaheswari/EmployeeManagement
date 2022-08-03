import React from 'react';
import {Link} from 'react-router-dom';

const HeaderComponent=()=> {

    return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md bg-dark'>
                        <div className='container'>
                            <h3 style={{color:'white'}}>Employee Management App{' '}
                            <Link to ="/" className='btn btn-info'>Employees</Link>{' '}
                            <Link to = "/add-employee" className='btn btn-secondary'>Add Employee</Link>
                            </h3>
                        </div>
                    </nav>
                </header>
              
            </div>
        );
    
}


export default HeaderComponent;