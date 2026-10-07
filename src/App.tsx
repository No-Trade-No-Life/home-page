import { useEffect, useState, useRef, type CSSProperties } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  Pause,
  Play,
  Plus,
  X,
} from "lucide-react";
import { dictionaries, type CopyKey, type Locale } from "./copy";
import {
  products,
  productById,
  type Category,
  type Product,
  type ProductId,
} from "./products";
import { Button } from "./components/ui/button";
import { BrandMark, ProductMark } from "./components/Marks";
import { Orbit } from "./components/Orbit";
import { ProductArt } from "./components/ProductArt";
import "./App.css";

const currentYear = new Date().getFullYear();

type Translate = (key: CopyKey) => string;
const navigation = [
  ["ecosystem", "nav.ecosystem"],
  ["connections", "nav.connection"],
  ["philosophy", "nav.about"],
] as const;
const filters: { id: Category; key: CopyKey; count: string }[] = [
  { id: "all", key: "products.all", count: "07" },
  { id: "ai", key: "products.ai", count: "04" },
  { id: "value", key: "products.value", count: "03" },
];
const flows: Record<"ai" | "value", { id: ProductId; label: CopyKey }[]> = {
  ai: [
    { id: "linkit", label: "connection.label.people" },
    { id: "ctx", label: "connection.label.context" },
    { id: "normai", label: "connection.label.intelligence" },
    { id: "cybion", label: "connection.label.action" },
  ],
  value: [
    { id: "exchange", label: "connection.label.assets" },
    { id: "hit", label: "connection.label.signal" },
    { id: "linkit", label: "connection.label.message" },
  ],
};
function readLocale(): Locale {
  // RECOVERY: blocked localStorage must not make this public site unusable.
  try {
    return localStorage.getItem("ntnl-locale") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}
function ProductCard({
  product,
  t,
  onSelect,
}: {
  product: Product;
  t: Translate;
  onSelect: (p: Product) => void;
}) {
  return (
    <article
      id={`product-${product.id}`}
      className={`product-card card-${product.id} reveal`}
      style={{ "--accent": product.accent } as CSSProperties}
    >
      <div className="card-top">
        <div className="card-identity">
          <ProductMark id={product.id} />
          <h3>{product.name}</h3>
        </div>
        <span className="card-role mono">{t(product.role)}</span>
      </div>
      <ProductArt id={product.id} />
      <div className="card-bottom">
        <h4>{t(product.title)}</h4>
        <p>{t(product.description)}</p>
        <button
          className="card-link"
          onClick={() => onSelect(product)}
          aria-label={`${t("products.more")} ${product.name}`}
        >
          <span>{t("products.more")}</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </article>
  );
}
function ProductDialog({
  product,
  t,
  onClose,
  onRestoreFocus,
}: {
  product: Product | null;
  t: Translate;
  onClose: () => void;
  onRestoreFocus: () => void;
}) {
  return (
    <Dialog.Root
      open={product !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content
          className="product-dialog"
          style={{ "--accent": product?.accent } as CSSProperties}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            onRestoreFocus();
          }}
          aria-describedby="product-description"
        >
          {product && (
            <>
              <div className="dialog-eyebrow mono">
                {t(
                  product.category === "ai"
                    ? "products.layer.ai"
                    : "products.layer.value",
                )}{" "}
                <span>/ {t("products.detail")}</span>
              </div>
              <div className="dialog-heading">
                <ProductMark id={product.id} />
                <Dialog.Title>{product.name}</Dialog.Title>
              </div>
              <h3>{t(product.title)}</h3>
              <Dialog.Description id="product-description">
                {t(product.detail)}
              </Dialog.Description>
              <div className="dialog-features">
                <span className="mono">{t("products.capabilities")}</span>
                {product.features.map((key) => (
                  <div key={key}>
                    <Check size={16} />
                    <span>{t(key)}</span>
                  </div>
                ))}
              </div>
              {product.id === "hit" && (
                <p className="risk-note">{t("hit.risk")}</p>
              )}
              <Button asChild>
                <a
                  href={`https://${product.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("products.open")} {product.name}
                  <ArrowUpRight size={17} />
                </a>
              </Button>
              <span className="dialog-domain mono">{product.domain}</span>
            </>
          )}
          <Dialog.Close asChild>
            <Button
              className="dialog-close"
              variant="ghost"
              size="icon"
              aria-label={t("nav.close")}
            >
              <X size={20} />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
function App() {
  const [locale, setLocale] = useState<Locale>(readLocale);
  const [filter, setFilter] = useState<Category>("all");
  const [flow, setFlow] = useState<"ai" | "value">("ai");
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  function selectProduct(product: Product) {
    lastTriggerRef.current = document.activeElement as HTMLElement;
    setSelected(product);
  }
  const [selected, setSelected] = useState<Product | null>(null);
  const [paused, setPaused] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const t: Translate = (key) => dictionaries[locale][key];
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title =
      "No Trade No Life — " +
      (locale === "zh" ? "智能与价值，彼此连接" : "Intelligence meets value");
    // RECOVERY: language switching still works when browser storage is disabled.
    try {
      localStorage.setItem("ntnl-locale", locale);
    } catch {
      /* Storage is optional; retain the current session state. */
    }
  }, [locale]);
  useEffect(() => {
    document.documentElement.dataset.paused = String(paused);
  }, [paused]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const displayed = products.filter(
    (product) => filter === "all" || product.category === filter,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        {t("nav.skip")}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand" aria-label="No Trade No Life">
            <BrandMark />
            <span>
              NTNL<span className="brand-dot"></span>
            </span>
            <span className="brand-expanded">
              NO TRADE
              <br />
              NO LIFE
            </span>
          </a>
          <nav className="desktop-nav" aria-label={t("nav.menu")}>
            {navigation.map(([id, key]) => (
              <a key={id} href={`#${id}`}>
                {t(key)}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="language-trigger"
                  aria-label={t("nav.language")}
                >
                  <Globe2 size={17} />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="dropdown"
                  align="end"
                  sideOffset={14}
                >
                  <DropdownMenu.RadioGroup
                    value={locale}
                    onValueChange={(value) => setLocale(value as Locale)}
                  >
                    {(["zh", "en"] as const).map((lang) => (
                      <DropdownMenu.RadioItem
                        value={lang}
                        key={lang}
                        className="dropdown-item"
                      >
                        {lang === "zh" ? "简体中文" : "English"}
                        <DropdownMenu.ItemIndicator>
                          <Check size={15} />
                        </DropdownMenu.ItemIndicator>
                      </DropdownMenu.RadioItem>
                    ))}
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <Button
              asChild
              variant="outline"
              size="small"
              className="header-cta"
            >
              <a href="#ecosystem">
                {t("nav.explore")}
                <ArrowUpRight size={15} />
              </a>
            </Button>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mobile-menu"
                  aria-label={t("nav.menu")}
                >
                  <Menu size={22} />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="dropdown mobile-dropdown"
                  align="end"
                  sideOffset={14}
                >
                  {navigation.map(([id, key]) => (
                    <DropdownMenu.Item key={id} asChild>
                      <a className="dropdown-item" href={`#${id}`}>
                        {t(key)}
                        <ArrowUpRight size={16} />
                      </a>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              {t("hero.eyebrow")}
            </div>
            <h1 id="hero-title">
              NO TRADE.
              <br />
              NO{" "}
              <span className="life-word">
                LIFE<span className="lime-period">.</span>
              </span>
            </h1>
            <p className="hero-description">{t("hero.description")}</p>
            <div className="hero-buttons">
              <Button asChild>
                <a href="#ecosystem">
                  {t("hero.cta")}
                  <ArrowUpRight size={18} />
                </a>
              </Button>
              <a className="text-link" href="#philosophy">
                {t("hero.secondary")}
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-signature mono">
              <span className="signature-line" />
              {t("hero.coordinate")}
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-coordinate mono">
              NTNL / CONNECTED SYSTEMS<span>FIG. 001</span>
            </div>
            <div className="orbital-guide" aria-hidden="true" />
            <Orbit paused={paused} label={t("hero.art")} />
            <div className="orbit-center">
              <span className="orbit-cross">+</span>
              <span className="mono">
                THE CONNECTIVE
                <br />
                ELEMENT
              </span>
            </div>
            {products.map((product, index) => (
              <button
                key={product.id}
                className={`orbit-node node-${index}`}
                style={{ "--accent": product.accent } as CSSProperties}
                onClick={() => selectProduct(product)}
                aria-label={`${t("products.more")} ${product.name}`}
              >
                <ProductMark id={product.id} />
                <span>{product.name}</span>
                <span className="node-dot" />
              </button>
            ))}
            <div className="visual-footer">
              <span className="mono">{t("hero.caption")}</span>
              <Button
                variant="ghost"
                size="icon"
                className="motion-toggle"
                onClick={() => setPaused(!paused)}
                aria-label={t(paused ? "hero.play" : "hero.pause")}
                aria-pressed={paused}
              >
                {paused ? <Play size={14} /> : <Pause size={14} />}
              </Button>
            </div>
          </div>
          <a className="scroll-cue mono" href="#ecosystem">
            <ArrowDown size={14} />
            {t("hero.scroll")}
            <span>01 — 03</span>
          </a>
        </section>
        <div className="product-strip" aria-label={t("nav.ecosystem")}>
          <div className="strip-label mono">
            ONE ECOSYSTEM.
            <br />
            <span>INFINITE POSSIBILITIES.</span>
          </div>
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => selectProduct(product)}
              aria-label={`${t("products.more")} ${product.name}`}
            >
              <ProductMark id={product.id} />
              <span>{product.name}</span>
            </button>
          ))}
        </div>
        <section
          className="section ecosystem-section"
          id="ecosystem"
          aria-labelledby="ecosystem-title"
        >
          <div className="section-intro reveal">
            <div>
              <p className="eyebrow mono">{t("products.eyebrow")}</p>
              <h2 id="ecosystem-title">
                {t("products.title")}
                <br />
                <span className="muted-heading">{t("products.title2")}</span>
              </h2>
            </div>
            <p className="section-description">{t("products.description")}</p>
          </div>
          <div className="filter-bar">
            <div className="filters" aria-label={t("nav.ecosystem")}>
              {filters.map((item) => (
                <button
                  className={filter === item.id ? "active" : ""}
                  key={item.id}
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                >
                  {t(item.key)}
                  <span className="mono">{item.count}</span>
                </button>
              ))}
            </div>
            <span className="filter-count mono" aria-live="polite">
              {String(displayed.length).padStart(2, "0")} {t("products.count")}{" "}
              <ChevronDown size={13} />
            </span>
          </div>
          <div className={`product-grid filter-${filter}`}>
            {displayed.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                t={t}
                onSelect={selectProduct}
              />
            ))}
          </div>
        </section>
        <section
          className="connection-section"
          id="connections"
          aria-labelledby="connection-title"
        >
          <div className="section">
            <div className="section-intro reveal">
              <div>
                <p className="eyebrow mono">{t("connection.eyebrow")}</p>
                <h2 id="connection-title">
                  {t("connection.title")}
                  <br />
                  <span className="muted-heading">
                    {t("connection.title2")}
                  </span>
                </h2>
              </div>
              <p className="section-description">
                {t("connection.description")}
              </p>
            </div>
            <div className="connection-panel reveal">
              <div className="connection-panel-top">
                <div className="flow-tabs">
                  {(["ai", "value"] as const).map((item) => (
                    <button
                      key={item}
                      onClick={() => setFlow(item)}
                      className={flow === item ? "active" : ""}
                      aria-pressed={flow === item}
                    >
                      {t(item === "ai" ? "connection.ai" : "connection.value")}
                      {flow === item && <ArrowUpRight size={14} />}
                    </button>
                  ))}
                </div>
                <span className="mono connection-index">
                  INTERCONNECTION / 0{flow === "ai" ? "1" : "2"}
                </span>
              </div>
              <div className="flow-map" data-flow={flow}>
                {flows[flow].map((node, index) => (
                  <div key={node.id} className="flow-unit">
                    <span className="flow-label mono">
                      0{index + 1} / {t(node.label)}
                    </span>
                    <button
                      className="flow-node"
                      onClick={() => selectProduct(productById[node.id])}
                      style={
                        {
                          "--accent": productById[node.id].accent,
                        } as CSSProperties
                      }
                    >
                      <ProductMark id={node.id} />
                      <span>{productById[node.id].name}</span>
                      <ArrowUpRight size={13} />
                    </button>
                    {index < flows[flow].length - 1 && (
                      <div className="flow-line" aria-hidden="true">
                        <span />
                        <ArrowRight size={13} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {flow === "value" && (
                <button
                  className="settlement-node"
                  onClick={() => selectProduct(productById.midas)}
                >
                  <ProductMark id="midas" />
                  <span>Midas</span>
                  <span className="mono">{t("connection.label.payment")}</span>
                  <ArrowUpRight size={13} />
                </button>
              )}
              <div className="flow-description" aria-live="polite">
                <div>
                  <h3>
                    {t(
                      flow === "ai"
                        ? "connection.ai.title"
                        : "connection.value.title",
                    )}
                  </h3>
                  <p>
                    {t(
                      flow === "ai"
                        ? "connection.ai.description"
                        : "connection.value.description",
                    )}
                  </p>
                </div>
                <span className="flow-hint">
                  <Plus size={15} />
                  {t("connection.hint")}
                </span>
              </div>
              <div className="connection-panel-bottom mono">
                <span>
                  <span className="small-dot" />
                  {t("connection.note")}
                </span>
                <span>NTNL.IO</span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section philosophy-section"
          id="philosophy"
          aria-labelledby="philosophy-title"
        >
          <div className="philosophy-top reveal">
            <p className="eyebrow mono">{t("about.eyebrow")}</p>
            <span className="philosophy-symbol" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="philosophy-main reveal">
            <h2 id="philosophy-title">
              {t("about.title")}
              <br />
              <span>{t("about.title2")}</span>
            </h2>
            <p>{t("about.description")}</p>
          </div>
          <div className="principles reveal">
            {(["1", "2", "3"] as const).map((number) => (
              <article key={number}>
                <span className="mono principle-number">/ 0{number}</span>
                <h3>{t(`about.p${number}.title`)}</h3>
                <p>{t(`about.p${number}.body`)}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-inner reveal">
            <div>
              <p className="eyebrow mono">THE NEXT CONNECTION IS YOU.</p>
              <h2>
                {t("footer.title")}
                <br />
                {t("footer.title2")}
              </h2>
            </div>
            <Button asChild>
              <a href="#ecosystem">
                {t("footer.cta")}
                <ArrowUpRight size={18} />
              </a>
            </Button>
            <div className="cta-rings" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand" aria-label="No Trade No Life">
              <BrandMark />
              <span>
                NTNL<span className="brand-dot"></span>
              </span>
            </a>
            <p>{t("footer.tagline")}</p>
            <span className="mono">INDEPENDENT. INTERCONNECTED.</span>
          </div>
          <div className="footer-links">
            <span className="mono">{t("footer.products")}</span>
            <div>
              {products.slice(0, 4).map((product) => (
                <a
                  key={product.id}
                  href={`https://${product.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <span className="mono">{t("products.value")}</span>
            <div>
              {products.slice(4).map((product) => (
                <a
                  key={product.id}
                  href={`https://${product.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <span className="mono">{t("footer.connect")}</span>
            <div>
              <a
                href="https://linkit.ntnl.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.community")}
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://github.com/No-Trade-No-Life"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.github")}
                <ArrowUpRight size={12} />
              </a>
              <a href="#top">
                {t("footer.back")}
                <ArrowUp size={12} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          NO TRADE NO LIFE<span>↗</span>
        </div>
        <div className="footer-bottom">
          <span>
            © {currentYear} {t("footer.copyright")}
          </span>
          <span className="mono">BUILT TO CONNECT.</span>
        </div>
        <p className="footer-risk">{t("footer.risk")}</p>
      </footer>
      <ProductDialog
        product={selected}
        t={t}
        onClose={() => setSelected(null)}
        onRestoreFocus={() =>
          lastTriggerRef.current?.focus({ preventScroll: true })
        }
      />
    </>
  );
}
export default App;
