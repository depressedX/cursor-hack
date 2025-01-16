define(
			de[3519],
			he([
				1, 0, 6, 3, 475, 55, 30, 52, 3518, 56, 204, 33, 15, 29, 125, 5, 98, 17,
				116, 65, 10, 4, 496, 90, 19, 69,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let I = class {
					constructor(L, D) {
						(this.b = L), (this.c = D), (this.a = []);
					}
					getBreadcrumbElements() {
						return this.a;
					}
					clear() {
						this.a = [];
					}
					update(L, D) {
						const M = this.d(L, D);
						this.a = M;
					}
					d(L, D) {
						let M = L.getItemEnclosingPosition(D);
						if (!M) return [];
						const N = [];
						for (; M; ) {
							N.push(M);
							const R = M.parent;
							if (
								R instanceof u.$8Db ||
								(R instanceof u.$7Db &&
									R.parent &&
									R.parent.children.size === 1)
							)
								break;
							M = R;
						}
						const A = [];
						for (let R = N.length - 1; R >= 0; R--) {
							const O = N[R];
							if (this.f(O)) break;
							A.push(O);
						}
						return A.length === 0 ? [] : A;
					}
					f(L) {
						if (!(L instanceof u.$6Db)) return !1;
						const D = `breadcrumbs.${m.$YYc.kindToConfigName[L.symbol.kind]}`;
						let M;
						return (
							this.b && this.b.getModel() && (M = this.b.getModel().uri),
							!this.c.getValue(M, D)
						);
					}
				};
				I = Ne([j(1, n.$XO)], I);
				let T = class {
					get activeElement() {
						const L = this.g.getPosition();
						if (!(!L || !this.c)) return this.c.getItemEnclosingPosition(L);
					}
					constructor(L, D, M, N, A, R, O, B, U, z) {
						(this.g = L),
							(this.h = N),
							(this.j = A),
							(this.k = R),
							(this.l = O),
							(this.m = B),
							(this.a = new i.$Zc()),
							(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.d = new i.$Zc()),
							(this.outlineKind = "documentSymbols"),
							(this.f = new I(L, U));
						const F = new m.$VYc(),
							x = [new m.$WYc(), z.createInstance(m.$XYc, !0, D)],
							H = {
								getChildren: (J) =>
									J instanceof u.$6Db || J instanceof u.$7Db
										? J.children.values()
										: J === this && this.c
											? this.c.children.values()
											: [],
							},
							q = new m.$ZYc(),
							V = U.getValue(
								L.getModel()?.uri,
								w.OutlineConfigKeys.collapseItems,
							),
							G = {
								collapseByDefault:
									D === w.OutlineTarget.Breadcrumbs ||
									(D === w.OutlineTarget.OutlinePane &&
										V === w.OutlineConfigCollapseItemsValues.Collapsed),
								expandOnlyOnTwistieClick: !0,
								multipleSelectionSupport: !1,
								identityProvider: new m.$UYc(),
								keyboardNavigationLabelProvider: new m.$SYc(),
								accessibilityProvider: new m.$TYc((0, l.localize)(4885, null)),
								filter:
									D === w.OutlineTarget.OutlinePane
										? z.createInstance(m.$YYc, "outline")
										: D === w.OutlineTarget.Breadcrumbs
											? z.createInstance(m.$YYc, "breadcrumbs")
											: void 0,
							};
						(this.config = {
							breadcrumbsDataSource: this.f,
							delegate: F,
							renderers: x,
							treeDataSource: H,
							comparator: q,
							options: G,
							quickPickDataSource: {
								getQuickPickElements: () => {
									throw new Error("not implemented");
								},
							},
						}),
							this.a.add(N.documentSymbolProvider.onDidChange((J) => this.n())),
							this.a.add(this.g.onDidChangeModel((J) => this.n())),
							this.a.add(this.g.onDidChangeModelLanguage((J) => this.n()));
						const K = new h.$Wh();
						this.a.add(K),
							this.a.add(
								this.g.onDidChangeModelContent((J) => {
									const W = this.g.getModel();
									if (W) {
										const X = R.getDebounceValue(W);
										K.cancelAndSet(() => this.n(J), X);
									}
								}),
							),
							this.a.add(this.g.onDidDispose(() => this.d.clear())),
							this.n().finally(() => M.open());
					}
					dispose() {
						this.a.dispose(), this.d.dispose();
					}
					get isEmpty() {
						return !this.c || u.$5Db.empty(this.c);
					}
					get uri() {
						return this.c?.uri;
					}
					async reveal(L, D, M, N) {
						const A = u.$8Db.get(L);
						!A ||
							!(L instanceof u.$6Db) ||
							(await this.j.openCodeEditor(
								{
									resource: A.uri,
									options: {
										...D,
										selection: N
											? L.symbol.range
											: o.$iL.collapseToStart(L.symbol.selectionRange),
										selectionRevealType:
											f.TextEditorSelectionRevealType.NearTopIfOutsideViewport,
									},
								},
								this.g,
								M,
							));
					}
					preview(L) {
						if (!(L instanceof u.$6Db)) return i.$1c.None;
						const { symbol: D } = L;
						this.g.revealRangeInCenterIfOutsideViewport(
							D.range,
							p.ScrollType.Smooth,
						);
						const M = this.g.createDecorationsCollection([
							{
								range: D.range,
								options: {
									description: "document-symbols-outline-range-highlight",
									className: "rangeHighlight",
									isWholeLine: !0,
								},
							},
						]);
						return (0, i.$Yc)(() => M.clear());
					}
					captureViewState() {
						const L = this.g.saveViewState();
						return (0, i.$Yc)(() => {
							L && this.g.restoreViewState(L);
						});
					}
					async n(L) {
						if ((this.d.clear(), L || this.p(void 0), !this.g.hasModel()))
							return;
						const D = this.g.getModel();
						if (!this.h.documentSymbolProvider.has(D)) return;
						const M = new a.$Ce(),
							N = D.getVersionId(),
							A = new h.$Wh();
						this.d.add(A), this.d.add((0, i.$Yc)(() => M.dispose(!0)));
						try {
							const R = await this.k.getOrCreate(D, M.token);
							if (M.token.isCancellationRequested) return;
							if (u.$5Db.empty(R) || !this.g.hasModel()) {
								this.p(R);
								return;
							}
							if (L && this.c && D.getLineCount() >= 25) {
								const O = u.$5Db.size(R),
									B = D.getValueLength(),
									U = O / B,
									z = u.$5Db.size(this.c),
									F = B - L.changes.reduce((H, q) => H + q.rangeLength, 0),
									x = z / F;
								if (
									(U <= x * 0.5 || U >= x * 1.5) &&
									!(await (0, h.$Ah)(
										(0, h.$Nh)(2e3).then(() => !0),
										M.token,
										!1,
									))
								)
									return;
							}
							this.o(R),
								this.d.add(
									this.m.onDidChangeMarker((O) => {
										(0, v.$gh)(R.uri, O.uri) && (this.o(R), this.b.fire({}));
									}),
								),
								this.d.add(
									this.l.onDidChangeConfiguration((O) => {
										if (
											O.affectsConfiguration(
												w.OutlineConfigKeys.problemsEnabled,
											) ||
											O.affectsConfiguration("problems.visibility")
										) {
											const B = this.l.getValue("problems.visibility"),
												U = this.l.getValue(
													w.OutlineConfigKeys.problemsEnabled,
												);
											!B || !U ? R.updateMarker([]) : this.o(R),
												this.b.fire({});
										}
										O.affectsConfiguration("outline") && this.b.fire({}),
											O.affectsConfiguration("breadcrumbs") &&
												this.g.hasModel() &&
												(this.f.update(R, this.g.getPosition()),
												this.b.fire({}));
									}),
								),
								this.d.add(
									this.l.onDidChangeConfiguration((O) => {
										O.affectsConfiguration(w.OutlineConfigKeys.icons) &&
											this.b.fire({}),
											O.affectsConfiguration("outline") && this.b.fire({});
									}),
								),
								this.d.add(
									this.g.onDidChangeCursorPosition((O) => {
										A.cancelAndSet(() => {
											!D.isDisposed() &&
												N === D.getVersionId() &&
												this.g.hasModel() &&
												(this.f.update(R, this.g.getPosition()),
												this.b.fire({ affectOnlyActiveElement: !0 }));
										}, 150);
									}),
								),
								this.p(R);
						} catch (R) {
							this.p(void 0), (0, c.$4)(R);
						}
					}
					o(L) {
						const D = this.l.getValue("problems.visibility"),
							M = this.l.getValue(w.OutlineConfigKeys.problemsEnabled);
						if (!L || !D || !M) return;
						const N = [];
						for (const [A, R] of this.m.getLiveMarkers(L.uri))
							(R.severity === $.MarkerSeverity.Error ||
								R.severity === $.MarkerSeverity.Warning) &&
								N.push({ ...A, severity: R.severity });
						L.updateMarker(N);
					}
					p(L) {
						const D = this.g.getPosition();
						!D || !L
							? ((this.c = void 0), this.f.clear())
							: (this.c?.merge(L) || (this.c = L), this.f.update(L, D)),
							this.b.fire({});
					}
				};
				T = Ne(
					[
						j(3, S.$k3),
						j(4, b.$dtb),
						j(5, u.$9Db),
						j(6, s.$gj),
						j(7, y.$bub),
						j(8, n.$XO),
						j(9, g.$Li),
					],
					T,
				);
				let P = class {
					constructor(L) {
						const D = L.registerOutlineCreator(this);
						this.dispose = () => D.dispose();
					}
					matches(L) {
						const D = L.getControl();
						return (0, r.$0sb)(D) || (0, r.$$sb)(D);
					}
					async createOutline(L, D, M) {
						const N = L.getControl();
						let A;
						if (
							((0, r.$0sb)(N)
								? (A = N)
								: (0, r.$$sb)(N) && (A = N.getModifiedEditor()),
							!A)
						)
							return;
						const R = new h.$Lh(),
							O = A.invokeWithinContext((B) =>
								B.get(g.$Li).createInstance(T, A, D, R),
							);
						return await R.wait(), O;
					}
				};
				(P = Ne([j(0, w.$x4b)], P)),
					C.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(P, d.LifecyclePhase.Eventually);
			},
		),
		