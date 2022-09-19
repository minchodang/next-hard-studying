import { useEffect, useState } from 'react';

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
};

export default LastSalesPage;
