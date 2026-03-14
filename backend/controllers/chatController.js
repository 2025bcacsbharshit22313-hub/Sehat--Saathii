const DISCLAIMER =
  "This AI assistant provides general health information only and does not replace professional medical advice. Please consult a qualified healthcare professional for proper diagnosis and treatment.";

const DISCLAIMER_HI =
  "यह AI सहायक केवल सामान्य स्वास्थ्य जानकारी प्रदान करता है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है। कृपया उचित निदान और उपचार के लिए किसी योग्य स्वास्थ्य पेशेवर से परामर्श करें।";

const SUPPORTED_LANGUAGES = ["en", "hi", "bn", "ta", "te", "mr", "gu", "kn"];

const LANGUAGE_NAMES = {
  en: "English",
  hi: "Hindi",
  bn: "Bengali",
  ta: "Tamil",
  te: "Telugu",
  mr: "Marathi",
  gu: "Gujarati",
  kn: "Kannada",
};

// ── Health knowledge base ────────────────────────────────────────────
const healthKB = {
  dengue: {
    en: {
      symptoms:
        "Dengue symptoms include high fever (104°F/40°C), severe headache, pain behind the eyes, joint and muscle pain, fatigue, nausea, vomiting, skin rash (appears 2-5 days after fever), and mild bleeding (nose or gum bleed).",
      prevention:
        "Prevent dengue by eliminating stagnant water where mosquitoes breed, using mosquito nets and repellents, wearing long-sleeved clothes, and using screens on windows and doors.",
      doctor:
        "See a doctor immediately if you have persistent vomiting, severe abdominal pain, bleeding from gums or nose, blood in urine/stool, or extreme fatigue. These could indicate severe dengue which can be life-threatening.",
    },
    hi: {
      symptoms:
        "डेंगू के लक्षणों में तेज बुखार (104°F/40°C), गंभीर सिरदर्द, आंखों के पीछे दर्द, जोड़ों और मांसपेशियों में दर्द, थकान, मतली, उल्टी, त्वचा पर दाने (बुखार के 2-5 दिन बाद), और हल्का रक्तस्राव शामिल हैं।",
      prevention:
        "डेंगू से बचाव के लिए रुके हुए पानी को हटाएं, मच्छरदानी और रिपेलेंट का उपयोग करें, लंबी बाजू के कपड़े पहनें, और खिड़कियों पर जाली लगाएं।",
      doctor:
        "यदि लगातार उल्टी, पेट में तेज दर्द, मसूड़ों या नाक से खून, पेशाब/मल में खून, या अत्यधिक थकान हो तो तुरंत डॉक्टर से मिलें।",
    },
  },
  malaria: {
    en: {
      symptoms:
        "Malaria symptoms include high fever with chills and sweating, headache, nausea and vomiting, muscle pain and fatigue, and the fever often comes in cycles every 48-72 hours.",
      prevention:
        "Prevent malaria by sleeping under insecticide-treated bed nets, using mosquito repellent, taking antimalarial medication if traveling to high-risk areas, and eliminating standing water near your home.",
      doctor:
        "See a doctor if you have recurring fever with chills, especially if you live in or have traveled to a malaria-endemic area. Early diagnosis through blood tests is crucial for effective treatment.",
    },
    hi: {
      symptoms:
        "मलेरिया के लक्षणों में ठंड लगकर तेज बुखार आना, पसीना आना, सिरदर्द, मतली और उल्टी, मांसपेशियों में दर्द और थकान शामिल है। बुखार अक्सर हर 48-72 घंटे में आता है।",
      prevention:
        "मलेरिया से बचाव के लिए कीटनाशक-उपचारित मच्छरदानी में सोएं, मच्छर भगाने वाली क्रीम लगाएं, और घर के पास रुके पानी को हटाएं।",
      doctor:
        "यदि बार-बार ठंड लगकर बुखार आ रहा है, खासकर मलेरिया प्रभावित क्षेत्र में रहते हैं, तो तुरंत डॉक्टर से मिलें। खून की जांच से जल्दी पता लगाना जरूरी है।",
    },
  },
  diabetes: {
    en: {
      symptoms:
        "Diabetes symptoms include frequent urination, excessive thirst, unexplained weight loss, increased hunger, blurred vision, slow-healing wounds, fatigue, and tingling in hands or feet.",
      prevention:
        "Manage and prevent diabetes by maintaining a healthy weight, eating a balanced diet low in sugar and refined carbs, exercising regularly (at least 30 minutes daily), and getting regular blood sugar checks.",
      doctor:
        "See a doctor if you notice frequent urination, excessive thirst, unexplained weight loss, or slow-healing wounds. Regular screening is recommended if you have a family history of diabetes.",
    },
    hi: {
      symptoms:
        "मधुमेह के लक्षणों में बार-बार पेशाब आना, अत्यधिक प्यास, बिना कारण वजन कम होना, ज्यादा भूख लगना, धुंधली दृष्टि, घाव का धीरे भरना, थकान और हाथ-पैर में झनझनाहट शामिल है।",
      prevention:
        "मधुमेह से बचाव के लिए स्वस्थ वजन बनाए रखें, चीनी और मैदा कम खाएं, रोजाना कम से कम 30 मिनट व्यायाम करें, और नियमित रूप से शुगर की जांच कराएं।",
      doctor:
        "बार-बार पेशाब, अत्यधिक प्यास, बिना कारण वजन कम होना, या घाव का धीरे भरना हो तो डॉक्टर से मिलें। परिवार में मधुमेह का इतिहास हो तो नियमित जांच कराएं।",
    },
  },
  fever: {
    en: {
      symptoms:
        "Fever symptoms include elevated body temperature (above 98.6°F/37°C), chills, sweating, headache, muscle aches, loss of appetite, dehydration, and general weakness.",
      prevention:
        "Prevent infections that cause fever by washing hands frequently, avoiding close contact with sick people, keeping your living space clean, drinking safe water, and maintaining good nutrition.",
      doctor:
        "See a doctor if fever is above 103°F (39.4°C), lasts more than 3 days, is accompanied by severe headache, stiff neck, rash, difficulty breathing, or persistent vomiting.",
    },
    hi: {
      symptoms:
        "बुखार के लक्षणों में शरीर का तापमान बढ़ना (98.6°F/37°C से ऊपर), ठंड लगना, पसीना आना, सिरदर्द, मांसपेशियों में दर्द, भूख न लगना, और कमजोरी शामिल है।",
      prevention:
        "बुखार से बचाव के लिए बार-बार हाथ धोएं, बीमार लोगों से दूर रहें, साफ-सफाई रखें, सुरक्षित पानी पिएं, और पौष्टिक आहार लें।",
      doctor:
        "यदि बुखार 103°F (39.4°C) से ऊपर है, 3 दिन से ज्यादा है, तेज सिरदर्द, गर्दन में अकड़न, दाने, सांस लेने में तकलीफ या लगातार उल्टी हो तो तुरंत डॉक्टर से मिलें।",
    },
  },
  cold: {
    en: {
      symptoms:
        "Cold and cough symptoms include runny or stuffy nose, sneezing, sore throat, cough, mild body aches, low-grade fever, and general fatigue. Symptoms usually last 7-10 days.",
      prevention:
        "Prevent colds by washing hands regularly, avoiding touching your face, maintaining distance from sick people, getting adequate sleep, eating vitamin C-rich foods, and staying hydrated.",
      doctor:
        "See a doctor if symptoms last more than 10 days, you have high fever (above 103°F), difficulty breathing, persistent chest pain, or symptoms that improve then worsen again.",
    },
    hi: {
      symptoms:
        "सर्दी-खांसी के लक्षणों में बहती या बंद नाक, छींकें, गले में खराश, खांसी, हल्का बदन दर्द, हल्का बुखार और थकान शामिल है। लक्षण आमतौर पर 7-10 दिन रहते हैं।",
      prevention:
        "सर्दी से बचाव के लिए नियमित हाथ धोएं, चेहरा न छुएं, बीमार लोगों से दूरी रखें, पर्याप्त नींद लें, विटामिन C युक्त भोजन खाएं, और पर्याप्त पानी पिएं।",
      doctor:
        "लक्षण 10 दिन से ज्यादा रहें, तेज बुखार (103°F से ऊपर), सांस लेने में तकलीफ, सीने में दर्द, या लक्षण ठीक होकर फिर बिगड़ें तो डॉक्टर से मिलें।",
    },
  },
  typhoid: {
    en: {
      symptoms:
        "Typhoid symptoms include sustained high fever (up to 104°F), weakness, stomach pain, headache, loss of appetite, and sometimes a rash of flat, rose-colored spots. Fever typically rises gradually over several days.",
      prevention:
        "Prevent typhoid by drinking only boiled or purified water, eating freshly cooked food, avoiding street food and raw vegetables, washing hands before eating, and getting the typhoid vaccine.",
      doctor:
        "See a doctor if you have prolonged fever (more than 5 days), especially with stomach pain, weakness, or if you live in or have visited an area where typhoid is common. Blood culture test confirms diagnosis.",
    },
    hi: {
      symptoms:
        "टायफायड के लक्षणों में लगातार तेज बुखार (104°F तक), कमजोरी, पेट दर्द, सिरदर्द, भूख न लगना, और कभी-कभी गुलाबी रंग के चकत्ते शामिल हैं। बुखार धीरे-धीरे कई दिनों में बढ़ता है।",
      prevention:
        "टायफायड से बचाव के लिए उबला या शुद्ध पानी पिएं, ताजा पका भोजन खाएं, बाहर का खाना और कच्ची सब्जियां न खाएं, खाने से पहले हाथ धोएं, और टायफायड का टीका लगवाएं।",
      doctor:
        "5 दिन से ज्यादा बुखार, खासकर पेट दर्द और कमजोरी के साथ, तो तुरंत डॉक्टर से मिलें। ब्लड कल्चर टेस्ट से टायफायड की पुष्टि होती है।",
    },
  },
  vaccination: {
    en: "Vaccinations are essential for preventing serious diseases. Key vaccines include: BCG (tuberculosis) at birth, OPV/IPV (polio), DPT (diphtheria, pertussis, tetanus), Hepatitis B, MMR (measles, mumps, rubella), and COVID-19 vaccines. Follow the National Immunization Schedule. Visit your nearest health center for the complete vaccination schedule for children and adults.",
    hi: "टीकाकरण गंभीर बीमारियों से बचाव के लिए आवश्यक है। प्रमुख टीके: BCG (टीबी) जन्म पर, OPV/IPV (पोलियो), DPT (डिप्थीरिया, काली खांसी, टेटनस), हेपेटाइटिस B, MMR (खसरा, गलसुआ, रूबेला), और कोविड-19 टीके। राष्ट्रीय टीकाकरण अनुसूची का पालन करें। पूरी टीकाकरण अनुसूची के लिए निकटतम स्वास्थ्य केंद्र पर जाएं।",
  },
  pregnancy: {
    en: "Pregnancy care tips: Get regular antenatal check-ups (at least 4 visits). Take iron and folic acid supplements as prescribed. Eat a balanced diet rich in proteins, iron, and calcium. Stay hydrated. Get adequate rest. Avoid heavy lifting. Take the tetanus toxoid (TT) vaccine. Watch for danger signs: severe headache, blurred vision, swelling of face/hands, vaginal bleeding, or reduced baby movement — seek immediate medical help.",
    hi: "गर्भावस्था देखभाल: नियमित प्रसवपूर्व जांच कराएं (कम से कम 4 बार)। डॉक्टर द्वारा बताई गई आयरन और फोलिक एसिड की गोलियां लें। प्रोटीन, आयरन और कैल्शियम युक्त संतुलित आहार लें। पर्याप्त पानी पिएं। आराम करें। भारी सामान न उठाएं। टेटनस का टीका लगवाएं। खतरे के संकेत: तेज सिरदर्द, धुंधली दृष्टि, चेहरे/हाथों पर सूजन, योनि से रक्तस्राव, या बच्चे की हलचल कम होना — तुरंत चिकित्सा सहायता लें।",
  },
  diet: {
    en: "Healthy diet tips: Eat a variety of fruits and vegetables daily. Include whole grains (roti, brown rice, millets like ragi and jowar). Consume adequate protein (dal, beans, eggs, milk, fish). Limit sugar, salt, and oily/fried foods. Drink 8-10 glasses of water daily. Include iron-rich foods (spinach, jaggery, dates) to prevent anemia. Eat seasonal and locally available foods for best nutrition.",
    hi: "स्वस्थ आहार सुझाव: रोजाना विभिन्न फल और सब्जियां खाएं। साबुत अनाज (रोटी, ब्राउन चावल, रागी, ज्वार जैसे मिलेट्स) खाएं। पर्याप्त प्रोटीन लें (दाल, राजमा, अंडे, दूध, मछली)। चीनी, नमक और तला-भुना खाना कम करें। रोजाना 8-10 गिलास पानी पिएं। खून की कमी रोकने के लिए आयरन युक्त भोजन (पालक, गुड़, खजूर) खाएं। मौसमी और स्थानीय भोजन सबसे पौष्टिक होता है।",
  },
  health_tips: {
    en: "General health tips: Wash hands frequently with soap and water. Exercise for at least 30 minutes daily. Get 7-8 hours of sleep. Drink clean, safe water. Don't skip meals. Avoid tobacco and limit alcohol. Manage stress through yoga or meditation. Get regular health check-ups. Keep your surroundings clean to prevent mosquito-borne diseases. Oral rehydration solution (ORS) is important for treating dehydration from diarrhea.",
    hi: "सामान्य स्वास्थ्य सुझाव: साबुन से बार-बार हाथ धोएं। रोजाना कम से कम 30 मिनट व्यायाम करें। 7-8 घंटे की नींद लें। साफ और सुरक्षित पानी पिएं। खाना न छोड़ें। तंबाकू से बचें और शराब सीमित करें। योग या ध्यान से तनाव कम करें। नियमित स्वास्थ्य जांच कराएं। मच्छर जनित रोगों से बचने के लिए आसपास सफाई रखें। दस्त से होने वाले निर्जलीकरण के लिए ORS महत्वपूर्ण है।",
  },
};

// ── Pattern matching keywords ────────────────────────────────────────
const patterns = [
  { keys: ["dengue"], topic: "dengue", isDisease: true },
  { keys: ["malaria"], topic: "malaria", isDisease: true },
  {
    keys: ["diabetes", "sugar", "blood sugar", "मधुमेह", "शुगर"],
    topic: "diabetes",
    isDisease: true,
  },
  {
    keys: ["fever", "temperature", "बुखार", "तापमान"],
    topic: "fever",
    isDisease: true,
  },
  {
    keys: ["cold", "cough", "sneez", "runny nose", "sore throat", "सर्दी", "खांसी", "जुकाम"],
    topic: "cold",
    isDisease: true,
  },
  {
    keys: ["typhoid", "टायफायड", "टाइफाइड"],
    topic: "typhoid",
    isDisease: true,
  },
  {
    keys: ["vaccin", "immuniz", "टीका", "टीकाकरण"],
    topic: "vaccination",
    isDisease: false,
  },
  {
    keys: ["pregnan", "antenatal", "गर्भ", "प्रेगनेंसी"],
    topic: "pregnancy",
    isDisease: false,
  },
  {
    keys: ["diet", "nutrition", "food", "eat", "आहार", "खाना", "पोषण"],
    topic: "diet",
    isDisease: false,
  },
  {
    keys: [
      "health tip",
      "healthy",
      "wellness",
      "hygiene",
      "exercise",
      "स्वास्थ्य",
      "स्वस्थ",
      "व्यायाम",
    ],
    topic: "health_tips",
    isDisease: false,
  },
];

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Strip HTML tags and dangerous patterns for basic XSS prevention.
 * For production, consider a dedicated library like DOMPurify or validator.js.
 */
function sanitize(text) {
  let clean = text;
  // Repeatedly strip HTML tags to handle nested/recursive patterns like <<script>script>
  let previous;
  do {
    previous = clean;
    clean = clean.replace(/<[^>]*>/g, "");
  } while (clean !== previous);
  // Strip dangerous URI schemes (javascript:, data:, vbscript:) and event handlers
  clean = clean.replace(/(?:javascript|data|vbscript)\s*:/gi, "");
  // Repeatedly strip event handler attributes to handle obfuscated patterns
  do {
    previous = clean;
    clean = clean.replace(/\bon\w+\s*=/gi, "");
  } while (clean !== previous);
  return clean.trim();
}

function getLanguageLabel(lang) {
  return LANGUAGE_NAMES[lang] || "English";
}

function buildDiseaseResponse(entry, lang) {
  const data = entry[lang] || entry.en;
  return [
    `**Symptoms:** ${data.symptoms}`,
    `**Prevention:** ${data.prevention}`,
    `**When to see a doctor:** ${data.doctor}`,
  ].join("\n\n");
}

function getTopicResponse(topic, lang) {
  const entry = healthKB[topic];
  if (!entry) return null;

  // Disease entries have nested { en, hi } with symptoms/prevention/doctor
  if (entry.en && typeof entry.en === "object") {
    return buildDiseaseResponse(entry, lang);
  }

  // Simple text entries (vaccination, pregnancy, diet, health_tips)
  return entry[lang] || entry.en;
}

function matchTopic(message) {
  const lower = message.toLowerCase();
  for (const pattern of patterns) {
    for (const key of pattern.keys) {
      if (lower.includes(key)) return pattern.topic;
    }
  }
  return null;
}

function ruleBasedReply(message, lang) {
  const topic = matchTopic(message);

  if (topic) {
    let response = getTopicResponse(topic, lang);
    if (!response) response = getTopicResponse(topic, "en");

    // Add language note for languages without full translations
    if (lang !== "en" && lang !== "hi") {
      const langName = getLanguageLabel(lang);
      response =
        `[Note: For the best experience, please use English or Hindi. Providing information in English for now.]\n\n` +
        response;
    }
    return response;
  }

  // Default response when no topic matches
  if (lang === "hi") {
    return "मैं सेहत-साथी हूं, आपका AI स्वास्थ्य सहायक। मैं इन विषयों पर मदद कर सकता हूं:\n\n• **बीमारियां:** डेंगू, मलेरिया, मधुमेह, बुखार, सर्दी-खांसी, टायफायड\n• **टीकाकरण** जानकारी\n• **गर्भावस्था** देखभाल\n• **आहार और पोषण** सुझाव\n• **सामान्य स्वास्थ्य** सुझाव\n\nकृपया इनमें से किसी विषय के बारे में पूछें!";
  }

  return "I'm Sehat-Saathi, your AI health assistant. I can help with:\n\n• **Diseases:** Dengue, Malaria, Diabetes, Fever, Cold & Cough, Typhoid\n• **Vaccination** information\n• **Pregnancy** care\n• **Diet & Nutrition** advice\n• **General Health** tips\n\nPlease ask about any of these topics!";
}

// ── Gemini integration ───────────────────────────────────────────────

async function callGemini(message, language) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const systemPrompt = `You are Sehat-Saathi, an AI healthcare assistant for rural India. Provide helpful, accurate health information in ${getLanguageLabel(language)}. Always recommend consulting a doctor for serious symptoms. Keep responses concise and easy to understand.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: `${systemPrompt}\n\nUser query: ${message}` }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error(`Gemini API error: ${response.status} ${response.statusText}`);
    return null;
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return text || null;
}

// ── Controller ───────────────────────────────────────────────────────

export async function handleChat(req, res) {
  try {
    const { message, language = "en" } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required and must be a string." });
    }

    const sanitizedMessage = sanitize(message);

    if (sanitizedMessage.length === 0) {
      return res.status(400).json({ error: "Message cannot be empty." });
    }

    if (sanitizedMessage.length > 2000) {
      return res.status(400).json({ error: "Message is too long. Maximum 2000 characters." });
    }

    const lang = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
    const disclaimer = lang === "hi" ? DISCLAIMER_HI : DISCLAIMER;

    // Try Gemini first if API key is configured, fall back to rule-based
    let reply = null;
    if (process.env.GEMINI_API_KEY) {
      try {
        reply = await callGemini(sanitizedMessage, lang);
      } catch (err) {
        console.error("Gemini API call failed, falling back to rule-based:", err.message);
      }
    }

    if (!reply) {
      reply = ruleBasedReply(sanitizedMessage, lang);
    }

    return res.json({ reply, disclaimer });
  } catch (err) {
    console.error("Chat handler error:", err.message);
    return res.status(500).json({ error: "Failed to process your request." });
  }
}
