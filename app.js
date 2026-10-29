(() => {
  'use strict';
  const strings = {
    skip: '跳转到正文', navIdea: '项目理念', navProject: '项目组成', navStatus: '开发进展',
    eyebrow: '自主身份 · 私密通信', heroFirst: '你的邮箱。', heroSecond: '你的身份。',
    heroDescription: '让邮件围绕你的身份运作。DIDMail 将去中心化身份和端到端加密内容，带入一个拥有多种客户端的邮件系统。',
    explore: '了解项目', follow: '关注开发进展', heroStatus: '积极开发中 · 正在准备首次公开源码发布',
    privateLabel: '为私密通信而设计', personalNote: '一封私人信件', paperTitle: '多一点\n自主。',
    sealed: '在你的设备上加密', sceneNote: '信件属于你，密钥也由你保管。', illustration: '概念示意图',
    stripIdentity: '基于 DID 的身份', stripEncrypted: '端到端加密内容', stripLicense: 'Apache-2.0 开放基础', stripClients: '多个客户端，同一个项目。',
    ideaEyebrow: '01 / 项目理念', ideaTitle: '熟悉的邮件，\n不同的基础。',
    ideaDescription: '保留熟悉的收发体验，为身份和加密内容，探索新的承载方式。',
    identityTitle: '从你的身份开始。', identityDescription: '创建或导入 DID 钱包。身份建立在密码学密钥之上，而非邮件服务商创建的账号。',
    encryptedTitle: '在发送前封好信件。', encryptedDescription: '邮件内容和附件在客户端加密。邮件节点保存密文；隐私仍依赖密钥安全和整个系统的正确实现。',
    openTitle: '在开放基础上构建。', openDescription: '项目原创代码和文档采用 Apache-2.0。协议草案和共享兼容性向量，帮助不同客户端协同演进。',
    journeyEyebrow: '一封信的旅程', journeyNote: '系统流程简化示意', journeySender: '你的设备', journeySenderText: '撰写、加密、签名。', journeyNode: '邮件节点', journeyNodeText: '保存加密后的内容。', journeyRecipient: '对方的设备', journeyRecipientText: '获取、校验、解密。',
    projectEyebrow: '02 / 项目组成', projectTitle: '同一个项目，\n多种使用方式。', projectDescription: '共享协议、邮件服务端，以及面向不同设备的客户端，在同一个源码仓库中协同开发。',
    extensionTitle: '浏览器扩展', extensionText: '让邮箱靠近你的浏览体验。', mobileTitle: '移动应用', mobileText: '面向移动设备的原生交互体验。', flutterTitle: '跨平台客户端', flutterText: '探索不同平台上一致的使用体验。', serverTitle: '邮件节点与管理后台', serverText: '邮件服务基础设施与节点管理界面。', sdkTitle: '协议 SDK', sdkText: '共享编解码、加密实现和兼容性向量。', componentNote: '所有组件均在积极开发中，目前尚未提供公开下载。',
    statusEyebrow: '03 / 走向开放', statusTitle: '好的基础，\n值得认真打磨。', statusDescription: '我们正在准备 DIDMail 的首次公开源码发布。关注项目，了解互操作性验证、部署文档和各平台验收的后续进展。', join: '在 GitHub 关注 DIDMail', releaseLabel: '项目状态', releaseTitle: '积极开发中', releaseOne: '正在准备首次公开源码发布', releaseTwo: '协议与部署文档持续完善', releaseThree: '原创代码采用 Apache-2.0', releaseWarning: '目前不建议用于生产环境。本地测试不等于独立安全审计。',
    faqEyebrow: '你可能想了解', faqTitle: '开始之前，\n先了解这些。',
    faqOne: '在哪里下载客户端？', faqOneAnswer: '公开下载正在准备中。目前可以通过 GitHub 组织主页关注项目；发布与贡献指南会在准备就绪后提供。',
    faqTwo: '我可以运行邮件节点吗？', faqTwoAnswer: 'DIDMail 包含邮件节点服务端和管理后台。部署文档和托管运行环境仍在完善，使用说明会随公开源码提供。',
    faqThree: '开源许可证允许哪些使用方式？', faqThreeAnswer: 'Apache-2.0 在遵守条款的前提下允许商用、修改和再分发。第三方组件保留各自的原始许可证。', readLicense: '阅读许可证 ↗',
    faqFour: '加密会隐藏所有信息吗？', faqFourAnswer: '端到端加密保护邮件内容，并不会自动隐藏所有元数据，也不能替代设备安全和妥善的密钥管理。DIDMail 目前仍处于开发阶段。',
    footerLine: '自主身份，认真通信。'
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
    document.title = language === 'en' ? 'DIDMail — Your inbox. Your identity.' : 'DIDMail — 你的邮箱，你的身份。';
    document.querySelector('meta[name="description"]').content = language === 'en' ? 'DIDMail is building decentralized email around DID identities, end-to-end encrypted content, and clients across your devices.' : 'DIDMail 正在构建基于 DID 身份、端到端加密内容和多端客户端的去中心化邮件系统。';
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
