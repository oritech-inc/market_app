/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import {
  Card, CardHeader, CardBody, Input, Button, Select, Checkbox,
  VStack, Box, Flex, HStack, Spacer, Grid, GridItem, Spinner,
  Heading, Text, Tooltip, Badge, Center, CardFooter, Icon,
  Stack, Show, Container, Kbd, Divider, Skeleton, SkeletonCircle, SkeletonText
} from '@chakra-ui/react'
import { ArrowForwardIcon, QuestionIcon } from '@chakra-ui/icons'
import AppHeader from './AppHeader';
import SelectForm from './components/forms/SelectForm';
import AppContent from './AppContent';
import AppFooter from './AppFooter';


function App() {

  // const [isLoaded, setIsLoaded] = React.useState(false)
  let db_obj = getCommodities();
  let str = [];
  let ch = [];
  
  if (db_obj.length > 0) {
    for (let i = 0; i < db_obj.length; i++) {
      const element = db_obj[i];
        str["header"] = [element.name, element.type, element.quantity, element.qty_unit];
        str["body"] = [element.size, element.price];
    CreateCard(str);
    }
    return (

      <main id="app-root">

        <header id="head-content">
          <AppHeader />
          <SelectForm />
        </header>

        <section id="main-content">
          <AppContent/>
        </section>

        <footer id="foot-content">
        <AppFooter />
      </footer> 

      </main>
    )
  }
  else {
    alert("null ");
  }

}

// function renderApp(obj) {

// }

function getCommodities() {
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

//------------------------------------------- 
// Render Menu Bar
function AppHeading() {
  return (
    <VStack spacing={0} align='stretch' boxShadow='inner'>
      <Box my="">
        <Grid templateColumns='repeat(5, 1fr)' gap={-1}>
          <GridItem colSpan="5">
            <Center>
              <Heading as="h5" letterSpacing={"2px"} py={1}
                fontWeight='700' textTransform="uppercase"
                color="#05A705">
                Generate Quote
              </Heading>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  )
}

function AppContents() {
  if (itemList.length > 0) {
    const myList = itemList.map(
      (item) => <>{CreateCard(item)}</>
    )
    const container = document.getElementById('main-content');
    const root = ReactDOM.createRoot(container);

    root.render(myList);

    // for (let i = 0; i < itemList.length; i++) {
    //   const item = itemList[i];
    // }
  } else {
    alert("null ")
  }
  // return (
  //   <Box boxShadow={"inner"} my={2} mx={1.5}
  //     borderRadius={0} border="2px" borderColor={'teal'} w={"100%"} h={'100%'}>
  //     <Card bg={0} borderColor={0} size={'sm'}>
  //       <CardHeader bg={0} py={3}>
  //         <Flex >
  //           <Box w='100%'>
  //             <Checkbox color="dark" size="lg" as="b">
  //               CABBAGES
  //             </Checkbox>
  //           </Box>
  //           <Box cursor={'pointer'}>
  //             <Tooltip bg="#05A705" color={'white'} hasArrow
  //               placement='top' label="Total number of stock available for this item"
  //               aria-label='type'
  //             >
  //               <Badge>1000 Stock</Badge>
  //             </Tooltip>
  //           </Box>
  //         </Flex>
  //       </CardHeader>
  //       <div>
  //         <CardBody py={3} px={2}>
  //           <HStack>
  //             <Box>
  //               <Text as="b" color={'blackAlpha.800'}>Quantity*</Text>
  //               <Tooltip bg="green" color={'white'} hasArrow placement='bottom'
  //                 label="" aria-label='quantity'>
  //                 <Input size={'sm'} placeholder='Number of items' />
  //               </Tooltip>
  //             </Box>
  //             <Box>
  //               <Text as="b" color={'blackAlpha.800'}>Mass*</Text>
  //               <Tooltip bg="green" color={'white'} hasArrow placement='bottom'
  //                 label="" aria-label='mass'>
  //                 <Input size={'sm'} placeholder='Size/weight of items' />
  //               </Tooltip>
  //             </Box>
  //           </HStack>
  //         </CardBody>
  //       </div>
  //       <Heading size='sm' mx={1} py={2}>Description</Heading>
  //       <Divider ml={1} w={80} />
  //       <Grid templateColumns='repeat(3, 1fr)' align="center" gap={0}>
  //         <GridItem w='100%' colSpan={1} cursor={'pointer'}>
  //           <Tooltip bg="green" color={'white'} hasArrow placement='bottom' label="Minimum selling price per item" aria-label='Lowest'>
  //             <Badge colorScheme='teal' borderRadius={0} w={'100%'} h={'100%'}
  //               variant={"outline"} pt={0.5} as={'h6'} size={'sm'}>
  //               Lower<br /> 50.00
  //             </Badge>
  //           </Tooltip>
  //         </GridItem>
  //         <GridItem w='100%' colSpan={1} cursor={'pointer'}>
  //           <Tooltip bg="green" color={'white'} hasArrow placement='bottom' label="Average selling price per item" aria-label='Average'>
  //             <Badge colorScheme='green' borderRadius={0} w={'100%'} h={'100%'}
  //               variant={"solid"} pt={0.5} as={'h6'} size={'sm'}>
  //               Average<br /> 50.06
  //             </Badge>
  //           </Tooltip>
  //         </GridItem>
  //         <GridItem w='100%' colSpan={1} cursor={'pointer'}>
  //           <Tooltip bg="green" color={'white'} hasArrow placement='bottom' label="Maximum selling price per item" aria-label='highest'>
  //             <Badge colorScheme='teal' borderRadius={0} w={'100%'} h={'100%'}
  //               variant={"outline"} pt={0.5} as={'h6'} size={'sm'}>
  //               Higher<br /> 50.50
  //             </Badge>
  //           </Tooltip>
  //         </GridItem>
  //       </Grid>
  //       <hr />
  //       <CardFooter >
  //         <Flex minWidth='max-content' alignItems='center' gap='2'>
  //           <Box as="b" color={'blue.400'} w="200px">
  //             Total Amount:
  //           </Box>
  //           <Box as="span">
  //             <Kbd py={1}>R100000.00</Kbd>
  //           </Box>
  //         </Flex>
  //       </CardFooter>
  //     </Card>
  //   </Box>
  // )
}

function CreateCard(i) {
  return (
    <Box boxShadow={"inner"} my={2} mx={1.5}
      borderRadius={0} border="2px" borderColor={'teal'} w={"100%"} h={'100%'}>
      <Card bg={0} borderColor={0} size={'sm'}>
        <CardHeader bg={0} py={3}>
          <Flex >
            <Box w='100%'>
              <Checkbox color="dark" size="lg" as="b">
                {i[0]}
              </Checkbox>
            </Box>
            <Box cursor={'pointer'}>
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Total number of stock available for this item"
                aria-label='type'
              >
                <Badge>1000 Stock</Badge>
              </Tooltip>
            </Box>
          </Flex>
        </CardHeader>
      </Card>
    </Box>
  )
}

function AppForm() {
  return (
    <Box>
      <Grid templateColumns='repeat(6, 1fr)' gap={1} px={1} py={1.5}>
        <GridItem w='100%' colSpan={6} >
          <Tooltip bg="#05A705" color={'white'} hasArrow
            placement='bottom' label="Select Market from the list" aria-label='Average'>
            <Select placeholder='-- Select Market --' size="md" variant='filled' onChange={handleChange}>
              <option value='bcm'>Buffalo City Fresh Produce Market</option>
            </Select>
          </Tooltip>
        </GridItem>
      </Grid>
    </Box>
  )
}

function AppFooters() {
  return (
    <Button m="2" w="150px" size={'md'} rightIcon={<ArrowForwardIcon />}
      bg='#05A705' color="white" variant='solid' align="end">
      SUBMIT
    </Button>
  )
}

function handleChange(event) {
  const v = event.target.value;

  if (v !== "" || v !== null) {
    addValue(v);
    alert(v)
  }
}

function addValue(v) {
  for (var i = 0; i < itemList.length; i++) {
    if (itemList[i] === v) {
      itemList.pop(v);
    } else {
      itemList.push(v);
    }
  }

}

export default App