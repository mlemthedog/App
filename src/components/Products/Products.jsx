import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Trainers.', price: '£10', image: 'https://images.stockx.com/360/Air-Jordan-4-Retro-Black-Cat-2020/Images/Air-Jordan-4-Retro-Black-Cat-2020/Lv2/img02.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1606315877&h=320&fm=webp' },
    { id: 2, name: 'Laptop', description: 'Laptop.', price: '£100', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg' }
];

const Products = () => {
    return (
        <main>
         <Grid container justify="center" spacing={4}>
             {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                  <Product product={product} />
                       </Grid>
    ))}
         </Grid>
      </main>
    );
}

export default Products;