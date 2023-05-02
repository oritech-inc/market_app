/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box, SimpleGrid, Button, Image, Text, VStack, Center,
    Card, CardHeader, CardBody, CardFooter, Heading
} from '@chakra-ui/react'

function Main() {
    return (
        <SimpleGrid columns={[2, null, 3]} spacing='10px' pt={"55px"} pb={"55px"}>
            <Box height='100px'
                borderRadius={10} align='center'
            >
                <Link to='/about'>
                    <Card p={0} m={0} w="100%" h="100%" bg='#05A705' color={'white'}>
                        <CardBody p={2}>
                            <Image w='60px' mb={1} objectFit={'cover'} src='../../../public/icons/links/basket.svg' alt='basket icon' />
                            <Text fontSize="sm" pt={'4'} as="i" letterSpacing={'1px'}>BASKET</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Box>
            <Box height='100px'
                borderRadius={10} align='center'
            >
                <Link to='/about'>
                    <Card p={0} m={0} w="100%" h="100%" bg='#05A705' color={'white'}>
                        <CardBody p={2}>
                            <Image w='60px' mb={1} objectFit={'cover'} src='../../../public/icons/links/about.svg' alt='basket icon' />
                            <Text fontSize="sm" pt={'4'} as="i" letterSpacing={'1px'}>ENQUIRIES</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Box>
            <Box height='100px'
                borderRadius={10} align='center'
            >
                <Link to='/about'>
                    <Card p={0} m={0} w="100%" h="100%" bg='#05A705' color={'white'}>
                        <CardBody p={2}>
                            <Image w='60px' mb={1} objectFit={'cover'} src='../../../public/icons/links/item.svg' alt='basket icon' />
                            <Text fontSize="sm" pt={'4'} as="i" letterSpacing={'1px'}>MARKETS</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Box>
        </SimpleGrid>
    )
}

export default Main
    