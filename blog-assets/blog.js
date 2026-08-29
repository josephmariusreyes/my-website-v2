tailwind.config = {
    theme: {
        extend: {
            colors: { brand: "#2563eb" },
            boxShadow: { soft: "0 2px 12px rgba(15, 23, 42, .08)" }
        }
    }
};

document.getElementById("year").textContent = new Date().getFullYear();
