import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {_id,photo,brand,name,type,price,rating} = product;
    return (
        <div>
          <div className="card w-full h-[400px]  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <div className="card-actions flex justify-between items-center ">
   <div className="">
   <div className="badge badge-outline mr-2">Price: {price}</div> 
    <div className="badge badge-outline">Rating: {rating}</div> 
   </div>
     <div className="">
     <div className="badge badge-outline mr-2">Type: {type}</div> 
      <div className="badge badge-outline">Brand: {brand}</div>
     </div>
    </div>
     <Link to={`/brand/${_id}`}>
     <button className="btn btn-block">Details</button>
     </Link>
     <Link to={`/update/${_id}`}>
     <button className="btn btn-block">Update</button>
     </Link>
  </div>
</div>
        </div>
    );
};

export default Product;