/* eslint-disable */
const transform = (function () {
  const trans = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform'];
  const body = document.body;
  const result = trans.filter((e) => body.style[e] !== undefined)[0];
  return result;
}());


module.exports = {
  transform,
};
/* eslint-disable */
