import dayjs from 'dayjs';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const YEAR_FORMAT = 'YYYY';

export const formatDate = date => dayjs(date).format(DATE_FORMAT);

export const formatYear = date => dayjs(date).format(YEAR_FORMAT);
