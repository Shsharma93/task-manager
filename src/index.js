import React, { Component } from 'react';
import { render } from 'react-dom';
import initialData from './initial-data';
import Column from './components/Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import classes from './index.module.scss';

class App extends Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTasksIds = [...start.tasksId];
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, tasksId: newTasksIds };
      const newState = {
        ...this.state,
        columns: { ...this.state.columns, [newColumn.id]: newColumn }
      };
      this.setState(newState);
    }

    if (start !== finish) {
      const startTasksIds = [...start.tasksId];
      startTasksIds.splice(source.index, 1);
      const newStart = { ...start, tasksId: startTasksIds };

      const finishTasksIds = [...finish.tasksId];
      finishTasksIds.splice(destination.index, 0, draggableId);
      const newFinish = { ...finish, tasksId: finishTasksIds };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      };

      this.setState(newState);
    }
  };

  render() {
    const { columnOrder, columns, tasks } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={classes.container}>
          {columnOrder.map(columnId => {
            const column = columns[columnId];
            const task = column.tasksId.map(tasksId => tasks[tasksId]);
            return <Column key={column.id} column={column} tasks={task} />;
          })}
        </div>
      </DragDropContext>
    );
  }
}

render(<App />, document.getElementById('root'));
