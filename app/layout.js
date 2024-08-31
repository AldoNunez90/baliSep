import { Raleway } from "next/font/google";
import "./styles/conoceStyles.css"
// import "./styles/reservasStyles.css"
import "./styles/produccionStyles.css"
import "./styles/contactoStyles.css"
import "./styles/estudiosStyles.css"
import "./styles/homeStyles.css"
import "./styles/footerStyles.css"
import "./styles/navbarStyles.css"
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "BALI Estudios",
  description: "Estudios profesionales",
  
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="es">
      <body className={raleway.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
