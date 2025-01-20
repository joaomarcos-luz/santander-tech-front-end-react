const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-title-input');
const taskLista = document.querySelector('#task-list-ul');

let taskAdd = []

window.onload = () => {
    const taskT = JSON.parse(localStorage.getItem('tasks'));

    if (!taskT) return; // Corrigido de 'task' para 'taskT'

    taskAdd = taskT; // Atualizando a lista com as tarefas do localStorage

    taskAdd.forEach(t => {
        renderTasks(t.task, t.done); // Adicione o estado 'done' ao chamar renderTasks
    });
};


function renderTasks(tasks, done = false) {
    const li = document.createElement('li');
    
    const input = document.createElement('input');
    input.type = 'checkbox';

    input.addEventListener('change', (event) => {
        const liTarggle = event.target.parentElement;
    
        const spanTarggle = liTarggle.querySelector('span');

        if(done) {
            spanTarggle.style.textDecoration = 'line-through';
        }
    
        const done = event.target.checked;
    
        if (done) {
            spanTarggle.style.textDecoration = 'line-through';
        }else {
            spanTarggle.style.textDecoration = 'none';
        }

        taskAdd = taskAdd.map(t => {
            if(t.task === spanTarggle.textContent) {
                return {
                    task: t.task,
                    done: !t.done
                }
            }
            return t;
        });
        
        localStorage.setItem('tasks', JSON.stringify(taskAdd));
    });

    const span = document.createElement('span');

    const button = document.createElement('button');
    button.textContent = 'Remover';

    button.addEventListener('click', (event) => {

        const liRemove = event.target.parentElement;

        const titleRemove = liRemove.querySelector('span').textContent;

        taskAdd = taskAdd.filter(t => t.task !== titleRemove);

        taskLista.removeChild(liRemove);
        console.log(taskAdd);

        localStorage.setItem('tasks', JSON.stringify(taskAdd));
    });

    span.textContent = tasks;

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    taskLista.appendChild(li);
}


form.addEventListener   ('submit', (event) => {
    event.preventDefault();

    const tasks = taskInput.value;3

    if(tasks.length < 3) {
        alert('Sua tarefa precisa ter, no minimo, 3 caracteres');
        return;
    }

    taskAdd.push({
        task: tasks,
        done: false
    });

    localStorage.setItem('tasks', JSON.stringify(taskAdd));

    renderTasks(tasks);

    taskInput.value = '';
    
})