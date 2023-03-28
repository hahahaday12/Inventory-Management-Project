import { useState , useEffect } from 'react';
import styled from 'styled-components';
import ProuctLayOut from '../Common/Layout/OutLayout';
import ProductList from './Layout/productLayout';
import axios from 'axios';

const List = () => {

  return(
    <>
    <ProductList/>
    <ProuctLayOut/>
    </>
  )
};
export default List;
