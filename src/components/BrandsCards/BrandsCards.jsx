import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const BrandsCards = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const brandData = data.find((brand) => brand.id == id);
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fashion-project-server.vercel.app/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
}, [])

const brandProducts = products.filter(brandProduct => brandProduct.brand == brandData.title)
    
  
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={brandData.ad_img_1}
            className="w-full h-[450px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={brandData.ad_img_2}
            className="w-full h-[450px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[450px]">
          <img
            src=
            {brandData.ad_img_3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-2 mx-auto p-2">
        {
          brandProducts.map(product => <Product key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default BrandsCards;
