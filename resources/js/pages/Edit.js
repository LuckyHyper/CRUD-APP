import React, { Component } from 'react';
import AppContainer from './AppContainer';
import { Link } from 'react-router-dom';

class Edit extends Component {
    render() {
        return (
            <AppContainer title="Edit Student">
                <form>
                    <div className="form-group">
                        <labed>Name</labed>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <labed>Classe</labed>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <labed>Email</labed>
                        <input className="form-control" type="text" />
                    </div><div className="form-group">
                        <labed>Phone</labed>
                        <input className="form-control" type="text" />
                    </div>
                </form>
                <div className=" btn-back">
                    <Link to={'/'} className="btn btn-secondary btn-sm back"> BACK</Link>
                </div>
            </AppContainer>
        );
    }
}
export default Edit;