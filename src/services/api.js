import readlineSync from 'readline-sync';

import tasks from '../data/db.js';
import { generateId } from '../utils/idGenerator.js';

export const createTask = () => {
  const id = generateId();
  const name = readlineSync.question(`Informe o nome da tarefa: `);

  const newTask = {
    id,
    name,
  };

  tasks.push(newTask);
};

export const updateTask = (id) => {};

export const deleteTask = (id) => {
  const task = tasks.find(({ id: taskId }) => taskId === Number(id));

  if (!task) {
    throw new Error('Tarefa não encontrada');
  }

  const index = Number(id) - 1;
  tasks.splice(index, 1);
};

export const getTask = () => {
  for (var i = 0; i < tasks.length; i++) {
    const { id, name } = tasks[i];
    console.log(`
        Tarefa ${id}
        Id: ${id}
        Nome: ${name}
        `);
  }
};

export const detailTask = (id) => {};
