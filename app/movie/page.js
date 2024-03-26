import React from 'react'
import Moviecards from '../components/Moviecards';
import  styles  from '@/app/styles/common.module.css';
import { resolve } from 'styled-jsx/css';

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));

  
const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4b40904552msh38e352724db1132p1288cdjsn1faaa0ad672f',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url,options)
const data = await res.json()
const main_data = data.titles;
console.log(main_data.jawSummary)

  return (
    <>

<section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <Moviecards key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
    </>
  )
}

export default Movie