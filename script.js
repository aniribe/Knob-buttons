import { KnobwithButtons } from "./knobwithButtons.js";
import { Knob } from "./draggableKnob.js";

let knob1 = new KnobwithButtons(
  1,
  34,
  30,
  330,
  14,
  "rightFill",
  "leftFill",
  "minus",
  "plus",
  "temp"
);

let knob4 = new Knob("dial4", "handle4", 310, 50, "rightFill4", "leftFill4");
let knob5 = new Knob("dial5", "handle5", 340, 20, "rightFill5", "leftFill5");
