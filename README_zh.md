# forcedirectedLayout

## 简要介绍

本 JavaScript 在实现过程中参考了众多优秀内容, 以下针对几个关键点和参考作出简要说明. 

### 排斥力, 吸引力与向心力

初始数据存在于系统中, 基本单位由质点和弹簧两部分组成. 任意两个质点存在于空间中彼此间存在库仑力, 存在弹簧相连的两个质点间存在弹力. 库仑力的产生见 [Coulomb's law](https://en.wikipedia.org/wiki/Coulomb%27s_law), 弹力产生见 [Hooke's law](https://en.wikipedia.org/wiki/Hooke%27s_law).

* 本实现中使用的排斥力来自公式 `F=Repusion*Mass_1*Mass_2/Math.pow(Dis*coulombDisScale, 2)`, 其中 **Repusion** 表示库伦常量, **Mass**表示质量, **Dis** 表示两个质点间的距离, 考虑到实际距离以屏幕像素点为单位, 故增加 **coulombDisScale** 表示距离标度系数, 由于实现过程中所有质点质量均看成1.0, 故上式在实现中 **Mass** 不额外计算;
* 本实现中使用的吸引力来自公式 `F=Stiffness*Displacement`, 其中 **Stiffness** 表示弹簧的劲度系数, **Displacement** 表示弹簧相比原始长度的位移, 负数表示拉伸, 正数表示压缩;
* 为了使整个系统呈现不偏离屏幕可视范围,在屏幕正中心添加一个对所有点的向心吸引力, 公式为 `F=Repulsion/100` (未证明), 其中 **Repusion** 表示库伦常量, 除数 100 根据效果设定, 未经过严格证明;

### 绘制方法

* SVG 方法: 针对每个 Node 和 Edge, 单独建立一个 DOM; 每帧绘制时根据 Node 和 Edge 状态更新 DOM 位置;
* Canvas 方法: 初始化 Canvas 画布, 每帧绘制时先清空画布内容, 再遍历 Node 和 Edge 将内容更新在画布上, 绘制完毕向浏览器返回 Canvas 对象;

### 巨量数据绘制与状态收敛说明

* 本实现未采用巨量数据进行试验, 目前只针对巨量数据在绘制方法上做了调整 (Canvas 代替 SVG), 后续视实际情况会在 Node / Edge 的状态更新上采用搜索技术进行更新优化 (例如: 四叉树);
* 本实现针对状态收敛有两种情况: 一为总能量值小于 `minEnergyThreshold` 时即停止绘制, 二为迭代绘制次数超过 1000000 次则停止 (最大迭代次数之后会抽象出给用户进行配置);

### 参考说明

* 在实现本方法前, 我阅读了 [springy](https://github.com/dhotson/springy) 项目的代码, 针对其中组织数据以及更新 Edge / Node 的部分研究过, 在实现中采用了相似的数据结构与逻辑进行实现;
* 函数封装以及相关力导向图概念参考了 [d3-force](https://github.com/d3/d3-force) (D3 wiki) 的相关章节;
* 本实现中用例数据主要来自 [D3V4 Force Directed Layout Example](https://bl.ocks.org/mbostock/4062045), 做了少许修改;
* 本实现中现使用到 **d3** 的选择器功能用于选择节点操作, 该部分造成了打包后的整体文件过大, 将于下一步工作中 **document.getElementsByX** 原生方法替换;
* 本文章中除 **d3.select** 用于选择器使用外, 无使用任何第三方公共库文件辅助开发;

## 配置方法

* 运行 webpack 得到运行脚本 `home.js` (存放于 *dist* 文件夹中), 可以打开 `index.html` 查看效果;
* 主要库文件为 `forceLayout.js`, 用 ES6 语法编写;
* 待完善;

## 待完善工作

Joe

2017.4