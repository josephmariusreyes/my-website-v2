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

const projects = [
    {
        id: 1,
        title: 'North Hollywood Toyota',
        thumbNailImg: 'site-images/nht.png',
        description: 'North Hollywood Toyota dealership website, supporting vehicle listings, customer inquiries, and service scheduling.',
        url: 'https://www.toyotaofhollywood.com/',
    },
    {
        id: 2,
        title: 'Dealer Center',
        thumbNailImg: 'site-images/dc-dashboard.png',
        description: 'Dealership management platform used by automotive dealers to manage inventory, sales, financing, and customer records.',
        url: 'https://www.dealercenter.com/crm/#crm-dashboard',
    },
    {
        id: 3,
        title: 'Dealer Website',
        thumbNailImg: 'site-images/dws.png',
        description: 'Is a platform that provides automotive dealerships with customizable websites designed to showcase vehicle inventory and capture customer leads.',
        url: 'https://www.dealercenter.com/dealer-websites/#dw-premium-pro',
    },
    {
        id: 4,
        title: 'Auction Center',
        thumbNailImg: 'site-images/auction-center.png',
        description: 'Is a platform within DealerCenter that allows automotive dealers to browse and purchase vehicles from multiple auction sources in one place',
        url: 'https://www.dealercenter.com/inventory-management/#im-auction-center',
    },
    {
        id: 5,
        title: 'DC Chat',
        thumbNailImg: 'site-images/mobile-dc-chat-resize.png',
        description: 'Is a messaging and communication tool built for automotive dealerships to interact with customers directly through their websites. It enables real-time conversations.',
        url: 'https://www.dealercenter.com/inventory-management/#im-auction-center',
    },
];

function renderProjects() {
    const $container = $('.projects-list-container');
    $container.empty();

    projects.forEach((project, index) => {
        const isRight = index % 2 === 0;
        const projectHTML = `
            <article class="project-item reveal px-1" style="opacity: 0; transform: translateY(28px);">
                <div class="project-card rounded border border-gray-200 bg-white shadow-soft">
                    <div class="project-thumb" style="background-image: url('${project.thumbNailImg}');"></div>
                    <div class="p-4">
                        <h3 class="text-sm font-bold">${project.title}</h3>
                        <p class="mt-2 section-description">
                            ${project.description}
                        </p>
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                            View Project →
                        </a>
                    </div>
                </div>
            </article>
        `;
        $container.append(projectHTML);
    });

    // Re-observe newly added elements
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

    $container.find('.project-item').each(function () {
        observer.observe(this);
    });
}

$(function () {
    $("#year").text(new Date().getFullYear());

    // Mobile menu toggle
    $("#mobileMenuButton").on("click", function () {
        const $menu = $("#mobileMenu");
        if ($menu.hasClass("is-open")) {
            $menu.removeClass("is-open");
            $(this).attr("aria-expanded", "false");
        } else {
            $menu.addClass("is-open");
            $(this).attr("aria-expanded", "true");
        }
    });

    $("#mobileMenuClose").on("click", function () {
        const $menu = $("#mobileMenu");
        $menu.removeClass("is-open");
        $("#mobileMenuButton").attr("aria-expanded", "false");
    });

    $(".mobile-nav-link").on("click", function () {
        const $menu = $("#mobileMenu");
        $menu.removeClass("is-open");
        $("#mobileMenuButton").attr("aria-expanded", "false");
    });

    // Close menu when clicking backdrop
    $("#mobileMenu").on("click", function (e) {
        if (e.target === this) {
            $(this).removeClass("is-open");
            $("#mobileMenuButton").attr("aria-expanded", "false");
        }
    });

    // Render projects
    renderProjects();

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
