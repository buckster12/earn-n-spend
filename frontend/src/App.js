import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';
import Questions from './Questions/Questions';
import NewGoal from "./NewGoal/NewGoal";

import Goals from './Goals/Goals';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <div className="container">

                    <Link to={`/new`} className={'btn btn-success'}>new</Link>

                    <Route exact path='/' component={Goals}/>

                </div>

                <br/>

                {/*<Route exact path='/question/:questionId' component={Question}/>*/}
                <Route exact path='/new' component={NewGoal}/>
            </div>
        );
    }
}

export default App;
