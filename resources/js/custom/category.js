const { forEach } = require("lodash");

import {
    createCategory,
    deleteCategory
} from '../API/category';

import { menu } from './menu';

// Buttons
const ADD_CATEGORY = document.getElementById('addCategory');

// Fields
const CATEGORY_FIELD = document.getElementById('category')

// Add CATEGORY EVENT
ADD_CATEGORY.addEventListener('click', async() => {
    await createCategory({ title: CATEGORY_FIELD.value})
    menu()
    resetFields()
});

// functions
function categoryLists (menus) {
    const CATEGORY = document.getElementById('categories')
    const TBODY = document.getElementById('categories-table-body')

    // Remove Default Element
    CATEGORY.innerHTML = '';
    TBODY.innerHTML = '';

    forEach(menus, item => {
        // This will except -1 value or the All Option
        if (item.id > 0) {
            // Create Option element
            const OPTION = document.createElement('OPTION')
            OPTION.setAttribute("value", item.id)
            const OPTION_TEXT_NODE = document.createTextNode(item.title)
            OPTION.append(OPTION_TEXT_NODE)

            CATEGORY.append(OPTION)

            // Append 
            const ROW = document.createElement('tr')
            const DATA = document.createElement('td')
            DATA.classList.add('inline-flex')
            DATA.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-lg mr-2 cursor-pointer" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>${item.title}`

            DATA.addEventListener('click', () => {
                removeCategory(item.id);
            })

            ROW.append(DATA)

            TBODY.append(ROW)
        }
    });
}

function resetFields(){
    CATEGORY_FIELD.value = ''
}
// Api CAll function
async function removeCategory (id) {
   deleteCategory(id)
   menu()
   resetFields()
}

export {
    categoryLists
};