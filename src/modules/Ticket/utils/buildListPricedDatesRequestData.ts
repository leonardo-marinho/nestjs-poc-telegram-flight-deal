import * as moment from 'moment';

export const buildListPricedDatesRequestData = (searchStartDate: string, searchEndDate: string) => {
  const totalDays = 6;
  const nowUnix = moment().unix();

  return `f.req=%5Bnull%2C%22%5Bnull%2C%5Bnull%2Cnull%2C1%2Cnull%2C%5B%5D%2C1%2C%5B1%2C0%2C0%2C0%5D%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5B%5B%5B%5B%5C%22%2Fm%2F028mpr%5C%22%2C4%5D%5D%5D%2C%5B%5B%5B%5C%22%2Fm%2F04jpl%5C%22%2C5%5D%5D%5D%2Cnull%2C0%2C%5B%5D%2C%5B%5D%2C%5C%222023-05-11%5C%22%2Cnull%2C%5B%5D%2C%5B%5D%2C%5B%5D%2Cnull%2Cnull%2C%5B%5D%2C3%5D%2C%5B%5B%5B%5B%5C%22%2Fm%2F04jpl%5C%22%2C5%5D%5D%5D%2C%5B%5B%5B%5C%22%2Fm%2F028mpr%5C%22%2C4%5D%5D%5D%2Cnull%2C0%2C%5B%5D%2C%5B%5D%2C%5C%222023-05-17%5C%22%2Cnull%2C%5B%5D%2C%5B%5D%2C%5B%5D%2Cnull%2Cnull%2C%5B%5D%2C3%5D%5D%2Cnull%2Cnull%2Cnull%2Ctrue%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5D%2Cnull%2Cnull%2Cnull%5D%2C%5B%5C%22${searchStartDate}%5C%22%2C%5C%22${searchEndDate}%5C%22%5D%2Cnull%2C%5B${totalDays}%2C${totalDays}%5D%5D%22%5D&at=ADrsKaGpOcBvgji03xGol6kj844B%3A${nowUnix}114&`;
}