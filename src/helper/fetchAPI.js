const fetchAPI = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const json = await response.json();

  return json;
};

export default fetchAPI;
