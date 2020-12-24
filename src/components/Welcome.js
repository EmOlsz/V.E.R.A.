import React, { useRef } from 'react';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const Welcome = () => {
    const firstSection = useRef(null);

    const scrollIntoElement = (element) => {
        element.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="welcome">
            <div className="welcome-section">
            <div className="welcome-icon">
                    <ChildFriendlyIcon />
                </div>
                <p className="welcome-hero-header">Innovative parenthood.</p>
                <p className="welcome-hero-header-last">Now.</p>
                <div className="welcome-hero-icon">
                    <ExpandMoreIcon onClick={() => scrollIntoElement(firstSection)} />
                </div>
            </div>
            <div ref={firstSection} className="welcome-section">
                <p className="welcome-paragraph">You must be wondering why I gathered you all here...</p>
                <p className="welcome-paragraph">Very soon you will enter completely new chapter of your lives. It's going to be exciting, but also challenging.</p>
                <p className="welcome-paragraph">Let me intoduce you to your brand new, personal and fully adjustable V.E.R.<span className="welcome-letter-reverse">V</span>. &reg; application. A tool, which is tailored to be as helpfull companion as it can be during your new step into parenthood.</p>
                <p className="welcome-paragraph">Let's take a look over the features.</p>
            </div>
            <div className="welcome-section">
                <div className="welcome-icon">
                    <DoneAllIcon />
                </div>
                <h5 className="welcome-section-header">Todos</h5>
                <p className="welcome-paragraph">All essential informations every parent need, gathered and organised.</p>
                <p className="welcome-paragraph">In one place.</p>
            </div>
            <div className="welcome-section">
                <div className="welcome-icon">
                    <NotificationsActiveIcon />
                </div>
                <h5 className="welcome-section-header">Notifications</h5>
                <p className="welcome-paragraph">Get notified when your partner updates any part of the app with new data.</p>
                <p className="welcome-paragraph">It's that simple.</p>
            </div>
            <div className="welcome-section">
                <div className="welcome-icon">
                    <FormatQuoteIcon />
                </div>
                <h5 className="welcome-section-header">Maksymilian's quotes</h5>
                <p className="welcome-paragraph">Dip your toes in wisdom waters of the great visionary and wanderer, collected over the years.</p>
                <p className="welcome-paragraph">Because I made this app, so why not.</p>
            </div>
        </div>
    );
}

export default Welcome;