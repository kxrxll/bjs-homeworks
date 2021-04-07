"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    const today = new Date();
    if (isNaN(percent)) {
        totalAmount = `Параметр процент содержит неправильное значение ${percent}`;
    } else if (isNaN(contribution)) {
        totalAmount = `Параметр первоначальный взнос содержит неправильное значение ${contribution}`;
    } else if (isNaN(amount)) {
        totalAmount = `Параметр сумма кредита содержит неправильное значение ${amount}`;
    } else if (Date.parse(date) === false || Date.parse(date) <= Date.parse(today)) {
        totalAmount = `Параметр срок кредита содержит неправильное значение ${date}`;
    } else {
        const bankDebt = amount - contribution;
        const paymentMonths = Math.trunc((Date.parse(date) - Date.parse(today)) / 2592000000);
        const monthlyPayment = bankDebt * ((percent / 100 / 12) + (percent / 100 / 12) / (((1 + percent / 100 / 12) ** paymentMonths) - 1));
        totalAmount = parseFloat((monthlyPayment * paymentMonths).toFixed(2));
        console.log(totalAmount);
    };
    return totalAmount;
}

function getGreeting(name) {
    if (typeof(name) != "string" || name === "") {
        name = "Аноним";
    };
    const greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}