/* eslint-disable no-unused-vars */
import React from 'react'
import {
    HStack, Box, Tooltip, Input, Button, Text,
} from '@chakra-ui/react'

function QuoteBody() {
    return (
        <HStack>
            <Box>
                <Text as="b" color={'blackAlpha.800'}>Quantity*</Text>
                <Tooltip bg="green" color={'white'} hasArrow placement='bottom'
                    label="" aria-label='quantity'>
                    <Input size={'sm'} placeholder='Number of items' />
                </Tooltip>
            </Box>
            <Box>
                <Text as="b" color={'blackAlpha.800'}>Mass*</Text>
                <Tooltip bg="green" color={'white'} hasArrow placement='bottom'
                    label="" aria-label='mass'>
                    <Input size={'sm'} placeholder='Size/weight of items' />
                </Tooltip>
            </Box>
        </HStack>
    )
}

export default QuoteBody
