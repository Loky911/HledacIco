document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("icoInput");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");
    const modalClose = document.querySelector(".close");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const ico = input.value.trim();
        if (ico !== "") {
            fetchEconomicSubject(ico);
            
        } else {
            alert("Prosím, zadejte IČO.");

        }
    });

    modalClose.addEventListener("click", function() {
        modal.style.display = "none";

    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";

        }
    });

    function fetchEconomicSubject(ico) {
        fetch(`api_proxy.php?ico=${ico}`) 
            .then(response => response.json())
            .then(data => {
                const obchodniJmeno = data.zaznamy[0].obchodniJmeno;
                const sidlo = data.zaznamy[0].sidlo.textovaAdresa;
                const pravniForma = data.zaznamy[0].pravniForma;
                const modalContent = `
                    <h2>${obchodniJmeno}</h2>
                    <p>IČO: ${ico}</p>
                    <p>Adresa: ${sidlo}</p>
                    <p>Právní forma: ${pravniForma}</p>

                `;

                modalBody.innerHTML = modalContent;
                modal.style.display = "block";

            })

            .catch(error => {
                console.error("Chyba při získávání dat:", error);
                alert("Při získávání dat došlo k chybě. Zkuste to prosím znovu později.");

            });
    }
});
