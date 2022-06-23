const axios = require('axios').default;

function getTodo(category_id) {
    return axios.get('/api/todo/todos', {
            params: {
                category_id: category_id
            }
        })
        .then(function (response) {
           return response.data.data;
        })
        .catch(function (error) {
            return response.error;
        });   
}

function createTodo(params) {
    return axios.post('/api/todo/todos', params)
        .then(function (response) {
           return response.message;
        })
        .catch(function (error) {
            return response.error;
        });   
}

function deleteTodo(id) {
    return axios.delete(`/api/todo/todos/${id}`)
        .then(function (response) {
           return response.data.message;
        })
        .catch(function (error) {
            return response.error;
        });   
}

function changeTodoStatus(id, params) {
    return axios.put(`/api/todo/todos/${id}`, params)
        .then(function (response) {
           return response.data.message;
        })
        .catch(function (error) {
            return response.error;
        });   
}

export {
    changeTodoStatus,
    deleteTodo,
    createTodo,
    getTodo
};