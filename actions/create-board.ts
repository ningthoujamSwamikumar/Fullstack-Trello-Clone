"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const CreateBoard = z.object({
    title: z.string(),
});

export async function create(formData: FormData){
    const {title} = CreateBoard.parse({
        title: formData.get("title"),
    })
     
    await db.board.create({
        data: {
            title,
        }
    });

    revalidatePath("/organizations/org_2ZJ8OVvqYtLyW8Qctlemq56CHvY?title=test1");
}