import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './style.css';

const TasksItem = props => {

    return (
        <Card className="task">
            <CardContent>
                <Typography className="task-description">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions className="task-actions">
                <Button size="small">Edit</Button>
                <Button size="small">Remove</Button>
            </CardActions>
        </Card>
    );
};

export default TasksItem;