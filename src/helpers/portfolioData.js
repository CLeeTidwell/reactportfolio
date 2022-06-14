//add project on top for latest
import sproutspyv3 from '../images/projectsicon/sproutspy3.gif'
import sproutspyv2 from '../images/projectsicon/sproutspy2.gif'
import sproutspyv1 from '../images/projectsicon/sproutspy1.png'
import techblog from '../images/projectsicon/techblog.jpg'



//add project on top for latest

const portfolioData = [
  {
    image:  sproutspyv3,
    link: 'https://sprout-spy.herokuapp.com/',
    desc: 'Sprout Spy 3.0',
    summary: 'An app for beginner gardeners by gardener enthusiasts. It is a tool that allows users to track their plants and planting schedules by zone and by calendar. Visit the repo at github.com/got-git-group/SproutSpy-3.0',
    tech: 'React | Redux | Node | Express | MongoDB'
  },
  {
    image:  sproutspyv2,
    link: 'https://fast-cliffs-81659.herokuapp.com/',
    desc: 'Sprout Spy 2.0',
    summary: 'Our project, "Sprout Spy", is an application that will help new or future gardeners understand what kinds of seeds and cuttings can be planted in their local planting zone, as well as search for local public gardens for those who do not have planting space in their area. Our application will also display the current weather to plan your trip to your local garden accordingly. Visit the repo at https://github.com/got-git-group/SproutSpy-2.0',
    tech: 'Google Maps/Places API | Openweathermaps API | Node | Express | Azure | MySQL'
  },
  {
    image:  sproutspyv1,
    link: 'https://andyan7.github.io/got-gitProjOne/',
    desc: 'Sprout Spy 1.0',
    summary: 'A gardening app to learn what plants I can grow near me, to get instructions for growing those plants, and to find a community garden. Visit the repo at github.com/AndyAn7/got-gitProjOne',
    tech: 'Google Maps/Places API | Openweathermaps API | C0bra API | JQuery | Javascript | Github'
  },
  {
    image:  techblog,
    link: 'https://justanothertechblog.herokuapp.com/',
    desc: 'JustAnotherTechBlog',
    summary: 'a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well.',
    tech: 'Javascript | MySQL | Node | Express'
  },
]
  
export default portfolioData;