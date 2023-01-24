import './main.css'
import { FC } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

export const NavBar: FC = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#wgpt3'>What is gpt3?</a>
          </p>
          <p>
            <a href='#posibility'>Open Ai</a>
          </p>
          <p>
            <a href='#features'>Case Studies</a>
          </p>
          <p>
            <a href='#blog'>Library</a>
          </p>
        </div>
      </div>
    </div>
  )
}
