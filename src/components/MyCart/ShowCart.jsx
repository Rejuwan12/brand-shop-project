

const ShowCart = ({cart}) => {
    const {name,photo,price,brand} = cart;

    return (
        <div>
     <div className="card card-compact bg-base-100 shadow-xl mb-4">
        <figure>
          <img src={photo} className="w-full h-[500px]" alt="" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title text-4xl font-bold ">{name}</h2>
          <p className="text-2xl font-semibold">Price: {price}</p>
          <p className="text-2xl font-medium">Brand: {brand}</p>
        </div>
      </div>
        </div>
    );
};

export default ShowCart;