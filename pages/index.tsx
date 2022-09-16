import * as fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

interface StaticProps {
    products: [{ id: string; title: string; description: string }];
}

const Home = (props: StaticProps) => {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
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
