import React from 'react';
import moment from 'moment';

import { formatTime } from 'pages/Feeding/utils';

import './style.css';

const FeedingDailyList = ({ dailyList }) => {
    const dailyTimeTotal = dailyList
        .map(item => item.timer)
        .reduce((a, b) => a + b, 0);

    return (
        <div className="feeding-list">
            <div className="feeding-list-items">
                {dailyList.map(item => (
                    <div key={item._id} className="feeding-list-item">
                        <div className="feeding-list-date">{moment(item.date).format("hh:mm A")}</div>
                        <div className="feeding-list-timer">{formatTime(item.timer)}</div>
                    </div>
                ))}
            </div>
            <div className="feeding-list-total">
                <div className="feeding-list-total-title">Total:</div>
                <div className="feeding-list-total-timer">{formatTime(dailyTimeTotal)}</div>
            </div>
        </div>
    )
}

export default FeedingDailyList;