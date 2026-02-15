import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'Mike J Mitchell - Photo Portfolio',
    description:
        'Professional photography portfolio showcasing galleries and collections'
};

const jura = Jura({
    subsets: ['latin']
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased bg-gray-50 ${jura.className}`}>
                <Header />
                <main className="min-h-screen">{children}</main>
                <footer className="bg-white border-t mt-12">
                    <div className="container mx-auto px-4 py-6 text-center text-gray-600">
                        <p>
                            &copy; {new Date().getFullYear()} Mike J Mitchell.
                            All rights reserved.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
