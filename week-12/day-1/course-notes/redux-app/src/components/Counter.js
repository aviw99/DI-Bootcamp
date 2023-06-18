// import {useState} from "react";
import {connect} from "react-redux";
import {incrementCounter, decrementCounter} from "../redux/actions";

const Counter = (props) => {
    // const [count, setCount] = useState(0)
    return(
        <>
            <button onClick={()=> props.handleIncrementation()}>+</button>
            {props.count}
            <button onClick={()=> props.handleDecrementation()}>-</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleIncrementation: () => dispatch(incrementCounter()),
        handleDecrementation: () => dispatch(decrementCounter())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)