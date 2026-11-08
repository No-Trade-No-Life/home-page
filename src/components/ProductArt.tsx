import type { ProductId } from "../products";
import { ProductMark } from "./Marks";
export function ProductArt({ id }: { id: ProductId }) {
  return (
    <div className={`product-art art-${id}`} aria-hidden="true">
      {id === "linkit" && (
        <div className="message-sculpture">
          <div className="message-bubble bubble-back">
            <i />
            <i />
            <i />
          </div>
          <div className="message-bubble bubble-front">
            <span className="mini-avatar">□</span>
            <div>
              <b />
              <b />
            </div>
            <span className="message-tick">↗</span>
          </div>
          <div className="message-signal" />
          <span className="art-label">HUMAN ↔ HUMAN ↔ AGENT</span>
        </div>
      )}
      {id === "cybion" && (
        <div className="triangle-sculpture">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              viewBox="0 0 240 210"
              style={{ transform: `translate(${i * 12}px, ${i * -8}px)` }}
            >
              <path d="M120 20 224 195H16Z" />
            </svg>
          ))}
          <div className="execution-badge">
            <span /> THINK → ACT
          </div>
        </div>
      )}
      {id === "normai" && (
        <div className="model-sculpture">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <i
              key={i}
              style={{
                transform: `rotateX(62deg) rotateY(${i * 18 - 40}deg) translateZ(${i * 5}px)`,
              }}
            />
          ))}
          <span className="model-core" />
          <span className="art-label">MANY MODELS. ONE INTERFACE.</span>
        </div>
      )}
      {id === "exe" && (
        <div className="exe-sculpture">
          <div className="exe-device">
            <span className="exe-device-bar">
              <i />
              <i />
              <i />
            </span>
            <span className="exe-prompt">
              › exe shell
              <em className="exe-caret" />
            </span>
            <b />
            <b className="short" />
          </div>
          <span className="exe-seal">SEALED</span>
          <span className="art-label exe-art-label">
            SIGNED IN · SEALED OUT
          </span>
        </div>
      )}
      {id === "docs" && (
        <div className="docs-sculpture">
          {[0, 1, 2].map((i) => (
            <div
              className="docs-sheet"
              key={i}
              style={{
                transform: `translate(${i * 20}px, ${i * -14}px) rotate(-12deg)`,
              }}
            >
              <span>DOCS / 0{i + 1}</span>
              <b />
              <b />
              <b />
              <ProductMark id="docs" />
            </div>
          ))}
        </div>
      )}
      {id === "firma" && (
        <div className="firmament-sculpture">
          <span className="firma-art-title">SHARED DATA</span>
          <svg viewBox="0 0 360 240" fill="none">
            <path
              className="firma-dome"
              d="M30 175a150 140 0 0 1 300 0M65 175a115 105 0 0 1 230 0M105 175a75 70 0 0 1 150 0M20 175h320"
            />
            <path
              className="firma-links"
              d="M180 70 85 125 75 205M180 70 275 125 285 205M85 125 180 150 275 125M180 70v135"
            />
            {[
              [180, 70],
              [85, 125],
              [275, 125],
              [180, 150],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />
            ))}
            {[55, 160, 265].map((x) => (
              <g key={x}>
                <rect x={x} y="195" width="40" height="28" rx="4" />
                <path d={`M${x + 10} 204h20M${x + 10} 212h13`} />
              </g>
            ))}
          </svg>
          <span className="firma-art-caption">READ · EXPORT · SYNC</span>
        </div>
      )}
      {id === "midas" && (
        <div className="coin-sculpture">
          {[0, 1, 2, 3].map((i) => (
            <i
              key={i}
              style={{ transform: `translateY(${-i * 12}px) rotateX(54deg)` }}
            >
              <span>M</span>
            </i>
          ))}
        </div>
      )}
      {id === "exchange" && (
        <div className="exchange-sculpture">
          {[34, 55, 43, 78, 63, 100, 84, 122].map((height, i) => (
            <i key={i} style={{ height }} />
          ))}
          <span className="chart-axis" />
        </div>
      )}
      {id === "hit" && (
        <div className="hit-sculpture">
          <div className="target-ring" />
          <div className="target-ring inner" />
          <span className="target-cross" />
          <svg viewBox="0 0 260 120">
            <path d="M0 80h42l15-35 23 58 25-78 26 62 21-30h108" />
          </svg>
        </div>
      )}
      {id === "tickets" && (
        <div className="tickets-sculpture">
          <div className="ticket-card">
            <div className="ticket-half">
              <span className="ticket-mono">REPORTER</span>
              <b />
              <b />
              <b className="short" />
            </div>
            <div className="ticket-perf">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="ticket-half resolver">
              <span className="ticket-mono">RESOLVER</span>
              <span className="ticket-check">✓</span>
              <span className="ticket-check">✓</span>
            </div>
          </div>
          <span className="art-label">TWO AGENTS · ONE TICKET</span>
        </div>
      )}
      {id === "meeting" && (
        <div className="meeting-sculpture">
          <div className="meeting-tile main">
            <span className="meeting-dot" />
            <span className="meeting-name">01</span>
            <i />
            <i />
          </div>
          <div className="meeting-tile side">
            <span className="meeting-name">02</span>
            <i />
          </div>
          <div className="meeting-wave">
            {[12, 26, 18, 34, 22, 40, 16, 28, 20, 32, 14, 24].map(
              (height, i) => (
                <i key={i} style={{ height }} />
              ),
            )}
          </div>
          <span className="art-label">VOICE → TEXT → SUMMARY</span>
        </div>
      )}
    </div>
  );
}
