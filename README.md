# forcedirectedLayout

## Introduction

Force Directed Layout is a JavaScript library to implement force-directed layout visualization, you can just import the module and code without install any other extra libraries. It is written using ES2015 modules, and provide users with two rendering approaches: SVG or Canvas. The convergence condition can be decided by total iteration time or minimal energy threshold.

![Force Directed Layout Demo](/assets/demo.png "Force Directed Layout Demo")

## Details

### Project structure and library size

* Structure of this project shows below, the main library files locate in `src` directory, `index.js` is the script file for demo page, `forceLayout.js` is the entrance file of this project;

```
forceLayout
├── default.css
├── dist
│   ├── home.js
│   └── home.js.map
├── index.html
├── LICENSE
├── package.json
├── README.md
├── README_zh.md
├── src
│   ├── data.js
│   ├── Elements.js
│   ├── forceLayout.js
│   ├── index.js
│   ├── Spring.js
│   └── Vector.js
└── webpack.config.js
```

* After converted by Babel, the pure library file (uncompressed) is 26.8 kB, the library file (uncompressed) which contains test dataset is 45.3 kB;

### Force System: repulsion force, attraction force and centripetal force

The basic unit of system is composed of point and spring. The force of interaction between points is repulsion force, followed by [Coulomb's law](https://en.wikipedia.org/wiki/Coulomb%27s_law). The attraction force exists between two points linked with spring, followed by [Hooke's law](https://en.wikipedia.org/wiki/Hooke%27s_law).

* In this project, the law of repulsion force is `F=Repusion*Mass_1*Mass_2/Math.pow(Dis*coulombDisScale, 2)`, which **Repusion** stands for [Coulomb's constant](https://en.wikipedia.org/wiki/Coulomb%27s_constant), **Mass** stands for point mass, **Dis** stands for the distance between responding two points. On the one hand, **coulombDisScale** (Distance coefficient constant) is added to balance the distance's calculation in screen pixel scales; on the other hand, **Mass** doesn't participate in real calucaltion since every input point is assigned with default mass of 1.0;
* The law of attraction force is `F=Stiffness*Displacement`, which **Stiffness** is a constant factor characteristic of the spring, **Displacement** is small compared to the total possible deformation of the spring. Except for a state of equilibrium, `Displacement > 0` stands for Elongation, `Displacement < 0` stands for Compression;
* To maintain the whole system's visibility in the page (screen), an entripetal force caused by a center point is added, the law is `F=Repulsion/100` (unproved), which **Repusion** is Coulomb's constant, 100 is set according to the visualization's performance but not proved yet;

### Rendering approaches

* SVG Method: Each Node and Edge will be contained in a DOM (Path or Circle, SVG specifically); THe DOM's position will be updated when Node and Edge update its state each time;
* Canvas Method: Initialize Canvas first, then empty it each time before you update the Canvas with whole system's objects;

### Reference 

* Before develop the library, I read the codes of [springy](https://github.com/dhotson/springy) repository, mainly focused on data structure and Edge/Node state updating part, the similar logic could be found in this library;
* I had a further understanding of Function's encapsulation and the concept of Force-Directed Layout by reading the following materials: [d3-force](https://github.com/d3/d3-force) - D3 wiki, [Force-Directed Drawing Algorithms](https://cs.brown.edu/~rt/gdhandbook/chapters/force-directed.pdf) (wrote by Stephen, etc.) and related Wikipedia items;
* No more other extra libraries is need for this library's development and running;
* Data based on character coappearence in Victor Hugo's *Les Misérables*, compiled by [Donald Knuth](http://www-cs-faculty.stanford.edu/~uno/sgb.html), a similar project developed by Mike Bostock can be accessed [here](https://bl.ocks.org/mbostock/4062045).

## Configurations

* Run the webpack and get the `home.js` (stored in `dist` directory), you can see the example with `index.html` (A basic http server is needed, you can use [http-server](https://github.com/indexzero/http-server)). The main library file is `forceLayout.js`, which is developed in ES6 Grammar, however, you can import the class and develop freely.
* The Data format for rendering shows below:

```
let data = {
  "nodes": [
    {"id": "DataId", "group": 1},
    ...
  ],
  "edges": [
    {"source": "Node1", "target": "Node2", "value": 1},
    ...
  ]
}
```

*Tips on data format: nodes / edges are required fields for defining the properties of nodes and edges, but the array length is unrestricted; in each item of nodes, `id` field is required, other are optional; in each item of edges, `source, target` and `value` fields are required, other are optional.*

* TBD

## Other language

[中文文档](./README_zh.md)

### TBD

TBD

Joe

2017.4
