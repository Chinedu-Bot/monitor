
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorCard from '../components/ErrorCard';

function Dashboard() {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        async function fetchErrors() {
            try {
                const response = await axios.get('https://your-vercel-app.vercel.app/get-errors');
                setErrors(response.data.errors);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        }

        fetchErrors();
    }, []);

    return (
        <div className="p-4">
            {errors.length === 0 ? (
                <p className="text-gray-600">No errors logged yet!</p>
            ) : (
                errors.map((error, index) => <ErrorCard key={index} error={error} />)
            )}
        </div>
    );
}

export default Dashboard;
