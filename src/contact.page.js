import hygine from './asset/menu/hygine-min.jpg'

function contactRender() {
    const container = document.querySelector('#container');

    const parentContainer = document.createElement('div');
    parentContainer.classList.add('contact-wrap');
    const img = document.createElement('img');
    img.classList.add('contact-img');
    img.src = hygine;
    const div = document.createElement('div');
    
    // Create the form element
    const form = document.createElement("form");
    form.id = "myForm";
    
    const txt = document.createElement('h2');
    txt.textContent = 'CONTACT US';
    form.appendChild(txt);
    
    // Create the name input field
    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));

    // Create the email input field
    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));

    // Create the submit button
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.innerHTML = "Submit";
    form.appendChild(submitButton);


    // Append the form to the body
    parentContainer.appendChild(img);
    div.appendChild(form);
    parentContainer.appendChild(div);

    container.appendChild(parentContainer);

}

export default contactRender;