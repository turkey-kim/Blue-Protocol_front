import "styled-components";
import { Icolor, IfontSize } from "./style";

declare module "styled-components" {
  export interface DefaultTheme {
    color: Icolor;
    fontSize: IfontSize;
  }
}
