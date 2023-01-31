const translations = {
    en: {
      home: "Home",
      selectLanguage: "Select a language",
      english: "En",
      arabic: "Ar",
      start: "Start Project",
         landTitleP1: "OWL Digital ",
         landTitleP2: " Solutions",

        landDisc:"We Think Outside The Box But We Faster",
        btnView:"view",
        servicesTitle1P1:"Services We Can Help You With ",
        servicesTitle1P2:"Owl agenecy",
        InterfaceTitle:"Interface Design",
        interfaceDesc:"Dolor Voluptate Aliquip Laborum Veniam Officia Sint Ipsum Magna Labore Eu Labore Tempor. Dolor Voluptate Aliquip Laborum Veniam Officia Sint Ipsum Magna Labore Eu Labore Tempor ",
        ourTeamHeader:"Our Team",
        teamMemb:"Braa Adnan",
        teamMembPOS:"UI UX Designer",
        serviceLocationHead:"Services Location Of Owal Agency In Dubai",
        Dubai:"Dubai",
        timeOfWork:"From Monday To Saturday From 9 Am To 8 Pm",
        locOfAgancy:" Business Bay - Bay View Tower 18th ",
        fOLLOWUS:"FOLLOW US",
        footerLinksTitle:"CATEGORIES ",
        footerLinks:"Footer Link",
        footerDesc:"A Small River Named Duden Flows By Their Place And Supplies It With The Necessary Regelialia.",
        OURSERVICES:"OUR SERVICES",
        OURSERVICESDesc:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.        ",
        contact: "Contact us",
        contactDesc:"Sign-Up For Our Newsletter To Keep Up To Date With Our Community ",
        Name:"Name",
        Email:"Email",
        Phone:"Phone",
        ChooseService:"Choose Service",
        serviceName:"service Name",
        yourMassage:" Enter your massage",
        CheckMe:"Check Me",
        send:"send",
    },
    ar: {
      home: " الرئيسية",
      about: "من نحن",
      selectLanguage: "إختر لغة",
      english: "الانجليزية",
      arabic: "العربية",
      start: "ابدأ مشروعك",
      landTitleP1: " البومة للحلول ",
      landTitleP2: " الرقمية",
        landDisc:" نفكر خارج الصندوق لكننا أسرع",
        btnView:"معاينة",
        servicesTitle1P1:" الخدمات التي يمكننا مساعدتك بها مع وكالة بومه" ,
        servicesTitle1P2:"وكالة البومة",   
         InterfaceTitle:"تصميم واجهة",
        interfaceDesc:"  نحن مجموعه من المبرمجين ومحللي النظم والمصممين والمسوقين اجتمعنا لتقديم افضل الخدمات: من اجلك انت  ومحللي النظم والمصممين والمسوقين       ",
        ourTeamHeader:"فريقنا",
        teamMemb:"براء عدنان",
        teamMembPOS:"مصمم واجهات اماميه",
        serviceLocationHead:" موقع خدمات وكالة البومه في دبي",
        Dubai:"دبي",
        timeOfWork:"من الاثنين إلى السبت من الساعة 9 صباحًا حتى الساعة 8 مساءً",
        locOfAgancy:"الخليج التجاري - برج باي فيو 18",
        fOLLOWUS:"تابعنا",
        footerLinksTtle:"التصنيفات",
        footerLinks:"رابط دعم",
        footerDesc:"البومة للحلول الرقمية نفكر خارج الصندوق لكننا أسرع ونوفر خدمه متميزه ",
        OURSERVICES:"خدماتنا",
        OURSERVICESDesc:"     الخدمات التي يمكننا مساعدتك فيها بالخدمات التي يمكننا مساعدتك بها مجموعه من المبرمجين ومحللي النظم والمصممين والمسوقين اجتمعنا لتقديم افضل الخدمات: من اجلك انت الخدمات التي يمكننا مساعدتك فيها بالخدمات التي يمكننا مساعدتك بها مجموعه من المبرمجين ومحللي النظم والمصممين والمسوقين اجتمعنا لتقديم افضل الخدمات: من اجلك انت ",
        contact: "تواصل معنا",
        contactDesc:"الاشتراك في النشرة الإخبارية لدينا لمواكبة أحدث مع مجتمعنا",
        Email:"بريد إلكتروني",
        Phone:"هاتف",
        Name:"الأسم",
        ChooseService:"اختر الخدمة",
        serviceName:"أسم الخدمة",
        CheckMe:"تحققني",
        yourMassage:"اكتب رسالتك",
        send:"ارسال",

    },
  };
  

  const languageSelector = document.querySelector("select");
  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
  });
  
  const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const translationKey = element.getAttribute("data-i18n");
      element.textContent = translations[language][translationKey];
    });
    
    // document.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "ar"){
        document.dir="rtl";
        // body.style.textAlign = 'right';
       document.body.style.textAlign ='right';
       document.body.style.fontFamily='Tajawal';
  
        
    }else{
        document.dir="ltr"
        document.body.style.textAlign ='left';
        document.body.style.fontFamily='Poppins';

    };
  
    
    
    
  };
  