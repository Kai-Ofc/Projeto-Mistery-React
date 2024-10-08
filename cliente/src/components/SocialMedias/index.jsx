import React from 'react';
import styleSocialMedia from './SocialMedias.module.css'
import FlowerHeader from '../Elements/flowerHeader/index';


const ChannelSocialMedias = () => {
    
    return (
      <div className={styleSocialMedia.socialDiv}>
        <FlowerHeader titulo="SOBRE"/>
        <div className={styleSocialMedia.imgContainer}>
          <div className={styleSocialMedia.misteryImg}></div>
          <p>
            Mistery é uma artista independente que trabalha com músicas da temática e do cenário “Geek”. <span className={styleSocialMedia.responsiveText}> Além disso, ela também trabalha com composição, produção e direção musical de todos os seus projetos, trazendo estilos diferenciados e únicos para suas músicas.</span>
          </p>
        </div>
        <FlowerHeader titulo="REDES SOCIAIS:"/>
        <ul className={styleSocialMedia.redeContainer}>
          <li className={styleSocialMedia.redeSocial}> 
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@miistery?feature=shared">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30px" height="30px" fill='#8C031C'>
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
            </a>
          </li>

          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/MsMisttery">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28px" height="28px" fill='#D91E50'>
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
          </li>
        
          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mistery.officiall">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#F2295F" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/>
              </svg>
            </a>
          </li>

          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/intl-pt/artist/5tXGJbbT8kC46qteRRIwGx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30px" height="30px" fill='#BF045B'>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/5tXGJbbT8kC46qteRRIwGx"/>
              <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
            </svg></a>
          </li>
          
          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/cabare-da-mistery-706586882267676702"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30px" height="30px" fill='#8C034E'>
              <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
            </svg></a>
          </li>
          
          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://music.youtube.com/channel/UCzvYWzqkojYsbzvPizXoskg">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill='#D91470' d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12s12-5.376 12-12S18.624 0 12 0m0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104s-3.18 7.104-7.104 7.104m0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772M9.684 15.54V8.46L15.816 12z"/></svg>
            </a>
          </li>
          
          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/music/player/artists/B002CFSBUW/mistery"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21.5" fill="none" stroke="#A6033F" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="#A6033F" stroke-linecap="round" stroke-linejoin="round" d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"/><path fill="none" stroke="#A6033F" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17 17 0 0 0 10.167-3.08M20.404 20.125v3.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-3.3m0 3.3v2m-14.004-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2m-4-5.2v5.2m4-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2"/><circle cx="31.88" cy="17.675" r=".7" fill="#A6033F"/><path fill="none" stroke="#A6033F" stroke-linecap="round" stroke-linejoin="round" d="M31.88 20.125v5.3m-5.34-.452a2.25 2.25 0 0 0 1.646.447h.448a1.324 1.324 0 0 0 1.322-1.325h0a1.324 1.324 0 0 0-1.322-1.325h-.897a1.324 1.324 0 0 1-1.322-1.325h0a1.324 1.324 0 0 1 1.322-1.325h.449a2.25 2.25 0 0 1 1.644.448m7.77 3.85a2 2 0 0 1-1.737 1.007h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 1.735 1.004"/></svg></a>
          </li>

          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/artist/mistery/1589648809">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#59022B" d="M23.994 6.124a9.2 9.2 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5 5 0 0 0-1.877-.726a10.5 10.5 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986q-.227.014-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a11 11 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223l.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a13 13 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.05 5.05 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14q-.524.15-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a1 1 0 0 0 .02-.193q0-2.723-.002-5.443a.7.7 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066q-1.14.226-2.28.456l-2.325.47l-1.374.278l-.048.013c-.277.077-.377.203-.39.49q-.002.063 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233q-.526.152-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177q.574-.126.6-.714v-.15l.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165q1.1-.224 2.2-.444l2.27-.46l2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482q.012.11.012.223q.003 2.866 0 5.732z"/></svg>
            </a>
          </li>

          <li className={styleSocialMedia.redeSocial}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.deezer.com/en/artist/1251390">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30px" height="30px" fill="#D91E50"><path d="M451.5 244.7H576V172H451.5zm0-173.9v72.7H576V70.8zm0 275.1H576V273.2H451.5zM0 447.1H124.5V374.4H0zm150.5 0H275V374.4H150.5zm150.5 0H425.5V374.4H301zm150.5 0H576V374.4H451.5zM301 345.9H425.5V273.2H301zm-150.5 0H275V273.2H150.5zm0-101.2H275V172H150.5z"/></svg>
            </a>
          </li>

 
        </ul>
      </div>
    );
  };
  
  export default ChannelSocialMedias;