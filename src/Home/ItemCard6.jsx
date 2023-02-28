import React from "react";
import { Box, Grid, Flex, Text, Image, Center } from "@chakra-ui/react";
import uuid from "react-uuid";

const ItemCard6 = ({ type, heading }) => {
  return (
    <Box mb="2" cursor="pointer">
      <Center>
        <Text fontSize="xl" color="#003380" fontWeight="700" p="12">
          {heading}
        </Text>
      </Center>
      <Flex justifyContent="space-evenly"  w="98%" m="auto">
        {type.map((i) => (
          <Flex
            key={uuid()}
            border="1px"
            borderColor="blackAlpha.500"
            flexDirection="column"
            backgroundColor="#f7f7f7"
            borderRadius="3xl"
            px="45"
            py="5"
          >
            <Center>
              <Image boxSize="40px" src={`${i.img}`} alt={i.name} />
            </Center>
            <Center>
              <Text color="#003380" fontSize="sm" fontWeight="700">
                {i.title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="10px" color="gray.600">
                {i.desc}
              </Text>
            </Center>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default ItemCard6;
