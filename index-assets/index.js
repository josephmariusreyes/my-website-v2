tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: "#2563eb",
                ink: "#111827",
                muted: "#6b7280"
            },
            boxShadow: {
                soft: "0 2px 12px rgba(15, 23, 42, .08)"
            }
        }
    }
};

$(function () {
    $("#year").text(new Date().getFullYear());

    const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;

            const $element = $(entry.target);

            $element.stop(true, true).animate(
                {
                    opacity: 1
                },
                {
                    duration: 650,
                    easing: "swing",
                    step: function () {
                        const progress = parseFloat($element.css("opacity")) || 0;
                        const y = 28 * (1 - progress);
                        $element.css("transform", "translateY(" + y + "px)");
                    },
                    complete: function () {
                        $element.css("transform", "translateY(0)");
                    }
                }
            );

            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    $(".reveal").each(function () {
        observer.observe(this);
    });

    $(".experience-toggle").on("click", function () {
        const $button = $(this);
        const $article = $button.closest("article");
        const $details = $article.find(".experience-details");
        const isOpen = $button.attr("aria-expanded") === "true";

        if (!isOpen) {
            $details.stop(true, true).slideDown(350);
            $button.attr("aria-expanded", "true").addClass("is-open");
            $button.find(".experience-toggle-label").text("Hide");
        } else {
            $details.stop(true, true).slideUp(300);
            $button.attr("aria-expanded", "false").removeClass("is-open");
            $button.find(".experience-toggle-label").text("See More");
        }
    });

    function closeMobileMenu() {
        $("#mobileMenu").removeClass("is-open").attr("aria-hidden", "true");
        $("#mobileMenuButton").attr("aria-expanded", "false").attr("aria-label", "Open navigation menu");
        $("body").removeClass("overflow-hidden");
    }

    function openMobileMenu() {
        $("#mobileMenu").addClass("is-open").attr("aria-hidden", "false");
        $("#mobileMenuButton").attr("aria-expanded", "true").attr("aria-label", "Close navigation menu");
        $("body").addClass("overflow-hidden");
    }

    $("#mobileMenuButton").on("click", function () {
        $(this).attr("aria-expanded") === "true" ? closeMobileMenu() : openMobileMenu();
    });

    $("#mobileMenuClose").on("click", closeMobileMenu);

    $("#mobileMenu").on("click", function (e) {
        if (e.target === this) closeMobileMenu();
    });

    $(".mobile-nav-link").on("click", closeMobileMenu);

    $(document).on("keydown", function (e) {
        if (e.key === "Escape") closeMobileMenu();
    });

    $('a[href^="#"]').on("click", function (e) {
        const target = $(this).attr("href");
        if (target && target !== "#") {
            const $target = $(target);
            if ($target.length) {
                e.preventDefault();
                $("html, body").animate(
                    { scrollTop: $target.offset().top - 55 },
                    500
                );
            }
        }
    });
});
