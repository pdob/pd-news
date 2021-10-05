const apiKey = 'Insert your own NewsAPI Key';

const endpoints = {
  latest: `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`,
  coronavirus: `https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=${apiKey}`,
  crypto: `https://newsapi.org/v2/everything?q=crypto&language=en&apiKey=${apiKey}`,
  business: `https://newsapi.org/v2/top-headlines?q=business&language=en&apiKey=${apiKey}`,
  technology: `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`,
  sports: `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apiKey}`,
}


export default endpoints;