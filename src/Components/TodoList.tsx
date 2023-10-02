import { FC } from 'react';
import { Checkbox, HStack, Stack, Text } from '@chakra-ui/react';
import { TodoType } from '../zustand/type';
import { useTodos, userFilter } from '../zustand/store';

const Todo: FC<TodoType> = ({ id, title, completed }) => {
    const toggleTodo = useTodos((state) => state.toggleTodo);
    return (
        <HStack spacing={4}>
            <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
            <Text>{title}</Text>
        </HStack>
    );
};

const TodoList = () => {
    const filter = userFilter((state) => state.filter);
    const todos = useTodos((state) => {
        switch (filter) {
            case 'completed':
                return state.todos.filter((todo) => todo.completed);
            case 'uncompleted':
                return state.todos.filter((todo) => !todo.completed);
            default:
                return state.todos;
        }
    });

    return (
        <Stack minH={'300px'}>
            {todos.map((todo) => {
                return <Todo key={todo.id} {...todo} />;
            })}
        </Stack>
    );
};
export default TodoList;
