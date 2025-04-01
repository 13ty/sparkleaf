'use server';

import { contactFormSchema, ContactFormValues } from './schema';

// This is where you would integrate your email sending logic
// (e.g., using Resend, SendGrid, Nodemailer)
// Make sure to use environment variables for API keys/credentials.
async function sendEmail(data: ContactFormValues) {
  // TODO: Implement actual email sending logic here
  console.log('Simulating email sending with data:', data);
  // Example: Replace with your email sending code
  // const send = await resend.emails.send({
  //   from: 'Your App <noreply@yourdomain.com>',
  //   to: 'sparktreehere@gmail.com', // The target email
  //   subject: `New Contact Form Submission from ${data.name}`,
  //   text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  // });
  // Simulate success/failure
  // if (Math.random() > 0.1) { // Simulate 90% success rate
  //   return { success: true, message: 'Message sent successfully!' };
  // } else {
  //   return { success: false, message: 'Failed to send message.' };
  // }
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  return { success: true, message: 'Message sent successfully! (Simulated)' };
}

export async function submitContactForm(data: ContactFormValues): Promise<{
  success: boolean;
  message: string;
}> {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      // Optionally return detailed errors:
      // errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await sendEmail(validatedFields.data);
    return result;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
