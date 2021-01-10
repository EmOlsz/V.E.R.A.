import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

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
            <DialogContent className="add-task-content">
                <textarea
                    className="add-task-input"
                    placeholder="What's on your mind?"
                    value={taskDescription}
                    onChange={e => setTaskDescription(e.target.value)}
                />
            </DialogContent>
            <DialogActions className="add-task-actions">
                <Button className="add-task-actions-element" onClick={onModalClose}>
                    Cancel
                </Button>
                <Button className="add-task-actions-element" onClick={onTaskSubmit}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddTask;