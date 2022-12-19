function randomFraction() {
    return Math.random();
}
// 0 (inclusive) and 1 (exclusive) 

function randomWholeNum() {
    return Math.floor(Math.random() * 10); // 0 - 9
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}