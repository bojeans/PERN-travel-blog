import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const supabase = createClient(url, key);

const Query = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const query = `SELECT cities.name AS city, countries.name AS country, continents.name AS continent
    //     FROM cities
    //     JOIN countries ON cities.country_id = countries.id
    //     JOIN continents ON countries.continent_id = continents.id;`;
    const data = await supabase.from("continents").select("*");

    const result = await data.query(query);
    setData(data);
    return result.rows;
  };

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default Query;
