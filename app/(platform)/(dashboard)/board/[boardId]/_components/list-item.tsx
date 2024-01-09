"use client";

import { ListWithCards } from "@/types";
import { ListHeader } from "./list-header";
import { CardForm } from "./card-form";
import { ElementRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CardItem } from "./card-item";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export const ListItem = ({ data, index }: ListItemProps) => {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(()=>{
      textAreaRef.current?.focus();
    })
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2"
          >
            <ListHeader data={data} onAddCard={enableEditing} />

            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
              {...provided.droppableProps}
              ref={provided.innerRef}
                  className={cn(
                    "mx-1 py-0.5 flex flex-col gap-y-2",
                    data.cards.length > 0 ? "mt-2" : "mt-0"
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem key={card.id} data={card} index={index} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>

            <CardForm
              ref={textAreaRef}
              listId={data.id}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};
