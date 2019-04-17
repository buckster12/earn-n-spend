import React, {Component} from 'react';
import axios from 'axios';

class Goals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goals: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8081/goals')
            .then(response => {

                console.log(response);

                this.setState({goals: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className={'goalsList'}>
                {
                    this.state.goals && this.state.goals.map((goal) => (
                            <div className={'goal-row'}>
                                {goal.title} <span className={'points'}>({goal.points})</span>
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default Goals
