tailwind.config = {
    theme: {
        extend: {
            colors: { brand: "#2563eb" },
            boxShadow: { soft: "0 2px 12px rgba(15, 23, 42, .08)" }
        }
    }
};

const articles = [
    {
        date: "2026-08-20",
        label: "Software Development",
        title: "Building Better Applications with an AI-First Workflow",
        description: "How AI-assisted development can fit into everyday engineering without replacing good architecture, testing, debugging and critical thinking.",
        link: "https://example.com/article/ai-first-workflow"
    },
    {
        date: "2026-07-15",
        label: "Laravel",
        title: "Keeping Laravel Applications Maintainable as They Grow",
        description: "Practical thoughts on organizing application logic, APIs and database interactions so a Laravel codebase remains easier to understand and change.",
        link: "https://example.com/article/maintainable-laravel"
    },
    {
        date: "2026-06-08",
        label: "Angular",
        title: "Building Clean and Responsive Angular Interfaces",
        description: "A simple approach to component organization, reusable UI patterns and responsive layouts for Angular applications.",
        link: "https://example.com/article/angular-interfaces"
    },
    {
        date: "2026-05-12",
        label: "DevOps",
        title: "Why Docker Makes My Development Workflow Simpler",
        description: "Notes on using containers to keep development environments predictable, portable and easier to reproduce across machines.",
        link: "https://example.com/article/docker-workflow"
    },
    {
        date: "2026-04-03",
        label: "Career & Learning",
        title: "Learning New Technologies Without Losing Focus",
        description: "A practical way to explore new tools and frameworks while keeping the main goal in sight: building useful software and solving real problems.",
        link: "https://example.com/article/learning-technologies"
    }
];

$(function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    const $listing = $(".blog-listing-area");

    $.each(articles, function (_, article) {
        const articleMarkup = `
            <article class="article-card mt-5 rounded-lg border border-gray-200 bg-white p-5 shadow-soft sm:p-6">
                <time datetime="${article.date}" class="text-xs font-semibold text-blue-600">${new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                <span class="mx-2 text-gray-300">•</span>
                <span class="text-xs font-semibold text-gray-400">${article.label}</span>
                <h2 class="mt-3 text-lg font-bold sm:text-xl">${article.title}</h2>
                <p class="mt-2 text-sm leading-6 text-gray-500">${article.description}</p>
                <a href="${article.link}" target="_blank" rel="noopener"
                    class="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-800">Read Article →</a>
            </article>
        `;

        $listing.append(articleMarkup);
    });
});
