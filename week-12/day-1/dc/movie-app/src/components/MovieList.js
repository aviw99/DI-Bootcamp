import {useDispatch, useSelector} from "react-redux";
import {showDetail} from "../redux/actions";


const MovieList = (props) => {
    const list = useSelector(state => state.movies_list)
    const dispatch = useDispatch()
;    return(
        <div style={{display:'inline-block', width:'50%'}}>
            <h1>Movie List</h1>
            {
                list.map((item,index) => {
                    return(
                        <div key={index}>
                            {item.title}
                            <button onClick={() => dispatch(showDetail(item))}>details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default MovieList
