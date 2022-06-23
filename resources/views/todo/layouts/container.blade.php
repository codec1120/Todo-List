<!-- component -->
<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-gray font-bold font-base">TO DO LIST</h1>
            <div class="flex mt-4">
                @include('todo.components.nav')
            </div>
            <div class="flex mt-4">
                @include('todo.components.todo-table', ['tbodyId' => 'tbody-todos'])
            </div>
            <div class="py-4">
                <div class="w-full border-t border-gray-light"></div>
            </div>
            <div class="mt-4">
                <label class="block font-bold text-gray text-sm font-bold mb-2" for="username">
                    Add TO DO
                </label>
                <input class="shadow appearance-none border-gray-light rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="" id="todo">
            </div>
            <div class="mt-4">
                <label class="block font-bold text-gray text-sm font-bold mb-2" for="username">
                    Category
                </label>
                <select id="categories" class="bg-white border-gray-light shadow appearance-none w-1/2 p-2.5 rounded">
                    <option selected>Choose category</option>
                </select>
                <button class="flex-no-shrink p-2 border-2 rounded text-white bg-gray-dark border-gray-light hover:text-gray-dark hover:bg-white w-1/3" id="addTodoBtn">Add TODO</button>
            </div>
            <div class="py-4 mt-4">
                <div class="w-full border-t border-gray"></div>
            </div>
            <h1 class="text-gray font-bold font-base">CATEGORIES</h1>
            <div class=" mt-4">
                <label class="block font-bold text-gray text-sm font-bold mb-2" for="category">
                    Add Category
                </label>
                <div class="flex">
                    <input class="shadow appearance-none border-gray-light rounded w-1/2 py-2 px-3 mr-4 text-grey-darker" placeholder="" id="category">
                    <button class="flex-no-shrink p-2 border-2 rounded text-white bg-gray-dark border-gray-light hover:text-gray-dark hover:bg-white w-1/2" id="addCategory">Add Category</button>
                </div>
            </div>
            <div class="flex mt-4">
                @include('todo.components.categories-table')
            </div>
        </div>
    </div>
</div>