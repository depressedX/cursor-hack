define(de[2700], he([1, 0, 2, 2, 13, 7]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xdc = d),
				(E = mt(E));
			const C = (0, t.template)("<div>");
			function d(m, r) {
				const [u, a] = (0, w.createSignal)(1),
					h = E.getWindow(m);
				return (
					(0, w.createEffect)(() => {
						a(1);
						const c = h.setInterval(() => {
							a((n) => (n === 3 ? 1 : n + 1));
						}, 175);
						(0, w.onCleanup)(() => {
							h.clearInterval(c);
						});
					}),
					r.reactiveStorageRoot.render(
						() =>
							(() => {
								const c = C();
								return (
									c.style.setProperty("display", "flex"),
									c.style.setProperty("position", "absolute"),
									c.style.setProperty("align-items", "center"),
									c.style.setProperty("height", "12px"),
									c.style.setProperty("overflow", "hidden"),
									c.style.setProperty("z-index", "100"),
									c.style.setProperty("font-size", "8px"),
									c.style.setProperty("left", "40px"),
									(0, i.insert)(c, () => ".".repeat(u())),
									c
								);
							})(),
						m,
					)
				);
			}
		}),
		define(
			de[2701],
			he([1, 0, 2, 2, 2, 2, 2, 7, 1555, 13, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2lc = void 0),
					(e.$3lc = c),
					(d = mt(d));
				const a = (0, t.template)(
					"<div><button><span>Accept</span><span></span></button><button><span>Reject</span><span>",
				);
				class h extends u.$1c {
					constructor(g) {
						super(),
							(this.props = g),
							(this.reactiveStorageRoot = this.D(
								this.props.reactiveStorageService.createScoped(this),
							)),
							(this._domNode = d.$("div.simpleInlineDiffViewZone"));
						const [p, o] = (0, r.createSignal)(!0);
						this.D(
							c(
								{
									reactiveStorageRoot: this.reactiveStorageRoot,
									isVisible: p,
									setIsVisible: o,
									...this.props,
								},
								this._domNode,
							),
						),
							(this.isVisible = p);
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this._domNode;
					}
				}
				e.$2lc = h;
				function c(n, g) {
					return n.reactiveStorageRoot.render(
						() =>
							(0, i.createComponent)(r.Show, {
								get when() {
									return n.isVisible();
								},
								get fallback() {
									return [];
								},
								get children() {
									const p = a(),
										o = p.firstChild,
										f = o.firstChild,
										b = f.nextSibling,
										s = o.nextSibling,
										l = s.firstChild,
										y = l.nextSibling;
									return (
										p.style.setProperty("display", "inline-flex"),
										p.style.setProperty("flex-direction", "row"),
										p.style.setProperty("height", "20px"),
										p.style.setProperty("border-radius", "4px"),
										p.style.setProperty("overflow", "hidden"),
										p.style.setProperty("margin-top", "2px"),
										p.style.setProperty("margin-bottom", "2px"),
										p.style.setProperty("z-index", "1000"),
										p.style.setProperty("position", "relative"),
										o.addEventListener("click", ($) => {
											n.setIsVisible(!1),
												console.log("accept button clicked"),
												n.commandService.executeCommand(m.$Xlc, n.diffId),
												$.stopPropagation();
										}),
										o.style.setProperty(
											"background-color",
											"rgba(0,255,0,0.4)",
										),
										o.style.setProperty("border", "none"),
										o.style.setProperty("font-size", "12px"),
										o.style.setProperty("cursor", "pointer"),
										o.style.setProperty("color", "rgba(255,255,255,0.8)"),
										o.style.setProperty("align-items", "center"),
										b.style.setProperty("font-size", "10px"),
										b.style.setProperty("margin-left", "4px"),
										(0, C.insert)(
											b,
											() =>
												n.keybindingService
													?.lookupKeybinding(m.$Xlc)
													?.getLabel() ?? "",
										),
										s.addEventListener("click", ($) => {
											n.setIsVisible(!1),
												n.commandService.executeCommand(m.$Ylc, n.diffId),
												$.stopPropagation();
										}),
										s.style.setProperty(
											"background-color",
											"rgba(255,0,0,0.4)",
										),
										s.style.setProperty("border", "none"),
										s.style.setProperty("font-size", "12px"),
										s.style.setProperty("cursor", "pointer"),
										s.style.setProperty("color", "rgba(255,255,255,0.8)"),
										s.style.setProperty("align-items", "center"),
										y.style.setProperty("font-size", "10px"),
										y.style.setProperty("margin-left", "4px"),
										(0, C.insert)(
											y,
											() =>
												n.keybindingService
													?.lookupKeybinding(m.$Ylc)
													?.getLabel() ?? "",
										),
										(0, E.effect)(() =>
											(0, w.setAttribute)(
												p,
												"id",
												`simpleInlineDiffViewZone-${n.diffId}`,
											),
										),
										p
									);
								},
							}),
						g,
					);
				}
			},
		),
		define(
			de[1596],
			he([1, 0, 24, 120, 132, 37, 74]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Cb = e.$0Cb = void 0);
				class d {
					constructor(a, h) {
						(this.leadingLineContent = a), (this.characterCountDelta = h);
					}
				}
				e.$0Cb = d;
				var m;
				(function (u) {
					(u[(u.Nothing = 0)] = "Nothing"),
						(u[(u.All = 1)] = "All"),
						(u[(u.Incr = 2)] = "Incr");
				})(m || (m = {}));
				class r {
					constructor(a, h, c, n, g, p, o = w.$5k.default, f = void 0) {
						(this.clipboardText = f),
							(this.g = r.q),
							(this.c = a),
							(this.d = h),
							(this.e = n),
							(this.f = g),
							(this.k = m.All),
							(this.j = c),
							(this.h = o),
							p === "top" ? (this.g = r.s) : p === "bottom" && (this.g = r.r);
					}
					get lineContext() {
						return this.j;
					}
					set lineContext(a) {
						(this.j.leadingLineContent !== a.leadingLineContent ||
							this.j.characterCountDelta !== a.characterCountDelta) &&
							((this.k =
								this.j.characterCountDelta < a.characterCountDelta && this.l
									? m.Incr
									: m.All),
							(this.j = a));
					}
					get items() {
						return this.o(), this.l;
					}
					getItemsByProvider() {
						return this.o(), this.m;
					}
					getIncompleteProvider() {
						this.o();
						const a = new Set();
						for (const [h, c] of this.getItemsByProvider())
							c.length > 0 && c[0].container.incomplete && a.add(h);
						return a;
					}
					get stats() {
						return this.o(), this.n;
					}
					o() {
						this.k !== m.Nothing && this.p();
					}
					p() {
						this.m = new Map();
						const a = [],
							{ leadingLineContent: h, characterCountDelta: c } = this.j;
						let n = "",
							g = "";
						const p = this.k === m.All ? this.c : this.l,
							o = [],
							f = !this.f.filterGraceful || p.length > 2e3 ? w.$6k : w.$7k;
						for (let b = 0; b < p.length; b++) {
							const s = p[b];
							if (s.isInvalid) continue;
							const l = this.m.get(s.provider);
							l ? l.push(s) : this.m.set(s.provider, [s]);
							const y = s.position.column - s.editStart.column,
								$ = y + c - (s.position.column - this.d);
							if (
								(n.length !== $ &&
									((n = $ === 0 ? "" : h.slice(-$)), (g = n.toLowerCase())),
								(s.word = n),
								$ === 0)
							)
								s.score = w.FuzzyScore.Default;
							else {
								let v = 0;
								for (; v < y; ) {
									const S = n.charCodeAt(v);
									if (S === i.CharCode.Space || S === i.CharCode.Tab) v += 1;
									else break;
								}
								if (v >= $) s.score = w.FuzzyScore.Default;
								else if (typeof s.completion.filterText == "string") {
									const S = f(
										n,
										g,
										v,
										s.completion.filterText,
										s.filterTextLow,
										0,
										this.h,
									);
									if (!S) continue;
									(0, E.$Hf)(s.completion.filterText, s.textLabel) === 0
										? (s.score = S)
										: ((s.score = (0, w.$2k)(
												n,
												g,
												v,
												s.textLabel,
												s.labelLow,
												0,
											)),
											(s.score[0] = S[0]));
								} else {
									const S = f(n, g, v, s.textLabel, s.labelLow, 0, this.h);
									if (!S) continue;
									s.score = S;
								}
							}
							(s.idx = b),
								(s.distance = this.e.distance(s.position, s.completion)),
								o.push(s),
								a.push(s.textLabel.length);
						}
						(this.l = o.sort(this.g)),
							(this.k = m.Nothing),
							(this.n = {
								pLabelLen: a.length
									? (0, t.$Cb)(a.length - 0.85, a, (b, s) => b - s)
									: 0,
							});
					}
					static q(a, h) {
						return a.score[0] > h.score[0]
							? -1
							: a.score[0] < h.score[0]
								? 1
								: a.distance < h.distance
									? -1
									: a.distance > h.distance
										? 1
										: a.idx < h.idx
											? -1
											: a.idx > h.idx
												? 1
												: 0;
					}
					static r(a, h) {
						if (a.completion.kind !== h.completion.kind) {
							if (a.completion.kind === C.CompletionItemKind.Snippet) return 1;
							if (h.completion.kind === C.CompletionItemKind.Snippet) return -1;
						}
						return r.q(a, h);
					}
					static s(a, h) {
						if (a.completion.kind !== h.completion.kind) {
							if (a.completion.kind === C.CompletionItemKind.Snippet) return -1;
							if (h.completion.kind === C.CompletionItemKind.Snippet) return 1;
						}
						return r.q(a, h);
					}
				}
				e.$$Cb = r;
			},
		),
		