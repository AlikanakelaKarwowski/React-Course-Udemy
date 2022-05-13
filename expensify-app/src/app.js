import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        <h1>Expense Dashboard</h1>
    </div>
);

const AddExpensePage = () => (
    <div>
        <h1>Add Expense</h1>
    </div>
);

const EditExpensePage = () => (
    <div>
        <h1>Edit Expense</h1>
    </div>
);

const HelpPage = () => (
    <div>
        <h1>Help Page</h1>
    </div>
);

const NotFoundPage = () => (
    <div>
        <h1>404 Devs Fucked Up</h1>
    </div>
);



const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} /> 
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));
