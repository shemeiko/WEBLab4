const btn = document.getElementById('addButton');
const list = document.getElementById('outputList');
const chboxes = document.querySelectorAll('.chbox');

arr = new Array();
person_count = 0;

for (i = 0; i < chboxes.length; i++) {
    chboxes[i].checked = true;
    chboxes[i].addEventListener('change', () => renderSelectedFields(list));
}

btn.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    const age = document.getElementById('ageInput').value.trim();
    const city = document.getElementById('cityInput').value.trim();

    const person = {
        name: name,
        age: age,
        city: city
    };

    person_count++;

    name.textContent = '';
    age.textContent = '';
    city.textContent = '';

    arr.push(person);
    renderPerson(person, person_count);
});

function renderSelectedFields(node) {
    removeAllChildNodes(node);

    arr.forEach((person, idx) => {
        const li = document.createElement('li');

        let text = ``;

        chboxes.forEach(ch => {
            if (ch.checked) {
                const propName = ch.name;
                const firstLetter = propName.charAt(0).toUpperCase();
                const label = firstLetter + propName.slice(1);
                text += `${label}: ${person[propName]} `;
            }
        });

        if (text.trim().length !== 0) {
            text = `${idx+1}: ` + text;
        }

        li.textContent = text;
        list.append(li);
    })
}

function renderPerson(person, num) {
    const li = document.createElement('li');
    li.textContent = `${num}: Імʼя: ${person.name}, Вік: ${person.age}, Місто: ${person.city}`;
    list.append(li);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}