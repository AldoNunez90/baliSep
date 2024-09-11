'use client'
import Image from "next/image";
export default function Sets() {

    return (
        <>
        <div className="setsContainerHeroDesktop">
        <section className="setPalaceHeroDesktop">
            {/* Set Palace */}
        <div className="setPalaceContainer">
            <div className="setPalaceTitle">
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984280/01-setPalace_otvrea.png"} fill alt="set Palace" className="setPalaceTitleTxt"/>
                <div className="setPalaceTxt">{`Set con forma circular\nBalcón francés\nAmplio ventanal\nGran iluminación natural`}</div>
            </div>
            <div className="setPalaceImg">
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/t_setPalace0101/v1725984346/No_spgmht.jpg"} fill alt="set Palace" className="setPalaceImgIntro"/>
            </div>
        </div>
        <div className="setPalaceImgContainer">
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984345/03-setPalace_cqryqn.jpg"} fill  className="setPalaceImgDetails"/>
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984345/04-setPalace_mzqnyo.jpg"} fill  className="setPalaceImgDetails"/>
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984352/05-setPalace2_krghvg.png"} fill  className="setPalaceImgDetails"/>
        </div>
        </section>

        <section className="setDuoHeroDesktop">
        {/* Set DUO */}
        <div className="setDuoTitleContainer">
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984347/setDuo01_odz0ge.png"} fill alt="Set DUO" className="setDuoImgTitle" />
            <div className="setDuoTxtContainer"><p className="setDuoTxt">{`Amplio set rectangular\nPorta fondo fijo Balcón francés\nDoble iluminación\nGrupos de trabajo grandes`}</p></div>
            <div></div>            
        </div>
        <div>
            <div>
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984348/setDuo02_zj0zns.jpg"} fill alt="Set Duo" className="setDuoIntro"  />
            </div>
            <div className="setDuoImgContainer">
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984344/setDuo03_ldbwkw.jpg"} fill alt="setDuo" className="setDuoImg" />
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984227/setDuo05_slxafy.jpg"} fill alt="setDuo" className="setDuoImg" />
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984227/setDuo05_slxafy.jpg"} fill alt="setDuo" className="setDuoImg" />
            </div>

        </div>
        </section>

        <section className="setAzulHeroDesktop">
            {/* Set Azul */}
            <div className="setAzulTitleContainer">
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984346/setAzul01_spotfg.png"} fill alt="Set Azul" className="setAzulImgIntro" />
                <div className="setAzulTxtContainer"><p className="setAzulTxt">{`Pared azul naval con molduras\nBalcon francés\nHermosa iluminación natural`}</p></div>
                <div></div>
            </div>
            <div>
                <div>
                    <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984352/setAzul-02_pzorhg.jpg"} fill alt="setAzul" className="setAzulImgIntro"/>
                </div>
            <div className="setAzulImgContainer">
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984354/setAzul03_fxapbo.jpg"} alt="set Azul" fill className="setAzulImg" />
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984349/setAzul04_qq0vll.jpg"} alt="set Azul" fill className="setAzulImg" />
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984349/setAzul04_qq0vll.jpg"} alt="set Azul" fill className="setAzulImg" />
            </div>
            </div>
        </section>

        <section className="studioMapContainer">
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984227/setsPlano_k9w5t4.png"} fill alt="Map studio" className="mapStudio" />
        </section>
        </div>
        </>
        );
}
