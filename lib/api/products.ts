import { promises as fs } from 'fs';
import path from 'path';
import { Product } from '@/lib/types/product';

const dataFilePath = path.join(process.cwd(), 'lib', 'data', 'products.json');

export async function getProducts(): Promise<Product[]> {
    try {
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);
        return data.products || [];
    } catch (error) {
        console.error('Error reading products:', error);
        return [];
    }
}

export async function getProductById(id: string): Promise<Product | null> {
    const products = await getProducts();
    return products.find(p => p.id === id) || null;
}

export async function updateProduct(id: string, productData: Partial<Product>): Promise<Product | null> {
    try {
        const products = await getProducts();
        const index = products.findIndex(p => p.id === id);

        if (index === -1) {
            return null;
        }

        products[index] = { ...products[index], ...productData };

        const data = { products };
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');

        return products[index];
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}
