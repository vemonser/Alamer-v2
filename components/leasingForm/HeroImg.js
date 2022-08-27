import { Box, Heading, Flex ,Text} from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import heroImg from "../../public/images/about/Asset 1.png";
import { motion } from "framer-motion";
export default function AboutusHeroImg({ currentDir }) {
  const { t } = useTranslation("home");
  return (
    <Flex h={"50vh"} w={"100%"} pos="relative">
      <Image
        src={heroImg}
        layout="fill"
        alt="contact us hero image"
        objectFit="cover"
        objectPosition={" top top "}
      />
      <Box>
        <Flex
          pos={"absolute"}
          dir="rtl"
          top="0"
          left="0"
          right="0"
          bottom="0"
          direction={"column"}
          mx="auto"
          zIndex={10}
          fontFamily={"29"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"#fff"}
        >
          <Heading fontFamily={"bukrabold"}>{t("leasingForm")}</Heading>
          <Text>{t("contactDescription")}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
