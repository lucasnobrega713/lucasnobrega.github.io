// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("projects.json")
      .then((response) => response.json())
      .then((projects) => {
        const projetoGrid = document.querySelector(".projeto-grid");
  
        projects.forEach((project) => {
          const projetoCard = document.createElement("div");
          projetoCard.classList.add("projeto-card");
  
          projetoCard.innerHTML = `
              <h3>${project.nome}</h3>
              <p>Tipo: ${project.tipo}</p>
              <p>Status: ${project.status}</p>
              <p>Descrição: ${project.descricao.substring(0, 60)}</p>
              <a href="${project.url}" target="_blank">Ver mais</a>
          `;
  
          projetoGrid.appendChild(projetoCard);
        });
      })
      .catch((error) => console.error("Erro ao carregar os projetos:", error));
  });

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('nav');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});

// Função para adicionar animação de scroll suave ao clicar nos links do menu
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}

// Adicionando evento de clique aos links do menu
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute("href").slice(1);
      scrollToSection(sectionId);
  });
});