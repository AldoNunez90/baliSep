'use client'
import Image from "next/image";
export default function Sets() {

    return (
        <>
        <div className="setsContainerHero">
           <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984351/setsIntro_jljtaf.jpg"} fill alt="setsIntro" className="imgSetsIntro"/>
        <section>
        <div className="setPalaceContainer">
            <div className="setPalaceTitle">
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984280/01-setPalace_otvrea.png"} fill alt="set Palace" className="setPalaceTitleTxt"/>
                <div className="setPalaceTxt">{`Set con forma circular\nBalcón francés\nAmplio ventanal\nGran iluminación natural`}</div>
            </div>
            <div className="setPalaceImg">
                <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984346/No_spgmht.jpg"} fill alt="set Palace" className="setPalaceImgIntro"/>
            </div>
        </div>
        <div className="setPalaceImgContainer">
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984345/03-setPalace_cqryqn.jpg"} fill  className="setPalaceImgDetails"/>
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984345/04-setPalace_mzqnyo.jpg"} fill  className="setPalaceImgDetails"/>
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984352/05-setPalace2_krghvg.png"} fill  className="setPalaceImgDetails"/>
        </div>
        </section>




        <section>

        </section>



        <section>

        </section>




        </div>
        </>
        );
}