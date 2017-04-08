/**
 * Elements.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-08 16:42:41
 * @version $Id$
 */

'use strict'
/**
 * Node
 * @param {[type]} id   [description]
 * @param {[type]} data [description]
 */
let Node = function(data) {
	this.id = data.id;
	this.data = (data !== undefined) ? data : {};
};

/**
 * Edge
 * @param {[type]} id     [description]
 * @param {[type]} source [description]
 * @param {[type]} target [description]
 * @param {[type]} data   [description]
 */
let Edge = function(id, source, target, data) {
	this.id = id;
	this.source = source;
	this.target = target;
	this.data = (data !== undefined) ? data : {};
};

export {
	Node,
	Edge
}