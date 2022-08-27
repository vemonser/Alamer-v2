import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Flex,
  Text,
  Box,
  IconButton,
  HStack,
  background,
} from "@chakra-ui/react";

import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";

import { CSSTransition } from "react-transition-group";

import { ArrowLeftIcon } from "@chakra-ui/icons";
import data from "../../locales/ar/home.json";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../public/images/common/Facebook";
import Twitter from "../../public/images/common/Twitter";
import Instagram from "../../public/images/common/Instagram";
import { useRouter } from "next/router";
import LogoTextOnly from "../../public/images/home/LogoTextOnly";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export default function Navbar({ currentDir }) {
  const { t } = useTranslation("home");
  const [isopen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isopen);
  };
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const currentHeightBgColor = clientWindowHeight >= 200 ? true : false;

  const [isFacebook, setisFacebook] = useState(
    currentHeightBgColor ? "#3c21336b" : "#fff"
  );
  const [isTwitter, setisTwitter] = useState(
    currentHeightBgColor ? "#3c21336b" : "#fff"
  );
  const [isInstagram, setisInstagram] = useState(
    currentHeightBgColor ? "#3c21336b" : "#fff"
  );

  const { pathname, query, asPath } = useRouter();

  const [isHoverd, setIsHoverd] = useState(false);

  const [isLink, setIsLink] = useState(false);
  const toggleLink = () => {
    setIsLink(!isLink);
  };

  const percent = currentDir === "rtl" ? "63%" : "33%";
  const bgChecking = currentHeightBgColor ? "#3c2133" : "#fff";
  const langCheckingAr = currentDir === "rtl" ? "#f37625" : bgChecking;
  const langCheckingEn = currentDir === "ltr" ? "#f37625" : bgChecking;

  // for dropdown
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    setisFacebook(currentHeightBgColor ? "#3c21336b" : "#fff");
    setisTwitter(currentHeightBgColor ? "#3c21336b" : "#fff");
    setisInstagram(currentHeightBgColor ? "#3c21336b" : "#fff");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }),
    [handleScroll];

  // const hamMenu = {
  //   color: { backgroundColor: "#fff" },
  //   setcolor: { backgroundColor: "#3c2133" },
  //   initialtop: { top: 0 },
  //   opentop: { rotate: "45deg" },
  //   initialMid: { top: "40%", opacity: 1 },
  //   openMid: { top: "40%", opacity: 0 },
  //   initialbottom: { bottom: 0 },
  //   openbottom: { rotate: "-45deg" },
  // };

  return (
    <Box
      dir={currentDir}
      px={4}
      pos="fixed"
      zIndex="20"
      w="100%"
      boxShadow={currentHeightBgColor ? "xl" : "none"}
      bgColor={currentHeightBgColor ? "#fff" : "transparent"}
      transition={"all 500ms ease"}
    >
      <Flex
        maxW={"1250px"}
        mx="auto"
        h="80px"
        pr={currentDir === "rtl" ? 16 : 0}
        pl={currentDir === "ltr" ? 16 : 0}
        py="5"
        align="center"
        justify={"space-between"}
      >
        <Flex justify={"space-between"}>
          <Box
            as={motion.div}
            position={"relative"}
            w="120%"
            h="80px"
            onMouseEnter={() => {
              setIsHoverd(true);
            }}
            onMouseLeave={() => {
              setIsHoverd(false);
            }}
            initial={false}
            animate={isHoverd ? "hoverd" : "notHoverd"}
          >
            <Link href="/" >
              <Box
              cursor={"pointer"}
                as={motion.div}
                pos={"relative"}
                top="0px"
                w={"80px"}
                left=" 0"
              >
                <Box
                  as={motion.div}
                  initial={false}
                  zIndex="10"
                  pos={"absolute"}
                  w={"50px"}
                  variants={{
                    notHoverd: { x: 60, y: 7.5 },
                    hoverd: { x: 80, y: 7.5 },
                  }}
                >
                  <Image
                    priority
                    src={data.navbarImg}
                    alt="navbar logo"
                    height={"125"}
                    width={"90"}
                    layout="responsive"
                  />
                </Box>
                <Box
                  as={motion.div}
                  pos={"absolute"}
                  w={"100px"}
                  initial={false}
                  variants={{
                    notHoverd: { x: 30, opacity: 0, y: 27.5 },
                    hoverd: { x: 20, opacity: 1, y: 27.5 },
                  }}
                >
                  <LogoTextOnly
                    width="90px"
                    zIndex="10"
                    color={currentHeightBgColor ? "#3c2133" : "#fff"}
                  />
                </Box>
              </Box>
            </Link>
          </Box>
          <Flex
            justify={"space-between"}
            display={{ base: "none", md: "none", lg: "flex", xl: "Flex" }}
          >
            <HStack
              as={motion.nav}
              transition={"all 500ms ease"}
              color={currentHeightBgColor ? "#3c2133" : "#fff"}
              onMouseEnter={toggleLink}
              gap={2}
            >
              {data.navLinkHome.map((item, i) => (
                <Link key={i} href={item.route}>
                  <Text
                    fontFamily="bukrabold"
                    cursor={"pointer"}
                    bgColor={"transparent"}
                    fontSize="smaller"
                    pos={"relative"}
                    w={"max-content"}
                    _after={{
                      content: `""`,
                      position: "absolute",
                      width: "100%",
                      transform: " scaleX(0)",
                      height: "2px",
                      bottom: "-10px",
                      left: 0,
                      backgroundColor: "#fa9800",
                      transformOrigin: "bottom left",
                      transition: "transform 250ms ease-out",
                    }}
                    _hover={{
                      _after: {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom right",
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}

              {/* ===========================================> https://codesandbox.io/s/dropdown-menu-chakra-forked-rbrjyh?file=/src/App.js:0-3855   <======================= */}

              <Menu closeOnSelect={false} dir={currentDir}>
                <MenuButton
                  w="max-content"
                  pos={"relative"}
                  _after={{
                    content: `""`,
                    position: "absolute",
                    width: "100%",
                    transform: " scaleX(0)",
                    height: "2px",
                    bottom: "-10px",
                    left: 0,
                    backgroundColor: "#fa9800",
                    transformOrigin: "bottom left",
                    transition: "transform 250ms ease-out",
                  }}
                  _hover={{
                    _after: {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom right",
                    },
                  }}
                >
                  <Text
                    fontSize="smaller"
                    fontFamily={"bukrabold"}
                    color={currentHeightBgColor ? "#3c2133" : "#fff"}
                  >
                    {t("departmentsNavbar")}
                  </Text>
                </MenuButton>

                <MenuList
                  style={{
                    height: menuHeight,
                    transform: "translateX(-200%) ",
                  }}
                >
                  <CSSTransition
                    in={activeMenu === "main"}
                    timeout={150}
                    unmountOnExit
                    onEnter={calcHeight}
                  >
                    <Box as={motion.div}>
                      <Text
                        onClick={() => setActiveMenu("shopping")}
                        fontFamily={"bukrabold"}
                        fontSize="smaller"
                        color={"#3c2133"}
                        transition={"all 250ms ease-in-out"}
                        cursor={"pointer"}
                        _hover={{
                          background: "#c0c0c0c0",
                          transition: "all 250ms ease-in-out",
                        }}
                        py={2}
                        px={2}
                      >
                        {t("departmentsShoppingLink")}
                      </Text>
                      <Text
                        onClick={() => setActiveMenu("restaurants")}
                        fontFamily={"bukrabold"}
                        fontSize="smaller"
                        color={"#3c2133"}
                        transition={"all 250ms ease-in-out"}
                        cursor={"pointer"}
                        _hover={{
                          background: "#c0c0c0c0",
                          transition: "all 250ms ease-in-out",
                        }}
                        py={2}
                        px={2}
                      >
                        {t("departmentsRestaurantsLink")}
                      </Text>
                      <Text
                        onClick={() => setActiveMenu("entertainment")}
                        fontFamily={"bukrabold"}
                        fontSize="smaller"
                        color={"#3c2133"}
                        transition={"all 250ms ease-in-out"}
                        cursor={"pointer"}
                        _hover={{
                          background: "#c0c0c0c0",
                          transition: "all 250ms ease-in-out",
                        }}
                        py={2}
                        px={2}
                      >
                        {t("departmentsEntertainmentLink")}
                      </Text>
                    </Box>
                  </CSSTransition>

                  <CSSTransition
                    in={activeMenu === "shopping"}
                    timeout={250}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                  >
                    <div className="menu-container">
                      <HStack>
                        <Box>
                          <IconButton
                            variant="outlined"
                            icon={<MdChevronLeft />}
                            onClick={() => setActiveMenu("main")}
                          />
                        </Box>
                      </HStack>

                      {data.departmentsShoppingLinks.map((shop) => {
                        return (
                          <Link href={shop.route} key={shop.name}>
                            <Text
                              fontFamily={"bukrabold"}
                              fontSize="smaller"
                              color={"#3c2133"}
                              transition={"all 250ms ease-in-out"}
                              cursor={"pointer"}
                              _hover={{
                                background: "#c0c0c0c0",
                                transition: "all 250ms ease-in-out",
                              }}
                              py={2}
                              px={2}
                            >
                              {shop.name}
                            </Text>
                          </Link>
                        );
                      })}
                    </div>
                  </CSSTransition>

                  <CSSTransition
                    in={activeMenu === "restaurants"}
                    timeout={250}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                  >
                    <div className="menu-container">
                      <HStack>
                        <Box>
                          <IconButton
                            variant="outlined"
                            icon={<MdChevronLeft />}
                            onClick={() => setActiveMenu("main")}
                          />
                        </Box>
                      </HStack>

                      {data.departmentsRestaurantsLinks.map((restaurant) => {
                        return (
                          <Link href={restaurant.route} key={restaurant.name}>
                            <Text
                              fontFamily={"bukrabold"}
                              fontSize="smaller"
                              color={"#3c2133"}
                              transition={"all 250ms ease-in-out"}
                              cursor={"pointer"}
                              _hover={{
                                background: "#c0c0c0c0",
                                transition: "all 250ms ease-in-out",
                              }}
                              py={2}
                              px={2}
                            >
                              {restaurant.name}
                            </Text>
                          </Link>
                        );
                      })}
                    </div>
                  </CSSTransition>

                  <CSSTransition
                    in={activeMenu === "entertainment"}
                    timeout={250}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                  >
                    <div className="menu-container">
                      <HStack>
                        <Box>
                          <IconButton
                            variant="outlined"
                            icon={<MdChevronLeft />}
                            onClick={() => setActiveMenu("main")}
                          />
                        </Box>
                      </HStack>

                      {data.departmentsEntertainmentLinks.map(
                        (entertainment) => {
                          return (
                            <Link
                              href={entertainment.route}
                              key={entertainment.name}
                            >
                              <Text
                                fontFamily={"bukrabold"}
                                fontSize="smaller"
                                color={"#3c2133"}
                                transition={"all 250ms ease-in-out"}
                                cursor={"pointer"}
                                _hover={{
                                  background: "#c0c0c0c0",
                                  transition: "all 250ms ease-in-out",
                                }}
                                py={2}
                                px={2}
                              >
                                {entertainment.name}
                              </Text>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </CSSTransition>
                </MenuList>
              </Menu>
              {data.navbarLinks.map((item, i) => (
                <Link key={i} href={item.route}>
                  <Text
                    fontFamily="bukrabold"
                    cursor={"pointer"}
                    bgColor={"transparent"}
                    fontSize="smaller"
                    pos={"relative"}
                    w={"max-content"}
                    _after={{
                      content: `""`,
                      position: "absolute",
                      width: "100%",
                      transform: " scaleX(0)",
                      height: "2px",
                      bottom: "-10px",
                      left: 0,
                      backgroundColor: "#fa9800",
                      transformOrigin: "bottom left",
                      transition: "transform 250ms ease-out",
                    }}
                    _hover={{
                      _after: {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom right",
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </HStack>
            {/*=============================================== */}
          </Flex>
        </Flex>
        <Flex align={"center"} gap={5}>
          <Flex
            pos="relative"
            gap={8}
            justify="center"
            display={{ base: "none", md: "none", lg: "flex", xl: "Flex" }}
          >
            <Box
              _after={{
                position: "absolute",
                width: "2px",
                height: "20px",
                content: `""`,
                backgroundColor: "#cecece",
                borderRadius: "20px",
                right: percent,
                bottom: "0px",
              }}
            ></Box>
            <Box
              fontSize={"sm"}
              color={langCheckingAr}
              fontFamily={"bukrabold"}
            >
              <Link
                key={"ar"}
                href={{ pathname, query }}
                as={asPath}
                locale={"ar"}
              >
                AR
              </Link>
            </Box>
            <Box
              fontSize={"sm"}
              color={langCheckingEn}
              fontFamily={"bukrabold"}
            >
              <Link
                key={"en"}
                href={{ pathname, query }}
                as={asPath}
                locale={"en"}
              >
                EN
              </Link>
            </Box>
          </Flex>
          <Flex
            zIndex="20"
            gap={2}
            align={"center"}
            display={{ base: "none", md: "none", lg: "flex", xl: "Flex" }}
          >
            <Link href="https://www.facebook.com">
              <Box
                onMouseEnter={() => setisFacebook(() => "#fa6800")}
                onMouseLeave={() =>
                  setisFacebook(() =>
                    currentHeightBgColor ? "#3c21336b" : "#fff"
                  )
                }
                cursor="pointer"
              >
                <Facebook width={30} height={30} color={isFacebook} />
              </Box>
            </Link>
            <Link href="https://www.twitter.com">
              <Box
                onMouseEnter={() => setisTwitter(() => "#fa6800")}
                onMouseLeave={() =>
                  setisTwitter(() =>
                    currentHeightBgColor ? "#3c21336b" : "#fff"
                  )
                }
                cursor="pointer"
              >
                <Twitter width={30} height={30} color={isTwitter} />
              </Box>
            </Link>
            <Link href="https://www.instagram.com">
              <Box
                onMouseEnter={() => setisInstagram(() => "#fa6800")}
                onMouseLeave={() =>
                  setisInstagram(() =>
                    currentHeightBgColor ? "#3c21336b" : "#fff"
                  )
                }
                cursor="pointer"
              >
                <Instagram width={30} height={30} color={isInstagram} />
              </Box>
            </Link>
          </Flex>
        </Flex>
        <Box display={{ base: "block", lg: "none" }} zIndex="6">
          <Box
            as={motion.div}
            pos="relative"
            cursor={"pointer"}
            w="30px"
            h="15px"
            onClick={toggleOpen}
            initial={false}
            animate={isopen ? "open" : "closed"}
          >
            <Box
              as={motion.span}
              pos="absolute"
              w="30px"
              h="2px"
              bgColor={bgChecking}
              variants={{
                closed: {
                  top: 0,
                  background: { bgChecking },
                },
                open: { rotate: "45deg", top: "50%", background: "#fff" },
              }}
            ></Box>
            <Box
              as={motion.span}
              pos="absolute"
              w="30px"
              h="2px"
              bgColor={bgChecking}
              variants={{
                closed: { top: "46%", opacity: 1 },
                open: { opacity: 0 },
              }}
            ></Box>
            <Box
              as={motion.span}
              pos="absolute"
              w="30px"
              h="2px"
              bgColor={bgChecking}
              bottom="0"
              variants={{
                closed: { bottom: 0, background: { bgChecking } },
                open: { rotate: "-45deg", bottom: "40%", background: "#fff" },
              }}
            ></Box>
          </Box>
        </Box>
      </Flex>
      {isopen && (
        <Flex
          bgColor="#3c2133"
          as={motion.div}
          variants={{
            open: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              left: "0",
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
              backgroundColor: "transparent",
            },
          }}
          animate={isopen ? "open" : "closed"}
          display={"flex"}
          gap={"2%"}
          top="0%"
          pos={"fixed"}
          left="-200px"
          h={"100vh"}
          w={"100vw"}
          zIndex={5}
          pl={5}
          pt={"20%"}
          fontFamily={"bukrabold"}
          align={"center"}
          flexDir={"column"}
        >
          {data.navbarLinks.map((item, i) => (
            <Link key={i} href={item.route}>
              <Button
                pos={"relative"}
                color={"#fff"}
                outline="none"
                bgColor={"transparent"}
                onClick={toggleOpen}
                _focus={{
                  outline: "none",
                  background: "transparent",
                  border: "none",
                }}
                _after={{
                  content: `""`,
                  position: "absolute",
                  width: "100%",
                  transform: " scaleX(0)",
                  height: "2px",
                  bottom: "0px",
                  left: 0,
                  backgroundColor: "#fa9800",
                  transformOrigin: "bottom left",
                  transition: "transform 250ms ease-out",
                }}
                _hover={{
                  _after: {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom right",
                  },
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <Box
            fontSize={"sm"}
            color={currentDir === "rtl" ? "#f37625" : "#fff"}
            fontFamily={"bukrabold"}
          >
            <Link
              key={"ar"}
              href={{ pathname, query }}
              as={asPath}
              locale={"ar"}
            >
              AR
            </Link>
          </Box>
          <Box
            fontSize={"sm"}
            color={currentDir === "ltr" ? "#f37625" : "#fff"}
            fontFamily={"bukrabold"}
          >
            <Link
              key={"en"}
              href={{ pathname, query }}
              as={asPath}
              locale={"en"}
            >
              EN
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
