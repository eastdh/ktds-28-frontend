// #region 예시 데이터
// {
//   "adult": false,
//   "backdrop_path": "/qeQJx07rK2xm8SD2sJxFKhE7gs0.jpg",
//   "genre_ids": [
//     878,
//     28,
//     12
//   ],
//   "id": 969681,
//   "title": "스파이더맨: 브랜드 뉴 데이",
//   "original_language": "en",
//   "original_title": "Spider-Man: Brand New Day",
//   "overview": "4년 전 소중한 사람들을 지키기 위해 모두의 기억에서 사라진 피터 파커. 친절한 이웃 스파이더맨으로서 뉴욕을 지키며 고독한 삶을 살아가던 피터는 어느 날, 예상치 못한 DNA 변이로 인해 통제 불가능한 힘에 사로잡히고 그의 진짜 정체를 알고 있는 적까지 마주하게 된다. 타인의 의식을 조종하는 정체불명의 존재로 인해 모두가 피터를 노리는 적이 될 수 있는 혼란 속에서 피터는 다시 위협에 빠진 MJ와 모두를 지키기 위해 스파이더맨으로 그들 앞에 서게 되는데...",
//   "popularity": 691.7198,
//   "poster_path": "/8mLepBa5l591xFidRpn65xV7hb4.jpg",
//   "release_date": "2026-07-29",
//   "softcore": false,
//   "video": false,
//   "vote_average": 7.848,
//   "vote_count": 2705
// },
// #endregion
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
