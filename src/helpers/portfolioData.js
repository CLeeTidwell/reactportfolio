//add project on top for latest
import sproutspyv3 from '../images/projectsicon/sproutspy3.gif'
import sproutspyv2 from '../images/projectsicon/sproutspy2.gif'
import sproutspyv1 from '../images/projectsicon/sproutspy1.png'
import techblog from '../images/projectsicon/techblog.jpg'
import weathermaps from '../images/projectsicon/weathermaps.gif'
import dailyplanner from '../images/projectsicon/DailyPlanner.gif'



//add project on top for latest

const portfolioData = [
  {
    image:  sproutspyv3,
    link: 'https://sprout-spy.herokuapp.com/',
    desc: 'Sprout Spy 3.0',
    repo: 'https://github.com/got-git-group/SproutSpy-3.0',
    summary: 'An app for beginner gardeners by gardener enthusiasts. It is a tool that allows users to track their plants and planting schedules by zone and by calendar.',
    tech: 'React | Redux | Node | Express | MongoDB'
  },
  {
    image:  sproutspyv2,
    link: 'https://fast-cliffs-81659.herokuapp.com/',
    repo: 'https://github.com/got-git-group/SproutSpy-2.0',
    desc: 'Sprout Spy 2.0',
    summary: 'Our project, "Sprout Spy", is an application that will help new or future gardeners understand what kinds of seeds and cuttings can be planted in their local planting zone, as well as search for local public gardens for those who do not have planting space in their area. Our application will also display the current weather to plan your trip to your local garden accordingly.',
    tech: 'Google Maps/Places API | Openweathermaps API | Node | Express | Azure | MySQL'
  },
  {
    image:  sproutspyv1,
    link: 'https://andyan7.github.io/got-gitProjOne/',
    repo: 'https://github.com/AndyAn7/got-gitProjOne',
    desc: 'Sprout Spy 1.0',
    summary: 'A gardening app to learn what plants I can grow near me, to get instructions for growing those plants, and to find a community garden.',
    tech: 'Google Maps/Places API | Openweathermaps API | C0bra API | JQuery | Javascript | Github'
  },
  {
    image:  techblog,
    link: 'https://justanothertechblog.herokuapp.com/',
    repo:'https://github.com/CLeeTidwell/Justanothertechblog',
    desc: 'JustAnotherTechBlog',
    summary: 'a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well.',
    tech: 'Javascript | MySQL | Node | Express'
  },
  {
    image:  weathermaps,
    link: 'https://cleetidwell.github.io/OpenweatherAPI/',
    repo:'https://github.com/CLeeTidwell/OpenweatherAPI',
    desc: 'Openweathermaps API',
    summary: 'An app designed to help users find the weather in their area, as well as other places to plan trips accordingly.',
    tech: 'Javascript | Bootstrap | Jquery | Moment.js | Openweathermaps API'
  },
  {
    image:  dailyplanner,
    link: 'https://cleetidwell.github.io/Dailyplanner/',
    repo:'https://github.com/CLeeTidwell/Dailyplanner',
    desc: 'A 9-5 daily planner app',
    summary: 'An app designed for the busy employee with a hectic schedule. The app will help the user plan their day accordingly.',
    tech: 'Javascript | Bootstrap | Jquery | Moment.js'
  },
]
  
export default portfolioData;