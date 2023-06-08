import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TbCurrencyDollar } from "react-icons/tb";
import { MdToken } from "react-icons/md";
import Footer from "./Footer";
import WithSubnavigation from "./Navbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const [data, setData] = useState([]);
  const [pair, setPair] = useState([]);

  const getData = async () => {
    let res = await axios.get(
      `https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`
    );
    // console.log(res);
    setData(res.data.pairs.splice(0, 8));
  };
  const getPair = async () => {
    let res = await axios.get(
      `https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae`
    );
    // console.log(res);
    setPair(res.data.pairs.splice(0, 3));
  };

  useEffect(() => {
    getData();
    getPair();
  }, []);

  return (
    <>
      <Flex
        direction={{ base: "column", md: "row", sm: "column" }}
        backgroundColor="rgb(80,80,80)">
        <WithSubnavigation w="10%" />
        <Flex
          direction="column"
          width="88%"
          marginTop="20px"
          marginLeft={"20px"}>
          <Flex
            gap={{ base: "10px", xl: "160px", md: "20px", sm: "10px" }}
            direction={{ base: "column", md: "row", sm: "column" }}
            justifyContent="space-around">
            <InputGroup
              width={{
                base: "100%",
                xl: "50%",
                lg: "60%",
                md: "40%",
                sm: "100%",
              }}
              color="white">
              <Input
                borderRadius={"15px"}
                placeholder="Search"
                _placeholder={{ color: "white" }}
                color="white"
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            <Box
              display={{
                base: "none",
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
              }}>
              <ConnectButton />
            </Box>
          </Flex>

          <Box
            padding={"20px"}
            width="100%"
            mt={{ base: "0px", md: "20px", sm: "0px" }}>
            <Heading color={"white"} mb={"10px"} size={"md"}>
              Pair Address
            </Heading>
            {pair.map((e) => (
              <Grid
                gap="10px"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  xl: "repeat(4,1fr)",
                  lg: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  sm: "repeat(1,1fr)",
                }}
                margin="auto">
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "10px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Basic Info
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Pair created at</Text>
                      <Text width="54%">#7890</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Symbol</Text>
                      <Text width="54%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">DEX Id</Text>
                      <Text width="54%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Pair Address</Text>
                      <Text width="54%">#6754</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white">
                      <AiOutlineInfoCircle size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "12px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Base Token
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Name</Text>
                      <Text width="54%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Symbol</Text>
                      <Text width="54%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Address</Text>
                      <Text width="54%">#7890</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white" mb="10px">
                      <MdToken size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "12px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Quote Token
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Name</Text>
                      <Text width="54%">{e.quoteToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Symbol</Text>
                      <Text width="54%">{e.quoteToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Address</Text>
                      <Text width="54%">#7890</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white" mb="10px">
                      <MdToken size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "12px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Price
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Price Native</Text>
                      <Text width="54%">{e.priceNative}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Price USD</Text>
                      <Text width="58%">{e.priceUsd}</Text>
                    </Flex>
                  </Box>

                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white">
                      <TbCurrencyDollar size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Divider
                  visibility={{ md: "hidden", base: "visible" }}
                  margin={{ base: "15px auto", lg: "0px 0px" }}
                />
              </Grid>
            ))}
          </Box>
          <Box padding={"20px"} width="100%">
            <Heading color={"white"} mb={"10px"} size={"md"}>
              Token Address
            </Heading>
            {data.map((e) => (
              <Grid
                gap="10px"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  xl: "repeat(4,1fr)",
                  lg: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  sm: "repeat(1,1fr)",
                }}
                margin="auto">
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "10px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Basic Info
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Pair created at</Text>
                      <Text width="54%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Symbol</Text>
                      <Text width="54%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">DEX Id</Text>
                      <Text width="54%">#7890</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Pair Address</Text>
                      <Text width="54%">#6754</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white">
                      <AiOutlineInfoCircle size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "12px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Base Token
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Name</Text>
                      <Text width="54%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Symbol</Text>
                      <Text width="54%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Address</Text>
                      <Text width="54%">#7890</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white" mb="10px">
                      <MdToken size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "12px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Quote Token
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Name</Text>
                      <Text width="54%">{e.quoteToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Symbol</Text>
                      <Text width="54%">{e.quoteToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Address</Text>
                      <Text width="54%">#7890</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white" mb="10px">
                      <MdToken size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="20px"
                  padding="20px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={{
                    base: "12px",
                    xl: "10px",
                    lg: "10px",
                    md: "10px",
                    sm: "16px",
                  }}
                  bg={"#390554"}
                  height="180px">
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    ml="5px"
                    size={"sm"}
                    textAlign="left">
                    Price
                  </Heading>
                  <Box height="70px" ml={"5px"}>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Price Native</Text>
                      <Text width="54%">{e.priceNative}</Text>
                    </Flex>
                    <Flex color={"white"} gap="40px" mb="5px">
                      <Text width="40%">Price USD</Text>
                      <Text width="58%">{e.priceUsd}</Text>
                    </Flex>
                  </Box>

                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="#960252" color="white">
                      <TbCurrencyDollar size={"25px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Divider
                  visibility={{ md: "hidden", base: "visible" }}
                  margin={{ base: "15px auto", lg: "0px 0px" }}
                />
              </Grid>
            ))}
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
