const uppercaseFirstLetter = (message: string) => {
  if (!message) return message;

  const firstLetter = message.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = message.slice(1);

  return firstLetterCap + remainingLetters;
};

export default uppercaseFirstLetter;
