function onNameInput() {
    const input_name_element = document.getElementById("name");
    const name_val = input_name_element.value;
    const greeting_element = document.getElementById("hello");
    greeting_element.innerText = "Hello " + name_val;
}

function onEnter() {
    const input_name_element = document.getElementById("name");
    const name_val = input_name_element.value;
    const greeting_element_new = document.createElement("h2");
    const greetings = document.getElementById("greetings");
    greetings.before(greeting_element_new);

    greeting_element_new.innerText = "Hello " + name_val;
    input_name_element.value = "";
    const greeting_element = document.getElementById("hello");
    greeting_element.innerText = "Hello";
    // onNameInput();
}

function onFinishInput(){
    const input_form = document.getElementById("inputform");
    // input_form.hidden = true;
    input_form.remove();
}