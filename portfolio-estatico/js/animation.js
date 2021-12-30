const projects_box = document.querySelectorAll(".projects-box");

projects_box.forEach(box => {
    box.addEventListener("mouseover", function() {
        const box_contents = box.querySelector(".box-contents");
        box_contents.style.display = "flex";
    })
});

projects_box.forEach(box => {
    box.addEventListener("mouseout", function() {
        const box_contents = box.querySelector(".box-contents");
        box_contents.style.display = "none";
    })
});