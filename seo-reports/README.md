# seo-reports/

Output directory for the `/seo-workflow` automated SEO content pipeline.

Each run creates a dated subfolder (`YYYY-MM-DD/`) containing the state file, per-phase artifacts (audits, keyword research, drafts in HTML and Markdown, publish results), and a human-readable `summary.md`.

Only `summary.md` files are committed to git — everything else (including `state.json` and the raw drafts) is gitignored. Drafts live in Payload after the publish phase; this folder is the run trail, not a content store.

See the orchestrator command at `~/.claude/commands/seo-workflow.md` and the implementation plan at `~/.claude/plans/keen-churning-catmull.md`.
