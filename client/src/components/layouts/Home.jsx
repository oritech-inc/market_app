/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box, SimpleGrid, Button, Image, Text, VStack, Center,
    Card, CardHeader, CardBody, CardFooter, Heading
} from '@chakra-ui/react'

function Home() {
    return (
        <SimpleGrid columns={[2, null, 3]} spacing='20px' pt={"55px"} pb={"55px"}>
            <Box height='150px'
                borderRadius={10} align='center'
            >
                <Link to='/quotes' bg={0}>
                    <Card p={0} m={0} w="100%" h="100%" border='1px'
                        borderColor={'#05A705'} 
                        background={'rgba(5, 167, 5,0.8)'} 
                        color={'#fff'}
                        boxShadow={'dark-lg'}
                        _hover={{
                            boxShadow: 'inner',
                            background: '#05A705',
                            color: 'white'
                        }}
                        >
                        <CardBody py={4} px={2}>
                            <Image w='100px' opacity={0.9} mb={1} objectFit={'cover'} src='/icons/links/basket.svg' alt='basket icon' />
                            <Text fontSize="sm" py={'5'} textTransform="capitalize"
                                as="b" letterSpacing={'1px'}>Generate Quote</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Box>
            {/* <Box height='100px'
                borderRadius={10} align='center'
            >
                <Link to='/enquiry'>
                    <Card p={0} m={0} w="100%" h="100%" border='1px'
                        borderColor={'#05A705'} 
                        background={'#05A705'} 
                        color={'#fff'}
                        boxShadow={'dark-lg'}
                        >
                        <CardBody p={2}>
                            <Image w='60px' mb={1} objectFit={'cover'} src='/icons/links/about.svg' alt='basket icon' />
                            <Text fontSize="sm" pt={'5'} textTransform="capitalize"
                                as="b" letterSpacing={'1px'}>ENQUIRIES</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Box>
            <Box height='100px'
                borderRadius={10} align='center'
            >
                <Link to='/items'>
                    <Card p={0} m={0} w="100%" h="100%" border='1px'
                        borderColor={'#05A705'} 
                        background={'#05A705'} 
                        color={'#fff'}
                        boxShadow={'dark-lg'}
                        >
                        <CardBody p={2}>
                            <Image w='60px' mb={1} objectFit={'cover'} src='/icons/links/item.svg' alt='basket icon' />
                            <Text fontSize="sm" pt={'5'} textTransform="capitalize"
                                as="b" letterSpacing={'1px'}>MARKETS</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Box> */}
            
        </SimpleGrid>
    )
}

export default Home
