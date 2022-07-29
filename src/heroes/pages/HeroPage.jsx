import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from '../helpers';
 
export const HeroePage = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack =()=>{
   navigate(-1)
  }

  if(!hero){
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInUp animate__faster">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego : </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher : </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <hr />
        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
}
