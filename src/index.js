import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter((item) => item.brand === brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter((item) => item.color === color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter((item) => item.model === model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter((item) => item.memory === memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => goods.filter((item) => item.price === price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) =>
  goods.filter((item) => item.country === country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter((item) => item.os === os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) =>
  goods.filter((item) => item.price >= from && item.price <= to);

const minPriceReducer = () => {
  return goods.reduce(
    (prev, curr) => Math.min(prev, curr.price),
    goods[0].price
  );
};

const maxPriceReducer = () => {
  return goods.reduce(
    (prev, curr) => Math.max(prev, curr.price),
    goods[0].price
  );
};

console.log(maxPriceReducer());

const toMaxSorter = () => {
  return goods.sort((a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  });
};

const toMinSorter = () => {
  return goods.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  });
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
