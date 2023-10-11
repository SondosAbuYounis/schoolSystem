// You have to read all the data that the user will fill the form with after the submission
// display it in a new row (so you have to create a row for each student using dom manipulation)
// then append it to the table that we have in the html // append child tr

// constructor
        // You will create a constructor to generate a student object which will be rendered in the main section
        // You will refactor the render function to render each student information in a separate card in the home page
        // Note that you will use images for the students in the assets directory.
        // Add all the students in an array and save it to the local storage.

        // You have to read all the data that the user will fill the form with after the submission
        // display it in a new row
        // (so you have to create a row for each student using dom manipulation )
        // then append it to the table that we have in the html

        // append child tr              


// const form = document.querySelector('#formA');
// // const table = document.getElementById('stdTable');

// var regBtn = document.getElementById('register');

// // added inline onclick function and called in here
// function stdClick(event) {
//   // Prevent the default form submission behavior
// event.preventDefault();

//   // Get the values from the form fields
//   const fullName = document.querySelector('.fullNameTxt').value;
//   const dateOfBirth = document.querySelector('.dateTxt').value;
//   const gender = document.querySelector('.checkboxTxt:checked').value;
//   const phoneNumber = document.querySelector('.phoneTxt').value;
//   const grade = document.querySelector('.gradeTxt').value;
//   const major = document.querySelector('#majorTxt').value;

//   // Create new table cells for each value
//   const fullNameCell = document.createElement('td');
//   fullNameCell.textContent = fullName;
//   fullNameCell.id="stdTableID";

//   const dateOfBirthCell = document.createElement('td');
//   dateOfBirthCell.textContent = dateOfBirth;
//   dateOfBirthCell.id="stdTableID";

//   const genderCell = document.createElement('td');
//   genderCell.textContent = gender;
//   genderCell.id="stdTableID";

//   const phoneNumberCell = document.createElement('td');
//   phoneNumberCell.textContent = phoneNumber;
//   phoneNumberCell.id="stdTableID";

//   const gradeCell = document.createElement('td');
//   gradeCell.textContent = grade;
//   gradeCell.id="stdTableID";

//   const majorCell = document.createElement('td');
//   majorCell.textContent = major;
//   majorCell.id="stdTableID";

//   // Add the new table cells to the new table row
//   const newRow = document.createElement('tr');
//   newRow.id="stdNewRowID";


//   newRow.appendChild(fullNameCell);
//   newRow.appendChild(dateOfBirthCell);
//   newRow.appendChild(genderCell);
//   newRow.appendChild(phoneNumberCell);
//   newRow.appendChild(gradeCell);
//   newRow.appendChild(majorCell);

//   console.log(newRow);
// //   newRow.setAttribute("id", "stdTableID");
//   document.getElementById("stdTable").appendChild(newRow);
// // table.innerHTML += newRow;
// // console.log(document.getElementById("stdTable"));
// // Add the new table row to the table
// };


// failed try to save the data to local storage

                const formCards = document.querySelector('#formA');
                // var infoPg = document.getElementById('register');

                function stdInfoClick(event) {
                event.preventDefault();
                console.log('hi');

                const fullName = document.querySelector('.fullNameTxt').value;
                const dateOfBirth = document.querySelector('.dateTxt').value;
                // const gender = document.querySelector('.checkboxTxt:checked').value;
                const phoneNumber = document.querySelector('.phoneTxt').value;
                const grade = document.querySelector('.gradeTxt').value;
                const major = document.querySelector('#majorTxt').value;                
                // const stdDataObj = object.formEntries(formDataObj);

                var stdDataObjJson = {
                  constructor (FullName, DateofBirth, PhoneNumber, Grade, Grade ){
                    this.FullName = '.fullName';
                    this.DateofBirth = '.dateOfBirth';
                    this.PhoneNumber = '.phoneNumber';
                    this.Grade = '.grade';
                    this.Major = '.major';

                  }
                }
                console.log('stdDataObjJson');
               
                const stdDataObjJson = JSON.stringify(stdDataObj);
                localStorage.setItem('formDt', stdDataObjJson);

                // take me to the next page of my form to retrieve the data i collected 
                // window.location.href ="index2.html";

                var objJson = localStorage.getItem('formDt');
                const objJsonRet = JSON.parse(objJson);

                for (key in objJsonRet) {
                    const markup = `
                    
                        <div >
                            <div>${key}: ${objJsonRet[key]}</div>
                        </div>

                    `;
                    document.getElementById('stdCard').innerHTML += markup;
                    console.log(markup);
                }
                };



//     document.getElementById("formBox").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var formData = new FormData(event.target);
//     var FullNameTxt = formData.get("fullNameTxt");
//     var DateTxt = formData.get("dateTxt");
//     var CheckboxTxt = formData.get("checkboxTxt");
//     var GradeTxt = formData.get("gradeTxt");
//     var MajorTxt = formData.get("majorTxt");
//     var PhoneTxt = formData.get("phoneTxt");
    
    
//     var newStd = document.getElementById(stdInfoTable);
//     var stdinfo = document.createElement("tr");
//     var stdname = document.createElement("td");
//     var stdbirth = document.createElement("td");
//     var stdgen = document.createElement("td");
//     var stdgra = document.createElement("td");
//     var stdmaj = document.createElement("td");
//     var stdpho = document.createElement("td");
    
    
    
//     stdinfo.appendChild(stdname);
//     stdinfo.appendChild(stdbirth);
//     stdinfo.appendChild(stdgen);
//     stdinfo.appendChild(stdgra);
//     stdinfo.appendChild(stdmaj);
//     stdinfo.appendChild(stdpho);
    
//     stdname.textContent=`${FullNameTxt}`;
//     stdbirth.textContent=`${DateTxt}`;
//     stdgen.textContent=`${CheckboxTxt}`;
//     stdgra.textContent=`${GradeTxt}`;
//     stdmaj.textContent=`${MajorTxt}`;
//     stdpho.textContent=`${PhoneTxt}`;
    
//     newStd.appendChild(stdinfo);
    
//     event.target.reset();
//     });
    
    
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', function() {
//             checkboxes.forEach(otherCheckbox => {
//                 if (otherCheckbox !== checkbox) {
//                     otherCheckbox.checked = false;
//                 }
//             });
//         });
//     });



// code with comments 

// const form = document.querySelector('#formA');
// // const table = document.getElementById('stdTable');

// var regBtn = document.getElementById('register');

// // added inline onclick function and called in here
// function stdClick(event) {
//   // Prevent the default form submission behavior
// event.preventDefault();

//   // Get the values from the form fields
//   const fullName = document.querySelector('.fullNameTxt').value;
//   const dateOfBirth = document.querySelector('.dateTxt').value;
//   const gender = document.querySelector('.checkboxTxt:checked').value;
//   const phoneNumber = document.querySelector('.phoneTxt').value;
//   const grade = document.querySelector('.gradeTxt').value;
//   const major = document.querySelector('#majorTxt').value;

//   // Create new table cells for each value
//   const fullNameCell = document.createElement('td');
//   fullNameCell.textContent = fullName;

//   const dateOfBirthCell = document.createElement('td');
//   dateOfBirthCell.textContent = dateOfBirth;

//   const genderCell = document.createElement('td');
//   genderCell.textContent = gender;

//   const phoneNumberCell = document.createElement('td');
//   phoneNumberCell.textContent = phoneNumber;

//   const gradeCell = document.createElement('td');
//   gradeCell.textContent = grade;

//   const majorCell = document.createElement('td');
//   majorCell.textContent = major;

//   // Add the new table cells to the new table row
//   const newRow = document.createElement('tr');

//   newRow.appendChild(fullNameCell);
//   newRow.appendChild(dateOfBirthCell);
//   newRow.appendChild(genderCell);
//   newRow.appendChild(phoneNumberCell);
//   newRow.appendChild(gradeCell);
//   newRow.appendChild(majorCell);

//   console.log(newRow);
// //   newRow.setAttribute("id", "stdTableID");
// fullNameCell.id="stdTableID";
//   document.getElementById("stdTable").appendChild(newRow);
// // table.innerHTML += newRow;
// // console.log(document.getElementById("stdTable"));
// // Add the new table row to the table
// };