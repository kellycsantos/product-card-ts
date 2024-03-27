import Button from './Button';
import iconCart from '../assets/icon-cart.svg'

type TCard = {
    img: string;
    imgDesktop: string;
    category: string;
    title: string;
    description: string;
    value: string;
    discount: string | null;
}

export default function Card({ img, imgDesktop, category, title, description, value, discount }: TCard) {
    return (
        <article className='card'>
            <img src={img} className='card-image img-mobile'/>
            <img src={imgDesktop} className='card-image img-desktop'/>
            <div className='card-info'>
                <span className='card-category'>{category}</span>
                <h1>{title}</h1>
                <p>{description}</p>
                <span className='value-info'>
                    <p className='value'>{value}</p>
                    <small className='discount'>{discount}</small>
                </span>
            <Button value='Add to Cart' icon={iconCart} />
            </div>

        </article>
    )
}