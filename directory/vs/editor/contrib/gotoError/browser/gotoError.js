import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import './markerNavigationService.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import './gotoErrorWidget.js';
import '../../../../base/common/constants.js';
define(
			de[857],
			he([
				1, 0, 14, 27, 3, 46, 65, 48, 17, 71, 1622, 4, 11, 8, 116, 5, 43, 79,
				4113, 58,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*keyCodes*/,
 w /*lifecycle*/,
 E /*editorExtensions*/,
 C /*codeEditorService*/,
 d /*position*/,
 m /*range*/,
 r /*editorContextKeys*/,
 u /*markerNavigationService*/,
 a /*nls*/,
 h /*actions*/,
 c /*contextkey*/,
 n /*editor*/,
 g /*instantiation*/,
 p /*keybindingsRegistry*/,
 o /*iconRegistry*/,
 f /*gotoErrorWidget*/,
 b /*constants*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9hc = e.$8hc = e.$7hc = void 0),
					(a = mt(a));
				let l = class {
					static {
						s = this;
					}
					static {
						this.ID = "editor.contrib.markerController";
					}
					static get(D) {
						return D.getContribution(s.ID);
					}
					constructor(D, M, N, A, R) {
						(this.g = M),
							(this.h = N),
							(this.i = A),
							(this.j = R),
							(this.c = new w.$Zc()),
							(this.a = D),
							(this.b = P.bindTo(this.h));
					}
					dispose() {
						this.k(), this.c.dispose();
					}
					k() {
						this.b.reset(),
							this.c.clear(),
							(this.f = void 0),
							(this.d = void 0);
					}
					l(D) {
						if (this.d && this.d.matches(D)) return this.d;
						let M = !1;
						return (
							this.d && ((M = !0), this.k()),
							(this.d = this.g.getMarkerList(D)),
							M && this.d.move(!0, this.a.getModel(), this.a.getPosition()),
							(this.f = this.j.createInstance(f.$6hc, this.a)),
							this.f.onDidClose(() => this.close(), this, this.c),
							this.b.set(!0),
							this.c.add(this.d),
							this.c.add(this.f),
							this.c.add(
								this.a.onDidChangeCursorPosition((N) => {
									(!this.d?.selected ||
										!m.$iL.containsPosition(
											this.d?.selected.marker,
											N.position,
										)) &&
										this.d?.resetIndex();
								}),
							),
							this.c.add(
								this.d.onDidChange(() => {
									if (!this.f || !this.f.position || !this.d) return;
									const N = this.d.find(this.a.getModel().uri, this.f.position);
									N ? this.f.updateMarker(N.marker) : this.f.showStale();
								}),
							),
							this.c.add(
								this.f.onDidSelectRelatedInformation((N) => {
									this.i.openCodeEditor(
										{
											resource: N.resource,
											options: {
												pinned: !0,
												revealIfOpened: !0,
												selection: m.$iL.lift(N).collapseToStart(),
											},
										},
										this.a,
									),
										this.close(!1);
								}),
							),
							this.c.add(this.a.onDidChangeModel(() => this.k())),
							this.d
						);
					}
					close(D = !0) {
						this.k(), D && this.a.focus();
					}
					showAtMarker(D) {
						if (this.a.hasModel()) {
							const M = this.l(this.a.getModel().uri);
							M.resetIndex(),
								M.move(
									!0,
									this.a.getModel(),
									new d.$hL(D.startLineNumber, D.startColumn),
									!0,
								),
								M.selected &&
									this.f.showAtMarker(
										M.selected.marker,
										M.selected.index,
										M.selected.total,
									);
						}
					}
					async showMarkerAtCursorIfExists() {
						if (this.a.hasModel()) {
							const M = this.l(this.a.getModel().uri).find(
								this.a.getModel().uri,
								this.a.getPosition(),
							);
							M && this.f.showAtMarker(M.marker, M.index, M.total, !0);
						}
					}
					async nagivate(D, M) {
						if (this.a.hasModel()) {
							const N = this.l(M ? void 0 : this.a.getModel().uri);
							if (
								(N.move(D, this.a.getModel(), this.a.getPosition()),
								!N.selected)
							)
								return;
							if (
								N.selected.marker.resource.toString() !==
								this.a.getModel().uri.toString()
							) {
								this.k();
								const A = await this.i.openCodeEditor(
									{
										resource: N.selected.marker.resource,
										options: {
											pinned: !1,
											revealIfOpened: !0,
											selectionRevealType:
												n.TextEditorSelectionRevealType.NearTop,
											selection: N.selected.marker,
										},
									},
									this.a,
								);
								A && (s.get(A)?.close(), s.get(A)?.nagivate(D, M));
							} else
								this.f.showAtMarker(
									N.selected.marker,
									N.selected.index,
									N.selected.total,
								);
						}
					}
				};
				(e.$7hc = l),
					(e.$7hc =
						l =
						s =
							Ne([j(1, u.$1hc), j(2, c.$6j), j(3, C.$dtb), j(4, g.$Li)], l));
				class y extends E.$itb {
					constructor(D, M, N, A = !1) {
						super(N), (this.d = D), (this.h = M), (this.j = A);
					}
					async run(D, M) {
						M.hasModel() &&
							(this.j
								? l.get(M)?.showMarkerAtCursorIfExists()
								: l.get(M)?.nagivate(this.d, this.h));
					}
				}
				class $ extends y {
					static {
						this.ID = b.$tV;
					}
					static {
						this.LABEL = a.localize(1080, null);
					}
					constructor() {
						super(!0, !1, {
							id: $.ID,
							label: $.LABEL,
							alias: "Go to Next Problem (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Alt | i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$6hc.TitleMenu,
								title: $.LABEL,
								icon: (0, o.$$O)(
									"marker-navigation-next",
									t.$ak.arrowDown,
									a.localize(1081, null),
								),
								group: "navigation",
								order: 1,
							},
						});
					}
				}
				e.$8hc = $;
				class v extends y {
					static {
						this.ID = b.$uV;
					}
					static {
						this.LABEL = a.localize(1082, null);
					}
					constructor() {
						super(
							!0,
							!1,
							{
								id: v.ID,
								label: v.LABEL,
								alias: "Go to Problem at Cursor (Error, Warning, Info)",
								precondition: void 0,
								kbOpts: {
									kbExpr: r.EditorContextKeys.focus,
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.F8,
									weight: p.KeybindingWeight.EditorContrib,
								},
							},
							!0,
						);
					}
				}
				e.$9hc = v;
				class S extends y {
					static {
						this.ID = "editor.action.marker.prev";
					}
					static {
						this.LABEL = a.localize(1083, null);
					}
					constructor() {
						super(!1, !1, {
							id: S.ID,
							label: S.LABEL,
							alias: "Go to Previous Problem (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Shift | i.KeyMod.Alt | i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$6hc.TitleMenu,
								title: S.LABEL,
								icon: (0, o.$$O)(
									"marker-navigation-previous",
									t.$ak.arrowUp,
									a.localize(1084, null),
								),
								group: "navigation",
								order: 2,
							},
						});
					}
				}
				class I extends y {
					constructor() {
						super(!0, !0, {
							id: "editor.action.marker.nextInFiles",
							label: a.localize(1085, null),
							alias: "Go to Next Problem in Files (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: h.$XX.MenubarGoMenu,
								title: a.localize(1086, null),
								group: "6_problem_nav",
								order: 1,
							},
						});
					}
				}
				class T extends y {
					constructor() {
						super(!1, !0, {
							id: "editor.action.marker.prevInFiles",
							label: a.localize(1087, null),
							alias: "Go to Previous Problem in Files (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Shift | i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: h.$XX.MenubarGoMenu,
								title: a.localize(1088, null),
								group: "6_problem_nav",
								order: 2,
							},
						});
					}
				}
				(0, E.$qtb)(l.ID, l, E.EditorContributionInstantiation.Lazy),
					(0, E.$ntb)($),
					(0, E.$ntb)(S),
					(0, E.$ntb)(v),
					(0, E.$ntb)(I),
					(0, E.$ntb)(T);
				const P = new c.$5j("markersNavigationVisible", !1),
					k = E.$htb.bindToContribution(l.get);
				(0, E.$mtb)(
					new k({
						id: "closeMarkersNavigation",
						precondition: P,
						handler: (L) => L.close(),
						kbOpts: {
							weight: p.KeybindingWeight.EditorContrib + 50,
							kbExpr: r.EditorContextKeys.focus,
							primary: i.KeyCode.Escape,
							secondary: [i.KeyMod.Shift | i.KeyCode.Escape],
						},
					}),
				);
			},
		)
