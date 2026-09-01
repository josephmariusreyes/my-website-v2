## Context

- Here in index-assets\index.js i have added keyTechUsed array

## Todo

- Below the project description, display there an inlined list of technology used, just keep the small font sample
Tech used: PHP, Wordpress, Angular

## Completed

### Summary of Changes

#### Technology Stack Display
- Added dynamic rendering of the `keyTechUsed` array from each project object
- Technologies are displayed below the project description in a small font size
- Format: "Tech used: PHP, Wordpress, Angular" 
- Uses the same `section-description` styling as the description with `text-xs` for smaller font
- Technologies are joined with commas using `project.keyTechUsed.join(', ')`

#### Implementation Details
- Modified the `renderProjects()` function in `index-assets/index.js`
- Added a new paragraph element between the description and "View Project" link
- The tech stack is displayed using the class `section-description text-xs` for consistent styling
- Bold "Tech used:" label followed by the comma-separated technology list
