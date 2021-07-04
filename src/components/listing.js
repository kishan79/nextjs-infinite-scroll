import InfiniteScroll from "react-infinite-scroll-component";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Box,
  Flex,
  Spinner,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import ImageCard from "../components/imageCard";

export default function Listing({ data, fetchData }) {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">
      <Box alignSelf="center">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={true}
          loader={
            <Stack direction="row" justifyContent="center" spacing={4}>
              <Spinner size="lg" m="2" />
            </Stack>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Flex direction={isNotSmallerScreen ? "row" : "column"} p="2">
            <Wrap px="1rem" spacing={4} justify="center">
              {data.map((image, index) => (
                <WrapItem
                  key={index}
                  boxShadow="md"
                  rounded="20px"
                  overflow="hidden"
                  bg="white"
                  lineHeight="0"
                  _hover={{ boxShadow: "dark-lg" }}
                >
                  <ImageCard image={image} />
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </InfiniteScroll>
      </Box>
    </Flex>
  );
}
