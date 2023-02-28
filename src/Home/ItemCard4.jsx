import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const ItemCard4 = ({ type, heading }) => {
  return (
    <Box>
      <Box justifyContent="left" w="95%" m="auto" mt="6">
        <Text fontSize="2xl" textAlign={"left"}>
          {heading}
        </Text>
      </Box>
      <br />
      <br />
      <div className="ItemCard4">
        {type.map((i) => (
          <Box key={uuid()}>
            <Link to={i.linked}>
              <img
                className="ItemCard4_img"
                src={`${i.img}`}
                alt={i.caption}
                w="100%"
              />
            </Link>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default ItemCard4;
