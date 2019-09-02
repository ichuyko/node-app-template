// Type definitions for react-icofont 10.0
// Project: https://www.npmjs.com/package/react-icofont
// Definitions by: Ivan Chuyko <https://github.com/ichuyko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

import Icofont = ReactIcofont.Icofont;
export default Icofont;

declare namespace ReactIcofont {
    interface IcofontProps {
        icon: string;
        spin?: boolean;
        flip?: "h" | "v";
        rotate?: "90" | "180" | "270";
        size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
        className?: string;
    }

    class Icofont extends React.Component<IcofontProps> {}
}
