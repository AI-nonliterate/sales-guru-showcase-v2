export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "cs", label: "Čeština" },
  { code: "zh", label: "中文" },
  { code: "pt", label: "Português" },
  { code: "th", label: "ไทย" },
  { code: "hi", label: "हिन्दी" },
  { code: "is", label: "Íslenska" },
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

export const dictionaries: Record<LanguageCode, Dictionary> = {
  en, de, ru, cs, zh, pt, th,
};
