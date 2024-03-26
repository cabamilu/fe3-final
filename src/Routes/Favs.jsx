import Card from "../Components/Card";
import { useAppStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useAppStates()

  return (
    <main>
      <h1>Favoritos</h1>
      <div className="dentists-container">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((fav) =>
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
