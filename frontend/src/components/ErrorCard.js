
import React from 'react';

const ErrorCard = ({ error }) => {
    return (
        <div className="p-4 mb-2 bg-white shadow rounded">
            <p>{error.message}</p>
            <p className="text-gray-500 text-sm">{error.timestamp}</p>
        </div>
    );
};

export default ErrorCard;
