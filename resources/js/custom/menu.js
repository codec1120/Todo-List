import {categoryLists} from './category';

import {displayTodo} from './todo';

 import {getCategories} from '../API/category';

const { forEach } = require("lodash");

let Menu = [];

// Define Breadcrum OL
const BREADCRUMB_OL = document.getElementById('breadcrumb-ol')

async function menu() {
    BREADCRUMB_OL.innerHTML = '';
    // Get all available categories
    Menu = await getCategories();
    Menu.push({ 'title': 'All', 'id': -1 });
    
    forEach(Menu, (item,index) => {
        // Create Link element
        const LIST = document.createElement('li')
        LIST.classList.add('inline-flex', 'items-center');

        const LINK = document.createElement('a')
        LINK.title = item.title
        if (item.id < 0) {
            LINK.classList.add('inline-flex', 'items-center', 'text-sm', 'font-medium', 'text-blue', 'hover:text-blue', 'cursor-pointer')
        } else {
            LINK.classList.add('inline-flex', 'items-center', 'text-sm', 'font-medium', 'text-black', 'hover:text-blue', 'cursor-pointer')
        }     
        LINK.id = item.id;   

        // Create TextNode for Link
        const LinkText = document.createTextNode(item.title)
        LINK.append(LinkText)
        

        LIST.append(LINK);

        BREADCRUMB_OL.append(LIST)

        // Add Event click
        LINK.addEventListener('click',async () => {
            await displayTodo(item.id);
            
            // Remove Active Identifier
            forEach(document.querySelectorAll('#breadcrumb-ol li'), linkItem => {
                linkItem.firstChild.classList.remove('text-blue')
                linkItem.firstChild.classList.add('text-black')
            });

            document.getElementById(item.id).classList.add('text-blue')
        });

        // Create a divider
        if (item.id > 0 && (Menu.length -1) !== index) {
            const LINK_DIVIDER = document.createElement('a')
            LINK_DIVIDER.classList.add('inline-flex', 'items-center')
            const LINK_SPAN = document.createElement('span')
            const LINK_SPAN_TEXT_NODE = document.createTextNode('|')
            LINK_SPAN.classList.add('inline-flex', 'items-end', 'text-sm', 'font-medium', 'ml-2', 'mr-2')
            
            LINK_SPAN.append(LINK_SPAN_TEXT_NODE)

            LINK_DIVIDER.append(LINK_SPAN)

            LIST.append(LINK_DIVIDER);
        }
    });

    // Call Category Select Option
    categoryLists(Menu)
}

export {
    menu
};