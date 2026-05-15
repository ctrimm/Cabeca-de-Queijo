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
  {
    year: 2014,
    record: '12-4',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'NFC Championship',
      roundPt: 'Final da NFC',
      opponent: 'Seattle Seahawks',
      score: '22-28 (OT)',
    },
    notableEn: [
      'Rodgers won his second MVP with 38 TDs and a league-best 112.2 passer rating.',
      'Packers led 19-7 late in the NFC Championship before Seattle scored 15 unanswered points then won in OT.',
    ],
    notablePt: [
      'Rodgers venceu seu segundo MVP com 38 TDs e o melhor índice de passes da liga (112,2).',
      'Os Packers lideravam por 19-7 na Final da NFC antes de Seattle marcar 15 pontos sem resposta e ganhar no overtime.',
    ],
  },
  {
    year: 2013,
    record: '8-7-1',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers / Scott Tolzien',
    divisionFinish: '2nd in NFC North',
    playoff: {
      result: 'lost',
      round: 'Wild Card',
      roundPt: 'Rodada Wild Card',
      opponent: 'San Francisco 49ers',
      score: '20-23',
    },
    notableEn: [
      'Rodgers fractured his collarbone in Week 9 and missed seven games; backup Scott Tolzien started.',
      'One of only three ties in Packers history; squeaked into playoffs on tiebreakers.',
    ],
    notablePt: [
      'Rodgers fraturou a clavícula na Semana 9 e perdeu sete jogos; o reserva Scott Tolzien assumiu.',
      'Um dos três empates na história dos Packers; entraram nos playoffs nos critérios de desempate.',
    ],
  },
  {
    year: 2012,
    record: '11-5',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'San Francisco 49ers',
      score: '31-45',
    },
    notableEn: [
      'Won back-to-back NFC North titles; Rodgers threw for 4,295 yards and 39 TDs.',
      'Blown out at home by the 49ers in the Divisional round in one of the franchise\'s worst playoff performances.',
    ],
    notablePt: [
      'Venceu títulos consecutivos do NFC North; Rodgers jogou 4.295 jardas e 39 TDs.',
      'Dominados em casa pelos 49ers na rodada Divisional, em uma das piores atuações nos playoffs do franchise.',
    ],
  },
  {
    year: 2011,
    record: '15-1',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '1st in NFC North (#1 seed)',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'New York Giants',
      score: '20-37',
    },
    notableEn: [
      'Best regular season record in franchise history; Rodgers set the NFL single-season passer rating record (122.5) with 45 TDs and only 6 INTs.',
      'Shockingly eliminated by the 6th-seed Giants at Lambeau — the only 15-1 team in NFL history to lose its first playoff game.',
    ],
    notablePt: [
      'Melhor recorde de temporada regular da história do franchise; Rodgers estabeleceu o recorde de índice de passes em uma temporada (122,5) com 45 TDs e apenas 6 interceptações.',
      'Eliminados de forma surpreendente pelos Giants (6º cabeça de chave) em Lambeau — o único time 15-1 na história da NFL a perder seu primeiro jogo nos playoffs.',
    ],
  },
  {
    year: 2010,
    record: '10-6',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '2nd in NFC North (6th seed)',
    playoff: {
      result: 'won-super-bowl',
    },
    notableEn: [
      '🏆 Won Super Bowl XLV 31-25 over the Pittsburgh Steelers — the franchise\'s 4th Lombardi Trophy.',
      'Became the first 6th seed from the NFC to win the Super Bowl; Rodgers earned Super Bowl MVP honors.',
    ],
    notablePt: [
      '🏆 Venceu o Super Bowl XLV por 31-25 sobre o Pittsburgh Steelers — o 4º Troféu Lombardi do franchise.',
      'Tornou-se o primeiro 6º cabeça de chave da NFC a vencer o Super Bowl; Rodgers foi eleito MVP do Super Bowl.',
    ],
  },
  {
    year: 2009,
    record: '11-5',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '3rd in NFC North (5th seed)',
    playoff: {
      result: 'lost',
      round: 'Wild Card',
      roundPt: 'Rodada Wild Card',
      opponent: 'Arizona Cardinals',
      score: '45-51 (OT)',
    },
    notableEn: [
      'Rodgers threw for 4,434 yards and 30 TDs; set a franchise record with 461 points scored.',
      'Wild Card game vs Arizona went to OT at 45-45, producing the highest-scoring playoff game in NFL history at the time.',
    ],
    notablePt: [
      'Rodgers jogou 4.434 jardas e 30 TDs; estabeleceu um recorde do franchise com 461 pontos marcados.',
      'O jogo do Wild Card contra Arizona foi ao overtime empatado em 45-45, produzindo o jogo de playoff com mais pontos na história da NFL até então.',
    ],
  },
  {
    year: 2008,
    record: '6-10',
    coach: 'Mike McCarthy',
    qb: 'Aaron Rodgers',
    divisionFinish: '3rd in NFC North',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'Rodgers\' first season as starter after Brett Favre was traded to the New York Jets; he threw for 4,038 yards and 28 TDs.',
      'Despite a losing record, Rodgers earned a 6-year extension mid-season, signaling the franchise\'s confidence in his future.',
    ],
    notablePt: [
      'Primeira temporada de Rodgers como titular após Brett Favre ser trocado para o New York Jets; ele jogou 4.038 jardas e 28 TDs.',
      'Apesar de um recorde negativo, Rodgers recebeu uma extensão de 6 anos no meio da temporada, sinalizando a confiança do franchise em seu futuro.',
    ],
  },
  {
    year: 2007,
    record: '13-3',
    coach: 'Mike McCarthy',
    qb: 'Brett Favre',
    divisionFinish: '1st in NFC North (2nd seed)',
    playoff: {
      result: 'lost',
      round: 'NFC Championship',
      roundPt: 'Final da NFC',
      opponent: 'New York Giants',
      score: '20-23 (OT)',
    },
    notableEn: [
      'Favre\'s final season as a Packer — 4,155 yards and 28 TDs at age 38 in one of the most complete seasons of his career.',
      'Heartbreaking OT loss to the Giants at Lambeau in -23°F wind chill; Favre\'s first-possession INT led to the Giants\' winning field goal.',
    ],
    notablePt: [
      'Última temporada de Favre como Packer — 4.155 jardas e 28 TDs aos 38 anos em uma das temporadas mais completas de sua carreira.',
      'Derrota de cortar o coração para os Giants em Lambeau com frio polar de -30°C; a interceptação de Favre na primeira posse do overtime levou ao field goal decisivo dos Giants.',
    ],
  },
  {
    year: 2006,
    record: '8-8',
    coach: 'Mike McCarthy',
    qb: 'Brett Favre',
    divisionFinish: '3rd in NFC North',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'McCarthy\'s first season as head coach improved the team from 4-12 to 8-8.',
      'Favre threw his 400th career touchdown pass, joining only Dan Marino in that exclusive club at the time.',
    ],
    notablePt: [
      'Primeira temporada de McCarthy como técnico melhorou o time de 4-12 para 8-8.',
      'Favre jogou seu 400º touchdown de carreira, se juntando apenas a Dan Marino neste clube exclusivo na época.',
    ],
  },
  {
    year: 2005,
    record: '4-12',
    coach: 'Mike Sherman',
    qb: 'Brett Favre',
    divisionFinish: '4th in NFC North',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'Worst season since 1991; Sherman was fired at year\'s end despite an earlier contract extension.',
      'Defense allowed a franchise-worst 31.4 points per game; the team\'s struggles led to the McCarthy era.',
    ],
    notablePt: [
      'Pior temporada desde 1991; Sherman foi demitido ao final do ano apesar de uma extensão de contrato anterior.',
      'A defesa cedeu 31,4 pontos por jogo — o pior da história do franchise; as dificuldades do time levaram à era McCarthy.',
    ],
  },
  {
    year: 2004,
    record: '10-6',
    coach: 'Mike Sherman',
    qb: 'Brett Favre',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'Wild Card',
      roundPt: 'Rodada Wild Card',
      opponent: 'Minnesota Vikings',
      score: '17-31',
    },
    notableEn: [
      'Fourth consecutive playoff appearance under Sherman; Favre led the NFL with 30 TD passes.',
      'Vikings avenged a regular-season loss with a convincing 31-17 Wild Card victory at Lambeau.',
    ],
    notablePt: [
      'Quarta aparição consecutiva nos playoffs sob Sherman; Favre liderou a NFL com 30 TDs.',
      'Os Vikings vingaram uma derrota na temporada regular com uma convincente vitória de 31-17 no Wild Card em Lambeau.',
    ],
  },
  {
    year: 2003,
    record: '10-6',
    coach: 'Mike Sherman',
    qb: 'Brett Favre',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'Philadelphia Eagles',
      score: '17-20 (OT)',
    },
    notableEn: [
      'Clinched the division on the final day of the season; won Wild Card vs Seattle 33-27 OT on Al Harris\'s iconic pick-six — the first defensive OT TD in NFL playoff history.',
      'Lost to the Eagles in an OT thriller in the Divisional round despite a strong all-around performance.',
    ],
    notablePt: [
      'Clincharam a divisão no último dia da temporada; venceram o Wild Card contra Seattle por 33-27 no overtime com o famoso pick-six de Al Harris — o primeiro TD defensivo no overtime na história dos playoffs da NFL.',
      'Perderam para os Eagles em um jogo emocionante no overtime na rodada Divisional apesar de uma forte atuação geral.',
    ],
  },
  {
    year: 2002,
    record: '12-4',
    coach: 'Mike Sherman',
    qb: 'Brett Favre',
    divisionFinish: '1st in NFC North',
    playoff: {
      result: 'lost',
      round: 'Wild Card',
      roundPt: 'Rodada Wild Card',
      opponent: 'Atlanta Falcons',
      score: '7-27',
    },
    notableEn: [
      'First-ever home playoff loss in franchise history — shut out by the Michael Vick-led Falcons 27-7.',
      'Vick ran wild on the Lambeau turf, piling up 92 rushing yards and exposing vulnerabilities in the Packers\' defense.',
    ],
    notablePt: [
      'Primeira derrota em casa nos playoffs na história do franchise — dominados pelos Falcons liderados por Michael Vick por 27-7.',
      'Vick fez estragos no gramado de Lambeau, acumulando 92 jardas em corrida e expondo vulnerabilidades na defesa dos Packers.',
    ],
  },
  {
    year: 2001,
    record: '12-4',
    coach: 'Mike Sherman',
    qb: 'Brett Favre',
    divisionFinish: '2nd in NFC Central (4th seed)',
    playoff: {
      result: 'lost',
      round: 'Divisional',
      roundPt: 'Rodada Divisional',
      opponent: 'St. Louis Rams',
      score: '17-45',
    },
    notableEn: [
      'Won Wild Card at home vs San Francisco 49ers 25-15 before being blown out by the Rams 45-17.',
      'Favre signed a landmark 10-year, $100 million contract extension; returned to the Pro Bowl.',
    ],
    notablePt: [
      'Venceram o Wild Card em casa contra o San Francisco 49ers por 25-15 antes de serem dominados pelos Rams por 45-17.',
      'Favre assinou uma extensão de contrato histórica de 10 anos e $100 milhões; voltou ao Pro Bowl.',
    ],
  },
  {
    year: 2000,
    record: '9-7',
    coach: 'Mike Sherman',
    qb: 'Brett Favre',
    divisionFinish: '3rd in NFC Central',
    playoff: {
      result: 'missed',
    },
    notableEn: [
      'Sherman\'s first season as head coach after the departure of Ray Rhodes; won final four games to finish 9-7.',
      'Marked a reset year as the team rebuilt after a string of NFC Championship appearances in the late 1990s.',
    ],
    notablePt: [
      'Primeira temporada de Sherman como técnico após a saída de Ray Rhodes; venceu os quatro últimos jogos para terminar com 9-7.',
      'Marcou um ano de reinicialização enquanto o time se reconstruía após uma série de aparições na Final da NFC no final dos anos 1990.',
    ],
  },
];
