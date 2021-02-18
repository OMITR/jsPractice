function ageCheck(age) {
    if (age >= 0 & age <= 2) {
        console.log("младенец");
    }
    else if (age >= 3 & age <= 13) {
        console.log("ребенок");
    }
    else if (age >= 14 & age <= 19) {
        console.log("подросток");
    }
    else if (age >= 20 & age <= 65) {
        console.log("взрослый");
    }
    else if (age >= 66) {
        console.log("пожилой");
    }
}

ageCheck(20);

function rounding(num, accuracy) {
    if (accuracy > 15) {
        accuracy = 15;
    }
    console.log(parseFloat(num.toFixed(accuracy)));
}

rounding(155.453453463,4);

function divider(num) {
    if (num % 2 == 0) {
        if (num % 10 == 0) {
            console.log("Число делится на 10");
        }
         else if (num % 3 == 0) {
            if (num % 6 == 0) {
                console.log("Число делится на 6");
            }
            else {
                console.log("Число делится на 3");
            }
        }
    }
    else if (num % 3 == 0) {
        console.log("Число делится на 3");
    }
    else if (num % 7 == 0) {
        console.log("Число делится на 7");
    }
    else {
        console.log("Не делится");
    }
}

divider(10);

function vacation(quantity, groupName, dayName) {
    if (groupName == "Students") {
        if (dayName == "Friday") {
            price = quantity * 8.45;
            if (quantity >= 30) {
                price = price * 0.85;
            }
        }
        else if (dayName == "Saturday") {
            price = quantity * 9.80;
            if (quantity >= 30) {
                price = price * 0.85;
            }
        }
        else if (dayName == "Sunday") {
            price = quantity * 10.46;
            if (quantity >= 30) {
                price = price * 0.85;
            }
        }
        console.log("Total price:", price.toFixed(2));
    }
    if (groupName == "Corpos") {
        if (dayName == "Friday") {
            price = quantity * 10.90;
            if (quantity >= 100) {
                price = (quantity - 10) * 10.90;
            }
        }
        else if (dayName == "Saturday") {
            price = quantity * 15.60;
            if (quantity >= 100) {
                price = (quantity - 10) * 15.60;
            }
        }
        else if (dayName == "Sunday") {
            price = quantity * 16;
            if (quantity >= 100) {
                price = (quantity - 10) * 16;
            }
        }
        console.log("Total price:", price.toFixed(2));
    }
    if (groupName == "Regular") {
        if (dayName == "Friday") {
            price = quantity * 15;
            if (quantity >= 10 & quantity <= 20) {
                price = price * 0.95;
            }
        }
        else if (dayName == "Saturday") {
            price = quantity * 20;
            if (quantity >= 10 & quantity <= 20) {
                price = price * 0.95;
            }
        }
        else if (dayName == "Sunday") {
            price = quantity * 22.50;
            if (quantity >= 10 & quantity <= 20) {
                price = price * 0.95;
            }
        }
        console.log("Total price:", price.toFixed(2));
    }
}

vacation(30, "Students",  "Sunday");

function leapYearCheck(year) {
    if (year % 4 == 0) {
        console.log("yes");
    }
    else if (year % 400 == 0) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}

leapYearCheck(2002);