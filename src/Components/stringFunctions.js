function capitalize(str) {
    if (str.length === 0) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function concatenate(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        result += str[i];
      }
    }
    return result;
  }


  function secondWord(str) {
    const words = str.split(' ');
  
    if (words.length < 2) {
      return str;
    }
  
    const secondWord = words[1];
    const capitalizedSecondWord = secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
    words[1] = capitalizedSecondWord;
  
    return words.join(' ');
  }
  
  
export {capitalize, concatenate, secondWord};

