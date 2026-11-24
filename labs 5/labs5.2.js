function array() {
  const data = [];

  function item(index) {
    return data[index];
  }

  item.push = function (value) {
    data.push(value);
  };

  item.pop = function () {
    return data.pop();
  };

  return item;
}