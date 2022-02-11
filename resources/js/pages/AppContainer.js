import React from "react";
import {Link} from 'react-router-dom';

 function AppContainer({ title, children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="title">{title}</h4>
                        </div>
                       
                        <div className="card-body">
                        <Link to={'add-student'} className="btn btn-primary btn-sm float-end"> Add Student</Link>
                        <br></br>
                        <br></br>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AppContainer;