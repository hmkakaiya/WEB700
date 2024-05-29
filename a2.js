/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Henisha Kakaiya Student ID: 136840238 Date: 05/28/2024
*
********************************************************************************/ 

//Requiring the collegeData module and mentioned its path
const collegeData = require('./modules/collegeData');

//here, collegeData() function is invoked.
//it reads both students.json and courses.json file, parses the data and stores the data in dataCollection object
collegeData.initialize()
    .then(() => {

        //Testing all the functions
        //then parth is executed if initialize function resolves succesfully
        //Test getAllStudents function, Retrieves all students and logs the number of students retrieved to the console
        //catch block to handle any errors if occurred
        collegeData.getAllStudents()
            .then(students => {
                console.log(`Successfully retrieved ${students.length} students`);
            })
            .catch(err => {
                console.error(`Error retrieving students: ${err}`);
            });

        //Test getCourses function, Retrieves all courses and logs the number of courses retrieved to the console
        collegeData.getCourses()
            .then(courses => {
                console.log(`Successfully retrieved ${courses.length} courses`);
            })
            .catch(err => {
                console.error(`Error retrieving courses: ${err}`);
            });

        //Test getTAs function, Retrieves all TAs and logs the number of TAs retrieved to the console
        collegeData.getTAs()
            .then(TAs => {
                console.log(`Successfully retrieved ${TAs.length} TAs`);
            })
            .catch(err => {
                console.error(`Error retrieving TAs: ${err}`);
            });

    })
    .catch(err => {
        //Initialization failed
        console.error(`Initialization error: ${err}`);
    });
