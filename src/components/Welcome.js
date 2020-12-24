import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome-section">
                <p className="welcome-hero-header">Innovative parenthood.</p>
                <p className="welcome-hero-header-last">Now.</p>
                <div className="welcome-hero-icon">
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="welcome-section">
                <p className="welcome-paragraph">You must be wondering why I gathered you all here...</p>
                <p className="welcome-paragraph">Let me intoduce you to your brand new, personal and fully adjustable application. A tool which will help you during your new path into parenthood.</p>
            </div>
            <div className="welcome-section">
                <div className="welcome-icon">
                    <DoneAllIcon />
                </div>
                <h5 className="welcome-section-header">Todos</h5>
                <p className="welcome-paragraph">All essential information that every parent need, gathered and organised.</p>
                <p className="welcome-paragraph">In one place.</p>
            </div>
            <div className="welcome-section">
                <div className="welcome-icon">
                    <NotificationsActiveIcon />
                </div>
                <h5 className="welcome-section-header">Notifications</h5>
                <p className="welcome-paragraph">Get notified when your partner updates any part of the app with new data.</p>
                <p className="welcome-paragraph">That simple.</p>
            </div>
            <div className="welcome-section">
                <div className="welcome-icon">
                    <FormatQuoteIcon />
                </div>
                <h5 className="welcome-section-header">Maksymilian's quotes</h5>
                <p className="welcome-paragraph">Dip your toe in wisdom waters of the great visionary and wanderer, collected over the years.</p>
                <p className="welcome-paragraph">Because I made this app.</p>
            </div>
        </div>
    );
}

export default Welcome;