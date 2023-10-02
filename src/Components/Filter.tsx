import { FC } from 'react';

import { Button, Stack } from '@chakra-ui/react';
import { userFilter } from '../zustand/store';
// import { FilterType } from '../zustand/type';
const Filter: FC = () => {
    const { filter, setFilter } = userFilter();

    return (
        <Stack spacing={2} direction='row' mt='8px'>
            <Button onClick={() => setFilter('all')} isDisabled={filter === 'all'}>
                All
            </Button>
            <Button
                onClick={() => setFilter('uncompleted')}
                isDisabled={filter === 'uncompleted'}
            >
                Not completed
            </Button>
            <Button
                onClick={() => setFilter('completed')}
                isDisabled={filter === 'completed'}
            >
                Completed
            </Button>
        </Stack>
    );
};
export default Filter;
