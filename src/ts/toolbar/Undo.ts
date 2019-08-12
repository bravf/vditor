import undoSVG from "../../assets/icons/undo.svg";
import {MenuItem} from "./MenuItem";

export class Undo extends MenuItem {
    constructor(vditor: IVditor, menuItem: IMenuItem) {
        super(vditor, menuItem);
        this.element.children[0].innerHTML = menuItem.icon || undoSVG;
        this.element.children[0].className = this.element.children[0].className + " vditor-menu--disabled";
        this.element.children[0].addEventListener("click", () => {
            vditor.undo.undo(vditor);
        });
    }
}
