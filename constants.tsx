
import { RubricCategory, ProfileData } from './types';

export const RUBRIC_DATA: RubricCategory[] = [
  {
    name: "Knowledge",
    levels: {
      1: "Poor",
      2: "Below Expectation",
      3: "Average/ Meeting Expectation",
      4: "Exceeding expectation",
      5: "Exceptional"
    }
  },
  {
    name: "Skills",
    levels: {
      1: "Lack core skills required to do his job",
      2: "Have core skills required to do his job. However, he need development in some areas under supervision",
      3: "Have core skills required to do his job with minimal support",
      4: "Have additional skills that distinguish him from others and able to work independently OR have core skills along with ability to mentor others",
      5: "Have additional skills that distinguish him from others and able to work independently AND have core skills along with ability to mentor others"
    }
  },
  {
    name: "Attitude",
    levels: {
      1: "Consistently displays unprofessional behavior and frequently resists, manipulates and breaks the rules",
      2: "Occasionally shows acceptable behavior but is inconsistent.",
      3: "Generally, behaves appropriately and follows guidelines.",
      4: "Proactive, and has distinguished behavior that give him edge over others, e.g., highly agile or accept and look for feedback",
      5: "Proactive role Model, Always models exceptional behavior and professionalism and fosters positive culture"
    }
  }
];

export const PROFILES: ProfileData[] = [
  {
    id: "omar",
    name: "Omar Khalid",
    avatar: "img/omar-avatar.png",
    traits: [
      "Recognized as a technical expert within the branch; very few errors.",
      "Performs all duties independently and handles high-pressure periods well.",
      "Highly agile; adapts quickly to new branch protocols.",
      "Actively seeks feedback from seniors to improve his performance.",
      "Displays a very proactive and positive attitude daily."
    ],
    job: "Senior Pharmacist",
    age: 28,
    experience: "4 Years",
    correctAnswers: { knowledge: 4, skills: 3, attitude: 4 }
  },
  {
    id: "youseff",
    name: "Youseff Ahmad",
    avatar: "img/youssef-avatar.png",
    traits: [
      "Demonstrates high level of technical competency in all pharmacy audits.",
      "Handles standard daily tasks and prescriptions reliably with minimal support.",
      "Maintains professional conduct and follows branch guidelines consistently.",
      "Stays within the average performance range for sales targets.",
      "Communicates clearly with the team but rarely initiates new ideas."
    ],
    job: "Pharmacist",
    age: 25,
    experience: "1.5 Years",
    correctAnswers: { knowledge: 4, skills: 3, attitude: 3 }
  },
  {
    id: "faisal",
    name: "Faisal Bin Saud",
    avatar: "img/faisal-avatar.png",
    traits: [
      "Displays solid, meeting-expectation level of technical knowledge.",
      "Capable of working independently and often seen mentoring junior staff.",
      "High proficiency in all pharmacy systems and procedures.",
      "Proactively suggests ways to improve the customer flow in the pharmacy.",
      "Maintains a high level of agility and professional positivity."
    ],
    job: "Pharmacist",
    age: 27,
    experience: "3 Years",
    correctAnswers: { knowledge: 3, skills: 4, attitude: 4 }
  },
  {
    id: "fahd",
    name: 'Fahd "Grey"',
    avatar: "img/fahd-avatar.png",
    traits: [
      "Enthusiastic, eager to learn, and keen to have good relations with his colleagues.",
      "Very good score in technical exams.",
      "Faces challenges in selling skills and handling painful customer experience.",
      "He is poor in cross selling and up selling. He has some customer complaints.",
      "Hasn't achieved his target monthly since hired with far away achievement.",
      "He is positive and cooperative except when under stress."
    ],
    job: "Pharmacist",
    age: 23,
    experience: "9 Months",
    correctAnswers: { knowledge: 4, skills: 1, attitude: 2 }
  },
  {
    id: "ali",
    name: "Ali Mansour",
    avatar: "img/ali-avatar.png",
    traits: [
      "Has sound knowledge of products and medical basics.",
      "Highly skilled at inventory management and very independent in his role.",
      "Can handle the entire dispensing process faster than most seniors.",
      "Frequently resists branch management instructions and company rules.",
      "Has received complaints about unprofessional behavior towards the team."
    ],
    job: "Pharmacist",
    age: 26,
    experience: "2 Years",
    correctAnswers: { knowledge: 3, skills: 4, attitude: 1 }
  },
  {
    id: "hossam",
    name: "Hossam Hassan",
    avatar: "img/hossam-avatar.png",
    traits: [
      "Struggles with newer technical medication updates; often needs to double-check.",
      "Exceptional sales skills; manages difficult customers independently and with ease.",
      "Highly efficient at closing cross-selling opportunities.",
      "Behavior is inconsistent; occasionally ignores minor branch safety rules.",
      "Has had some friction with colleagues regarding punctuality."
    ],
    job: "Pharmacist",
    age: 24,
    experience: "1 Year",
    correctAnswers: { knowledge: 2, skills: 4, attitude: 2 }
  }
];
