export default function getTriviaChallenge() {
  return fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));
}
