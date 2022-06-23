const { forEach } = require("lodash");

import {
    deleteTodo,
    createTodo,
    getTodo,
    changeTodoStatus
} from '../API/todo';
import { menu } from './menu';

// Buttons
const ADD_TODO = document.getElementById('addTodoBtn');

// Fields
const TODO_FIELD = document.getElementById('todo')
const CATEGORIES_OPTION = document.getElementById('categories')

// Add CATEGORY EVENT
ADD_TODO.addEventListener('click', async() => {
    await addTodo()
    resetFields()
});

function resetFields(){
    TODO_FIELD.value = ''
    displayTodo();
}

async function displayTodo (value) {
    const TBODY = document.getElementById('todo-table-body')
    const TODOS = await getTodo(value);

    TBODY.innerHTML = '';

        forEach(TODOS, item => {
            const ROW = document.createElement('tr')
            ROW.classList.add('flex')
            const DATA = document.createElement('td')
            DATA.classList.add('w-full', 'flex', 'items-center')
            const DATA_SVG = document.createElement('td')
            DATA_SVG.classList.add('w-auto')
            
            // Check if To Do is Done
            if (item.checked) {
                DATA.innerHTML = `<input id="todoDone-${item.id}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2" checked><span class="line-through">${item.title}</span>`;
            } else {
                DATA.innerHTML = `<input id="todoDone-${item.id}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"><span>${item.title}</span>`;
            }
            

            DATA_SVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="svgDelete" width="16" height="16" fill="currentColor" class="bi bi-x-lg cursor-pointer" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>`;

            ROW.append(DATA, DATA_SVG)

            TBODY.append(ROW)

            DATA_SVG.addEventListener('click', (value) => {
                removeTodo(item.id, value);
            })

            document.getElementById(`todoDone-${item.id}`).addEventListener('change', async(value) => {
                await updateTodoStatus(item.id, value.target.checked)
            })
            
        });
}


async function addTodo () {
    await createTodo({ title: TODO_FIELD.value, category_id: CATEGORIES_OPTION.value});
    resetFields()
}

async function removeTodo (id) {
    await deleteTodo(id)
    resetFields()
}

async function updateTodoStatus (id, checked) {
    await changeTodoStatus(id, { checked: checked })
    resetFields()
}

export {
    displayTodo
};

