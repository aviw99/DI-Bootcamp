import React from 'react';

class AppForm extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName:'',
            lastName:'',
            age:'',
            destination:'',
            diet:[],
            gender:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, age,  destination, diet, gender} = this.state;
        const url = `http://localhost:3000/?firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}$diet=${diet}`;
        console.log(url);
    }

    handleChange = (e) => {
        const value = (e.target.type === 'checkbox') 
                                        ? e.target.checked 
                                        : e.target.value
        if (e.target.type === 'checkbox') {
            const updatedDiet = this.state.diet.includes(e.target.name)
                ? this.state.diet.filter((item) => item !== e.target.name)
                : [...this.state.diet, e.target.name];
            this.setState({ diet: updatedDiet });
            } else {
            this.setState({ [e.target.name]: value });
            }                                
        
    }

    render(){
        return(
            <>
                <h1>Sample Form</h1>
                <form onSubmit={this.handleSubmit}>

                    <input 
                        placeholder='First Name'
                        type='text' 
                        name='firstName' 
                        onChange={this.handleChange}
                    /> 
                    <br/>
                    <input 
                        placeholder='Last Name'
                        type='text' 
                        name='lastName'
                        onChange={this.handleChange} 
                    /> 
                    <br/>
                    <input 
                        placeholder='Age'
                        type='number' 
                        name='age'
                        onChange={this.handleChange} 
                    /> 
                    <br/><br/>

                    <div onChange={this.handleChange}>
                        Gender: <br/>
                        <input type='radio' value='Male' name='gender'/>Male <br/>
                        <input type='radio' value='Female' name='gender'/>Female <br/>
                        <input type='radio' value='Other' name='gender'/>Other 
                    </div><br/>

                    <select name='destination' defaultValue='' onChange={this.handleChange}>
                        <option value=''  disabled hidden>--Please choose a destination--</option>
                        <option value='Thailand'  >Thailand</option>
                        <option value='Japan'  >Japan</option>
                        <option value='Brazil'  >Brazil</option>
                    </select> 
                    <br/><br/>

                    Dietary Restrictions:<br/> 
                    <input type='checkbox' name='nuts' onChange={this.handleChange}/>Nuts free
                    <br/>
                    <input type='checkbox' name='lactose' onChange={this.handleChange}/>Lactose free
                    <br/>
                    <input type='checkbox' name='vegan' onChange={this.handleChange}/>Vegan
                    <br/><br/>

                    <input type='submit' value='Submit' />

                </form><br/><br/>

                <h1>Entered Information:</h1>
                <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your Age: {this.state.age}</p>
                <p>Your Gender: {this.state.gender}</p>
                <p>Your Destination: {this.state.destination}</p>
                <p>Your Dietary Restrictions: </p>
                <p>**Nuts free: {this.state.diet.includes('nuts') ? 'Yes' : 'No'}</p>
                <p>**Lactose free:  {this.state.diet.includes('lactose') ? 'Yes' : 'No'}</p>
                <p>**Vegan meal:  {this.state.diet.includes('vegan') ? 'Yes' : 'No'}</p>
            </>
        )
    }
}

export default AppForm

