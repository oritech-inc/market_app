// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client';
import {
  Card, CardHeader, CardBody, Input, Button, Select, Checkbox,
  VStack, Box, Flex, HStack, Spacer, Grid, GridItem, Spinner,
  Heading, Text, Tooltip, Badge, Center, CardFooter
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

let itemList = [];
// const [items, setItems] = useState();

function App() {

  return (
    <main id="app-content">
      <div id='head-content'>
        {renderMenuBar()}
      </div>
      <div id='main-content'>
        <Center>
          {renderMainContent()}
        </Center>
      </div>
      <div id='foot-content'>
        <Button w="150px" size={'sm'} rightIcon={<ArrowForwardIcon />}
          bg='#05A705' color="white" variant='solid'>
          Call us
        </Button>
      </div>
    </main>
  )
}

//------------------------------------------- 
// Render Menu Bar
function renderMenuBar() {
  return (
    <VStack spacing={0} align='stretch' boxShadow='inner'>
      <Box my="">
        <Grid templateColumns='repeat(5, 1fr)' gap={-1}>
          <GridItem colSpan="5">
            <Center>
              <Heading as="h5" letterSpacing={"2px"} py={1}
                fontWeight='600' textTransform="capitalize"
                color="#05A705">
                Generate Quote
              </Heading>
            </Center>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns='repeat(6, 1fr)' gap={1} px={1} py={1.5}>
          {/* <GridItem w='100%' textIndent={1} fontSize="17px"
            pt="2" fontWeight="700"
            textColor={'red.700'}
            colSpan={1}>
            MARKET:
          </GridItem> */}
          <GridItem w='100%' colSpan={6} >

            <Tooltip bg="#05A705" color={'white'} hasArrow
              placement='bottom' label="Select Market from the list" 
              aria-label='Average'
            >
              <Select placeholder='-- Select Market --' size="md"
                variant='outline' onChange={handleChange}
              >
                <option value='bcm'>Buffalo City Fresh Produce Market</option>
                <option value='rec'>RSA Eastern Cape</option>
                <option value='nef'>North End Fresh Produce Market</option>
                <option value='gbf'>Gqeberha Fresh Produce Market</option>
              </Select>
            </Tooltip>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  )
}

function renderMainContent() {

  return (
    <Box>
      <Card m={2} boxShadow={"xl"}>
        <CardHeader py={3}>
          <Flex >
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Click to select commodity" aria-label='Average'
              >
            <Box w='100%' as="b">
                <Checkbox size="lg">CABBAGES</Checkbox>
            </Box>
              </Tooltip>
            <Box>
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Commodity Type"
                aria-label='type'
              >
                <Badge size="md">
                  FR
                </Badge>
              </Tooltip>
            </Box>
          </Flex>
        </CardHeader>
        <hr />
        <CardBody py={5} px={2}>
          <HStack>
            <Box>
              <Tooltip bg="#05A705" color={'white'} hasArrow placement='top'
                label="Enter the total number of items required"
                aria-label='Quantity'>
                <Input placeholder='Quantity*' />
              </Tooltip>
            </Box>
            <Box>
              <Tooltip bg="#05A705" color={'white'} hasArrow placement='top'
                label="Enter the total mass/weight/size required"
                aria-label='Weight'>
                <Input placeholder='Weight*' />
              </Tooltip>
            </Box>
          </HStack>
        </CardBody>
        <hr />
        <CardFooter m={1} p={1} >
          {/* <Flex>
            <Box p='2' w="270px">
              <Heading size='md' color='red.500'>Total Amount:</Heading>
            </Box>
            <Box flex='1'>
              <Button variant='outline' w="80px" disabled
                _hover={{ cursor: 'text' }}
              >
                R0.00
              </Button>
            </Box>
          </Flex> */}

          <Grid templateColumns='repeat(3, 1fr)' gap={2}>
            <GridItem w='100%' h='10' colSpan={1} >
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Minimum selling price per item" aria-label='Lowest'
              >
                <Badge colorScheme='yellow' variant={"outline"} borderRadius={'2xl'} p={1.5}>
                  LOW: R50.00
                </Badge>
              </Tooltip>
            </GridItem>
            <GridItem w='100%' h='10' colSpan={1} >
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Maximum selling price per item" aria-label='highest'
              >
                <Badge colorScheme='red' variant={"outline"} borderRadius={'2xl'} p={1.5}>
                  HIGH: R50.50
                </Badge>
              </Tooltip>
            </GridItem>
            <GridItem w='100%' h='10' colSpan={1} >
              <Tooltip bg="#05A705" color={'white'} hasArrow
                placement='top' label="Average selling price per item" aria-label='Average'
              >
                <Badge colorScheme='green' variant={"outline"} borderRadius={'2xl'} p={1.5}>
                  AVERAGE: R50.06
                </Badge>
              </Tooltip>
            </GridItem>
          </Grid>
        </CardFooter>
      </Card>
    </Box>
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

function nullContent() {
  return (
    <Box py={2} px={1} align="center">
      <Card bg="whiteAlpha.700" borderRadius="5px" align="center">
        <Center>
          <CardBody>
            <Spinner
              thickness='4px'
              speed='0.5s'
              emptyColor='blackAlpha.100'
              color='red.500'
              size='xl'
            />
            <Spacer />
            <Text color='red.500' mt='2' textTransform='uppercase' fontWeight="500" as="h6"
              fontStyle='italic'>
              Please wait, Loading currently available items.
            </Text>
          </CardBody>
        </Center>
      </Card>
    </Box>
  )
}

export default App