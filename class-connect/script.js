// Mock Data - All departments
const departmentSchedules = {
    'IFT': {
        'Mon': [
            { time: '8:00 AM - 10:00 AM', course: 'PHY 101', room: 'FBN LECTURE THEATRE' }
        ],
        'Tue': [
            { time: '8:00 AM - 10:00 AM', course: 'CSC 101', room: 'SOC 3-IN-1 B' }
        ],
        'Wed': [],
        'Thu': [],
        'Fri': []
    },
    'IFS': {
        'Mon': [],
        'Tue': [],
        'Wed': [],
        'Thu': [],
        'Fri': []
    },
    'SEN': {
        'Mon': [],
        'Tue': [],
        'Wed': [],
        'Thu': [],
        'Fri': []
    },
    'DTS': {
        'Mon': [
            { time: '8:00 AM - 10:00 AM', course: 'PHY 101', room: 'FBN LECTURE THEATRE' }
        ],
        'Tue': [
            { time: '8:00 AM - 10:00 AM', course: 'CSC 101', room: 'SOC 3-IN-1 B' },
            { time: '10:00 AM - 12:00 PM', course: 'GNS 103', room: 'FBN LECTURE THEATRE' },
            { time: '2:00 PM - 4:00 PM', course: 'PHY 107 (PHYSICS LAB)', room: 'OBAKEKERE SOUTH GATE' }
        ],
        'Wed': [
            { time: '2:00 PM - 4:00 PM', course: 'STA 111', room: 'SOC LECTURE THEATRE' }
        ],
        'Thu': [
            { time: '10:00 AM - 12:00 PM', course: 'GST 111', room: '---' },
            { time: '2:00 PM - 4:00 PM', course: 'MTH 101', room: 'ETF/HILLTOP' }
        ],
        'Fri': [
            { time: '8:00 AM - 10:00 AM', course: 'STA 111', room: 'SOC LECTURE THEATRE' },
            { time: '3:00 PM - 5:00 PM', course: 'MEE 101', room: 'ETF' }
        ]
    },
    'CSC': {
        'Mon': [],
        'Tue': [],
        'Wed': [],
        'Thu': [],
        'Fri': []
    }
};

let scheduleData = {};

// Schedule data is now defined above.
// Logic for selecting department is moved to initSchedule.



document.addEventListener('DOMContentLoaded', () => {
    // Determine current page
    const isLoginPage = document.getElementById('login-form');
    const isTimelinePage = document.getElementById('timeline-feed');
    const isSchedulePage = document.getElementById('schedule-display');

    if (isLoginPage) {
        initLogin();
    } else {
        // Shared initialization for protected pages
        initShared();

        if (isTimelinePage) initTimeline();
        if (isSchedulePage) initSchedule();
    }
});

// --- Initialization Functions ---

function initLogin() {
    const btnStudent = document.getElementById('btn-student');
    const btnAdminLogin = document.getElementById('btn-admin-login');
    const btnCancelLogin = document.getElementById('btn-cancel-login');
    const loginForm = document.getElementById('login-form');
    const btnTogglePassword = document.getElementById('btn-toggle-password');

    btnStudent.addEventListener('click', () => {
        localStorage.setItem('isAdmin', 'false');
        window.location.href = 'timeline.html';
    });

    btnAdminLogin.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        document.querySelector('.auth-buttons').classList.add('hidden');
    });

    btnCancelLogin.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        document.querySelector('.auth-buttons').classList.remove('hidden');
        document.getElementById('login-error').innerText = '';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        // Admin credentials
        const adminCredentials = {
            'admin': 'admin001',
            'Robin_DTS': 'repdts001',
            'Danstech_IFT': 'repift002'
        };

        if (adminCredentials[user] && adminCredentials[user] === pass) {
            localStorage.setItem('isAdmin', 'true');
            window.location.href = 'timeline.html';
        } else {
            document.getElementById('login-error').innerText = 'Invalid credentials';
        }
    });

    if (btnTogglePassword) {
        btnTogglePassword.addEventListener('click', function () {
            const passwordInput = document.getElementById('password');
            const icon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    }
}

function initShared() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const badge = document.getElementById('user-role-badge');
    const btnLogout = document.getElementById('btn-logout');

    if (badge) {
        if (isAdmin) {
            badge.innerText = 'Admin';
            badge.style.background = 'rgba(239, 68, 68, 0.2)';
            badge.style.color = 'white';
            badge.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.6)';
        } else {
            badge.innerText = 'Student';
            badge.style.background = 'rgba(34, 197, 94, 0.2)';
            badge.style.color = 'white';
            badge.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.6)';
        }
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            localStorage.removeItem('isAdmin');
            window.location.href = 'index.html';
        });
    }

    // Scroll to bottom on initial load to see latest
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 100);
}

function initTimeline() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const adminArea = document.getElementById('admin-post-area');
    const bottomNav = document.querySelector('.bottom-nav');
    const btnPost = document.getElementById('btn-post');
    const postInput = document.getElementById('post-content');

    // Show admin posting area logic
    // We remove the 'hidden' utility class which is display:none
    // But it will still be hidden visually by the CSS transform: translateY(120%)
    if (isAdmin && adminArea) {
        adminArea.classList.remove('hidden');
    }

    loadPosts();

    // Tap Interaction Logic
    let tapTimeout;
    let lastTapTime = 0;

    document.addEventListener('click', (e) => {
        // Ignore interactions with functional elements
        if (e.target.closest('button, a, input, textarea, select, .dept-select')) return;

        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastTapTime;

        if (timeDiff < 300 && timeDiff > 0) {
            // Double Tap detected: Toggle Admin Panel
            clearTimeout(tapTimeout);
            if (isAdmin && adminArea) {
                adminArea.classList.toggle('show-panel');
            }
        } else {
            // Single Tap candidate: Toggle Navbar
            clearTimeout(tapTimeout);
            tapTimeout = setTimeout(() => {
                if (bottomNav) {
                    bottomNav.classList.toggle('nav-hidden');
                }
            }, 300);
        }
        lastTapTime = currentTime;
    });


    if (btnPost) {
        btnPost.addEventListener('click', () => {
            const content = postInput.value.trim();
            if (!content) return;

            const tag = document.getElementById('post-tag').value;
            const newPost = {
                id: Date.now(),
                content: content,
                tag: tag,
                time: new Date().toLocaleString(),
                author: 'Admin'
            };

            savePost(newPost);
            postInput.value = '';
            loadPosts();
            // Scroll to bottom to see new post
            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 100);
        });
    }
}



function initSchedule() {
    const deptSelect = document.getElementById('dept-select');
    const dayBtns = document.querySelectorAll('.day-btn');
    const display = document.getElementById('schedule-display');

    if (display) {
        display.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted)">CHOOSE YOUR DEPARTMENT</p>';
    }

    // Handle department selection
    deptSelect.addEventListener('change', (e) => {
        const selectedDept = e.target.value;
        if (selectedDept) {
            scheduleData = departmentSchedules[selectedDept];
            renderSchedule('Mon'); // Reset to Monday
            dayBtns.forEach(b => b.classList.remove('active'));
            dayBtns[0].classList.add('active');
        } else {
            document.getElementById('schedule-display').innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted)">CHOOSE YOUR DEPARTMENT</p>';
        }
    });

    // Handle day selection
    dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dayBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSchedule(btn.getAttribute('data-day'));
        });
    });
}

// --- Helper Functions ---



function renderSchedule(day) {
    const container = document.getElementById('schedule-display');
    if (!container) return;

    const classes = scheduleData[day] || [];

    if (classes.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted)">No classes scheduled.</p>';
        return;
    }

    container.innerHTML = classes.map(cls => `
        <div class="schedule-item">
            <div class="time-slot">${cls.time}</div>
            <div class="class-info">
                <h4>${cls.course}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${cls.room}</p>
            </div>
        </div>
    `).join('');
}

function savePost(post) {
    let posts = JSON.parse(localStorage.getItem('classConnectPosts') || '[]');
    posts.push(post); // Add to bottom
    localStorage.setItem('classConnectPosts', JSON.stringify(posts));
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem('classConnectPosts'));
    if (!posts || posts.length === 0) {
        posts = [
            {
                id: 1,
                content: "Welcome to the new ClassConnect portal! Check your schedule and resources tabs.",
                tag: "General",
                time: new Date().toLocaleDateString(),
                author: "System"
            }
        ];
    }

    const container = document.getElementById('timeline-feed');
    if (!container) return;

    container.innerHTML = posts.map(post => {
        let tagClass = '';
        if (post.tag === 'Urgent') tagClass = 'urgent';
        if (post.tag === 'Schedule') tagClass = 'schedule';

        return `
            <div class="post-card ${tagClass}">
                <div class="post-header">
                    <span class="post-tag">${post.tag}</span>
                    <span class="post-time">${post.time}</span>
                </div>
                <div class="post-content">${post.content.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    }).join('');
}
