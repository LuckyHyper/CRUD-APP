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
                            {children}
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AppContainer;