import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import Section from "../Sections/Section";
import Section2 from "../Sections/Section2";


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
            <Section/>
            <Section2/>
        </div>
    );
};

export default Home;