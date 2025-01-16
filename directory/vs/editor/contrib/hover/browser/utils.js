define(de[1593], he([1, 0, 7, 12]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fhc = w),
				(t = mt(t));
			function w(E, C, d, m, r, u, a, h, c) {
				const n = t.$("button.fix-in-" + C),
					g = t.$fhb(n, t.$("span.text"));
				(g.innerText = E),
					(n.style.border = "none"),
					(n.style.borderRadius = "2px"),
					(n.style.cursor = "pointer"),
					(n.style.padding = "4px 8px"),
					(n.style.fontSize = "11px"),
					(n.style.display = "inline-flex"),
					(n.style.alignItems = "center"),
					(n.style.justifyContent = "center"),
					(n.style.userSelect = "none"),
					(n.style.width = "150px"),
					d
						? ((n.style.backgroundColor = "var(--vscode-button-background)"),
							(n.style.color = "var(--vscode-button-foreground)"))
						: ((n.style.backgroundColor =
								"var(--vscode-button-secondaryBackground)"),
							(n.style.color = "var(--vscode-button-secondaryForeground)")),
					(n.style.marginRight = C === "edit" ? "8px" : "0"),
					n.classList.add(`fix-in-${C}-button-hover`);
				const p = i.$m ? "Cmd" : "Ctrl";
				return (
					(n.title = `${p}+click to fix in new ${C === "edit" ? "composer" : "chat"}`),
					(n.onclick = (o) => {
						const f = !(o.ctrlKey || o.metaKey);
						u.publicLogCapture(
							`Submitted Fix In ${C === "edit" ? "Composer" : "Chat"}`,
						),
							r.trackEvent("hover_bar.submit_fix", { useCurrent: f, mode: C }),
							m.fixLinterErrorWithAI({
								errorMessage: a,
								editorUri: h,
								range: c,
								addToCurrent: f,
								forceMode: C,
							});
					}),
					n
				);
			}
		}),
		define(
			de[1177],
			he([1, 0, 29, 3, 48, 17, 23, 9]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mhc = e.$lhc = e.$khc = void 0),
					(e.$nhc = a);
				class m {
					constructor(c, n) {
						(this.range = c), (this.direction = n);
					}
				}
				e.$khc = m;
				class r {
					constructor(c, n, g) {
						(this.hint = c),
							(this.anchor = n),
							(this.provider = g),
							(this.c = !1);
					}
					with(c) {
						const n = new r(this.hint, c.anchor, this.provider);
						return (n.c = this.c), (n.d = this.d), n;
					}
					async resolve(c) {
						if (typeof this.provider.resolveInlayHint == "function") {
							if (this.d)
								return (
									await this.d,
									c.isCancellationRequested ? void 0 : this.resolve(c)
								);
							this.c || (this.d = this.e(c).finally(() => (this.d = void 0))),
								await this.d;
						}
					}
					async e(c) {
						try {
							const n = await Promise.resolve(
								this.provider.resolveInlayHint(this.hint, c),
							);
							(this.hint.tooltip = n?.tooltip ?? this.hint.tooltip),
								(this.hint.label = n?.label ?? this.hint.label),
								(this.hint.textEdits = n?.textEdits ?? this.hint.textEdits),
								(this.c = !0);
						} catch (n) {
							(0, t.$5)(n), (this.c = !1);
						}
					}
				}
				e.$lhc = r;
				class u {
					static {
						this.c = Object.freeze({ dispose() {}, hints: [] });
					}
					static async create(c, n, g, p) {
						const o = [],
							f = c
								.ordered(n)
								.reverse()
								.map((b) =>
									g.map(async (s) => {
										try {
											const l = await b.provideInlayHints(n, s, p);
											(l?.hints.length || b.onDidChangeInlayHints) &&
												o.push([l ?? u.c, b]);
										} catch (l) {
											(0, t.$5)(l);
										}
									}),
								);
						if (
							(await Promise.all(f.flat()),
							p.isCancellationRequested || n.isDisposed())
						)
							throw new t.$9();
						return new u(g, o, n);
					}
					constructor(c, n, g) {
						(this.d = new i.$Zc()),
							(this.ranges = c),
							(this.provider = new Set());
						const p = [];
						for (const [o, f] of n) {
							this.d.add(o), this.provider.add(f);
							for (const b of o.hints) {
								const s = g.validatePosition(b.position);
								let l = "before";
								const y = u.e(g, s);
								let $;
								y.getStartPosition().isBefore(s)
									? (($ = E.$iL.fromPositions(y.getStartPosition(), s)),
										(l = "after"))
									: (($ = E.$iL.fromPositions(s, y.getEndPosition())),
										(l = "before")),
									p.push(new r(b, new m($, l), f));
							}
						}
						this.items = p.sort((o, f) =>
							w.$hL.compare(o.hint.position, f.hint.position),
						);
					}
					dispose() {
						this.d.dispose();
					}
					static e(c, n) {
						const g = n.lineNumber,
							p = c.getWordAtPosition(n);
						if (p) return new E.$iL(g, p.startColumn, g, p.endColumn);
						c.tokenization.tokenizeIfCheap(g);
						const o = c.tokenization.getLineTokens(g),
							f = n.column - 1,
							b = o.findTokenIndexAtOffset(f);
						let s = o.getStartOffset(b),
							l = o.getEndOffset(b);
						return (
							l - s === 1 &&
								(s === f && b > 1
									? ((s = o.getStartOffset(b - 1)), (l = o.getEndOffset(b - 1)))
									: l === f &&
										b < o.getCount() - 1 &&
										((s = o.getStartOffset(b + 1)),
										(l = o.getEndOffset(b + 1)))),
							new E.$iL(g, s + 1, g, l + 1)
						);
					}
				}
				e.$mhc = u;
				function a(h) {
					return d.URI.from({
						scheme: C.Schemas.command,
						path: h.id,
						query:
							h.arguments && encodeURIComponent(JSON.stringify(h.arguments)),
					}).toString();
				}
			},
		),
		define(
			de[1594],
			he([1, 0, 229, 15, 33, 59, 29, 48, 17, 2564, 490, 753, 389]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KCb = e.$JCb = e.$ICb = void 0),
					(e.$HCb = c);
				async function c(b, s, l, y, $ = w.CancellationToken.None, v) {
					const S = s instanceof d.$hL ? o(s, l) : s,
						I = b.all(l),
						T = new E.$Nc();
					for (const O of I) O.groupId && T.add(O.groupId, O);
					function P(O) {
						if (!O.yieldsToGroupIds) return [];
						const B = [];
						for (const U of O.yieldsToGroupIds || []) {
							const z = T.get(U);
							for (const F of z) B.push(F);
						}
						return B;
					}
					const k = new Map(),
						L = new Set();
					function D(O, B) {
						if (((B = [...B, O]), L.has(O))) return B;
						L.add(O);
						try {
							const U = P(O);
							for (const z of U) {
								const F = D(z, B);
								if (F) return F;
							}
						} finally {
							L.delete(O);
						}
					}
					function M(O) {
						const B = k.get(O);
						if (B) return B;
						const U = D(O, []);
						U &&
							(0, C.$5)(
								new Error(
									`Inline completions: cyclic yield-to dependency detected. Path: ${U.map((F) => (F.toString ? F.toString() : "" + F)).join(" -> ")}`,
								),
							);
						const z = new i.$0h();
						return (
							k.set(O, z.p),
							(async () => {
								if (!U) {
									const F = P(O);
									for (const x of F) {
										const H = await M(x);
										if (H && H.items.length > 0) return;
									}
								}
								try {
									return s instanceof d.$hL
										? await O.provideInlineCompletions(l, s, y, $)
										: await O.provideInlineEdits?.(l, s, y, $);
								} catch (F) {
									(0, C.$5)(F);
									return;
								}
							})().then(
								(F) => z.complete(F),
								(F) => z.error(F),
							),
							z.p
						);
					}
					const N = await Promise.all(
							I.map(async (O) => ({ provider: O, completions: await M(O) })),
						),
						A = new Map(),
						R = [];
					for (const O of N) {
						const B = O.completions;
						if (!B) continue;
						const U = new g(B, O.provider);
						R.push(U);
						for (const z of B.items) {
							const F = p.from(z, U, S, l, v);
							A.set(F.hash(), F);
						}
					}
					return new n(Array.from(A.values()), new Set(A.keys()), R);
				}
				class n {
					constructor(s, l, y) {
						(this.completions = s), (this.a = l), (this.b = y);
					}
					has(s) {
						return this.a.has(s.hash());
					}
					dispose() {
						for (const s of this.b) s.removeRef();
					}
				}
				e.$ICb = n;
				class g {
					constructor(s, l) {
						(this.inlineCompletions = s), (this.provider = l), (this.a = 1);
					}
					addRef() {
						this.a++;
					}
					removeRef() {
						this.a--,
							this.a === 0 &&
								this.provider.freeInlineCompletions(this.inlineCompletions);
					}
				}
				e.$JCb = g;
				class p {
					static from(s, l, y, $, v) {
						let S,
							I,
							T = s.range ? m.$iL.lift(s.range) : y;
						if (typeof s.insertText == "string") {
							if (((S = s.insertText), v && s.completeBracketPairs)) {
								S = f(S, T.getStartPosition(), $, v);
								const P = S.length - s.insertText.length;
								P !== 0 &&
									(T = new m.$iL(
										T.startLineNumber,
										T.startColumn,
										T.endLineNumber,
										T.endColumn + P,
									));
							}
							I = void 0;
						} else if ("snippet" in s.insertText) {
							const P = s.insertText.snippet.length;
							if (v && s.completeBracketPairs) {
								s.insertText.snippet = f(
									s.insertText.snippet,
									T.getStartPosition(),
									$,
									v,
								);
								const L = s.insertText.snippet.length - P;
								L !== 0 &&
									(T = new m.$iL(
										T.startLineNumber,
										T.startColumn,
										T.endLineNumber,
										T.endColumn + L,
									));
							}
							const k = new h.$Izb().parse(s.insertText.snippet);
							k.children.length === 1 && k.children[0] instanceof h.Text
								? ((S = k.children[0].value), (I = void 0))
								: ((S = k.toString()),
									(I = { snippet: s.insertText.snippet, range: T }));
						} else (0, t.$kd)(s.insertText);
						return new p(
							S,
							s.command,
							T,
							S,
							I,
							s.additionalTextEdits || (0, a.$wCb)(),
							s,
							l,
						);
					}
					constructor(s, l, y, $, v, S, I, T) {
						(this.filterText = s),
							(this.command = l),
							(this.range = y),
							(this.insertText = $),
							(this.snippetInfo = v),
							(this.additionalTextEdits = S),
							(this.sourceInlineCompletion = I),
							(this.source = T),
							(s = s.replace(
								/\r\n|\r/g,
								`
`,
							)),
							($ = s.replace(
								/\r\n|\r/g,
								`
`,
							));
					}
					withRange(s) {
						return new p(
							this.filterText,
							this.command,
							s,
							this.insertText,
							this.snippetInfo,
							this.additionalTextEdits,
							this.sourceInlineCompletion,
							this.source,
						);
					}
					hash() {
						return JSON.stringify({
							insertText: this.insertText,
							range: this.range.toString(),
						});
					}
					toSingleTextEdit() {
						return new u.$wL(this.range, this.insertText);
					}
				}
				e.$KCb = p;
				function o(b, s) {
					const l = s.getWordAtPosition(b),
						y = s.getLineMaxColumn(b.lineNumber);
					return l
						? new m.$iL(b.lineNumber, l.startColumn, b.lineNumber, y)
						: m.$iL.fromPositions(b, b.with(void 0, y));
				}
				function f(b, s, l, y) {
					const v =
							l.getLineContent(s.lineNumber).substring(0, s.column - 1) + b,
						I = l.tokenization
							.tokenizeLineWithEdit(s, v.length - (s.column - 1), b)
							?.sliceAndInflate(s.column - 1, v.length, 0);
					return I ? (0, r.$GCb)(I, y) : b;
				}
			},
		),
		define(
			de[1595],
			he([1, 0, 2, 2, 2, 13, 27, 343, 12, 1542]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5dc = e.$4dc = void 0),
					(e.$6dc = c);
				const u = (0, t.template)("<button><span>Cancel</span><span>"),
					a = (0, t.template)("<div>");
				(e.$4dc = C.KeyMod.CtrlCmd | r.KeyCode.Backspace),
					(e.$5dc = (0, d.$rs)(e.$4dc, m.OS));
				const h = 100;
				function c(n, g, p) {
					const o = e.$5dc
							? ` ${p.keybindingService.resolveKeybinding(e.$5dc)[0].getLabel()}`
							: "",
						f = (() => {
							const l = u(),
								y = l.firstChild,
								$ = y.nextSibling;
							return (
								l.addEventListener("click", (v) => {
									p.cancelAndDispose(), v.stopPropagation();
								}),
								l.style.setProperty("background-color", "rgba(255,0,0,0.4)"),
								l.style.setProperty("border", "none"),
								l.style.setProperty("font-size", "12px"),
								l.style.setProperty("cursor", "pointer"),
								l.style.setProperty("color", "rgba(255,255,255,0.8)"),
								l.style.setProperty("align-items", "center"),
								$.style.setProperty("font-size", "10px"),
								$.style.setProperty("margin-left", "4px"),
								(0, w.insert)($, o),
								l
							);
						})(),
						[b, s] = (0, E.createSignal)(h);
					return p.reactiveStorageRoot.render(
						() =>
							(() => {
								const l = a();
								return (
									l.style.setProperty("display", "inline-flex"),
									l.style.setProperty("flex-direction", "row"),
									l.style.setProperty("bottom", "0px"),
									l.style.setProperty("height", "18px"),
									l.style.setProperty("border-radius", "4px"),
									l.style.setProperty("margin-top", "1px"),
									l.style.setProperty("margin-bottom", "1px"),
									l.style.setProperty("overflow", "hidden"),
									l.style.setProperty("z-index", "5"),
									l.style.setProperty("position", "absolute"),
									(0, w.insert)(l, f),
									(0, i.effect)(() =>
										`${g - b()}px` != null
											? l.style.setProperty("left", `${g - b()}px`)
											: l.style.removeProperty("left"),
									),
									l
								);
							})(),
						n,
					);
				}
			},
		),
		define(
			de[2699],
			he([1, 0, 2, 2, 27, 343, 12]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1dc = e.$Zdc = void 0),
					(e.$2dc = m);
				const d = (0, t.template)("<div> for GPT-4");
				(e.$Zdc = w.KeyMod.CtrlCmd | w.KeyCode.Enter),
					(e.$1dc = (0, E.$rs)(e.$Zdc, C.OS));
				function m(r, u) {
					const a = e.$1dc
						? ` ${u.keybindingService.resolveKeybinding(e.$1dc)[0].getLabel()}`
						: "";
					return u.reactiveStorageRoot.render(
						() =>
							(() => {
								const h = d(),
									c = h.firstChild;
								return (
									h.style.setProperty("visibility", "hidden"),
									h.style.setProperty("display", "none"),
									h.style.setProperty("position", "absolute"),
									h.style.setProperty("align-items", "center"),
									h.style.setProperty("height", "12px"),
									h.style.setProperty("overflow", "hidden"),
									h.style.setProperty("z-index", "100"),
									h.style.setProperty("font-size", "8px"),
									h.style.setProperty("left", "400px"),
									(0, i.insert)(h, a, c),
									h
								);
							})(),
						r,
					);
				}
			},
		),
		