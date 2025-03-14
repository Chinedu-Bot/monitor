
import React from 'react';

function ErrorCard({ error }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold">Error Message</h2>
            <p className="text-gray-700">{error.message}</p>
            <p className="text-gray-500">Timestamp: {new Date(error.timestamp).toLocaleString()}</p>
            <p className="text-gray-500">Level: {error.level}</p>
        </div>
    );
}

export default ErrorCard;
