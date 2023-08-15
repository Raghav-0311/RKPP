import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
// import Work4 from "../../assets/work4.jpg";
// import Work5 from "../../assets/work5.jpg";

export const projectData = [
    {
        id: 1,
        image: Work1,
        title: 'Personal Portfolio',
        category: 'Frontend',
        tech: ["HTML", "CSS", "JavaScript"],
        codeLink: 'https://github.com/Raghav-0311/Portfolio-Andrew',
        demoLink: 'https://raghav-0311.github.io/Portfolio-Andrew/',
    },
    {
        id: 2,
        image: Work2,
        title: 'Home Budget',
        category: 'Frontend',
        tech: ["React", "React Router DOM"],
        codeLink: 'https://github.com/Raghav-0311/HomeBudget',
        demoLink: 'https://home-budget-tau.vercel.app/',
    },
    {
        id: 3,
        image: Work3,
        title: 'Auth Tester',
        category: 'Backend',
        tech: ["Node", "Express", "MongoDB"],
        codeLink: 'https://github.com/Raghav-0311/Auth-Tester',
        demoLink: 'https://auth-tester.onrender.com/',
    },
    // {
    //     id: 4,
    //     image: Work4,
    //     title: 'Service app',
    //     category: 'app',
    //     tech: ["React", "Tailwind"],
    //     codeLink: 'https://github.com',
    //     demoLink: 'https://github.com',
    // },
    // {
    //     id: 5,
    //     image: Work5,
    //     title: 'Web design2',
    //     category: 'web',
    //     tech: ["React", "Tailwind"],
    //     codeLink: 'https://github.com',
    //     demoLink: 'https://github.com',
    // },
];

export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Frontend',
    },
    {
        name: 'Backend',
    },
    {
        name: 'MERN Stack',
    },
];