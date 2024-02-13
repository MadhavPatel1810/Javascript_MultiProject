const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn_check");
let selectedBook = null;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value === "" || author.value === "" || year.value === "") {
    alert("Please fill in all fields");
    return;
  }
  if (selectedBook) {
    // Update existing book
    handleEditData();
  } else {
    // Create new book
    createNewBook();
  }
  // Clear input fields after adding or updating the book
  title.value = "";
  author.value = "";
  year.value = "";
});

function handleEditData() {
  selectedBook.querySelector(".title-cell").textContent = title.value;
  selectedBook.querySelector(".author-cell").textContent = author.value;
  selectedBook.querySelector(".year-cell").textContent = year.value;
  selectedBook = null;
}

function createNewBook() {
  const row = document.createElement("div");
  row.classList.add("table-section");
  //Title
  const titleCell = document.createElement("div");
  titleCell.classList.add("title-cell");
  titleCell.textContent = title.value;
  //Author
  const authorCell = document.createElement("div");
  authorCell.classList.add("author-cell");
  authorCell.textContent = author.value;
  //Year
  const yearCell = document.createElement("div");
  yearCell.classList.add("year-cell");
  yearCell.textContent = year.value;
  //Action
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("action");
  const editButton = document.createElement("button");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", function () {
    selectedBook = row;
    title.value = selectedBook.querySelector(".title-cell").textContent;
    author.value = selectedBook.querySelector(".author-cell").textContent;
    year.value = selectedBook.querySelector(".year-cell").textContent;
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(deleteButton);
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(yearCell);
  row.appendChild(buttonsDiv);
  bookList.appendChild(row);
}
