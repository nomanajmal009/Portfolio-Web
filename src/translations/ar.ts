import { Translation } from "./types";

const ar: Translation = {
  // Header
  header: {
    name: "محمد نعمان أجمل",
    title: "عالم حاسوب | مهندس برمجيات | مطور برمجيات متكامل",
    location: "الرياض، المملكة العربية السعودية",
    dob: "09 يونيو 1998",
    phone: "0545864496",
    email: "nomanajmal007@gmail.com",
    toggleTheme: "تبديل السمة",
    toggleLanguage: "تبديل اللغة",
  },

  // Experience section
  experience: {
    title: "الخبرة العملية",
    items: [
      {
        period: "06/2023 - الآن",
        company: "أويفان، الرياض",
        role: "مطور برمجيات متكامل",
        description: `لعبت دورًا محوريًا في تطوير تطبيق إيجار للإسكان، مع التركيز على تنفيذ ميزات مبتكرة لتعزيز الوظائف وتجربة المستخدم. بالإضافة إلى ذلك، قمت بصيانة التطبيق بسرعة من خلال معالجة الأخطاء والمشاكل التقنية لضمان التشغيل السلس. من خلال التعاون وحل المشكلات بشكل استباقي، حافظت على أداء التطبيق وموثوقيته، ولبّيت احتياجات المستخدمين بكفاءة مع الحفاظ على معايير عالية من الجودة والكفاءة.`,
      },
      {
        period: "03/2023 - 06/2023",
        company: "إنتر باي، الرياض",
        role: "مطور جافاسكريبت",
        description: `أنشأت بوابة جديدة لتطبيق لوجستي من الصفر. أضفت ميزات جديدة وحللت المشكلات التي ظهرت أثناء العمل. عملت مع الفريق لضمان سير العمل بسلاسة للجميع.`,
      },
      {
        period: "10/2020 - 12/2022",
        company: "كودينج كوبس، لاهور",
        role: "مهندس برمجيات",
        description: `طورت تطبيقات ويب متكاملة باستخدام روبي أون ريلز (واجهة خلفية)، وأنجولار، وReact Js (واجهة أمامية) بكل تفانٍ. أضفت ميزات جديدة، وقمت بإصلاح الأخطاء، وكتبت اختبارات وبرمجيات، وقمت بنشرها خلال هذه الفترة.`,
      },
    ],
  },

  // Projects section
  projects: {
    title: "المشاريع",
    items: [
      {
        name: "المركز السعودي لكفاءة الطاقة (React / Next.Js / .NET Framework)",
        description: `يتيح المشروع الحصول على ترخيص ISO 50001 بعد إكمال الدورة ويتتبع استهلاك الطاقة للمرافق في جميع أنحاء المملكة. يشمل ثلاثة تطبيقات ويب: موقع هبوط، ولوحة تحكم، ونظام تعليم إلكتروني، جميعها مبنية بـ React/Next.js و.NET. أعدت تصميم صفحة الهبوط لتتناسب مع التصميم الجديد وقدمت تفاصيل المشروع للزوار. تدعم لوحة التحكم أدوارًا متعددة (مدير/مستخدم)، وتسمح بإدارة المرافق، والتسجيل في الدورات، وإدارة التراخيص، وإرسال بيانات الطاقة. أضفت ميزات جديدة حسب احتياجات العملاء.`,
        technologies: [
          "React",
          "Next.js",
          ".NET Framework",
          "Tailwind CSS",
          "Jira",
          "Github",
          "DBeaver",
          "PostgreSQL",
        ],
        link: "https://www.enms.seec.gov.sa/",
      },
      {
        name: "تطبيق إيجار للإسكان (الشركة الوطنية للإسكان) (Ruby on Rails/Angular)",
        description: `يوفر التطبيق خدمات تأجير العقارات، ويسهل العقود بين المؤجرين والمستأجرين لحفظ السجلات الحكومية في السعودية. يعمل بنظام الطلبات، حيث يمكن للأطراف الموافقة أو الرفض. أضفت ميزة التنازل عن العقد، وإشعارات إلكترونية لإبلاغ جميع الأطراف بأي تحديثات.`,
        technologies: [
          "Ruby on Rails",
          "Angular",
          "Jira",
          "Github",
          "PgAdmin",
          "PostgreSQL",
        ],
        link: "https://eservices.ejar.sa/",
      },
      {
        name: "بوابة إدارة المدن (Angular / Vue.Js)",
        description: `البوابة الإدارية مصممة لإدارة شحن المنتجات في جميع أنحاء المملكة. تتيح تعيين السائقين للطلبات وتتبع مواقعهم وتحديث تفاصيل الشحن. دمجت Firebase لإرسال الإشعارات. المشروع يتكون من بوابتين منفصلتين باستخدام Angular وVue.js.`,
        technologies: [
          "Angular",
          "Vue.js",
          "Firebase",
          "Jira",
          "Bitbucket",
          "Angular Material",
        ],
        link: "https://customer.intercityxpress.com/login",
      },
      {
        name: "Xalidus HR/Sapling (Ruby on Rails/React Js/Angular)",
        description: `نظام الموارد البشرية يدير الرواتب، وإدارة الوثائق، والمهام، وعمليات التوظيف، ويخدم ملايين المستخدمين في أمريكا وبريطانيا. أنشأت محول واجهة المستخدم ونافذة ترحيب باستخدام LaunchDarkly. استبدلت نظام المصادقة الافتراضي بنظام OAuth مخصص. أدرت تكاملات مع BambooHR وXero وADP لمزامنة البيانات بسلاسة.`,
        technologies: [
          "Ruby on Rails",
          "React",
          "Angular",
          "Jira",
          "Angular Material",
          "PgAdmin",
          "PostgreSQL",
          "Jenkins",
          "Github",
        ],
        link: "https://www.kallidus.com/sapling-login/",
      },
      {
        name: "Locable (Ruby on Rails)",
        description: `منصة تسويق للأعمال تتيح للعملاء شراء وبيع المنتجات بسهولة. أضفت تكامل Stripe للمدفوعات وميزة رفع منشورات الشركات مع أقسام مخصصة.`,
        technologies: ["Ruby on Rails", "Stripe"],
        link: "https://www.locable.com/",
      },
      {
        name: "تصنيف السيرة الذاتية التلقائي (Python/Django/Machine Learning)",
        description: `تطبيق ويب يستخدم التعلم الآلي ومعالجة اللغة الطبيعية لتصنيف السير الذاتية. يستخدم PostgreSQL كقاعدة بيانات، وتم تطويره باستخدام Python/Django.`,
        technologies: ["Python", "Django", "Machine Learning", "PostgreSQL"],
        link: "#",
      },
    ],
  },

  // Skills section
  skills: {
    title: "المهارات",
    items: [
      "معرفة قوية بمفاهيم علوم الحاسوب - البرمجة الكائنية، قواعد البيانات، أنظمة التشغيل وهياكل البيانات",
      "مهارات تحليلية ومفاهيمية ممتازة",
      "مهارات تواصل فعالة",
      "مهارات حل المشكلات وبناء المنطق",
      "إتقان ممتاز لبرامج مايكروسوفت (وورد، إكسل، وباوربوينت)",
      "روح الفريق الممتازة",
      "مهارات إدارة رائعة",
      "مهارات تواصل كتابية وشفوية جيدة",
      "سرعة طباعة ممتازة",
    ],
  },

  // Certifications section
  certifications: {
    title: "الشهادات والدورات",
    items: [
      {
        name: "Udemy: Dissecting Ruby on Rails 5",
        issuer: "Udemy",
        date: "",
        link: "",
      },
      {
        name: "Udemy: React The Complete Guide",
        issuer: "Udemy",
        date: "",
        link: "",
      },
      {
        name: "Udemy: HTML 5 and CSS 3 Fundamentals",
        issuer: "Udemy",
        date: "",
        link: "",
      },
      {
        name: "FreeCodeCamp: Angular for Beginners Course",
        issuer: "FreeCodeCamp",
        date: "",
        link: "",
      },
      {
        name: "TestDome: Ruby on Rails",
        issuer: "TestDome",
        date: "23 ديسمبر 2022",
        link: "https://www.testdome.com/certificates/038f42dc7eb34257a897f44c013a2ec5",
      },
      {
        name: "الهيئة السعودية للمهندسين",
        issuer: "الهيئة السعودية للمهندسين",
        date: "",
        link: "",
        description: "رقم العضوية: 911564 مع إقامة قابلة للنقل",
      },
    ],
  },

  // Education section
  education: {
    title: "التعليم",
    items: [
      {
        period: "أكتوبر 2017 - يوليو 2021",
        institution: "جامعة سنترال بنجاب، لاهور، باكستان",
        degree:
          "بكالوريوس علوم الحاسوب (3.33 من 4) موثق من الملحقية الثقافية السعودية والسفارة السعودية",
        description: "",
      },
      {
        period: "أغسطس 2015 - يونيو 2017",
        institution: "مجموعة كليات البنجاب، لاهور، باكستان",
        degree:
          "الثانوية العامة في علوم الحاسوب (مجلس التعليم الثانوي والمتوسط لاهور)",
        description: "",
      },
      {
        period: "أبريل 2013 - مايو 2015",
        institution: "مدرسة لاهور النموذجية، لاهور، باكستان",
        degree:
          "الشهادة المتوسطة في علوم الحاسوب (مجلس التعليم الثانوي والمتوسط لاهور)",
        description: "",
      },
    ],
  },

  // Contact section
  contact: {
    title: "الاتصال",
    email: "nomanajmal007@gmail.com",
    phone: "0545864496",
    social: {
      github: "https://github.com/nomanajmal009",
      linkedin: "https://www.linkedin.com/in/muhammad-noman-ajmal-ab9b27211/",
      twitter: "#",
    },
  },

  technicalSkills: {
    title: "المهارات التقنية",
    items: [
      "روبي / روبي أون ريلز",
      "جافاسكريبت / تايب سكريبت",
      "أنجولار",
      "نكست جي إس",
      "ريأكت",
      "فيو جي إس",
      "إطار .NET / ASP.net",
      "C# / C / C++",
      "بايثون / جانغو",
      "تيلويند CSS",
      "Angular Material",
      "Rxjs",
      "MySQL",
      "HTML / CSS",
      "JQuery",
      "Github / Gitlab",
      "GraphQL",
      "Azure DevOps",
      "Jira",
      "PostgreSQL",
      "AJAX / Postman",
      "Microsoft Office",
      "Jenkins",
      "لغة R",
      "PgAdmin / DBeaver",
      "لينكس / أوبونتو",
    ],
  },

  personality: {
    title: "الشخصية",
    items: [
      "التواصل",
      "الإبداع",
      "المرونة/قابلية التكيف",
      "حل المشكلات",
      "التحفيز الذاتي",
      "الانضباط في المواعيد",
      "التنظيم",
      "التفكير النقدي",
      "إدارة الوقت",
    ],
  },

  languages: {
    title: "اللغات",
    items: [
      { name: "الإنجليزية", level: 5 },
      { name: "الأردية", level: 5 },
      { name: "البنجابية", level: 5 },
      { name: "العربية", level: 3 },
    ],
  },

  hobbies: {
    title: "الهوايات",
    items: [
      "التقنية",
      "السنوكر",
      "كرة القدم",
      "الاستماع إلى الموسيقى",
      "السفر والسياحة",
      "الألعاب",
      "البرمجة",
    ],
  },
};

export default ar;
