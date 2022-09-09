import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link href={'/portfolio'}>Portfolio</Link>
                </li>
                <li>
                    <Link href={'/clients'}>Clients</Link>
                </li>
                <li></li>
            </ul>
        </div>
    );
};

export default Home;
