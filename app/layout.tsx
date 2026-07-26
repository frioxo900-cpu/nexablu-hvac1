import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Nexablu Trading LLP",
  description:
    "Wholesale & Retail HVAC Supplies in Mumbai",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
