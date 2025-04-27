import reactLogo from "../assets/courses/react.svg";
import jsLogo from "../assets/courses/js.svg";
import nextLogo from "../assets/courses/next.svg";
import figmaLogo from "../assets/courses/figma.svg";
import psLogo from "../assets/courses/ps.svg";
import cloudLogo from "../assets/courses/cloud.svg";

const coursesData = [
	{
		title: "Frontend",
		title2: "Development",
		slug: "frontend-development",
		description:
			"Kickstart your journey as a Front-End Dev today. Master modern tools like React, Next.js, and Firebase to craft exceptional web experiences.",
		fullDescription:
			"Master the art of creating beautiful, responsive, and interactive web interfaces. Our Frontend Development course equips you with essential skills in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Firebase to build engaging user experiences that stand out in today's digital landscape.",
		duration: "3 Months | 2 days weekly",
		level: "Beginner",
		img: reactLogo,
		cost: "$250 (Flexible Payment)",
		projects: "3 Portfolio Projects",
		schedule: "Mondays, and Fridays",
		prerequisites: [
			"A Laptop (8GB RAM, 256GB SSD recommended)",
			"Basic computer literacy",
			"Willingness to learn",
		],
		aboutContent:
			"Frontend development is the art of creating the visible and interactive parts of websites and applications that users directly engage with. This comprehensive course covers HTML, CSS, JavaScript, TypeScript, React, Next.js, and Firebase integration. You'll learn to build responsive layouts, implement user interactions, and create dynamic web applications while mastering modern development workflows with Git and deployment strategies.",
		benefits: [
			"Comprehensive curriculum covering modern frontend technologies and frameworks",
			"Learn Next.js for server-side rendering and static site generation",
			"Master Firebase for authentication, databases, and serverless functions",
			"Develop professional Git workflows and DevOps fundamentals",
			"Create a portfolio of production-ready web applications",
		],
		modules: [
			{
				title: "Web Development Fundamentals",
				topics: [
					{ name: "Introduction to Modern Web Development and HTML5", task: "Assignment" },
					{ name: "Creating Stunning Web Pages with CSS3", task: "Assignment" },
					{ name: "Advanced CSS - Building Responsive and Adaptive Layouts", task: "Capstone Project" },
					{
						name: "Modern CSS Frameworks - Harnessing Tailwind CSS for Rapid Development",
						task: "Capstone Project",
					},
				],
			},
			{
				title: "JavaScript, TypeScript and React",
				topics: [
					{ name: "JavaScript Fundamentals and Interactive DOM Manipulation", task: "Assignment" },
					{
						name: "Working with JavaScript Objects, Arrays and Modern ES6+ Features",
						task: "Capstone Project",
					},
					{ name: "Introduction to TypeScript - Adding Type Safety to Your Code", task: "Assignment" },
					{ name: "React Fundamentals - Components, Props and Advanced Hooks", task: "Capstone Project" },
				],
			},
			{
				title: "Advanced Frontend Frameworks and Integration",
				topics: [
					{ name: "Next.js Fundamentals - SSR, SSG, and ISR", task: "Assignment" },
					{ name: "Building Full-Featured Applications with Next.js", task: "Capstone Project" },
					{ name: "Firebase Integration - Authentication, Firestore, and Cloud Functions", task: "Project" },
					{ name: "Git Workflows, CI/CD, and Deployment Strategies", task: "Final Project" },
				],
			},
		],
	},
	{
		title: "Backend",
		title2: "Development",
		slug: "backend-development",
		description:
			"Build robust, scalable server-side applications with Node.js, Express, TypeScript, and MongoDB. Master DevOps and cloud engineering fundamentals.",
		fullDescription:
			"Learn to build the backbone of modern web applications with our Backend Development course. Master server-side programming with TypeScript, RESTful API design, data validation with Zod, MongoDB, cloud deployment, and DevOps practices to create powerful, scalable web services that form the foundation of today's digital experiences.",
		duration: "3 Months | 2 days weekly",
		level: "Intermediate",
		img: jsLogo,
		cost: "$300 (Flexible Payment)",
		projects: "3 Server Applications",
		schedule: "Mondays, and Fridays",
		prerequisites: [
			"A Laptop (8GB RAM, 256GB SSD recommended)",
			"Basic programming knowledge (helpful but not required)",
			"Willingness to solve complex problems",
		],
		aboutContent:
			"Backend development focuses on server-side logic, databases, and application architecture. In this course, you'll learn to build robust APIs with Node.js and Express, add type safety with TypeScript, validate data with Zod, manage information with MongoDB, implement authentication systems, and deploy scalable web services. You'll also master Git version control, cloud engineering fundamentals, and DevOps practices to create efficient, scalable backend systems.",
		benefits: [
			"Master server-side programming with Node.js, Express, and TypeScript",
			"Learn MongoDB database design, querying, and optimization",
			"Build secure REST APIs with proper validation using Zod",
			"Deploy applications to cloud platforms with CI/CD pipelines",
			"Understand system architecture and DevOps best practices",
		],
		modules: [
			{
				title: "Modern Server-Side Programming",
				topics: [
					{ name: "Introduction to Backend Development with Node.js", task: "Assignment" },
					{ name: "Building APIs with Express.js and TypeScript", task: "Assignment" },
					{ name: "RESTful API Design Principles and Best Practices", task: "Project" },
					{ name: "Middleware Architecture and Advanced Routing", task: "Project" },
				],
			},
			{
				title: "Data Management and System Architecture",
				topics: [
					{ name: "MongoDB Fundamentals and Schema Design", task: "Assignment" },
					{ name: "Data Modeling and CRUD Operations with Mongoose", task: "Project" },
					{ name: "Input Validation and Type Safety with Zod", task: "Assignment" },
					{ name: "System Architecture and Microservices Fundamentals", task: "Project" },
				],
			},
			{
				title: "DevOps and Cloud Engineering",
				topics: [
					{ name: "Git Version Control and Collaborative Development", task: "Assignment" },
					{ name: "Containerization with Docker and Orchestration with Kubernetes", task: "Project" },
					{ name: "CI/CD Pipelines and Automated Testing", task: "Project" },
					{ name: "Cloud Deployment and Infrastructure as Code", task: "Final Project" },
				],
			},
		],
	},
	{
		title: "Full Stack",
		title2: "Development",
		slug: "fullstack-development",
		description:
			"Master both client and server technologies to build complete web applications with React, Next.js, Node.js, cloud services, DevOps, and Web3 fundamentals.",
		fullDescription:
			"Become a complete web developer with our comprehensive Full Stack Development program. Master both frontend and backend technologies to build end-to-end web applications from database design to responsive user interfaces using modern frameworks, cloud services, and emerging Web3 technologies.",
		duration: "6 Months | 4 days weekly",
		level: "Beginner",
		img: nextLogo,
		cost: "$500 (Flexible Payment)",
		projects: "3 Complete Web Applications",
		schedule: "Mondays, Tuesdays, Thursday's and Fridays",
		prerequisites: [
			"A Laptop (8GB RAM, 256GB SSD recommended)",
			"Little or no previous coding experience",
			"Willingness to learn",
		],
		aboutContent:
			"Full-stack development involves creating web applications that seamlessly combine both client-side (frontend) and server-side (backend) elements. In this comprehensive course, you'll explore the full spectrum of modern web development, gaining expertise in crafting engaging user interfaces with React and Next.js while building robust backend systems with Node.js and cloud services. You'll learn system architecture, DevOps practices, automation techniques, and get an introduction to Web3 development.",
		benefits: [
			"Comprehensive curriculum covering frontend, backend, DevOps, and emerging technologies",
			"Build with industry-standard tools like React, Next.js, Node.js, and cloud services",
			"Master Git workflows, CI/CD, and automated deployment pipelines",
			"Understand system architecture, scalability, and cloud engineering principles",
			"Get introduced to Web3 development with blockchain and smart contracts",
		],
		modules: [
			{
				title: "Frontend Development",
				topics: [
					{ name: "HTML5, CSS3, and Modern Web Standards", task: "Assignment" },
					{ name: "JavaScript Core Concepts and DOM Manipulation", task: "Assignment" },
					{ name: "TypeScript Fundamentals for Type-Safe Applications", task: "Capstone Project" },
					{ name: "React Component Architecture and State Management", task: "Capstone Project" },
					{ name: "Next.js Framework - SSR, SSG, and Data Fetching", task: "Capstone Project" },
					{ name: "Building Full-Featured Applications with Next.js", task: "Capstone Project" },
				],
			},
			{
				title: "Backend Development",
				topics: [
					{ name: "Node.js and Express Fundamentals", task: "Assignment" },
					{ name: "RESTful API Design and Implementation", task: "Assignment" },
					{ name: "MongoDB Database Design and Operations", task: "Capstone Project" },
					{ name: "Authentication, Authorization, and Security Best Practices", task: "Capstone Project" },
					{ name: "Serverless Functions and BaaS Integration", task: "Capstone Project" },
					{ name: "API Testing and Documentation", task: "Capstone Project" },
				],
			},
			{
				title: "DevOps, Cloud Engineering, and Emerging Technologies",
				topics: [
					{ name: "Git Version Control and Collaborative Development", task: "Assignment" },
					{ name: "CI/CD Pipelines and Automated Testing", task: "Assignment" },
					{ name: "Cloud Deployment and Infrastructure as Code", task: "Capstone Project" },
					{ name: "System Architecture and Microservices", task: "Capstone Project" },
					{ name: "Web3 Fundamentals and Blockchain Integration", task: "Capstone Project" },
					{
						name: "Final Project - Building a Full Stack Application with Modern Technologies",
						task: "Final Project",
					},
				],
			},
		],
	},
	{
		title: "UI/UX",
		title2: "Design",
		slug: "ui-ux-design",
		description:
			"Create intuitive, beautiful digital experiences that users love. Master the principles of user-centered design across various products and industries.",
		fullDescription:
			"Learn to create intuitive, beautiful, and effective digital experiences with our UI/UX Design course. Master the principles of user-centered design, visual communication, and usability testing to build interfaces that delight users and solve real problems.",
		duration: "3 Months | 2 days weekly",
		level: "Beginner",
		img: figmaLogo,
		cost: "$130 (Flexible Payment)",
		projects: "4 Design Projects",
		schedule: "Tuesdays, and Fridays",
		prerequisites: [
			"A Laptop (8GB RAM recommended)",
			"No prior design experience required",
			"Interest in visual design and user experience",
		],
		aboutContent:
			"UI/UX Design focuses on creating meaningful and relevant experiences for users. This course covers the entire design process from research and wireframing to high-fidelity prototypes and user testing. You'll learn to create intuitive, beautiful interfaces that solve real user problems while mastering industry-standard tools like Figma and building design systems that scale.",
		benefits: [
			"Master the principles of user-centered design and design thinking",
			"Become proficient with industry-standard tools like Figma",
			"Develop skills in user research, personas, and usability testing",
			"Create comprehensive design systems and component libraries",
			"Build a professional portfolio showcasing your design process and solutions",
		],
		modules: [
			{
				title: "Design Fundamentals",
				topics: [
					{ name: "Introduction to Modern UI/UX Design Principles", task: "Assignment" },
					{ name: "The Design Thinking Process and User-Centered Design", task: "Assignment" },
					{ name: "Visual Hierarchy and Composition", task: "Project" },
					{ name: "Color Theory, Typography, and Design Systems", task: "Project" },
				],
			},
			{
				title: "UI Design and Tools",
				topics: [
					{ name: "Mastering Figma for Modern UI Design", task: "Assignment" },
					{ name: "Creating Wireframes and Low-Fidelity Prototypes", task: "Project" },
					{ name: "Building Scalable Component Libraries and Design Systems", task: "Project" },
					{ name: "Responsive and Adaptive Design Across Devices", task: "Project" },
				],
			},
			{
				title: "UX Process and Prototyping",
				topics: [
					{ name: "User Research Methods and Persona Development", task: "Assignment" },
					{ name: "Information Architecture and User Flows", task: "Project" },
					{ name: "Interactive Prototyping, Animations, and Micro-interactions", task: "Project" },
					{ name: "Capstone Project - End-to-End Product Design", task: "Final Project" },
				],
			},
		],
	},
	{
		title: "Graphic",
		title2: "Design",
		slug: "graphic-design",
		description:
			"Unlock your creative potential and learn how to bring ideas to life through compelling visual design for both digital and print media.",
		fullDescription:
			"Develop the skills to create stunning visual content for print and digital media. Our Graphic Design course covers fundamental design principles, industry-standard software, and practical techniques for effective visual communication in today's design landscape.",
		duration: "3 Months | 2 days weekly",
		level: "Beginner",
		img: psLogo,
		cost: "$130 (Flexible Payment)",
		projects: "5 Design Projects",
		schedule: "Mondays, and Tuesdays",
		prerequisites: [
			"A Laptop (8GB RAM recommended)",
			"No prior design experience required",
			"Interest in visual communication and creativity",
		],
		aboutContent:
			"Graphic Design combines art and technology to communicate ideas through compelling visuals and layouts. This course will teach you the fundamental principles of design, typography, color theory, and composition. You'll master industry-standard tools like Adobe Photoshop and Illustrator to create impactful visual content for various media and platforms, preparing you for a diverse range of design opportunities.",
		benefits: [
			"Learn essential graphic design principles and creative techniques",
			"Master industry-standard tools including Adobe Creative Suite",
			"Develop skills in branding, typography, and layout design",
			"Create professional print and digital media for various platforms",
			"Build a diverse portfolio showcasing your unique design style",
		],
		modules: [
			{
				title: "Design Fundamentals",
				topics: [
					{ name: "Introduction to Graphic Design Principles and Visual Communication", task: "Assignment" },
					{ name: "Typography Fundamentals and Expressive Text Design", task: "Assignment" },
					{ name: "Color Theory and Psychology in Design", task: "Project" },
					{ name: "Composition, Balance, and Visual Hierarchy", task: "Project" },
				],
			},
			{
				title: "Digital Design Tools",
				topics: [
					{ name: "Adobe Photoshop Essentials for Designers", task: "Assignment" },
					{ name: "Advanced Photo Editing and Digital Manipulation", task: "Project" },
					{ name: "Vector Graphics with Adobe Illustrator", task: "Project" },
					{ name: "Creating Custom Illustrations and Graphics", task: "Project" },
				],
			},
			{
				title: "Applied Graphic Design",
				topics: [
					{ name: "Brand Identity Design and Visual Systems", task: "Assignment" },
					{ name: "Print Design, Layout, and Production Techniques", task: "Project" },
					{ name: "Digital Media, Social Graphics, and Web Assets", task: "Project" },
					{ name: "Professional Portfolio Development and Presentation", task: "Final Project" },
				],
			},
		],
	},
	{
    title: "Cloud",
    title2: "Fundamentals",
    slug: "cloud-fundamentals",
    description:
      "Master cloud infrastructure and DevOps practices. Learn AWS, Azure, containerization, CI/CD pipelines, and infrastructure as code to build scalable, resilient systems.",
    fullDescription:
      "Become proficient in designing, implementing, and managing cloud-based systems with our comprehensive Cloud Fundamentals course. Learn to architect scalable infrastructure on major cloud platforms, implement containerization, build automated CI/CD pipelines, and employ Infrastructure as Code practices for modern application deployment.",
    duration: "3 Months | 2 days weekly",
    level: "Intermediate",
    img: cloudLogo,
    cost: "$200 (Flexible Payment)",
    projects: "3 Cloud Infrastructure Projects",
    schedule: "Tuesdays and Wednesdays",
    prerequisites: [
      "A Laptop (8GB RAM, 256GB SSD recommended)",
      "Basic understanding of networking concepts",
      "Familiarity with command line interfaces",
    ],
    aboutContent:
      "Cloud Fundamentals focuses on essential infrastructure management, automation, and DevOps practices to build and maintain scalable cloud-based systems. In this course, you'll learn to architect solutions on major cloud platforms, implement containerization with Docker and Kubernetes, design CI/CD pipelines, and utilize Infrastructure as Code tools like Terraform. You'll master monitoring, security best practices, and cost optimization strategies to create efficient, reliable cloud systems.",
    benefits: [
      "Gain hands-on experience with AWS, Azure, and Google Cloud Platform",
      "Master containerization and orchestration with Docker and Kubernetes",
      "Build automated CI/CD pipelines for continuous deployment",
      "Implement Infrastructure as Code using Terraform and CloudFormation",
      "Learn cloud security, compliance, and cost optimization strategies",
    ],
    modules: [
      {
        title: "Cloud Platforms and Infrastructure",
        topics: [
          { name: "Introduction to Cloud Computing and Service Models", task: "Assignment" },
          { name: "AWS Core Services - EC2, S3, RDS, and IAM", task: "Assignment" },
          { name: "Virtual Networks, Load Balancing, and Auto-scaling", task: "Project" },
          { name: "Multi-cloud Strategies and Azure/GCP Fundamentals", task: "Project" },
        ],
      },
      {
        title: "Containerization and Orchestration",
        topics: [
          { name: "Docker Fundamentals and Container Management", task: "Assignment" },
          { name: "Kubernetes Architecture and Cluster Deployment", task: "Project" },
          { name: "Container Security and Resource Management", task: "Assignment" },
          { name: "Implementing Microservices with Containers", task: "Project" },
        ],
      },
      {
        title: "DevOps and Infrastructure Automation",
        topics: [
          { name: "Infrastructure as Code with Terraform", task: "Assignment" },
          { name: "CI/CD Pipeline Design and Implementation", task: "Project" },
          { name: "Monitoring, Logging, and Observability in the Cloud", task: "Project" },
          { name: "Cloud Security, Compliance, and Cost Optimization", task: "Final Project" },
        ],
      },
    ],
  }
];

export default coursesData;
