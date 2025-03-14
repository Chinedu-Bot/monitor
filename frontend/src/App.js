
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ErrorCard from './components/ErrorCard';

const App = () => {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('/api/get-errors')
            .then(response => setErrors(response.data.errors))
            .catch(error => console.error("Error fetching logs:", error.message));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Error Monitoring Dashboard</h1>
                {errors.map((error, index) => (
                    <ErrorCard key={index} error={error} />
                ))}
            </div>
        </div>
    );
};

export default App;
