import Head from "next/head";
import { Box, Button, VStack, Text, Flex, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzshMtaOgm8tV36z6o51Fy2oBNy1YO4GZp6mIVUNaF8UqZ9nbeLyTrJgirS1NgBN6BH/exec",
    )
      .then((res) => res.json())
      .then((res) => {
        setCount(res.value || 0);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const countUp = (value: number) => {
    setCount(count + value);
    fetch(
      `https://script.google.com/macros/s/AKfycbzshMtaOgm8tV36z6o51Fy2oBNy1YO4GZp6mIVUNaF8UqZ9nbeLyTrJgirS1NgBN6BH/exec?mode=POST&value=${value}`,
      {
        method: "GET",
      },
    ).catch((err) => {
      console.error(err);
    });
  };

  return (
    <>
      <Head>
        <title>Shibalab Counter</title>
      </Head>
      <Flex justify="center" align="center" h="10vh" direction="column" mt="10vh">
        <Text fontWeight="bold" fontSize="4xl">
          {count}
        </Text>
      </Flex>
      <Box>
        <VStack p="2rem">
          <Button h="4rem" w="100%" colorScheme="teal" onClick={() => countUp(1)}>
            +1
          </Button>
          <Button h="4rem" w="100%" colorScheme="teal" onClick={() => countUp(5)}>
            +5
          </Button>
          <Button h="4rem" w="100%" colorScheme="teal" onClick={() => countUp(-1)} variant="outline">
            -1
          </Button>
        </VStack>
      </Box>
    </>
  );
}
