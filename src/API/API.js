import React, { useState, useEffect } from 'react';
import AxiosURL from './AxiosURL';
import style from './API.module.scss';

// - Form Input should be title, description, price
// - In List Header should be id, title, description, price, thumbnail

// brand
// :
// "Apple"
// category
// :
// "smartphones"
// description
// :
// "An apple mobile which is nothing like apple"
// discountPercentage
// :
// 12.96
// id
// :
// 1
// images
// :
// (5)['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
// price
// :
// 549
// rating
// :
// 4.69
// stock
// :
// 94
// thumbnail
// :
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// title
// :
// "iPhone 9"

const API = () => {
    const [data, setData] = useState('');;
    const [error, setError] = useState('');

    const getData = async () => {
        try {
            const url = '/products';
            const res = await AxiosURL.get(url);
            console.log('data--->', res.data.products);
            setData(res.data.products);
        }
        catch (e) {
            console.log('error--->', e);
            setError(e.message);
        }

    }

    useEffect(() => {
        getData();
    }, []);
    // console.log('data---->', data);
    // console.log('error--->', error);

    return (
        <>
            {
                error !== '' && <h2> {error}</h2>
            }
            <div className={style.container}>
            
                {
                    Array.isArray(data) ? data?.map((item) => {
                        const { id, title, description, price, thumbnail } = item;
                        return <div>
                            <p>{id}</p>
                            <p>{title.toUpperCase()}</p>
                            <p>{description}</p>
                            <p> $: {price}</p>
                            <p> {thumbnail}</p>
                        </div>
                    }) : []
                }
            </div>
        </>

    )
}

export default API;
