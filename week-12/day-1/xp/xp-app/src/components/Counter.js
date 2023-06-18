import {incrementCounter, decrementCounter} from "../redux/actions";
import {connect} from "react-redux";

const Counter = (props) => {
const divStyle ={
    display:'flex'
}
const btnStyle = {
    margin:'auto',
    width: '25px'
}
    return(
        <div>
            <h2> Counter: </h2>
            <div style={divStyle}>
                <button style={btnStyle} onClick={props.handleIncrement}>+</button>
                <h1>{props.number}</h1>
                <button style={btnStyle} onClick={props.handleDecrement}>-</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        number : state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement : () => dispatch(incrementCounter()),
        handleDecrement: () => dispatch(decrementCounter())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);