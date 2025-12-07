import {Card} from './Card'

export const CardCarousel = () => {
    const items = ['Item1', 'item2', 'Item3']
    return (<div>{items.map((item, idx) => {
        return <Card item={item} key={idx}/>
    })}</div>)
}