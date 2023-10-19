import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("loged out"))
      .catch((error) => console.error(error));
  };
    const NavLinks = (
   <>
    
    <li> <NavLink to="/"><a>Home</a></NavLink> </li>
    <li> <NavLink to="/addProduct"><a>Add Product</a></NavLink> </li>
    <li> <NavLink to="/myCart"><a> My Cart</a></NavLink> </li>
    

     
   </>

    )
    return (
        <div>
          <div className="navbar bg-[#D5FFD0]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium text-lg">
       {NavLinks}
      </ul>
    </div>
    <Link to='/'>
    <div className="flex items-center cursor-pointer">
   <div>
    <img className="w-[80px]" src={logo} alt="" />
   </div>
   <div>
   <a className=" normal-case text-4xl font-bold">Fashion Show</a>
   </div>
    </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-lg" >
      {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
          <>
            
            <div className="flex items-center gap-3">
            <img className="rounded-full w-[40px]" src={user.photoURL} alt="" />
            <span className="mr-2">{user.displayName}</span>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm">
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
  </div>
</div>
        </div>
    );
};

export default Navbar;