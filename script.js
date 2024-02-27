function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (!username || !password) {
        document.getElementById("loginError").innerHTML = "Vui lòng nhập tên và mật khẩu.";
        return;
    }

    alert("Đăng nhập thành công!");
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !email || !password || !confirmPassword || password !== confirmPassword) {
        document.getElementById("registerError").innerHTML = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById("registerError").innerHTML = "Vui lòng nhập đúng định dạng email.";
        return;
    }

    alert("Đăng ký thành công!");
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
