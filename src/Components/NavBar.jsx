import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { GrLogin, GrReturn, GrServices } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { MdConnectWithoutContact } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/auth.action";

const NavBar = () => {
  const { isAuth } = useSelector((store) => store.AuthManager);
   const { name } = useSelector((store) => store.AuthManager);
 
  return (
    <Box>
      <Flex
        w="100%"
        px="30px"
        justifyContent={"space-around"}
        alignItems="center"
        m="auto"
        bg="red"
        pt="10px"
      >
        <Box>
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            OUR BRAND PROMISE
          </Heading>
        </Box>
        <Flex>
          <GrReturn color="white" size="25px" />
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            OUR BRAND PROMISE
          </Heading>
        </Flex>
        <Flex>
          <FaTruck color="white" size="25px" />
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            NEXT DAY DELIVERY
          </Heading>
        </Flex>
        <Flex>
          <GrServices color="white" size="25px" />
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            SERVICE GUARANTEE
          </Heading>
        </Flex>
        <Flex>
          <BiNetworkChart color="white" size="25px" />
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            UNMATCHED NETWORK
          </Heading>
        </Flex>
        <Flex>
          <ImLocation2 color="white" size="25px" />
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            Find a store
          </Heading>
        </Flex>
        <Link to="contactus">
          <Flex>
            <MdConnectWithoutContact color="white" size="25px" />
            <Heading
              cursor={"pointer"}
              fontSize={"17px"}
              color="white"
              _hover={{ bg: "red", textDecoration: "underline" }}
            >
              Contact Us
            </Heading>
          </Flex>
        </Link>
      </Flex>
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="red"
        p="10px"
        px="3%"
        gap="30px"
      >
        <Link to="/">
          <Box>
            <Image
              src="as_digital_logo_2019.png"
              alt="logo"
              w="190px"
              h="70px"
            />
          </Box>
        </Link>

        <div className="searchBar">
          <input type="text" placeholder="Find Your Favorite Product" />
          <FcSearch fontSize={"42px"} />
        </div>
        <Flex cursor={"pointer"}>
          <ImLocation2 color="white" fontSize="20px" />
          <Heading
            cursor={"pointer"}
            fontSize={"17px"}
            color="white"
            _hover={{ bg: "red", textDecoration: "underline" }}
          >
            Deliver to Your Address
          </Heading>
        </Flex>
        <Link to="/cart">
          <Flex cursor={"pointer"}>
            <BsFillCartFill color="white" fontSize="20px" />
            <Heading
              cursor={"pointer"}
              fontSize={"17px"}
              color="white"
              _hover={{ bg: "red", textDecoration: "underline" }}
            >
              Cart
            </Heading>
          </Flex>
        </Link>
     
        <Flex cursor={"pointer"}>
          <GrLogin color="white" fontSize="20px" />
          <Link to="login">
            <Heading
              cursor={"pointer"}
              fontSize={"17px"}
              color="white"
              _hover={{ bg: "red", textDecoration: "underline" }}
            >
              Login
            </Heading>
          </Link>
        </Flex>
     
      <Menu>
        <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}>
          Hi
        </MenuButton>
        <MenuList>
          <MenuItem>My Profile</MenuItem>
          <MenuItem>My Order</MenuItem>
          <MenuItem>My Address</MenuItem>
          <Link to="whishlist">
                  {" "}
                  <MenuItem>My Wishlist</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
      </Flex>
      <Menu>
      <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Mobiles & Tablets <ChevronDownIcon />
            </MenuButton>
      </Menu>
    </Box>
  );
};

export default NavBar;
