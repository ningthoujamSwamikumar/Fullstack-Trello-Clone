"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache";

export const deleteBoard = async (id: string)=>{
    await db.board.delete({
        where: {
            id,
        }
    });

    revalidatePath("/organizations/org_2ZJ8OVvqYtLyW8Qctlemq56CHvY?title=test1");
}