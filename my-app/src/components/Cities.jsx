import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const supabase = createClient(url, key);

const Cities = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    const { data } = await supabase.from("cities").select();
    setCity(data);
  };

  return (
    <ul>
      {city.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
};

export default Cities;
