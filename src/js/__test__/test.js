import healthIndicator from '../app';

test.each([
  [{ name: 'Маг', health: 80 }, 'healthy'],
  [{ name: 'Лучник', health: 40 }, 'wounded'],
  [{ name: 'Мечник', health: 10 }, 'critical'],
])(('should indicate player`s health'), (player, expected) => {
  const result = healthIndicator(player);

  expect(result).toBe(expected);
});
