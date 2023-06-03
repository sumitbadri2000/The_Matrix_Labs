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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdToken } from "react-icons/md";
import {
  AiOutlineBlock,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import logo from "../logo.png";
export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        width={{ base: "100%", md: "20%", sm: "100%" }}
        height="auto"
        borderTopRightRadius={{ base: "0px", md: "40px", sm: "0px" }}
        bg={"gray"}>
        <Flex>
          <IconButton
            backgroundColor={"gray"}
            padding="5px"
            size={"2xl"}
            icon={
              isOpen ? (
                <CloseIcon color="white" />
              ) : (
                <HamburgerIcon color={"white"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <VStack mt={"20px"}>
            <Image
              ml={{ base: "0px", lg: "20px", md: "2px", sm: "0px" }}
              width={{ base: "60%", lg: "80%", md: "70%", sm: "70%" }}
              height="60px"
              src={logo}
              alt="image"
            />
            <VStack
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              height="auto"
              border={"1px solid red"}>
              <Flex
                direction={"column"}
                justifyContent="space-between"
                border={"1px solid yellow"}
                minHeight="100vh"
                marginTop={"10px"}>
                <Box fontSize={"20px"} color="white" padding={"10px"}>
                  <Flex marginTop={"20px"} gap="20px" fontSize={{base:"12px",lg:"18px",sm:"12px"}}>
                    <MdToken fontSize="25px" color="white" />

                    <a href="">Token Address</a>
                  </Flex>
                  <Flex marginTop={"20px"} gap="20px" fontSize={{base:"12px",lg:"18px",sm:"12px"}}>
                    <AiOutlineBlock fontSize="25px" color="white" />

                    <a href="">Pair Address</a>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={"center"}>
                    <AiFillFacebook fontSize="30px" color="red" />
                    <AiFillLinkedin fontSize="30px" color="red" />
                    <AiFillTwitterSquare fontSize="30px" color="red" />
                  </Flex>
                </Box>
              </Flex>
            </VStack>
          </VStack>
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
                <Box fontSize={"20px"} color="white">
                  <Flex marginTop={"20px"} gap="20px">
                    <MdToken fontSize="30px" color="white" />

                    <a href="">Token Address</a>
                  </Flex>
                  <Flex marginTop={"20px"} gap="20px">
                    <AiOutlineBlock fontSize="30px" color="white" />

                    <a href="">Pair Address</a>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={"center"}>
                    <AiFillFacebook fontSize="40px" color="red" />
                    <AiFillLinkedin fontSize="40px" color="red" />
                    <AiFillTwitterSquare fontSize="40px" color="red" />
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
