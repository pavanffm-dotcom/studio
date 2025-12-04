import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseProviderWrapper } from '@/firebase/client-provider-wrapper';
import { LanguageProvider } from '@/lib/language';
import { UserPreferencesProvider } from '@/context/user-preferences-context';
import { ThemeProvider } from '@/context/theme-provider';

export const metadata: Metadata = {
  title: 'AI Atlas',
  description: 'Your Cute Guide to Creative AI Tools',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-size-medium">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <NoScrollbarStyle />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <FirebaseProviderWrapper>
            <UserPreferencesProvider>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </UserPreferencesProvider>
          </FirebaseProviderWrapper>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}

const NoScrollbarStyle = () => <style>{`
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`}</style>;
