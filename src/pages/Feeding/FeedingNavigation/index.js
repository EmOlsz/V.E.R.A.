import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import './style.css';

const FeedingNavigation = (props) => {
    const { isActive, breast, breastRight, breastLeft, onBreastChange } = props;
    const isRight = breast === breastRight;
    const isLeft = breast === breastLeft;

    return (
        <div className="feeding-navigation">
            <IconButton
                onClick={() => onBreastChange(breastLeft)}
                disabled={isActive}
            >
                <div
                    className={`
                        feeding-navigation-icon feeding-navigation-icon-left
                        ${isLeft ? 'feeding-navigation-icon-selected' : ''}
                        ${isActive && isRight ? 'feeding-navigation-icon-disabled' : ''}
                    `}
                />
            </IconButton>
            <IconButton
                onClick={() => onBreastChange(breastRight)}
                disabled={isActive}
            >
                <div
                    className={`
                        feeding-navigation-icon feeding-navigation-icon-right
                        ${isRight ? 'feeding-navigation-icon-selected' : ''}
                        ${isActive && isLeft ? 'feeding-navigation-icon-disabled' : ''}
                    `}
                />
            </IconButton>
        </div>
    );
}

export default FeedingNavigation;