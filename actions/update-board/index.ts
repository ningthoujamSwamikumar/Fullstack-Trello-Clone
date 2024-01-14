"use server"

import { revalidatePath } from "next/cache";

import { auth } from "@clerk/nextjs"
import { InputType, ReturnType } from "./types"
import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateBoard } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async(inputData:InputType):Promise<ReturnType>=>{
    const {userId, orgId} = auth();

    if(!userId || !orgId){
        return {
            error: "Unauthorized",
        };
    }

    const {title, id} = inputData;
    let board;

    try {
        board = await db.board.update({
            where: {
                id,
                orgId,
            },
            data: {
                title,
            },
        });

        await createAuditLog({
            entityTitle: board.title,
            action: ACTION.UPDATE,
            entityId: board.id,
            entityType: ENTITY_TYPE.BOARD,
        })

    }catch(error){
        return {
            error: "Failed to update"
        }
    }

    revalidatePath(`/board/${id}`);
    return { data : board };
};

export const updateBoard = createSafeAction(UpdateBoard, handler);