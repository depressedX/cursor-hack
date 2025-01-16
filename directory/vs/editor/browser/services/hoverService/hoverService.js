define(
			de[2843],
			he([
				1, 0, 20, 35, 51, 72, 49, 5, 2770, 3, 7, 39, 114, 390, 10, 91, 180, 75,
				1617, 2689, 15,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oyc = void 0);
				let l = class extends r.$1c {
					constructor(I, T, P, k, L, D) {
						super(),
							(this.h = I),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.w = new Map()),
							T.onDidShowContextMenu(() => this.hideHover()),
							(this.a = this.D(new f.$lyc(this.n)));
					}
					showHover(I, T, P) {
						if (y(this.b) === y(I) || (this.c && this.b?.persistence?.sticky))
							return;
						(this.b = I), (this.f = I);
						const k = I.trapFocus || this.q.isScreenReaderOptimized(),
							L = (0, u.$Jgb)();
						P ||
							(k && L
								? L.classList.contains("monaco-hover") || (this.g = L)
								: (this.g = void 0));
						const D = new r.$Zc(),
							M = this.h.createInstance(m.$y$b, I);
						if (
							(I.persistence?.sticky && (M.isLocked = !0),
							M.onDispose(
								() => {
									this.c?.domNode &&
										(0, u.$Lgb)(this.c.domNode) &&
										this.g?.focus(),
										this.b === I && (this.b = void 0),
										D.dispose();
								},
								void 0,
								D,
							),
							!I.container)
						) {
							const N = (0, u.$Ygb)(I.target)
								? I.target
								: I.target.targetElements[0];
							I.container = this.n.getContainer((0, u.getWindow)(N));
						}
						if (
							(this.a.showContextView(new $(M, T), I.container),
							M.onRequestLayout(() => this.a.layout(), void 0, D),
							I.persistence?.sticky)
						)
							D.add(
								(0, u.$0fb)(
									(0, u.getWindow)(I.container).document,
									u.$$gb.MOUSE_DOWN,
									(N) => {
										!(0, u.$Bgb)(N.target, M.domNode) &&
											I.dontHideHoverOnClick !== !0 &&
											this.r();
									},
								),
							);
						else {
							if ("targetElements" in I.target)
								for (const A of I.target.targetElements)
									I.dontHideHoverOnClick !== !0 &&
										D.add((0, u.$0fb)(A, u.$$gb.CLICK, () => this.hideHover()));
							else
								D.add(
									(0, u.$0fb)(I.target, u.$$gb.CLICK, () => this.hideHover()),
								);
							const N = (0, u.$Jgb)();
							if (N) {
								const A = (0, u.getWindow)(N).document;
								D.add(
									(0, u.$0fb)(N, u.$$gb.KEY_DOWN, (R) =>
										this.t(R, M, !!I.persistence?.hideOnKeyDown),
									),
								),
									D.add(
										(0, u.$0fb)(A, u.$$gb.KEY_DOWN, (R) =>
											this.t(R, M, !!I.persistence?.hideOnKeyDown),
										),
									),
									D.add((0, u.$0fb)(N, u.$$gb.KEY_UP, (R) => this.u(R, M))),
									D.add((0, u.$0fb)(A, u.$$gb.KEY_UP, (R) => this.u(R, M)));
							}
						}
						if ("IntersectionObserver" in o.$Bfb) {
							const N = new IntersectionObserver((R) => this.s(R, M), {
									threshold: 0,
								}),
								A =
									"targetElements" in I.target
										? I.target.targetElements[0]
										: I.target;
							N.observe(A), D.add((0, r.$Yc)(() => N.disconnect()));
						}
						return (this.c = M), M;
					}
					hideHover() {
						this.c?.isLocked || !this.b || this.r();
					}
					r() {
						(this.c = void 0), (this.b = void 0), this.a.hideContextView();
					}
					s(I, T) {
						I[I.length - 1].isIntersecting || T.dispose();
					}
					showAndFocusLastHover() {
						this.f && this.showHover(this.f, !0, !0);
					}
					t(I, T, P) {
						if (I.key === "Alt") {
							T.isLocked = !0;
							return;
						}
						const k = new h.$7fb(I);
						this.j
							.resolveKeyboardEvent(k)
							.getSingleModifierDispatchChords()
							.some((D) => !!D) ||
							this.j.softDispatch(k, k.target).kind !==
								c.ResultKind.NoMatchingKb ||
							(P &&
								(!this.b?.trapFocus || I.key !== "Tab") &&
								(this.hideHover(), this.g?.focus()));
					}
					u(I, T) {
						I.key === "Alt" &&
							((T.isLocked = !1),
							T.isMouseIn || (this.hideHover(), this.g?.focus()));
					}
					setupManagedHover(I, T, P, k) {
						T.setAttribute("custom-hover", "true"),
							T.title !== "" &&
								(console.warn(
									"HTML element already has a title attribute, which will conflict with the custom hover. Please remove the title attribute.",
								),
								console.trace("Stack trace:", T.title),
								(T.title = ""));
						let L, D;
						const M = (V, G) => {
								const K = D !== void 0;
								V && (D?.dispose(), (D = void 0)),
									G && (L?.dispose(), (L = void 0)),
									K && (I.onDidHideHover?.(), (D = void 0));
							},
							N = (V, G, K, J) =>
								new s.$Wh(async () => {
									(!D || D.isDisposed) &&
										((D = new b.$nyc(I, K || T, V > 0)),
										await D.update(typeof P == "function" ? P() : P, G, {
											...k,
											trapFocus: J,
										}));
								}, V);
						let A = !1;
						const R = (0, u.$0fb)(
								T,
								u.$$gb.MOUSE_DOWN,
								() => {
									(A = !0), k?.dontHideHoverOnClick !== !0 && M(!0, !0);
								},
								!0,
							),
							O = (0, u.$0fb)(
								T,
								u.$$gb.MOUSE_UP,
								() => {
									A = !1;
								},
								!0,
							),
							B = (0, u.$0fb)(
								T,
								u.$$gb.MOUSE_LEAVE,
								(V) => {
									(A = !1), M(!1, V.fromElement === T);
								},
								!0,
							),
							U = (V) => {
								if (L) return;
								const G = new r.$Zc(),
									K = { targetElements: [T], dispose: () => {} };
								if (I.placement === void 0 || I.placement === "mouse") {
									const J = (W) => {
										(K.x = W.x + 10),
											(0, u.$Ygb)(W.target) &&
												v(W.target, T) !== T &&
												M(!0, !0);
									};
									G.add((0, u.$0fb)(T, u.$$gb.MOUSE_MOVE, J, !0));
								}
								(L = G),
									!((0, u.$Ygb)(V.target) && v(V.target, T) !== T) &&
										G.add(N(I.delay, !1, K));
							},
							z = (0, u.$0fb)(T, u.$$gb.MOUSE_OVER, U, !0),
							F = () => {
								if (A || L) return;
								const V = { targetElements: [T], dispose: () => {} },
									G = new r.$Zc(),
									K = () => M(!0, !0);
								G.add((0, u.$0fb)(T, u.$$gb.BLUR, K, !0)),
									G.add(N(I.delay, !1, V)),
									(L = G);
							};
						let x;
						const H = T.tagName.toLowerCase();
						H !== "input" &&
							H !== "textarea" &&
							(x = (0, u.$0fb)(T, u.$$gb.FOCUS, F, !0));
						const q = {
							show: (V) => {
								M(!1, !0), N(0, V, void 0, V);
							},
							hide: () => {
								M(!0, !0);
							},
							update: async (V, G) => {
								(P = V), await D?.update(P, void 0, G);
							},
							dispose: () => {
								this.w.delete(T),
									z.dispose(),
									B.dispose(),
									R.dispose(),
									O.dispose(),
									x?.dispose(),
									M(!0, !0);
							},
						};
						return this.w.set(T, q), q;
					}
					showManagedHover(I) {
						const T = this.w.get(I);
						T && T.show(!0);
					}
					dispose() {
						this.w.forEach((I) => I.dispose()), super.dispose();
					}
				};
				(e.$oyc = l),
					(e.$oyc = l =
						Ne(
							[
								j(0, d.$Li),
								j(1, C.$Xxb),
								j(2, a.$uZ),
								j(3, n.$gj),
								j(4, p.$jEb),
								j(5, g.$XK),
							],
							l,
						));
				function y(S) {
					if (S !== void 0) return S?.id ?? S;
				}
				class $ {
					get anchorPosition() {
						return this.a.anchor;
					}
					constructor(I, T = !1) {
						(this.a = I), (this.b = T), (this.layer = 1);
					}
					render(I) {
						return this.a.render(I), this.b && this.a.focus(), this.a;
					}
					getAnchor() {
						return { x: this.a.x, y: this.a.y };
					}
					layout() {
						this.a.layout();
					}
				}
				function v(S, I) {
					for (
						I = I ?? (0, u.getWindow)(S).document.body;
						!S.hasAttribute("custom-hover") && S !== I;
					)
						S = S.parentElement;
					return S;
				}
				(0, t.$lK)(E.$Uyb, l, t.InstantiationType.Delayed),
					(0, i.$oP)((S, I) => {
						const T = S.getColor(w.$HQ);
						T &&
							(I.addRule(
								`.monaco-workbench .workbench-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${T.transparent(0.5)}; }`,
							),
							I.addRule(
								`.monaco-workbench .workbench-hover hr { border-top: 1px solid ${T.transparent(0.5)}; }`,
							));
					});
			},
		),
		