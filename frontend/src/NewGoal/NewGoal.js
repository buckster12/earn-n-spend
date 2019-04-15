import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import auth0Client from '../Auth';
import axios from 'axios';

class NewGoal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            title: '',
            points: 0,
            // description: '',
        };
    }

    updateDescription(value) {
        this.setState({
            description: value,
        });
    }

    componentDidMount() {

    }

    updateTitle(value) {
        this.setState({
            title: value,
        });
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        await axios.post('http://localhost:8081', {
            title: this.state.title,
            point: this.state.points,
            // description: this.state.description,
        }, {
            // headers: {'Authorization': `Bearer ${auth0Client.getIdToken()}`}
        });

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-primary">
                            <div className="card-header">New Goal</div>
                            <div className="card-body text-left">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Title:</label>
                                    <input
                                        disabled={this.state.disabled}
                                        type="text"
                                        onBlur={(e) => {
                                            this.updateTitle(e.target.value)
                                        }}
                                        className="form-control"
                                        placeholder="Give your goal a title."
                                    />
                                </div>
                                {/*<div className="form-group">*/}
                                {/*<label htmlFor="exampleInputEmail1">Description:</label>*/}
                                {/*<input*/}
                                {/*disabled={this.state.disabled}*/}
                                {/*type="text"*/}
                                {/*onBlur={(e) => {*/}
                                {/*this.updateDescription(e.target.value)*/}
                                {/*}}*/}
                                {/*className="form-control"*/}
                                {/*placeholder="Give more context to your goal."*/}
                                {/*/>*/}
                                {/*</div>*/}
                                <div className="form-group">
                                    <label htmlFor="points">Points:</label>
                                    <input type="text" className="form-control" placeholder="50"/>
                                </div>
                                <button
                                    disabled={this.state.disabled}
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.submit()
                                    }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NewGoal);