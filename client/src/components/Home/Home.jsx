import React, { useEffect } from 'react'


// components
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home = () => {

     const getProducts3 = useSelector(state=>state.getProducts2)
      const {products }= getProducts3      // getProducts3 object se products nikale hai 
      console.log(products)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])


  return (
    <div>
          <Navbar />
          <Component>
          <Banner />
          <Slide products2={products}/>
          </Component>
    </div>
  )
}

export default Home