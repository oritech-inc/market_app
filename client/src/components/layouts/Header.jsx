/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, GridItem, Button, Center, Heading, Icon, VStack } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import SideBar from './../../components/layouts/header/SideBar'
function Header() {

    return (
        <VStack color={'#fff'} align='stretch'>
            <SideBar />
        </VStack>
    )
    
    // if (window.location.pathname === '/') {
    //     return (
    //         <VStack color={'#fff'} align='stretch'>
    //             <SideBar />
    //         </VStack>
    //     )
    // }
    // else {
    //     return (
    //         <VStack color={'#fff'} align='stretch'>
    //             <SideBar />
    //             {SubBar()}
    //         </VStack>
    //     )
    // }
}

function SubBar() {
    return (
        <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem colSpan='1'>
                <Link to="/">
                    <Button color={'white'}
                        variant="link" w="100%"
                        h="100%" aria-label='Go Back'
                    >
                        <Icon as={ChevronLeftIcon} fontSize='20px' />
                        BACK
                    </Button>
                </Link>
            </GridItem>
            <GridItem colSpan="4" >

                <Center>
                    <Heading
                        as='b'
                        size='md'
                        textTransform="uppercase"
                    >
                        <span id="title">
                            {window.location.pathname.split('/')[1]}
                        </span>
                    </Heading>
                </Center>
            </GridItem>
        </Grid>
    )
}

export default Header
