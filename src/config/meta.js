import plan from '@assets/plan.png';
import design from '@assets/design.png';
import develop from '@assets/develop.png';
import optimize from '@assets/optimize.png';
import deploy from '@assets/deploy.png';
import monitor from '@assets/monitor.png';

export const process = [
    {
        title: "Plan",
        subtitle: "Discovery and Planning",
        media: plan,
        items: [
            "Understand the project requirements, goals, and target audience.",
            "Conduct research on competitors and industry trends.",
            "Define the project scope, timeline, and budget."
        ]
    },
    {
        title: "Design",
        subtitle: "Wireframing and Design",
        media: design,
        items: [
            "Create wireframes or mockups to visualize the layout and structure.",
            "Design the user interface, incorporating branding elements and visual aesthetics.",
            "Seek feedback and iterate on the design to refine the concept."
        ]
    },
    {
        title: "Develop",
        subtitle: "Development and Testing",
        media: develop,
        items: [
            "Convert design mockups into HTML, CSS, and JavaScript code.",
            "Implement responsive design principles to ensure compatibility across devices.",
            "Integrate interactive elements and functionalities as per requirements.",
            "Perform testing to identify and fix any bugs or issues."
        ]
    },
    {
        title: "Optimize",
        subtitle: "Optimization",
        media: optimize,
        items: [
            "Optimize assets, such as images and scripts, for faster loading times.",
            "Ensure cross-browser compatibility and adherence to web standards.",
            "Enhance accessibility features to accommodate users with disabilities."
        ]
    },
    {
        title: "Deploy",
        subtitle: "Deployment",
        media: deploy,
        items: [
            "Deploy the frontend code to a hosting environment or web server.",
            "Set up domain, SSL certificate, and other necessary configurations.",
            "Conduct final testing to confirm proper functionality in the production environment."
        ]
    },
    {
        title: "Monitor",
        subtitle: "Monitoring and Maintenance",
        media: monitor,
        items: [
            "Monitor website performance, security, and user feedback.",
            "Regularly update content and address any bugs or issues that arise.",
            "Stay informed about new technologies and trends to implement future enhancements."
        ]
    }
]