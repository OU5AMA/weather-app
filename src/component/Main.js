import React from 'react'
import CardData from './CardData'
import Card from './Card'


export default function Main(){

    const Card_Data = CardData.map(card =>{
        return(
            <Card
            {
                ...card
            }
            />
        )
    })
    console.log(CardData);

    return(
        <div className="main">
            {Card_Data}
        </div>
    )
}