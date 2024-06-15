import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Avatar,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  VStack,
  SimpleGrid,
  Grid,
  Stack,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Flex direction="column">
          <Flex alignItems="center" mb={4}>
            <Avatar name="K" size="2xl" />
            <Box ml={4}>
              <Stack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold">
                  Abaslon
                </Text>
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                  <Box>
                    <Text>1</Text>
                    <Text color="gray.500">Enquiries</Text>
                  </Box>
                  <Box>
                    <Text>1</Text>
                    <Text color="gray.500">Quotation Sent</Text>
                  </Box>
                  <Box>
                    <Text>1</Text>
                    <Text color="gray.500">Invoice Sent</Text>
                  </Box>
                  <Box>
                    <Text fontSize="xl" color="green.500" fontWeight="bold">
                      INR 12,000
                    </Text>
                    <Text color="gray.500">Business Revenue</Text>
                  </Box>
                </Grid>
              </Stack>
            </Box>
          </Flex>

          <Tabs mt={5} variant="enclosed">
            <TabList>
              <Tab>Client Details</Tab>
              <Tab>Enquired</Tab>
              <Tab>Quotation Sent</Tab>
              <Tab>Invoice Sent</Tab>
              <Tab>Payment History</Tab>
              <Tab>Documents/Files</Tab>
              <Tab>Family Members</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={3} spacing={4}>
                  <VStack align="start">
                    <Text>
                      <strong>Name:</strong> Abaslon
                    </Text>
                    <Text>
                      <strong>Gender:</strong> Male
                    </Text>
                    <Text>
                      <strong>Is Married:</strong> Yes
                    </Text>
                    <Text>
                      <strong>Relationship:</strong> Husband
                    </Text>
                    <Text>
                      <strong>Address:</strong> 76 Chemin Challet, LRLE
                      Nord-Parl-de-calate 560068
                    </Text>
                    <Text>
                      <strong>Date of Birth:</strong> 16-Nov-1995
                    </Text>
                    <Text>
                      <strong>Anniversary Date:</strong> 26-Sep-2016
                    </Text>
                  </VStack>

                  <VStack align="start">
                    <Text>
                      <strong>Email-ID:</strong> abcd@gmail.com
                    </Text>
                    <Text>
                      <strong>Skype-ID:</strong> abcd@gmail.com
                    </Text>
                    <Text>
                      <strong>Facebook-ID:</strong> abcd@facebook.com
                    </Text>
                    <Text>
                      <strong>Instagram-ID:</strong> abcd@insta.com
                    </Text>
                    <Text>
                      <strong>Twitter-ID:</strong> abcd@twitter.com
                    </Text>
                    <Text>
                      <strong>Contact Number:</strong>{" "}
                      <Link href="tel:+919876543210">+91-9876543210</Link>
                    </Text>
                    <Text>
                      <strong>WhatsApp:</strong>{" "}
                      <Link href="https://wa.me/919876543210">
                        +91-9876543210
                      </Link>
                    </Text>
                  </VStack>

                  <VStack align="start">
                    <Text>
                      <strong>Tax Number:</strong> N/A
                    </Text>
                    <Text>
                      <strong>Lead Source:</strong> Email Marketing
                    </Text>
                    <Text>
                      <strong>Last Enquired:</strong> 3 months ago
                    </Text>
                    <Text>
                      <strong>Created on:</strong> 16-Sep-2023
                    </Text>
                    <Text>
                      <strong>Website:</strong> N/A
                    </Text>
                    <Text>
                      <strong>Service Type:</strong> Greece Wedding Tour
                    </Text>
                    <Text>
                      <strong>Last Purchased:</strong> N/A
                    </Text>
                  </VStack>
                </SimpleGrid>
              </TabPanel>
              {/* Other Tab Panels can be filled similarly */}
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Profile;
