// TO-DO - Work in Progress to add TV networks + outcome + logic to not display games in the past
const schedule = [
  {
    dateOfMatch: "2023-09-10T13:00:00.000-03:00",
    opponent: "at Chicago Bears",
    outcome: "W",
    score: "38-20"
  },
  {
    dateOfMatch: "2023-09-17T14:00:00.000-03:00",
    opponent: "at Atlanta Falcons",
    outcome: "L",
    score: "24-25"
  },
  {
    dateOfMatch: "2023-09-24T14:00:00.000-03:00",
    opponent: "New Orleans Saints",
    outcome: "W",
    score: "17-18"
  },
  {
    dateOfMatch: "2023-09-28T21:15:00.000-03:00",
    opponent: "Detroit Lions",
    outcome: "L",
    score: "34-20"
  },
  {
    dateOfMatch: "2023-10-09T21:15:00.000-03:00",
    opponent: "at Oakland Raiders",
    outcome: "L",
    score: "13-17"
  },
  {
    dateOfMatch: "2023-10-22T17:25:00.000-03:00",
    opponent: "at Denver Broncos",
    outcome: "L",
    score: "17-19"
  },
  {
    dateOfMatch: "2023-10-29T14:00:00.000-03:00",
    opponent: "Minnesota Vikings",
    outcome: "L",
    score: "24-10"
  },
  {
    dateOfMatch: "2023-11-05T15:00:00.000-03:00",
    opponent: "Los Angeles Rams",
    outcome: "W",
    score: "3-20"
  },
  {
    dateOfMatch: "2023-11-12T15:00:00.000-03:00",
    opponent: "at Pittsburgh Steelers",
    outcome: "L",
    score: "19-23"
  },
  {
    dateOfMatch: "2023-11-19T15:00:00.000-03:00",
    opponent: "Los Angeles Chargers",
    outcome: "W",
    score: "20-23"
  },
  {
    dateOfMatch: "2023-11-23T14:30:00.000-03:00",
    opponent: "at Detroit Lions",
    outcome: "W",
    score: "29-22"
  },
  {
    dateOfMatch: "2023-12-03T22:20:00.000-03:00",
    opponent: "Kansas City Chiefs",
    outcome: "W",
    score: "19-27"
  },
  {
    dateOfMatch: "2023-12-11T22:15:00.000-03:00",
    opponent: "at New York Giants",
    outcome: "L",
    score: "22-24"
  },
  {
    dateOfMatch: "2023-12-17T15:00:00.000-03:00",
    opponent: "Tampa Bay Buccaneers",
    outcome: "L",
    score: "34-20"
  },
  {
    dateOfMatch: "2023-12-24T15:00:00.000-03:00",
    opponent: "at Carolina Panthers",
    outcome: "W",
    score: "33-30"
  },
  {
    dateOfMatch: "2023-12-31T22:20:00.000-03:00",
    opponent: "at Minnesota Vikings",
    outcome: "W",
    score: "33-10"
  },
  {
    dateOfMatch: "2024-01-07T18:25:00.000-03:00",
    opponent: "Chicago Bears",
    outcome: "W",
    score: "9-17"
  },
  {
    dateOfMatch: "2024-01-14T18:30:00.000-03:00",
    opponent: "at Dallas Cowboys",
    outcome: "W",
    score: "48-32"
  },
  {
    dateOfMatch: "2024-01-20T22:15:00.000-03:00",
    opponent: "at San Francisco",
    outcome: "L",
    score: "24-21"
  },
  {
    dateOfMatch: "2024-01-28T18:30:00.000-03:00",
    eventName: "Conference Champions",
  },
  {
    dateOfMatch: "2024-02-11T20:30:00.000-03:00",
    eventName: "Super Bowl LVIII",
  },
  {
    dateOfMatch: "2024-04-25T18:30:00.000-03:00",
    eventName: "2024 NFL Draft Day 1",
  },
  {
    dateOfMatch: "2024-04-26T18:30:00.000-03:00",
    eventName: "2024 NFL Draft Day 2",
  },
  {
    dateOfMatch: "2024-04-27T18:30:00.000-03:00",
    eventName: "2024 NFL Draft Day 3",
  },
  {
    dateOfMatch: "2024-05-03T18:30:00.000-03:00",
    eventName: "Rookie Mini Camp (Optional)",
  },
  {
    dateOfMatch: "2024-05-10T18:30:00.000-03:00",
    eventName: "Rookie Mini Camp (Optional)",
  },
  {
    dateOfMatch: "2024-05-15T12:00:00.000-03:00",
    eventName: "NFL Schedule Release",
  },
  {
    dateOfMatch: "2024-08-10T17:25:00.000-03:00",
    opponent: "Pre-Season at Cleveland Browns",
    outcome: "W",
    score: "23-10"
  },
  {
    dateOfMatch: "2024-08-18T20:00:00.000-03:00",
    opponent: "Pre-Season at Denver Broncos",
    outcome: "W",
    score: "2-27"
  },
  {
    dateOfMatch: "2024-08-24T14:00:00.000-03:00",
    opponent: "Pre-Season Baltimore Ravens",
    outcome: "W",
    score: "7-30"
  },
  {
    dateOfMatch: "2024-09-06T21:15:00.000-03:00",
    eventName: "NFL in Brazil 🇧🇷 vs. Philadelphia Eagles",
    outcome: "L",
    score: "29-34"
  },
  {
    dateOfMatch: "2024-09-15T14:00:00.000-03:00",
    opponent: "Indianapolis Colts",
    outcome: "W",
    score: "10-16"
  },
  {
    dateOfMatch: "2024-09-22T14:00:00.000-03:00",
    opponent: "at Tennessee Titans",
  },
  {
    dateOfMatch: "2024-09-29T14:00:00.000-03:00",
    opponent: "Minnesota Vikings",
  },
  {
    dateOfMatch: "2024-10-06T17:25:00.000-03:00",
    opponent: "at Los Angeles Rams",
  },
  {
    dateOfMatch: "2024-10-13T14:00:00.000-03:00",
    opponent: "Arizona Cardinals",
  },
  {
    dateOfMatch: "2024-10-20T14:00:00.000-03:00",
    opponent: "Houston Texans",
  },
  {
    dateOfMatch: "2024-10-27T14:00:00.000-03:00",
    opponent: "at Jacksonville Jaguars",
  },
  {
    dateOfMatch: "2024-11-03T18:25:00.000-03:00",
    opponent: "Detroit Lions",
  },
  {
    dateOfMatch: "2024-11-17T15:00:00.000-03:00",
    opponent: "at Chicago Bears",
  },
  {
    dateOfMatch: "2024-11-24T18:25:00.000-03:00",
    opponent: "San Francisco 49'ers",
  },
  {
    dateOfMatch: "2024-11-28T22:20:00.000-03:00",
    opponent: "Miami Dolphins",
  },
  {
    dateOfMatch: "2024-12-05T22:15:00.000-03:00",
    opponent: "at Detroit Lions",
  },
  {
    dateOfMatch: "2024-12-15T22:20:00.000-03:00",
    opponent: "at Seattle Seahawks",
  },
  {
    dateOfMatch: "2024-12-23T22:15:00.000-03:00",
    opponent: "New Orleans Saints",
  },
  {
    dateOfMatch: "2024-12-29T15:00:00.000-03:00",
    opponent: "at Minnesota Vikings",
  },
  {
    dateOfMatch: "2025-01-05T15:00:00.000-03:00",
    opponent: "Chicago Bears",
  },
];

export async function getNextGames() {
  const today = new Date();

  const nextGames = schedule
    .filter((game) => {
      const gameDate = new Date(game.dateOfMatch);

      return (
        gameDate.getFullYear() > today.getFullYear() ||
        (gameDate.getFullYear() === today.getFullYear() && gameDate.getMonth() > today.getMonth()) ||
        (gameDate.getFullYear() === today.getFullYear() && gameDate.getMonth() === today.getMonth() && gameDate.getDate() >= today.getDate())
      );
    })
    .sort((a, b) => new Date(a.dateOfMatch).getTime() - new Date(b.dateOfMatch).getTime())
    .slice(0, 4);

  return {
    nextGames,
    nextGame: nextGames[0],
  };
}