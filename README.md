# Reforward AI

Reforward AI is a conversational AI workspace built to help teams understand context, explore work through trials, and reinvent workflows. It turns existing knowledge and experience into useful, tailored content and conversations for the work ahead.

## What is included

- Conversational text generation powered by OpenAI
- Streaming AI responses in a dedicated generator workspace
- Saved chat history and new-chat workflows
- Responsive marketing, authentication, pricing, contact, and privacy pages
- Light and dark themes

## Email setup

The contact form sends messages through Resend and the footer sign-up adds subscribers to your Resend Contacts list. In Resend, add and verify the `reforward.stintagents.com` domain (including its required DNS records), then configure the following server-only variables:

```bash
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL="Reforward <hello@reforward.stintagents.com>"
CONTACT_TO_EMAIL=hello@stintagents.com
```

`RESEND_FROM_EMAIL` and `CONTACT_RECIPIENT_EMAIL` are also supported for compatibility.

## Acknowledgements

Reforward AI was initially built on [AI Starter Kit](https://nextjstemplates.com/templates/ai-starter-kit) by [Next.js Templates](https://nextjstemplates.com/). Required license and attribution notices for incorporated third-party material are in [THIRD_PARTY_NOTICES](THIRD_PARTY_NOTICES).

See the original [AI Starter Kit demo](https://demo.aistarterkit.nextjstemplates.com/).

## Technology

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel AI SDK](https://sdk.vercel.ai/) with OpenAI
- [Resend](https://resend.com/) for website email and newsletter contacts

## Getting started

### Prerequisites

- Node.js 22 or later
- An OpenAI API key

### Install and run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to use the application. The text generator is available at `/text-generator`.

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Start the production server
npm run lint      # Run the configured lint command
```

## AI integration

The chat API lives at `/api/chat` and streams responses from OpenAI's `gpt-4o-mini` model. The system prompt is intentionally focused on concise, high-quality writing that adapts to the user's requested context, tone, and format.

## Project structure

```text
src/
  app/                 # Routes, layouts, and the streaming chat API
  components/          # Shared UI, marketing sections, and generator UI
  lib/ai/              # OpenAI model and generator prompt configuration
  hooks/               # Reusable React hooks
  context/             # Client-side application state
public/images/         # Product and marketing assets
```

## License

This project is proprietary and is governed by the [Reforward AI Proprietary License](LICENSE). All rights are reserved. Third-party components remain subject to their own licenses as documented in [THIRD_PARTY_NOTICES](THIRD_PARTY_NOTICES).
