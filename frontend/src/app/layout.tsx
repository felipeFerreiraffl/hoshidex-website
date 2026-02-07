import React from "react";

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
