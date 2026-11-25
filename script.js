
document.addEventListener('DOMContentLoaded', function () {

    console.log('Portfolio đã tải thành công!');

    // Xử lý form liên hệ
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;

            alert('Cảm ơn ' + name +
                  '! Bạn đã gửi lời nhắn thành công.');

            form.reset();
        });
    }

});

// ===== ANIMATION KHI CUỘN TRANG =====

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach((element) => {
    observer.observe(element);
});

/* ===== CHỨC NĂNG DARK MODE ===== */

const themeButtons = document.querySelectorAll(".theme-toggle");

// Đọc chế độ đã lưu
let currentTheme = localStorage.getItem("portfolio-theme") || "light";

// Áp dụng giao diện
function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    themeButtons.forEach((button) => {
        button.textContent = theme === "dark" ? "☀️" : "🌙";
    });

    localStorage.setItem("portfolio-theme", theme);
}

// Hiển thị giao diện khi mở trang
applyTheme(currentTheme);

// Khi nhấn nút chuyển đổi
themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentTheme = document.body.classList.contains("dark-mode")
            ? "light"
            : "dark";

        applyTheme(currentTheme);
    });
});

