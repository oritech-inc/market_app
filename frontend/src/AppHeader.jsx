/* eslint-disable no-unused-vars */
import React from 'react'
import {
  VStack, Grid, GridItem, Text, Center, Tooltip
} from "@chakra-ui/react"

function AppHeader() {
  return (

    <VStack spacing={0} align='stretch'>
      <Grid templateColumns='repeat(5, 1fr)' gap={-1}>
        <GridItem colSpan="5">
          <Center>
            <Text as="h3" letterSpacing={"2px"} py={2}
              fontWeight='900' textTransform="uppercase"
              color="#05A705">
              Generate Quote
            </Text>
          </Center>
        </GridItem>
      </Grid>
    </VStack>
  )
}
export default AppHeader