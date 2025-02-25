import Store from './store';

const ListWrapper = document.querySelector('.tdList');
export default class Ui {
  static updateD = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach((task, i) => {
      const ListElements = document.querySelectorAll('li');
      ListElements[i].setAttribute('data-index', task.index);
    });
  }

  static addTask = (task) => {
    const ListElement = document.createElement('li');
    ListElement.setAttribute('data-index', task.index);
    ListElement.innerHTML = ` <div class = "flex"><input id="checkbs" type="checkbox">
    <span class="checkbox"></span><input type="text" class = "edit" value="${task.Description}">
     </div><i class="bi bi-trash"></i>`;
    ListWrapper.appendChild(ListElement);
  }

  static DisplayTasks = () => {
    ListWrapper.innerHTML = '';
    const Tasks = Store.getTasks();
    Tasks.forEach((task) => {
      this.addTask(task);
    });
  }
}