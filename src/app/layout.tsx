import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet Listings — Find Your Forever Friend",
  description: "Browse adoptable and foster pets looking for loving homes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
