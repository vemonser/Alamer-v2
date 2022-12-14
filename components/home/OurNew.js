import useTranslation from "next-translate/useTranslation";
import data from "../../news.json";
import Image from "next/image";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Rightarrow from "../../public/images/common/NewsArrows02";
import Leftarrow from "../../public/images/common/NewsArrows01";

export default function OurNew({ currentDir }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1 },
  });

  const { t } = useTranslation("home");

  return (
    <Box bgColor={" #422639"} py={2} pb={10}>
      <Box pos={"relative"} maxW={"85vw"} mx={"auto"} dir={currentDir} py={5}>
        <Heading
          as={motion.h2}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: "easeInOut" },
          }}
          pos={"relative"}
          color={"#fff"}
          fontFamily={"bukrabold"}
          _after={{
            position: "absolute",
            width: "40px",
            height: "5px",
            content: `""`,
            backgroundColor: "#fa6800",
            borderRadius: "20px",
            right: "0",
            bottom: "-20px",
          }}
        >
          {t("ourNew")}
        </Heading>
        <Text
          py={8}
          color={"#fff"}
          fontSize={"sm"}
          as={motion.p}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.35 },
          }}
        >
          {t("ourNewDescription")}
        </Text>
      </Box>
      <Box pos={"relative"}>
        <Box
          ref={sliderRef}
          className="keen-slider"
          maxW={"85vw"}
          mx="auto"
          dir={currentDir}
        >
          {data.data.map((news) => {
            return (
              <Box
                pos={"relative"}
                key={news.id}
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  },
                }}
              >
                <Box
                  className={`keen-slider__slide number-slide${news.id}`}
                  pt={"20px"}
                >
                  <Box
                    display={"block"}
                    width={"100%"}
                    borderRadius="15px"
                    overflow={"hidden"}
                  >
                    <Image
                      priority
                      alt="our new image"
                      src={news.img}
                      width={"4031"}
                      height={"3024"}
                      layout={"responsive"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Box color={"#fff"} pos="relative">
                    <Heading fontSize={"x-large"} py={6}>
                      {news.title}
                    </Heading>
                    <Text fontSize={"smaller"} textAlign="justify">
                      {news.desc}
                    </Text>
                  </Box>
                  <Text
                    pos={"absolute"}
                    align={"left"}
                    top={"-0px"}
                    borderRadius={"full"}
                    zIndex={"5"}
                    bgColor={"#f59329"}
                    py={3}
                    px={5}
                    left={"20px"}
                    color={"#fff"}
                    fontSize={"sm"}
                    w={"120px"}
                    lineHeight={1}
                  >
                    {news.date}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>

        {loaded && instanceRef.current && (
          <Flex>
            <Box
              pos={"absolute"}
              top="30%"
              right={"3%"}
              cursor="pointer"
              transition="all .5s ease"
              opacity={"0.5"}
              _hover={{ opacity: 1, transition: "all .5s ease" }}
            >
              <Rightarrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                width="25px"
              />
            </Box>
            <Box
              pos={"absolute"}
              top="30%"
              left={"3%"}
              cursor="pointer"
              transition="all .5s ease"
              opacity={"0.5"}
              _hover={{ opacity: 1, transition: "all .5s ease" }}
            >
              <Leftarrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                width="25px"
              />
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
