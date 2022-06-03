// 5kyu - the hashtag generator

// take in string
// return string with #, capitalized letters, and no spaces (or false if string.length > 140 or input/result is empty)
// "    Hello     World   " => "#HelloWorld"

function generateHashtag(str) {
    // catch 0
    if (str.length === 0) return false;
    // split string & filter out spaces & map first letter & join
    str = str.split(' ').filter(ele => ele != '').map(ele => ele[0].toUpperCase() + ele.slice(1)).join('');
    // create answer variable
    let answer = `#${str}`;
    // catch length
    return (answer.length <= 140 && answer.length > 1) ? answer : false;
}