import type { CSSProperties } from 'react';

// Sparse, deterministic placement keeps the backdrop calm and avoids render-time randomness.
const positions = [
  [6, 12], [24, 8], [47, 19], [73, 7], [92, 24],
  [14, 38], [38, 46], [62, 34], [85, 51], [4, 67],
  [27, 76], [51, 64], [70, 81], [95, 73], [43, 94], [82, 96],
];

export function AmbientParticles() {
  return (
    <div className="ambient-particles" aria-hidden="true">
      {positions.map(([left, top], index) => (
        <span
          key={index}
          className="ambient-particle"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            '--particle-size': `${index % 3 === 0 ? 2 : 1.5}px`,
            '--particle-duration': `${22 + (index % 5) * 4}s`,
            '--particle-delay': `${-index * 3}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
