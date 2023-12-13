import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {Plus} from "lucide-react"

const DashboardNavbar = ()=>{
    return (
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm  bg-white flex items-center" >
            {/* TODO: Mobile Sidebar */}
            <div className="flex items-center md:gap-x-4">
                <Logo />
                <Button variant={"primary"} size={"sm"} className="hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button variant={"primary"} size={"sm"} className="rounded-sm block md:hidden">
                    <Plus className="h-4 w-4"/>
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher hidePersonal afterLeaveOrganizationUrl="/select-org" afterCreateOrganizationUrl={"/organizations/:id"} afterSelectOrganizationUrl={"/organizations/:id"} appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }
                    }
                }}/>
                <UserButton afterSignOutUrl="/" appearance={
                    {
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30,
                            }
                        }
                    }
                }/>
            </div>
        </nav>
    )
}

export default DashboardNavbar;