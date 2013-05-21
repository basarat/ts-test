/// <reference path="dec.d.ts" />
/// <reference path="a.ts" />
class B extends A implements C {
    constructor() {
        super();
		console.log("B");
	}
}