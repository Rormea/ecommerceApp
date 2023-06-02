
import { FC } from 'react';
import { iSize } from '../../interfaces';
import { Box, Button } from '@mui/material';


interface Props {
    selectSize?: iSize;
    sizes: iSize[];
}

export const SizeSelector: FC<Props> = ({ selectSize, sizes }) => {
    return (
        <Box>
            {
                sizes.map(size => (
                    <Button key={size} size='small'  /*color={selectSize === size ? 'primary' : 'info'}*/>
                        {size}
                    </Button>
                ))
            }
        </Box>
    )
}
