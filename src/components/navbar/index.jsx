import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function Navbar() {


  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);   



  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Items..."
          name="search"
          value={searchParam}
          onChange={(event)=> setSearchParam(event.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-300 focus:shadow-red-500"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-200"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-200"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
