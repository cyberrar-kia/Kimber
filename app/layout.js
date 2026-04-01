import './globals.css';

export const metadata = {
  title: 'Graded Interiors | Transitional Interior Design — Plymouth, UK',
  description:
    'Crafted and character-driven interiors by Kimber. Designing for heritage homes and individuals seeking a meaningful, soul connection with their spaces. Based in Plymouth, serving the UK and beyond.',
  keywords:
    'interior design, heritage interiors, transitional design, Plymouth interior designer, period homes, colour consultation, space planning',
  openGraph: {
    title: 'Graded Interiors | Heritage Interior Design',
    description:
      'Crafted and character-driven interiors for heritage homes and individuals seeking a meaningful soul connection with their spaces.',
    url: 'https://www.gradedinteriors.co.uk',
    siteName: 'Graded Interiors',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
