export type Language = "es" | "en" | "fr" | "zh" | "ru" | "pt";
export type BusinessType = "restaurant" | "cafe";
export type DataProvider = "supabase" | "firebase";

export type InstallState = {
  language: Language;
  businessType: BusinessType;
  restaurantName: string;
  username: string;
  password: string;
  provider: DataProvider;
};

export const STORAGE_KEY = "sistema-restaurante-install";
export const PASSWORD_MIN_LENGTH = 6;

export const defaultState: InstallState = {
  language: "es",
  businessType: "restaurant",
  restaurantName: "",
  username: "",
  password: "",
  provider: "supabase"
};

export const languages: { id: Language; label: string; flag: string }[] = [
  { id: "es", label: "Español", flag: "🇪🇸" },
  { id: "en", label: "English", flag: "🇬🇧" },
  { id: "fr", label: "Français", flag: "🇫🇷" },
  { id: "zh", label: "中文", flag: "🇨🇳" },
  { id: "ru", label: "Русский", flag: "🇷🇺" },
  { id: "pt", label: "Português", flag: "🇵🇹" }
];

export const businessTypes: { id: BusinessType; labelKey: "restaurant" | "cafe" }[] = [
  { id: "restaurant", labelKey: "restaurant" },
  { id: "cafe", labelKey: "cafe" }
];

export const providers: { id: DataProvider; label: string }[] = [
  { id: "supabase", label: "Supabase" },
  { id: "firebase", label: "Firebase" }
];

export type CopyKey =
  | "appTitle"
  | "appSubtitle"
  | "stepLanguage"
  | "stepBusiness"
  | "stepCredentials"
  | "stepProvider"
  | "stepSummary"
  | "language"
  | "businessType"
  | "restaurantName"
  | "adminUser"
  | "password"
  | "passwordHint"
  | "provider"
  | "providerReady"
  | "providerMissing"
  | "next"
  | "back"
  | "finish"
  | "installing"
  | "installed"
  | "openPanel"
  | "restart"
  | "ready"
  | "missing"
  | "restaurant"
  | "cafe"
  | "summaryTitle"
  | "summaryDesc"
  | "metricProvider"
  | "metricConnection"
  | "metricUser";

export type Copy = Record<CopyKey, string>;

export const copy: Record<Language, Copy> = {
  es: {
    appTitle: "Instala tu sistema",
    appSubtitle: "Configura el primer acceso y conecta tu proveedor de datos en pocos pasos.",
    stepLanguage: "Idioma",
    stepBusiness: "Negocio",
    stepCredentials: "Credenciales",
    stepProvider: "Proveedor",
    stepSummary: "Resumen",
    language: "Elige el idioma de la interfaz",
    businessType: "Tipo de negocio",
    restaurantName: "Nombre del local",
    adminUser: "Usuario administrador",
    password: "Contraseña",
    passwordHint: "Mínimo 6 caracteres",
    provider: "Proveedor de datos",
    providerReady: "Variables listas",
    providerMissing: "Configura el archivo .env.local",
    next: "Continuar",
    back: "Atrás",
    finish: "Finalizar instalación",
    installing: "Instalando…",
    installed: "Instalación completa",
    openPanel: "Entrar al panel",
    restart: "Reinstalar",
    ready: "conectado",
    missing: "sin configurar",
    restaurant: "Restaurante",
    cafe: "Cafetería",
    summaryTitle: "Todo listo",
    summaryDesc: "Revisa la configuración antes de terminar.",
    metricProvider: "Proveedor",
    metricConnection: "Conexión",
    metricUser: "Usuario"
  },
  en: {
    appTitle: "Install your system",
    appSubtitle: "Set up the first access and connect your data provider in a few steps.",
    stepLanguage: "Language",
    stepBusiness: "Business",
    stepCredentials: "Credentials",
    stepProvider: "Provider",
    stepSummary: "Summary",
    language: "Choose the interface language",
    businessType: "Business type",
    restaurantName: "Business name",
    adminUser: "Admin user",
    password: "Password",
    passwordHint: "At least 6 characters",
    provider: "Data provider",
    providerReady: "Variables ready",
    providerMissing: "Set up the .env.local file",
    next: "Continue",
    back: "Back",
    finish: "Finish setup",
    installing: "Installing…",
    installed: "Setup complete",
    openPanel: "Open dashboard",
    restart: "Reinstall",
    ready: "connected",
    missing: "not set",
    restaurant: "Restaurant",
    cafe: "Cafe",
    summaryTitle: "All set",
    summaryDesc: "Review the configuration before finishing.",
    metricProvider: "Provider",
    metricConnection: "Connection",
    metricUser: "User"
  },
  fr: {
    appTitle: "Installez votre système",
    appSubtitle: "Configurez le premier accès et connectez votre fournisseur de données en quelques étapes.",
    stepLanguage: "Langue",
    stepBusiness: "Activité",
    stepCredentials: "Identifiants",
    stepProvider: "Fournisseur",
    stepSummary: "Résumé",
    language: "Choisissez la langue de l'interface",
    businessType: "Type d'activité",
    restaurantName: "Nom de l'établissement",
    adminUser: "Utilisateur admin",
    password: "Mot de passe",
    passwordHint: "Au moins 6 caractères",
    provider: "Fournisseur de données",
    providerReady: "Variables prêtes",
    providerMissing: "Configurez le fichier .env.local",
    next: "Continuer",
    back: "Retour",
    finish: "Terminer l'installation",
    installing: "Installation…",
    installed: "Installation terminée",
    openPanel: "Ouvrir le panneau",
    restart: "Réinstaller",
    ready: "connecté",
    missing: "non configuré",
    restaurant: "Restaurant",
    cafe: "Café",
    summaryTitle: "Tout est prêt",
    summaryDesc: "Vérifiez la configuration avant de terminer.",
    metricProvider: "Fournisseur",
    metricConnection: "Connexion",
    metricUser: "Utilisateur"
  },
  zh: {
    appTitle: "安装您的系统",
    appSubtitle: "只需几步即可配置首次访问并连接您的数据提供商。",
    stepLanguage: "语言",
    stepBusiness: "业务",
    stepCredentials: "凭据",
    stepProvider: "提供商",
    stepSummary: "摘要",
    language: "选择界面语言",
    businessType: "业务类型",
    restaurantName: "店铺名称",
    adminUser: "管理员用户",
    password: "密码",
    passwordHint: "至少 6 个字符",
    provider: "数据提供商",
    providerReady: "变量已就绪",
    providerMissing: "请配置 .env.local 文件",
    next: "继续",
    back: "返回",
    finish: "完成安装",
    installing: "安装中…",
    installed: "安装完成",
    openPanel: "进入面板",
    restart: "重新安装",
    ready: "已连接",
    missing: "未配置",
    restaurant: "餐厅",
    cafe: "咖啡馆",
    summaryTitle: "一切就绪",
    summaryDesc: "完成前请检查配置。",
    metricProvider: "提供商",
    metricConnection: "连接",
    metricUser: "用户"
  },
  ru: {
    appTitle: "Установите систему",
    appSubtitle: "Настройте первый доступ и подключите поставщика данных за несколько шагов.",
    stepLanguage: "Язык",
    stepBusiness: "Бизнес",
    stepCredentials: "Учётные данные",
    stepProvider: "Поставщик",
    stepSummary: "Сводка",
    language: "Выберите язык интерфейса",
    businessType: "Тип бизнеса",
    restaurantName: "Название заведения",
    adminUser: "Администратор",
    password: "Пароль",
    passwordHint: "Минимум 6 символов",
    provider: "Поставщик данных",
    providerReady: "Переменные готовы",
    providerMissing: "Настройте файл .env.local",
    next: "Далее",
    back: "Назад",
    finish: "Завершить установку",
    installing: "Установка…",
    installed: "Установка завершена",
    openPanel: "Открыть панель",
    restart: "Переустановить",
    ready: "подключено",
    missing: "не настроено",
    restaurant: "Ресторан",
    cafe: "Кафе",
    summaryTitle: "Всё готово",
    summaryDesc: "Проверьте настройки перед завершением.",
    metricProvider: "Поставщик",
    metricConnection: "Подключение",
    metricUser: "Пользователь"
  },
  pt: {
    appTitle: "Instale o seu sistema",
    appSubtitle: "Configure o primeiro acesso e ligue o seu fornecedor de dados em poucos passos.",
    stepLanguage: "Idioma",
    stepBusiness: "Negócio",
    stepCredentials: "Credenciais",
    stepProvider: "Fornecedor",
    stepSummary: "Resumo",
    language: "Escolha o idioma da interface",
    businessType: "Tipo de negócio",
    restaurantName: "Nome do estabelecimento",
    adminUser: "Utilizador admin",
    password: "Palavra-passe",
    passwordHint: "Pelo menos 6 caracteres",
    provider: "Fornecedor de dados",
    providerReady: "Variáveis prontas",
    providerMissing: "Configure o ficheiro .env.local",
    next: "Continuar",
    back: "Voltar",
    finish: "Concluir instalação",
    installing: "A instalar…",
    installed: "Instalação concluída",
    openPanel: "Abrir painel",
    restart: "Reinstalar",
    ready: "ligado",
    missing: "não configurado",
    restaurant: "Restaurante",
    cafe: "Café",
    summaryTitle: "Tudo pronto",
    summaryDesc: "Reveja a configuração antes de terminar.",
    metricProvider: "Fornecedor",
    metricConnection: "Ligação",
    metricUser: "Utilizador"
  }
};

export function isStepValid(step: number, form: InstallState): boolean {
  switch (step) {
    case 0:
      return true;
    case 1:
      return form.businessType === "restaurant" || form.businessType === "cafe";
    case 2:
      return (
        form.restaurantName.trim().length >= 2 &&
        form.username.trim().length >= 3 &&
        form.password.length >= PASSWORD_MIN_LENGTH
      );
    case 3:
      return form.provider === "supabase" || form.provider === "firebase";
    default:
      return true;
  }
}

export function canFinish(form: InstallState): boolean {
  return [0, 1, 2, 3].every((step) => isStepValid(step, form));
}

export function loadSavedState(): { installed: boolean; state: InstallState } {
  if (typeof window === "undefined") {
    return { installed: false, state: defaultState };
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return { installed: false, state: defaultState };
    }
    const parsed = JSON.parse(saved) as Partial<InstallState> & { installedAt?: string };
    return {
      installed: Boolean(parsed.installedAt),
      state: { ...defaultState, ...parsed }
    };
  } catch {
    return { installed: false, state: defaultState };
  }
}

export function saveState(form: InstallState, installed: boolean): void {
  if (typeof window === "undefined") return;
  const payload = installed
    ? { ...form, password: "configured", installedAt: new Date().toISOString() }
    : form;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function clearState(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
