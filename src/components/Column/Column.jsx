import React from 'react';
import classes from './column.module.scss';
import Task from '../Task/Task';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ column, tasks }) => {
  return (
    <div className={classes.container}>
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={snapshot.isDraggingOver
              ? [classes.tasks, classes.color].join(' ')
              : classes.tasks}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} tasks={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
