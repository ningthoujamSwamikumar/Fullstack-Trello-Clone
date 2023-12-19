import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./board";

export default async function OrganizationIdPage(){
    //fetch content in server component
    const boards = await db.board.findMany();

    return (
        <div>
            <form action={create}>
                <input id="title" name="title" required placeholder="Enter a board title" className="border-black border p-1" />
                <Button type="submit" className="ml-2" size={"sm"}>Submit</Button>
            </form>
            <div className="space-y-2">
                {
                    boards.map(board=>(
                        <Board key={board.id} id={board.id} title={board.title} />
                    ))
                }
            </div>
        </div>
    )
}