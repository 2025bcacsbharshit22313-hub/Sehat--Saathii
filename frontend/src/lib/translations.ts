export const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
] as const

export type LangCode = (typeof languages)[number]['code']

export const translations: Record<LangCode, {
  nav: { home: string; about: string; features: string; diseases: string; chat: string; contact: string }
  hero: { badge: string; title: string; subtitle: string; cta: string; ctaSecondary: string }
  about: { title: string; description1: string; description2: string }
  features: { title: string; subtitle: string }
  diseases: { title: string; subtitle: string }
  chat: { title: string; subtitle: string; placeholder: string; send: string; disclaimer: string }
  contact: { title: string; subtitle: string; name: string; email: string; message: string; send: string }
  footer: { description: string; links: string; contact: string; copyright: string }
}> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      diseases: 'Diseases',
      chat: 'Chat',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI-Powered Healthcare',
      title: 'Your Trusted AI Health Companion for India',
      subtitle: 'Get instant health guidance, symptom analysis, and disease prevention tips in your language. Accessible healthcare for every Indian.',
      cta: 'Start Health Chat',
      ctaSecondary: 'Learn More',
    },
    about: {
      title: 'About Sehat-Saathi',
      description1: 'Sehat-Saathi is an AI-powered healthcare assistant designed specifically for India. We bridge the gap between patients and reliable health information using cutting-edge artificial intelligence.',
      description2: 'Our mission is to make quality healthcare guidance accessible to every Indian, regardless of language or location. We support 8 Indian languages and provide evidence-based health information.',
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need for better health awareness',
    },
    diseases: {
      title: 'Common Diseases',
      subtitle: 'Learn about prevalent diseases in India, their symptoms, and prevention',
    },
    chat: {
      title: 'Health Assistant Chat',
      subtitle: 'Ask me anything about your health concerns',
      placeholder: 'Describe your symptoms or ask a health question...',
      send: 'Send',
      disclaimer: 'This AI assistant provides general health information only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have questions or feedback? We\'d love to hear from you.',
      name: 'Your Name',
      email: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
    },
    footer: {
      description: 'AI-powered healthcare assistant making quality health guidance accessible to every Indian.',
      links: 'Quick Links',
      contact: 'Contact',
      copyright: '© 2025 Sehat-Saathi. All rights reserved.',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      features: 'विशेषताएँ',
      diseases: 'बीमारियाँ',
      chat: 'चैट',
      contact: 'संपर्क',
    },
    hero: {
      badge: 'AI-संचालित स्वास्थ्य सेवा',
      title: 'भारत के लिए आपका विश्वसनीय AI स्वास्थ्य साथी',
      subtitle: 'अपनी भाषा में तुरंत स्वास्थ्य मार्गदर्शन, लक्षण विश्लेषण और रोग निवारण सुझाव प्राप्त करें। हर भारतीय के लिए सुलभ स्वास्थ्य सेवा।',
      cta: 'स्वास्थ्य चैट शुरू करें',
      ctaSecondary: 'और जानें',
    },
    about: {
      title: 'सेहत-साथी के बारे में',
      description1: 'सेहत-साथी भारत के लिए विशेष रूप से डिज़ाइन किया गया AI-संचालित स्वास्थ्य सहायक है। हम अत्याधुनिक कृत्रिम बुद्धिमत्ता का उपयोग करके रोगियों और विश्वसनीय स्वास्थ्य जानकारी के बीच की खाई को पाटते हैं।',
      description2: 'हमारा मिशन भाषा या स्थान की परवाह किए बिना हर भारतीय के लिए गुणवत्तापूर्ण स्वास्थ्य मार्गदर्शन सुलभ बनाना है। हम 8 भारतीय भाषाओं का समर्थन करते हैं और साक्ष्य-आधारित स्वास्थ्य जानकारी प्रदान करते हैं।',
    },
    features: {
      title: 'विशेषताएँ',
      subtitle: 'बेहतर स्वास्थ्य जागरूकता के लिए सब कुछ',
    },
    diseases: {
      title: 'सामान्य बीमारियाँ',
      subtitle: 'भारत में प्रचलित बीमारियों, उनके लक्षणों और रोकथाम के बारे में जानें',
    },
    chat: {
      title: 'स्वास्थ्य सहायक चैट',
      subtitle: 'अपनी स्वास्थ्य चिंताओं के बारे में कुछ भी पूछें',
      placeholder: 'अपने लक्षणों का वर्णन करें या स्वास्थ्य प्रश्न पूछें...',
      send: 'भेजें',
      disclaimer: 'यह AI सहायक केवल सामान्य स्वास्थ्य जानकारी प्रदान करता है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। हमेशा योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।',
    },
    contact: {
      title: 'संपर्क करें',
      subtitle: 'कोई प्रश्न या प्रतिक्रिया है? हम आपसे सुनना चाहेंगे।',
      name: 'आपका नाम',
      email: 'ईमेल पता',
      message: 'आपका संदेश',
      send: 'संदेश भेजें',
    },
    footer: {
      description: 'AI-संचालित स्वास्थ्य सहायक जो हर भारतीय के लिए गुणवत्तापूर्ण स्वास्थ्य मार्गदर्शन सुलभ बनाता है।',
      links: 'त्वरित लिंक',
      contact: 'संपर्क',
      copyright: '© 2025 सेहत-साथी। सर्वाधिकार सुरक्षित।',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      features: 'বৈশিষ্ট্য',
      diseases: 'রোগসমূহ',
      chat: 'চ্যাট',
      contact: 'যোগাযোগ',
    },
    hero: {
      badge: 'AI-চালিত স্বাস্থ্যসেবা',
      title: 'ভারতের জন্য আপনার বিশ্বস্ত AI স্বাস্থ্য সঙ্গী',
      subtitle: 'আপনার ভাষায় তাৎক্ষণিক স্বাস্থ্য নির্দেশনা, উপসর্গ বিশ্লেষণ এবং রোগ প্রতিরোধ টিপস পান। প্রতিটি ভারতীয়ের জন্য সুলভ স্বাস্থ্যসেবা।',
      cta: 'স্বাস্থ্য চ্যাট শুরু করুন',
      ctaSecondary: 'আরও জানুন',
    },
    about: {
      title: 'সেহাত-সাথী সম্পর্কে',
      description1: 'সেহাত-সাথী ভারতের জন্য বিশেষভাবে ডিজাইন করা একটি AI-চালিত স্বাস্থ্য সহকারী।',
      description2: 'আমাদের লক্ষ্য ভাষা বা অবস্থান নির্বিশেষে প্রতিটি ভারতীয়ের জন্য মানসম্পন্ন স্বাস্থ্য নির্দেশনা সুলভ করা।',
    },
    features: {
      title: 'বৈশিষ্ট্য',
      subtitle: 'উন্নত স্বাস্থ্য সচেতনতার জন্য প্রয়োজনীয় সবকিছু',
    },
    diseases: {
      title: 'সাধারণ রোগসমূহ',
      subtitle: 'ভারতে প্রচলিত রোগ, তাদের লক্ষণ এবং প্রতিরোধ সম্পর্কে জানুন',
    },
    chat: {
      title: 'স্বাস্থ্য সহকারী চ্যাট',
      subtitle: 'আপনার স্বাস্থ্য সংক্রান্ত উদ্বেগ সম্পর্কে জিজ্ঞাসা করুন',
      placeholder: 'আপনার উপসর্গ বর্ণনা করুন বা স্বাস্থ্য প্রশ্ন জিজ্ঞাসা করুন...',
      send: 'পাঠান',
      disclaimer: 'এই AI সহকারী শুধুমাত্র সাধারণ স্বাস্থ্য তথ্য প্রদান করে। এটি পেশাদার চিকিৎসা পরামর্শের বিকল্প নয়।',
    },
    contact: {
      title: 'যোগাযোগ করুন',
      subtitle: 'প্রশ্ন বা মতামত আছে? আমরা আপনার কাছ থেকে শুনতে চাই।',
      name: 'আপনার নাম',
      email: 'ইমেইল ঠিকানা',
      message: 'আপনার বার্তা',
      send: 'বার্তা পাঠান',
    },
    footer: {
      description: 'AI-চালিত স্বাস্থ্য সহকারী যা প্রতিটি ভারতীয়ের জন্য মানসম্পন্ন স্বাস্থ্য নির্দেশনা সুলভ করে।',
      links: 'দ্রুত লিংক',
      contact: 'যোগাযোগ',
      copyright: '© 2025 সেহাত-সাথী। সর্বস্বত্ব সংরক্ষিত।',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      features: 'அம்சங்கள்',
      diseases: 'நோய்கள்',
      chat: 'அரட்டை',
      contact: 'தொடர்பு',
    },
    hero: {
      badge: 'AI-இயக்கப்படும் சுகாதாரம்',
      title: 'இந்தியாவிற்கான உங்கள் நம்பகமான AI சுகாதார துணைவர்',
      subtitle: 'உங்கள் மொழியில் உடனடி சுகாதார வழிகாட்டுதல், அறிகுறி பகுப்பாய்வு மற்றும் நோய் தடுப்பு குறிப்புகளைப் பெறுங்கள்.',
      cta: 'சுகாதார அரட்டை தொடங்கு',
      ctaSecondary: 'மேலும் அறிய',
    },
    about: {
      title: 'சேஹத்-சாதி பற்றி',
      description1: 'சேஹத்-சாதி இந்தியாவிற்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட AI-இயக்கப்படும் சுகாதார உதவியாளர்.',
      description2: 'மொழி அல்லது இருப்பிடம் பொருட்படுத்தாமல் ஒவ்வொரு இந்தியருக்கும் தரமான சுகாதார வழிகாட்டுதலை அணுகக்கூடியதாக மாற்றுவதே எங்கள் நோக்கம்.',
    },
    features: {
      title: 'அம்சங்கள்',
      subtitle: 'சிறந்த சுகாதார விழிப்புணர்வுக்கு தேவையான அனைத்தும்',
    },
    diseases: {
      title: 'பொதுவான நோய்கள்',
      subtitle: 'இந்தியாவில் பரவலான நோய்கள், அவற்றின் அறிகுறிகள் மற்றும் தடுப்பு பற்றி அறியுங்கள்',
    },
    chat: {
      title: 'சுகாதார உதவியாளர் அரட்டை',
      subtitle: 'உங்கள் சுகாதார கவலைகள் பற்றி கேளுங்கள்',
      placeholder: 'உங்கள் அறிகுறிகளை விவரியுங்கள் அல்லது சுகாதார கேள்வி கேளுங்கள்...',
      send: 'அனுப்பு',
      disclaimer: 'இது தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. எப்போதும் தகுதிவாய்ந்த மருத்துவரை அணுகுங்கள்.',
    },
    contact: {
      title: 'தொடர்பு கொள்ளுங்கள்',
      subtitle: 'கேள்விகள் அல்லது கருத்துகள் உள்ளதா? உங்களிடமிருந்து கேட்க விரும்புகிறோம்.',
      name: 'உங்கள் பெயர்',
      email: 'மின்னஞ்சல் முகவரி',
      message: 'உங்கள் செய்தி',
      send: 'செய்தி அனுப்பு',
    },
    footer: {
      description: 'ஒவ்வொரு இந்தியருக்கும் தரமான சுகாதார வழிகாட்டுதலை அணுகக்கூடியதாக மாற்றும் AI-இயக்கப்படும் சுகாதார உதவியாளர்.',
      links: 'விரைவு இணைப்புகள்',
      contact: 'தொடர்பு',
      copyright: '© 2025 சேஹத்-சாதி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      features: 'ఫీచర్లు',
      diseases: 'వ్యాధులు',
      chat: 'చాట్',
      contact: 'సంప్రదించండి',
    },
    hero: {
      badge: 'AI-ఆధారిత ఆరోగ్య సేవ',
      title: 'భారతదేశానికి మీ నమ్మకమైన AI ఆరోగ్య సహచరుడు',
      subtitle: 'మీ భాషలో తక్షణ ఆరోగ్య మార్గదర్శకత్వం, లక్షణ విశ్లేషణ మరియు వ్యాధి నివారణ చిట్కాలు పొందండి.',
      cta: 'ఆరోగ్య చాట్ ప్రారంభించండి',
      ctaSecondary: 'మరింత తెలుసుకోండి',
    },
    about: {
      title: 'సెహత్-సాథీ గురించి',
      description1: 'సెహత్-సాథీ భారతదేశం కోసం ప్రత్యేకంగా రూపొందించబడిన AI-ఆధారిత ఆరోగ్య సహాయకుడు.',
      description2: 'భాష లేదా ప్రదేశంతో సంబంధం లేకుండా ప్రతి భారతీయుడికి నాణ్యమైన ఆరోగ్య మార్గదర్శకత్వాన్ని అందుబాటులోకి తేవడం మా లక్ష్యం.',
    },
    features: {
      title: 'ఫీచర్లు',
      subtitle: 'మెరుగైన ఆరోగ్య అవగాహన కోసం మీకు కావలసినవన్నీ',
    },
    diseases: {
      title: 'సాధారణ వ్యాధులు',
      subtitle: 'భారతదేశంలో ప్రబలంగా ఉన్న వ్యాధులు, వాటి లక్షణాలు మరియు నివారణ గురించి తెలుసుకోండి',
    },
    chat: {
      title: 'ఆరోగ్య సహాయక చాట్',
      subtitle: 'మీ ఆరోగ్య సమస్యల గురించి ఏదైనా అడగండి',
      placeholder: 'మీ లక్షణాలను వివరించండి లేదా ఆరోగ్య ప్రశ్న అడగండి...',
      send: 'పంపండి',
      disclaimer: 'ఇది వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు. ఎల్లప్పుడూ అర్హత కలిగిన వైద్యుడిని సంప్రదించండి.',
    },
    contact: {
      title: 'మమ్మల్ని సంప్రదించండి',
      subtitle: 'ప్రశ్నలు లేదా అభిప్రాయాలు ఉన్నాయా? మేము మీ నుండి వినడానికి ఇష్టపడతాము.',
      name: 'మీ పేరు',
      email: 'ఇమెయిల్ చిరునామా',
      message: 'మీ సందేశం',
      send: 'సందేశం పంపండి',
    },
    footer: {
      description: 'ప్రతి భారతీయుడికి నాణ్యమైన ఆరోగ్య మార్గదర్శకత్వాన్ని అందుబాటులోకి తెచ్చే AI-ఆధారిత ఆరోగ్య సహాయకుడు.',
      links: 'త్వరిత లింకులు',
      contact: 'సంప్రదించండి',
      copyright: '© 2025 సెహత్-సాథీ. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    },
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      features: 'वैशिष्ट्ये',
      diseases: 'आजार',
      chat: 'चॅट',
      contact: 'संपर्क',
    },
    hero: {
      badge: 'AI-संचालित आरोग्यसेवा',
      title: 'भारतासाठी तुमचा विश्वासू AI आरोग्य साथी',
      subtitle: 'तुमच्या भाषेत त्वरित आरोग्य मार्गदर्शन, लक्षण विश्लेषण आणि रोग प्रतिबंधक टिप्स मिळवा.',
      cta: 'आरोग्य चॅट सुरू करा',
      ctaSecondary: 'अधिक जाणून घ्या',
    },
    about: {
      title: 'सेहत-साथी बद्दल',
      description1: 'सेहत-साथी भारतासाठी विशेषतः डिझाइन केलेला AI-संचालित आरोग्य सहाय्यक आहे.',
      description2: 'भाषा किंवा स्थानाची पर्वा न करता प्रत्येक भारतीयासाठी दर्जेदार आरोग्य मार्गदर्शन सुलभ करणे हे आमचे ध्येय आहे.',
    },
    features: {
      title: 'वैशिष्ट्ये',
      subtitle: 'चांगल्या आरोग्य जागृतीसाठी आवश्यक सर्व काही',
    },
    diseases: {
      title: 'सामान्य आजार',
      subtitle: 'भारतातील प्रचलित आजार, त्यांची लक्षणे आणि प्रतिबंध याबद्दल जाणून घ्या',
    },
    chat: {
      title: 'आरोग्य सहाय्यक चॅट',
      subtitle: 'तुमच्या आरोग्य चिंतांबद्दल काहीही विचारा',
      placeholder: 'तुमच्या लक्षणांचे वर्णन करा किंवा आरोग्य प्रश्न विचारा...',
      send: 'पाठवा',
      disclaimer: 'हे व्यावसायिक वैद्यकीय सल्ल्याचा पर्याय नाही. नेहमी पात्र आरोग्य सेवा प्रदात्याचा सल्ला घ्या.',
    },
    contact: {
      title: 'आमच्याशी संपर्क साधा',
      subtitle: 'प्रश्न किंवा अभिप्राय आहे? आम्हाला तुमचे ऐकायला आवडेल.',
      name: 'तुमचे नाव',
      email: 'ईमेल पत्ता',
      message: 'तुमचा संदेश',
      send: 'संदेश पाठवा',
    },
    footer: {
      description: 'प्रत्येक भारतीयासाठी दर्जेदार आरोग्य मार्गदर्शन सुलभ करणारा AI-संचालित आरोग्य सहाय्यक.',
      links: 'जलद दुवे',
      contact: 'संपर्क',
      copyright: '© 2025 सेहत-साथी. सर्व हक्क राखीव.',
    },
  },
  gu: {
    nav: {
      home: 'હોમ',
      about: 'અમારા વિશે',
      features: 'વિશેષતાઓ',
      diseases: 'રોગો',
      chat: 'ચેટ',
      contact: 'સંપર્ક',
    },
    hero: {
      badge: 'AI-સંચાલિત આરોગ્ય સેવા',
      title: 'ભારત માટે તમારો વિશ્વસનીય AI આરોગ્ય સાથી',
      subtitle: 'તમારી ભાષામાં તાત્કાલિક આરોગ્ય માર્ગદર્શન, લક્ષણ વિશ્લેષણ અને રોગ નિવારણ ટિપ્સ મેળવો.',
      cta: 'આરોગ્ય ચેટ શરૂ કરો',
      ctaSecondary: 'વધુ જાણો',
    },
    about: {
      title: 'સેહત-સાથી વિશે',
      description1: 'સેહત-સાથી ભારત માટે ખાસ ડિઝાઇન કરેલ AI-સંચાલિત આરોગ્ય સહાયક છે.',
      description2: 'ભાષા કે સ્થાનને ધ્યાનમાં લીધા વિના દરેક ભારતીય માટે ગુણવત્તાયુક્ત આરોગ્ય માર્ગદર્શન સુલભ બનાવવું એ અમારું મિશન છે.',
    },
    features: {
      title: 'વિશેષતાઓ',
      subtitle: 'વધુ સારી આરોગ્ય જાગૃતિ માટે જરૂરી બધું',
    },
    diseases: {
      title: 'સામાન્ય રોગો',
      subtitle: 'ભારતમાં પ્રચલિત રોગો, તેમના લક્ષણો અને નિવારણ વિશે જાણો',
    },
    chat: {
      title: 'આરોગ્ય સહાયક ચેટ',
      subtitle: 'તમારી આરોગ્ય ચિંતાઓ વિશે કંઈપણ પૂછો',
      placeholder: 'તમારા લક્ષણો વર્ણવો અથવા આરોગ્ય પ્રશ્ન પૂછો...',
      send: 'મોકલો',
      disclaimer: 'આ વ્યાવસાયિક તબીબી સલાહનો વિકલ્પ નથી. હંમેશા લાયક આરોગ્ય સેવા પ્રદાતાની સલાહ લો.',
    },
    contact: {
      title: 'અમારો સંપર્ક કરો',
      subtitle: 'પ્રશ્નો કે પ્રતિસાદ છે? અમને તમારી પાસેથી સાંભળવું ગમશે.',
      name: 'તમારું નામ',
      email: 'ઈમેલ સરનામું',
      message: 'તમારો સંદેશ',
      send: 'સંદેશ મોકલો',
    },
    footer: {
      description: 'દરેક ભારતીય માટે ગુણવત્તાયુક્ત આરોગ્ય માર્ગદર્શન સુલભ બનાવતો AI-સંચાલિત આરોગ્ય સહાયક.',
      links: 'ઝડપી લિંક્સ',
      contact: 'સંપર્ક',
      copyright: '© 2025 સેહત-સાથી. બધા હકો અમારી પાસે રાખેલ છે.',
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
      diseases: 'ರೋಗಗಳು',
      chat: 'ಚಾಟ್',
      contact: 'ಸಂಪರ್ಕ',
    },
    hero: {
      badge: 'AI-ಚಾಲಿತ ಆರೋಗ್ಯ ಸೇವೆ',
      title: 'ಭಾರತಕ್ಕಾಗಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ AI ಆರೋಗ್ಯ ಸಂಗಾತಿ',
      subtitle: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ತ್ವರಿತ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ, ರೋಗಲಕ್ಷಣ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ರೋಗ ತಡೆಗಟ್ಟುವಿಕೆ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.',
      cta: 'ಆರೋಗ್ಯ ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ',
      ctaSecondary: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    },
    about: {
      title: 'ಸೆಹತ್-ಸಾಥಿ ಬಗ್ಗೆ',
      description1: 'ಸೆಹತ್-ಸಾಥಿ ಭಾರತಕ್ಕಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ AI-ಚಾಲಿತ ಆರೋಗ್ಯ ಸಹಾಯಕ.',
      description2: 'ಭಾಷೆ ಅಥವಾ ಸ್ಥಳವನ್ನು ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿ ಭಾರತೀಯರಿಗೆ ಗುಣಮಟ್ಟದ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನವನ್ನು ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವುದು ನಮ್ಮ ಗುರಿ.',
    },
    features: {
      title: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
      subtitle: 'ಉತ್ತಮ ಆರೋಗ್ಯ ಜಾಗೃತಿಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ',
    },
    diseases: {
      title: 'ಸಾಮಾನ್ಯ ರೋಗಗಳು',
      subtitle: 'ಭಾರತದಲ್ಲಿ ಪ್ರಚಲಿತ ರೋಗಗಳು, ಅವುಗಳ ಲಕ್ಷಣಗಳು ಮತ್ತು ತಡೆಗಟ್ಟುವಿಕೆ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ',
    },
    chat: {
      title: 'ಆರೋಗ್ಯ ಸಹಾಯಕ ಚಾಟ್',
      subtitle: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ಕಾಳಜಿಗಳ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ',
      placeholder: 'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ ಅಥವಾ ಆರೋಗ್ಯ ಪ್ರಶ್ನೆ ಕೇಳಿ...',
      send: 'ಕಳುಹಿಸಿ',
      disclaimer: 'ಇದು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಬದಲಿಯಲ್ಲ. ಯಾವಾಗಲೂ ಅರ್ಹ ಆರೋಗ್ಯ ಸೇವಾ ಪೂರೈಕೆದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    contact: {
      title: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      subtitle: 'ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಪ್ರತಿಕ್ರಿಯೆ ಇದೆಯೇ? ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಮಗೆ ಇಷ್ಟ.',
      name: 'ನಿಮ್ಮ ಹೆಸರು',
      email: 'ಇಮೇಲ್ ವಿಳಾಸ',
      message: 'ನಿಮ್ಮ ಸಂದೇಶ',
      send: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    },
    footer: {
      description: 'ಪ್ರತಿ ಭಾರತೀಯರಿಗೆ ಗುಣಮಟ್ಟದ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನವನ್ನು ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವ AI-ಚಾಲಿತ ಆರೋಗ್ಯ ಸಹಾಯಕ.',
      links: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      contact: 'ಸಂಪರ್ಕ',
      copyright: '© 2025 ಸೆಹತ್-ಸಾಥಿ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    },
  },
}
