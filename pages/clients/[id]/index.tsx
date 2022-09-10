import { router } from 'next/client';

const ClientProjectsPage = () => {
    const loadProjectHandler = () => {
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {
                id: 'max',
                clientprojectid: 'projecta',
            },
        });
    };

    return (
        <div>
            <h1>THE PROJECTS OF A GIVEN CLIENT</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};

export default ClientProjectsPage;
