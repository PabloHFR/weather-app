export const REACT_APP_GEODB_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_GEODB_API}`,
    "X-RapidAPI-Host": `${process.env.REACT_APP_GEODB_HOST}`,
  },
};
