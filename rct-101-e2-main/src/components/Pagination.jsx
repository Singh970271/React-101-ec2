import React from "react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
const Pagination = ({setPage,setLimit,head ,page, limit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  console.log(head,"headat")
  // const handleFirst=()=>{
  //   setPage(1)
  //   console.log("hello")
  // }
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button"  onClick={()=>{
        return (
          setPage(page-1)
        )
      }}>Prev</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(+(e.target.value))}>
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button"onClick={()=>{
        return (
          setPage(Math.ceil(head/limit))
        )
      }}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
