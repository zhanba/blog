---
title: '正则表达式用法'
date: '2017-07-19'
tags: ['javascript', 'regexp']
---

## 创建正则表达式

1. 使用一个正则表达式字面量，其由包含在斜杠之间的模式组成，如下所示：

```js
/*
/pattern/flags
*/

const regex = /ab+c/

const regex = /^[a-zA-Z]+[0-9]*\W?_$/gi
```

正则表达式字面值在加载脚本后编译正则表达式。当正则表达式保持不变时，使用此方法可获得更好的性能。

2. 调用 RegExp 对象的构造函数

```javascript
/*
new RegExp(pattern [, flags])
*/

let regex = new RegExp('ab+c')

let regex = new RegExp(/^[a-zA-Z]+[0-9]*\W?_$/, 'gi')

let regex = new RegExp('^[a-zA-Z]+[0-9]*\\W?_$', 'gi')
```

使用构造函数提供的正则表达式在运行时编译。当正则表达式的模式将会改变，或者模式未知，需要用户输入时，可以使用这种方法。

## 正则表达式相关的对象和方法

### RegExp 对象属性

与修饰符相关的属性

- global :返回一个布尔值，表示是否设置了 g 修饰符，该属性只读。
- ignoreCase :返回一个布尔值，表示是否设置了 i 修饰符，该属性只读。
- multiline :返回一个布尔值，表示是否设置了 m 修饰符，该属性只读。
- sticky :返回一个布尔值，表示是否设置了 y 修饰符，该属性只读。
- unicode :返回一个布尔值，表示是否设置了 u 修饰符，该属性只读。
- flags :返回正则表达式的修饰符。

```js
var r = /abc/gim

r.ignoreCase // true
r.global // true
r.multiline // true
```

与修饰符无关的属性

- lastIndex :返回下一次开始搜索的位置。该属性可读写，但是只在设置了 g 修饰符时有意义。
- source :返回正则表达式的字符串形式（不包括反斜杠），该属性只读。

```js
var r = /abc/gim

r.lastIndex // 0
r.source // "abc"
```

### RegExp 对象方法

#### exec

如果发现匹配，就返回一个数组，成员是每一个匹配成功的子字符串，否则返回 null

```js
var r = /a(b+)a/g

var a1 = r.exec('_abbba_aba_')
a1 // ['abbba', 'bbb']
a1.index // 1
r.lastIndex // 6

var a2 = r.exec('_abbba_aba_')
a2 // ['aba', 'b']
a2.index // 7
r.lastIndex // 10

var a3 = r.exec('_abbba_aba_')
a3 // null
a3.index // TypeError: Cannot read property 'index' of null
r.lastIndex // 0

var a4 = r.exec('_abbba_aba_')
a4 // ['abbba', 'bbb']
a4.index // 1
r.lastIndex // 6
```

#### test

test 返回一个布尔值，表示当前模式是否能匹配参数字符串。如果正则表达式带有 g 修饰符，则每一次 test 方法都从上一次结束的位置开始向后匹配。

```js
var r = /x/g
var s = '_x_x'

r.lastIndex // 0
r.test(s) // true

r.lastIndex // 2
r.test(s) // true

r.lastIndex // 4
r.test(s) // false
```

如果正则模式是一个空字符串，则匹配所有字符串。

```js
new RegExp('').test('abc')
// true
```

### String 对象方法

#### match

匹配成功返回一个数组，匹配失败返回 null。如果正则表达式带有 g 修饰符，则该方法与正则对象的 exec 方法行为不同，会一次性返回所有匹配成功的结果。

```js
var s = 'abba'
var r = /a/g

s.match(r) // ["a", "a"]
r.exec(s) // ["a"]
```

#### search

返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1。该方法会忽略 g 修饰符。

```js
var r = /x/g
r.lastIndex = 2 // 无效
'_x_x'.search(r) // 1
```

#### replace

```js
str.replace(search, replacement)
```

```js
var str = '  #id div.class  '

str.replace(/^\s+|\s+$/g, '')
// "#id div.class"
```

replace 方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

> - $& 指代匹配的子字符串。
> - $` 指代匹配结果前面的文本。
> - $' 指代匹配结果后面的文本。
> - $n 指代匹配成功的第 n 组内容，n 是从 1 开始的自然数。
> - $$ 指代美元符号$。

```js
'abc'.replace('b', "[$`-$&-$']")
// "a[a-b-c]c"
```

```js
var prices = {
  pr_1: '$1.99',
  pr_2: '$9.99',
  pr_3: '$5.00',
}

var template = '<span id="pr_1"></span>' // 这里可以放网页模块字符串

template.replace(/(<span id=")(.*?)(">)(<\/span>)/g, function(match, $1, $2, $3, $4) {
  return $1 + $2 + $3 + prices[$2] + $4
})
//"<span id="pr_1">$1.99</span>"
```

- split :返回一个由分割后的各个部分组成的数组。

```js
str.split(separator, [limit])
```

```js
// 非正则分隔
'a,  b,c, d'.split(',')
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]
```

如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回。

```js
'aaa*a*'.split(/(a*)/)
// [ '', 'aaa', '*', 'a', '*' ]
```

## 修饰符 flags

- g: 全局搜索,如果正则表达式带有 g 修饰符，则每一次 test 方法都从上一次结束的位置开始向后匹配

```js
var r = /x/g
var s = '_x_x'

r.lastIndex // 0
r.test(s) // true

r.lastIndex // 2
r.test(s) // true

r.lastIndex // 4
r.test(s) // false
```

- i：不区分大小写
- m：多行搜索

```js
var s = 'abc\nabc\ndab'
var r1 = /^ab/gm
s.match(r1).length //2
```

```js
var str = 'first second\nthird fourth\nfifth sixth'
var r1 = /(\w+)$/gm
var r2 = /(\w+)$/g
str.match(r1) //["second", "fourth", "sixth"]
str.match(r2) //["sixth"]
```

- u：Unicode 模式，会正确处理大于\uFFFF 的字符

```js
// 正确返回字符串长度的函数
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu)
  return result ? result.length : 0
}

var s = '𠮷𠮷'

s.length // 4
codePointLength(s) // 2
```

- y：粘连模式

```js
var s = 'aaa_aa_a'
var r1 = /a+/g
var r2 = /a+/y

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
```

## 正则表达式模式 pattern

pattern 包括简单字符和特殊字符。

特殊字符有以下几类：

- 字符类
- 字符集
- 边界
- 交替
- 群组和反向引用
- 量词
- 断言

具体如下：

### 字符类

- . ：除\n, \r, \u2028 or \u2029 外的任何单个字符
- \d :任何数字，[0-9]
- \D :非数字，[^0-9]
- \w :字母数字下划线，[A-Za-z0-9_]
- \W :非字母数字下划线，[^a-za-z0-9_]
- \s :单个空格字符，[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
- \S :单个非空格字符，[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
- \t :horizontal tab 匹配一个水平制表符 (U+0009)
- \v :vertical tab 匹配一个垂直制表符 (U+000B)
- \r :return 匹配一个回车符 (U+000D)
- \n :linefeed 匹配一个换行符 (U+000A)
- \f :form-feed 换页符 (U+000C)
- [\b] :backspace
- \0 : 匹配 null 字符（U+0000）
- \uhhhh :值为 hhhh 的 UTF-16 字符
- \u{hhhh},\u{hhhhhh} :修饰符有 u 时，代表 unicode 字符
- \cX :表示 Ctrl-[X]，其中的 X 是 A-Z 之中任一个英文字母，用来匹配控制字符。

### 字符集

- [xyz],[a-c]
- [^xyz],[^a-c]
- ^ :脱字符。[^]匹配一切字符。
- \- :连字符。表示字符的连续范围。

### 边界

- ^ :开始
- $ :结束
- \b :单词边界

```js
/\bm/.exec('moon') // 'm'
/oo\b/.test('moon') // false
/oon\b/.test('moon') // true
```

\B :非单词边界

```js
// \s的例子
/\s\w*/.exec('hello world') // [" world"]

// \b的例子
/\bworld/.test('hello world') // true
/\bworld/.test('hello-world') // true
/\bworld/.test('hello_world') // false
/\bworld/.test('helloworld') // false

// \B的例子
/\Bworld/.test('hello-world') // false
/\Bworld/.test('helloworld') // true
```

### 候选

- x|y :x 或者 y

### 群组和反向引用

- (x) :匹配并记住 x

```js
var re = /(\w+)\s(\w+)/
var str = 'John Smith'
var newstr = str.replace(re, '$2, $1') //$n 引用括号匹配字符串
print(newstr) // Smith, John
```

- \n :反向引用

- (?:x) :匹配且不记住 x

### 量词

- x\* : 匹配 x 0 次或多次
- x+ : 匹配 x 1 次或多次
- x? :0 or 1
- x{n} : n 次
- x{n,} :至少 n 次
- x{n,m} :至少 n 次，至多 m 次
- x\*? :非贪婪模式

### 断言

- x(?=y) :先行断言。只有 y 跟随 x 时才匹配 x
- x(?!y) :先行否定断言。只有 y 不跟随 x 时才匹配 x

### 贪婪模式

```js
var s = 'aaa'
s.match(/a+/) // ["aaa"]
```

如果想将贪婪模式改为非贪婪模式，可以在量词符后面加一个问号。

```js
var s = 'aaa'
s.match(/a+?/) // ["a"]
```

### 组匹配

```js
;/fred+/.test('fredd') / // true
  fred +
  /.test('fredfred') / / true
```

在正则表达式内部，可以用\n 引用括号匹配的内容，n 是从 1 开始的自然数，表示对应顺序的括号。

```js
;/(.)b(.)\1b\2/.test('abcabc')
// true
```

组匹配非常有用，下面是一个匹配网页标签的例子。

```js
var tagName = /<([^>]+)>[^<]*<\/\1>/
tagName.exec('<b>bold</b>')[1]
// 'b'
```

```js
var html = '<b class="hello">Hello</b><i>world</i>'
var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g

var match = tag.exec(html)

match[1] // "b"
match[2] // " class="hello""
match[3] // "Hello"

match = tag.exec(html)

match[1] // "i"
match[2] // ""
match[3] // "world"
```

```js
// 获取url信息
var url = /(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/

url.exec('http://javascript.ruanyifeng.com/stdlib/regexp.html')

//  ["http://javascript.ruanyifeng.com/stdlib/regexp.html", "http", "javascript.ruanyifeng.com", "/stdlib/regexp.html"]
```

```js
// 获取url参数值
var url = '/rtcp-web/libra/mw/list.do?sysSimpleName=rtcp&_=1500608993777'

function getParameter(url, name) {
  var reg = new RegExp('(?:^|\\?|&)' + name + '=([^&]*)(?:&|#|$)', 'gi')
  var match = reg.exec(url)
  if (match) {
    return match[1]
  } else {
    return null
  }
}

getParameter(url, 'sysSimpleName') // rtcp
```

```js
// get all url parameter

const url = '/rtcp-web/libra/mw/list.do?sysSimpleName=rtcp&_=1500608993777'

const reg = /(\?|\&)([^=]+)\=([^&]+)/g

const res = url.match(reg)

// ["?sysSimpleName=rtcp", "&_=1500608993777"]
```

template example

```js
function render(template, context) {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key.trim()])
}

const template = '{{name}}很厉害的name正则，{{age }}ff'

const context = { name: 'xiaoming', age: '12' }

console.log(render(template, context))
```

### 非捕获组

(?:x)称为非捕获组（Non-capturing group），表示不返回该组匹配的内容

### 其他

后行断言、具名组匹配等，目前处于提案阶段。

## 参考资料

- http://javascript.ruanyifeng.com/stdlib/regexp.html

- http://es6.ruanyifeng.com/#docs/regex

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp

- http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html
