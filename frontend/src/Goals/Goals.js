import React, {Component} from 'react';
import axios from 'axios';

class Goals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goals: [
                {
                    id: 1,
                    title: 'test',
                    points: 50,
                },
                {
                    id: 2,
                    title: 'test 2',
                    points: 20,
                },
            ]
        };
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
