const questions = [
  // Learning and Teaching
  {
    question: "How should a student teacher demonstrate an understanding of child development in the IPTE curriculum?",
    genre: "Learning and Teaching",
    score: 1,
    options: [
      "Focus solely on academic performance",
      "Link child development to individual learning needs and teaching methods",
      "Use standardized tests for all learners",
      "Teach only cognitive domain skills"
    ],
    correct: 1
  },
  {
    question: "Which teaching method is recommended in the IPTE syllabus for facilitating learning in the affective domain?",
    genre: "Learning and Teaching",
    score: 1,
    options: [
      "Lecture-based instruction",
      "Role play and group discussions",
      "Written exams",
      "Memorization drills"
    ],
    correct: 1
  },
  {
    question: "What is a key focus when analyzing learner characteristics in upper primary, according to the IPTE syllabus?",
    genre: "Learning and Teaching",
    score: 1,
    options: [
      "Standardizing teaching for all students",
      "Examining peer influences and developmental factors",
      "Focusing only on academic outcomes",
      "Using outdated teaching resources"
    ],
    correct: 1
  },
  {
    question: "How does the IPTE syllabus suggest addressing diverse learning needs in the classroom?",
    genre: "Learning and Teaching",
    score: 1,
    options: [
      "Use a single teaching method",
      "Incorporate a variety of teaching methods and resources",
      "Exclude learners with special needs",
      "Focus on advanced students only"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of using reflective tasks in the IPTE curriculum’s teaching methods?",
    genre: "Learning and Teaching",
    score: 1,
    options: [
      "To assess student memorization",
      "To encourage self-reflection and critical thinking",
      "To replace practical teaching practice",
      "To focus on psychomotor skills only"
    ],
    correct: 1
  },
 {
        question: "What is 25% of 200?",
        genre: "maths",
        score: 3,
        options: ["25", "50", "75", "100"],
        correct: 1
    },
    {
        question: "If a shirt costs 1200 MWK and is discounted by 20%, what is the new price?",
        genre: "maths",
        score: 4,
        options: ["960 MWK", "1000 MWK", "1080 MWK", "900 MWK"],
        correct: 0
    },
    {
        question: "A car travels 240 km in 3 hours. What is its speed in km/h?",
        genre: "maths",
        score: 3,
        options: ["60 km/h", "80 km/h", "90 km/h", "120 km/h"],
        correct: 1
    },
    {
        question: "What is 15% of 500?",
        genre: "maths",
        score: 3,
        options: ["65", "75", "85", "95"],
        correct: 1
    },
    {
        question: "If 2/5 of a number is 40, what is the number?",
        genre: "maths",
        score: 5,
        options: ["80", "100", "120", "140"],
        correct: 1
    },
    {
        question: "A shop offers a 10% discount on a 2000 MWK item. What is the discount amount?",
        genre: "maths",
        score: 3,
        options: ["100 MWK", "150 MWK", "200 MWK", "250 MWK"],
        correct: 2
    },
    {
        question: "If a rate is 50 MWK per hour, how much is earned in 8 hours?",
        genre: "maths",
        score: 3,
        options: ["300 MWK", "350 MWK", "400 MWK", "450 MWK"],
        correct: 2
    },
    {
        question: "What is the percentage increase from 100 to 125?",
        genre: "maths",
        score: 4,
        options: ["20%", "25%", "30%", "35%"],
        correct: 1
    },
    {
        question: "If 3 books cost 900 MWK, what is the cost of 5 books?",
        genre: "maths",
        score: 4,
        options: ["1200 MWK", "1350 MWK", "1500 MWK", "1650 MWK"],
        correct: 2
    },
    {
        question: "A tank fills at a rate of 10 liters per minute. How much fills in 6 minutes?",
        genre: "maths",
        score: 3,
        options: ["50 liters", "60 liters", "70 liters", "80 liters"],
        correct: 1
    },
    // ... (20 more maths questions can be added here)

    // Education Policies (40 questions)
    {
        question: "When was primary education made free and compulsory in Malawi?",
        genre: "education",
        score: 4,
        options: ["1980", "1994", "2000", "2010"],
        correct: 1
    },
    {
        question: "Which body oversees academic standards for all schools in Malawi?",
        genre: "education",
        score: 3,
        options: ["MANEB", "Ministry of Education", "UNICEF", "Mzuzu University"],
        correct: 1
    },
   
  // Education Policies, Leadership, and Guidance
  {
    question: "According to the IPTE syllabus, what is a key outcome for understanding educational management?",
    genre: "Education Policies",
    score: 1,
    options: [
      "Developing new curricula",
      "Demonstrating knowledge of leadership and policy in education",
      "Focusing only on classroom teaching",
      "Managing school finances independently"
    ],
    correct: 1
  },
  {
    question: "How should a student teacher apply guidance and counseling principles in the IPTE framework?",
    genre: "Education Policies",
    score: 1,
    options: [
      "Ignore student emotional needs",
      "Support learners’ holistic development",
      "Focus only on academic counseling",
      "Delegate counseling to external professionals"
    ],
    correct: 1
  },
  {
    question: "What resource is recommended in the IPTE syllabus for learning about educational policies?",
    genre: "Education Policies",
    score: 1,
    options: [
      "International textbooks",
      "Teacher Development Centre (TDC) manuals",
      "General internet resources",
      "Student workbooks"
    ],
    correct: 1
  },
  {
    question: "What is a key role of leadership in the education system, as per the IPTE syllabus?",
    genre: "Education Policies",
    score: 1,
    options: [
      "Developing lesson plans",
      "Ensuring effective school management and policy implementation",
      "Conducting student assessments",
      "Teaching core subjects"
    ],
    correct: 1
  },
  {
    question: "How does the IPTE syllabus suggest student teachers learn about educational policies?",
    genre: "Education Policies",
    score: 1,
    options: [
      "Through self-study only",
      "Using flow diagrams and TDC handbooks",
      "By ignoring national standards",
      "Focusing on secondary education policies"
    ],
    correct: 1
  },

  // Assessment
  {
    question: "What is the purpose of assessment for learning in the IPTE syllabus?",
    genre: "Assessment",
    score: 1,
    options: [
      "To rank students competitively",
      "To provide feedback to improve learning",
      "To replace summative assessments",
      "To focus only on final grades"
    ],
    correct: 1
  },
  {
    question: "How should a student teacher construct assessment tools according to the IPTE syllabus?",
    genre: "Assessment",
    score: 1,
    options: [
      "Use only multiple-choice tests",
      "Align tools with learning outcomes and student needs",
      "Copy tools from other teachers",
      "Focus on complex tasks only"
    ],
    correct: 1
  },
  {
    question: "What is a recommended method for assessing learning in the IPTE curriculum?",
    genre: "Assessment",
    score: 1,
    options: [
      "Standardized exams only",
      "Peer assessment and group discussions",
      "Ignoring formative assessments",
      "Focusing on rote memorization"
    ],
    correct: 1
  },
  {
    question: "How should assessment results be used, as per the IPTE syllabus?",
    genre: "Assessment",
    score: 1,
    options: [
      "To penalize underperforming students",
      "To inform teaching and improve student learning",
      "To rank teachers",
      "To reduce teaching time"
    ],
    correct: 1
  },
  {
    question: "What does the IPTE syllabus emphasize about assessment of learning?",
    genre: "Assessment",
    score: 1,
    options: [
      "It should focus only on cognitive skills",
      "It measures student achievement against set standards",
      "It replaces teaching practice",
      "It avoids feedback to students"
    ],
    correct: 1
  },

  // Information and Communication Technology (ICT)
  {
    question: "How does the IPTE syllabus suggest using ICT in teaching and learning?",
    genre: "ICT",
    score: 1,
    options: [
      "As a replacement for traditional teaching",
      "To enhance research, teaching, and assessment",
      "For administrative tasks only",
      "To reduce classroom interaction"
    ],
    correct: 1
  },
  {
    question: "What is a key outcome for ICT use in the IPTE curriculum?",
    genre: "ICT",
    score: 1,
    options: [
      "Learning advanced programming",
      "Applying ICT in teaching, learning, and assessment",
      "Using ICT for student entertainment",
      "Avoiding ICT in primary education"
    ],
    correct: 1
  },
  {
    question: "How can spreadsheets be used in teaching, according to the IPTE syllabus?",
    genre: "ICT",
    score: 1,
    options: [
      "For grading and analyzing student performance",
      "As a substitute for lesson plans",
      "To replace student workbooks",
      "For creating administrative reports only"
    ],
    correct: 1
  },
  {
    question: "What resource is suggested for ICT integration in the IPTE syllabus?",
    genre: "ICT",
    score: 1,
    options: [
      "Social media platforms",
      "Internet and teacher guides",
      "Printed textbooks only",
      "Student diaries"
    ],
    correct: 1
  },
  {
    question: "What skill should student teachers develop regarding ICT, per the IPTE syllabus?",
    genre: "ICT",
    score: 1,
    options: [
      "Developing software applications",
      "Using ICT tools for research and assessment",
      "Focusing on hardware maintenance",
      "Avoiding ICT in teaching"
    ],
    correct: 1
  },

  // Inclusive Education, Special Needs, and Gender
  {
    question: "What is a key outcome of inclusive education in the IPTE syllabus?",
    genre: "Inclusive Education",
    score: 1,
    options: [
      "Excluding learners with special needs",
      "Ensuring teaching addresses diverse learner needs",
      "Focusing only on academic excellence",
      "Standardizing all teaching methods"
    ],
    correct: 1
  },
  {
    question: "How should student teachers address gender in teaching, per the IPTE syllabus?",
    genre: "Inclusive Education",
    score: 1,
    options: [
      "Ignore gender differences",
      "Promote equitable learning opportunities",
      "Focus only on female students",
      "Use gender-specific teaching materials"
    ],
    correct: 1
  },
  {
    question: "What approach does the IPTE syllabus recommend for special needs education?",
    genre: "Inclusive Education",
    score: 1,
    options: [
      "Segregate special needs learners",
      "Adapt teaching to accommodate diverse needs",
      "Use only standard assessments",
      "Focus on cognitive skills only"
    ],
    correct: 1
  },
  {
    question: "What is a suggested method for teaching inclusive education, per the IPTE syllabus?",
    genre: "Inclusive Education",
    score: 1,
    options: [
      "Standardized lectures",
      "Case studies and group discussions",
      "Excluding diverse learners",
      "Focusing on advanced students"
    ],
    correct: 1
  },
  {
    question: "How does the IPTE syllabus suggest addressing learner diversity in assessment?",
    genre: "Inclusive Education",
    score: 1,
    options: [
      "Use uniform assessment tools",
      "Differentiate assessments based on learner needs",
      "Focus only on written exams",
      "Avoid assessing special needs learners"
    ],
    correct: 1
  }
,
  {
    question: "As a headteacher, how would you ensure compliance with the Education Act’s requirement for local government authorities to supervise primary schools?",
    genre: "Administration",
    score: 1,
    options: [
      "Delegate supervision to teachers",
      "Collaborate with the local authority to monitor school performance",
      "Ignore the requirement due to resource constraints",
      "Appoint an external consultant"
    ],
    correct: 1
  },
  {
    question: "What strategy would you use to resolve conflicts between the School Management Committee (SMC) and parents, as per the Education Act’s guidelines?",
    genre: "Administration",
    score: 1,
    options: [
      "Dissolve the SMC to avoid conflicts",
      "Facilitate dialogue and align actions with SMC duties under Section 21",
      "Escalate the issue to the Minister directly",
      "Side with parents to maintain enrollment"
    ],
    correct: 1
  },
  {
    question: "If an unregistered teacher is found in your school, what action aligns with the Education Act to address this issue?",
    genre: "Administration",
    score: 1,
    options: [
      "Allow them to teach temporarily",
      "Report to the Teachers Council for registration",
      "Dismiss them without reporting",
      "Request a waiver from the local authority"
    ],
    correct: 1
  },
  {
    question: "How would you address a school’s failure to meet registration standards under the Education Act?",
    genre: "Administration",
    score: 1,
    options: [
      "Continue operations without changes",
      "Implement improvements and apply for re-registration",
      "Close the school voluntarily",
      "Appeal to the Teachers Council"
    ],
    correct: 1
  },
  {
    question: "What approach would you take to ensure the Advisory Council’s annual report requirements are met, as per Section 12 of the Education Act?",
    genre: "Administration",
    score: 1,
    options: [
      "Submit reports only when requested",
      "Coordinate with the Council to provide school data annually",
      "Delegate reporting to teachers",
      "Ignore the reporting requirement"
    ],
    correct: 1
  },

  // Pedagogy Questions
  {
    question: "How would you design a lesson plan to align with the Education Act’s emphasis on a student-centered curriculum?",
    genre: "Pedagogy",
    score: 1,
    options: [
      "Focus on teacher-led lectures",
      "Incorporate participatory methods and critical thinking activities",
      "Prioritize rote memorization",
      "Use only textbook-based exercises"
    ],
    correct: 1
  },
  {
    question: "What is the best way to ensure your teaching adheres to the national curriculum prescribed by the Minister, as required by Section 76?",
    genre: "Pedagogy",
    score: 1,
    options: [
      "Create your own curriculum",
      "Follow the Minister’s prescribed curriculum",
      "Use unapproved international materials",
      "Teach only subjects you prefer"
    ],
    correct: 1
  },
  {
    question: "How can you use resources from the Malawi Institute of Education to enhance your teaching, as per Section 82?",
    genre: "Pedagogy",
    score: 1,
    options: [
      "Develop your own textbooks",
      "Use their approved instructional materials and training",
      "Request funding for resources",
      "Conduct independent research"
    ],
    correct: 1
  },
  {
    question: "To promote moral behavior and critical thinking as outlined in Section 5, what teaching strategy would you prioritize?",
    genre: "Pedagogy",
    score: 1,
    options: [
      "Focus on exam preparation only",
      "Incorporate group discussions and ethical scenarios",
      "Assign extensive homework",
      "Use lecture-based teaching"
    ],
    correct: 1
  },
  {
    question: "How would you address diverse learning needs in your classroom to align with the Education Act’s curriculum goals?",
    genre: "Pedagogy",
    score: 1,
    options: [
      "Use a single teaching method for all",
      "Differentiate instruction based on student abilities",
      "Focus only on advanced students",
      "Exclude students with special needs"
    ],
    correct: 1
  },

  // Curriculum Questions
  {
    question: "Who is responsible for prescribing the national curriculum for primary schools under the Education Act?",
    genre: "Curriculum",
    score: 1,
    options: [
      "Teachers Council of Malawi",
      "Malawi Institute of Education",
      "The Minister",
      "Local government authorities"
    ],
    correct: 2
  },
  {
    question: "What is a key goal of the national curriculum as per Section 5 of the Education Act?",
    genre: "Curriculum",
    score: 1,
    options: [
      "Focus on academic performance only",
      "Promote national unity and societal values",
      "Prioritize vocational training",
      "Limit education to core subjects"
    ],
    correct: 1
  },
  {
    question: "How does the Malawi Institute of Education contribute to the curriculum, according to Section 82?",
    genre: "Curriculum",
    score: 1,
    options: [
      "It inspects schools",
      "It designs and evaluates the curriculum",
      "It registers schools",
      "It licenses teachers"
    ],
    correct: 1
  },
  {
    question: "What is the correct process for selecting textbooks for primary schools under the Education Act?",
    genre: "Curriculum",
    score: 1,
    options: [
      "Teachers choose any textbook",
      "Textbooks must be evaluated by the Malawi Institute of Education",
      "Use only international textbooks",
      "SMC selects textbooks"
    ],
    correct: 1
  },
  {
    question: "How can a teacher ensure the curriculum is relevant to societal needs, as required by Section 76?",
    genre: "Curriculum",
    score: 1,
    options: [
      "Teach only theoretical concepts",
      "Incorporate real-world and local context",
      "Use outdated materials",
      "Avoid practical examples"
    ],
    correct: 1
  },

  // Teacher Professionalism Questions
  {
    question: "What is required to legally teach in a primary school under Section 68 of the Education Act?",
    genre: "Teacher Professionalism",
    score: 1,
    options: [
      "A university degree",
      "Registration or licensing by the Teachers Council",
      "Approval by the local authority",
      "Five years of experience"
    ],
    correct: 1
  },
  {
    question: "What is the penalty for teaching without registration, as per Section 68 of the Education Act?",
    genre: "Teacher Professionalism",
    score: 1,
    options: [
      "A fine of K100,000 and 6 months imprisonment",
      "A fine of K500,000 and 2 years imprisonment",
      "A warning from the Teachers Council",
      "A fine of K50,000 only"
    ],
    correct: 1
  },
  {
    question: "What is a key function of the Teachers Council under Section 62 of the Education Act?",
    genre: "Teacher Professionalism",
    score: 1,
    options: [
      "Providing school grants",
      "Setting professional standards for teachers",
      "Inspecting school facilities",
      "Developing the curriculum"
    ],
    correct: 1
  },
  {
    question: "If asked to teach without a valid license, what should a teacher do to comply with the Education Act?",
    genre: "Teacher Professionalism",
    score: 1,
    options: [
      "Teach until the license is processed",
      "Apply for registration with the Teachers Council",
      "Request an exemption from the Minister",
      "Teach only in private schools"
    ],
    correct: 1
  },
  {
    question: "How does the Malawi Institute of Education support teacher professionalism, as per Section 82?",
    genre: "Teacher Professionalism",
    score: 1,
    options: [
      "Conducting inspections",
      "Providing training and instructional materials",
      "Registering teachers",
      "Managing school finances"
    ],
    correct: 1
  },

  // School Management Questions
  {
    question: "Who has the authority to establish a Board of Governors for a Government primary school under Section 28?",
    genre: "School Management",
    score: 1,
    options: [
      "School Management Committee",
      "The Minister",
      "Teachers Council",
      "Local government authority"
    ],
    correct: 1
  },
  {
    question: "How should a headteacher prepare for school inspections to comply with Section 56 of the Education Act?",
    genre: "School Management",
    score: 1,
    options: [
      "Limit inspector access",
      "Maintain accurate records and comply with standards",
      "Conduct inspections independently",
      "Delegate to the SMC"
    ],
    correct: 1
  },
  {
    question: "What is the role of an education committee under Section 18 of the Education Act?",
    genre: "School Management",
    score: 1,
    options: [
      "Develop the curriculum",
      "Advise on primary education management",
      "License teachers",
      "Provide student grants"
    ],
    correct: 1
  },
  {
    question: "If a parent refuses a mandatory medical examination for their child, what does Section 80 of the Education Act allow?",
    genre: "School Management",
    score: 1,
    options: [
      "Conduct it without consent",
      "Proceed in emergencies without consent",
      "Suspend the student",
      "Cancel the examination"
    ],
    correct: 1
  },
  {
    question: "As a headteacher, how would you address resource constraints while ensuring compliance with the Education Act’s standards?",
    genre: "School Management",
    score: 1,
    options: [
      "Reduce teaching hours",
      "Seek grants and collaborate with the SMC",
      "Ignore compliance requirements",
      "Close the school temporarily"
    ],
    correct: 1
  }
]