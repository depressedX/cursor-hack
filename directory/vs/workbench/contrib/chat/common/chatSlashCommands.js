define(de[829], he([1, 0, 6, 3, 5, 53]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$M2 = e.$L2 = void 0),
				(e.$L2 = (0, w.$Mi)("chatSlashCommandService"));
			let C = class extends i.$1c {
				constructor(m) {
					super(),
						(this.f = m),
						(this.a = new Map()),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeCommands = this.b.event);
				}
				dispose() {
					super.dispose(), this.a.clear();
				}
				registerSlashCommand(m, r) {
					if (this.a.has(m.command))
						throw new Error(
							`Already registered a command with id ${m.command}}`,
						);
					return (
						this.a.set(m.command, { data: m, command: r }),
						this.b.fire(),
						(0, i.$Yc)(() => {
							this.a.delete(m.command) && this.b.fire();
						})
					);
				}
				getCommands(m) {
					return Array.from(this.a.values(), (r) => r.data).filter((r) =>
						r.locations.includes(m),
					);
				}
				hasCommand(m) {
					return this.a.has(m);
				}
				async executeCommand(m, r, u, a, h, c) {
					const n = this.a.get(m);
					if (!n) throw new Error("No command with id ${id} NOT registered");
					if (
						(n.command || (await this.f.activateByEvent(`onSlash:${m}`)),
						!n.command)
					)
						throw new Error(`No command with id ${m} NOT resolved`);
					return await n.command(r, u, a, h, c);
				}
			};
			(e.$M2 = C), (e.$M2 = C = Ne([j(0, E.$q2)], C));
		}),
		define(
			de[569],
			he([1, 0, 15, 6, 103, 3, 8, 5, 53]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F2 = e.$E2 = void 0),
					(e.$E2 = (0, d.$Mi)("ILanguageModelToolsService"));
				let r = class extends E.$1c {
					constructor(a, h) {
						super(),
							(this.g = a),
							(this.h = h),
							(this.a = new i.$re()),
							(this.onDidChangeTools = this.a.event),
							(this.b = new t.$Yh(() => this.a.fire(), 750)),
							(this.c = new Map()),
							(this.f = new Set()),
							this.D(
								this.h.onDidChangeContext((c) => {
									c.affectsSome(this.f) && this.b.schedule();
								}),
							);
					}
					registerToolData(a) {
						if (this.c.has(a.id))
							throw new Error(`Tool "${a.id}" is already registered.`);
						return (
							this.c.set(a.id, { data: a }),
							this.b.schedule(),
							a.when?.keys().forEach((h) => this.f.add(h)),
							(0, E.$Yc)(() => {
								this.c.delete(a.id), this.j(), this.b.schedule();
							})
						);
					}
					j() {
						this.f.clear();
						for (const a of this.c.values())
							a.data.when?.keys().forEach((h) => this.f.add(h));
					}
					registerToolImplementation(a, h) {
						const c = this.c.get(a);
						if (!c) throw new Error(`Tool "${a}" was not contributed.`);
						if (c.impl)
							throw new Error(`Tool "${a}" already has an implementation.`);
						return (
							(c.impl = h),
							(0, E.$Yc)(() => {
								c.impl = void 0;
							})
						);
					}
					getTools() {
						const a = w.Iterable.map(this.c.values(), (h) => h.data);
						return w.Iterable.filter(
							a,
							(h) => !h.when || this.h.contextMatchesRules(h.when),
						);
					}
					getTool(a) {
						return this.m(a)?.data;
					}
					m(a) {
						const h = this.c.get(a);
						if (h && (!h.data.when || this.h.contextMatchesRules(h.data.when)))
							return h;
					}
					getToolByName(a) {
						for (const h of this.getTools()) if (h.name === a) return h;
					}
					async invokeTool(a, h, c) {
						let n = this.c.get(a.toolId);
						if (!n) throw new Error(`Tool ${a.toolId} was not contributed`);
						if (
							!n.impl &&
							(await this.g.activateByEvent(`onLanguageModelTool:${a.toolId}`),
							(n = this.c.get(a.toolId)),
							!n?.impl)
						)
							throw new Error(
								`Tool ${a.toolId} does not have an implementation registered.`,
							);
						return n.impl.invoke(a, h, c);
					}
				};
				(e.$F2 = r), (e.$F2 = r = Ne([j(0, m.$q2), j(1, C.$6j)], r));
			},
		),
		define(
			de[1022],
			he([1, 0, 289, 48, 17, 153, 329, 829, 503, 569]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G2 = void 0);
				const u = /^@([\w_\-\.]+)(?=(\s|$|\b))/i,
					a = /^#([\w_\-]+)(:\d+)?(?=(\s|$|\b))/i,
					h = /\/([\w_\-]+)(?=(\s|$|\b))/i;
				let c = class {
					constructor(g, p, o, f) {
						(this.b = g), (this.d = p), (this.e = o), (this.f = f);
					}
					parseChatRequest(g, p, o = E.ChatAgentLocation.Panel, f) {
						const b = [],
							s = this.d.getDynamicVariables(g);
						let l = 1,
							y = 1;
						for (let S = 0; S < p.length; S++) {
							const I = p.charAt(S - 1),
								T = p.charAt(S);
							let P;
							if (
								((I.match(/\s/) || S === 0) &&
									(T === C.$P2
										? (P = this.h(p.slice(S), S, new i.$hL(l, y), b))
										: T === C.$Q2
											? (P = this.g(p.slice(S), p, S, new i.$hL(l, y), b, o, f))
											: T === C.$R2 &&
												(P = this.j(p.slice(S), p, S, new i.$hL(l, y), b, o)),
									P || (P = this.k(p.slice(S), S, new i.$hL(l, y), s))),
								P)
							) {
								if (S !== 0) {
									const k = b.at(-1),
										L = k?.range.endExclusive ?? 0,
										D = k?.editorRange.endLineNumber ?? 1,
										M = k?.editorRange.endColumn ?? 1;
									b.push(
										new C.$O2(
											new t.$pL(L, S),
											new w.$iL(D, M, l, y),
											p.slice(L, S),
										),
									);
								}
								b.push(P);
							}
							T ===
							`
`
								? (l++, (y = 1))
								: y++;
						}
						const $ = b.at(-1),
							v = $?.range.endExclusive ?? 0;
						return (
							v < p.length &&
								b.push(
									new C.$O2(
										new t.$pL(v, p.length),
										new w.$iL(
											$?.editorRange.endLineNumber ?? 1,
											$?.editorRange.endColumn ?? 1,
											l,
											y,
										),
										p.slice(v, p.length),
									),
								),
							{ parts: b, text: p }
						);
					}
					g(g, p, o, f, b, s, l) {
						const y = g.match(u);
						if (!y) return;
						const [$, v] = y,
							S = new t.$pL(o, o + $.length),
							I = new w.$iL(
								f.lineNumber,
								f.column,
								f.lineNumber,
								f.column + $.length,
							);
						let T = this.b.getAgentsByName(v);
						if (!T.length) {
							const M = this.b.getAgentByFullyQualifiedId(v);
							M && (T = [M]);
						}
						const P =
							T.length > 1 && l?.selectedAgent
								? l.selectedAgent
								: T.find((M) => M.locations.includes(s));
						if (
							!P ||
							b.some((M) => M instanceof C.$U2) ||
							b.some(
								(M) =>
									(M instanceof C.$O2 && M.text.trim() !== "") ||
									!(M instanceof C.$U2),
							)
						)
							return;
						const L = b.at(-1)?.range.endExclusive ?? 0;
						if (p.slice(L, o).trim() === "") return new C.$U2(S, I, P);
					}
					h(g, p, o, f) {
						const b = g.match(a);
						if (!b) return;
						const [s, l] = b,
							y = b[2] ?? "",
							$ = new t.$pL(p, p + s.length),
							v = new w.$iL(
								o.lineNumber,
								o.column,
								o.lineNumber,
								o.column + s.length,
							),
							S = f.find((k) => k instanceof C.$U2),
							I = !S || S.agent.metadata.supportsSlowVariables,
							T = this.d.getVariable(l);
						if (T && (!T.isSlow || I)) return new C.$S2($, v, l, y, T.id);
						const P = this.f.getToolByName(l);
						if (
							P &&
							P.canBeInvokedManually &&
							(!S || S.agent.supportsToolReferences)
						)
							return new C.$T2($, v, l, P.id);
					}
					j(g, p, o, f, b, s) {
						const l = g.match(h);
						if (!l || b.some((T) => T instanceof C.$W2)) return;
						const [y, $] = l,
							v = new t.$pL(o, o + y.length),
							S = new w.$iL(
								f.lineNumber,
								f.column,
								f.lineNumber,
								f.column + y.length,
							),
							I = b.find((T) => T instanceof C.$U2);
						if (I) {
							if (
								b.some(
									(D) =>
										(D instanceof C.$O2 && D.text.trim() !== "") ||
										(!(D instanceof C.$U2) && !(D instanceof C.$O2)),
								)
							)
								return;
							const P = b.at(-1)?.range.endExclusive ?? 0;
							if (p.slice(P, o).trim() !== "") return;
							const L = I.agent.slashCommands.find((D) => D.name === $);
							if (L) return new C.$V2(v, S, L);
						} else {
							const P = this.e.getCommands(s).find((k) => k.command === $);
							if (P) return new C.$W2(v, S, P);
							{
								const L = this.b
									.getDefaultAgent(s)
									?.slashCommands.find((D) => D.name === $);
								if (L) return new C.$V2(v, S, L);
							}
						}
					}
					k(g, p, o, f) {
						const b = f.find(
							(s) =>
								s.range.startLineNumber === o.lineNumber &&
								s.range.startColumn === o.column,
						);
						if (b) {
							const s = b.range.endColumn - b.range.startColumn,
								l = g.substring(0, s),
								y = new t.$pL(p, p + s);
							return new C.$X2(y, b.range, l, b.id, b.modelDescription, b.data);
						}
					}
				};
				(e.$G2 = c),
					(e.$G2 = c =
						Ne([j(0, E.$c3), j(1, m.$D2), j(2, d.$L2), j(3, r.$E2)], c));
			},
		),
		define(
			de[3306],
			he([1, 0, 4, 187, 28, 532, 152, 61, 250, 30, 53, 754, 546, 136, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qmc = void 0),
					(t = mt(t)),
					(w = mt(w));
				function p(y) {
					if (!Array.isArray(y)) return !1;
					for (let $ = 0, v = y.length; $ < v; $++)
						if (typeof y[$] != "string") return !1;
					return !0;
				}
				function o(y) {
					return p(y) && y.length === 2;
				}
				let f = (g = class extends n.$1c {
					constructor($, v, S, I) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.a = new Map()),
							this.D(
								this.b.onDidRequestBasicLanguageFeatures(async (T) => {
									this.f.whenInstalledExtensionsRegistered().then(() => {
										this.h(T);
									});
								}),
							),
							this.D(
								this.b.onDidChange(() => {
									for (const [T] of this.a) this.h(T);
								}),
							);
					}
					async h($) {
						const v = this.b.getConfigurationFiles($),
							S = (0, c.$Aj)(v.map((T) => T.toString()));
						if (this.a.get($) === S) return;
						this.a.set($, S);
						const I = await Promise.all(v.map((T) => this.j(T)));
						for (const T of I) this.u($, T);
					}
					async j($) {
						try {
							const v = await this.c.readExtensionResource($),
								S = [];
							let I = (0, i.$do)(v, S);
							return (
								S.length &&
									console.error(
										t.localize(
											4920,
											null,
											$.toString(),
											S.map(
												(T) =>
													`[${T.offset}, ${T.length}] ${(0, a.$br)(T.error)}`,
											).join(`
`),
										),
									),
								(0, i.$lo)(I) !== "object" &&
									(console.error(t.localize(4921, null, $.toString())),
									(I = {})),
								I
							);
						} catch (v) {
							return console.error(v), {};
						}
					}
					static m($, v) {
						const S = v.comments;
						if (typeof S > "u") return;
						if (!w.$ng(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`comments\` to be an object.`,
							);
							return;
						}
						let I;
						return (
							typeof S.lineComment < "u" &&
								(typeof S.lineComment != "string"
									? console.warn(
											`[${$}]: language configuration: expected \`comments.lineComment\` to be a string.`,
										)
									: ((I = I || {}), (I.lineComment = S.lineComment))),
							typeof S.blockComment < "u" &&
								(o(S.blockComment)
									? ((I = I || {}), (I.blockComment = S.blockComment))
									: console.warn(
											`[${$}]: language configuration: expected \`comments.blockComment\` to be an array of two strings.`,
										)),
							I
						);
					}
					static n($, v) {
						const S = v.brackets;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`brackets\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (!o(k)) {
								console.warn(
									`[${$}]: language configuration: expected \`brackets[${T}]\` to be an array of two strings.`,
								);
								continue;
							}
							(I = I || []), I.push(k);
						}
						return I;
					}
					static q($, v) {
						const S = v.autoClosingPairs;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`autoClosingPairs\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (Array.isArray(k)) {
								if (!o(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								(I = I || []), I.push({ open: k[0], close: k[1] });
							} else {
								if (!w.$ng(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								if (typeof k.open != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}].open\` to be a string.`,
									);
									continue;
								}
								if (typeof k.close != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}].close\` to be a string.`,
									);
									continue;
								}
								if (typeof k.notIn < "u" && !p(k.notIn)) {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}].notIn\` to be a string array.`,
									);
									continue;
								}
								(I = I || []),
									I.push({ open: k.open, close: k.close, notIn: k.notIn });
							}
						}
						return I;
					}
					static r($, v) {
						const S = v.surroundingPairs;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`surroundingPairs\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (Array.isArray(k)) {
								if (!o(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								(I = I || []), I.push({ open: k[0], close: k[1] });
							} else {
								if (!w.$ng(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								if (typeof k.open != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}].open\` to be a string.`,
									);
									continue;
								}
								if (typeof k.close != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}].close\` to be a string.`,
									);
									continue;
								}
								(I = I || []), I.push({ open: k.open, close: k.close });
							}
						}
						return I;
					}
					static s($, v) {
						const S = v.colorizedBracketPairs;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`colorizedBracketPairs\` to be an array.`,
							);
							return;
						}
						const I = [];
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (!o(k)) {
								console.warn(
									`[${$}]: language configuration: expected \`colorizedBracketPairs[${T}]\` to be an array of two strings.`,
								);
								continue;
							}
							I.push([k[0], k[1]]);
						}
						return I;
					}
					static t($, v) {
						const S = v.onEnterRules;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`onEnterRules\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (!w.$ng(k)) {
								console.warn(
									`[${$}]: language configuration: expected \`onEnterRules[${T}]\` to be an object.`,
								);
								continue;
							}
							if (!w.$ng(k.action)) {
								console.warn(
									`[${$}]: language configuration: expected \`onEnterRules[${T}].action\` to be an object.`,
								);
								continue;
							}
							let L;
							if (k.action.indent === "none") L = E.IndentAction.None;
							else if (k.action.indent === "indent") L = E.IndentAction.Indent;
							else if (k.action.indent === "indentOutdent")
								L = E.IndentAction.IndentOutdent;
							else if (k.action.indent === "outdent")
								L = E.IndentAction.Outdent;
							else {
								console.warn(
									`[${$}]: language configuration: expected \`onEnterRules[${T}].action.indent\` to be 'none', 'indent', 'indentOutdent' or 'outdent'.`,
								);
								continue;
							}
							const D = { indentAction: L };
							k.action.appendText &&
								(typeof k.action.appendText == "string"
									? (D.appendText = k.action.appendText)
									: console.warn(
											`[${$}]: language configuration: expected \`onEnterRules[${T}].action.appendText\` to be undefined or a string.`,
										)),
								k.action.removeText &&
									(typeof k.action.removeText == "number"
										? (D.removeText = k.action.removeText)
										: console.warn(
												`[${$}]: language configuration: expected \`onEnterRules[${T}].action.removeText\` to be undefined or a number.`,
											));
							const M = this.w(
								$,
								`onEnterRules[${T}].beforeText`,
								k.beforeText,
							);
							if (!M) continue;
							const N = { beforeText: M, action: D };
							if (k.afterText) {
								const A = this.w(
									$,
									`onEnterRules[${T}].afterText`,
									k.afterText,
								);
								A && (N.afterText = A);
							}
							if (k.previousLineText) {
								const A = this.w(
									$,
									`onEnterRules[${T}].previousLineText`,
									k.previousLineText,
								);
								A && (N.previousLineText = A);
							}
							(I = I || []), I.push(N);
						}
						return I;
					}
					static extractValidConfig($, v) {
						const S = this.m($, v),
							I = this.n($, v),
							T = this.q($, v),
							P = this.r($, v),
							k = this.s($, v),
							L =
								typeof v.autoCloseBefore == "string"
									? v.autoCloseBefore
									: void 0,
							D = v.wordPattern
								? this.w($, "wordPattern", v.wordPattern)
								: void 0,
							M = v.indentationRules ? this.y($, v.indentationRules) : void 0;
						let N;
						if (v.folding) {
							const O = v.folding.markers,
								B =
									O && O.start
										? this.w($, "folding.markers.start", O.start)
										: void 0,
								U =
									O && O.end ? this.w($, "folding.markers.end", O.end) : void 0,
								z = B && U ? { start: B, end: U } : void 0;
							N = { offSide: v.folding.offSide, markers: z };
						}
						const A = this.t($, v);
						return {
							comments: S,
							brackets: I,
							wordPattern: D,
							indentationRules: M,
							onEnterRules: A,
							autoClosingPairs: T,
							surroundingPairs: P,
							colorizedBracketPairs: k,
							autoCloseBefore: L,
							folding: N,
							__electricCharacterSupport: void 0,
						};
					}
					u($, v) {
						const S = g.extractValidConfig($, v);
						this.g.register($, S, 50);
					}
					static w($, v, S) {
						if (typeof S == "string")
							try {
								return new RegExp(S, "");
							} catch (I) {
								console.warn(
									`[${$}]: Invalid regular expression in \`${v}\`: `,
									I,
								);
								return;
							}
						if (w.$ng(S)) {
							if (typeof S.pattern != "string") {
								console.warn(
									`[${$}]: language configuration: expected \`${v}.pattern\` to be a string.`,
								);
								return;
							}
							if (typeof S.flags < "u" && typeof S.flags != "string") {
								console.warn(
									`[${$}]: language configuration: expected \`${v}.flags\` to be a string.`,
								);
								return;
							}
							try {
								return new RegExp(S.pattern, S.flags);
							} catch (I) {
								console.warn(
									`[${$}]: Invalid regular expression in \`${v}\`: `,
									I,
								);
								return;
							}
						}
						console.warn(
							`[${$}]: language configuration: expected \`${v}\` to be a string or an object.`,
						);
					}
					static y($, v) {
						const S = this.w(
							$,
							"indentationRules.increaseIndentPattern",
							v.increaseIndentPattern,
						);
						if (!S) return;
						const I = this.w(
							$,
							"indentationRules.decreaseIndentPattern",
							v.decreaseIndentPattern,
						);
						if (!I) return;
						const T = { increaseIndentPattern: S, decreaseIndentPattern: I };
						return (
							v.indentNextLinePattern &&
								(T.indentNextLinePattern = this.w(
									$,
									"indentationRules.indentNextLinePattern",
									v.indentNextLinePattern,
								)),
							v.unIndentedLinePattern &&
								(T.unIndentedLinePattern = this.w(
									$,
									"indentationRules.unIndentedLinePattern",
									v.unIndentedLinePattern,
								)),
							T
						);
					}
				});
				(e.$qmc = f),
					(e.$qmc =
						f =
						g =
							Ne([j(0, d.$nM), j(1, h.$bYb), j(2, u.$q2), j(3, C.$aN)], f));
				const b = "vscode://schemas/language-configuration",
					s = {
						allowComments: !0,
						allowTrailingCommas: !0,
						default: {
							comments: { blockComment: ["/*", "*/"], lineComment: "//" },
							brackets: [
								["(", ")"],
								["[", "]"],
								["{", "}"],
							],
							autoClosingPairs: [
								["(", ")"],
								["[", "]"],
								["{", "}"],
							],
							surroundingPairs: [
								["(", ")"],
								["[", "]"],
								["{", "}"],
							],
						},
						definitions: {
							openBracket: {
								type: "string",
								description: t.localize(4922, null),
							},
							closeBracket: {
								type: "string",
								description: t.localize(4923, null),
							},
							bracketPair: {
								type: "array",
								items: [
									{ $ref: "#/definitions/openBracket" },
									{ $ref: "#/definitions/closeBracket" },
								],
							},
						},
						properties: {
							comments: {
								default: { blockComment: ["/*", "*/"], lineComment: "//" },
								description: t.localize(4924, null),
								type: "object",
								properties: {
									blockComment: {
										type: "array",
										description: t.localize(4925, null),
										items: [
											{ type: "string", description: t.localize(4926, null) },
											{ type: "string", description: t.localize(4927, null) },
										],
									},
									lineComment: {
										type: "string",
										description: t.localize(4928, null),
									},
								},
							},
							brackets: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								markdownDescription: t.localize(
									4929,
									null,
									"`colorizedBracketPairs`",
								),
								type: "array",
								items: { $ref: "#/definitions/bracketPair" },
							},
							colorizedBracketPairs: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								markdownDescription: t.localize(4930, null, "`brackets`"),
								type: "array",
								items: { $ref: "#/definitions/bracketPair" },
							},
							autoClosingPairs: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								description: t.localize(4931, null),
								type: "array",
								items: {
									oneOf: [
										{ $ref: "#/definitions/bracketPair" },
										{
											type: "object",
											properties: {
												open: { $ref: "#/definitions/openBracket" },
												close: { $ref: "#/definitions/closeBracket" },
												notIn: {
													type: "array",
													description: t.localize(4932, null),
													items: { enum: ["string", "comment"] },
												},
											},
										},
									],
								},
							},
							autoCloseBefore: {
								default: `;:.,=}])> 
	`,
								description: t.localize(4933, null),
								type: "string",
							},
							surroundingPairs: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								description: t.localize(4934, null),
								type: "array",
								items: {
									oneOf: [
										{ $ref: "#/definitions/bracketPair" },
										{
											type: "object",
											properties: {
												open: { $ref: "#/definitions/openBracket" },
												close: { $ref: "#/definitions/closeBracket" },
											},
										},
									],
								},
							},
							wordPattern: {
								default: "",
								description: t.localize(4935, null),
								type: ["string", "object"],
								properties: {
									pattern: {
										type: "string",
										description: t.localize(4936, null),
										default: "",
									},
									flags: {
										type: "string",
										description: t.localize(4937, null),
										default: "g",
										pattern: "^([gimuy]+)$",
										patternErrorMessage: t.localize(4938, null),
									},
								},
							},
							indentationRules: {
								default: {
									increaseIndentPattern: "",
									decreaseIndentPattern: "",
								},
								description: t.localize(4939, null),
								type: "object",
								properties: {
									increaseIndentPattern: {
										type: ["string", "object"],
										description: t.localize(4940, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4941, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4942, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4943, null),
											},
										},
									},
									decreaseIndentPattern: {
										type: ["string", "object"],
										description: t.localize(4944, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4945, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4946, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4947, null),
											},
										},
									},
									indentNextLinePattern: {
										type: ["string", "object"],
										description: t.localize(4948, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4949, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4950, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4951, null),
											},
										},
									},
									unIndentedLinePattern: {
										type: ["string", "object"],
										description: t.localize(4952, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4953, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4954, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4955, null),
											},
										},
									},
								},
							},
							folding: {
								type: "object",
								description: t.localize(4956, null),
								properties: {
									offSide: {
										type: "boolean",
										description: t.localize(4957, null),
									},
									markers: {
										type: "object",
										description: t.localize(4958, null),
										properties: {
											start: {
												type: "string",
												description: t.localize(4959, null),
											},
											end: {
												type: "string",
												description: t.localize(4960, null),
											},
										},
									},
								},
							},
							onEnterRules: {
								type: "array",
								description: t.localize(4961, null),
								items: {
									type: "object",
									description: t.localize(4962, null),
									required: ["beforeText", "action"],
									properties: {
										beforeText: {
											type: ["string", "object"],
											description: t.localize(4963, null),
											properties: {
												pattern: {
													type: "string",
													description: t.localize(4964, null),
													default: "",
												},
												flags: {
													type: "string",
													description: t.localize(4965, null),
													default: "",
													pattern: "^([gimuy]+)$",
													patternErrorMessage: t.localize(4966, null),
												},
											},
										},
										afterText: {
											type: ["string", "object"],
											description: t.localize(4967, null),
											properties: {
												pattern: {
													type: "string",
													description: t.localize(4968, null),
													default: "",
												},
												flags: {
													type: "string",
													description: t.localize(4969, null),
													default: "",
													pattern: "^([gimuy]+)$",
													patternErrorMessage: t.localize(4970, null),
												},
											},
										},
										previousLineText: {
											type: ["string", "object"],
											description: t.localize(4971, null),
											properties: {
												pattern: {
													type: "string",
													description: t.localize(4972, null),
													default: "",
												},
												flags: {
													type: "string",
													description: t.localize(4973, null),
													default: "",
													pattern: "^([gimuy]+)$",
													patternErrorMessage: t.localize(4974, null),
												},
											},
										},
										action: {
											type: ["string", "object"],
											description: t.localize(4975, null),
											required: ["indent"],
											default: { indent: "indent" },
											properties: {
												indent: {
													type: "string",
													description: t.localize(4976, null),
													default: "indent",
													enum: ["none", "indent", "indentOutdent", "outdent"],
													markdownEnumDescriptions: [
														t.localize(4977, null),
														t.localize(4978, null),
														t.localize(4979, null),
														t.localize(4980, null),
													],
												},
												appendText: {
													type: "string",
													description: t.localize(4981, null),
													default: "",
												},
												removeText: {
													type: "number",
													description: t.localize(4982, null),
													default: 0,
												},
											},
										},
									},
								},
							},
						},
					};
				r.$Io.as(m.$Jo.JSONContribution).registerSchema(b, s);
			},
		),
		define(
			de[3307],
			he([1, 0, 151, 30, 81, 53, 31, 22, 76, 9, 62]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$igd = void 0);
				let a = class {
					constructor(c, n, g, p, o) {
						(this.c = n), (this.d = g), (this.e = p), (this.f = o);
						const f = c.args["export-default-configuration"];
						f && this.g(r.URI.file(f));
					}
					async g(c) {
						try {
							await this.c.whenInstalledExtensionsRegistered(), await this.h(c);
						} finally {
							this.d.executeCommand("workbench.action.quit");
						}
					}
					async h(c) {
						const n = this.i(),
							g = JSON.stringify(n, void 0, "  ");
						await this.e.writeFile(c, m.$Te.fromString(g));
					}
					i() {
						const c = i.$Io.as(w.$No.Configuration),
							n = c.getConfigurations().slice(),
							g = [],
							p = new Set(),
							o = (l, y) => {
								if (p.has(l)) {
									console.warn("Setting is registered twice: " + l);
									return;
								}
								p.add(l);
								const $ = {
									name: l,
									description: y.description || y.markdownDescription || "",
									default: y.default,
									type: y.type,
								};
								y.enum && ($.enum = y.enum),
									(y.enumDescriptions || y.markdownEnumDescriptions) &&
										($.enumDescriptions =
											y.enumDescriptions || y.markdownEnumDescriptions),
									g.push($);
							},
							f = (l) => {
								if (l.properties)
									for (const y in l.properties) o(y, l.properties[y]);
								l.allOf?.forEach(f);
							};
						n.forEach(f);
						const b = c.getExcludedConfigurationProperties();
						for (const l in b) o(l, b[l]);
						return {
							settings: g.sort((l, y) => l.name.localeCompare(y.name)),
							buildTime: Date.now(),
							commit: this.f.commit,
							buildNumber: this.f.settingsSearchBuildId,
						};
					}
				};
				(e.$igd = a),
					(e.$igd = a =
						Ne(
							[
								j(0, t.$ucd),
								j(1, E.$q2),
								j(2, C.$ek),
								j(3, d.$ll),
								j(4, u.$Bk),
							],
							a,
						));
			},
		),
		define(
			de[1809],
			he([
				1, 0, 7, 105, 95, 182, 50, 24, 15, 275, 138, 3, 23, 4, 99, 11, 121, 8,
				49, 109, 72, 5, 73, 93, 40, 30, 21, 32, 51, 35, 217, 466, 141, 985, 18,
				78, 244, 157, 1294, 53, 2439,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
			) {
				"use strict";
				var F;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WTc = e.$VTc = void 0),
					(c = mt(c));
				let x = class extends L.$JEb {
					static {
						F = this;
					}
					static {
						this.ID = "workbench.editor.runtimeExtensions";
					}
					constructor(V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z, se) {
						super(F.ID, V, G, K, ee),
							(this.m = W),
							(this.r = X),
							(this.s = Y),
							(this.u = ie),
							(this.cb = ne),
							(this.db = _),
							(this.eb = te),
							(this.fb = Q),
							(this.gb = Z),
							(this.hb = se),
							(this.c = null),
							(this.f = null),
							(this.g = this.D(new m.$Yh(() => this.ib(), 200))),
							this.D(
								this.r.onDidChangeExtensionsStatus(() => this.g.schedule()),
							),
							this.D(this.gb.onDidChangeAccessData(() => this.g.schedule())),
							this.ib();
					}
					async ib() {
						(this.f = await this.jb()),
							this.c?.splice(0, this.c.length, this.f);
					}
					async jb() {
						await this.r.whenInstalledExtensionsRegistered();
						const V = this.r.extensions.filter((_) => !!_.main || !!_.browser),
							G = new b.$In(),
							K = await this.m.queryLocal();
						for (const _ of K) G.set(_.identifier.id, _);
						const J = this.r.getExtensionsStatus(),
							W = new b.$In(),
							X = this.mb();
						if (X) {
							let _ = X.startTime;
							for (let te = 0, Q = X.deltas.length; te < Q; te++) {
								const Z = X.ids[te],
									se = X.deltas[te];
								let re = W.get(Z);
								re || ((re = []), W.set(Z, re)),
									re.push(_),
									(_ = _ + se),
									re.push(_);
							}
						}
						let Y = [];
						for (let _ = 0, te = V.length; _ < te; _++) {
							const Q = V[_];
							let Z = null;
							if (X) {
								const se = W.get(Q.identifier) || [];
								let re = 0;
								for (let le = 0, oe = se.length / 2; le < oe; le++) {
									const ae = se[2 * le],
										pe = se[2 * le + 1];
									re += pe - ae;
								}
								Z = { segments: se, totalTime: re };
							}
							Y[_] = {
								originalIndex: _,
								description: Q,
								marketplaceInfo: G.get(Q.identifier),
								status: J[Q.identifier.value],
								profileInfo: Z || void 0,
								unresponsiveProfile: this.nb(Q.identifier),
							};
						}
						Y = Y.filter((_) => _.status.activationStarted);
						const ie = (_) => _.unresponsiveProfile === X,
							ne = (_) => _.profileInfo?.totalTime ?? 0,
							ee = (_) =>
								(_.status.activationTimes?.codeLoadingTime ?? 0) +
								(_.status.activationTimes?.activateCallTime ?? 0);
						return (
							(Y = Y.sort((_, te) =>
								ie(_) || ie(te)
									? +ie(te) - +ie(_)
									: ne(_) || ne(te)
										? ne(te) - ne(_)
										: ee(_) || ee(te)
											? ee(te) - ee(_)
											: _.originalIndex - te.originalIndex,
							)),
							Y
						);
					}
					Y(V) {
						V.classList.add("runtime-extensions-editor");
						const G = "runtimeExtensionElementTemplate",
							K = new (class {
								getHeight(W) {
									return 70;
								}
								getTemplateId(W) {
									return G;
								}
							})(),
							J = {
								templateId: G,
								renderTemplate: (W) => {
									const X = (0, t.$fhb)(W, (0, t.$)(".extension")),
										Y = (0, t.$fhb)(X, (0, t.$)(".icon-container")),
										ie = (0, t.$fhb)(Y, (0, t.$)("img.icon")),
										ne = (0, t.$fhb)(X, (0, t.$)("div.desc")),
										ee = (0, t.$fhb)(ne, (0, t.$)(".header-container")),
										_ = (0, t.$fhb)(ee, (0, t.$)(".header")),
										te = (0, t.$fhb)(_, (0, t.$)("div.name")),
										Q = (0, t.$fhb)(_, (0, t.$)("span.version")),
										Z = (0, t.$fhb)(ne, (0, t.$)("div.msg")),
										se = new i.$eib(ne);
									se.onDidRun(({ error: pe }) => pe && this.s.error(pe));
									const re = (0, t.$fhb)(X, (0, t.$)(".time")),
										le = (0, t.$fhb)(re, (0, t.$)("div.activation-time")),
										oe = (0, t.$fhb)(re, (0, t.$)("div.profile-time"));
									return {
										root: W,
										element: X,
										icon: ie,
										name: te,
										version: Q,
										actionbar: se,
										activationTime: le,
										profileTime: oe,
										msgContainer: Z,
										disposables: [se],
										elementDisposables: [],
									};
								},
								renderElement: (W, X, Y) => {
									(Y.elementDisposables = (0, a.$Vc)(Y.elementDisposables)),
										Y.root.classList.toggle("odd", X % 2 === 1),
										Y.elementDisposables.push(
											(0, t.$0fb)(
												Y.icon,
												"error",
												() =>
													(Y.icon.src =
														W.marketplaceInfo?.iconUrlFallback || B.$FQb),
												{ once: !0 },
											),
										),
										(Y.icon.src = W.marketplaceInfo?.iconUrl || B.$FQb),
										Y.icon.complete
											? (Y.icon.style.visibility = "inherit")
											: ((Y.icon.style.visibility = "hidden"),
												(Y.icon.onload = () =>
													(Y.icon.style.visibility = "inherit"))),
										(Y.name.textContent = (
											W.marketplaceInfo?.displayName ||
											W.description.identifier.value
										).substr(0, 50)),
										(Y.version.textContent = W.description.version);
									const ie = W.status.activationTimes;
									if (ie) {
										const Q = ie.codeLoadingTime + ie.activateCallTime;
										Y.activationTime.textContent = ie.activationReason.startup
											? `Startup Activation: ${Q}ms`
											: `Activation: ${Q}ms`;
									} else Y.activationTime.textContent = "Activating...";
									Y.actionbar.clear();
									const ne = this.ob(W);
									if (
										(ne && Y.actionbar.push(ne, { icon: !1, label: !0 }),
										(0, d.$Pb)(W.status.runtimeErrors))
									) {
										const Q = this.pb(W);
										Q && Y.actionbar.push(Q, { icon: !1, label: !0 });
									}
									let ee;
									if (ie) {
										const Q = ie.activationReason.extensionId.value,
											Z = ie.activationReason.activationEvent;
										if (Z === "*") ee = c.localize(5997, null, Q);
										else if (/^workspaceContains:/.test(Z)) {
											const se = Z.substr(18);
											se.indexOf("*") >= 0 || se.indexOf("?") >= 0
												? (ee = c.localize(5998, null, se, Q))
												: (ee = c.localize(5999, null, se, Q));
										} else if (/^workspaceContainsTimeout:/.test(Z)) {
											const se = Z.substr(25);
											ee = c.localize(6e3, null, se, Q);
										} else if (Z === "onStartupFinished")
											ee = c.localize(6001, null, Q);
										else if (/^onLanguage:/.test(Z)) {
											const se = Z.substr(11);
											ee = c.localize(6002, null, se, Q);
										} else ee = c.localize(6003, null, Z, Q);
									} else ee = c.localize(6004, null);
									if (
										(Y.elementDisposables.push(
											this.hb.setupManagedHover(
												(0, w.$cib)("mouse"),
												Y.activationTime,
												ee,
											),
										),
										(0, t.$9fb)(Y.msgContainer),
										this.nb(W.description.identifier))
									) {
										const Q = (0, t.$)(
												"span",
												void 0,
												...(0, E.$Sib)(" $(alert) Unresponsive"),
											),
											Z = c.localize(6005, null);
										Y.elementDisposables.push(
											this.hb.setupManagedHover((0, w.$cib)("mouse"), Q, Z),
										),
											Y.msgContainer.appendChild(Q);
									}
									if ((0, d.$Pb)(W.status.runtimeErrors)) {
										const Q = (0, t.$)(
											"span",
											void 0,
											...(0, E.$Sib)(
												`$(bug) ${c.localize(6006, null, W.status.runtimeErrors.length)}`,
											),
										);
										Y.msgContainer.appendChild(Q);
									}
									if (W.status.messages && W.status.messages.length > 0) {
										const Q = (0, t.$)(
											"span",
											void 0,
											...(0, E.$Sib)(
												`$(alert) ${W.status.messages[0].message}`,
											),
										);
										Y.msgContainer.appendChild(Q);
									}
									let _ = null;
									if (
										W.status.runningLocation &&
										W.status.runningLocation.equals(new U.$g2(0))
									)
										_ = "$(globe) web worker";
									else if (
										W.description.extensionLocation.scheme ===
										h.Schemas.vscodeRemote
									) {
										const Q = this.db.getHostLabel(
											h.Schemas.vscodeRemote,
											this.eb.remoteAuthority,
										);
										Q
											? (_ = `$(remote) ${Q}`)
											: (_ = `$(remote) ${W.description.extensionLocation.authority}`);
									} else
										W.status.runningLocation &&
											W.status.runningLocation.affinity > 0 &&
											(_ =
												W.status.runningLocation instanceof U.$g2
													? `$(globe) web worker ${W.status.runningLocation.affinity + 1}`
													: `$(server-process) local process ${W.status.runningLocation.affinity + 1}`);
									if (_) {
										const Q = (0, t.$)("span", void 0, ...(0, E.$Sib)(_));
										Y.msgContainer.appendChild(Q);
									}
									const te = S.$Io
										.as(O.Extensions.ExtensionFeaturesRegistry)
										.getExtensionFeatures();
									for (const Q of te) {
										const Z = this.gb.getAccessData(
											W.description.identifier,
											Q.id,
										);
										if (Z) {
											const se = Z?.current?.status;
											if (
												(se &&
													(Y.msgContainer.appendChild(
														(0, t.$)("span", void 0, `${Q.label}: `),
													),
													Y.msgContainer.appendChild(
														(0, t.$)(
															"span",
															void 0,
															...(0, E.$Sib)(
																`$(${se.severity === v.Severity.Error ? D.$tSb.id : D.$uSb.id}) ${se.message}`,
															),
														),
													)),
												Z?.totalCount > 0)
											) {
												const re = (0, t.$)(
													"span",
													void 0,
													`${c.localize(6007, null, Q.label, Z.totalCount)}${Z.current ? c.localize(6008, null, Z.current.count) : ""}`,
												);
												if (Z.current) {
													const le = c.localize(
														6009,
														null,
														(0, r.$dn)(Z.current.lastAccessed, !0, !0),
													);
													Y.elementDisposables.push(
														this.hb.setupManagedHover(
															(0, w.$cib)("mouse"),
															re,
															le,
														),
													);
												}
												Y.msgContainer.appendChild(re);
											}
										}
									}
									W.profileInfo
										? (Y.profileTime.textContent = `Profile: ${(W.profileInfo.totalTime / 1e3).toFixed(2)}ms`)
										: (Y.profileTime.textContent = "");
								},
								disposeTemplate: (W) => {
									W.disposables = (0, a.$Vc)(W.disposables);
								},
							};
						(this.c = this.cb.createInstance(
							$.$yMb,
							"RuntimeExtensions",
							V,
							K,
							[J],
							{
								multipleSelectionSupport: !1,
								setRowLineHeight: !1,
								horizontalScrolling: !1,
								overrideStyles: { listBackground: P.$8P },
								accessibilityProvider: new (class {
									getWidgetAriaLabel() {
										return c.localize(6010, null);
									}
									getAriaLabel(W) {
										return W.description.name;
									}
								})(),
							},
						)),
							this.c.splice(0, this.c.length, this.f || void 0),
							this.c.onContextMenu((W) => {
								if (!W.element) return;
								const X = [];
								X.push(
									new C.$rj(
										"runtimeExtensionsEditor.action.copyId",
										c.localize(
											6011,
											null,
											W.element.description.identifier.value,
										),
										void 0,
										!0,
										() => {
											this.fb.writeText(W.element.description.identifier.value);
										},
									),
								);
								const Y = this.pb(W.element);
								Y && X.push(Y),
									X.push(new C.$tj()),
									W.element.marketplaceInfo &&
										(X.push(
											new C.$rj(
												"runtimeExtensionsEditor.action.disableWorkspace",
												c.localize(6012, null),
												void 0,
												!0,
												() =>
													this.m.setEnablement(
														W.element.marketplaceInfo,
														B.EnablementState.DisabledWorkspace,
													),
											),
										),
										X.push(
											new C.$rj(
												"runtimeExtensionsEditor.action.disable",
												c.localize(6013, null),
												void 0,
												!0,
												() =>
													this.m.setEnablement(
														W.element.marketplaceInfo,
														B.EnablementState.DisabledGlobally,
													),
											),
										)),
									X.push(new C.$tj());
								const ie = this.rb();
								ie && X.push(ie);
								const ne = this.lb;
								ne && X.push(ne),
									this.u.showContextMenu({
										getAnchor: () => W.anchor,
										getActions: () => X,
									});
							});
					}
					get lb() {
						return this.qb();
					}
					layout(V) {
						this.c?.layout(V.height);
					}
				};
				(e.$VTc = x),
					Ne([u.$ei], x.prototype, "lb", null),
					(e.$VTc =
						x =
						F =
							Ne(
								[
									j(1, T.$km),
									j(2, k.$iP),
									j(3, o.$6j),
									j(4, M.$MQb),
									j(5, z.$q2),
									j(6, v.$4N),
									j(7, f.$Xxb),
									j(8, l.$Li),
									j(9, I.$lq),
									j(10, y.$3N),
									j(11, R.$r8),
									j(12, p.$Vxb),
									j(13, O.$$Sb),
									j(14, s.$Uyb),
								],
								x,
							));
				class H extends g.$3X {
					constructor() {
						super({
							id: "workbench.action.showRuntimeExtensions",
							title: c.localize2(6014, "Show Running Extensions"),
							category: n.$ck.Developer,
							f1: !0,
							menu: {
								id: g.$XX.ViewContainerTitle,
								when: o.$Kj.equals(
									"viewContainer",
									"workbench.view.extensions",
								),
								group: "2_enablement",
								order: 3,
							},
						});
					}
					async run(V) {
						await V.get(A.$IY).openEditor(N.$UTc.instance, { pinned: !0 });
					}
				}
				e.$WTc = H;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3308],
		he([
			1, 0, 3, 7, 6, 109, 279, 244, 30, 5, 4, 93, 154, 183, 106, 267, 29, 41,
			123, 35, 203, 57, 26, 111, 466, 673, 460, 12, 94, 97, 53, 14, 102, 343,
			275,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$DSc = void 0),
				($ = xi($));
			let R = class extends t.$1c {
				static {
					this.ID = "runtimeStatus";
				}
				constructor(H, q) {
					super(), (this.c = H), (this.g = q), (this.type = "markdown");
				}
				shouldRender(H) {
					const q = new E.$Gn((0, h.$0p)(H.publisher, H.name));
					return this.c.extensions.some((V) => E.$Gn.equals(V.identifier, q))
						? !!H.main || !!H.browser
						: !1;
				}
				render(H) {
					const q = new t.$Zc(),
						V = new E.$Gn((0, h.$0p)(H.publisher, H.name)),
						G = q.add(new w.$re());
					return (
						q.add(
							this.c.onDidChangeExtensionsStatus((K) => {
								K.some((J) => E.$Gn.equals(J, V)) && G.fire(this.h(H));
							}),
						),
						q.add(this.g.onDidChangeAccessData((K) => G.fire(this.h(H)))),
						{
							onDidChange: G.event,
							data: this.h(H),
							dispose: () => q.dispose(),
						}
					);
				}
				h(H) {
					const q = new P.$cl(),
						V = new E.$Gn((0, h.$0p)(H.publisher, H.name)),
						G = this.c.getExtensionsStatus()[V.value];
					if (this.c.extensions.some((J) => E.$Gn.equals(J.identifier, V))) {
						if (
							(q.appendMarkdown(`### ${(0, u.localize)(6063, null)}

`),
							G.activationTimes
								? G.activationTimes.activationReason.startup
									? q.appendMarkdown(
											`Activated on Startup: \`${G.activationTimes.activateCallTime}ms\``,
										)
									: q.appendMarkdown(
											`Activated by \`${G.activationTimes.activationReason.activationEvent}\` event: \`${G.activationTimes.activateCallTime}ms\``,
										)
								: q.appendMarkdown("Not yet activated"),
							G.runtimeErrors.length)
						) {
							q.appendMarkdown(`
 ### ${(0, u.localize)(6064, null, G.runtimeErrors.length)}
`);
							for (const J of G.runtimeErrors)
								q.appendMarkdown(`$(${D.$ak.error.id})&nbsp;${(0, p.$bb)(J)}

`);
						}
						if (G.messages.length) {
							q.appendMarkdown(`
 ### ${(0, u.localize)(6065, null, G.messages.length)}
`);
							for (const J of G.messages)
								q.appendMarkdown(`$(${(J.type === $.default.Error ? D.$ak.error : J.type === $.default.Warning ? D.$ak.warning : D.$ak.info).id})&nbsp;${J.message}

`);
						}
					}
					const K = m.$Io
						.as(d.Extensions.ExtensionFeaturesRegistry)
						.getExtensionFeatures();
					for (const J of K) {
						const W = this.g.getAccessData(V, J.id);
						if (W) {
							q.appendMarkdown(`
 ### ${J.label}

`);
							const X = W?.current?.status;
							X &&
								(X?.severity === $.default.Error &&
									q.appendMarkdown(`$(${v.$tSb.id}) ${X.message}

`),
								X?.severity === $.default.Warning &&
									q.appendMarkdown(`$(${v.$uSb.id}) ${X.message}

`)),
								W?.totalCount &&
									(W.current &&
										(q.appendMarkdown(`${(0, u.localize)(6066, null, (0, A.$dn)(W.current.lastAccessed, !0, !0))}

`),
										q.appendMarkdown(`${(0, u.localize)(6067, null, W.current.count)}

`)),
									q.appendMarkdown(`${(0, u.localize)(6068, null, W.totalCount)}

`));
						}
					}
					return q;
				}
			};
			R = Ne([j(0, L.$q2), j(1, d.$$Sb)], R);
			const O = {
				id: R.ID,
				label: (0, u.localize)(6069, null),
				access: { canToggle: !1 },
				renderer: new M.$Ji(R),
			};
			let B = class extends b.$pP {
				constructor(H, q, V, G) {
					super(V),
						(this.r = H),
						(this.s = q),
						(this.t = G),
						(this.c = this.D(new t.$2c())),
						(this.j = []),
						(this.m = new E.$Gn((0, h.$0p)(H.publisher, H.name))),
						(this.domNode = (0, i.$)("div.subcontent.feature-contributions")),
						this.u();
				}
				layout(H, q) {
					this.j.forEach((V) => V.layout(H, q));
				}
				u() {
					const H = this.F();
					if (H.length === 0) {
						(0, i.$fhb)((0, i.$)(".no-features"), this.domNode).textContent =
							(0, u.localize)(6070, null);
						return;
					}
					const q = this.D(
						new C.$vob(this.domNode, {
							orientation: C.Orientation.HORIZONTAL,
							proportionalLayout: !0,
						}),
					);
					this.j.push({
						layout: (W, X) => {
							(q.el.style.height = `${W - 14}px`), q.layout(X);
						},
					});
					const V = (0, i.$)(".features-list-container"),
						G = this.D(this.y(V));
					G.splice(0, G.length, H);
					const K = (0, i.$)(".feature-view-container");
					this.D(
						G.onDidChangeSelection((W) => {
							const X = W.elements[0];
							X && this.C(X, K);
						}),
					);
					const J = this.s ? H.findIndex((W) => W.id === this.s) : 0;
					G.setSelection([J === -1 ? 0 : J]),
						q.addView(
							{
								onDidChange: w.Event.None,
								element: V,
								minimumSize: 100,
								maximumSize: Number.POSITIVE_INFINITY,
								layout: (W, X, Y) => {
									(V.style.width = `${W}px`), G.layout(Y, W);
								},
							},
							200,
							void 0,
							!0,
						),
						q.addView(
							{
								onDidChange: w.Event.None,
								element: K,
								minimumSize: 500,
								maximumSize: Number.POSITIVE_INFINITY,
								layout: (W, X, Y) => {
									(K.style.width = `${W}px`),
										(this.g = { height: Y, width: W }),
										this.z();
								},
							},
							C.Sizing.Distribute,
							void 0,
							!0,
						),
						q.style({ separatorBorder: this.h.getColor(f.$BFb) });
				}
				y(H) {
					const q = this.t.createInstance(z, this.m),
						V = new U();
					return this.t.createInstance(
						a.$yMb,
						"ExtensionFeaturesList",
						(0, i.$fhb)(H, (0, i.$)(".features-list-wrapper")),
						V,
						[q],
						{
							multipleSelectionSupport: !1,
							setRowLineHeight: !1,
							horizontalScrolling: !1,
							accessibilityProvider: {
								getAriaLabel(K) {
									return K?.label ?? "";
								},
								getWidgetAriaLabel() {
									return (0, u.localize)(6071, null);
								},
							},
							openOnSingleClick: !0,
						},
					);
				}
				z() {
					this.c.value?.layout(this.g?.height, this.g?.width);
				}
				C(H, q) {
					this.c.value?.feature.id !== H.id &&
						((0, i.$9fb)(q),
						(this.c.value = this.t.createInstance(F, this.m, this.r, H)),
						q.appendChild(this.c.value.domNode),
						this.z());
				}
				F() {
					const H = m.$Io
							.as(d.Extensions.ExtensionFeaturesRegistry)
							.getExtensionFeatures()
							.filter((V) => {
								const G = this.G(V),
									K = G?.shouldRender(this.r);
								return G?.dispose(), K;
							})
							.sort((V, G) => V.label.localeCompare(G.label)),
						q = this.G(O);
					return q?.shouldRender(this.r) && H.splice(0, 0, O), q?.dispose(), H;
				}
				G(H) {
					return H.renderer ? this.t.createInstance(H.renderer) : void 0;
				}
			};
			(e.$DSc = B), (e.$DSc = B = Ne([j(2, b.$iP), j(3, r.$Li)], B));
			class U {
				getHeight() {
					return 22;
				}
				getTemplateId() {
					return "extensionFeatureDescriptor";
				}
			}
			let z = class {
				constructor(H, q) {
					(this.c = H),
						(this.d = q),
						(this.templateId = "extensionFeatureDescriptor");
				}
				renderTemplate(H) {
					H.classList.add("extension-feature-list-item");
					const q = (0, i.$fhb)(H, (0, i.$)(".extension-feature-label")),
						V = (0, i.$fhb)(H, (0, i.$)(".extension-feature-disabled-label"));
					V.textContent = (0, u.localize)(6072, null);
					const G = (0, i.$fhb)(H, (0, i.$)(".extension-feature-status"));
					return {
						label: q,
						disabledElement: V,
						statusElement: G,
						disposables: new t.$Zc(),
					};
				}
				renderElement(H, q, V) {
					V.disposables.clear(),
						(V.label.textContent = H.label),
						(V.disabledElement.style.display =
							H.id === O.id || this.d.isEnabled(this.c, H.id)
								? "none"
								: "inherit"),
						V.disposables.add(
							this.d.onDidChangeEnablement(
								({ extension: J, featureId: W, enabled: X }) => {
									E.$Gn.equals(J, this.c) &&
										W === H.id &&
										(V.disabledElement.style.display = X ? "none" : "inherit");
								},
							),
						);
					const G = V.statusElement.className,
						K = () => {
							const J = this.d.getAccessData(this.c, H.id);
							J?.current?.status
								? ((V.statusElement.style.display = "inherit"),
									(V.statusElement.className = `${G} ${S.SeverityIcon.className(J.current.status.severity)}`))
								: (V.statusElement.style.display = "none");
						};
					K(),
						V.disposables.add(
							this.d.onDidChangeAccessData(({ extension: J, featureId: W }) => {
								E.$Gn.equals(J, this.c) && W === H.id && K();
							}),
						);
				}
				disposeElement(H, q, V, G) {
					V.disposables.dispose();
				}
				disposeTemplate(H) {
					H.disposables.dispose();
				}
			};
			z = Ne([j(1, d.$$Sb)], z);
			let F = class extends t.$1c {
				constructor(H, q, V, G, K, J, W) {
					super(),
						(this.g = H),
						(this.h = q),
						(this.feature = V),
						(this.j = G),
						(this.m = K),
						(this.n = J),
						(this.q = W),
						(this.c = []),
						(this.domNode = (0, i.$)(".extension-feature-content")),
						this.r(this.domNode);
				}
				r(H) {
					const q = (0, i.$fhb)(H, (0, i.$)(".feature-header")),
						V = (0, i.$fhb)(q, (0, i.$)(".feature-title"));
					if (
						((V.textContent = this.feature.label),
						this.feature.access.canToggle)
					) {
						const Y = (0, i.$fhb)(q, (0, i.$)(".feature-actions")),
							ie = new c.$oob(Y, n.$lyb);
						this.s(ie),
							this.D(
								this.n.onDidChangeEnablement(
									({ extension: ne, featureId: ee }) => {
										E.$Gn.equals(ne, this.g) &&
											ee === this.feature.id &&
											this.s(ie);
									},
								),
							),
							this.D(
								ie.onDidClick(async () => {
									const ne = this.n.isEnabled(this.g, this.feature.id);
									(
										await this.q.confirm({
											title: (0, u.localize)(6073, null, this.feature.label),
											message: ne
												? (0, u.localize)(
														6074,
														null,
														this.h.displayName ?? this.g.value,
														this.feature.label,
													)
												: (0, u.localize)(
														6075,
														null,
														this.h.displayName ?? this.g.value,
														this.feature.label,
													),
											custom: !0,
											primaryButton: ne
												? (0, u.localize)(6076, null)
												: (0, u.localize)(6077, null),
											cancelButton: (0, u.localize)(6078, null),
										})
									).confirmed &&
										this.n.setEnablement(this.g, this.feature.id, !ne);
								}),
							);
					}
					const G = (0, i.$fhb)(H, (0, i.$)(".feature-body")),
						K = (0, i.$)(".feature-body-content"),
						J = this.D(new s.$8hb(K, {}));
					if (
						((0, i.$fhb)(G, J.getDomNode()),
						this.c.push({ layout: () => J.scanDomNode() }),
						J.scanDomNode(),
						this.feature.description)
					) {
						const Y = (0, i.$fhb)(K, (0, i.$)(".feature-description"));
						Y.textContent = this.feature.description;
					}
					const W = this.n.getAccessData(this.g, this.feature.id);
					W?.current?.status &&
						(0, i.$fhb)(
							K,
							(0, i.$)(
								".feature-status",
								void 0,
								(0, i.$)(
									`span${y.ThemeIcon.asCSSSelector(W.current.status.severity === $.default.Error ? v.$tSb : W.current.status.severity === $.default.Warning ? v.$uSb : v.$vSb)}`,
									void 0,
								),
								(0, i.$)("span", void 0, W.current.status.message),
							),
						);
					const X = (0, i.$fhb)(K, (0, i.$)(".feature-content"));
					if (this.feature.renderer) {
						const Y = this.m.createInstance(this.feature.renderer);
						Y.type === "table"
							? this.t(X, Y)
							: Y.type === "markdown"
								? this.y(X, Y)
								: Y.type === "markdown+table" && this.w(X, Y);
					}
				}
				s(H) {
					H.label = this.n.isEnabled(this.g, this.feature.id)
						? (0, u.localize)(6079, null)
						: (0, u.localize)(6080, null);
				}
				t(H, q) {
					const V = this.D(q.render(this.h)),
						G = this.D(new t.$2c());
					V.onDidChange &&
						this.D(
							V.onDidChange((K) => {
								(0, i.$9fb)(H), (G.value = this.u(K, H));
							}),
						),
						(G.value = this.u(V.data, H));
				}
				u(H, q) {
					const V = new t.$Zc();
					return (
						(0, i.$fhb)(
							q,
							(0, i.$)(
								"table",
								void 0,
								(0, i.$)(
									"tr",
									void 0,
									...H.headers.map((G) => (0, i.$)("th", void 0, G)),
								),
								...H.rows.map((G) =>
									(0, i.$)(
										"tr",
										void 0,
										...G.map((K) => {
											if (typeof K == "string")
												return (0, i.$)("td", void 0, K);
											const J = Array.isArray(K) ? K : [K];
											return (0, i.$)(
												"td",
												void 0,
												...J.map((W) => {
													const X = [];
													if ((0, P.$el)(K)) {
														const Y = (0, i.$)("", void 0);
														this.z(K, Y), X.push(Y);
													} else if (W instanceof N.$xs) {
														const Y = (0, i.$)("");
														V.add(new I.$7ob(Y, T.OS, n.$jyb)).set(W),
															X.push(Y);
													} else
														W instanceof k.$UL &&
															(X.push(
																(0, i.$)(
																	"span",
																	{
																		class: "colorBox",
																		style:
																			"background-color: " +
																			k.$UL.Format.CSS.format(W),
																	},
																	"",
																),
															),
															X.push(
																(0, i.$)(
																	"code",
																	void 0,
																	k.$UL.Format.CSS.formatHex(W),
																),
															));
													return X;
												}).flat(),
											);
										}),
									),
								),
							),
						),
						V
					);
				}
				w(H, q) {
					const V = this.D(q.render(this.h));
					V.onDidChange &&
						this.D(
							V.onDidChange((G) => {
								(0, i.$9fb)(H), this.C(G, H);
							}),
						),
						this.C(V.data, H);
				}
				y(H, q) {
					H.classList.add("markdown");
					const V = this.D(q.render(this.h));
					V.onDidChange &&
						this.D(
							V.onDidChange((G) => {
								(0, i.$9fb)(H), this.z(G, H);
							}),
						),
						this.z(V.data, H);
				}
				z(H, q) {
					const { element: V, dispose: G } = (0, g.$Uib)(
						{ value: H.value, isTrusted: H.isTrusted, supportThemeIcons: !0 },
						{
							actionHandler: {
								callback: (K) =>
									this.j.open(K, { allowCommands: !!H.isTrusted }).catch(p.$4),
								disposables: this.B,
							},
						},
					);
					this.D((0, t.$Yc)(G)), (0, i.$fhb)(q, V);
				}
				C(H, q) {
					for (const V of H)
						if ((0, P.$el)(V)) {
							const G = (0, i.$)("", void 0);
							this.z(V, G), (0, i.$fhb)(q, G);
						} else {
							const G = (0, i.$fhb)(q, (0, i.$)("table"));
							this.u(V, G);
						}
				}
				layout(H, q) {
					this.c.forEach((V) => V.layout(H, q));
				}
			};
			F = Ne([j(3, o.$7rb), j(4, r.$Li), j(5, d.$$Sb), j(6, l.$GO)], F);
		},
	),
		define(
			de[3309],
			he([1, 0, 53, 84, 4, 15, 34, 33]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zTc = void 0);
				let m = class {
					constructor(u, a, h) {
						const c = {
							location: i.ProgressLocation.Window,
							title: (0, w.localize)(6411, null),
						};
						let n,
							g = 0;
						this.a = u.onWillActivateByEvent((p) => {
							h.trace("onWillActivateByEvent: ", p.event),
								n || ((n = new E.$0h()), a.withProgress(c, (o) => n.p)),
								g++,
								Promise.race([
									p.activation,
									(0, E.$Nh)(5e3, d.CancellationToken.None),
								]).finally(() => {
									--g === 0 && (n.complete(void 0), (n = void 0));
								});
						});
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$zTc = m),
					(e.$zTc = m = Ne([j(0, t.$q2), j(1, i.$8N), j(2, C.$ik)], m));
			},
		),
		define(
			de[1295],
			he([
				1, 0, 4, 50, 32, 5, 141, 35, 53, 49, 40, 8, 21, 73, 1806, 78, 3065,
				1809, 76, 9, 22, 941, 121, 57, 23, 19, 244, 72,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				var P, k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5fd =
						e.$4fd =
						e.$3fd =
						e.$2fd =
						e.ProfileSessionState =
						e.$1fd =
						e.$Zfd =
						e.$Yfd =
							void 0),
					(t = mt(t)),
					(e.$Yfd = (0, E.$Mi)("extensionHostProfileService")),
					(e.$Zfd = new a.$5j("profileSessionState", "none")),
					(e.$1fd = new a.$5j("extensionHostProfileRecorded", !1));
				var L;
				(function (R) {
					(R[(R.None = 0)] = "None"),
						(R[(R.Starting = 1)] = "Starting"),
						(R[(R.Running = 2)] = "Running"),
						(R[(R.Stopping = 3)] = "Stopping");
				})(L || (e.ProfileSessionState = L = {}));
				let D = class extends o.$VTc {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(O, B, U, z, F, x, H, q, V, G, K, J, W, Y, ie),
							(this.vb = X),
							(this.sb = this.vb.lastProfile),
							(this.tb = e.$1fd.bindTo(z)),
							(this.ub = e.$Zfd.bindTo(z)),
							this.D(
								this.vb.onDidChangeLastProfile(() => {
									(this.sb = this.vb.lastProfile),
										this.tb.set(!!this.sb),
										this.ib();
								}),
							),
							this.D(
								this.vb.onDidChangeState(() => {
									const ne = this.vb.state;
									this.ub.set(L[ne].toLowerCase());
								}),
							);
					}
					mb() {
						return this.sb;
					}
					nb(O) {
						return this.vb.getUnresponsiveProfile(O);
					}
					ob(O) {
						return O.unresponsiveProfile
							? this.cb.createInstance(
									n.$Wfd,
									O.description,
									O.unresponsiveProfile,
								)
							: null;
					}
					pb(O) {
						return O.marketplaceInfo
							? this.cb.createInstance(p.$i6c, O.description)
							: null;
					}
					qb() {
						return this.cb.createInstance(A, A.ID, A.LABEL);
					}
					rb() {
						return this.vb.state === L.Running
							? this.cb.createInstance(N, N.ID, N.LABEL)
							: this.cb.createInstance(M, M.ID, M.LABEL);
					}
				};
				(e.$2fd = D),
					(e.$2fd = D =
						Ne(
							[
								j(1, w.$km),
								j(2, d.$iP),
								j(3, a.$6j),
								j(4, C.$MQb),
								j(5, m.$q2),
								j(6, u.$4N),
								j(7, r.$Xxb),
								j(8, E.$Li),
								j(9, h.$lq),
								j(10, c.$3N),
								j(11, g.$r8),
								j(12, y.$Vxb),
								j(13, e.$Yfd),
								j(14, I.$$Sb),
								j(15, T.$Uyb),
							],
							D,
						));
				let M = class extends i.$rj {
					static {
						P = this;
					}
					static {
						this.ID = "workbench.extensions.action.extensionHostProfile";
					}
					static {
						this.LABEL = t.localize(6626, null);
					}
					constructor(O = P.ID, B = P.LABEL, U) {
						super(O, B), (this.a = U);
					}
					run() {
						return this.a.startProfiling(), Promise.resolve();
					}
				};
				(e.$3fd = M), (e.$3fd = M = P = Ne([j(2, e.$Yfd)], M));
				let N = class extends i.$rj {
					static {
						this.ID = "workbench.extensions.action.stopExtensionHostProfile";
					}
					static {
						this.LABEL = t.localize(6627, null);
					}
					constructor(O = M.ID, B = M.LABEL, U) {
						super(O, B), (this.a = U);
					}
					run() {
						return this.a.stopProfiling(), Promise.resolve();
					}
				};
				(e.$4fd = N), (e.$4fd = N = Ne([j(2, e.$Yfd)], N));
				let A = class extends i.$rj {
					static {
						k = this;
					}
					static {
						this.LABEL = t.localize(6628, null);
					}
					static {
						this.ID = "workbench.extensions.action.saveExtensionHostProfile";
					}
					constructor(O = k.ID, B = k.LABEL, U, z, F, x) {
						super(O, B, void 0, !1),
							(this.a = U),
							(this.b = z),
							(this.c = F),
							(this.f = x),
							this.b.onDidChangeLastProfile(() => {
								this.enabled = this.b.lastProfile !== null;
							});
					}
					run() {
						return Promise.resolve(this.g());
					}
					async g() {
						const O = await this.f.showSaveDialog({
							title: t.localize(6629, null),
							availableFileSystems: [v.Schemas.file],
							defaultUri: (0, S.$nh)(
								await this.f.defaultFilePath(),
								`CPU-${new Date().toISOString().replace(/[\-:]/g, "")}.cpuprofile`,
							),
							filters: [
								{ name: "CPU Profiles", extensions: ["cpuprofile", "txt"] },
							],
						});
						if (!O) return;
						const B = this.b.lastProfile;
						let U = B ? B.data : {},
							z = O.fsPath;
						return (
							this.a.isBuilt &&
								((U = l.Utils.rewriteAbsolutePaths(U, "piiRemoved")),
								(z = z + ".txt")),
							this.c.writeFile(
								b.URI.file(z),
								f.$Te.fromString(JSON.stringify(B ? B.data : {}, null, "	")),
							)
						);
					}
				};
				(e.$5fd = A),
					(e.$5fd =
						A =
						k =
							Ne([j(2, g.$r8), j(3, e.$Yfd), j(4, s.$ll), j(5, $.$IO)], A));
			},
		),
		define(
			de[3310],
			he([1, 0, 392, 8, 11, 132, 4, 31, 53, 26, 14, 376, 62]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bgd = void 0);
				let n = class extends t.$GLb {
					static {
						c = this;
					}
					static {
						this.PREFIX = "issue ";
					}
					constructor(p, o, f, b, s) {
						super(c.PREFIX, { canAcceptInBackground: !0 }),
							(this.h = p),
							(this.j = o),
							(this.m = f),
							(this.n = b),
							(this.q = s);
					}
					g(p) {
						const o = new Array(),
							f = new Array(),
							b = new Set(),
							s = this.q.nameLong,
							l = (0, C.localize)(7215, null),
							y = (0, E.$Zk)(p, s, !0),
							$ = (0, E.$Zk)(p, l, !0);
						return (
							y &&
								o.push({
									label: s,
									ariaLabel: s,
									highlights: { label: y },
									accept: () =>
										this.m.executeCommand(
											"workbench.action.openIssueReporter",
											{ issueSource: a.IssueSource.VSCode },
										),
								}),
							$ &&
								o.push({
									label: l,
									ariaLabel: l,
									highlights: { label: $ },
									accept: () =>
										this.m.executeCommand(
											"workbench.action.openIssueReporter",
											{ issueSource: a.IssueSource.Marketplace },
										),
								}),
							o.push({ type: "separator", label: (0, C.localize)(7216, null) }),
							this.h
								.getMenuActions(w.$XX.IssueReporter, this.j, {
									renderShortTitle: !0,
								})
								.flatMap((S) => S[1])
								.forEach((S) => {
									"source" in S.item &&
										S.item.source &&
										b.add(S.item.source.id);
									const I = this.s(p, S);
									I && f.push(I);
								}),
							this.n.extensions.forEach((S) => {
								if (!S.isBuiltin) {
									const I = this.s(p, void 0, S),
										T = S.identifier.value;
									I && !b.has(T) && f.push(I), b.add(T);
								}
							}),
							f.sort((S, I) => {
								const T = S.label ?? "",
									P = I.label ?? "";
								return T.localeCompare(P);
							}),
							[...o, ...f]
						);
					}
					s(p, o, f) {
						const b = [
							{
								iconClass: r.ThemeIcon.asClassName(u.$ak.info),
								tooltip: (0, C.localize)(7217, null),
							},
						];
						let s, l, y;
						if (o && "source" in o.item && o.item.source)
							(s = o.item.source?.title),
								(l = () => (
									"source" in o.item &&
										o.item.source &&
										this.m.executeCommand("extension.open", o.item.source.id),
									t.TriggerAction.CLOSE_PICKER
								)),
								(y = () => {
									o.run();
								});
						else if (f)
							(s = f.displayName ?? f.name),
								(l = () => (
									this.m.executeCommand("extension.open", f.identifier.value),
									t.TriggerAction.CLOSE_PICKER
								)),
								(y = () => {
									this.m.executeCommand(
										"workbench.action.openIssueReporter",
										f.identifier.value,
									);
								});
						else return;
						const $ = (0, E.$Zk)(p, s, !0);
						if ($)
							return {
								label: s,
								highlights: { label: $ },
								buttons: b,
								trigger: l,
								accept: y,
							};
					}
				};
				(e.$bgd = n),
					(e.$bgd =
						n =
						c =
							Ne(
								[
									j(0, w.$YX),
									j(1, i.$6j),
									j(2, d.$ek),
									j(3, m.$q2),
									j(4, h.$Bk),
								],
								n,
							));
			},
		),
		