import { Typography, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { Formik, Field, useFormik } from "formik";
import BasicDateTimePicker from "../components/DateTimePicker";
import { Box } from "@mui/system";
import { useState } from "react";
import Router from "next/router";
import { useAtom } from "jotai";
import { event } from "../store/event";
import Image from "next/image";

const Form = styled.form`
  display: grid;
  row-gap: 1rem;
  margin: 0 27px;
`;

const Create = () => {
  const [values, setValues] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    photo: "",
  });

  const [eventValues, seteventValues] = useAtom(event);
  console.log(values)
  // Handle input change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // Handle event submit
  const handleSubmit = (e) => {
    e.preventDefault();

    seteventValues(values);
    Router.push("/event");
  };

  return (
    <Layout>
      <Typography variant="h4" textAlign="center">
        Create your event
      </Typography>
      <Box marginY={"20px"}>
        <Form onSubmit={handleSubmit}>
          {/* Event name */}
          <TextField
            fullWidth
            id="eventName"
            name="eventName"
            label="Event name"
            onChange={handleChange}
          />
          {/* Host name */}
          <TextField
            fullWidth
            id="hostName"
            name="hostName"
            label="Host name"
            onChange={handleChange}
          />
          {/* Start Date */}
          <BasicDateTimePicker name={'startDate'} labelText={"Start date"} setValues={setValues}/>
          {/* End Date */}
          <BasicDateTimePicker name={'endDate'} labelText={"End date"} setValues={setValues}/>
          {/* Location */}
          <TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            onChange={handleChange}
          />
          {/* Photo */}
          <Button variant="contained" component="label">
            Upload photo
            <input name="photo" type="file" hidden onChange={handleChange} />
          </Button>
          {/* <Image layout="fill" src='C:/fakepath/supra.png'/> */}
          {/* {values.photo != '' && 
          <image layout="fill" src='C:/fakepath/supra.png'/>
          // <p>{values.photo}</p>
          } */}
          
          <Box display={"flex"} justifyContent={"center"}>
            <Button variant="contained" type="submit">
              Create event
            </Button>
          </Box>
        </Form>
      </Box>
    </Layout>
  );
};

export default Create;
