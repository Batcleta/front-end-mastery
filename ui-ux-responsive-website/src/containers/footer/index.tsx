import './main.css'
import { FC } from 'react'
import gpt3Logo from '../../assets/logo.svg'

export const Footer: FC = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>all rights reserved</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Get in touch</h4>
          <p>asdasdasdasd asdasdas dasd</p>
          <p>+5511963642358</p>
          <p>thewazig.wf@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}
