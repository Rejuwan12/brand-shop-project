import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";


const Home = () => {
    const [card, setCard] = useState();
    useEffect(() => {
    fetch('fashion.json')
    .then(res => res.json())
    .then(data => setCard(data))
    },[])
    
    return (
        <div>
            <Header/>
            <Card data={card}/>
        </div>
    );
};

export default Home;