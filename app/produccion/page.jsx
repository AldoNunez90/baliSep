"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import MainCarousel from "../components/MainCarousel";
import SecondaryCarousel from "../components/SecondaryCarousel";

export default function Produccion() {
  const [selectedProduction, setSelectedProduction] = useState(null);
  const secondaryCarouselRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedProduction(index);
    
  };
 
  useEffect(() => {
    if (selectedProduction !== null && secondaryCarouselRef.current) {
      secondaryCarouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProduction]);
console.log(secondaryCarouselRef.current);


  const images = [
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723691/Mesa_de_trabajo_8_wznc7j.png", // Steph, 
      title: "Editorial Sthep",
      details: {
        Ph: {name: "@gabrielbailoph", link: "https://www.instagram.com/gabrielbailoph"},
        Modelo:  {name: "@stephiimontero", link: "https://www.instagram.com/stephiimontero"}, 
        "Assist ph":  {name: "@agusmendozaph", link: "https://www.instagram.com/agusmendozaph"},
        Back: {name: "@alejandrog.wall", link: "https://www.instagram.com/alejandrog.wall"},
        Makeup: {name: "@martupaulik.mkp", link: "https://www.instagram.com/martupaulik.mkp"},
        "Producción y diseño de vestuario": {name: "@movement.productora", link: "https://www.instagram.com/movement.productora"}
      }
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723691/Mesa_de_trabajo_3_aueigq.png", //Aylen 
      title: "Aylen",
      details: {
        Modelo: {name: "@aylencasini_", link: "https://www.instagram.com/aylencasini_"},
        Ph: {name: "@ivanherrera.ph", link: "https://www.instagram.com/ivanherrera.ph"}
      }
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723691/Mesa_de_trabajo_4_ee6zss.png", //Bianca, 
      title: "Bianca",
      details: {
        Ph: {name: "@ivanherrera.ph", link: "https://www.instagram.com/ivanherrera.ph"},
        "Assist ph": {name: "@photostudiopop", link: "https://www.instagram.com/photostudiopop"},
        Model: {name: "@bianca.micuda", link: "https://www.instagram.com/bianca.micuda"} ,
        Diseños: {name: "@santiagodesign__", link: "https://www.instagram.com/santiagodesign__"},
        Makeup: {name: "@natufermakeup", link: "https://www.instagram.com/natufermakeup"},
      }
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723691/Mesa_de_trabajo_1_xuexsf.png", //Barbi, 
      title: "CHERRY BOMB",
      details: {
        Modelo: {name: "@barbieeferrari", link: "https://www.instagram.com/barbieeferrari"}, 
        Marca:  {name: "@bfstoreok", link: "https://www.instagram.com/bfstoreok"},
        Pelo:  {name: "@emmabarrioshair", link: "https://www.instagram.com/emmabarrioshair"},
        "Make up":  {name: "@soficosta.makeup", link: "https://www.instagram.com/soficosta.makeup"},
        Fotografia:  {name: "@magenciamkt", link: "https://www.instagram.com/magenciamkt"},
        Fotografia:  {name: "@marbellendier", link: "https://www.instagram.com/marbellendier"},
        Fotografia:  {name: "@maratkinson_", link: "https://www.instagram.com/maratkinson_"},

      }
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723692/Mesa_de_trabajo_7_gn7grx.png",  //Nadege
      title: "Nadege",
      details: {
        Marca: { name: '@baldo.arg', link: 'https://www.instagram.com/baldo.arg/' },
        Modelo: { name: '@kibbelquesus', link: 'https://www.instagram.com/kibbelquesus/' },
        Estilista: { name: '@sonialifcha', link: 'https://www.instagram.com/sonialifcha/' },
        Fotografía: { name: '@gaillard.nadege', link: 'https://www.instagram.com/gaillard.nadege/' },  
        },
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723691/Mesa_de_trabajo_6_mrysve.png", //Law, 
      title: "IN LAW",
      details: {
        Marca: {name: "@inlaw_ba", link: "https://www.instagram.com/inlaw_ba"},
        Modelo: {name: "@fifubassan", link: "https://www.instagram.com/fifubassan"},
        Modelo: {name: "@giuulianam", link: "https://www.instagram.com/giuulianam"},
        Productora: {name: "@bykarycantillo", link: "https://www.instagram.com/bykarycantillo"},
        Fotografía: {name: "@fiorellaperata", link: "https://www.instagram.com/fiorellaperata"}
      }
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723691/Mesa_de_trabajo_5_dakeid.png", //Fiorella, 
      title: "E-commerce Fio",
      details: {
        Modelo: {name: "@francescadcarolis", link: "https://www.instagram.com/francescadcarolis"},
        Modelo: {name: "@melodygiselle", link: "https://www.instagram.com/melodygiselle"},
        Modelo: {name: "@notmodelsmgmt", link: "https://www.instagram.com/notmodelsmgmt"},
        PH: {name: "@fiorellaperata", link: "https://www.instagram.com/fiorellaperata"},
        PH: {name: "@catalinaalmada", link: "https://www.instagram.com/catalinaalmada"},
        PH: {name: "@mus_creativestudio", link: "https://www.instagram.com/mus_creativestudio"},
        "Make up & hair": {name: "@flornittomakeup", link: "https://www.instagram.com/flornittomakeup"},
        Gracias: {name: "@lovetoyei", link: "https://www.instagram.com/lovetoyei"},
        Gracias: {name: "@breeders_furs", link: "https://www.instagram.com/breeders_furs"},
        Gracias: {name: "@calcabsas", link: "https://www.instagram.com/calcabsas"},
        Gracias: {name: "@casaqueando", link: "https://www.instagram.com/casaqueando"}
      }
    },
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725723692/Mesa_de_trabajo_2_d5mw9j.png", //Klara, 
      title: "Klara",
      details: {
        Model: {name: "@claramkovacic", link: "https://www.instagram.com/claramkovacic"},
        Photography: {name: "@noelpueblaphotography", link: "https://www.instagram.com/noelpueblaphotography"},
        "Photography assistant": {name: "@mararosset", link: "https://www.instagram.com/mararosset"},
        Styling: {name: "@bykarycantillo", link: "https://www.instagram.com/bykarycantillo"},
        "Wardrobe credits": {name: "@marisolpalmie", link: "https://www.instagram.com/marisolpalmie"},
        Hat: {name: "@dachics", link: "https://www.instagram.com/dachics"},
        "Makeup & Hair": {name: "@marumeichtry", link: "https://www.instagram.com/marumeichtry"},
        Filmmaker: {name: "@fiorellaperata", link: "https://www.instagram.com/fiorellaperata"},
        "Location": {name: "@baliestudio", link: "https://www.instagram.com/baliestudio"}
      }
    }   
  ];
  const productionImages = {
    0: [
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803711/EDITORIAL-STEPHI02731_uh7voo.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803711/EDITORIAL-STEPHI02896_yenfg7.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803705/EDITORIAL-STEPHI02702_qeh9iu.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803710/EDITORIAL-STEPHI02725_fl6x4r.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803710/EDITORIAL-STEPHI02921_yew1qf.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803710/EDITORIAL-STEPHI02926_jwxs6x.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803707/EDITORIAL-STEPHI02775_gk4fxr.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803706/EDITORIAL-STEPHI02798_rlm01a.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803706/EDITORIAL-STEPHI02755_mukjgb.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803706/EDITORIAL-STEPHI02724_haltrh.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803706/EDITORIAL-STEPHI02839_udpna6.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803705/EDITORIAL-STEPHI02829_xlak6m.jpg",
    ], //Steph

    1: [
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803720/_DSF3885_b6jw4h.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803722/_DSC1770_rooew4.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803723/_DSF3273_wkwidt.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803724/_DSF3321_qjckvh.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803726/_DSF3315_dywspn.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803728/_DSC1754_tyvxnb.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803734/_DSF3444_lrybpw.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803741/_DSF3435_b4jnwx.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803749/_DSC1653_kgb60t.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803751/_DSC1629_kq8q9y.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803757/_DSF3525_t9m3ab.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803758/_DSF3546_hfbhtx.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803763/_DSF3400_kxvsua.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803764/_DSC1732_qvaii8.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803766/_DSC1780_lcgi3g.jpg",
      // Aylen
    ],
    2: [
      //Bianca
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803747/_DSC1494_rohzw3.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803770/_DSF2925_xakwtg.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803770/_DSC1516_jzffw6.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803714/_DSF2522_rp1uvx.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803750/_DSC1437_dnihfr.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803727/_DSF2800_quala2.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803719/_DSF2968_mlu5em.jpg",
    ],
    3: [
      //Barbi
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804510/DSC04636_vkskco.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804512/DSC04991_ulyfxs.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804515/DSC04996_zrdvfv.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804506/DSC04945_zo0ria.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804481/DSC04712_pecitm.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804495/DSC04874_p6h0wi.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804493/DSC04868_wnwqmm.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804473/DSC04576_lripi6.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804497/DSC04892_ec0rfz.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804499/DSC04898_jlgk82.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804508/DSC04966_scdqzq.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804489/DSC04806_snauj7.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804501/DSC04909_avi2s7.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804485/DSC04675_nb7igy.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804475/DSC04655_oy9k5d.jpg",
    ],

    4: [
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803712/2024_03_03_Baldo_Invierno_174_vdcepr.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803711/2024_03_03_Baldo_Invierno_183_nbolfi.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803710/2024_03_03_Baldo_Invierno_197_kem236.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803710/2024_03_03_Baldo_Invierno_135_ruuxka.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803709/2024_03_03_Baldo_Invierno_005_org7fx.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803709/2024_03_03_Baldo_Invierno_084_xyustc.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803707/2024_03_03_Baldo_Invierno_161_y1w3js.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803706/2024_03_03_Baldo_Invierno_207_h48buo.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803705/2024_03_03_Baldo_Invierno_091_qy7efb.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803705/2024_03_03_Baldo_Invierno_180_lpdxtl.jpg",
    ], //Nadege
    5: [
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804611/dsc08_lcv21s.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804609/dsc07_essibt.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804604/dsc03_rwguq2.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804600/dsc06_n5q2ew.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804597/dsc05_nbwpri.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804596/dsc02_ihud7m.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804593/dsc01_pqablr.jpg",
    ],

    6: [
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804459/132A3339_vzznsk.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804455/132A3400-_Catalina_Almada_1_glyx4f.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804444/132A3566-_Catalina_Almada_glqxmb.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804442/132A3586-_Catalina_Almada_fzhber.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804427/132A3621_1_yqjkhw.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804372/132A3873_1_jr7rpt.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804361/DSC03924_2_1_nfdn8y.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804342/DSC04075FIORELLAPERATA_tkfle6.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804189/132A3950_iai4kr.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804188/DSC04202FIORELLAPERATA_ifwunz.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804187/DSC04093FIORELLAPERATA_htzuwl.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804181/DSC04250_y2mky0.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804170/DSC04346_1FIORELLAPERATA_nsnutq.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724804163/DSC04388_4FIORELLAPERATA_sbc9an.jpg",
    ],
    7: [
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803760/DSC04799_qjkofc.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803758/DSC04938_wb1wjv.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803755/DSC04931_loaude.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803752/DSC04869_mlvl8f.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803748/DSC04893_ehrjmi.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803744/DSC04940_hdim8j.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803740/DSC04855_bi9hnh.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803737/DSC04812_ue3bvk.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803734/DSC04853_reifgo.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803733/DSC04940b_fd46lr.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803731/DSC05011_pl3ltc.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803725/DSC04922_zy8q0t.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803713/DSC04842_eig1l6.jpg",
      "https://res.cloudinary.com/dbohxop49/image/upload/v1724803712/DSC04835_u2zl8h.jpg",
    ],
  };

  return (
    <div style={{ userSelect: 'none' }}>
      <section style={{position: 'relative', display: 'flex'}}>
        <p className="title produccionTitle">{`EN BALI\nCADA\nPRODUCCION\nES MAGIA\nGRACIAS A VOS`}</p>
        <Image
          src={
            "https://res.cloudinary.com/dbohxop49/image/upload/v1725120464/produccionImgIntro_un9vpn.jpg"
          }
          fill
          alt="producciones"
          className="imgIntroProduccion imgProduccionDesktop"
        />
        <Image
          src={
            "https://res.cloudinary.com/dbohxop49/image/upload/v1725735893/prodMobile_z6ovd5.jpg"
          }
          fill
          alt="producciones"
          className="imgProduccionMobile"
        />
      </section>
      <section className="carouselSection" style={{position: 'relative'}}>
        <div>
          <MainCarousel images={images} onImageClick={handleImageClick} />
          {selectedProduction !== null && (
           <div className="secondaryCarouselContainer" ref={secondaryCarouselRef}> <SecondaryCarousel images={productionImages[selectedProduction]} /> </div>
          )}
        </div>
      </section>
          <div style={{position: 'relative'}}>
            <Image src={'https://res.cloudinary.com/dbohxop49/image/upload/v1725730284/132A3354_1_g49do1.jpg'} fill className="produccionClose" alt="bali"/>
          </div>

    </div>
  );
}
