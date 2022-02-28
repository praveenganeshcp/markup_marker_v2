import { BorderStyleable } from "../mixins/border-styleable";
import { Colorable } from "../mixins/colorable";
import { ContainerStyleable } from "../mixins/container-styleable";
import { Measurable } from "../mixins/measurable";
import { PaddingStyleable } from "../mixins/padding-styleable";
import { applyMixins } from "../utils/apply-mixins";
import { Widget } from "./widget";

export class ButtonWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(ButtonWidget, [PaddingStyleable, ContainerStyleable, Measurable, Colorable, BorderStyleable]);