
function showPage(list, page) {  // This function allow you to show a list of 9 students per page.
   let startIndex = (page * 9) - 9;
   let endIndex = (page * 9);
   
   const studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
    const studentItem = `
    <li class="student-item cf">
    <div class="student-details">
       <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
       <h3>${list[i].name.first} ${list[i].name.last}</h3>
       <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
       <span class="date">Joined ${list[i].registered.date}</span>
    </div>
 </li> 
 `
      studentList.insertAdjacentHTML("beforeend", studentItem);
   };
};
 console.log(list);
 console.log(page);
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

   function addPagination(list) { //The pagination shows the number of pages that can be used to navigate from page to page.
      let numOfPages = Math.ceil(list.length/9);
      console.log(numOfPages);

      const linkList = document.querySelector('.link-list');
linkList.innerHTML = '';

for (let i = 1; i <= numOfPages; i++) {
   const button = 
   `<li>
   <button type="button">${i}</button>
 </li>`
linkList.insertAdjacentHTML("beforeend", button);
};
//The button allows you to navigate from page to page when clicked. 
linkList.querySelector("button").className = 'active';
linkList.addEventListener('click', function(event){
if (event.target.tagName === "BUTTON") {
   console.log(event)
linkList.querySelector('.active').className = ""
event.target.className = `active`
showPage(data, event.target.textContent)
}
});

   }

// Call functions
showPage(data, 1);
addPagination(data); 
