const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async () => {

  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.MOVIE_API_KEY}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }

};
