export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e63cc5cb7bmshb44ff7d006ab3b2p12325fjsnb9c0cd38f7d4',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, option) => {
  const res = await fetch(url, option);
  const data = await res.json();

  return data;
};
