import logo2 from "../../../public/banner-1.jpg";



const Header = () => {
    return (
        <div>
     
     <div className="relative">
     <img  src={logo2} className="w-full h-[500px] " alt="" />
     </div>
     <div className="absolute top-[250px] ml-[100px]">
    <h1 className="text-5xl font-bold" > Fashion is Not <br /> About The <i className="text-[#F99417]">Brand.</i> <br /> It's About The <br /> <i className="text-[#FF3FA4]">Style.</i></h1>
     </div>
     
     <h1 className="text-center mt-2 mb-3 text-4xl font-semibold">Our Brands</h1>
        </div>
    );
};

export default Header;