import React from "react";
import { Section, SectionHeading } from "../../Index";
import AllReviews from "./AllReviews";

const ReviewsSection = () => {
  return (
    <Section
      id="reviews"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment: "fixed",
      }}
    >
      <SectionHeading textColor="text-zinc-200" bold="font-semibold">
        REVIEWS
      </SectionHeading>
      <AllReviews />
    </Section>
  );
};

export default ReviewsSection;
