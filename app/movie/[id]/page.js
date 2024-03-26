import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const Page = async ({params}) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (

            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} className='h-[250px] w-[350px] ' height={500} width={500} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fuga tenetur ipsum totam necessitatibus error illum a labore rem?</p>
                    </div>
                </div>
            </div>

    );
};

export default Page;