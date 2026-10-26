import './ProductCard.css'

function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price
  const onSale = salePrice !== undefined && salePrice !== null

  let stockLabel = ''
  let stockClass = ''

  if (stock === 0) {
    stockLabel = 'Sold out'
    stockClass = 'product-card__stock--soldout'
  } else if (stock <= 5) {
    stockLabel = `Only ${stock} left!`
    stockClass = 'product-card__stock--low'
  } else {
    stockLabel = 'In stock'
    stockClass = 'product-card__stock--instock'
  }

  return (
    <div className="product-card">
      <h3>{name}</h3>

      <p className={`product-card__stock ${stockClass}`}>{stockLabel}</p>

      {onSale ? (
        <p className="product-card__price-row">
          <span className="product-card__price--old">${price.toFixed(2)}</span>
          <strong className="product-card__price--new">${salePrice.toFixed(2)}</strong>
          <span className="product-card__sale-badge">SALE</span>
        </p>
      ) : (
        <p className="product-card__price-row">${price.toFixed(2)}</p>
      )}

      {finalPrice >= 35 && <p className="product-card__shipping">Free shipping</p>}

      <button disabled={stock === 0}>{stock === 0 ? 'Sold out' : 'Add to cart'}</button>
    </div>
  )
}

export default ProductCard