const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-title-input');
const taskLista = document.querySelector('#task-list-ul');

let taskAdd = []

form.addEventListener   ('submit', (event) => {
    event.preventDefault();

    const tasks = taskInput.value;

    if(tasks.length < 3) {
        alert('Sua tarefa precisa ter, no minimo, 3 caracteres');
        return;
    }

    taskAdd.push({
        task: tasks,
        done: false
    });

    const li = document.createElement('li');
    
    const input = document.createElement('input');
    input.type = 'checkbox';

    input.addEventListener('change', (event) => {
        const liTarggle = event.target.parentElement;
    
        const spanTarggle = liTarggle.querySelector('span');
    
        const done = event.target.checked;
    
        if (done) {
            spanTarggle.style.textDecoration = 'line-through';
        } // Fechando o bloco do `if` corretamente
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
    });

    span.textContent = tasks;

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    taskLista.appendChild(li);

    taskInput.value = '';
    
})