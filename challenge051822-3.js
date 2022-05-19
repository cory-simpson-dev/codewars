// 6kyu - Create phone number

// array of 10 integers (0 - 9)
// return string of those numbers in form of a phone number
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "(123) 456-7890"

function createPhoneNumber(numbers) {
    // set up string
    phoneNumber = '(xxx) xxx-xxxx';
    // loop through replacing string
    numbers.forEach(number => phoneNumber = phoneNumber.replace('x', number));
    // return answer
    return phoneNumber
}