import readlineSync from 'readline-sync';

import {
  createTask,
  deleteTask,
  detailTask,
  getTask,
  updateTask,
} from './services/api.js';

const app = () => {
  let id = '';
  let option = '';

  do {
    option = readlineSync.question(`
      ===== To Do List =====
      Escolha uma opção
      
      1- Criar uma Tarefa
      2- Editar uma Tarefa
      3- Remover uma Tarefa
      4- Listar Tarefas
      5- Obter uma Tarefa
      6- Encerrar

    `);

    switch (option) {
      case '1':
        createTask();
        break;
      case '2':
        id = idParams();
        updateTask(id);
        break;
      case '3':
        id = idParams();
        deleteTask(id);
        break;
      case '4':
        getTask();
        break;
      case '5':
        id = idParams();
        detailTask(id);
        break;
      case '6':
        console.log('Encerrando programa ...');
        break;

      default:
        console.log('Opção Inválida');
        break;
    }
  } while (option !== '6');
};

const idParams = () => {
  let id = '';

  id = readlineSync.question('Informe o id da tarefa: ');

  return id;
};

export default app;
