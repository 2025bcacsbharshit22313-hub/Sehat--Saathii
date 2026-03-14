export interface Disease {
  id: string
  name: string
  icon: string
  color: string
  description: string
  symptoms: string[]
  prevention: string[]
  whenToSeeDoctor: string[]
}

export const diseases: Disease[] = [
  {
    id: 'dengue',
    name: 'Dengue',
    icon: '🦟',
    color: 'text-red-500',
    description:
      'Dengue is a mosquito-borne viral infection causing severe flu-like illness. It is transmitted by Aedes mosquitoes, primarily found in tropical and subtropical regions of India.',
    symptoms: [
      'High fever (40°C / 104°F)',
      'Severe headache and pain behind the eyes',
      'Muscle and joint pain',
      'Nausea and vomiting',
      'Skin rash appearing 2–5 days after fever onset',
      'Fatigue and weakness',
    ],
    prevention: [
      'Eliminate stagnant water where mosquitoes breed',
      'Use mosquito repellents and wear long-sleeved clothing',
      'Install window screens and use bed nets',
      'Use mosquito coils or electric vaporizers indoors',
      'Keep water storage containers tightly covered',
      'Participate in community clean-up drives',
    ],
    whenToSeeDoctor: [
      'Severe abdominal pain or persistent vomiting',
      'Bleeding from nose or gums',
      'Blood in vomit or stool',
      'Rapid drop in platelet count',
      'Difficulty breathing or restlessness',
      'Extreme fatigue or lethargy',
    ],
  },
  {
    id: 'malaria',
    name: 'Malaria',
    icon: '🦠',
    color: 'text-yellow-600',
    description:
      'Malaria is a life-threatening disease caused by Plasmodium parasites transmitted through the bites of infected Anopheles mosquitoes. India accounts for a significant share of global malaria cases.',
    symptoms: [
      'Cyclical fever with chills and sweating',
      'Headache and body aches',
      'Nausea, vomiting, and diarrhea',
      'Fatigue and weakness',
      'Anemia and jaundice in severe cases',
      'Enlarged spleen',
    ],
    prevention: [
      'Sleep under insecticide-treated mosquito nets',
      'Use indoor residual spraying in endemic areas',
      'Apply mosquito repellent on exposed skin',
      'Wear long-sleeved clothing during dusk and dawn',
      'Remove standing water around the home',
      'Take prophylactic medication when traveling to endemic areas',
    ],
    whenToSeeDoctor: [
      'High fever with chills lasting more than 2 days',
      'Confusion or altered consciousness',
      'Severe anemia or jaundice',
      'Respiratory distress',
      'Dark or reduced urine output',
      'Convulsions or seizures',
    ],
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    icon: '🩸',
    color: 'text-blue-500',
    description:
      'Diabetes is a chronic metabolic disorder characterized by elevated blood sugar levels. India is often called the "diabetes capital of the world" with over 77 million adults affected.',
    symptoms: [
      'Frequent urination, especially at night',
      'Increased thirst and dry mouth',
      'Unexplained weight loss',
      'Blurred vision',
      'Slow-healing wounds and frequent infections',
      'Tingling or numbness in hands and feet',
    ],
    prevention: [
      'Maintain a healthy, balanced diet low in refined sugars',
      'Exercise regularly — at least 30 minutes daily',
      'Maintain a healthy body weight',
      'Get regular blood sugar screenings',
      'Limit intake of processed and fried foods',
      'Manage stress through yoga or meditation',
    ],
    whenToSeeDoctor: [
      'Blood sugar levels consistently above normal',
      'Frequent urination with excessive thirst',
      'Sudden unexplained weight loss',
      'Non-healing wounds or recurring infections',
      'Vision changes or blurring',
      'Numbness or tingling in extremities',
    ],
  },
  {
    id: 'fever',
    name: 'Fever',
    icon: '🌡️',
    color: 'text-orange-500',
    description:
      'Fever is a temporary increase in body temperature, often due to an infection. While common, persistent or high fever can indicate serious underlying conditions requiring medical attention.',
    symptoms: [
      'Body temperature above 38°C (100.4°F)',
      'Chills and shivering',
      'Headache and body aches',
      'Sweating and dehydration',
      'Loss of appetite',
      'General weakness and fatigue',
    ],
    prevention: [
      'Wash hands frequently with soap and water',
      'Avoid close contact with sick individuals',
      'Stay up to date with vaccinations',
      'Maintain good hygiene and sanitation',
      'Drink clean, boiled or filtered water',
      'Eat freshly prepared, well-cooked food',
    ],
    whenToSeeDoctor: [
      'Fever above 39.4°C (103°F) in adults',
      'Fever lasting more than 3 days',
      'Severe headache with stiff neck',
      'Difficulty breathing or chest pain',
      'Rash, confusion, or persistent vomiting',
      'Fever in infants under 3 months',
    ],
  },
  {
    id: 'cold-cough',
    name: 'Cold & Cough',
    icon: '🤧',
    color: 'text-teal-500',
    description:
      'Common cold and cough are upper respiratory tract infections caused by viruses. They are extremely common in India, especially during seasonal changes and in polluted environments.',
    symptoms: [
      'Runny or stuffy nose',
      'Sore throat and sneezing',
      'Cough (dry or productive)',
      'Mild body aches and headache',
      'Low-grade fever',
      'Watery eyes and congestion',
    ],
    prevention: [
      'Wash hands frequently and avoid touching the face',
      'Cover mouth and nose when coughing or sneezing',
      'Avoid close contact with infected persons',
      'Stay hydrated and eat a balanced diet rich in Vitamin C',
      'Get adequate rest and sleep',
      'Use a mask in polluted or crowded environments',
    ],
    whenToSeeDoctor: [
      'Symptoms lasting more than 10 days',
      'High fever (above 39°C / 102°F)',
      'Difficulty breathing or wheezing',
      'Severe sore throat or ear pain',
      'Coughing up blood or green/yellow mucus',
      'Symptoms worsening after initial improvement',
    ],
  },
  {
    id: 'typhoid',
    name: 'Typhoid',
    icon: '💊',
    color: 'text-purple-500',
    description:
      'Typhoid fever is a bacterial infection caused by Salmonella typhi, spread through contaminated food and water. It remains a significant public health concern in India, especially in areas with poor sanitation.',
    symptoms: [
      'Sustained high fever rising progressively',
      'Headache and body aches',
      'Abdominal pain and bloating',
      'Constipation or diarrhea',
      'Loss of appetite and weakness',
      'Rose-colored spots on the chest',
    ],
    prevention: [
      'Drink only boiled or purified water',
      'Eat freshly cooked, hot food',
      'Wash hands thoroughly before eating and after using the toilet',
      'Avoid street food and raw vegetables from unknown sources',
      'Get vaccinated against typhoid',
      'Maintain proper sewage and waste disposal',
    ],
    whenToSeeDoctor: [
      'Persistent fever for more than 3–4 days',
      'Severe abdominal pain or distension',
      'Blood in stool',
      'Persistent vomiting and inability to keep food down',
      'Extreme weakness or confusion',
      'No improvement after starting antibiotics',
    ],
  },
]
