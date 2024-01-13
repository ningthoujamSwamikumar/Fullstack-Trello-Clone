import { z } from "zod";

export const DeleteCard = z.object({
    boardId: z.string(),
    id: z.string(),
});