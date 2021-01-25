import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import SaveIcon from '@material-ui/icons/Save';

import { formatTime } from 'pages/Feeding/utils';

import './style.css';

const FeedingTimer = (props) => {
    const {
        isActive,
        isPaused,
        isReadyToSave,
        timer,
        onTimerStart,
        onTimerPause,
        onTimerResume,
        onTimerReset,
        onFeedingSave
    } = props;

    return (
        <div className="feeding-timer">
            <div className="feeding-timer-clock">{formatTime(timer)}</div>
            <div className="feeding-timer-button-group">
                {
                    !isActive && !isPaused
                        ? <IconButton className="feeding-timer-button" onClick={onTimerStart}>
                            <PlayArrowIcon />
                        </IconButton>
                        : !isPaused
                            ? <IconButton className="feeding-timer-button" onClick={onTimerPause}>
                                <PauseIcon />
                            </IconButton>
                            : <IconButton className="feeding-timer-button" onClick={onTimerResume}>
                                <PlayArrowIcon />
                            </IconButton>
                }
                <IconButton
                    className={`feeding-timer-button ${!isActive ? 'feeding-timer-button-disabled' : ''}`}
                    onClick={onTimerReset}
                >
                    <StopIcon />
                </IconButton>
                <IconButton
                    className={`feeding-timer-button ${!isReadyToSave ? 'feeding-timer-button-disabled' : ''}`}
                    onClick={onFeedingSave}
                >
                    <SaveIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default FeedingTimer;