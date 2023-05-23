/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Grid, GridItem, Button, Stack, Center, useDisclosure, HStack, Badge,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
function Header() {
    return (
        <Grid templateColumns='repeat(6, 1fr)' gap={0}>
            <GridItem>
                {ButtonUI()}
            </GridItem>
        </Grid>
    )
}

function ButtonUI() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Stack direction='column' spacing={4}>
            <Button onClick={onOpen} rightIcon={<ArrowForwardIcon />} size='sm' colorScheme='green' rounded={'full'} variant='solid'>
                CONTINUE
            </Button>
            <Modal isOpen={isOpen} size='full' onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Generate Quote</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {modalTable()}
                    </ModalBody>

                    <ModalFooter>
                        <HStack>
                            <Button colorScheme='blue' onClick={onClose}>
                                Edit
                            </Button>
                            <Button variant='solid' colorScheme={'teal'}>Save</Button>
                            <Button variant='solid' colorScheme={'green'}>Email</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}


function modalTable() {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Description</Th>
                        <Th>Mass</Th>
                        <Th>Quantity</Th>
                        <Th>Average</Th>
                        <Th>Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Cabbages</Td>
                        <Td>20 Kg</Td>
                        <Td>30 </Td>
                        <Td>135.84</Td>
                        <Td>4075.20</Td>
                    </Tr>
                    <Tr>
                        <Td>Apples</Td>
                        <Td>12 Kg</Td>
                        <Td>25 </Td>
                        <Td>128.06</Td>
                        <Td>3200.00</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th colSpan={4}>Total Amount</Th>
                        <Th >R7275.20</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
export default Header
