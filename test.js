Array.prototype.last = function () {
  if (this.length === 0) {
    return -1; // or whatever default value you want
  } else {
    return this[this.length - 1];
  }
};

