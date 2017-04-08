/**
 * Vector.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-08 16:39:46
 * @version $Id$
 */

'use strict'
/**
 * Vector class
 */
class Vector {
	constructor(x, y) {
		this.x = x; // x position
		this.y = y; // y position
	}

	getvec() {
		return this;
	}

	add(v2) {
		return new Vector(this.x + v2.x, this.y + v2.y);
	}

	subtract(v2) {
		return new Vector(this.x - v2.x, this.y - v2.y);
	}

	magnitude() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	normalise() {
		return this.divide(this.magnitude());
	}

	divide(n) {
		return new Vector((this.x / n) || 0, (this.y / n) || 0);
	}

	multiply(n) {
		return new Vector(this.x * n, this.y * n);
	}
}

export default Vector;