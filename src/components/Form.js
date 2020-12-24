import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onFormSubmit = () => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ name, description })
        }

        console.log(process.env.REACT_API_URL);

        fetch(process.env.REACT_API_URL, options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div className="welcome">
            <div className="welcome-section">
                <p className="welcome-paragraph">This is your application. It will change over time, same as you will.</p>
                <p className="welcome-paragraph">Because of that, feel free to write suggestions you might have regarding future functionalities. </p>
                <div className="form">
                    <input
                        className="form-name" 
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <textarea
                        className="form-description"
                        placeholder="Message"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="form-button"
                        onClick={onFormSubmit}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;