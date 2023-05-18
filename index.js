let num = 5
console.log(`Variable: ${num}`)
async function f2() {
    const asar = require('@electron/asar');

    const src = 'C:/urban_voyeur/urban_voyeur_gold_v100/resources';
    const dest = 'app.asar';

    await asar.createPackage(src, dest);
    console.log('done.');
}