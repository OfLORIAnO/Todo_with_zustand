import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { useTodos } from '../zustand/store';
const TotalTodos: FC = () => {
    const count = useTodos((state) => state.todos.length);
    return <Text fontWeight={'bold'}>Total:{count}</Text>;
};

export default TotalTodos;
