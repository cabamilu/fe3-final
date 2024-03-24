import Card from "../Components/Card";
import { getDentistById } from "../Api/dentists";
import { useAppStates } from "../Components/utils/global.context";
import { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useAppStates()
  const [ favs, setFavs ] = useState([])

  useEffect(() => {
    const getDetails = () => {
      state.favs.forEach(async (favorite) => {
        const data = await getDentistById(favorite)
        setFavs((prev) => [...prev, data])
      })
    }

    getDetails()
  }, [])

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="dentists-container">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((fav) =>
          <Card 
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
            isFavorite={true}
          /> 
        )}
      </div>
    </main>
  );
};

export default Favs;
