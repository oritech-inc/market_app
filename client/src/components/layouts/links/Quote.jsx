/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import Axios from "axios"
import {
  Box, Tooltip, Select, Divider, VStack, Spacer, Button, CardFooter, HStack, Card, CardHeader, CardBody,
  Kbd, Input, Text, Badge, Grid, GridItem, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper,
  NumberInputStepper, Table, Thead, Tbody, TableContainer, Tr, Th, Td, TableCaption,
} from "@chakra-ui/react"
import { MdAdd, MdArrowForward } from "react-icons/md"

function App() {
  let ob = [];
  const [markets, setMarkets] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [products, setProducts] = useState([]);
  const [itemCode, setItemCode] = useState("");
  const [totmass, setTotMass] = useState("");

  useEffect(() => {
    fetch("http://localhost:5009/markets")
      .then((res) => res.json())
      .then((markets) => setMarkets(markets))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5009/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (itemCode.length > 1) {
      const fetchCommodities = async () => {
        let postFormData = new FormData();

        postFormData.append("query", "item-stats");
        postFormData.append("device", "9c2807cb-1e06-4fae-8a43-418189035eca");
        postFormData.append("market", 17);
        postFormData.append("item_code", itemCode);
        postFormData.append("api_key", "2766D02F-D00D-B0FD-FDB5-3C310DFB9964");
        postFormData.append(
          "event_id",
          "GkPLQfMjImbCgq7Dyfb4W4Pi9jrx24q2YgkXQqQF"
        );

        const response = await fetch(
          "https://webservices.freshmarksystems.co.za/mobiapi/market-query",
          {
            method: "POST",
            body: postFormData,
          }
        );

        const responseData = await response.json();
        const data = responseData.result.trans;
        setCommodities(data);
        console.log("test1");
        console.log(commodities);
      };
      fetchCommodities();
    }
  }, [itemCode]);

  const handleClick = (e) => {
    e.preventDefault();
    alert('clicked');

  };

  const handleChangeItems = (e) => {
    e.preventDefault();
    setItemCode(e.target.value);
  };

  const handleArray = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const index = ob.indexOf(id);
    if (index > -1) {
      // ob.splice(index, 1);
      alert("Removed");
    } else {
      alert("Added");
    }
    console.log(ob);
  };

  return (
    <>
      <Box m={0} p={0} w="100%" bg="white.500">
        <Tooltip
          hasArrow
          placement="bottom"
          label="Select Market from the list"
          aria-label="Average"
        >
          <Select
            size={"lg"}
            placeholder="-- Select Market --"
            variant="filled"

          >
            {markets.map((d, i) => (
              <option key={i} value={d.id}>
                {d.name}
              </option>
            ))}
          </Select>
        </Tooltip>
      </Box>

      <Box m={0} p={0} w="100%" bg="white.500">
        <Tooltip
          hasArrow
          placement="bottom"
          label="Select Item"
          aria-label="Average"
        >
          <Select
            size={"lg"}
            placeholder="-- Select Item --"
            variant="filled"
            onChange={handleChangeItems}
          >
            {products.map((d, i) => (
              <option key={i} value={d.item_code}>
                {d.item}
              </option>
            ))}
          </Select>
        </Tooltip>
      </Box>
      <Box m={0} p={0} w="100%" bg="">
        {commodities.map((d, i) => (
          <span key={i} id="market-markets">
            <VStack py={1} spacing="1" border={"1xp"}>
              <Card borderColor="black"
                w={"97%"} h={"100%"} my={2} borderRadius={"lg"}
              >
                <Grid templateColumns='repeat(1, 1fr)' align="center" gap={0}>
                  <GridItem w='100%' colSpan={1} cursor={'pointer'}>
                    <Badge borderRadius={0} w={'100%'} h={'100%'}
                      variant={"solid"} py={2} size={'sm'}
                      colorScheme="teal"
                    >
                      {d.commodity}
                    </Badge>
                  </GridItem>
                </Grid>
                <CardHeader w={"100%"} p={0.5} align="center">
                  <Text as="b"
                    color={"tomato"}
                    size="sm"
                    textTransform="uppercase"
                  >
                    Average: R{d.average.toFixed(2)}
                  </Text>
                </CardHeader>
                <Divider />
                <Box>
                  <TableContainer>
                    <Table variant='striped' colorScheme='teal' size='md'>
                      <Thead>
                        <Tr>
                          <Th>Quantity</Th>
                          <Td>
                            <NumberInput size={'md'} width={'100%'}
                              min={0} max={d.sold} defaultValue={0} value={0}>
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </Td>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Th>Total: </Th>
                          <Td >R0.00</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
                <CardFooter p={2}>
                  <Button
                    w={"100%"}
                    rightIcon={<MdAdd />}
                    colorScheme="teal"
                    variant="outline"
                    size={"sm"}
                    rounded={"full"}
                    _hover={{
                      bg: "teal",
                      color: "white",
                    }}
                    onClick={handleClick}
                  >
                    ADD TO CART
                  </Button>
                </CardFooter>
              </Card>
            </VStack>
          </span>
        ))}
      </Box>
    </>
  );
}

export default App;
