// 8kyu - Count of positives/sum of negatives

function countPositivesSumNegatives(input) {
    // catch tricks
    if (input === null || input.length < 1) {
        return []
    } else {
    // find positives
    let positives = input.filter(num => num > 0)
    // count positives
    let countPositives = positives.length
    // find negatives
    let negatives = input.filter(num => num < 0)
    // sum negatives
    let sumNegatives = negatives.reduce((acc, num) => acc += num, 0)
    // return answer
    return [countPositives, sumNegatives]
    }
}