const notes = document.getElementsByClassName("notes-right-side-section");
const textarea_container = document.getElementsByClassName("textarea-container-notes-right-side-section");
const addNotes = document.getElementById("addNotes");
const notesContainer = document.getElementById("notes-container-right-side-section");
const deleteNotes = document.getElementsByClassName('deleteNotes');
const spacer = document.getElementsByClassName('vertical-spacer-right-side-section');

addNotes.addEventListener("mouseover", () => {
    addNotes.classList.remove("fa-plus-circle");
    addNotes.classList.add("fa-plus");
  });
  addNotes.addEventListener("mouseout", () => {
    addNotes.classList.add("fa-plus-circle");
    addNotes.classList.remove("fa-plus");
  });
  addNotes.addEventListener("click", () => {
    notesContainer.insertAdjacentHTML(
      "beforeend",
      `        
      <div class="vertical-spacer-right-side-section"></div>
            
      <div class="notes-right-side-section">
        <div class="notes-top-right-side-section">
          <i class="far fa-star star-in-notes"></i>
          <span>14/04/22</span>
          <span>23:45:56</span>
          <i class="far fa-trash-alt deleteNotes"></i>
        </div>
        <div class="textarea-container-notes-right-side-section">
          <textarea name="" id="" cols="41" rows="10"></textarea>
        </div>
      </div>`
    );
  });



  
  
  notesContainer.addEventListener("mouseover", () => {

  for (let i = 0; i < notes.length; i++) {
      let notesPointer = notes[i];
      let textarea_container_Pointer = textarea_container[i];

    notesPointer.addEventListener("mouseover", () => {
      notesPointer.style.height = "8.6rem";
      textarea_container_Pointer.style.height = "7rem";
      textarea_container_Pointer.classList.add("scroll");
    });
    notesPointer.addEventListener("mouseout", () => {
      notesPointer.style.height = "5rem";
      textarea_container_Pointer.style.height = "3.4rem";
      textarea_container_Pointer.classList.remove("scroll");
    });

    }
});





notesContainer.addEventListener('mouseenter',()=>{
  console.log(notes);
  console.log(deleteNotes);
console.log(notes.length);


debugger;
  if (notes.length !=  0) {

   let flag = true;
  for (let i = 0; i < notes.length; i++) {
    if(flag == true){
      // deleteNotes[i].addEventListener('click',()=>{

        flag = false;
        console.log(notes.item(i));
        notes.item(i).remove();
        spacer.item(i).remove();
        console.log(flag);
      // })
      
    }
  }
}else{
  console.log('this is empty');
}
})











