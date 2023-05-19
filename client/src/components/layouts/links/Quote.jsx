/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import Axios from "axios"
import {
  Box, Divider, VStack, Spacer, Button, CardFooter, HStack, Card, CardHeader, CardBody,
  Kbd, Input, Text, Badge, Grid, GridItem, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper,
  NumberInputStepper, Table, Thead, Tbody, TableContainer, Tr, Th, Td, TableCaption,
} from "@chakra-ui/react"
import { MdAdd, MdArrowForward } from "react-icons/md"

function App() {
  let ob = [];
  const [data1, setData] = useState([]);
  const [market, setMarket] = useState("");
  const [commodities, setCommodities] = useState([]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5008/markets")
  //     .then((res) => res.json())
  //     .then((data1) => setData(data1))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5008/products")
  //     .then((res) => res.json())
  //     .then((products) => setProducts(products))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const fetchCommodities = async () => {
      let postFormData = new FormData();

      postFormData.append("query", "item-stats");
      postFormData.append("device", "9c2807cb-1e06-4fae-8a43-418189035eca");
      postFormData.append("market", 17);
      postFormData.append("item_code", "ON");
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
      console.log(commodities);
    };
    fetchCommodities();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    alert('clicked');

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
      <Box m={0} p={0} w="100%" bg="">
        {commodities.map((d, i) => (
          <span key={i} id="market-data1">
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
                <Divider/>
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
