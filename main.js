// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
const stringCardToArray = (string) => {
    let arr = [];
    for(let i = 0; i < string.length; i++) {
        arr.push(Number(string[i]))
    }
    return arr;
}

const validateCred = (arr) => {
    if(typeof arr === 'string')
        arr = stringCardToArray(arr)
    let sum = 0;
        for(let j = arr.length - 1; j >= 0; j -=2) {
            let single = arr[j]
            let double = arr[j-1]*2;
            let number = double > 9 ? double - 9 : double;
            sum += number;
            sum += single;
        }
    return sum % 10 === 0;
}

const invalidToValidCard = (arr) => {
    let sum = 0;
    for(let j = arr.length - 1; j >= 0; j -=2) {
        let single = arr[j]
        let double = arr[j-1]*2;
        let number = double > 9 ? double - 9 : double;
        sum += number;
        sum += single;
    }
    const remainder = sum % 10;
    if (remainder !== 0) {
        const diff = 10 - remainder;
        arr[arr.length - 1] = (arr[arr.length - 1] + diff) % 10;
    }
console.log(arr);
    return arr;
}

console.log('invalid1', invalid1);
console.log(validateCred(invalid1));
invalidToValidCard(invalid1);
console.log(validateCred(invalidToValidCard(invalid1)))


const findInvalidCards = (arrOfCards) => {
    let invalidCardsArr = [];
    for(let card of arrOfCards) {
        let isValid = validateCred(card);
        if(!isValid) {
            invalidCardsArr.push(card)
        }
    }
    return invalidCardsArr;
}

const idInvalidCardCompanies = (arr) => {
    let companies = [];
    for(let card of arr) {
        let firstDigit = card[0];
        switch(firstDigit) {
            case 3:
                companies.push('Amex (American Express)');
                break;
            case 4:
                companies.push('Visa');
                break;
            case 5:
                companies.push('Mastercard');
                break;
            case 6:
                companies.push('Discover');
                break;
            default:
                companies.push('Company not found');
                break;
        }
    }
    return [... new Set(companies)];
}


console.log(idInvalidCardCompanies(findInvalidCards(batch)))

/*console.log(validateCred(valid1), validateCred(valid2), validateCred(valid3), validateCred(valid4), validateCred(valid5));
console.log(validateCred(invalid1), validateCred(invalid2), validateCred(invalid3), validateCred(invalid4), validateCred(invalid5));
console.log(validateCred(mystery1), validateCred(mystery2), validateCred(mystery3), validateCred(mystery4), validateCred(mystery5));
*/