export function rarityLabel(r: string) {
  if (r === 'LEGENDARY') return '★ LEGENDARY';
  if (r === 'EPIC') return '◆ EPIC';
  if (r === 'RARE') return '● RARE';
  return r;
}
