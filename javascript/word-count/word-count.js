export const countWords = (sentence) => sentence
  .split(/[^a-z0-9']/i)
  .reduce((acc, curr) => {
    if (curr) {
      const word = curr.toLowerCase().replace(/^'|'$/g, '');

      if (acc[word]) {
        acc[word] += 1;
      } else {
        acc[word] = 1;
      }
    }

    return acc;
  }, {});
