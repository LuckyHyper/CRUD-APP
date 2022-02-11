import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Addstudent extends Component {
    /* state = {
         name='',
         course='',
         email='',
         phone=''
     } */
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">

                            <div className="card-header">
                                <h4>Add Students
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-3">
                                        <label> Name</label>
                                        <input type="text" name="name" value="" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="ml-6"> class</label>
                                        <input type="text" name="class" value="" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label> email</label>
                                        <input type="text" name="email" value="" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>phone</label>
                                        <input type="text" name="phone" value="" className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type="submit" className="btn btn-primary">Save Student</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default Addstudent;