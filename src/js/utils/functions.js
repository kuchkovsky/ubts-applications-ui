export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const allOf = (...fns) => x => fns.reduce((v, f) => v && f(x), true);

export const anyOf = (...fns) => (...x) => fns.reduce((v, f) => v || f(...x), false);

const matched = x => ({
  caseEquals: () => matched(x),
  case: () => matched(x),
  _: () => x,
});

export const match = x => ({
  caseEquals: (y, fn) => (x === y ? matched(fn(x)) : match(x)),
  case: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
  _: fn => fn ? fn(x) : undefined,
});
