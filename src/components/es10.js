
export function ES10(){

    // Array.prototype.flat();
    const arr = [1, [2, 3], [4, [5]]];
    const flattened = arr.flat();
    console.log(flattened); // Output: [1, 2, 3, 4, 5]

    // Object.fromEntries();
    const entries = [['name', 'John'], ['age', 30], ['city', 'New York']];
    const obj = Object.fromEntries(entries);
    console.log(obj); // Output: { name: 'John', age: 30, city: 'New York' }

    /* using Dynamic Imports
         async function loadModule(moduleName) {
            const module = await import(moduleName);
            module.someFunction();
            }
        loadModule('./myModule.js'); 
    */

}

