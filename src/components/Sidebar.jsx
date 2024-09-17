import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaMoneyBillWave, FaChartLine, FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className={`flex flex-col h-screen w-64 bg-gray-800 text-white ${open ? 'w-64' : 'w-20'} transition-width duration-300`}>
            <div className={`flex items-center justify-between ${open ? 'p-4' : 'p-1'} bg-gray-900"`}>
                <div className="flex items-center space-x-2">
                    <img src="/logo192.png" alt="Logo" className="h-8 w-8" />
                    {open && <span className="text-xl font-bold leading-none">Financeiro</span>}
                </div>
                <button
                    className="focus:outline-none text-white"
                    onClick={() => setOpen(!open)}
                >
                    <FaBars className="h-6 w-6" />
                </button>
            </div>

            <nav className="flex-1 mt-5">
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
                            <FaHome className="h-6 w-6 mr-2" />
                            {open && 'Dashboard'}
                        </Link>
                    </li>
                    <li>
                        <Link to="/entries" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
                            <FaMoneyBillWave className="h-6 w-6 mr-2" />
                            {open && 'Entradas'}
                        </Link>
                    </li>
                    <li>
                        <Link to="/exits" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
                            <FaChartLine className="h-6 w-6 mr-2" />
                            {open && 'Saídas'}
                        </Link>
                    </li>
                    <li>
                        <Link to="/reports" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
                            <FaFileAlt className="h-6 w-6 mr-2" />
                            {open && 'Relatórios'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
