import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <section className="bg-linear-65 from-slate-500 via-slate-950 to-stone-600">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
