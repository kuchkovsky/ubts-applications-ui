export const shortAnswers = {
  yes: {
    key: 'Так',
    value: true,
  },
  no: {
    key: 'Ні',
    value: false,
  },
};

export const percents = {
  p100: '100%',
  p75: '75%',
  p50: '50%',
  p25: '25%',
  undef: 'Важко сказати',
};

export const deriveShortAnswer = value => Object.keys(shortAnswers)
  .filter(answer => shortAnswers[answer].value === value)
  .map(answer => shortAnswers[answer].key)[0];

export default shortAnswers;
