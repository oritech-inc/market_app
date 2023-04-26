import React from 'react'
import { Box, AbsoluteCenter } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const App = () => {
  return (
    <Box position='relative' h='100px'>
      <AbsoluteCenter bg='black' p='4' color='white' axis='both'>
        <PhoneIcon />
      </AbsoluteCenter>
    </Box>
  )
}

export default App