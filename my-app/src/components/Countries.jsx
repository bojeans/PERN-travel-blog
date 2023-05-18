import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const supabase = createClient(url, key);

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const { data } = await supabase.from("countries").select();
    setCountry(data);
  };

  return (
    <ul>
      {country.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
};

export default Countries;
