const axios = require('axios').default;

function getCategories() {
    return axios.get('/api/todo/getCategories')
        .then(function (response) {
           return response.data.data;
        })
        .catch(function (error) {
            return response.error;
        });   
}

function createCategory(params) {
    return axios.post('/api/todo/category', params)
        .then(function (response) {
           return response.message;
        })
        .catch(function (error) {
            return response.error;
        });   
}

function deleteCategory(id) {
    return axios.delete(`/api/todo/category/${id}`)
        .then(function (response) {
           return response.data.message;
        })
        .catch(function (error) {
            return response.error;
        });   
}

export {
    getCategories,
    createCategory,
    deleteCategory
};