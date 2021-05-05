// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'C',
    competency: 3,
    category: ['Languages', 'Mathematics'],
  },
  {
    title: 'C++',
    competency: 2.5,
    category: ['Languages', 'Mathematics'],
  },
  {
    title: 'Fortran',
    competency: 2,
    category: ['Languages', 'Mathematics'],
  },
  {
    title: 'HTML5',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'CSS3',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'SCILAB',
    competency: 2.5,
    category: ['Languages', 'Software', 'Mathematics'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages', 'Software', 'Mathematics'],
  },
  {
    title: 'LATEX',
    competency: 3,
    category: ['Documentation', 'Software'],
  },
  {
    title: 'Excel',
    competency: 3,
    category: ['Software', 'Mathematics'],
  },
  {
    title: 'Powerpoint',
    competency: 3,
    category: ['Documentation', 'Software'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python', 'Mathematics'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python', 'Mathematics'],
  },

  {
    title: 'Tensorflow + Keras',
    competency: 1.5,
    category: ['Python'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Documentation', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 2,
    category: ['Python'],
  },
  {
    title: 'Atom',
    competency: 3,
    category: ['Editors'],
  },
  {
    title: 'Sublime Text',
    competency: 3,
    category: ['Editors'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Editors'],
  },
  {
    title: 'Nano + VIM',
    competency: 2,
    category: ['Editors'],
  },
  {
    title: 'Gitbook',
    competency: 3,
    category: ['Documentation', 'Editors'],
  },
  {
    title: 'Markdown',
    competency: 3,
    category: ['Documentation', 'Editors'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
