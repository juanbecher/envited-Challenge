import { event } from "../store/event";
import { useAtom } from "jotai";
import Layout from "../components/Layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BsCalendar4Event } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Event = () => {
  const [eventValues, seteventValues] = useAtom(event);

  return (
    <Layout>
      {/* Image */}
      <Box width={"100%"}>
        <Image width="375px" height="375px" src="/Birthday cake.png" />
      </Box>
      {/* Content */}
      <Box marginX={"10px"} marginY={"20px"}>
        {/* Event name */}
        <Typography
          variant="h4"
          fontSize={"28px"}
          fontWeight="700"
          color={"#240D57"}
        >
          {eventValues.eventName}
        </Typography>
        {/* Host name */}
        <Typography variant="body1" color={"#828282"}>
          Hosted by <strong>{eventValues.hostName}</strong>
        </Typography>
        {/* Dates */}
        <Box marginTop={"30px"} marginBottom={"16px"} display="flex">
          <Box
            width={"48px"}
            height={"48px"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <BsCalendar4Event width={"20px"} height={"20px"} />
          </Box>
          <Box  margin={'auto 0'}>
              <Typography
                variant="h4"
                fontSize={"16px"}
                fontWeight="700"
                color={"#240D57"}
              >
                {eventValues.startDate}
              </Typography>
              <Typography
                variant="h4"
                fontSize={"14px"}
                fontWeight="400"
                color={"#4F4F4F"}
              >
                to <strong>{eventValues.endDate}</strong>
              </Typography>
            </Box>
        </Box>
        {/* Location */}
        <Box marginBottom={"16px"} display="flex">
          <Box
            width={"48px"}
            height={"48px"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <GoLocation width={"20px"} height={"20px"} />
          </Box>
          <Box margin={'auto 0'}>
              <Typography
                variant="h4"
                fontSize={"16px"}
                fontWeight="700"
                color={"#240D57"}
              >
                {eventValues.location}
              </Typography>
              <Typography
                variant="h4"
                fontSize={"14px"}
                fontWeight="400"
                color={"#4F4F4F"}
              >
                Suburb, State, Postcode
              </Typography>
            </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Event;
