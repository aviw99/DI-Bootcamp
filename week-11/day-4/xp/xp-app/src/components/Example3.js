import React from 'react';
const data = require('../data2.json')

class Example3 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                {
                    data['Experiences'].map((item)=>{
                        return(
                            <ul style={{ listStyleType: 'none' }} key={item.id}>
                                <li><img src={item.logo}/></li>
                                <li><a href={item.url} target='_blank'>{item.companyName}</a></li>
                                {item.roles.map((item)=>{
                                    return(
                                        <ul style={{ listStyleType: 'none' }} key={item.id}>
                                            <li><strong>{item.title}</strong></li>
                                            <li>{item.startDate} - {item.endDate}</li>
                                            <li>{item.location}</li>
                                            <li>{item.description}</li>
                                        </ul>
                                    )
                                })}
                            </ul>
                            
                        )
                    })
                }
            </>
        )
    }
}

export default Example3