/**
 * index.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-07 17:36:54
 * @version $Id$
 */

'use strict'
import data from './data'
import forceLayout from './forceLayout'

let startRender = function() {
	let approachSel = document.getElementById('approachSel'),
		repulsion = document.getElementById('repuval').value,
		stiffness = document.getElementById('stifval').value,
		damping = document.getElementById('dampval').value,
		approach = approachSel.options[approachSel.selectedIndex].value,
		parentid = 'chart',
		containerId = 'forcedLayoutView';

	let style = window.getComputedStyle(document.getElementById(parentid)),
		height = Number.parseFloat(style.getPropertyValue("height")),
		width = Number.parseFloat(style.getPropertyValue("width"));

	console.log('get all parameters.');
	if (!(isNaN(repulsion) || isNaN(stiffness) || isNaN(damping))) {
		let ins = new forceLayout({
			'parentId': parentid,
			'containerId': containerId,
			'repulsion': Number.parseFloat(repulsion),
			'stiffness': Number.parseFloat(stiffness),
			'damping': Number.parseFloat(damping),
			'approach': approach,
			'width': width,
			'height': height
		});

		ins.setData(data);
		ins.start();
	}
}

/**
 * [run description]
 * @type {[type]}
 */
window.onload = function() {
	let run = document.getElementById('run'),
		input = document.getElementsByTagName('input'),
		inputList = Array.prototype.slice.call(input);

	run.addEventListener('click', startRender);
	inputList.forEach(ele => {
		ele.addEventListener('keydown', e => {
			if (e.which == 13) startRender();
		});
	});
}
