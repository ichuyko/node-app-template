// Type definitions for react-icofont 1.0
// Project: https://github.com/theanam/react-icofont
// Definitions by: Ivan Chuyko <https://github.com/ichuyko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

import Icofont = ReactIcofont.Icofont;
export default Icofont;

declare namespace ReactIcofont {
    type Rotate = "90" | "180" | "270";
    type Flip = "h" | "v";
    type Size = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" ;
    interface IcofontProps {
        flip?: Flip;
        icon: string;
        size?: Size;
        spin?: boolean;
        rotate?: Rotate;
        className?: string;
    }

    class Icofont extends React.Component<IcofontProps> {}
}
