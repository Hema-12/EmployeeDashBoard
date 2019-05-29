const records = [
  {
    id: 1,
    name: "Sampath",
    slug: "react-auth0-authentication-security",
    deptId: 1,
    nationality: "Indian",
    manager: "Supritha",
    phno: 9560323232,
    salary: 20000.00,
    doj:"28/05/2018",
    dob:"28/05/1993"

  },
  {
    id: 2,
    name: "Sandeep",
    slug: "react-big-picture",
    deptId: 1,
    nationality: "Indian",
    manager: "Supritha",
    phno: 9560323232,
    salary: 20000.00,
    doj:"28/05/2018",
    dob:"28/05/1993"
  },
  {
    id: 3,
    name: "Punnam",
    slug: "react-creating-reusable-components",
    deptId: 1,
    nationality: "Indian",
    manager: "Supritha",
    phno: 9560323232,
    salary: 20000.00,
    doj:"28/05/2018",
    dob:"28/05/1993"
  },
  {
    id: 4,
    name: "Hemalatha",
    slug: "javascript-development-environment",
    deptId: 1,
    nationality: "Indian",
    manager: "Supritha",
    phno: 9560323232,
    salary: 20000.00,
    doj:"28/05/2018",
    dob:"28/05/1993"
  },
];

const depts = [
  { id: 1, name: "APPS" },
  { id: 2, name: "BPO" },
  { id: 3, name: "HR" },
  { id: 4, name: "Finance" }
];

const newRecord = {
  id: null,
  name: "",
  deptId: null,
  nationality: "",
  manager: "",
  phno: null,
  salary:null,
  doj:"",
  dob:"",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newRecord,
  records,
  depts
};
