import _ from 'lodash';

export const chunkByCount = (arr, chunkCount) => {
  const chunks = [];
  while (arr.length) {
    const chunkSize = Math.ceil(arr.length / chunkCount--);
    const chunk = arr.slice(0, chunkSize);
    chunks.push(chunk);
    arr = arr.slice(chunkSize);
  }
  return chunks;
};

export const chunkByMax = (arr, size) => {
  const count = Math.ceil(arr.length / size);
  if (!count) return [arr]; // when size is too big
  size = Math.ceil(arr.length / count);
  const i = arr.length - (size - 1) * (arr.length % size && size - (arr.length % size));
  return _.chunk(arr.slice(0, i), size).concat(_.chunk(arr.slice(i), size - 1));
};
