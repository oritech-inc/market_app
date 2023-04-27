// import React from 'react'
import {
  Card, CardHeader, CardBody, VStack, Box, Flex, Input, Spacer, Grid, GridItem, Spinner,
  Heading, Text, Stack, StackDivider, Button, Select, Checkbox, HStack, Center
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const App = () => {
  return (
    <VStack spacing={0} align='stretch'>
      <div id="app-header">
        <Box py="1" bg='darkAlpha.800' borderColor="gray.50" borderBottom="1px">
          {renderTopBar()}
        </Box>
        <Box my="1" bg='darkAlpha.800'>
          {renderFiler()}
        </Box>
      </div>
      <div id="itemContent" >
        <Box bg='blackAlpha.300' h="100vh"
        px="1" align="center">
          <Card bg="whiteAlpha.700" borderRadius="5px" mt="2" align="center">
            <Center>
              <CardBody>
                <Spinner
                  thickness='4px'
                  speed='1s'
                  emptyColor='gray.300'
                  color='red.500'
                  size='xl'
                />
                <Spacer />
                <Text color='red.500' mt='2' textTransform='uppercase' fontWeight="500" as="h5"
                  fontStyle='italic'>
                  Please wait, Loading currently available items.
                </Text>
              </CardBody>
            </Center>
          </Card>
        </Box>

        <Box bg='blackAlpha.300' px="1" overflow="hidden" align="center">
          {cardItems()}
        </Box>
      </div>
    </VStack>
  )
}


function renderFiler() {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={-5} px={1}>
      <GridItem w='100%' textIndent={8} fontSize="18px" pt="0.5" fontWeight="700"
        textColor={'blackAlpha.700'}
        colSpan={2}>
        MARKET
      </GridItem>
      <GridItem w='100%' colSpan={3} >
        <Select placeholder='--Select Market--' size="sm" variant='flushed'
          onChange="getItems()">
          <option value='bcm'>BCM Market</option>
          <option value='pmb'>PMB Market</option>
          <option value='grp'>GP Market</option>
        </Select>
      </GridItem>
    </Grid>
  )
}
function renderTopBar() {
  return (

    <Grid templateColumns='repeat(5, 1fr)' gap={0}>
      <GridItem colSpan="1">
        <Button size="lg" leftIcon={<ArrowBackIcon />} variant="link" w="100%"
          h="100%" aria-label='Go Back'> Back</Button>
      </GridItem>
      <GridItem colSpan="4">
        <Center>
          <Heading size='lg'>Generate Quote</Heading>
        </Center>
      </GridItem>
    </Grid>
  )
}

function cardItems() {
  return (
    <VStack>
      <Box>
        <Card mt="0.5" borderRadius="0">
          <CardHeader>
            <Heading size='xs' textTransform='uppercase'>
              <Checkbox>Item 1</Checkbox>
            </Heading>
          </CardHeader>
        </Card>
      </Box>
    </VStack>
  )
}

function renderContent() {
  return (
    <Card mt="0.5" borderRadius="0">
      <CardHeader p="1">

      </CardHeader>

      <CardBody bg="0">
        <Stack divider={<StackDivider />} spacing='4'>
          <Box bg="white">
            <Heading size='xs' textTransform='uppercase'>
              <Checkbox>Item 1</Checkbox>
            </Heading>
            <Spacer />
            <HStack>
              <Box>
                <Text my='10px'>Quantity</Text>
                <Input
                  placeholder='Enter Item Quantity'

                />
              </Box>
              <Box>
                <Text my='10px'>Mass(Kg)</Text>
                <Input
                  placeholder='Enter Item Mass'

                />
              </Box>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
      <CardBody bg="0">
        <Stack divider={<StackDivider />} spacing='4'>
          <Box bg="white">
            <Heading size='xs' textTransform='uppercase'>
              <Checkbox>Item 1</Checkbox>
            </Heading>
            <Spacer />
            <HStack>
              <Box>
                <Text my='10px'>Quantity</Text>
                <Input
                  placeholder='Enter Item Quantity'

                />
              </Box>
              <Box>
                <Text my='10px'>Mass(Kg)</Text>
                <Input
                  placeholder='Enter Item Mass'

                />
              </Box>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card >
  )
}


//------------------------------------------- 
// Main content
function MainContents() {
  return (
    <Accordion allowMultiple bg={'white'} m="2" borderRadius={10} boxShadow={'lg'}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="b" flex='1' textAlign='left'>
              <Checkbox colorScheme='red' size="md">CABBAGES</Checkbox>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <HStack>
            <Box>
              <Text>Quantity *</Text>
              <Input placeholder='Total quantity'
              />
            </Box>
            <Box>
              <Text>Mass *</Text>
              <Input placeholder='Size / Weight' />
            </Box>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default App