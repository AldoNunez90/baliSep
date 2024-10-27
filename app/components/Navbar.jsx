"use client";

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState } from "react";



export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropOpen, setDropOpen] = useState(false)

  const handleClose = ()=>{
    if (openMenu != false){
      setOpenMenu(false)
    }

    if(dropOpen != false){
      setDropOpen(false)
    }
  }
  
  const NavItem = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
      <Link href={href} style={{margin: "0 10px"}}>
        <p className={classNames("nav-item", { active: isActive })} onClick={()=>handleClose()}>
          {children}
        </p>
      </Link>
    );
  };

  return (
    <nav className="navBarHomeHero">
      <div className="navBarContainer">
        <Link onClick={() => handleSelect("home")} href={"/"}>
          <Image
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556041/logoBali_omq5tg.png"
            alt="logo Bali"
            width={150}
            height={42.5}
            className="navBarLogo"
          />
        </Link>
      </div>
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="navBtnList"
        onClick={()=>setOpenMenu(!openMenu)}
        >
        <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
       


      <ul className={`navList ${openMenu ? 'visible' : ''}`}>
        <NavItem href="/" className="liNav" >
          Home
        </NavItem>
        <NavItem href="/conocebali" className="liNav" >
          Conoce Bali
        </NavItem>
        <span className="liNavDesktop" style={{userSelect: "none"}}>
        <span className="liNav" style={{cursor: "pointer", fontWeight: "500", margin: "0 10px"}} onClick={()=>setDropOpen(!dropOpen)}>
          Estudio
        </span>
        {dropOpen && 
        <ul style={{padding: "unset", position: "absolute", zIndex: "100", backgroundColor: "#ffffff", padding: "0 3px", borderRadius: "5px"}}>
         <span onClick={()=>setDropOpen(!dropOpen)}>
          <NavItem href={"/estudio/sets"}>Sets</NavItem>
          </span> 
          <span onClick={()=>setDropOpen(!dropOpen)}>
          <NavItem href={"/estudio/equipos"}>Equipos</NavItem>
          </span>
        </ul>
        }
        </span>
        <span  className="liNavMobile itemSetMobile" style={{display: 'none'}}>
        <NavItem href="/sets" className="liNav" >
          Sets
        </NavItem>
        </span>
        <span className="liNavMobile itemSetMobile" style={{display: 'none'}}>
        <NavItem href="/equipos" className="liNav" >
          Equipos
        </NavItem>
        </span>
        <NavItem href="/reservas" className="liNav" >
          Reservas
        </NavItem>
        <NavItem href="/produccion" className="liNav" >
          Producción
        </NavItem>
        <NavItem href="/contacto" className="liNav" >
          Contacto
        </NavItem>
      </ul>

      <div className="socialNav">
        <a href="https://www.instagram.com/baliestudio/" target="_blank">
          <Image
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556036/iconIg_engeea.png"
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
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556040/iconWp_odyt3u.png"
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
            src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556038/iconIn_me1iki.png"
            alt="linkedin"
            width={30}
            height={30}
            className="socialImg"
          />
        </a>
      </div>
    </nav>
  );
}
