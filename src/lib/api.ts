// lib/api.ts

// Define the shape of the data expected
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Function to send the contact form data
export const sendContactForm = async (data: ContactFormData) =>
  fetch("/src/app/api/route.ts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
