"use client";

import { useEffect } from "react";

const bodyContent = `

<div class="sidebar-overlay" id="sidebarOverlay"></div>
<aside class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <div class="logo-row">
      <div class="logo">Price Action Lab</div>
      <span class="logo-badge">v2.0</span>
    </div>
    <div class="logo-sub">Al Brooks 交易学习系统</div>
  </div>
  <div class="search-box">
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    <input type="text" placeholder="搜索概念..." id="searchInput" oninput="searchNav(this.value)">
  </div>
  <nav class="sidebar-nav" id="sidebarNav">
    <!-- SECTION: 基础入门 -->
    <div class="nav-section" data-section="basics">
      <div class="nav-section-title" onclick="toggleSection(this)">
        基础入门 <svg class="chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
      <div class="nav-items">
        <div class="nav-item active" data-page="overview" onclick="goTo('overview')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          课程总览
        </div>
        <div class="nav-item" data-page="kline" onclick="goTo('kline')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="4" height="9" rx=".5"/><rect x="10" y="5" width="4" height="12" rx=".5"/><rect x="17" y="9" width="4" height="8" rx=".5"/><line x1="5" y1="4" x2="5" y2="8"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="19" y1="5" x2="19" y2="9"/></svg>
          K线基础 <span class="nav-badge">01</span>
        </div>
        <div class="nav-item" data-page="structure" onclick="goTo('structure')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4,17 10,11 14,14 20,6"/><polyline points="14,6 20,6 20,12"/></svg>
          市场结构 <span class="nav-badge">02</span>
        </div>
      </div>
    </div>
    <!-- SECTION: 核心概念 -->
    <div class="nav-section" data-section="core">
      <div class="nav-section-title" onclick="toggleSection(this)">
        核心概念 <svg class="chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
      <div class="nav-items">
        <div class="nav-item" data-page="signals" onclick="goTo('signals')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0l-2.83-2.83M9.76 9.76L6.93 6.93"/></svg>
          信号K线 <span class="nav-badge">03</span>
        </div>
        <div class="nav-item" data-page="patterns" onclick="goTo('patterns')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          K线形态 <span class="nav-badge">04</span>
        </div>
        <div class="nav-item" data-page="setups" onclick="goTo('setups')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/></svg>
          交易设置 <span class="nav-badge">05</span>
        </div>
        <div class="nav-item" data-page="probability" onclick="goTo('probability')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          概率思维 <span class="nav-badge">06</span>
        </div>
      </div>
    </div>
    <!-- SECTION: 进阶深入 -->
    <div class="nav-section" data-section="advanced">
      <div class="nav-section-title" onclick="toggleSection(this)">
        进阶深入 <svg class="chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
      <div class="nav-items">
        <div class="nav-item" data-page="trendlines" onclick="goTo('trendlines')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="18" x2="21" y2="4"/><circle cx="7" cy="14" r="1.5" fill="currentColor"/><circle cx="13" cy="10" r="1.5" fill="currentColor"/></svg>
          趋势线与通道 <span class="nav-badge new">07</span>
        </div>
        <div class="nav-item" data-page="gap" onclick="goTo('gap')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h6m4 0h8M4 16h6m4 0h8"/><path d="M10 5v6m4-3v6M10 13v6m4-3v6" stroke-dasharray="2 2"/></svg>
          缺口理论 <span class="nav-badge new">08</span>
        </div>
        <div class="nav-item" data-page="candles_advanced" onclick="goTo('candles_advanced')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
          高级形态识别 <span class="nav-badge new">09</span>
        </div>
        <div class="nav-item" data-page="measured_move" onclick="goTo('measured_move')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 20L10 4l4 12 4-8 3 12"/></svg>
          测量目标 <span class="nav-badge new">10</span>
        </div>
        <div class="nav-item" data-entry="timeframe" data-page="timeframe" onclick="goTo('timeframe')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="8" height="6" rx="1"/><rect x="14" y="3" width="8" height="6" rx="1"/><rect x="2" y="15" width="8" height="6" rx="1"/><rect x="14" y="15" width="8" height="6" rx="1"/></svg>
          多时间框架 <span class="nav-badge new">11</span>
        </div>
      </div>
    </div>
    <!-- SECTION: 进阶策略 -->
    <div class="nav-section" data-section="strategies">
      <div class="nav-section-title" onclick="toggleSection(this)">
        进阶策略 <svg class="chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
      <div class="nav-items">
        <div class="nav-item" data-page="channels" onclick="goTo('channels')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18L10 12L14 15L21 6"/><line x1="3" y1="20" x2="21" y2="8" stroke-dasharray="3"/></svg>
          通道交易 <span class="nav-badge new">14</span>
        </div>
        <div class="nav-item" data-page="trend-trading" onclick="goTo('trend-trading')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4,17 10,11 14,14 20,6"/><polyline points="14,6 20,6 20,12"/></svg>
          趋势交易策略 <span class="nav-badge new">15</span>
        </div>
        <div class="nav-item" data-page="day-patterns" onclick="goTo('day-patterns')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          日内模式 <span class="nav-badge new">16</span>
        </div>
      </div>
    </div>
    <!-- SECTION: 实战应用 -->
    <div class="nav-section" data-section="practice">
      <div class="nav-section-title" onclick="toggleSection(this)">
        实战应用 <svg class="chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
      <div class="nav-items">
        <div class="nav-item" data-page="scenarios" onclick="goTo('scenarios')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
          实战场景分析 <span class="nav-badge new">12</span>
        </div>
        <div class="nav-item" data-page="journal" onclick="goTo('journal')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
          交易日志模板 <span class="nav-badge new">13</span>
        </div>
        <div class="nav-item" data-page="practice" onclick="goTo('practice')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          学习计划
        </div>
        <div class="nav-item" data-page="quiz" onclick="goTo('quiz')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          知识测验
        </div>
        <div class="nav-item" data-page="glossary" onclick="goTo('glossary')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
          术语词典
        </div>
      </div>
    </div>
  </nav>
  <div class="sidebar-footer">
    <div class="progress-wrap">
      <div class="progress-label"><span>学习进度</span><span id="progressPct">0%</span></div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    </div>
  </div>
</aside>

<button class="mobile-toggle" id="mobileToggle" onclick="toggleSidebar()">
  <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0c" stroke-width="1.8" stroke-linecap="round">
    <rect x="4" y="8" width="4" height="10" rx="1"/><line x1="6" y1="4" x2="6" y2="8"/>
    <rect x="10" y="5" width="4" height="13" rx="1"/><line x1="12" y1="2" x2="12" y2="5"/>
    <rect x="16" y="9" width="4" height="9" rx="1"/><line x1="18" y1="6" x2="18" y2="9"/>
  </svg>
</button>

<div class="main">
  <header class="topbar">
    <div class="breadcrumb" id="breadcrumb">首页 / <span>课程总览</span></div>
    <div class="topbar-actions">
      <button class="theme-toggle" onclick="toggleTheme()" title="切换深色/浅色模式">
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      </button>
      <button class="topbar-btn" onclick="goTo('glossary')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> 词典</button>
      <button class="topbar-btn" onclick="goTo('quiz')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg> 测验</button>
    </div>
  </header>

  <div class="content">

    <!-- ================================================================ -->
    <!--                        PAGE: OVERVIEW                            -->
    <!-- ================================================================ -->
    <section class="page active" id="page-overview">
      <div class="hero">
        <div class="hero-tag">Al Brooks Price Action · v2.0</div>
        <h1>掌握<em>价格行为</em>，<br>读懂市场语言</h1>
        <p>本课程系统化整理 Al Brooks 的价格行为交易体系，从 K 线基础到概率思维，帮助你建立不依赖指标的纯粹交易方法论。</p>
      </div>

      <div class="kpi-row">
        <div class="kpi"><div class="kpi-value">16</div><div class="kpi-label">核心章节</div></div>
        <div class="kpi"><div class="kpi-value">80+</div><div class="kpi-label">关键概念</div></div>
        <div class="kpi"><div class="kpi-value">8</div><div class="kpi-label">实战场景</div></div>
        <div class="kpi"><div class="kpi-value">30+</div><div class="kpi-label">测验题目</div></div>
      </div>

      <!-- Learning Path Visual -->
      <div class="concept">
        <h2>学习路径地图</h2>
        <p>按照从上到下的顺序，循序渐进地掌握价格行为交易：</p>
      </div>
      <div class="timeline">
        <div class="timeline-item"><div class="timeline-date">Week 1-2</div><div class="timeline-title">基础：K线语言 & 市场结构</div><div class="timeline-desc">掌握K线四个价格的含义，学会判断趋势、通道和交易区间</div></div>
        <div class="timeline-item"><div class="timeline-date">Week 3-4</div><div class="timeline-title">核心：信号K线 & K线形态</div><div class="timeline-desc">识别信号K线与入场K线的配合，掌握单根/双根/三根形态</div></div>
        <div class="timeline-item"><div class="timeline-date">Week 5-6</div><div class="timeline-title">系统：交易设置 & 概率思维</div><div class="timeline-desc">三大核心交易设置，建立概率思维与风险管理框架</div></div>
        <div class="timeline-item"><div class="timeline-date">Week 7-9</div><div class="timeline-title">进阶：趋势线、缺口、测量目标</div><div class="timeline-desc">深入理解趋势线画法、缺口分类、测量移动目标</div></div>
        <div class="timeline-item"><div class="timeline-date">Week 10-11</div><div class="timeline-title">策略：通道交易、趋势策略、日内模式</div><div class="timeline-desc">掌握通道交易、尖峰与通道模式、日内模式识别</div></div>
        <div class="timeline-item"><div class="timeline-date">Week 12-14</div><div class="timeline-title">实战：场景分析 & 交易日志</div><div class="timeline-desc">通过完整实战场景练习，建立交易日志习惯</div></div>
      </div>

      <div class="divider"></div>

      <div class="card-grid">
        <div class="card card-click" onclick="goTo('kline')"><span class="card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="8" width="4" height="9" rx=".5"/><line x1="5" y1="4" x2="5" y2="8"/><rect x="10" y="5" width="4" height="12" rx=".5"/><line x1="12" y1="2" x2="12" y2="5"/><rect x="17" y="9" width="4" height="8" rx=".5"/><line x1="19" y1="5" x2="19" y2="9"/></svg></span><div class="card-label">Module 01</div><h3>K 线基础</h3><p>理解单根 K 线的"语言"——实体、影线、收盘价的位置如何揭示多空力量。</p></div>
        <div class="card card-click" onclick="goTo('structure')"><span class="card-icon"><svg viewBox="0 0 24 24"><polyline points="4,17 10,11 14,14 20,6"/><polyline points="14,6 20,6 20,12"/></svg></span><div class="card-label">Module 02</div><h3>市场结构</h3><p>趋势、通道与交易区间。学会辨认当前市场所处的状态。</p></div>
        <div class="card card-click" onclick="goTo('signals')"><span class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 2v4m0 12v4m10-10h-4M6 12H2"/><circle cx="12" cy="12" r="3"/></svg></span><div class="card-label">Module 03</div><h3>信号 K 线</h3><p>识别交易触发点——信号 K 线与入场 K 线的核心逻辑。</p></div>
        <div class="card card-click" onclick="goTo('patterns')"><span class="card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span><div class="card-label">Module 04</div><h3>K 线形态</h3><p>单根、双根、三根经典形态，以及 Brooks 体系中的独特解读。</p></div>
        <div class="card card-click" onclick="goTo('setups')"><span class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg></span><div class="card-label">Module 05</div><h3>交易设置</h3><p>趋势突破、回调入场、二次测试——三大核心交易设置。</p></div>
        <div class="card card-click" onclick="goTo('probability')"><span class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span><div class="card-label">Module 06</div><h3>概率思维</h3><p>交易不是预测，而是概率游戏。理解期望值与风险管理。</p></div>
        <div class="card card-click" onclick="goTo('trendlines')"><span class="card-icon"><svg viewBox="0 0 24 24"><line x1="3" y1="18" x2="21" y2="4"/><circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="13" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg></span><div class="card-label">Module 07</div><h3>趋势线与通道</h3><p>趋势线的画法、有效性判断和通道交易策略。</p></div>
        <div class="card card-click" onclick="goTo('gap')"><span class="card-icon"><svg viewBox="0 0 24 24"><path d="M4 8h6m4 0h8M4 16h6m4 0h8"/><path d="M10 5v6m4-3v6M10 13v6m4-3v6" stroke-dasharray="2 2"/></svg></span><div class="card-label">Module 08</div><h3>缺口理论</h3><p>四类缺口的含义与交易策略——突破缺口、测量缺口等。</p></div>
        <div class="card card-click" onclick="goTo('candles_advanced')"><span class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="15"/></svg></span><div class="card-label">Module 09</div><h3>高级形态识别</h3><p>楔形、双顶双底、旗形等复合形态的识别与交易。</p></div>
        <div class="card card-click" onclick="goTo('measured_move')"><span class="card-icon"><svg viewBox="0 0 24 24"><path d="M3 20L10 4l4 12 4-8 3 12"/></svg></span><div class="card-label">Module 10</div><h3>测量目标</h3><p>基于价格行为的盈利目标计算方法。</p></div>
        <div class="card card-click" onclick="goTo('timeframe')"><span class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="8" height="6" rx="1"/><rect x="14" y="3" width="8" height="6" rx="1"/><rect x="2" y="15" width="8" height="6" rx="1"/><rect x="14" y="15" width="8" height="6" rx="1"/></svg></span><div class="card-label">Module 11</div><h3>多时间框架</h3><p>如何协调多个时间框架的信号，找到最佳入场点。</p></div>
        <div class="card card-click" onclick="goTo('scenarios')"><span class="card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg></span><div class="card-label">Module 12</div><h3>实战场景分析</h3><p>8个完整实战场景的逐步解析。</p></div>
        <div class="card card-click" onclick="goTo('channels')"><span class="card-icon"><svg viewBox="0 0 24 24"><path d="M3 18L10 12L14 15L21 6"/><line x1="3" y1="20" x2="21" y2="8" stroke-dasharray="3"/></svg></span><div class="card-label">Module 14</div><h3>通道交易</h3><p>通道类型、微通道、通道交易策略——趋势交易的核心技能。</p></div>
        <div class="card card-click" onclick="goTo('trend-trading')"><span class="card-icon"><svg viewBox="0 0 24 24"><polyline points="4,17 10,11 14,14 20,6"/><polyline points="14,6 20,6 20,12"/></svg></span><div class="card-label">Module 15</div><h3>趋势交易策略</h3><p>尖峰与通道、趋势强度信号、两段腿结构和入场策略。</p></div>
        <div class="card card-click" onclick="goTo('day-patterns')"><span class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span><div class="card-label">Module 16</div><h3>日内模式</h3><p>开盘趋势日、反转日、趋势恢复日——识别日类型选择策略。</p></div>
      </div>

      <div class="callout">
        <div class="callout-title">学习建议</div>
        <p>Al Brooks 的体系信息密度极高，建议每天专注学习 1-2 个概念，在实盘图表上反复验证。交易日志是你最好的老师。</p>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                     PAGE: KLINE BASICS                          -->
    <!-- ================================================================ -->
    <section class="page" id="page-kline">
      <div class="hero">
        <div class="hero-tag">Module 01</div>
        <h1>K 线<em>基础</em></h1>
        <p>每一根 K 线都是一段市场"对话"。学会阅读 K 线，就是学会听懂市场在说什么。</p>
      </div>

      <div class="concept">
        <h2>K 线的四个价格</h2>
        <p>一根 K 线包含四个关键价格信息：</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>价格</th><th>含义</th><th>Brooks 视角</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--accent)">开盘价 (Open)</td><td>时段开始时的价格</td><td>多空博弈的起点</td></tr>
              <tr><td style="color:var(--green)">最高价 (High)</td><td>时段内多头最强位置</td><td>买方力量的极限</td></tr>
              <tr><td style="color:var(--red)">最低价 (Low)</td><td>时段内空头最强位置</td><td>卖方力量的极限</td></tr>
              <tr><td style="color:var(--blue)">收盘价 (Close)</td><td>时段结束时的价格</td><td><strong>最重要的价格</strong>——多空争夺的结果</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>K 线的"解剖学"</h2>
        <h3>实体 (Body)</h3>
        <p>开盘价与收盘价之间的区域。实体越大，代表一方力量越强。</p>
        <ul>
          <li><strong>大阳线</strong>：实体长且收在高位 → 多头强势控制</li>
          <li><strong>大阴线</strong>：实体长且收在低位 → 空头强势控制</li>
          <li><strong>小实体</strong>：多空力量均衡，市场犹豫不决</li>
        </ul>
        <h3>影线 (Wick / Shadow)</h3>
        <p>影线代表被"拒绝"的价格区域。</p>
        <ul>
          <li><strong>长上影线</strong>：价格冲高后被卖方打压回来 → 上方卖压强</li>
          <li><strong>长下影线</strong>：价格下探后被买方推回来 → 下方买盘强</li>
          <li><strong>无影线</strong>：价格单方向持续推进，力量未被打断</li>
        </ul>
        <div class="callout">
          <div class="callout-title">Brooks 原则</div>
          <p>收盘价是最重要的价格。收盘在 K 线上部 1/3 说明多头占优，收盘在下部 1/3 说明空头占优，中间 1/3 则是多空均衡。</p>
        </div>
      </div>

      <div class="concept">
        <h2>K 线分类速查</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>类型</th><th>特征</th><th>市场含义</th></tr></thead>
            <tbody>
              <tr><td>趋势K线</td><td>大实体，小影线</td><td>方向明确，力量强</td></tr>
              <tr><td>十字星 (Doji)</td><td>实体极小，影线可长可短</td><td>多空均衡，犹豫信号</td></tr>
              <tr><td>内包K线 (Inside Bar)</td><td>高低点都在前一根K线内部</td><td>收缩、犹豫，等待突破方向</td></tr>
              <tr><td>外包K线 (Outside Bar)</td><td>高低点都超过前一根K线</td><td>波动扩张，多空双方都有突破</td></tr>
              <tr><td>影线反转K线</td><td>长影线 + 小实体</td><td>方向试探被拒绝</td></tr>
              <tr><td>双重内包 (ii)</td><td>连续两根内包K线</td><td>持续收缩，突破后的趋势往往很强</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="chart-demo">
        <svg width="620" height="200" viewBox="0 0 620 200">
          <line x1="0" y1="100" x2="620" y2="100" stroke="#1a1a22" stroke-dasharray="4"/>
          <rect x="25" y="40" width="40" height="100" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
          <line x1="45" y1="25" x2="45" y2="40" stroke="#2ecc71" stroke-width="1.5"/>
          <text x="45" y="165" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">趋势K线</text>
          <rect x="115" y="88" width="40" height="18" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/>
          <line x1="135" y1="35" x2="135" y2="88" stroke="#aaa" stroke-width="1.5"/>
          <line x1="135" y1="106" x2="135" y2="158" stroke="#aaa" stroke-width="1.5"/>
          <text x="135" y="180" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">十字星</text>
          <rect x="205" y="55" width="40" height="35" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
          <line x1="225" y1="55" x2="225" y2="150" stroke="#2ecc71" stroke-width="1.5"/>
          <text x="225" y="172" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">锤子线</text>
          <rect x="295" y="50" width="40" height="85" rx="2" fill="#3a1a1a" stroke="#d4a843" stroke-width="1.5" opacity=".35"/>
          <rect x="301" y="65" width="28" height="40" rx="2" fill="#3a1a1a" stroke="#d4a843" stroke-width="1.5"/>
          <text x="315" y="172" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">内包K线</text>
          <rect x="385" y="50" width="40" height="100" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
          <line x1="405" y1="150" x2="405" y2="168" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="405" y="188" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">空头K线</text>
          <rect x="475" y="75" width="32" height="45" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
          <rect x="469" y="40" width="44" height="100" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
          <text x="491" y="168" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">吞没形态</text>
          <rect x="555" y="82" width="22" height="20" rx="2" fill="#333" stroke="#aaa" stroke-width="1"/>
          <rect x="581" y="82" width="22" height="20" rx="2" fill="#333" stroke="#aaa" stroke-width="1"/>
          <text x="580" y="125" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">ii (双重内包)</text>
        </svg>
      </div>

      <div class="concept">
        <h2>更多 K 线类型图示</h2>
      </div>
      <div class="chart-demo">
        <svg width="620" height="220" viewBox="0 0 620 220">
          <!-- 大阴线 -->
          <rect x="25" y="40" width="40" height="100" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="45" y="165" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">大阴线</text>
          <!-- 纺锤线 -->
          <rect x="105" y="68" width="40" height="24" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/>
          <line x1="125" y1="30" x2="125" y2="68" stroke="#aaa" stroke-width="1.5"/>
          <line x1="125" y1="92" x2="125" y2="150" stroke="#aaa" stroke-width="1.5"/>
          <text x="125" y="175" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">纺锤线</text>
          <!-- 上吊线 -->
          <rect x="185" y="30" width="40" height="30" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
          <line x1="205" y1="60" x2="205" y2="150" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="205" y="175" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">上吊线</text>
          <!-- 倒锤子线 -->
          <rect x="265" y="100" width="40" height="30" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
          <line x1="285" y1="30" x2="285" y2="100" stroke="#2ecc71" stroke-width="1.5"/>
          <text x="285" y="175" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">倒锤子线</text>
          <!-- 蜻蜓十字 -->
          <rect x="345" y="78" width="40" height="8" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/>
          <line x1="365" y1="86" x2="365" y2="155" stroke="#aaa" stroke-width="1.5"/>
          <text x="365" y="180" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">蜻蜓十字</text>
          <!-- 墓碑十字 -->
          <rect x="425" y="130" width="40" height="8" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/>
          <line x1="445" y1="30" x2="445" y2="130" stroke="#aaa" stroke-width="1.5"/>
          <text x="445" y="180" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">墓碑十字</text>
          <!-- 长腿十字 -->
          <rect x="505" y="82" width="40" height="10" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/>
          <line x1="525" y1="20" x2="525" y2="82" stroke="#aaa" stroke-width="1.5"/>
          <line x1="525" y1="92" x2="525" y2="160" stroke="#aaa" stroke-width="1.5"/>
          <text x="525" y="185" text-anchor="middle" fill="#555" font-size="10" font-family="JetBrains Mono">长腿十字</text>
        </svg>
      </div>

      <div class="concept">
        <h2>K 线位置与含义</h2>
        <p>同一根 K 线出现在不同位置，含义完全不同：</p>
        <div class="chart-demo">
          <svg width="620" height="200" viewBox="0 0 620 200">
            <!-- 上升趋势中的锤子线 -->
            <text x="100" y="18" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">上升趋势中 → 回调买入信号</text>
            <polyline points="10,120 40,90 70,100 100,70 130,80" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="145" y="70" width="30" height="22" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <line x1="160" y1="92" x2="160" y2="140" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="160" y="158" text-anchor="middle" fill="#2ecc71" font-size="9" font-family="'JetBrains Mono'">锤子线</text>
            <polygon points="170,105 185,100 180,110" fill="#2ecc71"/>
            <!-- 下降趋势中的锤子线 -->
            <text x="420" y="18" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">下降趋势中 → 可能失败</text>
            <polyline points="330,40 360,60 390,50 420,80 450,70" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <rect x="465" y="70" width="30" height="22" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <line x1="480" y1="92" x2="480" y2="140" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="480" y="158" text-anchor="middle" fill="#aaa" font-size="9" font-family="'JetBrains Mono'">锤子线?</text>
            <text x="540" y="100" fill="#e74c3c" font-size="18" font-weight="700">✕</text>
          </svg>
        </div>
        <div class="callout">
          <div class="callout-title">核心原则</div>
          <p>不要孤立地看一根 K 线。<strong>同样的锤子线</strong>，在上升趋势回调中是买入信号，在下降趋势中可能只是短暂反弹。必须结合<strong>市场结构</strong>和<strong>K线位置</strong>来解读。</p>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                    PAGE: MARKET STRUCTURE                        -->
    <!-- ================================================================ -->
    <section class="page" id="page-structure">
      <div class="hero">
        <div class="hero-tag">Module 02</div>
        <h1>市场<em>结构</em></h1>
        <p>在交易任何形态之前，你必须先回答一个问题：市场现在处于什么状态？</p>
      </div>

      <div class="concept">
        <h2>三种市场状态</h2>
      </div>
      <div class="card-grid">
        <div class="card">
          <div class="card-label" style="color:var(--green)">Bull Trend</div>
          <h3>上升趋势</h3>
          <p>连续形成<strong>更高的高点 (HH)</strong> 和 <strong>更高的低点 (HL)</strong>。</p>
          <div style="margin-top:12px">
            <svg width="220" height="90" viewBox="0 0 220 90">
              <polyline points="10,70 40,50 60,60 100,30 120,42 160,15 180,28 210,8" fill="none" stroke="#2ecc71" stroke-width="2"/>
              <circle cx="40" cy="50" r="2.5" fill="#2ecc71"/><circle cx="100" cy="30" r="2.5" fill="#2ecc71"/><circle cx="160" cy="15" r="2.5" fill="#2ecc71"/>
            </svg>
          </div>
        </div>
        <div class="card">
          <div class="card-label" style="color:var(--red)">Bear Trend</div>
          <h3>下降趋势</h3>
          <p>连续形成<strong>更低的高点 (LH)</strong> 和 <strong>更低的低点 (LL)</strong>。</p>
          <div style="margin-top:12px">
            <svg width="220" height="90" viewBox="0 0 220 90">
              <polyline points="10,20 40,38 60,28 100,58 120,46 160,72 180,60 210,80" fill="none" stroke="#e74c3c" stroke-width="2"/>
              <circle cx="40" cy="38" r="2.5" fill="#e74c3c"/><circle cx="100" cy="58" r="2.5" fill="#e74c3c"/><circle cx="160" cy="72" r="2.5" fill="#e74c3c"/>
            </svg>
          </div>
        </div>
        <div class="card">
          <div class="card-label" style="color:var(--blue)">Trading Range</div>
          <h3>交易区间</h3>
          <p>价格在上下边界之间来回震荡。</p>
          <div style="margin-top:12px">
            <svg width="220" height="90" viewBox="0 0 220 90">
              <line x1="10" y1="20" x2="210" y2="20" stroke="#3498db" stroke-width="1" stroke-dasharray="4"/>
              <line x1="10" y1="70" x2="210" y2="70" stroke="#3498db" stroke-width="1" stroke-dasharray="4"/>
              <polyline points="10,45 40,25 70,55 100,30 130,60 160,25 190,55 210,40" fill="none" stroke="#888" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>通道类型</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>通道类型</th><th>特征</th><th>交易含义</th></tr></thead>
            <tbody>
              <tr><td>紧密通道</td><td>回调极小，K线紧密排列</td><td>强趋势，等回调再入场</td></tr>
              <tr><td>宽幅通道</td><td>有明显回调但仍保持方向</td><td>中等趋势，可顺势做波段</td></tr>
              <tr><td>楔形通道</td><td>通道逐渐收窄</td><td>趋势减弱，反转概率增加</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>结构性突破 (Break of Structure)</h2>
        <p>当价格突破前一个关键高点或低点时，意味着市场结构可能正在改变。</p>
        <div class="callout">
          <div class="callout-title">关键规则</div>
          <p>不要猜测市场状态——让它自己告诉你。如果连续两根趋势K线突破了之前的摆动高/低点，市场正在给你信号。</p>
        </div>
      </div>

      <div class="concept">
        <h2>高潮形态 (Climax)</h2>
        <p>高潮是趋势"走得太远太快"的信号，通常预示着趋势即将结束或进入交易区间。</p>
        <div class="pattern-grid">
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="80" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="40" y="60" width="16" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="60" y="40" width="16" height="35" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="80" y="20" width="16" height="40" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="100" y="10" width="16" height="20" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <text x="100" y="115" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="600">买入高潮</text>
            </svg>
            <h4>买入高潮 (Buy Climax)</h4>
            <p>趋势末端出现大阳线后立即反转，成交量放大但后续乏力。</p>
          </div>
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="20" width="16" height="25" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="40" y="25" width="16" height="30" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="60" y="30" width="16" height="35" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="80" y="40" width="16" height="40" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="100" y="80" width="16" height="20" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <text x="100" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">卖出高潮</text>
            </svg>
            <h4>卖出高潮 (Sell Climax)</h4>
            <p>趋势末端出现大阴线后立即反转，是潜在的底部信号。</p>
          </div>
        </div>
        <div class="callout">
          <div class="callout-title">高潮识别要点</div>
          <p>高潮通常伴随<strong>通道线过度穿透</strong>和<strong>大成交量</strong>。大多数高潮结束后进入交易区间，而非直接反转趋势。</p>
        </div>
      </div>

      <div class="concept">
        <h2>收盘价的重要性</h2>
        <p>Brooks 反复强调：<strong>收盘价是最重要的价格</strong>。它代表了多空争夺的最终结果。</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>收盘位置</th><th>含义</th><th>交易指导</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--green)">上部 1/3</td><td>多头占优，买方控制</td><td>倾向做多</td></tr>
              <tr><td style="color:var(--text2)">中间 1/3</td><td>多空均衡，市场犹豫</td><td>等待确认</td></tr>
              <tr><td style="color:var(--red)">下部 1/3</td><td>空头占优，卖方控制</td><td>倾向做空</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                       PAGE: SIGNAL BARS                          -->
    <!-- ================================================================ -->
    <section class="page" id="page-signals">
      <div class="hero">
        <div class="hero-tag">Module 03</div>
        <h1>信号 K 线</h1>
        <p>信号 K 线是交易的"扳机"——它告诉你入场的时机和方向。</p>
      </div>
      <div class="concept">
        <h2>信号 K 线 vs 入场 K 线</h2>
        <div class="card-grid">
          <div class="card">
            <div class="card-label">Signal Bar</div>
            <h3>信号 K 线</h3>
            <p>提供交易方向的提示。比如在支撑位出现的阳线锤子线，暗示可能反弹。</p>
          </div>
          <div class="card">
            <div class="card-label">Entry Bar</div>
            <h3>入场 K 线</h3>
            <p>在信号K线之后出现，突破信号K线的高点（做多）或低点（做空），触发入场。</p>
          </div>
        </div>
      </div>
      <div class="concept">
        <h2>优质信号 K 线的特征</h2>
        <ul>
          <li><strong>大实体</strong>：收盘价接近最高/最低价，几乎没有反向影线</li>
          <li><strong>位于关键位置</strong>：支撑/阻力位、趋势线、通道边界</li>
          <li><strong>与趋势方向一致</strong>：顺势信号比逆势信号成功率更高</li>
          <li><strong>后续确认</strong>：下一根 K 线快速向预期方向移动</li>
        </ul>
        <div class="callout">
          <div class="callout-title">Brooks 统计</div>
          <p>大约只有 60% 的信号K线会产生有效的入场K线。你需要接受大量的假突破。</p>
        </div>
      </div>

      <div class="concept">
        <h2>二次入场 (Second Entry)</h2>
        <p>二次入场是 Brooks 体系中最可靠的入场信号之一。<strong>第二次测试几乎总是比第一次更可靠。</strong></p>
        <div class="chart-demo">
          <svg width="660" height="220" viewBox="0 0 660 220">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">二次入场 (Second Entry)</text>
            <!-- 第一次测试 -->
            <polyline points="30,150 60,130 90,110 120,90 150,70 180,85 210,100 240,110" fill="none" stroke="#888" stroke-width="1.5"/>
            <circle cx="240" cy="110" r="5" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <text x="240" y="130" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="600" font-family="'Noto Sans SC',sans-serif">第一次入场</text>
            <!-- 回调 -->
            <polyline points="240,110 270,100 300,85 330,75" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <!-- 第二次测试 -->
            <polyline points="330,75 360,85 390,95 420,105 450,110" fill="none" stroke="#888" stroke-width="1.5"/>
            <circle cx="450" cy="110" r="5" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <text x="450" y="130" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600" font-family="'Noto Sans SC',sans-serif">第二次入场</text>
            <!-- 反转上涨 -->
            <polyline points="450,110 480,95 510,80 540,65 570,50 600,40" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <!-- 说明 -->
            <rect x="460" y="140" width="190" height="70" rx="8" fill="rgba(46,204,113,.06)" stroke="#2ecc71" stroke-width="1"/>
            <text x="555" y="165" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">二次入场优势</text>
            <text x="555" y="182" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 第二次测试更可靠</text>
            <text x="555" y="197" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 价格通常更好或相同</text>
          </svg>
        </div>
        <div class="callout">
          <div class="callout-title">二次入场规则</div>
          <p>如果第二次入场的价格比第一次更好，要警惕可能是陷阱。好的二次入场通常价格相同或更差——这说明市场在给你更多信息，而不是给你更好的价格。</p>
        </div>
      </div>

      <div class="concept">
        <h2>强趋势棒作为信号</h2>
        <p>在趋势的尖峰阶段，<strong>强趋势棒本身就是信号</strong>。不需要等待反转K线。</p>
        <div class="pattern-grid">
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="80" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="40" y="60" width="16" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="60" y="40" width="16" height="32" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="80" y="20" width="16" height="35" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <circle cx="88" cy="15" r="4" fill="none" stroke="#d4a843" stroke-width="2"/>
              <text x="100" y="115" text-anchor="middle" fill="#d4a843" font-size="9" font-weight="600">尖峰阶段追入</text>
            </svg>
            <h4>尖峰阶段追入</h4>
            <p>连续大趋势棒出现时，直接在市场价入场，不要等待回调。</p>
          </div>
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="60" width="16" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="40" y="50" width="16" height="20" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
              <rect x="60" y="40" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="80" y="30" width="16" height="22" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
              <rect x="100" y="20" width="16" height="20" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <circle cx="108" cy="15" r="4" fill="none" stroke="#d4a843" stroke-width="2"/>
              <text x="100" y="115" text-anchor="middle" fill="#d4a843" font-size="9" font-weight="600">通道阶段回调入</text>
            </svg>
            <h4>通道阶段回调入</h4>
            <p>通道阶段等待小回调后入场，不要在通道顶部追入。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                        PAGE: PATTERNS                            -->
    <!-- ================================================================ -->
    <section class="page" id="page-patterns">
      <div class="hero">
        <div class="hero-tag">Module 04</div>
        <h1>K 线<em>形态</em></h1>
        <p>形态是价格行为交易者的"词汇表"。</p>
      </div>
      <div class="tabs">
        <button class="tab-btn active" onclick="switchTab(this,'tab-single')">单根形态</button>
        <button class="tab-btn" onclick="switchTab(this,'tab-double')">双根形态</button>
        <button class="tab-btn" onclick="switchTab(this,'tab-triple')">三根形态</button>
      </div>
      <div class="tab-content active" id="tab-single">
        <div class="pattern-grid">
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="10" width="24" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><line x1="25" y1="50" x2="25" y2="75" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">锤子线</h4><p>长下影线 + 小实体，反转信号</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="30" width="24" height="40" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><line x1="25" y1="5" x2="25" y2="30" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">射击之星</h4><p>长上影线 + 小实体，顶部反转</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="33" width="24" height="14" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/><line x1="25" y1="8" x2="25" y2="33" stroke="#aaa" stroke-width="1.5"/><line x1="25" y1="47" x2="25" y2="72" stroke="#aaa" stroke-width="1.5"/></svg><h4 class="tag-neutral">十字星</h4><p>开盘≈收盘，多空均衡</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="15" width="24" height="55" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">大阳线</h4><p>强多头推进</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="15" width="24" height="55" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">大阴线</h4><p>强空头推进</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="12" width="24" height="25" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><line x1="25" y1="37" x2="25" y2="70" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">上吊线</h4><p>顶部出现的锤子线形态，反转信号</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="40" width="24" height="25" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><line x1="25" y1="10" x2="25" y2="40" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">倒锤子线</h4><p>底部出现，长上影线试探上方压力</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="33" width="24" height="14" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/><line x1="25" y1="12" x2="25" y2="33" stroke="#aaa" stroke-width="1.5"/><line x1="25" y1="47" x2="25" y2="68" stroke="#aaa" stroke-width="1.5"/></svg><h4 class="tag-neutral">纺锤线</h4><p>小实体+长影线，多空犹豫</p></div>
          <div class="pattern-card"><svg width="50" height="80" viewBox="0 0 50 80"><rect x="13" y="52" width="24" height="8" rx="2" fill="#333" stroke="#aaa" stroke-width="1.5"/><line x1="25" y1="8" x2="25" y2="52" stroke="#aaa" stroke-width="1.5"/></svg><h4 class="tag-neutral">墓碑十字</h4><p>无下影线，上方被完全拒绝</p></div>
        </div>
      </div>
      <div class="tab-content" id="tab-double">
        <div class="pattern-grid">
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="25" width="26" height="38" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="38" y="10" width="36" height="58" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">看涨吞没</h4><p>阳线完全覆盖阴线</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="10" width="26" height="58" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="38" y="22" width="36" height="44" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">看跌吞没</h4><p>阴线完全覆盖阳线</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="15" width="28" height="50" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="33" y="28" width="18" height="24" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1" opacity=".5"/><rect x="55" y="28" width="18" height="24" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1" opacity=".5"/></svg><h4 class="tag-bearish">双重内包 ii</h4><p>连续收缩，突破概率高</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="20" width="26" height="50" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="38" y="30" width="36" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><line x1="56" y1="10" x2="56" y2="30" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">刺透形态</h4><p>阳线开盘低于前阴线低点，收盘穿入阴线实体50%以上</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="10" width="26" height="50" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="38" y="15" width="36" height="50" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><line x1="56" y1="65" x2="56" y2="78" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">乌云盖顶</h4><p>阴线开盘高于前阳线高点，收盘穿入阳线实体50%以上</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="20" width="26" height="40" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="38" y="32" width="36" height="22" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">看涨孕线</h4><p>阳线完全包含在前阴线实体内，反转信号</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="20" width="26" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="38" y="32" width="36" height="22" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">看跌孕线</h4><p>阴线完全包含在前阳线实体内，反转信号</p></div>
          <div class="pattern-card"><svg width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="25" width="26" height="35" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="38" y="25" width="26" height="35" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><line x1="18" y1="18" x2="18" y2="25" stroke="#2ecc71" stroke-width="1"/><line x1="51" y1="18" x2="51" y2="25" stroke="#e74c3c" stroke-width="1"/><line x1="32" y1="15" x2="54" y2="15" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/></svg><h4 class="tag-bearish">镊子顶</h4><p>两根K线高点几乎相同，顶部阻力</p></div>
        </div>
      </div>
      <div class="tab-content" id="tab-triple">
        <div class="pattern-grid">
          <div class="pattern-card"><svg width="110" height="80" viewBox="0 0 110 80"><rect x="5" y="45" width="22" height="25" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="37" y="38" width="22" height="16" rx="2" fill="#444" stroke="#aaa" stroke-width="1"/><rect x="69" y="12" width="22" height="42" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">晨星</h4><p>阴线 + 小实体 + 阳线</p></div>
          <div class="pattern-card"><svg width="110" height="80" viewBox="0 0 110 80"><rect x="5" y="12" width="22" height="42" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="37" y="32" width="22" height="16" rx="2" fill="#444" stroke="#aaa" stroke-width="1"/><rect x="69" y="45" width="22" height="25" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">暮星</h4><p>阳线 + 小实体 + 阴线</p></div>
          <div class="pattern-card"><svg width="110" height="80" viewBox="0 0 110 80"><rect x="5" y="42" width="22" height="28" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="37" y="28" width="22" height="32" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="69" y="12" width="22" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">三白兵</h4><p>连续三根递进阳线</p></div>
          <div class="pattern-card"><svg width="110" height="80" viewBox="0 0 110 80"><rect x="5" y="12" width="22" height="28" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="37" y="22" width="22" height="32" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="69" y="38" width="22" height="36" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">三只乌鸦</h4><p>连续三根递进阴线</p></div>
          <div class="pattern-card" style="min-width:280px"><svg width="200" height="80" viewBox="0 0 200 80"><rect x="5" y="15" width="18" height="50" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/><rect x="33" y="30" width="14" height="20" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/><rect x="53" y="32" width="14" height="16" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/><rect x="73" y="34" width="14" height="14" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/><rect x="97" y="10" width="18" height="50" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/></svg><h4 class="tag-bullish">上升三法</h4><p>大阳线 + 2-3根小阴线回调 + 大阳线突破</p></div>
          <div class="pattern-card" style="min-width:280px"><svg width="200" height="80" viewBox="0 0 200 80"><rect x="5" y="15" width="18" height="50" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/><rect x="33" y="28" width="14" height="16" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/><rect x="53" y="30" width="14" height="14" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/><rect x="73" y="32" width="14" height="12" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/><rect x="97" y="15" width="18" height="50" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/></svg><h4 class="tag-bearish">下降三法</h4><p>大阴线 + 2-3根小阳线反弹 + 大阴线突破</p></div>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                        PAGE: SETUPS                              -->
    <!-- ================================================================ -->
    <section class="page" id="page-setups">
      <div class="hero">
        <div class="hero-tag">Module 05</div>
        <h1>交易<em>设置</em></h1>
        <p>知道形态之后，你需要知道在什么场景下使用它们。</p>
      </div>
      <div class="card-grid">
        <div class="card">
          <div class="card-label">Setup 1</div><h3>趋势突破入场</h3>
          <p>价格突破关键水平（前高/前低、通道边界、交易区间）时入场。</p>
          <div class="callout" style="margin-top:14px"><div class="callout-title">入场条件</div><p>① 突破K线为强趋势K线<br>② 收盘价在突破方向极端位<br>③ 下一根K线确认延续</p></div>
        </div>
        <div class="card">
          <div class="card-label">Setup 2</div><h3>趋势回调入场</h3>
          <p>等待趋势中回调结束时入场。风险回报比通常最优。</p>
          <div class="callout" style="margin-top:14px"><div class="callout-title">入场条件</div><p>① 趋势已经确立<br>② 回调到均线/支撑位<br>③ 出现反转信号K线</p></div>
        </div>
        <div class="card">
          <div class="card-label">Setup 3</div><h3>二次测试入场</h3>
          <p>第一次测试后反转，再次测试确认时入场更安全。</p>
          <div class="callout" style="margin-top:14px"><div class="callout-title">入场条件</div><p>① 第一次测试已产生反转<br>② 价格再次接近该水平<br>③ 未能创新高/低</p></div>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                     PAGE: PROBABILITY                             -->
    <!-- ================================================================ -->
    <section class="page" id="page-probability">
      <div class="hero">
        <div class="hero-tag">Module 06</div>
        <h1>概率<em>思维</em></h1>
        <p>交易不是预测游戏，它是一场概率游戏。</p>
      </div>
      <div class="concept">
        <h2>核心公式</h2>
        <div class="callout"><div class="callout-title">期望值</div><p><strong>期望值 = (胜率 × 平均盈利) - (败率 × 平均亏损)</strong><br><br>只要期望值为正，你不需要每次都对。</p></div>
      </div>
      <div class="concept">
        <h2>概率数据参考</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>信号类型</th><th>大约胜率</th><th>盈亏比</th><th>期望值</th></tr></thead>
            <tbody>
              <tr><td>趋势中第一根信号K线</td><td>~60%</td><td>1:1</td><td style="color:var(--green)">正</td></tr>
              <tr><td>第二次入场机会</td><td>~40%</td><td>1:2+</td><td style="color:var(--green)">正</td></tr>
              <tr><td>交易区间内反转信号</td><td>~50%</td><td>1:1</td><td style="color:var(--blue)">中性</td></tr>
              <tr><td>逆势第一根反转K线</td><td>~30%</td><td>1:3+</td><td style="color:var(--blue)">中性偏正</td></tr>
              <tr><td>强趋势中逆势信号</td><td>~20%</td><td>变化大</td><td style="color:var(--red)">通常为负</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="concept">
        <h2>风险管理铁律</h2>
        <ul>
          <li><strong>每笔交易风险不超过账户的 1-2%</strong></li>
          <li><strong>止损设在信号K线的反方向</strong></li>
          <li><strong>不要移动止损到更远处</strong></li>
          <li><strong>接受合理的止损</strong> — 止损是交易成本，不是失败</li>
        </ul>
      </div>

      <div class="concept">
        <h2>交易者方程 (Trader's Equation)</h2>
        <p>Brooks 强调，每笔交易都必须满足交易者方程才能入场：</p>
        <div class="callout">
          <div class="callout-title">交易者方程</div>
          <p><strong>盈利概率 × 盈利金额 > 亏损概率 × 亏损金额</strong></p>
          <p>或者：<strong>胜率 × 平均盈利 > 败率 × 平均亏损</strong></p>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>情况</th><th>胜率</th><th>盈亏比</th><th>是否交易</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--green)">高胜率 + 低盈亏比</td><td>70%</td><td>1:0.5</td><td style="color:var(--green)">✓ 可以</td></tr>
              <tr><td style="color:var(--green)">中胜率 + 中盈亏比</td><td>50%</td><td>1:1</td><td style="color:var(--green)">✓ 可以</td></tr>
              <tr><td style="color:var(--green)">低胜率 + 高盈亏比</td><td>30%</td><td>1:3</td><td style="color:var(--green)">✓ 可以</td></tr>
              <tr><td style="color:var(--red)">低胜率 + 低盈亏比</td><td>30%</td><td>1:0.5</td><td style="color:var(--red)">✗ 不可</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>方向性概率</h2>
        <p>Brooks 指出，市场在任何时刻向上和向下移动的概率都接近 <strong>50/50</strong>。这意味着：</p>
        <ul>
          <li><strong>不要过度自信</strong> — 任何方向都有可能</li>
          <li><strong>关注风险回报</strong> — 既然概率相近，盈亏比决定成败</li>
          <li><strong>顺势交易</strong> — 趋势中顺势方向的概率略高（55-60%）</li>
          <li><strong>接受不确定性</strong> — 你不需要知道下一步，只需要管理好风险</li>
        </ul>
      </div>

      <div class="concept">
        <h2>优势 (Edge) 的本质</h2>
        <p>交易优势是微小且短暂的。Brooks 解释道：</p>
        <div class="callout">
          <div class="callout-title">关于优势</div>
          <p>优势总是很小且短暂的，因为它需要有人站在另一边。市场充满了聪明的交易者，他们不会让优势变得很大且持久。</p>
        </div>
        <ul>
          <li><strong>微小</strong> — 典型优势只有 5-15% 的超额回报</li>
          <li><strong>短暂</strong> — 市场会迅速发现并消除明显的优势</li>
          <li><strong>需要坚持</strong> — 只有通过大量交易才能实现优势</li>
          <li><strong>需要纪律</strong> — 偏离策略会消除你的优势</li>
        </ul>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                  PAGE: TRENDLINES & CHANNELS                     -->
    <!-- ================================================================ -->
    <section class="page" id="page-trendlines">
      <div class="hero">
        <div class="hero-tag">Module 07 · 进阶</div>
        <h1>趋势线与<em>通道</em></h1>
        <p>趋势线是价格行为交易中最基础也最强大的工具之一。正确画出趋势线，能帮你找到精确的入场点。</p>
      </div>

      <div class="concept">
        <h2>趋势线的画法</h2>
        <p>Brooks 的趋势线画法与传统技术分析有所不同，更注重<strong>市场结构</strong>而非简单连线：</p>
        <div class="chart-demo">
          <svg width="600" height="200" viewBox="0 0 600 200">
            <!-- 上升趋势线 -->
            <text x="150" y="18" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">上升趋势线：连接摆动低点</text>
            <polyline points="20,140 50,100 80,120 110,70 140,90 170,50 200,70 230,30 260,50" fill="none" stroke="#888" stroke-width="1.5"/>
            <circle cx="50" cy="100" r="4" fill="#2ecc71" stroke="#2ecc71" stroke-width="1.5"/>
            <circle cx="110" cy="70" r="4" fill="#2ecc71" stroke="#2ecc71" stroke-width="1.5"/>
            <circle cx="170" cy="50" r="4" fill="#2ecc71" stroke="#2ecc71" stroke-width="1.5"/>
            <circle cx="230" cy="30" r="4" fill="#2ecc71" stroke="#2ecc71" stroke-width="1.5"/>
            <line x1="30" y1="110" x2="270" y2="20" stroke="#2ecc71" stroke-width="2" stroke-dasharray="6"/>
            <text x="270" y="28" fill="#2ecc71" font-size="9" font-family="'JetBrains Mono'">趋势线</text>
            <!-- 下降趋势线 -->
            <text x="450" y="18" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">下降趋势线：连接摆动高点</text>
            <polyline points="320,50 350,90 380,70 410,120 440,100 470,145 500,125 530,165 560,145" fill="none" stroke="#888" stroke-width="1.5"/>
            <circle cx="350" cy="90" r="4" fill="#e74c3c" stroke="#e74c3c" stroke-width="1.5"/>
            <circle cx="410" cy="120" r="4" fill="#e74c3c" stroke="#e74c3c" stroke-width="1.5"/>
            <circle cx="470" cy="145" r="4" fill="#e74c3c" stroke="#e74c3c" stroke-width="1.5"/>
            <circle cx="530" cy="165" r="4" fill="#e74c3c" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="330" y1="80" x2="570" y2="175" stroke="#e74c3c" stroke-width="2" stroke-dasharray="6"/>
            <text x="570" y="170" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">趋势线</text>
          </svg>
        </div>
        <h3>上升趋势线</h3>
        <ul>
          <li>连接连续的<strong>摆动低点 (Swing Lows)</strong></li>
          <li>至少需要两个低点确认，三个以上更可靠</li>
          <li>斜率越陡，趋势越强但越容易被突破</li>
        </ul>
        <h3>下降趋势线</h3>
        <ul>
          <li>连接连续的<strong>摆动高点 (Swing Highs)</strong></li>
          <li>同样至少两个高点确认</li>
          <li>被突破后常常成为反向支撑</li>
        </ul>
        <div class="callout"><div class="callout-title">Brooks 观点</div><p>不要过度拟合趋势线。如果需要勉强连线才能让趋势线"看起来对"，那说明市场并没有明确的趋势。Brooks 更看重<strong>K线之间的结构关系</strong>而非完美的线条。</p></div>
      </div>

      <div class="concept">
        <h2>趋势线通道 (Trend Channel)</h2>
        <p>在趋势线的对侧画一条平行线，就形成了趋势通道。通道宽度揭示了市场的波动特征：</p>
        <div class="chart-demo">
          <svg width="600" height="190" viewBox="0 0 600 190">
            <!-- 紧密通道 -->
            <text x="90" y="16" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">紧密通道</text>
            <line x1="10" y1="55" x2="170" y2="20" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5"/>
            <line x1="10" y1="70" x2="170" y2="35" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5"/>
            <polyline points="15,62 35,55 55,60 75,48 95,52 115,40 135,44 155,32" fill="none" stroke="#888" stroke-width="1.5"/>
            <text x="90" y="95" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">回调极小</text>
            <!-- 宽幅通道 -->
            <text x="310" y="16" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">宽幅通道</text>
            <line x1="210" y1="50" x2="410" y2="25" stroke="#d4a843" stroke-width="1.5" stroke-dasharray="5"/>
            <line x1="210" y1="85" x2="410" y2="60" stroke="#d4a843" stroke-width="1.5" stroke-dasharray="5"/>
            <polyline points="215,55 235,50 255,72 275,42 295,65 315,38 335,62 355,35 375,58 395,30" fill="none" stroke="#888" stroke-width="1.5"/>
            <text x="310" y="105" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">有明显回调</text>
            <!-- 楔形通道 -->
            <text x="510" y="16" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">楔形通道</text>
            <line x1="430" y1="80" x2="590" y2="50" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="5"/>
            <line x1="430" y1="40" x2="590" y2="55" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="5"/>
            <polyline points="435,50 455,70 475,52 495,62 515,54 535,58 555,55 575,53" fill="none" stroke="#888" stroke-width="1.5"/>
            <text x="510" y="105" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">通道收窄</text>
            <!-- 底部注释 -->
            <text x="90" y="135" text-anchor="middle" fill="#2ecc71" font-size="10" font-family="'Noto Sans SC',sans-serif">→ 强趋势，等回调再入场</text>
            <text x="310" y="135" text-anchor="middle" fill="#d4a843" font-size="10" font-family="'Noto Sans SC',sans-serif">→ 中等趋势，可做波段</text>
            <text x="510" y="135" text-anchor="middle" fill="#e74c3c" font-size="10" font-family="'Noto Sans SC',sans-serif">→ 即将突破，等待方向</text>
          </svg>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>通道特征</th><th>市场含义</th><th>交易策略</th></tr></thead>
            <tbody>
              <tr><td>窄幅通道</td><td>强单边趋势，几乎没有回调</td><td>在通道内顺势入场，不要逆势</td></tr>
              <tr><td>中等通道</td><td>正常趋势，有规律回调</td><td>回调到通道下轨买入，上轨卖出</td></tr>
              <tr><td>宽幅通道</td><td>趋势减弱，波动加大</td><td>可以做双向交易，类似交易区间</td></tr>
              <tr><td>楔形通道</td><td>通道收窄，即将突破</td><td>等待突破方向再入场</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>趋势线突破的交易</h2>
        <p>趋势线突破是重要的市场结构变化信号，但 Brooks 提醒注意以下要点：</p>
        <div class="chart-demo">
          <svg width="600" height="200" viewBox="0 0 600 200">
            <!-- 有效突破 -->
            <text x="150" y="18" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">有效突破：收盘穿越 + 确认</text>
            <polyline points="20,50 50,70 80,45 110,65 140,40 170,60 200,80" fill="none" stroke="#888" stroke-width="1.5"/>
            <line x1="20" y1="50" x2="210" y2="80" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="5"/>
            <text x="210" y="75" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">趋势线</text>
            <rect x="210" y="85" width="20" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="2"/>
            <text x="220" y="140" text-anchor="middle" fill="#2ecc71" font-size="8" font-family="'JetBrains Mono'">收盘突破</text>
            <rect x="240" y="60" width="20" height="30" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="250" y="105" text-anchor="middle" fill="#2ecc71" font-size="8" font-family="'JetBrains Mono'">确认K线</text>
            <text x="150" y="180" text-anchor="middle" fill="#2ecc71" font-size="10" font-family="'Noto Sans SC',sans-serif">✓ 收盘穿越 + 下一根确认 → 有效</text>
            <!-- 假突破 -->
            <text x="450" y="18" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">假突破：盘中刺穿后回落</text>
            <polyline points="320,50 350,70 380,45 410,65 440,40 470,60 500,80" fill="none" stroke="#888" stroke-width="1.5"/>
            <line x1="320" y1="50" x2="510" y2="80" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="5"/>
            <text x="510" y="75" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">趋势线</text>
            <rect x="500" y="45" width="20" height="45" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="2"/>
            <line x1="510" y1="45" x2="510" y2="35" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="510" y1="90" x2="510" y2="100" stroke="#e74c3c" stroke-width="1.5"/>
            <text x="510" y="115" text-anchor="middle" fill="#e74c3c" font-size="8" font-family="'JetBrains Mono'">刺穿后收回</text>
            <rect x="530" y="85" width="20" height="30" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
            <text x="540" y="130" text-anchor="middle" fill="#e74c3c" font-size="8" font-family="'JetBrains Mono'">恢复下跌</text>
            <text x="450" y="180" text-anchor="middle" fill="#e74c3c" font-size="10" font-family="'Noto Sans SC',sans-serif">✕ 仅盘中刺穿 → 假突破，等回测</text>
          </svg>
        </div>
        <div class="scenario-box">
          <div class="scenario-header"><span class="scenario-num">规则</span><span class="scenario-title">趋势线突破的有效性判断</span></div>
          <div class="scenario-body">
            <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>收盘突破</strong>：K线必须<strong>收盘</strong>穿越趋势线，仅盘中刺穿不算有效突破。</div></div>
            <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>后续确认</strong>：突破后的下一根K线应该继续朝突破方向运动。</div></div>
            <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>假突破率高</strong>：首次趋势线突破大约有 60% 的概率是假突破，会回测趋势线后恢复原趋势。</div></div>
            <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>等待回测</strong>：更安全的做法是等趋势线突破后的回测（Pullback），在回测结束时入场。</div></div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="concept">
        <h2>实战技巧总结</h2>
        <div class="card-grid">
          <div class="card">
            <div class="card-label" style="color:var(--green)">做多策略</div>
            <h3>趋势线下轨买入</h3>
            <p>在上升趋势中，等待价格回调到趋势线下轨附近，出现看涨反转K线时入场做多。止损设在趋势线下方。</p>
          </div>
          <div class="card">
            <div class="card-label" style="color:var(--red)">做空策略</div>
            <h3>趋势线上轨做空</h3>
            <p>在下降趋势中，等待价格反弹到趋势线上轨附近，出现看跌反转K线时入场做空。止损设在趋势线上方。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                        PAGE: GAPS                                -->
    <!-- ================================================================ -->
    <section class="page" id="page-gap">
      <div class="hero">
        <div class="hero-tag">Module 08 · 进阶</div>
        <h1>缺口<em>理论</em></h1>
        <p>缺口（Gap）是价格行为中最直观的多空力量表现。不同类型的缺口传递完全不同的市场信息。</p>
      </div>

      <div class="concept">
        <h2>缺口的定义</h2>
        <p>当一根K线的最低价高于前一根K线的最高价（向上缺口），或最高价低于前一根K线的最低价（向下缺口）时，就产生了缺口。</p>
        <div class="chart-demo">
          <svg width="600" height="150" viewBox="0 0 600 150">
            <!-- 向上缺口 -->
            <text x="150" y="18" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">向上缺口 (Gap Up)</text>
            <rect x="30" y="70" width="30" height="50" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="80" y="20" width="30" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <line x1="25" y1="70" x2="115" y2="70" stroke="#aaa" stroke-width="0.5" stroke-dasharray="3"/>
            <line x1="25" y1="60" x2="115" y2="60" stroke="#aaa" stroke-width="0.5" stroke-dasharray="3"/>
            <rect x="60" y="60" width="20" height="10" rx="1" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="2"/>
            <text x="70" y="55" text-anchor="middle" fill="#2ecc71" font-size="9" font-family="'JetBrains Mono'">缺口</text>
            <text x="45" y="135" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">前K线最高</text>
            <text x="95" y="135" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">后K线最低</text>
            <polygon points="155,55 170,45 165,58" fill="#2ecc71"/>
            <!-- 向下缺口 -->
            <text x="450" y="18" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">向下缺口 (Gap Down)</text>
            <rect x="330" y="20" width="30" height="50" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
            <rect x="380" y="80" width="30" height="40" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="325" y1="70" x2="415" y2="70" stroke="#aaa" stroke-width="0.5" stroke-dasharray="3"/>
            <line x1="325" y1="80" x2="415" y2="80" stroke="#aaa" stroke-width="0.5" stroke-dasharray="3"/>
            <rect x="360" y="70" width="20" height="10" rx="1" fill="none" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="2"/>
            <text x="370" y="67" text-anchor="middle" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">缺口</text>
            <text x="345" y="135" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">前K线最低</text>
            <text x="395" y="135" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">后K线最高</text>
            <polygon points="455,95 470,105 465,92" fill="#e74c3c"/>
          </svg>
        </div>
        <div class="callout-blue callout">
          <div class="callout-title">Brooks 视角</div>
          <p>在日内交易中（尤其是5分钟图），缺口相对少见。但在日线图上，缺口蕴含着重要的交易信息。Brooks 特别关注<strong>日线图缺口</strong>和<strong>开盘缺口</strong>的交易策略。</p>
        </div>
      </div>

      <div class="concept">
        <h2>四种缺口类型</h2>
        <div class="chart-demo">
          <svg width="600" height="200" viewBox="0 0 600 200">
            <!-- 突破缺口 -->
            <text x="90" y="16" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">突破缺口</text>
            <line x1="10" y1="90" x2="80" y2="90" stroke="#3498db" stroke-width="1" stroke-dasharray="3"/>
            <polyline points="10,100 30,95 50,100 70,95 90,70" fill="none" stroke="#888" stroke-width="1.2"/>
            <rect x="90" y="55" width="20" height="30" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="120" y="40" width="20" height="20" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="90" y="85" width="20" height="5" fill="none" stroke="#d4a843" stroke-width="1" stroke-dasharray="2"/>
            <text x="100" y="100" text-anchor="middle" fill="#d4a843" font-size="8" font-family="'JetBrains Mono'">缺口</text>
            <polyline points="140,38 155,30 170,25" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="90" y="140" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">突破关键位</text>
            <text x="90" y="155" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">不回补</text>
            <!-- 测量缺口 -->
            <text x="260" y="16" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">测量缺口</text>
            <polyline points="180,100 200,85 220,75 240,65 270,50" fill="none" stroke="#888" stroke-width="1.2"/>
            <rect x="270" y="35" width="20" height="20" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="270" y="55" width="20" height="5" fill="none" stroke="#2ecc71" stroke-width="1" stroke-dasharray="2"/>
            <text x="280" y="68" text-anchor="middle" fill="#2ecc71" font-size="8" font-family="'JetBrains Mono'">缺口</text>
            <polyline points="290,32 305,25 320,20" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <line x1="190" y1="100" x2="280" y2="42" stroke="#2ecc71" stroke-width="0.8" stroke-dasharray="3"/>
            <line x1="280" y1="42" x2="360" y2="15" stroke="#2ecc71" stroke-width="0.8" stroke-dasharray="3"/>
            <text x="230" y="125" fill="#2ecc71" font-size="8" font-family="'JetBrains Mono'">A</text>
            <text x="320" y="55" fill="#2ecc71" font-size="8" font-family="'JetBrains Mono'">A ≈ B</text>
            <text x="260" y="155" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">趋势中段，A≈B</text>
            <!-- 竭尽缺口 -->
            <text x="420" y="16" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">竭尽缺口</text>
            <polyline points="350,100 370,75 390,55 410,40 430,30" fill="none" stroke="#888" stroke-width="1.2"/>
            <rect x="430" y="15" width="20" height="20" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="430" y="35" width="20" height="5" fill="none" stroke="#e74c3c" stroke-width="1" stroke-dasharray="2"/>
            <text x="440" y="48" text-anchor="middle" fill="#e74c3c" font-size="8" font-family="'JetBrains Mono'">缺口</text>
            <polyline points="450,18 460,30 470,50 480,70" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <text x="420" y="125" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">趋势末端</text>
            <text x="420" y="140" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">反转信号</text>
            <!-- 普通缺口 -->
            <text x="550" y="16" text-anchor="middle" fill="#3498db" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">普通缺口</text>
            <polyline points="500,60 515,55 530,65 545,50" fill="none" stroke="#888" stroke-width="1.2"/>
            <rect x="545" y="35" width="20" height="20" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="545" y="55" width="20" height="5" fill="none" stroke="#3498db" stroke-width="1" stroke-dasharray="2"/>
            <text x="555" y="68" text-anchor="middle" fill="#3498db" font-size="8" font-family="'JetBrains Mono'">缺口</text>
            <polyline points="565,38 575,50 585,55" fill="none" stroke="#888" stroke-width="1.2"/>
            <rect x="565" y="45" width="20" height="15" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <text x="575" y="73" text-anchor="middle" fill="#3498db" font-size="8" font-family="'JetBrains Mono'">回补</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">区间内</text>
            <text x="550" y="140" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">很快回补</text>
          </svg>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>缺口类型</th><th>发生位置</th><th>特征</th><th>交易策略</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--accent)"><strong>突破缺口</strong><br>Breakaway Gap</td><td>价格突破关键水平时</td><td>通常伴随大成交量，缺口不会被回补</td><td>缺口方向做单，等待回测缺口边缘入场</td></tr>
              <tr><td style="color:var(--green)"><strong>测量缺口</strong><br>Measuring Gap</td><td>趋势中段</td><td>也叫"持续缺口"，趋势仍在加速</td><td>继续持有头寸，用缺口测量趋势剩余空间</td></tr>
              <tr><td style="color:var(--red)"><strong>竭尽缺口</strong><br>Exhaustion Gap</td><td>趋势末端</td><td>成交量放大但后续乏力</td><td>准备反转，不要追趋势</td></tr>
              <tr><td style="color:var(--blue)"><strong>普通缺口</strong><br>Common Gap</td><td>交易区间内</td><td>通常很快被回补，无特殊意义</td><td>反向交易，利用缺口回补</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>缺口回补 (Gap Fill)</h2>
        <p>当价格回到缺口起点，完全覆盖缺口区域时，称为"缺口回补"。</p>
        <div class="chart-demo">
          <svg width="600" height="160" viewBox="0 0 600 160">
            <text x="300" y="16" text-anchor="middle" fill="#d4a843" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">缺口回补过程</text>
            <!-- 向上缺口回补 -->
            <text x="150" y="40" text-anchor="middle" fill="#2ecc71" font-size="10" font-family="'Noto Sans SC',sans-serif">向上缺口 → 回补</text>
            <rect x="20" y="80" width="25" height="40" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <text x="32" y="135" text-anchor="middle" fill="#888" font-size="8" font-family="'JetBrains Mono'">①</text>
            <rect x="60" y="50" width="25" height="30" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <text x="72" y="95" text-anchor="middle" fill="#888" font-size="8" font-family="'JetBrains Mono'">②缺口</text>
            <rect x="100" y="40" width="25" height="15" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="140" y="50" width="25" height="25" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="180" y="65" width="25" height="25" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="220" y="75" width="25" height="30" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <line x1="55" y1="80" x2="255" y2="80" stroke="#3498db" stroke-width="0.8" stroke-dasharray="3"/>
            <text x="242" y="120" fill="#e74c3c" font-size="8" font-family="'JetBrains Mono'">③回补</text>
            <polygon points="235,90 245,95 235,100" fill="#e74c3c"/>
            <!-- 向下缺口回补 -->
            <text x="450" y="40" text-anchor="middle" fill="#e74c3c" font-size="10" font-family="'Noto Sans SC',sans-serif">向下缺口 → 回补</text>
            <rect x="320" y="50" width="25" height="40" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <text x="332" y="105" text-anchor="middle" fill="#888" font-size="8" font-family="'JetBrains Mono'">①</text>
            <rect x="360" y="80" width="25" height="30" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <text x="372" y="125" text-anchor="middle" fill="#888" font-size="8" font-family="'JetBrains Mono'">②缺口</text>
            <rect x="400" y="95" width="25" height="15" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="440" y="75" width="25" height="25" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="480" y="60" width="25" height="25" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="520" y="50" width="25" height="30" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <line x1="355" y1="80" x2="555" y2="80" stroke="#3498db" stroke-width="0.8" stroke-dasharray="3"/>
            <text x="542" y="95" fill="#2ecc71" font-size="8" font-family="'JetBrains Mono'">③回补</text>
            <polygon points="535,68 545,63 535,58" fill="#2ecc71"/>
          </svg>
        </div>
        <h3>缺口回补的概率</h3>
        <div class="stat-ring-wrap">
          <div class="stat-ring">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#1a1a22" stroke-width="6"/>
              <circle cx="40" cy="40" r="34" fill="none" stroke="#2ecc71" stroke-width="6" stroke-dasharray="170.9" stroke-dashoffset="68.36" stroke-linecap="round"/>
            </svg>
            <div class="stat-ring-label">60%</div>
          </div>
          <div class="stat-ring-info">
            <h4>普通缺口回补率</h4>
            <p>大约 60% 的普通缺口会在 3-5 根K线内被回补。突破缺口和测量缺口的回补率则低得多，大约只有 10-20%。</p>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>测量缺口的用法</h2>
        <p>测量缺口（也叫 Runaway Gap）不仅暗示趋势将继续，还能帮你估算趋势的目标位：</p>
        <div class="callout"><div class="callout-title">测量规则</div><p>从趋势起点到缺口的距离，大约等于缺口到趋势终点的距离。即缺口出现在趋势的<strong>中点</strong>附近。</p></div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                   PAGE: ADVANCED PATTERNS                        -->
    <!-- ================================================================ -->
    <section class="page" id="page-candles_advanced">
      <div class="hero">
        <div class="hero-tag">Module 09 · 进阶</div>
        <h1>高级<em>形态</em>识别</h1>
        <p>超越基础 K 线形态，掌握 Brooks 体系中的复合形态与结构形态。</p>
      </div>

      <div class="concept">
        <h2>楔形 (Wedge)</h2>
        <p>楔形是由三根或更多 K 线形成的三角收缩形态，暗示当前运动正在失去动能：</p>
        <div class="chart-demo">
          <svg width="600" height="200" viewBox="0 0 600 200">
            <!-- 下降楔形 -->
            <text x="150" y="18" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">下降楔形 → 反转做多</text>
            <polyline points="20,40 55,70 90,55 125,90 160,80 195,110 230,100" fill="none" stroke="#888" stroke-width="1.5"/>
            <line x1="20" y1="40" x2="230" y2="100" stroke="#e74c3c" stroke-width="1" stroke-dasharray="5" opacity=".6"/>
            <line x1="55" y1="70" x2="230" y2="100" stroke="#2ecc71" stroke-width="1" stroke-dasharray="5" opacity=".6"/>
            <polyline points="230,100 260,75 290,50" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <polygon points="280,52 290,50 285,62" fill="#2ecc71"/>
            <rect x="260" y="60" width="20" height="30" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="290" y="140" fill="#2ecc71" font-size="9" font-family="'JetBrains Mono'">突破上轨</text>
            <!-- 上升楔形 -->
            <text x="450" y="18" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">上升楔形 → 反转做空</text>
            <polyline points="330,140 365,110 400,125 435,90 470,100 505,70 540,80" fill="none" stroke="#888" stroke-width="1.5"/>
            <line x1="330" y1="140" x2="540" y2="80" stroke="#2ecc71" stroke-width="1" stroke-dasharray="5" opacity=".6"/>
            <line x1="365" y1="110" x2="540" y2="80" stroke="#e74c3c" stroke-width="1" stroke-dasharray="5" opacity=".6"/>
            <polyline points="540,80 570,105 590,130" fill="none" stroke="#e74c3c" stroke-width="2.5"/>
            <polygon points="582,126 590,130 578,132" fill="#e74c3c"/>
            <rect x="560" y="85" width="20" height="30" rx="2" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
            <text x="580" y="155" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">跌破下轨</text>
          </svg>
        </div>
        <div class="card-grid">
          <div class="card">
            <div class="card-label" style="color:var(--green)">楔形底</div>
            <h3>下降楔形 → 反转做多</h3>
            <p>价格在下跌过程中逐渐收窄跌幅，形成下降楔形。当价格突破楔形上轨时，往往产生强烈的向上反转。</p>
            <p style="margin-top:8px"><strong>入场点</strong>：突破楔形上轨后的第一根阳线<br><strong>止损</strong>：楔形最低点下方<br><strong>目标</strong>：楔形起始高度的等距移动</p>
          </div>
          <div class="card">
            <div class="card-label" style="color:var(--red)">楔形顶</div>
            <h3>上升楔形 → 反转做空</h3>
            <p>价格在上涨过程中逐渐收窄涨幅，形成上升楔形。当价格跌破楔形下轨时，往往产生强烈的向下反转。</p>
            <p style="margin-top:8px"><strong>入场点</strong>：跌破楔形下轨后的第一根阴线<br><strong>止损</strong>：楔形最高点上方<br><strong>目标</strong>：楔形起始高度的等距移动</p>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>双顶与双底 (Double Top / Double Bottom)</h2>
        <p>Brooks 将双顶双底视为最基本的交易区间形态：</p>
        <div class="chart-demo">
          <svg width="600" height="180" viewBox="0 0 600 180">
            <!-- 双顶 -->
            <text x="150" y="18" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">双顶 (Double Top)</text>
            <polyline points="20,120 50,90 80,50 110,80 140,90 170,52 200,80 230,120 260,140" fill="none" stroke="#888" stroke-width="1.5"/>
            <circle cx="80" cy="50" r="4" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <circle cx="170" cy="52" r="4" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="20" y1="50" x2="260" y2="50" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4" opacity=".4"/>
            <line x1="80" y1="90" x2="170" y2="90" stroke="#3498db" stroke-width="1" stroke-dasharray="4" opacity=".4"/>
            <text x="125" y="108" text-anchor="middle" fill="#3498db" font-size="9" font-family="'JetBrains Mono'">颈线</text>
            <polygon points="225,118 235,125 225,132" fill="#e74c3c"/>
            <!-- 双底 -->
            <text x="450" y="18" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">双底 (Double Bottom)</text>
            <polyline points="320,60 350,90 380,130 410,100 440,90 470,128 500,100 530,60 560,40" fill="none" stroke="#888" stroke-width="1.5"/>
            <circle cx="380" cy="130" r="4" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <circle cx="470" cy="128" r="4" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <line x1="320" y1="130" x2="560" y2="130" stroke="#2ecc71" stroke-width="1" stroke-dasharray="4" opacity=".4"/>
            <line x1="380" y1="90" x2="470" y2="90" stroke="#3498db" stroke-width="1" stroke-dasharray="4" opacity=".4"/>
            <text x="425" y="82" text-anchor="middle" fill="#3498db" font-size="9" font-family="'JetBrains Mono'">颈线</text>
            <polygon points="525,42 535,35 525,28" fill="#2ecc71"/>
          </svg>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>形态</th><th>结构</th><th>信号</th><th>Brooks 统计</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--red)">双顶 (DT)</td><td>两次测试同一高点区域</td><td>价格第二次到达高点附近时做空</td><td>约 40% 会变成三重顶或更高形态</td></tr>
              <tr><td style="color:var(--green)">双底 (DB)</td><td>两次测试同一低点区域</td><td>价格第二次到达低点附近时做多</td><td>约 40% 会变成三重底或更低形态</td></tr>
              <tr><td style="color:var(--blue)">高2/低2</td><td>趋势中的两波回调</td><td>第二波回调结束时入场</td><td>这是最常见的趋势延续形态</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>旗形 (Flag)</h2>
        <p>旗形是趋势中短暂的逆势整理形态，代表趋势暂停后的延续：</p>
        <div class="chart-demo">
          <svg width="600" height="180" viewBox="0 0 600 180">
            <!-- 牛市旗形 -->
            <text x="150" y="18" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">牛市旗形 (Bull Flag)</text>
            <polyline points="20,150 50,120 80,80 110,50" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <polygon points="105,52 110,50 108,60" fill="#2ecc71"/>
            <line x1="110" y1="50" x2="160" y2="70" stroke="#2ecc71" stroke-width="1" stroke-dasharray="4" opacity=".5"/>
            <line x1="120" y1="65" x2="170" y2="85" stroke="#2ecc71" stroke-width="1" stroke-dasharray="4" opacity=".5"/>
            <rect x="125" y="55" width="14" height="12" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="143" y="60" width="14" height="10" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="161" y="68" width="14" height="10" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <polyline points="175,78 200,55 230,35" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <polygon points="225,37 230,35 228,45" fill="#2ecc71"/>
            <text x="150" y="160" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">旗面 (2-5根K线)</text>
            <!-- 熊市旗形 -->
            <text x="450" y="18" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">熊市旗形 (Bear Flag)</text>
            <polyline points="320,30 350,60 380,100 410,130" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <polygon points="405,128 410,130 408,120" fill="#e74c3c"/>
            <line x1="410" y1="130" x2="460" y2="110" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4" opacity=".5"/>
            <line x1="420" y1="115" x2="470" y2="95" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4" opacity=".5"/>
            <rect x="425" y="105" width="14" height="12" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="443" y="98" width="14" height="10" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="461" y="90" width="14" height="10" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <polyline points="475,82 500,105 530,130" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <polygon points="525,128 530,130 528,120" fill="#e74c3c"/>
            <text x="450" y="160" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">旗面 (2-5根K线)</text>
          </svg>
        </div>
        <ul>
          <li><strong>牛市旗形</strong>：上涨后的小幅回调（通常2-5根K线），形成向下倾斜的小通道。突破旗形上轨时继续做多。</li>
          <li><strong>熊市旗形</strong>：下跌后的小幅反弹，形成向上倾斜的小通道。跌破旗形下轨时继续做空。</li>
        </ul>
        <div class="callout-green callout">
          <div class="callout-title">Brooks 提示</div>
          <p>旗形中的K线数量越少（通常2-3根），后续突破的力度越大。旗形持续超过5根K线后，趋势延续的概率会下降。</p>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                    PAGE: MEASURED MOVES                          -->
    <!-- ================================================================ -->
    <section class="page" id="page-measured_move">
      <div class="hero">
        <div class="hero-tag">Module 10 · 进阶</div>
        <h1>测量<em>目标</em></h1>
        <p>交易不仅要知道在哪入场，还要知道在哪出场。价格行为提供了精确的测量方法。</p>
      </div>

      <div class="concept">
        <h2>三种测量方法</h2>

        <!-- 方法一：等距移动 -->
        <div class="chart-demo">
          <svg width="660" height="240" viewBox="0 0 660 240">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">方法一：等距移动 (Measured Move)</text>
            <!-- 价格走势 -->
            <polyline points="20,170 45,155 70,145 95,130 120,110 145,85 170,65 195,50" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <!-- 回调 -->
            <polyline points="195,50 220,60 245,72 270,85" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <!-- 第二段上涨 -->
            <polyline points="270,85 295,70 320,55 345,40 370,25 395,15" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <!-- 标注 A 段 -->
            <line x1="170" y1="65" x2="170" y2="200" stroke="#2ecc71" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="20" y1="170" x2="20" y2="200" stroke="#2ecc71" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="20" y1="195" x2="170" y2="195" stroke="#2ecc71" stroke-width="2"/>
            <polygon points="165,192 170,195 165,198" fill="#2ecc71"/>
            <polygon points="25,192 20,195 25,198" fill="#2ecc71"/>
            <text x="95" y="212" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'JetBrains Mono'">Leg A</text>
            <!-- 回调标注 -->
            <text x="232" y="100" fill="#d4a843" font-size="10" font-family="'Noto Sans SC',sans-serif">回调</text>
            <!-- 标注 B 段 -->
            <line x1="270" y1="85" x2="270" y2="200" stroke="#3498db" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="395" y1="15" x2="395" y2="200" stroke="#3498db" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="270" y1="195" x2="395" y2="195" stroke="#3498db" stroke-width="2"/>
            <polygon points="390,192 395,195 390,198" fill="#3498db"/>
            <polygon points="275,192 270,195 275,198" fill="#3498db"/>
            <text x="332" y="212" text-anchor="middle" fill="#3498db" font-size="11" font-weight="600" font-family="'JetBrains Mono'">Leg B = Leg A</text>
            <!-- 等号标注 -->
            <line x1="170" y1="225" x2="270" y2="225" stroke="#aaa" stroke-width="1" stroke-dasharray="2"/>
            <line x1="270" y1="225" x2="395" y2="225" stroke="#aaa" stroke-width="1" stroke-dasharray="2"/>
            <text x="220" y="237" text-anchor="middle" fill="#aaa" font-size="9" font-family="'JetBrains Mono'">≈</text>
            <text x="332" y="237" text-anchor="middle" fill="#aaa" font-size="9" font-family="'JetBrains Mono'">≈</text>
            <!-- 公式 -->
            <rect x="440" y="50" width="200" height="80" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="540" y="75" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">计算公式</text>
            <text x="540" y="100" text-anchor="middle" fill="#e8e4dc" font-size="10" font-family="'JetBrains Mono'">目标 = 回调结束 + Leg A</text>
            <text x="540" y="118" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">= C + (A_high - A_low)</text>
          </svg>
        </div>

        <!-- 方法二：缺口测量 -->
        <div class="chart-demo">
          <svg width="660" height="240" viewBox="0 0 660 240">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">方法二：缺口测量 (Gap Measurement)</text>
            <!-- 趋势起点到缺口 -->
            <polyline points="20,170 50,150 80,130 110,110 140,90 170,70 200,55" fill="none" stroke="#888" stroke-width="1.5"/>
            <!-- 测量缺口 -->
            <rect x="210" y="43" width="24" height="18" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="210" y="61" width="24" height="8" fill="none" stroke="#d4a843" stroke-width="1.5" stroke-dasharray="3"/>
            <text x="222" y="82" text-anchor="middle" fill="#d4a843" font-size="9" font-weight="600" font-family="'JetBrains Mono'">测量缺口</text>
            <!-- 缺口后继续 -->
            <polyline points="234,40 260,30 290,22 320,18" fill="none" stroke="#888" stroke-width="1.5"/>
            <!-- A 段标注 -->
            <line x1="20" y1="170" x2="20" y2="195" stroke="#2ecc71" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="222" y1="50" x2="222" y2="195" stroke="#2ecc71" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="20" y1="190" x2="222" y2="190" stroke="#2ecc71" stroke-width="2"/>
            <polygon points="217,187 222,190 217,193" fill="#2ecc71"/>
            <polygon points="25,187 20,190 25,193" fill="#2ecc71"/>
            <text x="121" y="207" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'JetBrains Mono'">距离 A</text>
            <!-- B 段标注 -->
            <line x1="222" y1="50" x2="222" y2="195" stroke="#3498db" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="420" y1="12" x2="420" y2="195" stroke="#3498db" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="222" y1="190" x2="420" y2="190" stroke="#3498db" stroke-width="2"/>
            <polygon points="415,187 420,190 415,193" fill="#3498db"/>
            <polygon points="227,187 222,190 227,193" fill="#3498db"/>
            <text x="321" y="207" text-anchor="middle" fill="#3498db" font-size="11" font-weight="600" font-family="'JetBrains Mono'">距离 B ≈ A</text>
            <!-- 目标标记 -->
            <rect x="410" y="8" width="16" height="16" rx="2" fill="none" stroke="#d4a843" stroke-width="2" stroke-dasharray="4"/>
            <text x="432" y="20" fill="#d4a843" font-size="9" font-weight="600" font-family="'JetBrains Mono'">目标位</text>
            <!-- 公式 -->
            <rect x="470" y="50" width="180" height="80" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="560" y="75" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">计算公式</text>
            <text x="560" y="100" text-anchor="middle" fill="#e8e4dc" font-size="10" font-family="'JetBrains Mono'">目标 = 缺口价 + A</text>
            <text x="560" y="118" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">= Gap + (Gap - 起点)</text>
          </svg>
        </div>

        <!-- 方法三：形态高度测量 -->
        <div class="chart-demo">
          <svg width="660" height="240" viewBox="0 0 660 240">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">方法三：形态高度测量 (Pattern Height)</text>
            <!-- 交易区间 -->
            <rect x="40" y="60" width="200" height="80" rx="4" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="4"/>
            <text x="140" y="52" text-anchor="middle" fill="#aaa" font-size="10" font-family="'Noto Sans SC',sans-serif">交易区间</text>
            <polyline points="50,90 70,80 90,100 110,75 130,95 150,78 170,100 190,82 210,95 230,85" fill="none" stroke="#888" stroke-width="1.5"/>
            <!-- 上下边界线 -->
            <line x1="40" y1="60" x2="240" y2="60" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="40" y1="140" x2="240" y2="140" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="245" y="64" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">高点 H</text>
            <text x="245" y="144" fill="#2ecc71" font-size="9" font-family="'JetBrains Mono'">低点 L</text>
            <!-- H 标尺 -->
            <line x1="35" y1="60" x2="35" y2="140" stroke="#d4a843" stroke-width="2"/>
            <polygon points="32,65 35,60 38,65" fill="#d4a843"/>
            <polygon points="32,135 35,140 38,135" fill="#d4a843"/>
            <text x="35" y="105" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'JetBrains Mono'">H</text>
            <!-- 突破 -->
            <polyline points="230,85 250,70 270,50" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <rect x="260" y="45" width="18" height="25" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="2"/>
            <text x="269" y="38" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600" font-family="'JetBrains Mono'">突破!</text>
            <!-- 目标投射 -->
            <polyline points="270,50 300,35 330,25 360,18" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="4"/>
            <rect x="350" y="10" width="16" height="16" rx="2" fill="none" stroke="#d4a843" stroke-width="2" stroke-dasharray="4"/>
            <text x="372" y="22" fill="#d4a843" font-size="9" font-weight="600" font-family="'JetBrains Mono'">目标位</text>
            <!-- 目标距离标注 -->
            <line x1="269" y1="50" x2="269" y2="175" stroke="#3498db" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="358" y1="18" x2="358" y2="175" stroke="#3498db" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="269" y1="170" x2="358" y2="170" stroke="#3498db" stroke-width="2"/>
            <polygon points="353,167 358,170 353,173" fill="#3498db"/>
            <polygon points="274,167 269,170 274,173" fill="#3498db"/>
            <text x="313" y="188" text-anchor="middle" fill="#3498db" font-size="11" font-weight="600" font-family="'JetBrains Mono'">= H</text>
            <!-- 公式 -->
            <rect x="430" y="60" width="210" height="80" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="535" y="85" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">计算公式</text>
            <text x="535" y="110" text-anchor="middle" fill="#e8e4dc" font-size="10" font-family="'JetBrains Mono'">目标 = 突破点 + H</text>
            <text x="535" y="128" text-anchor="middle" fill="#888" font-size="9" font-family="'JetBrains Mono'">= Breakout + (High - Low)</text>
          </svg>
        </div>
        <div class="card-grid">
          <div class="card">
            <div class="card-label">Method 1</div>
            <h3>等距移动 (Measured Move)</h3>
            <p>最常用的方法。测量第一段趋势的距离，然后从回调结束点开始，等距投射。</p>
            <div class="callout" style="margin-top:10px"><div class="callout-title">计算</div><p>目标 = 回调结束价 + (第一段高点 - 第一段低点)</p></div>
          </div>
          <div class="card">
            <div class="card-label">Method 2</div>
            <h3>缺口测量 (Gap Measurement)</h3>
            <p>利用测量缺口（趋势中段缺口）来估算剩余空间。趋势起点到缺口 ≈ 缺口到终点。</p>
            <div class="callout" style="margin-top:10px"><div class="callout-title">计算</div><p>目标 = 缺口价 + (缺口价 - 趋势起点价)</p></div>
          </div>
          <div class="card">
            <div class="card-label">Method 3</div>
            <h3>形态高度测量</h3>
            <p>交易区间或形态突破后，用形态的高度来估算目标。</p>
            <div class="callout" style="margin-top:10px"><div class="callout-title">计算</div><p>目标 = 突破点 + (形态高点 - 形态低点)</p></div>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>多目标叠加</h2>
        <p>当多种测量方法指向同一价格区域时，该区域成为<strong>磁力区（Magnet）</strong>——价格极有可能向那个区域运动。</p>
        <div class="callout-green callout">
          <div class="callout-title">实战建议</div>
          <p>在该区域设置限价单分批止盈，而不是一次性全部平仓。比如在到达第一目标时平 50% 仓位，设置保本止损，让剩余仓位追逐更高目标。</p>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                    PAGE: TIMEFRAME                                -->
    <!-- ================================================================ -->
    <section class="page" id="page-timeframe">
      <div class="hero">
        <div class="hero-tag">Module 11 · 进阶</div>
        <h1>多时间<em>框架</em></h1>
        <p>大时间框架决定了市场的方向，小时间框架提供了精确的入场点。</p>
      </div>

      <div class="concept">
        <h2>时间框架层级</h2>
        <p>Brooks 体系中通常使用三个时间框架来分析市场：</p>
        <div class="chart-demo">
          <svg width="660" height="300" viewBox="0 0 660 300">
            <!-- 大级别日线图 -->
            <rect x="15" y="10" width="200" height="120" rx="6" fill="rgba(212,168,67,.04)" stroke="#d4a843" stroke-width="1"/>
            <text x="115" y="30" text-anchor="middle" fill="#d4a843" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">大级别 · 日线图</text>
            <polyline points="30,100 50,88 70,92 90,72 110,78 130,58 150,62 170,45 190,50" fill="none" stroke="#d4a843" stroke-width="2.5"/>
            <circle cx="50" cy="88" r="3" fill="#d4a843"/>
            <circle cx="110" cy="72" r="3" fill="#d4a843"/>
            <circle cx="170" cy="45" r="3" fill="#d4a843"/>
            <text x="50" y="105" text-anchor="middle" fill="#d4a843" font-size="8" font-family="'JetBrains Mono'">HL</text>
            <text x="110" y="90" text-anchor="middle" fill="#d4a843" font-size="8" font-family="'JetBrains Mono'">HH</text>
            <text x="170" y="60" text-anchor="middle" fill="#d4a843" font-size="8" font-family="'JetBrains Mono'">HH</text>
            <text x="115" y="118" text-anchor="middle" fill="#d4a843" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">↗ 上升趋势</text>

            <!-- 中级别5分钟图 -->
            <rect x="230" y="10" width="200" height="120" rx="6" fill="rgba(46,204,113,.04)" stroke="#2ecc71" stroke-width="1"/>
            <text x="330" y="30" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">中级别 · 5分钟图</text>
            <polyline points="245,95 260,85 275,90 290,75 305,80 320,65 335,60 350,70 365,55 380,48 395,40 410,35" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <!-- 信号K线标记 -->
            <rect x="360" y="48" width="14" height="18" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="2"/>
            <text x="367" y="78" text-anchor="middle" fill="#2ecc71" font-size="7" font-family="'JetBrains Mono'">信号K</text>
            <text x="330" y="118" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">信号K线 + 回调形态</text>

            <!-- 小级别1分钟图 -->
            <rect x="445" y="10" width="200" height="120" rx="6" fill="rgba(52,152,219,.04)" stroke="#3498db" stroke-width="1"/>
            <text x="545" y="30" text-anchor="middle" fill="#3498db" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">小级别 · 1分钟图</text>
            <polyline points="460,90 472,85 484,88 496,72 508,68 520,72 532,58 544,52 556,56 568,42 580,38 592,35" fill="none" stroke="#3498db" stroke-width="1.2"/>
            <!-- 入场K线 -->
            <rect x="574" y="30" width="14" height="20" rx="2" fill="#1a3a2a" stroke="#2ecc71" stroke-width="2"/>
            <text x="581" y="25" text-anchor="middle" fill="#2ecc71" font-size="7" font-weight="600" font-family="'JetBrains Mono'">入场!</text>
            <text x="545" y="118" text-anchor="middle" fill="#3498db" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">精确入场 + 止损</text>

            <!-- 流程箭头 -->
            <line x1="215" y1="70" x2="230" y2="70" stroke="#aaa" stroke-width="1.5"/>
            <polygon points="226,67 232,70 226,73" fill="#aaa"/>
            <line x1="430" y1="70" x2="445" y2="70" stroke="#aaa" stroke-width="1.5"/>
            <polygon points="441,67 447,70 441,73" fill="#aaa"/>

            <!-- 底部流程条 -->
            <rect x="15" y="150" width="630" height="60" rx="8" fill="rgba(160,154,144,.04)" stroke="#2a2a32" stroke-width="1"/>
            <text x="115" y="172" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="700" font-family="'Noto Sans SC',sans-serif">① 定方向</text>
            <text x="115" y="190" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">趋势/区间/通道</text>
            <text x="280" y="170" text-anchor="middle" fill="#aaa" font-size="20">→</text>
            <text x="380" y="172" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="700" font-family="'Noto Sans SC',sans-serif">② 找信号</text>
            <text x="380" y="190" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">信号K线/形态/设置</text>
            <text x="500" y="170" text-anchor="middle" fill="#aaa" font-size="20">→</text>
            <text x="590" y="172" text-anchor="middle" fill="#3498db" font-size="11" font-weight="700" font-family="'Noto Sans SC',sans-serif">③ 精确执行</text>
            <text x="590" y="190" text-anchor="middle" fill="#888" font-size="9" font-family="'Noto Sans SC',sans-serif">入场/止损/目标</text>

            <!-- 底部总结 -->
            <text x="330" y="240" text-anchor="middle" fill="#e8e4dc" font-size="12" font-weight="600" font-family="'Noto Sans SC',sans-serif">大级别定方向 → 中级别找信号 → 小级别精确入场</text>
            <text x="330" y="265" text-anchor="middle" fill="#888" font-size="10" font-family="'Noto Sans SC',sans-serif">三个级别方向一致时，交易信心最高</text>
          </svg>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>层级</th><th>典型时间框架</th><th>作用</th><th>分析内容</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--accent)"><strong>大级别</strong></td><td>日线图 / 60分钟图</td><td>确定主趋势方向</td><td>趋势、通道、主要支撑阻力</td></tr>
              <tr><td style="color:var(--green)"><strong>中级别</strong></td><td>15分钟图 / 5分钟图</td><td>识别交易设置</td><td>信号K线、形态、交易区间</td></tr>
              <tr><td style="color:var(--blue)"><strong>小级别</strong></td><td>1分钟图 / Tick图</td><td>精确入场时机</td><td>入场K线确认、止损位置优化</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>时间框架一致性原则</h2>
        <div class="scenario-box">
          <div class="scenario-header"><span class="scenario-num">原则</span><span class="scenario-title">顺势原则：大框架优先</span></div>
          <div class="scenario-body">
            <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>先看大级别</strong>：日线图显示什么趋势？是在通道中还是交易区间？</div></div>
            <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>再看中级别</strong>：15分钟或5分钟图上的信号是否与大级别方向一致？</div></div>
            <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>最后看小级别</strong>：用1分钟图确认精确入场，避免假突破。</div></div>
            <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>冲突时等待</strong>：如果大小级别方向不一致，不要交易，等待共振信号。</div></div>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>冲突 vs 共振</h2>
        <div class="chart-demo">
          <svg width="660" height="280" viewBox="0 0 660 280">
            <!-- 共振场景 -->
            <rect x="15" y="10" width="300" height="255" rx="10" fill="rgba(46,204,113,.03)" stroke="#2ecc71" stroke-width="1"/>
            <text x="165" y="35" text-anchor="middle" fill="#2ecc71" font-size="13" font-weight="700" font-family="'Noto Sans SC',sans-serif">✓ 共振 — 高信心交易</text>

            <!-- 日线图 -->
            <rect x="30" y="50" width="125" height="70" rx="4" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="92" y="66" text-anchor="middle" fill="#d4a843" font-size="9" font-family="'JetBrains Mono'">日线图</text>
            <polyline points="40,105 55,95 70,100 85,85 100,90 115,75 130,78 145,65" fill="none" stroke="#d4a843" stroke-width="1.5"/>
            <text x="92" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">↗ 上升趋势</text>

            <!-- 5分钟图 -->
            <rect x="170" y="50" width="125" height="70" rx="4" fill="rgba(46,204,113,.06)" stroke="#2ecc71" stroke-width="1"/>
            <text x="232" y="66" text-anchor="middle" fill="#2ecc71" font-size="9" font-family="'JetBrains Mono'">5分钟图</text>
            <polyline points="180,105 195,98 210,102 225,90 240,85 255,78 270,75 285,68" fill="none" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="275" y="63" width="10" height="14" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="232" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">↗ 做多信号</text>

            <!-- 箭头汇聚 -->
            <path d="M92,130 L92,155 L232,155 L232,130" fill="none" stroke="#2ecc71" stroke-width="1" stroke-dasharray="3"/>
            <polygon points="229,133 232,128 235,133" fill="#2ecc71"/>
            <polygon points="89,133 92,128 95,133" fill="#2ecc71"/>

            <!-- 结果 -->
            <rect x="75" y="165" width="170" height="50" rx="8" fill="rgba(46,204,113,.12)" stroke="#2ecc71" stroke-width="2"/>
            <text x="160" y="185" text-anchor="middle" fill="#2ecc71" font-size="12" font-weight="700" font-family="'JetBrains Mono'">做多 ✓</text>
            <text x="160" y="203" text-anchor="middle" fill="#2ecc71" font-size="9" font-family="'Noto Sans SC',sans-serif">高信心 · 可用 1.5x 仓位</text>

            <!-- 冲突场景 -->
            <rect x="345" y="10" width="300" height="255" rx="10" fill="rgba(231,76,60,.03)" stroke="#e74c3c" stroke-width="1"/>
            <text x="495" y="35" text-anchor="middle" fill="#e74c3c" font-size="13" font-weight="700" font-family="'Noto Sans SC',sans-serif">✕ 冲突 — 不交易</text>

            <!-- 日线图 -->
            <rect x="360" y="50" width="125" height="70" rx="4" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="422" y="66" text-anchor="middle" fill="#d4a843" font-size="9" font-family="'JetBrains Mono'">日线图</text>
            <polyline points="370,105 385,95 400,100 415,85 430,90 445,75 460,78 475,65" fill="none" stroke="#d4a843" stroke-width="1.5"/>
            <text x="422" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">↗ 上升趋势</text>

            <!-- 5分钟图 -->
            <rect x="500" y="50" width="125" height="70" rx="4" fill="rgba(231,76,60,.06)" stroke="#e74c3c" stroke-width="1"/>
            <text x="562" y="66" text-anchor="middle" fill="#e74c3c" font-size="9" font-family="'JetBrains Mono'">5分钟图</text>
            <polyline points="510,70 525,78 540,74 555,82 570,88 585,92 600,98 615,105" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <rect x="600" y="88" width="10" height="14" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
            <text x="562" y="115" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="600">↘ 做空信号</text>

            <!-- 冲突标记 -->
            <text x="495" y="95" text-anchor="middle" fill="#e74c3c" font-size="24" font-weight="700">⚡</text>

            <!-- 结果 -->
            <rect x="405" y="165" width="170" height="50" rx="8" fill="rgba(160,154,144,.08)" stroke="#aaa" stroke-width="1.5"/>
            <text x="490" y="185" text-anchor="middle" fill="#aaa" font-size="12" font-weight="700" font-family="'JetBrains Mono'">等待 ⏸</text>
            <text x="490" y="203" text-anchor="middle" fill="#aaa" font-size="9" font-family="'Noto Sans SC',sans-serif">方向矛盾 · 观望不操作</text>
          </svg>
        </div>
      </div>

      <div class="concept">
        <h2>5 分钟图 + 日线图 组合</h2>
        <p>这是 Brooks 最推荐的日内交易组合：</p>
        <div class="card-grid">
          <div class="card">
            <div class="card-label">日线图</div>
            <h3>大框架分析</h3>
            <ul>
              <li>识别当前是趋势还是交易区间</li>
              <li>标记关键支撑和阻力位</li>
              <li>判断整体方向（Always In 偏向）</li>
            </ul>
          </div>
          <div class="card">
            <div class="card-label">5分钟图</div>
            <h3>入场执行</h3>
            <ul>
              <li>在日线级别确认的方向上寻找信号</li>
              <li>使用5分钟信号K线和入场K线</li>
              <li>止损和目标参考5分钟结构</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                    PAGE: SCENARIOS                                -->
    <!-- ================================================================ -->
    <section class="page" id="page-scenarios">
      <div class="hero">
        <div class="hero-tag">Module 12 · 实战</div>
        <h1>实战<em>场景</em>分析</h1>
        <p>理论需要落地。通过 8 个完整场景，学习如何在真实市场中应用 Brooks 体系。</p>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 1</span><span class="scenario-title">强趋势中的回调买入</span></div>
        <div class="scenario-body">
          <p>日线图上出现连续阳线的强上升趋势。5分钟图上价格开始回调。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>确认趋势</strong>：日线图连阳，5分钟图形成 HH/HL 结构 → 趋势明确</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>等待回调</strong>：价格回落到20EMA附近或前一个摆动低点</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>寻找信号</strong>：在支撑位出现看涨吞没或锤子线</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>入场执行</strong>：在信号K线上方1tick挂买入单，止损设在信号K线下方</div></div>
          <div class="step"><div class="scenario-step-num">5</div><div class="scenario-step-text"><strong>管理仓位</strong>：目标1 = 前高，目标2 = 测量移动等距目标</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 2</span><span class="scenario-title">交易区间顶部做空</span></div>
        <div class="scenario-body">
          <p>市场在明显的交易区间内运行，价格接近区间上轨。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>识别区间</strong>：价格多次在上下轨之间震荡，没有HH也没有LL</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>到达上轨</strong>：价格接近区间上轨，出现射击之星或看跌吞没</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>入场做空</strong>：在信号K线下方入场，止损设在区间上轨上方</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>目标设定</strong>：目标为区间下轨或60%区间宽度位置</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 3</span><span class="scenario-title">假突破反转交易</span></div>
        <div class="scenario-body">
          <p>价格突破关键支撑/阻力后快速反转，形成假突破（Failed Breakout）。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>观察突破</strong>：价格突破交易区间上轨，但只有1-2根K线</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>快速反转</strong>：紧接着出现大阴线跌回区间内 → 假突破信号!</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>入场做空</strong>：假突破K线下方入场，止损在假突破高点上方</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>目标</strong>：通常至少跌到区间另一侧，形成对侧假突破时的力度往往更大</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 4</span><span class="scenario-title">开盘缺口交易策略</span></div>
        <div class="scenario-body">
          <p>市场开盘时出现向上缺口，如何判断该追涨还是做空？</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>评估缺口大小</strong>：小缺口（< 0.5%）更可能被回补，大缺口更可能是突破缺口</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>观察前30分钟</strong>：前30分钟是开盘区间（Opening Range），不要急于交易</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>确定方向</strong>：如果开盘区间突破方向与缺口一致 → 追缺口；如果反向 → 缺口回补交易</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>风险控制</strong>：缺口交易波动大，使用更紧的止损（信号K线50%位置）</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 5</span><span class="scenario-title">楔形反转交易</span></div>
        <div class="scenario-body">
          <p>价格形成明确的上升楔形结构，准备反转做空。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>识别楔形</strong>：至少3个递减的高点和3个递减的低点形成收敛三角</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>等待突破</strong>：价格跌破楔形下轨，以大阴线收盘</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>入场策略</strong>：激进者直接在突破K线入场；保守者等回测楔形下轨时入场</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>目标计算</strong>：楔形高度从突破点等距向下投射</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 6</span><span class="scenario-title">双底反转 + 二次测试</span></div>
        <div class="scenario-body">
          <p>价格在下跌后测试前低，形成双底（W底），然后二次测试确认反转。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>第一个底</strong>：价格跌到前低附近，出现看涨K线，但未确认反转</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>反弹回落</strong>：价格小幅反弹后再次下探</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>二次测试</strong>：第二次下探未能跌破前低，出现更强的看涨信号K线</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>入场做多</strong>：在二次测试的信号K线上方入场，止损在双底最低点下方</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 7</span><span class="scenario-title">强趋势中的"高2"买入</span></div>
        <div class="scenario-body">
          <p>"高2"是 Brooks 体系中最常见的趋势延续形态。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>趋势确认</strong>：市场处于明确的上升趋势（HH/HL）</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>第一波回调</strong>：价格形成一个小型回调低点（高1买入点，但可以先观望）</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>反弹后第二波回调</strong>：价格再次小幅回调，但不跌破第一个低点</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>高2买入</strong>：在第二波回调的看涨信号K线上方入场。胜率约60%+</div></div>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-header"><span class="scenario-num">场景 8</span><span class="scenario-title">多时间框架共振交易</span></div>
        <div class="scenario-body">
          <p>当多个时间框架同时给出信号时，交易的成功率会显著提高。</p>
          <div class="scenario-step"><div class="scenario-step-num">1</div><div class="scenario-step-text"><strong>日线图</strong>：价格回调到上升趋势线支撑位，收出锤子线</div></div>
          <div class="scenario-step"><div class="scenario-step-num">2</div><div class="scenario-step-text"><strong>60分钟图</strong>：同一位置出现看涨吞没形态，确认支撑有效</div></div>
          <div class="scenario-step"><div class="scenario-step-num">3</div><div class="scenario-step-text"><strong>5分钟图</strong>：在该支撑位形成双底，出现高2买入信号</div></div>
          <div class="scenario-step"><div class="scenario-step-num">4</div><div class="scenario-step-text"><strong>入场</strong>：三级时间框架共振 → 高信心交易，可以使用正常仓位的1.5倍</div></div>
        </div>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                       PAGE: JOURNAL                               -->
    <!-- ================================================================ -->
    <section class="page" id="page-journal">
      <div class="hero">
        <div class="hero-tag">Module 13 · 实战</div>
        <h1>交易<em>日志</em>模板</h1>
        <p>记录、分析、改进——交易日志是从业余到专业的关键一步。</p>
      </div>

      <div class="concept">
        <h2>为什么需要交易日志？</h2>
        <div class="stat-ring-wrap">
          <div class="stat-ring">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#1a1a22" stroke-width="6"/>
              <circle cx="40" cy="40" r="34" fill="none" stroke="#d4a843" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="64.08" stroke-linecap="round"/>
            </svg>
            <div class="stat-ring-label">70%</div>
          </div>
          <div class="stat-ring-info">
            <h4>坚持写日志的交易者</h4>
            <p>研究表明，坚持记录交易日志的交易者在6个月内的盈利能力比不记录的交易者高出约70%。日志帮助你发现重复的错误模式和最佳实践。</p>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>每笔交易记录模板</h2>
        <p>以下模板涵盖了 Brooks 体系中最重要的交易记录要素：</p>
      </div>

      <div class="table-wrap">
        <table>
          <thead><tr><th>字段</th><th>说明</th><th>示例</th></tr></thead>
          <tbody>
            <tr><td style="color:var(--accent)">日期/时间</td><td>入场和出场的具体时间</td><td>2025-01-15 10:25</td></tr>
            <tr><td style="color:var(--accent)">品种</td><td>交易的标的</td><td>ES / NQ / AAPL</td></tr>
            <tr><td style="color:var(--accent)">方向</td><td>做多 / 做空</td><td>做多</td></tr>
            <tr><td style="color:var(--accent)">市场结构</td><td>当时市场的状态</td><td>上升趋势中的回调</td></tr>
            <tr><td style="color:var(--accent)">信号类型</td><td>使用的交易设置</td><td>Setup 2: 趋势回调</td></tr>
            <tr><td style="color:var(--accent)">信号K线</td><td>触发入场的K线描述</td><td>5分钟锤子线，下影线是实体3倍</td></tr>
            <tr><td style="color:var(--accent)">入场价</td><td>实际入场价格</td><td>4532.50</td></tr>
            <tr><td style="color:var(--accent)">止损价</td><td>止损设置价格</td><td>4525.00</td></tr>
            <tr><td style="color:var(--accent)">目标价</td><td>止盈目标价格</td><td>4550.00</td></tr>
            <tr><td style="color:var(--accent)">仓位大小</td><td>交易的数量/手数</td><td>2手</td></tr>
            <tr><td style="color:var(--accent)">出场价</td><td>实际出场价格</td><td>4548.00</td></tr>
            <tr><td style="color:var(--accent)">盈亏</td><td>本笔交易的盈亏</td><td><span class="tag tag-green">+$310</span></td></tr>
            <tr><td style="color:var(--accent)">评分 (1-5)</td><td>执行质量评分</td><td>4 - 良好执行</td></tr>
          </tbody>
        </table>
      </div>

      <div class="divider"></div>

      <div class="concept">
        <h2>日志示例</h2>
      </div>

      <div class="journal-row">
        <div class="journal-header">日期</div>
        <div class="journal-header">品种/方向</div>
        <div class="journal-header">信号</div>
        <div class="journal-header">入场</div>
        <div class="journal-header">出场</div>
        <div class="journal-header">盈亏</div>
      </div>
      <div class="journal-row">
        <div>01/15</div>
        <div>ES 做多</div>
        <div>趋势回调·锤子线</div>
        <div>4532.5</div>
        <div>4548.0</div>
        <div class="journal-win">+$310</div>
      </div>
      <div class="journal-row">
        <div>01/15</div>
        <div>NQ 做空</div>
        <div>区间顶·射击之星</div>
        <div>16850</div>
        <div>16890</div>
        <div class="journal-loss">-$160</div>
      </div>
      <div class="journal-row">
        <div>01/16</div>
        <div>ES 做多</div>
        <div>突破·大阳线</div>
        <div>4555.0</div>
        <div>4572.0</div>
        <div class="journal-win">+$340</div>
      </div>
      <div class="journal-row">
        <div>01/16</div>
        <div>ES 做空</div>
        <div>假突破·反转</div>
        <div>4575.0</div>
        <div>4568.0</div>
        <div class="journal-win">+$140</div>
      </div>

      <div class="divider"></div>

      <div class="concept">
        <h2>每周复盘要点</h2>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">统计本周胜率和盈亏比</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">找出最成功的3笔交易——为什么成功？</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">找出最失败的3笔交易——哪里出了问题？</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">是否遵守了交易计划和风险规则？</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">情绪管理评分（1-10）</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">下周需要改进的一个具体方面</span></li>
        </ul>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                    PAGE: PRACTICE PLAN                            -->
    <!-- ================================================================ -->
    <section class="page" id="page-practice">
      <div class="hero">
        <div class="hero-tag">学习计划</div>
        <h1>从理论到<em>实战</em></h1>
        <p>系统化的学习路径，帮助你稳步构建交易能力。</p>
      </div>
      <div class="card" style="margin-bottom:24px">
        <div class="card-label">Phase 1 · 基础建立（第 1-4 周）</div>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">每日阅读 10 页 Al Brooks 原著</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">在图表上标注每一根K线的类型</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">识别 10 个锤子线、10 个吞没形态的历史案例</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">学习辨认趋势、通道和交易区间</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">记录每笔观察笔记（不开实盘）</span></li>
        </ul>
      </div>
      <div class="card" style="margin-bottom:24px">
        <div class="card-label">Phase 2 · 模式识别（第 5-8 周）</div>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">在图表上标记所有信号K线和入场K线</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">统计信号K线后的成功率（至少 50 个样本）</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">练习识别市场结构的切换点</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">开始模拟交易（Paper Trading）</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">每周复盘：记录 3 笔最好的和 3 笔最差的信号</span></li>
        </ul>
      </div>
      <div class="card" style="margin-bottom:24px">
        <div class="card-label">Phase 3 · 实盘过渡（第 9-12 周）</div>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">以最小仓位开始实盘（1 手或最小单位）</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">严格止损，每笔风险 ≤ 账户 1%</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">记录每笔交易的完整日志</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">月度统计：胜率、盈亏比、最大回撤</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">根据数据优化，逐步增加仓位</span></li>
        </ul>
      </div>
      <div class="callout">
        <div class="callout-title">推荐资源</div>
        <p><strong>书籍</strong>：Trading Price Action 系列 (Al Brooks)<br><strong>视频</strong>：Brooks Trading Course / YouTube 免费周度分析<br><strong>网站</strong>：brookspriceaction.com<br><strong>工具</strong>：TradingView（回放模式）、NinjaTrader</p>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--               PAGE: CHANNELS & MICRO CHANNELS                    -->
    <!-- ================================================================ -->
    <section class="page" id="page-channels">
      <div class="hero">
        <div class="hero-tag">Module 14</div>
        <h1>通道<em>交易</em></h1>
        <p>市场总是在某种通道中运行。学会识别和交易通道，是趋势交易的核心技能。</p>
      </div>

      <div class="concept">
        <h2>通道的本质</h2>
        <p>Brooks 指出："市场总是在某种通道中，只要你仔细寻找。" 通道由两条线构成——趋势线和通道线。市场在两条线之间来回运动，直到突破。</p>
        <div class="callout">
          <div class="callout-title">Brooks 原则</div>
          <p>任何向上倾斜的通道都可以看作熊旗，最终 likely 会向下突破。任何向下倾斜的通道都可以看作牛旗，最终 likely 会向上突破。</p>
        </div>
      </div>

      <div class="concept">
        <h2>通道类型</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>通道类型</th><th>特征</th><th>交易含义</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--accent)">平行通道</td><td>趋势线和通道线大致平行</td><td>趋势稳定，可在通道内高抛低吸</td></tr>
              <tr><td style="color:var(--green)">楔形通道 (收敛)</td><td>两条线逐渐靠拢</td><td>趋势衰竭，准备反转</td></tr>
              <tr><td style="color:var(--red)">扩展通道 (发散)</td><td>两条线逐渐分开</td><td>波动加大，趋势加速</td></tr>
              <tr><td style="color:var(--blue)">紧密通道</td><td>通道极窄，回调很小</td><td>趋势极强，不要逆势交易</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>通道图示</h2>
        <div class="chart-demo">
          <svg width="660" height="280" viewBox="0 0 660 280">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">平行通道 (Parallel Channel)</text>
            <!-- 价格走势 -->
            <polyline points="30,220 60,200 90,185 120,170 150,155 180,140 210,125 240,110 270,95 300,80 330,65 360,50 390,35 420,20 450,30 480,45 510,60 540,75 570,90 600,105" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <!-- 趋势线 (下方) -->
            <line x1="30" y1="220" x2="420" y2="20" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="6"/>
            <text x="200" y="240" fill="#2ecc71" font-size="10" font-family="'JetBrains Mono'">趋势线 (Trend Line)</text>
            <!-- 通道线 (上方) -->
            <line x1="90" y1="185" x2="480" y2="45" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="6"/>
            <text x="280" y="55" fill="#e74c3c" font-size="10" font-family="'JetBrains Mono'">通道线 (Channel Line)</text>
            <!-- 通道区域 -->
            <rect x="90" y="45" width="390" height="140" rx="4" fill="rgba(212,168,67,.06)" stroke="none"/>
            <text x="280" y="130" text-anchor="middle" fill="#d4a843" font-size="11" font-family="'Noto Sans SC',sans-serif">通道区域</text>
            <!-- 突破点 -->
            <circle cx="420" cy="20" r="5" fill="none" stroke="#d4a843" stroke-width="2"/>
            <text x="430" y="15" fill="#d4a843" font-size="9" font-family="'JetBrains Mono'">突破</text>
            <!-- 公式 -->
            <rect x="480" y="140" width="170" height="80" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="565" y="165" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">交易策略</text>
            <text x="565" y="185" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">通道内：高抛低吸</text>
            <text x="565" y="200" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">突破后：顺势入场</text>
          </svg>
        </div>

        <div class="chart-demo">
          <svg width="660" height="280" viewBox="0 0 660 280">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">楔形通道 (Wedge Channel)</text>
            <!-- 价格走势 - 收敛 -->
            <polyline points="30,240 60,220 90,200 120,180 150,165 180,150 210,140 240,130 270,120 300,115 330,110 360,108 390,110 420,115 450,125 480,140 510,160 540,180 570,200 600,220" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <!-- 下方趋势线 -->
            <line x1="30" y1="240" x2="360" y2="108" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="6"/>
            <text x="180" y="255" fill="#2ecc71" font-size="10" font-family="'JetBrains Mono'">趋势线</text>
            <!-- 上方趋势线 (收敛) -->
            <line x1="90" y1="200" x2="360" y2="108" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="6"/>
            <text x="200" y="195" fill="#e74c3c" font-size="10" font-family="'JetBrains Mono'">通道线</text>
            <!-- 收敛点 -->
            <circle cx="360" cy="108" r="6" fill="none" stroke="#d4a843" stroke-width="2"/>
            <text x="370" y="100" fill="#d4a843" font-size="9" font-family="'JetBrains Mono'">顶点</text>
            <!-- 反转 -->
            <polyline points="360,108 390,110 420,115 450,125 480,140 510,160 540,180 570,200 600,220" fill="none" stroke="#e74c3c" stroke-width="2.5"/>
            <text x="500" y="200" fill="#e74c3c" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">反转下跌</text>
            <!-- 说明 -->
            <rect x="460" y="30" width="190" height="80" rx="8" fill="rgba(231,76,60,.06)" stroke="#e74c3c" stroke-width="1"/>
            <text x="555" y="55" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">楔形特征</text>
            <text x="555" y="75" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">两条线逐渐收敛</text>
            <text x="555" y="90" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">趋势衰竭→准备反转</text>
          </svg>
        </div>
      </div>

      <div class="concept">
        <h2>微通道 (Micro Channel)</h2>
        <p>微通道是只有 2-10 根 K 线的极紧密通道，<strong>几乎没有回调</strong>。它代表趋势极强，是最重要的趋势延续信号之一。</p>
        <div class="pattern-grid">
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="80" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="40" y="65" width="16" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="60" y="50" width="16" height="28" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="80" y="38" width="16" height="32" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="100" y="25" width="16" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="120" y="15" width="16" height="28" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <line x1="15" y1="105" x2="140" y2="15" stroke="#2ecc71" stroke-width="1" stroke-dasharray="4"/>
              <text x="100" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">牛微通道</text>
            </svg>
            <h4>牛微通道</h4>
            <p>连续阳线，无回调。趋势极强，不要做空。</p>
          </div>
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="15" width="16" height="25" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="40" y="20" width="16" height="30" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="60" y="30" width="16" height="28" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="80" y="38" width="16" height="32" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="100" y="50" width="16" height="30" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <rect x="120" y="60" width="16" height="28" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1.5"/>
              <line x1="15" y1="15" x2="140" y2="88" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4"/>
              <text x="100" y="115" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="600">熊微通道</text>
            </svg>
            <h4>熊微通道</h4>
            <p>连续阴线，无反弹。趋势极强，不要做多。</p>
          </div>
        </div>
        <div class="callout">
          <div class="callout-title">微通道交易规则</div>
          <p><strong>K线越多、实体越大、影线越小</strong>，微通道越强。第一个回调 likely 会失败，趋势会继续。不要在微通道中逆势交易！</p>
        </div>
      </div>

      <div class="concept">
        <h2>通道交易策略</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>策略</th><th>条件</th><th>入场</th><th>止损</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--green)">通道内做多</td><td>价格回到趋势线附近</td><td>在趋势线附近买入</td><td>通道线下方</td></tr>
              <tr><td style="color:var(--red)">通道内做空</td><td>价格回到通道线附近</td><td>在通道线附近卖出</td><td>通道线上方</td></tr>
              <tr><td style="color:var(--accent)">突破做多</td><td>收盘突破通道线上方</td><td>突破后回测买入</td><td>通道内</td></tr>
              <tr><td style="color:var(--blue)">突破做空</td><td>收盘跌破趋势线下方</td><td>突破后回测卖出</td><td>通道内</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="divider"></div>
      <div class="concept">
        <h2>自检清单</h2>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">能区分平行通道、楔形通道和扩展通道</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">理解微通道的含义和交易规则</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">知道通道内高抛低吸的入场点</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">知道通道突破后的交易策略</span></li>
        </ul>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--               PAGE: TREND TRADING STRATEGIES                     -->
    <!-- ================================================================ -->
    <section class="page" id="page-trend-trading">
      <div class="hero">
        <div class="hero-tag">Module 15</div>
        <h1>趋势<em>交易策略</em></h1>
        <p>趋势是利润的主要来源。学会识别趋势强度、找到最佳入场点，是盈利的关键。</p>
      </div>

      <div class="concept">
        <h2>尖峰与通道 (Spike and Channel)</h2>
        <p>这是 Brooks 体系中最重要的趋势模式。趋势通常分两个阶段：<strong>尖峰阶段</strong>（快速突破）和<strong>通道阶段</strong>（有序上涨/下跌）。</p>
        <div class="chart-demo">
          <svg width="660" height="300" viewBox="0 0 660 300">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">尖峰与通道趋势 (Spike and Channel)</text>
            <!-- 尖峰阶段 -->
            <rect x="30" y="30" width="180" height="240" rx="4" fill="rgba(46,204,113,.05)" stroke="none"/>
            <text x="120" y="50" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">尖峰阶段 (Spike)</text>
            <!-- 尖峰K线 -->
            <rect x="40" y="220" width="18" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="62" y="195" width="18" height="35" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="84" y="165" width="18" height="40" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="106" y="130" width="18" height="45" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="128" y="100" width="18" height="40" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="150" y="75" width="18" height="35" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <rect x="172" y="55" width="18" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
            <text x="120" y="270" text-anchor="middle" fill="#2ecc71" font-size="9" font-family="'Noto Sans SC',sans-serif">突破！紧迫感</text>
            <!-- 通道阶段 -->
            <rect x="220" y="30" width="400" height="240" rx="4" fill="rgba(52,152,219,.05)" stroke="none"/>
            <text x="420" y="50" text-anchor="middle" fill="#3498db" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">通道阶段 (Channel)</text>
            <!-- 通道K线 -->
            <rect x="230" y="65" width="16" height="20" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="250" y="58" width="16" height="18" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="270" y="52" width="16" height="20" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="290" y="48" width="16" height="15" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="310" y="42" width="16" height="18" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="330" y="38" width="16" height="14" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="350" y="33" width="16" height="16" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="370" y="30" width="16" height="12" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="390" y="26" width="16" height="15" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="410" y="22" width="16" height="12" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
            <rect x="430" y="18" width="16" height="14" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <!-- 通道线 -->
            <line x1="230" y1="85" x2="450" y2="32" stroke="#3498db" stroke-width="1" stroke-dasharray="4"/>
            <line x1="230" y1="65" x2="450" y2="18" stroke="#3498db" stroke-width="1" stroke-dasharray="4"/>
            <text x="420" y="270" text-anchor="middle" fill="#3498db" font-size="9" font-family="'Noto Sans SC',sans-serif">有序上涨，担忧感</text>
            <!-- 测量目标 -->
            <rect x="470" y="80" width="180" height="120" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="560" y="105" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">交易策略</text>
            <text x="560" y="125" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">尖峰阶段：追突破</text>
            <text x="560" y="142" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">通道阶段：买回调</text>
            <text x="560" y="159" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">通道突破：注意反转</text>
            <text x="560" y="176" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">目标 = 通道高度</text>
          </svg>
        </div>
      </div>

      <div class="concept">
        <h2>趋势强度信号</h2>
        <p>如何判断趋势是否足够强？Brooks 列出了以下关键信号：</p>
        <div class="pattern-grid">
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="80" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="40" y="65" width="16" height="28" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="60" y="50" width="16" height="30" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="80" y="35" width="16" height="32" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="100" y="20" width="16" height="28" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <text x="100" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">连续趋势棒</text>
            </svg>
            <h4>连续趋势棒</h4>
            <p>多数K线是趋势方向的大实体棒，代表趋势强劲。</p>
          </div>
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="80" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="40" y="60" width="16" height="20" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
              <rect x="60" y="55" width="16" height="28" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <rect x="80" y="40" width="16" height="15" rx="1" fill="#3a1a1a" stroke="#e74c3c" stroke-width="1"/>
              <rect x="100" y="30" width="16" height="25" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1.5"/>
              <text x="100" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">小幅回调</text>
            </svg>
            <h4>小幅回调</h4>
            <p>回调K线很小且少，代表趋势力量远超回调。</p>
          </div>
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <polyline points="20,80 40,60 60,50 80,35 100,25 120,18 140,12" fill="none" stroke="#2ecc71" stroke-width="2"/>
              <line x1="20" y1="80" x2="140" y2="12" stroke="#2ecc71" stroke-width="1" stroke-dasharray="4"/>
              <circle cx="40" cy="60" r="3" fill="#2ecc71"/>
              <circle cx="80" cy="35" r="3" fill="#2ecc71"/>
              <circle cx="120" cy="18" r="3" fill="#2ecc71"/>
              <text x="100" y="115" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="600">趋势线支撑</text>
            </svg>
            <h4>趋势线支撑</h4>
            <p>价格多次在趋势线附近获得支撑，趋势有效。</p>
          </div>
          <div class="pattern-card">
            <svg viewBox="0 0 200 120">
              <rect x="20" y="60" width="40" height="30" rx="2" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
              <rect x="70" y="45" width="30" height="25" rx="2" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
              <rect x="110" y="30" width="25" height="20" rx="2" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
              <text x="100" y="115" text-anchor="middle" fill="#d4a843" font-size="9" font-weight="600">交易区间缩小</text>
            </svg>
            <h4>交易区间缩小</h4>
            <p>回调形成的区间越来越小，趋势正在加速。</p>
          </div>
        </div>
      </div>

      <div class="concept">
        <h2>两段腿结构 (Two Legs)</h2>
        <p>大多数趋势和回调都以<strong>两段腿</strong>的形式运行。理解这个结构可以帮你找到最佳入场点。</p>
        <div class="chart-demo">
          <svg width="660" height="250" viewBox="0 0 660 250">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">两段腿结构 (Two Legs)</text>
            <!-- 第一段腿 -->
            <polyline points="30,200 60,180 90,160 120,140 150,120" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <text x="90" y="215" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">Leg 1</text>
            <!-- 回调 -->
            <polyline points="150,120 180,135 210,145 240,150" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <text x="195" y="165" fill="#e74c3c" font-size="9" font-family="'Noto Sans SC',sans-serif">回调</text>
            <!-- 第二段腿 -->
            <polyline points="240,150 270,135 300,115 330,95 360,80" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <text x="300" y="100" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">Leg 2</text>
            <!-- 标注 -->
            <line x1="30" y1="200" x2="30" y2="80" stroke="#d4a843" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="150" y1="120" x2="150" y2="80" stroke="#d4a843" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <line x1="360" y1="80" x2="360" y2="200" stroke="#d4a843" stroke-width="1" stroke-dasharray="3" opacity=".5"/>
            <text x="195" y="75" fill="#d4a843" font-size="9" font-family="'JetBrains Mono'">Leg 1 = Leg 2</text>
            <!-- 入场点 -->
            <circle cx="240" cy="150" r="6" fill="none" stroke="#d4a843" stroke-width="2"/>
            <text x="250" y="155" fill="#d4a843" font-size="9" font-weight="600" font-family="'Noto Sans SC',sans-serif">入场点</text>
            <!-- 说明 -->
            <rect x="420" y="60" width="220" height="120" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="530" y="85" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">两段腿规则</text>
            <text x="530" y="105" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 大多数趋势有两段腿</text>
            <text x="530" y="120" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 第二段腿 ≈ 第一段腿</text>
            <text x="530" y="135" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 在回调结束时入场</text>
            <text x="530" y="150" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 两段腿后注意反转</text>
          </svg>
        </div>
      </div>

      <div class="concept">
        <h2>趋势入场策略</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>策略</th><th>条件</th><th>胜率</th><th>说明</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--green)">高2买入</td><td>上升趋势中第二次回调</td><td>~60%</td><td>最常见的趋势延续信号</td></tr>
              <tr><td style="color:var(--green)">楔形牛旗买入</td><td>上升趋势中楔形回调</td><td>~65%</td><td>回调收敛后恢复上涨</td></tr>
              <tr><td style="color:var(--green)">突破回测买入</td><td>突破牛旗后回测</td><td>~60%</td><td>等待突破后的小回调</td></tr>
              <tr><td style="color:var(--red)">低2卖出</td><td>下降趋势中第二次反弹</td><td>~60%</td><td>最常见的趋势延续信号</td></tr>
              <tr><td style="color:var(--red)">楔形熊旗卖出</td><td>下降趋势中楔形反弹</td><td>~65%</td><td>反弹收敛后恢复下跌</td></tr>
              <tr><td style="color:var(--accent)">高1买入</td><td>强趋势中第一次回调</td><td>~55%</td><td>仅在强趋势中使用</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="divider"></div>
      <div class="concept">
        <h2>自检清单</h2>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">理解尖峰与通道的两阶段结构</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">能识别趋势强度的4个信号</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">理解两段腿结构和入场点</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">掌握高2/低2、楔形旗形等入场策略</span></li>
        </ul>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--               PAGE: INTRADAY PATTERNS                            -->
    <!-- ================================================================ -->
    <section class="page" id="page-day-patterns">
      <div class="hero">
        <div class="hero-tag">Module 16</div>
        <h1>日内<em>模式</em></h1>
        <p>不同的交易日有不同的"性格"。识别日内模式，可以帮你选择正确的交易策略。</p>
      </div>

      <div class="concept">
        <h2>日类型总览</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>日类型</th><th>特征</th><th>交易策略</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--green)">趋势日</td><td>全天单方向运动，回调极小</td><td>顺势持仓，不要逆势</td></tr>
              <tr><td style="color:var(--accent)">开盘趋势日</td><td>开盘即趋势，方向明确</td><td>第一波回调入场</td></tr>
              <tr><td style="color:var(--red)">反转日</td><td>先趋势后反转</td><td>等待反转信号</td></tr>
              <tr><td style="color:var(--blue)">趋势恢复日</td><td>日内反转后恢复原趋势</td><td>识别假反转</td></tr>
              <tr><td style="color:var(--text2)">交易区间日</td><td>全天震荡，无明确方向</td><td>高抛低吸</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept">
        <h2>开盘趋势日 (Trend from the Open)</h2>
        <p>开盘趋势日是最有利可图的交易日之一。市场从开盘就开始趋势运动，全天几乎没有像样的回调。</p>
        <div class="chart-demo">
          <svg width="660" height="280" viewBox="0 0 660 280">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">开盘趋势日 (Trend from the Open)</text>
            <!-- 开盘区间 -->
            <rect x="30" y="30" width="80" height="220" rx="4" fill="rgba(212,168,67,.06)" stroke="none"/>
            <text x="70" y="50" text-anchor="middle" fill="#d4a843" font-size="10" font-family="'Noto Sans SC',sans-serif">开盘</text>
            <!-- 价格走势 -->
            <polyline points="40,220 50,210 60,200 70,190 80,180 90,170 100,160 120,145 140,130 160,118 180,105 200,95 220,85 240,78 260,70 280,62 300,55 320,48 340,42 360,38 380,35 400,32 420,30 440,28 460,27 480,26 500,25 520,25 540,26 560,28 580,30 600,32" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <!-- K线 -->
            <rect x="40" y="215" width="12" height="15" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="56" y="200" width="12" height="18" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="72" y="185" width="12" height="20" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="88" y="168" width="12" height="22" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="104" y="155" width="12" height="18" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="120" y="140" width="12" height="20" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="136" y="125" width="12" height="18" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="152" y="112" width="12" height="16" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="168" y="100" width="12" height="15" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="184" y="90" width="12" height="14" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="200" y="80" width="12" height="14" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="216" y="72" width="12" height="12" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="232" y="65" width="12" height="12" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="248" y="58" width="12" height="12" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="264" y="52" width="12" height="10" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="280" y="46" width="12" height="10" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="296" y="40" width="12" height="10" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <rect x="312" y="36" width="12" height="8" rx="1" fill="#1a3a2a" stroke="#2ecc71" stroke-width="1"/>
            <!-- 入场点标注 -->
            <circle cx="120" cy="145" r="6" fill="none" stroke="#d4a843" stroke-width="2"/>
            <text x="130" y="140" fill="#d4a843" font-size="9" font-weight="600" font-family="'Noto Sans SC',sans-serif">第一波回调入场</text>
            <!-- 说明 -->
            <rect x="420" y="60" width="220" height="140" rx="8" fill="rgba(46,204,113,.06)" stroke="#2ecc71" stroke-width="1"/>
            <text x="530" y="85" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">开盘趋势日特征</text>
            <text x="530" y="105" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 开盘后立即开始趋势</text>
            <text x="530" y="120" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 回调极小（<25%日均波幅）</text>
            <text x="530" y="135" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 大缺口开盘 often</text>
            <text x="530" y="150" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 第一波回调是最佳入场点</text>
            <text x="530" y="165" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 全天持仓，不要过早止盈</text>
          </svg>
        </div>
      </div>

      <div class="concept">
        <h2>反转日 (Reversal Day)</h2>
        <p>反转日先向一个方向趋势运动，然后在后半段反转。大多数反转日开始时看起来像趋势交易区间日。</p>
        <div class="chart-demo">
          <svg width="660" height="280" viewBox="0 0 660 280">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">反转日 (Reversal Day)</text>
            <!-- 前半段下跌 -->
            <polyline points="30,60 50,65 70,72 90,80 110,90 130,102 150,115 170,128 190,140 210,150 230,158 250,165 270,170 290,172 310,170" fill="none" stroke="#e74c3c" stroke-width="2.5"/>
            <!-- 反转点 -->
            <circle cx="310" cy="170" r="6" fill="none" stroke="#d4a843" stroke-width="2"/>
            <text x="320" y="180" fill="#d4a843" font-size="9" font-weight="600" font-family="'Noto Sans SC',sans-serif">反转点</text>
            <!-- 后半段上涨 -->
            <polyline points="310,170 330,165 350,155 370,142 390,128 410,115 430,100 450,88 470,75 490,65 510,55 530,48 550,42 570,38 590,35 610,32" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <!-- 标注 -->
            <text x="170" y="50" fill="#e74c3c" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">前半段：下跌</text>
            <text x="470" y="50" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">后半段：上涨</text>
            <!-- 说明 -->
            <rect x="420" y="180" width="220" height="80" rx="8" fill="rgba(212,168,67,.06)" stroke="#d4a843" stroke-width="1"/>
            <text x="530" y="205" text-anchor="middle" fill="#d4a843" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">反转日特征</text>
            <text x="530" y="225" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 大多开始于趋势交易区间日</text>
            <text x="530" y="240" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 反转通常在后2小时开始</text>
          </svg>
        </div>
      </div>

      <div class="concept">
        <h2>趋势恢复日 (Trend Resumption Day)</h2>
        <p>趋势恢复日看起来像反转日，但最终<strong>恢复了原趋势方向</strong>。这是最常见的"假反转"模式。</p>
        <div class="chart-demo">
          <svg width="660" height="280" viewBox="0 0 660 280">
            <text x="330" y="20" text-anchor="middle" fill="#d4a843" font-size="13" font-weight="600" font-family="'Noto Sans SC',sans-serif">趋势恢复日 (Trend Resumption)</text>
            <!-- 上午上涨 -->
            <polyline points="30,220 50,200 70,185 90,170 110,155 130,140 150,125 170,112 190,100 210,90 230,82 250,75 270,70 290,68" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <text x="160" y="60" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">上午：上涨趋势</text>
            <!-- 回调 (看起来像反转) -->
            <polyline points="290,68 310,72 330,80 350,90 370,100 390,108 410,115 430,118" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <text x="360" y="130" fill="#e74c3c" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">回调 (假反转)</text>
            <!-- 恢复上涨 -->
            <polyline points="430,118 450,110 470,100 490,88 510,75 530,65 550,55 570,48 590,42 610,38" fill="none" stroke="#2ecc71" stroke-width="2.5"/>
            <text x="520" y="55" fill="#2ecc71" font-size="10" font-weight="600" font-family="'Noto Sans SC',sans-serif">恢复上涨</text>
            <!-- 标注 -->
            <rect x="420" y="150" width="220" height="100" rx="8" fill="rgba(46,204,113,.06)" stroke="#2ecc71" stroke-width="1"/>
            <text x="530" y="175" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="600" font-family="'Noto Sans SC',sans-serif">交易策略</text>
            <text x="530" y="195" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 回调不破关键支撑</text>
            <text x="530" y="210" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 回调K线小且少</text>
            <text x="530" y="225" text-anchor="middle" fill="#e8e4dc" font-size="9" font-family="'Noto Sans SC',sans-serif">• 在恢复点顺势入场</text>
          </svg>
        </div>
      </div>

      <div class="divider"></div>
      <div class="concept">
        <h2>自检清单</h2>
        <ul class="checklist">
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">能区分5种日内模式</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">知道开盘趋势日的入场策略</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">能识别反转日和趋势恢复日的区别</span></li>
          <li><span class="check-icon" onclick="toggleCheck(this)"></span><span class="check-text">理解假反转的交易机会</span></li>
        </ul>
      </div>
    </section>

    <!-- ================================================================ -->
    <!--                       PAGE: QUIZ                                  -->
    <!-- ================================================================ -->
    <section class="page" id="page-quiz">
      <div class="hero">
        <div class="hero-tag">知识测验</div>
        <h1>检验你的<em>理解</em></h1>
        <p>通过这些题目，检查你对 Al Brooks 价格行为体系的掌握程度。</p>
      </div>
      <div class="kpi-row">
        <div class="kpi"><div class="kpi-value" id="quizScore">0</div><div class="kpi-label">正确数</div></div>
        <div class="kpi"><div class="kpi-value" id="quizTotal">0</div><div class="kpi-label">已答题</div></div>
        <div class="kpi"><div class="kpi-value" id="quizPct">-</div><div class="kpi-label">正确率</div></div>
      </div>
      <div class="quiz-container" id="quizContainer"></div>
      <button class="quiz-next" id="quizNext" onclick="nextQuiz()">下一题 →</button>
    </section>

    <!-- ================================================================ -->
    <!--                       PAGE: GLOSSARY                               -->
    <!-- ================================================================ -->
    <section class="page" id="page-glossary">
      <div class="hero">
        <div class="hero-tag">参考工具</div>
        <h1>术语<em>词典</em></h1>
        <p>Al Brooks 体系中所有关键术语的中文释义和英文对照。</p>
      </div>

      <div class="glossary-letter">A</div>
      <div class="glossary-item"><div class="glossary-term">Always In<span class="glossary-en">Always In</span></div><div class="glossary-def">市场始终处于"做多"或"做空"状态的概念。如果你无法判断方向，说明市场处于交易区间。</div></div>
      <div class="glossary-item"><div class="glossary-term">铁丝网<span class="glossary-en">Barbwire</span></div><div class="glossary-def">三根或更多K线组成的交易区间，K线大量重叠且至少有一根十字星。是紧密交易区间的一种。</div></div>
      <div class="glossary-item"><div class="glossary-term">K线回调<span class="glossary-en">Bar Pullback</span></div><div class="glossary-def">在上升波段中，低点低于前一根K线低点的K线；在下降波段中，高点高于前一根K线高点的K线。</div></div>
      <div class="glossary-item"><div class="glossary-term">价格行为<span class="glossary-en">Price Action</span></div><div class="glossary-def">通过分析K线形态和市场结构来理解市场，不依赖传统技术指标。是 Al Brooks 交易体系的核心。</div></div>
      <div class="glossary-item"><div class="glossary-term">磁力区<span class="glossary-en">Magnet</span></div><div class="glossary-def">多种测量方法指向的同一价格区域，价格极有可能向该区域运动。</div></div>
      <div class="glossary-item"><div class="glossary-term">开盘价<span class="glossary-en">Open</span></div><div class="glossary-def">K线时段开始时的价格，是多空博弈的起点。</div></div>

      <div class="glossary-letter">B</div>
      <div class="glossary-item"><div class="glossary-term">突破<span class="glossary-en">Breakout</span></div><div class="glossary-def">价格突破关键支撑/阻力位或交易区间边界。有效突破需要收盘确认。</div></div>
      <div class="glossary-item"><div class="glossary-term">突破K线<span class="glossary-en">Breakout Bar</span></div><div class="glossary-def">产生突破的K线，通常是强趋势K线。</div></div>
      <div class="glossary-item"><div class="glossary-term">突破模式<span class="glossary-en">Breakout Mode</span></div><div class="glossary-def">一种设置，其中向任一方向的突破都应该有跟随。通常出现在交易区间收缩后。</div></div>
      <div class="glossary-item"><div class="glossary-term">突破回测<span class="glossary-en">Breakout Pullback</span></div><div class="glossary-def">突破后出现的小幅回调（1-5根K线），是顺势入场的机会。</div></div>
      <div class="glossary-item"><div class="glossary-term">突破测试<span class="glossary-en">Breakout Test</span></div><div class="glossary-def">突破回测回到接近原始入场价格，测试盈亏平衡止损。可能发生在入场后几根K线或20+根K线后。</div></div>
      <div class="glossary-item"><div class="glossary-term">假突破<span class="glossary-en">Failed Breakout / Fakeout</span></div><div class="glossary-def">价格突破后迅速反转回原区域。Brooks 认为大多数首次突破都会失败，约60%会回测。</div></div>
      <div class="glossary-item"><div class="glossary-term">突破缺口<span class="glossary-en">Breakaway Gap</span></div><div class="glossary-def">价格在突破关键水平时产生的缺口，通常伴随大成交量，不会被回补。</div></div>
      <div class="glossary-item"><div class="glossary-term">实体<span class="glossary-en">Body</span></div><div class="glossary-def">K线开盘价与收盘价之间的区域。实体越大，代表一方力量越强。</div></div>
      <div class="glossary-item"><div class="glossary-term">账户爆仓<span class="glossary-en">Blown Account</span></div><div class="glossary-def">亏损使账户资金低于经纪商最低保证金要求，无法继续交易。</div></div>

      <div class="glossary-letter">C</div>
      <div class="glossary-item"><div class="glossary-term">收盘价<span class="glossary-en">Close</span></div><div class="glossary-def">K线时段结束时的价格。Brooks 认为这是最重要的价格，代表多空争夺的结果。</div></div>
      <div class="glossary-item"><div class="glossary-term">通道<span class="glossary-en">Channel</span></div><div class="glossary-def">由平行的趋势线和通道线构成的价格运动区域。分为紧密通道、宽幅通道和楔形通道。</div></div>
      <div class="glossary-item"><div class="glossary-term">高潮<span class="glossary-en">Climax</span></div><div class="glossary-def">趋势"走得太远太快"的运动，通常以通道线过度穿透结束。大多数高潮后进入交易区间，而非直接反转。</div></div>
      <div class="glossary-item"><div class="glossary-term">逆势<span class="glossary-en">Countertrend</span></div><div class="glossary-def">与当前趋势方向相反的交易或设置。对大多数交易者来说是亏损策略，因为风险通常至少等于回报。</div></div>
      <div class="glossary-item"><div class="glossary-term">十字星<span class="glossary-en">Doji</span></div><div class="glossary-def">开盘价≈收盘价的K线，表示多空力量均衡。变体包括蜻蜓十字、墓碑十字、长腿十字。</div></div>
      <div class="glossary-item"><div class="glossary-term">普通缺口<span class="glossary-en">Common Gap</span></div><div class="glossary-def">交易区间内的缺口，通常很快被回补，无特殊交易意义。</div></div>
      <div class="glossary-item"><div class="glossary-term">吞没形态<span class="glossary-en">Engulfing Pattern</span></div><div class="glossary-def">后一根K线实体完全覆盖前一根K线实体的双根反转形态。</div></div>

      <div class="glossary-letter">D-F</div>
      <div class="glossary-item"><div class="glossary-term">双顶<span class="glossary-en">Double Top (DT)</span></div><div class="glossary-def">价格两次测试同一高点区域形成的形态。约40%会演变成三重顶或更高形态。</div></div>
      <div class="glossary-item"><div class="glossary-term">双底<span class="glossary-en">Double Bottom (DB)</span></div><div class="glossary-def">价格两次测试同一低点区域形成的形态。约40%会演变成三重底或更低形态。</div></div>
      <div class="glossary-item"><div class="glossary-term">方向性概率<span class="glossary-en">Directional Probability</span></div><div class="glossary-def">市场向上或向下移动任意点数的概率。在等距离移动中，概率始终在50%附近徘徊。</div></div>
      <div class="glossary-item"><div class="glossary-term">早多/早空<span class="glossary-en">Early Longs / Early Shorts</span></div><div class="glossary-def">在信号K线收盘前就入场的交易者。比等待收盘的交易者承担更多风险。</div></div>
      <div class="glossary-item"><div class="glossary-term">入场K线<span class="glossary-en">Entry Bar</span></div><div class="glossary-def">在信号K线之后出现、触发实际入场的K线。突破信号K线高点（做多）或低点（做空）时入场。</div></div>
      <div class="glossary-item"><div class="glossary-term">优势<span class="glossary-en">Edge</span></div><div class="glossary-def">具有正交易者方程的设置。优势总是微小且短暂的，因为需要有人站在另一边。</div></div>
      <div class="glossary-item"><div class="glossary-term">竭尽缺口<span class="glossary-en">Exhaustion Gap</span></div><div class="glossary-def">趋势末端的缺口，成交量放大但后续乏力，暗示动能耗尽，准备反转。</div></div>
      <div class="glossary-item"><div class="glossary-term">期望值<span class="glossary-en">Expectancy</span></div><div class="glossary-def">(胜率 × 平均盈利) - (败率 × 平均亏损)。只要期望值为正，长期交易就能盈利。</div></div>
      <div class="glossary-item"><div class="glossary-term">指数移动平均<span class="glossary-en">EMA</span></div><div class="glossary-def">指数移动平均线。Brooks 使用20根K线的EMA作为趋势参考。</div></div>
      <div class="glossary-item"><div class="glossary-term">逆势交易<span class="glossary-en">Fade</span></div><div class="glossary-def">与趋势方向相反的交易（如卖出看涨突破）。风险较高，需要更多经验。</div></div>
      <div class="glossary-item"><div class="glossary-term">失败的失败<span class="glossary-en">Failed Failure</span></div><div class="glossary-def">失败后又恢复原方向，即突破回测。因为是第二次信号，更可靠。</div></div>
      <div class="glossary-item"><div class="glossary-term">跟随K线<span class="glossary-en">Follow-through Bar</span></div><div class="glossary-def">入场K线之后的K线，如果方向与入场一致，增加交易成功的概率。</div></div>
      <div class="glossary-item"><div class="glossary-term">旗形<span class="glossary-en">Flag</span></div><div class="glossary-def">趋势中短暂的逆势整理形态（2-5根K线），代表趋势暂停后的延续。</div></div>

      <div class="glossary-letter">G</div>
      <div class="glossary-item"><div class="glossary-term">缺口<span class="glossary-en">Gap</span></div><div class="glossary-def">价格不连续的跳空区域。分为突破缺口、测量缺口、竭尽缺口和普通缺口四类。</div></div>
      <div class="glossary-item"><div class="glossary-term">缺口回补<span class="glossary-en">Gap Fill</span></div><div class="glossary-def">价格回到缺口起点，完全覆盖缺口区域。约60%的普通缺口会在3-5根K线内回补。</div></div>
      <div class="glossary-item"><div class="glossary-term">高2 / 低2<span class="glossary-en">High 2 / Low 2</span></div><div class="glossary-def">趋势中两波回调形成的延续形态。第二波回调结束时入场，是最常见的趋势延续信号。</div></div>

      <div class="glossary-letter">H-K</div>
      <div class="glossary-item"><div class="glossary-term">更高高点<span class="glossary-en">Higher High (HH)</span></div><div class="glossary-def">比前一个高点更高的高点，上升趋势的特征之一。</div></div>
      <div class="glossary-item"><div class="glossary-term">更高低点<span class="glossary-en">Higher Low (HL)</span></div><div class="glossary-def">比前一个低点更高的低点，上升趋势的特征之一。</div></div>
      <div class="glossary-item"><div class="glossary-term">更低高点<span class="glossary-en">Lower High (LH)</span></div><div class="glossary-def">比前一个高点更低的高点，下降趋势的特征之一。</div></div>
      <div class="glossary-item"><div class="glossary-term">更低低点<span class="glossary-en">Lower Low (LL)</span></div><div class="glossary-def">比前一个低点更低的低点，下降趋势的特征之一。</div></div>
      <div class="glossary-item"><div class="glossary-term">锤子线<span class="glossary-en">Hammer</span></div><div class="glossary-def">长下影线+小实体的看涨反转K线。在上升趋势回调中出现更可靠。</div></div>
      <div class="glossary-item"><div class="glossary-term">上吊线<span class="glossary-en">Hanging Man</span></div><div class="glossary-def">形态与锤子线相同，但出现在上升趋势顶部，是看跌反转信号。</div></div>
      <div class="glossary-item"><div class="glossary-term">高时间框架<span class="glossary-en">Higher Timeframe (HTF)</span></div><div class="glossary-def">比当前分析时间周期更大的时间框架。大多数趋势是更大时间框架交易区间的一部分。</div></div>
      <div class="glossary-item"><div class="glossary-term">内包K线<span class="glossary-en">Inside Bar</span></div><div class="glossary-def">高低点都在前一根K线内部的K线，表示市场收缩和犹豫。</div></div>
      <div class="glossary-item"><div class="glossary-term">外包K线<span class="glossary-en">Outside Bar</span></div><div class="glossary-def">高低点都超过前一根K线的K线，表示波动扩张，多空双方都有突破。</div></div>
      <div class="glossary-item"><div class="glossary-term">倒锤子线<span class="glossary-en">Inverted Hammer</span></div><div class="glossary-def">长上影线+小实体在底部的K线，试探上方压力，是潜在的看涨反转信号。</div></div>

      <div class="glossary-letter">L</div>
      <div class="glossary-item"><div class="glossary-term">腿<span class="glossary-en">Leg</span></div><div class="glossary-def">价格在某一方向上的持续运动段落，是趋势的基本组成单位。</div></div>

      <div class="glossary-letter">M</div>
      <div class="glossary-item"><div class="glossary-term">测量缺口<span class="glossary-en">Measuring Gap / Runaway Gap</span></div><div class="glossary-def">趋势中段的缺口，出现在趋势大约中点位置，可用于测量趋势目标。</div></div>
      <div class="glossary-item"><div class="glossary-term">测量移动<span class="glossary-en">Measured Move (MM)</span></div><div class="glossary-def">利用价格等距关系估算目标位的方法。目标 = 回调结束价 + 第一段距离。</div></div>
      <div class="glossary-item"><div class="glossary-term">微通道<span class="glossary-en">Micro Channel</span></div><div class="glossary-def">只有2-10根K线的极紧密通道，几乎没有回调。代表趋势极强，是最重要的趋势延续信号之一。</div></div>
      <div class="glossary-item"><div class="glossary-term">影线<span class="glossary-en">Wick / Shadow / Tail</span></div><div class="glossary-def">K线实体外的细线，代表被拒绝的价格区域。长影线表示一方试探后被另一方打压。</div></div>

      <div class="glossary-letter">O-P</div>
      <div class="glossary-item"><div class="glossary-term">开盘区间<span class="glossary-en">Opening Range</span></div><div class="glossary-def">市场开盘后的前30分钟形成的高低范围，是日内交易的重要参考。</div></div>
      <div class="glossary-item"><div class="glossary-term">刺透形态<span class="glossary-en">Piercing Pattern</span></div><div class="glossary-def">在下降趋势中，阳线开盘低于前阴线低点，收盘穿入前阴线实体50%以上的看涨反转形态。</div></div>
      <div class="glossary-item"><div class="glossary-term">回调<span class="glossary-en">Pullback</span></div><div class="glossary-def">趋势中的短暂逆势运动，通常在1-3根K线后恢复原趋势。是顺势入场的机会。</div></div>
      <div class="glossary-item"><div class="glossary-term">孕线<span class="glossary-en">Harami</span></div><div class="glossary-def">后一根K线实体完全包含在前一根K线实体内的形态，暗示动能减弱。</div></div>

      <div class="glossary-letter">R</div>
      <div class="glossary-item"><div class="glossary-term">阻力位<span class="glossary-en">Resistance</span></div><div class="glossary-def">价格多次在此区域受阻回落的水平。突破后常变为支撑位。</div></div>
      <div class="glossary-item"><div class="glossary-term">反转<span class="glossary-en">Reversal</span></div><div class="glossary-def">市场方向的根本性改变，从上升转为下降或反之。需要结构性突破确认。</div></div>
      <div class="glossary-item"><div class="glossary-term">风险回报比<span class="glossary-en">Risk/Reward Ratio</span></div><div class="glossary-def">潜在盈利与潜在亏损的比值。Brooks 体系中至少追求1:1，理想为1:2或更高。</div></div>

      <div class="glossary-letter">S</div>
      <div class="glossary-item"><div class="glossary-term">信号K线<span class="glossary-en">Signal Bar</span></div><div class="glossary-def">提供交易方向提示的K线，是入场的"扳机"。优质信号K线有大实体且位于关键位置。</div></div>
      <div class="glossary-item"><div class="glossary-term">二次测试<span class="glossary-en">Second Entry / 2nd Attempt</span></div><div class="glossary-def">价格第二次测试关键位，通常比第一次更可靠。假突破后的二次测试是高胜率入场点。</div></div>
      <div class="glossary-item"><div class="glossary-term">卖压<span class="glossary-en">Selling Pressure</span></div><div class="glossary-def">强势空头通过阴线、上影线和两根K线熊反转来施加压力。效果是累积的，通常最终导致更低的价格。</div></div>
      <div class="glossary-item"><div class="glossary-term">尖峰<span class="glossary-en">Spike</span></div><div class="glossary-def">一系列同方向的趋势K线，代表突破和高潮。是趋势第一阶段的特征。</div></div>
      <div class="glossary-item"><div class="glossary-term">摆动高/低点<span class="glossary-en">Swing High / Swing Low</span></div><div class="glossary-def">价格的局部极值点，是判断市场结构和画趋势线的基础。</div></div>
      <div class="glossary-item"><div class="glossary-term">阶梯<span class="glossary-en">Stairs</span></div><div class="glossary-def">宽通道趋势的特征，价格像阶梯一样上涨或下跌，有明显的回调。</div></div>
      <div class="glossary-item"><div class="glossary-term">支撑位<span class="glossary-en">Support</span></div><div class="glossary-def">价格多次在此区域获得支撑反弹的水平。跌破后常变为阻力位。</div></div>
      <div class="glossary-item"><div class="glossary-term">射击之星<span class="glossary-en">Shooting Star</span></div><div class="glossary-def">长上影线+小实体在顶部的看跌反转K线，表示上方卖压强。</div></div>
      <div class="glossary-item"><div class="glossary-term">纺锤线<span class="glossary-en">Spinning Top</span></div><div class="glossary-def">小实体+长上下影线的K线，表示多空力量均衡，市场犹豫不决。</div></div>

      <div class="glossary-letter">T</div>
      <div class="glossary-item"><div class="glossary-term">交易区间<span class="glossary-en">Trading Range</span></div><div class="glossary-def">价格在水平边界之间震荡的市场状态。在区间内应做双向交易，不要追趋势。</div></div>
      <div class="glossary-item"><div class="glossary-term">交易者方程<span class="glossary-en">Trader's Equation</span></div><div class="glossary-def">盈利概率 × 盈利金额 > 亏损概率 × 亏损金额。每笔交易都必须满足这个方程。</div></div>
      <div class="glossary-item"><div class="glossary-term">趋势<span class="glossary-en">Trend</span></div><div class="glossary-def">连续形成 HH/HL（上升）或 LH/LL（下降）的价格运动。</div></div>
      <div class="glossary-item"><div class="glossary-term">趋势K线<span class="glossary-en">Trend Bar</span></div><div class="glossary-def">大实体、小影线的K线，代表方向明确的强力量。收盘价接近K线极端位置。</div></div>
      <div class="glossary-item"><div class="glossary-term">趋势线<span class="glossary-en">Trend Line</span></div><div class="glossary-def">连接连续摆动低点（上升趋势）或摆动高点（下降趋势）的直线。</div></div>
      <div class="glossary-item"><div class="glossary-term">趋势通道线<span class="glossary-en">Trend Channel Line</span></div><div class="glossary-def">与趋势线平行但位于价格另一侧的线。用于识别趋势过度延伸。</div></div>
      <div class="glossary-item"><div class="glossary-term">开盘趋势日<span class="glossary-en">Trend from the Open</span></div><div class="glossary-def">市场从开盘就开始趋势运动的交易日，全天几乎没有像样的回调。</div></div>
      <div class="glossary-item"><div class="glossary-term">趋势恢复<span class="glossary-en">Trend Resumption</span></div><div class="glossary-def">趋势在回调后恢复原方向。常见于趋势恢复日模式。</div></div>
      <div class="glossary-item"><div class="glossary-term">趋势反转<span class="glossary-en">Trend Reversal</span></div><div class="glossary-def">市场从上升趋势转为下降趋势或反之。需要结构性突破确认。</div></div>
      <div class="glossary-item"><div class="glossary-term">三白兵<span class="glossary-en">Three White Soldiers</span></div><div class="glossary-def">连续三根递进阳线的看涨形态，代表强势多头控制。</div></div>
      <div class="glossary-item"><div class="glossary-term">三只乌鸦<span class="glossary-en">Three Black Crows</span></div><div class="glossary-def">连续三根递进阴线的看跌形态，代表强势空头控制。</div></div>
      <div class="glossary-item"><div class="glossary-term">镊子顶/底<span class="glossary-en">Tweezers Top / Bottom</span></div><div class="glossary-def">两根K线的高点（顶）或低点（底）几乎相同，形成精确的阻力/支撑。</div></div>

      <div class="glossary-letter">U-W</div>
      <div class="glossary-item"><div class="glossary-term">乌云盖顶<span class="glossary-en">Dark Cloud Cover</span></div><div class="glossary-def">在上升趋势中，阴线开盘高于前阳线高点，收盘穿入前阳线实体50%以上的看跌反转形态。</div></div>
      <div class="glossary-item"><div class="glossary-term">楔形<span class="glossary-en">Wedge</span></div><div class="glossary-def">价格收敛形成的三角形结构，暗示趋势即将反转。分为上升楔形（看跌）和下降楔形（看涨）。</div></div>
      <div class="glossary-item"><div class="glossary-term">胜率<span class="glossary-en">Win Rate</span></div><div class="glossary-def">盈利交易占总交易次数的百分比。Brooks 体系中典型信号的胜率约50-60%。</div></div>
      <div class="glossary-item"><div class="glossary-term">晨星<span class="glossary-en">Morning Star</span></div><div class="glossary-def">阴线 + 小实体 + 阳线组成的三根K线看涨反转形态。</div></div>
      <div class="glossary-item"><div class="glossary-term">暮星<span class="glossary-en">Evening Star</span></div><div class="glossary-def">阳线 + 小实体 + 阴线组成的三根K线看跌反转形态。</div></div>
      <div class="glossary-item"><div class="glossary-term">墓碑十字<span class="glossary-en">Gravestone Doji</span></div><div class="glossary-def">无下影线的十字星，上方被完全拒绝，是顶部反转信号。</div></div>
      <div class="glossary-item"><div class="glossary-term">蜻蜓十字<span class="glossary-en">Dragonfly Doji</span></div><div class="glossary-def">无上影线的十字星，下方被完全拒绝，是底部反转信号。</div></div>
    </section>

  </div>
</div>

`;

export default function Home() {
  useEffect(() => {
    // Theme toggle
    function toggleTheme() {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      if (next === "dark") {
        html.removeAttribute("data-theme");
      } else {
        html.setAttribute("data-theme", "light");
      }
      localStorage.setItem("theme", next);
    }

    // Init theme from localStorage
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Make functions globally available
    (window as any).toggleTheme = toggleTheme;

    // Navigation
    const pageNames: Record<string, string> = {
      overview:"课程总览",kline:"K线基础",structure:"市场结构",signals:"信号K线",
      patterns:"K线形态",setups:"交易设置",probability:"概率思维",
      trendlines:"趋势线与通道",gap:"缺口理论",candles_advanced:"高级形态识别",
      measured_move:"测量目标",timeframe:"多时间框架",
      channels:"通道交易","trend-trading":"趋势交易策略","day-patterns":"日内模式",
      scenarios:"实战场景分析",journal:"交易日志",practice:"学习计划",quiz:"知识测验",glossary:"术语词典"
    };

    function goTo(page: string) {
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      document.querySelectorAll(".nav-item[data-page]").forEach(n => n.classList.remove("active"));
      const el = document.getElementById("page-" + page);
      if (el) el.classList.add("active");
      const nav = document.querySelector('.nav-item[data-page="' + page + '"]');
      if (nav) {
        nav.classList.add("active");
        const sec = nav.closest(".nav-section");
        if(sec) sec.classList.remove("collapsed");
      }
      const breadcrumb = document.getElementById("breadcrumb");
      if (breadcrumb) breadcrumb.innerHTML = "首页 / <span>" + (pageNames[page]||page) + "</span>";

      // Close mobile sidebar
      document.querySelector(".sidebar")?.classList.remove("open");
      document.querySelector(".sidebar-overlay")?.classList.remove("open");
    }

    (window as any).goTo = goTo;

    // Sidebar toggle
    function toggleSidebar() {
      document.querySelector(".sidebar")?.classList.toggle("open");
      document.querySelector(".sidebar-overlay")?.classList.toggle("open");
    }

    (window as any).toggleSidebar = toggleSidebar;

    // Section toggle
    function toggleSection(el: HTMLElement) {
      const section = el.closest(".nav-section");
      if (section) section.classList.toggle("collapsed");
    }

    (window as any).toggleSection = toggleSection;

    // Search navigation
    function searchNav(value: string) {
      const items = document.querySelectorAll(".nav-item");
      const sections = document.querySelectorAll(".nav-section");

      if (!value) {
        items.forEach((item) => (item as HTMLElement).style.display = "");
        sections.forEach((s) => (s as HTMLElement).style.display = "");
        return;
      }

      const lower = value.toLowerCase();
      items.forEach((item) => {
        const text = item.textContent?.toLowerCase() || "";
        (item as HTMLElement).style.display = text.includes(lower) ? "" : "none";
      });
    }

    (window as any).searchNav = searchNav;

    // Tab switching
    function switchTab(btn: HTMLElement, tabId: string) {
      const tabs = btn.closest(".tabs");
      if (tabs) {
        tabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }

      const page = btn.closest(".page");
      if (page) {
        page.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        const target = document.getElementById(tabId);
        if (target) target.classList.add("active");
      }
    }

    (window as any).switchTab = switchTab;

    // Checklist toggle
    function toggleCheck(el: HTMLElement) {
      el.classList.toggle("done");
      const textEl = el.nextElementSibling;
      if (textEl) textEl.classList.toggle("done");
      updateProgress();
    }

    (window as any).toggleCheck = toggleCheck;

    // Update progress
    function updateProgress() {
      const total = document.querySelectorAll(".check-icon").length;
      const done = document.querySelectorAll(".check-icon.done").length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      const pctEl = document.getElementById("progressPct");
      const fillEl = document.getElementById("progressFill");
      if (pctEl) pctEl.textContent = pct + "%";
      if (fillEl) (fillEl as HTMLElement).style.width = pct + "%";
    }

    // Overlay click to close sidebar
    const overlay = document.querySelector(".sidebar-overlay");
    if (overlay) {
      overlay.addEventListener("click", () => {
        document.querySelector(".sidebar")?.classList.remove("open");
        overlay.classList.remove("open");
      });
    }

  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
  );
}
