const fetchResult = fetch("https://jsonplaceholder.typicode.com/posts");

fetchResult
  // promise(fetch)가 성공했을 때 실행되는 함수
  .then(function (fetchResponse) {
    // fetch의 response body를 구해온다.
    const fetchBody = fetchResponse.json();

    // fetchBody도 Promise임!!
    return fetchBody;
  })
  .then(function (body) {
    console.log("body: ", body);
  })
  // promise(fetch)가 실패했을 때 실행되는 함수
  .catch(function (fetchError) {
    // console.log("fetchError: ", fetchError);
  });
