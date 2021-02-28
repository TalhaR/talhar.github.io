import { faCuttlefish, faPython, faSwift, faJava, faJs, faReact, faBootstrap, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import { faTerminal, faDatabase } from '@fortawesome/free-solid-svg-icons';
import anilist from '../img/anilist.png'
import dwarves from '../img/dwarves.png'

export const projects = [
    {
        key: 1,
        title : "Kuro",
        img : anilist,
        desc : "iOS App to find & keep track of Animated Media",
        features : ["Swift"],
        link : "Kuro"
    },
    {
        key: 2,
        title : "Dwarves AI",
        img : dwarves,
        desc : "Console based simulation of dwarves surviving & gathering resources",
        features : ["C++"],
        link : "Dwarves-AI"
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
        key: 3,
        icon: faPython,
        name: "Python"
    },
    {
        key: 4,
        icon: faSwift,
        name: "Swift"
    },
    {
        key: 5,
        icon: faJs,
        name: "Javascript"
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
        icon: faReact,
        name: "React"
    },
    {
        key: 3,
        icon: faBootstrap,
        name: "Bootstrap"
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