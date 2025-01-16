define(de[1586], he([1, 0, 277, 3, 77, 319]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fyb = e.$eyb = void 0);
			class C {
				resetSash() {
					this.a.set(void 0, void 0);
				}
				constructor(r, u) {
					(this.b = r),
						(this.dimensions = u),
						(this.sashLeft = (0, E.$Ud)(
							this,
							(a) => {
								const h =
									this.a.read(a) ?? this.b.splitViewDefaultRatio.read(a);
								return this.c(h, a);
							},
							(a, h) => {
								const c = this.dimensions.width.get();
								this.a.set(a / c, h);
							},
						)),
						(this.a = (0, w.observableValue)(this, void 0));
				}
				c(r, u) {
					const a = this.dimensions.width.read(u),
						h = Math.floor(this.b.splitViewDefaultRatio.read(u) * a),
						c = this.b.enableSplitViewResizing.read(u) ? Math.floor(r * a) : h,
						n = 100;
					return a <= n * 2 ? h : c < n ? n : c > a - n ? a - n : c;
				}
			}
			e.$eyb = C;
			class d extends i.$1c {
				constructor(r, u, a, h, c, n) {
					super(),
						(this.c = r),
						(this.f = u),
						(this.g = a),
						(this.h = h),
						(this.sashLeft = c),
						(this.j = n),
						(this.a = this.D(
							new t.Sash(
								this.c,
								{
									getVerticalSashTop: (g) => 0,
									getVerticalSashLeft: (g) => this.sashLeft.get(),
									getVerticalSashHeight: (g) => this.f.height.get(),
								},
								{ orientation: t.Orientation.VERTICAL },
							),
						)),
						(this.b = void 0),
						this.D(
							this.a.onDidStart(() => {
								this.b = this.sashLeft.get();
							}),
						),
						this.D(
							this.a.onDidChange((g) => {
								this.sashLeft.set(this.b + (g.currentX - g.startX), void 0);
							}),
						),
						this.D(this.a.onDidEnd(() => this.a.layout())),
						this.D(this.a.onDidReset(() => this.j())),
						this.D(
							(0, w.autorun)((g) => {
								const p = this.h.read(g);
								p && (this.a.orthogonalEndSash = p.bottom);
							}),
						),
						this.D(
							(0, w.autorun)((g) => {
								const p = this.g.read(g);
								(this.a.state = p ? t.SashState.Enabled : t.SashState.Disabled),
									this.sashLeft.read(g),
									this.f.height.read(g),
									this.a.layout();
							}),
						);
				}
			}
			e.$fyb = d;
		}),
		define(
			de[370],
			he([1, 0, 214, 33, 3, 77, 1585, 48, 17, 458]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lwb = e.$Iwb = e.$Fwb = e.$Ewb = e.$Dwb = e.$Awb = void 0),
					(e.$wwb = u),
					(e.$xwb = a),
					(e.$ywb = h),
					(e.$zwb = c),
					(e.$Bwb = g),
					(e.$Cwb = o),
					(e.$Gwb = l),
					(e.$Hwb = y),
					(e.$Jwb = v),
					(e.$Kwb = I);
				function u(L, D, M, N) {
					if (L.length === 0) return D;
					if (D.length === 0) return L;
					const A = [];
					let R = 0,
						O = 0;
					for (; R < L.length && O < D.length; ) {
						const B = L[R],
							U = D[O],
							z = M(B),
							F = M(U);
						z < F
							? (A.push(B), R++)
							: z > F
								? (A.push(U), O++)
								: (A.push(N(B, U)), R++, O++);
					}
					for (; R < L.length; ) A.push(L[R]), R++;
					for (; O < D.length; ) A.push(D[O]), O++;
					return A;
				}
				function a(L, D) {
					const M = new w.$Zc(),
						N = L.createDecorationsCollection();
					return (
						M.add(
							(0, E.autorunOpts)(
								{ debugName: () => `Apply decorations from ${D.debugName}` },
								(A) => {
									const R = D.read(A);
									N.set(R);
								},
							),
						),
						M.add({
							dispose: () => {
								N.clear();
							},
						}),
						M
					);
				}
				function h(L, D) {
					return (
						L.appendChild(D),
						(0, w.$Yc)(() => {
							D.remove();
						})
					);
				}
				function c(L, D) {
					return (
						L.prepend(D),
						(0, w.$Yc)(() => {
							D.remove();
						})
					);
				}
				class n extends w.$1c {
					get width() {
						return this.g;
					}
					get height() {
						return this.h;
					}
					get automaticLayout() {
						return this.n;
					}
					constructor(D, M) {
						super(),
							(this.n = !1),
							(this.f = this.D(new C.$isb(D, M))),
							(this.g = (0, E.observableValue)(this, this.f.getWidth())),
							(this.h = (0, E.observableValue)(this, this.f.getHeight())),
							this.D(
								this.f.onDidChange((N) =>
									(0, E.transaction)((A) => {
										this.g.set(this.f.getWidth(), A),
											this.h.set(this.f.getHeight(), A);
									}),
								),
							);
					}
					observe(D) {
						this.f.observe(D);
					}
					setAutomaticLayout(D) {
						(this.n = D), D ? this.f.startObserving() : this.f.stopObserving();
					}
				}
				e.$Awb = n;
				function g(L, D, M) {
					let N = D.get(),
						A = N,
						R = N;
					const O = (0, E.observableValue)("animatedValue", N);
					let B = -1;
					const U = 300;
					let z;
					M.add(
						(0, E.autorunHandleChanges)(
							{
								createEmptyChangeSummary: () => ({ animate: !1 }),
								handleChange: (x, H) => (
									x.didChange(D) && (H.animate = H.animate || x.change), !0
								),
							},
							(x, H) => {
								z !== void 0 && (L.cancelAnimationFrame(z), (z = void 0)),
									(A = R),
									(N = D.read(x)),
									(B = Date.now() - (H.animate ? 0 : U)),
									F();
							},
						),
					);
					function F() {
						const x = Date.now() - B;
						(R = Math.floor(p(x, A, N - A, U))),
							x < U ? (z = L.requestAnimationFrame(F)) : (R = N),
							O.set(R, void 0);
					}
					return O;
				}
				function p(L, D, M, N) {
					return L === N ? D + M : M * (-Math.pow(2, (-10 * L) / N) + 1) + D;
				}
				function o(L, D) {
					const M = {};
					for (const N in L) M[N] = L[N];
					for (const N in D) {
						const A = D[N];
						typeof M[N] == "object" && A && typeof A == "object"
							? (M[N] = o(M[N], A))
							: (M[N] = A);
					}
					return M;
				}
				class f extends w.$1c {
					constructor(D, M, N) {
						super(),
							this.D(new s(D, N)),
							this.D(l(N, { height: M.actualHeight, top: M.actualTop }));
					}
				}
				e.$Dwb = f;
				class b {
					get afterLineNumber() {
						return this.h.get();
					}
					constructor(D, M) {
						(this.h = D),
							(this.heightInPx = M),
							(this.domNode = document.createElement("div")),
							(this.f = (0, E.observableValue)(this, void 0)),
							(this.g = (0, E.observableValue)(this, void 0)),
							(this.actualTop = this.f),
							(this.actualHeight = this.g),
							(this.showInHiddenAreas = !0),
							(this.onChange = this.h),
							(this.onDomNodeTop = (N) => {
								this.f.set(N, void 0);
							}),
							(this.onComputedHeight = (N) => {
								this.g.set(N, void 0);
							});
					}
				}
				e.$Ewb = b;
				class s {
					static {
						this.f = 0;
					}
					constructor(D, M) {
						(this.k = D),
							(this.n = M),
							(this.g = `managedOverlayWidget-${s.f++}`),
							(this.h = {
								getId: () => this.g,
								getDomNode: () => this.n,
								getPosition: () => null,
							}),
							this.k.addOverlayWidget(this.h);
					}
					dispose() {
						this.k.removeOverlayWidget(this.h);
					}
				}
				e.$Fwb = s;
				function l(L, D) {
					return (0, E.autorun)((M) => {
						for (let [N, A] of Object.entries(D))
							A && typeof A == "object" && "read" in A && (A = A.read(M)),
								typeof A == "number" && (A = `${A}px`),
								(N = N.replace(/[A-Z]/g, (R) => "-" + R.toLowerCase())),
								(L.style[N] = A);
					});
				}
				function y(L, D, M, N) {
					const A = new w.$Zc(),
						R = [];
					return (
						A.add(
							(0, E.autorunWithStore)((O, B) => {
								const U = D.read(O),
									z = new Map(),
									F = new Map();
								M && M(!0),
									L.changeViewZones((x) => {
										for (const H of R) x.removeZone(H), N?.delete(H);
										R.length = 0;
										for (const H of U) {
											const q = x.addZone(H);
											H.setZoneId && H.setZoneId(q),
												R.push(q),
												N?.add(q),
												z.set(H, q);
										}
									}),
									M && M(!1),
									B.add(
										(0, E.autorunHandleChanges)(
											{
												createEmptyChangeSummary() {
													return { zoneIds: [] };
												},
												handleChange(x, H) {
													const q = F.get(x.changedObservable);
													return q !== void 0 && H.zoneIds.push(q), !0;
												},
											},
											(x, H) => {
												for (const q of U)
													q.onChange &&
														(F.set(q.onChange, z.get(q)), q.onChange.read(x));
												M && M(!0),
													L.changeViewZones((q) => {
														for (const V of H.zoneIds) q.layoutZone(V);
													}),
													M && M(!1);
											},
										),
									);
							}),
						),
						A.add({
							dispose() {
								M && M(!0),
									L.changeViewZones((O) => {
										for (const B of R) O.removeZone(B);
									}),
									N?.clear(),
									M && M(!1);
							},
						}),
						A
					);
				}
				class $ extends i.$Ce {
					dispose() {
						super.dispose(!0);
					}
				}
				e.$Iwb = $;
				function v(L, D) {
					const M = (0, t.$jb)(
						D,
						(A) => A.original.startLineNumber <= L.lineNumber,
					);
					if (!M) return m.$iL.fromPositions(L);
					if (M.original.endLineNumberExclusive <= L.lineNumber) {
						const A =
							L.lineNumber -
							M.original.endLineNumberExclusive +
							M.modified.endLineNumberExclusive;
						return m.$iL.fromPositions(new d.$hL(A, L.column));
					}
					if (!M.innerChanges)
						return m.$iL.fromPositions(
							new d.$hL(M.modified.startLineNumber, 1),
						);
					const N = (0, t.$jb)(M.innerChanges, (A) =>
						A.originalRange.getStartPosition().isBeforeOrEqual(L),
					);
					if (!N) {
						const A =
							L.lineNumber -
							M.original.startLineNumber +
							M.modified.startLineNumber;
						return m.$iL.fromPositions(new d.$hL(A, L.column));
					}
					if (N.originalRange.containsPosition(L)) return N.modifiedRange;
					{
						const A = S(N.originalRange.getEndPosition(), L);
						return m.$iL.fromPositions(
							A.addToPosition(N.modifiedRange.getEndPosition()),
						);
					}
				}
				function S(L, D) {
					return L.lineNumber === D.lineNumber
						? new r.$tL(0, D.column - L.column)
						: new r.$tL(D.lineNumber - L.lineNumber, D.column - 1);
				}
				function I(L, D) {
					let M;
					return L.filter((N) => {
						const A = D(N, M);
						return (M = N), A;
					});
				}
				class T {
					static create(D, M = void 0) {
						return new P(D, D, M);
					}
					static createWithDisposable(D, M, N = void 0) {
						const A = new w.$Zc();
						return A.add(M), A.add(D), new P(D, A, N);
					}
					static createOfNonDisposable(D, M, N = void 0) {
						return new P(D, M, N);
					}
				}
				e.$Lwb = T;
				class P extends T {
					constructor(D, M, N) {
						super(),
							(this.object = D),
							(this.k = M),
							(this.n = N),
							(this.f = 1),
							(this.g = !1),
							(this.h = []),
							N && this.o(N);
					}
					o(D) {
						D && this.h.push(D);
					}
					createNewRef(D) {
						return this.f++, D && this.o(D), new k(this, D);
					}
					dispose() {
						this.g || ((this.g = !0), this._decreaseRefCount(this.n));
					}
					_decreaseRefCount(D) {
						if ((this.f--, this.f === 0 && this.k.dispose(), D)) {
							const M = this.h.indexOf(D);
							M !== -1 && this.h.splice(M, 1);
						}
					}
				}
				class k extends T {
					constructor(D, M) {
						super(), (this.g = D), (this.h = M), (this.f = !1);
					}
					get object() {
						return this.g.object;
					}
					createNewRef(D) {
						return this.g.createNewRef(D);
					}
					dispose() {
						this.f || ((this.f = !0), this.g._decreaseRefCount(this.h));
					}
				}
			},
		),
		define(
			de[1587],
			he([1, 0, 7, 105, 50, 24, 214, 14, 3, 77, 26, 370, 289, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cyb = void 0);
				class n extends m.$1c {
					static {
						this.movedCodeBlockPadding = 4;
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.t = y),
							(this.c = (0, r.observableFromEvent)(
								this,
								this.t.original.onDidScrollChange,
								() => this.t.original.getScrollTop(),
							)),
							(this.f = (0, r.observableFromEvent)(
								this,
								this.t.modified.onDidScrollChange,
								() => this.t.modified.getScrollTop(),
							)),
							(this.j = (0, r.observableSignalFromEvent)(
								"onDidChangeViewZones",
								this.t.modified.onDidChangeViewZones,
							)),
							(this.width = (0, r.observableValue)(this, 0)),
							(this.u = (0, r.observableSignalFromEvent)(
								"modified.onDidChangeViewZones",
								this.t.modified.onDidChangeViewZones,
							)),
							(this.w = (0, r.observableSignalFromEvent)(
								"original.onDidChangeViewZones",
								this.t.original.onDidChangeViewZones,
							)),
							(this.y = (0, r.derivedWithStore)(this, (T, P) => {
								this.a.replaceChildren();
								const k = this.q.read(T),
									L = k?.diff.read(T)?.movedTexts;
								if (!L || L.length === 0) {
									this.width.set(0, void 0);
									return;
								}
								this.j.read(T);
								const D = this.r.read(T),
									M = this.s.read(T);
								if (!D || !M) {
									this.width.set(0, void 0);
									return;
								}
								this.u.read(T), this.w.read(T);
								const N = L.map((F) => {
									function x(Y, ie) {
										const ne = ie.getTopForLineNumber(Y.startLineNumber, !0),
											ee = ie.getTopForLineNumber(Y.endLineNumberExclusive, !0);
										return (ne + ee) / 2;
									}
									const H = x(F.lineRangeMapping.original, this.t.original),
										q = this.c.read(T),
										V = x(F.lineRangeMapping.modified, this.t.modified),
										G = this.f.read(T),
										K = H - q,
										J = V - G,
										W = Math.min(H, V),
										X = Math.max(H, V);
									return {
										range: new h.$pL(W, X),
										from: K,
										to: J,
										fromWithoutScroll: H,
										toWithoutScroll: V,
										move: F,
									};
								});
								N.sort(
									(0, E.$$b)(
										(0, E.$0b)(
											(F) => F.fromWithoutScroll > F.toWithoutScroll,
											E.$ac,
										),
										(0, E.$0b)(
											(F) =>
												F.fromWithoutScroll > F.toWithoutScroll
													? F.fromWithoutScroll
													: -F.toWithoutScroll,
											E.$_b,
										),
									),
								);
								const A = g.compute(N.map((F) => F.range)),
									R = 10,
									O = D.verticalScrollbarWidth,
									B = (A.getTrackCount() - 1) * 10 + R * 2,
									U = O + B + (M.contentLeft - n.movedCodeBlockPadding);
								let z = 0;
								for (const F of N) {
									const x = A.getTrack(z),
										H = O + R + x * 10,
										q = 15,
										V = 15,
										G = U,
										K = M.glyphMarginWidth + M.lineNumbersWidth,
										J = 18,
										W = document.createElementNS(
											"http://www.w3.org/2000/svg",
											"rect",
										);
									W.classList.add("arrow-rectangle"),
										W.setAttribute("x", `${G - K}`),
										W.setAttribute("y", `${F.to - J / 2}`),
										W.setAttribute("width", `${K}`),
										W.setAttribute("height", `${J}`),
										this.a.appendChild(W);
									const X = document.createElementNS(
											"http://www.w3.org/2000/svg",
											"g",
										),
										Y = document.createElementNS(
											"http://www.w3.org/2000/svg",
											"path",
										);
									Y.setAttribute(
										"d",
										`M 0 ${F.from} L ${H} ${F.from} L ${H} ${F.to} L ${G - V} ${F.to}`,
									),
										Y.setAttribute("fill", "none"),
										X.appendChild(Y);
									const ie = document.createElementNS(
										"http://www.w3.org/2000/svg",
										"polygon",
									);
									ie.classList.add("arrow"),
										P.add(
											(0, r.autorun)((ne) => {
												Y.classList.toggle(
													"currentMove",
													F.move === k.activeMovedText.read(ne),
												),
													ie.classList.toggle(
														"currentMove",
														F.move === k.activeMovedText.read(ne),
													);
											}),
										),
										ie.setAttribute(
											"points",
											`${G - V},${F.to - q / 2} ${G},${F.to} ${G - V},${F.to + q / 2}`,
										),
										X.appendChild(ie),
										this.a.appendChild(X),
										z++;
								}
								this.width.set(B, void 0);
							})),
							(this.a = document.createElementNS(
								"http://www.w3.org/2000/svg",
								"svg",
							)),
							this.a.setAttribute("class", "moved-blocks-lines"),
							this.n.appendChild(this.a),
							this.D((0, m.$Yc)(() => this.a.remove())),
							this.D(
								(0, r.autorun)((T) => {
									const P = this.r.read(T),
										k = this.s.read(T);
									!P ||
										!k ||
										((this.a.style.left = `${P.width - P.verticalScrollbarWidth}px`),
										(this.a.style.height = `${P.height}px`),
										(this.a.style.width = `${P.verticalScrollbarWidth + P.contentLeft - n.movedCodeBlockPadding + this.width.read(T)}px`));
								}),
							),
							this.D((0, r.recomputeInitiallyAndOnChange)(this.y));
						const $ = (0, r.derived)((T) => {
							const k = this.q.read(T)?.diff.read(T);
							return k
								? k.movedTexts.map((L) => ({
										move: L,
										original: new a.$Ewb(
											(0, r.constObservable)(
												L.lineRangeMapping.original.startLineNumber - 1,
											),
											18,
										),
										modified: new a.$Ewb(
											(0, r.constObservable)(
												L.lineRangeMapping.modified.startLineNumber - 1,
											),
											18,
										),
									}))
								: [];
						});
						this.D(
							(0, a.$Hwb)(
								this.t.original,
								$.map((T) => T.map((P) => P.original)),
							),
						),
							this.D(
								(0, a.$Hwb)(
									this.t.modified,
									$.map((T) => T.map((P) => P.modified)),
								),
							),
							this.D(
								(0, r.autorunWithStore)((T, P) => {
									const k = $.read(T);
									for (const L of k)
										P.add(
											new p(
												this.t.original,
												L.original,
												L.move,
												"original",
												this.q.get(),
											),
										),
											P.add(
												new p(
													this.t.modified,
													L.modified,
													L.move,
													"modified",
													this.q.get(),
												),
											);
								}),
							);
						const v = (0, r.observableSignalFromEvent)(
								"original.onDidFocusEditorWidget",
								(T) =>
									this.t.original.onDidFocusEditorWidget(() =>
										setTimeout(() => T(void 0), 0),
									),
							),
							S = (0, r.observableSignalFromEvent)(
								"modified.onDidFocusEditorWidget",
								(T) =>
									this.t.modified.onDidFocusEditorWidget(() =>
										setTimeout(() => T(void 0), 0),
									),
							);
						let I = "modified";
						this.D(
							(0, r.autorunHandleChanges)(
								{
									createEmptyChangeSummary: () => {},
									handleChange: (T, P) => (
										T.didChange(v) && (I = "original"),
										T.didChange(S) && (I = "modified"),
										!0
									),
								},
								(T) => {
									v.read(T), S.read(T);
									const P = this.q.read(T);
									if (!P) return;
									const k = P.diff.read(T);
									let L;
									if (k && I === "original") {
										const D = this.t.originalCursor.read(T);
										D &&
											(L = k.movedTexts.find((M) =>
												M.lineRangeMapping.original.contains(D.lineNumber),
											));
									}
									if (k && I === "modified") {
										const D = this.t.modifiedCursor.read(T);
										D &&
											(L = k.movedTexts.find((M) =>
												M.lineRangeMapping.modified.contains(D.lineNumber),
											));
									}
									L !== P.movedTextToCompare.get() &&
										P.movedTextToCompare.set(void 0, void 0),
										P.setActiveMovedText(L);
								},
							),
						);
					}
				}
				e.$cyb = n;
				class g {
					static compute(f) {
						const b = [],
							s = [];
						for (const l of f) {
							let y = b.findIndex(($) => !$.intersectsStrict(l));
							y === -1 &&
								(b.length >= 6
									? (y = (0, C.$ub)(
											b,
											(0, E.$0b)((v) => v.intersectWithRangeLength(l), E.$_b),
										))
									: ((y = b.length), b.push(new h.$qL()))),
								b[y].addRange(l),
								s.push(y);
						}
						return new g(b.length, s);
					}
					constructor(f, b) {
						(this.a = f), (this.c = b);
					}
					getTrack(f) {
						return this.c[f];
					}
					getTrackCount() {
						return this.a;
					}
				}
				class p extends a.$Dwb {
					constructor(f, b, s, l, y) {
						const $ = (0, t.h)("div.diff-hidden-lines-widget");
						super(f, b, $.root),
							(this.n = f),
							(this.q = s),
							(this.r = l),
							(this.u = y),
							(this.f = (0, t.h)(
								"div.diff-moved-code-block",
								{ style: { marginRight: "4px" } },
								[
									(0, t.h)("div.text-content@textContent"),
									(0, t.h)("div.action-bar@actionBar"),
								],
							)),
							$.root.appendChild(this.f.root);
						const v = (0, r.observableFromEvent)(this.n.onDidLayoutChange, () =>
							this.n.getLayoutInfo(),
						);
						this.D(
							(0, a.$Gwb)(this.f.root, {
								paddingRight: v.map((k) => k.verticalScrollbarWidth),
							}),
						);
						let S;
						s.changes.length > 0
							? (S =
									this.r === "original"
										? (0, c.localize)(
												237,
												null,
												this.q.lineRangeMapping.modified.startLineNumber,
												this.q.lineRangeMapping.modified
													.endLineNumberExclusive - 1,
											)
										: (0, c.localize)(
												238,
												null,
												this.q.lineRangeMapping.original.startLineNumber,
												this.q.lineRangeMapping.original
													.endLineNumberExclusive - 1,
											))
							: (S =
									this.r === "original"
										? (0, c.localize)(
												239,
												null,
												this.q.lineRangeMapping.modified.startLineNumber,
												this.q.lineRangeMapping.modified
													.endLineNumberExclusive - 1,
											)
										: (0, c.localize)(
												240,
												null,
												this.q.lineRangeMapping.original.startLineNumber,
												this.q.lineRangeMapping.original
													.endLineNumberExclusive - 1,
											));
						const I = this.D(
								new i.$eib(this.f.actionBar, { highlightToggledItems: !0 }),
							),
							T = new w.$rj("", S, "", !1);
						I.push(T, { icon: !1, label: !0 });
						const P = new w.$rj(
							"",
							"Compare",
							u.ThemeIcon.asClassName(d.$ak.compareChanges),
							!0,
							() => {
								this.n.focus(),
									this.u.movedTextToCompare.set(
										this.u.movedTextToCompare.get() === s ? void 0 : this.q,
										void 0,
									);
							},
						);
						this.D(
							(0, r.autorun)((k) => {
								const L = this.u.movedTextToCompare.read(k) === s;
								P.checked = L;
							}),
						),
							I.push(P, { icon: !1, label: !0 });
					}
				}
			},
		),
		define(
			de[2690],
			he([1, 0, 7, 3, 77, 196, 289]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gyb = void 0);
				class d extends i.$1c {
					constructor(u, a, h) {
						super(),
							(this.m = u),
							(this.n = a),
							(this.q = h),
							(this.a = (0, w.observableFromEvent)(
								this,
								this.m.onDidScrollChange,
								(g) => this.m.getScrollTop(),
							)),
							(this.b = this.a.map((g) => g === 0)),
							(this.c = (0, w.observableFromEvent)(
								this,
								this.m.onDidChangeModel,
								(g) => this.m.hasModel(),
							)),
							(this.f = (0, w.observableSignalFromEvent)(
								"onDidChangeViewZones",
								this.m.onDidChangeViewZones,
							)),
							(this.g = (0, w.observableSignalFromEvent)(
								"onDidContentSizeChange",
								this.m.onDidContentSizeChange,
							)),
							(this.j = (0, w.observableSignal)("domNodeSizeChanged")),
							(this.r = new Map()),
							(this.n.className = "gutter monaco-editor");
						const c = this.n.appendChild(
								(0, t.h)("div.scroll-decoration", {
									role: "presentation",
									ariaHidden: "true",
									style: { width: "100%" },
								}).root,
							),
							n = new ResizeObserver(() => {
								(0, w.transaction)((g) => {
									this.j.trigger(g);
								});
							});
						n.observe(this.n),
							this.D((0, i.$Yc)(() => n.disconnect())),
							this.D(
								(0, w.autorun)((g) => {
									c.className = this.b.read(g) ? "" : "scroll-decoration";
								}),
							),
							this.D((0, w.autorun)((g) => this.s(g)));
					}
					dispose() {
						super.dispose(), (0, t.$hhb)(this.n);
					}
					s(u) {
						if (!this.c.read(u)) return;
						this.j.read(u), this.f.read(u), this.g.read(u);
						const a = this.a.read(u),
							h = this.m.getVisibleRanges(),
							c = new Set(this.r.keys()),
							n = C.$pL.ofStartAndLength(0, this.n.clientHeight);
						if (!n.isEmpty)
							for (const g of h) {
								const p = new E.$rL(g.startLineNumber, g.endLineNumber + 1),
									o = this.q.getIntersectingGutterItems(p, u);
								(0, w.transaction)((f) => {
									for (const b of o) {
										if (!b.range.intersect(p)) continue;
										c.delete(b.id);
										let s = this.r.get(b.id);
										if (s) s.item.set(b, f);
										else {
											const v = document.createElement("div");
											this.n.appendChild(v);
											const S = (0, w.observableValue)("item", b),
												I = this.q.createView(S, v);
											(s = new m(S, I, v)), this.r.set(b.id, s);
										}
										const l =
												b.range.startLineNumber <=
												this.m.getModel().getLineCount()
													? this.m.getTopForLineNumber(
															b.range.startLineNumber,
															!0,
														) - a
													: this.m.getBottomForLineNumber(
															b.range.startLineNumber - 1,
															!1,
														) - a,
											$ =
												(b.range.endLineNumberExclusive === 1
													? Math.max(
															l,
															this.m.getTopForLineNumber(
																b.range.startLineNumber,
																!1,
															) - a,
														)
													: Math.max(
															l,
															this.m.getBottomForLineNumber(
																b.range.endLineNumberExclusive - 1,
																!0,
															) - a,
														)) - l;
										(s.domNode.style.top = `${l}px`),
											(s.domNode.style.height = `${$}px`),
											s.gutterItemView.layout(C.$pL.ofStartAndLength(l, $), n);
									}
								});
							}
						for (const g of c) {
							const p = this.r.get(g);
							p.gutterItemView.dispose(), p.domNode.remove(), this.r.delete(g);
						}
					}
				}
				e.$gyb = d;
				class m {
					constructor(u, a, h) {
						(this.item = u), (this.gutterItemView = a), (this.domNode = h);
					}
				}
			},
		),
		