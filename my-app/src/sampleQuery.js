// const { Pool } = require("pg");

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// });

// const getCountriesWithContinentsOnly = async () => {
//   const query = `
//     SELECT countries.name AS country, continents.name AS continent
//     FROM countries
//     JOIN continents ON countries.continent_id = continents.id;
//     `;
//   const client = await pool.connect();
//   try {
//     const result = await client.query(query);
//     console.log(result);
//     return result.rows;
//   } catch (error) {
//     return "server error" + error.message;
//   } finally {
//     client.release();
//   }
// };

// const getCitiesWithCountriesAndContinents = async () => {
//   const query = `
//     SELECT cities.name AS city, countries.name AS country, continents.name AS continent
//     FROM cities
//     JOIN countries ON cities.country_id = countries.id
//     JOIN continents ON countries.continent_id = continents.id;
//   `;
//   const client = await pool.connect();
//   try {
//     const result = await client.query(query);
//     return result.rows;
//   } catch (error) {
//     return "server error" + error.message;
//   } finally {
//     client.release();
//   }
// };

// module.exports = {
//   getCountriesWithContinentsOnly,
//   getCitiesWithCountriesAndContinents,
// };
