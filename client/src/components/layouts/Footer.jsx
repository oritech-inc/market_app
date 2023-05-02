/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, GridItem, Text, Center} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
function Header() {
    return (
        <Grid templateColumns='repeat(6, 1fr)' gap={0}>
            <GridItem colSpan="6">
                <Center>
                    <Text size='xs' color={'whiteAlpha.500'}>
                        FMS &copy; 2023
                    </Text>
                </Center>
            </GridItem>
        </Grid>
    )
}

export default Header
