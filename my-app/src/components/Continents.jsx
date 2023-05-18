import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const supabase = createClient(url, key);

const Continents = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    getContinents();
  }, []);

  const getContinents = async () => {
    const { data } = await supabase.from("continents").select();
    setContinents(data);
  };

  return (
    <ul>
      {continents.map((continent) => (
        <li key={continent.id}>{continent.name}</li>
      ))}
    </ul>
  );
};

export default Continents;
