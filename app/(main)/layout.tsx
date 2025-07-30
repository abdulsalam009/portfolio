import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ...existing code... */}
        {children}
        {/* ...existing code... */}
      </body>
    </html>
  );
}