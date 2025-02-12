$(document).ready(function () {
    // Full Name Validation
    $("#fullName").on("input", function () {
        const fullName = $(this).val();
        if (!/^[A-Za-z\s]+$/.test(fullName)) {
            $("#fullNameError").text("Full Name should contain only letters and spaces.");
        } else {
            $("#fullNameError").text("");
        }
    });

    // Registration Number Validation
    $("#regNumber").on("input", function () {
        const regNumber = $(this).val();
        if (!/^BCS-\d{2}-\d{4}-\d{4}$/.test(regNumber)) {
            $("#regNumberError").text("Registration Number must follow the format BCS-00-0000-0000.");
        } else {
            $("#regNumberError").text("");
        }
    });

    // Email Validation
    $("#email").on("input", function () {
        const email = $(this).val();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#emailError").text("Please enter a valid email address.");
        } else {
            $("#emailError").text("");
        }
    });

    // Password Validation
    $("#password").on("input", function () {
        const password = $(this).val();
        if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
            $("#passwordError").text("Password must be at least 8 characters long and contain a special character.");
        } else {
            $("#passwordError").text("");
        }
    });

    // Confirm Password Validation
    $("#confirmPassword").on("input", function () {
        const confirmPassword = $(this).val();
        if (confirmPassword !== $("#password").val()) {
            $("#confirmPasswordError").text("Passwords do not match.");
        } else {
            $("#confirmPasswordError").text("");
        }
    });

    // Load Regions via Ajax
    $.ajax({
        url: "getRegions.php",
        method: "GET",
        success: function (data) {
            $("#region").html(data);
        }
    });

    // Load Districts based on Region
    $("#region").change(function () {
        const regionId = $(this).val();
        $.ajax({
            url: "getDistricts.php",
            method: "POST",
            data: { regionId: regionId },
            success: function (data) {
                $("#district").html(data);
            }
        });
    });

    // jQuery Carousel
    let currentIndex = 0;
    const images = $("#carousel img");
    function showNextImage() {
        images.hide();
        currentIndex = (currentIndex + 1) % images.length;
        images.eq(currentIndex).fadeIn(1000);
    }
    setInterval(showNextImage, 3000);
});