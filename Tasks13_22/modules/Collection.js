function Collection(initialValue) {
  
  if (Array.isArray(initialValue)) {
    this._data = new Array(initialValue)[0];
    this._length = this._data.length;
    this.values = function () {
      return this._data;
    };
  }

  if (!Array.isArray(initialValue)) {
    throw new Error("Initial value must be an array!!!");
  }

  Object.defineProperty(this, "data", {
    get() {
      return this._data;
    },
    set(value) {
      if (!Array.isArray(value)) {
        console.log("setter");
        throw new Error("Value must be an array!!!");
      } else {
        this._data = value;
      }
    },
  });

  Object.defineProperty(this, "length", {
    get() {
      return this._length;
    },
  });
}

module.exports.Collection = Collection;
