export interface SeasonEntry {
  year: number;
  record: string;
  coach: string;
  qb: string;
  divisionFinish: string;
  playoff: {
    result: 'won-super-bowl' | 'lost' | 'missed';
    round?: string;
    roundPt?: string;
    opponent?: string;
    score?: string;
  };
  notableEn: string[];
  notablePt: string[];
}

export const seasons: SeasonEntry[] = [
  {
    year: 2025,
    record: '9-8',
    coach: 'Matt LaFleur',
    qb: 'Jordan Love',
    divisionFinish: '2nd in NFC North',
    playoff: {
      result: 'lost',
      round: 'Wild Card',
      roundPt: 'Rodada Wild Card',
      opponent: 'Chicago Bears',
      score: '27-31',
    },
    notableEn: [
      'Blew a 21-3 halftime lead in the Wild Card loss to the Bears.',
      'Finished season losing five straight games.',
    ],
    notablePt: [
      'Perdeu uma vantagem de 21-3 no intervalo na derrota para o Bears no Wild Card.',
      'Terminou a temporada com cinco derrotas consecutivas.',
    ],
  },
  {
    year: 2024,
    record: '11-6',
    coach: 'Matt LaFleur',
    qb: 'Jordan Love',
    divisionFinish: '3rd in NFC North',
    playoff: {
      result: 'lost',
      round: 'Wild Card',
      roundPt: 'Rodada Wild Card',
      opponent: 'Philadelphia Eagles',
      score: '10-22',
    },
    notableEn: [
      "Jordan Love's second full season as starter; 11 wins showed continued growth.",
      'Eagles defense limited the Packers to 10 points in the Wild Card.',
    ],
    notablePt: [
      'Segunda temporada completa de Jordan Love como titular; 11 vitórias mostraram crescimento contínuo.',
      'A defesa dos Eagles limitou os Packers a 10 pontos no Wild Card.',
    ],
  },
  {
    year: 2023,
    record: '9-8',
    coach: 'Matt LaFleur',
    qb: 'Jordan Love',
    divisionFinish: '2nd in NFC North',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'San Francisco 49ers',
      score: '21-24',
    },
    notableEn: [
      "Jordan Love's first full season as starter — 4,159 yards, 32 TDs.",
      'As 7th seed, won Wild Card vs Dallas Cowboys 48-32 before a close Divisional loss.',
    ],
    notablePt: [
      'Primeira temporada completa de Jordan Love como titular — 4.159 jardas, 32 TDs.',
      'Como 7º cabeça-de-chave, venceu o Wild Card vs Dallas Cowboys 48-32 antes de perder de perto na Divisional.',
    ],
  },
  {
    year: 2022,
    record: '8-9',
    coach: 'Matt LaFleur',
    qb: 'Aaron Rodgers',
    divisionFinish: '3rd in NFC North',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'First missed playoffs since 2018 after three straight division titles.',
      'Marked the twilight of the Rodgers era in Green Bay.',
    ],
    notablePt: [
      'Primeiro playoff perdido desde 2018 após três títulos consecutivos de divisão.',
      'Marcou o crepúsculo da era Rodgers em Green Bay.',
    ],
  },
  {
    year: 2021,
    record: '13-4',
    coach: 'Matt LaFleur',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North (#1 seed)',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'San Francisco 49ers',
      score: '10-13',
    },
    notableEn: [
      'Rodgers won his 4th NFL MVP award.',
      '6th-seed 49ers stunned the #1 Packers at frozen Lambeau Field on a last-second field goal.',
    ],
    notablePt: [
      'Rodgers venceu seu 4º prêmio de MVP da NFL.',
      'Os 49ers (6º cabeça-de-chave) eliminaram os Packers (#1) no gelado Lambeau Field com um field goal de última hora.',
    ],
  },
  {
    year: 2020,
    record: '13-3',
    coach: 'Matt LaFleur',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North (#1 seed)',
    playoff: {
      result: 'lost',
      round: 'NFC Championship',
      roundPt: 'Final da NFC',
      opponent: 'Tampa Bay Buccaneers',
      score: '26-31',
    },
    notableEn: [
      'Rodgers won his 3rd NFL MVP; LaFleur went 26-6 in back-to-back 13-win seasons.',
      'Lost to eventual Super Bowl champion Tampa Bay (and Tom Brady) in the NFC title game.',
    ],
    notablePt: [
      'Rodgers venceu seu 3º MVP da NFL; LaFleur foi 26-6 em temporadas consecutivas de 13 vitórias.',
      'Perdeu para o eventual campeão do Super Bowl Tampa Bay (e Tom Brady) no jogo do título da NFC.',
    ],
  },
  {
    year: 2019,
    record: '13-3',
    coach: 'Matt LaFleur',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'NFC Championship',
      roundPt: 'Final da NFC',
      opponent: 'San Francisco 49ers',
      score: '20-37',
    },
    notableEn: [
      "Matt LaFleur's first season as head coach produced a 13-3 record.",
      '49ers led 27-0 at halftime with a dominant defensive performance.',
    ],
    notablePt: [
      'A primeira temporada de Matt LaFleur como técnico produziu um recorde de 13-3.',
      'Os 49ers venciam por 27-0 no intervalo com uma performance defensiva dominante.',
    ],
  },
  {
    year: 2018,
    record: '6-9-1',
    coach: 'Mike McCarthy / Joe Philbin (interim)',
    qb: 'Aaron Rodgers',
    divisionFinish: '3rd in NFC North',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'Worst record since 2008; Mike McCarthy was fired mid-season after Week 12.',
      'Second consecutive year missing the playoffs.',
    ],
    notablePt: [
      'Pior recorde desde 2008; Mike McCarthy foi demitido no meio da temporada após a Semana 12.',
      'Segundo ano consecutivo sem playoffs.',
    ],
  },
  {
    year: 2017,
    record: '7-9',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers / Brett Hundley',
    divisionFinish: '3rd in NFC North',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'Rodgers fractured his collarbone in Week 6 vs Minnesota, ending his season.',
      'First time missing playoffs since 2008, snapping 8 consecutive playoff appearances.',
    ],
    notablePt: [
      'Rodgers fraturou a clavícula na Semana 6 contra o Minnesota, encerrando sua temporada.',
      'Primeiro playoff perdido desde 2008, quebrando 8 aparições consecutivas nos playoffs.',
    ],
  },
  {
    year: 2016,
    record: '10-6',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'NFC Championship',
      roundPt: 'Final da NFC',
      opponent: 'Atlanta Falcons',
      score: '21-44',
    },
    notableEn: [
      '"Run the table" — Rodgers called his shot and won 6 straight after starting 4-6.',
      'Beat #1 seed Dallas Cowboys 34-31 in the Divisional before being blown out in Atlanta.',
    ],
    notablePt: [
      '"Run the table" — Rodgers anunciou sua intenção e venceu 6 jogos seguidos após começar 4-6.',
      'Venceu os Cowboys (#1) por 34-31 na Divisional antes de ser dominado em Atlanta.',
    ],
  },
  {
    year: 2015,
    record: '10-6',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '2nd in NFC North',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'Arizona Cardinals',
      score: '20-26 (OT)',
    },
    notableEn: [
      'Started 6-0 despite losing star receiver Jordy Nelson to a torn ACL in preseason.',
      'Rodgers threw a 60-yard Hail Mary to tie the Cardinals game — then lost in OT.',
    ],
    notablePt: [
      'Começou 6-0 apesar de perder o wide receiver Jordy Nelson para um ACL rompido na pré-temporada.',
      'Rodgers jogou um Hail Mary de 54 metros para empatar o jogo dos Cardinals — e depois perdeu no overtime.',
    ],
  },
];
