import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Entries from './pages/Entries';
import Exits from './pages/Exits';
import Reports from './pages/Reports';

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-6 bg-gray-100 min-h-screen">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/entries" element={<Entries />} />
                        <Route path="/exits" element={<Exits />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
