/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, GridItem, Button, Center, Heading, Icon } from '@chakra-ui/react'
import { ChevronLeftIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'react-router-dom'

function SubBar() {
    return (
        <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem colSpan='1'>
                <Link to="/">
                    <Button color={'white'}
                        variant="link" w="100%"
                        h="100%" aria-label='Go Back'>
                        <Icon as={ChevronLeftIcon} fontSize='20px' />
                        BACK</Button>
                </Link>
            </GridItem>
            <GridItem colSpan="4" >

                <Center>
                    <Heading
                        as='b'
                        size='md'
                        textTransform="uppercase"
                    >
                        <span id="title"></span>
                    </Heading>
                </Center>
            </GridItem>
        </Grid>
    )
}
export default SubBar
