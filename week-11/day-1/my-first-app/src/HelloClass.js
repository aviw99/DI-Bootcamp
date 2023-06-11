import React from "react";

class HelloClass extends React.Component {
    render(){
        const products = [
            {name:'apple'},{name:'orange'},{name:'banana'}
        ]
        return (
            <>
                {
                    products.map((fruit, i)=>{
                        return(
                            <div key={i}>
                            {fruit.name}
                            </div>
                        )
                            
                        
                    })
                }
                
            </>
        )
    }
}

export default HelloClass
