define(
			de[1317],
			he([
				1, 0, 3, 56, 98, 69, 38, 2925, 2924, 5, 49, 11, 8, 71, 766, 17, 414,
				1867, 48, 33, 152, 391, 7, 1557, 168, 350, 1551,
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
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pkc = void 0),
					(y = mt(y));
				let P = class extends t.$1c {
					static {
						T = this;
					}
					static {
						this.ID = "store.contrib.stickyScrollController";
					}
					constructor(L, D, M, N, A, R, O) {
						super(),
							(this.H = L),
							(this.I = D),
							(this.J = M),
							(this.L = N),
							(this.M = O),
							(this.c = new t.$Zc()),
							(this.h = Number.MAX_SAFE_INTEGER),
							(this.m = -1),
							(this.s = -1),
							(this.t = !1),
							(this.u = !1),
							(this.w = !1),
							(this.y = !1),
							(this.z = []),
							(this.a = new d.$ikc(this.H)),
							(this.b = new m.$okc(this.H, M, A)),
							this.D(this.a),
							this.D(this.b),
							(this.f = d.$hkc.Empty),
							this.ab(),
							this.X();
						const B = this.a.getDomNode();
						this.D(
							this.H.onDidChangeConfiguration((z) => {
								this.Y(z);
							}),
						),
							this.D(
								y.$0fb(B, y.$$gb.CONTEXT_MENU, async (z) => {
									this.U(y.getWindow(B), z);
								}),
							),
							(this.n = c.EditorContextKeys.stickyScrollFocused.bindTo(this.M)),
							(this.q = c.EditorContextKeys.stickyScrollVisible.bindTo(this.M));
						const U = this.D(y.$dhb(B));
						this.D(
							U.onDidBlur((z) => {
								this.w === !1 && B.clientHeight === 0
									? ((this.s = -1), this.focus())
									: this.N();
							}),
						),
							this.D(
								U.onDidFocus((z) => {
									this.focus();
								}),
							),
							this.S(),
							this.D(
								y.$0fb(B, y.$$gb.MOUSE_DOWN, (z) => {
									this.y = !0;
								}),
							);
					}
					get stickyScrollCandidateProvider() {
						return this.b;
					}
					get stickyScrollWidgetState() {
						return this.f;
					}
					static get(L) {
						return L.getContribution(T.ID);
					}
					N() {
						this.n.set(!1),
							this.r?.dispose(),
							(this.u = !1),
							(this.w = !1),
							(this.y = !1);
					}
					focus() {
						if (this.y) {
							(this.y = !1), this.H.focus();
							return;
						}
						this.n.get() !== !0 &&
							((this.u = !0),
							(this.r = new t.$Zc()),
							this.n.set(!0),
							(this.s = this.a.lineNumbers.length - 1),
							this.a.focusLineWithIndex(this.s));
					}
					focusNext() {
						this.s < this.a.lineNumberCount - 1 && this.O(!0);
					}
					focusPrevious() {
						this.s > 0 && this.O(!1);
					}
					selectEditor() {
						this.H.focus();
					}
					O(L) {
						(this.s = L ? this.s + 1 : this.s - 1),
							this.a.focusLineWithIndex(this.s);
					}
					goToFocused() {
						const L = this.a.lineNumbers;
						this.N(), this.P({ lineNumber: L[this.s], column: 1 });
					}
					P(L) {
						this.R(L, () => this.H.revealPosition(L));
					}
					Q(L) {
						this.R(L, () =>
							this.H.revealLineInCenterIfOutsideViewport(
								L.lineNumber,
								w.ScrollType.Smooth,
							),
						);
					}
					R(L, D) {
						this.u && this.N(),
							(this.w = !0),
							D(),
							this.H.setSelection(g.$iL.fromPositions(L)),
							this.H.focus();
					}
					S() {
						const L = this.D(new t.$Zc()),
							D = this.D(
								new n.$6Mb(this.H, {
									extractLineNumberFromMouseEvent: (A) => {
										const R = this.a.getEditorPositionFromNode(
											A.target.element,
										);
										return R ? R.lineNumber : 0;
									},
								}),
							),
							M = (A) => {
								if (
									!this.H.hasModel() ||
									A.target.type !== i.MouseTargetType.OVERLAY_WIDGET ||
									A.target.detail !== this.a.getId()
								)
									return null;
								const R = A.target.element;
								if (!R || R.innerText !== R.innerHTML) return null;
								const O = this.a.getEditorPositionFromNode(R);
								return O
									? {
											range: new g.$iL(
												O.lineNumber,
												O.column,
												O.lineNumber,
												O.column + R.innerText.length,
											),
											textElement: R,
										}
									: null;
							},
							N = this.a.getDomNode();
						this.D(
							y.$$fb(N, y.$$gb.CLICK, (A) => {
								if (A.ctrlKey || A.altKey || A.metaKey || !A.leftButton) return;
								if (A.shiftKey) {
									const U = this.a.getLineIndexFromChildDomNode(A.target);
									if (U === null) return;
									const z = new f.$hL(this.z[U], 1);
									this.Q(z);
									return;
								}
								if (this.a.isInFoldingIconDomNode(A.target)) {
									const U = this.a.getLineNumberFromChildDomNode(A.target);
									this.W(U);
									return;
								}
								if (!this.a.isInStickyLine(A.target)) return;
								let B = this.a.getEditorPositionFromNode(A.target);
								if (!B) {
									const U = this.a.getLineNumberFromChildDomNode(A.target);
									if (U === null) return;
									B = new f.$hL(U, 1);
								}
								this.P(B);
							}),
						),
							this.D(
								y.$$fb(N, y.$$gb.MOUSE_MOVE, (A) => {
									if (A.shiftKey) {
										const R = this.a.getLineIndexFromChildDomNode(A.target);
										if (R === null || (this.C !== null && this.C === R)) return;
										(this.C = R), this.bb();
										return;
									}
									this.C !== void 0 && ((this.C = void 0), this.bb());
								}),
							),
							this.D(
								y.$0fb(N, y.$$gb.MOUSE_LEAVE, (A) => {
									this.C !== void 0 && ((this.C = void 0), this.bb());
								}),
							),
							this.D(
								D.onMouseMoveOrRelevantKeyDown(([A, R]) => {
									const O = M(A);
									if (!O || !A.hasTriggerModifier || !this.H.hasModel()) {
										L.clear();
										return;
									}
									const { range: B, textElement: U } = O;
									if (!B.equalsRange(this.j)) (this.j = B), L.clear();
									else if (U.style.textDecoration === "underline") return;
									const z = new b.$Ce();
									L.add((0, t.$Yc)(() => z.dispose(!0)));
									let F;
									(0, p.$POb)(
										this.J.definitionProvider,
										this.H.getModel(),
										new f.$hL(B.startLineNumber, B.startColumn + 1),
										!1,
										z.token,
									).then((x) => {
										if (!z.token.isCancellationRequested)
											if (x.length !== 0) {
												this.m = x.length;
												const H = U;
												F !== H
													? (L.clear(),
														(F = H),
														(F.style.textDecoration = "underline"),
														L.add(
															(0, t.$Yc)(() => {
																F.style.textDecoration = "none";
															}),
														))
													: F ||
														((F = H),
														(F.style.textDecoration = "underline"),
														L.add(
															(0, t.$Yc)(() => {
																F.style.textDecoration = "none";
															}),
														));
											} else L.clear();
									});
								}),
							),
							this.D(
								D.onCancel(() => {
									L.clear();
								}),
							),
							this.D(
								D.onExecute(async (A) => {
									if (
										A.target.type !== i.MouseTargetType.OVERLAY_WIDGET ||
										A.target.detail !== this.a.getId()
									)
										return;
									const R = this.a.getEditorPositionFromNode(A.target.element);
									R &&
										(!this.H.hasModel() ||
											!this.j ||
											(this.m > 1 &&
												(this.u && this.N(),
												this.P({ lineNumber: R.lineNumber, column: 1 })),
											this.L.invokeFunction(o.$phc, A, this.H, {
												uri: this.H.getModel().uri,
												range: this.j,
											})));
								}),
							),
							this.D(
								y.$$fb(N, y.$$gb.MOUSE_DOWN, (A) => {
									if (this.G) {
										const R = this.a.getLineNumberFromChildDomNode(A.target);
										R !== null &&
											(this.G(A, R), A.preventDefault(), A.stopPropagation());
										return;
									}
								}),
							);
					}
					U(L, D) {
						const M = new v.$2fb(L, D);
						this.I.showContextMenu({
							menuId: a.$XX.StickyScrollContext,
							getAnchor: () => M,
						});
					}
					W(L) {
						if (!this.g || L === null) return;
						const D = this.a.getRenderedStickyLine(L),
							M = D?.foldingIcon;
						if (!M) return;
						(0, I.$DNb)(this.g, Number.MAX_VALUE, [L]),
							(M.isCollapsed = !M.isCollapsed);
						const N =
							(M.isCollapsed
								? this.H.getTopForLineNumber(M.foldingEndLine)
								: this.H.getTopForLineNumber(M.foldingStartLine)) -
							this.H.getOption(C.EditorOption.lineHeight) * D.index +
							1;
						this.H.setScrollTop(N), this.bb(L);
					}
					X() {
						const L = this.H.getOption(C.EditorOption.stickyScroll);
						if (L.enabled === !1) {
							this.H.removeOverlayWidget(this.a), this.c.clear(), (this.t = !1);
							return;
						} else
							L.enabled &&
								!this.t &&
								(this.H.addOverlayWidget(this.a),
								this.c.add(
									this.H.onDidScrollChange((M) => {
										M.scrollTopChanged && ((this.C = void 0), this.bb());
									}),
								),
								this.c.add(this.H.onDidLayoutChange(() => this.ab())),
								this.c.add(this.H.onDidChangeModelTokens((M) => this.$(M))),
								this.c.add(
									this.b.onDidChangeStickyScroll(() => {
										(this.C = void 0), this.bb();
									}),
								),
								(this.t = !0));
						this.H.getOption(C.EditorOption.lineNumbers).renderType ===
							C.RenderLineNumbersType.Relative &&
							this.c.add(
								this.H.onDidChangeCursorPosition(() => {
									(this.C = void 0), this.bb(0);
								}),
							);
					}
					Y(L) {
						(L.hasChanged(C.EditorOption.stickyScroll) ||
							L.hasChanged(C.EditorOption.minimap) ||
							L.hasChanged(C.EditorOption.lineHeight) ||
							L.hasChanged(C.EditorOption.showFoldingControls) ||
							L.hasChanged(C.EditorOption.lineNumbers)) &&
							this.X(),
							L.hasChanged(C.EditorOption.lineNumbers) && this.bb(0);
					}
					Z(L) {
						const D = this.a.getCurrentLines();
						for (const M of D)
							for (const N of L.ranges)
								if (M >= N.fromLineNumber && M <= N.toLineNumber) return !0;
						return !1;
					}
					$(L) {
						this.Z(L) && this.bb(0);
					}
					ab() {
						const D =
							this.H.getLayoutInfo().height /
							this.H.getOption(C.EditorOption.lineHeight);
						this.h = Math.round(D * 0.25);
					}
					async bb(L) {
						const D = this.H.getModel();
						if (!D || D.isTooLargeForTokenization()) {
							this.eb();
							return;
						}
						const M = this.cb(L),
							N = this.b.getVersionId();
						if (N === void 0 || N === D.getVersionId())
							if (!this.u) await this.db(M);
							else if (this.s === -1)
								await this.db(M),
									(this.s = this.a.lineNumberCount - 1),
									this.s !== -1 && this.a.focusLineWithIndex(this.s);
							else {
								const R = this.a.lineNumbers[this.s];
								await this.db(M),
									this.a.lineNumberCount === 0
										? (this.s = -1)
										: (this.a.lineNumbers.includes(R) ||
												(this.s = this.a.lineNumberCount - 1),
											this.a.focusLineWithIndex(this.s));
							}
					}
					cb(L) {
						if (L !== void 0) {
							const D = this.F !== void 0 ? this.F : 1 / 0;
							this.F = Math.min(L, D);
						}
						return this.F;
					}
					async db(L) {
						(this.F = void 0),
							(this.g =
								(await S.$ZNb.get(this.H)?.getFoldingModel()) ?? void 0),
							(this.f = this.findScrollWidgetState());
						const D = this.f.startLineNumbers.length > 0;
						this.q.set(D), this.a.setState(this.f, this.g, L);
					}
					async eb() {
						(this.F = void 0),
							(this.g = void 0),
							(this.f = d.$hkc.Empty),
							this.q.set(!1),
							this.a.setState(void 0, void 0);
					}
					findScrollWidgetState() {
						const L = this.H.getOption(C.EditorOption.lineHeight),
							D = Math.min(
								this.h,
								this.H.getOption(C.EditorOption.stickyScroll).maxLineCount,
							),
							M = this.H.getScrollTop();
						let N = 0;
						const A = [],
							R = [],
							O = this.H.getVisibleRanges();
						if (O.length !== 0) {
							const B = new $.$jkc(
									O[0].startLineNumber,
									O[O.length - 1].endLineNumber,
								),
								U = this.b.getCandidateStickyLinesIntersecting(B);
							for (const z of U) {
								const F = z.startLineNumber,
									x = z.endLineNumber,
									H = z.nestingDepth;
								if (x - F > 0) {
									const q = (H - 1) * L,
										V = H * L,
										G = this.H.getBottomForLineNumber(F) - M,
										K = this.H.getTopForLineNumber(x) - M,
										J = this.H.getBottomForLineNumber(x) - M;
									if (q > K && q <= J) {
										A.push(F), R.push(x + 1), (N = J - V);
										break;
									} else V > G && V <= J && (A.push(F), R.push(x + 1));
									if (A.length === D) break;
								}
							}
						}
						return (this.z = R), new d.$hkc(A, R, N, this.C);
					}
					hijackOnClickItem(L) {
						return (
							(this.G = L),
							{
								dispose: () => {
									this.G = void 0;
								},
							}
						);
					}
					dispose() {
						super.dispose(), this.c.dispose();
					}
				};
				(e.$pkc = P),
					(e.$pkc =
						P =
						T =
							Ne(
								[
									j(1, u.$Xxb),
									j(2, E.$k3),
									j(3, r.$Li),
									j(4, s.$aN),
									j(5, l.$PBb),
									j(6, h.$6j),
								],
								P,
							));
			},
		),
		