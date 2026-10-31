// A small, reusable helper function.
// It takes an array and returns a NEW array with the items shuffled randomly.
// We use the "Fisher-Yates" shuffle algorithm because it gives a fair,
// unbiased random order.
export function shuffleArray(array) {
  // Make a copy first so we never change (mutate) the original array.
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the current item with the randomly picked item
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}
