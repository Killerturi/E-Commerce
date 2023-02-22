import React from 'react'
import {Button,Text}  from "@chakra-ui/react"

const Btn = () => {
  return (
    <> 
    <Button bacground="#003380"
    color="whiteAlpha.900"
    borderRadius="3x1"
    border="1px"
    p="5"
    _hover={{
        background:"whiteAlpha.900",
        color:"#003380",
        borderRadius:"3x1",
        p:"5",
        border:"1px",
        variant:"outline",

    }}
    >
        <Text fontSize="xl" fontWeight="200">
            VIEW ALL
        </Text>
    </Button>
    </>
  )
}

export default Btn