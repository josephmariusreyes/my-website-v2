## Todos

1. Fix mobile menu upon clicking no menu is showing

2. Refactor applications and projects section, now instead of displaying a static list of projects I want you create a array in the index.js that will contain the projects

export const projects = [
  {
    id: 1,
    title: 'North Hollywood Toyota',
    thumbNailImg: 'nht.png'
    image: nhtImg,
    description: 'North Hollywood Toyota dealership website, supporting vehicle listings, customer inquiries, and service scheduling.',
    url: 'https://www.toyotaofhollywood.com/',
  },
  {
    id: 2,
    title: 'Dealer Center',
    thumbNailImg: 'dc-dashboard.png'
    image: dcDashboardImg,
    description: 'Dealership management platform used by automotive dealers to manage inventory, sales, financing, and customer records.',
    url: 'https://www.dealercenter.com/crm/#crm-dashboard',
  },
  {
    id: 3,
    title: 'Dealer Website',
    thumbNailImg: 'dws.png'
    image: dwsImg,
    description: 'Is a platform that provides automotive dealerships with customizable websites designed to showcase vehicle inventory and capture customer leads.',
    url: 'https://www.dealercenter.com/dealer-websites/#dw-premium-pro',
  },
  {
    id: 4,
    title: 'Auction Center',
    thumbNailImg: 'auction-center.png'
    image: auctionCenterImg,
    description: 'Is a platform within DealerCenter that allows automotive dealers to browse and purchase vehicles from multiple auction sources in one place',
    url: 'https://www.dealercenter.com/inventory-management/#im-auction-center',
  },
  {
    id: 5,
    title: 'DC Chat',
    thumbNailImg: 'mobile-dc-chat-resize.png'
    image: dcChatImg,
    description: 'Is a messaging and communication tool built for automotive dealerships to interact with customers directly through their websites. It enables real-time conversations.',
    url: 'https://www.dealercenter.com/inventory-management/#im-auction-center',
  },
]

here is the projects array that you may use, fix the image path for the thumbnailImg property

append the html to .projects-list-container

## Completed

### Summary of Changes

#### 1. Fixed Mobile Menu Issue
- Added mobile menu button click handler to toggle menu visibility
- Added close button handler to close the mobile menu
- Added mobile nav link click handlers to close menu after navigation
- Added backdrop click handler to close menu when clicking outside
- Mobile menu now properly shows/hides when clicking the hamburger button

#### 2. Refactored Projects Section
**index.js changes:**
- Created `projects` array with all 5 project objects containing:
  - id, title, thumbNailImg (with correct path `site-images/`), description, and url
  - Fixed image paths to point to `site-images/` directory
- Created `renderProjects()` function that:
  - Dynamically generates project HTML from the array
  - Uses actual thumbnail images instead of mock window placeholders
  - Includes "View Project" links for each project
  - Re-applies reveal animations to newly added elements
- Called `renderProjects()` on page initialization

**index.html changes:**
- Replaced all 4 static project articles with dynamic container
- Removed mock window placeholders and hard-coded project cards
- Projects are now loaded from JavaScript array on page load

### Technical Details
- Projects are exported from the projects array
- Each project card displays thumbnail image, title, description, and a link
- Reveal animations are maintained for smooth page load effects
- Mobile menu uses flexbox classes for toggle (hidden/flex)
- All functionality uses jQuery for consistency with existing code

