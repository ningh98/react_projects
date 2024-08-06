import { useEffect, useState, useRef } from "react"
import './style.css'



export default function LoadMoreData(){

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    const isInitialMount = useRef(true);

    function fetchProducts(){
        setLoading(true)
        fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
        .then(response => response.json())
        .then(data => {
            if(data && data.products && data.products.length){
                setProducts(prevData => [...prevData, ...data.products]
                //     {
                //     const newProducts = data.products;
                //     // Prevent adding duplicates
                //     const updatedProducts = [...prevData, ...newProducts];
                //     const uniqueProducts = Array.from(new Set(updatedProducts.map(p => p.id)))
                //                             .map(id => updatedProducts.find(p => p.id === id));
                //     return uniqueProducts;


                // }
            )
                setLoading(false)
            }
            console.log(data)
        }
    )
    .catch(e => {
        setLoading(false)
        console.log(e)
    })
    }

    useEffect(()=>{
        if (isInitialMount.current){
            isInitialMount.current = false 
            return 
        }
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(products && products.length === 100) setDisableButton(true)
    }, [products])

    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }
    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ? products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <p>{product.title}</p>
                    </div>
                ))
            
            : null}
        </div>
        <div className="button-container">
            <button disabled={disableButton} onClick={()=> setCount(count+1)}>Load More Products</button>
            {
                disableButton ? <p>You have reached to 100 products</p> : null
            }
        </div>

    </div>
}