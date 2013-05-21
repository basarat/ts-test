/// <reference path="dec.d.ts" />
/// <reference path="a.ts" />

/**
 * Some comment for B 
 */
class B extends A implements C {
    constructor() {
        super();
		console.log("B");
	}
}