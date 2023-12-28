"use client";

import { create } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors}/>
      <FormButton />
    </form>
  );
};
