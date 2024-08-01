let i = 0;

function recursiveFunction() {
    try {
        i++;
        recursiveFunction();
    } catch (e) {
        console.log("Stack overflow at recursion depth: " + i);
    }
}

recursiveFunction();
