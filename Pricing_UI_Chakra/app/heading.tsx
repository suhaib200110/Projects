import React from 'react'
import {Box,ChakraProvider,Heading,Text} from "@chakra-ui/react";
export default function Head() {
  return (
    <Box textAlign={'center'} bg='#6B46C1' color='#F7FAFC' pt='88.45px' pb='16px' mt='-9px' mr='-20px' ml='-20px'>
        <Heading pb='16.08' fontWeight={'800'} fontSize={'48px'} fontFamily={'Inter'}>Simple Pricing for your buisness</Heading>
        <Text pb='198'
        fontFamily= {'Inter'}
        fontStyle={'normal'}
        fontWeight={'500'}
        fontSize= {'24px'}
        lineHeight={'32px'}>Plans that are carefully crafted to suit your buisness.</Text>
    </Box>    
  )
}
