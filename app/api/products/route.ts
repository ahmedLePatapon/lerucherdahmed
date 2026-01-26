import { NextRequest, NextResponse } from 'next/server';
import { getProductById, getProducts, updateProduct } from '@/lib/api/products';

export async function GET(
    request: NextRequest,
) {
    try {
        const products = await getProducts();

        if (!products) {
            return NextResponse.json(
                { error: 'Products not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}