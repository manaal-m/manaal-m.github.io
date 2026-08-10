// Portfolio Tab Navigation Logic

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.content-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            tabBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target section
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Copy Email to Clipboard Logic
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const globalToast = document.getElementById('global-toast');
    
    if (copyEmailBtn && globalToast) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = "mm.manaal11@gmail.com";
            
            navigator.clipboard.writeText(email).then(() => {
                globalToast.classList.add('show');
                
                // Hide toast after 2.5 seconds
                setTimeout(() => {
                    globalToast.classList.remove('show');
                }, 2500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
