import './main.css'
import { FC } from 'react'

interface IFeatureProps {
  title: string
  text: string
}
export const Feature: FC<IFeatureProps> = ({ title, text }) => {
  return (
    <div className='gpt3__feature-container__feature'>
      <div className='gpt3__feature-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__feature-container__feature-text'><p>{text}</p></div>
    </div>
  )
}
