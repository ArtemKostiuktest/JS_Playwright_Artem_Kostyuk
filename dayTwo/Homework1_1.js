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
    filteredArray = arr.filter(number => number % 2 === 0).reverse();
    console.log(filteredArray)
    return filteredArray
}

function findComPref(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if (prefix === "") {
            console.log("");
        }
    }

    console.log(prefix);
}

sendsSMS("This package is native ESM and no longer provides a CommonJS export.")
reverseWord("Hello")
isPalindrome("aba")
isPalindrome("abc")
getPaired([2, 3, 4, 5, 6, 7, 8])
findComPref(["Unlike", "Mortgage", "Fee"])
findComPref(["Disconnect", "Dislike", "Disagree"])