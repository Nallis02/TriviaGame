export default function getTriviaChallenge(setter) {
  return fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  )
    .then((response) => response.json())
    .then((data) => setter(data.results))
    .catch((error) => console.log(error));
}
