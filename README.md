# Reforward AI

Reforward AI is a conversational AI workspace built to help teams understand context, explore work through trials, and reinvent workflows. It turns existing knowledge and experience into useful, tailored content and conversations for the work ahead.

## What is included

- Conversational text generation powered by OpenAI
- Streaming AI responses in a dedicated generator workspace
- Saved chat history and new-chat workflows
- Responsive marketing, authentication, pricing, contact, and privacy pages
- Light and dark themes

## Acknowledgements

Reforward AI is built on the open-source [AI Starter Kit](https://nextjstemplates.com/templates/ai-starter-kit) by [Next.js Templates](https://nextjstemplates.com/). The starter kit provided the original project foundation and interface components, which have been adapted for Reforward AI.

See the original [AI Starter Kit demo](https://demo.aistarterkit.nextjstemplates.com/).

## Technology

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel AI SDK](https://sdk.vercel.ai/) with OpenAI

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

This project is licensed under the [MIT License](LICENSE).
