export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "cs", label: "Čeština" },
  { code: "zh", label: "中文" },
  { code: "pt", label: "Português" },
  { code: "th", label: "ไทย" },
  { code: "is", label: "Íslenska" },
  { code: "hi", label: "हिन्दी" },
  { code: "af", label: "Afrikaans" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export type Dictionary = {
  nav: { process: string; results: string; about: string; contact: string };
  hero: { tagline: string; headline: string; sub: string };
  craft: {
    section: string;
    items: { title: string; body: string }[];
  };
  engine: {
    heading: string;
    label: string;
    stages: { title: string; body: string }[];
  };
  results: {
    heading: string;
    label: string;
    items: { case: string; label: string; metric: string; note: string }[];
  };
  about: {
    section: string;
    diagramCaption: string;
    diagramAlt: string;
    lead: string;
    bio: string;
  };
  cta: { button: string };
  footer: { location: string; copyright: string };
};

const en: Dictionary = {
  nav: { process: "Process", results: "Results", about: "About", contact: "Contact" },
  hero: {
    tagline: "[ Revenue Architecture ]",
    headline: "International sales expert. I build sales engines.",
    sub: "Personal outreach, process engineering, and consultative video closing — assembled into a repeatable engine that crosses borders.",
  },
  craft: {
    section: "01 / Craft",
    items: [
      {
        title: "Personal Outreach",
        body: "I write the first message myself. Researched, specific, and human — built to start a conversation a buyer actually wants to have.",
      },
      {
        title: "Process at Every Stage",
        body: "Outreach, qualification, demo, proposal, close. Each stage has an owner, a definition of done, and a metric. Nothing is left to instinct.",
      },
      {
        title: "Consultative Video & Tailored Closing",
        body: "Video calls are for listening, diagnosing and consulting — never for closing. The close happens after, through perfected proposals and closing strategies built around what the call revealed.",
      },
      {
        title: "Analyse & Perfect",
        body: "Every conversation is reviewed. Every drop-off has a hypothesis. The playbook is rewritten the moment the data demands it.",
      },
    ],
  },
  engine: {
    heading: "The Engine, Stage by Stage",
    label: "02 / Process",
    stages: [
      { title: "Outreach", body: "Personal, researched, multi-channel outreach. Real conversations, not sequences. Every message earns the next reply." },
      { title: "Qualification", body: "Sharp discovery frameworks that separate signal from noise. The right deals advance, the wrong ones close fast." },
      { title: "Consultative Video", body: "Live calls focused on diagnosis and discovery — understand the real problem and co-architect the buying case with the prospect. No pressure to close on the call." },
      { title: "Proposal & Closing Strategy", body: "Tailored proposals and a closing strategy that follows the call: mutual action plans, stakeholder mapping, procurement navigation, and clean signatures across time zones." },
      { title: "Analyse & Perfect", body: "Every stage instrumented and reviewed weekly. Conversion data drives the next iteration of the playbook." },
    ],
  },
  results: {
    heading: "Selected Impact",
    label: "Verified Performance 2020—2023",
    items: [
      { case: "Case 01", label: "International Job Board", metric: "230+ Clients", note: "Sold job ads to 230+ clients across 48 countries via automated, process-driven outbound." },
      { case: "Case 02", label: "48 Countries Covered", metric: "48 Markets", note: "Culture-first prospecting localized at scale — one engine, dozens of buying cultures." },
      { case: "Case 03", label: "Card Counting Era", metric: "+10,000% ROI", note: "Eight years in casinos worldwide growing initial bankrolls 100x through disciplined edge-play." },
    ],
  },
  about: {
    section: "03 / The Operator",
    diagramCaption: "Diagram / The Sales Engine — Hand-drawn Analogy",
    diagramAlt: "The sales engine — a jet engine analogy showing intake, compression, combustion and thrust as stages of an international sales process",
    lead: "I reach culture first. Then together we find the real reasons, tell a good story, and finish on a valuable solution — sealed with a promise of a relationship I intend to keep and to overcome for.",
    bio: "Years of selling job ads internationally to 230+ clients across 48 countries through automated, process-disciplined outbound. Before that, eight years counting cards in casinos around the world — turning small bankrolls into 100x returns through edge, patience, and process. Same operator, same instinct: respect the math, respect the room, win quietly.",
  },
  cta: { button: "Start a Conversation" },
  footer: { location: "Based in Bangkok / Available Globally", copyright: "© 2026 Gustaw Jacewicz" },
};

const de: Dictionary = {
  nav: { process: "Prozess", results: "Ergebnisse", about: "Über mich", contact: "Kontakt" },
  hero: {
    tagline: "[ Revenue Architecture ]",
    headline: "Internationaler Vertriebsexperte. Ich baue Sales-Engines.",
    sub: "Persönliche Ansprache, Prozess-Engineering und beratende Video-Calls — zusammengefügt zu einer wiederholbaren Engine, die Grenzen überwindet.",
  },
  craft: {
    section: "01 / Handwerk",
    items: [
      { title: "Persönliche Ansprache", body: "Die erste Nachricht schreibe ich selbst. Recherchiert, spezifisch, menschlich — gebaut, um ein Gespräch zu starten, das der Käufer wirklich führen möchte." },
      { title: "Prozess in jeder Phase", body: "Ansprache, Qualifizierung, Demo, Angebot, Abschluss. Jede Phase hat einen Verantwortlichen, ein Ziel und eine Kennzahl. Nichts bleibt dem Instinkt überlassen." },
      { title: "Beratende Video-Calls & maßgeschneiderter Abschluss", body: "Video-Calls dienen dem Zuhören, Diagnostizieren und Beraten — niemals dem Abschluss. Der Abschluss erfolgt danach, durch ausgefeilte Angebote und Strategien, basierend auf den Erkenntnissen des Gesprächs." },
      { title: "Analysieren & Perfektionieren", body: "Jedes Gespräch wird ausgewertet. Jeder Abbruch hat eine Hypothese. Das Playbook wird neu geschrieben, sobald die Daten es verlangen." },
    ],
  },
  engine: {
    heading: "Die Engine, Phase für Phase",
    label: "02 / Prozess",
    stages: [
      { title: "Ansprache", body: "Persönliche, recherchierte Multi-Channel-Ansprache. Echte Gespräche, keine Sequenzen. Jede Nachricht verdient die nächste Antwort." },
      { title: "Qualifizierung", body: "Klare Discovery-Frameworks trennen Signal von Rauschen. Die richtigen Deals gehen weiter, die falschen schließen schnell." },
      { title: "Beratendes Video", body: "Live-Calls zur Diagnose und Discovery — das echte Problem verstehen und den Buying-Case gemeinsam mit dem Interessenten entwickeln. Kein Druck zum Abschluss im Call." },
      { title: "Angebot & Abschlussstrategie", body: "Maßgeschneiderte Angebote und eine Abschlussstrategie nach dem Call: Mutual Action Plans, Stakeholder-Mapping, Procurement-Navigation und saubere Unterschriften über Zeitzonen hinweg." },
      { title: "Analysieren & Perfektionieren", body: "Jede Phase wird gemessen und wöchentlich überprüft. Conversion-Daten treiben die nächste Iteration des Playbooks." },
    ],
  },
  results: {
    heading: "Ausgewählte Wirkung",
    label: "Verifizierte Performance 2020—2023",
    items: [
      { case: "Fall 01", label: "Internationale Jobbörse", metric: "230+ Kunden", note: "Stellenanzeigen an 230+ Kunden in 48 Ländern verkauft — durch automatisiertes, prozessgetriebenes Outbound." },
      { case: "Fall 02", label: "48 Länder abgedeckt", metric: "48 Märkte", note: "Kultur-zuerst-Prospecting, lokalisiert in Skala — eine Engine, dutzende Kaufkulturen." },
      { case: "Fall 03", label: "Card-Counting-Ära", metric: "+10.000% ROI", note: "Acht Jahre in Casinos weltweit — Startkapital um das 100-fache vermehrt durch disziplinierten Edge-Play." },
    ],
  },
  about: {
    section: "03 / Der Operator",
    diagramCaption: "Diagramm / Die Sales-Engine — handgezeichnete Analogie",
    diagramAlt: "Die Sales-Engine — eine Düsentriebwerk-Analogie mit Ansaugung, Verdichtung, Verbrennung und Schub als Phasen eines internationalen Vertriebsprozesses",
    lead: "Ich erreiche zuerst die Kultur. Dann finden wir gemeinsam die wahren Gründe, erzählen eine gute Geschichte und schließen mit einer wertvollen Lösung ab — besiegelt mit dem Versprechen einer Beziehung, die ich halten und für die ich kämpfen werde.",
    bio: "Jahre des internationalen Verkaufs von Stellenanzeigen an 230+ Kunden in 48 Ländern durch automatisiertes, prozessdiszipliniertes Outbound. Davor acht Jahre Karten zählen in Casinos weltweit — kleine Bankrolls in 100-fache Renditen verwandeln durch Edge, Geduld und Prozess. Derselbe Operator, derselbe Instinkt: Respektiere die Mathematik, respektiere den Raum, gewinne leise.",
  },
  cta: { button: "Gespräch starten" },
  footer: { location: "Basis in Bangkok / Weltweit verfügbar", copyright: "© 2026 Gustaw Jacewicz" },
};

const ru: Dictionary = {
  nav: { process: "Процесс", results: "Результаты", about: "Обо мне", contact: "Контакт" },
  hero: {
    tagline: "[ Архитектура выручки ]",
    headline: "Эксперт по международным продажам. Я строю движки продаж.",
    sub: "Персональный аутрич, инженерия процессов и консультативные видеозвонки — собранные в повторяемый движок, который работает через границы.",
  },
  craft: {
    section: "01 / Ремесло",
    items: [
      { title: "Персональный аутрич", body: "Первое сообщение я пишу сам. Исследованное, конкретное и человечное — чтобы начать разговор, который покупатель действительно хочет вести." },
      { title: "Процесс на каждом этапе", body: "Аутрич, квалификация, демо, предложение, закрытие. У каждого этапа есть владелец, определение готовности и метрика. Ничего не оставлено на интуицию." },
      { title: "Консультативное видео и индивидуальное закрытие", body: "Видеозвонки — для слушания, диагностики и консультаций, а не для закрытия. Закрытие происходит после — через выверенные предложения и стратегии, построенные на инсайтах из звонка." },
      { title: "Анализ и совершенствование", body: "Каждый разговор разбирается. У каждой потери есть гипотеза. Плейбук переписывается, как только этого требуют данные." },
    ],
  },
  engine: {
    heading: "Движок, этап за этапом",
    label: "02 / Процесс",
    stages: [
      { title: "Аутрич", body: "Персональный, исследованный, мультиканальный аутрич. Реальные разговоры, а не последовательности. Каждое сообщение заслуживает следующего ответа." },
      { title: "Квалификация", body: "Чёткие discovery-фреймворки отделяют сигнал от шума. Правильные сделки движутся дальше, неправильные — быстро закрываются." },
      { title: "Консультативное видео", body: "Живые звонки для диагностики и discovery — понять реальную проблему и вместе с клиентом выстроить кейс покупки. Никакого давления на закрытие в звонке." },
      { title: "Предложение и стратегия закрытия", body: "Индивидуальные предложения и стратегия закрытия после звонка: mutual action plans, карта стейкхолдеров, навигация по procurement и чистые подписи через часовые пояса." },
      { title: "Анализ и совершенствование", body: "Каждый этап измеряется и пересматривается еженедельно. Данные конверсии двигают следующую итерацию плейбука." },
    ],
  },
  results: {
    heading: "Избранные результаты",
    label: "Подтверждённая эффективность 2020—2023",
    items: [
      { case: "Кейс 01", label: "Международная джоб-борда", metric: "230+ клиентов", note: "Продажа объявлений 230+ клиентам в 48 странах через автоматизированный, процессный outbound." },
      { case: "Кейс 02", label: "Покрытие 48 стран", metric: "48 рынков", note: "Культура-в-первую-очередь проспектинг, локализованный в масштабе — один движок, десятки покупательских культур." },
      { case: "Кейс 03", label: "Эра подсчёта карт", metric: "+10 000% ROI", note: "Восемь лет в казино по всему миру — стартовый капитал умножен в 100 раз через дисциплинированную edge-игру." },
    ],
  },
  about: {
    section: "03 / Оператор",
    diagramCaption: "Диаграмма / Движок продаж — нарисованная от руки аналогия",
    diagramAlt: "Движок продаж — аналогия с реактивным двигателем: забор, сжатие, сгорание и тяга как этапы международного процесса продаж",
    lead: "Я сначала достигаю культуры. Затем вместе мы находим настоящие причины, рассказываем хорошую историю и завершаем ценным решением — скреплённым обещанием отношений, которые я намерен сохранить и за которые буду бороться.",
    bio: "Годы международной продажи объявлений о работе 230+ клиентам в 48 странах через автоматизированный, дисциплинированный outbound. До этого — восемь лет подсчёта карт в казино по всему миру: маленькие банкроллы превращались в 100x доходность через edge, терпение и процесс. Тот же оператор, тот же инстинкт: уважай математику, уважай комнату, выигрывай тихо.",
  },
  cta: { button: "Начать разговор" },
  footer: { location: "База в Бангкоке / Доступен глобально", copyright: "© 2026 Gustaw Jacewicz" },
};

const cs: Dictionary = {
  nav: { process: "Proces", results: "Výsledky", about: "O mně", contact: "Kontakt" },
  hero: {
    tagline: "[ Architektura výnosů ]",
    headline: "Expert na mezinárodní prodej. Stavím prodejní stroje.",
    sub: "Osobní outreach, procesní inženýrství a konzultační video hovory — sestavené do opakovatelného stroje, který překračuje hranice.",
  },
  craft: {
    section: "01 / Řemeslo",
    items: [
      { title: "Osobní outreach", body: "První zprávu píšu sám. Prozkoumaná, konkrétní a lidská — postavená tak, aby zahájila rozhovor, který kupující skutečně chce vést." },
      { title: "Proces v každé fázi", body: "Outreach, kvalifikace, demo, nabídka, uzavření. Každá fáze má vlastníka, definici hotového a metriku. Nic není ponecháno instinktu." },
      { title: "Konzultační video a uzavírání na míru", body: "Video hovory slouží k naslouchání, diagnostice a poradenství — nikdy k uzavírání. Uzavření přichází potom, skrze vypilované nabídky a strategie postavené na tom, co hovor odhalil." },
      { title: "Analyzovat a zdokonalovat", body: "Každý rozhovor je zhodnocen. Každý odpad má hypotézu. Playbook se přepíše ve chvíli, kdy si to data vyžádají." },
    ],
  },
  engine: {
    heading: "Stroj, fáze po fázi",
    label: "02 / Proces",
    stages: [
      { title: "Outreach", body: "Osobní, prozkoumaný, multi-kanálový outreach. Skutečné rozhovory, ne sekvence. Každá zpráva si zaslouží další odpověď." },
      { title: "Kvalifikace", body: "Ostré discovery rámce oddělují signál od šumu. Správné obchody postupují, špatné se rychle uzavírají." },
      { title: "Konzultační video", body: "Živé hovory zaměřené na diagnostiku a discovery — porozumět skutečnému problému a společně s klientem navrhnout buying case. Žádný tlak na uzavření v hovoru." },
      { title: "Nabídka a strategie uzavření", body: "Nabídky na míru a strategie uzavření po hovoru: mutual action plans, mapování stakeholderů, navigace procurementem a čisté podpisy napříč časovými pásmy." },
      { title: "Analyzovat a zdokonalovat", body: "Každá fáze je měřena a týdně revidována. Konverzní data pohánějí další iteraci playbooku." },
    ],
  },
  results: {
    heading: "Vybraný dopad",
    label: "Ověřený výkon 2020—2023",
    items: [
      { case: "Případ 01", label: "Mezinárodní pracovní portál", metric: "230+ klientů", note: "Prodej inzerátů 230+ klientům ve 48 zemích skrze automatizovaný, procesně řízený outbound." },
      { case: "Případ 02", label: "48 zemí pokryto", metric: "48 trhů", note: "Kultura-na-prvním-místě prospecting lokalizovaný v měřítku — jeden stroj, desítky kupních kultur." },
      { case: "Případ 03", label: "Éra počítání karet", metric: "+10 000 % ROI", note: "Osm let v kasinech po celém světě — počáteční bankroll zvýšen 100x skrze disciplinovanou edge hru." },
    ],
  },
  about: {
    section: "03 / Operátor",
    diagramCaption: "Diagram / Prodejní stroj — ručně kreslená analogie",
    diagramAlt: "Prodejní stroj — analogie s proudovým motorem ukazující sání, kompresi, spalování a tah jako fáze mezinárodního prodejního procesu",
    lead: "Nejprve oslovuji kulturu. Pak společně najdeme skutečné důvody, vyprávíme dobrý příběh a zakončíme hodnotným řešením — zpečetěným slibem vztahu, který mám v úmyslu dodržet a za který budu bojovat.",
    bio: "Roky mezinárodního prodeje inzerátů 230+ klientům ve 48 zemích skrze automatizovaný, procesně disciplinovaný outbound. Předtím osm let počítání karet v kasinech po celém světě — proměna malých bankrollů v 100násobné výnosy skrze edge, trpělivost a proces. Stejný operátor, stejný instinkt: respektuj matematiku, respektuj místnost, vyhrávej tiše.",
  },
  cta: { button: "Zahájit konverzaci" },
  footer: { location: "Sídlo v Bangkoku / K dispozici globálně", copyright: "© 2026 Gustaw Jacewicz" },
};

const zh: Dictionary = {
  nav: { process: "流程", results: "成果", about: "关于", contact: "联系" },
  hero: {
    tagline: "[ 营收架构 ]",
    headline: "国际销售专家。我打造销售引擎。",
    sub: "个性化触达、流程工程与顾问式视频沟通——组装成一个可复制、跨越国界的引擎。",
  },
  craft: {
    section: "01 / 匠艺",
    items: [
      { title: "个性化触达", body: "第一条信息由我亲自撰写。经过研究、具体而富有人情味——目的是开启一段买家真正愿意进行的对话。" },
      { title: "每个阶段都有流程", body: "触达、资格审核、演示、提案、成交。每个阶段都有负责人、完成定义和指标。没有任何环节依靠直觉。" },
      { title: "顾问式视频与定制化成交", body: "视频通话用于倾听、诊断与咨询——绝不用于成交。成交发生在通话之后,通过基于通话洞察打磨的提案与策略实现。" },
      { title: "分析与完善", body: "每次对话都会被复盘。每个流失点都有假设。当数据要求时,Playbook 立刻被改写。" },
    ],
  },
  engine: {
    heading: "引擎,逐阶段拆解",
    label: "02 / 流程",
    stages: [
      { title: "触达", body: "个性化、经过研究的多渠道触达。是真实对话,而非序列。每条信息都赢得下一次回复。" },
      { title: "资格审核", body: "清晰的 discovery 框架将信号与噪音分开。对的机会推进,错的迅速关闭。" },
      { title: "顾问式视频", body: "聚焦诊断与 discovery 的实时通话——理解真正的问题,与潜在客户共同构建购买案例。通话中不施加成交压力。" },
      { title: "提案与成交策略", body: "通话之后的定制化提案与成交策略:Mutual Action Plans、利益相关者地图、采购流程导航,以及跨时区的干净签约。" },
      { title: "分析与完善", body: "每个阶段都被衡量并每周复盘。转化数据驱动 Playbook 的下一次迭代。" },
    ],
  },
  results: {
    heading: "精选成绩",
    label: "已验证业绩 2020—2023",
    items: [
      { case: "案例 01", label: "国际招聘平台", metric: "230+ 客户", note: "通过自动化、流程驱动的外联,向 48 个国家的 230+ 客户销售招聘广告。" },
      { case: "案例 02", label: "覆盖 48 国", metric: "48 个市场", note: "文化优先的潜客开发在规模化中本地化——一个引擎,数十种购买文化。" },
      { case: "案例 03", label: "算牌时代", metric: "+10,000% 投资回报", note: "在全球赌场度过的八年——通过纪律严明的 edge play,将初始资金增长 100 倍。" },
    ],
  },
  about: {
    section: "03 / 操作者",
    diagramCaption: "图解 / 销售引擎——手绘类比",
    diagramAlt: "销售引擎——一个喷气发动机的类比,展示进气、压缩、燃烧和推力作为国际销售流程的阶段",
    lead: "我先抵达文化。然后我们一起找到真正的原因,讲一个好故事,以一个有价值的解决方案收尾——以一段我打算守护并为之奋斗的关系作为承诺。",
    bio: "多年国际销售招聘广告经验,通过自动化、流程化的外联触达 48 国的 230+ 客户。在此之前,八年世界各地赌场算牌生涯——通过 edge、耐心与流程,将小本金转化为 100 倍回报。同一个操作者,同一种本能:尊重数学,尊重房间,安静地赢。",
  },
  cta: { button: "开始对话" },
  footer: { location: "驻地曼谷 / 全球可用", copyright: "© 2026 Gustaw Jacewicz" },
};

const pt: Dictionary = {
  nav: { process: "Processo", results: "Resultados", about: "Sobre", contact: "Contato" },
  hero: {
    tagline: "[ Arquitetura de Receita ]",
    headline: "Especialista em vendas internacionais. Construo motores de vendas.",
    sub: "Outreach pessoal, engenharia de processo e chamadas de vídeo consultivas — montados em um motor repetível que cruza fronteiras.",
  },
  craft: {
    section: "01 / Ofício",
    items: [
      { title: "Outreach Pessoal", body: "Eu escrevo a primeira mensagem. Pesquisada, específica e humana — feita para iniciar uma conversa que o comprador realmente quer ter." },
      { title: "Processo em Cada Etapa", body: "Outreach, qualificação, demo, proposta, fechamento. Cada etapa tem um dono, uma definição de pronto e uma métrica. Nada é deixado ao instinto." },
      { title: "Vídeo Consultivo & Fechamento Sob Medida", body: "Chamadas de vídeo são para ouvir, diagnosticar e aconselhar — nunca para fechar. O fechamento acontece depois, através de propostas e estratégias afinadas com base no que a chamada revelou." },
      { title: "Analisar & Aperfeiçoar", body: "Cada conversa é revisada. Cada perda tem uma hipótese. O playbook é reescrito no momento em que os dados exigem." },
    ],
  },
  engine: {
    heading: "O Motor, Etapa por Etapa",
    label: "02 / Processo",
    stages: [
      { title: "Outreach", body: "Outreach pessoal, pesquisado e multicanal. Conversas reais, não sequências. Cada mensagem merece a próxima resposta." },
      { title: "Qualificação", body: "Frameworks de discovery afiados que separam sinal de ruído. Os negócios certos avançam, os errados se fecham rápido." },
      { title: "Vídeo Consultivo", body: "Chamadas ao vivo focadas em diagnóstico e discovery — entender o problema real e co-construir o caso de compra com o prospect. Sem pressão para fechar na chamada." },
      { title: "Proposta & Estratégia de Fechamento", body: "Propostas sob medida e uma estratégia de fechamento após a chamada: mutual action plans, mapeamento de stakeholders, navegação de procurement e assinaturas limpas entre fusos horários." },
      { title: "Analisar & Aperfeiçoar", body: "Cada etapa instrumentada e revisada semanalmente. Dados de conversão dirigem a próxima iteração do playbook." },
    ],
  },
  results: {
    heading: "Impacto Selecionado",
    label: "Performance Verificada 2020—2023",
    items: [
      { case: "Caso 01", label: "Job Board Internacional", metric: "230+ Clientes", note: "Anúncios de vagas vendidos a 230+ clientes em 48 países via outbound automatizado e orientado a processo." },
      { case: "Caso 02", label: "48 Países Cobertos", metric: "48 Mercados", note: "Prospecção cultura-primeiro localizada em escala — um motor, dezenas de culturas de compra." },
      { case: "Caso 03", label: "Era da Contagem de Cartas", metric: "+10.000% ROI", note: "Oito anos em cassinos pelo mundo — bankrolls iniciais multiplicados 100x através de edge play disciplinado." },
    ],
  },
  about: {
    section: "03 / O Operador",
    diagramCaption: "Diagrama / O Motor de Vendas — Analogia Desenhada à Mão",
    diagramAlt: "O motor de vendas — uma analogia com motor a jato mostrando admissão, compressão, combustão e empuxo como etapas de um processo de vendas internacional",
    lead: "Eu alcanço a cultura primeiro. Então juntos encontramos as razões reais, contamos uma boa história e terminamos numa solução de valor — selada com a promessa de uma relação que pretendo manter e pela qual vou lutar.",
    bio: "Anos vendendo anúncios de vagas internacionalmente para 230+ clientes em 48 países através de outbound automatizado e disciplinado por processo. Antes disso, oito anos contando cartas em cassinos pelo mundo — transformando pequenos bankrolls em retornos de 100x através de edge, paciência e processo. Mesmo operador, mesmo instinto: respeite a matemática, respeite a sala, vença em silêncio.",
  },
  cta: { button: "Iniciar uma Conversa" },
  footer: { location: "Baseado em Bangkok / Disponível Globalmente", copyright: "© 2026 Gustaw Jacewicz" },
};

const th: Dictionary = {
  nav: { process: "กระบวนการ", results: "ผลลัพธ์", about: "เกี่ยวกับ", contact: "ติดต่อ" },
  hero: {
    tagline: "[ สถาปัตยกรรมรายได้ ]",
    headline: "ผู้เชี่ยวชาญด้านการขายระหว่างประเทศ ผมสร้างเครื่องยนต์การขาย",
    sub: "การติดต่อส่วนบุคคล วิศวกรรมกระบวนการ และวิดีโอคอลเชิงให้คำปรึกษา — ประกอบเป็นเครื่องยนต์ที่ทำซ้ำได้และข้ามพรมแดน",
  },
  craft: {
    section: "01 / ฝีมือ",
    items: [
      { title: "การติดต่อส่วนบุคคล", body: "ผมเขียนข้อความแรกด้วยตัวเอง ผ่านการค้นคว้า เฉพาะเจาะจง และเป็นมนุษย์ — สร้างขึ้นเพื่อเริ่มบทสนทนาที่ผู้ซื้ออยากมีจริง ๆ" },
      { title: "กระบวนการในทุกขั้นตอน", body: "การติดต่อ การคัดกรอง เดโม ข้อเสนอ การปิดการขาย แต่ละขั้นตอนมีเจ้าของ มีนิยามว่าเสร็จ และมีตัวชี้วัด ไม่มีอะไรปล่อยให้สัญชาตญาณ" },
      { title: "วิดีโอเชิงให้คำปรึกษาและการปิดการขายเฉพาะตัว", body: "วิดีโอคอลมีไว้เพื่อฟัง วินิจฉัย และให้คำปรึกษา — ไม่ใช่เพื่อปิดการขาย การปิดเกิดขึ้นภายหลัง ผ่านข้อเสนอและกลยุทธ์ที่ขัดเกลาจากสิ่งที่การพูดคุยเผยให้เห็น" },
      { title: "วิเคราะห์และปรับปรุง", body: "ทุกบทสนทนาถูกทบทวน ทุกการหลุดมีสมมติฐาน Playbook จะถูกเขียนใหม่ทันทีที่ข้อมูลเรียกร้อง" },
    ],
  },
  engine: {
    heading: "เครื่องยนต์ ทีละขั้น",
    label: "02 / กระบวนการ",
    stages: [
      { title: "การติดต่อ", body: "การติดต่อส่วนบุคคล ผ่านการค้นคว้า หลายช่องทาง บทสนทนาจริง ไม่ใช่ลำดับสคริปต์ ทุกข้อความต้องคู่ควรกับการตอบกลับครั้งต่อไป" },
      { title: "การคัดกรอง", body: "กรอบ discovery ที่คมชัดแยกสัญญาณออกจากเสียงรบกวน ดีลที่ใช่เดินหน้า ดีลที่ผิดปิดเร็ว" },
      { title: "วิดีโอเชิงให้คำปรึกษา", body: "การโทรสดที่มุ่งวินิจฉัยและ discovery — เข้าใจปัญหาที่แท้จริงและร่วมออกแบบเคสการซื้อกับลูกค้า ไม่มีแรงกดดันให้ปิดในระหว่างคอล" },
      { title: "ข้อเสนอและกลยุทธ์การปิด", body: "ข้อเสนอเฉพาะและกลยุทธ์การปิดที่ตามหลังคอล: mutual action plans การทำแผน stakeholder การนำทาง procurement และการเซ็นสัญญาที่สะอาดข้ามโซนเวลา" },
      { title: "วิเคราะห์และปรับปรุง", body: "ทุกขั้นถูกวัดและทบทวนรายสัปดาห์ ข้อมูลคอนเวอร์ชันขับเคลื่อน Playbook รุ่นต่อไป" },
    ],
  },
  results: {
    heading: "ผลกระทบที่คัดสรร",
    label: "ผลงานที่ตรวจสอบแล้ว 2020—2023",
    items: [
      { case: "เคส 01", label: "เว็บประกาศงานนานาชาติ", metric: "ลูกค้า 230+ ราย", note: "ขายโฆษณาประกาศงานให้ลูกค้า 230+ รายใน 48 ประเทศ ผ่าน outbound แบบอัตโนมัติและขับเคลื่อนด้วยกระบวนการ" },
      { case: "เคส 02", label: "ครอบคลุม 48 ประเทศ", metric: "48 ตลาด", note: "การหาลูกค้าแบบวัฒนธรรมมาก่อน ปรับให้เข้ากับท้องถิ่นในระดับใหญ่ — เครื่องยนต์เดียว วัฒนธรรมการซื้อนับสิบ" },
      { case: "เคส 03", label: "ยุคนับไพ่", metric: "+10,000% ROI", note: "แปดปีในคาสิโนทั่วโลก — เพิ่มทุนเริ่มต้น 100 เท่าผ่าน edge play ที่มีวินัย" },
    ],
  },
  about: {
    section: "03 / ผู้ดำเนินงาน",
    diagramCaption: "ไดอะแกรม / เครื่องยนต์การขาย — การเปรียบเทียบที่วาดด้วยมือ",
    diagramAlt: "เครื่องยนต์การขาย — การเปรียบเทียบกับเครื่องยนต์ไอพ่นแสดงการดูดอากาศ การอัด การเผาไหม้ และแรงขับเป็นขั้นตอนของกระบวนการขายระหว่างประเทศ",
    lead: "ผมเข้าถึงวัฒนธรรมก่อน จากนั้นเราจะพบเหตุผลที่แท้จริงร่วมกัน เล่าเรื่องที่ดี และจบด้วยทางออกที่มีคุณค่า — ปิดท้ายด้วยคำสัญญาแห่งความสัมพันธ์ที่ผมตั้งใจรักษาและฝ่าฟัน",
    bio: "หลายปีของการขายโฆษณาประกาศงานระดับนานาชาติให้ลูกค้า 230+ รายใน 48 ประเทศ ผ่าน outbound อัตโนมัติที่มีวินัยทางกระบวนการ ก่อนหน้านั้น แปดปีของการนับไพ่ในคาสิโนทั่วโลก — เปลี่ยนทุนเล็ก ๆ ให้เป็นผลตอบแทน 100 เท่า ผ่าน edge ความอดทน และกระบวนการ ผู้ดำเนินงานคนเดิม สัญชาตญาณเดิม: เคารพคณิตศาสตร์ เคารพห้อง และชนะอย่างเงียบ ๆ",
  },
  cta: { button: "เริ่มการสนทนา" },
  footer: { location: "ฐานที่กรุงเทพฯ / พร้อมให้บริการทั่วโลก", copyright: "© 2026 Gustaw Jacewicz" },
};

const hi: Dictionary = {
  nav: { process: "प्रक्रिया", results: "परिणाम", about: "परिचय", contact: "संपर्क" },
  hero: {
    tagline: "[ राजस्व वास्तुकला ]",
    headline: "अंतर्राष्ट्रीय बिक्री विशेषज्ञ। मैं सेल्स इंजन बनाता हूँ।",
    sub: "व्यक्तिगत आउटरीच, प्रक्रिया इंजीनियरिंग और परामर्शी वीडियो कॉल — सीमाओं के पार काम करने वाले एक दोहराए जा सकने वाले इंजन में संयोजित।",
  },
  craft: {
    section: "01 / शिल्प",
    items: [
      { title: "व्यक्तिगत आउटरीच", body: "पहला संदेश मैं स्वयं लिखता हूँ। शोध-आधारित, विशिष्ट और मानवीय — ऐसा संवाद शुरू करने के लिए जो खरीदार वास्तव में करना चाहे।" },
      { title: "हर चरण में प्रक्रिया", body: "आउटरीच, योग्यता, डेमो, प्रस्ताव, क्लोज़। हर चरण का एक मालिक, एक परिभाषा और एक मीट्रिक है। कुछ भी सहज प्रवृत्ति पर नहीं छोड़ा जाता।" },
      { title: "परामर्शी वीडियो और अनुकूलित क्लोज़िंग", body: "वीडियो कॉल सुनने, निदान और परामर्श के लिए हैं — कभी क्लोज़िंग के लिए नहीं। क्लोज़िंग बाद में होती है, कॉल में मिली अंतर्दृष्टि पर बनी परिष्कृत प्रस्तावों और रणनीतियों के माध्यम से।" },
      { title: "विश्लेषण और परिशोधन", body: "हर बातचीत की समीक्षा होती है। हर ड्रॉप-ऑफ की एक परिकल्पना होती है। जैसे ही डेटा माँगता है, प्लेबुक फिर से लिखा जाता है।" },
    ],
  },
  engine: {
    heading: "इंजन, चरण दर चरण",
    label: "02 / प्रक्रिया",
    stages: [
      { title: "आउटरीच", body: "व्यक्तिगत, शोधित, बहु-चैनल आउटरीच। वास्तविक बातचीत, अनुक्रम नहीं। हर संदेश अगला उत्तर अर्जित करता है।" },
      { title: "योग्यता", body: "तेज़ डिस्कवरी फ्रेमवर्क सिग्नल को शोर से अलग करते हैं। सही सौदे आगे बढ़ते हैं, गलत जल्दी बंद होते हैं।" },
      { title: "परामर्शी वीडियो", body: "लाइव कॉल निदान और डिस्कवरी पर केंद्रित — असली समस्या को समझें और प्रॉस्पेक्ट के साथ मिलकर खरीद-केस तैयार करें। कॉल में क्लोज़ करने का कोई दबाव नहीं।" },
      { title: "प्रस्ताव और क्लोज़िंग रणनीति", body: "अनुकूलित प्रस्ताव और कॉल के बाद की क्लोज़िंग रणनीति: म्यूचुअल एक्शन प्लान, स्टेकहोल्डर मैपिंग, प्रोक्योरमेंट नेविगेशन और समय-क्षेत्रों में स्वच्छ हस्ताक्षर।" },
      { title: "विश्लेषण और परिशोधन", body: "हर चरण मापा जाता है और साप्ताहिक समीक्षा होती है। कन्वर्ज़न डेटा प्लेबुक के अगले संस्करण को आगे बढ़ाता है।" },
    ],
  },
  results: {
    heading: "चयनित प्रभाव",
    label: "सत्यापित प्रदर्शन 2020—2023",
    items: [
      { case: "केस 01", label: "अंतर्राष्ट्रीय जॉब बोर्ड", metric: "230+ ग्राहक", note: "स्वचालित, प्रक्रिया-आधारित आउटबाउंड के माध्यम से 48 देशों के 230+ ग्राहकों को जॉब विज्ञापन बेचे।" },
      { case: "केस 02", label: "48 देश कवर किए", metric: "48 बाज़ार", note: "संस्कृति-पहले प्रॉस्पेक्टिंग, बड़े पैमाने पर स्थानीयकृत — एक इंजन, दर्जनों खरीदारी संस्कृतियाँ।" },
      { case: "केस 03", label: "कार्ड काउंटिंग युग", metric: "+10,000% ROI", note: "दुनिया भर के कैसिनो में आठ साल — अनुशासित एज-प्ले के माध्यम से शुरुआती बैंकरोल को 100 गुना बढ़ाया।" },
    ],
  },
  about: {
    section: "03 / ऑपरेटर",
    diagramCaption: "आरेख / सेल्स इंजन — हस्तनिर्मित उपमा",
    diagramAlt: "सेल्स इंजन — एक जेट इंजन उपमा जो अंतर्राष्ट्रीय बिक्री प्रक्रिया के चरणों के रूप में इनटेक, कम्प्रेशन, कम्बस्शन और थ्रस्ट दिखाती है",
    lead: "मैं पहले संस्कृति तक पहुँचता हूँ। फिर हम मिलकर असली कारण खोजते हैं, एक अच्छी कहानी कहते हैं, और एक मूल्यवान समाधान पर समाप्त करते हैं — एक ऐसे रिश्ते के वादे के साथ जिसे मैं निभाने और पार पाने का इरादा रखता हूँ।",
    bio: "स्वचालित, प्रक्रिया-अनुशासित आउटबाउंड के माध्यम से 48 देशों में 230+ ग्राहकों को अंतर्राष्ट्रीय स्तर पर जॉब विज्ञापन बेचने के वर्ष। उससे पहले, दुनिया भर के कैसिनो में आठ साल कार्ड गिनना — एज, धैर्य और प्रक्रिया के माध्यम से छोटे बैंकरोल को 100x रिटर्न में बदला। वही ऑपरेटर, वही प्रवृत्ति: गणित का सम्मान करो, कमरे का सम्मान करो, चुपचाप जीतो।",
  },
  cta: { button: "बातचीत शुरू करें" },
  footer: { location: "बैंकॉक में आधारित / विश्व स्तर पर उपलब्ध", copyright: "© 2026 Gustaw Jacewicz" },
};

const is: Dictionary = {
  nav: { process: "Ferli", results: "Árangur", about: "Um mig", contact: "Hafa samband" },
  hero: {
    tagline: "[ Tekjuarkitektúr ]",
    headline: "Sérfræðingur í alþjóðlegri sölu. Ég smíða söluvélar.",
    sub: "Persónuleg útrás, ferlisverkfræði og ráðgefandi myndsímtöl — sett saman í endurtakanlega vél sem fer yfir landamæri.",
  },
  craft: {
    section: "01 / Handverk",
    items: [
      { title: "Persónuleg útrás", body: "Ég skrifa fyrstu skilaboðin sjálfur. Rannsökuð, sérsniðin og mannleg — hönnuð til að hefja samtal sem kaupandinn vill raunverulega eiga." },
      { title: "Ferli á hverju stigi", body: "Útrás, hæfismat, kynning, tilboð, lokun. Hvert stig á sér eiganda, skilgreiningu á lokið og mælikvarða. Ekkert er skilið eftir innsæinu." },
      { title: "Ráðgefandi myndfundir og sérsniðin lokun", body: "Myndsímtöl eru til að hlusta, greina og ráðleggja — aldrei til að loka. Lokunin gerist eftir á, með fáguðum tilboðum og aðferðum byggðum á því sem símtalið leiddi í ljós." },
      { title: "Greina og fullkomna", body: "Hvert samtal er rýnt. Hvert brottfall á sér tilgátu. Handbókin er endurskrifuð um leið og gögnin krefjast þess." },
    ],
  },
  engine: {
    heading: "Vélin, stig fyrir stig",
    label: "02 / Ferli",
    stages: [
      { title: "Útrás", body: "Persónuleg, rannsökuð, fjölrása útrás. Raunveruleg samtöl, ekki raðir. Hver skilaboð vinna sér inn næsta svar." },
      { title: "Hæfismat", body: "Skörp uppgötvunarrammi aðskilja merki frá hávaða. Réttu samningarnir halda áfram, þeir röngu lokast hratt." },
      { title: "Ráðgefandi myndfundur", body: "Lifandi símtöl með áherslu á greiningu og uppgötvun — skilja raunverulega vandamálið og hanna kaupatilfellið með viðskiptavininum. Engin pressa um lokun á fundinum." },
      { title: "Tilboð og lokunaráætlun", body: "Sérsniðin tilboð og lokunaráætlun sem fylgir símtalinu: sameiginlegar aðgerðaáætlanir, hagsmunakortlagning, innkaupaleiðsögn og hreinar undirskriftir yfir tímabelti." },
      { title: "Greina og fullkomna", body: "Hvert stig mælt og rýnt vikulega. Umbreytingargögn knýja næstu útgáfu handbókarinnar." },
    ],
  },
  results: {
    heading: "Valinn árangur",
    label: "Staðfest frammistaða 2020—2023",
    items: [
      { case: "Tilfelli 01", label: "Alþjóðlegt atvinnutorg", metric: "230+ viðskiptavinir", note: "Seldi atvinnuauglýsingar til 230+ viðskiptavina í 48 löndum með sjálfvirkri, ferlisdrifinni útrás." },
      { case: "Tilfelli 02", label: "48 lönd náð", metric: "48 markaðir", note: "Menning-fyrst leit, staðfærð í mælikvarða — ein vél, tugir kaupmenninga." },
      { case: "Tilfelli 03", label: "Spilatalningartímabilið", metric: "+10.000% arðsemi", note: "Átta ár í spilavítum um allan heim — stækkaði upphafsfé 100-falt með öguðum forskotsleik." },
    ],
  },
  about: {
    section: "03 / Stjórnandinn",
    diagramCaption: "Skýringarmynd / Söluvélin — handteiknuð líking",
    diagramAlt: "Söluvélin — þotuhreyfilslíking sem sýnir inntak, þjöppun, bruna og spyrnu sem stig alþjóðlegs söluferlis",
    lead: "Ég næ fyrst í menninguna. Síðan finnum við saman raunverulegu ástæðurnar, segjum góða sögu og endum á verðmætri lausn — innsiglað með loforði um samband sem ég ætla að halda og berjast fyrir.",
    bio: "Mörg ár af alþjóðlegri sölu á atvinnuauglýsingum til 230+ viðskiptavina í 48 löndum með sjálfvirkri, ferlisaguðri útrás. Áður fyrr, átta ár að telja spil í spilavítum um allan heim — breytti litlu fé í 100-falda ávöxtun með forskoti, þolinmæði og ferli. Sami stjórnandi, sama eðlisávísun: virða stærðfræðina, virða herbergið, vinna í kyrrþey.",
  },
  cta: { button: "Hefja samtal" },
  footer: { location: "Staðsettur í Bangkok / Aðgengilegur á heimsvísu", copyright: "© 2026 Gustaw Jacewicz" },
};

const af: Dictionary = {
  nav: { process: "Proses", results: "Resultate", about: "Oor my", contact: "Kontak" },
  hero: {
    tagline: "[ Inkomste-argitektuur ]",
    headline: "Internasionale verkoopskenner. Ek bou verkoopsenjins.",
    sub: "Persoonlike uitreik, prosesingenieurswese en konsulterende video-oproepe — saamgevoeg in 'n herhaalbare enjin wat grense oorsteek.",
  },
  craft: {
    section: "01 / Vakmanskap",
    items: [
      { title: "Persoonlike uitreik", body: "Ek skryf die eerste boodskap self. Nagevors, spesifiek en menslik — gebou om 'n gesprek te begin wat 'n koper werklik wil voer." },
      { title: "Proses by elke stadium", body: "Uitreik, kwalifisering, demo, voorstel, sluiting. Elke stadium het 'n eienaar, 'n definisie van klaar, en 'n maatstaf. Niks word aan instink oorgelaat nie." },
      { title: "Konsulterende video & pasgemaakte sluiting", body: "Video-oproepe is om te luister, te diagnoseer en te adviseer — nooit om te sluit nie. Die sluiting gebeur daarna, deur verfynde voorstelle en strategieë gebou rondom wat die oproep onthul het." },
      { title: "Ontleed & vervolmaak", body: "Elke gesprek word hersien. Elke afval het 'n hipotese. Die draaiboek word herskryf die oomblik die data dit eis." },
    ],
  },
  engine: {
    heading: "Die enjin, stadium vir stadium",
    label: "02 / Proses",
    stages: [
      { title: "Uitreik", body: "Persoonlike, nagevorsde, multi-kanaal uitreik. Werklike gesprekke, nie reekse nie. Elke boodskap verdien die volgende antwoord." },
      { title: "Kwalifisering", body: "Skerp ontdekkingsraamwerke skei sein van geraas. Die regte transaksies vorder, die verkeerdes sluit vinnig." },
      { title: "Konsulterende video", body: "Lewendige oproepe gefokus op diagnose en ontdekking — verstaan die werklike probleem en bou die koopgeval saam met die voornemende kliënt. Geen druk om op die oproep te sluit nie." },
      { title: "Voorstel & sluitingstrategie", body: "Pasgemaakte voorstelle en 'n sluitingstrategie wat die oproep volg: wedersydse aksieplanne, belanghebbende-kartering, verkrygingsnavigasie, en skoon handtekeninge oor tydsones." },
      { title: "Ontleed & vervolmaak", body: "Elke stadium gemeet en weekliks hersien. Omskakelingsdata dryf die volgende iterasie van die draaiboek." },
    ],
  },
  results: {
    heading: "Geselekteerde impak",
    label: "Geverifieerde prestasie 2020—2023",
    items: [
      { case: "Geval 01", label: "Internasionale werkbord", metric: "230+ kliënte", note: "Werkadvertensies aan 230+ kliënte in 48 lande verkoop deur outomatiese, prosesgedrewe uitreik." },
      { case: "Geval 02", label: "48 lande gedek", metric: "48 markte", note: "Kultuur-eerste prospektering gelokaliseer op skaal — een enjin, dosyne koopkulture." },
      { case: "Geval 03", label: "Kaarttel-era", metric: "+10 000% ROI", note: "Agt jaar in casino's wêreldwyd — aanvanklike kapitaal 100x gegroei deur gedissiplineerde voordeelspel." },
    ],
  },
  about: {
    section: "03 / Die operateur",
    diagramCaption: "Diagram / Die verkoopsenjin — handgetekende analogie",
    diagramAlt: "Die verkoopsenjin — 'n straalenjin-analogie wat inname, kompressie, verbranding en stukrag toon as stadiums van 'n internasionale verkoopsproses",
    lead: "Ek bereik eers die kultuur. Dan vind ons saam die werklike redes, vertel 'n goeie storie en sluit af met 'n waardevolle oplossing — verseël met 'n belofte van 'n verhouding wat ek wil hou en waarvoor ek wil veg.",
    bio: "Jare van internasionale verkoop van werkadvertensies aan 230+ kliënte in 48 lande deur outomatiese, prosesgedissiplineerde uitreik. Voor dit, agt jaar kaarte tel in casino's regoor die wêreld — klein bankrolle in 100x opbrengs verander deur voordeel, geduld en proses. Dieselfde operateur, dieselfde instink: respekteer die wiskunde, respekteer die kamer, wen stil-stil.",
  },
  cta: { button: "Begin 'n gesprek" },
  footer: { location: "Gebaseer in Bangkok / Wêreldwyd beskikbaar", copyright: "© 2026 Gustaw Jacewicz" },
};

export const dictionaries: Record<LanguageCode, Dictionary> = {
  en, de, ru, cs, zh, pt, th, hi, is, af,
};
