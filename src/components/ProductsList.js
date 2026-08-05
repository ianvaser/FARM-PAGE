import react from 'react';

const ProductsList = () => {
  return (
    <div className='ProductsList'>
        {(map((product) => (
            <ProductCard key={product.id} product={product} />
        )))}
        </div>
        )
    }