import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const SubmissionSuccess = () => {
  return (
    <div className="mb-4">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CheckCircleOutline
          sx={{
            fontSize: 48,
            color: "#34C759",
            marginBottom: 2,
          }}
        />
        <Typography
          className="text-center"
          variant="h5"
          sx={{
            fontWeight: 600,
            marginBottom: 1,
          }}
        >
          Form submitted successfully!
        </Typography>
        <Typography
          className="text-center"
          variant="body1"
          sx={{
            marginBottom: 2,
          }}
        >
          Thank you for reaching out to us. We'll get back to you soon.
        </Typography>
        <Button
          href="/"
          variant="contained"
          sx={{
            backgroundColor: "#ce7c41",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: 2,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          Back to Home
        </Button>
      </Box>
    </div>
  );
};

export default SubmissionSuccess;
