import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navigation from './components/navigation';
import Product from './components/product';
import Footer from './components/Footer';
import './index.scss'

const Ecommerce = () => {

    const [productList,setproductList] = useState([]);
    const getList = async () => {
        try{
            const {data} = await axios.get('http://localhost:3001/product');
            setproductList(data);
        }catch (error) {
            setproductList([]);
            console.log(error);
        }
    }

    useEffect(()=>{
        getList();
    },[])



    return (
        <>
            <Navigation/>
            <Product productList ={productList}/>
            <Footer/>
        </>
    )
}

export default Ecommerce;