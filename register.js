document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const password = document.querySelector('input[name="password"]');
    const confirmPassword = document.querySelector('input[name="confirm_password"]');
    const button = document.querySelector("button");
    const inputs = document.querySelectorAll("input");

    // Lấy phần tử logo con ong
const bee = document.getElementById('beeLogo');

// Khi rê chuột qua logo — làm nó “bay”
bee.addEventListener('mouseenter', () => {
    bee.style.transition = 'transform 0.3s ease';
    bee.style.transform = 'rotate(10deg) translateY(-5px)';
});

bee.addEventListener('mouseleave', () => {
    bee.style.transform = 'rotate(0deg) translateY(0)';
});

    // Kiểm tra mật khẩu khớp
    form.addEventListener("submit", function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            showMessage("Mật khẩu không khớp, vui lòng nhập lại!", "error");
            confirmPassword.style.borderColor = "#ff4d4d";
        }
    });

    // Khi người dùng nhập lại thì reset lỗi
    confirmPassword.addEventListener("input", function() {
        confirmPassword.style.borderColor = "#999";
    });

    // Hiệu ứng focus vào input
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#7b44ff";
            input.style.boxShadow = "0 0 6px rgba(123,68,255,0.3)";
        });
        input.addEventListener("blur", () => {
            input.style.borderColor = "#999";
            input.style.boxShadow = "none";
        });
    });

    // Hiệu ứng nút đăng ký
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.96)";
    });
    button.addEventListener("mouseup", () => {
        button.style.transform = "scale(1.02)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });

    // Hiển thị thông báo nhỏ (trượt ra trượt vào)
    function showMessage(text, type = "info") {
        let oldMsg = document.querySelector(".popup-message");
        if (oldMsg) oldMsg.remove();

        const msg = document.createElement("div");
        msg.className = `popup-message ${type}`;
        msg.textContent = text;
        document.body.appendChild(msg);

        setTimeout(() => msg.classList.add("show"), 100);
        setTimeout(() => {
            msg.classList.remove("show");
            setTimeout(() => msg.remove(), 300);
        }, 3000);
    }
});
