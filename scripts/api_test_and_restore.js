const fs = require('fs');

const url = 'http://localhost:3000/api/products/1';

async function main() {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('GET failed', res.status);
            process.exit(1);
        }
        const prod = await res.json();
        fs.writeFileSync('tmp_product.orig.json', JSON.stringify(prod, null, 2));
        console.log('Original name:', prod.name);

        const modified = { ...prod, name: prod.name + ' [API-TEST]' };
        let r = await fetch(url, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(modified) });
        console.log('PUT (mod) status:', r.status);
        console.log(await r.text());

        r = await fetch(url);
        console.log('GET after PUT status:', r.status);
        const after = await r.json();
        console.log('After name:', after.name);

        // Restore original
        r = await fetch(url, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(prod) });
        console.log('PUT (restore) status:', r.status);
        console.log(await r.text());

        r = await fetch(url);
        const finalp = await r.json();
        console.log('Final name:', finalp.name);

        console.log('Test script completed. Original saved in tmp_product.orig.json');
    } catch (err) {
        console.error('Error in script:', err.message || err);
        process.exit(2);
    }
}

main();
