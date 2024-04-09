function PokemonThumbnail({ id, name, image }) {
    return (
        <div className="pokemon-thumbnail">
        <img src={image} alt={name} />
        <div className="pokemon-info">
          <p>{id}</p>
          <h3>{name}</h3>
        </div>
      </div>
    );
  }
  
  export default PokemonThumbnail;
  