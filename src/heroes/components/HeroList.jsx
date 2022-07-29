import { useMemo } from "react";
import { getHeroesByPublisher } from "../../heroes/helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); ;

  return (
    <div className="row rows-cols-1 row-cols-md-3 g3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id}{...hero} />
      ))}
    </div>
  );
};
