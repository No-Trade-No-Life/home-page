import { useState, type CSSProperties } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import type { CopyKey } from "../copy";
import { productById, type Product, type ProductId } from "../products";
import { ProductMark } from "./Marks";
import "./connections.css";

type Translate = (key: CopyKey) => string;
type ScenarioProps = { t: Translate; onSelect: (product: Product) => void };
type ScenarioView = "open" | "ai" | "fund";
const views: {
  id: ScenarioView;
  label: CopyKey;
  title: CopyKey;
  description: CopyKey;
}[] = [
  {
    id: "open",
    label: "connection.open",
    title: "connection.open.title",
    description: "connection.open.description",
  },
  {
    id: "ai",
    label: "connection.ai",
    title: "connection.ai.title",
    description: "connection.ai.description",
  },
  {
    id: "fund",
    label: "connection.fund",
    title: "connection.fund.title",
    description: "connection.fund.description",
  },
];
const networkOrder: ProductId[] = [
  "linkit",
  "firma",
  "ctx",
  "hit",
  "midas",
  "normai",
  "exchange",
  "cybion",
];
const fundStages: { id: ProductId; label: CopyKey; description: CopyKey }[] = [
  {
    id: "midas",
    label: "connection.fund.midas.label",
    description: "connection.fund.midas.body",
  },
  {
    id: "firma",
    label: "connection.fund.firma.label",
    description: "connection.fund.firma.body",
  },
  {
    id: "cybion",
    label: "connection.fund.cybion.label",
    description: "connection.fund.cybion.body",
  },
  {
    id: "hit",
    label: "connection.fund.hit.label",
    description: "connection.fund.hit.body",
  },
  {
    id: "exchange",
    label: "connection.fund.exchange.label",
    description: "connection.fund.exchange.body",
  },
  {
    id: "linkit",
    label: "connection.fund.linkit.label",
    description: "connection.fund.linkit.body",
  },
];

function ScenarioProduct({
  id,
  label,
  description,
  t,
  onSelect,
}: ScenarioProps & {
  id: ProductId;
  label: CopyKey;
  description: CopyKey;
}) {
  const product = productById[id];
  return (
    <button
      className="scenario-product"
      data-product={id}
      style={{ "--accent": product.accent } as CSSProperties}
      onClick={() => onSelect(product)}
      aria-label={`${t("products.more")} ${product.name}`}
    >
      <span className="scenario-product-role mono">{t(label)}</span>
      <span className="scenario-product-heading">
        <ProductMark id={id} />
        <strong>{product.name}</strong>
        <ArrowUpRight size={18} />
      </span>
      <span className="scenario-product-description">{t(description)}</span>
    </button>
  );
}

function OpenNetwork({ t, onSelect }: ScenarioProps) {
  return (
    <div className="open-network">
      <div className="network-frame">
        <svg
          className="network-lines"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M125 75H875M125 325H875M125 75 375 325 625 75 875 325M875 75 625 325 375 75 125 325M125 75 875 325M875 75 125 325" />
          <ellipse cx="500" cy="200" rx="420" ry="140" />
        </svg>
        <div className="network-grid">
          {networkOrder.map((id) => {
            const product = productById[id];
            return (
              <button
                key={id}
                className="network-node"
                data-product={id}
                style={{ "--accent": product.accent } as CSSProperties}
                onClick={() => onSelect(product)}
                aria-label={`${t("products.more")} ${product.name}`}
              >
                <ProductMark id={id} />
                <strong>{product.name}</strong>
                <span>{t(product.role)}</span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="network-caption mono">{t("connection.open.caption")}</p>
    </div>
  );
}

function IntelligentScenario({ t, onSelect }: ScenarioProps) {
  return (
    <div className="ai-scenario">
      <div className="ai-entry" data-relation="linkit-cybion">
        <ScenarioProduct
          id="linkit"
          label="connection.ai.linkit.label"
          description="connection.ai.linkit.body"
          t={t}
          onSelect={onSelect}
        />
        <ArrowRight
          className="scenario-connector"
          size={24}
          aria-hidden="true"
        />
        <ScenarioProduct
          id="cybion"
          label="connection.ai.cybion.label"
          description="connection.ai.cybion.body"
          t={t}
          onSelect={onSelect}
        />
      </div>
      <div className="ai-resources" data-relation="cybion-resources">
        <p className="ai-resources-label">
          <ArrowDown size={22} aria-hidden="true" />
          {t("connection.ai.resources")}
        </p>
        <div className="ai-context" data-relation="cybion-ctx">
          <ScenarioProduct
            id="ctx"
            label="connection.ai.ctx.label"
            description="connection.ai.ctx.body"
            t={t}
            onSelect={onSelect}
          />
        </div>
        <div className="ai-model-billing" data-relation="normai-midas">
          <ScenarioProduct
            id="normai"
            label="connection.ai.normai.label"
            description="connection.ai.normai.body"
            t={t}
            onSelect={onSelect}
          />
          <ArrowRight
            className="scenario-connector"
            size={24}
            aria-hidden="true"
          />
          <ScenarioProduct
            id="midas"
            label="connection.ai.midas.label"
            description="connection.ai.midas.body"
            t={t}
            onSelect={onSelect}
          />
          <p className="ai-billing-label">{t("connection.ai.billing")}</p>
        </div>
      </div>
    </div>
  );
}

function FundScenario({ t, onSelect }: ScenarioProps) {
  return (
    <div className="fund-scenario">
      <ol className="fund-path">
        {fundStages.map((stage, index) => (
          <li key={stage.id} data-stage={stage.id}>
            <div className="fund-stage-index mono">
              <span>0{index + 1} / 06</span>
              {index < fundStages.length - 1 && (
                <ArrowRight size={22} aria-hidden="true" />
              )}
            </div>
            <ScenarioProduct {...stage} t={t} onSelect={onSelect} />
          </li>
        ))}
      </ol>
      <p className="scenario-caution">{t("connection.fund.caution")}</p>
    </div>
  );
}

const scenarioComponents = {
  open: OpenNetwork,
  ai: IntelligentScenario,
  fund: FundScenario,
};

export function Connections({ t, onSelect }: ScenarioProps) {
  const [view, setView] = useState<ScenarioView>("open");
  const selected = views.find((item) => item.id === view)!;
  const Scenario = scenarioComponents[view];
  return (
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
              <span className="muted-heading">{t("connection.title2")}</span>
            </h2>
          </div>
          <p className="section-description">{t("connection.description")}</p>
        </div>
        <div className="scenario-panel reveal">
          <div className="scenario-panel-top">
            <div
              className="scenario-tabs"
              role="group"
              aria-label={t("connection.eyebrow")}
            >
              {views.map((item) => (
                <button
                  key={item.id}
                  data-scenario={item.id}
                  onClick={() => setView(item.id)}
                  aria-pressed={view === item.id}
                  aria-controls="scenario-view"
                >
                  {t(item.label)}
                </button>
              ))}
            </div>
            <span className="mono scenario-index">OPEN ECOSYSTEM / 08</span>
          </div>
          <div id="scenario-view" className="scenario-view" data-view={view}>
            <div className="scenario-intro" aria-live="polite">
              <h3>{t(selected.title)}</h3>
              <p>{t(selected.description)}</p>
            </div>
            <Scenario t={t} onSelect={onSelect} />
          </div>
          <div className="shared-services">
            <p className="eyebrow mono">{t("connection.shared.eyebrow")}</p>
            <h3>{t("connection.shared.title")}</h3>
            <p className="shared-description">
              {t("connection.shared.description")}
            </p>
            <div className="shared-grid">
              <ScenarioProduct
                id="linkit"
                label="linkit.role"
                description="connection.shared.linkit"
                t={t}
                onSelect={onSelect}
              />
              <ScenarioProduct
                id="midas"
                label="midas.role"
                description="connection.shared.midas"
                t={t}
                onSelect={onSelect}
              />
            </div>
          </div>
          <div className="scenario-panel-bottom">
            <span>{t("connection.note")}</span>
            <span>
              <Plus size={18} aria-hidden="true" />
              {t("connection.hint")}
            </span>
          </div>
        </div>
        <div className="more-combinations reveal">
          <span className="combination-symbol" aria-hidden="true">
            ✳
          </span>
          <div>
            <h3>{t("connection.more.title")}</h3>
            <p>{t("connection.more.body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
