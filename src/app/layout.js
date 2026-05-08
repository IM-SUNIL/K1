import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Best Tour and Travels in Katra | Katra Travel Agency & Kashmir Packages',
  description: 'Katra Travels is a premier Katra travel agency offering spiritual Vaishno Devi yatras, local transport, and the best travel in Katra Kashmir package tours. Contact certified local travel agents in Katra for premium stays and reliable cabs.',
  keywords: ['tour and travels in Katra', 'Katra travel agents', 'Katra travel agency', 'travel in Katra', 'best travel in Katra Kashmir package tour', 'Kashmir travel agencys', 'Katra Travels'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
