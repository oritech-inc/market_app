import React from 'react'
import {
    Menu, MenuButton, MenuList, MenuItem,
    Grid, GridItem, Button, Center, Heading, Icon, Link
} from '@chakra-ui/react'
import { SettingsIcon, HamburgerIcon } from '@chakra-ui/icons'

function SideBar() {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Grid templateColumns='repeat(6, 1fr)' align='stretch' gap={0}>
                <GridItem>
                    <Button ref={btnRef} colorScheme=''>
                        <Icon as={HamburgerIcon} fontSize='18px' />
                    </Button>
                </GridItem>
                <GridItem colSpan="4">
                    <Center>
                        <Link to="/">
                            <Heading
                                as='h1'
                                size='lg'>Dashboard</Heading>
                        </Link>
                    </Center>
                </GridItem>
                <GridItem colSpan="1" >
                    <Menu>
                        <MenuButton as={Button} bg={0}
                            transition='all 0.2s'
                            border='0'
                            _hover={{ bg: '0' }}
                            _expanded={{ border: 'white' }}
                            _focus={{ boxShadow: 'outline' }}>
                            <Icon as={SettingsIcon} fontSize='18px' />
                        </MenuButton>
                        <MenuList color="white" bg="black">
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </GridItem>
            </Grid>
        </>
    )
}


export default SideBar
