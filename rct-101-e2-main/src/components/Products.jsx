import React from "react";
import AddProduct from "./AddProduct"
import Pagination from "./Pagination"
import { Flex } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import Product from "./Product"
const Products = ({data,setLimit,setPage,head,page,limit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}
      {data.map((e)=>(
        <Product e={e} />
      ))}
      
      </Grid>
      {/* Pagination */}
      <Pagination setPage={setPage} setLimit={setLimit} head={head} page={page} limit={limit} />
    </Flex>
  );
};

export default Products;
