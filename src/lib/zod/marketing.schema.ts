import { z } from 'zod';

const email = z
  .string({ required_error: 'Email is required' })
  .email('Enter a valid email address')
  .max(254)
  .trim()
  .toLowerCase();

export const contactFormSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .trim()
    .min(1, 'First name is required')
    .max(100),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .trim()
    .min(1, 'Last name is required')
    .max(100),
  email,
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(1, 'Message is required')
    .max(5_000),
});

export const newsletterSchema = z.object({ email });
