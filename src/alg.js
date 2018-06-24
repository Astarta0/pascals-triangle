function createPascalTriangle(allLevels) {
    createLevel(1, 0, allLevels);
}

function calculateLevelNumbers(level, prevNums) {
    let numbers = [];

    if (level === 1) {
        numbers.push(1);
        return numbers;
    }

    for (let i = 0; i < level; i++) {
        if (i === 0 || i === level - 1) {
            numbers.push(1);
        } else {
            // the number becomes the sum of the two above him
            numbers.push(prevNums[i - 1] + prevNums[i]);
        }
    }
    return numbers;
}

function createLevel(level, prevNums, allLevels) {
    // числа на этом уровне
    let numbersOnThisLevel = calculateLevelNumbers(level, prevNums);

    console.log(numbersOnThisLevel);

    if (level !== allLevels) return createLevel(level + 1, numbersOnThisLevel, allLevels);
}

createPascalTriangle(5);
