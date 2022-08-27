import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

import arDataFile from "../../locales/ar/aboutus.json";
import enDataFile from "../../locales/en/aboutus.json";

export default function AboutusBrief({ currentDir }) {
  const { t } = useTranslation("aboutus");

  return (
    <>
      <Box
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: "easeInOut" },
        }}
        pos={"relative"}
        height={"max-content"}
        top="0"
        right={"0"}
        mb={10}
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
          height: "max-content",
        }}
      >
        <Box
          dir={currentDir}
          color="#3c2133"
          maxW={["300px", "500px", "800px"]}
          mx="auto"
          py={"50px"}
        >
          <Heading
            as={motion.h2}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease: "easeInOut" },
            }}
            fontFamily={"bukrabold"}
            mx={4}
            pos={"relative"}
            _after={{
              position: "absolute",
              width: ["20%", "10%"],
              height: "10px",
              content: `""`,
              backgroundColor: "#fa6800",
              borderRadius: "20px",
              right: "0",
              bottom: "-30px",
            }}
          >
            {t("BriefTitle")}
          </Heading>
          <Heading
            as={motion.h2}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease: "easeInOut" },
            }}
            fontSize={["2xl", "2xl", "2xl", "x-large"]}
            mx={4}
            fontFamily={"bukrabold"}
            pt="70px"
            pb={2}
          >
            {t("Brief")}
          </Heading>

          {arDataFile.BriefDescription.map((data) => {
            return (
              <Text
                py={1}
                fontSize={["md", "md"]}
                fontFamily={"bukralight"}
                mx={4}
                key={data.id}
                as={motion.p}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.75, ease: "easeInOut" },
                }}
              >
                {data.desc}
              </Text>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
