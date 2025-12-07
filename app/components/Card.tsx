type Props = {
    item: string
}

export const Card = ({item: _item}: Props) => {
    return (<div>{_item}</div>)
}