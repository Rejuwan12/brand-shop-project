import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";


const MyCart = () => {
    const myCartData = useLoaderData()
    console.log(myCartData);
    return (
        <div>
            {
                myCartData.map(cart => <ShowCart key={cart._id} cart={cart}/>)
            }
        </div>
    );
};

export default MyCart;