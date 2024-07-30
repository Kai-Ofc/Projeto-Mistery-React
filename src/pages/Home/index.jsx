import React from 'react';
import TopVideos from '../../components/TopVideos';
import ChannelSocialMedias from '../../components/SocialMedias';
import FlowerHeader from '../../components/Elements/FlowerHeader';
import TeamHeader from '../../components/Elements/TeamHeader';
import styleHome from './Home.module.css';

import equipeYuma from '../../assets/Images/Equipe/Equipe-Yuma.jpg'; 
import equipeTichan from '../../assets/Images/Equipe/Equipe-Tichan.jpg';
import equipeScar from '../../assets/Images/Equipe/Equipe-Scar.jpg';
import equipeOZY from '../../assets/Images/Equipe/Equipe-OZY.jpg';
import equipeKyrame from '../../assets/Images/Equipe/Equipe-Kyrame.jpg';
import equipeKapotino from '../../assets/Images/Equipe/Equipe-Kapotino.jpg';
import equipeIvou from '../../assets/Images/Equipe/Equipe-Ivou.jpg';
import equipeINFY from '../../assets/Images/Equipe/Equipe-INFY.jpg';
import equipeCujas from '../../assets/Images/Equipe/Equipe-Cujas.jpg';
import equipeKaren from '../../assets/Images/Equipe/Equipe-Karen.jpg';
import equipeShouto from '../../assets/Images/Equipe/Equipe-Shouto.jpg';
import equipeBlade from '../../assets/Images/Equipe/Equipe-Blade.jpg';
import equipeBonxy from '../../assets/Images/Equipe/Equipe-Bonxy.jpg';
import equipeAgencia from '../../assets/Images/Equipe/Equipe-Agencia.jpg';
import equipeIrlan from '../../assets/Images/Equipe/Equipe-IrlanDerick.jpg';



function Home() {
  return (
    <div className={styleHome.container}>
      <ChannelSocialMedias />
      <FlowerHeader titulo="PRINCIPAIS MÚSICAS"/>
      <TopVideos />
      <FlowerHeader titulo="PRINCIPAIS PARTICIPAÇÕES"/>
      <TopVideos />
      <FlowerHeader titulo="EQUIPE"/>
      <div className={styleHome.tContainer}>
        <TeamHeader titulo="EDITORES FIXOS"/>
        <div className={styleHome.teamContainer}>
          <a href="https://youtube.com/@yumazs?feature=shared" target="_blank"><img src={equipeYuma} alt="Yuma" /></a>
          <a href="https://youtube.com/@thichaneditor?feature=shared" target="_blank"><img src={equipeTichan} alt="Tichan" /></a>
          <a href="https://youtube.com/@scareditor?feature=shared" target="_blank"><img src={equipeScar} alt="Scar" /></a>
          <a href="https://youtube.com/@ozymonde?feature=shared" target="_blank"><img src={equipeOZY} alt="OZY" /></a>
          <a href="https://youtube.com/@kyrame?feature=shared" target="_blank"><img src={equipeKyrame} alt="Kyrame" /></a>
          <a href="https://youtube.com/@kapotino?feature=shared" target="_blank"><img src={equipeKapotino} alt="Kapotino" /></a>
          <a href="https://youtube.com/@ivoueditor_ofc?feature=shared" target="_blank"><img src={equipeIvou} alt="Ivou" /></a>
          <a href="https://youtube.com/@infy_edit?feature=shared" target="_blank"><img src={equipeINFY} alt="INFY" /></a>
          <a href="https://youtube.com/@cujasae?feature=shared" target="_blank"><img src={equipeCujas} alt="Cujas" /></a>
        </div>

        <TeamHeader titulo="DESIGNERS FIXOS"/>
        <div className={styleHome.teamContainer}>
        <a href="https://www.instagram.com/k.art_sz/" target="_blank"><img src={equipeKaren} alt="Karen" /></a>
        <a href="https://www.instagram.com/shoutotdrk/" target="_blank"><img src={equipeShouto} alt="Shouto" /></a>
        </div>

        <TeamHeader titulo="DESIGNERS DE ANIMAÇÃO"/>
        <div className={styleHome.teamContainer}>
        <a href="https://youtube.com/@bl4dezada?feature=shared" target="_blank"><img src={equipeBlade} alt="Blade" /></a>
        <a href="https://youtube.com/@bonxyanim?feature=shared" target="_blank"><img src={equipeBonxy} alt="Bonxy" /></a>
        </div>

        <TeamHeader titulo="LEGENDAS"/>
        <div className={styleHome.teamContainer}>
        <a href="https://linktr.ee/irlan_derick" target="_blank"><img src={equipeIrlan} alt="Irlan Derick" /></a>
        </div>

        <TeamHeader titulo="AGÊNCIA"/>
        <div className={styleHome.teamContainer}>
        <a href="https://linktr.ee/MaximusAgenciamentos" target="_blank"><img src={equipeAgencia} alt="Agencia" /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
