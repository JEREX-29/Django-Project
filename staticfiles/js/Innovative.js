document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const plusIcon = this.querySelector(".plus");

            if (answer.classList.contains("active")) {
                answer.classList.remove("active");
                plusIcon.style.transform = "rotate(0deg)";
            } else {
                document.querySelectorAll(".faq-answer").forEach((item) => {
                    item.classList.remove("active");
                });
                document.querySelectorAll(".plus").forEach((icon) => {
                    icon.style.transform = "rotate(0deg)";
                });

                answer.classList.add("active");
                plusIcon.style.transform = "rotate(45deg)";
            }
        });
    });
});
