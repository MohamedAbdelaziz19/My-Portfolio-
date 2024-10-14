'use client';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";

// Define types for form values and state
interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormState {
  isLoading: boolean;
  error: string;
  values: ContactFormValues;
}

// Initial values for the form
const initValues: ContactFormValues = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const toast = useToast();
  const [state, setState] = useState<ContactFormState>({
    isLoading: false,
    error: "",
    values: initValues,
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const { values, isLoading, error } = state;

  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState({ isLoading: false, error: "", values: initValues }); // Reset state after successful submission
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "Something went wrong.",
      }));
    }
  };

  return (
    <div id="contact" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <Heading className="text-2xl font-bold sm:text-3xl">Contact Us</Heading>
        {error && (
          <Text className="text-red-500 my-4 text-lg">{error}</Text>
        )}
      </div>

      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <FormLabel className="sr-only">Name</FormLabel>
          <Input
            type="text"
            name="name"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:ring focus:ring-primary"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !values.email}>
          <FormLabel className="sr-only">Email</FormLabel>
          <Input
            type="email"
            name="email"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:ring focus:ring-primary"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.subject && !values.subject}>
          <FormLabel className="sr-only">Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:ring focus:ring-primary"
            placeholder="Subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !values.message}>
          <FormLabel className="sr-only">Message</FormLabel>
          <Textarea
            rows={4}
            name="message"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:ring focus:ring-primary"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button
          type="button"
          variant="solid"
          colorScheme="blue"
          isLoading={isLoading}
          className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
          disabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
