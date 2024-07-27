import React from 'react'
import ChannelSocialMedias from '../../components/SocialMedias';
import styleAbout from './About.module.css'

function About() {
  return (
    <div className={styleAbout.container}>
      <ChannelSocialMedias />
    </div>
  )
}

export default About