import React from 'react';

const TasksItem = props => {

    return (
        <div>
            <div>{props.description}</div>
            <div>{props.isComplete ? 'complete' : 'not complete'}</div>
        </div>
    );
};

export default TasksItem;