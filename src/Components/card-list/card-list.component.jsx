import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const CardList = (props) => {
    return (
        <div className = 'card-list'>
            {
                props.monsters.lsMonsters
                .filter((element) => 
                    {return element.name.toLowerCase().includes(props.monsters.setInput.toLowerCase())})
                .map((monster) => 
                    {return <Card key = {monster.id} monster = {monster} />}
                )
            }
        </div>
    )
}