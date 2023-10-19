import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";


const MyCart = () => {
    const myCartData = useLoaderData()
    console.log(myCartData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {
                myCartData.map(cart => <ShowCart key={cart._id} cart={cart}/>)
            }
        </div>
    );
};

export default MyCart;