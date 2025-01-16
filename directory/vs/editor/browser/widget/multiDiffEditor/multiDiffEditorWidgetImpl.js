define(
			de[2906],
			he([
				1, 0, 7, 203, 24, 214, 29, 3, 77, 407, 195, 370, 289, 104, 71, 8, 5,
				128, 1682, 2548, 4, 2283,
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
					(e.$EGc = void 0);
				let l = class extends d.$1c {
					constructor(S, I, T, P, k, L) {
						super(),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.F = k),
							(this.G = L),
							(this.a = (0, t.h)("div.scrollContent", [
								(0, t.h)("div@content", { style: { overflow: "hidden" } }),
								(0, t.h)("div.monaco-editor@overflowWidgetsDomNode", {}),
							])),
							(this.b = this.D(
								new u.$KK({
									forceIntegerValues: !1,
									scheduleAtNextAnimationFrame: (M) =>
										(0, t.$hgb)((0, t.getWindow)(this.w), M),
									smoothScrollDuration: 100,
								}),
							)),
							(this.c = this.D(
								new i.$6hb(
									this.a.root,
									{
										vertical: u.ScrollbarVisibility.Auto,
										horizontal: u.ScrollbarVisibility.Auto,
										useShadows: !1,
									},
									this.b,
								),
							)),
							(this.f = (0, t.h)("div.monaco-component.multiDiffEditor", {}, [
								(0, t.h)("div", {}, [this.c.getDomNode()]),
								(0, t.h)("div.placeholder@placeholder", {}, [
									(0, t.h)("div", [(0, s.localize)(251, null)]),
								]),
							])),
							(this.g = this.D(new a.$Awb(this.w, void 0))),
							(this.j = this.D(
								new b.$BGc((M) => {
									const N = this.u.createInstance(
										f.$DGc,
										this.a.content,
										this.a.overflowWidgetsDomNode,
										this.C,
									);
									return N.setData(M), N;
								}),
							)),
							(this.scrollTop = (0, m.observableFromEvent)(
								this,
								this.c.onScroll,
								() => this.c.getScrollPosition().scrollTop,
							)),
							(this.scrollLeft = (0, m.observableFromEvent)(
								this,
								this.c.onScroll,
								() => this.c.getScrollPosition().scrollLeft,
							)),
							(this.m = (0, m.derivedWithStore)(this, (M, N) => {
								const A = this.z.read(M);
								if (!A)
									return {
										items: [],
										getItem: (U) => {
											throw new C.$gb();
										},
									};
								const R = A.items.read(M),
									O = new Map();
								return {
									items: R.map((U) => {
										const z = N.add(
												new $(U, this.j, this.scrollLeft, (x) => {
													this.c.setScrollPosition({
														scrollTop: this.c.getScrollPosition().scrollTop + x,
													});
												}),
											),
											F = this.H?.[z.getKey()];
										return (
											F &&
												(0, r.$7d)((x) => {
													z.setViewState(F, x);
												}),
											O.set(U, z),
											z
										);
									}),
									getItem: (U) => O.get(U),
								};
							})),
							(this.n = this.m.map(this, (M) => M.items)),
							(this.q = 0),
							(this.s = this.n.map(this, (M, N) =>
								M.reduce((A, R) => A + R.contentHeight.read(N) + this.q, 0),
							)),
							(this.activeControl = (0, m.derived)(this, (M) => {
								const N = this.z.read(M)?.activeDiffItem.read(M);
								return N
									? this.m.read(M).getItem(N).template.read(M)?.editor
									: void 0;
							})),
							(this.t = this.D(this.F.createScoped(this.w))),
							(this.u = this.D(this.G.createChild(new o.$Ki([g.$6j, this.t])))),
							(this.H = {}),
							this.t.createKey(n.EditorContextKeys.inMultiDiffEditor.key, !0),
							this.D(
								(0, m.autorunWithStore)((M, N) => {
									const A = this.z.read(M);
									if (A && A.contextKeys)
										for (const [R, O] of Object.entries(A.contextKeys)) {
											const B = this.t.createKey(R, void 0);
											B.set(O), N.add((0, d.$Yc)(() => B.reset()));
										}
								}),
							);
						const D = this.F.createKey(
							n.EditorContextKeys.multiDiffEditorAllCollapsed.key,
							!1,
						);
						this.D(
							(0, m.autorun)((M) => {
								const N = this.z.read(M);
								if (N) {
									const A = N.items.read(M).every((R) => R.collapsed.read(M));
									D.set(A);
								}
							}),
						),
							this.D(
								(0, m.autorun)((M) => {
									const N = this.y.read(M);
									this.g.observe(N);
								}),
							),
							this.D(
								(0, m.autorun)((M) => {
									const N = this.n.read(M);
									this.f.placeholder.classList.toggle(
										"visible",
										N.length === 0,
									);
								}),
							),
							(this.a.content.style.position = "relative"),
							this.D(
								(0, m.autorun)((M) => {
									const N = this.g.height.read(M);
									this.a.root.style.height = `${N}px`;
									const A = this.s.read(M);
									this.a.content.style.height = `${A}px`;
									const R = this.g.width.read(M);
									let O = R;
									const B = this.n.read(M),
										U = (0, E.$rb)(
											B,
											(0, w.$0b)((z) => z.maxScroll.read(M).maxScroll, w.$_b),
										);
									if (U) {
										const z = U.maxScroll.read(M);
										O = R + z.maxScroll;
									}
									this.c.setScrollDimensions({
										width: R,
										height: N,
										scrollHeight: A,
										scrollWidth: O,
									});
								}),
							),
							S.replaceChildren(this.f.root),
							this.D(
								(0, d.$Yc)(() => {
									S.replaceChildren();
								}),
							),
							this.D(
								this.D(
									(0, m.autorun)((M) => {
										(0, r.$8d)((N) => {
											this.I(M);
										});
									}),
								),
							);
					}
					setScrollState(S) {
						this.c.setScrollPosition({ scrollLeft: S.left, scrollTop: S.top });
					}
					reveal(S, I) {
						const T = this.n.get(),
							P = T.findIndex(
								(N) =>
									N.viewModel.originalUri?.toString() ===
										S.original?.toString() &&
									N.viewModel.modifiedUri?.toString() ===
										S.modified?.toString(),
							);
						if (P === -1) throw new C.$gb("Resource not found in diff editor");
						const k = T[P];
						this.z.get().activeDiffItem.setCache(k.viewModel, void 0);
						let L = 0;
						for (let N = 0; N < P; N++) L += T[N].contentHeight.get() + this.q;
						this.c.setScrollPosition({ scrollTop: L });
						const D = k.template.get()?.editor,
							M =
								"original" in S
									? D?.getOriginalEditor()
									: D?.getModifiedEditor();
						M && I?.range && (M.revealRangeInCenter(I.range), y(M, I.range));
					}
					getViewState() {
						return {
							scrollState: {
								top: this.scrollTop.get(),
								left: this.scrollLeft.get(),
							},
							docStates: Object.fromEntries(
								this.n.get().map((S) => [S.getKey(), S.getViewState()]),
							),
						};
					}
					setViewState(S) {
						this.setScrollState(S.scrollState),
							(this.H = S.docStates),
							(0, r.$7d)((I) => {
								if (S.docStates)
									for (const T of this.n.get()) {
										const P = S.docStates[T.getKey()];
										P && T.setViewState(P, I);
									}
							});
					}
					findDocumentDiffItem(S) {
						return this.n
							.get()
							.find(
								(T) =>
									T.viewModel.diffEditorViewModel.model.modified.uri.toString() ===
										S.toString() ||
									T.viewModel.diffEditorViewModel.model.original.uri.toString() ===
										S.toString(),
							)?.viewModel.documentDiffItem;
					}
					tryGetCodeEditor(S) {
						const I = this.n
								.get()
								.find(
									(P) =>
										P.viewModel.diffEditorViewModel.model.modified.uri.toString() ===
											S.toString() ||
										P.viewModel.diffEditorViewModel.model.original.uri.toString() ===
											S.toString(),
								),
							T = I?.template.get()?.editor;
						if (T)
							return I.viewModel.diffEditorViewModel.model.modified.uri.toString() ===
								S.toString()
								? { diffEditor: T, editor: T.getModifiedEditor() }
								: { diffEditor: T, editor: T.getOriginalEditor() };
					}
					I(S) {
						const I = this.scrollTop.read(S);
						let T = 0,
							P = 0,
							k = 0;
						const L = this.g.height.read(S),
							D = h.$pL.ofStartAndLength(I, L),
							M = this.g.width.read(S);
						for (const N of this.n.read(S)) {
							const A = N.contentHeight.read(S),
								R = Math.min(A, L),
								O = h.$pL.ofStartAndLength(P, R),
								B = h.$pL.ofStartAndLength(k, A);
							if (B.isBefore(D)) (T -= A - R), N.hide();
							else if (B.isAfter(D)) N.hide();
							else {
								const U = Math.max(0, Math.min(D.start - B.start, A - R));
								T -= U;
								const z = h.$pL.ofStartAndLength(I + T, L);
								N.render(O, U, M, z);
							}
							(P += R + this.q), (k += A + this.q);
						}
						this.a.content.style.transform = `translateY(${-(I + T)}px)`;
					}
				};
				(e.$EGc = l), (e.$EGc = l = Ne([j(4, g.$6j), j(5, p.$Li)], l));
				function y(v, S) {
					const I = v.getModel(),
						T = v.createDecorationsCollection([
							{
								range: S,
								options: {
									description: "symbol-navigate-action-highlight",
									className: "symbolHighlight",
								},
							},
						]);
					setTimeout(() => {
						v.getModel() === I && T.clear();
					}, 350);
				}
				class $ extends d.$1c {
					constructor(S, I, T, P) {
						super(),
							(this.viewModel = S),
							(this.f = I),
							(this.g = T),
							(this.j = P),
							(this.a = this.D((0, r.$be)(this, void 0))),
							(this.contentHeight = (0, m.derived)(
								this,
								(k) =>
									this.a.read(k)?.object.contentHeight?.read(k) ??
									this.viewModel.lastTemplateData.read(k).contentHeight,
							)),
							(this.maxScroll = (0, m.derived)(
								this,
								(k) =>
									this.a.read(k)?.object.maxScroll.read(k) ?? {
										maxScroll: 0,
										scrollWidth: 0,
									},
							)),
							(this.template = (0, m.derived)(
								this,
								(k) => this.a.read(k)?.object,
							)),
							(this.b = (0, m.observableValue)(this, !1)),
							(this.c = (0, m.derived)(
								this,
								(k) => this.template.read(k)?.isFocused.read(k) ?? !1,
							)),
							this.viewModel.setIsFocused(this.c, void 0),
							this.D(
								(0, m.autorun)((k) => {
									const L = this.g.read(k);
									this.a.read(k)?.object.setScrollLeft(L);
								}),
							),
							this.D(
								(0, m.autorun)((k) => {
									const L = this.a.read(k);
									!L ||
										!this.b.read(k) ||
										L.object.isFocused.read(k) ||
										this.n();
								}),
							);
					}
					dispose() {
						this.n(), super.dispose();
					}
					toString() {
						return `VirtualViewItem(${this.viewModel.documentDiffItem.modified?.uri.toString()})`;
					}
					getKey() {
						return this.viewModel.getKey();
					}
					getViewState() {
						return (
							(0, r.$7d)((S) => {
								this.m(S);
							}),
							{
								collapsed: this.viewModel.collapsed.get(),
								selections: this.viewModel.lastTemplateData.get().selections,
							}
						);
					}
					setViewState(S, I) {
						this.viewModel.collapsed.set(S.collapsed, I), this.m(I);
						const T = this.viewModel.lastTemplateData.get(),
							P = S.selections?.map(c.$kL.liftSelection);
						this.viewModel.lastTemplateData.set({ ...T, selections: P }, I);
						const k = this.a.get();
						k && P && k.object.editor.setSelections(P);
					}
					m(S) {
						const I = this.a.get();
						I &&
							this.viewModel.lastTemplateData.set(
								{
									contentHeight: I.object.contentHeight.get(),
									selections: I.object.editor.getSelections() ?? void 0,
								},
								S,
							);
					}
					n() {
						const S = this.a.get();
						S &&
							(0, r.$7d)((I) => {
								this.m(I), S.object.hide(), this.a.set(void 0, I);
							});
					}
					hide() {
						this.b.set(!0, void 0);
					}
					render(S, I, T, P) {
						this.b.set(!1, void 0);
						let k = this.a.get();
						if (!k) {
							(k = this.f.getUnusedObj(new f.$CGc(this.viewModel, this.j))),
								this.a.set(k, void 0);
							const L = this.viewModel.lastTemplateData.get().selections;
							L && k.object.editor.setSelections(L);
						}
						k.object.render(S, T, I, P);
					}
				}
			},
		),
		