declare module "mymodule" {
    export function (): any;
}

import x = module("mymodule");
x();