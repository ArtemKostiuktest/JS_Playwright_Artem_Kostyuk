function canSmoke(age) {
    if (age < 18) {
        console.log("You can't smoke, you're an underage minor")
        return
    }
    console.log("You can smoke, you're an adult")
}

let permissionToSmoke = function (age) {
    if (age < 18) {
        console.log("You can't smoke, you're an underage minor")
        return
    }
    console.log("You can smoke, you're an adult")
}

let allowToSmoke = (age) => {
    if (age < 18) {
        console.log("You can't smoke, you're an underage minor")
        return
    }
    console.log("You can smoke, you're an adult")
}

canSmoke(17)
canSmoke(18)
permissionToSmoke(17)
permissionToSmoke(18)
allowToSmoke(17)
allowToSmoke(18)

function allowedToIn(name, age, department) {
    if (name === 'Artem' && age >= 18 && department === 'QA') {
        console.log(`You have access to departament:  ${department}`);
        return
    }
    console.log(`You don't have access to departament: ${department}`);
}

allowedToIn("Artem", 18, "QA");