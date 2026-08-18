import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import {
  IBM_Plex_Mono,
  Inter,
  Orbitron,
  Space_Grotesk,
} from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Reforward AI',
    template: '%s | Reforward AI',
  },
  description:
    'Conversational AI services that make capability visible through guided, real-world evidence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[#f5f7fb] dark:bg-dark-secondary min-h-screen flex flex-col font-sans ${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} ${ibmPlexMono.variable}`}
      >
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
