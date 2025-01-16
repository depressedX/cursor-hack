define(
			de[1799],
			he([1, 0, 255, 5, 17, 7, 35, 18, 97, 66, 45, 309, 67, 61, 9, 11, 92, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zlc = void 0),
					(e.$Alc = y),
					(E = mt(E));
				const b = 10;
				function s() {
					let $ = "abcdefghijklmnopqrstuvwxyz",
						v = "";
					for (let S = 0; S < 10; S++)
						v += $.charAt(Math.floor(Math.random() * $.length));
					return v;
				}
				let l = class extends t.$9Mb {
					static {
						f = this;
					}
					static {
						this.TitleMenu = new g.$XX("cpp-diff-peek-view/title");
					}
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O) {
						super(
							v,
							{
								showFrame: !0,
								showArrow: !1,
								isResizeable: !0,
								isAccessible: !0,
							},
							L,
						),
							(this.r = S),
							(this.X = I),
							(this.Y = T),
							(this.Z = D),
							(this.ab = M),
							(this.bb = N),
							(this.cb = A),
							(this.db = R),
							(this.eb = O),
							(this.a = v),
							(this.b = P),
							(this.c = k),
							this.create(),
							this.fb(this.b.getColorTheme()),
							this.o.add(this.b.onDidColorThemeChange(this.fb, this)),
							this.o.add(this.ab.onDidChangeActiveGroup(() => this.dispose())),
							this.o.add(this.a.onDidDispose(() => this.dispose())),
							this.o.add(this.a.onDidChangeModel(() => this.dispose())),
							this.o.add(
								this.Z.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.Z.nonPersistentStorage.cppState?.peekViewSuggestion,
									],
									onChange: ({ prevDeps: B, deps: U }) => {
										const z = B?.[0],
											F = U?.[0];
										!z && !F && this.dispose();
									},
								}),
							),
							this.o.add(
								this.Z.onChangeEffectManuallyDisposed({
									deps: [
										() => this.Z.nonPersistentStorage.cppState?.suggestion,
									],
									onChange: ({ prevDeps: B, deps: U }) => {
										U?.[0] && this.dispose();
									},
								}),
							),
							this.gb();
					}
					dispose() {
						this.o.dispose(), super.dispose();
					}
					fb(v) {
						const S = v.getColor(t.$aNb) || m.$UL.transparent;
						this.style({
							arrowColor: S,
							frameColor: S,
							headerBackgroundColor: v.getColor(t.$0Mb) || m.$UL.transparent,
							primaryHeadingColor: v.getColor(t.$$Mb),
							secondaryHeadingColor: v.getColor(t.$_Mb),
						});
					}
					gb() {
						this.x || super.show(w.$iL.fromPositions(this.r), b), (this.x = !0);
					}
					P(v) {
						const S = E.$(".cpp-peek-view-title", {});
						v.appendChild(S),
							(v.style.zIndex = "1000"),
							(v.style.position = "relative"),
							(v.style.padding = "0 8px");
						const I = E.$fhb(S, E.$("div.cpp-peek-view-title-text"));
						(I.textContent = "Cursor Tab Preview"),
							(this.d = S),
							super.P(v),
							this.o.add(
								this.K.actionRunner.onWillRun(() => this.editor.focus()),
							);
						const T = this.db.createMenu(f.TitleMenu, this.eb),
							P = () => {
								const k = [];
								(0, p.$Kyb)(T, void 0, k);
								const L = this.K.getAction(this.K.viewItems.length - 1);
								this.K.clear(),
									this.K.push(k, { label: !1, icon: !0 }),
									L && this.K.push([L], { label: !1, icon: !0 });
							};
						this.o.add(T), this.o.add(T.onDidChange(P)), P();
					}
					T(v) {
						this.m = v;
						const S = this.a.getModel();
						if (!S) return;
						const I = this.cb.createById(S.getLanguageId()),
							T = this.bb.createModel(
								this.X.original,
								I,
								n.URI.parse(`cpp-diff-peek-view-widget-anysphere://${s()}`),
							),
							P = this.cb.createById(T.getLanguageId()),
							k = this.bb.createModel(
								this.X.new,
								P,
								n.URI.parse(`cpp-diff-peek-view-widget-anysphere://${s()}`),
							),
							L = this.editor.getLayoutInfo(),
							D = this.M.createInstance(
								a.$3yb,
								v,
								{
									stickyScroll: { enabled: !1 },
									readOnly: !0,
									renderSideBySide: !1,
									dimension: { width: this.t(L), height: v.clientHeight },
								},
								{
									originalEditor: { isSimpleWidget: !0, contributions: [] },
									modifiedEditor: { isSimpleWidget: !0, contributions: [] },
								},
							);
						D.setModel({ original: T, modified: k }),
							D.waitForDiff().then(() => {
								D.revealFirstDiff();
							});
						const M = new ResizeObserver(() => {
							const N = this.editor.getLayoutInfo();
							D.layout({ width: this.t(N), height: v.clientHeight });
						});
						M.observe(v),
							this.o.add({
								dispose: () => {
									M.disconnect();
								},
							}),
							(this.diffEditor = D);
					}
				};
				(e.$zlc = l),
					(e.$zlc =
						l =
						f =
							Ne(
								[
									j(4, C.$iP),
									j(5, d.$IY),
									j(6, i.$Li),
									j(7, u.$0zb),
									j(8, r.$EY),
									j(9, h.$QO),
									j(10, c.$nM),
									j(11, g.$YX),
									j(12, o.$6j),
								],
								l,
							));
				function y($, v, S, I, T) {
					return T.createInstance(l, $, v, S, I);
				}
			},
		),
		