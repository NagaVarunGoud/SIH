document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll Functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('sticky', window.scrollY > 0);
        });
    }

    // Mobile Navigation Toggle
    const nav = document.querySelector('nav ul');
    const toggleBtn = document.querySelector('.nav-toggle');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
        }
    });

    // Lazy loading charts on scroll
    const charts = document.querySelectorAll('.chart');
    window.addEventListener('scroll', () => {
        charts.forEach(chart => {
            const rect = chart.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                chart.classList.add('in-view');
            }
        });
    });

    // Intersection Observer for animating sections
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hide Intro Animation After Loading
    const introAnimation = document.getElementById('intro-animation');
    if (introAnimation) {
        introAnimation.addEventListener('animationend', () => {
            introAnimation.style.display = 'none';
        });
    }
});
