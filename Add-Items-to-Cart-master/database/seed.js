/* eslint-disable new-cap */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

const inventorySchema = mongoose.Schema({
  productId: {
    type: Number,
    unique: true
  },
  price: Number,
  description: String,
  overview: Array,
  options: {},
  quantityInStock: Number,
  availableToReturn: Boolean,
  shippingCosts: Number,
  manufacturingTime: Number,
  shippingFrom: String,
  shippingTo: Array,
  deliveryDate: Array
});

const inventoryList = mongoose.model('inventoryList', inventorySchema);


const randomWords = 'Spicy jalapeno bacon ipsum dolor amet salami cupidatat fugiat drumstick magna et tenderloin exercitation leberkas picanha consequat Dolore tempor prosciutto biltong incididunt fugiat pork loin laboris picanha shankle corned beef tongue Magna dolore andouille short loin pork loin deserunt incididunt consequat pastrami porchetta Velit fugiat et consequat bacon tail nisi picanha short ribs ipsum pancetta eu Mollit chuck deserunt swine magna alcatra spare ribs picanha Meatball andouille short loin corned beef t-bone jowl voluptate turkey filet mignon do flank sausage veniam prosciuttoCupidatat corned beef nisi drumstick mollit elit laboris fatback ullamco filet mignon turducken aute bresaola Ut tri-tip consequat cupidatat turkey dolor consectetur meatball Incididunt rump dolore aliquip hamburger Nulla aliquip turducken in in quis aute Andouille velit buffalo elit chicken labore in shankle ribeyePorchetta veniam dolore ball tip pariatur alcatra boudin corned beef landjaeger incididunt id filet mignon in cow tail Proident nulla cillum salami exercitation boudin ea in brisket tempor elit Shoulder tri-tip incididunt non nulla pork exercitation id quis porchetta aliqua Tenderloin sunt irure cillum sausage incididunt qui Picanha non bacon in elit filet mignon pig tri-tip ut Excepteur flank officia in in Ipsum cupim aliquip est laborum minim aute aliqua do boudin occaecat sirloinKielbasa meatloaf pork chop landjaeger flank chicken Ut sirloin reprehenderit meatball t-bone in Doner tail short ribs duis nostrud cupidatat cow pig deserunt turducken sausage Reprehenderit ut pork sausage tail venison andouille incididunt Beef ribs kevin officia corned beef ribeye buffalo chicken nulla id pastrami porchetta dolor landjaeger fugiat aliqua Beef ut pork swine tongue meatball corned beef in nisi ea dolore Ham hock t-bone id boudin short loin consectetur elit enim eaIn cupidatat consequat fatback dolore short loin id lorem pastrami aute proident ut picanha capicola strip steak Sed sunt meatloaf mollit sirloin strip steak do lorem In meatball occaecat landjaeger flank pariatur in chuck leberkas Porchetta quis laborum duis picanha commodo proident magna cupidatat turducken excepteur doner adipisicing sausage Pork loin pork chop flank consequat sint turkey Pastrami brisket doner capicola pork belly reprehenderit shoulder kevin boudin pork et tongue sirloin esse';

const randomCountries = 'China, Wales, Belgium, Japan, France, America, Germany, Canada, Spain, Brazil, South Africa, Belgium, India, Mexico, Argentina, Ethiopia, Jamaica, Brazil, Sweden, Denmark, Switzerland, Ghana, Bangladesh, Switzerland, Nigeria, Sri Lanka, Ireland, Italy, Niger, Sudan, Italy, Argentina, Pakistan, Cuba, North Korea';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jul', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

let randomNumberGenerator = function (number) {
  return parseFloat((Math.random() * number).toFixed(2));
};

let deliveryDate = function () {
  let randomMonth = [];
  let randomIndex = Math.floor(randomNumberGenerator(11));
  randomMonth.push(months[randomIndex]);
  randomMonth.push(months[randomIndex]);
  return randomMonth;
};

let shippingCountry = function () {
  let countries = randomCountries.split(',');
  let randomIndex = Math.floor(randomNumberGenerator(10));
  return `${countries[randomIndex]}`;
};

let shippingTo = function () {
  return randomCountries.split(',');
};

let shippingCost = function () {
  return Math.floor(randomNumberGenerator(4) + 1) + 0.99;
};


let randomPhraseGenerator = function () {
  let randomWordsArray = randomWords.split(' ');
  let returnedRandomString = '';
  let randomLength = Math.floor((randomNumberGenerator(20) + 1)); // Generates a random number between 0 - 20
  let randomWord = Math.floor((randomNumberGenerator(341)));
  for (let i = 0; i < randomLength; i += 1) {
    // eslint-disable-next-line no-shadow
    let randomWord = Math.floor((randomNumberGenerator(341)));
    returnedRandomString += `${randomWordsArray[randomWord]} `;
  }
  return returnedRandomString;
};

let itemCanReturn = function () {
  if (Math.floor(randomNumberGenerator(2)) / 2 === 0) {
    return true;
  }
  return false;
};

let randomDescription = function () {
  let description = '';
  let randomWordsArray = randomWords.split(' ');
  let randomLength = Math.floor(randomNumberGenerator(10) + 15);
  for (let i = 0; i < randomLength; i += 1) {
    let randomWord = Math.floor((randomNumberGenerator(341)));
    description += `${randomWordsArray[randomWord]} `;
  }
  return description;
};

let randomOverview = function () {
  let comments = Math.floor(randomNumberGenerator(4));
  let overview = [];
  for (let i = 0; i < comments; i += 1) {
    overview.push(randomPhraseGenerator());
  }
  return overview;
};

let randomOptions = function () {
  let options = {}; // Storing all of the possible options
  let randomWordsArray = randomWords.split(' '); // splits the random words into an array
  let possibleOptions = Math.floor(randomNumberGenerator(4)); // generates a number of 0 - 3 option possibilities
  for (let i = 0; i < possibleOptions; i += 1) { // Iterates possibilities amount of times
    let possibleValues = Math.floor((randomNumberGenerator(341))); // generates a random between between 0 - 341
    let keyValue = randomWordsArray[possibleValues]; // The option selection will be this value
    let optionSelection = []; // Array of options being put into the options value
    let selections = Math.floor(randomNumberGenerator(20) + 2); // Generates x amount of possibilities to select from
    for (let j = 0; j < selections; j += 1) { // Iterates through x amount of possibilities
      let possibleSelection = Math.floor((randomNumberGenerator(341)));
      optionSelection.push(randomWordsArray[possibleSelection]);
    }
    options[keyValue] = optionSelection; // Sets the key with x amount of options
  }
  return options;
};

let manufacturingTime = function () {
  return Math.floor(randomNumberGenerator(6));
};

let seedInventory = function () {
  // let count = 0;
  // function createInventory(){
  for (let itemId = 1; itemId < 101; itemId += 1) {
    let newItem;
    newItem = new inventoryList({
      productId: itemId,
      price: (randomNumberGenerator(100) + 1),
      description: randomDescription(),
      overview: randomOverview(),
      options: randomOptions(), // Let's me create an obj
      quantityInStock: Math.floor(randomNumberGenerator(100) + 1),
      availableToReturn: itemCanReturn(),
      shippingCosts: shippingCost(),
      manufacturingTime: manufacturingTime(),
      shippingFrom: shippingCountry(),
      shippingTo: shippingTo(),
      deliveryDate: deliveryDate()
    });
    newItem.save((err, itemId) => { // Change to update and use upsert
      if (err) {
        console.log(err);
      } else {
        console.log('Item saved successfully to database');
      }
    });
  }
  // eslint-disable-next-line no-console
  return console.log('done');
};

let checkInventoryList = (itemId, callback) => {
  inventoryList
    .find({ productId: itemId })
    .exec(callback);
};

let updateInventory = (itemId, boughtValue) => {
  inventoryList
    .find({ productId: itemId })
    .update({ quantityInStock: boughtValue });
};


let seed = () => {
  seedInventory();
};


// seed();

module.exports.checkInventoryList = checkInventoryList;
module.exports.updateInventory = updateInventory;
