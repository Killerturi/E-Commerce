import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Grid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { GrLogin, GrReturn, GrServices } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { MdConnectWithoutContact } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const authentication = useSelector((state) => {
    // console.log(state.auth, "hi");
    return state.auth;
  });

  console.log(authentication);

  return (
    <Box className="Navbar">
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
              src="logo1.png"
              alt="logo"
              w="150px"
              h="70px"
              className="digital_logo"
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
        <Link to="/contactus">
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

        {!authentication.length > 0 ? (
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
        ) : (
          <Menu>
            <MenuButton
              color="black"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Hi
            </MenuButton>
            <MenuList 
            className="login_dropdown"
             > 
              <MenuItem>My Profile</MenuItem>
              <MenuItem>My Order</MenuItem>
              <MenuItem>My Address</MenuItem>
             <Link to="Whishlist">
             <MenuItem>My Wishlist</MenuItem> 
             </Link>            
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
      <Flex
        w="100%"
        textAlign={"center"}
        justifyContent="space-between"
        alignItems={"center"}
        m="auto"
        bg="blue"
        px="3%"
        py="1%"
      >
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
          <Link to="mobilesandtablets">
            <MenuList bg="#013380">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(3,1fr)"}
                gap="25px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                w="95%"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Smartphones
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Headphones & Headsets
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    AI Learning Robots
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Wearable Technology
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Top Selling Smartwatches
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Apple Price Drop
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Tablets & eReaders
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Every Day use Tablets below 15000
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Premium Tablets, Above 15001
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Power Banks
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Accessories
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Mobile Accessories
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Tablet Accessories
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Car Mobile Holders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Memory Cards
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Cables & Cords
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Chargers & Adapters
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    eSlates
                  </Heading>
                </Box>
              </Grid>
            </MenuList>
          </Link>
        </Menu>
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
            Televisions <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="televisions">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(3,1fr)"}
                gap="10px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Reconnect Disney | Marvel Audio Collection
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Virtual Reality Headsets
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Stabilizers & Surge Protectors
                  </Heading>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Televisions
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Smart TVs
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    43 Inch TVs
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    55 Inch TVs
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Android TVs
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    32 Inch TVs
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Gaming
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Gaming Accessories
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Gaming Consoles
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Gaming Titles
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Projectors
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Streaming Devices
                  </Heading>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Audio <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="headphones">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(4,1fr)"}
                gap="20px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Headphones & Headsets
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    True Wireless
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Bluetooth Neckbands
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Wired Earphones
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    On Ear Headphones
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Noise Cancelling Headphones
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Bluetooth & Wifi Speakers
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Bluetooth Speakers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Smart Speakers
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    TV Speakers & Soundbars
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Soundbars
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Home Theatre Systems
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Party speakers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Multimedia
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Musical Instruments
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Guitars and Ukuleles
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Microphones
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Musical Keyboards
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Home Appliances <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="homeappliances">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(3,1fr)"}
                gap="20px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Air Conditioners
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Split Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Window Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Smart Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Energy Efficient Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    1 ton Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    1.5 ton Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    5 star Air Conditioners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Air Coolers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Air Purifiers
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Washing Machines
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Fully Automatic Front Load
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Fully Automatic Top Load
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Semi-Automatic Top Load
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Refrigerators
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Single Door
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Double Door
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Side by Side Refrigerators
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Convertible
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Vacuum Cleaners
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Robotic Vacuum Cleaners
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Dishwashers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Geysers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Room Heaters
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    fans
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Computers <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="computers">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(4,1fr)"}
                gap="10px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Laptops
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Basic use laptops
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Student Laptops
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Thin and light Laptops
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Multi-Tasking Laptops
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Gaming Laptops
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Content creator Laptops
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Computer Monitors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Desktops & All-In-Ones
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Bluetooth & WiFi Speakers
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Internet Connectivity Devices
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Routers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    WiFi Range Extenders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Wireless USB Adapters
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Printers & Inks
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Printers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Hard Disks & SSD
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Pen Drives & OTG Drives
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Memory Cards
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Pen Drives & OTG Drives
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Data Storage Devices
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Toners & Ink Cartridges
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Computer Accessories
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Upto 72% Off, Only on Reliancedigital.in
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Computer Networking Cables
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Laptop Chargers & Adaptor
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Laptop Batteries
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Hubs & Docks
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Mouse Pads
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Laptop Tables & Stands
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Laptop Screen Protectors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Laptop Cooling Pad
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Laptop Bags & Sleeves
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Input Devices
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Keyboards
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Computer Mouse
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",

                      cursor: "pointer",
                    }}
                  >
                    Stylus Pens
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Cameras <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="cameras">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(2,1fr)"}
                gap="20px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    DSLR Cameras
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Mirrorless Cameras
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Point & Shoot Cameras
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    ProSumer Cameras
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Action Cameras
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Photo Storage Devices
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Pen Drives
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Binoculars
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Camera Lens
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Digital Camera Accessories
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Camera Batteries & Chargers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Camera bags & cases
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Action Camera Accessories
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Kitchen Appliances <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="kitchen">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(3,1fr)"}
                gap="20px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Microwave Ovens
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Water Purifiers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Fruits and Vegetable Cleaner
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Oven Toaster Grillers (OTG)
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Cookwares
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Juicer Mixer Grinders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Juicers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Hand Mixers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Mixer Grinders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Choppers & Slicers
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Induction Cookers
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Food Processors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Blenders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Kitchen Hobs & Gas Stoves
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Kitchen Chimneys
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Rice Cookers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Sandwich Makers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Popup Toasters
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Coffee Makers & Grinders
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Reconnect Disney|Marvel Kitchen Collection
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Air Fryers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Specialty Appliances
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Electric Kettles
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Water Dispensers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Flour Mills
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Wet Grinders
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Personal Care <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="personalcare">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(2,1fr)"}
                gap="20px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Shavers & Trimmers
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Epilators
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Hair Dryers & Stylers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Weighing Scales
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Irons
                  </Text>
                </Box>
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Reconnect Disney|Marvel Grooming Collection
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Hygiene & Personal Care
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Digital Thermometers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Massagers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Misc. Care Devices
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Garment Steamers
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
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
            Acessories <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#013380">
            <Link to="accessories">
              <Grid
                p="15px"
                gridTemplateColumns={"repeat(3,1fr)"}
                gap="20px"
                justifyContent="space-around"
                alignContent={"center"}
                textAlign="center"
                color="white"
              >
                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Bags, Cases & Sleeves
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Smart Devices
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Bluetooth & WiFi Speakers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Chargers & Adapters
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Cables & Cords
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Power Banks
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Batteries
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Tracking Devices
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Speakers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Lights
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Sensors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Cameras
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Plugs
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Reconnect Disney | Marvel Accessories
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Webcams
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Surge Protectors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Mobile Grips & Stands
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Laptop Stands
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Car Mobile Holders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Selfie Sticks
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Tripods & Monopods
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Air Conditioner Stands
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Mounts & Stands
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Hard Disks & SSD
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Pen Drives & OTG Drives
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Memory Cards
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Data Storage Devices
                  </Text>
                </Box>

                <Box>
                  <Heading
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    my="8px"
                    fontSize={"15px"}
                  >
                    Headphones & Headsets
                  </Heading>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Cleaners & Protectors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Stabilizers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Power Strips & Extension Cords
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Screen Guards & Protectors
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Routers
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Tyre Inflators
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Paper Shredders
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Laminators
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Office Electronics
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Computer Mouse
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Keyboards
                  </Text>
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Indoor Lighting
                  </Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavBar;
