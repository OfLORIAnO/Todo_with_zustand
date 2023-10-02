import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { FilterType, IFilter, Store, TodoType } from './type';

const initState = [
    { id: '1', title: 'Learn Js', completed: true },
    { id: '2', title: 'Learn React', completed: false },
];

const todosStorageOptions = {
    name: 'todos',
    getStorage: () => localStorage,
};

export const useTodos = create<Store>()(
    devtools(
        persist(
            (set, get) => ({
                todos: initState,
                loading: false,
                error: null,

                addTodo: (title: TodoType['title']) => {
                    const newTodo: TodoType = { id: nanoid(), title, completed: false };
                    set({ todos: [...get().todos, newTodo] });
                },
                toggleTodo: (todoId: TodoType['id']) =>
                    set({
                        todos: get().todos.map((todo) =>
                            todo.id === todoId
                                ? { ...todo, completed: !todo.completed }
                                : todo
                        ),
                    }),
                fetchTodos: async () => {
                    set({ loading: true });
                    try {
                        const response = await fetch(
                            'https://jsonplaceholder.typicode.com/todos?_limit=10'
                        );
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }

                        set({ todos: await response.json(), error: null });
                    } catch (err) {
                        set({ error: 'Ошибка запроса' });
                    } finally {
                        set({ loading: false });
                    }
                },
            }),
            todosStorageOptions
        )
    )
);

export const userFilter = create<IFilter>((set) => ({
    filter: 'all',
    setFilter: (value: FilterType) =>
        set({
            filter: value,
        }),
}));
