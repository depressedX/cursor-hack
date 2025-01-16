define(
			de[3480],
			he([
				1, 0, 461, 50, 3, 221, 71, 4, 607, 92, 11, 179, 49, 5, 39, 294, 1741,
				176,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$43b = void 0),
					(e.$53b = b);
				let f = class extends g.$A1b {
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.notebookEditor = l),
							(this.contextKeyService = y),
							(this.cellContainer = $),
							(this.runButtonContainer = v),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.b = this.D(
								S.createMenu(
									this.notebookEditor.creationOptions.menuIds
										.cellExecutePrimary,
									y,
								),
							)),
							(this.h = this.D(
								S.createMenu(
									this.notebookEditor.creationOptions.menuIds
										.cellExecuteToolbar,
									y,
								),
							)),
							this.q(v, $, y);
						const k = () => {
							const D = this.getCellToolbarActions(this.b).primary[0];
							this.a.setActions(D ? [D] : []);
						};
						k(),
							this.D(this.b.onDidChange(k)),
							this.D(this.h.onDidChange(k)),
							this.D(this.notebookEditor.notebookOptions.onDidChangeOptions(k));
					}
					didRenderCell(l) {
						if (
							(this.f.add(
								(0, p.$P3b)(this.notebookEditor, l, this.runButtonContainer),
							),
							this.notebookEditor.hasModel())
						) {
							const y = {
								ui: !0,
								cell: l,
								notebookEditor: this.notebookEditor,
								$mid: E.MarshalledId.NotebookCellActionContext,
							};
							this.a.context = y;
						}
					}
					getCellToolbarActions(l) {
						const v = { primary: [], secondary: [] };
						return (
							(0, r.$Kyb)(l, { shouldForwardArgs: !0 }, v, (S) =>
								/^inline/.test(S),
							),
							v
						);
					}
					q(l, y, $) {
						const v = this.D(new w.$Zc()),
							S = this.D(
								new i.$rj(
									"notebook.moreRunActions",
									(0, d.localize)(8202, null),
									"codicon-chevron-down",
									!0,
								),
							),
							I = (P) => this.j.lookupKeybinding(P.id, T),
							T = this.D(b($));
						this.a = this.D(
							new t.$jpb(l, this.m, {
								getKeyBinding: I,
								actionViewItemProvider: (P, k) => {
									v.clear();
									const L = this.getCellToolbarActions(this.b).primary[0];
									if (!(L instanceof u.$2X)) return;
									const D = this.getCellToolbarActions(this.h).secondary;
									if (!D.length) return;
									const M = this.n.createInstance(
										m.$OYb,
										L,
										S,
										D,
										"notebook-cell-run-toolbar",
										this.m,
										{ ...k, getKeyBinding: I },
									);
									return (
										v.add(
											M.onDidChangeDropdownVisibility((N) => {
												y.classList.toggle(
													"cell-run-toolbar-dropdown-active",
													N,
												);
											}),
										),
										M
									);
								},
								renderDropdownAsChildElement: !0,
							}),
						);
					}
				};
				(e.$43b = f),
					(e.$43b = f =
						Ne([j(4, u.$YX), j(5, n.$uZ), j(6, h.$Xxb), j(7, c.$Li)], f));
				function b(s) {
					const l = s.createScoped(document.createElement("div"));
					return (
						a.$bMb.bindTo(l).set(!0),
						C.EditorContextKeys.editorTextFocus.bindTo(l).set(!0),
						C.EditorContextKeys.focus.bindTo(l).set(!0),
						C.EditorContextKeys.textInputFocus.bindTo(l).set(!0),
						o.$IJb.bindTo(l).set("idle"),
						o.$qJb.bindTo(l).set(!0),
						o.$pJb.bindTo(l).set(!0),
						o.$CJb.bindTo(l).set("code"),
						l
					);
				}
			},
		),
		