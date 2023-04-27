import React from 'react'
import {
    Card, CardHeader, CardBody, Box, Flex, Input, Spacer, Grid, GridItem, Spinner,
    Heading, Text, Stack, StackDivider, Button, Select, Checkbox, HStack, Center, Badge
} from '@chakra-ui/react'

function ContentItems() {
    return (
        <Box>
            <Center>
                <Card m={1}>
                    <CardHeader py={3}>
                        <Grid templateColumns='repeat(5, 1fr)'>
                            <GridItem w={"100%"}>
                                <Checkbox>Cabbages</Checkbox>
                            </GridItem>
                            <GridItem w={"100%"}>
                                <Badge>15 bb</Badge>
                            </GridItem>
                        </Grid>
                    </CardHeader>
                </Card>
            </Center>
        </Box>
    )
}

export default ContentItems
