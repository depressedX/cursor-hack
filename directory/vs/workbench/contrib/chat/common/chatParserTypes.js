define(de[329], he([1, 0, 197, 289, 153]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$X2 =
					e.$W2 =
					e.$V2 =
					e.$U2 =
					e.$T2 =
					e.$S2 =
					e.$R2 =
					e.$Q2 =
					e.$P2 =
					e.$O2 =
						void 0),
				(e.$N2 = E),
				(e.$Y2 = c),
				(e.$Z2 = n),
				(e.$12 = g);
			function E(p) {
				const o = p.parts
						.map((b) => b.promptText)
						.join("")
						.trimStart(),
					f = p.text.length - o.length;
				return { message: o, diff: f };
			}
			class C {
				static {
					this.Kind = "text";
				}
				constructor(o, f, b) {
					(this.range = o),
						(this.editorRange = f),
						(this.text = b),
						(this.kind = C.Kind);
				}
				get promptText() {
					return this.text;
				}
			}
			(e.$O2 = C), (e.$P2 = "#"), (e.$Q2 = "@"), (e.$R2 = "/");
			class d {
				static {
					this.Kind = "var";
				}
				constructor(o, f, b, s, l) {
					(this.range = o),
						(this.editorRange = f),
						(this.variableName = b),
						(this.variableArg = s),
						(this.variableId = l),
						(this.kind = d.Kind);
				}
				get text() {
					const o = this.variableArg ? `:${this.variableArg}` : "";
					return `${e.$P2}${this.variableName}${o}`;
				}
				get promptText() {
					return this.text;
				}
			}
			e.$S2 = d;
			class m {
				static {
					this.Kind = "tool";
				}
				constructor(o, f, b, s) {
					(this.range = o),
						(this.editorRange = f),
						(this.toolName = b),
						(this.toolId = s),
						(this.kind = m.Kind);
				}
				get text() {
					return `${e.$P2}${this.toolName}`;
				}
				get promptText() {
					return this.text;
				}
			}
			e.$T2 = m;
			class r {
				static {
					this.Kind = "agent";
				}
				constructor(o, f, b) {
					(this.range = o),
						(this.editorRange = f),
						(this.agent = b),
						(this.kind = r.Kind);
				}
				get text() {
					return `${e.$Q2}${this.agent.name}`;
				}
				get promptText() {
					return "";
				}
			}
			e.$U2 = r;
			class u {
				static {
					this.Kind = "subcommand";
				}
				constructor(o, f, b) {
					(this.range = o),
						(this.editorRange = f),
						(this.command = b),
						(this.kind = u.Kind);
				}
				get text() {
					return `${e.$R2}${this.command.name}`;
				}
				get promptText() {
					return "";
				}
			}
			e.$V2 = u;
			class a {
				static {
					this.Kind = "slash";
				}
				constructor(o, f, b) {
					(this.range = o),
						(this.editorRange = f),
						(this.slashCommand = b),
						(this.kind = a.Kind);
				}
				get text() {
					return `${e.$R2}${this.slashCommand.command}`;
				}
				get promptText() {
					return `${e.$R2}${this.slashCommand.command}`;
				}
			}
			e.$W2 = a;
			class h {
				static {
					this.Kind = "dynamic";
				}
				constructor(o, f, b, s, l, y) {
					(this.range = o),
						(this.editorRange = f),
						(this.text = b),
						(this.id = s),
						(this.modelDescription = l),
						(this.data = y),
						(this.kind = h.Kind);
				}
				get referenceText() {
					return this.text.replace(e.$P2, "");
				}
				get promptText() {
					return this.text;
				}
			}
			e.$X2 = h;
			function c(p) {
				return {
					text: p.text,
					parts: p.parts.map((o) => {
						if (o.kind === C.Kind)
							return new C(
								new i.$pL(o.range.start, o.range.endExclusive),
								o.editorRange,
								o.text,
							);
						if (o.kind === d.Kind)
							return new d(
								new i.$pL(o.range.start, o.range.endExclusive),
								o.editorRange,
								o.variableName,
								o.variableArg,
								o.variableId || "",
							);
						if (o.kind === m.Kind)
							return new m(
								new i.$pL(o.range.start, o.range.endExclusive),
								o.editorRange,
								o.toolName,
								o.toolId,
							);
						if (o.kind === r.Kind) {
							let f = o.agent;
							return (
								(f = (0, w.$i3)(f)),
								new r(
									new i.$pL(o.range.start, o.range.endExclusive),
									o.editorRange,
									f,
								)
							);
						} else {
							if (o.kind === u.Kind)
								return new u(
									new i.$pL(o.range.start, o.range.endExclusive),
									o.editorRange,
									o.command,
								);
							if (o.kind === a.Kind)
								return new a(
									new i.$pL(o.range.start, o.range.endExclusive),
									o.editorRange,
									o.slashCommand,
								);
							if (o.kind === h.Kind)
								return new h(
									new i.$pL(o.range.start, o.range.endExclusive),
									o.editorRange,
									o.text,
									o.id,
									o.modelDescription,
									(0, t.$ji)(o.data),
								);
							throw new Error(`Unknown chat request part: ${o.kind}`);
						}
					}),
				};
			}
			function n(p) {
				const o = p.parts.find((b) => b instanceof r),
					f = p.parts.find((b) => b instanceof u);
				return { agentPart: o, commandPart: f };
			}
			function g(p, o, f, b = null, s = null) {
				let l = "";
				if (b && b !== p.getDefaultAgent(o)?.id) {
					const y = p.getAgent(b);
					if (!y) return;
					(l += `${e.$Q2}${y.name} `), s && (l += `${e.$R2}${s} `);
				}
				return l + f;
			}
		}),
		