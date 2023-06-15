import React from 'react';
const data = require('../data2.json')

class Example2 extends React.Component{
    constructor(){
        super()
    }
    skills = data['Skills'];
    // area = skills['Area'];
    // lan = skills['SkillSet']['Name'];
    render(){
        return(
            <>
          
               
                {
                   
                   
                    data['Skills'].map((item)=>{
                        return(<><h4>{item['Area']}</h4>
                        <ul>
                            {item['SkillSet'].map((item,i)=>{
                                return(<li key={i}>{item['Name']}</li>)
                            })}
                        </ul>
                        </>
                        )
                    })

                    
                }
            </>
        )
    }
}

export  default Example2