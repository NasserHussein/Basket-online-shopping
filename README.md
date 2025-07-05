# E-commerce Website Documentation

---

This documentation provides an overview of the e-commerce website developed for our workshop, outlining its features, technologies used, and team contributions.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Redux Toolkit:** The official, opinionated, battery-included toolset for efficient Redux development.
* **React Redux:** Official React bindings for Redux.
* **React Query:** Powerful asynchronous state management for React.
* **Axios:** Promise-based HTTP client for the browser and Node.js.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

---

## Team Members and Contributions

Our team collaborated effectively to bring this e-commerce platform to life, with each member taking ownership of key functionalities.

### Eng. Nasser Hussein (Team Leader & Code Reviewer)

* **Authentication:**
    * Protected Routes implementation.
    * Login functionality.
    * Signup functionality.
    * Forget Password functionality.
* **Core Features:**
    * Pagination.
    * Add, Remove, Delete, Increase, Decrease item functionalities within the Redux Toolkit (cart slice).
    * Dispatching and integrating all Redux Toolkit slices throughout the application.
* **User Interface (UI):** 
    * `<Navbar />` Component
    * `<Login />` Component
    * `<Signup />` Component
    * `<Forget Password />` Component
* **Checkout & Payments:** Stripe payment integration

### Eng. Antwan Nabil

* **Filtering & Product Display:**
    * Filter by Category.
    * **Shop, Fashion, Electronics pages** : dynamic segment slug handling (`[:type]`) to render different products based on categories, including scenarios for empty and wrong categories.
* **Core Features:**
    * Add, Remove, Delete, Increase, Decrease item functionalities within the Redux Toolkit cart slice (collaboration with *Eng. Nasser Hussein*).
    * React Query implementation and management for the whole application.
    * `<Sidebae />`: Renders all category data with appropriate styling lists with their images, and interactive UI indicating the current category for an enhanced user experience.
* **User Interface (UI):**
    * `<Sidebar />` Component
    * `<Button />` Reusable Component
    * `<Grid />` Reusable Component
    * `<Card />` Reusable Component
    * `<Checkout />` Reusable Component

### Eng. Mohamed Habib

* **Core Features:**
    * Wishlist Redux Toolkit slice.
    * All Orders query.
* **User Interface (UI)**:
    * `<ProductDetails />` Component
    * `<About Us />` Component
    * `<Blog />` Component
    * `<Contact Us />` Component
    * `<Wishlist />` Page Component
    * `<Orders />` Component
    * `<Footer />` Component

## Features Overview

This section details the main features implemented in the e-commerce website.

### Authentication

Users can securely log in, sign up for new accounts, and reset their passwords. Protected routes ensure that only authenticated users can access certain parts of the application.

### Product Filtering and Display

Users can filter products by category, making it easy to navigate through various product types. Dedicated pages for "Shop," "Fashion," and "Electronics" dynamically display products relevant to their respective categories, with robust handling for scenarios where a category might be empty or invalid.

### Cart Management

A comprehensive cart system, powered by Redux Toolkit, allows users to add, remove, delete, increase, and decrease product quantities in their shopping cart seamlessly.

### Wishlist Functionality

Users can add products to their personal wishlist, enabling them to save items for future consideration.

### Order Management

Users can view a history of all their past orders through a dedicated "All Orders" section.

### Pages and Components

The website is composed of several key pages and reusable components designed for a consistent and intuitive user experience.

* **Home Page:** Features a dynamic sidebar displaying categories with images and an interactive UI.
* **Product Details Page:** Provides detailed information about individual products.
* **Login, Signup, Forget Password Pages:** Dedicated UIs for authentication flows.
* **About Us, Blog, Contact Us Pages:** Informational pages for users.
* **Wishlist Page:** Displays all items added to the user's wishlist.
* **Orders Page:** Shows the user's order history.
* **Checkout Page:** Facilitates the purchase process, including payment integration.
* **Reusable Components:**
    * `<Button />`: For various interactive elements.
    * `<Grid />`: For flexible layout arrangements.
    * `<Card />`: For displaying product information consistently.

### Data Management

* **Redux Toolkit Slices:** All application state is managed efficiently using Redux Toolkit, ensuring predictable state updates and easy debugging.
* **React Query:** Asynchronous data fetching and caching are handled by React Query, providing a smooth and performant user experience by minimizing unnecessary network requests and managing data synchronization.
