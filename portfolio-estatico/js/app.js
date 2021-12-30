// RESPONSIVIDADE DO NAVBAR //

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }

        return this
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavBar.init();

// ANIMAÇÃO DOS PROJECTS BOX //

const projects_box = document.querySelectorAll(".projects-box");

projects_box.forEach(box => {
    box.addEventListener("mouseover", function () {
        const box_contents = box.querySelector(".box-contents");
        box_contents.style.display = "flex";
    })
});

projects_box.forEach(box => {
    box.addEventListener("mouseout", function () {
        const box_contents = box.querySelector(".box-contents");
        box_contents.style.display = "none";
    })
});

// REGEX PARA VALIDAÇÃO DOS CAMPOS //


function validarNome() {
    let value = document.getElementById("name").value;
    let re = "^[a-zA-Z|\s]{5,25}$";
    if (!value.match(re)) {
        // campo inválido, retorna false para o formulário não ser submetido
        alert('Nome Inválido');
        document.form.nome.focus();
        return false;
    }
    return true;
}

function validarTel() {
    let value = document.getElementById("tel").value;
    let re = "^([0-9]{2}|[0-9]{0})[0-9]{9}$";
    if (!value.match(re)) {
        // campo inválido, retorna false para o formulário não ser submetido
        alert('Tel Inválido');
        document.form.tel.focus();
        return false;
    }
    return true;
}


function validarEmail() {
    let value = document.getElementById("email").value;
    let re = "^[a-zA-Z0-9+-]{2,}@[a-zA-Z0-9+-]{2,}.[a-zA-Z0-9_+-]{2,}$";
    if (!value.match(re)) {
        // campo inválido, retorna false para o formulário não ser submetido
        alert('Email Inválido');
        document.form.email.focus();
        return false;
    }
    return true;
}

function validarComment() {
    let value = document.getElementById("comment").value;
    let re = "^[a-zA-Z0-9|\s]{10,400}$";
    if (!value.match(re)) {
        // campo inválido, retorna false para o formulário não ser submetido
        alert('Mensagem Inválida');
        document.form.comment.focus();
        return false;
    }
    return true;
}
// valida todos os campos
function validarTudo() {
    // se um deles for inválido, retorna false e o form não é submetido
    return validarNome() && validarTel() && validarEmail() && validarComment();
}