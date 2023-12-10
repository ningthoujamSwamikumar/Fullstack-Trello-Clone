import Navbar from "../../_components/Navbar";


const OrganizationLayout = ({
    children
}:{
    children: React.ReactNode;
})=>{
    return (
        <div>
            <Navbar />
            <div className="mt-10">
                {children}
            </div>
        </div>
    )
}

export default OrganizationLayout;