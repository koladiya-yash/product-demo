// import Rating from "react-rating";
import { Link } from "react-router-dom";




const ProductList = ({ data }) => {
    return (
        data?.map((product, index) => {
            console.log(product);
            return (
                <Link to={`/product/${product?.id}`}>
                    <div className="product" key={index}>
                        <div className="image-box">
                            <img className="images" id="image-1" src={product?.thumbnail} />
                        </div>
                        <div className="text-box">
                            <h2 className="item" title={product?.title}>{product?.title?.length > 5 ? `${product?.title.slice(0, 5)}...` : product?.title}</h2>
                            <h5 className="item">{product?.brand}</h5>
                            <h3 className="item" category={product?.category}>{product?.category?.length > 5 ? `${product?.category.slice(0, 5)}...` : product?.category}</h3>
                            <h3 className="price"> ₹{product?.price}/-</h3>
                            <p style={{ fontSize: '4px' }} className="description" title="description">{product?.description?.length > 15 ? `${product.description.slice(0, 15)}...` : product?.description}</p>
                            <label type="number" for="item-1-quantity">Quantity:</label>
                            <input type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
                            <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                            {/* <div>
                                <Rating
                                    emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
                                    fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
                                />
                            </div> */}
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

export default ProductList