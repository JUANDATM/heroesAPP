import { HeroCard } from "../components";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import {useForm} from '../../hook/useForm'
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
const navigate = useNavigate();

const location = useLocation();


const {q = '' }= queryString.parse(location.search);


const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();

    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control mb-1"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q=== '') ?  <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">There´s no results with <b>{q}</b></div>


          }
         
         {
          heroes.map(hero =>
            <HeroCard key={hero.id}{...hero}  />
          )

         }
        </div>
      </div>
    </>
  );
};
