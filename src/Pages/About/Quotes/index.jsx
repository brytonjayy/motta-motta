import React from 'react';
import { Flex, Box, Text } from 'rebass';

import Quote from './quoteList.js';

function Quotes () {
    return (
        <Flex>

            <Box id={Quote.Marie.key}>
                <Text class="quote-text">{Quote.Marie.text}</Text>
                <Text class="quote-source">{Quote.Marie.source}</Text>
            </Box>

            <Box id={Quote.Lexi.key}>
                <Text class="quote-text"t>{Quote.Lexi.text}</Text>
                <Text class="quote-source">{Quote.Lexi.source}</Text>
            </Box>

        </Flex>
        )
    }
    
export default Quotes;