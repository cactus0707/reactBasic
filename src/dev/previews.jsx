import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseDate from "../components/ExpenseDate";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/ExpenseItem">
        <ExpenseItem />
      </ComponentPreview>
      <ComponentPreview path="/ExpenseDate">
        <ExpenseDate />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
