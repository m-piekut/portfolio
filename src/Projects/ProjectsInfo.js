import este from './images/este.png'
import budget from './images/budget.png'
import foodie from './images/Foodie.png'
import weather from './images/weather.png'
import stoper from './images/stoper.png'
const js = "fab fa-js"
const sass = "fab fa-sass"
const html = "fab fa-html5"
const react = "fab fa-react"
const css = "fab fa-css3-alt"



const ProjectsInfo = {
    "PL":[
        {
            id:3,
            name: "Foodie",
            info:  "Polega na tworzeniu uczt w danym lokalu. Można rejstrować użytkowników zarządać swoim profilem oraz dodawać do znajomych innych urzytkowaników. Do rozwiązań backendowych wykorzystałem firebase. Frontend zrobiony w React.",
            image: foodie,
            live: "https://m-piekut.github.io/foodie/#/",
            code: "https://github.com/m-piekut/foodie",
            icons:[
                {
                id:1,
                name: "react",
                code: react
                },
                {
                id:2,
                name: "sass",
                code: "fab fa-sass"
                },
               
            ]
        },
        {
        id:1,
        name: "Este-materace",
        info: "Strona wykonana na zlecenie lokalnej firmy zajmującej się produkcją i sprzedażą materacy",
        image: este,
        live: "https://este-materace.pl",
        code: "https://github.com/m-piekut/Materace",
        icons:[
            {
            id:1,
            name: "js",
            code: js
            },
            {
            id:2,
            name: "sass",
            code: sass
            },
            {
            id:3,
            name: "html",
            code: html
            }
        ]
    },
    {
        id:2,
        name: "Budget App",
        info: "Aplikacja do zarządzania wydatkami. Podzielona na sekcje. Do wizualizacji wykorzystałem google charts",
        image: budget,
        live: "https://m-piekut.github.io/budget-app/",
        code: "https://github.com/m-piekut/budget-app",
        icons:[
            {
            id:1,
            name: "js",
            code: js
            },
            {
            id:2,
            name: "sass",
            code: sass
            },
            {
            id:3,
            name: "html",
            code: html
            }
        ]
    },
    {
        id:4,
        name: "Aplikacja pogodwa",
        info: "Aplikacja pogodowa. Wykorzystanie REST API.",
        image: weather,
        live: "https://m-piekut.github.io/weatherapp/",
        code: "https://github.com/m-piekut/weatherapp",
        icons:[
            {
            id:1,
            name: "js",
            code: js
            },
            {
            id:2,
            name: "sass",
            code: sass
            },
            {
            id:3,
            name: "html",
            code: html
            }
        ]
    },
    {
        id:5,
        name: "Stoper",
        info: "Stoper z funkcja zapisywania czasów oraz 3 trybami kolorów.",
        image: stoper,
        live: "https://m-piekut.github.io/stoper/",
        code: "https://github.com/m-piekut/stoper",
        icons:[
            {
            id:1,
            name: "js",
            code: js
            },
            {
            id:2,
            name: "sass",
            code: sass
            },
            {
            id:3,
            name: "html",
            code: html
            }
        ]
    },
    
]
}
 
export default ProjectsInfo;