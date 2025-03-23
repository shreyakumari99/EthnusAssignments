document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const userTableBody = document.getElementById('userTableBody');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
                address: document.getElementById('address').value
            };
            
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            registrationForm.reset();
            alert('User registered successfully!');
            showSection('view');
            displayUsers();
        });
    }

    function displayUsers() {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        userTableBody.innerHTML = users.length ? users.map(user => `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>
        `).join('') : '<tr><td colspan="4" class="text-center">No users registered yet</td></tr>';
    }
    
    if (userTableBody) {
        displayUsers();
    }
});

function showSection(sectionId) {
    document.querySelectorAll('.container > div').forEach(div => {
        div.classList.add('d-none');
    });
    document.getElementById(sectionId).classList.remove('d-none');
}