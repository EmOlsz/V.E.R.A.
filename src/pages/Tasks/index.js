import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import TasksItem from './TasksItem';
import AddTask from './AddTask';

import './style.css';

const Tasks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const items = useSelector(store => store.tasks.items);

    const onModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <IconButton onClick={onModalOpen} className="add-task">
                <AddIcon />
            </IconButton>
            <div>
                {items.map(item => (
                    <TasksItem key={item.id} {...item} />
                ))}
            </div>
            <AddTask isOpen={isModalOpen} onModalClose={handleModalClose} />
        </div>
    );
};

export default Tasks;