// Creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "If cot θ = 7/8, evaluate: (1 + sin θ)(1 – sin θ) / (1 + cos θ)(1 – cos θ)",
    answer: "49/64",
    options: [
      "7/8",
      "49/64",
      "8/7",
      "64/49"
    ]
  },
  {
    numb: 2,
    question: "In triangle ABC, right-angled at B, if tan A = 1/√3, find the value of sin A cos C + cos A sin C.",
    answer: "0",
    options: [
      "1",
      "√3/2",
      "0",
      "1/2"
    ]
  },
  {
    numb: 3,
    question: "Given that HCF (306, 657) = 9, find LCM (306, 657).",
    answer: "22338",
    options: [
      "22338",
      "22308",
      "22368",
      "22238"
    ]
  },
  {
    numb: 4,
    question: "Find the roots of the quadratic equation x² – 3x – 10 = 0 by factorisation.",
    answer: "x = 5 or x = -2",
    options: [
      "x = 5 or x = -2",
      "x = 2 or x = -5",
      "x = 10 or x = -3",
      "x = -5 or x = -2"
    ]
  },
  {
    numb: 5,
    question: "Find two consecutive positive integers, the sum of whose squares is 365.",
    answer: "13 and 14",
    options: [
      "11 and 12",
      "12 and 13",
      "13 and 14",
      "14 and 15"
    ]
  },
  {
    numb: 6,
    question: "The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, find the other two sides.",
    answer: "Base = 12 cm, Altitude = 5 cm",
    options: [
      "Base = 5 cm, Altitude = 12 cm",
      "Base = 12 cm, Altitude = 5 cm",
      "Base = 10 cm, Altitude = 6 cm",
      "Base = 8 cm, Altitude = 7 cm"
    ]
  },
  {
    numb: 7,
    question: "Find the distance between the following pairs of points: (2, 3) and (4, 1).",
    answer: "√8",
    options: [
      "√2",
      "√8",
      "√10",
      "√12"
    ]
  },
  {
    numb: 8,
    question: "Find the values of y for which the distance between the points P(2, –3) and Q(10, y) is 10 units.",
    answer: "y = 3 or -9",
    options: [
      "y = 3 or -9",
      "y = 3 or 9",
      "y = -3 or 9",
      "y = 2 or -10"
    ]
  },
  {
    numb: 9,
    question: "Find the coordinates of the point which divides the join of (-1, 7) and (4, –3) in the ratio 2 : 3.",
    answer: "(1, 3)",
    options: [
      "(1, 3)",
      "(2, 4)",
      "(0, 2)",
      "(3, 1)"
    ]
  },
  {
    numb: 10,
    question: "Find the ratio in which the line segment joining the points (-3, 10) and (6, –8) is divided by the point (-1, 6).",
    answer: "1 : 3",
    options: [
      "1 : 3",
      "3 : 1",
      "2 : 3",
      "3 : 2"
    ]
  },
  {
    numb: 11,
    question: "Databases are being used to __.",
    answer: "All of the above",
    options: [
      "Store",
      "Manipulate",
      "Manage",
      "All of the above"
    ]
  },
  {
    numb: 12,
    question: "In the database table, if candidate keys are not chosen as the primary key, they are called __.",
    answer: "Alternate key",
    options: [
      "Alternate key",
      "Candidate key",
      "Foreign key",
      "None of the above"
    ]
  },
  {
    numb: 13,
    question: "The __ key helps to build a relation between two tables.",
    answer: "Foreign key",
    options: [
      "Alternate key",
      "Candidate key",
      "Foreign key",
      "None of the above"
    ]
  },
  {
    numb: 14,
    question: "If in the database table there are two fields — Roll Number and Admission Number — both are uniquely identified fields, and Roll Number is made as primary key, then Admission Number will be __.",
    answer: "Alternate key",
    options: [
      "Alternate key",
      "Candidate key",
      "Foreign key",
      "None of the above"
    ]
  },
  {
    numb: 15,
    question: "_ data type stores exactly the length specified; this data type uses a fixed number of characters.",
    answer: "Text(fix) (Char)",
    options: [
      "Memo (Longvarchar)",
      "Text(fix) (Char)",
      "Text (Varchar)",
      "None of the above"
    ]
  },
  {
    numb: 16,
    question: "__ data type consists of number, integer, decimal, real or double type which can perform arithmetic calculation.",
    answer: "Number Data type",
    options: [
      "Text Data type",
      "Number Data type",
      "Date Data type",
      "Binary Data type"
    ]
  },
  {
    numb: 17,
    question: "A specific record of the master table has more than one corresponding record in the related transaction table.",
    answer: "One-to-many",
    options: [
      "One-to-One",
      "One-to-many",
      "Many-to-many",
      "None of the above"
    ]
  },
  {
    numb: 18,
    question: "What is the purpose of referential integrity in databases?",
    answer: "All of the above",
    options: [
      "Accuracy",
      "Consistency",
      "Completeness",
      "All of the above"
    ]
  },
  {
    numb: 19,
    question: "SQL stands for __.",
    answer: "Structured Query Language",
    options: [
      "Simple Query Language",
      "Simple Question Language",
      "Structured Query Language",
      "None of the above"
    ]
  },
  {
    numb: 20,
    question: "Data can be organized into __.",
    answer: "Both a) and b)",
    options: [
      "Flat File",
      "Relational",
      "Both a) and b)",
      "None of the above"
    ]
  }

];
