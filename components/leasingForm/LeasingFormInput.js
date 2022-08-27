import {
  Box,
  Button,
  Heading,
  Textarea,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
// import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";

export default function LeasingFormInput({ currentDir }) {
  let [value, setValue] = useState("");
  const { t } = useTranslation("home");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Box
      py={20}
      dir={currentDir}
      top={"-120px"}
      mb={"-120px"}
      blur="2px"
      style={{
        background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
        backgroundRepeat: "repeat-y",

        backgroundSize: "100%",
        height: "max-content",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          companyName: "",
          job: "",
          email: "",
          phone: "",
          cellPhone: "",
          brandType: "",
          brandOwnership: "",
          activityType: "",
          notes: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Box pb={40} maxW={"70vw"} mx="auto" h={"max-content"} opacity="1">
          <Form>
            <Flex flexDir={"column"} gap={3}>
              <Flex gap={3}>
                <Flex flex="1" >
                  <Text htmlFor="firstName"> </Text>
                  <Input
                    bg="#fff"
                    boxShadow="0px 1px 0px #cecece"
                    id="firstName"
                    size="sm"
                    borderRadius="md"
                    name="firstName"
                    placeholder={t("firstName")}
                  />
                </Flex>
                <Flex flex="1" >
                  <Text htmlFor="lastName"></Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    borderRadius="md"
                    boxShadow="0px 1px 0px #cecece"
                    id="lastName"
                    name="lastName"
                    placeholder={t("lastName")}
                    size="sm"
                  />
                </Flex>
              </Flex>
              <Flex gap={3}>
                <Flex flex="1">
                  <Text htmlFor="companyName"> </Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    boxShadow="0px 1px 0px #cecece"
                    id="companyName"
                    size="sm"
                    borderRadius="md"
                    name="companyName"
                    placeholder={t("companyName")}
                  />
                </Flex>
                <Flex flex="1">
                  <Text htmlFor="job"></Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    borderRadius="md"
                    boxShadow="0px 1px 0px #cecece"
                    id="job"
                    name="job"
                    placeholder={t("job")}
                    size="sm"
                  />
                </Flex>
              </Flex>
              <Flex gap={3}>
                <Flex flex="1">
                  <Text htmlFor="email"></Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    borderRadius="md"
                    boxShadow="0px 1px 0px #cecece"
                    id="email"
                    name="email"
                    placeholder={t("email")}
                    type="email"
                    size="sm"
                  />
                </Flex>
                <Flex flex="1">
                  <Text htmlFor="phone"> </Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    boxShadow="0px 1px 0px #cecece"
                    id="phone"
                    size="sm"
                    borderRadius="md"
                    name="phone"
                    type="number"
                    placeholder={t("phone")}
                  />
                </Flex>
              </Flex>
              <Flex gap={3}>
                <Flex flex="1">
                  <Text htmlFor="cellPhone"> </Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    boxShadow="0px 1px 0px #cecece"
                    id="cellPhone"
                    size="sm"
                    borderRadius="md"
                    name="cellPhone"
                    type="number"
                    placeholder={t("cellPhone")}
                  />
                </Flex>
                <Flex flex="1">
                  <Text htmlFor="brandType"></Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    borderRadius="md"
                    boxShadow="0px 1px 0px #cecece"
                    id="brandType"
                    name="brandType"
                    placeholder={t("brandType")}
                    size="sm"
                  />
                </Flex>
              </Flex>
              <Flex gap={3}>
                <Flex flex="1">
                  <Text htmlFor="brandOwnership"> </Text>
                  <Input
                    border={"1px solid #000"}
                    bg="#fff"
                    id="brandOwnership"
                    boxShadow="0px 1px 0px #cecece"
                    size="sm"
                    borderRadius="md"
                    name="brandOwnership"
                    placeholder={t("brandOwnership")}
                  />
                </Flex>
                <Flex flex="1">
                  <Text htmlFor="activityType"></Text>
                  <Input
                    bg="#fff"
                    borderRadius="md"
                    boxShadow="0px 1px 0px #cecece"
                    id="activityType"
                    name="activityType"
                    placeholder={t("activityType")}
                    size="sm"
                  />
                </Flex>
              </Flex>
              <Box py={3}>
                <Textarea
                  boxShadow="1px 1px 2px #cecece"
                  htmlFor="notes"
                  borderRadius="md"
                  value={value}
                  id="notes"
                  name="notes"
                  onChange={handleInputChange}
                  placeholder={t("notes")}
                  rows="8"
                  size="sm"
                />
              </Box>
              <Flex justify={"flex-end"}>
                <Button
                  boxShadow="0px 1px 0px #cecece"
                  borderRadius="md"
                  bgColor="#fa6800"
                  color="#fff"
                  px={8}
                  type="submit"
                  _hover={{ background: "#fa4800" }}
                >
                  {t("send")}
                </Button>
              </Flex>
            </Flex>
          </Form>
        </Box>
      </Formik>
    </Box>
  );
}
