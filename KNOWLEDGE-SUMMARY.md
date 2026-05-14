# 项目一：个人作品集 - 学习指南

> **项目名称：** 001-portfolio  
> **完成日期：** 2026-05-13  
> **技术栈：** HTML5 + CSS3 + JavaScript (ES6+)  
> **项目地址：** https://tineiyoucaihong.github.io/001-portfolio/

---

## 📖 使用说明

**这本学习指南是写给谁看的？**
- ✅ 刚学完第一个项目的初学者
- ✅ 想理解"为什么这么写"的学习者
- ✅ 准备开始下一个项目，需要复习的人

**怎么使用这本书？**
1. **第一遍**：按顺序阅读，建立整体认知
2. **复习时**：直接跳到需要的章节
3. **遇到问题时**：查看"常见错误"部分

---

## 📖 编程符号速查表（初学者必读）

在深入学习之前，先把这些符号搞清楚，后面阅读代码就不会懵了。

### 通用符号

| 符号 | 名称 | 作用 | 示例 |
|------|------|------|------|
| `//` | 双斜线 | 单行注释（代码说明，不执行） | `// 这是注释` |
| `/* */` | 斜线星号 | 多行注释 | `/* 多行注释 */` |
| `=` | 等号 | 赋值（把右边的值给左边） | `let a = 10` |
| `===` | 三个等号 | 严格相等（比较是否相同） | `if (a === 10)` |
| `{}` | 花括号 | 代码块或对象 | `if () {}` 或 `{name: "张三"}` |
| `[]` | 方括号 | 数组 | `[1, 2, 3]` |
| `()` | 圆括号 | 函数调用或分组 | `console.log()` |
| `.` | 点 | 访问对象的属性 | `document.querySelector` |
| `;` | 分号 | 语句结束（可选但推荐） | `let a = 10;` |
| `:` | 冒号 | 键值对分隔或条件语句 | `color: red` 或 `if ():` |
| `,` | 逗号 | 分隔多个值 | `[1, 2, 3]` 或 `function(a, b)` |

### HTML 符号

| 符号 | 名称 | 作用 | 示例 |
|------|------|------|------|
| `< >` | 尖括号 | HTML标签 | `<div>` `</div>` |
| `</ >` | 斜线尖括号 | 闭合标签 | `</div>` |
| `!` | 感叹号 | 声明特殊标记 | `<!DOCTYPE html>` |
| `#` | 井号 | ID选择器 | `<div id="header">` |
| `.` | 点 | class选择器 | `<div class="box">` |
| `@` | 艾特符号 | 特殊指令 | `@media` `@keyframes` |

### CSS 符号

| 符号 | 名称 | 作用 | 示例 |
|------|------|------|------|
| `#` | 井号 | ID选择器 | `#navbar { }` |
| `.` | 点 | class选择器 | `.container { }` |
| `:` | 冒号 | 伪类或属性名 | `:hover` `color:` |
| `::` | 双冒号 | 伪元素 | `::before` `::after` |
| `*` | 星号 | 通配符（选择所有） | `* { margin: 0; }` |
| `>` | 大于号 | 子选择器 | `.parent > .child` |
| `+` | 加号 | 相邻兄弟选择器 | `.item + .item` |
| `~` | 波浪号 | 通用兄弟选择器 | `.item ~ .item` |
| `@` | 艾特符号 | 规则指令 | `@media` `@keyframes` |
| `$` 或 `var()` | 变量 | CSS变量 | `var(--color)` |

### JavaScript 符号

| 符号 | 名称 | 作用 | 示例 |
|------|------|------|------|
| `=>` | 箭头 | 箭头函数的简写 | `() => {}` |
| ``` | 反引号 | 模板字符串 | \`你好，${name}\` |
| `${}` | 插值表达式 | 在字符串中插入变量 | \`你好，${name}\` |
| `===` | 三个等号 | 严格相等比较 | `if (a === b)` |
| `!==` | 感叹号等号 | 严格不相等 | `if (a !== b)` |
| `!` | 感叹号 | 取反（逻辑非） | `if (!flag)` |
| `&&` | 双与号 | 逻辑与（并且） | `if (a && b)` |
| `\|\|` | 双竖线 | 逻辑或（或者） | `if (a \|\| b)` |
| `?` | 问号 | 可选链或三元运算符 | `a?.b` 或 `a ? b : c` |
| `??` | 双问号 | 空值合并运算符 | `a ?? b` |
| `...` | 三点 | 展开运算符 | `[...arr]` 或 `{...obj}` |
| `()` | 圆括号 | 函数定义和调用 | `function()` `add()` |
| `{}` | 花括号 | 函数体或对象 | `() => {}` 或 `{name: "张三"}` |
| `[]` | 方括号 | 数组或对象属性访问 | `[1, 2]` 或 `obj["key"]` |
| `.` | 点 | 对象属性访问 | `obj.property` |
| `;` | 分号 | 语句结束 | `let a = 10;` |
| ``` | 反引号 | 模板字符串 | \`Hello ${name}\` |

### JavaScript 特殊语法详解

#### 1. 箭头函数 `=>`

**传统函数 vs 箭头函数：**
```javascript
// 传统写法
function handleClick() {
    console.log('Clicked');
}

// 箭头函数（ES6+）
const handleClick = () => {
    console.log('Clicked');
};

// 单行可省略花括号
const handleClick = () => console.log('Clicked');

// 带参数的箭头函数
const add = (a, b) => a + b;  // 等价于: return a + b
```

**记忆方法：** 把 `=>` 想象成"指向"，左边是输入，右边是输出。

---

#### 2. 模板字符串 `` ${} ``

**传统字符串 vs 模板字符串：**
```javascript
// 传统写法（用 + 连接）
const name = '张三';
const greeting = '你好，' + name + '！';  // 你好，张三！

// 模板字符串（用反引号和 ${}）
const greeting = `你好，${name}！`;  // 你好，张三！

// 多行字符串
const html = `
    <div>
        <h1>标题</h1>
    </div>
`;
```

**注意：** 反引号 `` ` `` 在键盘左上角，不是单引号 `'`！

---

#### 3. 圆括号 `()`

**多种用途：**
```javascript
// 1. 函数调用
console.log('Hello');  // 调用 console.log 函数

// 2. 函数定义
function add(a, b) { }  // 定义参数列表

// 3. 分组运算
(2 + 3) * 4  // 先算 2+3，结果 20

// 4. 箭头函数的参数
(a, b) => a + b  // a 和 b 是参数
```

---

#### 4. 花括号 `{}`

**多种用途：**
```javascript
// 1. 代码块
if (true) {
    console.log('真的');
}

// 2. 对象
const person = { name: '张三', age: 25 };

// 3. 函数体
const add = () => {
    return a + b;
};

// 4. 解构赋值
const { name, age } = person;  // 从 person 中提取 name 和 age
```

---

#### 5. 方括号 `[]`

**多种用途：**
```javascript
// 1. 数组
const arr = [1, 2, 3];

// 2. 数组访问
arr[0]  // 访问第一个元素，结果是 1

// 3. 对象属性访问
const obj = { name: '张三' };
obj['name']  // 等价于 obj.name

// 4. 数组解构
const [a, b] = [1, 2];  // a=1, b=2
```

---

#### 6. 点 `.`

**多种用途：**
```javascript
// 1. 对象属性访问
document.querySelector('.box')

// 2. 方法调用
console.log('Hello')  // log 是 console 对象的方法

// 3. 链式调用
document.querySelector('.box').classList.add('active')
```

---

### 快速查找指南

当你看到不懂的符号时：

| 看到的符号 | 可能是什么 | 跳转到章节 |
|-----------|-----------|-----------|
| `=>` | 箭头函数 | JavaScript 函数部分 |
| `` ${} `` | 模板字符串 | JavaScript 字符串部分 |
| `#` | ID选择器 | CSS 选择器 |
| `.` | class选择器或属性访问 | CSS 或 JavaScript |
| `()` | 函数调用 | JavaScript 函数部分 |
| `{}` | 代码块或对象 | JavaScript 对象部分 |

---

## 📚 目录

1. [HTML：网页的骨架](#1-html网页的骨架)
2. [CSS：网页的皮肤](#2-css网页的皮肤)
3. [JavaScript：网页的大脑](#3-javascript网页的大脑)
4. [响应式设计：适配所有设备](#4-响应式设计适配所有设备)
5. [Git：管理你的代码历史](#5-git管理你的代码历史)
6. [实战技巧与最佳实践](#6-实战技巧与最佳实践)

---

## 1. HTML：网页的骨架

### 1.1 什么是 HTML？

**想象一下：**
- HTML 就像是建筑的**蓝图**或**骨架**
- 它规定了网页上有什么内容（标题、段落、图片、按钮...）
- 但不规定这些内容长什么样（颜色、大小、位置由CSS决定）

**HTML 的全称：** HyperText Markup Language（超文本标记语言）

**关键问题：为什么需要 HTML？**
```
没有 HTML → 浏览器不知道页面上要显示什么
有 HTML    → 浏览器按照你的规划来组织内容
```

---

### 1.2 HTML 文档的基本结构

**你写过的代码：**
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
</head>
<body>
    <!-- 这里是网页内容 -->
</body>
</html>
```

**一行一行来解释：**

| 代码 | 作用 | 为什么需要它？ |
|------|------|---------------|
| `<!DOCTYPE html>` | 告诉浏览器"这是HTML5文档" | 不写的话，浏览器可能用旧模式渲染，页面可能显示错乱 |
| `<html lang="zh-CN">` | 根元素，声明语言为中文 | 搜索引擎用它来理解你的网页内容，对SEO很重要 |
| `<head>` | 头部区域，放不直接显示的内容 | 存放元数据、CSS链接、JS文件等 |
| `<meta charset="UTF-8">` | 声明字符编码为UTF-8 | 不写可能中文显示乱码 |
| `<meta name="viewport"...>` | 声明视口设置 | 响应式设计必备，不写手机上页面会很小 |
| `<title>` | 页面标题（显示在浏览器标签上） | 用户和搜索引擎通过它了解页面内容 |
| `<body>` | 网页主体内容 | 用户能看见的所有内容都在这里 |

**符号说明：**
- `<>` 和 `</>`：尖括号包裹标签名
- `</...>`：斜线表示闭合标签
- `lang="zh-CN"`：属性，格式是 `属性名="属性值"`
- `<!-- ... -->`：HTML 注释，不会被浏览器显示

**⚠️ 常见错误：**
```
❌ 忘记写 <!DOCTYPE html>  
   → 页面可能进入"怪异模式"，布局错乱

❌ <meta charset> 写在 <body> 后面  
   → 已经加载的内容可能乱码

❌ 忘记闭合标签（如 </div>）  
   → 整个页面布局可能崩溃
```

---

### 1.3 语义化标签：为什么重要？

**传统写法 vs 语义化写法：**

```html
<!-- ❌ 不好的写法：全是 div -->
<div class="header">
    <div class="logo">我的网站</div>
    <div class="nav">...</div>
</div>

<!-- ✅ 好的写法：用语义化标签 -->
<header>
    <div class="logo">我的网站</div>
    <nav>...</nav>
</header>
```

**为什么推荐用语义化标签？**

1. **搜索引擎优化（SEO）**
   - Google 看到你的 `<nav>` 标签，就知道"这是导航区域"
   - 看到你的 `<article>` 标签，就知道"这是一篇文章"
   - 能更好地理解你的内容，排名更靠前

2. **屏幕阅读器友好（可访问性）**
   - 视障人士使用屏幕阅读器浏览网页
   - 语义化标签让阅读器能正确朗读"导航栏"、"文章"等区域

3. **代码更易读**
   - 其他开发者看到你的代码，能快速理解结构

**项目中的语义化标签：**

| 标签 | 用途 | 你在项目中的使用 |
|------|------|------------------|
| `<header>` | 页面或区块的头部 | Hero区域的容器 |
| `<nav>` | 导航链接区域 | 顶部导航栏 |
| `<main>` | 主要内容区域 | 页面的核心内容 |
| `<section>` | 独立的内容区块 | 关于、技能、项目、联系等区块 |
| `<footer>` | 页面或区块的底部 | 页脚版权信息 |

**✅ 自我检测：**
- [ ] 能说出至少3个语义化标签
- [ ] 能解释为什么需要语义化标签
- [ ] 能在写代码时主动使用语义化标签

---

### 1.4 HTML 属性：给标签添加额外信息

**什么是属性？**
- 属性是写在开始标签里的"附加信息"
- 格式：`属性名="属性值"`
- 注意：等号两边可以有空格也可以没有，推荐不加空格

**常用属性：**

| 属性 | 用途 | 示例 |
|------|------|------|
| `id` | 给元素一个唯一标识 | `<nav id="navbar">` |
| `class` | 给元素分类（可重复） | `<div class="container">` |
| `href` | 链接的目标地址 | `<a href="#home">首页</a>` |
| `src` | 图片的来源地址 | `<img src="logo.png">` |
| `alt` | 图片的描述文字 | `<img src="..." alt="网站logo">` |
| `target` | 链接打开方式 | `<a href="..." target="_blank">` |
| `required` | 表单必填 | `<input type="text" required>` |
| `placeholder` | 输入框提示文字 | `<input placeholder="请输入...">` |
| `name` | 表单字段名称 | `<input name="email">` |

**符号说明：**
- `=`：赋值符号，把右边的值给左边的属性
- `""`：双引号（也可以用单引号），包裹属性值

**⚠️ 常见错误：**
```
❌ 忘记表单的 name 属性  
   → 后端无法接收表单数据

❌ img 没有 alt 属性  
   → 图片加载失败时用户不知道这是什么

❌ id 在页面中重复使用  
   → JavaScript 只能选中第一个，其他无法操作
```

---

## 2. CSS：网页的皮肤

### 2.1 什么是 CSS？

**想象一下：**
- HTML 是房子的**结构**（墙、屋顶、窗户）
- CSS 是房子的**装修**（墙的颜色、窗户的样式、家具摆放）

**CSS 的全称：** Cascading Style Sheets（层叠样式表）

**关键问题：为什么需要 CSS？**
```
只用 HTML → 所有网页长得都一样，很单调
用 CSS    → 可以设计任何想要的样式和布局
```

---

### 2.2 CSS 选择器：如何找到要修改的元素

**选择器的作用：** 告诉 CSS"我要修改哪个元素"

**项目中的选择器示例：**

```css
/* 1. 标签选择器：选中所有该标签 */
body {
    font-family: Arial;
}

/* 2. 类选择器：选中所有该类（最常用） */
.container {
    max-width: 1200px;
}

/* 3. ID 选择器：选中唯一的元素 */
#navbar {
    position: fixed;
}

/* 4. 后代选择器：选中某元素内部的所有指定元素 */
.nav-container .logo a {
    font-size: 1.5rem;
}

/* 5. 伪类选择器：元素在特定状态下的样式 */
.nav-link:hover {
    color: #667eea;
}

/* 6. 组合选择器：同时选中多个 */
.skills-grid,
.projects-grid {
    display: grid;
}
```

**符号说明：**
- `#`：井号，ID 选择器
- `.`：点号，class 选择器
- `:`：冒号，伪类
- `,`：逗号，分组选择器
- `{}`：花括号，样式规则
- `:`：冒号，属性名和属性值的分隔符
- `;`：分号，每条样式规则的结束

**选择器的优先级（重要！）：**

```
优先级从高到低：
1. !important（尽量别用）
2. 内联样式（style="..."）
3. ID 选择器（#navbar）
4. 类选择器（.container）
5. 标签选择器（body）
6. 通配符选择器（*）
```

**⚠️ 常见错误：**
```
❌ 优先级冲突导致样式不生效  
   示例：同时写了 #nav { color: red; } 和 .nav { color: blue; }  
   结果：红色会生效，因为 ID 优先级更高
   
   解决：使用浏览器开发工具检查哪个样式在生效
```

---

### 2.3 CSS 盒模型：所有元素都是盒子

**什么是盒模型？**
- 在 CSS 中，每个元素都被看作一个"盒子"
- 盒子由四部分组成：content → padding → border → margin

```
        ┌─────────────────────────────────┐
        │  margin（外边距，盒子外的距离）   │
        │  ┌───────────────────────────┐  │
        │  │ border（边框）             │  │
        │  │ ┌─────────────────────┐   │  │
        │  │ │ padding（内边距）    │   │  │
        │  │ │ ┌───────────────┐   │   │  │
        │  │ │ │ content       │   │   │  │
        │  │ │ │ (内容区域)    │   │   │  │
        │  │ │ └───────────────┘   │   │  │
        │  │ └─────────────────────┘   │  │
        │  └───────────────────────────┘  │
        └─────────────────────────────────┘
```

**box-sizing 的关键区别：**

```css
/* 默认值：content-box */
width: 300px;
padding: 20px;
border: 5px solid black;
/* 实际占用的宽度 = 300 + 20×2 + 5×2 = 350px */
/* 问题：设置宽度后，加了padding和border会变宽 */

/* 推荐值：border-box */
width: 300px;
padding: 20px;
border: 5px solid black;
/* 实际占用的宽度 = 300px（padding和border包含在内） */
/* 好处：宽度就是你设置的值，不会变 */
```

**项目中的设置：**
```css
* {
    box-sizing: border-box;  /* 让所有元素都用 border-box */
}
```

**符号说明：**
- `:`：冒号，属性名和值的分隔符
- `;`：分号，每条规则的结束
- `*`：通配符，选择所有元素

**为什么推荐 border-box？**
- ✅ 设置宽度后，不会被 padding 和 border 撑大
- ✅ 计算布局更直观
- ✅ 响应式设计更容易控制

**✅ 自我检测：**
- [ ] 能画出盒模型的四个部分
- [ ] 能解释 border-box 和 content-box 的区别
- [ ] 知道为什么项目中要用 `box-sizing: border-box`

---

### 2.4 Flexbox 布局：一维布局的最佳选择

**为什么需要 Flexbox？**

**传统布局的痛点：**
```
问题：做一个导航栏，logo在左边，菜单在右边，中间自动填满
传统方法：用 float，需要清除浮动，容易出问题
Flexbox：只需要几行代码就搞定
```

**Flexbox 的核心概念：**

想象一个**弹性容器**（flex container）：
- 把一些元素放进这个容器
- 容器会自动帮你排列和对齐这些元素（flex items）

**项目中的实际应用：**

```css
/* 1. 创建弹性容器 */
.nav-container {
    display: flex;
    justify-content: space-between;  /* 主轴方向如何排列 */
    align-items: center;              /* 交叉轴方向如何对齐 */
}
```

**符号说明：**
- `:`：冒号，属性名和值的分隔符
- `;`：分号，每条规则的结束

**关键属性详解：**

**justify-content（主轴对齐）**
```
决定元素在主轴（通常是水平方向）上的排列方式：

├─ flex-start：全部靠左
│   [A][B][C]             
│
├─ center：全部居中
│      [A][B][C]          
│
├─ space-between：两端对齐，中间自动分配间隔
│   [A]   [B]   [C]      
│
└─ space-around：每个元素两侧的间隔相等
│    [A]  [B]  [C]       
```

**align-items（交叉轴对齐）**
```
决定元素在交叉轴（通常是垂直方向）上的对齐方式：

├─ stretch（默认）：拉伸填满
│   ┌───┐
│   │ A │
│   └───┘  ← 高度被拉伸到和容器一样
│
├─ center：垂直居中
│    ┌───┐
│    │ A │  ← 上下居中
│    └───┘
│
└─ flex-start：靠上对齐
│   ┌───┐
│   │ A │  ← 靠顶部
│   └───┘
```

**flex-direction（排列方向）**
```
├─ row（默认）：从左到右排列
│   [A][B][C]
│
├─ column：从上到下排列
│   [A]
│   [B]
│   [C]
│
└─ row-reverse：从右到左排列
    [C][B][A]
```

**gap（元素间距）**
```css
.nav-menu {
    display: flex;
    gap: 2rem;  /* 所有相邻元素之间都有 2rem 的间隔 */
}
```

**⚠️ 常见错误：**
```
❌ 忘记写 display: flex  
   → justify-content 和 align-items 不生效
   
❌ 分不清主轴和交叉轴  
   → 当 flex-direction 改变时，主轴和交叉轴也会改变
   
   记忆技巧：
   - 主轴 = flex-direction 的方向
   - 交叉轴 = 垂直于主轴的方向
```

---

### 2.5 Grid 布局：二维布局的利器

**为什么需要 Grid？**

**Flexbox vs Grid：**
```
Flexbox：一维布局（要么排列行，要么排列列）
Grid：   二维布局（同时控制行和列）

适合 Flexbox 的场景：
✅ 导航栏
✅ 按钮组
✅ 简单的卡片列表

适合 Grid 的场景：
✅ 复杂的网页整体布局
✅ 需要精确控制行列的位置
✅ 响应式网格（自动适应列数）
```

**项目中的实际应用：**

```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

**这行代码的魔法：**
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
/*                          ↑          ↑         ↑         */
/*                         重复     最小250px  平均分配   */

/* 实际效果：
   屏幕宽度 1200px → 显示 4 列，每列约 300px  ████
   屏幕宽度  900px → 显示 3 列，每列约 300px  ███
   屏幕宽度  500px → 显示 2 列，每列约 250px  ██
   屏幕宽度  300px → 显示 1 列，每列约 300px  █

   不是"第一列固定250px"，而是"每列至少250px"！
*/
```

**Grid 常用模式：**

```css
/* 1. 固定列数 */
grid-template-columns: 1fr 1fr 1fr;  /* 3列，平均分配 */

/* 2. 响应式列数（项目中的用法） */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* 3. 固定 + 自适应 */
grid-template-columns: 200px 1fr;  /* 左侧200px，右侧自适应 */
```

**符号说明：**
- `()`：圆括号，函数参数
- `fr`：fraction（分数），Grid 单位

**✅ 自我检测：**
- [ ] 能说出 Flexbox 和 Grid 的区别
- [ ] 能解释 `repeat(auto-fit, minmax(250px, 1fr))` 的效果
- [ ] 知道什么时候用 Flexbox，什么时候用 Grid

---

### 2.6 CSS 变量：统一管理样式

**什么是 CSS 变量？**
- 可以在 CSS 中定义"自定义属性"
- 一处定义，全局使用
- 方便统一修改主题色

**项目中的使用：**

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

/* 使用变量 */
.btn-primary {
    background: var(--primary-color);  /* 使用 --primary-color */
    color: white;
}
```

**符号说明：**
- `--`：双短划线，CSS 变量的前缀
- `var()`：函数，引用 CSS 变量

**为什么用 CSS 变量？**

| 不用变量 | 用变量 |
|---------|--------|
| 想改颜色要全局查找替换 | 只改 `:root` 里的定义 |
| 容易漏改或不一致 | 保证全局统一 |
| 无法动态修改主题 | 可以用 JavaScript 动态修改 |

**✅ 自我检测：**
- [ ] 知道如何定义 CSS 变量
- [ ] 知道如何使用 CSS 变量
- [ ] 能说出使用 CSS 变量的好处

---

## 3. JavaScript：网页的大脑

### 3.1 什么是 JavaScript？

**想象一下：**
- HTML 是房子的**结构**
- CSS 是房子的**装修**
- JavaScript 是房子的**智能控制系统**（可以开灯、关灯、自动调节温度）

**关键问题：为什么需要 JavaScript？**
```
只用 HTML+CSS → 网页是"死"的，只能看不能动
用 JavaScript   → 网页"活"了，可以交互、响应、处理数据
```

---

### 3.2 DOM 操作：用 JavaScript 控制网页

**什么是 DOM？**
- DOM = Document Object Model（文档对象模型）
- 把 HTML 网页转换成 JavaScript 可以操作的对象树

**获取元素的方式：**

```javascript
// 1. 通过 ID 获取（返回单个元素）
const navbar = document.getElementById('navbar');

// 2. 通过类名获取（返回多个元素）
const navLinks = document.querySelectorAll('.nav-link');

// 3. 通过选择器获取单个元素
const hamburger = document.querySelector('.hamburger');
```

**符号说明：**
- `//`：单行注释
- `const`：声明常量
- `.`：点，访问对象属性或方法
- `()`：函数调用

**querySelector vs querySelectorAll（重要区别）：**

```javascript
// querySelector：只返回第一个匹配的元素
const firstLink = document.querySelector('.nav-link');  
// 只得到第一个 .nav-link

// querySelectorAll：返回所有匹配的元素（ NodeList）
const allLinks = document.querySelectorAll('.nav-link');  
// 得到所有 .nav-link
```

**⚠️ 常见错误：**
```
❌ 忘记元素可能不存在  
   const element = document.querySelector('.not-exist');
   element.style.color = 'red';  // 报错：Cannot read property 'style' of null
   
   解决：
   const element = document.querySelector('.not-exist');
   if (element) {  // 先检查是否存在
       element.style.color = 'red';
   }
```

---

### 3.3 JavaScript 函数：代码的封装

**什么是函数？**
- 函数是一段可以重复使用的代码块
- 给它一个名字，需要的时候调用它

**传统函数 vs 箭头函数：**

```javascript
// 传统函数写法
function handleClick() {
    console.log('Clicked');
}

// 箭头函数（ES6+，更简洁）
const handleClick = () => {
    console.log('Clicked');
};

// 单行可省略花括号
const handleClick = () => console.log('Clicked');

// 带参数的箭头函数
const add = (a, b) => a + b;  // 等价于: return a + b
```

**箭头函数详解（重要！）：**

```javascript
// 箭头函数的完整结构
(参数) => { 函数体 }

// 实际示例
() => {              // 1. 空括号：没有参数
    console.log('Hi');
}

(a, b) => {          // 2. 括号里有参数
    return a + b;
}

a => {               // 3. 只有一个参数可以省略括号
    return a * 2;
}

() => expresssion    // 4. 单行表达式可省略花括号和 return
```

**记忆方法：** 
- `=>` 像一个箭头，指向函数要做什么
- 左边是输入（参数），右边是输出（返回值）

**符号说明：**
- `=>`：箭头，箭头函数的标志
- `()`：圆括号，参数列表
- `{}`：花括号，函数体
- `const`：声明常量

---

### 3.4 事件监听：响应用户的操作

**什么是事件？**
- 事件就是用户在网页上做的"动作"
- 点击、滚动、输入、提交表单...都是事件

**项目中的事件示例：**

```javascript
// 1. 点击事件
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 2. 滚动事件
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. 表单提交事件
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();  // 阻止默认提交行为
    // 处理表单数据
});
```

**符号说明：**
- `.`：点，调用对象的方法
- `()`：函数调用
- `=>`：箭头，箭头函数
- `{}`：花括号，代码块
- `e.preventDefault()`：e 是事件对象，点后面是它的方法

**e.preventDefault() 的作用：**
```javascript
// 没有 preventDefault()
form.addEventListener('submit', (e) => {
    // 表单会提交，页面会刷新
    // 你写的代码还没执行完就刷新了
});

// 有 preventDefault()
form.addEventListener('submit', (e) => {
    e.preventDefault();  // 阻止默认的提交和刷新
    // 现在可以用 JavaScript 处理数据
    // 可以用 AJAX 发送，不刷新页面
});
```

**✅ 自我检测：**
- [ ] 知道什么是事件监听
- [ ] 能说出 addEventListener 的基本用法
- [ ] 知道 e.preventDefault() 的作用

---

### 3.5 classList 操作：切换元素的类

**为什么要操作 class？**
- CSS 中定义好了 `.active` 的样式
- JavaScript 只需要添加/删除这个类
- 样式会自动应用或移除

**项目中的使用：**

```javascript
// 添加类
element.classList.add('active');

// 删除类
element.classList.remove('active');

// 切换类（有就删除，没有就添加）
element.classList.toggle('active');

// 检查是否有某个类
if (element.classList.contains('active')) {
    // 做某些事情
}
```

**符号说明：**
- `.`：点，访问对象的属性或方法
- `()`：方法调用

**实际应用场景：**
```javascript
// 移动端菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');      // 切换汉堡按钮样式
    navMenu.classList.toggle('active');        // 切换菜单显示/隐藏
});
```

---

### 3.6 滚动性能优化：让页面更流畅

**问题：为什么需要优化？**
```javascript
// ❌ 不优化的代码
window.addEventListener('scroll', () => {
    // 这段代码会在滚动时触发
    // 滚动一秒可能触发60次（60fps）
    // 如果这里有很多计算，页面会卡顿
});
```

**优化方案：使用 requestAnimationFrame**
```javascript
// ✅ 优化后的代码
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // 这段代码只在浏览器准备重绘时执行
            // 每秒最多触发60次，不会过度执行
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            ticking = false;
        });
        ticking = true;
    }
});
```

**符号说明：**
- `!`：感叹号，逻辑非（取反）
- `if`：条件语句
- `window.requestAnimationFrame()`：浏览器 API，在下一次重绘前执行回调

**原理：**
- `requestAnimationFrame` 会在浏览器准备重绘时才执行代码
- 避免了过度频繁的计算
- 页面更流畅，CPU 占用更低

---

## 4. 响应式设计：适配所有设备

### 4.1 为什么需要响应式设计？

**现实情况：**
- 用户用各种设备访问你的网站
- 手机（375px - 428px）
- 平板（768px - 1024px）
- 电脑（1200px+）

**不响应式的后果：**
```
在电脑上正常 → 在手机上可能：
✗ 文字太小看不清
✗ 需要左右滚动才能看完
✗ 按钮太小点不到
✗ 布局错乱
```

---

### 4.2 viewport：移动端的钥匙

**这行代码是什么？**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**没有这行代码会怎样？**
```
手机浏览器会把网页当作"桌面版"来显示
→ 会把页面缩得很小，用户需要手动放大才能看清
```

**参数解释：**
| 参数 | 作用 |
|------|------|
| `width=device-width` | 让页面宽度等于设备屏幕宽度 |
| `initial-scale=1.0` | 初始缩放比例为1（不放大缩小） |

**✅ 自我检测：**
- [ ] 知道 viewport 标签的作用
- [ ] 知道不写 viewport 会有什么问题

---

### 4.3 媒体查询：针对不同设备写样式

**什么是媒体查询？**
- CSS 的条件语句
- "如果屏幕宽度小于 X，就用这些样式"

**项目中的媒体查询：**

```css
/* 平板和手机（≤768px）*/
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;           /* 默认隐藏在左侧屏幕外 */
        flex-direction: column;
    }
    
    .hero-title {
        font-size: 2.2rem;     /* 缩小字体 */
    }
}

/* 小屏手机（≤480px）*/
@media (max-width: 480px) {
    .hero-title {
        font-size: 1.8rem;
    }
    
    .btn {
        width: 100%;           /* 按钮占满宽度，更容易点击 */
    }
}
```

**符号说明：**
- `@`：艾特符号，CSS 规则指令
- `@media`：媒体查询
- `:`：冒号，属性和值的分隔符

**常用断点：**
```
大屏桌面：≥1200px
桌面：    992px - 1199px
平板：    768px - 991px
手机横屏：480px - 767px
手机竖屏：≤479px
```

**移动端优化的关键点：**
```css
/* 1. 防止横向滚动 */
html, body {
    overflow-x: hidden;
    max-width: 100%;
}

/* 2. 正确的盒模型 */
* {
    box-sizing: border-box;
}

/* 3. 灵活的字体大小 */
.hero-title {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    /* 最小1.8rem，最大3.5rem，中间随视口变化 */
}

/* 4. 响应式图片 */
img {
    max-width: 100%;
    height: auto;
}
```

---

### 4.4 移动端导航菜单

**项目中的实现方式：**
```css
/* 桌面端：导航正常显示 */
.nav-menu {
    display: flex;
    gap: 2rem;
}

/* 移动端：导航默认隐藏，点击后滑入 */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;              /* 默认在屏幕左侧外面 */
        top: 70px;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.95);
        width: 100%;
        transition: 0.3s;          /* 平滑过渡 */
    }
    
    .nav-menu.active {
        left: 0;                  /* 添加 active 类后滑入屏幕 */
    }
}
```

**JavaScript 控制切换：**
```javascript
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');    // 切换按钮样式
    navMenu.classList.toggle('active');      // 切换菜单显示/隐藏
});
```

---

## 5. Git：管理你的代码历史

### 5.1 为什么需要 Git？

**场景：没有 Git 的时候...**
```
你写了一个新功能 → 发现不想要了 → 想回退 → 找不到以前的代码 😱

你和一个伙伴合作 → 两人同时修改同一个文件 → 互相覆盖 😱

你想试试新想法 → 怕改坏了不敢动手 → 进步缓慢 😱
```

**有了 Git：**
```
随时可以回退到任意版本 ✅
多人协作不会冲突 ✅
可以随意尝试新想法 ✅
```

---

### 5.2 Git 的三个区域

**理解 Git 的关键：**
```
工作区        暂存区       本地仓库      远程仓库
 ↓            ↓           ↓            ↓
你编辑文件  git add   git commit   git push
的文件夹        ↓          ↓           ↓
            准备提交    记录历史    推送到服务器
```

**类比：**
- 工作区 = 你的办公桌（正在做的事）
- 暂存区 = 待办事项清单（准备提交的事）
- 本地仓库 = 日记本（已经完成的事）
- 远程仓库 = 云端备份（和大家分享的事）

---

### 5.3 常用 Git 命令

**基本工作流：**
```bash
# 1. 查看状态（看看有哪些文件被修改了）
git status

# 2. 添加文件到暂存区
git add .              # 添加所有文件
git add index.html     # 只添加这一个文件

# 3. 提交到本地仓库
git commit -m "描述你做了什么"

# 4. 推送到远程仓库（GitHub）
git push
```

**符号说明：**
- `$` 或 `#`：命令行提示符
- `git`：Git 命令前缀
- `""`：双引号，包裹提交信息

**⚠️ 常见错误：**
```
❌ git commit 信息写得不清晰
   ✅ "Add responsive navigation menu"   （好的提交信息）
   ❌ "update"                           （不好的提交信息）

❌ 忘记 git add 就直接 commit
   → 什么都没有被提交

❌ 修改了文件但忘了 push
   → 只有本地有更新，GitHub 上还是旧的
```

---

## 6. 实战技巧与最佳实践

### 6.1 代码规范

**命名规范：**
```css
/* ✅ 好的命名：用 - 分隔，小写字母 */
.nav-container
.hero-title
.submit-button

/* ❌ 不好的命名 */
.NavContainer      // 驼峰命名（JavaScript 风格）
.hero_title        // 下划线命名（Python 风格）
.按钮              // 用中文
```

**文件命名：**
```
✅ index.html
✅ style.css
✅ script.js

❌ Index.html      // 首字母大写
❌ my style.css    // 文件名有空格
❌ 脚本.js          // 用中文
```

---

### 6.2 性能优化

**CSS 优化：**
```css
/* ❌ 避免过度使用通配符 */
* {
    margin: 0;
    padding: 0;
} /* 会影响所有元素，可能影响性能 */

/* ✅ 尽量使用具体的类名 */
.container {
    margin: 0;
    padding: 0;
}
```

**图片优化：**
```html
<!-- ✅ 使用合适的格式 -->
照片用 JPEG（有损压缩，文件小）
图标用 PNG 或 SVG（无损，支持透明）

<!-- ✅ 添加懒加载 -->
<img src="photo.jpg" loading="lazy" alt="描述">
```

---

### 6.3 可访问性（A11y）

**为什么重要？**
- 视障人士使用屏幕阅读器浏览网页
- 好的可访问性让所有人都能使用你的网站

**基本实践：**
```html
<!-- ✅ 图片要有描述性的 alt -->
<img src="profile.jpg" alt="张三的个人照片">

<!-- ❌ 不要这样 -->
<img src="profile.jpg" alt="图片">
<img src="profile.jpg">

<!-- ✅ 表单要有 label -->
<label for="email">邮箱：</label>
<input type="email" id="email" name="email">

<!-- ✅ 语义化标签 -->
<nav aria-label="主导航">
    <ul>
        <li><a href="#home">首页</a></li>
    </ul>
</nav>
```

---

## 📝 学习检查清单

完成项目一后，你应该能够：

### HTML 基础
- [ ] 理解 HTML 文档的基本结构
- [ ] 能说出至少5个语义化标签
- [ ] 知道为什么需要 viewport 标签
- [ ] 能正确使用表单属性（name, required, placeholder）

### CSS 核心
- [ ] 理解盒模型的四个部分
- [ ] 能解释 border-box 和 content-box 的区别
- [ ] 能使用 Flexbox 进行一维布局
- [ ] 能使用 Grid 进行二维布局
- [ ] 知道 CSS 变量的作用

### JavaScript 基础
- [ ] 能用 querySelector 和 querySelectorAll 获取元素
- [ ] 能添加事件监听器
- [ ] 能用 classList 操作元素的类
- [ ] 理解 e.preventDefault() 的作用
- [ ] 知道箭头函数 `=>` 的写法和用法
- [ ] 知道模板字符串 `${}` 的用法

### 响应式设计
- [ ] 知道 viewport 标签的作用
- [ ] 能写媒体查询适配不同设备
- [ ] 理解移动端优化的关键点

### Git 版本控制
- [ ] 能使用 git add、commit、push
- [ ] 能写出清晰的提交信息
- [ ] 理解 Git 的三个区域

---

## 🎯 下一步学习建议

### 1. 巩固基础
- [ ] 复习盒模型，画一画理解
- [ ] 手写一遍 Flexbox 布局，不看文档
- [ ] 用 Grid 做一个响应式相册

### 2. 深入学习
- [ ] 学习 CSS 动画和过渡
- [ ] 学习 JavaScript ES6+ 新特性
- [ ] 学习浏览器开发者工具的使用

### 3. 开始下一个项目
- [ ] 项目二：待办事项应用（学习 React）
- [ ] 项目三：天气应用（学习 API 调用）

---

## 📚 推荐学习资源

| 资源 | 链接 | 用途 |
|------|------|------|
| MDN Web Docs | https://developer.mozilla.org/ | 查询 HTML/CSS/JS 语法和用法 |
| CSS Tricks | https://css-tricks.com/ | 学习 CSS 技巧和最佳实践 |
| Can I Use | https://caniuse.com/ | 查询浏览器兼容性 |
| JavaScript Info | https://javascript.info/ | JavaScript 深入学习 |

---

**文档版本：** v3.0（初学者友好版 + 符号速查表）  
**更新日期：** 2026-05-14  
**状态：** ✅ 已完成

祝你在全栈开发的学习路上越走越远！🚀
