import { useEffect, useState } from "react";
import {
  Flex,
  VStack,
  Box,
  Spacer,
  Heading,
  useColorMode,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

import Layout from "../src/components/layout";
import Listing from "../src/components/listing";

import { getPhotos } from "../src/utils/unsplash";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [imageList, setImageList] = useState([]);

  const fetchImageData = async () => {
    let imageData = await getPhotos(10);
    setImageList([...imageList, ...imageData]);
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <Layout>
      <VStack p={5}>
        <Flex w="100%" justifyContent="center">
          <Stack direction="row" justifyContent="center">
            <Box p="2">
              <Heading size="lg">Nextjs Infinite Scroll</Heading>
            </Box>
          </Stack>
          <Spacer />
          <Box>
            <IconButton
              ml={8}
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            ></IconButton>
          </Box>
        </Flex>
        <Listing data={imageList} fetchData={fetchImageData} />
      </VStack>
    </Layout>
  );
}
