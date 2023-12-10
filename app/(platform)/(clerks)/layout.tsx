export default function ClerkLayout({
    children
}: {
    children: React.ReactNode;
}){
    return (
        <div className="flex justify-center items-center bg-neutral-100 h-full">
            {children}
        </div>
    )
}