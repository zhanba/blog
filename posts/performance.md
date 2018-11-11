---
title: 'web性能优化'
date: '2018-01-06'
tags: ['performance']
---

# 性能的重要性 why performance matters

- retaining users
- conversions
- user experience
- delivering information expediently

# 关注点

- Mind what resources you send
  > css 框架是否必须
  > js 库是否必须
  > 不是所有网站都需要成为 SPA（js 需要下载，解析，编译，执行，十分昂贵）
- Mind how you send resources
  > http2
  > resource hint(preload) https://www.w3.org/TR/resource-hints/ https://www.keycdn.com/blog/resource-hints/
  > code splitting
- Mind how much data you send
  > 文本压缩
  > 服务端压缩。gzip
  > 优化图片
  > 替换成更好的格式。webp
  > 响应式图片（移动端）。srcset
  > 使用视频而不是 GIF
  > Client hints http://httpwg.org/http-extensions/client-hints.html

# RAIL 模型

- response: 100ms
- animation: 10ms/frame
- idle: 要实现小于 100 毫秒的响应，应用必须在每 50 毫秒内将控制返回给主线程
- load: 100ms

# loading performance

## 性能测量

- Lighthouse
- WebPageTest
- PageSpeed Insights

## Performance API

```js
// Get Navigation Timing entries 针对html文档
performance.getEntriesByType('navigation')

// Get Resource Timing entries 针对其他依赖资源
performance.getEntriesByType('resource')
```

### 网络请求的重要时间节点

#### DNS lookup

```js
// Measuring DNS lookup time
var pageNav = performance.getEntriesByType('navigation')[0]
var dnsTime = pageNav.domainLookupEnd - pageNav.domainLookupStart

// 跨域资源必须开启 Timing-Allow-Origin: https://developer.mozilla.org
// https://www.w3.org/TR/resource-timing-2/#sec-timing-allow-origin
```

#### Connection negotiation

```js
// Quantifying total connection time
var pageNav = performance.getEntriesByType('navigation')[0]
var connectionTime = pageNav.connectEnd - pageNav.connectStart
var tlsTime = 0 // <-- Assume 0 by default

// Did any TLS stuff happen?
if (pageNav.secureConnectionStart > 0) {
  // Awesome! Calculate it!
  tlsTime = pageNav.connectEnd - pageNav.secureConnectionStart
}
```

#### Requests and responses

```js
// Cache seek plus response time
var pageNav = performance.getEntriesByType('navigation')[0]
var fetchTime = pageNav.responseEnd - pageNav.fetchStart

// Service worker time plus response time
var workerTime = 0

if (pageNav.workerStart > 0) {
  workerTime = pageNav.responseEnd - pageNav.workerStart
}

// Request plus response time (network only)
var totalTime = pageNav.responseEnd - pageNav.requestStart

// Response time only (download)
var downloadTime = pageNav.responseEnd - pageNav.responseStart

// Time to First Byte (TTFB)
var ttfb = pageNav.responseStart - pageNav.requestStart

// HTTP header size
var pageNav = performance.getEntriesByType('navigation')[0]
var headerSize = pageNav.transferSize - pageNav.encodedBodySize

// Compression ratio
var compressionRatio = pageNav.decodedBodySize / pageNav.encodedBodySize
```

### 在应用代码中获取时间

```js
// Get timing data for an important hero image
var heroImageTime = performance.getEntriesByName('https://somesite.com/images/hero-image.jpg')

// Get timing data for an important hero image
var allTheTimings = performance.getEntries({
  // Get entries by name
  name: 'https://somesite.com/images/hero-image.jpg',
  // Get entries by type
  entryType: 'resource',
  // Get entries by their initiatorType value:
  initiatorType: 'img',
})
```

### PerformanceObserver

```js
// Instantiate the performance observer
var perfObserver = new PerformanceObserver(function(list, obj) {
  // Get all the resource entries collected so far
  // (You can also use getEntriesByType/getEntriesByName here)
  var entries = list.getEntries()

  // Iterate over entries
  for (var i = 0; i < entries.length; i++) {
    // Do the work!
  }
})

// Run the observer
perfObserver.observe({
  // Polls for Navigation and Resource Timing entries
  entryTypes: ['navigation', 'resource'],
})
```

### Beacon API

```js
window.addEventListener(
  'unload',
  function() {
    // Caution: If you have a _lot_ of performance entries, don't send _everything_ via getEntries. This is just an example.
    let rumData = new FormData()
    rumData.append('entries', JSON.stringify(performance.getEntries()))

    // Queue beacon request and inspect for failure
    if (!navigator.sendBeacon('/phone-home', rumData)) {
      // Recover here (XHR or fetch maybe)
    }
  },
  false
)
```

## User-centric performance metrics

- first paint (FP) and first contentful paint (FCP)
- First meaningful paint (FMP)
- Time to interactive (TTI)
- https://w3c.github.io/longtasks/

### paint

```js
const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    // `entry` is a PerformanceEntry instance.
    console.log(entry.entryType)
    console.log(entry.startTime) // DOMHighResTimeStamp
    console.log(entry.duration) // DOMHighResTimeStamp
  }
})

// Start observing the entry types you care about.
observer.observe({ entryTypes: ['resource', 'paint'] })
```

### Tracking long tasks

```js
const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    ga('send', 'event', {
      eventCategory: 'Performance Metrics',
      eventAction: 'longtask',
      eventValue: Math.round(entry.startTime + entry.duration),
      eventLabel: JSON.stringify(entry.attribution),
    })
  }
})

observer.observe({ entryTypes: ['longtask'] })
```

## event

- DOMContentLoaded html DOM 加载完成
- load 所有资源被加载后
- js 脚本会阻塞 DOM 解析
- 浏览器会边解析 html 边渲染，first paint 会提前
- js 脚本放到最后不会影响 first paint，DOMContentLoaded 不变

## 优化内容效率

### 避免不必要的下载

- 清点网页资产
- 评估价值和性能
- 确定是否提供了足够的价值

### 优化文本

- 减少引用不必要的库
- 先应用内容特定优化：CSS、JS 和 HTML 压缩源码程序。/代码压缩器
- 采用 GZIP 对压缩源码后的输出进行压缩。

### 优化图形内容

- 去掉不必须的图片
- 使用 css 效果代替
- 使用字体代替
- [srcset 和 picture](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images?hl=zh-cn#images-in-markup)
- 徽标和艺术线条等矢量插画及纯色图形使用矢量格式如 svg(优化 svg，https://github.com/svg/svgo, 文本压缩方法适用于 svg)
- Data URI
- css: image-set()/媒体查询/
- 选择合适的图片格式
  > jpeg 为有损压缩
  > gif 的 color space 只有 256，无损压缩
  > png 无损，支持透明，png8/png24
  > webp 压缩率高，支持透明和动画，有损，只有 chrome 支持，需要服务端/CDN 对浏览器进行判断
- GIF 转 MP4(ffmpeg), 体积更小，一些 cpu 带有视频硬件加速，解码更快
- 使用图片转换和压缩工具如 jpegtran/OptiPNG,最好利用工具自动化进行
  > https://www.imagemagick.org/script/index.php
 > https://github.com/imagemin/imagemin
- image sprites
- 去除图片元数据 metaddata（ps，gimp）
- 调整图片大小
  > 裁剪图片
  > 降低图片质量
  > 压缩图片 Compress Images, 更先进的编码器 Guetzli/MozJPEG
  > https://github.com/mozilla/mozjpeg
 > https://github.com/google/guetzli
- 关键图片 preload
- 图片懒加载 https://github.com/zouhir/lqip-loader https://github.com/aFarkas/lazysizes
- 使用强缓存 e.g Cache-Control:public; max-age=31536000

#### JPEG compression modes

- baseline (or sequential) JPEG 从上往下逐行显示
- Progressive JPEG 从模糊到清晰，低网速情况下体验更好，但是解码更耗费 CPU

#### 图像优化基本知识(png 为例)

- 每个像素点存储 rgba 四个通道
- 每个通道包含 8 位（2^8）色阶
- 优化方式
  > 减少色阶
  > 增量编码 Delta encoding
  > 更多专业方法https://en.wikipedia.org/wiki/Image_compression

### 优化 javascript

- code-splitting : critical/non-critical(lazy-load)
- Minification
- es5: [UglifyJS](https://github.com/mishoo/UglifyJS2)
- es6: [babel-minify](https://github.com/babel/minify) [uglify-es](https://github.com/mishoo/UglifyJS2/tree/harmony)
- Compression: gzip/[Brotli](https://github.com/google/brotli)
- Removing unused code
  - babel-preset-env / browserlist
  - tree-shaking
  - lodash-babel-plugin/ ContextReplacementPlugin for moment / babel-plugin-import
- cache
  - http cache
  - service worker cache
  - webpack long term cache / chunkhash

### 第三方 js 脚本

- why: performance/privacy/security/unpridictable/unintended consequences
- what: 社交分享/嵌入式视频播放/广告 iframe/分析统计脚本/ A/B test /辅助库
- 优化：
  - async/defer
  - 自己 host 脚本，如果第三方很慢（但是无法处理更新问题，可以考虑使用 service-worker 来处理缓存策略）
  - 使用 Resource hints
    > `<link rel="dns-prefetch" href="http://example.com">`
 > `<link rel="preconnect" href="https://cdn.example.com">`
  - 使用 iframe 沙箱化脚本
  - 懒加载第三方脚本（渲染完成后加载/滚动到加载），Intersection Observer
  - 安全：https, iframe sandbox 属性， CSP(Content-Security-Policy)

### 网页字体优化

- 字体文件大小 = 每个字形矢量路径的复杂度 \* 字形数量
- 格式： EOT，TTF，WOFF，WOFF2
- eot，ttf 无压缩，需要 gzip；woff 自带压缩；woff2 体积最小，优先使用
- @font-face format() 指定格式
- unicode-range
- 字体渲染： 浏览器在构建好渲染树之后才知道需要哪些字体来渲染文本，因此字体请求会落后其他资源。
  > Safari 会在字体下载完成之前延迟文本渲染。
  > Chrome 和 Firefox 会将字体渲染暂停最多 3 秒，之后他们会使用一种后备字体。并且字体下载完成后，他们会使用下载的字体重新渲染一次文本。
  > IE 会在请求字体尚不可用时立即使用后备字体进行渲染，然后在字体下载完成后进行重新渲染。
- Font Loading API
- 使用 HTTP 长期缓存来缓存字体

### HTTP 请求

- 除了降低下载的大小，也可以降低下载的频率
- 合并文本资源（但需要注意 css 和 js 的文件合并顺序问题）
- 合并图形资源，sprite
- Caveat 注意，合并文件对 http/2 可能无效。。

### HTTP 缓存

- https://calendar.perfplanet.com/2016/a-tale-of-four-caches/
- https://jakearchibald.com/2016/caching-best-practices/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching

### 使用 Save-Data

-

## other

- https://developers.google.com/web/fundamentals/performance
- https://bitsofco.de/understanding-the-critical-rendering-path/
- https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/
- https://dassur.ma/things/less-snakeoil/
