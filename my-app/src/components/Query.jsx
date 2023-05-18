import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const supabase = createClient(url, key);

const Query = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: cities, error: citiesError } = await supabase
          .from("cities")
          .select("name, country_id");

        const { data: countries, error: countriesError } = await supabase
          .from("countries")
          .select("id, name, continent_id");

        const { data: continents, error: continentsError } = await supabase
          .from("continents")
          .select("id, name");

        if (citiesError || countriesError || continentsError) {
          console.error(
            "Error executing queries:",
            citiesError,
            countriesError,
            continentsError
          );
        } else {
          const joinedData = joinData(cities, countries, continents);
          setData(joinedData);
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };
    getData();
  }, []);

  const joinData = (cities, countries, continents) => {
    return cities.map((city) => {
      const country = countries.find((c) => c.id === city.country_id);
      const continent = continents.find((ct) => ct.id === country.continent_id);
      return {
        continent: continent.name,
        country: country.name,
        city: city.name,
      };
    });
  };

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {item.continent}, {item.country}, {item.city}
        </li>
      ))}
    </ul>
  );
};

export default Query;
