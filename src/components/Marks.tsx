import type { ProductId } from "../products";
const paths: Record<ProductId, React.ReactNode> = {
  linkit: <rect x="6" y="6" width="20" height="20" rx="1" />,
  cybion: <path d="M16 4 29 27H3Z" />,
  normai: <circle cx="16" cy="16" r="11" />,
  ctx: <path d="m6 6 20 20M26 6 6 26" />,
  firma: (
    <>
      <path d="M4 25H28M6 25a10 10 0 0 1 20 0" />
      <circle cx="16" cy="9.5" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="21.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="19.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  midas: (
    <>
      <path d="m4 24 5-16 7 11 7-11 5 16M8 27h16" />
      <circle cx="16" cy="5" r="1" />
    </>
  ),
  exchange: (
    <>
      <path d="M5 10h21l-5-5M27 22H6l5 5M16 6v20" />
    </>
  ),
  hit: (
    <>
      <path d="M7 5v22M25 5v22M7 16h18" />
      <path d="m13 10 6 6-6 6" />
    </>
  ),
};
export function ProductMark({
  id,
  className = "",
}: {
  id: ProductId;
  className?: string;
}) {
  return (
    <svg
      className={`product-mark ${className}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}
export function BrandMark() {
  return (
    <svg
      className="brand-mark"
      width="31"
      height="31"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 26V6h5l14 20h5V6h-5v12L14 6H9v20z" fill="currentColor" />
      <path d="M4 26 28 6" stroke="var(--bg)" strokeWidth="2.5" />
    </svg>
  );
}
