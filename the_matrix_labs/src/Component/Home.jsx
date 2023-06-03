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
import { MdToken } from "react-icons/md";
import Footer from "./Footer";
import WithSubnavigation from "./Navbar";

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
        backgroundColor="brown">
        <WithSubnavigation w="10%" />
        <Flex
          direction="column"
          width="88%"
          marginTop="20px"
          marginLeft={"8px"}>
          <InputGroup
            width={{ base: "100%", md: "60%", sm: "100%" }}
            borderRadius={"25%"}
            color="white">
            <Input
              placeholder="Search"
              _placeholder={{ color: "white" }}
              color="white"
            />
            <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>

          <Box padding={"15px"} width="100%">
            <Heading color={"white"} mb={"10px"} size={"sm"}>
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
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Basic Info
                  </Heading>
                  <Box height="60px">
                    <Flex color={"white"}>
                      <Text width="30%">Pair created at</Text>
                      <Text width="60%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Symbol</Text>
                      <Text width="60%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">DEX Id</Text>
                      <Text width="60%">{e.dexId}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Pair Address</Text>
                      <Text width="60%">{e.pairAddress}</Text>
                    </Flex>
                  </Box>

                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <AiOutlineInfoCircle size={"30px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  width="100%"
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Base Token
                  </Heading>
                  <Box height="60px">
                    <Flex color={"white"}>
                      <Text width="30%">Name</Text>
                      <Text width="60%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Symbol</Text>
                      <Text width="60%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Address</Text>
                      <Text width="60%">{e.baseToken.address}</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <MdToken size={"30px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Quote Token
                  </Heading>
                  <Box height={"60px"}>
                    <Flex color={"white"}>
                      <Text width="30%">Name</Text>
                      <Text width="60%">{e.quoteToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Symbol</Text>
                      <Text width="60%">{e.quoteToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Address</Text>
                      <Text width="60%">{e.quoteToken.address}</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <MdToken size={"30px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Price
                  </Heading>
                  <Box height="60px">
                    <Flex color={"white"}>
                      <Text width="30%">Price Native</Text>
                      <Text width="60%">{e.priceNative}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Price USD</Text>
                      <Text width="60%">{e.priceUsd}</Text>
                    </Flex>
                  </Box>

                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <MdToken size={"30px"} />
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
          <Box padding={"15px"} width="100%">
            <Heading color={"white"} mb={"10px"} size={"sm"}>
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
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Basic Info
                  </Heading>
                  <Box height="60px">
                    <Flex color={"white"}>
                      <Text width="30%">Pair created at</Text>
                      <Text width="60%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Symbol</Text>
                      <Text width="60%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">DEX Id</Text>
                      <Text width="60%">{e.dexId}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Pair Address</Text>
                      <Text width="60%">{e.pairAddress}</Text>
                    </Flex>
                  </Box>

                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <AiOutlineInfoCircle size={"30px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  width="100%"
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Base Token
                  </Heading>
                  <Box height="60px">
                    <Flex color={"white"}>
                      <Text width="30%">Name</Text>
                      <Text width="60%">{e.baseToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Symbol</Text>
                      <Text width="60%">{e.baseToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Address</Text>
                      <Text width="60%">{e.baseToken.address}</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <MdToken size={"30px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Quote Token
                  </Heading>
                  <Box height={"60px"}>
                    <Flex color={"white"}>
                      <Text width="30%">Name</Text>
                      <Text width="60%">{e.quoteToken.name.split(" ")[0]}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Symbol</Text>
                      <Text width="60%">{e.quoteToken.symbol}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Address</Text>
                      <Text width="60%">{e.quoteToken.address}</Text>
                    </Flex>
                  </Box>
                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <MdToken size={"30px"} />
                    </Circle>
                  </Flex>
                </Box>
                <Box
                  mb="10px"
                  padding="5px"
                  border="1px solid"
                  borderRadius="10px"
                  fontSize={"10px"}
                  bg={"purple"}>
                  <Heading
                    color={"white"}
                    mb={"10px"}
                    size={"sm"}
                    textAlign="left">
                    Price
                  </Heading>
                  <Box height="60px">
                    <Flex color={"white"}>
                      <Text width="30%">Price Native</Text>
                      <Text width="60%">{e.priceNative}</Text>
                    </Flex>
                    <Flex color={"white"}>
                      <Text width="30%">Price USD</Text>
                      <Text width="60%">{e.priceUsd}</Text>
                    </Flex>
                  </Box>

                  <Flex justifyContent={"right"} alignItems="right">
                    <Circle size="50px" bg="tomato" color="white" mb="10px">
                      <MdToken size={"30px"} />
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
