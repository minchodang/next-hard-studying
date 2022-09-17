import fs from 'fs/promises';
import path from 'path';
import { Fragment } from 'react';

interface ProductType {
    id: string;
    title: string;
    description: string;
}

function ProductDetailPage(props: { loadedProduct: ProductType }) {
    const { loadedProduct } = props;
    console.log(loadedProduct, '이런 ');

    if (!loadedProduct) {
        return <p>Loading...</p>;
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    return data;
}

export async function getStaticProps(context: { params: any }) {
    const { params } = context;

    const productId = params.pid;

    const data = await getData();

    const product = data.products.find((product: ProductType) => product.id === productId);

    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map((product: ProductType) => product.id);
    const pathWithParams = ids.map((id: string) => ({ params: { pid: id } }));

    return {
        paths: pathWithParams,
        fallback: false,
    };
}

export default ProductDetailPage;
