import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Section, SectionHeading } from "../Index"; // Assuming you have these custom components

const Menu = () => {
  return (
    <Section>
      <Container maxWidth="md" sx={{ textAlign: "center", py: 10 }}>
        <Box mb={3}>
          <RestaurantIcon sx={{ fontSize: 80, color: "primary.main" }} />
        </Box>
        <SectionHeading>Menu Coming Soon</SectionHeading>
        <Typography variant="h6" color="textSecondary" paragraph>
          We are working hard to serve you the best dishes! Our menu will be
          available soon.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button
            variant="contained"
            startIcon={<AccessTimeIcon />}
            color="primary"
            sx={{ fontSize: "16px" }}
          >
            Notify Me
          </Button>
          <Button
            href="/"
            variant="outlined"
            color="primary"
            sx={{ fontSize: "16px" }}
          >
            Back to Home
          </Button>
        </Stack>
        <Box mt={5}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Coming Soon"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
      </Container>
    </Section>
  );
};

export default Menu;
