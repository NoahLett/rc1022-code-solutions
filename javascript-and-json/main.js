var arrayOfBooks = [
  {
    title: 'How to Change Your Mind',
    isbn: '123-456-789-21',
    author: 'Michael Pollan'
  },
  {
    title: 'Good to Great',
    isbn: '234-567-891-10',
    author: 'Jim Collins'
  },
  {
    title: 'Outliers',
    isbn: '987-654-321-98',
    author: 'Malcolm Gladwell'
  }
];

console.log('value of arrayOfBooks:', arrayOfBooks);
console.log('typeof arrayOfBooks:', typeof arrayOfBooks);

console.log('value of JSON.stringify arrayOfBooks:', JSON.stringify(arrayOfBooks));

console.log('typeof JSON.stringify arrayOfBooks:', typeof JSON.stringify(arrayOfBooks));

var manualString = '{"numberId":"123456789","Name":"John Doe"}';

console.log('value of manualString:', manualString);
console.log('typeof manualString:', typeof manualString);

var jsonObject = JSON.parse(manualString);

console.log('value of jsonObject:', jsonObject);
console.log('typeof jsonObject:', typeof jsonObject);
