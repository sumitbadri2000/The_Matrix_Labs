import {
  Box,
  Flex,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdToken } from "react-icons/md";
import {
  AiOutlineBlock,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import logo from "../Vector.png";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        width={{ base: "100%", md: "20%", sm: "100%" }}
        height="auto"
        borderTopRightRadius={{ base: "0px", md: "40px", sm: "0px" }}
        bg={{
          base: "rgb(80,80,80)",
          xl: "#292929",
          lg: "#292929",
          md: "#292929",
          sm: "rgb(80,80,80)",
        }}>
        <Flex
          marginTop={{
            base: "30px",
            xl: "0px",
            lg: "0px",
            md: "0px",
            sm: "30px",
          }}
          padding={{
            base: "10px",
            xl: "0px",
            lg: "0px",
            md: "0px",
            sm: "20px",
          }}>
          <IconButton
            ml={{ base: "15px", xl: "0px", lg: "0px", md: "0px", sm: "18px" }}
            background="rgb(80,80,80)"
            size={"2xl"}
            icon={
              isOpen ? (
                <CloseIcon
                  fontSize={"20px"}
                  color="white"
                  background="rgb(80,80,80)"
                />
              ) : (
                <HamburgerIcon
                  fontSize={"20px"}
                  color={"#FFFFFF"}
                  background="rgb(80,80,80)"
                />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <VStack mt={"20px"}>
            <Link to={"/"}>
              <Flex
                width={{ xl: "200px", lg: "200px", md: "180px", sm: "100px" }}
                justifyContent={"space-between"}
                gap={{ xl: "0px", lg: "0px", md: "14px", sm: "0px" }}
                alignItems={"center"}>
                <Image
                  visibility={{
                    base: "hidden",
                    xl: "visible",
                    md: "visible",
                    sm: "hidden",
                  }}
                  ml={{ base: "0px", lg: "20px", md: "30px", sm: "0px" }}
                  width={{ base: "10%", lg: "13%", md: "12%", sm: "10%" }}
                  // width="15%"
                  height={{ lg: "30px", md: "25px" }}
                  src={logo}
                  alt="image"
                />
                <Text
                  mt={{
                    base: "-20px",
                    xl: "0px",
                    lg: "0px",
                    md: "0px",
                    sm: "-20px",
                  }}
                  ml={{
                    base: "-10px",
                    xl: "0px",
                    lg: "0px",
                    md: "0px",
                    sm: "-6px",
                  }}
                  fontSize={{
                    base: "20px",
                    lg: "35px",
                    md: "28px",
                    sm: "24px",
                  }}
                  width="130px"
                  color={{
                    base: "#FFFFFF",
                    xl: "grey",
                    lg: "grey",
                    md: "grey",
                    sm: "#FFFFFF",
                  }}>
                  nftify
                </Text>
              </Flex>
            </Link>
            <VStack
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              height="auto">
              <Flex
                width={{
                  xl: "250px",
                  lg: "220px",
                  md: "180px",
                  sm: "120px",
                }}
                direction={"column"}
                justifyContent="space-between"
                minHeight="310vh">
                <Box fontSize={"15px"} color="white">
                  <Flex
                    justifyContent={"center"}
                    marginTop={"10px"}
                    gap="20px"
                    width="100%"
                    height="50px"
                    alignItems={"center"}
                    fontSize={{ base: "12px", lg: "18px", sm: "12px" }}
                    _hover={{ bgColor: "#F30050" }}>
                    <MdToken fontSize="25px" color="white" />

                    <Link to={"/token"}>Token Address</Link>
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    marginTop={"10px"}
                    gap="20px"
                    width="100%"
                    height="50px"
                    alignItems={"center"}
                    fontSize={{ base: "12px", lg: "18px", sm: "12px" }}
                    _hover={{ bgColor: "#F30050" }}>
                    <AiOutlineBlock fontSize="25px" color="white" />

                    <Link
                      style={{
                        width: "46%",
                      }}
                      to={"/pair"}>
                      Pairs Address
                    </Link>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    justifyContent={"center"}
                    visibility={{
                      base: "visible",
                      xl: "visible",
                      md: "hidden",
                    }}>
                    <AiFillFacebook fontSize="30px" color="#F30050" />
                    <AiFillLinkedin fontSize="30px" color="#F30050" />
                    <AiFillTwitterSquare fontSize="30px" color="#F30050" />
                  </Flex>
                </Box>
              </Flex>
            </VStack>
          </VStack>
          <Box
            marginLeft={{ base: "20px", md: "0px", sm: "150px" }}
            display={{
              base: "block",
              xl: "none",
              lg: "none",
              md: "none",
              sm: "block",
            }}>
            <ConnectButton />
          </Box>
          <Flex>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} bg="gray">
            <Stack as={"nav"} spacing={4}>
              <Flex
                direction={"column"}
                justifyContent="space-between"
                height="200px"
                marginTop={"10px"}>
                <Box fontSize={"15px"} color="white">
                  <Flex
                    marginTop={"20px"}
                    gap="20px"
                    alignItems={"center"}
                    _hover={{ bgColor: "red" }}
                    padding="5px">
                    <MdToken fontSize="20px" color="white" />

                    <Link to={"/token"}>Token Address</Link>
                  </Flex>
                  <Flex
                    marginTop={"20px"}
                    gap="20px"
                    alignItems={"center"}
                    _hover={{ bgColor: "red" }}
                    padding="5px">
                    <AiOutlineBlock fontSize="20px" color="white" />

                    <Link to={"/pair"}>Pair Address</Link>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={"space-evenly"}>
                    <AiFillFacebook fontSize="30px" color="red" />
                    <AiFillLinkedin fontSize="30px" color="red" />
                    <AiFillTwitterSquare fontSize="30px" color="red" />
                  </Flex>
                </Box>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
