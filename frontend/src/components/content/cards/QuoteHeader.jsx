/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Flex, Checkbox, Badge, Tooltip } from "@chakra-ui/react";

function QuoteHeader() {
    return (
        <Flex>
            <Box w='100%'>
                <Checkbox color="dark" size="lg" as="b">
                    CABBAGES
                </Checkbox>
            </Box>
            <Box cursor={'pointer'}>
                <Tooltip bg="#05A705"
                    color={'white'} hasArrow
                    placement='top' label="Total number of stock available for this item"
                    aria-label='type'
                >
                    <Badge>1000 Stock</Badge>
                </Tooltip>
            </Box>
        </Flex>
    )
}

export default QuoteHeader
