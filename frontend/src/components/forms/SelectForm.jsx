/* eslint-disable no-unused-vars */
import React from 'react'
import {
    VStack, Grid, GridItem, Text, Center, Tooltip, Select
} from "@chakra-ui/react"
function SelectForm() {
    return (
        <div id='form-content'>
            <Grid bg={''} templateColumns='repeat(6, 1fr)' px={5} alignItems={'center'}>
                <GridItem w='95%' colSpan={6} >
                    <Tooltip bg="green" hasArrow
                        placement='bottom' label="Select Market from the list" aria-label='Average'>
                        <Select
                            bg={'white'} color={'blackAlpha.700'} border={'1px'} borderRadius={'3xl'}
                            cursor={'pointer'}
                            placeholder='Select Market' size="md" variant='outline' onChange={handleChange}>
                            <option value='bcm'>Buffalo City Fresh Produce Market</option>
                        </Select>
                    </Tooltip>
                </GridItem>
            </Grid>
        </div>
    )
}

function handleChange(event) {
    const v = event.target.value;
    alert(v)
}
export default SelectForm
