const fs = require('fs');
const path = require('path');

//Defining the Data class which will store students and courses as arrays
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

//dataCollection is the variable which will store an instance of the Data class.
let dataCollection = null;

//initialize() function will read the students.json file and courses.json file, initializes the Data object as well as their contents and 
//at last assigns it to the dataCollection
function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8', (err, studentData) => {
            if (err) {
                reject("unable to read students.json");
                return;
            }
            let studentDataFromFile = JSON.parse(studentData);
            fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8', (err, courseData) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }
                let courseDataFromFile = JSON.parse(courseData);
                dataCollection = new Data(studentDataFromFile, courseDataFromFile);
                resolve();
            });
        });
    });
}

//getAllStudents() function returns the promises that reslove with appropriate data or reject it if error is found
function getAllStudents() {
    return new Promise((resolve, reject) => {
      if (!dataCollection) {
        reject("Data not initialized");
        return;
      }
      if (dataCollection.students.length === 0) {
        reject("no results returned");
        return;
      }
      resolve(dataCollection.students);
    });
  }

//getTAs() function will perform the same function as getAllStudents() function
function getTAs() {
    return new Promise((resolve, reject) => {
      if (!dataCollection) {
        reject("Data is not initialized");
        return;
      }
      let tas = dataCollection.students.filter(student => student.TA);
      if (tas.length === 0) {
        reject("no results returned");
        return;
      }
      resolve(tas);
    });
  }

// getCourses() function as well will perform the same function as getAllStudents() funnction
function getCourses() {
    return new Promise((resolve, reject) => {
      if (!dataCollection) {
        reject("Data is not initialized");
        return;
      }
      if (dataCollection.courses.length === 0) {
        reject("no results returned");
        return;
      }
      resolve(dataCollection.courses);    //data will be resolved if both the conditions gets rejected
    });
  }

//Exporting all the functions
module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};