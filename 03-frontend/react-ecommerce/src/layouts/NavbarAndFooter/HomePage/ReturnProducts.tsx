import React from 'react';
import ProductModel from '../../../models/ProductModel';

export const ReturnProducts: React.FC<{ product: ProductModel }> = (props) => {
    return (

        <div className='col'>
            <div className='text-center'>
                {props.product.img ?
                    <img src={props.product.img}
                        width='151'
                        height='233'
                        alt="Furniture" />
                    :
                    <img
                        src={require('./../../../Images/BooksImages/Furniture.jpg')}
                        width='151'
                        height='233'
                        alt="Furniture"

                    />}
                <h6 className='mt-2'>{props.product.title}</h6>
                <p>{props.product.seller}</p>
                <a className='btn main-color text-white' href='#'>Reserve</a>
            </div>
        </div>

    );
}