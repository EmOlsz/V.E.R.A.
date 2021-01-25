import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FeedingNavigation from './FeedingNavigation';
import FeedingTimer from './FeedingTimer';
import FeedingDailyList from './FeedingDailyList';

import { breastValueLeft, breastValueRight } from 'constants/feeding';
import { feeding } from 'reducers/feeding';

const Feeding = () => {
    const dispatch = useDispatch();
    const countRef = useRef(null);

    const selectedBreastValue = useSelector(store => store.feeding.selectedBreastValue);
    const selectedBreast = useSelector(store => store.feeding[selectedBreastValue]);
    const dailyFeedingList = useSelector(store => store.feeding.dailyFeedingList);

    const isSelectedBreastActive = selectedBreast.isActive;
    const isSelectedBreastPaused = selectedBreast.isPaused;
    const isReadyToSave = isSelectedBreastActive && isSelectedBreastPaused
    const selectedBreastTimer = selectedBreast.timer;

    useEffect(() => {
        onDailyFeedingsFetch();
    }, [selectedBreastValue]);

    const handleBreastChange = (breastValue) => {
        dispatch(feeding.actions.setBreast(breastValue));
    }

    const handleTimerStart = () => {
        dispatch(feeding.actions.setIsActive(true));
        dispatch(feeding.actions.setIsPaused(false));
        countRef.current = setInterval(() => {
            dispatch(feeding.actions.incrementCount());
        }, 1000);
    }

    const handleTimerPause = () => {
        dispatch(feeding.actions.setIsPaused(true));
        clearInterval(countRef.current);
    }

    const handleTimerResume = () => {
        dispatch(feeding.actions.setIsPaused(false));
        countRef.current = setInterval(() => {
            dispatch(feeding.actions.incrementCount());
        }, 1000);
    }

    const handleTimerReset = () => {
        dispatch(feeding.actions.setIsActive(false));
        dispatch(feeding.actions.setIsPaused(false));
        clearInterval(countRef.current);
        dispatch(feeding.actions.resetCount());
    }

    const handleFeedingSave = () => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                breast: selectedBreastValue,
                timer: selectedBreastTimer
            })
        }

        fetch("http://localhost:8080/feeding", options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
            .finally(() => {
                handleTimerReset();
                onDailyFeedingsFetch();
            });
    }

    const onDailyFeedingsFetch = () => {
        fetch(`http://localhost:8080/feeding/daily/${selectedBreastValue}`)
            .then(res => res.json())
            .then(data => dispatch(feeding.actions.setDailyFeedingList(data)))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <FeedingNavigation
                isActive={isSelectedBreastActive}
                breast={selectedBreastValue}
                breastRight={breastValueRight}
                breastLeft={breastValueLeft}
                onBreastChange={handleBreastChange}
            />
            <FeedingTimer
                isActive={isSelectedBreastActive}
                isPaused={isSelectedBreastPaused}
                isReadyToSave={isReadyToSave}
                timer={selectedBreastTimer}
                onTimerStart={handleTimerStart}
                onTimerPause={handleTimerPause}
                onTimerResume={handleTimerResume}
                onTimerReset={handleTimerReset}
                onFeedingSave={handleFeedingSave}
            />
            <FeedingDailyList
                dailyList={dailyFeedingList}
            />
      </div>
    );
};

export default Feeding;