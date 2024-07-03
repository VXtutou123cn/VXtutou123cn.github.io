"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[57],{385:(s,a,n)=>{n.r(a),n.d(a,{comp:()=>p,data:()=>t});var e=n(641);const l=[(0,e.Fv)('<h1 id="变量是什么" tabindex="-1"><a class="header-anchor" href="#变量是什么"><span>变量是什么</span></a></h1><p>变量是计算机中用来存储数据的“容器”，它可以让计算机变得有记忆</p><h1 id="变量的本质" tabindex="-1"><a class="header-anchor" href="#变量的本质"><span>变量的本质</span></a></h1><p>内存：计算机中存储数据的地方，相当于一个空间 变量：是程序在内存中申请的一块用来存放数据的小空间</p><div class="custom-container tip"><p class="custom-container-title">垃圾回收机制</p><p>Javascript本身自带垃圾回收机制，不使用的变量会回收空间，避免内存漫溢</p></div><h1 id="变量的基本使用" tabindex="-1"><a class="header-anchor" href="#变量的基本使用"><span>变量的基本使用</span></a></h1><h2 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量"><span>声明变量</span></a></h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>let不允许多次声名同一个变量</p></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> age<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>let是关键字, age是变量名/标识符</p><h2 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值"><span>变量赋值</span></a></h2><p>变量名前跟上一个<code>=</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> age<span class="token punctuation">;</span></span>\n<span class="line">age <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">//输出变量值</span></span>\n<span class="line">document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新变量" tabindex="-1"><a class="header-anchor" href="#更新变量"><span>更新变量</span></a></h3><p>变量赋值后，还可以通过简单地给它一个不同的值来更新它</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> age<span class="token punctuation">;</span></span>\n<span class="line">age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">//更新变量</span></span>\n<span class="line">age <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">//输出变量值</span></span>\n<span class="line">document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量初始化" tabindex="-1"><a class="header-anchor" href="#变量初始化"><span>变量初始化</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">//声明并初始化变量值</span></span>\n<span class="line"><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">//声明多个变量并初始化</span></span>\n<span class="line"><span class="token keyword">let</span> gender <span class="token operator">=</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>userName <span class="token operator">=</span> <span class="token string">&#39;igloo&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量命名规则与规范" tabindex="-1"><a class="header-anchor" href="#变量命名规则与规范"><span>变量命名规则与规范</span></a></h2><p>规则：必须遵守，不遵守会报错 规范：建议，不遵守不会报错，但不符合业内通识</p><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则"><span>命名规则</span></a></h3><ul><li>不能用关键字</li><li>下划线、字母、数字、<kbd>$</kbd>组成，且数字不能开头</li><li>字母<b>严格区分大小写</b>，如Age和age是不同变量</li></ul><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h3><ul><li>起名字要有意义</li><li>遵守驼峰命名法，建议小驼峰命名</li></ul><h2 id="声明变量规范" tabindex="-1"><a class="header-anchor" href="#声明变量规范"><span>声明变量规范</span></a></h2><div class="custom-container warning"><p class="custom-container-title">使用let而非var声明变量</p><p>var声明有如下弊端</p><ul><li>可以先使用在声明（不合理）</li><li>声明过的变量可重复声明（不合理）</li><li>缺少块级作用域</li></ul></div>',26)],i={},p=(0,n(262).A)(i,[["render",function(s,a){return(0,e.uX)(),(0,e.CE)("div",null,l)}]]),t=JSON.parse('{"path":"/js/var.html","title":"变量","lang":"zh-CN","frontmatter":{"title":"变量"},"headers":[{"level":2,"title":"声明变量","slug":"声明变量","link":"#声明变量","children":[]},{"level":2,"title":"变量赋值","slug":"变量赋值","link":"#变量赋值","children":[{"level":3,"title":"更新变量","slug":"更新变量","link":"#更新变量","children":[]},{"level":3,"title":"变量初始化","slug":"变量初始化","link":"#变量初始化","children":[]}]},{"level":2,"title":"变量命名规则与规范","slug":"变量命名规则与规范","link":"#变量命名规则与规范","children":[{"level":3,"title":"命名规则","slug":"命名规则","link":"#命名规则","children":[]},{"level":3,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]}]},{"level":2,"title":"声明变量规范","slug":"声明变量规范","link":"#声明变量规范","children":[]}],"git":{"updatedTime":1720039834000,"contributors":[{"name":"swp","email":"3297943361@qq.com","commits":1}]},"filePathRelative":"js/var.md"}')}}]);