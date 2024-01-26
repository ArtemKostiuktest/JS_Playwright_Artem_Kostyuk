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

sendsSMS("This package is native ESM and no longer provides a CommonJS export.")