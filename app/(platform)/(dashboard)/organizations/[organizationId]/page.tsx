import { auth } from "@clerk/nextjs";

const OrganizationPage = () => {
    const {orgId, organization} = auth();
    return (
        <div>
            <p>Org Id: {orgId}</p>
            <p>org: {organization?.name}</p>
            Organiztion page
        </div>
    )
}

export default OrganizationPage;