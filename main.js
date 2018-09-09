// Populate the languages object with our chosen translation
let languages = {
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

// Grab the contents of the Text Input box and create an Array
const convertUserInput = () => {
  const inputElement = document.getElementById('user-input');
  if (inputElement.value.length < 1) {
    alert('You did not enter a phrase to be translated.');
    return;
  }
  let userArray = [];
  return (userArray = inputElement.value.split(' '));
  // console.log(userArray);
};

const translateIt = () => {};

// Add event listener on each button and grab Button Value
document.getElementById('lang-buttons').addEventListener('click', function(event) {
  // Okay now that we have which button was clicked lets do the magic
  // 1. Convert the User Imput into an array
  // 2. Send that to a function to translate against our list of words
  // 3. Send the results to a function to display

  let userArray = convertUserInput();
  // Stop processing if the array returned is undefined (Empyty/Null)
  if (userArray === undefined) {
    return;
  }
  // Lets send the array to the translateIt function to loop through and translate results
  translateIt(userArray);
  console.log(event.target.value);
});
