import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './style.css';

const Quotes = () => {
    return (
        <div>
            <div class="quote-overlay" />
            <Container className="quote">
                <Typography className="quote-text">"Pigs are bigger than you think"</Typography>
                <Typography className="quote-author">- Maksymilian Olszewski</Typography>
            </Container>
        </div>
    );
};

export default Quotes;