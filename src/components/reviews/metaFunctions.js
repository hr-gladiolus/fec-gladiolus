/* eslint-disable import/prefer-default-export */
export function getProductRating(data) {
  console.log('meta func', data);
  const { ratings } = data;
  let total = 0;
  let average = 0;
  let ratingsNumber = 0;
  for (let i = 1; i < 6; i += 1) {
    const currentRating = parseInt(ratings[i], 10);
    total += currentRating * i;
    ratingsNumber += currentRating;
  }
  average = total / ratingsNumber;
  const rounded10 = Math.round(average * 10) / 10;
  return rounded10;
}
