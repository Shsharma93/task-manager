import React from 'react';
import classes from './task.module.scss';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ tasks, index }) => {
  return (
    <Draggable draggableId={tasks.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={
            snapshot.isDragging
              ? [classes.container, classes.color].join(' ')
              : classes.container
          }
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {tasks.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
