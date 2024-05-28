/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Henisha Kakaiya Student ID: 136840238 Date: 05/28/2024
*
********************************************************************************/ 

// Require the collegeData module
const collegeData = require('./modules/collegeData');

// Invoke the initialize function
collegeData.initialize()
    .then(() => {
        // Initialization successful, proceed to test the other functions

        // Test getAllStudents function
        collegeData.getAllStudents()
            .then(students => {
                console.log(`Successfully retrieved ${students.length} students`);
            })
            .catch(err => {
                console.error(`Error retrieving students: ${err}`);
            });

        // Test getCourses function
        collegeData.getCourses()
            .then(courses => {
                console.log(`Successfully retrieved ${courses.length} courses`);
            })
            .catch(err => {
                console.error(`Error retrieving courses: ${err}`);
            });

        // Test getTAs function
        collegeData.getTAs()
            .then(TAs => {
                console.log(`Successfully retrieved ${TAs.length} TAs`);
            })
            .catch(err => {
                console.error(`Error retrieving TAs: ${err}`);
            });

    })
    .catch(err => {
        // Initialization failed
        console.error(`Initialization error: ${err}`);
    });
