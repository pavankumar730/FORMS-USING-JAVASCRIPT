 document.addEventListener('DOMContentLoaded', function() {

    var  form = document.createElement('form');
    form.id = 'studentForm';

    function createInput(labelText, inputType, inputName) {
        var div = document.createElement('div');

        var label = document.createElement('label');
        label.htmlFor = inputName;
        label.textContent = labelText;

        var input = document.createElement('input');
        input.type = inputType.toLowerCase();
        input.name = inputName;
        input.id = inputName; 
        

        div.appendChild(label);
        div.appendChild(document.createElement('br'));
        div.appendChild(input);

        return div;
    }
    
    form.appendChild(createInput('Name', 'text', 'name') );
    form.appendChild(createInput('Roll No', 'text', 'rollNo'));
    form.appendChild(createInput('Year', 'date', 'year'));
    form.appendChild(createInput('Father Name', 'text', 'fatherName'));
    form.appendChild(createInput('Department', 'text', 'dept'));
    form.appendChild(createInput('Email', 'email', 'email'));
    form.appendChild(createInput('mobileno','number','mobileno'));
    form.appendChild(createInput('percentage','number','percentage'))
    var submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';

    form.appendChild(submit);

    document.body.appendChild(form);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});

    