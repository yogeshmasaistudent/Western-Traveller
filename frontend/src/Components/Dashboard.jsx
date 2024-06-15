import { Box, Divider, Flex, Select, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoMdBus } from "react-icons/io";
import { FaTrainSubway } from "react-icons/fa6";

import styles from "./Dashboard.module.css"
function Dashboard() {
  return (
    <div>
      <Text>Followup Leads</Text>
      <Flex className={styles.firstContener}>
        <Box>
          <Text>#F2D20920</Text>
          <select style={{ color: "white", backgroundColor: "blue" }}>
            <option>Potential</option>
            <option>User1</option>
            <option>User1</option>
          </select>
        </Box>

        <Spacer />
        <strong>
          <Text>James Marcotte</Text>
        </strong>

        <Spacer />
        <Box>
          <Text>itely</Text>
          <Text>Family group tower</Text>
        </Box>

        <Spacer />
        <Box>
          <Text>01-Jun-2023</Text>
          <Text>Till 08-june(1N/D)</Text>
        </Box>

        <Spacer />
        <Box>
          <Text>INR 15,000</Text>
          <Text>Total</Text>
        </Box>

        <Spacer />
        <Box>
          <Text>Call 19-march-2022</Text>
          <Flex gap="10px">
            <FaPhoneAlt />
            <Text>6:00pm</Text>
          </Flex>
        </Box>
      </Flex>

      {/* Requrement contaner  */}
      <Flex className={styles.Requirementcontener}>
        <Box>
          <Text>Requirement</Text>
          <Flex gap="8px">
            <IoAirplaneSharp />
            <IoAirplaneSharp />
            <IoMdBus />
            <FaTrainSubway />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default Dashboard;
