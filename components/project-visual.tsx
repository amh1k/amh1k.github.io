import type { Project } from "@/lib/portfolio-data";

type ProjectVisualProps = {
  type: Project["visual"];
};

const systemLines = {
  mithril: ["room / actor", "socket / ticket", "round / state", "score / persist"],
  monitor: ["worker / heartbeat", "queue / 3,000 jobs", "retry / exponential", "state / healthy"],
  algorithms: ["divide", "recurse", "measure", "visualize"],
  api: ["POST / auth", "GET / books", "PATCH / reviews", "UPLOAD / media"],
  dsl: ["parse", "branch", "compile", "play"],
  go: ["migrate", "authorize", "serve", "test"],
  llm: ["tokenize", "attend", "predict", "verify"],
};

export function ProjectVisual({ type }: ProjectVisualProps) {
  const lines = systemLines[type];

  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-map">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="visual-data">
        <p className="visual-label">system / {type}</p>
        {lines.map((line, index) => (
          <p key={line}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
