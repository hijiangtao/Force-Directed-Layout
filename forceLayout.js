/**
 * forceLayout.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-06 23:53:07
 * @version $Id$
 */

'use strict'
import * as d3 from 'd3-selection'

console.log(d3);

/**
 * Vector class
 */
class Vector {
	constructor(x, y, mass = 1.0) {
		this.x = x; // x position
		this.y = y; // y position
		this.v = new Vector(0, 0); // velocity
		this.a = new Vector(0, 0); // acceleration
		this.mass = mass;
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
		return Math.sqrt(this.x*this.x + this.y*this.y);
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

	updateAcc(force) {
		this.a = this.a.add(force.divide(this.mass));
	}
}

/**
 * Spring class
 */
class Spring {
	constructor(source, target, length) {
		this.source = source;
		this.target = target;
		this.length = length;
	}

	// updateSpring() {

	// }
}

/**
 * Node
 * @param {[type]} id   [description]
 * @param {[type]} data [description]
 */
let Node = function(id, data) {
	this.id = id;
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

/**
 * Force Layout class
 */
class forceLayout {
	constructor(id) {
		this.props = {
			container: id,
			width: 800, // DOM width
			height: 600, // DOM height
			stiffness: 1.0, // spring stiffness
			repulsion: 1.0, // repulsion
			damping: 0.5, // volocity damping factor
			minEnergyThreshold: 0.01, // threshold to determine whether to stop
			maxSpeed: 1000 // max node speed
		};

		this.nodes = [];
		this.edges = [];
		this.nodeSet = {};
		this.edgeSet = {};
		this.nodePoints = new Map();
		this.edgeSprings = new Map();

		this.nextEdgeId = 0;

		this.canvas = {};
		this.ctx = this.canvas.getContext('2d');
	}

	addNode(node) {
		if (!(node.id in this.nodeSet)) {
			this.nodes.push(node);
		}

		this.nodeSet[node.id] = node;
		return node;
	};
	addNodes(data) {
		let len = data.length;
		for (let i = 0; i < len; i++) {
			let node = new Node(data[i]);
			this.addNode(node);
		}
	};

	addEdge(edge) {
		if (!(edge.id in this.edgeSet)) {
			this.edges.push(edge);
		}

		this.edgeSet[edge.id] = edge;
		return edge;
	};
	addEdges(data) {
		let len = data.length;
		for (let i = 0; i < len; i++) {
			let e = data[i],
				node1 = this.nodeSet[e[0]];
			if (node1 == undefined) {
				throw new TypeError("invalid node name: " + e[0]);
			}

			let node2 = this.nodeSet[e[1]];
			if (node2 == undefined) {
				throw new TypeError("invalid node name: " + e[1]);
			}

			let attr = e[2],
				edge = new Edge(this.nextEdgeId++, node1, node2, attr);
			this.addEdge(edge);
		}
	};

	setData(data) {
		// Format data to json object
		if (typeof data == 'string' || data instanceof String) {
			data = JSON.parse( data );
		}

		// add nodes and edges
		if ('nodes' in data || 'edges' in data) {
			this.addNodes(data['nodes']);
			this.addEdges(data['edges']);
		}
	}

	start() {
		let nlen = this.nodes.length,
			elen = this.edges.length;

		let startX = this.props.width * 0.5,
			startY = this.props.height * 0.5,
			initSize = 40;

		for (let i = 0; i < len; i++) {
			// initial the point position
			let node = this.nodes[i],
				x = startX + initSize * (Math.random() - .5),
				y = startY + initSize * (Math.random() - .5);
			this.nodePoints.set(node.id, new Vector(x, y));
		}

		for (let i = 0; i < elen; i++) {
			let edge = this.edges[i],
				source = this.nodePoints.get(edge.source.id),
				target = this.nodePoints.get(edge.target.id);

			this.edgeSprings.set(edge.id, new Spring(source, target, length));
		}

		window.requestAnimationFrame(step);
	}

	step() {
		this.tick(0.05);
		this.render();

		if (this.calTotalEnergy() < this.minEnergyThreshold) {
			window.cancelAnimationFrame(step);
		} else {
			window.requestAnimationFrame(step);
		}

	}

	/**
	 * tick event
	 * @param  {[type]} interval [description]
	 * @return {[type]}          [description]
	 */
	tick(interval) {
		this.updateCoulombsLaw();
		this.updateHookesLaw();
		this.attractToCentre();
		this.updateVelocity(interval);
		this.updatePosition(interval);
	}

	/**
	 * Update repulsion between nodes
	 * @return {[type]} [description]
	 */
	updateCoulombsLaw() {
		let len = this.nodes.length;

		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (i === j) continue;

				let iNode = this.nodes[i],
					jNode = this.nodes[j],
					v = this.nodePoints.get( iNode.id ).subtract( this.nodePoints.get( jNode.id ) ),
					dis = v.magnitude() + 0.1,
					direction = v.normalise();

				iNode.updateAcc( direction.multiply(this.repulsion).divide(Math.pow(dis)/2.0) );
				jNode.updateAcc( direction.multiply(this.repulsion).divide(-Math.pow(dis)/2.0) );
			}
		}
	}	

	/**
	 * update attraction between edges
	 * @return {[type]} [description]
	 */
	updateHookesLaw() {
		let len = this.edges.length;

		for (let i = 0; i < len; i++) {
			let spring = this.edgeSprings.get( this.edges[i].id ),
				v = spring.target.subtract( spring.source ),
				displacement = spring.length - v.magnitude(),
				direction = v.normalise();

			spring.source.updateAcc( direction.multiply(-this.stiffness*displacement/2.0) );
			spring.target.updateAcc( direction.multiply(this.stiffness*displacement/2.0) );
		}
	}

	/**
	 * Attract to center with little repulsion acceleration
	 * @return {[type]} [description]
	 */
	attractToCentre() {
		let len = this.nodes.length;

		for (let i = 0; i < len; i++) {
			let point = this.nodePoints.get( this.nodes[i].id ),
				direction = point.multiply(-1.0);

			point.updateAcc( direction.multiply(this.repulsion/50.0) );
		}
	}

	updateVelocity(interval) {
		let len = this.nodes.length;

		for (let i = 0; i < len; i++) {
			let point = this.nodePoints.get( this.nodes[i].id );
			point.v = point.v.add(point.a.multiply(interval)).multiply(this.damping);

			if (point.v.magnitude() > this.maxSpeed) {
			    point.v = point.v.normalise().multiply(this.maxSpeed);
			}
			point.a = new Vector(0,0);
		}
	}

	updatePosition(interval) {
		let len = this.nodes.length;

		for (let i = 0; i < len; i++) {
			let point = this.nodePoints.get( this.nodes[i].id );
			point.x += point.v.multiply(interval).x;
			point.y += point.v.multiply(interval).y;
		}
	}

	calTotalEnergy() {
		let energy = 0.0,
			len = this.nodes.length;

		for (let i = 0; i < len; i++) {
			let point = this.nodePoints.get( this.nodes[i].id ),
				speed = point.v.magnitude();

			energy += point.m*Math.pow(speed, 2)*0.5;
		}

		return energy;
	}

	render() {
		clear();

		let self = this,
			nlen = this.nodes.length,
			elen = this.edges.length;

		this.edgeSprings.forEach(function(val, key, map) {
			drawEdge(key, val.source, val.target);
		});

		this.nodePoints.forEach(function(val, key, map) {
		    // Map(key, val)
		    drawNode(key, val);
		});

		function clear() {
			let svg = document.getElementById(this.props.container);
			
			svg.innerHTML = '';
			svg.setAttribute('width', this.props.width);
			svg.setAttribute('height', this.props.height);
		}

		function projection() {

		}

		function drawNode(argument) {
			// body...
		}

		function drawEdge(argument) {
			// body...
		}
	}
}

export default forceLayout;