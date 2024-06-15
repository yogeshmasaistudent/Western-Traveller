import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Text,
  Tabs,
  Tab,
  TabList,
  Avatar,
  IconButton,
  Stack,
  Grid,
  GridItem,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, EmailIcon } from "@chakra-ui/icons";
import {
  MdAssignmentTurnedIn,
  MdClose,
  MdOutlineReorder,
} from "react-icons/md";
import "./styles.css"; // Import the external CSS file

const User = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Heading as="h3" size="lg">
            List of Invoice Templates
          </Heading>
          <Button leftIcon={<EditIcon />} variant="outline">
            Go Back
          </Button>
        </Box>

        <Box display="flex" alignItems="center" mb={4} bg="#DDE1E4" p="3px">
          <Text fontSize="lg" mr={2}>
            Stage:
          </Text>
          <Button colorScheme="blue">Follow up</Button>
          <Box ml="auto">
            <IconButton icon={<MdOutlineReorder />} mr={2} />
            <IconButton icon={<MdClose />} mr={2} />
            <IconButton icon={<EditIcon />} mr={2} />
            <IconButton icon={<DeleteIcon />} mr={2} />
            <IconButton icon={<EmailIcon />} mr={2} />
            <IconButton icon={<MdAssignmentTurnedIn />} />
          </Box>
        </Box>

        <Flex justifyContent="space-between">
          <Avatar name="Craig Perez" mb={4} size="md" />
          <Center>
            <Text color="red"> Next Action:</Text>
            Call: 07 Dec 21 10:00 PM | Meet: 11 Jan 21 | Task: 16 Feb 22
          </Center>
        </Flex>

        <Tabs variant="unstyled" className="custom-tabs">
          <TabList className="custom-tablist">
            <Tab
              className="custom-tab"
              data-selected={selectedTab === 0}
              onClick={() => handleTabChange(0)}
            >
              New
            </Tab>
            <Tab
              className="custom-tab"
              data-selected={selectedTab === 1}
              onClick={() => handleTabChange(1)}
            >
              Followup
            </Tab>
            <Tab
              className="custom-tab"
              data-selected={selectedTab === 2}
              onClick={() => handleTabChange(2)}
            >
              Potential
            </Tab>
            <Tab
              className="custom-tab"
              data-selected={selectedTab === 3}
              onClick={() => handleTabChange(3)}
            >
              Positive
            </Tab>
            <Tab
              className="custom-tab"
              data-selected={selectedTab === 4}
              onClick={() => handleTabChange(4)}
            >
              Converted
            </Tab>
            <Tab
              className="custom-tab"
              data-selected={selectedTab === 5}
              onClick={() => handleTabChange(5)}
            >
              Close
            </Tab>
          </TabList>
        </Tabs>

        <Stack direction="row" spacing={1}>
          <Text>Leads:</Text>
          <Button color="white" bg="black" fontSize="13px">
            Add Call/Follow-up Log
          </Button>
          <Button color="white" bg="black" fontSize="13px">
            Follow-up History
          </Button>
          <Button color="white" bg="black" fontSize="13px">
            Fix Meeting
          </Button>
          <Button color="white" bg="black" fontSize="13px">
            Add Task
          </Button>
          <Button color="white" bg="black" fontSize="13px">
            Add Notes
          </Button>
          <Button color="white" bg="black" fontSize="13px">
            Sent Quotation History
          </Button>
        </Stack>

        <Box p={5} borderRadius="lg" marginTop="10px">
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            <GridItem>
              <Text>
                <b>Lead ID:</b> F2D800946
              </Text>
              <Text>
                <b>Name:</b> Absalon
              </Text>
              <Text>
                <b>Travel Date:</b> 16-Nov-1995 to 25-Nov-1995
              </Text>
              <Text>
                <b>Number of Days:</b> 7 days
              </Text>
              <Text>
                <b>Lead Source:</b> Cinema Advertisement
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                <b>Email-ID:</b> abcd@gmail.com
              </Text>
              <Text>
                <b>Travel Location:</b> Maldives
              </Text>
              <Text>
                <b>Travellers:</b> 2
              </Text>
              <Text>
                <b>Created on:</b> 26-Nov-20
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                <b>Company Name:</b> Totem Travel Ltd
              </Text>
              <Text>
                <b>Contact Number:</b> 9876543210
              </Text>
              <Text>
                <b>Travel Type:</b> Anniversary
              </Text>
              <Text>
                <b>Lead Owner:</b> Diana
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default User;
