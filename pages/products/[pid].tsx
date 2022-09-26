import fs from 'fs/promises';
import path from 'path';
import { Fragment } from 'react';
import Head from 'next/head';

interface ProductType {
    id: string;
    title: string;
    description: string;
}

function ProductDetailPage(props: { loadedProduct: ProductType }) {
    const { loadedProduct } = props;
    console.log(loadedProduct, '이런 ');

    const pageHeadData = (
        <Head>
            <title>next-practices</title>
            <meta name={'description'} content={`find a lot of great money/${loadedProduct.id}`} />
        </Head>
    );
    if (!loadedProduct) {
        return (
            <>
                {pageHeadData}
                <p>Loading...</p>
            </>
        );
    }

    return (
        <Fragment>
            {pageHeadData}

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

    if (!product) {
        return { notFound: true };
    }

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
        fallback: true,
    };
}

export default ProductDetailPage;
