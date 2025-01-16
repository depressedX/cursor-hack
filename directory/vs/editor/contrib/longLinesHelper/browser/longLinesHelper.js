define(de[2811], he([1, 0, 3, 56, 46, 38]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			class C extends t.$1c {
				static {
					this.ID = "editor.contrib.longLinesHelper";
				}
				static get(m) {
					return m.getContribution(C.ID);
				}
				constructor(m) {
					super(),
						(this.a = m),
						this.D(
							this.a.onMouseDown((r) => {
								const u = this.a.getOption(
									E.EditorOption.stopRenderingLineAfter,
								);
								u >= 0 &&
									r.target.type === i.MouseTargetType.CONTENT_TEXT &&
									r.target.position.column >= u &&
									this.a.updateOptions({ stopRenderingLineAfter: -1 });
							}),
						);
				}
			}
			(0, w.$qtb)(
				C.ID,
				C,
				w.EditorContributionInstantiation.BeforeFirstInteraction,
			);
		}),
		define(
			de[440],
			he([
				1, 0, 267, 127, 6, 94, 27, 3, 56, 46, 17, 98, 64, 251, 4, 8, 43, 41, 7,
				2314,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Szb = void 0),
					(n = mt(n)),
					(f = mt(f));
				let s = class {
					static {
						b = this;
					}
					static {
						this.ID = "editor.contrib.messageController";
					}
					static {
						this.MESSAGE_VISIBLE = new g.$5j(
							"messageVisible",
							!1,
							n.localize(1314, null),
						);
					}
					static get(v) {
						return v.getContribution(b.ID);
					}
					constructor(v, S, I) {
						(this.i = I),
							(this.d = new d.$2c()),
							(this.f = new d.$Zc()),
							(this.h = !1),
							(this.a = v),
							(this.b = b.MESSAGE_VISIBLE.bindTo(S));
					}
					dispose() {
						this.g?.dispose(),
							this.f.dispose(),
							this.d.dispose(),
							this.b.reset();
					}
					isVisible() {
						return this.b.get();
					}
					showMessage(v, S) {
						(0, i.$oib)((0, E.$el)(v) ? v.value : v),
							this.b.set(!0),
							this.d.clear(),
							this.f.clear(),
							(this.g = (0, E.$el)(v)
								? (0, t.$Uib)(v, {
										actionHandler: {
											callback: (T) => {
												this.closeMessage(),
													(0, c.$Rzb)(
														this.i,
														T,
														(0, E.$el)(v) ? v.isTrusted : void 0,
													);
											},
											disposables: this.f,
										},
									})
								: void 0),
							(this.d.value = new y(
								this.a,
								S,
								typeof v == "string" ? v : this.g.element,
							)),
							this.f.add(
								w.Event.debounce(
									this.a.onDidBlurEditorText,
									(T, P) => P,
									0,
								)(() => {
									this.h ||
										(this.d.value &&
											f.$Bgb(f.$Jgb(), this.d.value.getDomNode())) ||
										this.closeMessage();
								}),
							),
							this.f.add(
								this.a.onDidChangeCursorPosition(() => this.closeMessage()),
							),
							this.f.add(this.a.onDidDispose(() => this.closeMessage())),
							this.f.add(this.a.onDidChangeModel(() => this.closeMessage())),
							this.f.add(
								f.$0fb(
									this.d.value.getDomNode(),
									f.$$gb.MOUSE_ENTER,
									() => (this.h = !0),
									!0,
								),
							),
							this.f.add(
								f.$0fb(
									this.d.value.getDomNode(),
									f.$$gb.MOUSE_LEAVE,
									() => (this.h = !1),
									!0,
								),
							);
						let I;
						this.f.add(
							this.a.onMouseMove((T) => {
								T.target.position &&
									(I
										? I.containsPosition(T.target.position) ||
											this.closeMessage()
										: (I = new u.$iL(
												S.lineNumber - 3,
												1,
												T.target.position.lineNumber + 3,
												1,
											)));
							}),
						);
					}
					closeMessage() {
						this.b.reset(),
							this.f.clear(),
							this.d.value && this.f.add(y.fadeOut(this.d.value));
					}
				};
				(e.$Szb = s), (e.$Szb = s = b = Ne([j(1, g.$6j), j(2, o.$7rb)], s));
				const l = r.$htb.bindToContribution(s.get);
				(0, r.$mtb)(
					new l({
						id: "leaveEditorMessage",
						precondition: s.MESSAGE_VISIBLE,
						handler: ($) => $.closeMessage(),
						kbOpts: {
							weight: p.KeybindingWeight.EditorContrib + 30,
							primary: C.KeyCode.Escape,
						},
					}),
				);
				class y {
					static fadeOut(v) {
						const S = () => {
								v.dispose(),
									clearTimeout(I),
									v.getDomNode().removeEventListener("animationend", S);
							},
							I = setTimeout(S, 110);
						return (
							v.getDomNode().addEventListener("animationend", S),
							v.getDomNode().classList.add("fadeOut"),
							{ dispose: S }
						);
					}
					constructor(v, { lineNumber: S, column: I }, T) {
						(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.a = v),
							this.a.revealLinesInCenterIfOutsideViewport(
								S,
								S,
								a.ScrollType.Smooth,
							),
							(this.b = { lineNumber: S, column: I }),
							(this.d = document.createElement("div")),
							this.d.classList.add("monaco-editor-overlaymessage"),
							(this.d.style.marginLeft = "-6px");
						const P = document.createElement("div");
						P.classList.add("anchor", "top"), this.d.appendChild(P);
						const k = document.createElement("div");
						typeof T == "string"
							? (k.classList.add("message"), (k.textContent = T))
							: (T.classList.add("message"), k.appendChild(T)),
							this.d.appendChild(k);
						const L = document.createElement("div");
						L.classList.add("anchor", "below"),
							this.d.appendChild(L),
							this.a.addContentWidget(this),
							this.d.classList.add("fadeIn");
					}
					dispose() {
						this.a.removeContentWidget(this);
					}
					getId() {
						return "messageoverlay";
					}
					getDomNode() {
						return this.d;
					}
					getPosition() {
						return {
							position: this.b,
							preference: [
								m.ContentWidgetPositionPreference.ABOVE,
								m.ContentWidgetPositionPreference.BELOW,
							],
							positionAffinity: h.PositionAffinity.Right,
						};
					}
					afterRender(v) {
						this.d.classList.toggle(
							"below",
							v === m.ContentWidgetPositionPreference.BELOW,
						);
					}
				}
				(0, r.$qtb)(s.ID, s, r.EditorContributionInstantiation.Lazy);
			},
		),
		define(
			de[2812],
			he([1, 0, 94, 3, 46, 38, 2696, 440, 4]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mlc = void 0),
					(m = mt(m));
				class r extends i.$1c {
					static {
						this.ID = "editor.contrib.readOnlyMessageController";
					}
					constructor(a) {
						super(),
							(this.a = a),
							this.D(this.a.onDidAttemptReadOnlyEdit(() => this.b()));
					}
					b() {
						const a = d.$Szb.get(this.a);
						if (a && this.a.hasModel()) {
							let h = this.a.getOptions().get(E.EditorOption.readOnlyMessage);
							h ||
								((0, C.$jlc)(this.a.getModel().uri).ok() &&
									(h = new t.$cl(m.localize(1399, null))),
								this.a.isSimpleWidget
									? (h = new t.$cl(m.localize(1400, null)))
									: (h = new t.$cl(m.localize(1401, null)))),
								a.showMessage(h, this.a.getPosition());
						}
					}
				}
				(e.$mlc = r),
					(0, w.$qtb)(
						r.ID,
						r,
						w.EditorContributionInstantiation.BeforeFirstInteraction,
					);
			},
		),
		define(
			de[1646],
			he([
				1, 0, 24, 33, 29, 27, 46, 38, 48, 17, 104, 71, 1556, 2590, 4, 11, 31,
				43, 69, 42, 28, 9,
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
					(e.$kPb = void 0),
					(e.$lPb = P),
					(t = mt(t)),
					(n = mt(n));
				class $ {
					constructor(L, D) {
						(this.index = L), (this.ranges = D);
					}
					mov(L) {
						const D = this.index + (L ? 1 : -1);
						if (D < 0 || D >= this.ranges.length) return this;
						const M = new $(D, this.ranges);
						return M.ranges[D].equalsRange(this.ranges[this.index])
							? M.mov(L)
							: M;
					}
				}
				let v = class {
					static {
						y = this;
					}
					static {
						this.ID = "editor.contrib.smartSelectController";
					}
					static get(L) {
						return L.getContribution(y.ID);
					}
					constructor(L, D) {
						(this.f = L), (this.g = D), (this.e = !1);
					}
					dispose() {
						this.d?.dispose();
					}
					async run(L) {
						if (!this.f.hasModel()) return;
						const D = this.f.getSelections(),
							M = this.f.getModel();
						if (
							(this.c ||
								(await P(
									this.g.selectionRangeProvider,
									M,
									D.map((A) => A.getPosition()),
									this.f.getOption(d.EditorOption.smartSelect),
									i.CancellationToken.None,
								).then((A) => {
									if (
										!(!t.$Pb(A) || A.length !== D.length) &&
										!(
											!this.f.hasModel() ||
											!t.$yb(this.f.getSelections(), D, (R, O) =>
												R.equalsSelection(O),
											)
										)
									) {
										for (let R = 0; R < A.length; R++)
											(A[R] = A[R].filter(
												(O) =>
													O.containsPosition(D[R].getStartPosition()) &&
													O.containsPosition(D[R].getEndPosition()),
											)),
												A[R].unshift(D[R]);
										(this.c = A.map((R) => new $(0, R))),
											this.d?.dispose(),
											(this.d = this.f.onDidChangeCursorPosition(() => {
												this.e || (this.d?.dispose(), (this.c = void 0));
											}));
									}
								})),
							!this.c)
						)
							return;
						this.c = this.c.map((A) => A.mov(L));
						const N = this.c.map((A) =>
							u.$kL.fromPositions(
								A.ranges[A.index].getStartPosition(),
								A.ranges[A.index].getEndPosition(),
							),
						);
						this.e = !0;
						try {
							this.f.setSelections(N);
						} finally {
							this.e = !1;
						}
					}
				};
				(e.$kPb = v), (e.$kPb = v = y = Ne([j(1, f.$k3)], v));
				class S extends C.$itb {
					constructor(L, D) {
						super(D), (this.d = L);
					}
					async run(L, D) {
						const M = v.get(D);
						M && (await M.run(this.d));
					}
				}
				class I extends S {
					constructor() {
						super(!0, {
							id: "editor.action.smartSelect.expand",
							label: n.localize(1420, null),
							alias: "Expand Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: a.EditorContextKeys.editorTextFocus,
								primary: E.KeyMod.Shift | E.KeyMod.Alt | E.KeyCode.RightArrow,
								mac: {
									primary:
										E.KeyMod.CtrlCmd |
										E.KeyMod.WinCtrl |
										E.KeyMod.Shift |
										E.KeyCode.RightArrow,
									secondary: [
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.RightArrow,
									],
								},
								weight: o.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: g.$XX.MenubarSelectionMenu,
								group: "1_basic",
								title: n.localize(1421, null),
								order: 2,
							},
						});
					}
				}
				p.$fk.registerCommandAlias(
					"editor.action.smartSelect.grow",
					"editor.action.smartSelect.expand",
				);
				class T extends S {
					constructor() {
						super(!1, {
							id: "editor.action.smartSelect.shrink",
							label: n.localize(1422, null),
							alias: "Shrink Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: a.EditorContextKeys.editorTextFocus,
								primary: E.KeyMod.Shift | E.KeyMod.Alt | E.KeyCode.LeftArrow,
								mac: {
									primary:
										E.KeyMod.CtrlCmd |
										E.KeyMod.WinCtrl |
										E.KeyMod.Shift |
										E.KeyCode.LeftArrow,
									secondary: [
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.LeftArrow,
									],
								},
								weight: o.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: g.$XX.MenubarSelectionMenu,
								group: "1_basic",
								title: n.localize(1423, null),
								order: 3,
							},
						});
					}
				}
				(0, C.$qtb)(v.ID, v, C.EditorContributionInstantiation.Lazy),
					(0, C.$ntb)(I),
					(0, C.$ntb)(T);
				async function P(k, L, D, M, N) {
					const A = k.all(L).concat(new c.$jPb(M.selectSubwords));
					A.length === 1 && A.unshift(new h.$RCb());
					const R = [],
						O = [];
					for (const B of A)
						R.push(
							Promise.resolve(B.provideSelectionRanges(L, D, N)).then((U) => {
								if (t.$Pb(U) && U.length === D.length)
									for (let z = 0; z < D.length; z++) {
										O[z] || (O[z] = []);
										for (const F of U[z])
											r.$iL.isIRange(F.range) &&
												r.$iL.containsPosition(F.range, D[z]) &&
												O[z].push(r.$iL.lift(F.range));
									}
							}, w.$5),
						);
					return (
						await Promise.all(R),
						O.map((B) => {
							if (B.length === 0) return [];
							B.sort((x, H) =>
								m.$hL.isBefore(x.getStartPosition(), H.getStartPosition())
									? 1
									: m.$hL.isBefore(
												H.getStartPosition(),
												x.getStartPosition(),
											) ||
											m.$hL.isBefore(x.getEndPosition(), H.getEndPosition())
										? -1
										: m.$hL.isBefore(H.getEndPosition(), x.getEndPosition())
											? 1
											: 0,
							);
							const U = [];
							let z;
							for (const x of B)
								(!z ||
									(r.$iL.containsRange(x, z) && !r.$iL.equalsRange(x, z))) &&
									(U.push(x), (z = x));
							if (!M.selectLeadingAndTrailingWhitespace) return U;
							const F = [U[0]];
							for (let x = 1; x < U.length; x++) {
								const H = U[x - 1],
									q = U[x];
								if (
									q.startLineNumber !== H.startLineNumber ||
									q.endLineNumber !== H.endLineNumber
								) {
									const V = new r.$iL(
										H.startLineNumber,
										L.getLineFirstNonWhitespaceColumn(H.startLineNumber),
										H.endLineNumber,
										L.getLineLastNonWhitespaceColumn(H.endLineNumber),
									);
									V.containsRange(H) &&
										!V.equalsRange(H) &&
										q.containsRange(V) &&
										!q.equalsRange(V) &&
										F.push(V);
									const G = new r.$iL(
										H.startLineNumber,
										1,
										H.endLineNumber,
										L.getLineMaxColumn(H.endLineNumber),
									);
									G.containsRange(H) &&
										!G.equalsRange(V) &&
										q.containsRange(G) &&
										!q.equalsRange(G) &&
										F.push(G);
								}
								F.push(q);
							}
							return F;
						})
					);
				}
				p.$fk.registerCommand(
					"_executeSelectionRangeProvider",
					async function (k, ...L) {
						const [D, M] = L;
						(0, s.$vg)(l.URI.isUri(D));
						const N = k.get(f.$k3).selectionRangeProvider,
							A = await k.get(b.$MO).createModelReference(D);
						try {
							return P(
								N,
								A.object.textEditorModel,
								M,
								{ selectLeadingAndTrailingWhitespace: !0, selectSubwords: !0 },
								i.CancellationToken.None,
							);
						} finally {
							A.dispose();
						}
					},
				);
			},
		),
		