export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'a36757d446msh3f70549df3f3c35p1d3401jsn27d36a4e3585',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a36757d446msh3f70549df3f3c35p1d3401jsn27d36a4e3585',
    
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
