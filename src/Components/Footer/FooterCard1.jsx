import React from 'react'
import { Box, Text,} from "@chakra-ui/react";

const FooterCard1 = ({ type, heading }) => {
  return (
    <>
        <Box cursor="pointer">
      <Text fontWeight="700">{heading}</Text>
      <Box>
        {type.map((i, index) => (
          <Box key={index}>
            <Text fontSize="15px" _hover={{ color: "whiteAlpha.600" }}>
              {i.labels}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
    </>
  )
}

export default FooterCard1