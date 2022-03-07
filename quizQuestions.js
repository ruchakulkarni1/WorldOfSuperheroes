const data = [
  {
    id: "101",
    question: "What is the full name of Spider man?",
    answer: "Peter Parker",
    variants: [`Peter Parker`, `Evan Daniels`, `Peter Jason`, `Virgil Hawkins`],
    category: 'Marvel Comics'
  },
  {
    id: "102",
    question: "What was the former occupation of Captain America?",
    answer: "soldier",
    variants: [`criminal`,`soldier`, `lawyer`, `doctor`],
    category: 'Marvel Comics'
  },

  {
    id: "103",
    question: "What is the strength of Hulk on a scale of 100?",
    answer: "100",
    variants: [`85`,`95`,`100`,`90`],
    category: 'Marvel Comics'
  },
  {
    id: "104",
    question: "Who is the father of Thor?",
    answer: "Odin",
    variants: [`Odin`, `Loki`, `Bor`, `Vidar`],
    category: 'Marvel Comics'
  },

  {
    id: "105",
    question: "Is Loki a protagonist or antagonist?",
    answer: "antagonist",
    variants: [`protagonist`, `antagonist`],
    category: 'Marvel Comics'
  },
  {
    id: "106",
    question: "Where is Iron man's base located?",
    answer: "Seattle",
    variants: [`Portland`, `New York`, `Seattle`, `New Jersey`],
    category: 'Marvel Comics'
  },
  {
    id: "107",
    question: "What is the race of Thanos?",
    answer: "Eternal",
    variants: [`Mutant`, `Asgardian`, `Human`, `Eternal`],
    category: 'Marvel Comics'
  },
  {
    id: "108",
    question: "What is the other name of Black Widow?",
    answer: "Madame Natasha",
    variants: [`Wonder girl`, `Madame Natasha`, `Dark Widow`, `Madame Romanoff`],
    category: 'Marvel Comics'
  },
  {
    id: "109",
    question: "What is the birth place of Black Panther?",
    answer: "Wakanda, Africa",
    variants: [`Kenya, Africa`, `Olanda, Africa`, `Wakanda, Africa`, `Ghana, Africa`],
    category: 'Marvel Comics'
  },
  {
    id: "110",
    question: "What is the current occupation of Dr. Strange?",
    answer: "Sorcerer Supreme",
    variants: [`Neurosurgeon `, `Cardiologist`, `Pilot`, `Sorcerer Supreme`],
    category: 'Marvel Comics'
  },
  {
    id: "201",
    question: "What is the full name of Mr. Incredible?",
    answer: "Robert Parr",
    variants: [`Robert Parr`, `Robert Pattinson`, `Robert Spark`, `Robert Downey`],
    category: 'Dark Horse Comics'
  },
  {
    id: "202",
    question: "Who makes Elastigirl's costumes and gadgets?",
    answer: "Edna Mode",
    variants: [`Emma Morris`, `Tina James`, `Scarlet John`, `Edna Mode`],
    category: 'Dark Horse Comics'
  },
  {
    id: "203",
    question: "Who is the brother of Dash?",
    answer: "Jack-jack",
    variants: [`Frozone`, `Jack-jack`, `Jr. Dash`, `Jr. Jack`],
    category: 'Dark Horse Comics'
  },
  {
    id: "204",
    question: "What is the other name for Hell boy?",
    answer: "world destroyer",
    variants: [`hell destroyer `, `world destroyer`, `boy from hell`, `storm breaker`],
    category: 'Dark Horse Comics'
  },
  {
    id: "205",
    question: "Is Predator a protagonist or antagonist?",
    answer: "antagonist",
    variants: [`protagonist`,`antagonist`],
    category: 'Dark Horse Comics'
  },
  
  {
    id: "301",
    question: "What is the full name of Wonder Woman?",
    answer: "Priscilla Rich",
    variants: [`Katherine Rebecca Kane`, `Priscilla Rich`, `Cassandra Cain`, `Laurel Lance`],
    category: 'DC Comics'
  },
  {
    id: "302",
    question: "What is power of Aquaman on a scale of 100?",
    answer: "100",
    variants: [`85`,`93`,`100`,`95`],
    category: 'DC Comics'
  },
  {
    id: "303",
    question: "Who is the girl friend of Ben Ten?",
    answer: "Gwen Tennyson",
    variants: [`Gwen Tennyson`,`Levin`,`Jaime Reyes`,`Dinah Drake Lance`],
    category: 'DC Comics'
  },
  {
    id: "304",
    question: "What is name of the comic with Batman's first appearence?",
    answer: "Batman #16 (April, 1943)",
    variants: [`Batman #16 (June, 1946)`,`Batman #16 (April, 1943)`,`Batman #16 (January, 1947)`,`Batman #16 (Febraury, 1945)`],
    category: 'DC Comics'
  },
  {
    id: "305",
    question: "Is Harley Quinn a protagonist or an antagonist?",
    answer: "protagonist",
    variants: [`protagonist`,`antagonist`],
    category: 'DC Comics'
  },
  {
    id: "306",
    question: "What is the other name for Joker?",
    answer: "The clown prince of crime",
    variants: [`Hallie Shimosato`,`The clown prince of crime`,`Doofus`,`Alfred Beagle`],
    category: 'DC Comics'
  },
  {
    id: "307",
    question: "What is the eye color of hawk?",
    answer: "red",
    variants: [`brown`,`blue`,`black`,`red`],
    category: 'DC Comics'
  }, 
  {
    id: "308",
    question: "What is the speed of Flash on a scale of 100?",
    answer: "100",
    variants: [`98`,`100`,`99`,`97`],
    category: 'DC Comics'
  },
  {
    id: "309",
    question: "What is the race of Catwoman?",
    answer: "Human",
    variants: [`Cat`, `Asgardian`, `Human`, `Eternal`],
    category: 'DC Comics'
  },
  {
    id: "310",
    question: "What is the occupation of Super man?",
    answer: "Reporter",
    variants: [`Reporter`,`Lawyer`,`Pilot`,`Police`],
    category: 'DC Comics'
  },
  {
    id: "401",
    question: "What is the full name of DL Hawkins?",
    answer: "Daniel Lawrence Hawkins",
    variants: [`Daniel Lawrence Hawkins`,`David Lawrence Hawkins`,`Daniel Laplace Hawkins`,`Dominic Lawrence Hawkins`],
    category: 'NBC - Heroes'
  },
  {
    id: "402",
    question: "First appearance of Adam Monroe?",
    answer: "Heroes S02E01 - Four Months Later...",
    variants: [`Heroes S02E01 - Four Months Later...`,
    `Heroes S02E01 - Five Months Later...`,
    `Heroes S02E01 - Ten Months Later...`,
    `Heroes S02E01 - Six Months Later...`],
    category: 'NBC - Heroes'
  },
  {
    id: "403",
    question: "What is the place of birth of Maya Herrera?",
    answer: "Dominician Republic",
    variants: [`China`,`Japan`,`Czech Republic`,`Dominician Republic`],
    category: 'NBC - Heroes'
  },
  {
    id: "404",
    question: "What is the current occupation of Niki Sanders?",
    answer: "agent",
    variants: [`agent`,`pilot`,`web cam operator`,`casino worker`],
    category: 'NBC - Heroes'
  },
  {
    id: "501",
    question: "What is the full name of Darth Vader?",
    answer: "Anakin Skywalker",
    variants: [`Luke Skywalker`,`Anakin Skywalker`,`Alison Skywalker`,`Leia Skywalker`],
    category: 'George Lucas'
  },
  {
    id: "502",
    question: "What is the first apperance of Yoda?",
    answer: "Star Wars: Episode V - The Empire Strikes Back (1980)",
    variants: [`Star Wars: Episode V - The Empire Strikes Back (1980)`,
  `Star Wars: Episode 11 - The Empire Strikes Back (1990)`,
  `Star Wars: Episode 1 - The Empire Strikes Back (1970)`,
  `Star Wars: Episode V - The Empire Rises (1980)
  `],
    category: 'George Lucas'
  },
  {
    id: "503",
    question: "Is a Stormtrooper protagonist or an antogonist?",
    answer: "antagonist",
    variants: [`protagonist`,`antagonist`],
    category: 'George Lucas'
  },
  {
    id: "504",
    question: "What is the place of birth of Indiana Jones?",
    answer: "New Jersey",
    variants: [`New Jersey`,`New York`,`New Hampshire`,`Texas`],
    category: 'George Lucas'
  },
  {
    id: "505",
    question: "Who is the father of Luke Skywalker?",
    answer: "Anakin Skywalker",
    variants: [`Sr. Luke Skywalker`,`Anakin Skywalker`,`Alison Skywalker`,`Leia Skywalker`],
    category: 'George Lucas'
  },
  {
    id: "601",
    question: "What is the full name of Spock?",
    answer: "S'chn T'gai Spock",
    variants: [`David Spock`,`Sigen Spock`,`Aligan T'gai Spock`,`S'chn T'gai Spock`],
    category: 'Star Trek'
  }, 
  {
    id: "602",
    question: "What is the occupation of Kathryn Janeway?",
    answer: "Fleet Commander",
    variants: [`Fleet Commander`,`Pilot`,`Soldier`,`Doctor`],
    category: 'Star Trek'
  }, 
  {
    id: "603",
    question: "Who created the charater Data?",
    answer: "Noonian Soong",
    variants: [`David Tim`,`S'chn Spock`,`Noonian Soong`,`James T. Kirk`],
    category: 'Star Trek'
  },
  {
    id: "604",
    question: "What is the birth place of Jean-Luc Picard?",
    answer: "France",
    variants: [`France`,`Japan`,`China`,`Denmark`],
    category: 'Star Trek'
  },
  {
    id: "605",
    question: "Is James T.Kirk a protagonist or antagonist?",
    answer: "protagonist",
    variants: [`antagonist`,`protagonist`],
    category: 'Star Trek'
  }
];

  module.exports = data;