'use client';

import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export function FooterNewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get('email');

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        toast.error(result.error ?? 'We could not subscribe you. Please try again later.');
        return;
      }

      form.reset();
      toast.success('Thanks for subscribing!');
    } catch (error) {
      console.error('Newsletter subscription failed.', error);
      toast.error('We could not subscribe you. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center w-full gap-2 sm:max-w-80">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex-1 min-w-0 h-12 p-4 text-sm text-white border border-gray-700 rounded-full placeholder:text-center placeholder:text-gray-400 placeholder:text-sm text-center placeholder:font-normal focus:outline-0"
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 h-12 px-6 text-sm font-medium text-white transition rounded-full cursor-pointer bg-primary-500 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-75"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
}
