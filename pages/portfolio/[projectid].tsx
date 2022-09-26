import { useRouter } from 'next/router';
import Head from 'next/head';

const PortfolioProjectPage = () => {
    const router = useRouter();
    const { projectid } = router.query;

    return (
        <>
            <Head>
                <title>{projectid}</title>
                <meta name={'description'} content={'find a lot of great money'} />
            </Head>
            <div>
                <h1>The Portfolio Project Page</h1>
            </div>
        </>
    );
};

export default PortfolioProjectPage;
