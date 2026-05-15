import { describe, it, expect, vi, afterEach } from 'vitest';
import { getNextGames, getSingleNextGame, schedule } from '../../src/utils/getNextGames.js';

afterEach(() => {
  vi.useRealTimers();
});

// ── Schedule data integrity ──────────────────────────────────────────────────

describe('schedule data integrity', () => {
  it('every entry has a dateOfMatch string', () => {
    for (const game of schedule) {
      expect(typeof game.dateOfMatch).toBe('string');
    }
  });

  it('every dateOfMatch parses to a valid Date', () => {
    for (const game of schedule) {
      const d = new Date(game.dateOfMatch);
      expect(d.toString(), `Invalid date: ${game.dateOfMatch}`).not.toBe('Invalid Date');
    }
  });

  it('every entry has opponent or eventName', () => {
    for (const game of schedule) {
      const hasId = game.opponent !== undefined || game.eventName !== undefined;
      expect(hasId, `Entry on ${game.dateOfMatch} has neither opponent nor eventName`).toBe(true);
    }
  });

  it('outcome values are W, L, or T when present', () => {
    const valid = new Set(['W', 'L', 'T']);
    for (const game of schedule) {
      if (game.outcome !== undefined) {
        expect(valid.has(game.outcome), `Bad outcome "${game.outcome}" on ${game.dateOfMatch}`).toBe(true);
      }
    }
  });

  it('schedule is sorted chronologically', () => {
    for (let i = 1; i < schedule.length; i++) {
      const prev = new Date(schedule[i - 1].dateOfMatch).getTime();
      const curr = new Date(schedule[i].dateOfMatch).getTime();
      expect(curr, `Entry ${i} is before entry ${i - 1}`).toBeGreaterThanOrEqual(prev);
    }
  });

  it('2026 regular season has at least 17 games with an opponent', () => {
    const games = schedule.filter(g => {
      const yr = new Date(g.dateOfMatch).getFullYear();
      return yr === 2026 && g.opponent !== undefined;
    });
    expect(games.length).toBeGreaterThanOrEqual(17);
  });

  it('contains known 2026 opponents', () => {
    const opponents = schedule
      .filter(g => new Date(g.dateOfMatch).getFullYear() === 2026 && g.opponent)
      .map(g => g.opponent);
    expect(opponents).toContain('at Minnesota Vikings');
    expect(opponents).toContain('at Chicago Bears');
    expect(opponents).toContain('Detroit Lions');
  });

  it('has the Thanksgiving Eve Netflix game', () => {
    const thanksgiving = schedule.find(
      g => g.eventName === 'Thanksgiving Eve' && g.network === 'Netflix'
    );
    expect(thanksgiving).toBeDefined();
  });

  it('has the Christmas Day Netflix game', () => {
    const christmas = schedule.find(
      g => g.eventName === 'Christmas Day' && g.network === 'Netflix'
    );
    expect(christmas).toBeDefined();
  });

  it('has the Rio de Janeiro Brazil international game', () => {
    const brazil = schedule.find(g => g.eventName?.includes('Rio de Janeiro'));
    expect(brazil).toBeDefined();
  });
});

// ── getNextGames() ───────────────────────────────────────────────────────────

describe('getNextGames()', () => {
  it('returns nextGames array and nextGame', async () => {
    const result = await getNextGames();
    expect(Array.isArray(result.nextGames)).toBe(true);
    expect(result).toHaveProperty('nextGame');
  });

  it('returns at most 4 games', async () => {
    const { nextGames } = await getNextGames();
    expect(nextGames.length).toBeLessThanOrEqual(4);
  });

  it('nextGame equals nextGames[0]', async () => {
    const { nextGames, nextGame } = await getNextGames();
    if (nextGames.length > 0) {
      expect(nextGame).toEqual(nextGames[0]);
    }
  });

  it('returned games are in chronological order', async () => {
    const { nextGames } = await getNextGames();
    for (let i = 1; i < nextGames.length; i++) {
      const prev = new Date(nextGames[i - 1].dateOfMatch).getTime();
      const curr = new Date(nextGames[i].dateOfMatch).getTime();
      expect(curr).toBeGreaterThanOrEqual(prev);
    }
  });

  it('no returned game is before today', async () => {
    const { nextGames } = await getNextGames();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (const game of nextGames) {
      const d = new Date(game.dateOfMatch);
      d.setHours(0, 0, 0, 0);
      expect(d.getTime()).toBeGreaterThanOrEqual(today.getTime());
    }
  });

  it('with date mocked to July 2026, first event is in the 2026 off-season', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-01T12:00:00Z'));

    const { nextGames } = await getNextGames();
    expect(nextGames.length).toBeGreaterThan(0);

    const first = new Date(nextGames[0].dateOfMatch);
    expect(first.getFullYear()).toBe(2026);
    expect(first.getMonth() + 1).toBeGreaterThanOrEqual(7);
  });

  it('with date mocked to Week 1 eve (Sep 12 2026), first game is at Minnesota Vikings', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-12T12:00:00Z'));

    const { nextGame } = await getNextGames();
    expect(nextGame?.opponent).toBe('at Minnesota Vikings');
  });
});

// ── getSingleNextGame() ──────────────────────────────────────────────────────

describe('getSingleNextGame()', () => {
  it('returns same value as nextGame from getNextGames()', async () => {
    const single = await getSingleNextGame();
    const { nextGame } = await getNextGames();
    expect(single).toEqual(nextGame);
  });
});
