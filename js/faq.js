const faqs = document.querySelectorAll(".faq");
    let openFaq = null;  // Variable para almacenar la pregunta actualmente abierta

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            if (openFaq) {
                // Cierra la pregunta anterior si existe
                openFaq.classList.remove("active");
            }
            
            // Abre la nueva pregunta
            faq.classList.toggle("active");
            
            // Actualiza la pregunta actualmente abierta
            openFaq = faq.classList.contains("active") ? faq : null;
        });
    });