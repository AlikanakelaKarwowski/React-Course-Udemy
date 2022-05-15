import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { AddExpensePage } from '../components/AddExpensePage';
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';
import { Header } from '../components/Header';
import { EditExpensePage } from '../components/EditExpensePage';

const AppRouter = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />} />
            <Route path="/create" element={<AddExpensePage />} />
            <Route path="/edit" element={<EditExpensePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>

)

export default AppRouter;
