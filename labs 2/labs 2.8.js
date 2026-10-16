'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445554434',
  'Augustus': '+380445554435',
};

const findPhoneByName = (name) => {
  return phonebook[name];
};

console.log(findPhoneByName('Marcus Aurelius'));