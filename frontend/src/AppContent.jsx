/* eslint-disable no-unused-vars */
import React from 'react'
import {
    HStack, Box, Flex, Card, CardHeader, CardBody, CardFooter, Input, Button, Kbd,
    Select, Checkbox, Tooltip, Badge, Text, Heading, Divider, Grid, GridItem, Spacer
} from "@chakra-ui/react"
import QuoteHeader from './components/content/cards/QuoteHeader'
import QuoteBody from './components/content/cards/QuoteBody'

function AppContent() {
    return (
        <Box
            boxShadow={"dark-lg"}
            my={3}
            bg={'white'}
        >
            {/* <Card
                bg={0}
                borderColor={0}
                size={'sm'}
            >
                <CardHeader py={2}>
                    <QuoteHeader />
                </CardHeader>
                <CardBody>
                    <QuoteBody />   
                </CardBody>
            </Card> */}
            <CreateContentElement />
        </Box>
    )

}

function CreateContentElement() {
    return (
        <Card bg={0} borderColor={0} size={'sm'}>
            <CardHeader bg={0} py={3}>
                <Flex >
                    <Box w='100%'>
                        <Checkbox color="dark" size="lg" as="b">
                            CABBAGES
                        </Checkbox>
                    </Box>
                    
                </Flex>
            </CardHeader>
            <Divider />
            <CardBody py={3} px={2}>
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
            </CardBody>
            <hr/>
            <Grid templateColumns='repeat(3, 1fr)' align="center" gap={0}>
                <GridItem w='100%' colSpan={1} cursor={'pointer'}>
                    <Tooltip bg="green" color={'white'} hasArrow placement='bottom' label="Minimum selling price per item" aria-label='Lowest'>
                        <Badge colorScheme='teal' borderRadius={0} w={'100%'} h={'100%'}
                            variant={"outline"} pt={0.5} as={'h6'} size={'sm'}>
                            Lower<br /> 50.00
                        </Badge>
                    </Tooltip>
                </GridItem>
                <GridItem w='100%' colSpan={1} cursor={'pointer'}>
                    <Tooltip bg="green" color={'white'} hasArrow placement='bottom' label="Average selling price per item" aria-label='Average'>
                        <Badge colorScheme='green' borderRadius={0} w={'100%'} h={'100%'}
                            variant={"solid"} pt={0.5} as={'h6'} size={'sm'}>
                            Average<br /> 50.06
                        </Badge>
                    </Tooltip>
                </GridItem>
                <GridItem w='100%' colSpan={1} cursor={'pointer'}>
                    <Tooltip bg="green" color={'white'} hasArrow placement='bottom' label="Maximum selling price per item" aria-label='highest'>
                        <Badge colorScheme='teal' borderRadius={0} w={'100%'} h={'100%'}
                            variant={"outline"} pt={0.5} as={'h6'} size={'sm'}>
                            Higher<br /> 50.50
                        </Badge>
                    </Tooltip>
                </GridItem>
            </Grid>
            <hr />
            <CardFooter >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box as="b" color={'blue.400'} w="200px">
                        Total Amount:
                    </Box>
                    <Box as="span">
                        <Kbd py={1}>R100000.00</Kbd>
                    </Box>
                </Flex>
            </CardFooter>
        </Card>
    )
}

function mkCardHeader() {
    return (
        <CardHeader py={2}>
            <QuoteHeader />
        </CardHeader>
    )
}

export default AppContent