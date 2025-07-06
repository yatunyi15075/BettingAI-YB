// src/app/layout.tsx
import "./globals.css";
import { JSX, ReactNode } from "react";

export const metadata = {
  title: "AI Betting App - Predict Smarter",
  description: "Smarter predictions with AI. Try the future of betting.",
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
