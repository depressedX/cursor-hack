define(de[2727], he([1, 0, 38, 8]), function (ce, e, t, i) {
			"use strict";
			var w;
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vDb = void 0);
			let E = class {
				static {
					w = this;
				}
				static {
					this.AtEnd = new i.$5j("atEndOfWord", !1);
				}
				constructor(d, m) {
					(this.f = d),
						(this.c = !1),
						(this.a = w.AtEnd.bindTo(m)),
						(this.b = this.f.onDidChangeConfiguration(
							(r) => r.hasChanged(t.EditorOption.tabCompletion) && this.g(),
						)),
						this.g();
				}
				dispose() {
					this.b.dispose(), this.d?.dispose(), this.a.reset();
				}
				g() {
					const d = this.f.getOption(t.EditorOption.tabCompletion) === "on";
					if (this.c !== d)
						if (((this.c = d), this.c)) {
							const m = () => {
								if (!this.f.hasModel()) {
									this.a.set(!1);
									return;
								}
								const r = this.f.getModel(),
									u = this.f.getSelection(),
									a = r.getWordAtPosition(u.getStartPosition());
								if (!a) {
									this.a.set(!1);
									return;
								}
								this.a.set(a.endColumn === u.getStartPosition().column);
							};
							(this.d = this.f.onDidChangeCursorSelection(m)), m();
						} else
							this.d && (this.a.reset(), this.d.dispose(), (this.d = void 0));
				}
			};
			(e.$vDb = E), (e.$vDb = E = w = Ne([j(1, i.$6j)], E));
		}),
		define(
			de[1609],
			he([1, 0, 24, 38, 17, 74, 1556]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SCb = void 0);
				class d {
					static {
						this.None = new (class extends d {
							distance() {
								return 0;
							}
						})();
					}
					static async create(r, u) {
						if (
							!u.getOption(i.EditorOption.suggest).localityBonus ||
							!u.hasModel()
						)
							return d.None;
						const a = u.getModel(),
							h = u.getPosition();
						if (!r.canComputeWordRanges(a.uri)) return d.None;
						const [c] = await new C.$RCb().provideSelectionRanges(a, [h]);
						if (c.length === 0) return d.None;
						const n = await r.computeWordRanges(a.uri, c[0].range);
						if (!n) return d.None;
						const g = a.getWordUntilPosition(h);
						return (
							delete n[g.word],
							new (class extends d {
								distance(p, o) {
									if (!h.equals(u.getPosition())) return 0;
									if (o.kind === E.CompletionItemKind.Keyword) return 2 << 20;
									const f =
											typeof o.label == "string" ? o.label : o.label.label,
										b = n[f];
									if ((0, t.$Ob)(b)) return 2 << 20;
									const s = (0, t.$Ab)(
											b,
											w.$iL.fromPositions(p),
											w.$iL.compareRangesUsingStarts,
										),
										l = s >= 0 ? b[s] : b[Math.max(0, ~s - 1)];
									let y = c.length;
									for (const $ of c) {
										if (!w.$iL.containsRange($.range, l)) break;
										y -= 1;
									}
									return y;
								}
							})()
						);
					}
				}
				e.$SCb = d;
			},
		),
		define(
			de[1610],
			he([1, 0, 7, 56, 3, 65, 58, 31, 38, 2323]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Klc = r),
					(t = mt(t));
				function r(a, h, c, n) {
					let g = !1;
					const p = t.$fhb(h, t.$("div.tooltipTopOuter"));
					(p.style.display = "flex"),
						(p.style.alignItems = "center"),
						(p.style.padding = "8px 12px"),
						(p.style.backgroundColor = "var(--vscode-sideBar-background)"),
						(p.style.borderRadius = "6px"),
						(p.style.width = "280px"),
						(p.style.justifyContent = "space-between"),
						(p.style.boxShadow = "rgba(0, 0, 0, 0.22) 0px 0px 8px 2px"),
						(p.style.transition = "transform 0.1s ease, opacity 0.5s ease-out"),
						(p.style.gap = "8px"),
						(p.style.fontSize = "0.9em"),
						(p.style.marginTop = "12px"),
						(p.style.paddingRight = "4px"),
						(p.style.opacity = "0"),
						setTimeout(() => (p.style.opacity = "1"), 10);
					let o = !0;
					(p.onmouseover = () => {
						o = !1;
					}),
						(p.onmouseleave = () => {
							o = !0;
						}),
						t.getWindow(h).setInterval(() => {
							o &&
								p.animate(
									[
										{ transform: "scale(1)" },
										{ transform: "scale(1.03)" },
										{ transform: "scale(1)" },
									],
									{ duration: 800, iterations: 1, easing: "ease-in-out" },
								);
						}, 1e4);
					const f = t.$fhb(p, t.$("div.tooltipOuter"));
					(f.style.display = "flex"),
						(f.style.opacity = "100%"),
						(f.style.justifyContent = "center"),
						(f.style.flexDirection = "column"),
						(f.style.gap = "2px");
					const b = t.$fhb(f, t.$("div.tooltipInner")),
						s = t.$fhb(b, t.$("div.codicon.codicon-lightbulb"));
					(b.textContent = a.header),
						(b.style.fontWeight = "500"),
						(b.style.fontSize = "1.1em");
					const l = t.$fhb(f, t.$("div.tooltipInner"));
					(l.textContent = a.subheader), (l.style.opacity = "60%");
					const y = t.$fhb(f, t.$("div"));
					(y.style.display = "flex"), (y.style.justifyContent = "flex-end");
					const $ = t.$fhb(p, t.$("div.tooltipInner"));
					($.style.color = "var(--vscode-editor-foreground)"),
						($.style.padding = "4px"),
						($.style.cursor = "pointer"),
						($.style.transition = "color 0.3s ease"),
						($.className = "codicon codicon-chevron-right"),
						($.style.transition = "transform 0.1s ease"),
						($.onmouseover = () => {
							$.style.transform = "translateX(4px)";
						}),
						($.onmouseleave = () => {
							$.style.transform = "translateX(0)";
						}),
						(p.onclick = () => {
							c.executeCommand(C.$OV, { tooltipName: a.name }),
								(g = !0),
								(h.style.transition = "transform 0.75s"),
								(h.style.transform = "translateX(400%)");
							const v = () => {
								h.addEventListener(
									"transitionend",
									(S) => {
										S.propertyName === "transform" &&
											setTimeout(() => {
												n();
											}, 1e3);
									},
									{ once: !0 },
								),
									h.removeEventListener("transitionend", v);
							};
							f.addEventListener("transitionend", v, { once: !0 });
						}),
						setTimeout(
							() => {
								n();
							},
							10 * 60 * 1e3,
						);
				}
				let u = class extends w.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.j = g),
							(this.c = !1),
							(this.allowEditorOverflow = !0),
							(this.b = h),
							(this.a = t.$("div.tooltipEditorUiWidget")),
							r(c, this.a, this.j, this.dispose),
							this.b.addOverlayWidget(this),
							this.f.layoutOverlayWidget(this);
					}
					getPosition() {
						return {
							preference: i.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
						};
					}
					dispose() {
						this.c ||
							(super.dispose(),
							this.b.removeOverlayWidget(this),
							this.a.remove(),
							(this.c = !0));
					}
					getId() {
						return "tooltip.editorUiWidget";
					}
					getDomNode() {
						return this.a;
					}
					updateEditor(h) {
						this.b = h;
						const c = this.b.getOptions();
						c.get(m.EditorOption.inDiffEditor) || c.get(m.EditorOption.readOnly)
							? (this.a.style.display = "none")
							: (this.a.style.display = "block");
					}
				};
				(u = Ne([j(2, E.$dtb), j(3, d.$ek)], u)), (e.default = u);
			},
		),
		define(
			de[2728],
			he([1, 0, 6, 103, 3, 221, 82, 387, 9, 4, 31, 10, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Etc = e.$Dtc = e.$Ctc = void 0),
					(e.$Ftc = P);
				const c = "data-keybinding-context";
				class n {
					constructor(D, M) {
						(this.f = D),
							(this.c = M),
							(this.d = Object.create(null)),
							(this.d._contextId = D);
					}
					get value() {
						return { ...this.d };
					}
					setValue(D, M) {
						return this.d[D] !== M ? ((this.d[D] = M), !0) : !1;
					}
					removeValue(D) {
						return D in this.d ? (delete this.d[D], !0) : !1;
					}
					getValue(D) {
						const M = this.d[D];
						return typeof M > "u" && this.c ? this.c.getValue(D) : M;
					}
					updateParent(D) {
						this.c = D;
					}
					collectAllValues() {
						let D = this.c ? this.c.collectAllValues() : Object.create(null);
						return (D = { ...D, ...this.d }), delete D._contextId, D;
					}
				}
				e.$Ctc = n;
				class g extends n {
					static {
						this.INSTANCE = new g();
					}
					constructor() {
						super(-1, null);
					}
					setValue(D, M) {
						return !1;
					}
					removeValue(D) {
						return !1;
					}
					getValue(D) {}
					collectAllValues() {
						return Object.create(null);
					}
				}
				class p extends n {
					static {
						this.g = "config.";
					}
					constructor(D, M, N) {
						super(D, null),
							(this.j = M),
							(this.h = d.$Si.forConfigKeys()),
							(this.i = this.j.onDidChangeConfiguration((A) => {
								if (A.source === a.ConfigurationTarget.DEFAULT) {
									const R = Array.from(this.h, ([O]) => O);
									this.h.clear(), N.fire(new b(R));
								} else {
									const R = [];
									for (const O of A.affectedKeys) {
										const B = `config.${O}`,
											U = this.h.findSuperstr(B);
										U !== void 0 &&
											(R.push(...i.Iterable.map(U, ([z]) => z)),
											this.h.deleteSuperstr(B)),
											this.h.has(B) && (R.push(B), this.h.delete(B));
									}
									N.fire(new b(R));
								}
							}));
					}
					dispose() {
						this.i.dispose();
					}
					getValue(D) {
						if (D.indexOf(p.g) !== 0) return super.getValue(D);
						if (this.h.has(D)) return this.h.get(D);
						const M = D.substr(p.g.length),
							N = this.j.getValue(M);
						let A;
						switch (typeof N) {
							case "number":
							case "boolean":
							case "string":
								A = N;
								break;
							default:
								Array.isArray(N) ? (A = JSON.stringify(N)) : (A = N);
						}
						return this.h.set(D, A), A;
					}
					setValue(D, M) {
						return super.setValue(D, M);
					}
					removeValue(D) {
						return super.removeValue(D);
					}
					collectAllValues() {
						const D = Object.create(null);
						return (
							this.h.forEach((M, N) => (D[N] = M)),
							{ ...D, ...super.collectAllValues() }
						);
					}
				}
				class o {
					constructor(D, M, N) {
						(this.c = D), (this.d = M), (this.f = N), this.reset();
					}
					set(D) {
						this.c.setContext(this.d, D);
					}
					reset() {
						typeof this.f > "u"
							? this.c.removeContext(this.d)
							: this.c.setContext(this.d, this.f);
					}
					get() {
						return this.c.getContextKeyValue(this.d);
					}
				}
				class f {
					constructor(D) {
						this.key = D;
					}
					affectsSome(D) {
						return D.has(this.key);
					}
					allKeysContainedIn(D) {
						return this.affectsSome(D);
					}
				}
				class b {
					constructor(D) {
						this.keys = D;
					}
					affectsSome(D) {
						for (const M of this.keys) if (D.has(M)) return !0;
						return !1;
					}
					allKeysContainedIn(D) {
						return this.keys.every((M) => D.has(M));
					}
				}
				class s {
					constructor(D) {
						this.events = D;
					}
					affectsSome(D) {
						for (const M of this.events) if (M.affectsSome(D)) return !0;
						return !1;
					}
					allKeysContainedIn(D) {
						return this.events.every((M) => M.allKeysContainedIn(D));
					}
				}
				function l(L, D) {
					return L.allKeysContainedIn(new Set(Object.keys(D)));
				}
				class y extends w.$1c {
					constructor(D) {
						super(),
							(this.g = this.D(new t.$ue({ merge: (M) => new s(M) }))),
							(this.onDidChangeContext = this.g.event),
							(this.c = !1),
							(this.f = D);
					}
					get contextId() {
						return this.f;
					}
					createKey(D, M) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						return new o(this, D, M);
					}
					bufferChangeEvents(D) {
						this.g.pause();
						try {
							D();
						} finally {
							this.g.resume();
						}
					}
					createScoped(D) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						return new v(this, D);
					}
					createOverlay(D = i.Iterable.empty()) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						return new I(this, D);
					}
					contextMatchesRules(D) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						const M = this.getContextValuesContainer(this.f);
						return D ? D.evaluate(M) : !0;
					}
					getContextKeyValue(D) {
						if (!this.c)
							return this.getContextValuesContainer(this.f).getValue(D);
					}
					setContext(D, M) {
						if (this.c) return;
						const N = this.getContextValuesContainer(this.f);
						N && N.setValue(D, M) && this.g.fire(new f(D));
					}
					removeContext(D) {
						this.c ||
							(this.getContextValuesContainer(this.f).removeValue(D) &&
								this.g.fire(new f(D)));
					}
					getContext(D) {
						return this.c ? g.INSTANCE : this.getContextValuesContainer(T(D));
					}
					dispose() {
						super.dispose(), (this.c = !0);
					}
				}
				e.$Dtc = y;
				let $ = class extends y {
					constructor(D) {
						super(0), (this.j = new Map()), (this.h = 0);
						const M = this.D(new p(this.f, D, this.g));
						this.j.set(this.f, M);
					}
					getContextValuesContainer(D) {
						return this.c ? g.INSTANCE : this.j.get(D) || g.INSTANCE;
					}
					createChildContext(D = this.f) {
						if (this.c) throw new Error("ContextKeyService has been disposed");
						const M = ++this.h;
						return (
							this.j.set(M, new n(M, this.getContextValuesContainer(D))), M
						);
					}
					disposeContext(D) {
						this.c || this.j.delete(D);
					}
					updateParent(D) {
						throw new Error("Cannot update parent of root ContextKeyService");
					}
				};
				(e.$Etc = $), (e.$Etc = $ = Ne([j(0, a.$gj)], $));
				class v extends y {
					constructor(D, M) {
						if (
							(super(D.createChildContext()),
							(this.m = this.D(new w.$2c())),
							(this.h = D),
							this.n(),
							(this.j = M),
							this.j.hasAttribute(c))
						) {
							let N = "";
							this.j.classList &&
								(N = Array.from(this.j.classList.values()).join(", ")),
								console.error(
									`Element already has context attribute${N ? ": " + N : ""}`,
								);
						}
						this.j.setAttribute(c, String(this.f));
					}
					n() {
						this.m.value = this.h.onDidChangeContext((D) => {
							const N = this.h.getContextValuesContainer(this.f).value;
							l(D, N) || this.g.fire(D);
						});
					}
					dispose() {
						this.c ||
							(this.h.disposeContext(this.f),
							this.j.removeAttribute(c),
							super.dispose());
					}
					getContextValuesContainer(D) {
						return this.c ? g.INSTANCE : this.h.getContextValuesContainer(D);
					}
					createChildContext(D = this.f) {
						if (this.c)
							throw new Error("ScopedContextKeyService has been disposed");
						return this.h.createChildContext(D);
					}
					disposeContext(D) {
						this.c || this.h.disposeContext(D);
					}
					updateParent(D) {
						if (this.h === D) return;
						const M = this.h.getContextValuesContainer(this.f),
							N = M.collectAllValues();
						(this.h = D), this.n();
						const A = this.h.getContextValuesContainer(this.h.contextId);
						M.updateParent(A);
						const R = M.collectAllValues(),
							O = { ...(0, C.$Bo)(N, R), ...(0, C.$Bo)(R, N) },
							B = Object.keys(O);
						this.g.fire(new b(B));
					}
				}
				class S {
					constructor(D, M) {
						(this.c = D), (this.d = M);
					}
					getValue(D) {
						return this.d.has(D) ? this.d.get(D) : this.c.getValue(D);
					}
				}
				class I {
					get contextId() {
						return this.d.contextId;
					}
					get onDidChangeContext() {
						return this.d.onDidChangeContext;
					}
					constructor(D, M) {
						(this.d = D), (this.c = new Map(M));
					}
					bufferChangeEvents(D) {
						this.d.bufferChangeEvents(D);
					}
					createKey() {
						throw new Error("Not supported.");
					}
					getContext(D) {
						return new S(this.d.getContext(D), this.c);
					}
					getContextValuesContainer(D) {
						const M = this.d.getContextValuesContainer(D);
						return new S(M, this.c);
					}
					contextMatchesRules(D) {
						const M = this.getContextValuesContainer(this.contextId);
						return D ? D.evaluate(M) : !0;
					}
					getContextKeyValue(D) {
						return this.c.has(D) ? this.c.get(D) : this.d.getContextKeyValue(D);
					}
					createScoped() {
						throw new Error("Not supported.");
					}
					createOverlay(D = i.Iterable.empty()) {
						return new I(this, D);
					}
					updateParent() {
						throw new Error("Not supported.");
					}
				}
				function T(L) {
					for (; L; ) {
						if (L.hasAttribute(c)) {
							const D = L.getAttribute(c);
							return D ? parseInt(D, 10) : NaN;
						}
						L = L.parentElement;
					}
					return 0;
				}
				function P(L, D, M) {
					L.get(h.$6j).createKey(String(D), k(M));
				}
				function k(L) {
					return (0, C.$xo)(L, (D) => {
						if (typeof D == "object" && D.$mid === E.MarshalledId.Uri)
							return m.URI.revive(D).toString();
						if (D instanceof m.URI) return D.toString();
					});
				}
				u.$fk.registerCommand("_setContext", P),
					u.$fk.registerCommand({
						id: "getContextKeyInfo",
						handler() {
							return [...h.$5j.all()].sort((L, D) =>
								L.key.localeCompare(D.key),
							);
						},
						metadata: { description: (0, r.localize)(1684, null), args: [] },
					}),
					u.$fk.registerCommand("_generateContextKeyInfo", function () {
						const L = [],
							D = new Set();
						for (const M of h.$5j.all())
							D.has(M.key) || (D.add(M.key), L.push(M));
						L.sort((M, N) => M.key.localeCompare(N.key)),
							console.log(JSON.stringify(L, void 0, 2));
					});
			},
		),
		