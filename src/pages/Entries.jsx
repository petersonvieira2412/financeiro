import React from 'react';

const Entries = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Entradas</h1>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Adicionar Nova Entrada
            </button>
        </div>
    );
};

export default Entries;
