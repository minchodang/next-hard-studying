import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';

const UserIdPage = (props: {
    id:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
}) => {
    return <h1>{props.id}</h1>;
};

export default UserIdPage;

export async function getServerSideProps(context: { params: any }) {
    const { params } = context;
    const userId = params.uid;
    return {
        props: {
            id: 'userid-' + userId,
        },
    };
}
