import React, { useEffect, useState } from "react";
import Products from "./components/Products"
import axios from "axios"
const App = () => {
 const [data,setData]=useState([])
 const [page,setPage]=useState(1)
 const [limit,setLimit]=useState(3)
 const [head,setHead]=useState(0)
 async function getData(){
   let productsData=await axios.get(` http://localhost:8080/products?_page=${page}&_limit=${limit}`)
   
   let products=productsData.data
  //  console.log(productsData,"productsData")
   setHead(+(productsData.headers["x-total-count"]))
   setData(products)
 }
//  console.log(data,"Data",head)
  useEffect(()=>{
    getData()
  },[page,limit])
  return <div>{/* TODO: Code here */}
  <Products data={data} setPage={setPage} setLimit={setLimit} head={head} page={page} limit={limit}/>
  </div>;
};

export default App;
