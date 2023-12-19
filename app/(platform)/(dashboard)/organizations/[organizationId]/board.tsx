import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps{
    id : string;
    title: string;
}

export const Board = ({id, title}: BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null, id);

    return (
        <div>
            <form action={deleteBoardWithId} className="flex items-center gap-x-2">
                <p>Board Title: {title}</p>
                <Button type="submit" variant={"destructive"} size={"sm"}>Delete</Button>
            </form>
        </div>
    )
}