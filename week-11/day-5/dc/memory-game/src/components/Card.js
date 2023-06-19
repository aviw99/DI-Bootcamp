import React, { useState } from 'react';
const superheroData = require('../json/superheroes.json');

const Card = (props) => {
    const [heroes, setHeroes] = useState(superheroData);
    const [score, setScore] = useState(0);

    const wrapStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '90vw',
        margin: '0 auto',
    };

    const cardStyle = {
        border: '1px solid #eeeeee',
        margin: '20px',
        padding: '10px 30px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '3px',
        width: '8vw',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
    };

    const imgStyle = {
        width: '8vw',
        height: '16vh',
        objectFit: 'cover',
        objectPosition: 'top',
    };

    const hoverCardStyle = {
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = (hero) => {
        if(!hero.clicked){
            setScore(score + 1);
            props.onScoreChange(score + 1);
        }else{
            setScore(0);
            props.onScoreChange(0);
            props.onGameEnd(score);

        }
        const newList = heroes.superheroes.map((item) => {
            if(item.id === hero.id){
                return {...item, clicked: true}
            }else{
                return item;
            }
        })
        const compare = () => Math.random() - 0.5;
        if(!hero.clicked) {
            newList.sort(compare);
            setHeroes({superheroes: newList});
        }else{
            setHeroes(superheroData)
        }
    };

    return (
        <div style={wrapStyle}>
            {heroes.superheroes.map((hero, index) => {
                const isHovered = index === hoveredIndex;
                const cardDynamicStyle = {
                    ...cardStyle,
                    boxShadow: isHovered ? hoverCardStyle.boxShadow : cardStyle.boxShadow,
                };

                return (
                    <div
                        style={cardDynamicStyle}
                        key={hero.id}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(hero)}
                    >
                        <img style={imgStyle} src={hero.image} alt={hero.name} />
                        <p>Name: {hero.name}</p>
                        <p>Occupation: {hero.occupation}</p>
                        {/*{hero.clicked ? <p style={{color:'green'}}>{`${hero.clicked}`}</p> : <p style={{color:'red'}}>{`${hero.clicked}`}</p>}*/}

                    </div>
                );
            })}

        </div>
    );
};

export default Card;
