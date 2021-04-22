const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const moment = require('moment');

const csvWriter = createCsvWriter({
  path: './out/mock.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'title', title: 'title' },
    { id: 'price', title: 'price' },
    { id: 'description', title: 'description' },
    { id: 'photo', title: 'photo' },
    { id: 'condition', title: 'condition' },
    { id: 'email', title: 'email' },
    { id: 'zipCode', title: 'zipCode' },
    { id: 'modifiedDate', title: 'modifiedDate' },
    { id: 'createdDate', title: 'createdDate' },
  ],
});

const ads = [];
let set = 10;

while (set) {
  let ad = {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    photo: faker.image.image(),
    condition: 'new',
    email: faker.internet.email(),
    zipCode: faker.address.zipCode(),
    modifiedDate: moment(faker.datatype.datetime()).format(
      'YYYY-MM-DD HH:mm:ss'
    ),
    createdDate: moment(faker.datatype.datetime()).format(
      'YYYY-MM-DD HH:mm:ss'
    ),
  };
  ads.push(ad);
  set--;
}

csvWriter
  .writeRecords(ads) // returns a promise
  .then(() => {
    console.log('...Done');
  });
