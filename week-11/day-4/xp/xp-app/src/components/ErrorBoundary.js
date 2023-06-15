import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true})
        console.log('error caught by ErrorBoundary: ',error);
    }

    render(){
        if(this.state.hasError) {
            return(
                <>
                    <h2>An error has occured</h2>
                </>
            )
        } else {
            return(
                this.props.children
            )
        }
    }
}

export default ErrorBoundary