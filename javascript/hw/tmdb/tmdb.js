// #region TMDB 요청 API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZThiYTU2M2I4MjhhMjI3ZWZhYmFiNjhjYjExNTBmMSIsIm5iZiI6MTc4OTQ1OTMxNC4zMDcwMDAyLCJzdWIiOiI2YWE4ZmI3MjdmZjk2N2I3MTY2MDljZWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JsR5SPpW0krRixBv-twQsnqmPa2l94burPc-3ZOE_LM",
  },
};
//
fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc",
  options,
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
// #endregion
