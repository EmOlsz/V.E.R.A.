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

        fetch(process.env.REACT_APP_API_URL, options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div className="welcome">
            <div className="welcome-section">
                <p className="welcome-paragraph">This is your personal application. It will change over time, same as you will.</p>
                <p className="welcome-paragraph">In V.E.R.<span className="welcome-letter-reverse">V</span>. &reg;, we value opinion of our customers. Feel free to write any ideas that might come into your mind regarding new features of the app.</p>
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