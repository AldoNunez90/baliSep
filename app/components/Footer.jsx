"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLogo footerItems">
      <Link href={"/"}>
        <Image
          src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556042/logoBaliWhite_i64vv4.png"
          alt="logo"
          className="baliLogoCenter"
          width={503}
          height={142}
          />
          </Link>
          <div className="socialNav socialFooter" style={{display: 'none'}}>
        <a href="https://www.instagram.com/baliestudio/" target="_blank">
          <Image
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556037/iconIgWhite_dzr0ne.png"
            alt="instagram"
            width={30}
            height={30}
            className="socialImg"
          />
        </a>
        <a
          href="https://wa.me/+5491154171668?text=Hola! Tengo una consulta sobre el estudio"
          target="_blank"
        >
          <Image
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556040/iconWpWhite_izlidr.png"
            alt="wp"
            width={30}
            height={30}
            className="socialImg"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/bali-estudio/"
          target="_blank"
        >
          <Image
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556039/iconInWhite_uwuctw.png"
            alt="linkedin"
            width={30}
            height={30}
            className="socialImg"
          />
        </a>
      </div>
      </div>
      <div className="footerLinks footerItems">
        <ul className="footerList footerText" >
            <li className="footerListItem"><Link href={"/conocebali"} className="footerRoutes" >Conoce Bali</Link></li>
            <div className="footerListLine"></div>
            <li className="footerListItem"><Link href={"/estudio"} className="footerRoutes">Estudio</Link></li>
            <div className="footerListLine"></div>
            <li className="footerListItem"><Link href={"/reservas"} className="footerRoutes">Reservas</Link></li>
            <div className="footerListLine"></div>
            <li className="footerListItem"><Link href={"/contacto"} className="footerRoutes">Contacto</Link></li>
            <div className="footerListLine"></div>
            <li className="footerListItem"><Link href={"/privacidad"} className="footerRoutes">Políticas de privacidad</Link></li>
            <div className="footerListLine"></div>
        </ul>
        <div className="footerSocialMedia footerText">
          <p className="footerTxtFirma">Página diseñada y desarrollada por <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1724556043/logoKranding_rtw9bz.png"} alt="Kranding" width={78} height={12} className="logoKranding"/></p>
            </div>
      </div>
    </div>
  );
}
