import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Nexablu Trading LLP",
  description: "Complete HVAC Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
