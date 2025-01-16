define(de[2917], he([1, 0, 46, 2916, 1690]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$ntb)(i.$Kjc),
				(0, t.$ntb)(i.$Ojc),
				(0, t.$ntb)(i.$Mjc),
				(0, t.$ntb)(i.$Njc),
				(0, t.$ntb)(i.$Ljc),
				(0, t.$qtb)(
					w.$Jjc.ID,
					w.$Jjc,
					t.EditorContributionInstantiation.Eventually,
				);
		}),
		define(
			de[1220],
			he([1, 0, 7, 15, 14, 3, 37, 26, 56, 38, 17, 64, 122, 5, 2311]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pzb = void 0),
					(t = mt(t));
				const n = h.$eY.register({
					description: "inline-progress-widget",
					stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					showIfCollapsed: !0,
					after: {
						content: C.$ig,
						inlineClassName: "inline-editor-progress-decoration",
						inlineClassNameAffectsLetterSpacing: !0,
					},
				});
				class g extends E.$1c {
					static {
						this.a = "editor.widget.inlineProgressWidget";
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.j = y),
							(this.allowEditorOverflow = !1),
							(this.suppressMouseDown = !0),
							this.m(l),
							this.g.addContentWidget(this),
							this.g.layoutContentWidget(this);
					}
					m(f) {
						(this.b = t.$(".inline-progress-widget")),
							(this.b.role = "button"),
							(this.b.title = f);
						const b = t.$("span.icon");
						this.b.append(b),
							b.classList.add(
								...d.ThemeIcon.asClassNameArray(w.$ak.loading),
								"codicon-modifier-spin",
							);
						const s = () => {
							const l = this.g.getOption(r.EditorOption.lineHeight);
							(this.b.style.height = `${l}px`),
								(this.b.style.width = `${Math.ceil(0.8 * l)}px`);
						};
						s(),
							this.D(
								this.g.onDidChangeConfiguration((l) => {
									(l.hasChanged(r.EditorOption.fontSize) ||
										l.hasChanged(r.EditorOption.lineHeight)) &&
										s();
								}),
							),
							this.D(
								t.$0fb(this.b, t.$$gb.CLICK, (l) => {
									this.j.cancel();
								}),
							);
					}
					getId() {
						return g.a + "." + this.f;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							position: {
								lineNumber: this.h.startLineNumber,
								column: this.h.startColumn,
							},
							preference: [m.ContentWidgetPositionPreference.EXACT],
						};
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this);
					}
				}
				let p = class extends E.$1c {
					constructor(f, b, s) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.a = 500),
							(this.b = this.D(new E.$2c())),
							(this.g = this.D(new E.$2c())),
							(this.h = 0),
							(this.f = b.createDecorationsCollection());
					}
					dispose() {
						super.dispose(), this.f.clear();
					}
					async showWhile(f, b, s, l, y) {
						const $ = this.h++;
						(this.j = $),
							this.r(),
							(this.b.value = (0, i.$Oh)(() => {
								const v = u.$iL.fromPositions(f);
								this.f.set([{ range: v, options: n }]).length > 0 &&
									(this.g.value = this.q.createInstance(
										g,
										this.m,
										this.n,
										v,
										b,
										l,
									));
							}, y ?? this.a));
						try {
							return await s;
						} finally {
							this.j === $ && (this.r(), (this.j = void 0));
						}
					}
					r() {
						this.b.clear(), this.f.clear(), this.g.clear();
					}
				};
				(e.$Pzb = p), (e.$Pzb = p = Ne([j(2, c.$Li)], p));
			},
		),
		define(
			de[609],
			he([
				1, 0, 7, 24, 15, 33, 489, 318, 3, 266, 12, 47, 942, 1197, 199, 38, 17,
				98, 74, 69, 1213, 1181, 439, 1220, 440, 4, 121, 8, 5, 84, 63, 1632, 45,
				308, 29,
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
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
			) {
				"use strict";
				var R;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zAb = e.$yAb = e.$xAb = void 0),
					(u = mt(u)),
					(e.$xAb = "editor.changePasteType"),
					(e.$yAb = new T.$5j(
						"pasteWidgetVisible",
						!1,
						(0, S.localize)(982, null),
					));
				const O = "application/vnd.code.copyMetadata";
				let B = class extends m.$1c {
					static {
						R = this;
					}
					static {
						this.ID = "editor.contrib.copyPasteActionController";
					}
					static get(z) {
						return z.getContribution(R.ID);
					}
					constructor(z, F, x, H, q, V, G, K, J) {
						super(),
							(this.j = x),
							(this.m = H),
							(this.n = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.b = z);
						const W = z.getContainerDomNode();
						this.D((0, t.$0fb)(W, "copy", (X) => this.w(X))),
							this.D((0, t.$0fb)(W, "cut", (X) => this.w(X))),
							this.D((0, t.$0fb)(W, "paste", (X) => this.y(X), !0)),
							(this.g = this.D(new $.$Pzb("pasteIntoEditor", z, F))),
							(this.h = this.D(
								F.createInstance(D.$Tzb, "pasteIntoEditor", z, e.$yAb, {
									id: e.$xAb,
									label: (0, S.localize)(983, null),
								}),
							));
					}
					changePasteType() {
						this.h.tryShowSelector();
					}
					pasteAs(z) {
						this.b.focus();
						try {
							(this.f = { preferred: z }), (0, t.$Ngb)().execCommand("paste");
						} finally {
							this.f = void 0;
						}
					}
					clearWidgets() {
						this.h.clear();
					}
					u() {
						return this.b.getOption(g.EditorOption.pasteAs).enabled;
					}
					async finishedPaste() {
						await this.c;
					}
					w(z) {
						if (
							(this.b.isChatCodeblock === !0
								? this.t.registerEvent("chat.copy.codeblock.manual")
								: this.b.isSimpleWidget === !1 &&
									this.t.registerEvent("editor.copy.non_vim_mode"),
							!this.b.hasTextFocus() ||
								(this.m.clearInternalState?.(), !z.clipboardData || !this.u()))
						)
							return;
						const F = this.b.getModel(),
							x = this.b.getSelections();
						if (!F || !x?.length) return;
						const H = this.b.getOption(g.EditorOption.emptySelectionClipboard);
						let q = x;
						const V = x.length === 1 && x[0].isEmpty();
						if (V) {
							if (!H) return;
							q = [
								new p.$iL(
									q[0].startLineNumber,
									1,
									q[0].startLineNumber,
									1 + F.getLineLength(q[0].startLineNumber),
								),
							];
						}
						const G = this.b._getViewModel()?.getPlainTextToCopy(x, H, u.$l),
							K = Array.isArray(G) ? G : null;
						this.s.setNonPersistentStorage({
							lastCopy: {
								text: Array.isArray(G)
									? G.join(`
`)
									: (G ?? ""),
								range: {
									selectionStartLineNumber: q[0].startLineNumber,
									selectionStartColumn: q[0].startColumn,
									positionLineNumber: q[0].endLineNumber,
									positionColumn: q[0].endColumn,
								},
								languageId:
									F?.getLanguageIdAtPosition(
										q[0].startLineNumber,
										q[0].startColumn,
									) ?? "",
								uri: F.uri,
							},
						});
						const J = { multicursorText: K, pasteOnNewLine: V, mode: null },
							W = this.n.documentPasteEditProvider
								.ordered(F)
								.filter((ee) => !!ee.prepareDocumentPaste);
						if (!W.length) {
							this.G(z.clipboardData, { defaultPastePayload: J });
							return;
						}
						const X = (0, c.$pzb)(z.clipboardData),
							Y = W.flatMap((ee) => ee.copyMimeTypes ?? []),
							ie = (0, a.$9g)();
						this.G(z.clipboardData, {
							id: ie,
							providerCopyMimeTypes: Y,
							defaultPastePayload: J,
						});
						const ne = (0, w.$zh)(async (ee) => {
							const _ = (0, i.$Lb)(
								await Promise.all(
									W.map(async (te) => {
										try {
											return await te.prepareDocumentPaste(F, q, X, ee);
										} catch (Q) {
											console.error(Q);
											return;
										}
									}),
								),
							);
							_.reverse();
							for (const te of _) for (const [Q, Z] of te) X.replace(Q, Z);
							return X;
						});
						R.a?.dataTransferPromise.cancel(),
							(R.a = { handle: ie, dataTransferPromise: ne });
					}
					async y(z) {
						if (!z.clipboardData || !this.b.hasTextFocus()) return;
						v.$Szb.get(this.b)?.closeMessage(),
							this.c?.cancel(),
							(this.c = void 0);
						const F = this.b.getModel(),
							x = this.b.getSelections();
						if (
							!x?.length ||
							!F ||
							this.b.getOption(g.EditorOption.readOnly) ||
							(!this.u() && !this.f)
						)
							return;
						const H = this.H(z),
							q = (0, c.$qzb)(z.clipboardData);
						q.delete(O);
						const V = [
								...z.clipboardData.types,
								...(H?.providerCopyMimeTypes ?? []),
								r.$EK.uriList,
							],
							G = this.n.documentPasteEditProvider.ordered(F).filter((K) => {
								const J = this.f?.preferred;
								return J && K.providedPasteEditKinds && !this.N(K, J)
									? !1
									: K.pasteMimeTypes?.some((W) => (0, C.$YL)(W, V));
							});
						if (!G.length) {
							this.f?.preferred && this.z(x, this.f.preferred);
							return;
						}
						z.preventDefault(),
							z.stopImmediatePropagation(),
							!this.b.isSimpleWidget &&
								!this.b.isChatCodeblock &&
								this.t.registerEvent("editor.paste"),
							this.f
								? this.F(this.f.preferred, G, x, q, H)
								: this.C(G, x, q, H, z);
					}
					z(z, F) {
						v.$Szb
							.get(this.b)
							?.showMessage(
								(0, S.localize)(
									984,
									null,
									F instanceof d.$1L ? F.value : F.providerId,
								),
								z[0].getStartPosition(),
							);
					}
					C(z, F, x, H, q) {
						const V = this.b;
						if (!V.hasModel()) return;
						const G = new y.$Nzb(
								V,
								y.CodeEditorStateFlag.Value | y.CodeEditorStateFlag.Selection,
								void 0,
							),
							K = (0, w.$zh)(async (J) => {
								const W = this.b;
								if (!W.hasModel()) return;
								const X = W.getModel(),
									Y = new m.$Zc(),
									ie = Y.add(new E.$Ce(J));
								Y.add(G.token.onCancellationRequested(() => ie.cancel()));
								const ne = ie.token;
								try {
									if ((await this.I(x, H, ne), ne.isCancellationRequested))
										return;
									const ee = z.filter((Q) => this.M(Q, x));
									if (
										!ee.length ||
										(ee.length === 1 && ee[0] instanceof s.$vzb)
									)
										return this.L(x, H, ne, q);
									const _ = {
											triggerKind: f.DocumentPasteTriggerKind.Automatic,
										},
										te = await this.J(ee, x, X, F, _, ne);
									if ((Y.add(te), ne.isCancellationRequested)) return;
									if (
										te.edits.length === 1 &&
										te.edits[0].provider instanceof s.$vzb
									)
										return this.L(x, H, ne, q);
									if (te.edits.length) {
										const Q =
											W.getOption(g.EditorOption.pasteAs).showPasteSelector ===
											"afterPaste";
										return this.h.applyEditAndShowIfNeeded(
											F,
											{ activeEditIndex: 0, allEdits: te.edits },
											Q,
											(Z, se) =>
												new Promise((re, le) => {
													(async () => {
														try {
															const oe = Z.provider.resolveDocumentPasteEdit?.(
																	Z,
																	se,
																),
																ae = new w.$0h(),
																pe =
																	oe &&
																	(await this.g.showWhile(
																		F[0].getEndPosition(),
																		(0, S.localize)(985, null),
																		Promise.race([ae.p, oe]),
																		{
																			cancel: () => (
																				ae.cancel(), le(new A.$9())
																			),
																		},
																		0,
																	));
															return (
																pe && (Z.additionalEdit = pe.additionalEdit),
																re(Z)
															);
														} catch (oe) {
															return le(oe);
														}
													})();
												}),
											ne,
										);
									}
									await this.L(x, H, ne, q);
								} finally {
									Y.dispose(), this.c === K && (this.c = void 0);
								}
							});
						this.g
							.showWhile(F[0].getEndPosition(), (0, S.localize)(986, null), K, {
								cancel: async () => {
									try {
										if ((K.cancel(), G.token.isCancellationRequested)) return;
										await this.L(x, H, G.token, q);
									} finally {
										G.dispose();
									}
								},
							})
							.then(() => {
								G.dispose();
							}),
							(this.c = K);
					}
					F(z, F, x, H, q) {
						const V = (0, w.$zh)(async (G) => {
							const K = this.b;
							if (!K.hasModel()) return;
							const J = K.getModel(),
								W = new m.$Zc(),
								X = W.add(
									new y.$Nzb(
										K,
										y.CodeEditorStateFlag.Value |
											y.CodeEditorStateFlag.Selection,
										void 0,
										G,
									),
								);
							try {
								if (
									(await this.I(H, q, X.token), X.token.isCancellationRequested)
								)
									return;
								let Y = F.filter((te) => this.M(te, H, z));
								z && (Y = Y.filter((te) => this.N(te, z)));
								const ie = {
									triggerKind: f.DocumentPasteTriggerKind.PasteAs,
									only: z && z instanceof d.$1L ? z : void 0,
								};
								let ne = W.add(await this.J(Y, H, J, x, ie, X.token));
								if (X.token.isCancellationRequested) return;
								if (
									(z &&
										(ne = {
											edits: ne.edits.filter((te) =>
												z instanceof d.$1L
													? z.contains(te.kind)
													: z.providerId === te.provider.id,
											),
											dispose: ne.dispose,
										}),
									!ne.edits.length)
								) {
									ie.only && this.z(x, ie.only);
									return;
								}
								let ee;
								if (
									(z
										? (ee = ne.edits.at(0))
										: (ee = (
												await this.q.pick(
													ne.edits.map((Q) => ({
														label: Q.title,
														description: Q.kind?.value,
														edit: Q,
													})),
													{ placeHolder: (0, S.localize)(987, null) },
												)
											)?.edit),
									!ee)
								)
									return;
								const _ = (0, l.$Jzb)(J.uri, x, ee);
								await this.j.apply(_, { editor: this.b });
							} finally {
								W.dispose(), this.c === V && (this.c = void 0);
							}
						});
						this.r.withProgress(
							{
								location: k.ProgressLocation.Window,
								title: (0, S.localize)(988, null),
							},
							() => V,
						);
					}
					G(z, F) {
						z.setData(O, JSON.stringify(F));
					}
					H(z) {
						if (!z.clipboardData) return;
						const F = z.clipboardData.getData(O);
						if (F)
							try {
								return JSON.parse(F);
							} catch {
								return;
							}
						const [x, H] = h.$8ub.getTextData(z.clipboardData);
						if (H)
							return {
								defaultPastePayload: {
									mode: H.mode,
									multicursorText: H.multicursorText ?? null,
									pasteOnNewLine: !!H.isFromEmptySelection,
								},
							};
					}
					async I(z, F, x) {
						if (F?.id && R.a?.handle === F.id) {
							const H = await R.a.dataTransferPromise;
							if (x.isCancellationRequested) return;
							for (const [q, V] of H) z.replace(q, V);
						}
						if (!z.has(r.$EK.uriList)) {
							const H = await this.m.readResources();
							if (x.isCancellationRequested) return;
							H.length && z.append(r.$EK.uriList, (0, C.$VL)(C.$ZL.create(H)));
						}
					}
					async J(z, F, x, H, q, V) {
						const G = new m.$Zc(),
							K = await (0, w.$Ah)(
								Promise.all(
									z.map(async (W) => {
										try {
											const X = await W.provideDocumentPasteEdits?.(
												x,
												H,
												F,
												q,
												V,
											);
											return (
												X && G.add(X),
												X?.edits?.map((Y) => ({ ...Y, provider: W }))
											);
										} catch (X) {
											(0, A.$8)(X) || console.error(X);
											return;
										}
									}),
								),
								V,
							),
							J = (0, i.$Lb)(K ?? [])
								.flat()
								.filter((W) => !q.only || q.only.contains(W.kind));
						return { edits: (0, l.$Kzb)(J), dispose: () => G.dispose() };
					}
					async L(z, F, x, H) {
						const V =
							(await (z.get(r.$EK.text) ?? z.get("text"))?.asString()) ?? "";
						if (x.isCancellationRequested) return;
						const G = {
							clipboardEvent: H,
							text: V,
							pasteOnNewLine: F?.defaultPastePayload.pasteOnNewLine ?? !1,
							multicursorText: F?.defaultPastePayload.multicursorText ?? null,
							mode: null,
						};
						this.b.trigger("keyboard", o.Handler.Paste, G);
					}
					M(z, F, x) {
						return z.pasteMimeTypes?.some((H) => F.matches(H))
							? !x || this.N(z, x)
							: !1;
					}
					N(z, F) {
						return F instanceof d.$1L
							? z.providedPasteEditKinds
								? z.providedPasteEditKinds.some((x) => F.contains(x))
								: !0
							: z.id === F.providerId;
					}
				};
				(e.$zAb = B),
					(e.$zAb =
						B =
						R =
							Ne(
								[
									j(1, P.$Li),
									j(2, n.$rzb),
									j(3, I.$Vxb),
									j(4, b.$k3),
									j(5, L.$DJ),
									j(6, k.$8N),
									j(7, M.$0zb),
									j(8, N.$5X),
								],
								B,
							));
			},
		),
		define(
			de[787],
			he([
				1, 0, 139, 7, 27, 12, 942, 46, 65, 38, 98, 71, 609, 4, 11, 121, 8, 43,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CAb = e.$BAb = e.$AAb = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(c = mt(c));
				const f = "9_cutcopypaste",
					b = E.$p || document.queryCommandSupported("cut"),
					s = E.$p || document.queryCommandSupported("copy"),
					l =
						typeof navigator.clipboard > "u" || t.$Ofb
							? document.queryCommandSupported("paste")
							: !0;
				function y(S) {
					return S.register(), S;
				}
				(e.$AAb = b
					? y(
							new d.$ftb({
								id: "editor.action.clipboardCutAction",
								precondition: void 0,
								kbOpts: E.$p
									? {
											primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyX,
											win: {
												primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyX,
												secondary: [w.KeyMod.Shift | w.KeyCode.Delete],
											},
											weight: o.KeybindingWeight.EditorContrib,
										}
									: void 0,
								menuOpts: [
									{
										menuId: n.$XX.MenubarEditMenu,
										group: "2_ccp",
										title: c.localize(880, null),
										order: 1,
									},
									{
										menuId: n.$XX.EditorContext,
										group: f,
										title: c.localize(881, null),
										when: a.EditorContextKeys.writable,
										order: 1,
									},
									{
										menuId: n.$XX.CommandPalette,
										group: "",
										title: c.localize(882, null),
										order: 1,
									},
									{
										menuId: n.$XX.SimpleEditorContext,
										group: f,
										title: c.localize(883, null),
										when: a.EditorContextKeys.writable,
										order: 1,
									},
								],
							}),
						)
					: void 0),
					(e.$BAb = s
						? y(
								new d.$ftb({
									id: "editor.action.clipboardCopyAction",
									precondition: void 0,
									kbOpts: E.$p
										? {
												primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyC,
												win: {
													primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyC,
													secondary: [w.KeyMod.CtrlCmd | w.KeyCode.Insert],
												},
												weight: o.KeybindingWeight.EditorContrib,
											}
										: void 0,
									menuOpts: [
										{
											menuId: n.$XX.MenubarEditMenu,
											group: "2_ccp",
											title: c.localize(884, null),
											order: 2,
										},
										{
											menuId: n.$XX.EditorContext,
											group: f,
											title: c.localize(885, null),
											order: 2,
										},
										{
											menuId: n.$XX.CommandPalette,
											group: "",
											title: c.localize(886, null),
											order: 1,
										},
										{
											menuId: n.$XX.SimpleEditorContext,
											group: f,
											title: c.localize(887, null),
											order: 2,
										},
									],
								}),
							)
						: void 0),
					n.$ZX.appendMenuItem(n.$XX.MenubarEditMenu, {
						submenu: n.$XX.MenubarCopy,
						title: c.localize2(893, "Copy As"),
						group: "2_ccp",
						order: 3,
					}),
					n.$ZX.appendMenuItem(n.$XX.EditorContext, {
						submenu: n.$XX.EditorContextCopy,
						title: c.localize2(894, "Copy As"),
						group: f,
						order: 3,
					}),
					n.$ZX.appendMenuItem(n.$XX.EditorContext, {
						submenu: n.$XX.EditorContextShare,
						title: c.localize2(895, "Share"),
						group: "11_share",
						order: -1,
						when: p.$Kj.and(
							p.$Kj.notEquals("resourceScheme", "output"),
							a.EditorContextKeys.editorTextFocus,
						),
					}),
					n.$ZX.appendMenuItem(n.$XX.ExplorerContext, {
						submenu: n.$XX.ExplorerContextShare,
						title: c.localize2(896, "Share"),
						group: "11_share",
						order: -1,
					}),
					(e.$CAb = l
						? y(
								new d.$ftb({
									id: "editor.action.clipboardPasteAction",
									precondition: void 0,
									kbOpts: E.$p
										? {
												primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
												win: {
													primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
													secondary: [w.KeyMod.Shift | w.KeyCode.Insert],
												},
												linux: {
													primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
													secondary: [w.KeyMod.Shift | w.KeyCode.Insert],
												},
												weight: o.KeybindingWeight.EditorContrib,
											}
										: void 0,
									menuOpts: [
										{
											menuId: n.$XX.MenubarEditMenu,
											group: "2_ccp",
											title: c.localize(888, null),
											order: 4,
										},
										{
											menuId: n.$XX.EditorContext,
											group: f,
											title: c.localize(889, null),
											when: a.EditorContextKeys.writable,
											order: 4,
										},
										{
											menuId: n.$XX.CommandPalette,
											group: "",
											title: c.localize(890, null),
											order: 1,
										},
										{
											menuId: n.$XX.SimpleEditorContext,
											group: f,
											title: c.localize(891, null),
											when: a.EditorContextKeys.writable,
											order: 4,
										},
									],
								}),
							)
						: void 0);
				class $ extends d.$itb {
					constructor() {
						super({
							id: "editor.action.clipboardCopyWithSyntaxHighlightingAction",
							label: c.localize(892, null),
							alias: "Copy With Syntax Highlighting",
							precondition: void 0,
							kbOpts: {
								kbExpr: a.EditorContextKeys.textInputFocus,
								primary: 0,
								weight: o.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(I, T) {
						!T.hasModel() ||
							(!T.getOption(r.EditorOption.emptySelectionClipboard) &&
								T.getSelection().isEmpty()) ||
							((C.$5ub.forceCopyWithSyntaxHighlighting = !0),
							T.focus(),
							T.getContainerDomNode().ownerDocument.execCommand("copy"),
							(C.$5ub.forceCopyWithSyntaxHighlighting = !1));
					}
				}
				function v(S, I) {
					S &&
						(S.addImplementation(1e4, "code-editor", (T, P) => {
							const k = T.get(m.$dtb).getFocusedCodeEditor();
							if (k && k.hasTextFocus()) {
								const L = k.getOption(r.EditorOption.emptySelectionClipboard),
									D = k.getSelection();
								return (
									(D && D.isEmpty() && !L) ||
										k.getContainerDomNode().ownerDocument.execCommand(I),
									!0
								);
							}
							return !1;
						}),
						S.addImplementation(
							0,
							"generic-dom",
							(T, P) => ((0, i.$Ngb)().execCommand(I), !0),
						));
				}
				v(e.$AAb, "cut"),
					v(e.$BAb, "copy"),
					e.$CAb &&
						(e.$CAb.addImplementation(1e4, "code-editor", (S, I) => {
							const T = S.get(m.$dtb),
								P = S.get(g.$Vxb),
								k = T.getFocusedCodeEditor();
							return k && k.hasTextFocus()
								? k.getContainerDomNode().ownerDocument.execCommand("paste")
									? (h.$zAb.get(k)?.finishedPaste() ?? Promise.resolve())
									: E.$r
										? (async () => {
												const D = await P.readText();
												if (D !== "") {
													const M = C.$6ub.INSTANCE.get(D);
													let N = !1,
														A = null,
														R = null;
													M &&
														((N =
															k.getOption(
																r.EditorOption.emptySelectionClipboard,
															) && !!M.isFromEmptySelection),
														(A =
															typeof M.multicursorText < "u"
																? M.multicursorText
																: null),
														(R = M.mode)),
														k.trigger("keyboard", u.Handler.Paste, {
															text: D,
															pasteOnNewLine: N,
															multicursorText: A,
															mode: R,
														});
												}
											})()
										: !0
								: !1;
						}),
						e.$CAb.addImplementation(
							0,
							"generic-dom",
							(S, I) => ((0, i.$Ngb)().execCommand("paste"), !0),
						)),
					s && (0, d.$ntb)($);
			},
		),
		define(
			de[2918],
			he([1, 0, 318, 27, 46, 71, 588, 609, 1213, 4, 43]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(r = mt(r)),
					(0, w.$qtb)(
						d.$zAb.ID,
						d.$zAb,
						w.EditorContributionInstantiation.Eager,
					),
					(0, C.$SBb)(m.$xzb),
					(0, w.$mtb)(
						new (class extends w.$htb {
							constructor() {
								super({
									id: d.$xAb,
									precondition: d.$yAb,
									kbOpts: {
										weight: u.KeybindingWeight.EditorContrib,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.Period,
									},
								});
							}
							runEditorCommand(a, h) {
								return d.$zAb.get(h)?.changePasteType();
							}
						})(),
					),
					(0, w.$mtb)(
						new (class extends w.$htb {
							constructor() {
								super({
									id: "editor.hidePasteWidget",
									precondition: d.$yAb,
									kbOpts: {
										weight: u.KeybindingWeight.EditorContrib,
										primary: i.KeyCode.Escape,
									},
								});
							}
							runEditorCommand(a, h) {
								d.$zAb.get(h)?.clearWidgets();
							}
						})(),
					),
					(0, w.$ntb)(
						class La extends w.$itb {
							static {
								this.d = {
									type: "object",
									properties: {
										kind: {
											type: "string",
											description: r.localize(979, null),
										},
									},
								};
							}
							constructor() {
								super({
									id: "editor.action.pasteAs",
									label: r.localize(980, null),
									alias: "Paste As...",
									precondition: E.EditorContextKeys.writable,
									metadata: {
										description: "Paste as",
										args: [{ name: "args", schema: La.d }],
									},
								});
							}
							run(h, c, n) {
								let g = typeof n?.kind == "string" ? n.kind : void 0;
								return (
									!g && n && (g = typeof n.id == "string" ? n.id : void 0),
									d.$zAb.get(c)?.pasteAs(g ? new t.$1L(g) : void 0)
								);
							}
						},
					),
					(0, w.$ntb)(
						class extends w.$itb {
							constructor() {
								super({
									id: "editor.action.pasteAsText",
									label: r.localize(981, null),
									alias: "Paste as Text",
									precondition: E.EditorContextKeys.writable,
								});
							}
							run(a, h) {
								return d.$zAb.get(h)?.pasteAs({ providerId: m.$vzb.id });
							}
						},
					);
			},
		),
		define(
			de[962],
			he([
				1, 0, 24, 15, 489, 318, 3, 1197, 38, 17, 69, 749, 764, 439, 1220, 4, 10,
				8, 347, 5, 1181, 1632,
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
					(e.$g3b = e.$f3b = e.$e3b = e.$d3b = void 0),
					(e.$d3b = "editor.experimental.dropIntoEditor.defaultProvider"),
					(e.$e3b = "editor.changeDropType"),
					(e.$f3b = new o.$5j(
						"dropWidgetVisible",
						!1,
						(0, g.localize)(998, null),
					));
				let $ = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.ID = "editor.contrib.dropIntoEditorController";
					}
					static get(S) {
						return S.getContribution(y.ID);
					}
					constructor(S, I, T, P, k) {
						super(),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.f = f.$ozb.getInstance()),
							(this.b = this.D(I.createInstance(n.$Pzb, "dropIntoEditor", S))),
							(this.c = this.D(
								I.createInstance(l.$Tzb, "dropIntoEditor", S, e.$f3b, {
									id: e.$e3b,
									label: (0, g.localize)(999, null),
								}),
							)),
							this.D(S.onDropIntoEditor((L) => this.m(S, L.position, L.event)));
					}
					clearWidgets() {
						this.c.clear();
					}
					changeDropType() {
						this.c.tryShowSelector();
					}
					async m(S, I, T) {
						if (!T.dataTransfer || !S.hasModel()) return;
						this.a?.cancel(), S.focus(), S.setPosition(I);
						const P = (0, i.$zh)(async (k) => {
							const L = new C.$Zc(),
								D = L.add(
									new c.$Nzb(S, c.CodeEditorStateFlag.Value, void 0, k),
								);
							try {
								const M = await this.r(T);
								if (M.size === 0 || D.token.isCancellationRequested) return;
								const N = S.getModel();
								if (!N) return;
								const A = this.h.documentDropEditProvider
										.ordered(N)
										.filter((O) =>
											O.dropMimeTypes
												? O.dropMimeTypes.some((B) => M.matches(B))
												: !0,
										),
									R = L.add(await this.n(A, N, I, M, D));
								if (D.token.isCancellationRequested) return;
								if (R.edits.length) {
									const O = this.q(N, R.edits),
										B =
											S.getOption(m.EditorOption.dropIntoEditor)
												.showDropSelector === "afterDrop";
									await this.c.applyEditAndShowIfNeeded(
										[r.$iL.fromPositions(I)],
										{ activeEditIndex: O, allEdits: R.edits },
										B,
										async (U) => U,
										k,
									);
								}
							} finally {
								L.dispose(), this.a === P && (this.a = void 0);
							}
						});
						this.b.showWhile(I, (0, g.localize)(1e3, null), P, {
							cancel: () => P.cancel(),
						}),
							(this.a = P);
					}
					async n(S, I, T, P, k) {
						const L = new C.$Zc(),
							D = await (0, i.$Ah)(
								Promise.all(
									S.map(async (N) => {
										try {
											const A = await N.provideDocumentDropEdits(
												I,
												T,
												P,
												k.token,
											);
											return (
												A && L.add(A),
												A?.edits.map((R) => ({ ...R, providerId: N.id }))
											);
										} catch (A) {
											console.error(A);
										}
									}),
								),
								k.token,
							),
							M = (0, t.$Lb)(D ?? []).flat();
						return { edits: (0, s.$Kzb)(M), dispose: () => L.dispose() };
					}
					q(S, I) {
						const T = this.g.getValue(e.$d3b, { resource: S.uri });
						for (const [P, k] of Object.entries(T)) {
							const L = new E.$1L(k),
								D = I.findIndex(
									(M) =>
										L.value === M.providerId &&
										M.handledMimeType &&
										(0, w.$YL)(P, [M.handledMimeType]),
								);
							if (D >= 0) return D;
						}
						return 0;
					}
					async r(S) {
						if (!S.dataTransfer) return new w.$XL();
						const I = (0, d.$qzb)(S.dataTransfer);
						if (this.f.hasData(a.$b3b.prototype)) {
							const T = this.f.getData(a.$b3b.prototype);
							if (Array.isArray(T))
								for (const P of T) {
									const k = await this.j.removeDragOperationTransfer(
										P.identifier,
									);
									if (k) for (const [L, D] of k) I.replace(L, D);
								}
						}
						return I;
					}
				};
				(e.$g3b = $),
					(e.$g3b =
						$ =
						y =
							Ne([j(1, b.$Li), j(2, p.$gj), j(3, u.$k3), j(4, h.$c3b)], $));
			},
		),
		define(
			de[2919],
			he([1, 0, 27, 46, 602, 588, 1213, 4, 81, 43, 30, 962]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(d = mt(d)),
					(0, i.$qtb)(
						a.$g3b.ID,
						a.$g3b,
						i.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, E.$SBb)(C.$wzb),
					(0, i.$mtb)(
						new (class extends i.$htb {
							constructor() {
								super({
									id: a.$e3b,
									precondition: a.$f3b,
									kbOpts: {
										weight: r.KeybindingWeight.EditorContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Period,
									},
								});
							}
							runEditorCommand(h, c, n) {
								a.$g3b.get(c)?.changeDropType();
							}
						})(),
					),
					(0, i.$mtb)(
						new (class extends i.$htb {
							constructor() {
								super({
									id: "editor.hideDropWidget",
									precondition: a.$f3b,
									kbOpts: {
										weight: r.KeybindingWeight.EditorContrib,
										primary: t.KeyCode.Escape,
									},
								});
							}
							runEditorCommand(h, c, n) {
								a.$g3b.get(c)?.clearWidgets();
							}
						})(),
					),
					u.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...w.$DAb,
							properties: {
								[a.$d3b]: {
									type: "object",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: d.localize(997, null),
									default: {},
									additionalProperties: { type: "string" },
								},
							},
						});
			},
		),
		define(
			de[2920],
			he([
				1, 0, 24, 15, 33, 97, 29, 6, 27, 3, 37, 9, 46, 65, 38, 48, 17, 71, 64,
				122, 152, 4, 8, 43, 69, 51, 391, 162, 2312,
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
				T,
			) {
				"use strict";
				var P;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ijc = e.$hjc = e.$gjc = e.$fjc = void 0),
					(t = mt(t)),
					(u = mt(u)),
					(l = mt(l)),
					(e.$fjc = new y.$5j("LinkedEditingInputVisible", !1));
				const k = "linked-editing-decoration";
				let L = class extends r.$1c {
					static {
						P = this;
					}
					static {
						this.ID = "editor.contrib.linkedEditing";
					}
					static {
						this.a = b.$eY.register({
							description: "linked-editing",
							stickiness: f.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							className: k,
						});
					}
					static get(R) {
						return R.getContribution(P.ID);
					}
					constructor(R, O, B, U, z) {
						super(),
							(this.G = U),
							(this.w = 0),
							(this.F = this.D(new r.$Zc())),
							(this.f = R),
							(this.g = B.linkedEditingRangeProvider),
							(this.h = !1),
							(this.j = e.$fjc.bindTo(O)),
							(this.m = z.for(this.g, "Linked Editing", { max: 200 })),
							(this.u = this.f.createDecorationsCollection()),
							(this.y = null),
							(this.z = null),
							(this.C = !1),
							(this.F = this.D(new r.$Zc())),
							(this.n = null),
							(this.q = null),
							(this.r = null),
							(this.s = null),
							(this.t = null),
							this.D(this.f.onDidChangeModel(() => this.H(!0))),
							this.D(
								this.f.onDidChangeConfiguration((F) => {
									(F.hasChanged(n.EditorOption.linkedEditing) ||
										F.hasChanged(n.EditorOption.renameOnType)) &&
										this.H(!1);
								}),
							),
							this.D(this.g.onDidChange(() => this.H(!1))),
							this.D(this.f.onDidChangeModelLanguage(() => this.H(!0))),
							this.H(!0);
					}
					H(R) {
						const O = this.f.getModel(),
							B =
								O !== null &&
								(this.f.getOption(n.EditorOption.linkedEditing) ||
									this.f.getOption(n.EditorOption.renameOnType)) &&
								this.g.has(O);
						if (
							(B === this.h && !R) ||
							((this.h = B),
							this.clearRanges(),
							this.F.clear(),
							!B || O === null)
						)
							return;
						this.F.add(
							d.Event.runAndSubscribe(
								O.onDidChangeLanguageConfiguration,
								() => {
									this.y = this.G.getLanguageConfiguration(
										O.getLanguageId(),
									).getWordDefinition();
								},
							),
						);
						const U = new i.$Jh(this.m.get(O)),
							z = () => {
								this.n = U.trigger(
									() => this.updateRanges(),
									this.b ?? this.m.get(O),
								);
							},
							F = new i.$Jh(0),
							x = (H) => {
								this.q = F.trigger(() => this.I(H));
							};
						this.F.add(
							this.f.onDidChangeCursorPosition(() => {
								z();
							}),
						),
							this.F.add(
								this.f.onDidChangeModelContent((H) => {
									if (!this.C && this.u.length > 0) {
										const q = this.u.getRange(0);
										if (
											q &&
											H.changes.every((V) => q.intersectRanges(V.range))
										) {
											x(this.w);
											return;
										}
									}
									z();
								}),
							),
							this.F.add({
								dispose: () => {
									U.dispose(), F.dispose();
								},
							}),
							this.updateRanges();
					}
					I(R) {
						if (!this.f.hasModel() || R !== this.w || this.u.length === 0)
							return;
						const O = this.f.getModel(),
							B = this.u.getRange(0);
						if (!B || B.startLineNumber !== B.endLineNumber)
							return this.clearRanges();
						const U = O.getValueInRange(B);
						if (this.z) {
							const F = U.match(this.z);
							if ((F ? F[0].length : 0) !== U.length) return this.clearRanges();
						}
						const z = [];
						for (let F = 1, x = this.u.length; F < x; F++) {
							const H = this.u.getRange(F);
							if (H)
								if (H.startLineNumber !== H.endLineNumber)
									z.push({ range: H, text: U });
								else {
									let q = O.getValueInRange(H),
										V = U,
										G = H.startColumn,
										K = H.endColumn;
									const J = u.$Of(q, V);
									(G += J), (q = q.substr(J)), (V = V.substr(J));
									const W = u.$Pf(q, V);
									(K -= W),
										(q = q.substr(0, q.length - W)),
										(V = V.substr(0, V.length - W)),
										(G !== K || V.length !== 0) &&
											z.push({
												range: new p.$iL(
													H.startLineNumber,
													G,
													H.endLineNumber,
													K,
												),
												text: V,
											});
								}
						}
						if (z.length !== 0)
							try {
								this.f.popUndoStop(), (this.C = !0);
								const F = this.f._getViewModel().getPrevEditOperationType();
								this.f.executeEdits("linkedEditing", z),
									this.f._getViewModel().setPrevEditOperationType(F);
							} finally {
								this.C = !1;
							}
					}
					dispose() {
						this.clearRanges(), super.dispose();
					}
					clearRanges() {
						this.j.set(!1),
							this.u.clear(),
							this.r && (this.r.cancel(), (this.r = null), (this.s = null));
					}
					get currentUpdateTriggerPromise() {
						return this.n || Promise.resolve();
					}
					get currentSyncTriggerPromise() {
						return this.q || Promise.resolve();
					}
					async updateRanges(R = !1) {
						if (!this.f.hasModel()) {
							this.clearRanges();
							return;
						}
						const O = this.f.getPosition();
						if ((!this.h && !R) || this.f.getSelections().length > 1) {
							this.clearRanges();
							return;
						}
						const B = this.f.getModel(),
							U = B.getVersionId();
						if (this.s && this.t === U) {
							if (O.equals(this.s)) return;
							if (this.u.length > 0) {
								const F = this.u.getRange(0);
								if (F && F.containsPosition(O)) return;
							}
						}
						this.clearRanges(), (this.s = O), (this.t = U);
						const z = (this.r = new w.$Ce());
						try {
							const F = new T.$le(!1),
								x = await N(this.g, B, O, z.token);
							if (
								(this.m.update(B, F.elapsed()),
								z !== this.r || ((this.r = null), U !== B.getVersionId()))
							)
								return;
							let H = [];
							x?.ranges && (H = x.ranges), (this.z = x?.wordPattern || this.y);
							let q = !1;
							for (let G = 0, K = H.length; G < K; G++)
								if (p.$iL.containsPosition(H[G], O)) {
									if (((q = !0), G !== 0)) {
										const J = H[G];
										H.splice(G, 1), H.unshift(J);
									}
									break;
								}
							if (!q) {
								this.clearRanges();
								return;
							}
							const V = H.map((G) => ({ range: G, options: P.a }));
							this.j.set(!0), this.u.set(V), this.w++;
						} catch (F) {
							(0, C.$8)(F) || (0, C.$4)(F),
								(this.r === z || !this.r) && this.clearRanges();
						}
					}
					setDebounceDuration(R) {
						this.b = R;
					}
				};
				(e.$gjc = L),
					(e.$gjc =
						L =
						P =
							Ne([j(1, y.$6j), j(2, v.$k3), j(3, s.$aN), j(4, I.$PBb)], L));
				class D extends h.$itb {
					constructor() {
						super({
							id: "editor.action.linkedEditing",
							label: l.localize(1302, null),
							alias: "Start Linked Editing",
							precondition: y.$Kj.and(
								o.EditorContextKeys.writable,
								o.EditorContextKeys.hasRenameProvider,
							),
							kbOpts: {
								kbExpr: o.EditorContextKeys.editorTextFocus,
								primary: m.KeyMod.CtrlCmd | m.KeyMod.Shift | m.KeyCode.F2,
								weight: $.KeybindingWeight.EditorContrib,
							},
						});
					}
					runCommand(R, O) {
						const B = R.get(c.$dtb),
							[U, z] = (Array.isArray(O) && O) || [void 0, void 0];
						return a.URI.isUri(U) && g.$hL.isIPosition(z)
							? B.openCodeEditor({ resource: U }, B.getActiveCodeEditor()).then(
									(F) => {
										F &&
											(F.setPosition(z),
											F.invokeWithinContext(
												(x) => (this.w(x, F), this.run(x, F)),
											));
									},
									C.$4,
								)
							: super.runCommand(R, O);
					}
					run(R, O) {
						const B = L.get(O);
						return B ? Promise.resolve(B.updateRanges(!0)) : Promise.resolve();
					}
				}
				e.$hjc = D;
				const M = h.$htb.bindToContribution(L.get);
				(0, h.$mtb)(
					new M({
						id: "cancelLinkedEditingInput",
						precondition: e.$fjc,
						handler: (A) => A.clearRanges(),
						kbOpts: {
							kbExpr: o.EditorContextKeys.editorTextFocus,
							weight: $.KeybindingWeight.EditorContrib + 99,
							primary: m.KeyCode.Escape,
							secondary: [m.KeyMod.Shift | m.KeyCode.Escape],
						},
					}),
				);
				function N(A, R, O, B) {
					const U = A.ordered(R);
					return (0, i.$Qh)(
						U.map((z) => async () => {
							try {
								return await z.provideLinkedEditingRanges(R, O, B);
							} catch (F) {
								(0, C.$5)(F);
								return;
							}
						}),
						(z) => !!z && t.$Pb(z?.ranges),
					);
				}
				(e.$ijc = (0, S.$wP)(
					"editor.linkedEditingBackground",
					{
						dark: E.$UL.fromHex("#f00").transparent(0.3),
						light: E.$UL.fromHex("#f00").transparent(0.3),
						hcDark: E.$UL.fromHex("#f00").transparent(0.3),
						hcLight: E.$UL.white,
					},
					l.localize(1303, null),
				)),
					(0, h.$ltb)("_executeLinkedEditingProvider", (A, R, O) => {
						const { linkedEditingRangeProvider: B } = A.get(v.$k3);
						return N(B, R, O, w.CancellationToken.None);
					}),
					(0, h.$qtb)(
						L.ID,
						L,
						h.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, h.$ntb)(D);
			},
		),
		define(
			de[963],
			he([
				1, 0, 15, 33, 29, 94, 3, 23, 12, 19, 162, 9, 56, 46, 38, 64, 122, 391,
				69, 766, 2710, 4, 40, 41, 2313,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Ob = void 0),
					(m = mt(m)),
					(r = mt(r)),
					(l = mt(l));
				let S = class extends C.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "editor.linkDetector";
					}
					static get(D) {
						return D.getContribution(v.ID);
					}
					constructor(D, M, N, A, R) {
						super(),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.r = A),
							(this.a = this.r.linkProvider),
							(this.b = R.for(this.a, "Links", { min: 1e3, max: 4e3 })),
							(this.c = this.D(new t.$Yh(() => this.s(), 1e3))),
							(this.f = null),
							(this.g = null),
							(this.j = {}),
							(this.h = null);
						const O = this.D(new b.$6Mb(D));
						this.D(
							O.onMouseMoveOrRelevantKeyDown(([B, U]) => {
								this.u(B, U);
							}),
						),
							this.D(
								O.onExecute((B) => {
									this.y(B);
								}),
							),
							this.D(
								O.onCancel((B) => {
									this.w();
								}),
							),
							this.D(
								D.onDidChangeConfiguration((B) => {
									B.hasChanged(n.EditorOption.links) &&
										(this.t([]), this.C(), this.c.schedule(0));
								}),
							),
							this.D(
								D.onDidChangeModelContent((B) => {
									this.m.hasModel() &&
										this.c.schedule(this.b.get(this.m.getModel()));
								}),
							),
							this.D(
								D.onDidChangeModel((B) => {
									(this.j = {}), (this.h = null), this.C(), this.c.schedule(0);
								}),
							),
							this.D(
								D.onDidChangeModelLanguage((B) => {
									this.C(), this.c.schedule(0);
								}),
							),
							this.D(
								this.a.onDidChange((B) => {
									this.C(), this.c.schedule(0);
								}),
							),
							this.c.schedule(0);
					}
					async s() {
						if (!this.m.hasModel() || !this.m.getOption(n.EditorOption.links))
							return;
						const D = this.m.getModel();
						if (!D.isTooLargeForSyncing() && this.a.has(D)) {
							this.g && (this.g.dispose(), (this.g = null)),
								(this.f = (0, t.$zh)((M) => (0, s.$5Ob)(this.a, D, M)));
							try {
								const M = new u.$le(!1);
								if (
									((this.g = await this.f),
									this.b.update(D, M.elapsed()),
									D.isDisposed())
								)
									return;
								this.t(this.g.links);
							} catch (M) {
								(0, w.$4)(M);
							} finally {
								this.f = null;
							}
						}
					}
					t(D) {
						const M =
								this.m.getOption(n.EditorOption.multiCursorModifier) ===
								"altKey",
							N = [],
							A = Object.keys(this.j);
						for (const O of A) {
							const B = this.j[O];
							N.push(B.decorationId);
						}
						const R = [];
						if (D) for (const O of D) R.push(T.decoration(O, M));
						this.m.changeDecorations((O) => {
							const B = O.deltaDecorations(N, R);
							(this.j = {}), (this.h = null);
							for (let U = 0, z = B.length; U < z; U++) {
								const F = new T(D[U], B[U]);
								this.j[F.decorationId] = F;
							}
						});
					}
					u(D, M) {
						const N =
							this.m.getOption(n.EditorOption.multiCursorModifier) === "altKey";
						if (this.z(D, M)) {
							this.w();
							const A = this.getLinkOccurrence(D.target.position);
							A &&
								this.m.changeDecorations((R) => {
									A.activate(R, N), (this.h = A.decorationId);
								});
						} else this.w();
					}
					w() {
						const D =
							this.m.getOption(n.EditorOption.multiCursorModifier) === "altKey";
						if (this.h) {
							const M = this.j[this.h];
							M &&
								this.m.changeDecorations((N) => {
									M.deactivate(N, D);
								}),
								(this.h = null);
						}
					}
					y(D) {
						if (!this.z(D)) return;
						const M = this.getLinkOccurrence(D.target.position);
						M && this.openLinkOccurrence(M, D.hasSideBySideModifier, !0);
					}
					openLinkOccurrence(D, M, N = !1) {
						if (!this.n) return;
						const { link: A } = D;
						A.resolve(i.CancellationToken.None).then(
							(R) => {
								if (typeof R == "string" && this.m.hasModel()) {
									const O = this.m.getModel().uri;
									if (
										O.scheme === d.Schemas.file &&
										R.startsWith(`${d.Schemas.file}:`)
									) {
										const B = a.URI.parse(R);
										if (B.scheme === d.Schemas.file) {
											const U = r.$bh(B);
											let z = null;
											U.startsWith("/./") || U.startsWith("\\.\\")
												? (z = `.${U.substr(1)}`)
												: (U.startsWith("//./") || U.startsWith("\\\\.\\")) &&
													(z = `.${U.substr(2)}`),
												z && (R = r.$nh(O, z));
										}
									}
								}
								return this.n.open(R, {
									openToSide: M,
									fromUserGesture: N,
									allowContributedOpeners: !0,
									allowCommands: !0,
									fromWorkspace: !0,
								});
							},
							(R) => {
								const O = R instanceof Error ? R.message : R;
								O === "invalid"
									? this.q.warn(l.localize(1304, null, A.url.toString()))
									: O === "missing"
										? this.q.warn(l.localize(1305, null))
										: (0, w.$4)(R);
							},
						);
					}
					getLinkOccurrence(D) {
						if (!this.m.hasModel() || !D) return null;
						const M = this.m
							.getModel()
							.getDecorationsInRange(
								{
									startLineNumber: D.lineNumber,
									startColumn: D.column,
									endLineNumber: D.lineNumber,
									endColumn: D.column,
								},
								0,
								!0,
							);
						for (const N of M) {
							const A = this.j[N.id];
							if (A) return A;
						}
						return null;
					}
					z(D, M) {
						return !!(
							D.target.type === h.MouseTargetType.CONTENT_TEXT &&
							(D.hasTriggerModifier || (M && M.keyCodeIsTriggerKey))
						);
					}
					C() {
						this.c.cancel(),
							this.g && (this.g?.dispose(), (this.g = null)),
							this.f && (this.f.cancel(), (this.f = null));
					}
					dispose() {
						super.dispose(), this.C();
					}
				};
				(e.$6Ob = S),
					(e.$6Ob =
						S =
						v =
							Ne([j(1, $.$7rb), j(2, y.$4N), j(3, f.$k3), j(4, o.$PBb)], S));
				const I = {
					general: p.$eY.register({
						description: "detected-link",
						stickiness: g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						collapseOnReplaceEdit: !0,
						inlineClassName: "detected-link",
					}),
					active: p.$eY.register({
						description: "detected-link-active",
						stickiness: g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						collapseOnReplaceEdit: !0,
						inlineClassName: "detected-link-active",
					}),
				};
				class T {
					static decoration(D, M) {
						return { range: D.range, options: T.a(D, M, !1) };
					}
					static a(D, M, N) {
						const A = { ...(N ? I.active : I.general) };
						return (A.hoverMessage = P(D, M)), A;
					}
					constructor(D, M) {
						(this.link = D), (this.decorationId = M);
					}
					activate(D, M) {
						D.changeDecorationOptions(this.decorationId, T.a(this.link, M, !0));
					}
					deactivate(D, M) {
						D.changeDecorationOptions(this.decorationId, T.a(this.link, M, !1));
					}
				}
				function P(L, D) {
					const M = L.url && /^command:/i.test(L.url.toString()),
						N = L.tooltip
							? L.tooltip
							: M
								? l.localize(1306, null)
								: l.localize(1307, null),
						A = D
							? m.$m
								? l.localize(1308, null)
								: l.localize(1309, null)
							: m.$m
								? l.localize(1310, null)
								: l.localize(1311, null);
					if (L.url) {
						let R = "";
						if (/^command:/i.test(L.url.toString())) {
							const B = L.url.toString().match(/^command:([^?#]+)/);
							if (B) {
								const U = B[1];
								R = l.localize(1312, null, U);
							}
						}
						return new E.$cl("", !0)
							.appendLink(L.url.toString(!0).replace(/ /g, "%20"), N, R)
							.appendMarkdown(` (${A})`);
					} else return new E.$cl().appendText(`${N} (${A})`);
				}
				class k extends c.$itb {
					constructor() {
						super({
							id: "editor.action.openLink",
							label: l.localize(1313, null),
							alias: "Open Link",
							precondition: void 0,
						});
					}
					run(D, M) {
						const N = S.get(M);
						if (!N || !M.hasModel()) return;
						const A = M.getSelections();
						for (const R of A) {
							const O = N.getLinkOccurrence(R.getEndPosition());
							O && N.openLinkOccurrence(O, !1);
						}
					}
				}
				(0, c.$qtb)(
					S.ID,
					S,
					c.EditorContributionInstantiation.AfterFirstRender,
				),
					(0, c.$ntb)(k);
			},
		),
		define(
			de[2921],
			he([1, 0, 15, 3, 46, 38, 171, 152, 64, 122, 200]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fkc = void 0);
				let a = class extends i.$1c {
					static {
						this.ID = "editor.sectionHeaderDetector";
					}
					constructor(n, g, p) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.b = this.h.createDecorationsCollection()),
							(this.a = this.n(n.getOption(E.EditorOption.minimap))),
							(this.f = null),
							(this.g = {}),
							this.D(
								n.onDidChangeModel((o) => {
									(this.g = {}),
										(this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.s(),
										this.c.schedule(0);
								}),
							),
							this.D(
								n.onDidChangeModelLanguage((o) => {
									(this.g = {}),
										(this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.s(),
										this.c.schedule(0);
								}),
							),
							this.D(
								g.onDidChange((o) => {
									const f = this.h.getModel()?.getLanguageId();
									f &&
										o.affects(f) &&
										((this.g = {}),
										(this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.s(),
										this.c.schedule(0));
								}),
							),
							this.D(
								n.onDidChangeConfiguration((o) => {
									(this.a && !o.hasChanged(E.EditorOption.minimap)) ||
										((this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.r([]),
										this.s(),
										this.c.schedule(0));
								}),
							),
							this.D(
								this.h.onDidChangeModelContent((o) => {
									this.c.schedule();
								}),
							),
							this.D(
								n.onDidChangeModelTokens((o) => {
									this.c.isScheduled() || this.c.schedule(1e3);
								}),
							),
							(this.c = this.D(
								new t.$Yh(() => {
									this.q();
								}, 250),
							)),
							this.c.schedule(0);
					}
					n(n) {
						if (!n || !this.h.hasModel()) return;
						const g = this.h.getModel().getLanguageId();
						if (!g) return;
						const p = this.j.getLanguageConfiguration(g).comments,
							o = this.j.getLanguageConfiguration(g).foldingRules;
						if (!(!p && !o?.markers))
							return {
								foldingRules: o,
								findMarkSectionHeaders: n.showMarkSectionHeaders,
								findRegionSectionHeaders: n.showRegionSectionHeaders,
							};
					}
					q() {
						if (
							!this.h.hasModel() ||
							(!this.a?.findMarkSectionHeaders &&
								!this.a?.findRegionSectionHeaders)
						)
							return;
						const n = this.h.getModel();
						if (n.isDisposed() || n.isTooLargeForSyncing()) return;
						const g = n.getVersionId();
						this.m.findSectionHeaders(n.uri, this.a).then((p) => {
							n.isDisposed() || n.getVersionId() !== g || this.r(p);
						});
					}
					r(n) {
						const g = this.h.getModel();
						g &&
							(n = n.filter((f) => {
								if (!f.shouldBeInComments) return !0;
								const b = g.validateRange(f.range),
									s = g.tokenization.getLineTokens(b.startLineNumber),
									l = s.findTokenIndexAtOffset(b.startColumn - 1),
									y = s.getStandardTokenType(l);
								return (
									s.getLanguageId(l) === g.getLanguageId() &&
									y === C.StandardTokenType.Comment
								);
							}));
						const p = Object.values(this.g).map((f) => f.decorationId),
							o = n.map((f) => h(f));
						this.h.changeDecorations((f) => {
							const b = f.deltaDecorations(p, o);
							this.g = {};
							for (let s = 0, l = b.length; s < l; s++) {
								const y = { sectionHeader: n[s], decorationId: b[s] };
								this.g[y.decorationId] = y;
							}
						});
					}
					s() {
						this.c.cancel(), this.f && (this.f.cancel(), (this.f = null));
					}
					dispose() {
						super.dispose(), this.s(), this.b.clear();
					}
				};
				(e.$fkc = a), (e.$fkc = a = Ne([j(1, d.$aN), j(2, u.$Cxb)], a));
				function h(c) {
					return {
						range: c.range,
						options: r.$eY.createDynamic({
							description: "section-header",
							stickiness: m.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							collapseOnReplaceEdit: !0,
							minimap: {
								color: void 0,
								position: m.MinimapPosition.Inline,
								sectionHeaderStyle: c.hasSeparatorLine
									? m.MinimapSectionHeaderStyle.Underlined
									: m.MinimapSectionHeaderStyle.Normal,
								sectionHeaderText: c.text,
							},
						}),
					};
				}
				(0, w.$qtb)(
					a.ID,
					a,
					w.EditorContributionInstantiation.AfterFirstRender,
				);
			},
		),
		define(
			de[1691],
			he([
				1, 0, 24, 120, 3, 37, 38, 188, 17, 104, 152, 64, 122, 73, 25, 389, 1672,
				2319,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oDb = e.$nDb = void 0);
				class f {
					static {
						this.f = {
							active: h.$eY.register({
								description: "snippet-placeholder-1",
								stickiness:
									a.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								className: "snippet-placeholder",
							}),
							inactive: h.$eY.register({
								description: "snippet-placeholder-2",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: "snippet-placeholder",
							}),
							activeFinal: h.$eY.register({
								description: "snippet-placeholder-3",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: "finish-snippet-placeholder",
							}),
							inactiveFinal: h.$eY.register({
								description: "snippet-placeholder-4",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: "finish-snippet-placeholder",
							}),
						};
					}
					constructor(y, $, v) {
						(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.e = -1),
							(this._nestingLevel = 1),
							(this.d = (0, t.$Db)($.placeholders, g.$Czb.compareByIndex)),
							(this._placeholderGroupsIdx = -1);
					}
					initialize(y) {
						this.e = y.newPosition;
					}
					dispose() {
						this.c && this.g.removeDecorations([...this.c.values()]),
							(this.d.length = 0);
					}
					k() {
						if (this.e === -1) throw new Error("Snippet not initialized!");
						if (this.c) return;
						this.c = new Map();
						const y = this.g.getModel();
						this.g.changeDecorations(($) => {
							for (const v of this.h.placeholders) {
								const S = this.h.offset(v),
									I = this.h.fullLen(v),
									T = m.$iL.fromPositions(
										y.getPositionAt(this.e + S),
										y.getPositionAt(this.e + S + I),
									),
									P = v.isFinalTabstop ? f.f.inactiveFinal : f.f.inactive,
									k = $.addDecoration(T, P);
								this.c.set(v, k);
							}
						});
					}
					move(y) {
						if (!this.g.hasModel()) return [];
						if ((this.k(), this._placeholderGroupsIdx >= 0)) {
							const S = [];
							for (const I of this.d[this._placeholderGroupsIdx])
								if (I.transform) {
									const T = this.c.get(I),
										P = this.g.getModel().getDecorationRange(T),
										k = this.g.getModel().getValueInRange(P),
										L = I.transform.resolve(k).split(/\r\n|\r|\n/);
									for (let D = 1; D < L.length; D++)
										L[D] = this.g
											.getModel()
											.normalizeIndentation(this.j + L[D]);
									S.push(d.$jL.replace(P, L.join(this.g.getModel().getEOL())));
								}
							S.length > 0 &&
								this.g.executeEdits("snippet.placeholderTransform", S);
						}
						let $ = !1;
						y === !0 && this._placeholderGroupsIdx < this.d.length - 1
							? ((this._placeholderGroupsIdx += 1), ($ = !0))
							: y === !1 &&
								this._placeholderGroupsIdx > 0 &&
								((this._placeholderGroupsIdx -= 1), ($ = !0));
						const v = this.g.getModel().changeDecorations((S) => {
							const I = new Set(),
								T = [];
							for (const P of this.d[this._placeholderGroupsIdx]) {
								const k = this.c.get(P),
									L = this.g.getModel().getDecorationRange(k);
								T.push(
									new r.$kL(
										L.startLineNumber,
										L.startColumn,
										L.endLineNumber,
										L.endColumn,
									),
								),
									($ = $ && this.l(P)),
									S.changeDecorationOptions(
										k,
										P.isFinalTabstop ? f.f.activeFinal : f.f.active,
									),
									I.add(P);
								for (const D of this.h.enclosingPlaceholders(P)) {
									const M = this.c.get(D);
									S.changeDecorationOptions(
										M,
										D.isFinalTabstop ? f.f.activeFinal : f.f.active,
									),
										I.add(D);
								}
							}
							for (const [P, k] of this.c)
								I.has(P) ||
									S.changeDecorationOptions(
										k,
										P.isFinalTabstop ? f.f.inactiveFinal : f.f.inactive,
									);
							return T;
						});
						return $ ? this.move(y) : (v ?? []);
					}
					l(y) {
						let $ = y;
						for (; $; ) {
							if ($ instanceof g.$Czb) {
								const v = this.c.get($);
								if (
									this.g.getModel().getDecorationRange(v).isEmpty() &&
									$.toString().length > 0
								)
									return !0;
							}
							$ = $.parent;
						}
						return !1;
					}
					get isAtFirstPlaceholder() {
						return this._placeholderGroupsIdx <= 0 || this.d.length === 0;
					}
					get isAtLastPlaceholder() {
						return this._placeholderGroupsIdx === this.d.length - 1;
					}
					get hasPlaceholder() {
						return this.h.placeholders.length > 0;
					}
					get isTrivialSnippet() {
						if (this.h.placeholders.length === 0) return !0;
						if (this.h.placeholders.length === 1) {
							const [y] = this.h.placeholders;
							if (y.isFinalTabstop && this.h.rightMostDescendant === y)
								return !0;
						}
						return !1;
					}
					computePossibleSelections() {
						const y = new Map();
						for (const $ of this.d) {
							let v;
							for (const S of $) {
								if (S.isFinalTabstop) break;
								v || ((v = []), y.set(S.index, v));
								const I = this.c.get(S),
									T = this.g.getModel().getDecorationRange(I);
								if (!T) {
									y.delete(S.index);
									break;
								}
								v.push(T);
							}
						}
						return y;
					}
					get activeChoice() {
						if (!this.c) return;
						const y = this.d[this._placeholderGroupsIdx][0];
						if (!y?.choice) return;
						const $ = this.c.get(y);
						if (!$) return;
						const v = this.g.getModel().getDecorationRange($);
						if (v) return { range: v, choice: y.choice };
					}
					get hasChoice() {
						let y = !1;
						return this.h.walk(($) => ((y = $ instanceof g.$Dzb), !y)), y;
					}
					merge(y) {
						const $ = this.g.getModel();
						(this._nestingLevel *= 10),
							this.g.changeDecorations((v) => {
								for (const S of this.d[this._placeholderGroupsIdx]) {
									const I = y.shift();
									console.assert(I.e !== -1), console.assert(!I.c);
									const T = I.h.placeholderInfo.last.index;
									for (const k of I.h.placeholderInfo.all)
										k.isFinalTabstop
											? (k.index = S.index + (T + 1) / this._nestingLevel)
											: (k.index = S.index + k.index / this._nestingLevel);
									this.h.replace(S, I.h.children);
									const P = this.c.get(S);
									v.removeDecoration(P), this.c.delete(S);
									for (const k of I.h.placeholders) {
										const L = I.h.offset(k),
											D = I.h.fullLen(k),
											M = m.$iL.fromPositions(
												$.getPositionAt(I.e + L),
												$.getPositionAt(I.e + L + D),
											),
											N = v.addDecoration(M, f.f.inactive);
										this.c.set(k, N);
									}
								}
								this.d = (0, t.$Db)(this.h.placeholders, g.$Czb.compareByIndex);
							});
					}
					getEnclosingRange() {
						let y;
						const $ = this.g.getModel();
						for (const v of this.c.values()) {
							const S = $.getDecorationRange(v) ?? void 0;
							y ? (y = y.plusRange(S)) : (y = S);
						}
						return y;
					}
				}
				e.$nDb = f;
				const b = {
					overwriteBefore: 0,
					overwriteAfter: 0,
					adjustWhitespace: !0,
					clipboardText: void 0,
					overtypingCapturer: void 0,
				};
				let s = (o = class {
					static adjustWhitespace(y, $, v, S, I) {
						const T = y.getLineContent($.lineNumber),
							P = (0, E.$Cf)(T, 0, $.column - 1);
						let k;
						return (
							S.walk((L) => {
								if (
									!(L instanceof g.Text) ||
									L.parent instanceof g.$Dzb ||
									(I && !I.has(L))
								)
									return !0;
								const D = L.value.split(/\r\n|\r|\n/);
								if (v) {
									const N = S.offset(L);
									if (N === 0) D[0] = y.normalizeIndentation(D[0]);
									else {
										k = k ?? S.toString();
										const A = k.charCodeAt(N - 1);
										(A === i.CharCode.LineFeed ||
											A === i.CharCode.CarriageReturn) &&
											(D[0] = y.normalizeIndentation(P + D[0]));
									}
									for (let A = 1; A < D.length; A++)
										D[A] = y.normalizeIndentation(P + D[A]);
								}
								const M = D.join(y.getEOL());
								return (
									M !== L.value &&
										(L.parent.replace(L, [new g.Text(M)]), (k = void 0)),
									!0
								);
							}),
							P
						);
					}
					static adjustSelection(y, $, v, S) {
						if (v !== 0 || S !== 0) {
							const { positionLineNumber: I, positionColumn: T } = $,
								P = T - v,
								k = T + S,
								L = y.validateRange({
									startLineNumber: I,
									startColumn: P,
									endLineNumber: I,
									endColumn: k,
								});
							$ = r.$kL.createWithDirection(
								L.startLineNumber,
								L.startColumn,
								L.endLineNumber,
								L.endColumn,
								$.getDirection(),
							);
						}
						return $;
					}
					static createEditsAndSnippetsFromSelections(
						y,
						$,
						v,
						S,
						I,
						T,
						P,
						k,
						L,
					) {
						const D = [],
							M = [];
						if (!y.hasModel()) return { edits: D, snippets: M };
						const N = y.getModel(),
							A = y.invokeWithinContext((x) => x.get(n.$Vi)),
							R = y.invokeWithinContext((x) => new p.$hDb(x.get(c.$3N), N)),
							O = () => P,
							B = N.getValueInRange(
								o.adjustSelection(N, y.getSelection(), v, 0),
							),
							U = N.getValueInRange(
								o.adjustSelection(N, y.getSelection(), 0, S),
							),
							z = N.getLineFirstNonWhitespaceColumn(
								y.getSelection().positionLineNumber,
							),
							F = y
								.getSelections()
								.map((x, H) => ({ selection: x, idx: H }))
								.sort((x, H) =>
									m.$iL.compareRangesUsingStarts(x.selection, H.selection),
								);
						for (const { selection: x, idx: H } of F) {
							let q = o.adjustSelection(N, x, v, 0),
								V = o.adjustSelection(N, x, 0, S);
							B !== N.getValueInRange(q) && (q = x),
								U !== N.getValueInRange(V) && (V = x);
							const G = x
									.setStartPosition(q.startLineNumber, q.startColumn)
									.setEndPosition(V.endLineNumber, V.endColumn),
								K = new g.$Izb().parse($, !0, I),
								J = G.getStartPosition(),
								W = o.adjustWhitespace(
									N,
									J,
									T ||
										(H > 0 &&
											z !==
												N.getLineFirstNonWhitespaceColumn(
													x.positionLineNumber,
												)),
									K,
								);
							K.resolveVariables(
								new p.$fDb([
									R,
									new p.$iDb(
										O,
										H,
										F.length,
										y.getOption(C.EditorOption.multiCursorPaste) === "spread",
									),
									new p.$gDb(N, x, H, k),
									new p.$jDb(N, x, L),
									new p.$kDb(),
									new p.$lDb(A),
									new p.$mDb(),
								]),
							),
								(D[H] = d.$jL.replace(G, K.toString())),
								(D[H].identifier = { major: H, minor: 0 }),
								(D[H]._isTracked = !0),
								(M[H] = new f(y, K, W));
						}
						return { edits: D, snippets: M };
					}
					static createEditsAndSnippetsFromEdits(y, $, v, S, I, T, P) {
						if (!y.hasModel() || $.length === 0)
							return { edits: [], snippets: [] };
						const k = [],
							L = y.getModel(),
							D = new g.$Izb(),
							M = new g.$Hzb(),
							N = new p.$fDb([
								y.invokeWithinContext((R) => new p.$hDb(R.get(c.$3N), L)),
								new p.$iDb(
									() => I,
									0,
									y.getSelections().length,
									y.getOption(C.EditorOption.multiCursorPaste) === "spread",
								),
								new p.$gDb(L, y.getSelection(), 0, T),
								new p.$jDb(L, y.getSelection(), P),
								new p.$kDb(),
								new p.$lDb(y.invokeWithinContext((R) => R.get(n.$Vi))),
								new p.$mDb(),
							]);
						$ = $.sort((R, O) =>
							m.$iL.compareRangesUsingStarts(R.range, O.range),
						);
						let A = 0;
						for (let R = 0; R < $.length; R++) {
							const { range: O, template: B } = $[R];
							if (R > 0) {
								const H = $[R - 1].range,
									q = m.$iL.fromPositions(
										H.getEndPosition(),
										O.getStartPosition(),
									),
									V = new g.Text(L.getValueInRange(q));
								M.appendChild(V), (A += V.value.length);
							}
							const U = D.parseFragment(B, M);
							o.adjustWhitespace(L, O.getStartPosition(), !0, M, new Set(U)),
								M.resolveVariables(N);
							const z = M.toString(),
								F = z.slice(A);
							A = z.length;
							const x = d.$jL.replace(O, F);
							(x.identifier = { major: R, minor: 0 }),
								(x._isTracked = !0),
								k.push(x);
						}
						return (
							D.ensureFinalTabstop(M, v, !0),
							{ edits: k, snippets: [new f(y, M, "")] }
						);
					}
					constructor(y, $, v = b, S) {
						(this.e = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.c = []),
							(this.d = []);
					}
					dispose() {
						(0, w.$Vc)(this.d);
					}
					_logInfo() {
						return `template="${this.f}", merged_templates="${this.c.join(" -> ")}"`;
					}
					insert() {
						if (!this.e.hasModel()) return;
						const { edits: y, snippets: $ } =
							typeof this.f == "string"
								? o.createEditsAndSnippetsFromSelections(
										this.e,
										this.f,
										this.g.overwriteBefore,
										this.g.overwriteAfter,
										!1,
										this.g.adjustWhitespace,
										this.g.clipboardText,
										this.g.overtypingCapturer,
										this.h,
									)
								: o.createEditsAndSnippetsFromEdits(
										this.e,
										this.f,
										!1,
										this.g.adjustWhitespace,
										this.g.clipboardText,
										this.g.overtypingCapturer,
										this.h,
									);
						(this.d = $),
							this.e.executeEdits("snippet", y, (v) => {
								const S = v.filter((I) => !!I.identifier);
								for (let I = 0; I < $.length; I++)
									$[I].initialize(S[I].textChange);
								return this.d[0].hasPlaceholder
									? this.j(!0)
									: S.map((I) => r.$kL.fromPositions(I.range.getEndPosition()));
							}),
							this.e.revealRange(this.e.getSelections()[0]);
					}
					merge(y, $ = b) {
						if (!this.e.hasModel()) return;
						this.c.push([
							this.d[0]._nestingLevel,
							this.d[0]._placeholderGroupsIdx,
							y,
						]);
						const { edits: v, snippets: S } =
							o.createEditsAndSnippetsFromSelections(
								this.e,
								y,
								$.overwriteBefore,
								$.overwriteAfter,
								!0,
								$.adjustWhitespace,
								$.clipboardText,
								$.overtypingCapturer,
								this.h,
							);
						this.e.executeEdits("snippet", v, (I) => {
							const T = I.filter((k) => !!k.identifier);
							for (let k = 0; k < S.length; k++)
								S[k].initialize(T[k].textChange);
							const P = S[0].isTrivialSnippet;
							if (!P) {
								for (const k of this.d) k.merge(S);
								console.assert(S.length === 0);
							}
							return this.d[0].hasPlaceholder && !P
								? this.j(void 0)
								: T.map((k) => r.$kL.fromPositions(k.range.getEndPosition()));
						});
					}
					next() {
						const y = this.j(!0);
						this.e.setSelections(y),
							this.e.revealPositionInCenterIfOutsideViewport(
								y[0].getPosition(),
							);
					}
					prev() {
						const y = this.j(!1);
						this.e.setSelections(y),
							this.e.revealPositionInCenterIfOutsideViewport(
								y[0].getPosition(),
							);
					}
					j(y) {
						const $ = [];
						for (const v of this.d) {
							const S = v.move(y);
							$.push(...S);
						}
						return $;
					}
					get isAtFirstPlaceholder() {
						return this.d[0].isAtFirstPlaceholder;
					}
					get isAtLastPlaceholder() {
						return this.d[0].isAtLastPlaceholder;
					}
					get hasPlaceholder() {
						return this.d[0].hasPlaceholder;
					}
					get hasChoice() {
						return this.d[0].hasChoice;
					}
					get activeChoice() {
						return this.d[0].activeChoice;
					}
					isSelectionWithinPlaceholders() {
						if (!this.hasPlaceholder) return !1;
						const y = this.e.getSelections();
						if (y.length < this.d.length) return !1;
						const $ = new Map();
						for (const v of this.d) {
							const S = v.computePossibleSelections();
							if ($.size === 0)
								for (const [I, T] of S) {
									T.sort(m.$iL.compareRangesUsingStarts);
									for (const P of y)
										if (T[0].containsRange(P)) {
											$.set(I, []);
											break;
										}
								}
							if ($.size === 0) return !1;
							$.forEach((I, T) => {
								I.push(...S.get(T));
							});
						}
						y.sort(m.$iL.compareRangesUsingStarts);
						for (const [v, S] of $) {
							if (S.length !== y.length) {
								$.delete(v);
								continue;
							}
							S.sort(m.$iL.compareRangesUsingStarts);
							for (let I = 0; I < S.length; I++)
								if (!S[I].containsRange(y[I])) {
									$.delete(v);
									continue;
								}
						}
						return $.size > 0;
					}
					getEnclosingRange() {
						let y;
						for (const $ of this.d) {
							const v = $.getEnclosingRange();
							y ? (y = y.plusRange(v)) : (y = v);
						}
						return y;
					}
				});
				(e.$oDb = s), (e.$oDb = s = o = Ne([j(3, u.$aN)], s));
			},
		),
		define(
			de[254],
			he([1, 0, 27, 3, 28, 46, 48, 71, 74, 152, 69, 373, 4, 8, 43, 34, 1691]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aDb = void 0);
				const f = {
					overwriteBefore: 0,
					overwriteAfter: 0,
					undoStopBefore: !0,
					undoStopAfter: !0,
					adjustWhitespace: !0,
					clipboardText: void 0,
					overtypingCapturer: void 0,
				};
				let b = class {
					static {
						o = this;
					}
					static {
						this.ID = "snippetController2";
					}
					static get(y) {
						return y.getContribution(o.ID);
					}
					static {
						this.InSnippetMode = new c.$5j(
							"inSnippetMode",
							!1,
							(0, h.localize)(1424, null),
						);
					}
					static {
						this.HasNextTabstop = new c.$5j(
							"hasNextTabstop",
							!1,
							(0, h.localize)(1425, null),
						);
					}
					static {
						this.HasPrevTabstop = new c.$5j(
							"hasPrevTabstop",
							!1,
							(0, h.localize)(1426, null),
						);
					}
					constructor(y, $, v, S, I) {
						(this.k = y),
							(this.l = $),
							(this.m = v),
							(this.n = I),
							(this.f = new i.$Zc()),
							(this.g = -1),
							(this.a = o.InSnippetMode.bindTo(S)),
							(this.b = o.HasNextTabstop.bindTo(S)),
							(this.c = o.HasPrevTabstop.bindTo(S));
					}
					dispose() {
						this.a.reset(),
							this.c.reset(),
							this.b.reset(),
							this.d?.dispose(),
							this.f.dispose();
					}
					apply(y, $) {
						try {
							this.p(y, typeof $ > "u" ? f : { ...f, ...$ });
						} catch (v) {
							this.cancel(),
								this.l.error(v),
								this.l.error("snippet_error"),
								this.l.error("insert_edits=", y),
								this.l.error(
									"existing_template=",
									this.d ? this.d._logInfo() : "<no_session>",
								);
						}
					}
					insert(y, $) {
						try {
							this.p(y, typeof $ > "u" ? f : { ...f, ...$ });
						} catch (v) {
							this.cancel(),
								this.l.error(v),
								this.l.error("snippet_error"),
								this.l.error("insert_template=", y),
								this.l.error(
									"existing_template=",
									this.d ? this.d._logInfo() : "<no_session>",
								);
						}
					}
					p(y, $) {
						if (this.k.hasModel()) {
							if (
								(this.f.clear(),
								$.undoStopBefore && this.k.getModel().pushStackElement(),
								this.d && typeof y != "string" && this.cancel(),
								this.d
									? ((0, w.$vg)(typeof y == "string"), this.d.merge(y, $))
									: ((this.g = this.k.getModel().getAlternativeVersionId()),
										(this.d = new p.$oDb(this.k, y, $, this.n)),
										this.d.insert()),
								$.undoStopAfter && this.k.getModel().pushStackElement(),
								this.d?.hasChoice)
							) {
								const v = {
										_debugDisplayName: "snippetChoiceCompletions",
										provideCompletionItems: (L, D) => {
											if (
												!this.d ||
												L !== this.k.getModel() ||
												!C.$hL.equals(this.k.getPosition(), D)
											)
												return;
											const { activeChoice: M } = this.d;
											if (!M || M.choice.options.length === 0) return;
											const N = L.getValueInRange(M.range),
												A = !!M.choice.options.find((O) => O.value === N),
												R = [];
											for (let O = 0; O < M.choice.options.length; O++) {
												const B = M.choice.options[O];
												R.push({
													kind: m.CompletionItemKind.Value,
													label: B.value,
													insertText: B.value,
													sortText: "a".repeat(O + 1),
													range: M.range,
													filterText: A ? `${N}_${B.value}` : void 0,
													command: {
														id: "jumpToNextSnippetPlaceholder",
														title: (0, h.localize)(1427, null),
													},
												});
											}
											return { suggestions: R };
										},
									},
									S = this.k.getModel();
								let I,
									T = !1;
								const P = () => {
										I?.dispose(), (T = !1);
									},
									k = () => {
										T ||
											((I = this.m.completionProvider.register(
												{
													language: S.getLanguageId(),
													pattern: S.uri.fsPath,
													scheme: S.uri.scheme,
													exclusive: !0,
												},
												v,
											)),
											this.f.add(I),
											(T = !0));
									};
								this.j = { provider: v, enable: k, disable: P };
							}
							this.q(),
								this.f.add(
									this.k.onDidChangeModelContent(
										(v) => v.isFlush && this.cancel(),
									),
								),
								this.f.add(this.k.onDidChangeModel(() => this.cancel())),
								this.f.add(this.k.onDidChangeCursorSelection(() => this.q()));
						}
					}
					q() {
						if (!(!this.d || !this.k.hasModel())) {
							if (this.g === this.k.getModel().getAlternativeVersionId())
								return this.cancel();
							if (!this.d.hasPlaceholder) return this.cancel();
							if (
								this.d.isAtLastPlaceholder ||
								!this.d.isSelectionWithinPlaceholders()
							)
								return this.k.getModel().pushStackElement(), this.cancel();
							this.a.set(!0),
								this.c.set(!this.d.isAtFirstPlaceholder),
								this.b.set(!this.d.isAtLastPlaceholder),
								this.r();
						}
					}
					r() {
						if (!this.d || !this.k.hasModel()) {
							this.h = void 0;
							return;
						}
						const { activeChoice: y } = this.d;
						if (!y || !this.j) {
							this.j?.disable(), (this.h = void 0);
							return;
						}
						this.h !== y.choice &&
							((this.h = y.choice),
							this.j.enable(),
							queueMicrotask(() => {
								(0, a.$8Cb)(this.k, this.j.provider);
							}));
					}
					finish() {
						for (; this.a.get(); ) this.next();
					}
					cancel(y = !1) {
						this.a.reset(),
							this.c.reset(),
							this.b.reset(),
							this.f.clear(),
							(this.h = void 0),
							this.d?.dispose(),
							(this.d = void 0),
							(this.g = -1),
							y && this.k.setSelections([this.k.getSelection()]);
					}
					prev() {
						this.d?.prev(), this.q();
					}
					next() {
						this.d?.next(), this.q();
					}
					isInSnippet() {
						return !!this.a.get();
					}
					getSessionEnclosingRange() {
						if (this.d) return this.d.getEnclosingRange();
					}
				};
				(e.$aDb = b),
					(e.$aDb =
						b =
						o =
							Ne([j(1, g.$ik), j(2, u.$k3), j(3, c.$6j), j(4, r.$aN)], b)),
					(0, E.$qtb)(b.ID, b, E.EditorContributionInstantiation.Lazy);
				const s = E.$htb.bindToContribution(b.get);
				(0, E.$mtb)(
					new s({
						id: "jumpToNextSnippetPlaceholder",
						precondition: c.$Kj.and(b.InSnippetMode, b.HasNextTabstop),
						handler: (l) => l.next(),
						kbOpts: {
							weight: n.KeybindingWeight.EditorContrib + 30,
							kbExpr: d.EditorContextKeys.textInputFocus,
							primary: t.KeyCode.Tab,
						},
					}),
				),
					(0, E.$mtb)(
						new s({
							id: "jumpToPrevSnippetPlaceholder",
							precondition: c.$Kj.and(b.InSnippetMode, b.HasPrevTabstop),
							handler: (l) => l.prev(),
							kbOpts: {
								weight: n.KeybindingWeight.EditorContrib + 30,
								kbExpr: d.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.Shift | t.KeyCode.Tab,
							},
						}),
					),
					(0, E.$mtb)(
						new s({
							id: "leaveSnippet",
							precondition: b.InSnippetMode,
							handler: (l) => l.cancel(!0),
							kbOpts: {
								weight: n.KeybindingWeight.EditorContrib + 30,
								kbExpr: d.EditorContextKeys.textInputFocus,
								primary: t.KeyCode.Escape,
								secondary: [t.KeyMod.Shift | t.KeyCode.Escape],
							},
						}),
					),
					(0, E.$mtb)(
						new s({
							id: "acceptSnippet",
							precondition: b.InSnippetMode,
							handler: (l) => l.finish(),
						}),
					);
			},
		),
		define(
			de[2922],
			he([
				1, 0, 24, 214, 433, 29, 3, 77, 37, 28, 188, 48, 17, 104, 490, 458, 98,
				74, 152, 64, 917, 2777, 1196, 753, 254, 31, 5,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.VersionIdChangeReason = e.$ODb = void 0),
					(e.$PDb = k);
				let T = class extends C.$1c {
					get isAcceptingPartially() {
						return this.q;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this.textModel = N),
							(this.selectedSuggestItem = A),
							(this._textModelVersionId = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.z = x),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.f = this.D(
								this.C.createInstance(
									l.$OCb,
									this.textModel,
									this._textModelVersionId,
									this.t,
								),
							)),
							(this.g = (0, d.observableValue)(this, !1)),
							(this.h = (0, d.observableSignal)(this)),
							(this.isHidden = (0, d.observableValue)(this, !1)),
							(this.j = (0, d.observableValue)(this, void 0)),
							(this.n = (0, d.derived)(
								this,
								(K) => this.s.read(K)[0] ?? new a.$hL(1, 1),
							)),
							(this.q = !1),
							(this.H = new Set([P.Redo, P.Undo, P.AcceptWord])),
							(this.J = (0, d.derivedHandleChanges)(
								{
									owner: this,
									createEmptyChangeSummary: () => ({
										preserveCurrentCompletion: !1,
										inlineCompletionTriggerKind:
											o.InlineCompletionTriggerKind.Automatic,
									}),
									handleChange: (K, J) => (
										K.didChange(this._textModelVersionId) &&
										this.H.has(this.I(K.change))
											? (J.preserveCurrentCompletion = !0)
											: K.didChange(this.h) &&
												(J.inlineCompletionTriggerKind =
													o.InlineCompletionTriggerKind.Explicit),
										!0
									),
								},
								(K, J) => {
									if (
										(this.h.read(K),
										!(
											(this.z.read(K) && this.selectedSuggestItem.read(K)) ||
											this.g.read(K)
										))
									) {
										this.f.cancelUpdate();
										return;
									}
									this._textModelVersionId.read(K);
									const X = this.f.suggestWidgetInlineCompletions.get(),
										Y = this.selectedSuggestItem.read(K);
									if (X && !Y) {
										const te = this.f.inlineCompletions.get();
										(0, d.transaction)((Q) => {
											(!te || X.request.versionId > te.request.versionId) &&
												this.f.inlineCompletions.set(X.clone(), Q),
												this.f.clearSuggestWidgetInlineCompletions(Q);
										});
									}
									const ie = this.n.read(K),
										ne = {
											triggerKind: J.inlineCompletionTriggerKind,
											selectedSuggestionInfo: Y?.toSelectedSuggestionInfo(),
										},
										ee = this.selectedInlineCompletion.get(),
										_ =
											J.preserveCurrentCompletion || ee?.forwardStable
												? ee
												: void 0;
									return this.f.fetch(ie, ne, _);
								},
							)),
							(this.L = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(K) => {
									if (this.isHidden.get()) return [];
									const J = this.f.inlineCompletions.read(K);
									if (!J) return [];
									const W = this.n.read(K);
									return J.inlineCompletions.filter((Y) =>
										Y.isVisible(this.textModel, W, K),
									);
								},
							)),
							(this.selectedInlineCompletionIndex = (0, d.derived)(
								this,
								(K) => {
									const J = this.j.read(K),
										W = this.L.read(K),
										X =
											this.j === void 0
												? -1
												: W.findIndex((Y) => Y.semanticId === J);
									return X === -1 ? (this.j.set(void 0, void 0), 0) : X;
								},
							)),
							(this.selectedInlineCompletion = (0, d.derived)(this, (K) => {
								const J = this.L.read(K),
									W = this.selectedInlineCompletionIndex.read(K);
								return J[W];
							})),
							(this.activeCommands = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(K) =>
									this.selectedInlineCompletion.read(K)?.inlineCompletion.source
										.inlineCompletions.commands ?? [],
							)),
							(this.lastTriggerKind = this.f.inlineCompletions.map(
								this,
								(K) => K?.request.context.triggerKind,
							)),
							(this.inlineCompletionsCount = (0, d.derived)(this, (K) => {
								if (
									this.lastTriggerKind.read(K) ===
									o.InlineCompletionTriggerKind.Explicit
								)
									return this.L.read(K).length;
							})),
							(this.state = (0, d.derivedOpts)(
								{
									owner: this,
									equalsFn: (K, J) =>
										!K || !J
											? K === J
											: (0, s.$ECb)(K.ghostTexts, J.ghostTexts) &&
												K.inlineCompletion === J.inlineCompletion &&
												K.suggestItem === J.suggestItem,
								},
								(K) => {
									const J = this.textModel,
										W = this.selectedSuggestItem.read(K);
									if (W) {
										const X = (0, y.$LCb)(W.toSingleTextEdit(), J),
											Y = this.M(X, K);
										if (!this.u.read(K) && !Y) return;
										const ne = Y?.edit ?? X,
											ee = Y ? Y.edit.text.length - X.text.length : 0,
											_ = this.w.read(K),
											te = this.s.read(K),
											Q = [ne, ...k(this.textModel, te, ne)],
											Z = Q.map((re, le) =>
												(0, y.$NCb)(re, J, _, te[le], ee),
											).filter(r.$tg),
											se = Z[0] ?? new s.$BCb(ne.range.endLineNumber, []);
										return {
											edits: Q,
											primaryGhostText: se,
											ghostTexts: Z,
											inlineCompletion: Y?.completion,
											suggestItem: W,
										};
									} else {
										if (!this.g.read(K)) return;
										const X = this.selectedInlineCompletion.read(K);
										if (!X) return;
										const Y = X.toSingleTextEdit(K),
											ie = this.y.read(K),
											ne = this.s.read(K),
											ee = [Y, ...k(this.textModel, ne, Y)],
											_ = ee
												.map((te, Q) => (0, y.$NCb)(te, J, ie, ne[Q], 0))
												.filter(r.$tg);
										return _[0]
											? {
													edits: ee,
													primaryGhostText: _[0],
													ghostTexts: _,
													inlineCompletion: X,
													suggestItem: void 0,
												}
											: void 0;
									}
								},
							)),
							(this.ghostTexts = (0, d.derivedOpts)(
								{ owner: this, equalsFn: s.$ECb },
								(K) => {
									const J = this.state.read(K);
									if (J) return J.ghostTexts;
								},
							)),
							(this.primaryGhostText = (0, d.derivedOpts)(
								{ owner: this, equalsFn: s.$FCb },
								(K) => {
									const J = this.state.read(K);
									if (J) return J?.primaryGhostText;
								},
							)),
							this.D((0, d.recomputeInitiallyAndOnChange)(this.J));
						let G;
						this.D(
							(0, d.autorun)((K) => {
								const W = this.state.read(K)?.inlineCompletion;
								if (W?.semanticId !== G?.semanticId && ((G = W), W)) {
									const X = W.inlineCompletion,
										Y = X.source;
									Y.provider.handleItemDidShow?.(
										Y.inlineCompletions,
										X.sourceInlineCompletion,
										X.insertText,
									);
								}
							}),
						);
					}
					I(N) {
						return N?.isUndoing
							? P.Undo
							: N?.isRedoing
								? P.Redo
								: this.isAcceptingPartially
									? P.AcceptWord
									: P.Other;
					}
					async trigger(N) {
						this.g.set(!0, N), await this.J.get();
					}
					async triggerExplicitly(N) {
						(0, d.subtransaction)(N, (A) => {
							this.g.set(!0, A), this.h.trigger(A);
						}),
							await this.J.get();
					}
					stop(N) {
						(0, d.subtransaction)(N, (A) => {
							this.g.set(!1, A), this.f.clear(A);
						});
					}
					M(N, A) {
						const R = this.textModel,
							O = this.f.suggestWidgetInlineCompletions.read(A),
							B = O
								? O.inlineCompletions
								: [this.selectedInlineCompletion.read(A)].filter(r.$tg);
						return (0, i.$vb)(B, (z) => {
							let F = z.toSingleTextEdit(A);
							return (
								(F = (0, y.$LCb)(
									F,
									R,
									h.$iL.fromPositions(
										F.range.getStartPosition(),
										N.range.getEndPosition(),
									),
								)),
								(0, y.$MCb)(F, N) ? { completion: z, edit: F } : void 0
							);
						});
					}
					async N(N) {
						await this.triggerExplicitly();
						const A = this.L.get() || [];
						if (A.length > 0) {
							const R =
								(this.selectedInlineCompletionIndex.get() + N + A.length) %
								A.length;
							this.j.set(A[R].semanticId, void 0);
						} else this.j.set(void 0, void 0);
					}
					async next() {
						await this.N(1);
					}
					async previous() {
						await this.N(-1);
					}
					async accept(N) {
						if (N.getModel() !== this.textModel) throw new E.$gb();
						const A = this.state.get();
						if (!A || A.primaryGhostText.isEmpty() || !A.inlineCompletion)
							return;
						const R = A.inlineCompletion.toInlineCompletion(void 0);
						if (
							(R.command && R.source.addRef(), N.pushUndoStop(), R.snippetInfo)
						)
							N.executeEdits("inlineSuggestion.accept", [
								u.$jL.replace(R.range, ""),
								...R.additionalTextEdits,
							]),
								N.setPosition(
									R.snippetInfo.range.getStartPosition(),
									"inlineCompletionAccept",
								),
								v.$aDb
									.get(N)
									?.insert(R.snippetInfo.snippet, { undoStopBefore: !1 });
						else {
							const O = A.edits,
								B = D(O).map((U) => c.$kL.fromPositions(U));
							N.executeEdits("inlineSuggestion.accept", [
								...O.map((U) => u.$jL.replace(U.range, U.text)),
								...R.additionalTextEdits,
							]),
								N.setSelections(B, "inlineCompletionAccept");
						}
						this.stop(),
							R.command &&
								(await this.F.executeCommand(
									R.command.id,
									...(R.command.arguments || []),
								).then(void 0, E.$5),
								R.source.removeRef());
					}
					async acceptNextWord(N) {
						await this.O(
							N,
							(A, R) => {
								const O = this.textModel.getLanguageIdAtPosition(
										A.lineNumber,
										A.column,
									),
									B = this.G.getLanguageConfiguration(O),
									U = new RegExp(
										B.wordDefinition.source,
										B.wordDefinition.flags.replace("g", ""),
									),
									z = R.match(U);
								let F = 0;
								z && z.index !== void 0
									? z.index === 0
										? (F = z[0].length)
										: (F = z.index)
									: (F = R.length);
								const H = /\s+/g.exec(R);
								return (
									H &&
										H.index !== void 0 &&
										H.index + H[0].length < F &&
										(F = H.index + H[0].length),
									F
								);
							},
							o.PartialAcceptTriggerKind.Word,
						);
					}
					async acceptNextLine(N) {
						await this.O(
							N,
							(A, R) => {
								const O = R.match(/\n/);
								return O && O.index !== void 0 ? O.index + 1 : R.length;
							},
							o.PartialAcceptTriggerKind.Line,
						);
					}
					async clearCopilotSuggestions() {
						(0, d.transaction)((N) => {
							this.f.clear(N);
						});
					}
					async O(N, A, R) {
						if (N.getModel() !== this.textModel) throw new E.$gb();
						const O = this.state.get();
						if (!O || O.primaryGhostText.isEmpty() || !O.inlineCompletion)
							return;
						const B = O.primaryGhostText,
							U = O.inlineCompletion.toInlineCompletion(void 0);
						if (U.snippetInfo || U.filterText !== U.insertText) {
							await this.accept(N);
							return;
						}
						const z = B.parts[0],
							F = new a.$hL(B.lineNumber, z.column),
							x = z.text,
							H = A(F, x);
						if (H === x.length && B.parts.length === 1) {
							this.accept(N);
							return;
						}
						const q = x.substring(0, H),
							V = this.s.get(),
							G = V[0];
						U.source.addRef();
						try {
							this.q = !0;
							try {
								N.pushUndoStop();
								const K = h.$iL.fromPositions(G, F),
									J = N.getModel().getValueInRange(K) + q,
									W = new n.$wL(K, J),
									X = [W, ...k(this.textModel, V, W)],
									Y = D(X).map((ie) => c.$kL.fromPositions(ie));
								N.executeEdits(
									"inlineSuggestion.accept",
									X.map((ie) => u.$jL.replace(ie.range, ie.text)),
								),
									N.setSelections(Y, "inlineCompletionPartialAccept"),
									N.revealPositionInCenterIfOutsideViewport(
										N.getPosition(),
										p.ScrollType.Immediate,
									);
							} finally {
								this.q = !1;
							}
							if (U.source.provider.handlePartialAccept) {
								const K = h.$iL.fromPositions(
										U.range.getStartPosition(),
										g.$tL.ofText(q).addToPosition(F),
									),
									J = N.getModel().getValueInRange(K, b.EndOfLinePreference.LF);
								U.source.provider.handlePartialAccept(
									U.source.inlineCompletions,
									U.sourceInlineCompletion,
									J.length,
									{ kind: R },
								);
							}
						} finally {
							U.source.removeRef();
						}
					}
					handleSuggestAccepted(N) {
						const A = (0, y.$LCb)(N.toSingleTextEdit(), this.textModel),
							R = this.M(A, void 0);
						if (!R) return;
						const O = R.completion.inlineCompletion;
						O.source.provider.handlePartialAccept?.(
							O.source.inlineCompletions,
							O.sourceInlineCompletion,
							A.text.length,
							{ kind: o.PartialAcceptTriggerKind.Suggest },
						);
					}
				};
				(e.$ODb = T),
					(e.$ODb = T = Ne([j(9, I.$Li), j(10, S.$ek), j(11, f.$aN)], T));
				var P;
				(function (M) {
					(M[(M.Undo = 0)] = "Undo"),
						(M[(M.Redo = 1)] = "Redo"),
						(M[(M.AcceptWord = 2)] = "AcceptWord"),
						(M[(M.Other = 3)] = "Other");
				})(P || (e.VersionIdChangeReason = P = {}));
				function k(M, N, A) {
					if (N.length === 1) return [];
					const R = N[0],
						O = N.slice(1),
						B = A.range.getStartPosition(),
						U = A.range.getEndPosition(),
						z = M.getValueInRange(h.$iL.fromPositions(R, U)),
						F = (0, $.$ACb)(R, B);
					if (F.lineNumber < 1)
						return (
							(0, E.$4)(
								new E.$gb(`positionWithinTextEdit line number should be bigger than 0.
			Invalid subtraction between ${R.toString()} and ${B.toString()}`),
							),
							[]
						);
					const x = L(A.text, F);
					return O.map((H) => {
						const q = (0, $.$zCb)((0, $.$ACb)(H, B), U),
							V = M.getValueInRange(h.$iL.fromPositions(H, q)),
							G = (0, m.$Of)(z, V),
							K = h.$iL.fromPositions(H, H.delta(0, G));
						return new n.$wL(K, x);
					});
				}
				function L(M, N) {
					let A = "";
					const R = (0, m.$Af)(M);
					for (let O = N.lineNumber - 1; O < R.length; O++)
						A += R[O].substring(O === N.lineNumber - 1 ? N.column - 1 : 0);
					return A;
				}
				function D(M) {
					const N = t.$ec.createSortPermutation(
							M,
							(0, t.$0b)((B) => B.range, h.$iL.compareRangesUsingStarts),
						),
						R = new n.$vL(N.apply(M)).getNewRanges();
					return N.inverse()
						.apply(R)
						.map((B) => B.getEndPosition());
				}
			},
		),
		define(
			de[2923],
			he([1, 0, 3, 69, 204, 15, 350, 660, 752, 152, 29, 1557, 103, 5, 38]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mkc = void 0);
				var g;
				(function ($) {
					($.OUTLINE_MODEL = "outlineModel"),
						($.FOLDING_PROVIDER_MODEL = "foldingProviderModel"),
						($.INDENTATION_MODEL = "indentationModel");
				})(g || (g = {}));
				var p;
				(function ($) {
					($[($.VALID = 0)] = "VALID"),
						($[($.INVALID = 1)] = "INVALID"),
						($[($.CANCELED = 2)] = "CANCELED");
				})(p || (p = {}));
				let o = class extends t.$1c {
					constructor(v, S, I, T) {
						switch (
							(super(),
							(this.g = v),
							(this.a = []),
							(this.b = null),
							(this.c = this.D(new E.$Jh(300))),
							(this.f = this.D(new t.$Zc())),
							this.g.getOption(n.EditorOption.stickyScroll).defaultModel)
						) {
							case g.OUTLINE_MODEL:
								this.a.push(new b(this.g, T));
							case g.FOLDING_PROVIDER_MODEL:
								this.a.push(new y(this.g, S, T));
							case g.INDENTATION_MODEL:
								this.a.push(new l(this.g, I));
								break;
						}
					}
					dispose() {
						this.a.forEach((v) => v.dispose()),
							this.f.clear(),
							this.h(),
							super.dispose();
					}
					h() {
						this.b && (this.b.cancel(), (this.b = null));
					}
					async update(v) {
						return (
							this.f.clear(),
							this.f.add({
								dispose: () => {
									this.h(), this.c.cancel();
								},
							}),
							this.h(),
							await this.c
								.trigger(async () => {
									for (const S of this.a) {
										const { statusPromise: I, modelPromise: T } =
											S.computeStickyModel(v);
										this.b = T;
										const P = await I;
										if (this.b !== T) return null;
										switch (P) {
											case p.CANCELED:
												return this.f.clear(), null;
											case p.VALID:
												return S.stickyModel;
										}
									}
									return null;
								})
								.catch((S) => ((0, u.$4)(S), null))
						);
					}
				};
				(e.$mkc = o), (e.$mkc = o = Ne([j(2, c.$Li), j(3, i.$k3)], o));
				class f extends t.$1c {
					constructor(v) {
						super(), (this.b = v), (this.a = null);
					}
					get stickyModel() {
						return this.a;
					}
					c() {
						return (this.a = null), p.INVALID;
					}
					computeStickyModel(v) {
						if (v.isCancellationRequested || !this.g())
							return { statusPromise: this.c(), modelPromise: null };
						const S = (0, E.$zh)((I) => this.h(I));
						return {
							statusPromise: S.then((I) =>
								this.f(I)
									? v.isCancellationRequested
										? p.CANCELED
										: ((this.a = this.j(v, I)), p.VALID)
									: this.c(),
							).then(void 0, (I) => ((0, u.$4)(I), p.CANCELED)),
							modelPromise: S,
						};
					}
					f(v) {
						return !0;
					}
					g() {
						return !0;
					}
				}
				let b = class extends f {
					constructor(v, S) {
						super(v), (this.m = S);
					}
					h(v) {
						return w.$8Db.create(
							this.m.documentSymbolProvider,
							this.b.getModel(),
							v,
						);
					}
					j(v, S) {
						const { stickyOutlineElement: I, providerID: T } = this.s(
								S,
								this.a?.outlineProviderId,
							),
							P = this.b.getModel();
						return new a.$lkc(P.uri, P.getVersionId(), I, T);
					}
					f(v) {
						return v && v.children.size > 0;
					}
					s(v, S) {
						let I;
						if (h.Iterable.first(v.children.values()) instanceof w.$7Db) {
							const L = h.Iterable.find(v.children.values(), (D) => D.id === S);
							if (L) I = L.children;
							else {
								let D = "",
									M = -1,
									N;
								for (const [A, R] of v.children.entries()) {
									const O = this.w(R);
									O > M && ((N = R), (M = O), (D = R.id));
								}
								(S = D), (I = N.children);
							}
						} else I = v.children;
						const T = [],
							P = Array.from(I.values()).sort((L, D) => {
								const M = new a.$jkc(
										L.symbol.range.startLineNumber,
										L.symbol.range.endLineNumber,
									),
									N = new a.$jkc(
										D.symbol.range.startLineNumber,
										D.symbol.range.endLineNumber,
									);
								return this.u(M, N);
							});
						for (const L of P)
							T.push(this.t(L, L.symbol.selectionRange.startLineNumber));
						return {
							stickyOutlineElement: new a.$kkc(void 0, T, void 0),
							providerID: S,
						};
					}
					t(v, S) {
						const I = [];
						for (const P of v.children.values())
							if (
								P.symbol.selectionRange.startLineNumber !==
								P.symbol.range.endLineNumber
							)
								if (P.symbol.selectionRange.startLineNumber !== S)
									I.push(this.t(P, P.symbol.selectionRange.startLineNumber));
								else
									for (const k of P.children.values())
										I.push(this.t(k, P.symbol.selectionRange.startLineNumber));
						I.sort((P, k) => this.u(P.range, k.range));
						const T = new a.$jkc(
							v.symbol.selectionRange.startLineNumber,
							v.symbol.range.endLineNumber,
						);
						return new a.$kkc(T, I, void 0);
					}
					u(v, S) {
						return v.startLineNumber !== S.startLineNumber
							? v.startLineNumber - S.startLineNumber
							: S.endLineNumber - v.endLineNumber;
					}
					w(v) {
						let S = 0;
						for (const I of v.children.values()) S += this.w(I);
						return v instanceof w.$6Db
							? S +
									v.symbol.range.endLineNumber -
									v.symbol.selectionRange.startLineNumber
							: S;
					}
				};
				b = Ne([j(1, i.$k3)], b);
				class s extends f {
					constructor(v) {
						super(v), (this.m = new C.$1Nb(v));
					}
					j(v, S) {
						const I = this.r(S),
							T = this.b.getModel();
						return new a.$lkc(T.uri, T.getVersionId(), I, void 0);
					}
					f(v) {
						return v !== null;
					}
					r(v) {
						const S = v.length,
							I = [],
							T = new a.$kkc(void 0, [], void 0);
						for (let P = 0; P < S; P++) {
							const k = v.getParentIndex(P);
							let L;
							k !== -1 ? (L = I[k]) : (L = T);
							const D = new a.$kkc(
								new a.$jkc(v.getStartLineNumber(P), v.getEndLineNumber(P) + 1),
								[],
								L,
							);
							L.children.push(D), I.push(D);
						}
						return T;
					}
				}
				let l = class extends s {
					constructor(v, S) {
						super(v),
							(this.t = S),
							(this.s = this.D(new m.$PNb(v.getModel(), this.t, this.m)));
					}
					async h(v) {
						return this.s.compute(v);
					}
				};
				l = Ne([j(1, r.$aN)], l);
				let y = class extends s {
					constructor(v, S, I) {
						super(v), (this.t = I);
						const T = C.$ZNb.getFoldingRangeProviders(this.t, v.getModel());
						T.length > 0 &&
							(this.s = this.D(new d.$XNb(v.getModel(), T, S, this.m, void 0)));
					}
					g() {
						return this.s !== void 0;
					}
					async h(v) {
						return this.s?.compute(v) ?? null;
					}
				};
				y = Ne([j(2, i.$k3)], y);
			},
		),
		define(
			de[2924],
			he([1, 0, 3, 69, 33, 38, 15, 24, 6, 152, 2923]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$okc = e.$nkc = void 0);
				class a {
					constructor(n, g, p) {
						(this.startLineNumber = n),
							(this.endLineNumber = g),
							(this.nestingDepth = p);
					}
				}
				e.$nkc = a;
				let h = class extends t.$1c {
					static {
						this.ID = "store.contrib.stickyScrollController";
					}
					constructor(n, g, p) {
						super(),
							(this.q = g),
							(this.r = p),
							(this.c = this.D(new m.$re())),
							(this.onDidChangeStickyScroll = this.c.event),
							(this.j = null),
							(this.m = null),
							(this.n = null),
							(this.f = n),
							(this.h = this.D(new t.$Zc())),
							(this.g = this.D(new C.$Yh(() => this.update(), 50))),
							this.D(
								this.f.onDidChangeConfiguration((o) => {
									o.hasChanged(E.EditorOption.stickyScroll) && this.s();
								}),
							),
							this.s();
					}
					s() {
						this.h.clear(),
							this.f.getOption(E.EditorOption.stickyScroll).enabled &&
								(this.h.add(
									this.f.onDidChangeModel(() => {
										(this.j = null), this.t(), this.c.fire(), this.update();
									}),
								),
								this.h.add(this.f.onDidChangeHiddenAreas(() => this.update())),
								this.h.add(
									this.f.onDidChangeModelContent(() => this.g.schedule()),
								),
								this.h.add(
									this.q.documentSymbolProvider.onDidChange(() =>
										this.update(),
									),
								),
								this.h.add(
									(0, t.$Yc)(() => {
										this.n?.dispose(), (this.n = null);
									}),
								),
								this.t(),
								this.update());
					}
					getVersionId() {
						return this.j?.version;
					}
					t() {
						this.n?.dispose(), (this.n = null);
						const n = this.f;
						n.hasModel() &&
							(this.n = new u.$mkc(n, () => this.g.schedule(), this.r, this.q));
					}
					async update() {
						this.m?.dispose(!0),
							(this.m = new w.$Ce()),
							await this.u(this.m.token),
							this.c.fire();
					}
					async u(n) {
						if (
							!this.f.hasModel() ||
							!this.n ||
							this.f.getModel().isTooLargeForTokenization()
						) {
							this.j = null;
							return;
						}
						const g = await this.n.update(n);
						n.isCancellationRequested || (this.j = g);
					}
					w(n) {
						return n === -1 ? (n = 0) : n < 0 && (n = -n - 2), n;
					}
					getCandidateStickyLinesIntersectingFromStickyModel(n, g, p, o, f) {
						if (g.children.length === 0) return;
						let b = f;
						const s = [];
						for (let $ = 0; $ < g.children.length; $++) {
							const v = g.children[$];
							v.range && s.push(v.range.startLineNumber);
						}
						const l = this.w((0, d.$Ab)(s, n.startLineNumber, ($, v) => $ - v)),
							y = this.w((0, d.$Ab)(s, n.startLineNumber + o, ($, v) => $ - v));
						for (let $ = l; $ <= y; $++) {
							const v = g.children[$];
							if (!v) return;
							if (v.range) {
								const S = v.range.startLineNumber,
									I = v.range.endLineNumber;
								n.startLineNumber <= I + 1 &&
									S - 1 <= n.endLineNumber &&
									S !== b &&
									((b = S),
									p.push(new a(S, I - 1, o + 1)),
									this.getCandidateStickyLinesIntersectingFromStickyModel(
										n,
										v,
										p,
										o + 1,
										S,
									));
							} else
								this.getCandidateStickyLinesIntersectingFromStickyModel(
									n,
									v,
									p,
									o,
									f,
								);
						}
					}
					getCandidateStickyLinesIntersecting(n) {
						if (!this.j?.element) return [];
						let g = [];
						this.getCandidateStickyLinesIntersectingFromStickyModel(
							n,
							this.j.element,
							g,
							0,
							-1,
						);
						const p = this.f._getViewModel()?.getHiddenAreas();
						if (p)
							for (const o of p)
								g = g.filter(
									(f) =>
										!(
											f.startLineNumber >= o.startLineNumber &&
											f.endLineNumber <= o.endLineNumber + 1
										),
								);
						return g;
					}
				};
				(e.$okc = h), (e.$okc = h = Ne([j(1, i.$k3), j(2, r.$aN)], h));
			},
		),
		define(
			de[2925],
			he([
				1, 0, 7, 432, 24, 3, 26, 56, 1208, 281, 38, 48, 462, 533, 598, 1219,
				2320,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ikc = e.$hkc = void 0),
					(t = mt(t));
				class p {
					constructor(I, T, P, k = null) {
						(this.startLineNumbers = I),
							(this.endLineNumbers = T),
							(this.lastLineRelativePosition = P),
							(this.showEndForLine = k);
					}
					equals(I) {
						return (
							!!I &&
							this.lastLineRelativePosition === I.lastLineRelativePosition &&
							this.showEndForLine === I.showEndForLine &&
							(0, w.$yb)(this.startLineNumbers, I.startLineNumbers) &&
							(0, w.$yb)(this.endLineNumbers, I.endLineNumbers)
						);
					}
					static get Empty() {
						return new p([], [], 0);
					}
				}
				e.$hkc = p;
				const o = (0, i.$bjb)("stickyScrollViewLayer", {
						createHTML: (S) => S,
					}),
					f = "data-sticky-line-index",
					b = "data-sticky-is-line",
					s = "data-sticky-is-line-number",
					l = "data-sticky-is-folding-icon";
				class y extends E.$1c {
					constructor(I) {
						super(),
							(this.t = I),
							(this.a = new E.$Zc()),
							(this.b = document.createElement("div")),
							(this.c = document.createElement("div")),
							(this.f = document.createElement("div")),
							(this.g = document.createElement("div")),
							(this.j = this.t.getOption(u.EditorOption.lineHeight)),
							(this.m = []),
							(this.n = []),
							(this.q = 0),
							(this.r = 0),
							(this.s = !1),
							(this.c.className = "sticky-widget-line-numbers"),
							this.c.setAttribute("role", "none"),
							(this.g.className = "sticky-widget-lines"),
							this.g.setAttribute("role", "list"),
							(this.f.className = "sticky-widget-lines-scrollable"),
							this.f.appendChild(this.g),
							(this.b.className = "sticky-widget"),
							this.b.classList.toggle("peek", I instanceof r.$wDb),
							this.b.appendChild(this.c),
							this.b.appendChild(this.f);
						const T = () => {
							this.g.style.left = this.t.getOption(u.EditorOption.stickyScroll)
								.scrollWithEditor
								? `-${this.t.getScrollLeft()}px`
								: "0px";
						};
						this.D(
							this.t.onDidChangeConfiguration((P) => {
								P.hasChanged(u.EditorOption.stickyScroll) && T(),
									P.hasChanged(u.EditorOption.lineHeight) &&
										(this.j = this.t.getOption(u.EditorOption.lineHeight));
							}),
						),
							this.D(
								this.t.onDidScrollChange((P) => {
									P.scrollLeftChanged && T(), P.scrollWidthChanged && this.y();
								}),
							),
							this.D(
								this.t.onDidChangeModel(() => {
									T(), this.y();
								}),
							),
							this.D(this.a),
							T(),
							this.D(
								this.t.onDidLayoutChange((P) => {
									this.y();
								}),
							),
							this.y();
					}
					get lineNumbers() {
						return this.n;
					}
					get lineNumberCount() {
						return this.n.length;
					}
					getRenderedStickyLine(I) {
						return this.m.find((T) => T.lineNumber === I);
					}
					getCurrentLines() {
						return this.n;
					}
					setState(I, T, P) {
						if (
							P === void 0 &&
							((!this.h && !I) || (this.h && this.h.equals(I)))
						)
							return;
						const k = this.u(I),
							L = k ? void 0 : I,
							D = k ? 0 : this.w(I, P);
						this.G(L, T, D), (this.h = I);
					}
					u(I) {
						if (!I) return !0;
						const T =
							I.startLineNumbers.length * this.j + I.lastLineRelativePosition;
						if (T > 0) {
							this.q = I.lastLineRelativePosition;
							const P = [...I.startLineNumbers];
							I.showEndForLine !== null &&
								(P[I.showEndForLine] = I.endLineNumbers[I.showEndForLine]),
								(this.n = P);
						} else (this.q = 0), (this.n = []);
						return T === 0;
					}
					w(I, T) {
						if (!I || !this.h) return 0;
						if (T !== void 0) return T;
						const P = this.h,
							k = I.startLineNumbers.findIndex(
								(L) => !P.startLineNumbers.includes(L),
							);
						return k === -1 ? 0 : k;
					}
					y() {
						const I = this.t.getLayoutInfo(),
							T = I.contentLeft;
						(this.c.style.width = `${T}px`),
							this.f.style.setProperty(
								"--vscode-editorStickyScroll-scrollableWidth",
								`${this.t.getScrollWidth() - I.verticalScrollbarWidth}px`,
							),
							(this.b.style.width = `${I.width - I.verticalScrollbarWidth}px`);
					}
					z(I) {
						this.a.clear();
						for (let T = I; T < this.m.length; T++) {
							const P = this.m[T];
							P.lineNumberDomNode.remove(), P.lineDomNode.remove();
						}
						(this.m = this.m.slice(0, I)), (this.b.style.display = "none");
					}
					C(I) {
						this.c.style.setProperty(
							"--vscode-editorStickyScroll-foldingOpacityTransition",
							`opacity ${I ? 0.5 : 0}s`,
						);
					}
					F(I) {
						for (const T of this.m) {
							const P = T.foldingIcon;
							P && P.setVisible(I ? !0 : P.isCollapsed);
						}
					}
					async G(I, T, P) {
						if ((this.z(P), !I)) return;
						for (const M of this.m) this.J(M);
						const k = this.t.getLayoutInfo(),
							L = this.n.slice(P);
						for (const [M, N] of L.entries()) {
							const A = this.I(M + P, N, T, k);
							A &&
								(this.g.appendChild(A.lineDomNode),
								this.c.appendChild(A.lineNumberDomNode),
								this.m.push(A));
						}
						T && (this.H(), this.C(!this.s));
						const D = this.n.length * this.j + this.q;
						(this.b.style.display = "block"),
							(this.c.style.height = `${D}px`),
							(this.f.style.height = `${D}px`),
							(this.b.style.height = `${D}px`),
							(this.b.style.marginLeft = "0px"),
							(this.r =
								Math.max(...this.m.map((M) => M.scrollWidth)) +
								k.verticalScrollbarWidth),
							this.t.layoutOverlayWidget(this);
					}
					H() {
						this.t.getOption(u.EditorOption.showFoldingControls) ===
							"mouseover" &&
							(this.a.add(
								t.$0fb(this.c, t.$$gb.MOUSE_ENTER, () => {
									(this.s = !0), this.F(!0);
								}),
							),
							this.a.add(
								t.$0fb(this.c, t.$$gb.MOUSE_LEAVE, () => {
									(this.s = !1), this.C(!0), this.F(!1);
								}),
							));
					}
					I(I, T, P, k) {
						const L = this.t._getViewModel();
						if (!L) return;
						const D = L.coordinatesConverter.convertModelPositionToViewPosition(
								new a.$hL(T, 1),
							).lineNumber,
							M = L.getViewLineRenderingData(D),
							N = this.t.getOption(u.EditorOption.lineNumbers);
						let A;
						try {
							A = c.$Fub.filter(
								M.inlineDecorations,
								D,
								M.minColumn,
								M.maxColumn,
							);
						} catch {
							A = [];
						}
						const R = new n.$Jub(
								!0,
								!0,
								M.content,
								M.continuesWithWrappedLine,
								M.isBasicASCII,
								M.containsRTL,
								0,
								M.tokens,
								A,
								M.tabSize,
								M.startVisibleColumn,
								1,
								1,
								1,
								500,
								"none",
								!0,
								!0,
								null,
							),
							O = new h.$KL(2e3),
							B = (0, n.$Nub)(R, O);
						let U;
						o ? (U = o.createHTML(O.build())) : (U = O.build());
						const z = document.createElement("span");
						z.setAttribute(f, String(I)),
							z.setAttribute(b, ""),
							z.setAttribute("role", "listitem"),
							(z.tabIndex = 0),
							(z.className = "sticky-line-content"),
							z.classList.add(`stickyLine${T}`),
							(z.style.lineHeight = `${this.j}px`),
							(z.innerHTML = U);
						const F = document.createElement("span");
						F.setAttribute(f, String(I)),
							F.setAttribute(s, ""),
							(F.className = "sticky-line-number"),
							(F.style.lineHeight = `${this.j}px`);
						const x = k.contentLeft;
						F.style.width = `${x}px`;
						const H = document.createElement("span");
						N.renderType === u.RenderLineNumbersType.On ||
						(N.renderType === u.RenderLineNumbersType.Interval && T % 10 === 0)
							? (H.innerText = T.toString())
							: N.renderType === u.RenderLineNumbersType.Relative &&
								(H.innerText = Math.abs(
									T - this.t.getPosition().lineNumber,
								).toString()),
							(H.className = "sticky-line-number-inner"),
							(H.style.lineHeight = `${this.j}px`),
							(H.style.width = `${k.lineNumbersWidth}px`),
							(H.style.paddingLeft = `${k.lineNumbersLeft}px`),
							F.appendChild(H);
						const q = this.L(P, T);
						q && F.appendChild(q.domNode),
							this.t.applyFontInfo(z),
							this.t.applyFontInfo(H),
							(F.style.lineHeight = `${this.j}px`),
							(z.style.lineHeight = `${this.j}px`),
							(F.style.height = `${this.j}px`),
							(z.style.height = `${this.j}px`);
						const V = new $(I, T, z, F, q, B.characterMapping, z.scrollWidth);
						return this.J(V);
					}
					J(I) {
						const T = I.index,
							P = I.lineDomNode,
							k = I.lineNumberDomNode,
							L = T === this.n.length - 1,
							D = "0",
							M = "1";
						(P.style.zIndex = L ? D : M), (k.style.zIndex = L ? D : M);
						const N = `${T * this.j + this.q + (I.foldingIcon?.isCollapsed ? 1 : 0)}px`,
							A = `${T * this.j}px`;
						return (P.style.top = L ? N : A), (k.style.top = L ? N : A), I;
					}
					L(I, T) {
						const P = this.t.getOption(u.EditorOption.showFoldingControls);
						if (!I || P === "never") return;
						const k = I.regions,
							L = k.findRange(T),
							D = k.getStartLineNumber(L);
						if (!(T === D)) return;
						const N = k.isCollapsed(L),
							A = new v(N, D, k.getEndLineNumber(L), this.j);
						return (
							A.setVisible(this.s ? !0 : N || P === "always"),
							A.domNode.setAttribute(l, ""),
							A
						);
					}
					getId() {
						return "editor.contrib.stickyScrollWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							preference: d.OverlayWidgetPositionPreference.TOP_CENTER,
							stackOridinal: 10,
						};
					}
					getMinContentWidthInPx() {
						return this.r;
					}
					focusLineWithIndex(I) {
						0 <= I && I < this.m.length && this.m[I].lineDomNode.focus();
					}
					getEditorPositionFromNode(I) {
						if (!I || I.children.length > 0) return null;
						const T = this.M(I);
						if (!T) return null;
						const P = (0, m.$Sub)(T.characterMapping, I, 0);
						return new a.$hL(T.lineNumber, P);
					}
					getLineNumberFromChildDomNode(I) {
						return this.M(I)?.lineNumber ?? null;
					}
					M(I) {
						const T = this.getLineIndexFromChildDomNode(I);
						return T === null || T < 0 || T >= this.m.length ? null : this.m[T];
					}
					getLineIndexFromChildDomNode(I) {
						const T = this.N(I, f);
						return T ? parseInt(T, 10) : null;
					}
					isInStickyLine(I) {
						return this.N(I, b) !== void 0;
					}
					isInFoldingIconDomNode(I) {
						return this.N(I, l) !== void 0;
					}
					N(I, T) {
						for (; I && I !== this.b; ) {
							const P = I.getAttribute(T);
							if (P !== null) return P;
							I = I.parentElement;
						}
					}
				}
				e.$ikc = y;
				class $ {
					constructor(I, T, P, k, L, D, M) {
						(this.index = I),
							(this.lineNumber = T),
							(this.lineDomNode = P),
							(this.lineNumberDomNode = k),
							(this.foldingIcon = L),
							(this.characterMapping = D),
							(this.scrollWidth = M);
					}
				}
				class v {
					constructor(I, T, P, k) {
						(this.isCollapsed = I),
							(this.foldingStartLine = T),
							(this.foldingEndLine = P),
							(this.dimension = k),
							(this.domNode = document.createElement("div")),
							(this.domNode.style.width = `${k}px`),
							(this.domNode.style.height = `${k}px`),
							(this.domNode.className = C.ThemeIcon.asClassName(
								I ? g.$TNb : g.$SNb,
							));
					}
					setVisible(I) {
						(this.domNode.style.cursor = I ? "pointer" : "default"),
							(this.domNode.style.opacity = I ? "1" : "0");
					}
				}
			},
		),
		define(
			de[1221],
			he([
				1, 0, 15, 33, 29, 6, 3, 37, 38, 248, 104, 74, 200, 1609, 121, 10, 8, 34,
				32, 1596, 373, 69, 132, 28, 765, 254, 113,
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
					(e.$cDb = e.State = e.$bDb = void 0);
				class P {
					static shouldAutoTrigger(A) {
						if (!A.hasModel()) return !1;
						const R = A.getModel(),
							O = A.getPosition();
						R.tokenization.tokenizeIfCheap(O.lineNumber);
						const B = R.getWordAtPosition(O);
						return !(
							!B ||
							(B.endColumn !== O.column && B.startColumn + 1 !== O.column) ||
							!isNaN(Number(B.word))
						);
					}
					constructor(A, R, O) {
						(this.leadingLineContent = A.getLineContent(R.lineNumber).substr(
							0,
							R.column - 1,
						)),
							(this.leadingWord = A.getWordUntilPosition(R)),
							(this.lineNumber = R.lineNumber),
							(this.column = R.column),
							(this.triggerOptions = O);
					}
				}
				e.$bDb = P;
				var k;
				(function (N) {
					(N[(N.Idle = 0)] = "Idle"),
						(N[(N.Manual = 1)] = "Manual"),
						(N[(N.Auto = 2)] = "Auto");
				})(k || (e.State = k = {}));
				function L(N, A, R) {
					if (!A.getContextKeyValue(v.$_Cb.inlineSuggestionVisible.key))
						return !0;
					const O = A.getContextKeyValue(v.$_Cb.suppressSuggestions.key);
					return O !== void 0
						? !O
						: !N.getOption(m.EditorOption.inlineSuggest).suppressSuggestions;
				}
				function D(N, A, R) {
					if (!A.getContextKeyValue("inlineSuggestionVisible")) return !0;
					const O = A.getContextKeyValue(v.$_Cb.suppressSuggestions.key);
					return O !== void 0
						? !O
						: !N.getOption(m.EditorOption.inlineSuggest).suppressSuggestions;
				}
				let M = (T = class {
					constructor(A, R, O, B, U, z, F, x, H) {
						(this.n = A),
							(this.o = R),
							(this.p = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.t = F),
							(this.u = x),
							(this.v = H),
							(this.a = new C.$Zc()),
							(this.b = new C.$Zc()),
							(this.c = new t.$Wh()),
							(this.d = void 0),
							(this.j = new C.$Zc()),
							(this.k = new E.$re()),
							(this.l = new E.$re()),
							(this.m = new E.$re()),
							(this.onDidCancel = this.k.event),
							(this.onDidTrigger = this.l.event),
							(this.onDidSuggest = this.m.event),
							(this.C = 0),
							(this.h = this.n.getSelection() || new u.$kL(1, 1, 1, 1)),
							this.a.add(
								this.n.onDidChangeModel(() => {
									this.w(), this.cancel();
								}),
							),
							this.a.add(
								this.n.onDidChangeModelLanguage(() => {
									this.w(), this.cancel();
								}),
							),
							this.a.add(
								this.n.onDidChangeConfiguration(() => {
									this.w();
								}),
							),
							this.a.add(
								this.u.completionProvider.onDidChange(() => {
									this.w(), this.x();
								}),
							);
						let q = !1;
						this.a.add(
							this.n.onDidCompositionStart(() => {
								q = !0;
							}),
						),
							this.a.add(
								this.n.onDidCompositionEnd(() => {
									(q = !1), this.z();
								}),
							),
							this.a.add(
								this.n.onDidChangeCursorSelection((V) => {
									q || this.y(V);
								}),
							),
							this.a.add(
								this.n.onDidChangeModelContent(() => {
									!q && this.d !== void 0 && this.B();
								}),
							),
							this.w();
					}
					dispose() {
						(0, C.$Vc)(this.b),
							(0, C.$Vc)([this.k, this.m, this.l, this.c]),
							this.a.dispose(),
							this.j.dispose(),
							this.cancel();
					}
					w() {
						if (
							(this.b.clear(),
							this.n.getOption(m.EditorOption.readOnly) ||
								!this.n.hasModel() ||
								!this.n.getOption(m.EditorOption.suggestOnTriggerCharacters))
						)
							return;
						const A = new Map();
						for (const O of this.u.completionProvider.all(this.n.getModel()))
							for (const B of O.triggerCharacters || []) {
								let U = A.get(B);
								if (!U) {
									U = new Set();
									const z = (0, s.$3Cb)();
									z && U.add(z), A.set(B, U);
								}
								U.add(O);
							}
						const R = (O) => {
							if (!D(this.n, this.s, this.t) || P.shouldAutoTrigger(this.n))
								return;
							if (!O) {
								const z = this.n.getPosition();
								O = this.n
									.getModel()
									.getLineContent(z.lineNumber)
									.substr(0, z.column - 1);
							}
							let B = "";
							(0, d.$Rf)(O.charCodeAt(O.length - 1))
								? (0, d.$Qf)(O.charCodeAt(O.length - 2)) &&
									(B = O.substr(O.length - 2))
								: (B = O.charAt(O.length - 1));
							const U = A.get(B);
							if (U) {
								const z = new Map();
								if (this.i)
									for (const [F, x] of this.i.getItemsByProvider())
										U.has(F) || z.set(F, x);
								this.trigger({
									auto: !0,
									triggerKind: a.CompletionTriggerKind.TriggerCharacter,
									triggerCharacter: B,
									retrigger: !!this.i,
									clipboardText: this.i?.clipboardText,
									completionOptions: {
										providerFilter: U,
										providerItemsToReuse: z,
									},
								});
							}
						};
						this.b.add(this.n.onDidType(R)),
							this.b.add(this.n.onDidCompositionEnd(() => R()));
					}
					get state() {
						return this.d ? (this.d.auto ? k.Auto : k.Manual) : k.Idle;
					}
					cancel(A = !1) {
						this.d !== void 0 &&
							(this.c.cancel(),
							this.f?.cancel(),
							(this.f = void 0),
							(this.d = void 0),
							(this.i = void 0),
							(this.g = void 0),
							this.k.fire({ retrigger: A }));
					}
					clear() {
						this.j.clear();
					}
					x() {
						this.d !== void 0 &&
							(!this.n.hasModel() ||
							!this.u.completionProvider.has(this.n.getModel())
								? this.cancel()
								: this.trigger({ auto: this.d.auto, retrigger: !0 }));
					}
					y(A) {
						if (!this.n.hasModel()) return;
						const R = this.h;
						if (
							((this.h = this.n.getSelection()),
							!A.selection.isEmpty() ||
								(A.reason !== r.CursorChangeReason.NotSet &&
									A.reason !== r.CursorChangeReason.Explicit) ||
								(A.source !== "keyboard" && A.source !== "deleteLeft"))
						) {
							this.cancel();
							return;
						}
						this.d === void 0 && A.reason === r.CursorChangeReason.NotSet
							? (R.containsRange(this.h) ||
									R.getEndPosition().isBeforeOrEqual(this.h.getPosition())) &&
								this.A()
							: this.d !== void 0 &&
								A.reason === r.CursorChangeReason.Explicit &&
								this.B();
					}
					z() {
						this.d === void 0 ? this.A() : this.B();
					}
					A() {
						s.$9Cb.isAllOff(
							this.n.getOption(m.EditorOption.quickSuggestions),
						) ||
							(this.n.getOption(m.EditorOption.suggest)
								.snippetsPreventQuickSuggestions &&
								S.$aDb.get(this.n)?.isInSnippet()) ||
							(this.cancel(),
							this.c.cancelAndSet(() => {
								if (
									this.d !== void 0 ||
									!P.shouldAutoTrigger(this.n) ||
									!this.n.hasModel() ||
									!this.n.hasWidgetFocus()
								)
									return;
								const A = this.n.getModel(),
									R = this.n.getPosition(),
									O = this.n.getOption(m.EditorOption.quickSuggestions);
								if (!s.$9Cb.isAllOff(O)) {
									if (!s.$9Cb.isAllOn(O)) {
										A.tokenization.tokenizeIfCheap(R.lineNumber);
										const B = A.tokenization.getLineTokens(R.lineNumber),
											U = B.getStandardTokenType(
												B.findTokenIndexAtOffset(Math.max(R.column - 1 - 1, 0)),
											);
										if (s.$9Cb.valueFor(O, U) !== "on") return;
									}
									L(this.n, this.s, this.t) &&
										this.u.completionProvider.has(A) &&
										this.trigger({ auto: !0 });
								}
							}, this.n.getOption(m.EditorOption.quickSuggestionsDelay)));
					}
					B() {
						(0, $.$vg)(this.n.hasModel()), (0, $.$vg)(this.d !== void 0);
						const A = this.n.getModel(),
							R = this.n.getPosition(),
							O = new P(A, R, { ...this.d, refilter: !0 });
						this.E(O);
					}
					trigger(A) {
						if (!this.n.hasModel()) return;
						const R = this.n.getModel(),
							O = new P(R, this.n.getPosition(), A);
						this.cancel(A.retrigger),
							(this.d = A),
							this.l.fire({
								auto: A.auto,
								shy: A.shy ?? !1,
								position: this.n.getPosition(),
							}),
							(this.g = O);
						let B = {
							triggerKind: A.triggerKind ?? a.CompletionTriggerKind.Invoke,
						};
						A.triggerCharacter &&
							(B = {
								triggerKind: a.CompletionTriggerKind.TriggerCharacter,
								triggerCharacter: A.triggerCharacter,
							}),
							(this.f = new i.$Ce());
						const U = this.n.getOption(m.EditorOption.snippetSuggestions);
						let z = s.SnippetSortOrder.Inline;
						switch (U) {
							case "top":
								z = s.SnippetSortOrder.Top;
								break;
							case "bottom":
								z = s.SnippetSortOrder.Bottom;
								break;
						}
						const { itemKind: F, showDeprecated: x } = T.createSuggestFilter(
								this.n,
							),
							H = new s.$2Cb(
								z,
								A.completionOptions?.kindFilter ?? F,
								A.completionOptions?.providerFilter,
								A.completionOptions?.providerItemsToReuse,
								x,
							),
							q = c.$SCb.create(this.o, this.n),
							V = (0, s.$6Cb)(
								this.u.completionProvider,
								R,
								this.n.getPosition(),
								H,
								B,
								this.f.token,
							);
						Promise.all([V, q])
							.then(async ([G, K]) => {
								if ((this.f?.dispose(), !this.n.hasModel())) return;
								let J = A?.clipboardText;
								if (
									(!J && G.needsClipboard && (J = await this.p.readText()),
									this.d === void 0)
								)
									return;
								const W = this.n.getModel(),
									X = new P(W, this.n.getPosition(), A),
									Y = {
										...y.$5k.default,
										firstMatchCanBeWeak: !this.n.getOption(
											m.EditorOption.suggest,
										).matchOnWordStartOnly,
									};
								if (
									((this.i = new b.$$Cb(
										G.items,
										this.g.column,
										{
											leadingLineContent: X.leadingLineContent,
											characterCountDelta: X.column - this.g.column,
										},
										K,
										this.n.getOption(m.EditorOption.suggest),
										this.n.getOption(m.EditorOption.snippetSuggestions),
										Y,
										J,
									)),
									this.j.add(G.disposable),
									this.E(X),
									this.D(G.durations),
									!this.v.isBuilt || this.v.isExtensionDevelopment)
								)
									for (const ie of G.items)
										ie.isInvalid &&
											this.r.warn(
												`[suggest] did IGNORE invalid completion item from ${ie.provider._debugDisplayName}`,
												ie.completion,
											);
							})
							.catch(w.$4);
					}
					D(A) {
						this.C++ % 230 === 0 &&
							setTimeout(() => {
								this.q.publicLog2("suggest.durations.json", {
									data: JSON.stringify(A),
								}),
									this.r.debug("suggest.durations.json", A);
							});
					}
					static createSuggestFilter(A) {
						const R = new Set();
						A.getOption(m.EditorOption.snippetSuggestions) === "none" &&
							R.add(a.CompletionItemKind.Snippet);
						const B = A.getOption(m.EditorOption.suggest);
						return (
							B.showMethods || R.add(a.CompletionItemKind.Method),
							B.showFunctions || R.add(a.CompletionItemKind.Function),
							B.showConstructors || R.add(a.CompletionItemKind.Constructor),
							B.showFields || R.add(a.CompletionItemKind.Field),
							B.showVariables || R.add(a.CompletionItemKind.Variable),
							B.showClasses || R.add(a.CompletionItemKind.Class),
							B.showStructs || R.add(a.CompletionItemKind.Struct),
							B.showInterfaces || R.add(a.CompletionItemKind.Interface),
							B.showModules || R.add(a.CompletionItemKind.Module),
							B.showProperties || R.add(a.CompletionItemKind.Property),
							B.showEvents || R.add(a.CompletionItemKind.Event),
							B.showOperators || R.add(a.CompletionItemKind.Operator),
							B.showUnits || R.add(a.CompletionItemKind.Unit),
							B.showValues || R.add(a.CompletionItemKind.Value),
							B.showConstants || R.add(a.CompletionItemKind.Constant),
							B.showEnums || R.add(a.CompletionItemKind.Enum),
							B.showEnumMembers || R.add(a.CompletionItemKind.EnumMember),
							B.showKeywords || R.add(a.CompletionItemKind.Keyword),
							B.showWords || R.add(a.CompletionItemKind.Text),
							B.showColors || R.add(a.CompletionItemKind.Color),
							B.showFiles || R.add(a.CompletionItemKind.File),
							B.showReferences || R.add(a.CompletionItemKind.Reference),
							B.showColors || R.add(a.CompletionItemKind.Customcolor),
							B.showFolders || R.add(a.CompletionItemKind.Folder),
							B.showTypeParameters || R.add(a.CompletionItemKind.TypeParameter),
							B.showSnippets || R.add(a.CompletionItemKind.Snippet),
							B.showUsers || R.add(a.CompletionItemKind.User),
							B.showIssues || R.add(a.CompletionItemKind.Issue),
							{ itemKind: R, showDeprecated: B.showDeprecated }
						);
					}
					E(A) {
						if (this.g) {
							if (A.lineNumber !== this.g.lineNumber) {
								this.cancel();
								return;
							}
							if (
								(0, d.$Cf)(A.leadingLineContent) !==
								(0, d.$Cf)(this.g.leadingLineContent)
							) {
								this.cancel();
								return;
							}
							if (A.column < this.g.column) {
								A.leadingWord.word
									? this.trigger({
											auto: this.g.triggerOptions.auto,
											retrigger: !0,
										})
									: this.cancel();
								return;
							}
							if (this.i) {
								if (
									A.leadingWord.word.length !== 0 &&
									A.leadingWord.startColumn > this.g.leadingWord.startColumn
								) {
									if (P.shouldAutoTrigger(this.n) && this.g) {
										const O = this.i.getItemsByProvider();
										this.trigger({
											auto: this.g.triggerOptions.auto,
											retrigger: !0,
											clipboardText: this.i.clipboardText,
											completionOptions: { providerItemsToReuse: O },
										});
									}
									return;
								}
								if (
									A.column > this.g.column &&
									this.i.getIncompleteProvider().size > 0 &&
									A.leadingWord.word.length !== 0
								) {
									const R = new Map(),
										O = new Set();
									for (const [B, U] of this.i.getItemsByProvider())
										U.length > 0 && U[0].container.incomplete
											? O.add(B)
											: R.set(B, U);
									this.trigger({
										auto: this.g.triggerOptions.auto,
										triggerKind:
											a.CompletionTriggerKind.TriggerForIncompleteCompletions,
										retrigger: !0,
										clipboardText: this.i.clipboardText,
										completionOptions: {
											providerFilter: O,
											providerItemsToReuse: R,
										},
									});
								} else {
									const R = this.i.lineContext;
									let O = !1;
									if (
										((this.i.lineContext = {
											leadingLineContent: A.leadingLineContent,
											characterCountDelta: A.column - this.g.column,
										}),
										this.i.items.length === 0)
									) {
										const B = P.shouldAutoTrigger(this.n);
										if (!this.g) {
											this.cancel();
											return;
										}
										if (
											B &&
											this.g.leadingWord.endColumn < A.leadingWord.startColumn
										) {
											this.trigger({
												auto: this.g.triggerOptions.auto,
												retrigger: !0,
											});
											return;
										}
										if (this.g.triggerOptions.auto) {
											this.cancel();
											return;
										} else if (
											((this.i.lineContext = R),
											(O = this.i.items.length > 0),
											O && A.leadingWord.word.length === 0)
										) {
											this.cancel();
											return;
										}
									}
									this.m.fire({
										completionModel: this.i,
										triggerOptions: A.triggerOptions,
										isFrozen: O,
									});
								}
							}
						}
					}
				});
				(e.$cDb = M),
					(e.$cDb =
						M =
						T =
							Ne(
								[
									j(1, h.$Cxb),
									j(2, n.$Vxb),
									j(3, f.$km),
									j(4, o.$ik),
									j(5, p.$6j),
									j(6, g.$gj),
									j(7, l.$k3),
									j(8, I.$Ti),
								],
								M,
							));
			},
		),
		define(
			de[2926],
			he([1, 0, 24, 3, 38, 654, 1221]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JDb = void 0);
				class d {
					constructor(r, u, a, h, c) {
						(this.a = new i.$Zc()),
							this.a.add(
								h.onDidSuggest((n) => {
									n.completionModel.items.length === 0 && this.reset();
								}),
							),
							this.a.add(
								h.onDidCancel((n) => {
									this.reset();
								}),
							),
							this.a.add(a.onDidShow(() => this.c(a.getFocusedItem()))),
							this.a.add(a.onDidFocus(this.c, this)),
							this.a.add(a.onDidHide(this.reset, this)),
							this.a.add(
								r.onWillType((n) => {
									if (this.b && !a.isFrozen() && h.state !== C.State.Idle) {
										const g = n.charCodeAt(n.length - 1);
										this.b.acceptCharacters.has(g) &&
											r.getOption(
												w.EditorOption.acceptSuggestionOnCommitCharacter,
											) &&
											c(this.b.item);
									}
								}),
							);
					}
					c(r) {
						if (!r || !(0, t.$Pb)(r.item.completion.commitCharacters)) {
							this.reset();
							return;
						}
						if (this.b && this.b.item.item === r.item) return;
						const u = new E.$OL();
						for (const a of r.item.completion.commitCharacters)
							a.length > 0 && u.add(a.charCodeAt(0));
						this.b = { acceptCharacters: u, item: r };
					}
					reset() {
						this.b = void 0;
					}
					dispose() {
						this.a.dispose();
					}
				}
				e.$JDb = d;
			},
		),
		define(
			de[2927],
			he([
				1, 0, 33, 132, 103, 3, 65, 38, 17, 588, 74, 69, 1596, 373, 1673, 1221,
				1609, 121,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wkc = void 0);
				class f {
					constructor(y, $, v, S, I, T) {
						(this.range = y),
							(this.insertText = $),
							(this.filterText = v),
							(this.additionalTextEdits = S),
							(this.command = I),
							(this.completion = T);
					}
				}
				let b = class extends E.$4c {
					constructor(y, $, v, S, I, T) {
						super(I.disposable),
							(this.model = y),
							(this.line = $),
							(this.word = v),
							(this.completionModel = S),
							(this.c = T);
					}
					canBeReused(y, $, v) {
						return (
							this.model === y &&
							this.line === $ &&
							this.word.word.length > 0 &&
							this.word.startColumn === v.startColumn &&
							this.word.endColumn < v.endColumn &&
							this.completionModel.getIncompleteProvider().size === 0
						);
					}
					get items() {
						const y = [],
							{ items: $ } = this.completionModel,
							v = this.c.select(
								this.model,
								{
									lineNumber: this.line,
									column:
										this.word.endColumn +
										this.completionModel.lineContext.characterCountDelta,
								},
								$,
							),
							S = w.Iterable.slice($, v),
							I = w.Iterable.slice($, 0, v);
						let T = 5;
						for (const P of w.Iterable.concat(S, I)) {
							if (P.score === i.FuzzyScore.Default) continue;
							const k = new m.$iL(
									P.editStart.lineNumber,
									P.editStart.column,
									P.editInsertEnd.lineNumber,
									P.editInsertEnd.column +
										this.completionModel.lineContext.characterCountDelta,
								),
								L =
									P.completion.insertTextRules &&
									P.completion.insertTextRules &
										u.CompletionItemInsertTextRule.InsertAsSnippet
										? { snippet: P.completion.insertText }
										: P.completion.insertText;
							y.push(
								new f(
									k,
									L,
									P.filterTextLow ?? P.labelLow,
									P.completion.additionalTextEdits,
									P.completion.command,
									P,
								),
							),
								T-- >= 0 && P.resolve(t.CancellationToken.None);
						}
						return y;
					}
				};
				b = Ne([j(5, n.$uDb)], b);
				let s = class extends E.$1c {
					constructor(y, $, v, S) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							this.B.add(y.inlineCompletionsProvider.register("*", this));
					}
					async provideInlineCompletions(y, $, v, S) {
						if (v.selectedSuggestionInfo) return;
						let I;
						for (const A of this.g.listCodeEditors())
							if (A.getModel() === y) {
								I = A;
								break;
							}
						if (!I) return;
						const T = I.getOption(d.EditorOption.quickSuggestions);
						if (c.$9Cb.isAllOff(T)) return;
						y.tokenization.tokenizeIfCheap($.lineNumber);
						const P = y.tokenization.getLineTokens($.lineNumber),
							k = P.getStandardTokenType(
								P.findTokenIndexAtOffset(Math.max($.column - 1 - 1, 0)),
							);
						if (c.$9Cb.valueFor(T, k) !== "inline") return;
						let L = y.getWordAtPosition($),
							D;
						if (
							(L?.word || (D = this.h(y, $)),
							(!L?.word && !D) ||
								(L || (L = y.getWordUntilPosition($)),
								L.endColumn !== $.column))
						)
							return;
						let M;
						const N = y.getValueInRange(
							new m.$iL($.lineNumber, 1, $.lineNumber, $.column),
						);
						if (!D && this.a?.canBeReused(y, $.lineNumber, L)) {
							const A = new h.$0Cb(N, $.column - this.a.word.endColumn);
							(this.a.completionModel.lineContext = A),
								this.a.acquire(),
								(M = this.a);
						} else {
							const A = await (0, c.$6Cb)(
								this.b.completionProvider,
								y,
								$,
								new c.$2Cb(
									void 0,
									g.$cDb.createSuggestFilter(I).itemKind,
									D?.providers,
								),
								D && {
									triggerKind: u.CompletionTriggerKind.TriggerCharacter,
									triggerCharacter: D.ch,
								},
								S,
							);
							let R;
							A.needsClipboard && (R = await this.c.readText());
							const O = new h.$$Cb(
								A.items,
								$.column,
								new h.$0Cb(N, 0),
								p.$SCb.None,
								I.getOption(d.EditorOption.suggest),
								I.getOption(d.EditorOption.snippetSuggestions),
								{ boostFullMatch: !1, firstMatchCanBeWeak: !1 },
								R,
							);
							M = new b(y, $.lineNumber, L, O, A, this.f);
						}
						return (this.a = M), M;
					}
					handleItemDidShow(y, $) {
						$.completion.resolve(t.CancellationToken.None);
					}
					freeInlineCompletions(y) {
						y.release();
					}
					h(y, $) {
						const v = y.getValueInRange(
								m.$iL.fromPositions(
									{ lineNumber: $.lineNumber, column: $.column - 1 },
									$,
								),
							),
							S = new Set();
						for (const I of this.b.completionProvider.all(y))
							I.triggerCharacters?.includes(v) && S.add(I);
						if (S.size !== 0) return { providers: S, ch: v };
					}
				};
				(e.$wkc = s),
					(e.$wkc = s =
						Ne([j(0, a.$k3), j(1, o.$Vxb), j(2, n.$uDb), j(3, C.$dtb)], s)),
					(0, r.$SBb)(s);
			},
		),
		define(
			de[1692],
			he([
				1, 0, 7, 278, 15, 29, 6, 3, 201, 37, 56, 281, 38, 1674, 4, 8, 5, 21, 51,
				212, 35, 930, 373, 1633, 2865, 106, 127, 1135, 2321, 1205,
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
					(e.$HDb = e.$GDb = e.$FDb = void 0),
					(t = mt(t)),
					(r = mt(r)),
					(n = mt(n)),
					(0, f.$wP)(
						"editorSuggestWidget.background",
						f.$bQ,
						n.localize(1495, null),
					),
					(0, f.$wP)(
						"editorSuggestWidget.border",
						f.$dQ,
						n.localize(1496, null),
					);
				const P = (0, f.$wP)(
					"editorSuggestWidget.foreground",
					f.$9P,
					n.localize(1497, null),
				);
				(0, f.$wP)(
					"editorSuggestWidget.selectedForeground",
					f.$lT,
					n.localize(1498, null),
				),
					(0, f.$wP)(
						"editorSuggestWidget.selectedIconForeground",
						f.$mT,
						n.localize(1499, null),
					),
					(e.$FDb = (0, f.$wP)(
						"editorSuggestWidget.selectedBackground",
						f.$nT,
						n.localize(1500, null),
					)),
					(0, f.$wP)(
						"editorSuggestWidget.highlightForeground",
						f.$QS,
						n.localize(1501, null),
					),
					(0, f.$wP)(
						"editorSuggestWidget.focusHighlightForeground",
						f.$RS,
						n.localize(1502, null),
					),
					(0, f.$wP)(
						"editorSuggestWidgetStatus.foreground",
						(0, f.$BP)(P, 0.5),
						n.localize(1503, null),
					);
				var k;
				(function (N) {
					(N[(N.Hidden = 0)] = "Hidden"),
						(N[(N.Loading = 1)] = "Loading"),
						(N[(N.Empty = 2)] = "Empty"),
						(N[(N.Open = 3)] = "Open"),
						(N[(N.Frozen = 4)] = "Frozen"),
						(N[(N.Details = 5)] = "Details"),
						(N[(N.onDetailsKeyDown = 6)] = "onDetailsKeyDown");
				})(k || (k = {}));
				class L {
					constructor(A, R) {
						(this.b = A),
							(this.a = `suggestWidget.size/${R.getEditorType()}/${R instanceof a.$wDb}`);
					}
					restore() {
						const A = this.b.get(this.a, o.StorageScope.PROFILE) ?? "";
						try {
							const R = JSON.parse(A);
							if (t.$pgb.is(R)) return t.$pgb.lift(R);
						} catch {}
					}
					store(A) {
						this.b.store(
							this.a,
							JSON.stringify(A),
							o.StorageScope.PROFILE,
							o.StorageTarget.MACHINE,
						);
					}
					reset() {
						this.b.remove(this.a, o.StorageScope.PROFILE);
					}
				}
				let D = class {
					static {
						T = this;
					}
					static {
						this.a = n.localize(1504, null);
					}
					static {
						this.b = n.localize(1505, null);
					}
					get isShown() {
						return this.x.get();
					}
					constructor(A, R, O, B, U) {
						(this.I = A),
							(this.J = R),
							(this.c = k.Hidden),
							(this.d = !1),
							(this.g = new d.$2c()),
							(this.h = new d.$2c()),
							(this.k = !1),
							(this.n = !1),
							(this.o = !1),
							(this.B = new w.$Wh()),
							(this.C = new d.$Zc()),
							(this.D = new C.$ue()),
							(this.E = new C.$ue()),
							(this.F = new C.$re()),
							(this.G = new C.$re()),
							(this.onDidSelect = this.D.event),
							(this.onDidFocus = this.E.event),
							(this.onDidHide = this.F.event),
							(this.onDidShow = this.G.event),
							(this.H = new C.$re()),
							(this.onDetailsKeyDown = this.H.event),
							(this.element = new l.$dpb()),
							this.element.domNode.classList.add(
								"editor-widget",
								"suggest-widget",
							),
							(this.v = new M(this, A)),
							(this.w = new L(R, A));
						class z {
							constructor(K, J, W = !1, X = !1) {
								(this.persistedSize = K),
									(this.currentSize = J),
									(this.persistHeight = W),
									(this.persistWidth = X);
							}
						}
						let F;
						this.C.add(
							this.element.onDidWillResize(() => {
								this.v.lockPreference(),
									(F = new z(this.w.restore(), this.element.size));
							}),
						),
							this.C.add(
								this.element.onDidResize((G) => {
									if (
										(this.U(G.dimension.width, G.dimension.height),
										F &&
											((F.persistHeight =
												F.persistHeight || !!G.north || !!G.south),
											(F.persistWidth =
												F.persistWidth || !!G.east || !!G.west)),
										!!G.done)
									) {
										if (F) {
											const { itemHeight: K, defaultSize: J } =
													this.getLayoutInfo(),
												W = Math.round(K / 2);
											let { width: X, height: Y } = this.element.size;
											(!F.persistHeight ||
												Math.abs(F.currentSize.height - Y) <= W) &&
												(Y = F.persistedSize?.height ?? J.height),
												(!F.persistWidth ||
													Math.abs(F.currentSize.width - X) <= W) &&
													(X = F.persistedSize?.width ?? J.width),
												this.w.store(new t.$pgb(X, Y));
										}
										this.v.unlockPreference(), (F = void 0);
									}
								}),
							),
							(this.p = t.$fhb(this.element.domNode, t.$(".message"))),
							(this.q = t.$fhb(this.element.domNode, t.$(".tree")));
						const x = this.C.add(U.createInstance($.$zDb, this.I));
						x.onDidClose(this.toggleDetails, this, this.C),
							(this.u = new $.$ADb(x, this.I));
						const H = () =>
							this.element.domNode.classList.toggle(
								"no-icons",
								!this.I.getOption(h.EditorOption.suggest).showIcons,
							);
						H();
						const q = U.createInstance(v.$EDb, this.I);
						this.C.add(q),
							this.C.add(q.onDidToggleDetails(() => this.toggleDetails())),
							(this.r = new i.List(
								"SuggestWidget",
								this.q,
								{
									getHeight: (G) => this.getLayoutInfo().itemHeight,
									getTemplateId: (G) => "suggestion",
								},
								[q],
								{
									alwaysConsumeMouseWheel: !0,
									useShadows: !1,
									mouseSupport: !1,
									multipleSelectionSupport: !1,
									accessibilityProvider: {
										getRole: () => "option",
										getWidgetAriaLabel: () => n.localize(1506, null),
										getWidgetRole: () => "listbox",
										getAriaLabel: (G) => {
											let K = G.textLabel;
											if (typeof G.completion.label != "string") {
												const { detail: Y, description: ie } =
													G.completion.label;
												Y && ie
													? (K = n.localize(1507, null, K, Y, ie))
													: Y
														? (K = n.localize(1508, null, K, Y))
														: ie && (K = n.localize(1509, null, K, ie));
											}
											if (!G.isResolved || !this.W()) return K;
											const { documentation: J, detail: W } = G.completion,
												X = r.$kf(
													"{0}{1}",
													W || "",
													J ? (typeof J == "string" ? J : J.value) : "",
												);
											return n.localize(1510, null, K, X);
										},
									},
								},
							)),
							this.r.style(
								(0, S.$Eyb)({
									listInactiveFocusBackground: e.$FDb,
									listInactiveFocusOutline: f.$PP,
								}),
							),
							(this.s = U.createInstance(c.$xDb, this.element.domNode, y.$ZCb));
						const V = () =>
							this.element.domNode.classList.toggle(
								"with-status-bar",
								this.I.getOption(h.EditorOption.suggest).showStatusBar,
							);
						V(),
							this.C.add(B.onDidColorThemeChange((G) => this.P(G))),
							this.P(B.getColorTheme()),
							this.C.add(this.r.onMouseDown((G) => this.M(G))),
							this.C.add(this.r.onTap((G) => this.M(G))),
							this.C.add(this.r.onDidChangeSelection((G) => this.N(G))),
							this.C.add(this.r.onDidChangeFocus((G) => this.Q(G))),
							this.C.add(this.I.onDidChangeCursorSelection(() => this.L())),
							this.C.add(
								this.I.onDidChangeConfiguration((G) => {
									G.hasChanged(h.EditorOption.suggest) && (V(), H()),
										this.l &&
											(G.hasChanged(h.EditorOption.fontInfo) ||
												G.hasChanged(h.EditorOption.suggestFontSize) ||
												G.hasChanged(h.EditorOption.suggestLineHeight)) &&
											this.r.splice(0, this.r.length, this.l.items);
								}),
							),
							(this.x = y.$YCb.Visible.bindTo(O)),
							(this.y = y.$YCb.DetailsVisible.bindTo(O)),
							(this.z = y.$YCb.MultipleSuggestions.bindTo(O)),
							(this.A = y.$YCb.HasFocusedSuggestion.bindTo(O)),
							this.C.add(
								t.$$fb(this.u.widget.domNode, "keydown", (G) => {
									this.H.fire(G);
								}),
							),
							this.C.add(this.I.onMouseDown((G) => this.K(G)));
					}
					dispose() {
						this.u.widget.dispose(),
							this.u.dispose(),
							this.r.dispose(),
							this.s.dispose(),
							this.C.dispose(),
							this.f?.dispose(),
							this.g.dispose(),
							this.h.dispose(),
							this.B.dispose(),
							this.v.dispose(),
							this.element.dispose();
					}
					K(A) {
						this.u.widget.domNode.contains(A.target.element)
							? this.u.widget.domNode.focus()
							: this.element.domNode.contains(A.target.element) &&
								this.I.focus();
					}
					L() {
						this.c !== k.Hidden && this.v.layout();
					}
					M(A) {
						typeof A.element > "u" ||
							typeof A.index > "u" ||
							(A.browserEvent.preventDefault(),
							A.browserEvent.stopPropagation(),
							this.O(A.element, A.index));
					}
					N(A) {
						A.elements.length && this.O(A.elements[0], A.indexes[0]);
					}
					O(A, R) {
						const O = this.l;
						O && (this.D.fire({ item: A, index: R, model: O }), this.I.focus());
					}
					P(A) {
						this.u.widget.borderWidth = (0, b.$gP)(A.type) ? 2 : 1;
					}
					Q(A) {
						if (this.k) return;
						if (!A.elements.length) {
							this.i && (this.i.cancel(), (this.i = void 0), (this.j = void 0)),
								this.I.setAriaOptions({ activeDescendant: void 0 }),
								this.A.set(!1);
							return;
						}
						if (!this.l) return;
						this.A.set(!0);
						const R = A.elements[0],
							O = A.indexes[0];
						R !== this.j &&
							(this.i?.cancel(),
							(this.i = void 0),
							(this.j = R),
							this.r.reveal(O),
							(this.i = (0, w.$zh)(async (B) => {
								const U = (0, w.$Oh)(() => {
										this.W() && this.showDetails(!0);
									}, 250),
									z = B.onCancellationRequested(() => U.dispose());
								try {
									return await R.resolve(B);
								} finally {
									U.dispose(), z.dispose();
								}
							})),
							this.i
								.then(() => {
									O >= this.r.length ||
										R !== this.r.element(O) ||
										((this.k = !0),
										this.r.splice(O, 1, [R]),
										this.r.setFocus([O]),
										(this.k = !1),
										this.W()
											? this.showDetails(!1)
											: this.element.domNode.classList.remove("docs-side"),
										this.I.setAriaOptions({
											activeDescendant: (0, v.$DDb)(O),
										}));
								})
								.catch(E.$4)),
							this.E.fire({ item: R, index: O, model: this.l });
					}
					R(A) {
						if (this.c !== A)
							switch (
								((this.c = A),
								this.element.domNode.classList.toggle("frozen", A === k.Frozen),
								this.element.domNode.classList.remove("message"),
								A)
							) {
								case k.Hidden:
									t.hide(this.p, this.q, this.s.element),
										this.u.hide(!0),
										this.s.hide(),
										this.v.hide(),
										this.x.reset(),
										this.z.reset(),
										this.A.reset(),
										this.B.cancel(),
										this.element.domNode.classList.remove("visible"),
										this.r.splice(0, this.r.length),
										(this.j = void 0),
										(this.m = void 0),
										(this.o = !1);
									break;
								case k.Loading:
									this.element.domNode.classList.add("message"),
										(this.p.textContent = T.a),
										t.hide(this.q, this.s.element),
										t.show(this.p),
										this.u.hide(),
										this.S(),
										(this.j = void 0),
										(0, I.$pib)(T.a);
									break;
								case k.Empty:
									this.element.domNode.classList.add("message"),
										(this.p.textContent = T.b),
										t.hide(this.q, this.s.element),
										t.show(this.p),
										this.u.hide(),
										this.S(),
										(this.j = void 0),
										(0, I.$pib)(T.b);
									break;
								case k.Open:
									t.hide(this.p), t.show(this.q, this.s.element), this.S();
									break;
								case k.Frozen:
									t.hide(this.p), t.show(this.q, this.s.element), this.S();
									break;
								case k.Details:
									t.hide(this.p),
										t.show(this.q, this.s.element),
										this.u.show(),
										this.S();
									break;
							}
					}
					S() {
						this.s.show(),
							this.v.show(),
							this.T(this.w.restore()),
							this.x.set(!0),
							this.B.cancelAndSet(() => {
								this.element.domNode.classList.add("visible"),
									this.G.fire(this);
							}, 100);
					}
					showTriggered(A, R) {
						this.c === k.Hidden &&
							(this.v.setPosition(this.I.getPosition()),
							(this.d = !!A),
							this.d || (this.f = (0, w.$Oh)(() => this.R(k.Loading), R)));
					}
					showSuggestions(A, R, O, B, U) {
						if (
							(this.v.setPosition(this.I.getPosition()),
							this.f?.dispose(),
							this.i?.cancel(),
							(this.i = void 0),
							this.l !== A && (this.l = A),
							O && this.c !== k.Empty && this.c !== k.Hidden)
						) {
							this.R(k.Frozen);
							return;
						}
						const z = this.l.items.length,
							F = z === 0;
						if ((this.z.set(z > 1), F)) {
							this.R(B ? k.Hidden : k.Empty), (this.l = void 0);
							return;
						}
						(this.j = void 0), this.E.pause(), this.D.pause();
						try {
							this.r.splice(0, this.r.length, this.l.items),
								this.R(O ? k.Frozen : k.Open),
								this.r.reveal(R, 0),
								this.r.setFocus(U ? [] : [R]);
						} finally {
							this.E.resume(), this.D.resume();
						}
						this.g.value = t.$ggb(t.getWindow(this.element.domNode), () => {
							this.g.clear(),
								this.T(this.element.size),
								this.u.widget.domNode.classList.remove("focused");
						});
					}
					focusSelected() {
						this.r.length > 0 && this.r.setFocus([0]);
					}
					selectNextPage() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.pageDown(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusNextPage(), !0;
						}
					}
					selectNext() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusNext(1, !0), !0;
						}
					}
					selectLast() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.scrollBottom(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusLast(), !0;
						}
					}
					selectPreviousPage() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.pageUp(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusPreviousPage(), !0;
						}
					}
					selectPrevious() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusPrevious(1, !0), !1;
						}
					}
					selectFirst() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.scrollTop(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusFirst(), !0;
						}
					}
					getFocusedItem() {
						if (
							this.c !== k.Hidden &&
							this.c !== k.Empty &&
							this.c !== k.Loading &&
							this.l &&
							this.r.getFocus().length > 0
						)
							return {
								item: this.r.getFocusedElements()[0],
								index: this.r.getFocus()[0],
								model: this.l,
							};
					}
					getAllSuggestions() {
						if (
							this.c !== k.Hidden &&
							this.c !== k.Empty &&
							this.c !== k.Loading &&
							this.l
						)
							return this.l.items;
					}
					toggleDetailsFocus() {
						this.c === k.Details
							? (this.R(k.Open),
								this.u.widget.domNode.classList.remove("focused"))
							: this.c === k.Open &&
								this.W() &&
								(this.R(k.Details),
								this.u.widget.domNode.classList.add("focused"));
					}
					toggleDetails() {
						this.W()
							? (this.h.clear(),
								this.y.set(!1),
								this.X(!1),
								this.u.hide(),
								this.element.domNode.classList.remove("shows-details"))
							: ((0, $.$yDb)(this.r.getFocusedElements()[0]) || this.o) &&
								(this.c === k.Open ||
									this.c === k.Details ||
									this.c === k.Frozen) &&
								(this.y.set(!0), this.X(!0), this.showDetails(!1));
					}
					showDetails(A) {
						this.h.value = t.$ggb(t.getWindow(this.element.domNode), () => {
							this.h.clear(),
								this.u.show(),
								A
									? this.u.widget.renderLoading()
									: this.u.widget.renderItem(
											this.r.getFocusedElements()[0],
											this.o,
										),
								this.u.widget.isEmpty
									? this.u.hide()
									: (this.V(),
										this.element.domNode.classList.add("shows-details")),
								this.I.focus();
						});
					}
					toggleExplainMode() {
						this.r.getFocusedElements()[0] &&
							((this.o = !this.o),
							this.W() ? this.showDetails(!1) : this.toggleDetails());
					}
					resetPersistedSize() {
						this.w.reset();
					}
					hideWidget() {
						this.g.clear(),
							this.h.clear(),
							this.f?.dispose(),
							this.R(k.Hidden),
							this.F.fire(this),
							this.element.clearSashHoverState();
						const A = this.w.restore(),
							R = Math.ceil(this.getLayoutInfo().itemHeight * 4.3);
						A && A.height < R && this.w.store(A.with(void 0, R));
					}
					isFrozen() {
						return this.c === k.Frozen;
					}
					_afterRender(A) {
						if (A === null) {
							this.W() && this.u.hide();
							return;
						}
						this.c === k.Empty ||
							this.c === k.Loading ||
							(this.W() && !this.u.widget.isEmpty && this.u.show(), this.V());
					}
					T(A) {
						if (!this.I.hasModel() || !this.I.getDomNode()) return;
						const R = t.$ogb(this.element.domNode.ownerDocument.body),
							O = this.getLayoutInfo();
						A || (A = O.defaultSize);
						let B = A.height,
							U = A.width;
						if (
							((this.s.element.style.height = `${O.itemHeight}px`),
							this.c === k.Empty || this.c === k.Loading)
						)
							(B = O.itemHeight + O.borderHeight),
								(U = O.defaultSize.width / 2),
								this.element.enableSashes(!1, !1, !1, !1),
								(this.element.minSize = this.element.maxSize =
									new t.$pgb(U, B)),
								this.v.setPreference(u.ContentWidgetPositionPreference.BELOW);
						else {
							const z = R.width - O.borderHeight - 2 * O.horizontalPadding;
							U > z && (U = z);
							const F = this.l
									? this.l.stats.pLabelLen * O.typicalHalfwidthCharacterWidth
									: U,
								x = O.statusBarHeight + this.r.contentHeight + O.borderHeight,
								H = O.itemHeight + O.statusBarHeight,
								q = t.$tgb(this.I.getDomNode()),
								V = this.I.getScrolledVisiblePosition(this.I.getPosition()),
								G = q.top + V.top + V.height,
								K = Math.min(R.height - G - O.verticalPadding, x),
								J = q.top + V.top - O.verticalPadding,
								W = Math.min(J, x);
							let X = Math.min(Math.max(W, K) + O.borderHeight, x);
							B === this.m?.capped && (B = this.m.wanted),
								B < H && (B = H),
								B > X && (B = X),
								B > K || (this.n && J > 150)
									? (this.v.setPreference(
											u.ContentWidgetPositionPreference.ABOVE,
										),
										this.element.enableSashes(!0, !0, !1, !1),
										(X = W))
									: (this.v.setPreference(
											u.ContentWidgetPositionPreference.BELOW,
										),
										this.element.enableSashes(!1, !0, !0, !1),
										(X = K)),
								(this.element.preferredSize = new t.$pgb(
									F,
									O.defaultSize.height,
								)),
								(this.element.maxSize = new t.$pgb(z, X)),
								(this.element.minSize = new t.$pgb(220, H)),
								(this.m =
									B === x
										? { wanted: this.m?.wanted ?? A.height, capped: B }
										: void 0);
						}
						this.U(U, B);
					}
					U(A, R) {
						const { width: O, height: B } = this.element.maxSize;
						(A = Math.min(O, A)), (R = Math.min(B, R));
						const { statusBarHeight: U } = this.getLayoutInfo();
						this.r.layout(R - U, A),
							(this.q.style.height = `${R - U}px`),
							this.element.layout(R, A),
							this.v.layout(),
							this.V();
					}
					V() {
						this.W() &&
							this.u.placeAtAnchor(
								this.element.domNode,
								this.v.getPosition()?.preference[0] ===
									u.ContentWidgetPositionPreference.BELOW,
							);
					}
					getLayoutInfo() {
						const A = this.I.getOption(h.EditorOption.fontInfo),
							R = (0, m.$Zm)(
								this.I.getOption(h.EditorOption.suggestLineHeight) ||
									A.lineHeight,
								8,
								1e3,
							),
							O =
								!this.I.getOption(h.EditorOption.suggest).showStatusBar ||
								this.c === k.Empty ||
								this.c === k.Loading
									? 0
									: R,
							B = this.u.widget.borderWidth,
							U = 2 * B;
						return {
							itemHeight: R,
							statusBarHeight: O,
							borderWidth: B,
							borderHeight: U,
							typicalHalfwidthCharacterWidth: A.typicalHalfwidthCharacterWidth,
							verticalPadding: 22,
							horizontalPadding: 14,
							defaultSize: new t.$pgb(430, O + 12 * R + U),
						};
					}
					W() {
						return this.J.getBoolean(
							"expandSuggestionDocs",
							o.StorageScope.PROFILE,
							!1,
						);
					}
					X(A) {
						this.J.store(
							"expandSuggestionDocs",
							A,
							o.StorageScope.PROFILE,
							o.StorageTarget.USER,
						);
					}
					forceRenderingAbove() {
						this.n || ((this.n = !0), this.T(this.w.restore()));
					}
					stopForceRenderingAbove() {
						this.n = !1;
					}
				};
				(e.$GDb = D),
					(e.$GDb =
						D =
						T =
							Ne([j(1, o.$lq), j(2, g.$6j), j(3, s.$iP), j(4, p.$Li)], D));
				class M {
					constructor(A, R) {
						(this.g = A),
							(this.h = R),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.c = !1),
							(this.d = !1),
							(this.f = !1);
					}
					dispose() {
						this.d && ((this.d = !1), this.h.removeContentWidget(this));
					}
					getId() {
						return "editor.widget.suggestWidget";
					}
					getDomNode() {
						return this.g.element.domNode;
					}
					show() {
						(this.f = !1),
							this.d || ((this.d = !0), this.h.addContentWidget(this));
					}
					hide() {
						this.f || ((this.f = !0), this.layout());
					}
					layout() {
						this.h.layoutContentWidget(this);
					}
					getPosition() {
						return this.f || !this.a || !this.b
							? null
							: { position: this.a, preference: [this.b] };
					}
					beforeRender() {
						const { height: A, width: R } = this.g.element.size,
							{ borderWidth: O, horizontalPadding: B } = this.g.getLayoutInfo();
						return new t.$pgb(R + 2 * O + B, A + 2 * O);
					}
					afterRender(A) {
						this.g._afterRender(A);
					}
					setPreference(A) {
						this.c || (this.b = A);
					}
					lockPreference() {
						this.c = !0;
					}
					unlockPreference() {
						this.c = !1;
					}
					setPosition(A) {
						this.a = A;
					}
				}
				e.$HDb = M;
			},
		),
		define(
			de[328],
			he([
				1, 0, 127, 24, 33, 29, 6, 27, 343, 3, 12, 162, 28, 491, 46, 38, 188, 48,
				17, 98, 71, 64, 74, 254, 389, 1673, 2727, 4, 31, 8, 5, 43, 34, 373,
				2712, 2926, 1221, 2591, 1692, 32, 19, 136, 7, 122, 45,
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
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
			) {
				"use strict";
				var G;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LDb = e.$KDb = void 0),
					(u = mt(u)),
					(T = mt(T));
				const K = !1;
				class J {
					constructor(te, Q) {
						if (
							((this.d = te),
							(this.f = Q),
							(this.a = q.$eY.register({
								description: "suggest-line-suffix",
								stickiness:
									l.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							})),
							te.getLineMaxColumn(Q.lineNumber) !== Q.column)
						) {
							const se = te.getOffsetAt(Q),
								re = te.getPositionAt(se + 1);
							te.changeDecorations((le) => {
								this.b && le.removeDecoration(this.b),
									(this.b = le.addDecoration(
										f.$iL.fromPositions(Q, re),
										this.a,
									));
							});
						}
					}
					dispose() {
						this.b &&
							!this.d.isDisposed() &&
							this.d.changeDecorations((te) => {
								te.removeDecoration(this.b), (this.b = void 0);
							});
					}
					delta(te) {
						if (this.d.isDisposed() || this.f.lineNumber !== te.lineNumber)
							return 0;
						if (this.b) {
							const Q = this.d.getDecorationRange(this.b);
							return (
								this.d.getOffsetAt(Q.getStartPosition()) -
								this.d.getOffsetAt(te)
							);
						} else return this.d.getLineMaxColumn(te.lineNumber) - te.column;
					}
				}
				var W;
				(function (_) {
					(_[(_.None = 0)] = "None"),
						(_[(_.NoBeforeUndoStop = 1)] = "NoBeforeUndoStop"),
						(_[(_.NoAfterUndoStop = 2)] = "NoAfterUndoStop"),
						(_[(_.KeepAlternativeSuggestions = 4)] =
							"KeepAlternativeSuggestions"),
						(_[(_.AlternativeOverwriteConfig = 8)] =
							"AlternativeOverwriteConfig");
				})(W || (W = {}));
				let X = class {
					static {
						G = this;
					}
					static {
						this.ID = "editor.contrib.suggestController";
					}
					static get(te) {
						return te.getContribution(G.ID);
					}
					constructor(te, Q, Z, se, re, le, oe, ae) {
						(this.k = Q),
							(this.l = Z),
							(this.m = se),
							(this.n = re),
							(this.o = le),
							(this.p = oe),
							(this.q = ae),
							(this.b = new r.$2c()),
							(this.d = new r.$Zc()),
							(this.g = new Y((ue) => ue.priority)),
							(this.h = new C.$re()),
							(this.onWillInsertSuggestItem = this.h.event),
							(this.j = new C.$re()),
							(this.onFireCommand = this.j.event),
							(this.editor = te),
							(this.model = re.createInstance(O.$cDb, this.editor)),
							this.g.register({
								priority: 0,
								select: (ue, fe, me) => this.k.select(ue, fe, me),
							});
						const pe = N.$YCb.InsertMode.bindTo(se);
						pe.set(te.getOption(g.EditorOption.suggest).insertMode),
							this.d.add(
								this.model.onDidTrigger(() =>
									pe.set(te.getOption(g.EditorOption.suggest).insertMode),
								),
							),
							(this.widget = this.d.add(
								new H.$fgb((0, H.getWindow)(te.getDomNode()), () => {
									const ue = this.n.createInstance(U.$GDb, this.editor);
									this.d.add(ue),
										this.d.add(
											ue.onDidSelect((be) => this.r(be, W.None), this),
										);
									const fe = new R.$JDb(
										this.editor,
										this.p,
										ue,
										this.model,
										(be) => this.r(be, W.NoAfterUndoStop),
									);
									this.d.add(fe);
									const me = N.$YCb.MakesTextEdit.bindTo(this.m),
										ve = N.$YCb.HasInsertAndReplaceRange.bindTo(this.m),
										ge = N.$YCb.CanResolve.bindTo(this.m);
									return (
										this.d.add(
											(0, r.$Yc)(() => {
												me.reset(), ve.reset(), ge.reset();
											}),
										),
										this.d.add(
											ue.onDidFocus(({ item: be }) => {
												const Ce = this.editor.getPosition(),
													Le = be.editStart.column,
													Fe = Ce.column;
												let Oe = !0;
												this.editor.getOption(
													g.EditorOption.acceptSuggestionOnEnter,
												) === "smart" &&
													this.model.state === O.State.Auto &&
													!be.completion.additionalTextEdits &&
													!(
														be.completion.insertTextRules &
														y.CompletionItemInsertTextRule.InsertAsSnippet
													) &&
													Fe - Le === be.completion.insertText.length &&
													(Oe =
														this.editor
															.getModel()
															.getValueInRange({
																startLineNumber: Ce.lineNumber,
																startColumn: Le,
																endLineNumber: Ce.lineNumber,
																endColumn: Fe,
															}) !== be.completion.insertText),
													me.set(Oe),
													ve.set(
														!o.$hL.equals(be.editInsertEnd, be.editReplaceEnd),
													),
													ge.set(
														!!be.provider.resolveCompletionItem ||
															!!be.completion.documentation ||
															be.completion.detail !== be.completion.label,
													);
											}),
										),
										this.d.add(
											ue.onDetailsKeyDown((be) => {
												if (
													be
														.toKeyCodeChord()
														.equals(
															new m.$ts(!0, !1, !1, !1, d.KeyCode.KeyC),
														) ||
													(u.$m &&
														be
															.toKeyCodeChord()
															.equals(
																new m.$ts(!1, !1, !1, !0, d.KeyCode.KeyC),
															))
												) {
													be.stopPropagation();
													return;
												}
												be.toKeyCodeChord().isModifierKey() ||
													this.editor.focus();
											}),
										),
										ue
									);
								}),
							)),
							(this.f = this.d.add(
								new H.$fgb((0, H.getWindow)(te.getDomNode()), () =>
									this.d.add(new B.$dDb(this.editor, this.model)),
								),
							)),
							(this.a = this.d.add(
								new H.$fgb((0, H.getWindow)(te.getDomNode()), () =>
									this.d.add(new A.$IDb(this.editor, this.m)),
								),
							)),
							this.d.add(re.createInstance(I.$vDb, te)),
							this.d.add(
								this.model.onDidTrigger((ue) => {
									this.widget.value.showTriggered(ue.auto, ue.shy ? 250 : 50),
										(this.b.value = new J(this.editor.getModel(), ue.position));
								}),
							),
							this.d.add(
								this.model.onDidSuggest((ue) => {
									if (ue.triggerOptions.shy) return;
									let fe = -1;
									for (const ve of this.g.itemsOrderedByPriorityDesc)
										if (
											((fe = ve.select(
												this.editor.getModel(),
												this.editor.getPosition(),
												ue.completionModel.items,
											)),
											fe !== -1)
										)
											break;
									if (
										(fe === -1 && (fe = 0), this.model.state === O.State.Idle)
									)
										return;
									let me = !1;
									if (ue.triggerOptions.auto) {
										const ve = this.editor.getOption(g.EditorOption.suggest);
										ve.selectionMode === "never" ||
										ve.selectionMode === "always"
											? (me = ve.selectionMode === "never")
											: ve.selectionMode === "whenTriggerCharacter"
												? (me =
														ue.triggerOptions.triggerKind !==
														y.CompletionTriggerKind.TriggerCharacter)
												: ve.selectionMode === "whenQuickSuggestion" &&
													(me =
														ue.triggerOptions.triggerKind ===
															y.CompletionTriggerKind.TriggerCharacter &&
														!ue.triggerOptions.refilter);
									}
									this.widget.value.showSuggestions(
										ue.completionModel,
										fe,
										ue.isFrozen,
										ue.triggerOptions.auto,
										me,
									);
								}),
							),
							this.d.add(
								this.model.onDidCancel((ue) => {
									ue.retrigger || this.widget.value.hideWidget();
								}),
							),
							this.d.add(
								this.editor.onDidBlurEditorWidget(() => {
									K || (this.model.cancel(), this.model.clear());
								}),
							);
						const $e = N.$YCb.AcceptSuggestionsOnEnter.bindTo(se),
							ye = () => {
								const ue = this.editor.getOption(
									g.EditorOption.acceptSuggestionOnEnter,
								);
								$e.set(ue === "on" || ue === "smart");
							};
						this.d.add(this.editor.onDidChangeConfiguration(() => ye())), ye();
					}
					dispose() {
						this.a.dispose(),
							this.d.dispose(),
							this.widget.dispose(),
							this.model.dispose(),
							this.b.dispose(),
							this.h.dispose();
					}
					r(te, Q) {
						if (!te || !te.item) {
							this.a.value.reset(), this.model.cancel(), this.model.clear();
							return;
						}
						if (!this.editor.hasModel()) return;
						const Z = $.$aDb.get(this.editor);
						if (!Z) return;
						this.h.fire({ item: te.item });
						const se = this.editor.getModel(),
							re = se.getAlternativeVersionId(),
							{ item: le } = te,
							oe = [],
							ae = new w.$Ce();
						Q & W.NoBeforeUndoStop || this.editor.pushUndoStop();
						const pe = this.getOverwriteInfo(
							le,
							!!(Q & W.AlternativeOverwriteConfig),
						);
						this.k.memorize(se, this.editor.getPosition(), le);
						const $e = le.isResolved;
						let ye = -1,
							ue = -1;
						if (Array.isArray(le.completion.additionalTextEdits)) {
							this.model.cancel();
							const me = c.$uwb.capture(this.editor);
							this.editor.executeEdits(
								"suggestController.additionalTextEdits.sync",
								le.completion.additionalTextEdits.map((ve) => {
									let ge = f.$iL.lift(ve.range);
									if (
										ge.startLineNumber === le.position.lineNumber &&
										ge.startColumn > le.position.column
									) {
										const be =
												this.editor.getPosition().column - le.position.column,
											Ce = be,
											Le = f.$iL.spansMultipleLines(ge) ? 0 : be;
										ge = new f.$iL(
											ge.startLineNumber,
											ge.startColumn + Ce,
											ge.endLineNumber,
											ge.endColumn + Le,
										);
									}
									return p.$jL.replaceMove(ge, ve.text);
								}),
							),
								me.restoreRelativeVerticalPositionOfCursor(this.editor);
						} else if (!$e) {
							const me = new a.$le();
							let ve;
							const ge = se.onDidChangeContent((Fe) => {
									if (Fe.isFlush) {
										ae.cancel(), ge.dispose();
										return;
									}
									for (const Oe of Fe.changes) {
										const xe = f.$iL.getEndPosition(Oe.range);
										(!ve || o.$hL.isBefore(xe, ve)) && (ve = xe);
									}
								}),
								be = Q;
							Q |= W.NoAfterUndoStop;
							let Ce = !1;
							const Le = this.editor.onWillType(() => {
								Le.dispose(),
									(Ce = !0),
									be & W.NoAfterUndoStop || this.editor.pushUndoStop();
							});
							oe.push(
								le
									.resolve(ae.token)
									.then(() => {
										if (
											!le.completion.additionalTextEdits ||
											ae.token.isCancellationRequested
										)
											return;
										if (
											ve &&
											le.completion.additionalTextEdits.some((Oe) =>
												o.$hL.isBefore(ve, f.$iL.getStartPosition(Oe.range)),
											)
										)
											return !1;
										Ce && this.editor.pushUndoStop();
										const Fe = c.$uwb.capture(this.editor);
										return (
											this.editor.executeEdits(
												"suggestController.additionalTextEdits.async",
												le.completion.additionalTextEdits.map((Oe) =>
													p.$jL.replaceMove(f.$iL.lift(Oe.range), Oe.text),
												),
											),
											Fe.restoreRelativeVerticalPositionOfCursor(this.editor),
											(Ce || !(be & W.NoAfterUndoStop)) &&
												this.editor.pushUndoStop(),
											!0
										);
									})
									.then((Fe) => {
										this.o.trace(
											"[suggest] async resolving of edits DONE (ms, applied?)",
											me.elapsed(),
											Fe,
										),
											(ue = Fe === !0 ? 1 : Fe === !1 ? 0 : -2);
									})
									.finally(() => {
										ge.dispose(), Le.dispose();
									}),
							);
						}
						let { insertText: fe } = le.completion;
						if (
							(le.completion.insertTextRules &
								y.CompletionItemInsertTextRule.InsertAsSnippet ||
								(fe = v.$Izb.escape(fe)),
							this.model.cancel(),
							Z.insert(fe, {
								overwriteBefore: pe.overwriteBefore,
								overwriteAfter: pe.overwriteAfter,
								undoStopBefore: !1,
								undoStopAfter: !1,
								adjustWhitespace: !(
									le.completion.insertTextRules &
									y.CompletionItemInsertTextRule.KeepWhitespace
								),
								clipboardText: te.model.clipboardText,
								overtypingCapturer: this.f.value,
							}),
							Q & W.NoAfterUndoStop || this.editor.pushUndoStop(),
							le.completion.command)
						)
							if (le.completion.command.id === ie.id)
								this.model.trigger({ auto: !0, retrigger: !0 });
							else {
								this.j.fire(le.completion.command);
								const me = new a.$le();
								oe.push(
									this.l
										.executeCommand(
											le.completion.command.id,
											...(le.completion.command.arguments
												? [...le.completion.command.arguments]
												: []),
										)
										.catch((ve) => {
											le.completion.extensionId ? (0, E.$5)(ve) : (0, E.$4)(ve);
										})
										.finally(() => {
											ye = me.elapsed();
										}),
								);
							}
						Q & W.KeepAlternativeSuggestions &&
							this.a.value.set(te, (me) => {
								for (ae.cancel(); se.canUndo(); ) {
									re !== se.getAlternativeVersionId() && se.undo(),
										this.r(
											me,
											W.NoBeforeUndoStop |
												W.NoAfterUndoStop |
												(Q & W.AlternativeOverwriteConfig
													? W.AlternativeOverwriteConfig
													: 0),
										);
									break;
								}
							}),
							this.u(le),
							Promise.all(oe).finally(() => {
								this.t(le, se, $e, ye, ue, te.index, te.model.items),
									this.model.clear(),
									ae.dispose();
							});
					}
					t(te, Q, Z, se, re, le, oe) {
						if (Math.floor(Math.random() * 100) === 0) return;
						const ae = new Map();
						for (let ue = 0; ue < Math.min(30, oe.length); ue++) {
							const fe = oe[ue].textLabel;
							ae.has(fe) ? ae.get(fe).push(ue) : ae.set(fe, [ue]);
						}
						const pe = ae.get(te.textLabel),
							ye = pe && pe.length > 1 ? pe[0] : -1;
						this.q.publicLog2("suggest.acceptedSuggestion", {
							extensionId: te.extensionId?.value ?? "unknown",
							providerId: te.provider._debugDisplayName ?? "unknown",
							kind: te.completion.kind,
							basenameHash: (0, x.$Aj)((0, F.$kh)(Q.uri)).toString(16),
							languageId: Q.getLanguageId(),
							fileExtension: (0, F.$lh)(Q.uri),
							resolveInfo: te.provider.resolveCompletionItem ? (Z ? 1 : 0) : -1,
							resolveDuration: te.resolveDuration,
							commandDuration: se,
							additionalEditsAsync: re,
							index: le,
							firstIndex: ye,
						});
					}
					getOverwriteInfo(te, Q) {
						(0, h.$vg)(this.editor.hasModel());
						let Z =
							this.editor.getOption(g.EditorOption.suggest).insertMode ===
							"replace";
						Q && (Z = !Z);
						const se = te.position.column - te.editStart.column,
							re =
								(Z ? te.editReplaceEnd.column : te.editInsertEnd.column) -
								te.position.column,
							le = this.editor.getPosition().column - te.position.column,
							oe = this.b.value
								? this.b.value.delta(this.editor.getPosition())
								: 0;
						return { overwriteBefore: se + le, overwriteAfter: re + oe };
					}
					u(te) {
						if ((0, i.$Pb)(te.completion.additionalTextEdits)) {
							const Q = T.localize(
								1485,
								null,
								te.textLabel,
								te.completion.additionalTextEdits.length,
							);
							(0, t.$oib)(Q);
						}
					}
					triggerSuggest(te, Q, Z) {
						this.editor.hasModel() &&
							(this.model.trigger({
								auto: Q ?? !1,
								completionOptions: {
									providerFilter: te,
									kindFilter: Z ? new Set() : void 0,
								},
							}),
							this.editor.revealPosition(
								this.editor.getPosition(),
								b.ScrollType.Smooth,
							),
							this.editor.focus());
					}
					triggerSuggestAndAcceptBest(te) {
						if (!this.editor.hasModel()) return;
						const Q = this.editor.getPosition(),
							Z = () => {
								Q.equals(this.editor.getPosition()) &&
									this.l.executeCommand(te.fallback);
							},
							se = (re) => {
								if (
									re.completion.insertTextRules &
										y.CompletionItemInsertTextRule.InsertAsSnippet ||
									re.completion.additionalTextEdits
								)
									return !0;
								const le = this.editor.getPosition(),
									oe = re.editStart.column,
									ae = le.column;
								return ae - oe !== re.completion.insertText.length
									? !0
									: this.editor
											.getModel()
											.getValueInRange({
												startLineNumber: le.lineNumber,
												startColumn: oe,
												endLineNumber: le.lineNumber,
												endColumn: ae,
											}) !== re.completion.insertText;
							};
						C.Event.once(this.model.onDidTrigger)((re) => {
							const le = [];
							C.Event.any(this.model.onDidTrigger, this.model.onDidCancel)(
								() => {
									(0, r.$Vc)(le), Z();
								},
								void 0,
								le,
							),
								this.model.onDidSuggest(
									({ completionModel: oe }) => {
										if (((0, r.$Vc)(le), oe.items.length === 0)) {
											Z();
											return;
										}
										const ae = this.k.select(
												this.editor.getModel(),
												this.editor.getPosition(),
												oe.items,
											),
											pe = oe.items[ae];
										if (!se(pe)) {
											Z();
											return;
										}
										this.editor.pushUndoStop(),
											this.r(
												{ index: ae, item: pe, model: oe },
												W.KeepAlternativeSuggestions |
													W.NoBeforeUndoStop |
													W.NoAfterUndoStop,
											);
									},
									void 0,
									le,
								);
						}),
							this.model.trigger({ auto: !1, shy: !0 }),
							this.editor.revealPosition(Q, b.ScrollType.Smooth),
							this.editor.focus();
					}
					acceptSelectedSuggestion(te, Q) {
						const Z = this.widget.value.getFocusedItem();
						let se = 0;
						te && (se |= W.KeepAlternativeSuggestions),
							Q && (se |= W.AlternativeOverwriteConfig),
							this.r(Z, se);
					}
					acceptNextSuggestion() {
						this.a.value.next();
					}
					acceptPrevSuggestion() {
						this.a.value.prev();
					}
					cancelSuggestWidget() {
						this.model.cancel(),
							this.model.clear(),
							this.widget.value.hideWidget();
					}
					focusSuggestion() {
						this.widget.value.focusSelected();
					}
					selectNextSuggestion() {
						this.widget.value.selectNext();
					}
					selectNextPageSuggestion() {
						this.widget.value.selectNextPage();
					}
					selectLastSuggestion() {
						this.widget.value.selectLast();
					}
					selectPrevSuggestion() {
						this.widget.value.selectPrevious();
					}
					selectPrevPageSuggestion() {
						this.widget.value.selectPreviousPage();
					}
					selectFirstSuggestion() {
						this.widget.value.selectFirst();
					}
					toggleSuggestionDetails() {
						this.widget.value.toggleDetails();
					}
					toggleExplainMode() {
						this.widget.value.toggleExplainMode();
					}
					toggleSuggestionFocus() {
						this.widget.value.toggleDetailsFocus();
					}
					resetWidgetSize() {
						this.widget.value.resetPersistedSize();
					}
					forceRenderingAbove() {
						this.widget.value.forceRenderingAbove();
					}
					stopForceRenderingAbove() {
						this.widget.isInitialized &&
							this.widget.value.stopForceRenderingAbove();
					}
					registerSelector(te) {
						return this.g.register(te);
					}
				};
				(e.$KDb = X),
					(e.$KDb =
						X =
						G =
							Ne(
								[
									j(1, S.$uDb),
									j(2, P.$ek),
									j(3, k.$6j),
									j(4, L.$Li),
									j(5, M.$ik),
									j(6, V.$0zb),
									j(7, z.$km),
								],
								X,
							));
				class Y {
					constructor(te) {
						(this.b = te), (this.a = new Array());
					}
					register(te) {
						if (this.a.indexOf(te) !== -1)
							throw new Error("Value is already registered");
						return (
							this.a.push(te),
							this.a.sort((Q, Z) => this.b(Z) - this.b(Q)),
							{
								dispose: () => {
									const Q = this.a.indexOf(te);
									Q >= 0 && this.a.splice(Q, 1);
								},
							}
						);
					}
					get itemsOrderedByPriorityDesc() {
						return this.a;
					}
				}
				class ie extends n.$itb {
					static {
						this.id = "editor.action.triggerSuggest";
					}
					constructor() {
						super({
							id: ie.id,
							label: T.localize(1486, null),
							alias: "Trigger Suggest",
							precondition: k.$Kj.and(
								s.EditorContextKeys.writable,
								s.EditorContextKeys.hasCompletionItemProvider,
								N.$YCb.Visible.toNegated(),
							),
							kbOpts: {
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Space,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyCode.Space,
									secondary: [
										d.KeyMod.Alt | d.KeyCode.Escape,
										d.KeyMod.CtrlCmd | d.KeyCode.KeyI,
									],
								},
								weight: D.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q, Z) {
						const se = X.get(Q);
						if (!se) return;
						let re;
						Z && typeof Z == "object" && Z.auto === !0 && (re = !0),
							se.triggerSuggest(void 0, re, void 0);
					}
				}
				(e.$LDb = ie),
					(0, n.$qtb)(
						X.ID,
						X,
						n.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, n.$ntb)(ie);
				const ne = D.KeybindingWeight.EditorContrib + 90,
					ee = n.$htb.bindToContribution(X.get);
				(0, n.$mtb)(
					new ee({
						id: "acceptSelectedSuggestion",
						precondition: k.$Kj.and(
							N.$YCb.Visible,
							N.$YCb.HasFocusedSuggestion,
						),
						handler(_) {
							_.acceptSelectedSuggestion(!0, !1);
						},
						kbOpts: [
							{
								primary: d.KeyCode.Tab,
								kbExpr: k.$Kj.and(
									N.$YCb.Visible,
									s.EditorContextKeys.textInputFocus,
								),
								weight: ne,
							},
							{
								primary: d.KeyCode.Enter,
								kbExpr: k.$Kj.and(
									N.$YCb.Visible,
									s.EditorContextKeys.textInputFocus,
									N.$YCb.AcceptSuggestionsOnEnter,
									N.$YCb.MakesTextEdit,
								),
								weight: ne,
							},
						],
						menuOpts: [
							{
								menuId: N.$ZCb,
								title: T.localize(1487, null),
								group: "left",
								order: 1,
								when: N.$YCb.HasInsertAndReplaceRange.toNegated(),
							},
							{
								menuId: N.$ZCb,
								title: T.localize(1488, null),
								group: "left",
								order: 1,
								when: k.$Kj.and(
									N.$YCb.HasInsertAndReplaceRange,
									N.$YCb.InsertMode.isEqualTo("insert"),
								),
							},
							{
								menuId: N.$ZCb,
								title: T.localize(1489, null),
								group: "left",
								order: 1,
								when: k.$Kj.and(
									N.$YCb.HasInsertAndReplaceRange,
									N.$YCb.InsertMode.isEqualTo("replace"),
								),
							},
						],
					}),
				),
					(0, n.$mtb)(
						new ee({
							id: "acceptAlternativeSelectedSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								s.EditorContextKeys.textInputFocus,
								N.$YCb.HasFocusedSuggestion,
							),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.Shift | d.KeyCode.Enter,
								secondary: [d.KeyMod.Shift | d.KeyCode.Tab],
							},
							handler(_) {
								_.acceptSelectedSuggestion(!1, !0);
							},
							menuOpts: [
								{
									menuId: N.$ZCb,
									group: "left",
									order: 2,
									when: k.$Kj.and(
										N.$YCb.HasInsertAndReplaceRange,
										N.$YCb.InsertMode.isEqualTo("insert"),
									),
									title: T.localize(1490, null),
								},
								{
									menuId: N.$ZCb,
									group: "left",
									order: 2,
									when: k.$Kj.and(
										N.$YCb.HasInsertAndReplaceRange,
										N.$YCb.InsertMode.isEqualTo("replace"),
									),
									title: T.localize(1491, null),
								},
							],
						}),
					),
					P.$fk.registerCommandAlias(
						"acceptSelectedSuggestionOnEnter",
						"acceptSelectedSuggestion",
					),
					(0, n.$mtb)(
						new ee({
							id: "hideSuggestWidget",
							precondition: N.$YCb.Visible,
							handler: (_) => _.cancelSuggestWidget(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.Escape,
								secondary: [d.KeyMod.Shift | d.KeyCode.Escape],
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectNextSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectNextSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.DownArrow,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.DownArrow],
								mac: {
									primary: d.KeyCode.DownArrow,
									secondary: [
										d.KeyMod.CtrlCmd | d.KeyCode.DownArrow,
										d.KeyMod.WinCtrl | d.KeyCode.KeyN,
									],
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectNextPageSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectNextPageSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.PageDown,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.PageDown],
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectLastSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectLastSuggestion(),
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectPrevSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectPrevSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.UpArrow,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.UpArrow],
								mac: {
									primary: d.KeyCode.UpArrow,
									secondary: [
										d.KeyMod.CtrlCmd | d.KeyCode.UpArrow,
										d.KeyMod.WinCtrl | d.KeyCode.KeyP,
									],
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectPrevPageSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectPrevPageSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.PageUp,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.PageUp],
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectFirstSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectFirstSuggestion(),
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "focusSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								N.$YCb.HasFocusedSuggestion.negate(),
							),
							handler: (_) => _.focusSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Space,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyCode.Space,
									secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "focusAndAcceptSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								N.$YCb.HasFocusedSuggestion.negate(),
							),
							handler: (_) => {
								_.focusSuggestion(), _.acceptSelectedSuggestion(!0, !1);
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "toggleSuggestionDetails",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								N.$YCb.HasFocusedSuggestion,
							),
							handler: (_) => _.toggleSuggestionDetails(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Space,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyCode.Space,
									secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								},
							},
							menuOpts: [
								{
									menuId: N.$ZCb,
									group: "right",
									order: 1,
									when: k.$Kj.and(N.$YCb.DetailsVisible, N.$YCb.CanResolve),
									title: T.localize(1492, null),
								},
								{
									menuId: N.$ZCb,
									group: "right",
									order: 1,
									when: k.$Kj.and(
										N.$YCb.DetailsVisible.toNegated(),
										N.$YCb.CanResolve,
									),
									title: T.localize(1493, null),
								},
							],
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "toggleExplainMode",
							precondition: N.$YCb.Visible,
							handler: (_) => _.toggleExplainMode(),
							kbOpts: {
								weight: D.KeybindingWeight.EditorContrib,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Slash,
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "toggleSuggestionFocus",
							precondition: N.$YCb.Visible,
							handler: (_) => _.toggleSuggestionFocus(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyMod.Alt | d.KeyCode.Space,
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyMod.Alt | d.KeyCode.Space,
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "insertBestCompletion",
							precondition: k.$Kj.and(
								s.EditorContextKeys.textInputFocus,
								k.$Kj.equals("config.editor.tabCompletion", "on"),
								I.$vDb.AtEnd,
								N.$YCb.Visible.toNegated(),
								A.$IDb.OtherSuggestions.toNegated(),
								$.$aDb.InSnippetMode.toNegated(),
							),
							handler: (_, te) => {
								_.triggerSuggestAndAcceptBest(
									(0, h.$ng)(te)
										? { fallback: "tab", ...te }
										: { fallback: "tab" },
								);
							},
							kbOpts: { weight: ne, primary: d.KeyCode.Tab },
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "insertNextSuggestion",
							precondition: k.$Kj.and(
								s.EditorContextKeys.textInputFocus,
								k.$Kj.equals("config.editor.tabCompletion", "on"),
								A.$IDb.OtherSuggestions,
								N.$YCb.Visible.toNegated(),
								$.$aDb.InSnippetMode.toNegated(),
							),
							handler: (_) => _.acceptNextSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.Tab,
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "insertPrevSuggestion",
							precondition: k.$Kj.and(
								s.EditorContextKeys.textInputFocus,
								k.$Kj.equals("config.editor.tabCompletion", "on"),
								A.$IDb.OtherSuggestions,
								N.$YCb.Visible.toNegated(),
								$.$aDb.InSnippetMode.toNegated(),
							),
							handler: (_) => _.acceptPrevSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.Shift | d.KeyCode.Tab,
							},
						}),
					),
					(0, n.$ntb)(
						class extends n.$itb {
							constructor() {
								super({
									id: "editor.action.resetSuggestSize",
									label: T.localize(1494, null),
									alias: "Reset Suggest Widget Size",
									precondition: void 0,
								});
							}
							run(_, te) {
								X.get(te)?.resetWidgetSize();
							}
						},
					);
			},
		),
		define(
			de[2928],
			he([1, 0, 24, 214, 6, 3, 48, 17, 490, 74, 1196, 389, 1691, 328]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NDb = e.$MDb = void 0);
				class n extends E.$1c {
					get selectedItem() {
						return this.h;
					}
					constructor(f, b, s) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.c = !1),
							(this.f = !1),
							(this.g = !1),
							(this.h = void 0),
							(this.j = this.D(new w.$re())),
							(this.onDidSelectedItemChange = this.j.event),
							this.D(
								f.onKeyDown((y) => {
									y.shiftKey && !this.f && ((this.f = !0), this.r(this.g));
								}),
							),
							this.D(
								f.onKeyUp((y) => {
									y.shiftKey && this.f && ((this.f = !1), this.r(this.g));
								}),
							);
						const l = c.$KDb.get(this.m);
						if (l) {
							this.D(
								l.registerSelector({
									priority: 100,
									select: (v, S, I) => {
										const T = this.m.getModel();
										if (!T) return -1;
										const P = this.n(),
											k = P ? (0, u.$LCb)(P, T) : void 0;
										if (!k) return -1;
										const L = C.$hL.lift(S),
											D = I.map((N, A) => {
												const R = g.fromSuggestion(l, T, L, N, this.f),
													O = (0, u.$LCb)(R.toSingleTextEdit(), T),
													B = (0, u.$MCb)(k, O);
												return {
													index: A,
													valid: B,
													prefixLength: O.text.length,
													suggestItem: N,
												};
											}).filter((N) => N && N.valid && N.prefixLength > 0),
											M = (0, i.$rb)(
												D,
												(0, t.$0b)((N) => N.prefixLength, t.$_b),
											);
										return M ? M.index : -1;
									},
								}),
							);
							let y = !1;
							const $ = () => {
								y ||
									((y = !0),
									this.D(
										l.widget.value.onDidShow(() => {
											(this.c = !0), this.r(!0);
										}),
									),
									this.D(
										l.widget.value.onDidHide(() => {
											(this.c = !1), this.r(!1);
										}),
									),
									this.D(
										l.widget.value.onDidFocus(() => {
											(this.c = !0), this.r(!0);
										}),
									));
							};
							this.D(
								w.Event.once(l.model.onDidTrigger)((v) => {
									$();
								}),
							),
								this.D(
									l.onWillInsertSuggestItem((v) => {
										const S = this.m.getPosition(),
											I = this.m.getModel();
										if (!S || !I) return;
										const T = g.fromSuggestion(l, I, S, v.item, this.f);
										this.q(T);
									}),
								);
						}
						this.r(this.g);
					}
					r(f) {
						const b = this.t();
						(this.g !== f || !p(this.h, b)) &&
							((this.g = f), (this.h = b), this.j.fire());
					}
					t() {
						const f = c.$KDb.get(this.m);
						if (!f || !this.c) return;
						const b = f.widget.value.getFocusedItem(),
							s = this.m.getPosition(),
							l = this.m.getModel();
						if (!(!b || !s || !l))
							return g.fromSuggestion(f, l, s, b.item, this.f);
					}
					stopForceRenderingAbove() {
						c.$KDb.get(this.m)?.stopForceRenderingAbove();
					}
					forceRenderingAbove() {
						c.$KDb.get(this.m)?.forceRenderingAbove();
					}
				}
				e.$MDb = n;
				class g {
					static fromSuggestion(f, b, s, l, y) {
						let { insertText: $ } = l.completion,
							v = !1;
						if (
							l.completion.insertTextRules &
							r.CompletionItemInsertTextRule.InsertAsSnippet
						) {
							const I = new a.$Izb().parse($);
							I.children.length < 100 && h.$oDb.adjustWhitespace(b, s, !0, I),
								($ = I.toString()),
								(v = !0);
						}
						const S = f.getOverwriteInfo(l, y);
						return new g(
							d.$iL.fromPositions(
								s.delta(0, -S.overwriteBefore),
								s.delta(0, Math.max(S.overwriteAfter, 0)),
							),
							$,
							l.completion.kind,
							v,
						);
					}
					constructor(f, b, s, l) {
						(this.range = f),
							(this.insertText = b),
							(this.completionItemKind = s),
							(this.isSnippetText = l);
					}
					equals(f) {
						return (
							this.range.equalsRange(f.range) &&
							this.insertText === f.insertText &&
							this.completionItemKind === f.completionItemKind &&
							this.isSnippetText === f.isSnippetText
						);
					}
					toSelectedSuggestionInfo() {
						return new r.$eM(
							this.range,
							this.insertText,
							this.completionItemKind,
							this.isSnippetText,
						);
					}
					toSingleTextEdit() {
						return new m.$wL(this.range, this.insertText);
					}
				}
				e.$NDb = g;
				function p(o, f) {
					return o === f ? !0 : !o || !f ? !1 : o.equals(f);
				}
			},
		),
		define(
			de[501],
			he([
				1, 0, 2658, 127, 15, 33, 3, 77, 319, 457, 28, 498, 542, 38, 48, 248,
				391, 69, 1154, 947, 765, 1215, 2922, 2928, 4, 91, 184, 31, 10, 8, 5, 39,
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
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O1b = void 0);
				let N = class extends C.$1c {
					static {
						M = this;
					}
					static {
						this.ID = "editor.contrib.inlineCompletionsController";
					}
					static get(O) {
						return O.getContribution(M.ID);
					}
					constructor(O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.editor = O),
							(this.y = B),
							(this.z = U),
							(this.C = z),
							(this.F = F),
							(this.G = x),
							(this.H = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.a = (0, h.$Uwb)(this.editor)),
							(this.b = (0, d.derived)(
								this,
								(J) =>
									this.a.selections.read(J)?.map((W) => W.getEndPosition()) ?? [
										new n.$hL(1, 1),
									],
							)),
							(this.c = this.D(
								new $.$MDb(
									this.editor,
									() => (
										this.a.forceUpdate(),
										this.model
											.get()
											?.selectedInlineCompletion.get()
											?.toSingleTextEdit(void 0)
									),
									(J) =>
										this.a.forceUpdate((W) => {
											this.model.get()?.handleSuggestAccepted(J);
										}),
								),
							)),
							(this.f = (0, d.observableFromEvent)(
								this,
								(J) =>
									this.c.onDidSelectedItemChange(() => {
										this.a.forceUpdate((W) => J(void 0));
									}),
								() => this.c.selectedItem,
							)),
							(this.g = (0, d.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() =>
									this.editor.getOption(c.EditorOption.inlineSuggest).enabled,
							)),
							(this.h = (0, d.observableFromEvent)(
								this,
								this.L.onDidChangeScreenReaderOptimized,
								() => this.L.isScreenReaderOptimized(),
							)),
							(this.j = (0, d.observableFromEvent)(
								this,
								this.z.onDidChangeContext,
								() =>
									this.z
										.getContext(this.editor.getDomNode())
										.getValue("editorDictation.inProgress") === !0,
							)),
							(this.m = (0, d.derived)(
								this,
								(J) => this.g.read(J) && (!this.h.read(J) || !this.j.read(J)),
							)),
							(this.n = this.G.for(
								this.H.inlineCompletionsProvider,
								"InlineCompletionsDebounce",
								{ min: 50, max: 50 },
							)),
							(this.model = (0, m.$Yd)(this, (J) => {
								if (this.a.isReadonly.read(J)) return;
								const W = this.a.model.read(J);
								return W
									? this.y.createInstance(
											y.$ODb,
											W,
											this.f,
											this.a.versionId,
											this.b,
											this.n,
											(0, d.observableFromEvent)(
												this.editor.onDidChangeConfiguration,
												() =>
													this.editor.getOption(c.EditorOption.suggest).preview,
											),
											(0, d.observableFromEvent)(
												this.editor.onDidChangeConfiguration,
												() =>
													this.editor.getOption(c.EditorOption.suggest)
														.previewMode,
											),
											(0, d.observableFromEvent)(
												this.editor.onDidChangeConfiguration,
												() =>
													this.editor.getOption(c.EditorOption.inlineSuggest)
														.mode,
											),
											this.m,
										)
									: void 0;
							}).recomputeInitiallyAndOnChange(this.B)),
							(this.q = (0, d.derived)(
								this,
								(J) => this.model.read(J)?.ghostTexts.read(J) ?? [],
							)),
							(this.r = A(this.q, this.B)),
							(this.t = (0, r.$Ld)(this, this.r, (J, W) =>
								W.add(
									this.y.createInstance(b.$J1b, this.editor, {
										ghostText: J,
										minReservedLineCount: (0, d.constObservable)(0),
										targetTextModel: this.model.map((X) => X?.textModel),
									}),
								),
							).recomputeInitiallyAndOnChange(this.B)),
							(this.u = (0, d.observableSignal)(this)),
							(this.w = (0, d.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() =>
									this.editor.getOption(c.EditorOption.inlineSuggest)
										.fontFamily,
							)),
							this.D(new s.$_Cb(this.z, this.model)),
							this.D(
								(0, h.$Wwb)(this.a.onDidType, (J, W) => {
									this.m.get() && this.model.get()?.trigger();
								}),
							),
							this.D(
								this.F.onDidExecuteCommand((J) => {
									new Set([
										a.CoreEditingCommands.Tab.id,
										a.CoreEditingCommands.DeleteLeft.id,
										a.CoreEditingCommands.DeleteRight.id,
										f.$tCb,
										"acceptSelectedSuggestion",
									]).has(J.commandId) &&
										O.hasTextFocus() &&
										this.m.get() &&
										this.a.forceUpdate((X) => {
											this.model.get()?.trigger(X);
										});
								}),
							),
							this.D(
								(0, h.$Wwb)(this.a.selections, (J, W) => {
									W.some(
										(X) =>
											X.reason === g.CursorChangeReason.Explicit ||
											X.source === "api",
									) && this.model.get()?.stop();
								}),
							),
							this.D(
								this.editor.onDidBlurEditorWidget(() => {
									this.z.getContextKeyValue("accessibleViewIsShown") ||
										this.C.getValue("editor.inlineSuggest.keepOnBlur") ||
										O.getOption(c.EditorOption.inlineSuggest).keepOnBlur ||
										l.$RDb.dropDownVisible ||
										(0, d.transaction)((J) => {
											this.model.get()?.stop(J);
										});
								}),
							),
							this.D(
								(0, d.autorun)((J) => {
									const W = this.model.read(J)?.state.read(J);
									W?.suggestItem
										? W.primaryGhostText.lineCount >= 2 &&
											this.c.forceRenderingAbove()
										: this.c.stopForceRenderingAbove();
								}),
							),
							this.D(
								(0, C.$Yc)(() => {
									this.c.stopForceRenderingAbove();
								}),
							);
						const K = (0, r.$Jd)(this, (J, W) => {
							const Y = this.model.read(J)?.state.read(J);
							return this.f.get() ? W : Y?.inlineCompletion?.semanticId;
						});
						this.D(
							(0, h.$Xwb)(
								(0, d.derived)((J) => (this.u.read(J), K.read(J), {})),
								async (J, W, X) => {
									const Y = this.model.get(),
										ie = Y?.state.get();
									if (!ie || !Y) return;
									const ne = Y.textModel.getLineContent(
										ie.primaryGhostText.lineNumber,
									);
									await (0, w.$Nh)(50, (0, E.$De)(X)),
										await (0, d.waitForState)(
											this.f,
											u.$sg,
											() => !1,
											(0, E.$De)(X),
										),
										await this.I.playSignal(I.$Twb.inlineSuggestion),
										this.editor.getOption(
											c.EditorOption.screenReaderAnnounceInlineSuggestion,
										) && this.M(ie.primaryGhostText.renderForScreenReader(ne));
								},
							),
						),
							this.D(new l.$QDb(this.editor, this.model, this.y)),
							this.D(
								(0, t.$mjb)(
									(0, d.derived)((J) => {
										const W = this.w.read(J);
										return W === "" || W === "default"
											? ""
											: `
.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .ghost-text {
	font-family: ${W};
}`;
									}),
								),
							),
							this.D(
								this.C.onDidChangeConfiguration((J) => {
									J.affectsConfiguration(
										"accessibility.verbosity.inlineCompletions",
									) &&
										this.editor.updateOptions({
											inlineCompletionsAccessibilityVerbose: this.C.getValue(
												"accessibility.verbosity.inlineCompletions",
											),
										});
								}),
							),
							this.editor.updateOptions({
								inlineCompletionsAccessibilityVerbose: this.C.getValue(
									"accessibility.verbosity.inlineCompletions",
								),
							});
					}
					playAccessibilitySignal(O) {
						this.u.trigger(O);
					}
					M(O) {
						const B = this.z.getContextKeyValue("accessibleViewIsShown"),
							U = this.J.lookupKeybinding("editor.action.accessibleView");
						let z;
						!B &&
							U &&
							this.editor.getOption(
								c.EditorOption.inlineCompletionsAccessibilityVerbose,
							) &&
							(z = (0, v.localize)(1252, null, U.getAriaLabel())),
							(0, i.$oib)(z ? O + ", " + z : O);
					}
					shouldShowHoverAt(O) {
						const B = this.model.get()?.primaryGhostText.get();
						return B
							? B.parts.some((U) =>
									O.containsPosition(new n.$hL(B.lineNumber, U.column)),
								)
							: !1;
					}
					shouldShowHoverAtViewZone(O) {
						return this.t.get()[0]?.ownsViewZone(O) ?? !1;
					}
					hide() {
						(0, d.transaction)((O) => {
							this.model.get()?.stop(O);
						});
					}
				};
				(e.$O1b = N),
					(e.$O1b =
						N =
						M =
							Ne(
								[
									j(1, L.$Li),
									j(2, k.$6j),
									j(3, P.$gj),
									j(4, T.$ek),
									j(5, p.$PBb),
									j(6, o.$k3),
									j(7, I.$Owb),
									j(8, D.$uZ),
									j(9, S.$XK),
								],
								N,
							));
				function A(R, O) {
					const B = (0, d.observableValue)("result", []),
						U = [];
					return (
						O.add(
							(0, d.autorun)((z) => {
								const F = R.read(z);
								(0, d.transaction)((x) => {
									if (F.length !== U.length) {
										U.length = F.length;
										for (let H = 0; H < U.length; H++)
											U[H] || (U[H] = (0, d.observableValue)("item", F[H]));
										B.set([...U], x);
									}
									U.forEach((H, q) => H.set(F[q], x));
								});
							}),
						),
						B
					);
				}
			},
		),
		define(
			de[2929],
			he([
				1, 0, 7, 94, 3, 77, 56, 38, 17, 61, 368, 501, 1215, 251, 4, 91, 5, 41,
				32,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vhc = e.$Uhc = void 0),
					(t = mt(t)),
					(n = mt(n));
				class b {
					constructor(y, $, v) {
						(this.owner = y), (this.range = $), (this.controller = v);
					}
					isValidForHoverAnchor(y) {
						return (
							y.type === u.HoverAnchorType.Range &&
							this.range.startColumn <= y.range.startColumn &&
							this.range.endColumn >= y.range.endColumn
						);
					}
				}
				e.$Uhc = b;
				let s = class {
					constructor(y, $, v, S, I, T) {
						(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.d = S),
							(this.e = I),
							(this.f = T),
							(this.hoverOrdinal = 4);
					}
					suggestHoverAnchor(y) {
						const $ = a.$O1b.get(this.a);
						if (!$) return null;
						const v = y.target;
						if (v.type === C.MouseTargetType.CONTENT_VIEW_ZONE) {
							const S = v.detail;
							if ($.shouldShowHoverAtViewZone(S.viewZoneId))
								return new u.$3Bb(
									1e3,
									this,
									m.$iL.fromPositions(
										this.a
											.getModel()
											.validatePosition(S.positionBefore || S.position),
									),
									y.event.posx,
									y.event.posy,
									!1,
								);
						}
						return v.type === C.MouseTargetType.CONTENT_EMPTY &&
							$.shouldShowHoverAt(v.range)
							? new u.$3Bb(1e3, this, v.range, y.event.posx, y.event.posy, !1)
							: v.type === C.MouseTargetType.CONTENT_TEXT &&
									v.detail.mightBeForeignElement &&
									$.shouldShowHoverAt(v.range)
								? new u.$3Bb(1e3, this, v.range, y.event.posx, y.event.posy, !1)
								: null;
					}
					computeSync(y, $) {
						if (
							this.a.getOption(d.EditorOption.inlineSuggest).showToolbar !==
							"onHover"
						)
							return [];
						const v = a.$O1b.get(this.a);
						return v && v.shouldShowHoverAt(y.range)
							? [new b(this, y.range, v)]
							: [];
					}
					renderHoverParts(y, $) {
						const v = new w.$Zc(),
							S = $[0];
						this.f.publicLog2("inlineCompletionHover.shown"),
							this.d.isScreenReaderOptimized() &&
								!this.a.getOption(
									d.EditorOption.screenReaderAnnounceInlineSuggestion,
								) &&
								v.add(this.g(y, S));
						const I = S.controller.model.get(),
							T = this.e.createInstance(
								h.$RDb,
								this.a,
								!1,
								(0, E.constObservable)(null),
								I.selectedInlineCompletionIndex,
								I.inlineCompletionsCount,
								I.activeCommands,
							),
							P = T.getDomNode();
						y.fragment.appendChild(P), I.triggerExplicitly(), v.add(T);
						const k = {
							hoverPart: S,
							hoverElement: P,
							dispose() {
								v.dispose();
							},
						};
						return new u.$4Bb([k]);
					}
					getAccessibleContent(y) {
						return n.localize(1253, null);
					}
					g(y, $) {
						const v = new w.$Zc(),
							S = t.$,
							I = S("div.hover-row.markdown-hover"),
							T = t.$fhb(
								I,
								S("div.hover-contents", { "aria-live": "assertive" }),
							),
							P = v.add(new c.$Qzb({ editor: this.a }, this.b, this.c)),
							k = (L) => {
								v.add(
									P.onDidRenderAsync(() => {
										(T.className = "hover-contents code-hover-contents"),
											y.onContentsChanged();
									}),
								);
								const D = n.localize(1254, null),
									M = v.add(
										P.render(
											new i.$cl().appendText(D).appendCodeblock("text", L),
										),
									);
								T.replaceChildren(M.element);
							};
						return (
							v.add(
								(0, E.autorun)((L) => {
									const D = $.controller.model
										.read(L)
										?.primaryGhostText.read(L);
									if (D) {
										const M = this.a.getModel().getLineContent(D.lineNumber);
										k(D.renderForScreenReader(M));
									} else t.$hhb(T);
								}),
							),
							y.fragment.appendChild(I),
							v
						);
					}
				};
				(e.$Vhc = s),
					(e.$Vhc = s =
						Ne(
							[
								j(1, r.$nM),
								j(2, o.$7rb),
								j(3, g.$XK),
								j(4, p.$Li),
								j(5, f.$km),
							],
							s,
						));
			},
		),
		define(
			de[2930],
			he([1, 0, 6, 65, 765, 501, 178, 8, 3]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xhc = void 0);
				class r {
					constructor() {
						(this.type = C.AccessibleViewType.View),
							(this.priority = 95),
							(this.name = "inline-completions"),
							(this.when = d.$Kj.and(w.$_Cb.inlineSuggestionVisible));
					}
					getProvider(h) {
						const c = h.get(i.$dtb),
							n = c.getActiveCodeEditor() || c.getFocusedCodeEditor();
						if (!n) return;
						const g = E.$O1b.get(n)?.model.get();
						if (g?.state.get()) return new u(n, g);
					}
				}
				e.$Xhc = r;
				class u extends m.$1c {
					constructor(h, c) {
						super(),
							(this.b = h),
							(this.c = c),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeContent = this.a.event),
							(this.id = C.AccessibleViewProviderId.InlineCompletions),
							(this.verbositySettingKey =
								"accessibility.verbosity.inlineCompletions"),
							(this.options = {
								language: this.b.getModel()?.getLanguageId() ?? void 0,
								type: C.AccessibleViewType.View,
							});
					}
					provideContent() {
						const h = this.c.state.get();
						if (!h)
							throw new Error(
								"Inline completion is visible but state is not available",
							);
						const c = this.c.textModel.getLineContent(
								h.primaryGhostText.lineNumber,
							),
							n = h.primaryGhostText.renderForScreenReader(c);
						if (!n)
							throw new Error(
								"Inline completion is visible but ghost text is not available",
							);
						return c + n;
					}
					provideNextContent() {
						this.c.next().then(() => this.a.fire());
					}
					providePreviousContent() {
						this.c.previous().then(() => this.a.fire());
					}
					onClose() {
						this.c.stop(), this.b.focus();
					}
				}
			},
		),
		define(
			de[1693],
			he([
				1, 0, 7, 661, 3, 77, 319, 46, 542, 281, 608, 370, 38, 172, 122, 375,
				1185, 328, 173, 11, 5, 2309,
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
					(e.$Wjc = e.$Vjc = void 0);
				class l {
					constructor(P, k, L) {
						(this.range = P), (this.newLines = k), (this.changes = L);
					}
				}
				e.$Vjc = l;
				let y = class extends w.$1c {
					constructor(P, k, L, D) {
						super(),
							(this.z = P),
							(this.C = k),
							(this.F = L),
							(this.G = D),
							(this.a = (0, m.$Uwb)(this.z)),
							(this.b = (0, t.h)(
								"div.inline-edits-widget",
								{
									style: {
										position: "absolute",
										overflow: "visible",
										top: "0px",
										left: "0px",
									},
								},
								[
									(0, t.h)(
										"div@editorContainer",
										{
											style: {
												position: "absolute",
												top: "0px",
												left: "0px",
												width: "500px",
												height: "500px",
											},
										},
										[
											(0, t.h)("div.toolbar@toolbar", {
												style: {
													position: "absolute",
													top: "-25px",
													left: "0px",
												},
											}),
											(0, t.h)("div.promptEditor@promptEditor", {
												style: {
													position: "absolute",
													top: "-25px",
													left: "80px",
													width: "300px",
													height: "22px",
												},
											}),
											(0, t.h)("div.preview@editor", {
												style: {
													position: "absolute",
													top: "0px",
													left: "0px",
												},
											}),
										],
									),
									(0, t.$Jhb)(
										"svg",
										{ style: { overflow: "visible", pointerEvents: "none" } },
										[
											(0, t.$Jhb)("defs", [
												(0, t.$Jhb)(
													"linearGradient",
													{
														id: "Gradient2",
														x1: "0",
														y1: "0",
														x2: "1",
														y2: "0",
													},
													[
														(0, t.$Jhb)("stop", {
															offset: "0%",
															class: "gradient-stop",
														}),
														(0, t.$Jhb)("stop", {
															offset: "100%",
															class: "gradient-stop",
														}),
													],
												),
											]),
											(0, t.$Jhb)("path@path", {
												d: "",
												fill: "url(#Gradient2)",
											}),
										],
									),
								],
							)),
							(this.c = this.D(
								this.G.createInstance(
									f.$Tyb,
									this.b.toolbar,
									b.$XX.InlineEditsActions,
									{
										toolbarOptions: {
											primaryGroup: (N) => N.startsWith("primary"),
										},
									},
								),
							)),
							(this.f = this.D(
								this.G.createInstance(
									n.$$X,
									"",
									c.$0M,
									n.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								),
							)),
							(this.j = (0, E.derived)((N) => {
								const A = this.C.read(N);
								A &&
									this.f.setValue(
										A.newLines.join(`
`),
									);
							}).recomputeInitiallyAndOnChange(this.B)),
							(this.n = this.D(
								this.G.createInstance(
									n.$$X,
									"",
									c.$0M,
									n.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								),
							)),
							(this.q = this.D(
								this.G.createInstance(
									r.$wDb,
									this.b.promptEditor,
									{
										glyphMargin: !1,
										lineNumbers: "off",
										minimap: { enabled: !1 },
										guides: {
											indentation: !1,
											bracketPairs: !1,
											bracketPairsHorizontal: !1,
											highlightActiveIndentation: !1,
										},
										folding: !1,
										selectOnLineNumbers: !1,
										selectionHighlight: !1,
										columnSelection: !1,
										overviewRulerBorder: !1,
										overviewRulerLanes: 0,
										lineDecorationsWidth: 0,
										lineNumbersMinChars: 0,
										placeholder: "Describe the change you want...",
										fontFamily: i.$njb,
									},
									{
										contributions:
											d.EditorExtensionsRegistry.getSomeEditorContributions([
												o.$KDb.ID,
												p.$Ujc.ID,
												g.$2Mb.ID,
											]),
										isSimpleWidget: !0,
									},
									this.z,
								),
							)),
							(this.r = this.D(
								this.G.createInstance(
									r.$wDb,
									this.b.editor,
									{
										glyphMargin: !1,
										lineNumbers: "off",
										minimap: { enabled: !1 },
										guides: {
											indentation: !1,
											bracketPairs: !1,
											bracketPairsHorizontal: !1,
											highlightActiveIndentation: !1,
										},
										folding: !1,
										selectOnLineNumbers: !1,
										selectionHighlight: !1,
										columnSelection: !1,
										overviewRulerBorder: !1,
										overviewRulerLanes: 0,
										lineDecorationsWidth: 0,
										lineNumbersMinChars: 0,
									},
									{ contributions: [] },
									this.z,
								),
							)),
							(this.s = (0, m.$Uwb)(this.r)),
							(this.t = (0, E.derived)(this, (N) => {
								this.j.read(N);
								const A = this.C.read(N)?.changes;
								if (!A) return [];
								const R = [],
									O = [];
								if (
									A.length === 1 &&
									A[0].innerChanges[0].modifiedRange.equalsRange(
										this.f.getFullModelRange(),
									)
								)
									return [];
								for (const B of A)
									if (
										(B.original.isEmpty ||
											R.push({
												range: B.original.toInclusiveRange(),
												options: u.$Mxb,
											}),
										B.modified.isEmpty ||
											O.push({
												range: B.modified.toInclusiveRange(),
												options: u.$Lxb,
											}),
										B.modified.isEmpty || B.original.isEmpty)
									)
										B.original.isEmpty ||
											R.push({
												range: B.original.toInclusiveRange(),
												options: u.$Txb,
											}),
											B.modified.isEmpty ||
												O.push({
													range: B.modified.toInclusiveRange(),
													options: u.$Qxb,
												});
									else
										for (const U of B.innerChanges || [])
											B.original.contains(U.originalRange.startLineNumber) &&
												R.push({
													range: U.originalRange,
													options: U.originalRange.isEmpty() ? u.$Uxb : u.$Sxb,
												}),
												B.modified.contains(U.modifiedRange.startLineNumber) &&
													O.push({
														range: U.modifiedRange,
														options: U.modifiedRange.isEmpty()
															? u.$Rxb
															: u.$Pxb,
													});
								return O;
							})),
							(this.u = (0, E.derived)(this, (N) => {
								const A = this.z.getModel(),
									R = this.C.read(N);
								if (!R) return null;
								const O = R.range;
								let B = 0;
								for (
									let F = O.startLineNumber;
									F < O.endLineNumberExclusive;
									F++
								) {
									const x = A.getLineMaxColumn(F),
										H = this.z.getOffsetForColumn(F, x);
									B = Math.max(B, H);
								}
								return { left: this.z.getLayoutInfo().contentLeft + B };
							})),
							(this.w = (0, E.derived)(this, (N) => {
								const A = this.C.read(N);
								if (!A) return null;
								const R = A.range,
									O = this.a.scrollLeft.read(N),
									B = this.u.read(N).left + 20 - O,
									U =
										this.z.getTopForLineNumber(R.startLineNumber) -
										this.a.scrollTop.read(N),
									z =
										this.z.getTopForLineNumber(R.endLineNumberExclusive) -
										this.a.scrollTop.read(N),
									F = new v(B, U),
									x = new v(B, z),
									H = z - U,
									q = 50,
									V =
										this.z.getOption(h.EditorOption.lineHeight) *
										A.newLines.length,
									G = H - V,
									K = new v(B + q, U + G / 2),
									J = new v(B + q, z - G / 2);
								return {
									topCode: F,
									bottomCode: x,
									codeHeight: H,
									topEdit: K,
									bottomEdit: J,
									editHeight: V,
								};
							}));
						const M = (0, E.derived)(
							this,
							(N) => this.C.read(N) !== void 0 || this.F.read(N) !== void 0,
						);
						this.D(
							(0, a.$Gwb)(this.b.root, {
								display: (0, E.derived)(this, (N) =>
									M.read(N) ? "block" : "none",
								),
							}),
						),
							this.D((0, a.$ywb)(this.z.getDomNode(), this.b.root)),
							this.D(
								(0, m.$Uwb)(P).createOverlayWidget({
									domNode: this.b.root,
									position: (0, E.constObservable)(null),
									allowEditorOverflow: !1,
									minContentWidthInPx: (0, E.derived)((N) => {
										const A = this.u.read(N)?.left;
										if (A === void 0) return 0;
										const R = this.s.contentWidth.read(N);
										return A + R;
									}),
								}),
							),
							this.r.setModel(this.f),
							this.D(this.s.setDecorations(this.t)),
							this.D(
								(0, E.autorun)((N) => {
									const A = this.w.read(N);
									if (!A) return;
									const {
											topCode: R,
											bottomCode: O,
											topEdit: B,
											bottomEdit: U,
											editHeight: z,
										} = A,
										F = 10,
										x = 0,
										H = 40,
										q = new S()
											.moveTo(R)
											.lineTo(R.deltaX(F))
											.curveTo(R.deltaX(F + H), B.deltaX(-H - x), B.deltaX(-x))
											.lineTo(B)
											.lineTo(U)
											.lineTo(U.deltaX(-x))
											.curveTo(U.deltaX(-H - x), O.deltaX(F + H), O.deltaX(F))
											.lineTo(O)
											.build();
									this.b.path.setAttribute("d", q),
										(this.b.editorContainer.style.top = `${B.y}px`),
										(this.b.editorContainer.style.left = `${B.x}px`),
										(this.b.editorContainer.style.height = `${z}px`);
									const V = this.s.contentWidth.read(N);
									this.r.layout({ height: z, width: V });
								}),
							),
							this.q.setModel(this.n),
							this.q.layout(),
							this.D(
								I(
									$(
										this.F,
										(N) => N ?? "",
										(N) => N,
									),
									(0, m.$Uwb)(this.q).value,
								),
							),
							this.D(
								(0, E.autorun)((N) => {
									const A = (0, m.$Uwb)(this.q).isFocused.read(N);
									this.b.root.classList.toggle("focused", A);
								}),
							);
					}
				};
				(e.$Wjc = y), (e.$Wjc = y = Ne([j(3, s.$Li)], y));
				function $(T, P, k) {
					return (0, C.$Ud)(
						void 0,
						(L) => P(T.read(L)),
						(L, D) => T.set(k(L), D),
					);
				}
				class v {
					constructor(P, k) {
						(this.x = P), (this.y = k);
					}
					add(P) {
						return new v(this.x + P.x, this.y + P.y);
					}
					deltaX(P) {
						return new v(this.x + P, this.y);
					}
				}
				class S {
					constructor() {
						this.a = "";
					}
					moveTo(P) {
						return (this.a += `M ${P.x} ${P.y} `), this;
					}
					lineTo(P) {
						return (this.a += `L ${P.x} ${P.y} `), this;
					}
					curveTo(P, k, L) {
						return (
							(this.a += `C ${P.x} ${P.y} ${k.x} ${k.y} ${L.x} ${L.y} `), this
						);
					}
					build() {
						return this.a;
					}
				}
				function I(T, P) {
					const k = new w.$Zc();
					return (
						k.add(
							(0, E.autorun)((L) => {
								const D = T.read(L);
								P.set(D, void 0);
							}),
						),
						k.add(
							(0, E.autorun)((L) => {
								const D = P.read(L);
								T.set(D, void 0);
							}),
						),
						k
					);
				}
			},
		),
		define(
			de[2931],
			he([
				1, 0, 15, 33, 433, 29, 3, 77, 319, 9, 953, 196, 74, 69, 67, 1594, 1693,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xjc = void 0);
				let f = class extends C.$1c {
					static {
						o = this;
					}
					static {
						this.a = 0;
					}
					static b() {
						return r.URI.from({
							scheme: "inline-edits",
							path: new Date().toString() + String(o.a++),
						});
					}
					constructor(y, $, v, S, I, T, P) {
						super(),
							(this.textModel = y),
							(this._textModelVersionId = $),
							(this.q = v),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.f = (0, d.observableSignal)(this)),
							(this.g = (0, d.observableValue)(this, void 0)),
							(this.h = (0, d.observableValue)(this, !1)),
							(this.j = (0, m.$Yd)(() =>
								this.w.createModel("", null, o.b()),
							).keepObserved(this.B)),
							(this.m = (0, m.$Yd)(() =>
								this.w.createModel("", null, o.b()),
							).keepObserved(this.B)),
							(this.n = new s(this.textModel, this._textModelVersionId)),
							(this.isPinned = this.n.range.map((k) => !!k)),
							(this.userPrompt = (0, d.observableValue)(this, void 0)),
							(this.inlineEdit = (0, d.derived)(
								this,
								(k) => this._inlineEdit.read(k)?.promiseResult.read(k)?.data,
							)),
							(this._inlineEdit = (0, d.derived)(this, (k) => {
								const L = this.selectedInlineEdit.read(k);
								if (!L) return;
								const D = L.inlineCompletion.range;
								if (L.inlineCompletion.insertText.trim() === "") return;
								let M = L.inlineCompletion.insertText.split(/\r\n|\r|\n/);
								function N(B) {
									const U = B[0].match(/^\s*/)?.[0] ?? "";
									return B.map((z) => z.replace(new RegExp("^" + U), ""));
								}
								M = N(M);
								let R = this.textModel.getValueInRange(D).split(/\r\n|\r|\n/);
								(R = N(R)),
									this.j.get().setValue(
										R.join(`
`),
									),
									this.m.get().setValue(
										M.join(`
`),
									);
								const O = this.u.createDiffProvider({
									diffAlgorithm: "advanced",
								});
								return d.ObservablePromise.fromFn(async () => {
									const B = await O.computeDiff(
										this.j.get(),
										this.m.get(),
										{
											computeMoves: !1,
											ignoreTrimWhitespace: !1,
											maxComputationTimeMs: 1e3,
										},
										i.CancellationToken.None,
									);
									if (!B.identical)
										return new p.$Vjc(
											a.$rL.fromRangeInclusive(D),
											N(M),
											B.changes,
										);
								});
							})),
							(this.y = this.D(new C.$Zc())),
							(this.z = (0, d.disposableObservableValue)(this, void 0)),
							(this.C = (0, d.derivedOpts)(
								{ owner: this, equalsFn: w.$ed },
								(k) => this.z.read(k)?.completions.map((L) => new b(L)) ?? [],
							)),
							(this.F = (0, d.derivedHandleChanges)(
								{
									owner: this,
									createEmptyChangeSummary: () => ({
										inlineCompletionTriggerKind:
											h.InlineCompletionTriggerKind.Automatic,
									}),
									handleChange: (k, L) => (
										k.didChange(this.f) &&
											(L.inlineCompletionTriggerKind =
												h.InlineCompletionTriggerKind.Explicit),
										!0
									),
								},
								async (k, L) => {
									this.y.clear(),
										this.f.read(k),
										this._textModelVersionId.read(k);
									function D(O, B) {
										return B(O);
									}
									const M =
										this.n.range.read(k) ??
										D(this.q.read(k), (O) => (O.isEmpty() ? void 0 : O));
									if (!M) {
										this.z.set(void 0, void 0),
											this.userPrompt.set(void 0, void 0);
										return;
									}
									const N = {
											triggerKind: L.inlineCompletionTriggerKind,
											selectedSuggestionInfo: void 0,
											userPrompt: this.userPrompt.read(k),
										},
										A = (0, i.$De)(this.y);
									await (0, t.$Nh)(200, A);
									const R = await (0, g.$HCb)(
										this.t.inlineCompletionsProvider,
										M,
										this.textModel,
										N,
										A,
									);
									A.isCancellationRequested || this.z.set(R, void 0);
								},
							)),
							(this.G = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(k) => this.C.read(k),
							)),
							(this.selectedInlineCompletionIndex = (0, d.derived)(
								this,
								(k) => {
									const L = this.g.read(k),
										D = this.G.read(k),
										M =
											this.g === void 0
												? -1
												: D.findIndex((N) => N.semanticId === L);
									return M === -1 ? (this.g.set(void 0, void 0), 0) : M;
								},
							)),
							(this.selectedInlineEdit = (0, d.derived)(this, (k) => {
								const L = this.G.read(k),
									D = this.selectedInlineCompletionIndex.read(k);
								return L[D];
							})),
							(this.activeCommands = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(k) =>
									this.selectedInlineEdit.read(k)?.inlineCompletion.source
										.inlineCompletions.commands ?? [],
							)),
							this.D((0, d.recomputeInitiallyAndOnChange)(this.F));
					}
					async trigger(y) {
						this.h.set(!0, y), await this.F.get();
					}
					async triggerExplicitly(y) {
						(0, d.subtransaction)(y, ($) => {
							this.h.set(!0, $), this.f.trigger($);
						}),
							await this.F.get();
					}
					stop(y) {
						(0, d.subtransaction)(y, ($) => {
							this.userPrompt.set(void 0, $),
								this.h.set(!1, $),
								this.z.set(void 0, $),
								this.n.setRange(void 0, $);
						});
					}
					async H(y) {
						await this.triggerExplicitly();
						const $ = this.G.get() || [];
						if ($.length > 0) {
							const v =
								(this.selectedInlineCompletionIndex.get() + y + $.length) %
								$.length;
							this.g.set($[v].semanticId, void 0);
						} else this.g.set(void 0, void 0);
					}
					async next() {
						await this.H(1);
					}
					async previous() {
						await this.H(-1);
					}
					togglePin() {
						this.isPinned.get()
							? this.n.setRange(void 0, void 0)
							: this.n.setRange(this.q.get(), void 0);
					}
					async accept(y) {
						if (y.getModel() !== this.textModel) throw new E.$gb();
						const $ = this.selectedInlineEdit.get();
						$ &&
							(y.pushUndoStop(),
							y.executeEdits("inlineSuggestion.accept", [
								$.inlineCompletion.toSingleTextEdit().toSingleEditOperation(),
							]),
							this.stop());
					}
				};
				(e.$Xjc = f),
					(e.$Xjc = f = o = Ne([j(4, c.$k3), j(5, u.$Dxb), j(6, n.$QO)], f));
				class b {
					constructor(y) {
						(this.inlineCompletion = y),
							(this.semanticId = this.inlineCompletion.hash());
					}
				}
				class s extends C.$1c {
					constructor(y, $) {
						super(),
							(this.b = y),
							(this.f = $),
							(this.a = (0, d.observableValue)(this, [])),
							(this.range = (0, d.derived)(this, (v) => {
								this.f.read(v);
								const S = this.a.read(v)[0];
								return S ? (this.b.getDecorationRange(S) ?? null) : null;
							})),
							this.D(
								(0, C.$Yc)(() => {
									this.b.deltaDecorations(this.a.get(), []);
								}),
							);
					}
					setRange(y, $) {
						this.a.set(
							this.b.deltaDecorations(
								this.a.get(),
								y
									? [{ range: y, options: { description: "trackedRange" } }]
									: [],
							),
							$,
						);
					}
				}
			},
		),
		define(
			de[1694],
			he([
				1, 0, 3, 77, 319, 542, 755, 104, 391, 69, 1604, 2931, 1693, 10, 8, 5,
				326,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yjc = void 0);
				let f = class extends t.$1c {
					static {
						o = this;
					}
					static {
						this.ID = "editor.contrib.inlineEditsController";
					}
					static get(l) {
						return l.getContribution(o.ID);
					}
					constructor(l, y, $, v, S, I) {
						super(),
							(this.editor = l),
							(this.j = y),
							(this.n = $),
							(this.q = v),
							(this.s = S),
							(this.t = I),
							(this.a = (0, p.$Mwb)("editor.inlineEdits.enabled", !1, this.t)),
							(this.b = (0, E.$Uwb)(this.editor)),
							(this.c = (0, i.derived)(
								this,
								(T) => this.b.cursorSelection.read(T) ?? new d.$kL(1, 1, 1, 1),
							)),
							(this.f = this.q.for(
								this.s.inlineCompletionsProvider,
								"InlineEditsDebounce",
								{ min: 50, max: 50 },
							)),
							(this.model = (0, w.$Yd)(this, (T) => {
								if (!this.a.read(T) || this.b.isReadonly.read(T)) return;
								const P = this.b.model.read(T);
								return P
									? this.j.createInstance(
											(0, C.$Tpb)(a.$Xjc, T),
											P,
											this.b.versionId,
											this.c,
											this.f,
										)
									: void 0;
							})),
							(this.g = (0, i.derivedObservableWithCache)(
								this,
								(T, P) =>
									P || this.model.read(T)?.inlineEdit.read(T) !== void 0,
							)),
							(this.h = (0, w.$Yd)(this, (T) => {
								if (this.g.read(T))
									return this.j.createInstance(
										(0, C.$Tpb)(h.$Wjc, T),
										this.editor,
										this.model.map((P, k) => P?.inlineEdit.read(k)),
										b(
											(P) =>
												this.model.read(P)?.userPrompt ??
												(0, i.observableValue)("empty", ""),
										),
									);
							})),
							this.D(
								(0, p.$Nwb)(
									u.$Sjc,
									this.n,
									(T) => !!this.model.read(T)?.inlineEdit.read(T),
								),
							),
							this.D(
								(0, p.$Nwb)(
									u.$Tjc,
									this.n,
									(T) => !!this.model.read(T)?.isPinned.read(T),
								),
							),
							this.model.recomputeInitiallyAndOnChange(this.B),
							this.h.recomputeInitiallyAndOnChange(this.B);
					}
				};
				(e.$Yjc = f),
					(e.$Yjc =
						f =
						o =
							Ne(
								[
									j(1, g.$Li),
									j(2, n.$6j),
									j(3, m.$PBb),
									j(4, r.$k3),
									j(5, c.$gj),
								],
								f,
							));
				function b(s) {
					return (0, w.$Ud)(
						void 0,
						(l) => s(l).read(l),
						(l, y) => {
							s(void 0).set(l, y);
						},
					);
				}
			},
		),
		define(
			de[2932],
			he([1, 0, 14, 27, 77, 407, 46, 281, 71, 1604, 1694, 4, 11, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4jc = e.$3jc = e.$2jc = e.$1jc = e.$Zjc = void 0),
					(a = mt(a));
				function n(s) {
					return { label: s.value, alias: s.original };
				}
				class g extends C.$itb {
					static {
						this.ID = r.$Rjc;
					}
					constructor() {
						super({
							id: g.ID,
							...n(a.localize2(1262, "Show Next Inline Edit")),
							precondition: c.$Kj.and(m.EditorContextKeys.writable, r.$Sjc),
							kbOpts: {
								weight: 100,
								primary: i.KeyMod.Alt | i.KeyCode.BracketRight,
							},
						});
					}
					async run(l, y) {
						u.$Yjc.get(y)?.model.get()?.next();
					}
				}
				e.$Zjc = g;
				class p extends C.$itb {
					static {
						this.ID = r.$Qjc;
					}
					constructor() {
						super({
							id: p.ID,
							...n(a.localize2(1263, "Show Previous Inline Edit")),
							precondition: c.$Kj.and(m.EditorContextKeys.writable, r.$Sjc),
							kbOpts: {
								weight: 100,
								primary: i.KeyMod.Alt | i.KeyCode.BracketLeft,
							},
						});
					}
					async run(l, y) {
						u.$Yjc.get(y)?.model.get()?.previous();
					}
				}
				e.$1jc = p;
				class o extends C.$itb {
					constructor() {
						super({
							id: "editor.action.inlineEdits.trigger",
							...n(a.localize2(1264, "Trigger Inline Edit")),
							precondition: m.EditorContextKeys.writable,
						});
					}
					async run(l, y) {
						const $ = u.$Yjc.get(y);
						await (0, E.$9d)(async (v) => {
							await $?.model.get()?.triggerExplicitly(v);
						});
					}
				}
				e.$2jc = o;
				class f extends C.$itb {
					constructor() {
						super({
							id: r.$Pjc,
							...n(a.localize2(1265, "Accept Inline Edit")),
							precondition: r.$Sjc,
							menuOpts: {
								menuId: h.$XX.InlineEditsActions,
								title: a.localize(1261, null),
								group: "primary",
								order: 1,
								icon: t.$ak.check,
							},
							kbOpts: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Space,
								weight: 2e4,
								kbExpr: r.$Sjc,
							},
						});
					}
					async run(l, y) {
						y instanceof d.$wDb && (y = y.getParentEditor());
						const $ = u.$Yjc.get(y);
						$ && ($.model.get()?.accept($.editor), $.editor.focus());
					}
				}
				e.$3jc = f;
				class b extends C.$itb {
					static {
						this.ID = "editor.action.inlineEdits.hide";
					}
					constructor() {
						super({
							id: b.ID,
							...n(a.localize2(1266, "Hide Inline Edit")),
							precondition: r.$Sjc,
							kbOpts: { weight: 100, primary: i.KeyCode.Escape },
						});
					}
					async run(l, y) {
						const $ = u.$Yjc.get(y);
						(0, w.transaction)((v) => {
							$?.model.get()?.stop(v);
						});
					}
				}
				e.$4jc = b;
			},
		),
		