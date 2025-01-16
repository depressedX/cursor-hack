define(
			de[279],
			he([1, 0, 7, 265, 277, 203, 24, 97, 6, 3, 201, 195, 28, 277, 2255]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vob = e.Sizing = e.LayoutPriority = e.Orientation = void 0),
					(h = mt(h)),
					Object.defineProperty(e, "Orientation", {
						enumerable: !0,
						get: function () {
							return c.Orientation;
						},
					});
				const n = { separatorBorder: d.$UL.transparent };
				var g;
				(function (y) {
					(y[(y.Normal = 0)] = "Normal"),
						(y[(y.Low = 1)] = "Low"),
						(y[(y.High = 2)] = "High");
				})(g || (e.LayoutPriority = g = {}));
				class p {
					set size($) {
						this.a = $;
					}
					get size() {
						return this.a;
					}
					get cachedVisibleSize() {
						return this.b;
					}
					get visible() {
						return typeof this.b > "u";
					}
					setVisible($, v) {
						if ($ !== this.visible) {
							$
								? ((this.size = (0, u.$Zm)(
										this.b,
										this.viewMinimumSize,
										this.viewMaximumSize,
									)),
									(this.b = void 0))
								: ((this.b = typeof v == "number" ? v : this.size),
									(this.size = 0)),
								this.c.classList.toggle("visible", $);
							try {
								this.view.setVisible?.($);
							} catch (S) {
								console.error("Splitview: Failed to set visible view"),
									console.error(S);
							}
						}
					}
					get minimumSize() {
						return this.visible ? this.view.minimumSize : 0;
					}
					get viewMinimumSize() {
						return this.view.minimumSize;
					}
					get maximumSize() {
						return this.visible ? this.view.maximumSize : 0;
					}
					get viewMaximumSize() {
						return this.view.maximumSize;
					}
					get priority() {
						return this.view.priority;
					}
					get proportionalLayout() {
						return this.view.proportionalLayout ?? !0;
					}
					get snap() {
						return !!this.view.snap;
					}
					set enabled($) {
						this.c.style.pointerEvents = $ ? "" : "none";
					}
					constructor($, v, S, I) {
						(this.c = $),
							(this.view = v),
							(this.d = I),
							(this.b = void 0),
							typeof S == "number"
								? ((this.a = S), (this.b = void 0), $.classList.add("visible"))
								: ((this.a = 0), (this.b = S.cachedVisibleSize));
					}
					layout($, v) {
						this.layoutContainer($);
						try {
							this.view.layout(this.size, $, v);
						} catch (S) {
							console.error("Splitview: Failed to layout view"),
								console.error(S);
						}
					}
					dispose() {
						this.d.dispose();
					}
				}
				class o extends p {
					layoutContainer($) {
						(this.c.style.top = `${$}px`),
							(this.c.style.height = `${this.size}px`);
					}
				}
				class f extends p {
					layoutContainer($) {
						(this.c.style.left = `${$}px`),
							(this.c.style.width = `${this.size}px`);
					}
				}
				var b;
				(function (y) {
					(y[(y.Idle = 0)] = "Idle"), (y[(y.Busy = 1)] = "Busy");
				})(b || (b = {}));
				var s;
				(function (y) {
					y.Distribute = { type: "distribute" };
					function $(I) {
						return { type: "split", index: I };
					}
					y.Split = $;
					function v(I) {
						return { type: "auto", index: I };
					}
					y.Auto = v;
					function S(I) {
						return { type: "invisible", cachedVisibleSize: I };
					}
					y.Invisible = S;
				})(s || (e.Sizing = s = {}));
				class l extends r.$1c {
					get contentSize() {
						return this.j;
					}
					get length() {
						return this.n.length;
					}
					get minimumSize() {
						return this.n.reduce(($, v) => $ + v.minimumSize, 0);
					}
					get maximumSize() {
						return this.length === 0
							? Number.POSITIVE_INFINITY
							: this.n.reduce(($, v) => $ + v.maximumSize, 0);
					}
					get orthogonalStartSash() {
						return this.F;
					}
					get orthogonalEndSash() {
						return this.G;
					}
					get startSnappingEnabled() {
						return this.H;
					}
					get endSnappingEnabled() {
						return this.I;
					}
					set orthogonalStartSash($) {
						for (const v of this.sashItems) v.sash.orthogonalStartSash = $;
						this.F = $;
					}
					set orthogonalEndSash($) {
						for (const v of this.sashItems) v.sash.orthogonalEndSash = $;
						this.G = $;
					}
					get sashes() {
						return this.sashItems.map(($) => $.sash);
					}
					set startSnappingEnabled($) {
						this.H !== $ && ((this.H = $), this.X());
					}
					set endSnappingEnabled($) {
						this.I !== $ && ((this.I = $), this.X());
					}
					constructor($, v = {}) {
						super(),
							(this.g = 0),
							(this.j = 0),
							(this.m = void 0),
							(this.n = []),
							(this.sashItems = []),
							(this.t = b.Idle),
							(this.z = this.D(new m.$re())),
							(this.C = this.D(new m.$re())),
							(this.H = !0),
							(this.I = !0),
							(this.onDidSashChange = this.z.event),
							(this.onDidSashReset = this.C.event),
							(this.orientation = v.orientation ?? w.Orientation.VERTICAL),
							(this.u = v.inverseAltBehavior ?? !1),
							(this.w = v.proportionalLayout ?? !0),
							(this.y = v.getSashOrthogonalSize),
							(this.el = document.createElement("div")),
							this.el.classList.add("monaco-split-view2"),
							this.el.classList.add(
								this.orientation === w.Orientation.VERTICAL
									? "vertical"
									: "horizontal",
							),
							$.appendChild(this.el),
							(this.a = (0, t.$fhb)(this.el, (0, t.$)(".sash-container"))),
							(this.b = (0, t.$)(".split-view-container")),
							(this.c = this.D(
								new a.$KK({
									forceIntegerValues: !0,
									smoothScrollDuration: 125,
									scheduleAtNextAnimationFrame: (I) =>
										(0, t.$hgb)((0, t.getWindow)(this.el), I),
								}),
							)),
							(this.f = this.D(
								new E.$6hb(
									this.b,
									{
										vertical:
											this.orientation === w.Orientation.VERTICAL
												? (v.scrollbarVisibility ?? a.ScrollbarVisibility.Auto)
												: a.ScrollbarVisibility.Hidden,
										horizontal:
											this.orientation === w.Orientation.HORIZONTAL
												? (v.scrollbarVisibility ?? a.ScrollbarVisibility.Auto)
												: a.ScrollbarVisibility.Hidden,
									},
									this.c,
								),
							));
						const S = this.D(new i.$mib(this.b, "scroll")).event;
						this.D(
							S((I) => {
								const T = this.f.getScrollPosition(),
									P =
										Math.abs(this.b.scrollLeft - T.scrollLeft) <= 1
											? void 0
											: this.b.scrollLeft,
									k =
										Math.abs(this.b.scrollTop - T.scrollTop) <= 1
											? void 0
											: this.b.scrollTop;
								(P !== void 0 || k !== void 0) &&
									this.f.setScrollPosition({ scrollLeft: P, scrollTop: k });
							}),
						),
							(this.onDidScroll = this.f.onScroll),
							this.D(
								this.onDidScroll((I) => {
									I.scrollTopChanged && (this.b.scrollTop = I.scrollTop),
										I.scrollLeftChanged && (this.b.scrollLeft = I.scrollLeft);
								}),
							),
							(0, t.$fhb)(this.el, this.f.getDomNode()),
							this.style(v.styles || n),
							v.descriptor &&
								((this.g = v.descriptor.size),
								v.descriptor.views.forEach((I, T) => {
									const P =
											h.$sg(I.visible) || I.visible
												? I.size
												: { type: "invisible", cachedVisibleSize: I.size },
										k = I.view;
									this.P(k, P, T, !0);
								}),
								(this.j = this.n.reduce((I, T) => I + T.size, 0)),
								this.J());
					}
					style($) {
						$.separatorBorder.isTransparent()
							? (this.el.classList.remove("separator-border"),
								this.el.style.removeProperty("--separator-border"))
							: (this.el.classList.add("separator-border"),
								this.el.style.setProperty(
									"--separator-border",
									$.separatorBorder.toString(),
								));
					}
					addView($, v, S = this.n.length, I) {
						this.P($, v, S, I);
					}
					removeView($, v) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						this.t = b.Busy;
						try {
							v?.type === "auto" &&
								(this.ab()
									? (v = { type: "distribute" })
									: (v = { type: "split", index: v.index }));
							const S = v?.type === "split" ? this.n[v.index] : void 0,
								I = this.n.splice($, 1)[0];
							if ((S && (S.size += I.size), this.n.length >= 1)) {
								const P = Math.max($ - 1, 0);
								this.sashItems.splice(P, 1)[0].disposable.dispose();
							}
							this.Q(), v?.type === "distribute" && this.distributeViewSizes();
							const T = I.view;
							return I.dispose(), T;
						} finally {
							this.t = b.Idle;
						}
					}
					removeAllViews() {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						this.t = b.Busy;
						try {
							const $ = this.n.splice(0, this.n.length);
							for (const S of $) S.dispose();
							const v = this.sashItems.splice(0, this.sashItems.length);
							for (const S of v) S.disposable.dispose();
							return this.Q(), $.map((S) => S.view);
						} finally {
							this.t = b.Idle;
						}
					}
					moveView($, v) {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						const S = this.getViewCachedVisibleSize($),
							I = typeof S > "u" ? this.getViewSize($) : s.Invisible(S),
							T = this.removeView($);
						this.addView(T, I, v);
					}
					swapViews($, v) {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						if ($ > v) return this.swapViews(v, $);
						const S = this.getViewSize($),
							I = this.getViewSize(v),
							T = this.removeView(v),
							P = this.removeView($);
						this.addView(T, S, $), this.addView(P, I, v);
					}
					isViewVisible($) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						return this.n[$].visible;
					}
					setViewVisible($, v) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						this.n[$].setVisible(v), this.S($), this.U(), this.J();
					}
					getViewCachedVisibleSize($) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						return this.n[$].cachedVisibleSize;
					}
					layout($, v) {
						const S = Math.max(this.g, this.j);
						if (((this.g = $), (this.h = v), this.m)) {
							let I = 0;
							for (let T = 0; T < this.n.length; T++) {
								const P = this.n[T],
									k = this.m[T];
								typeof k == "number" ? (I += k) : ($ -= P.size);
							}
							for (let T = 0; T < this.n.length; T++) {
								const P = this.n[T],
									k = this.m[T];
								typeof k == "number" &&
									I > 0 &&
									(P.size = (0, u.$Zm)(
										Math.round((k * $) / I),
										P.minimumSize,
										P.maximumSize,
									));
							}
						} else {
							const I = (0, C.$Vb)(this.n.length),
								T = I.filter((k) => this.n[k].priority === g.Low),
								P = I.filter((k) => this.n[k].priority === g.High);
							this.R(this.n.length - 1, $ - S, void 0, T, P);
						}
						this.S(), this.U();
					}
					J() {
						this.w &&
							this.j > 0 &&
							(this.m = this.n.map(($) =>
								$.proportionalLayout && $.visible ? $.size / this.j : void 0,
							));
					}
					L({ sash: $, start: v, alt: S }) {
						for (const k of this.n) k.enabled = !1;
						const I = this.sashItems.findIndex((k) => k.sash === $),
							T = (0, r.$Xc)(
								(0, t.$0fb)(this.el.ownerDocument.body, "keydown", (k) =>
									P(this.q.current, k.altKey),
								),
								(0, t.$0fb)(this.el.ownerDocument.body, "keyup", () =>
									P(this.q.current, !1),
								),
							),
							P = (k, L) => {
								const D = this.n.map((O) => O.size);
								let M = Number.NEGATIVE_INFINITY,
									N = Number.POSITIVE_INFINITY;
								if ((this.u && (L = !L), L))
									if (I === this.sashItems.length - 1) {
										const B = this.n[I];
										(M = (B.minimumSize - B.size) / 2),
											(N = (B.maximumSize - B.size) / 2);
									} else {
										const B = this.n[I + 1];
										(M = (B.size - B.maximumSize) / 2),
											(N = (B.size - B.minimumSize) / 2);
									}
								let A, R;
								if (!L) {
									const O = (0, C.$Vb)(I, -1),
										B = (0, C.$Vb)(I + 1, this.n.length),
										U = O.reduce(
											(K, J) => K + (this.n[J].minimumSize - D[J]),
											0,
										),
										z = O.reduce(
											(K, J) => K + (this.n[J].viewMaximumSize - D[J]),
											0,
										),
										F =
											B.length === 0
												? Number.POSITIVE_INFINITY
												: B.reduce(
														(K, J) => K + (D[J] - this.n[J].minimumSize),
														0,
													),
										x =
											B.length === 0
												? Number.NEGATIVE_INFINITY
												: B.reduce(
														(K, J) => K + (D[J] - this.n[J].viewMaximumSize),
														0,
													),
										H = Math.max(U, x),
										q = Math.min(F, z),
										V = this.Z(O),
										G = this.Z(B);
									if (typeof V == "number") {
										const K = this.n[V],
											J = Math.floor(K.viewMinimumSize / 2);
										A = {
											index: V,
											limitDelta: K.visible ? H - J : H + J,
											size: K.size,
										};
									}
									if (typeof G == "number") {
										const K = this.n[G],
											J = Math.floor(K.viewMinimumSize / 2);
										R = {
											index: G,
											limitDelta: K.visible ? q + J : q - J,
											size: K.size,
										};
									}
								}
								this.q = {
									start: k,
									current: k,
									index: I,
									sizes: D,
									minDelta: M,
									maxDelta: N,
									alt: L,
									snapBefore: A,
									snapAfter: R,
									disposable: T,
								};
							};
						P(v, S);
					}
					M({ current: $ }) {
						const {
							index: v,
							start: S,
							sizes: I,
							alt: T,
							minDelta: P,
							maxDelta: k,
							snapBefore: L,
							snapAfter: D,
						} = this.q;
						this.q.current = $;
						const M = $ - S,
							N = this.R(v, M, I, void 0, void 0, P, k, L, D);
						if (T) {
							const A = v === this.sashItems.length - 1,
								R = this.n.map((x) => x.size),
								O = A ? v : v + 1,
								B = this.n[O],
								U = B.size - B.maximumSize,
								z = B.size - B.minimumSize,
								F = A ? v - 1 : v + 1;
							this.R(F, -N, R, void 0, void 0, U, z);
						}
						this.S(), this.U();
					}
					N($) {
						this.z.fire($), this.q.disposable.dispose(), this.J();
						for (const v of this.n) v.enabled = !0;
					}
					O($, v) {
						const S = this.n.indexOf($);
						S < 0 ||
							S >= this.n.length ||
							((v = typeof v == "number" ? v : $.size),
							(v = (0, u.$Zm)(v, $.minimumSize, $.maximumSize)),
							this.u && S > 0
								? (this.R(S - 1, Math.floor(($.size - v) / 2)),
									this.S(),
									this.U())
								: (($.size = v), this.Q([S], void 0)));
					}
					resizeView($, v) {
						if (!($ < 0 || $ >= this.n.length)) {
							if (this.t !== b.Idle) throw new Error("Cant modify splitview");
							this.t = b.Busy;
							try {
								const S = (0, C.$Vb)(this.n.length).filter((k) => k !== $),
									I = [...S.filter((k) => this.n[k].priority === g.Low), $],
									T = S.filter((k) => this.n[k].priority === g.High),
									P = this.n[$];
								(v = Math.round(v)),
									(v = (0, u.$Zm)(
										v,
										P.minimumSize,
										Math.min(P.maximumSize, this.g),
									)),
									(P.size = v),
									this.Q(I, T);
							} finally {
								this.t = b.Idle;
							}
						}
					}
					isViewExpanded($) {
						if ($ < 0 || $ >= this.n.length) return !1;
						for (const v of this.n)
							if (v !== this.n[$] && v.size > v.minimumSize) return !1;
						return !0;
					}
					distributeViewSizes() {
						const $ = [];
						let v = 0;
						for (const k of this.n)
							k.maximumSize - k.minimumSize > 0 && ($.push(k), (v += k.size));
						const S = Math.floor(v / $.length);
						for (const k of $)
							k.size = (0, u.$Zm)(S, k.minimumSize, k.maximumSize);
						const I = (0, C.$Vb)(this.n.length),
							T = I.filter((k) => this.n[k].priority === g.Low),
							P = I.filter((k) => this.n[k].priority === g.High);
						this.Q(T, P);
					}
					getViewSize($) {
						return $ < 0 || $ >= this.n.length ? -1 : this.n[$].size;
					}
					P($, v, S = this.n.length, I) {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						this.t = b.Busy;
						try {
							const T = (0, t.$)(".split-view-view");
							S === this.n.length
								? this.b.appendChild(T)
								: this.b.insertBefore(T, this.b.children.item(S));
							const P = $.onDidChange((A) => this.O(M, A)),
								k = (0, r.$Yc)(() => T.remove()),
								L = (0, r.$Xc)(P, k);
							let D;
							typeof v == "number"
								? (D = v)
								: (v.type === "auto" &&
										(this.ab()
											? (v = { type: "distribute" })
											: (v = { type: "split", index: v.index })),
									v.type === "split"
										? (D = this.getViewSize(v.index) / 2)
										: v.type === "invisible"
											? (D = { cachedVisibleSize: v.cachedVisibleSize })
											: (D = $.minimumSize));
							const M =
								this.orientation === w.Orientation.VERTICAL
									? new o(T, $, D, L)
									: new f(T, $, D, L);
							if ((this.n.splice(S, 0, M), this.n.length > 1)) {
								const A = {
										orthogonalStartSash: this.orthogonalStartSash,
										orthogonalEndSash: this.orthogonalEndSash,
									},
									R =
										this.orientation === w.Orientation.VERTICAL
											? new w.Sash(
													this.a,
													{
														getHorizontalSashTop: (K) => this.Y(K),
														getHorizontalSashWidth: this.y,
													},
													{ ...A, orientation: w.Orientation.HORIZONTAL },
												)
											: new w.Sash(
													this.a,
													{
														getVerticalSashLeft: (K) => this.Y(K),
														getVerticalSashHeight: this.y,
													},
													{ ...A, orientation: w.Orientation.VERTICAL },
												),
									O =
										this.orientation === w.Orientation.VERTICAL
											? (K) => ({
													sash: R,
													start: K.startY,
													current: K.currentY,
													alt: K.altKey,
												})
											: (K) => ({
													sash: R,
													start: K.startX,
													current: K.currentX,
													alt: K.altKey,
												}),
									U = m.Event.map(R.onDidStart, O)(this.L, this),
									F = m.Event.map(R.onDidChange, O)(this.M, this),
									H = m.Event.map(R.onDidEnd, () =>
										this.sashItems.findIndex((K) => K.sash === R),
									)(this.N, this),
									q = R.onDidReset(() => {
										const K = this.sashItems.findIndex((ie) => ie.sash === R),
											J = (0, C.$Vb)(K, -1),
											W = (0, C.$Vb)(K + 1, this.n.length),
											X = this.Z(J),
											Y = this.Z(W);
										(typeof X == "number" && !this.n[X].visible) ||
											(typeof Y == "number" && !this.n[Y].visible) ||
											this.C.fire(K);
									}),
									V = (0, r.$Xc)(U, F, H, q, R),
									G = { sash: R, disposable: V };
								this.sashItems.splice(S - 1, 0, G);
							}
							T.appendChild($.element);
							let N;
							typeof v != "number" && v.type === "split" && (N = [v.index]),
								I || this.Q([S], N),
								!I &&
									typeof v != "number" &&
									v.type === "distribute" &&
									this.distributeViewSizes();
						} finally {
							this.t = b.Idle;
						}
					}
					Q($, v) {
						const S = this.n.reduce((I, T) => I + T.size, 0);
						this.R(this.n.length - 1, this.g - S, void 0, $, v),
							this.S(),
							this.U(),
							this.J();
					}
					R(
						$,
						v,
						S = this.n.map((M) => M.size),
						I,
						T,
						P = Number.NEGATIVE_INFINITY,
						k = Number.POSITIVE_INFINITY,
						L,
						D,
					) {
						if ($ < 0 || $ >= this.n.length) return 0;
						const M = (0, C.$Vb)($, -1),
							N = (0, C.$Vb)($ + 1, this.n.length);
						if (T) for (const G of T) (0, C.$2b)(M, G), (0, C.$2b)(N, G);
						if (I) for (const G of I) (0, C.$3b)(M, G), (0, C.$3b)(N, G);
						const A = M.map((G) => this.n[G]),
							R = M.map((G) => S[G]),
							O = N.map((G) => this.n[G]),
							B = N.map((G) => S[G]),
							U = M.reduce((G, K) => G + (this.n[K].minimumSize - S[K]), 0),
							z = M.reduce((G, K) => G + (this.n[K].maximumSize - S[K]), 0),
							F =
								N.length === 0
									? Number.POSITIVE_INFINITY
									: N.reduce((G, K) => G + (S[K] - this.n[K].minimumSize), 0),
							x =
								N.length === 0
									? Number.NEGATIVE_INFINITY
									: N.reduce((G, K) => G + (S[K] - this.n[K].maximumSize), 0),
							H = Math.max(U, x, P),
							q = Math.min(F, z, k);
						let V = !1;
						if (L) {
							const G = this.n[L.index],
								K = v >= L.limitDelta;
							(V = K !== G.visible), G.setVisible(K, L.size);
						}
						if (!V && D) {
							const G = this.n[D.index],
								K = v < D.limitDelta;
							(V = K !== G.visible), G.setVisible(K, D.size);
						}
						if (V) return this.R($, v, S, I, T, P, k);
						v = (0, u.$Zm)(v, H, q);
						for (let G = 0, K = v; G < A.length; G++) {
							const J = A[G],
								W = (0, u.$Zm)(R[G] + K, J.minimumSize, J.maximumSize),
								X = W - R[G];
							(K -= X), (J.size = W);
						}
						for (let G = 0, K = v; G < O.length; G++) {
							const J = O[G],
								W = (0, u.$Zm)(B[G] - K, J.minimumSize, J.maximumSize),
								X = W - B[G];
							(K += X), (J.size = W);
						}
						return v;
					}
					S($) {
						const v = this.n.reduce((k, L) => k + L.size, 0);
						let S = this.g - v;
						const I = (0, C.$Vb)(this.n.length - 1, -1),
							T = I.filter((k) => this.n[k].priority === g.Low),
							P = I.filter((k) => this.n[k].priority === g.High);
						for (const k of P) (0, C.$2b)(I, k);
						for (const k of T) (0, C.$3b)(I, k);
						typeof $ == "number" && (0, C.$3b)(I, $);
						for (let k = 0; S !== 0 && k < I.length; k++) {
							const L = this.n[I[k]],
								D = (0, u.$Zm)(L.size + S, L.minimumSize, L.maximumSize),
								M = D - L.size;
							(S -= M), (L.size = D);
						}
					}
					U() {
						this.j = this.n.reduce((v, S) => v + S.size, 0);
						let $ = 0;
						for (const v of this.n) v.layout($, this.h), ($ += v.size);
						this.sashItems.forEach((v) => v.sash.layout()), this.X(), this.W();
					}
					W() {
						this.orientation === w.Orientation.VERTICAL
							? this.f.setScrollDimensions({
									height: this.g,
									scrollHeight: this.j,
								})
							: this.f.setScrollDimensions({
									width: this.g,
									scrollWidth: this.j,
								});
					}
					X() {
						let $ = !1;
						const v = this.n.map((L) => ($ = L.size - L.minimumSize > 0 || $));
						$ = !1;
						const S = this.n.map((L) => ($ = L.maximumSize - L.size > 0 || $)),
							I = [...this.n].reverse();
						$ = !1;
						const T = I.map(
							(L) => ($ = L.size - L.minimumSize > 0 || $),
						).reverse();
						$ = !1;
						const P = I.map(
							(L) => ($ = L.maximumSize - L.size > 0 || $),
						).reverse();
						let k = 0;
						for (let L = 0; L < this.sashItems.length; L++) {
							const { sash: D } = this.sashItems[L],
								M = this.n[L];
							k += M.size;
							const N = !(v[L] && P[L + 1]),
								A = !(S[L] && T[L + 1]);
							if (N && A) {
								const R = (0, C.$Vb)(L, -1),
									O = (0, C.$Vb)(L + 1, this.n.length),
									B = this.Z(R),
									U = this.Z(O),
									z = typeof B == "number" && !this.n[B].visible,
									F = typeof U == "number" && !this.n[U].visible;
								z && T[L] && (k > 0 || this.startSnappingEnabled)
									? (D.state = w.SashState.AtMinimum)
									: F && v[L] && (k < this.j || this.endSnappingEnabled)
										? (D.state = w.SashState.AtMaximum)
										: (D.state = w.SashState.Disabled);
							} else
								N && !A
									? (D.state = w.SashState.AtMinimum)
									: !N && A
										? (D.state = w.SashState.AtMaximum)
										: (D.state = w.SashState.Enabled);
						}
					}
					Y($) {
						let v = 0;
						for (let S = 0; S < this.sashItems.length; S++)
							if (((v += this.n[S].size), this.sashItems[S].sash === $))
								return v;
						return 0;
					}
					Z($) {
						for (const v of $) {
							const S = this.n[v];
							if (S.visible && S.snap) return v;
						}
						for (const v of $) {
							const S = this.n[v];
							if (S.visible && S.maximumSize - S.minimumSize > 0) return;
							if (!S.visible && S.snap) return v;
						}
					}
					ab() {
						let $, v;
						for (const S of this.n)
							if (
								(($ = $ === void 0 ? S.size : Math.min($, S.size)),
								(v = v === void 0 ? S.size : Math.max(v, S.size)),
								v - $ > 2)
							)
								return !1;
						return !0;
					}
					dispose() {
						this.q?.disposable.dispose(),
							(0, r.$Vc)(this.n),
							(this.n = []),
							this.sashItems.forEach(($) => $.disposable.dispose()),
							(this.sashItems = []),
							super.dispose();
					}
				}
				e.$vob = l;
			},
		),
		