import { contactFormSchema } from '@/lib/zod/marketing.schema';
import { Resend } from 'resend';

const from =
  process.env.CONTACT_FROM_EMAIL ??
  process.env.RESEND_FROM_EMAIL ??
  'Reforward <contact@reforward.stintagents.com>';

export async function POST(request: Request) {
  const validation = contactFormSchema.safeParse(await request.json());

  if (!validation.success) {
    return Response.json(
      { error: validation.error.issues[0]?.message ?? 'Invalid contact request.' },
      { status: 400 }
    );
  }

  const recipient =
    process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_RECIPIENT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !recipient) {
    console.error('Contact email is not configured.');
    return Response.json(
      { error: 'The contact form is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  const { firstName, lastName, email, message } = validation.data;
  const { error } = await new Resend(apiKey).emails.send({
    from,
    to: recipient,
    replyTo: email,
    subject: `Website contact from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error('Unable to send contact email.', error);
    return Response.json(
      { error: 'We could not send your message. Please try again later.' },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
