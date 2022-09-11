import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Key } from 'react';

interface StaticProps {
    products: [{ id: string; title: string }];
}

const Home = (props: StaticProps) => {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
};

export async function getStaticProps() {
    return {
        props: {
            products: [{ id: 'p1', title: 'Product1' }],
        },
    };
}

export default Home;
