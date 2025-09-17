const handleIsTriangle = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
        return "It's possible";
    }
    return "It's not possible";
};

console.log(handleIsTriangle(3, 1, 5));