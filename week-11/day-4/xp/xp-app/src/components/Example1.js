import React from 'react';
const data = require('../data2.json')

class Example1 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(

            <ul>
                {data['SocialMedias'].map((item, i)=>{
                    return(<li key={i}>{item}</li>)
                    

                })}
            </ul>
             
        )
    }
}

export default Example1