import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import routes from 'constants/routes';

import './style.css';

const Navigation = () => {
    const history = useHistory();
    const startRoute = routes.find(route => route.path === history.location.pathname);
    
    const [route, setRoute] = useState(startRoute);

    const onRouteChange = (event, newRoute) => {
        setRoute(newRoute);
        history.push(newRoute.path);
    }

    return (
        <BottomNavigation
            value={route}
            onChange={onRouteChange}
            className="navigation"
        >
            {routes.map(item => (
                <BottomNavigationAction
                    key={item.value}
                    value={item}
                    label={item.label}
                    icon={item.icon}
                    className="navigation-item"
                />
            ))}
        </BottomNavigation>
    );
};

export default Navigation;