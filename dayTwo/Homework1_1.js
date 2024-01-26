function sendsSMS(smsText) {

    let textLength = smsText.length;

    if (textLength <= 60) {
        console.log(`You need 1 sms to send text - ${smsText}`)
        return
    }

    if (textLength >= 61 && textLength <= 120) {
        console.log(`You need 2 sms to send text - ${smsText}`)
        return
    }
    if (textLength >= 121 && textLength <= 180) {
        console.log(`You need 3 sms to send text - ${smsText}`)
        return
    }
    console.log(`You need more than 3 sms to send text - ${smsText}`)
}

function reverseWord(word) {
    let newWord = word.split('').reverse().join('');
    console.log(`The word was reversed - ${newWord}`)
}

function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();

    let first = 0;
    let last = lowerCaseWord.length - 1;

    while (first < last) {
        if (lowerCaseWord[first] !== lowerCaseWord[last]) {
            console.log(`${word} is not a palindrome.`);
            return false;
        }

        first++;
        last--;
    }

    console.log(`${word} is a palindrome.`);
    return true;
}

function getPaired(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            array.push(arr[i]);
        }
    }

    for (let j = array.length - 1; j >= 0; j--) {
        console.log(array[j]);
    }
}

sendsSMS("This package is native ESM and no longer provides a CommonJS export.")
reverseWord("Hello")
isPalindrome("aba")
isPalindrome("abc")
getPaired([2,3,4,5,6,7,8])