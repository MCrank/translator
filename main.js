let greekTranslationObj = {
  merry: 'Καλά',
  christmas: 'Χριστούγεννα',
  and: 'Και',
  happy: 'Ευτυχισμένο',
  new: 'Nwe',
  year: 'Έτος'
};

let germanTranslationObj = {
  merry: 'Frohe',
  christmas: 'Weihnachten',
  and: 'Und',
  happy: 'Glücklich',
  new: 'Neu',
  year: 'Jahr'
};

let russianTranslationObj = {
  merry: 'Веселого',
  christmas: 'Рождество',
  and: 'И',
  happy: 'Счастлив',
  new: 'Новые функции',
  year: 'Год'
};

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};
