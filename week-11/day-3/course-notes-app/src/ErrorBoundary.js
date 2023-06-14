import React from "react";

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError:false,
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error, errorInfo){
        console.log('error=>', error);
        console.log('errorInfo=>', errorInfo);
        this.setState({hasError:true, error:error, errorInfo:errorInfo})
        // write them to a log file, send a message to support team
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    Something went wrong, we are fixing the problem
                </div>
            )
        }
        return(
            this.props.children
        )
    }
}

export default ErrorBoundary
