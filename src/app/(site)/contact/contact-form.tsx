'use client';

import { Input } from '@/components/ui/inputs';
import { Textarea } from '@/components/ui/inputs/textarea';
import { Label } from '@/components/ui/label';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        toast.error(result.error ?? 'We could not send your message. Please try again later.');
        return;
      }

      form.reset();
      toast.success('Your message has been sent. We will get back to you soon.');
    } catch (error) {
      console.error('Contact form submission failed.', error);
      toast.error('We could not send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" type="text" placeholder="Your first name" required disabled={isSubmitting} />
        </div>
        <div>
          <Label htmlFor="lastName"> Last Name</Label>
          <Input id="lastName" name="lastName" type="text" placeholder="Enter your last name" required disabled={isSubmitting} />
        </div>
        <div className="col-span-full">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" placeholder="example@gmail.com" required disabled={isSubmitting} />
        </div>
        <div className="col-span-full">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={6} placeholder="Type your message" required disabled={isSubmitting} />
        </div>
        <div className="col-span-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-500 hover:bg-primary-600 transition h-12 py-3 px-6 w-full font-medium text-white text-sm rounded-full disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  );
}
