import { faCuttlefish, faPython, faSwift, faJava, faJs, faReact, faNodeJs, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import { faTerminal, faDatabase } from '@fortawesome/free-solid-svg-icons';
import anilist from '../img/anilist.png'
import dwarves from '../img/dwarves.png'
import sort from '../img/sort.png'
import poliatlas from '../img/poliatlas.png'

export const projects = [
    {
        key: 0,
        title : "Political Atlas",
        img : poliatlas,
        desc : "Web App to visualize emotions in Political speeches",
        features : ["React", "Javascript", "Python", "SQL"],
        link : "https://github.com/kkhan01/political-atlas",
        link2 : "https://kkhan01.github.io/political-atlas/"
    },
    {
        key: 1,
        title : "Sorting Visualizer",
        img : sort,
        desc : "Web App to visualize popular sorting algorithms",
        features : ["React", "Javascript"],
        link : "https://github.com/TalhaR/Sorting-visualizer",
        link2 : "https://talhar.github.io/Sorting-visualizer/"
    },
    {
        key: 2,
        title : "Kuro",
        img : anilist,
        desc : "iOS App to find & keep track of Japanese Animated Media",
        features : ["Swift"],
        link : "https://github.com/TalhaR/Kuro"
    },
    {
        key: 3,
        title : "Dwarves AI",
        img : dwarves,
        desc : "Console based simulation of dwarves surviving & gathering resources",
        features : ["C++"],
        link : "https://github.com/TalhaR/Dwarves-AI"
    },
]

export const languages = [
    {
        key: 1,
        icon: faCuttlefish,
        name: "C++"
    },
    {
        key: 2,
        icon: faJava,
        name: "Java"
    },
    {
        key: 5,
        icon: faJs,
        name: "Javascript"
    },
    {
        key: 3,
        icon: faPython,
        name: "Python"
    },
    {
        key: 4,
        icon: faSwift,
        name: "Swift"
    },
]

export const tools = [
    {
        key: 1,
        icon: faGitAlt,
        name: "Git"
    },
    {
        key: 2,
        icon: faNodeJs,
        name: "Node"
    },
    {
        key: 3,
        icon: faReact,
        name: "React"
    },
    {
        key: 4,
        icon: faTerminal,
        name: "Bash"
    },
    {
        key: 5,
        icon: faDatabase,
        name: "SQL"
    }
]