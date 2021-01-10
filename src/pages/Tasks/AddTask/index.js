import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { tasks } from 'reducers/tasks';

import './style.css';

const AddTask = ({ isOpen, onModalClose }) => {
    const [taskDescription, setTaskDescription] = useState('');
    
    const dispatch = useDispatch();

    const onTaskSubmit = () => {
        dispatch(tasks.actions.addItem(taskDescription));
        onModalClose();
        setTaskDescription('');
    }

    return (
        <Dialog open={isOpen} onClose={onModalClose} fullScreen>
            <AppBar className="add-task-title-bar">
                <Toolbar>
                    <Typography className="add-task-title" variant="h6">
                        New task
                    </Typography>
                    <IconButton edge="end" onClick={onModalClose}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent className="add-task-content">
                <input
                    className="add-task-input"
                    placeholder="What's on your mind?"
                    value={taskDescription}
                    onChange={e => setTaskDescription(e.target.value)}
                />
            </DialogContent>
            <DialogActions className="add-task-actions">
                <Button color="primary" onClick={onModalClose}>
                    Cancel
                </Button>
                <Button color="primary" onClick={onTaskSubmit}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddTask;