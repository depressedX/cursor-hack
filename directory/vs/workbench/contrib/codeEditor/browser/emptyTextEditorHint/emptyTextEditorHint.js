define(
			de[1933],
			he([
				1, 0, 7, 3, 56, 4, 31, 172, 23, 6, 10, 38, 46, 39, 66, 595, 1289, 32,
				62, 460, 12, 127, 130, 297, 186, 499, 1348, 45, 71, 8, 95, 72, 49, 168,
				2398,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JFc = e.$IFc = void 0),
					(t = mt(t));
				const A = t.$;
				e.$IFc = "workbench.editor.empty.hint";
				let R = class {
					static {
						this.ID = "editor.contrib.emptyTextEditorHint";
					}
					constructor(U, z, F, x, H, q, V, G, K, J, W) {
						(this.c = U),
							(this.f = z),
							(this.g = F),
							(this.h = x),
							(this.i = H),
							(this.j = q),
							(this.k = V),
							(this.l = G),
							(this.m = K),
							(this.n = J),
							(this.o = W),
							(this.a = []),
							this.a.push(this.c.onDidChangeModel(() => this.r())),
							this.a.push(this.c.onDidChangeModelLanguage(() => this.r())),
							this.a.push(this.c.onDidChangeModelContent(() => this.r())),
							this.a.push(this.c.onDidChangeModelDecorations(() => this.r())),
							this.a.push(
								this.c.onDidChangeConfiguration((X) => {
									X.hasChanged(a.EditorOption.readOnly) && this.r();
								}),
							),
							this.a.push(
								this.h.onDidChangeConfiguration((X) => {
									X.affectsConfiguration(e.$IFc) && this.r();
								}),
							);
					}
					p() {
						return { clickable: !0 };
					}
					q() {
						if (
							this.h.getValue(e.$IFc) === "hidden" ||
							this.c.getOption(a.EditorOption.readOnly)
						)
							return !1;
						const z = this.c.getModel(),
							F = z?.getLanguageId();
						return !z ||
							F === $.$e8 ||
							F === $.$g8 ||
							F === v.$m7 ||
							(0, I.$Olc)(this.l) ||
							this.i.getContextKeyValue(
								P.EditorContextKeys.editorHasPromptBar.key,
							) ||
							this.c.getModel()?.getValueLength() ||
							!!this.c
								.getLineDecorations(1)
								?.find(
									(q) =>
										q.options.beforeContentClassName ||
										q.options.afterContentClassName ||
										q.options.before?.content ||
										q.options.after?.content,
								)
							? !1
							: z?.uri.scheme === m.Schemas.untitled && F === d.$0M;
					}
					r() {
						const U = this.q();
						U && !this.b
							? (this.b = new O(
									this.c,
									this.p(),
									this.f,
									this.g,
									this.h,
									this.j,
									this.k,
									this.m,
									this.n,
									this.o,
								))
							: !U && this.b && (this.b.dispose(), (this.b = void 0));
					}
					dispose() {
						(0, i.$Vc)(this.a), this.b?.dispose();
					}
				};
				(e.$JFc = R),
					(e.$JFc = R =
						Ne(
							[
								j(1, n.$EY),
								j(2, C.$ek),
								j(3, u.$gj),
								j(4, k.$6j),
								j(5, D.$Uyb),
								j(6, c.$uZ),
								j(7, T.$0zb),
								j(8, o.$km),
								j(9, f.$Bk),
								j(10, M.$Xxb),
							],
							R,
						));
				class O {
					static {
						this.a = "editor.widget.emptyHint";
					}
					constructor(U, z, F, x, H, q, V, G, K, J) {
						(this.h = U),
							(this.i = z),
							(this.j = F),
							(this.k = x),
							(this.l = H),
							(this.m = q),
							(this.n = V),
							(this.o = G),
							(this.p = K),
							(this.q = J),
							(this.f = !1),
							(this.g = ""),
							(this.c = new i.$Zc()),
							this.c.add(
								this.h.onDidChangeConfiguration((X) => {
									this.b &&
										X.hasChanged(a.EditorOption.fontInfo) &&
										this.h.applyFontInfo(this.b);
								}),
							);
						const W = r.Event.debounce(
							this.h.onDidFocusEditorText,
							() => {},
							500,
						);
						this.c.add(
							W(() => {
								this.h.hasTextFocus() &&
									this.f &&
									this.g &&
									this.l.getValue(
										y.AccessibilityVerbositySettingId.EmptyEditorHint,
									) &&
									(0, l.$pib)(this.g);
							}),
						),
							this.h.addContentWidget(this);
					}
					getId() {
						return O.a;
					}
					r(U) {
						const z = () => {
							this.l.updateValue(e.$IFc, "hidden"),
								this.dispose(),
								this.h.focus();
						};
						if (!U) {
							z();
							return;
						}
						this.q.showContextMenu({
							getAnchor: () => new N.$2fb(t.$Ogb(), U),
							getActions: () => [
								{
									id: "workench.action.disableEmptyEditorHint",
									label: (0, E.localize)(4860, null),
									tooltip: (0, E.localize)(4861, null),
									enabled: !0,
									class: void 0,
									run: () => {
										z();
									},
								},
							],
						});
					}
					s(U) {
						const z =
								(U.length === 1 ? U[0].fullName : void 0) ?? this.p.nameShort,
							F = "inlineChat.start";
						let x = `Ask ${z} something or start typing to dismiss.`;
						const H = () => {
								this.o.publicLog2("workbenchActionExecuted", {
									id: "inlineChat.hintAction",
									from: "hint",
								}),
									this.k.executeCommand(F, { from: "hint" });
							},
							q = {
								disposables: this.c,
								callback: (J, W) => {
									switch (J) {
										case "0":
											H();
											break;
									}
								},
							},
							V = A("empty-hint-text");
						V.style.display = "block";
						const G = this.n.lookupKeybinding(F),
							K = G?.getLabel();
						if (G && K) {
							const J = (0, E.localize)(4862, null, K, z),
								[W, X] = J.split(K).map((ee) => {
									if (this.i.clickable) {
										const _ = A("a", void 0, ee);
										return (
											(_.style.fontStyle = "italic"),
											(_.style.cursor = "pointer"),
											this.c.add(
												t.$0fb(_, t.$$gb.CONTEXT_MENU, (te) => this.r(te)),
											),
											this.c.add(t.$0fb(_, t.$$gb.CLICK, H)),
											_
										);
									} else {
										const _ = A("span", void 0, ee);
										return (_.style.fontStyle = "italic"), _;
									}
								});
							V.appendChild(W);
							const Y = q.disposables.add(new b.$7ob(V, s.OS));
							Y.set(G),
								(Y.element.style.width = "min-content"),
								(Y.element.style.display = "inline"),
								this.i.clickable &&
									((Y.element.style.cursor = "pointer"),
									this.c.add(
										t.$0fb(Y.element, t.$$gb.CONTEXT_MENU, (ee) => this.r(ee)),
									),
									this.c.add(t.$0fb(Y.element, t.$$gb.CLICK, H))),
								V.appendChild(X);
							const ie = (0, E.localize)(4863, null),
								ne = A("span", void 0, ie);
							(ne.style.fontStyle = "italic"),
								V.appendChild(ne),
								(x = J.concat(ie));
						} else {
							const J = (0, E.localize)(4864, null, z),
								W = (0, g.$kib)(J, { actionHandler: q });
							V.appendChild(W);
						}
						return { ariaLabel: x, hintElement: V };
					}
					t() {
						const U = {
								disposables: this.c,
								callback: (X, Y) => {
									switch (X) {
										case "0":
											z(Y.browserEvent);
											break;
										case "3":
											this.r();
											break;
									}
								},
							},
							z = async (X) => {
								X.stopPropagation(),
									this.h.focus(),
									this.o.publicLog2("workbenchActionExecuted", {
										id: S.$t7b,
										from: "hint",
									}),
									await this.k.executeCommand(S.$t7b),
									this.h.focus();
							},
							F = async (X) => {
								X.stopPropagation(),
									this.o.publicLog2("workbenchActionExecuted", {
										id: p.$HFc.Id,
										from: "hint",
									}),
									await this.k.executeCommand(p.$HFc.Id);
							},
							x = async (X) => {
								X.stopPropagation();
								const Y = this.j.activeGroup.activeEditor;
								this.o.publicLog2("workbenchActionExecuted", {
									id: "welcome.showNewFileEntries",
									from: "hint",
								}),
									(await this.k.executeCommand("welcome.showNewFileEntries", {
										from: "hint",
									})) &&
										Y !== null &&
										Y.resource?.scheme === m.Schemas.untitled &&
										this.j.activeGroup.closeEditor(Y, { preserveFocus: !0 });
							},
							q = this.n.lookupKeybinding(S.$t7b)?.getLabel(),
							V = (0, E.localize)(4865, null, q),
							G = (0, g.$kib)(V, { actionHandler: U, renderCodeSegments: !1 });
						G.style.fontStyle = "italic";
						const K = [S.$t7b],
							J = K.map((X) => this.n.lookupKeybinding(X)?.getLabel() ?? X),
							W = (0, E.localize)(4866, null, ...J);
						for (const X of G.querySelectorAll("a")) {
							X.style.cursor = "pointer";
							const Y = K.shift(),
								ie = Y && this.n.lookupKeybinding(Y)?.getLabel();
							U.disposables.add(
								this.m.setupManagedHover((0, L.$cib)("mouse"), X, ie ?? ""),
							);
						}
						return { hintElement: G, ariaLabel: W };
					}
					getDomNode() {
						if (!this.b) {
							(this.b = A(".empty-editor-hint")),
								(this.b.style.width = "max-content"),
								(this.b.style.paddingLeft = "4px");
							const { hintElement: U, ariaLabel: z } = this.t();
							this.b.append(U),
								(this.g = z.concat(
									(0, E.localize)(
										4867,
										null,
										y.AccessibilityVerbositySettingId.EmptyEditorHint,
									),
								)),
								this.c.add(
									t.$0fb(this.b, "click", () => {
										this.h.focus();
									}),
								),
								this.h.applyFontInfo(this.b);
						}
						return this.b;
					}
					getPosition() {
						return {
							position: { lineNumber: 1, column: 1 },
							preference: [w.ContentWidgetPositionPreference.EXACT],
						};
					}
					dispose() {
						this.h.removeContentWidget(this), (0, i.$Vc)(this.c);
					}
				}
				(0, h.$qtb)(R.ID, R, h.EditorContributionInstantiation.Eager);
			},
		),
		