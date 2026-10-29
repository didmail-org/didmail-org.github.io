(() => {
  'use strict';
  const strings = {
  "navSecurity": "安全",
  "navExperience": "体验",
  "navTechnology": "技术",
  "skip": "跳转到正文",
  "eyebrow": "去中心化加密邮箱 / 基于 ARCBLOCK",
  "heroFirst": "以密钥，守护私密。",
  "heroSecond": "让通信，更有个性。",
  "heroDescription": "用私钥证明身份，让邮件在离开设备前完成加密。再用 NFT 信封与名片，为每一次交流赋予个性。",
  "explore": "探索 DIDMail",
  "howLink": "了解实现原理",
  "heroStatus": "开发中 · 正在准备首次公开源码发布",
  "paperTitle": "只给你看。\n由我签名。",
  "sealed": "端到端加密",
  "sceneNote": "信封表达个性，密钥守护内容。",
  "illustration": "概念示意",
  "stripIdentity": "私钥身份",
  "stripEncryption": "端到端加密",
  "stripNFT": "NFT 信封与名片",
  "stripArc": "ARCBLOCK × ARC",
  "securityEyebrow": "01 / 安全，从身份开始",
  "securityTitle": "地址可以公开。\n身份由私钥证明。",
  "securityIntro": "知道如何联系你，不应成为冒充你的起点。",
  "passwordTitle": "从“地址 + 密码”到私钥身份。",
  "passwordText": "传统密码登录可能遭遇猜测、撞库和钓鱼。DIDMail 用密钥建立身份，以签名授权关键操作；仅知道地址、猜中一个服务端登录密码，并不足以控制该身份。",
  "localTitle": "密码留在本地，密钥由你保管。",
  "localText": "本地密码用于解锁设备上受保护的钱包数据，不是交给服务商校验的邮箱登录密码。仍需强密码、安全备份和可信设备；私钥泄露会危及身份。",
  "contentTitle": "发送之前，先加密内容。",
  "contentText": "正文和附件在客户端为接收方加密。邮件节点处理密文，内容在客户端使用对应私钥解密。",
  "howEyebrow": "02 / 一封加密邮件如何抵达",
  "howNote": "密钥在两端，途中只有密文。",
  "senderTitle": "发送方设备",
  "senderText": "解析接收方密钥，加密内容，签名授权。",
  "nodesTitle": "选定的邮件节点",
  "nodesText": "保存并投递密文，记录相关链上凭证。",
  "recipientTitle": "接收方设备",
  "recipientText": "获取密文、校验凭证，在本地解密。",
  "decentralizedTitle": "点对点加密，服务节点协作。",
  "decentralizedText": "加密关系建立在发送方与接收方之间，服务端负责中转也无需持有正文解密密钥。DID 身份独立于单一服务商账号，用户可选择邮件节点，ArcBlock 链上资产与记录支持可验证的协作。去中心化并不代表不经过服务器，也不代表每个节点都保存全部邮件。",
  "nftEyebrow": "03 / 让通信更有个性",
  "nftTitle": "一封信，\n也可以很有你。",
  "nftIntro": "把信封与名片的仪式感带入数字世界：选择一封信如何呈现，也选择如何介绍自己。",
  "envelopeTitle": "NFT 信封，让发信多一点乐趣。",
  "envelopeText": "为日常问候、纪念时刻或商务往来选择不同信封。NFT 信封承载视觉个性，也可关联保存期限、价格等服务规则。图案赋予风格，加密保护内容。",
  "cardName": "建立新的连接。",
  "cardRole": "让身份，拥有自己的表达。",
  "namecardTitle": "NFT 名片，让相识值得留存。",
  "namecardText": "交换联系人时，递出一张有设计感的身份名片。NFT 名片为个人或品牌提供展示方式，将交流关系与背后的 DID 身份连接。",
  "audienceEyebrow": "04 / 个人表达，企业协作，节点运营",
  "enterpriseTitle": "企业的通信，\n企业的信息边界。",
  "enterpriseLead": "免费使用软件，加强机密信息保护。",
  "enterpriseText": "原创软件采用 Apache-2.0，企业可免费使用并自行部署，无需支付软件授权费。客户端加密与自主运营节点，为商业往来提供更可控的信息边界，并结合企业自身的密钥管理和访问策略。",
  "enterpriseNote": "基础设施、运维、链上交易及收费节点服务仍可能产生费用。企业部署需结合当前开发状态评估。",
  "operatorTitle": "运营一个节点，\n提供有价值的服务。",
  "operatorLead": "通过提供邮件服务获得收益。",
  "operatorText": "运营者可提供邮件投递、加密存储，设置服务价格与保存策略，并按协议费用规则从付费使用中获得收入。让提供基础设施的节点，获得与实际服务相对应的回报。",
  "operatorNote": "收入取决于使用量、定价、协议费用分配和运营成本，不保证收益；测试网络代币不等于实际现金收入。",
  "techEyebrow": "05 / 基于 ARCBLOCK 技术构建",
  "techTitle": "身份、资产，\n与现代运行时。",
  "techIntro": "将密码学身份、可编程数字资产与可组合应用运行时，融入同一套邮件架构。",
  "didTechTitle": "ArcBlock DID",
  "didTechText": "以密钥建立身份，通过签名授权操作，结合链上记录与资产支持可验证协作。",
  "didDocs": "了解更多",
  "arcTechTitle": "ARC · AFS · AUP",
  "arcTechText": "结合 ARC 的身份、会话和资源访问能力，管理界面采用 AUP 布局与 Web Device 组件构建。",
  "arcDocs": "了解更多",
  "workerTechTitle": "Cloudflare Workers · D1 · R2",
  "workerTechText": "基于 Workers 的业务后端，结合结构化元数据和加密对象存储，通过 Service Binding 或 HTTPS 连接 ARC。",
  "workerDocs": "了解更多",
  "protocolTechTitle": "共享协议，多端协同。",
  "protocolTechText": "TypeScript 协议实现与兼容性向量连接浏览器、React Native 和 Flutter 客户端；新协议草案与现有客户端加密实现持续演进。",
  "techNote": "ARC 集成与 Workers 后端已进行本地验证；托管部署验收与独立安全审查仍待完成。",
  "statusEyebrow": "06 / 开放的基础",
  "statusTitle": "开放探索，\n持续演进。",
  "statusDescription": "DIDMail 正在积极开发，准备首次公开源码发布，完善互操作性验证与部署文档。关注项目，一起见证它逐步成形。",
  "join": "在 GitHub 关注 DIDMail",
  "releaseTitle": "积极开发中",
  "releaseOne": "首次公开源码发布准备中",
  "releaseTwo": "原创代码采用 Apache-2.0",
  "releaseThree": "浏览器、移动端与跨平台客户端",
  "releaseWarning": "目前处于开发阶段，尚未确认生产就绪，也未完成独立安全审计。",
  "faqEyebrow": "你可能想了解",
  "faqTitle": "值得了解的\n几个细节。",
  "faqOne": "知道我的地址，就能打开邮箱吗？",
  "faqOneAnswer": "地址用于标识身份，不是解密密钥。读取加密内容需要对应私钥；本地钱包数据、密码和备份仍应妥善保管。",
  "faqTwo": "企业可以免费使用吗？",
  "faqTwoAnswer": "原创软件采用 Apache-2.0，遵守许可条款即可免费商用、自行部署。托管、运维、服务和链上费用另计；第三方组件保留各自许可证。",
  "faqThree": "点对点加密，是否等于无服务器投递？",
  "faqThreeAnswer": "不是。点对点描述发送方与接收方之间的加密关系，节点仍负责保存和中转密文。投递与可用性依赖所选服务；加密不会自动隐藏路由、支付或链上元数据。",
  "faqFour": "现在可以使用吗？",
  "faqFourAnswer": "公开下载与部署说明正在准备中。本页介绍项目与架构，配图为概念示意。请通过 GitHub 关注源码与版本发布进展。",
  "footerLine": "以密钥守护私密，让通信更有个性。"
};
  const elements = [...document.querySelectorAll('[data-i18n]')];
  const original = new Map(elements.map(el => [el, el.innerHTML]));
  const languageButton = document.querySelector('.language');
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.getElementById('navigation');
  let language = 'en';
  function setLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language;
    for (const el of elements) {
      if (language === 'en') el.innerHTML = original.get(el);
      else if (Object.hasOwn(strings, el.dataset.i18n)) el.textContent = strings[el.dataset.i18n];
    }
    languageButton.innerHTML = language === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
    languageButton.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
    navigation.setAttribute('aria-label', language === 'en' ? 'Main navigation' : '主导航');
    menuButton.setAttribute('aria-label', language === 'en' ? 'Toggle navigation' : '切换导航菜单');
    document.querySelector('.mail-scene').setAttribute('aria-label', language === 'en' ? 'Illustration of a client-encrypted message' : '客户端加密信件概念示意图');
    document.title = language === 'en' ? 'DIDMail — Private by key. Personal by design.' : 'DIDMail — 以密钥守护私密，让通信更有个性。';
    document.querySelector('meta[name="description"]').content = language === 'en' ? 'DIDMail: private-key identity, end-to-end encrypted email, NFT envelopes and namecards. Built on ArcBlock technology and ARC.' : 'DIDMail：基于私钥身份与端到端加密的去中心化邮箱，结合 NFT 信封、名片和 ArcBlock、ARC 技术。';
    try { localStorage.setItem('didmail-language', language); } catch { /* The page also works without browser storage. */ }
  }
  function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { const wasOpen = navigation.classList.contains('open'); closeMenu(); if (wasOpen) menuButton.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  try { if (localStorage.getItem('didmail-language') === 'zh') setLanguage('zh'); } catch { /* Storage is optional. */ }
})();
