import readlineSync from 'readline-sync';
import tasks from '../data/db.js';
import { generateId } from '../utils/idGenerator.js';

const findIndexById = (id) => {
  const index = tasks.findIndex(({ id: taskId }) => taskId === Number(id));

  if (index === -1) {
    throw new Error('Tarefa não encontrada');
  }

  return index;
};

const taskNameInput = () => {
  const name = readlineSync.question(`Informe o nome da tarefa: `);
  return name;
};

export const createTask = () => {
  try {
    const id = generateId();
    const name = taskNameInput();

    const newTask = {
      id,
      name,
      status: false,
    };

    tasks.push(newTask);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTask = (id) => {
  try {
    const index = findIndexById(id);

    const name = taskNameInput();

    const statusOptions = ['Concluída', 'Pendente'];
    const status = readlineSync.keyInSelect(
      statusOptions,
      'Informe o status da tarefa: ',
      { cancel: false },
    );

    tasks[index].name = name;
    tasks[index].status = status === 'Pendente' ? false : true;

    console.log('Tarefa editada com sucesso!');
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTask = (id) => {
  try {
    const index = findIndexById(id);

    tasks.splice(index, 1);

    console.log('Tarefa removida!');
  } catch (error) {
    console.error(error.message);
  }
};

export const getTask = () => {
  try {
    for (var i = 0; i < tasks.length; i++) {
      const { id, name, status } = tasks[i];
      console.log(`
          Tarefa ${i + 1}
          Id: ${id}
          Nome: ${name}
          Status: ${status ? 'Concluída' : 'Pendente'}
          `);
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const detailTask = (id) => {
  try {
    const task = tasks.find(({ id: taskId }) => taskId === Number(id));

    if (!task) {
      throw new Error('Tarefa não encontrada');
    }

    console.log(`     
        Id: ${task.id}
        Nome: ${task.name}
        Status: ${task.status ? 'Concluída' : 'Pendente'}
        `);
  } catch (error) {
    console.error(error.message);
  }
};
