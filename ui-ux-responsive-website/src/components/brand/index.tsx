import './main.css'
import { FC } from 'react'
import { atlassian, dropbox, google, shopify, slack } from './imports'

export const Brand: FC = () => {
  return <div className='gpt3__brand section__padding'>
    <div><img src={google} alt="google" /></div>
    <div><img src={slack} alt="slack" /></div>
    <div><img src={atlassian} alt="atlassian" /></div>
    <div><img src={dropbox} alt="dropbox" /></div>
    <div><img src={shopify} alt="shopify" /></div>
  </div>
}
