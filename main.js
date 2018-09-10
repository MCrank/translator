// Populate the languages object with our chosen translation
const languages = {
  greek: {
    merry: 'Καλά',
    christmas: 'Χριστούγεννα',
    and: 'Και',
    happy: 'Ευτυχισμένο',
    new: 'Nwe',
    year: 'Έτος'
  },
  german: {
    merry: 'Frohe',
    christmas: 'Weihnachten',
    and: 'Und',
    happy: 'Glücklich',
    new: 'Neu',
    year: 'Jahr'
  },
  russian: {
    merry: 'Веселого',
    christmas: 'Рождество',
    and: 'И',
    happy: 'Счастлив',
    new: 'Новые функции',
    year: 'Год'
  }
};

// Function to print string to DOM
const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

// Let's loop through and grab a list of available words in our object that we can translate
// and present them to the user.
// Going to use a table so will build it dynamicall...I Hope
const availableWords = () => {
  for (let i = 0; i < Object.keys(languages).length; i++) {
    let objectLanguage = Object.keys(languages)[i];
    // Okay now that I have each language lets rip through and extract the words for each language
    printToTableHeader('available-words', i, objectLanguage);
    for (let x = 0; x < Object.keys(languages[objectLanguage]).length; x++) {
      let objectLanguageWord = Object.keys(languages[objectLanguage])[x];
      printToTableBody('available-words', i, x, objectLanguageWord);
    }
  }
};

// Adds a new Table Header to the table passed in by Id
const printToTableHeader = (tableId, column, tableHeader) => {
  let myTable = document.getElementById(tableId);
  // Got the table now create a <thead> if one does not exist else skip
  if (myTable.tHead == null) {
    myTable.createTHead();
  }
  // Check if we have a <tr> and create if not
  if (myTable.tHead.childElementCount === 0) {
    myTable.tHead.insertRow(0);
  }
  // populate the <td> of the Header Row
  let cell = myTable.tHead.rows[0].insertCell(column);
  cell.innerHTML = `<b>${tableHeader}</b>`;
};

// Adds the data rows to the table passed in by Id
const printToTableBody = (tableId, column, row, tableBodyData) => {
  let myTable = document.getElementById(tableId);
  // Need to create the <tbody> element if it does not exist.
  if (myTable.tBodies.length === 0) {
    myTable.createTBody();
  }
  // Create a new row if one does not exist
  if (myTable.tBodies[0].rows[row] === undefined) {
    // If we are past the first column we may need to back fill previous row data
    // as blank else the code blows up
    if (myTable.tBodies[0].rows.length - 1 < row) {
      myTable.tBodies[0].insertRow(row);
      for (let r = 0; r < column; r++) {
        let backFillCell = myTable.tBodies[0].rows[row].insertCell(r);
        backFillCell.innerHTML = '';
      }
    } else {
      myTable.tBodies[0].insertRow(row);
    }
  }
  let cell = myTable.tBodies[0].rows[row].insertCell(column);
  cell.innerHTML = tableBodyData;
};

// Grab the contents of the Text Input box and create an Array
const convertUserInput = () => {
  const inputElement = document.getElementById('user-input');
  if (inputElement.value.length < 1) {
    alert('You must enter at least one word to be translated.');
    return;
  }
  let userArray = [];
  return (userArray = inputElement.value.toLowerCase().split(' '));
};

const translateIt = (userInput, language) => {
  // Okay we have our User Input Array being passed in.
  // Lets bounce the words against the chosen language
  let translationArr = [];
  for (let i = 0; i < userInput.length; i++) {
    let wordMatch = languages[language][userInput[i]];

    if (wordMatch === undefined) {
      translationArr.push('n/a');
      // console.log('Word not found: ' + userInput[i]);
    } else {
      translationArr.push(wordMatch);
      // console.log('Word Found: ' + wordMatch);
    }
    // printToDom(wordMatch, 'print-results');
    // console.log(languages[language].userInput[i]);
  }
  translateItSb(translationArr);
};

const translateItSb = (translationArr) => {
  // let newString = '';
  console.log('translateItSb: ' + translationArr);
};

// Add event listener on each button and grab Button Value
document.getElementById('lang-buttons').addEventListener('click', function(event) {
  let clickedLanguage = event.target.value.toString().toLowerCase();

  // Okay now that we have which button was clicked lets do the magic
  // 1. Convert the User Imput into an array
  // 2. Send that to a function to translate against our list of words
  // 3. Send the results to a function to display
  let userArray = convertUserInput();

  // Stop processing if the array returned is undefined (Empyty/Null)
  if (userArray === undefined) {
    return;
  }
  console.log(event.target.value.toString().toLowerCase());
  console.log(userArray);
  // Lets send the array to the translateIt function to loop through and translate results
  translateIt(userArray, clickedLanguage);
});

availableWords();
