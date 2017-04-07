/**
 * index.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-07 17:36:54
 * @version $Id$
 */

'use strict'
import data from './data'
import forceLayout from './forceLayout'

let ins = new forceLayout('forcedLayoutView');
ins.setData(data);
ins.start();