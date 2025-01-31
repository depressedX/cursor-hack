import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/storage/common/storage.js';
import './typeHierarchyPeek.js';
import '../common/typeHierarchy.js';
define(
			de[3273],
			he([
				1, 0, 33, 14, 29, 6, 27, 3, 46, 65, 17, 255, 4, 11, 8, 5, 43, 21, 3272,
				1003,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*codicons*/,
 w /*errors*/,
 E /*event*/,
 C /*keyCodes*/,
 d /*lifecycle*/,
 m /*editorExtensions*/,
 r /*codeEditorService*/,
 u /*range*/,
 a /*peekView*/,
 h /*nls*/,
 c /*actions*/,
 n /*contextkey*/,
 g /*instantiation*/,
 p /*keybindingsRegistry*/,
 o /*storage*/,
 f /*typeHierarchyPeek*/,
 b /*typeHierarchy*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const l = new n.$5j(
						"editorHasTypeHierarchyProvider",
						!1,
						(0, h.localize)(11030, null),
					),
					y = new n.$5j(
						"typeHierarchyVisible",
						!1,
						(0, h.localize)(11031, null),
					),
					$ = new n.$5j("typeHierarchyDirection", void 0, {
						type: "string",
						description: (0, h.localize)(11032, null),
					});
				function v(I) {
					return I === b.TypeHierarchyDirection.Subtypes ||
						I === b.TypeHierarchyDirection.Supertypes
						? I
						: b.TypeHierarchyDirection.Subtypes;
				}
				let S = class {
					static {
						s = this;
					}
					static {
						this.Id = "typeHierarchy";
					}
					static get(T) {
						return T.getContribution(s.Id);
					}
					static {
						this.a = "typeHierarchy/defaultDirection";
					}
					constructor(T, P, k, L, D) {
						(this._editor = T),
							(this.h = P),
							(this.i = k),
							(this.j = L),
							(this.k = D),
							(this.e = new d.$Zc()),
							(this.f = new d.$Zc()),
							(this.b = l.bindTo(this.h)),
							(this.c = y.bindTo(this.h)),
							(this.d = $.bindTo(this.h)),
							this.e.add(
								E.Event.any(
									T.onDidChangeModel,
									T.onDidChangeModelLanguage,
									b.$67.onDidChange,
								)(() => {
									this.b.set(T.hasModel() && b.$67.has(T.getModel()));
								}),
							),
							this.e.add(this.f);
					}
					dispose() {
						this.e.dispose();
					}
					async startTypeHierarchyFromEditor() {
						if ((this.f.clear(), !this._editor.hasModel())) return;
						const T = this._editor.getModel(),
							P = this._editor.getPosition();
						if (!b.$67.has(T)) return;
						const k = new t.$Ce(),
							L = b.$77.create(T, P, k.token),
							D = v(
								this.i.get(
									s.a,
									o.StorageScope.PROFILE,
									b.TypeHierarchyDirection.Subtypes,
								),
							);
						this.l(P, D, L, k);
					}
					l(T, P, k, L) {
						this.c.set(!0),
							this.d.set(P),
							E.Event.any(
								this._editor.onDidChangeModel,
								this._editor.onDidChangeModelLanguage,
							)(this.endTypeHierarchy, this, this.f),
							(this.g = this.k.createInstance(f.$RYc, this._editor, T, P)),
							this.g.showLoading(),
							this.f.add(
								this.g.onDidClose(() => {
									this.endTypeHierarchy(),
										this.i.store(
											s.a,
											this.g.direction,
											o.StorageScope.PROFILE,
											o.StorageTarget.USER,
										);
								}),
							),
							this.f.add({
								dispose() {
									L.dispose(!0);
								},
							}),
							this.f.add(this.g),
							k
								.then((D) => {
									L.token.isCancellationRequested ||
										(D
											? (this.f.add(D), this.g.showModel(D))
											: this.g.showMessage((0, h.localize)(11033, null)));
								})
								.catch((D) => {
									if ((0, w.$8)(D)) {
										this.endTypeHierarchy();
										return;
									}
									this.g.showMessage((0, h.localize)(11034, null));
								});
					}
					async startTypeHierarchyFromTypeHierarchy() {
						if (!this.g) return;
						const T = this.g.getModel(),
							P = this.g.getFocused();
						if (!P || !T) return;
						const k = await this.j.openCodeEditor(
							{ resource: P.item.uri },
							this._editor,
						);
						if (!k) return;
						const L = T.fork(P.item);
						this.f.clear(),
							s
								.get(k)
								?.l(
									u.$iL.lift(L.root.selectionRange).getStartPosition(),
									this.g.direction,
									Promise.resolve(L),
									new t.$Ce(),
								);
					}
					showSupertypes() {
						this.g?.updateDirection(b.TypeHierarchyDirection.Supertypes),
							this.d.set(b.TypeHierarchyDirection.Supertypes);
					}
					showSubtypes() {
						this.g?.updateDirection(b.TypeHierarchyDirection.Subtypes),
							this.d.set(b.TypeHierarchyDirection.Subtypes);
					}
					endTypeHierarchy() {
						this.f.clear(), this.c.set(!1), this._editor.focus();
					}
				};
				(S = s = Ne([j(1, n.$6j), j(2, o.$lq), j(3, r.$dtb), j(4, g.$Li)], S)),
					(0, m.$qtb)(S.Id, S, m.EditorContributionInstantiation.Eager),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showTypeHierarchy",
									title: (0, h.localize2)(11036, "Peek Type Hierarchy"),
									menu: {
										id: c.$XX.EditorContextPeek,
										group: "navigation",
										order: 1e3,
										when: n.$Kj.and(l, a.PeekContext.notInPeekEditor),
									},
									precondition: n.$Kj.and(l, a.PeekContext.notInPeekEditor),
									f1: !0,
								});
							}
							async runEditorCommand(T, P) {
								return S.get(P)?.startTypeHierarchyFromEditor();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showSupertypes",
									title: (0, h.localize2)(11037, "Show Supertypes"),
									icon: i.$ak.typeHierarchySuper,
									precondition: n.$Kj.and(
										y,
										$.isEqualTo(b.TypeHierarchyDirection.Subtypes),
									),
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.Shift + C.KeyMod.Alt + C.KeyCode.KeyH,
									},
									menu: {
										id: f.$RYc.TitleMenu,
										when: $.isEqualTo(b.TypeHierarchyDirection.Subtypes),
										order: 1,
									},
								});
							}
							runEditorCommand(I, T) {
								return S.get(T)?.showSupertypes();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showSubtypes",
									title: (0, h.localize2)(11038, "Show Subtypes"),
									icon: i.$ak.typeHierarchySub,
									precondition: n.$Kj.and(
										y,
										$.isEqualTo(b.TypeHierarchyDirection.Supertypes),
									),
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.Shift + C.KeyMod.Alt + C.KeyCode.KeyH,
									},
									menu: {
										id: f.$RYc.TitleMenu,
										when: $.isEqualTo(b.TypeHierarchyDirection.Supertypes),
										order: 1,
									},
								});
							}
							runEditorCommand(I, T) {
								return S.get(T)?.showSubtypes();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.refocusTypeHierarchy",
									title: (0, h.localize2)(11039, "Refocus Type Hierarchy"),
									precondition: y,
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.Shift + C.KeyCode.Enter,
									},
								});
							}
							async runEditorCommand(I, T) {
								return S.get(T)?.startTypeHierarchyFromTypeHierarchy();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.closeTypeHierarchy",
									title: (0, h.localize)(11035, null),
									icon: i.$ak.close,
									precondition: y,
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib + 10,
										primary: C.KeyCode.Escape,
										when: n.$Kj.not("config.editor.stablePeek"),
									},
									menu: { id: f.$RYc.TitleMenu, order: 1e3 },
								});
							}
							runEditorCommand(I, T) {
								return S.get(T)?.endTypeHierarchy();
							}
						},
					);
			},
		)
