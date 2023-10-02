import { FC } from 'react';
import { VStack, Divider } from '@chakra-ui/react';
import './App.css';
import './reset.css';
import Filter from './Components/Filter';
import TodoList from './Components/TodoList';
import TotalTodos from './Components/TotalTodos';
import NewTodo from './Components/NewTodo';
import FetchTodos from './Components/FetchTodos';

const App: FC = () => {
    return (
        <VStack spacing={4}>
            <Filter />
            <TodoList />
            <Divider />
            <TotalTodos />
            <NewTodo />
            <FetchTodos />
        </VStack>
    );
};

export default App;
