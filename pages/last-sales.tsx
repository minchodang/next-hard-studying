import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface SalesType {
    id: string;
    username: any;
    volume: any;
}

function LastSalesPage() {
    const [sales, setSales] = useState<SalesType[]>();
    // const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR(
        'https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json',
        () =>
            fetch('https://nextjs-studying-default-rtdb.firebaseio.com/sales.json').then((res) =>
                res.json(),
            ),
    );

    useEffect(() => {
        if (data) {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                });
            }

            setSales(transformedSales);
        }
    }, [data]);

    // useEffect(() => {
    //   setIsLoading(true);
    //   fetch('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const transformedSales = [];

    //       for (const key in data) {
    //         transformedSales.push({
    //           id: key,
    //           username: data[key].username,
    //           volume: data[key].volume,
    //         });
    //       }

    //       setSales(transformedSales);
    //       setIsLoading(false);
    //     });
    // }, []);

    if (error) {
        return <p>Failed to load.</p>;
    }

    if (!data || !sales) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - ${sale.volume}
=======

interface SalesIndividual {
    id: string;
    username: string;
    volume: string;
}

const LastSalesPage = () => {
    const [sales, setSales] = useState<SalesIndividual[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://nextjs-studying-default-rtdb.firebaseio.com/sales.json`)
            .then((res) => res.json())
            .then((data) => {
                const transformedSales = [];
                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume,
                    });
                }
                setSales(transformedSales);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log(sales, '박창호 후보님');
    }, [sales]);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    if (!sales) {
        return <p>Not yet Data</p>;
    }
    return (
        <ul>
            {sales?.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - {sale.volume}
                </li>
            ))}
        </ul>
    );
}

// export async function getStaticProps() {
//     const response = await fetch(
//         'https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json',
//     );
//     const data = await response.json();
//
//     const transformedSales = [];
//
//     for (const key in data) {
//         transformedSales.push({
//             id: key,
//             username: data[key].username,
//             volume: data[key].volume,
//         });
//     }
//
//     return { props: { sales: transformedSales } };
// }



export default LastSalesPage;
