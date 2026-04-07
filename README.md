# Eden Academy - Academic Course Information Portal

An interactive and elegantly designed web portal for exploring academic courses, departments, and submitting enquiries for Eden Academy. This project showcases frontend web development principles using dynamic data loading and client-side validation.

## 🌟 Features

* **Dynamic Course Loading:** Parses and fetches course information directly from a structured `courses.xml` file using JavaScript, rendering it seamlessly on the front end.
* **Interactive Enquiry Form:** Includes robust client-side form validation to ensure data integrity before submission.
* **Thematic UI/UX:** Styled with custom CSS to reflect the prestigious, elegant branding of Eden Academy.
* **Modular Architecture:** Clean separation of concerns with distinct directories for styles, scripts, and media assets.

## 🛠️ Technologies Used

* **HTML5:** Semantic markup and page structure.
* **CSS3:** Custom styling, layout design, and responsive elements.
* **Vanilla JavaScript (ES6+):** DOM manipulation, event handling, and form validation.
* **XML:** Data storage and structuring for course information.

## 📂 File Structure

```text
eden-university/
├── assets/                 # Images, logos, and icons (e.g., Eden Crest, favicon)
├── scripts/                
│   ├── courses.js          # Logic for parsing courses.xml and rendering data
│   └── form_validation.js  # Client-side validation logic for the enquiry form
├── styles/                 
│   ├── global.css          # Site-wide base styles
│   ├── home.css            # Styles specific to the landing page
│   ├── courses.css         # Styles for the dynamic course listing
│   ├── department.css      # Styles for the department overview
│   └── enquiry.css         # Styles for the enquiry form
├── courses.xml             # XML database containing course details
├── index.html              # Main landing page
├── courses.html            # Course browsing page
├── departments.html        # Academic departments overview
└── enquiry.html            # Contact and enquiry submission page
