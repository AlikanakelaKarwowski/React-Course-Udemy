import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
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
        <Link to='/'>Go Home Your Drunk</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Dashboard
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Create Expense
        </NavLink>
        <NavLink to="/edit" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Edit Expense
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Help
        </NavLink>
    </header>
);

const routes = (
    <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<ExpenseDashboardPage/>}/>
                    <Route path='/create' element={<AddExpensePage/>}/> 
                    <Route path='/edit' element={<EditExpensePage/>}/>
                    <Route path='/help' element={<HelpPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
    </Router>
)

ReactDOM.render(routes, document.getElementById("app"));
