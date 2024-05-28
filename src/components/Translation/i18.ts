import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          words: {
            cart: "cart",
            return: "Returns",
            orders: "Orders",
            deliver: "Delivers",
            to: "to",
            hello: "Hello",
            signout: "SignOut",
            all: "All",
            todaydeals: "Today's Deals",
            customerservice: "Customer Service",
            registry: "registry",
            giftcards: "Gift Cards",
            sell: "Sell",
            amazonmusic: "Amazon Music",
            searchamazon: "Search Amazon",
            ethiopia: "Ethiopia",
            digitalconten_device: "Digital Conten & Devices",
            Amazon_Music: "Amazon Music",
            Kindle_E_reader_Books: "Kindle E-reader & Books",
            Amazon_Appstore: "Amazon Appstore",
            Shop_by_Department: "Shop by Department",
            Electronics: "Electronics",
            Computer: "Computer",
            Smart_Home: "Smart Home",
            Art_Crafts: "Art & Crafts",
            See_all: "See all",
            Shop_By_Interest: "Shop By Interest",
            International_Shopping: "International Shopping",
            your_Account: "your Account",
            Customer_Service: "Customer Service",
            Signin: "Sign in",
            United_State: "United State",
            Account_list:"Account & List"
          },
        },
      },
      es: {
        translation: {
          words: {
            cart: "Carrito",
            return: "Devoluciones",
            orders: "Pedidos",
            deliver: "Entregas",
            to: "a",
            hello: "Hola",
            signout: "Cerrar sesión",
            all: "Todo",
            todaydeals: "Ofertas del día",
            customerservice: "Servicio al cliente",
            registry: "Registro",
            giftcards: "Tarjetas de regalo",
            sell: "Vender",
            amazonmusic: "Amazon Music",
            searchamazon: "Buscar en Amazon",
            ethiopia: "Etiopía",
            digitalconten_device: "Contenido Digital y Dispositivos",
            Amazon_Music: "Amazon Música",
            Kindle_E_reader_Books: "Kindle Lectores Electrónicos y Libros",
            Amazon_Appstore: "Tienda de Aplicaciones Amazon",
            Shop_by_Department: "Comprar por Departamento",
            Electronics: "Electrónicos",
            Computer: "Computadoras",
            Smart_Home: "Hogar Inteligente",
            Art_Crafts: "Arte y Manualidades",
            See_all: "Ver todo",
            Shop_By_Interest: "Comprar por Interés",
            International_Shopping: "Compras Internacionales",
            your_Account: "Tu Cuenta",
            Customer_Service: "Servicio al Cliente",
            Signin: "Iniciar sesión",
            United_State: "Estados Unidos",
            Account_list: "Cuenta y Listas"
          },
        },
      },
      ar: {
        translation: {
          words: {
            cart: "عربة التسوق",
            return: "المرتجعات",
            orders: "الطلبيات",
            deliver: "توصيل",
            to: "إلى",
            hello: "مرحبًا",
            signout: "تسجيل الخروج",
            all: "الكل",
            todaydeals: "عروض اليوم",
            customerservice: "خدمة العملاء",
            registry: "السجل",
            giftcards: "بطاقات الهدايا",
            sell: "بيع",
            amazonmusic: "أمازون ميوزيك",
            searchamazon: "البحث في أمازون",
            ethiopia: "إثيوبيا",
            digitalconten_device: "المحتوى الرقمي والأجهزة",
            Amazon_Music: "أمازون ميوزيك",
            Kindle_E_reader_Books: "كيندل وقارئ الكتب الإلكترونية",
            Amazon_Appstore: "متجر تطبيقات أمازون",
            Shop_by_Department: "التسوق حسب القسم",
            Electronics: "الإلكترونيات",
            Computer: "الحاسوب",
            Smart_Home: "المنزل الذكي",
            Art_Crafts: "الفنون والحرف اليدوية",
            See_all: "رؤية الكل",
            Shop_By_Interest: "التسوق حسب الاهتمام",
            International_Shopping: "التسوق الدولي",
            your_Account: "حسابك",
            Customer_Service: "خدمة العملاء",
            Signin: "تسجيل الدخول",
            United_State: "الولايات المتحدة",
            Account_list: "الحساب والقائمة"
          },
        },
      },
    },
  });
export default i18n;