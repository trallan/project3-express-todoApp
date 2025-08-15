import { useEffect, useState } from 'react';

function ExpressData() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>React App Test</h1>
            <p>{message}</p>
        </div>
    );
}

export default ExpressData;