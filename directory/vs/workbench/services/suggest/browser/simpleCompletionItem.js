define(de[3651], he([1, 0, 132, 12]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0Uc = void 0);
			class w {
				constructor(C) {
					if (
						((this.completion = C),
						(this.fileExtLow = ""),
						(this.score = t.FuzzyScore.Default),
						(this.labelLow = this.completion.label.toLowerCase()),
						(this.labelLowExcludeFileExt = this.labelLow),
						C.isFile)
					) {
						i.$l && (this.labelLow = this.labelLow.replaceAll("/", "\\"));
						const d = this.labelLow.lastIndexOf(".");
						d !== -1 &&
							((this.labelLowExcludeFileExt = this.labelLow.substring(0, d)),
							(this.fileExtLow = this.labelLow.substring(d + 1)));
					}
				}
			}
			e.$0Uc = w;
		}),
		define(
			de[3652],
			he([1, 0, 24, 120, 132, 12]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Uc = e.$$Uc = void 0);
				class C {
					constructor(h, c) {
						(this.leadingLineContent = h), (this.characterCountDelta = c);
					}
				}
				e.$$Uc = C;
				var d;
				(function (a) {
					(a[(a.Nothing = 0)] = "Nothing"),
						(a[(a.All = 1)] = "All"),
						(a[(a.Incr = 2)] = "Incr");
				})(d || (d = {}));
				class m {
					constructor(h, c, n, g) {
						(this.h = h),
							(this.j = c),
							(this.replacementIndex = n),
							(this.replacementLength = g),
							(this.e = d.All),
							(this.f = w.$5k.default),
							(this.g = {});
					}
					get items() {
						return this.k(), this.d;
					}
					get stats() {
						return this.k(), this.c;
					}
					get lineContext() {
						return this.j;
					}
					set lineContext(h) {
						(this.j.leadingLineContent !== h.leadingLineContent ||
							this.j.characterCountDelta !== h.characterCountDelta) &&
							((this.e =
								this.j.characterCountDelta < h.characterCountDelta && this.d
									? d.Incr
									: d.All),
							(this.j = h));
					}
					k() {
						this.e !== d.Nothing && this.l();
					}
					l() {
						const h = [],
							{ leadingLineContent: c, characterCountDelta: n } = this.j;
						let g = "",
							p = "";
						const o = this.e === d.All ? this.h : this.d,
							f = [],
							b = !this.g.filterGraceful || o.length > 2e3 ? w.$6k : w.$7k;
						for (let s = 0; s < o.length; s++) {
							const l = o[s],
								y = this.replacementLength,
								$ = y + n;
							if (
								(g.length !== $ &&
									((g = $ === 0 ? "" : c.slice(-$)), (p = g.toLowerCase())),
								(l.word = g),
								$ === 0)
							)
								l.score = w.FuzzyScore.Default;
							else {
								let v = 0;
								for (; v < y; ) {
									const S = g.charCodeAt(v);
									if (S === i.CharCode.Space || S === i.CharCode.Tab) v += 1;
									else break;
								}
								if (v >= $) l.score = w.FuzzyScore.Default;
								else {
									const S = b(
										g,
										p,
										v,
										l.completion.label,
										l.labelLow,
										0,
										this.f,
									);
									if (!S) continue;
									l.score = S;
								}
							}
							(l.idx = s), f.push(l), h.push(l.completion.label.length);
						}
						(this.d = f.sort((s, l) => {
							let y = 0;
							if (
								(((s.completion.isKeyword && s.labelLow !== p) ||
									(l.completion.isKeyword && l.labelLow !== p)) &&
									((y =
										(s.completion.isKeyword ? 1 : 0) -
										(l.completion.isKeyword ? 1 : 0)),
									y !== 0)) ||
								((y = l.score[0] - s.score[0]), y !== 0)
							)
								return y;
							if (
								!c.includes(" ") &&
								s.fileExtLow.length > 0 &&
								l.fileExtLow.length > 0
							) {
								if (
									((y =
										s.labelLowExcludeFileExt.length -
										l.labelLowExcludeFileExt.length),
									y !== 0 || ((y = u(l.fileExtLow) - u(s.fileExtLow)), y !== 0))
								)
									return y;
								y = s.fileExtLow.length - l.fileExtLow.length;
							}
							return y;
						})),
							(this.e = d.Nothing),
							(this.c = {
								pLabelLen: h.length
									? (0, t.$Cb)(h.length - 0.85, h, (s, l) => s - l)
									: 0,
							});
					}
				}
				e.$_Uc = m;
				const r = new Map(
					E.$l
						? [
								["ps1", 0.09],
								["exe", 0.08],
								["bat", 0.07],
								["cmd", 0.07],
								["sh", -0.05],
								["bash", -0.05],
								["zsh", -0.05],
								["fish", -0.05],
								["csh", -0.06],
								["ksh", -0.06],
							]
						: [
								["ps1", 0.05],
								["bat", -0.05],
								["cmd", -0.05],
								["exe", -0.05],
								["sh", 0.05],
								["bash", 0.05],
								["zsh", 0.05],
								["fish", 0.05],
								["csh", 0.04],
								["ksh", 0.04],
								["py", 0.05],
								["pl", 0.05],
							],
				);
				function u(a) {
					return r.get(a) || 0;
				}
			},
		),
		define(
			de[3653],
			he([1, 0, 7, 325, 14, 6, 132, 3, 26]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bVc = void 0),
					(e.$aVc = r);
				function r(h) {
					return `simple-suggest-aria-id:${h}`;
				}
				class u {
					constructor(c) {
						(this.b = c),
							(this.a = new E.$re()),
							(this.onDidToggleDetails = this.a.event),
							(this.templateId = "suggestion");
					}
					dispose() {
						this.a.dispose();
					}
					renderTemplate(c) {
						const n = new d.$Zc(),
							g = c;
						g.classList.add("show-file-icons");
						const p = (0, t.$fhb)(c, (0, t.$)(".icon")),
							o = (0, t.$fhb)(p, (0, t.$)("span.colorspan")),
							f = (0, t.$fhb)(c, (0, t.$)(".contents")),
							b = (0, t.$fhb)(f, (0, t.$)(".main")),
							s = (0, t.$fhb)(b, (0, t.$)(".icon-label.codicon")),
							l = (0, t.$fhb)(b, (0, t.$)("span.left")),
							y = (0, t.$fhb)(b, (0, t.$)("span.right")),
							$ = new i.$Xob(l, { supportHighlights: !0, supportIcons: !0 });
						n.add($);
						const v = (0, t.$fhb)(l, (0, t.$)("span.signature-label")),
							S = (0, t.$fhb)(l, (0, t.$)("span.qualifier-label")),
							I = (0, t.$fhb)(y, (0, t.$)("span.details-label"));
						return (
							(() => {
								const P = "",
									{
										fontFamily: k,
										fontSize: L,
										lineHeight: D,
										fontWeight: M,
										letterSpacing: N,
									} = this.b(),
									A = `${L}px`,
									R = `${D}px`,
									O = `${N}px`;
								(g.style.fontSize = A),
									(g.style.fontWeight = M),
									(g.style.letterSpacing = O),
									(b.style.fontFamily = k),
									(b.style.fontFeatureSettings = P),
									(b.style.lineHeight = R),
									(p.style.height = R),
									(p.style.width = R);
							})(),
							{
								root: g,
								left: l,
								right: y,
								icon: p,
								colorspan: o,
								iconLabel: $,
								iconContainer: s,
								parametersLabel: v,
								qualifierLabel: S,
								detailsLabel: I,
								disposables: n,
							}
						);
					}
					renderElement(c, n, g) {
						const { completion: p } = c;
						(g.root.id = r(n)), (g.colorspan.style.backgroundColor = "");
						const o = { labelEscapeNewLines: !0, matches: (0, C.$3k)(c.score) };
						(g.icon.className = "icon hide"),
							(g.iconContainer.className = ""),
							g.iconContainer.classList.add(
								"suggest-icon",
								...m.ThemeIcon.asClassNameArray(p.icon || w.$ak.symbolText),
							),
							g.iconLabel.setLabel(p.label, void 0, o),
							(g.parametersLabel.textContent = ""),
							(g.detailsLabel.textContent = a(p.detail || "")),
							g.root.classList.add("string-label"),
							(0, t.show)(g.detailsLabel),
							g.right.classList.remove("can-expand-details");
					}
					disposeTemplate(c) {
						c.disposables.dispose();
					}
				}
				e.$bVc = u;
				function a(h) {
					return h.replace(/\r\n|\r|\n/g, "");
				}
			},
		),
		define(
			de[3654],
			he([1, 0, 7, 278, 930, 3653, 15, 6, 3, 201, 4, 5, 1674, 2540]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cVc = void 0),
					(t = mt(t));
				const c = t.$;
				var n;
				(function (o) {
					(o[(o.Hidden = 0)] = "Hidden"),
						(o[(o.Loading = 1)] = "Loading"),
						(o[(o.Empty = 2)] = "Empty"),
						(o[(o.Open = 3)] = "Open"),
						(o[(o.Frozen = 4)] = "Frozen"),
						(o[(o.Details = 5)] = "Details");
				})(n || (n = {}));
				var g;
				(function (o) {
					(o[(o.Above = 0)] = "Above"), (o[(o.Below = 1)] = "Below");
				})(g || (g = {}));
				let p = class extends m.$1c {
					get list() {
						return this.m;
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.u = f),
							(this.w = b),
							(this.y = s),
							(this.a = n.Hidden),
							(this.f = !1),
							(this.h = this.D(new m.$2c())),
							(this.q = this.D(new C.$Wh())),
							(this.r = this.D(new d.$re())),
							(this.onDidSelect = this.r.event),
							(this.s = this.D(new d.$re())),
							(this.onDidHide = this.s.event),
							(this.t = this.D(new d.$re())),
							(this.onDidShow = this.t.event),
							(this.element = this.D(new w.$dpb())),
							this.element.domNode.classList.add("workbench-suggest-widget"),
							this.u.appendChild(this.element.domNode);
						class $ {
							constructor(T, P, k = !1, L = !1) {
								(this.persistedSize = T),
									(this.currentSize = P),
									(this.persistHeight = k),
									(this.persistWidth = L);
							}
						}
						let v;
						this.D(
							this.element.onDidWillResize(() => {
								v = new $(this.w.restore(), this.element.size);
							}),
						),
							this.D(
								this.element.onDidResize((I) => {
									if (
										(this.H(I.dimension.width, I.dimension.height),
										v &&
											((v.persistHeight =
												v.persistHeight || !!I.north || !!I.south),
											(v.persistWidth =
												v.persistWidth || !!I.east || !!I.west)),
										!!I.done)
									) {
										if (v) {
											const { itemHeight: T, defaultSize: P } = this.I(),
												k = Math.round(T / 2);
											let { width: L, height: D } = this.element.size;
											(!v.persistHeight ||
												Math.abs(v.currentSize.height - D) <= k) &&
												(D = v.persistedSize?.height ?? P.height),
												(!v.persistWidth ||
													Math.abs(v.currentSize.width - L) <= k) &&
													(L = v.persistedSize?.width ?? P.width),
												this.w.store(new t.$pgb(L, D));
										}
										v = void 0;
									}
								}),
							);
						const S = new E.$bVc(s);
						this.D(S),
							(this.j = t.$fhb(this.element.domNode, c(".tree"))),
							(this.m = this.D(
								new i.List(
									"SuggestWidget",
									this.j,
									{
										getHeight: (I) => this.I().itemHeight,
										getTemplateId: (I) => "suggestion",
									},
									[S],
									{
										alwaysConsumeMouseWheel: !0,
										useShadows: !1,
										mouseSupport: !1,
										multipleSelectionSupport: !1,
										accessibilityProvider: {
											getRole: () => "option",
											getWidgetAriaLabel: () => (0, u.localize)(12655, null),
											getWidgetRole: () => "listbox",
											getAriaLabel: (I) => {
												let T = I.completion.label;
												if (typeof I.completion.label != "string") {
													const { detail: k, description: L } =
														I.completion.label;
													k && L
														? (T = (0, u.localize)(12656, null, T, k, L))
														: k
															? (T = (0, u.localize)(12657, null, T, k))
															: L && (T = (0, u.localize)(12658, null, T, L));
												}
												const { detail: P } = I.completion;
												return (0, u.localize)(12659, null, T, P);
											},
										},
									},
								),
							)),
							l.statusBarMenuId &&
								((this.n = this.D(
									y.createInstance(
										h.$xDb,
										this.element.domNode,
										l.statusBarMenuId,
									),
								)),
								this.element.domNode.classList.toggle("with-status-bar", !0)),
							this.D(this.m.onMouseDown((I) => this.J(I))),
							this.D(this.m.onTap((I) => this.J(I))),
							this.D(this.m.onDidChangeSelection((I) => this.L(I)));
					}
					setCompletionModel(f) {
						this.b = f;
					}
					hasCompletions() {
						return this.b?.items.length !== 0;
					}
					showSuggestions(f, b, s, l) {
						if (
							((this.z = l), b && this.a !== n.Empty && this.a !== n.Hidden)
						) {
							this.C(n.Frozen);
							return;
						}
						if ((this.b?.items.length ?? 0) === 0) {
							this.C(s ? n.Hidden : n.Empty), (this.b = void 0);
							return;
						}
						try {
							this.m.splice(0, this.m.length, this.b?.items ?? []),
								this.C(b ? n.Frozen : n.Open),
								this.m.reveal(f, 0),
								this.m.setFocus([f]);
						} finally {
						}
						this.h.value = t.$ggb(t.getWindow(this.element.domNode), () => {
							this.h.clear(), this.G(this.element.size);
						});
					}
					setLineContext(f) {
						this.b && (this.b.lineContext = f);
					}
					C(f) {
						if (this.a !== f)
							switch (
								((this.a = f),
								this.element.domNode.classList.toggle("frozen", f === n.Frozen),
								this.element.domNode.classList.remove("message"),
								f)
							) {
								case n.Hidden:
									t.hide(this.j),
										this.n && t.hide(this.n?.element),
										this.n?.hide(),
										this.q.cancel(),
										this.element.domNode.classList.remove("visible"),
										this.m.splice(0, this.m.length),
										(this.c = void 0);
									break;
								case n.Loading:
									this.element.domNode.classList.add("message"),
										t.hide(this.j),
										this.n && t.hide(this.n?.element),
										this.F();
									break;
								case n.Empty:
									this.element.domNode.classList.add("message"),
										t.hide(this.j),
										this.n && t.hide(this.n?.element),
										this.F();
									break;
								case n.Open:
									t.show(this.j), this.n && t.show(this.n?.element), this.F();
									break;
								case n.Frozen:
									t.show(this.j), this.n && t.show(this.n?.element), this.F();
									break;
								case n.Details:
									t.show(this.j), this.n && t.show(this.n?.element), this.F();
									break;
							}
					}
					F() {
						this.n?.show(),
							t.show(this.element.domNode),
							this.G(this.w.restore()),
							this.q.cancelAndSet(() => {
								this.element.domNode.classList.add("visible"),
									this.t.fire(this);
							}, 100);
					}
					hide() {
						this.h.clear(),
							this.C(n.Hidden),
							this.s.fire(this),
							t.hide(this.element.domNode),
							this.element.clearSashHoverState();
						const f = this.w.restore(),
							b = Math.ceil(this.I().itemHeight * 4.3);
						f && f.height < b && this.w.store(f.with(void 0, b));
					}
					G(f) {
						if (!this.z) return;
						const b = t.$ogb(this.u.ownerDocument.body),
							s = this.I();
						f || (f = s.defaultSize);
						let l = f.height,
							y = f.width;
						this.n && (this.n.element.style.lineHeight = `${s.itemHeight}px`);
						const $ = b.width - s.borderHeight - 2 * s.horizontalPadding;
						y > $ && (y = $);
						const v = this.b
								? this.b.stats.pLabelLen * s.typicalHalfwidthCharacterWidth
								: y,
							S = s.statusBarHeight + this.m.contentHeight + s.borderHeight,
							I = s.itemHeight + s.statusBarHeight,
							T = t.$tgb(this.u),
							P = this.z,
							k = T.top + P.top + P.height,
							L = Math.min(b.height - k - s.verticalPadding, S),
							D = T.top + P.top - s.verticalPadding,
							M = Math.min(D, S);
						let N = Math.min(Math.max(M, L) + s.borderHeight, S);
						l === this.c?.capped && (l = this.c.wanted),
							l < I && (l = I),
							l > N && (l = N),
							l > L || (this.f && D > 150)
								? ((this.g = g.Above),
									this.element.enableSashes(!0, !0, !1, !1),
									(N = M))
								: ((this.g = g.Below),
									this.element.enableSashes(!1, !0, !0, !1),
									(N = L)),
							(this.element.preferredSize = new t.$pgb(
								v,
								s.defaultSize.height,
							)),
							(this.element.maxSize = new t.$pgb($, N)),
							(this.element.minSize = new t.$pgb(220, I)),
							(this.c =
								l === S
									? { wanted: this.c?.wanted ?? f.height, capped: l }
									: void 0),
							(this.element.domNode.style.left = `${this.z.left}px`),
							this.g === g.Above
								? (this.element.domNode.style.top = `${this.z.top - l - s.borderHeight}px`)
								: (this.element.domNode.style.top = `${this.z.top + this.z.height}px`),
							this.H(y, l);
					}
					H(f, b) {
						const { width: s, height: l } = this.element.maxSize;
						(f = Math.min(s, f)), l && (b = Math.min(l, b));
						const { statusBarHeight: y } = this.I();
						this.m.layout(b - y, f),
							(this.j.style.height = `${b - y}px`),
							(this.j.style.width = `${f}px`),
							(this.j.style.height = `${b}px`),
							this.element.layout(b, f);
					}
					I() {
						const f = this.y(),
							b = (0, r.$Zm)(Math.ceil(f.lineHeight), 8, 1e3),
							s = 0; //!this.editor.getOption(EditorOption.suggest).showStatusBar || this._state === State.Empty || this._state === State.Loading ? 0 : itemHeight;
						const l = 1,
							y = 2 * l;
						return {
							itemHeight: b,
							statusBarHeight: s,
							borderWidth: l,
							borderHeight: y,
							typicalHalfwidthCharacterWidth: 10,
							verticalPadding: 22,
							horizontalPadding: 14,
							defaultSize: new t.$pgb(430, s + 12 * b + y),
						};
					}
					J(f) {
						typeof f.element > "u" ||
							typeof f.index > "u" ||
							(f.browserEvent.preventDefault(),
							f.browserEvent.stopPropagation(),
							this.M(f.element, f.index));
					}
					L(f) {
						f.elements.length && this.M(f.elements[0], f.indexes[0]);
					}
					M(f, b) {
						const s = this.b;
						s && this.r.fire({ item: f, index: b, model: s });
					}
					selectNext() {
						this.m.focusNext(1, !0);
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					selectNextPage() {
						this.m.focusNextPage();
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					selectPrevious() {
						this.m.focusPrevious(1, !0);
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					selectPreviousPage() {
						this.m.focusPreviousPage();
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					getFocusedItem() {
						if (this.b)
							return {
								item: this.m.getFocusedElements()[0],
								index: this.m.getFocus()[0],
								model: this.b,
							};
					}
					forceRenderingAbove() {
						this.f || ((this.f = !0), this.G(this.w.restore()));
					}
					stopForceRenderingAbove() {
						this.f = !1;
					}
				};
				(e.$cVc = p), (e.$cVc = p = Ne([j(4, a.$Li)], p));
			},
		),
		define(
			de[3655],
			he([
				1, 0, 7, 14, 6, 3, 54, 37, 1692, 10, 5, 21, 189, 1202, 106, 51, 107,
				691, 809, 3651, 3652, 3654,
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
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SWc = e.VSCodeSuggestOscPt = void 0),
					(e.$TWc = T),
					(t = mt(t));
				var $;
				(function (D) {
					(D.Completions = "Completions"),
						(D.CompletionsPwshCommands = "CompletionsPwshCommands"),
						(D.CompletionsBash = "CompletionsBash"),
						(D.CompletionsBashFirstWord = "CompletionsBashFirstWord");
				})($ || (e.VSCodeSuggestOscPt = $ = {}));
				const v = {
					0: i.$ak.symbolText,
					1: i.$ak.history,
					2: i.$ak.symbolMethod,
					3: i.$ak.symbolFile,
					4: i.$ak.folder,
					5: i.$ak.symbolProperty,
					6: i.$ak.symbolMethod,
					7: i.$ak.symbolVariable,
					8: i.$ak.symbolValue,
					9: i.$ak.symbolVariable,
					10: i.$ak.symbolNamespace,
					11: i.$ak.symbolInterface,
					12: i.$ak.symbolKeyword,
					13: i.$ak.symbolKeyword,
				};
				let S = class extends E.$1c {
					static {
						y = this;
					}
					static {
						this.requestCompletionsSequence = "\x1B[24~e";
					}
					static {
						this.requestGlobalCompletionsSequence = "\x1B[24~f";
					}
					static {
						this.requestEnableGitCompletionsSequence = "\x1B[24~g";
					}
					static {
						this.requestEnableCodeCompletionsSequence = "\x1B[24~h";
					}
					constructor(M, N, A, R, O, B) {
						super(),
							(this.P = M),
							(this.Q = N),
							(this.R = A),
							(this.S = R),
							(this.U = O),
							(this.W = B),
							(this.h = this.D(new E.$2c())),
							(this.t = !0),
							(this.u = C.sep),
							(this.w = !1),
							(this.z = !1),
							(this.C = !1),
							(this.G = 0),
							(this.H = 0),
							(this.I = 0),
							(this.L = this.D(new w.$re())),
							(this.onBell = this.L.event),
							(this.M = this.D(new w.$re())),
							(this.onAcceptedCompletion = this.M.event),
							(this.N = this.D(new w.$re())),
							(this.onDidRequestCompletions = this.N.event),
							(this.O = this.D(new w.$re())),
							(this.onDidReceiveCompletions = this.O.event),
							(this.ab = 0),
							(this.bb = 0),
							(this.db = new Set()),
							(this.eb = new Set()),
							(this.fb = new Set()),
							(this.gb = new Set()),
							this.D(
								w.Event.runAndSubscribe(
									w.Event.any(
										this.Q.onDidAddCapabilityType,
										this.Q.onDidRemoveCapabilityType,
									),
									() => {
										const U = this.Q.get(h.TerminalCapability.CommandDetection);
										U
											? this.g !== U.promptInputModel &&
												((this.g = U.promptInputModel),
												(this.h.value = (0, E.$Xc)(
													this.g.onDidChangeInput((z) => this.Z(z)),
													this.g.onDidFinishInput(() =>
														this.hideSuggestWidget(),
													),
												)))
											: (this.g = void 0);
									},
								),
							);
					}
					activate(M) {
						(this.f = M),
							this.D(
								M.parser.registerOscHandler(
									c.ShellIntegrationOscPs.VSCode,
									(N) => this.$(N),
								),
							),
							this.D(
								M.onData((N) => {
									(this.J = N), (this.H = Date.now());
								}),
							);
					}
					setPanel(M) {
						this.q = M;
					}
					setScreen(M) {
						this.r = M;
					}
					X() {
						if (!this.g) return;
						const M = this.S.getValue(f.$fIb).builtinCompletions;
						!this.z &&
							M.pwshCode &&
							(this.M.fire(y.requestEnableCodeCompletionsSequence),
							(this.z = !0)),
							!this.C &&
								M.pwshGit &&
								(this.M.fire(y.requestEnableGitCompletionsSequence),
								(this.C = !0)),
							this.P.size === 0 && this.Y(),
							this.H > this.I &&
								(this.M.fire(y.requestCompletionsSequence), this.N.fire());
					}
					Y() {
						this.M.fire(y.requestGlobalCompletionsSequence);
					}
					Z(M) {
						const N = this.S.getValue(f.$fIb);
						if (!this.j || M.cursorIndex > this.j.cursorIndex) {
							let O = !1;
							if (
								(this.R.get() ||
									(N.quickSuggestions &&
										(M.cursorIndex === 1 || M.prefix.match(/([\s\[])[^\s]$/)) &&
										(this.J?.match(/^\x1b[\[O]?[A-D]$/) ||
											(this.X(), (O = !0)))),
								N.suggestOnTriggerCharacters && !O)
							) {
								const B = M.prefix;
								(B?.match(/\s[\-]$/) || (this.w && B?.match(/[\\\/]$/))) &&
									(this.X(), (O = !0));
							}
						}
						if (
							((this.j = M), !this.g || !this.f || !this.s || this.F === void 0)
						)
							return;
						if (
							((this.m = M),
							this.m.cursorIndex > 1 &&
								this.m.value.at(this.m.cursorIndex - 1) === " ")
						) {
							this.hideSuggestWidget();
							return;
						}
						if (this.m.cursorIndex < this.ab + this.bb) {
							this.hideSuggestWidget();
							return;
						}
						if (this.R.get()) {
							this.G = this.m.cursorIndex - (this.ab + this.bb);
							let O = this.m.value.substring(
								this.ab,
								this.ab + this.bb + this.G,
							);
							this.w && (O = L(O, this.u));
							const B = new s.$$Uc(O, this.G);
							this.s.setLineContext(B);
						}
						if (!this.s.hasCompletions()) {
							this.hideSuggestWidget();
							return;
						}
						const A = this.kb();
						if (!A.width || !A.height) return;
						const R = this.r.getBoundingClientRect();
						this.s.showSuggestions(0, !1, !1, {
							left: R.left + this.f.buffer.active.cursorX * A.width,
							top: R.top + this.f.buffer.active.cursorY * A.height,
							height: A.height,
						});
					}
					$(M) {
						if (!this.f) return !1;
						const [N, ...A] = M.split(";");
						switch (N) {
							case $.Completions:
								return this.cb(this.f, M, N, A), !0;
							case $.CompletionsBash:
								return this.jb(this.f, M, N, A), !0;
							case $.CompletionsBashFirstWord:
								return this.ib(this.f, M, N, A);
						}
						return !1;
					}
					cb(M, N, A, R) {
						if ((this.O.fire(), !M.element || !this.t || !this.g)) return;
						let O = 0,
							B = this.g.cursorIndex;
						(this.m = {
							value: this.g.value,
							prefix: this.g.prefix,
							suffix: this.g.suffix,
							cursorIndex: this.g.cursorIndex,
							ghostTextIndex: this.g.ghostTextIndex,
						}),
							(this.F = this.m.prefix.substring(O, O + B + this.G));
						const U = N.slice(
								A.length + R[0].length + R[1].length + R[2].length + 4,
							),
							z = R.length === 0 || U.length === 0 ? void 0 : JSON.parse(U),
							F = T(z),
							x = this.F.length === 0 ? "" : this.F[0];
						this.F.includes(" ") || x === "["
							? ((O = parseInt(R[0])),
								(B = parseInt(R[1])),
								(this.F = this.g.prefix))
							: F.push(...this.P),
							(this.ab = O),
							(this.bb = B),
							this.y?.isDirectory &&
								F.every((G) => G.completion.isDirectory) &&
								F.push(new b.$0Uc(this.y)),
							(this.y = void 0),
							(this.G = this.m.cursorIndex - (O + B));
						let H = this.F;
						if (((this.w = F.some((G) => G.completion.isDirectory)), this.w)) {
							const G = F.find((K) => K.completion.isDirectory);
							(this.u =
								G?.completion.label.match(/(?<sep>[\\\/])/)?.groups?.sep ??
								C.sep),
								(H = L(H, this.u));
						}
						const q = new s.$$Uc(H, this.G),
							V = new s.$_Uc(F, q, O, B);
						this.lb(V);
					}
					ib(M, N, A, R) {
						const O = R[0],
							B = N.slice(A.length + O.length + 2).split(";");
						let U;
						switch (O) {
							case "alias":
								U = this.db;
								break;
							case "builtin":
								U = this.eb;
								break;
							case "command":
								U = this.fb;
								break;
							case "keyword":
								U = this.gb;
								break;
							default:
								return !1;
						}
						U.clear();
						const z = new Set();
						for (const F of B) z.add(F);
						for (const F of z)
							U.add(
								new b.$0Uc({ label: F, icon: i.$ak.symbolString, detail: O }),
							);
						return (this.hb = void 0), !0;
					}
					jb(M, N, A, R) {
						if (!M.element) return;
						let O = parseInt(R[0]);
						const B = parseInt(R[1]);
						if (!R[2]) {
							this.L.fire();
							return;
						}
						const U = N.slice(
							A.length + R[0].length + R[1].length + R[2].length + 4,
						).split(";");
						let z;
						if (
							(O !== 100 && U.length > 0
								? (z = U.map(
										(x) => new b.$0Uc({ label: x, icon: i.$ak.symbolProperty }),
									))
								: ((O = 0),
									this.hb ||
										((this.hb = [
											...this.db,
											...this.eb,
											...this.fb,
											...this.gb,
										]),
										this.hb.sort((x, H) => {
											const q = x.completion.label.charCodeAt(0),
												V = H.completion.label.charCodeAt(0),
												G = q < 65 || (q > 90 && q < 97) || q > 122 ? 1 : 0,
												K = V < 65 || (V > 90 && V < 97) || V > 122 ? 1 : 0;
											return G !== K
												? G - K
												: x.completion.label.localeCompare(H.completion.label);
										})),
									(z = this.hb)),
							z.length === 0)
						)
							return;
						this.F = z[0].completion.label.slice(0, B);
						const F = new s.$_Uc(z, new s.$$Uc(this.F, O), O, B);
						if (
							z.length === 1 &&
							z[0].completion.label.substring(B).length === 0
						) {
							this.L.fire();
							return;
						}
						this.lb(F);
					}
					kb() {
						const M = this.f._core._renderService.dimensions.css.cell;
						return { width: M.width, height: M.height };
					}
					lb(M) {
						if (!this.f?.element) return;
						const N = this.mb(this.f);
						if ((N.setCompletionModel(M), M.items.length === 0 || !this.g))
							return;
						this.n = M;
						const A = this.kb();
						if (!A.width || !A.height) return;
						const R = this.r.getBoundingClientRect();
						N.showSuggestions(0, !1, !1, {
							left: R.left + this.f.buffer.active.cursorX * A.width,
							top: R.top + this.f.buffer.active.cursorY * A.height,
							height: A.height,
						});
					}
					mb(M) {
						if ((this.R.set(!0), !this.s)) {
							const N = this.W.config,
								A = this.W.getFont(t.$Ogb()),
								R = {
									fontFamily: A.fontFamily,
									fontSize: A.fontSize,
									lineHeight: Math.ceil(1.5 * A.fontSize),
									fontWeight: N.fontWeight.toString(),
									letterSpacing: A.letterSpacing,
								};
							(this.s = this.D(
								this.U.createInstance(
									l.$cVc,
									this.q,
									this.U.createInstance(I),
									() => R,
									{},
								),
							)),
								this.s.list.style(
									(0, n.$Eyb)({
										listInactiveFocusBackground: m.$FDb,
										listInactiveFocusOutline: g.$PP,
									}),
								),
								this.D(
									this.s.onDidSelect(async (O) =>
										this.acceptSelectedSuggestion(O),
									),
								),
								this.D(this.s.onDidHide(() => this.R.set(!1))),
								this.D(this.s.onDidShow(() => this.R.set(!0)));
						}
						return this.s;
					}
					selectPreviousSuggestion() {
						this.s?.selectPrevious();
					}
					selectPreviousPageSuggestion() {
						this.s?.selectPreviousPage();
					}
					selectNextSuggestion() {
						this.s?.selectNext();
					}
					selectNextPageSuggestion() {
						this.s?.selectNextPage();
					}
					acceptSelectedSuggestion(M, N) {
						M || (M = this.s?.getFocusedItem());
						const A = this.j;
						if (!M || !A || !this.F || !this.n) return;
						(this.I = Date.now()), this.s?.hide();
						const R = this.m ?? A,
							O = R.value.substring(this.n.replacementIndex, R.cursorIndex);
						let B = "";
						if (
							(R.ghostTextIndex === -1 || R.ghostTextIndex > R.cursorIndex) &&
							R.value.length > R.cursorIndex + 1 &&
							R.value.at(R.cursorIndex) !== " "
						) {
							const G = R.value
								.substring(
									R.cursorIndex,
									R.ghostTextIndex === -1 ? void 0 : R.ghostTextIndex,
								)
								.indexOf(" ");
							B = R.value.substring(
								R.cursorIndex,
								G === -1 ? void 0 : R.cursorIndex + G,
							);
						}
						const U = M.item.completion,
							z = U.label;
						let F = !1;
						if (N)
							switch (this.S.getValue(f.$fIb).runOnEnter) {
								case "always": {
									F = !0;
									break;
								}
								case "exactMatch": {
									F = O.toLowerCase() === z.toLowerCase();
									break;
								}
								case "exactMatchIgnoreExtension": {
									(F = O.toLowerCase() === z.toLowerCase()),
										U.isFile &&
											(F ||=
												O.toLowerCase() ===
												z.toLowerCase().replace(/\.[^\.]+$/, ""));
									break;
								}
							}
						U.icon === i.$ak.folder && (this.I = 0), (this.y = U);
						const x = (0, d.$Of)(O, U.label),
							H = O.substring(O.length - 1 - x, O.length - 1),
							q = U.label.substring(x);
						let V;
						R.suffix.length > 0 &&
						R.prefix.endsWith(H) &&
						R.suffix.startsWith(q)
							? (V = "\x1BOC".repeat(U.label.length - x))
							: (V = [
									"\x7F".repeat(O.length - x),
									"\x1B[3~".repeat(B.length),
									q,
									F ? "\r" : "",
								].join("")),
							this.M.fire(V),
							this.hideSuggestWidget();
					}
					hideSuggestWidget() {
						(this.m = void 0), (this.F = void 0), this.s?.hide();
					}
				};
				(e.$SWc = S),
					(e.$SWc = S = y = Ne([j(3, r.$gj), j(4, u.$Li), j(5, p.$jIb)], S));
				let I = class {
					constructor(M) {
						(this.f = M), (this.d = o.TerminalStorageKeys.TerminalSuggestSize);
					}
					restore() {
						const M = this.f.get(this.d, a.StorageScope.PROFILE) ?? "";
						try {
							const N = JSON.parse(M);
							if (t.$pgb.is(N)) return t.$pgb.lift(N);
						} catch {}
					}
					store(M) {
						this.f.store(
							this.d,
							JSON.stringify(M),
							a.StorageScope.PROFILE,
							a.StorageTarget.MACHINE,
						);
					}
					reset() {
						this.f.remove(this.d, a.StorageScope.PROFILE);
					}
				};
				I = Ne([j(0, a.$lq)], I);
				function T(D) {
					if (!D) return [];
					let M;
					if (!Array.isArray(D)) M = [D];
					else {
						if (D.length === 0) return [];
						typeof D[0] == "string"
							? (M = [D].map((N) => ({
									CompletionText: N[0],
									ResultType: N[1],
									ToolTip: N[2],
									CustomIcon: N[3],
								})))
							: Array.isArray(D[0])
								? (M = D.map((N) => ({
										CompletionText: N[0],
										ResultType: N[1],
										ToolTip: N[2],
										CustomIcon: N[3],
									})))
								: (M = D);
					}
					return M.map((N) => P(N));
				}
				function P(D) {
					let M = D.CompletionText;
					if (
						D.ResultType === 4 &&
						!M.match(/^[\-+]$/) &&
						!M.match(/^\.\.?$/) &&
						!M.match(/[\\\/]$/)
					) {
						const O = M.match(/(?<sep>[\\\/])/)?.groups?.sep ?? C.sep;
						M = M + O;
					}
					const N = D.ToolTip ?? M,
						A = k(D.ResultType, D.CustomIcon);
					return (
						D.ResultType === 2 &&
							D.CompletionText.match(/\.[a-z0-9]{2,4}$/i) &&
							(D.ResultType = 3),
						new b.$0Uc({
							label: M,
							icon: A,
							detail: N,
							isFile: D.ResultType === 3,
							isDirectory: D.ResultType === 4,
							isKeyword: D.ResultType === 12,
						})
					);
				}
				function k(D, M) {
					if (M) {
						const N = M in i.$ak ? i.$ak[M] : i.$ak.symbolText;
						if (N) return N;
					}
					return v[D] ?? i.$ak.symbolText;
				}
				function L(D, M) {
					return M === "/" ? D.replaceAll("\\", "/") : D.replaceAll("/", "\\");
				}
			},
		),
		define(
			de[3656],
			he([1, 0, 21, 1640, 32, 269]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ndd = C);
				function C(d, m, r, u, a, h, c, n, g, p, o, f) {
					const b = (0, i.$Op)(m, r, o.arch, u, a, h, c, n, g, p),
						s = d.get(w.$pm, t.StorageScope.APPLICATION),
						l = d.get(w.$qm, t.StorageScope.APPLICATION);
					return (
						(b["common.version.shell"] = o.versions?.electron),
						(b["common.version.renderer"] = o.versions?.chrome),
						(b["common.firstSessionDate"] = s),
						(b["common.lastSessionDate"] = l || ""),
						(b["common.isNewSession"] = l ? "0" : "1"),
						(b["common.remoteAuthority"] = (0, E.$3p)(f)),
						(b["common.cli"] = !!o.env.VSCODE_CLI),
						b
					);
				}
			},
		),
		define(
			de[3657],
			he([1, 0, 32, 269, 10, 3, 151, 62, 230, 2815, 21, 3656, 2819, 20, 320]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Odd = void 0);
				let g = class extends E.$1c {
					get sessionId() {
						return this.a.sessionId;
					}
					get machineId() {
						return this.a.machineId;
					}
					get macMachineId() {
						return this.a.macMachineId;
					}
					get sqmId() {
						return this.a.sqmId;
					}
					get devDeviceId() {
						return this.a.devDeviceId;
					}
					get firstSessionDate() {
						return this.a.firstSessionDate;
					}
					get msftInternal() {
						return this.a.msftInternal;
					}
					constructor(o, f, b, s, l) {
						if ((super(), (0, i.$Xp)(f, o))) {
							const y = (0, i.$4p)(f, l),
								$ = b.getChannel("telemetryAppender"),
								v = {
									appenders: [new r.$17c($)],
									commonProperties: (0, a.$Ndd)(
										s,
										o.os.release,
										o.os.hostname,
										f.commit,
										f.version,
										o.machineId,
										o.macMachineId,
										o.sqmId,
										o.devDeviceId,
										y,
										n.$S,
										o.remoteAuthority,
									),
									piiPaths: (0, i.$5p)(o),
									sendErrorTelemetry: !0,
								};
							this.a = this.D(new h.$NJ(v, l, f));
						} else this.a = i.$Sp;
						this.sendErrorTelemetry = this.a.sendErrorTelemetry;
					}
					setExperimentProperty(o, f) {
						return this.a.setExperimentProperty(o, f);
					}
					get telemetryLevel() {
						return this.a.telemetryLevel;
					}
					registerAuthId(o) {
						this.a.registerAuthId(o);
					}
					publicLog(o, f) {
						this.a.publicLog(o, f);
					}
					publicLog2(o, f) {
						this.publicLog(o, f);
					}
					publicLogError(o, f) {
						this.a.publicLogError(o, f);
					}
					publicLogError2(o, f) {
						this.publicLogError(o, f);
					}
					publicLogCapture(o, f) {
						this.a.publicLogCapture(o, f);
					}
				};
				(e.$Odd = g),
					(e.$Odd = g =
						Ne(
							[
								j(0, C.$ucd),
								j(1, d.$Bk),
								j(2, m.$Vbd),
								j(3, u.$lq),
								j(4, w.$gj),
							],
							g,
						)),
					(0, c.$lK)(t.$km, g, c.InstantiationType.Delayed);
			},
		),
		define(
			de[1875],
			he([1, 0, 20, 5, 6, 117, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$csb = void 0),
					(e.$csb = (0, i.$Mi)("embedderTerminalService"));
				class d {
					constructor() {
						(this.a = new w.$re()),
							(this.onDidCreateTerminal = w.Event.buffer(this.a.event));
					}
					createTerminal(u) {
						const a = {
							name: u.name,
							isFeatureTerminal: !0,
							customPtyImplementation(h, c, n) {
								return new m(h, u.pty);
							},
						};
						this.a.fire(a);
					}
				}
				class m extends C.$1c {
					constructor(u, a) {
						super(),
							(this.id = u),
							(this.shouldPersist = !1),
							(this.b = this.D(new w.$re())),
							(this.onProcessReady = this.b.event),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeProperty = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onProcessExit = this.f.event),
							(this.a = a),
							(this.onProcessData = this.a.onDidWrite),
							this.a.onDidClose &&
								this.D(this.a.onDidClose((h) => this.f.fire(h || void 0))),
							this.a.onDidChangeName &&
								this.D(
									this.a.onDidChangeName((h) =>
										this.c.fire({
											type: E.ProcessPropertyType.Title,
											value: h,
										}),
									),
								);
					}
					async start() {
						this.b.fire({ pid: -1, cwd: "", windowsPty: void 0 }),
							this.a.open();
					}
					shutdown() {
						this.a.close();
					}
					input() {}
					async processBinary() {}
					resize() {}
					clearBuffer() {}
					acknowledgeDataEvent() {}
					async setUnicodeVersion() {}
					async getInitialCwd() {
						return "";
					}
					async getCwd() {
						return "";
					}
					refreshProperty(u) {
						throw new Error(
							`refreshProperty is not suppported in EmbedderTerminalProcess. property: ${u}`,
						);
					}
					updateProperty(u, a) {
						throw new Error(
							`updateProperty is not suppported in EmbedderTerminalProcess. property: ${u}, value: ${a}`,
						);
					}
				}
				(0, t.$lK)(e.$csb, d, t.InstantiationType.Delayed);
			},
		),
		define(
			de[3658],
			he([1, 0, 3, 23, 73, 117, 107, 690, 469, 231, 78, 52, 1875]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tVc = void 0);
				let c = class extends t.$1c {
					static {
						this.ID = "terminalMain";
					}
					constructor(g, p, o, f, b, s, l, y, $) {
						super(), this.a(g, p, o, f, b, s, l, y, $);
					}
					async a(g, p, o, f, b, s, l, y, $) {
						this.D(
							p.onDidCreateTerminal(async (v) => {
								const S = await s.createTerminal({
									config: v,
									location: E.TerminalLocation.Panel,
									skipContributedProfileCheck: !0,
								});
								s.setActiveInstance(S), await s.revealActiveTerminal();
							}),
						),
							await b.when(a.LifecyclePhase.Restored),
							this.D(
								g.registerEditor(
									`${i.Schemas.vscodeTerminal}:/**`,
									{
										id: C.$pIb,
										label: m.$hUc.terminal,
										priority: r.RegisteredEditorPriority.exclusive,
									},
									{
										canSupportResource: (v) =>
											v.scheme === i.Schemas.vscodeTerminal,
										singlePerResource: !0,
									},
									{
										createEditorInput: async ({ resource: v, options: S }) => {
											let I = s.getInstanceFromResource(v);
											if (I) y.getGroupForInstance(I)?.removeInstance(I);
											else {
												const k = (0, d.$TUc)(v);
												if (!k.instanceId)
													throw new Error(
														"Terminal identifier without instanceId",
													);
												const L = s.getPrimaryBackend();
												if (!L) throw new Error("No terminal primary backend");
												const D = await L.requestDetachInstance(
													k.workspaceId,
													k.instanceId,
												);
												if (!D)
													throw new Error(
														"No terminal persistent process to attach",
													);
												I = $.createInstance(
													{ attachPersistentProcess: D },
													E.TerminalLocation.Editor,
												);
											}
											const T = l.resolveResource(I);
											return {
												editor: l.getInputFromResource(T),
												options: {
													...S,
													pinned: !0,
													forceReload: !0,
													override: C.$pIb,
												},
											};
										},
									},
								),
							),
							this.D(
								f.registerFormatter({
									scheme: i.Schemas.vscodeTerminal,
									formatting: { label: "${path}", separator: "" },
								}),
							);
					}
				};
				(e.$tVc = c),
					(e.$tVc = c =
						Ne(
							[
								j(0, r.$E6),
								j(1, h.$csb),
								j(2, u.$r8),
								j(3, w.$3N),
								j(4, a.$n6),
								j(5, C.$iIb),
								j(6, C.$kIb),
								j(7, C.$lIb),
								j(8, C.$mIb),
							],
							c,
						));
			},
		),
		