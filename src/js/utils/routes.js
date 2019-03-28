export const HOME = '/';

export const SIGN_IN = '/signin';

export const STUDENT_APPLICATION = '/student';

export const STUDENTS = '/students';

export const PASTOR_APPLICATION = '/pastor';

export const FRIEND_APPLICATION = '/friend';

const routes = [
  {
    path: HOME,
    name: 'Домашня сторінка',
  },
  {
    path: SIGN_IN,
    name: 'Увійти в акаунт',
  },
  {
    path: STUDENT_APPLICATION,
    name: 'Анкета абітурієнта',
  },
  {
    pathRegex: `${PASTOR_APPLICATION}/\\S+$`,
    name: 'Анкета пастора',
  },
  {
    pathRegex: `${FRIEND_APPLICATION}/\\S+$`,
    name: 'Анкета друга',
  },
  {
    path: STUDENTS,
    name: 'Список абітурієнтів',
  },
  {
    pathRegex: `${STUDENTS}/\\d$`,
    name: 'Інформація про абітурієнта',
  },
];

export const deriveHeaderFromPath = path => {
  const currentRoute = routes.find(route => (
    route.path && route.path === path
  ) || (
    route.pathRegex && new RegExp(route.pathRegex).test(path)
  ));
  return currentRoute ? currentRoute.name : 'UBTS Applications';
};
