import { newsletterSchema } from '@/lib/zod/marketing.schema';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const validation = newsletterSchema.safeParse(await request.json());

  if (!validation.success) {
    return Response.json(
      { error: validation.error.issues[0]?.message ?? 'Invalid email address.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Newsletter subscription is not configured.');
    return Response.json(
      { error: 'Newsletter sign-up is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  const { error } = await new Resend(apiKey).contacts.create({
    email: validation.data.email,
  });

  if (error) {
    console.error('Unable to create newsletter contact.', error);
    return Response.json(
      { error: 'We could not subscribe you. Please try again later.' },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
