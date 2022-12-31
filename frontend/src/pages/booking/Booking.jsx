import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import SingleBooking from "./SingleBooking";
import { DataContext } from "../../context/DataProvider";
import Spinner from "../../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const fromInSearch = searchParams.get("from");
  const toInSearch = searchParams.get("to");
  const dateInSearch = searchParams.get("date");
  const { journeyDate, fromToLocation } = React.useContext(DataContext);
  const {
    data: data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buses"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/buses?from=${fromInSearch}&to=${toInSearch}`
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const bookings = data.data;
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  // const filteredBooking = bookings.filter(
  //   (booking) =>
  //     booking.departureLocation === fromToLocation.from &&
  //     booking.arrivalLocation === fromToLocation.to
  // );
  console.log(bookings);
  return (
    <Box
      sx={{
        py: "30px",
        backgroundColor: "#FBF9F2",
        height: "auto",
        mt: "80px",
      }}
    >
      {bookings?.map((booking) => (
        <SingleBooking
          key={booking._id}
          booking={booking}
          refetch={refetch}
        ></SingleBooking>
      ))}
    </Box>
  );
};

export default Booking;
