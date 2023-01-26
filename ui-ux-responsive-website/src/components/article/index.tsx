import './main.css'
import { FC } from 'react'

interface IArticleProps {
  imageUrl: string
  date: string
  title: string
}

export const Article: FC<IArticleProps> = ({ imageUrl, date, title }) => {
  return (
    <article className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={imageUrl} alt='blog' />
      </div>
      <div className='gpt3__blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read the full article</p>
      </div>
    </article>
  )
}
