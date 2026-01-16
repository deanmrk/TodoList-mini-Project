const taskList = JSON.parse(localStorage.getItem('data')) || [];

renderText();

function textFunction() {
    const input = document.querySelector('.js-input');
    const dueDate = document.querySelector('.js-date');
    const popup = document.querySelector('.main-popup');
    const audio = document.querySelector('.audio');

    const task = input.value;
    const date = dueDate.value;

    if (!task || !date) {
        popup.classList.add('show')
        audio.play()
        setTimeout(() => {
            popup.classList.remove('show');
        }, 1000)
    }
    else {
        taskList.push({ task, date});
        renderText();
    }
    
    input.value = '';
    dueDate.value = '';

    localStorage.setItem('data', JSON.stringify(taskList));
}

function renderText() {
    const container = document.querySelector('.container-1');
    let html = '';

    taskList.forEach( (value, i) => {
        const { task, date} = value;

        html += `
            <div class="data data-1">${task}</div>
            <div class="data">${date}</div>
            <button class="btnDelete"
            onclick="taskList.splice(${i}, 1)
             renderText(); ">
            Delete</button>
        `;
    })
    container.innerHTML = html;
}