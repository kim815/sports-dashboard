import Dodgers from '../logos/Dodgers.png';
import Barcelona from '../logos/Barcelona.png';
import ManUnited from '../logos/MUnited.png';
import Tampa from '../logos/Tampa.png'
import ArticleFootball1 from '../logos/articleFootball1.jpeg'
import ArticleFootball2 from '../logos/articleFootball2.png'
import ArticleBaseball1 from '../logos/articleBaseball1.png'
import ArticleBaseball2 from '../logos/articleBaseball2.png'
import TicketFootball from '../logos/TicketFootball.png'
import TicketBaseball from '../logos/TicketBaseball.png'
import ArticleFootball3 from '../logos/ArticleFootball3.png'
import ArticleBaseball3 from '../logos/ArticleBaseball3.png'
import LaLiga from  '../logos/LaLiga.png'
import Uefa from '../logos/Uefa.png'
import PremierLeague from '../logos/PremierLeague.png'
import AmericanLeague from '../logos/AmericanLeague.png'
import NationaLeague from '../logos/NationalLeague.png'
import CoastalLeague from '../logos/CoastalLeague.png'
import Juventus from '../logos/Juventus.png'
import Athletico from '../logos/AthleticoMadrid.png'
import Liverpool from '../logos/LiverpoolFC.png'
import Arsenal from '../logos/Arsenal.png'
import Viraleal from '../logos/Villareal.png'
import Real from '../logos/RealMadrid.png'



export const sportMatchData = [
    {
      id: '1',
      name: 'Football',
      sportEvent: [
        {
          id: '1',
          name: 'La Liga',
          eventSpecifics: 'Spanish La Liga',
          logo: [LaLiga],
          matches: [
            {
              id: 'LaLigaFootballMatchId1',
              minutesLeft: "48'",
              teamA: {
                name: "Barcelona",
                score: 2,
                logo: [Barcelona]
              },
              teamB: {
                name: "Real Madrid",
                score: 4,
                logo: [Real]
              },
              starClicked: false,
            },
            {
              id: 'LaLigaFootballMatchId2',
              minutesLeft: "56'",
              teamA: {
                name: "Athletico Madrid",
                score: 3,
                logo: [Athletico]
              },
              teamB: {
                name: "Villareal",
                score: 1,
                logo: [Viraleal]
              },
              starClicked: false
            }
  
          ]
        },
  
        {
          id: '2',
          name: 'Premier League',
          eventSpecifics: 'English',
          logo: [PremierLeague],
          matches: [
            {
              id: 'PremierLeagueFootballMatchId1',
              minutesLeft: "26'",
              teamA: {
                name: "Liverpool FC",
                score: 2,
                logo: [Liverpool]
              },
              teamB: {
                name: "M. United",
                score: 4,
                logo: [ManUnited]
              },
              starClicked: false
            },
            {
              id: 'PremierLeagueFootballMatchId2',
              minutesLeft: "39'",
              teamA: {
                name: "Juventus",
                score: 3,
                logo: [Juventus]
              },
              teamB: {
                name: "Arsenal",
                score: 1,
                logo: [Arsenal]
              },
              starClicked: false
            }
  
          ]
        }
  
      ],
    },
  
    {
      id: '2',
      name: 'Baseball',
      sportEvent: [
        {
          id: '3',
          name: 'American League',
          expanded: true,
          eventSpecifics: 'NYC Baseball',
          logo: [AmericanLeague],
          matches: [
            {
              id: 'BaseballMatchId1',
              minutesLeft: "48'",
              teamA: {
                name: "Chicago Clubs",
                score: 3,
                logo: [Barcelona]
              },
              teamB: {
                name: "Atlanta Braves",
                score: 4,
                logo: [Real]
  
              },
              starClicked: false
            },
            {
              id: 'BaseballMatchId2',
              minutesLeft: "56'",
              teamA: {
                name: "Houston Astros",
                score: 3,
                logo: [Juventus]
              },
              teamB: {
                name: "Detroit Tigers",
                score: 1,
                logo: [Athletico]
              },
              starClicked: false
            }
  
          ]
        },
  
        {
          id: '4',
          name: 'National League',
          expanded: true,
          eventSpecifics: 'Utah',
          logo: [NationaLeague],
          matches: [
            {
              id: 'PremierLeagueBaseballlMatchId1',
              minutesLeft: "26'",
              teamA: {
                name: "Chicago Cubs",
                score: 2,
                logo: [Liverpool]
              },
              teamB: {
                name: "NYC Yankees",
                score: 4,
                logo: [Arsenal]
              },
              starClicked: false
            },
            {
              id: 'PremierLeagueBaseballMatchId2',
              minutesLeft: "39'",
              teamA: {
                name: "Atlanta Braves",
                score: 3,
                logo: [Viraleal]
              },
              teamB: {
                name: "Detriot Tigers",
                score: 1,
                logo: [Athletico]
              },
              starClicked: false
            }
  
          ]
        }
  
      ]
    },
  ]
  
  export const liveMatches = [
    {
      id: '1',
      name: 'Football',
      teamA: {
        name: "Barcelona",
        score: 2,
        logo: [Barcelona]
      },
  
      teamB: {
        name: "M. United",
        score: 1,
        logo: [ManUnited]
      }
  
    },
    {
      id: '2',
      name: 'Baseball',
      teamA: {
        name: "Dodgers",
        score: 2,
        logo: [Dodgers]
      },
      teamB: {
        name: "Tampa Bay",
        score: 1,
        logo: [Tampa]
      }
    }
  ]
  
  export const latestArticles = [
    {
      id: '1',
      name: 'Football',
      articles: [
        {
          id: '1',
          title: 'Ben taking points',
          date: 'JULY 7, 2019, 10:40 AM',
          logo: [ArticleFootball1]
        },
        {
          id: '2',
          title: 'Ronaldo scores',
          date: 'JULY 7, 2020, 10:40 AM',
          logo: [ArticleFootball2]
        },
        {
          id: '3',
          title: "Luis Diaz's disallowed goal",
          date: 'JULY 26, 2020, 10:40 AM',
          logo: [ArticleFootball3]
        },
      ]
    },
    {
      id: '2',
      name: 'Baseball',
      articles: [
        {
          id: '1',
          title: 'Dodgers smash Tampa Bay',
          date: 'JULY 7, 2019, 10:40 AM',
          logo: [ArticleBaseball1]
        },
        {
          id: '2',
          title: 'Kelce retires soon',
          date: 'JUNE 16, 2020, 10:40 AM',
          logo: [ArticleBaseball2]
        },
        {
          id: '3',
          title: "MLB playoff guide",
          date: 'JUNE 15, 2020, 10:40 AM',
          logo: [ArticleBaseball3]
        }
      ]
    }
  
  ]
  
export const tickets = [
    {
      id: '1',
      name: 'Football',
      ticket: {
        teamA: "Manchester City",
        teamB: "Arsenal",
        date: "10 January, 2023",
        stadium: "Old Trafford Stadium",
        logo: [TicketFootball]
      }
    },
    {
      id: '2',
      name: 'Baseball',
      ticket: {
        teamA: "Akon Greys",
        teamB: "BAG",
        date: "14 January, 2023",
        stadium: "New Trafford Stadium",
        logo: [TicketBaseball]
      }
    }
  ]

  export const sportsLabel = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  export const sportsData = [
    26, 27, 29, 36, 36, 38, 37, 35, 39, 36, 37, 35, 43, 37, 35, 38, 44, 43, 40,
    46, 50, 47, 42, 50,
  ];

  export const sports = [
    {
      id: "1",
      text: "Football",
      expanded: true,
      leagueNames: [
        { name: "La Liga", logo: [LaLiga] },
        { name: "Premier League", logo: [PremierLeague] },
        { name: "UEFA", logo: [Uefa] },
      ],
    },
    {
      id: "2",
      text: "Baseball",
      expanded: false,
      leagueNames: [
        { name: "National League", logo: [NationaLeague] },
        { name: "American League", logo: [AmericanLeague] },
        { name: "Coastal League", logo: [CoastalLeague] },
      ],
    },
    { id: "3", text: "Volleyball", expanded: false },
    { id: "4", text: "Basketball", expanded: false },
  ];