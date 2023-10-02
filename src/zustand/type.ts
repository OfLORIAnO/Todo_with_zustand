export type TodoType = {
    id: string;
    title: string;
    completed: boolean;
};

export type FilterType = 'completed' | 'uncompleted' | 'all';

export interface Store {
    todos: TodoType[];
    loading: boolean;
    error: string | null;
    addTodo: (title: TodoType['title']) => void;
    toggleTodo: (todoId: TodoType['id']) => void;
    fetchTodos: () => void;
}

export interface IFilter {
    filter: FilterType;
    setFilter: (value: FilterType) => void;
}
