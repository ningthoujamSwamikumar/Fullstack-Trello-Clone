import { OrganizationList } from "@clerk/nextjs"

const SelectOrgPage = () => {
    return (
        <OrganizationList hidePersonal afterSelectOrganizationUrl={"/organizations/:id"} afterCreateOrganizationUrl={"/organiztions/:id"}/>
    )
}

export default SelectOrgPage;