import React from 'react'
import { Table } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import ProductCard from '../components/Layout/ProductCard';
import { useProducts } from '../provider/ProductProvider';

const cart = () => {
    const { state:{cart} } = useProducts();
    console.log(cart)

    let content;
    if(cart.length === 0){
        content = <p className='text-center'>Cart Is Empty</p>
    }
    // else{
    //     content = <div className='row g-4'>
    //         {
    //             cart.map((item,index)=> <ProductCard key={index} item={item}/>)
    //         }
            
    //     </div>
    // }
    else{
        content = <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item,index)=> <CartItem key={index} index={index} item={item}/>)
          }
          
        </tbody>
      </Table>
    }
  return (
    <div>
        {
            content
        }
    </div>
  )
}

export default cart