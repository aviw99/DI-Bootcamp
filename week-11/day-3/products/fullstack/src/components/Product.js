import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Product = (props) => {
    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const param = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getProductInfo()
    },[])

    const getProductInfo = async() => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`);
            const data = await res.json()
            setProduct(data)
            
            
            setName(data[0].name)
            setPrice(data[0].price)
        } catch (error) {
            console.log(error);
        }
    }

    const update = async(e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({name,price})
            });
            const data = await res.json()
            setProduct(data)
            
            
            setName(data[0].name)
            setPrice(data[0].price)
        } catch (error) {
            console.log(error);
        }
    }

    const del = async(e) => {
        // e.preventDefault()
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
                
            });
            const data = await res.json()
            console.log(data);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <h1>Product {param.id}</h1>
            <div>
                <h2>Update Product</h2>
                <form onSubmit={update}>
                    Name: <input 
                        type="text" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <br/>
                    Price: <input 
                        type="text" 
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <h2>Delete Product</h2>
                <button onClick={del}>Delete</button>
            </div>
            {
                product.map(item => {
                    return(
                        <div
                            key={item.id}
                            style={{
                                display: "inline-block",
                                padding: "20px",
                                margin: "20px",
                                border: "1px solid #fff",
                            }}
                        >
                            <h4>{item.name}</h4>
                            <h5>{item.price}</h5>
                        </div>
                    )
                })
            }<br/>
            <Link to='/'>Continue Shopping</Link>
        </div>
    )
}

export default Product