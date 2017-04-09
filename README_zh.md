# Force Directed Layout

## 介绍

本文件是一个实现力导向布局结构图的 JavaScript 库文件, 不依赖任何第三方库, 代码采用 ES6 语法编写, 可实现 SVG/Canvas 两种绘制方法, 布局更新收敛条件可以根据总迭代次数或者质点群最小能量值阈值来确定.

![Force Directed Layout Demo](/assets/demo.png "Force Directed Layout Demo")

## 说明

### 文件结构与大小

* 项目文件结构如下, 实现库源代码置于 `src` 文件夹中, `index.js` 为样例页面引用脚本文件, `forceLayout.js` 为项目主代码入口;

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

* 采用 Babel 将 ES6 语法文件转换为兼容代码后, 不包含测试数据的实现库代码大小(未压缩)为 26.8 kB, 包含测试数据的实现库代码大小(未压缩)为 45.3 kB;

### 受力系统: 排斥力, 吸引力与向心力

系统中的原始数据,其 基本单位由质点和弹簧两部分组成. 任意两个质点存在于空间中彼此间存在库仑力, 存在弹簧相连的两个质点间存在弹力. 库仑力的产生见 [Coulomb's law](https://en.wikipedia.org/wiki/Coulomb%27s_law), 弹力产生见 [Hooke's law](https://en.wikipedia.org/wiki/Hooke%27s_law).

* 本实现中使用的排斥力来自公式 `F=Repusion*Mass_1*Mass_2/Math.pow(Dis*coulombDisScale, 2)`, 其中 **Repusion** 表示库伦常量, **Mass**表示质量, **Dis** 表示两个质点间的距离, 考虑到实际距离以屏幕像素点为单位, 故增加 **coulombDisScale** 表示距离标度系数, 由于实现过程中所有质点质量均看成1.0, 故上式在实现中 **Mass** 不额外计算;
* 本实现中使用的吸引力来自公式 `F=Stiffness*Displacement`, 其中 **Stiffness** 表示弹簧的劲度系数, **Displacement** 表示弹簧相比原始长度的位移, 负数表示拉伸, 正数表示压缩;
* 为了使整个系统呈现不偏离屏幕可视范围,在屏幕正中心添加一个对所有点的向心吸引力, 公式为 `F=Repulsion/100` (未证明), 其中 **Repusion** 表示库伦常量, 除数 100 根据效果设定, 未经过严格证明;

### 绘制方法

* SVG 方法: 针对每个 Node 和 Edge, 单独建立一个 DOM; 每帧绘制时根据 Node 和 Edge 状态更新 DOM 位置;
* Canvas 方法: 初始化 Canvas 画布, 每帧绘制时先清空画布内容, 再遍历 Node 和 Edge 将内容更新在画布上, 绘制完毕向浏览器返回 Canvas 对象;

### 巨量数据绘制与系统收敛条件

* 本实现未采用巨量数据进行实际情况的试验, 目前只针对巨量数据在绘制方法上做了调整 (Canvas 代替 SVG), 在每次更新所有节点与边的属性时采用的是遍历所有节点与边的策略, 没有对搜索节点与边的策略进行优化;
* 本实现针对状态收敛有两种情况: 一为当系统总能量值小于 `minEnergyThreshold` (默认为 0.85) 时即停止绘制, 二为系统更新迭代次数超过 1000000 次则停止 (最大迭代次数之后会抽象出给用户进行配置);

### 参考资料与说明

* 在实现本方法前, 我阅读了 [springy](https://github.com/dhotson/springy) 项目的代码, 针对其中组织数据以及更新 Edge / Node 的部分研究过, 在实现中采用了相似的数据结构与逻辑进行实现;
* 函数封装以及相关力导向图概念参考了 [d3-force](https://github.com/d3/d3-force) (D3 wiki) 的相关章节, Stephen 等编写的 [Force-Directed Drawing Algorithms](https://cs.brown.edu/~rt/gdhandbook/chapters/force-directed.pdf) 以及维基百科的相关词条;
* 本实现中用例数据基于维克多雨果编著的悲惨世界一书中的人物相关关系数据, 由[Donald Knuth](http://www-cs-faculty.stanford.edu/~uno/sgb.html) 制作, 做了少许修改; Mike Bostock 用 D3 V4 版本实现的类似效果请见 [Force-Directed Graph](https://bl.ocks.org/mbostock/4062045);
* 本实现中未使用任何第三方库;

## 配置方法

* 运行 **webpack** 得到运行脚本 `home.js` (存放于 *dist* 文件夹中), 可以打开 `index.html` 查看效果 (需建立基本的 http 通信服务器, 可使用 [http-server](https://github.com/indexzero/http-server));
* 主要库文件为 `forceLayout.js`, 用 ES6 语法编写, 如不运行以上示例页面, 可自行 import 库文件进行开发;
* 传入数据格式如下所示:

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

*data 格式说明: nodes / edges 为必须存在的字段, 用于定义节点与边属性, 数组长度不限; nodes 中 id 字段必须, 其余可选; edges 中 source, target, value 字段必须, 其余可选*

* 待完善;

## 待完善工作

* 待完善;

Joe

2017.4