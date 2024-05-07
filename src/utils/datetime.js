import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YYYY';
export const formatdayjs = (date) => dayjs(date).format(DATE_FORMAT);
export const parsedate = (datestring) => (datestring ? dayjs(datestring, DATE_FORMAT) : dayjs());
