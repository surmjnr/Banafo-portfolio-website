export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    longDescription: `
      Built with React and Node.js, this e-commerce platform features:
      - User authentication and authorization
      - Product catalog with search and filtering
      - Shopping cart functionality
      - Secure payment processing with Stripe
      - Order management system
      - Admin dashboard
    `,
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "web",
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    featured: true,
  },
  // Add more projects here
];

export const projectCategories = [
  {
    id: "all",
    label: "All Projects",
  },
  {
    id: "web",
    label: "Web Development",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
  },
  {
    id: "ui",
    label: "UI/UX Design",
  },
]; 