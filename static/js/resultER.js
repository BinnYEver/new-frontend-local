const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const add_search = document.querySelector(".add_entity");
const min_search = document.querySelector(".min_entity");
const parent_entity_pair = document.querySelector(".entity_pair");
let audio_sound = document.querySelectorAll("audio");
let but_list = document.querySelectorAll(".but");
// const feedbackclick = document.querySelectorAll("")


selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(e => {
    e.addEventListener("click", () => {
        selected.innerHTML = e.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    })
});

add_search.addEventListener("click", () => {
    if (parent_entity_pair.childElementCount < 5) {
        var new_pairs = document.createElement("div");
        var text_field1 = document.createElement("input");
        var text_field2 = document.createElement("input");
        new_pairs.setAttribute("class", "entity_pair_inputbox");
        text_field1.setAttribute("type", "text");
        text_field2.setAttribute("type", "text");
        new_pairs.appendChild(text_field1);
        new_pairs.appendChild(text_field2);
        parent_entity_pair.appendChild(new_pairs);
    }



})

min_search.addEventListener("click", () => {
    if (parent_entity_pair.childElementCount > 3) {
        parent_entity_pair.removeChild(parent_entity_pair.lastChild)
    }


})
console.log(but_list.length);
for (let i = 0; i < but_list.length; i++) {
    but_list[i].addEventListener('mouseenter', () => {
        audio_sound[0].play();
    });
}