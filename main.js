(() => {
  let journalStudents = document.getElementById('journal-students');
  //заранее подготовленный массив
  const studentsList = [
    {
      surName: 'иванник',
      name: 'константин',
      middleName: 'сергеевич',
      birthDay: new Date(1993, 06, 31),
      startTeach: 2001,
      faculty: 'Информационных Технологий',
    },
    {
      surName: 'пупкина',
      name: 'наталья',
      middleName: 'васильевна',
      birthDay: new Date(2005, 2, 14),
      startTeach: 2022,
      faculty: 'Бухучет',
    },
    {
      surName: 'Махнёва',
      name: 'екатерина',
      middleName: 'сергеевна',
      birthDay: new Date(1994, 10, 21),
      startTeach: 2018,
      faculty: 'Управление',
    },
    {
      surName: 'задорный',
      name: 'никита',
      middleName: 'владимирович',
      birthDay: new Date(1989, 7, 4),
      startTeach: 1995,
      faculty: 'Информационных Технологий',
    },
    {
      surName: 'стручков',
      name: 'вячеслав',
      middleName: 'динарович',
      birthDay: new Date(2000, 11, 31),
      startTeach: 2023,
      faculty: 'Управление',
    },
  ]
  // Создаем h1 тег
  function createH1(title) {
    let h1 = document.createElement('h1');
    h1.textContent = title;
    h1.classList.add('container', 'mb-5');
    document.body.prepend(h1);
  }
  // Создаем форму добавления студентов
  function createAddFormStudent(journalStudents) {
    let form = document.createElement('form');
    let h2 = document.createElement('h2');
    let inputFIO = document.createElement('input');
    let inputBirthDay = document.createElement('input');
    let inputStartTeach = document.createElement('input');
    let inputFaculty = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let buttonSubmit = document.createElement('button');
    let divAddStudents = document.createElement('div');
    let divForBtn = document.createElement('div');


    form.classList.add('input-group', 'mb-3', 'row');
    form.method = 'post';
    h2.textContent = 'Добавление студента';
    h2.classList.add('mb-2');
    inputFIO.type = 'text';
    inputFIO.classList.add('form-control', 'input__fio');
    inputFIO.placeholder = 'ФИО';
    inputFIO.required = true;
    inputBirthDay.type = 'date';
    inputBirthDay.classList.add('form-control');
    inputBirthDay.placeholder = 'День рождения';
    inputBirthDay.required = true;
    inputStartTeach.type = 'number';
    inputStartTeach.classList.add('form-control');
    inputStartTeach.placeholder = 'Год начала обучения';
    inputStartTeach.required = true;
    inputFaculty.type = 'text';
    inputFaculty.classList.add('form-control');
    inputFaculty.placeholder = 'Факультет';
    inputFaculty.required = true;
    buttonWrapper.classList.add('input-group-append', 'col-2');
    buttonSubmit.classList.add('btn', 'btn-primary');
    buttonSubmit.textContent = 'Добавить';
    divAddStudents.classList.add('add__student');

    for (let i = 0; i < 4; i++) {
      let divForError = document.createElement('div');
      let error = document.createElement('div');
      error.classList.add('invalid-feedback');
      switch (i) {
        case 0:
          divForError.classList.add('col-3');
          divForError.append(inputFIO);
          break;
        case 1:
          divForError.classList.add('col-2');
          divForError.append(inputBirthDay);
          break;
        case 2:
          divForError.classList.add('col-2');
          divForError.append(inputStartTeach);
          break;
        case 3:
          divForError.classList.add('col-3');
          divForError.append(inputFaculty);
          break;
        // case 4:
        //   divForError.classList.add('col-3');
        //   divForError.append(buttonWrapper);
        //   break;
      }
      divForError.append(error);
      form.append(divForError);
    };

    buttonWrapper.append(buttonSubmit);
    form.append(buttonWrapper);
    divAddStudents.append(h2);
    divAddStudents.append(form);
    journalStudents.append(divAddStudents);

    return {
      form,
      inputFIO,
      inputBirthDay,
      inputStartTeach,
      inputFaculty,
      buttonSubmit,
    };
  }
  // создаем форму для фильтров
  function createFilterForm(journalStudents) {
    let h2 = document.createElement('h2');
    let form = document.createElement('form');
    let inputFIO = document.createElement('input');
    let inputFaculty = document.createElement('input');
    let inputStartTeach = document.createElement('input');
    let inputEndTeach = document.createElement('input');
    let divFilterStudents = document.createElement('div');

    form.classList.add('input-group', 'mb-3');
    h2.textContent = 'Фильтр студентов';
    h2.classList.add('mb-2');
    inputFIO.type = 'text';
    inputFIO.classList.add('form-control');
    inputFIO.placeholder = 'ФИО';
    inputFaculty.type = 'text';
    inputFaculty.classList.add('form-control');
    inputFaculty.placeholder = 'Факультет';
    inputStartTeach.type = 'number';
    inputStartTeach.classList.add('form-control');
    inputStartTeach.placeholder = 'Год начала обучения';
    inputEndTeach.type = 'number';
    inputEndTeach.classList.add('form-control');
    inputEndTeach.placeholder = 'Год окончания обучения';
    divFilterStudents.classList.add('filter__students');

    form.append(inputFIO);
    form.append(inputFaculty);
    form.append(inputStartTeach);
    form.append(inputEndTeach);
    divFilterStudents.append(h2);
    divFilterStudents.append(form);
    journalStudents.append(divFilterStudents);

    return {
      inputFIO,
      inputFaculty,
      inputStartTeach,
      inputEndTeach,
    };
  }
  // функция отрисовки таблицы
  function createListStudents(journalStudents) {
    let h2 = document.createElement('h2');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let tbody = document.createElement('tbody');
    let divListStudents = document.createElement('div');

    h2.textContent = 'Список студентов';
    h2.classList.add('mb-2');
    table.classList.add('table');
    th1.scope = 'col';
    th1.style.cursor = 'pointer';
    th1.textContent = 'ФИО';
    th2.scope = 'col';
    th2.style.cursor = 'pointer';
    th2.textContent = 'Факультет';
    th3.scope = 'col';
    th3.style.cursor = 'pointer';
    th3.textContent = 'Дата рождения';
    th4.scope = 'col';
    th4.style.cursor = 'pointer';
    th4.textContent = 'Годы обучения';

    tr.append(th1);
    tr.append(th2);
    tr.append(th3);
    tr.append(th4);
    thead.append(tr);
    table.append(thead);
    table.append(tbody);

    divListStudents.append(h2);
    divListStudents.append(table);
    journalStudents.append(divListStudents);

    return {
      tbody,
      thead,
    };
  }
  //Обновление списка студентов
  function renderStudentsTable(tbody, arrStudents) {
    tbody.innerHTML = '';
    for (let student of arrStudents) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');

      student.surName = student.surName.substr(0, 1).toUpperCase() + student.surName.substr(1).toLowerCase();
      student.name = student.name.substr(0, 1).toUpperCase() + student.name.substr(1).toLowerCase();
      student.middleName = student.middleName.substr(0, 1).toUpperCase() + student.middleName.substr(1).toLowerCase();
      let nowYear = new Date();
      fullYear = parseInt((nowYear - student.birthDay) / (1000 * 60 * 60 * 24 * 365));
      let month = String(student.birthDay.getMonth() + 1);
      month = month.length === 1 ? '0' + month : month;
      let endTeach = nowYear.getFullYear() - Number(student.startTeach) > 4 ? Number(student.startTeach) + 4 : nowYear.getFullYear();
      let kurs;
      if (nowYear.getFullYear() - student.startTeach > 4) {
        kurs = 'закончил';
      } else {
        kurs = nowYear.getFullYear() - student.startTeach + 1 + ` курс`;
      }



      td1.textContent = student.surName + ' ' + student.name + ' ' + student.middleName;
      td2.textContent = student.faculty;
      td3.textContent = `${student.birthDay.getDate()}.${month}.${student.birthDay.getFullYear()} (${fullYear} лет)`;
      td4.textContent = `${student.startTeach}-${endTeach} (${kurs})`;

      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tbody.append(tr);
    }
  }
  // реализация добавления студента
  function addStudent(formStudent, studentsList, tbody) {
    formStudent.form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm(formStudent)) {
        let newStudent = {};
        newStudent.surName = cutFIO(formStudent.inputFIO.value).surName;
        newStudent.name = cutFIO(formStudent.inputFIO.value).name;
        newStudent.middleName = cutFIO(formStudent.inputFIO.value).middleName;
        newStudent.birthDay = formStudent.inputBirthDay.valueAsDate;
        newStudent.startTeach = formStudent.inputStartTeach.value;
        newStudent.faculty = formStudent.inputFaculty.value;
        studentsList.push(newStudent);
        renderStudentsTable(tbody, studentsList);
      };
    });
  }
  // Разбор ФИО на обьект
  function cutFIO(fio) {
    [surName, name, middleName] = fio
      .trim()
      .split(' ')
      .filter(text => text.length > 0);
    return {
      surName,
      name,
      middleName,
    }
  }
  //валидация формы
  function validateForm(formStudent) {
    //проверка fio
    let valid = 0;
    let error = document.querySelectorAll('.invalid-feedback');
    let fio = formStudent.inputFIO.value
      .trim()
      .split(' ')
      .filter(text => text.length > 0);
    if (fio.length !== 3) {
      formStudent.inputFIO.classList.add('is-invalid');
      if (error[0].value !== '') {
        error[0].textContent = 'Введите ФИО полностью';
      }
    } else {
      formStudent.inputFIO.classList.remove('is-invalid');
      valid++
    }
    // проверка ДР
    let birthDay = formStudent.inputBirthDay.valueAsDate;
    if (birthDay.getFullYear() < 1900 || birthDay > Date.now()) {
      formStudent.inputBirthDay.classList.add('is-invalid');
      if (error[1].value !== '') {
        error[1].textContent = 'Введите корректную дату ДР';
      }
    } else {
      formStudent.inputBirthDay.classList.remove('is-invalid');
      valid++
    }
    //проверка даты поступления
    let startTeach = formStudent.inputStartTeach.value;
    let nowDate = new Date();
    if (startTeach < 2000 || startTeach > nowDate.getFullYear()) {
      formStudent.inputStartTeach.classList.add('is-invalid');
      if (error[2].value !== '') {
        error[2].textContent = 'Введите корректную дату поступления';
      }
    } else {
      formStudent.inputStartTeach.classList.remove('is-invalid');
      valid++
    }
    // проверка факультета
    let faculty = formStudent.inputFaculty.value
      .trim()
      .split(' ')
      .filter(text => text.length > 0);
    if (faculty.length === 0) {
      formStudent.inputFaculty.classList.add('is-invalid');
      if (error[3].value !== '') {
        error[3].textContent = 'Введите название факультета';
      }
    } else {
      formStudent.inputFaculty.classList.remove('is-invalid');
      valid++
    }
    valid = valid === 4 ? true : false;
    return valid;
  }
  //сортировка студентов
  function sortStudent(tbody, thead, arrSort) {
    let sortFIO = thead.children[0].children[0];
    let sortFacult = thead.children[0].children[1];
    let sortBirthDay = thead.children[0].children[2];
    let sortStartTeach = thead.children[0].children[3];
    let toogle = 0;
    let tempArr = [];
    sortFIO.addEventListener('click', () => {
      switch (toogle) {
        case 0: tempArr = arrSort.sort((a, b) => a.surName > b.surName ? 1 : -1); toogle++; break;
        case 1: tempArr = arrSort.sort((a, b) => a.surName > b.surName ? -1 : 1); toogle--; break;
      }
      renderStudentsTable(tbody, tempArr);
    })
    sortFacult.addEventListener('click', () => {
      switch (toogle) {
        case 0: tempArr = arrSort.sort((a, b) => a.faculty > b.faculty ? 1 : -1); toogle++; break;
        case 1: tempArr = arrSort.sort((a, b) => a.faculty > b.faculty ? -1 : 1); toogle--; break;
      }
      renderStudentsTable(tbody, tempArr);
    })
    sortBirthDay.addEventListener('click', () => {
      switch (toogle) {
        case 0: tempArr = arrSort.sort((a, b) => a.birthDay > b.birthDay ? 1 : -1); toogle++; break;
        case 1: tempArr = arrSort.sort((a, b) => a.birthDay > b.birthDay ? -1 : 1); toogle--; break;
      }
      renderStudentsTable(tbody, tempArr);
    })
    sortStartTeach.addEventListener('click', () => {
      switch (toogle) {
        case 0: tempArr = arrSort.sort((a, b) => a.startTeach > b.startTeach ? 1 : -1); toogle++; break;
        case 1: tempArr = arrSort.sort((a, b) => a.startTeach > b.startTeach ? -1 : 1); toogle--; break;
      }
      renderStudentsTable(tbody, tempArr);
    })
  }
  //оживляем фильтры
  function filterStudent(form, tbody, filtArr) {
    let tempArr;
    let nowDate = new Date();
    nowDate = nowDate.getFullYear();
    form.inputFIO.addEventListener('input', () => {
      if (form.inputFIO.value != '') {
        tempArr = filtArr.filter(elem => {
          let total = elem.surName.toLowerCase() + ' ' + elem.name.toLowerCase() + ' ' + elem.middleName.toLowerCase();
          return total.includes(form.inputFIO.value.toLowerCase());
        })
        renderStudentsTable(tbody, tempArr);
      } else {
        renderStudentsTable(tbody, filtArr);
      }
    });
    form.inputFaculty.addEventListener('input', () => {
      if (form.inputFaculty.value != '') {
        tempArr = filtArr.filter(elem => {
          let total = elem.faculty.toLowerCase();
          return total.includes(form.inputFaculty.value.toLowerCase());
        })
        renderStudentsTable(tbody, tempArr);
      } else {
        renderStudentsTable(tbody, filtArr);
      }
    });
    form.inputStartTeach.addEventListener('input', () => {
      if (form.inputStartTeach.value != '') {
        tempArr = filtArr.filter(elem => elem.startTeach == form.inputStartTeach.value)
        renderStudentsTable(tbody, tempArr);
      } else {
        renderStudentsTable(tbody, filtArr);
      }
    });
    form.inputEndTeach.addEventListener('input', () => {
      if (form.inputEndTeach.value != '') {
        tempArr = filtArr.filter(elem => {
          let total = elem.startTeach + 4 > nowDate ? nowDate : elem.startTeach + 4;
          return total == form.inputEndTeach.value;
        })
        renderStudentsTable(tbody, tempArr);
      } else {
        renderStudentsTable(tbody, filtArr);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    let formStudent = createAddFormStudent(journalStudents);
    let filterForm = createFilterForm(journalStudents);
    let createListStudent = createListStudents(journalStudents);
    let tbody = createListStudent.tbody;
    let thead = createListStudent.thead;
    createH1('Журнал студентов');
    renderStudentsTable(tbody, studentsList);
    addStudent(formStudent, studentsList, tbody);
    sortStudent(tbody, thead, studentsList);
    filterStudent(filterForm, tbody, studentsList);
  })

})();
