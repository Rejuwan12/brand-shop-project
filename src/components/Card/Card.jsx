import Cards from "./Cards";


const Card = ({ data }) => {
    console.log(data);
    return (
     <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 mx-auto p-2">
            {
                data?.map((card) => <Cards key={card.id} card={card}></Cards>)
            }
            
        </div>
         <div >
         <h1 className="text-4xl font-bold mb-4 text-center">Also Available</h1>
  </div>
     
     </>
    );
};

export default Card;