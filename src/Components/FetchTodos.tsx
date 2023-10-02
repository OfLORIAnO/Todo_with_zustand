import { FC } from 'react';
import { useTodos } from '../zustand/store';
import { Button } from '@chakra-ui/react';
import { shallow } from 'zustand/shallow';


const FetchTodos: FC = () => {
    const { loading, error, fetchTodos } = useTodos(
        (state) => ({
            loading: state.loading,
            error: state.error,
            fetchTodos: state.fetchTodos,
        }),
        shallow
    );

    return (
        <Button onClick={fetchTodos} isLoading={loading}>
            {!error ? 'Get Todos' : error}{' '}
        </Button>
    );
};

export default FetchTodos;
