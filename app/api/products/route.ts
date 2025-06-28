import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'api', 'products', 'products.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const products = JSON.parse(fileContents);

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
