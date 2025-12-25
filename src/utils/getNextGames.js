// Green Bay Packers Schedule - 2023, 2024, 2025 Seasons
// Includes past seasons with results and upcoming games

const schedule = [
  // ===== 2023 SEASON (9-8 Regular Season) =====
  {
    dateOfMatch: "2023-09-10T13:25:00.000-05:00",
    opponent: "at Chicago Bears",
    outcome: "W",
    score: "38-20",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-09-17T13:00:00.000-04:00",
    opponent: "at Atlanta Falcons",
    outcome: "L",
    score: "24-25",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-09-24T12:00:00.000-05:00",
    opponent: "New Orleans Saints",
    outcome: "W",
    score: "18-17",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-09-28T19:15:00.000-05:00",
    opponent: "Detroit Lions",
    outcome: "L",
    score: "20-34",
    network: "Prime Video"
  },
  {
    dateOfMatch: "2023-10-09T19:15:00.000-05:00",
    opponent: "at Las Vegas Raiders",
    outcome: "L",
    score: "13-17",
    network: "ESPN"
  },
  {
    dateOfMatch: "2023-10-22T15:25:00.000-05:00",
    opponent: "at Denver Broncos",
    outcome: "L",
    score: "17-19",
    network: "CBS"
  },
  {
    dateOfMatch: "2023-10-29T12:00:00.000-05:00",
    opponent: "Minnesota Vikings",
    outcome: "L",
    score: "10-24",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-11-05T12:00:00.000-06:00",
    opponent: "Los Angeles Rams",
    outcome: "W",
    score: "20-3",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-11-12T13:00:00.000-05:00",
    opponent: "at Pittsburgh Steelers",
    outcome: "L",
    score: "19-23",
    network: "CBS"
  },
  {
    dateOfMatch: "2023-11-19T12:00:00.000-06:00",
    opponent: "Los Angeles Chargers",
    outcome: "W",
    score: "23-20",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-11-23T14:30:00.000-06:00",
    opponent: "at Detroit Lions",
    outcome: "W",
    score: "29-22",
    network: "FOX",
    eventName: "Thanksgiving"
  },
  {
    dateOfMatch: "2023-12-03T20:20:00.000-06:00",
    opponent: "Kansas City Chiefs",
    outcome: "W",
    score: "27-19",
    network: "NBC"
  },
  {
    dateOfMatch: "2023-12-11T20:15:00.000-06:00",
    opponent: "at New York Giants",
    outcome: "L",
    score: "22-24",
    network: "NBC"
  },
  {
    dateOfMatch: "2023-12-17T15:00:00.000-06:00",
    opponent: "Tampa Bay Buccaneers",
    outcome: "L",
    score: "20-34",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-12-24T15:00:00.000-06:00",
    opponent: "at Carolina Panthers",
    outcome: "W",
    score: "33-30",
    network: "FOX"
  },
  {
    dateOfMatch: "2023-12-31T20:20:00.000-06:00",
    opponent: "at Minnesota Vikings",
    outcome: "W",
    score: "33-10",
    network: "NBC"
  },
  {
    dateOfMatch: "2024-01-07T16:25:00.000-06:00",
    opponent: "Chicago Bears",
    outcome: "W",
    score: "17-9",
    network: "FOX"
  },
  // Playoffs 2023
  {
    dateOfMatch: "2024-01-14T15:40:00.000-06:00",
    eventName: "Wild Card: Packers vs Dallas Cowboys",
    outcome: "W",
    score: "48-32",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-01-21T17:15:00.000-06:00",
    eventName: "Divisional: Packers at San Francisco 49ers",
    outcome: "L",
    score: "21-24",
    network: "FOX"
  },
  // ===== 2024 SEASON (11-6 Regular Season) =====
  {
    dateOfMatch: "2024-09-06T19:15:00.000-03:00",
    eventName: "NFL in Brazil 🇧🇷 vs. Philadelphia Eagles",
    outcome: "L",
    score: "29-34",
    network: "NBC"
  },
  {
    dateOfMatch: "2024-09-15T12:00:00.000-05:00",
    opponent: "Indianapolis Colts",
    outcome: "W",
    score: "16-10",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-09-22T12:00:00.000-05:00",
    opponent: "at Tennessee Titans",
    outcome: "W",
    score: "30-14",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-09-29T12:00:00.000-05:00",
    opponent: "Minnesota Vikings",
    outcome: "L",
    score: "29-31",
    network: "CBS"
  },
  {
    dateOfMatch: "2024-10-06T15:25:00.000-05:00",
    opponent: "at Los Angeles Rams",
    outcome: "W",
    score: "24-19",
    network: "CBS"
  },
  {
    dateOfMatch: "2024-10-13T12:00:00.000-05:00",
    opponent: "Arizona Cardinals",
    outcome: "W",
    score: "34-13",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-10-20T12:00:00.000-05:00",
    opponent: "Houston Texans",
    outcome: "W",
    score: "24-22",
    network: "CBS"
  },
  {
    dateOfMatch: "2024-10-27T12:00:00.000-05:00",
    opponent: "at Jacksonville Jaguars",
    outcome: "W",
    score: "30-27",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-11-03T15:25:00.000-06:00",
    opponent: "Detroit Lions",
    outcome: "L",
    score: "14-24",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-11-17T12:00:00.000-06:00",
    opponent: "at Chicago Bears",
    outcome: "W",
    score: "20-19",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-11-24T15:25:00.000-06:00",
    opponent: "San Francisco 49ers",
    outcome: "W",
    score: "38-10",
    network: "FOX"
  },
  {
    dateOfMatch: "2024-11-28T19:20:00.000-06:00",
    opponent: "Miami Dolphins",
    outcome: "W",
    score: "30-17",
    network: "NBC",
    eventName: "Thanksgiving"
  },
  {
    dateOfMatch: "2024-12-05T19:15:00.000-06:00",
    opponent: "at Detroit Lions",
    outcome: "L",
    score: "31-34",
    network: "Prime Video"
  },
  {
    dateOfMatch: "2024-12-15T19:15:00.000-06:00",
    opponent: "at Seattle Seahawks",
    outcome: "W",
    score: "30-13",
    network: "NBC"
  },
  {
    dateOfMatch: "2024-12-23T19:15:00.000-06:00",
    opponent: "New Orleans Saints",
    outcome: "W",
    score: "34-0",
    network: "ESPN"
  },
  {
    dateOfMatch: "2024-12-29T15:25:00.000-06:00",
    opponent: "at Minnesota Vikings",
    outcome: "L",
    score: "25-27",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-01-05T12:00:00.000-06:00",
    opponent: "Chicago Bears",
    outcome: "L",
    score: "22-24",
    network: "CBS"
  },
  // Playoffs 2024
  {
    dateOfMatch: "2025-01-12T16:30:00.000-06:00",
    eventName: "Wild Card: Packers at Philadelphia Eagles",
    outcome: "L",
    score: "10-22",
    network: "FOX"
  },
  // ===== 2025 SEASON (In Progress) =====
  {
    dateOfMatch: "2025-09-07T15:25:00.000-05:00",
    opponent: "Detroit Lions",
    outcome: "W",
    score: "27-13",
    network: "CBS"
  },
  {
    dateOfMatch: "2025-09-11T19:15:00.000-05:00",
    opponent: "Washington Commanders",
    outcome: "W",
    score: "27-18",
    network: "Prime Video"
  },
  {
    dateOfMatch: "2025-09-21T13:00:00.000-04:00",
    opponent: "at Cleveland Browns",
    outcome: "L",
    score: "10-13",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-09-28T19:20:00.000-05:00",
    opponent: "at Dallas Cowboys",
    outcome: "T",
    score: "40-40",
    network: "Prime Video"
  },
  {
    dateOfMatch: "2025-10-12T13:00:00.000-05:00",
    opponent: "Cincinnati Bengals",
    outcome: "W",
    score: "27-18",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-10-19T13:00:00.000-05:00",
    opponent: "at Arizona Cardinals",
    outcome: "W",
    score: "27-23",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-10-26T13:00:00.000-05:00",
    opponent: "at Pittsburgh Steelers",
    outcome: "W",
    score: "35-25",
    network: "CBS"
  },
  {
    dateOfMatch: "2025-11-02T13:00:00.000-05:00",
    opponent: "Carolina Panthers",
    outcome: "L",
    score: "13-16",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-11-10T20:15:00.000-06:00",
    opponent: "Philadelphia Eagles",
    outcome: "L",
    score: "7-10",
    network: "ESPN",
    eventName: "Monday Night Football"
  },
  {
    dateOfMatch: "2025-11-16T13:00:00.000-06:00",
    opponent: "at New York Giants",
    outcome: "W",
    score: "27-20",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-11-23T12:00:00.000-06:00",
    opponent: "Minnesota Vikings",
    outcome: "W",
    score: "23-6",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-11-27T12:00:00.000-06:00",
    opponent: "at Detroit Lions",
    outcome: "W",
    score: "31-24",
    network: "FOX",
    eventName: "Thanksgiving"
  },
  {
    dateOfMatch: "2025-12-07T12:00:00.000-06:00",
    opponent: "Chicago Bears",
    outcome: "W",
    score: "28-21",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-12-14T15:25:00.000-06:00",
    opponent: "at Denver Broncos",
    outcome: "L",
    score: "26-34",
    network: "CBS"
  },
  {
    dateOfMatch: "2025-12-20T19:20:00.000-06:00",
    opponent: "at Chicago Bears",
    outcome: "L",
    score: "16-22",
    network: "FOX"
  },
  {
    dateOfMatch: "2025-12-27T19:00:00.000-06:00",
    opponent: "Baltimore Ravens",
    network: "Peacock"
  },
  {
    dateOfMatch: "2026-01-04T12:00:00.000-06:00",
    opponent: "at Minnesota Vikings",
    network: "TBD"
  },
  // Playoffs 2025
  {
    dateOfMatch: "2026-01-18T00:00:00.000-06:00",
    eventName: "Divisional Playoff Weekend"
  },
  {
    dateOfMatch: "2026-01-26T18:00:00.000-06:00",
    eventName: "Conference Championship"
  },
  {
    dateOfMatch: "2026-02-08T18:30:00.000-06:00",
    eventName: "Super Bowl LX"
  }
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

export function getSingleNextGame() {
  return getNextGames().nextGame;
}
