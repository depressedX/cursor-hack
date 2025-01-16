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
		