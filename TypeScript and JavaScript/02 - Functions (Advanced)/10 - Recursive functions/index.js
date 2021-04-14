// the function calls itself
function recursive (max) {

    if (max >= 10) return;
    max++;

    recursive(max);
}

recursive(0);