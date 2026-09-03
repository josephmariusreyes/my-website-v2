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
    // {
    //     id: 4,
    //     title: 'Auction Center',
    //     thumbNailImg: 'site-images/auction-center.png',
    //     description: 'Is a platform within DealerCenter that allows automotive dealers to browse and purchase vehicles from multiple auction sources in one place',
    //     url: 'https://www.dealercenter.com/inventory-management/#im-auction-center',
    //     keyTechUsed: [
    //         'Angular',
    //         'C#',
    //         'ASP.NET'
    //     ],
    // },
    {
        id: 1,
        title: 'AddToQueue Backend API',
        thumbNailImg: 'site-images/addtoqueue-ap-screenshot.png',
        description: 'A personal project of mine, this is a backend API of an online queueing application, this projects demonstrate documenting an API using scribe.',
        url: '#',
        keyTechUsed: [
            'PHP',
            'Laravel',
            'Laravel Scribe'
        ],
    },
    {
        id: 5,
        title: 'DC Chat',
        thumbNailImg: 'site-images/mobile-dc-chat-resize.png',
        description: 'Is a messaging and communication tool built for automotive dealerships to interact with customers directly through their websites. It enables real-time conversations.',
        url: 'https://www.dealercenter.com/inventory-management/#im-auction-center',
        keyTechUsed: [
            'Angular',
            'C#',
            'ASP.NET'
        ],
    },
    {
        id: 2,
        title: 'North Hollywood Toyota',
        thumbNailImg: 'site-images/nht.png',
        description: 'North Hollywood Toyota dealership website, supporting vehicle listings, customer inquiries, and service scheduling.',
        url: 'https://www.toyotaofhollywood.com/',
        keyTechUsed: [
            'PHP',
            'Wordpress',
            'JQuery'
        ],
    },
    {
        id: 3,
        title: 'Dealer Website',
        thumbNailImg: 'site-images/dws.png',
        description: 'Is a platform that provides automotive dealerships with customizable websites designed to showcase vehicle inventory and capture customer leads.',
        url: 'https://www.dealercenter.com/dealer-websites/#dw-premium-pro',
        keyTechUsed: [
            'PHP',
            'Wordpress',
            'JQuery'
        ],
    },
];

function renderProjects() {
    const $container = $('.projects-list-container');
    $container.empty();

    projects.forEach((project) => {
        const techStack = project.keyTechUsed.join(' - ');
        const isUnavailable = project.url === '#';
        const targetAttr = isUnavailable ? '' : 'target="_blank" rel="noopener noreferrer"';

        const projectHTML = `
            <article class="project-item px-1" style="opacity: 1; transform: translateY(0);">
                <a href="${project.url}" ${targetAttr} class="project-card-link ${isUnavailable ? 'is-unavailable' : ''}" data-unavailable="${isUnavailable}" data-project-title="${project.title}" aria-label="Open ${project.title}">
                    <div class="project-card rounded border border-gray-200 bg-white shadow-soft">
                        <div class="project-thumb" style="background-image: url('${project.thumbNailImg}');"></div>
                        <div class="p-4">
                            <h3 class="text-sm font-bold">${project.title}</h3>
                            <p class="mt-2 section-description">
                                ${project.description}
                            </p>
                            <div class="project-tech-divider"></div>
                            <p class="project-tech-stack mt-3">
                                <strong>Tech Stack:</strong> ${techStack}
                            </p>
                        </div>
                    </div>
                </a>
            </article>
        `;
        $container.append(projectHTML);
    });

    // Projects are displayed by default, no animation needed
    // Re-observe newly added elements for other reveals only
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

    // Note: Projects are displayed by default without animation
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

    $('.projects-list-container').on('click', '.project-card-link[data-unavailable="true"]', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const projectTitle = $(this).data('projectTitle') || 'This project';
        $('#projectUnavailableTitle').text(projectTitle + ' is temporarily unavailable');

        const modal = new bootstrap.Modal(document.getElementById('projectUnavailableModal'));
        modal.show();
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
