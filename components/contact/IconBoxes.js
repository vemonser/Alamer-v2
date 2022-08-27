import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
 import data from "../../locales/ar/home.json";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IconBoxes({ currentDir }) {
  const { t } = useTranslation("home");
  const [clicked, setClicked] = useState();

  return (
    <Box dir={currentDir}>
      <Flex
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: "easeInOut" },
        }}
        color="#3c2133"
        fontFamily={"bukrabold"}
        align="center"
        justify="center"
        gap={5}
        pos="relative"
        top="-30px"
        w={"80vw"}
        mx="auto"
      >
        {data.cards.map((item) => {
          return (
            <Flex
              key={item.id}
              boxShadow="md"
              borderRadius={"14px"}
              py={5}
              zIndex={2}
              gap={3}
              transition={"all 250ms ease-in-out"}
              bg={clicked === item.id ? "#f37f25" : "#fff"}
              flexDir={"column"}
              align="center"
              justify="center"
              flex="1"
              cursor="pointer"
              onClick={() => {
                clicked === item.id ? setClicked(null) : setClicked(item.id);
              }}
            >
              <Flex
                flexDir={"column"}
                align="center"
                justify="center"
                height={"80px"}
                key={item.id}
              >
                {clicked !== item.id ? (
                  <>
                    <Image src={item.icon} width="72px" height="30px" priority/>
                    <Heading
                      fontSize={"md"}
                      pt={4}
                      fontFamily={"bukrabold"}
                      as={motion.h2}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {item.title}
                    </Heading>
                  </>
                ) : (
                  <>
                    {item.desc ? (
                      <Text
                        color="#fff"
                        as={motion.p}
                        w={"80%"}
                        fontFamily={"bukraregular"}
                        textAlign={"center"}
                        initial={{ scale: 0, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0, y: 50 }}
                      >
                        {item.desc}
                      </Text>
                    ) : (
                      <Text>
                        {item.phones.map((phone) => {
                          return (
                            <Text
                              key={phone.id}
                              zIndex={5}
                              color={"#FFF"}
                              fontFamily={"bukraregular"}
                              as={motion.p}
                              initial={{ scale: 0, opacity: 0, y: 50 }}
                              animate={{ scale: 1, opacity: 1, y: 0 }}
                              exit={{ scale: 0, opacity: 0, y: 50 }}
                              w={"max-content"}
                              pl={5}
                              textAlign={"center"}
                            >
                              {phone.num}
                            </Text>
                          );
                        })}
                      </Text>
                    )}
                  </>
                )}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
