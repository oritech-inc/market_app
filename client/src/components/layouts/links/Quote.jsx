/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Card, CardHeader, CardBody, Input, Button, Select, Checkbox,
  VStack, Box, Flex, HStack, Spacer, Grid, GridItem, Spinner,
  Heading, Text, Tooltip, Badge, Center, CardFooter, Icon,
  Stack, Show, Container, Kbd, Divider, Skeleton, SkeletonCircle, SkeletonText
} from '@chakra-ui/react'

function Quotes() {
  // let renderUI = getQuote(getData());
  return (
    <Stack my={12}>
      <VStack>
        <Box p={0} m={0}>
          <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem w='100%' colSpan={6} >
              <Tooltip hasArrow
                placement='bottom' label="Select Market from the list" aria-label='Average'>
                <Select placeholder='-- Select Market --' variant='outline' onChange={handleChange}>
                  <option value='bcm'>Buffalo City Fresh Produce Market</option>
                </Select>
              </Tooltip>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
      <span>
        {crd()}
      </span>
    </Stack>

  )
}

function getQuote(obj) {
  let str = {};
  let divs = '';

  for (let i = 0; i < obj.length; i++) {
    const element = [obj[i]];
    element.forEach(e => {

      alert(mk([e.name, e.price]))
      divs += `<div>${element}</div>`;
    })
    // alert(divs);
  }
  return divs;
}
function renderUI(obj) {
  for (let i = 0; i < obj.length; i++) {
    return obj[i];
  }
}

function mk(n) {
  return (
    <Box>
      {(n[0])} {n[1]}
    </Box>
  )
}
function crd() {
  return (
    <Box boxShadow={"inner"} my={2} mx={1.5}
      borderRadius={0} border="2px" borderColor={'#05A705'} w={"100%"} h={'100%'}>
      <Card bg={0} borderColor={0} size={'sm'}>
        <CardHeader bg={0} py={3} align="start">
          <Flex >
            <Box w='100%' >
              <Checkbox color="dark" size="lg" as="b">
                CABBAGES
              </Checkbox>
            </Box>
            <Box cursor={'pointer'}>
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Total number of stock available for this item"
                aria-label='type'
              >
                <Badge>100 In Stock</Badge>
              </Tooltip>
            </Box>
          </Flex>
        </CardHeader>
        <hr/>
        <div>
          {/* <Heading size='sm'>Prices</Heading> */}
          <Divider ml={1} w={80} />
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
        </div>
        <hr />
        <CardFooter alignItems='start'>
          <Flex minWidth='max-content' gap='2'>
            <Box as="b" color={'blue.400'} w="200px">
              Total Amount:
            </Box>
            <Box as="span">
              <Kbd py={1}>R100000.00</Kbd>
            </Box>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  )
}
function handleChange(e) {
  console.log(e.target.value)
}

function getData() {
  return (
    [
      {
        'id': 1,
        'type': 'vg',
        'name': 'Cabbages',
        'size': 20.00,
        'quantity': 30,
        'qty_unit': 'Bags',
        'price': 65.50
      },
      {
        'id': 2,
        'type': 'fr',
        'name': 'Apples',
        'size': 12.00,
        'quantity': 25,
        'qty_unit': 'Boxes',
        'price': 128.00
      }
      ,
      {
        'id': 3,
        'type': 'pt',
        'name': 'Potatoes',
        'size': 10.00,
        'quantity': 60,
        'qty_unit': 'Bags',
      },
      {
        'id': 4,
        'type': 'sq',
        'name': 'Butternut',
        'size': 10.00,
        'quantity': 60,
        'qty_unit': 'Bags',
        'price': 60.20
      }
    ]
  )
}
export default Quotes
