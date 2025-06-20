// Login Form Validation
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }
    
    // Simulate login - in a real app, you would call an API here
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'menu.html';
});

// Logout Functionality
document.getElementById('logoutBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});

// Check if user is logged in on protected pages
const protectedPages = ['menu.html', 'dashboard.html', 'profiles.html', 'profile-detail.html'];
if (protectedPages.includes(window.location.pathname.split('/').pop())) {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html';
    }
}

// Profile Detail Page - Load data based on ID
if (window.location.pathname.includes('profile-detail.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const profileId = urlParams.get('id');
        
        // In a real app, you would fetch this data from an API
        const profiles = [
            {
                id: 1,
                name: 'James Carter',
                program: 'Computer Science',
                faculty: 'Computing',
                year: '2',
                status: 'Active',
                image: 'profile1.jpg',
                fullName: 'James Carter',
                icNumber: '010101-01-0101',
                dob: '1 January 2001',
                gender: 'Male',
                email: 'james@student.uitm.edu.my',
                phone: '+6012-345 6789',
                address: '123 Jalan Universiti, 40450 Shah Alam, Selangor',
                academicProgram: 'Bachelor of Computer Science',
                academicFaculty: 'Faculty of Computer and Mathematical Sciences',
                campus: 'Shah Alam',
                semester: '4',
                cgpa: '4.00',
                graduation: 'June 2024'
            },
            {
                id: 2,
                name: 'Emily Roberts',
                program: 'Information Technology',
                faculty: 'Computing',
                year: '3',
                status: 'Active',
                image: 'profile2.jpg',
                fullName: 'Emily Roberts',
                icNumber: '020202-02-0202',
                dob: '2 February 2000',
                gender: 'Female',
                email: 'emily@student.uitm.edu.my',
                phone: '+6013-456 7890',
                address: '456 Jalan Teknologi, 40450 Shah Alam, Selangor',
                academicProgram: 'Bachelor of Information Technology',
                academicFaculty: 'Faculty of Computer and Mathematical Sciences',
                campus: 'Shah Alam',
                semester: '5',
                cgpa: '4.00',
                graduation: 'December 2023'
            },
            {
                id: 3,
                name: 'Daniel Thompson',
                program: 'Information Technology',
                faculty: 'Computing',
                year: '3',
                status: 'Active',
                image: 'profile3.jpg',
                fullName: 'Daniel Thompson',
                icNumber: '020202-02-0202',
                dob: '2 February 2000',
                gender: 'Female',
                email: 'daniel@student.uitm.edu.my',
                phone: '+6013-456 7890',
                address: '456 Jalan Teknologi, 40450 Shah Alam, Selangor',
                academicProgram: 'Bachelor of Information Technology',
                academicFaculty: 'Faculty of Computer and Mathematical Sciences',
                campus: 'Shah Alam',
                semester: '5',
                cgpa: '3.89',
                graduation: 'December 2023'
            },
            {
                id: 4,
                name: 'Sophia Bennet',
                program: 'Information Technology',
                faculty: 'Computing',
                year: '3',
                status: 'Active',
                image: 'profile4.jpg',
                fullName: 'Sophia Bennet',
                icNumber: '020202-02-0202',
                dob: '2 February 2000',
                gender: 'Female',
                email: 'sophia@student.uitm.edu.my',
                phone: '+6013-456 7890',
                address: '456 Jalan Teknologi, 40450 Shah Alam, Selangor',
                academicProgram: 'Bachelor of Information Technology',
                academicFaculty: 'Faculty of Computer and Mathematical Sciences',
                campus: 'Shah Alam',
                semester: '5',
                cgpa: '3.92',
                graduation: 'December 2023'
            },
            {
                id: 5,
                name: 'Leo Anderson',
                program: 'Information Technology',
                faculty: 'Computing',
                year: '3',
                status: 'Active',
                image: 'profile5.jpg',
                fullName: 'Leo Anderson',
                icNumber: '020202-02-0202',
                dob: '2 February 2000',
                gender: 'Female',
                email: 'leo@student.uitm.edu.my',
                phone: '+6013-456 7890',
                address: '456 Jalan Teknologi, 40450 Shah Alam, Selangor',
                academicProgram: 'Bachelor of Information Technology',
                academicFaculty: 'Faculty of Computer and Mathematical Sciences',
                campus: 'Shah Alam',
                semester: '5',
                cgpa: '3.72',
                graduation: 'December 2023'
            }
                   
        ];
        
        const profile = profiles.find(p => p.id == profileId) || profiles[0];
        
        // Update the page with profile data
        document.getElementById('profileImage').src = `images/${profile.image}`;
        document.getElementById('studentName').textContent = profile.name;
        document.getElementById('studentId').textContent = `ID: ${profile.program.substring(0,2).toUpperCase()}${Math.floor(1000 + Math.random() * 9000)}`;
        document.getElementById('studentProgram').textContent = profile.program;
        document.getElementById('studentFaculty').textContent = profile.faculty;
        document.getElementById('studentYear').textContent = profile.year;
        document.getElementById('studentStatus').textContent = profile.status;
        document.getElementById('fullName').textContent = profile.fullName;
        document.getElementById('icNumber').textContent = profile.icNumber;
        document.getElementById('dob').textContent = profile.dob;
        document.getElementById('gender').textContent = profile.gender;
        document.getElementById('email').textContent = profile.email;
        document.getElementById('phone').textContent = profile.phone;
        document.getElementById('address').textContent = profile.address;
        document.getElementById('academicProgram').textContent = profile.academicProgram;
        document.getElementById('academicFaculty').textContent = profile.academicFaculty;
        document.getElementById('campus').textContent = profile.campus;
        document.getElementById('semester').textContent = profile.semester;
        document.getElementById('cgpa').textContent = profile.cgpa;
        document.getElementById('graduation').textContent = profile.graduation;
    });
}

// Dashboard Chart
if (window.location.pathname.includes('dashboard.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const ctx = document.getElementById('departmentChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Computer Science', 'IT', 'Data Science', 'Software Eng', 'Cyber Security', 'AI', 'Multimedia', 'Networking'],
                datasets: [{
                    label: 'Number of Students',
                    data: [25, 22, 18, 15, 12, 10, 8, 5],
                    backgroundColor: [
                        '#2c3e50',
                        '#1abc9c',
                        '#3498db',
                        '#9b59b6',
                        '#f39c12',
                        '#e74c3c',
                        '#34495e',
                        '#7f8c8d'
                    ],
                    borderColor: [
                        '#1a252f',
                        '#16a085',
                        '#2980b9',
                        '#8e44ad',
                        '#d35400',
                        '#c0392b',
                        '#2c3e50',
                        '#7f8c8d'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    });
}

// Search Functionality
document.getElementById('searchInput')?.addEventListener('keyup', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.profile-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        const program = card.querySelector('.card-text').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || program.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
});

// Department Chart
const ctx = document.getElementById('departmentChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Computer Science', 'IT', 'Data Science', 'Software Eng', 'Cyber Security'],
        datasets: [{
            label: 'Students',
            data: [25, 22, 18, 15, 12],
            backgroundColor: [
                '#2c3e50',
                '#1abc9c',
                '#3498db',
                '#9b59b6',
                '#f39c12'
            ],
            borderColor: [
                '#1a252f',
                '#16a085',
                '#2980b9',
                '#8e44ad',
                '#d35400'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Add to script.js
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});