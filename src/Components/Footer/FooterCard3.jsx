import React from 'react'
import { Box, Text, Center } from "@chakra-ui/react";

const FooterCard3 = () => {
  return (
    <>
         <Box backgroundColor="#0a244a" p="2">
      <Center lineHeight="15px" borderColor="white.500" w="5%" m="auto" p="3">
        <Text fontSize="14px" fontWeight="600" p="1">
          <u>Disclaimer</u>
        </Text>
      </Center>
      <Center>
        <Text fontSize="14px" w="92%" m="auto" textAlign="center" p="1">
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual product. Product specs are subject to change & may vary
          from actual product. While every care is taken to avoid inaccuracies
          in content, these are provided as is, without warranty of any kind.
        </Text>
      </Center>
      <Center
        mb="2"
        borderBottom="1px"
        borderBottomColor="whiteAlpha.400"
        p="1"
      >
        <Text fontSize="14px" w="90%" m="auto" textAlign="center"></Text>
      </Center>
      <Center>
        <Text fontSize="14px" p="1">
          {" "}
          © 2022 Reliance Digital. All Rights Reserved.
        </Text>
      </Center>
    </Box>
    </>
  )
}

export default FooterCard3