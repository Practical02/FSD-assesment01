import { Button, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <div>
      <br />
      <TextField variant="outlined" label="Name" />
      <br />
      <br />
      <TextField variant="outlined" label="Designation" />
      <br />
      <br />
      <TextField variant="outlined" label="Location" />
      <br />
      <br />
      <TextField variant="outlined" label="Salary" />
      <br />
      <br />
      <Button variant="outlined">Submit</Button>
      <br />
    </div>
  );
};

export default Form;
