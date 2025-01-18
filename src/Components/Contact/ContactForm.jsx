import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { Loader } from "../Index";
import { toast } from "react-toastify";
import SubmissionSuccess from "./SubmissionSuccess";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("How we can serve you?");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const form = useRef();

  const inputFields = [
    { label: "Name", type: "text", name: "from_name" },
    { label: "Phone", type: "tel", name: "customer_phone" },
    { label: "Email", type: "email", name: "customer_email" },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_USER_API_KEY
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setSubmissionSuccess(true);
      }
    } catch (error) {
      toast.error("Error sending message");
      throw error;
    }
    e.target.reset();
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (submissionSuccess) {
    return <SubmissionSuccess />;
  }

  return (
    <Box
      className="mb-4"
      component="form"
      ref={form}
      onSubmit={handleFormSubmit}
    >
      <h3 className="tracking-wider mb-4">CONTACT US</h3>
      <div className="grid gap-4">
        {inputFields.map((field) => (
          <TextField
            key={field.label}
            label={field.label}
            variant="filled"
            type={field.type}
            name={field.name}
            required
            fullWidth
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "black",
                },
              },
            }}
          />
        ))}
      </div>

      <textarea
        className="bg-[#F0F0F0] p-4 mt-4 w-full h-48 resize-none outline-none"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={(e) => {
          if (message === "How we can serve you?") {
            setMessage(""); // Clear message on focus only if default
          }
        }}
        placeholder={message}
        required
      />

      <Button
        className="!bg-[#ce7c41] w-full"
        variant="contained"
        type="submit"
        sx={{
          paddingY: 1.5,
          mt: 2,
          boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.2s",
          "&:hover": {
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
