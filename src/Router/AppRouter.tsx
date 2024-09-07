import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../Pages/Accounts';


export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Accounts />}
                />
            </Routes>
        </BrowserRouter>
    );
}