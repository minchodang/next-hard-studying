import * as fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';

interface StaticProps {
    products: [{ id: string; title: string; description: string }];
}

const Home = (props: StaticProps) => {
    const { products } = props;

    return (
        <>
            <Head>
                <title>next-practices</title>
                <meta name={'description'} content={'find a lot of great money'} />
            </Head>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export async function getStaticProps() {
    console.log('re-generating');
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    if (!data) {
        return {
            redirect: {
                destination: '/',
            },
        };
    }

    if (data.products.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
}

export default Home;
