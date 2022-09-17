import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';

const UserProfilePage = (props: {
    username:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
}) => {
    return <h1>{props.username}</h1>;
};

export default UserProfilePage;

export async function getServerSideProps(context: { params: any; req: any; res: any }) {
    const { params, req, res } = context;

    return {
        props: {
            username: 'Max',
        },
    };
}
