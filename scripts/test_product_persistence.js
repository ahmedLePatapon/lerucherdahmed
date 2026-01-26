const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data', 'products.json');

function readData() {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}

try {
    const original = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(original);
    const product = data.products.find(p => p.id === '1');
    if (!product) {
        console.error('Product with id=1 not found');
        process.exitCode = 2;
        process.exit();
    }

    console.log('Original name:', product.name);

    // Modify
    product.name = product.name + ' [AUTO-TEST]';
    writeData(data);

    const afterMod = readData();
    const modProd = afterMod.products.find(p => p.id === '1');
    console.log('Modified name:', modProd.name);

    // Restore
    writeData(JSON.parse(original));
    const afterRestore = readData();
    const restored = afterRestore.products.find(p => p.id === '1');
    console.log('Restored name:', restored.name);

    console.log('Test completed successfully.');
} catch (err) {
    console.error('Error during test:', err);
    process.exitCode = 1;
}
