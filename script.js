
                                                     // SP20-BCS-104
                                                     //Muhammad Hashir
                                                     //Lab Mid (Sir Faisal)


const faqItems = document.querySelectorAll('.faq');           //all classes "faq" selected and stores in `faqItems` var.

faqItems.forEach((item, index) => {                           //click event listener is added to each FAQ.
  const cardToggle = item.querySelector('.faq-toggle');
  const cardText = item.querySelector('.faq-text');

  cardToggle.addEventListener('click', () => {
                                                              // background color of card "toggle"
    item.classList.toggle('active');

    
    if (cardText.style.display === 'block') {                 // display answer
      cardText.style.display = 'none';
    } else {
      cardText.style.display = 'block';
    }

    const chevronIcon = cardToggle.querySelector(".fa-chevron-down");
    const timesIcon = cardToggle.querySelector(".fa-times");
    chevronIcon.style.display =
      chevronIcon.style.display === "none" ? "block" : "none";
    timesIcon.style.display =
      timesIcon.style.display === "none" ? "block" : "none";
  });

                                                              // Add delete functionality
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  item.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
                                                                   // Remove the FAQ item from the container
    item.remove();
  });
});

// exam task 3 
// make new card with input fields

const container = document.getElementsByClassName("faq-container");

const newCard = document.createElement("div");
newCard.className = "faq";
newCard.innerHTML =
  '<form><input type="text"/><br></br><input type="text" /></form><button class="faq-toggle"><i class="fas fa-chevron-down"></i><i class="fas fa-times"></i></button>';
container[0].appendChild(newCard);
