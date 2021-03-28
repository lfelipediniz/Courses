console.log("Is it even?");

for(let i = 1; i <= 20; i++){

    const even = i % 2 === 0 ? 'even' : 'odd';

    console.log(`
    Number ${i} ${even}`);
}