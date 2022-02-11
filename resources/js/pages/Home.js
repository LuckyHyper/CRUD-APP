import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AppContainer from "./AppContainer";

class Home extends Component {
    render() {
        return (
            <AppContainer title="Student List">
                <Link to={'add-student'} className="btn btn-primary btn-sm float-end"> Add Student</Link>
                        <br></br>
                        <br></br>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Class</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdmmmo</td>
                                <td>@mdo</td>
                                <td>
                                    <Link to="/edit-student" type="button" className="btn btn-info btn-css">Edit</Link>
                                    <Link to="/delete" type="button" className="btn btn-dark btn-css">Delete</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdmmmo</td>
                                <td>@mdo</td>
                                <td>
                                    <button type="button" class="btn btn-info btn-css">Edit</button>
                                    <button type="button" class="btn btn-dark btn-css">Delete</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </AppContainer>
        );
    }
}
export default Home;