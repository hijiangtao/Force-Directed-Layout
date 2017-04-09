# forcedirectedLayout

## Introduction

Force Directed Layout is a JavaScript library to implement force-directed layout visualization, you can just import the module and code without install any other extra libraries. It is written using ES2015 modules, and provide users with two rendering approaches: SVG or Canvas. The convergence condition can be decided by total iteration time or minimal energy threshold.

![Force Directed Layout Demo](/assets/demo.png "Force Directed Layout Demo")

## Details

### Project structure and library size

* Project structure shows as follow:

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

### TBD

### Reference 

* [springy](https://github.com/dhotson/springy)
* [d3-force](https://github.com/d3/d3-force), D3 wiki
* [D3V4 Force Directed Layout Example](https://bl.ocks.org/mbostock/4062045)

## Configurations

* Run the webpack and get the home.js at `dist` directory. The main library file is `forceLayout.js`.
* Data format:

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

TBD

## Other language

[中文文档](./README_zh.md)

TBD

Joe

2017.4