import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../common/callHierarchy.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './callHierarchyPeek.js';
import '../../../../base/common/event.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/errors.js';
define(
			de[3261],
			he([
				1, 0, 4, 978, 33, 5, 3260, 6, 46, 8, 3, 43, 27, 71, 255, 21, 65, 17, 11,
				14, 79, 29,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*callHierarchy*/,
				w /*cancellation*/,
				E /*instantiation*/,
				C /*callHierarchyPeek*/,
				d /*event*/,
				m /*editorExtensions*/,
				r /*contextkey*/,
				u /*lifecycle*/,
				a /*keybindingsRegistry*/,
				h /*keyCodes*/,
				c /*editorContextKeys*/,
				n /*peekView*/,
				g /*storage*/,
				p /*codeEditorService*/,
				o /*range*/,
				f /*actions*/,
				b /*codicons*/,
				s /*iconRegistry*/,
				l /*errors*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const $ = new r.$5j(
						"editorHasCallHierarchyProvider",
						!1,
						(0, t.localize)(4520, null),
					),
					v = new r.$5j(
						"callHierarchyVisible",
						!1,
						(0, t.localize)(4521, null),
					),
					S = new r.$5j("callHierarchyDirection", void 0, {
						type: "string",
						description: (0, t.localize)(4522, null),
					});
				function I(P) {
					return P === i.CallHierarchyDirection.CallsFrom ||
						P === i.CallHierarchyDirection.CallsTo
						? P
						: i.CallHierarchyDirection.CallsTo;
				}
				let T = class {
					static {
						y = this;
					}
					static {
						this.Id = "callHierarchy";
					}
					static get(k) {
						return k.getContribution(y.Id);
					}
					static {
						this.a = "callHierarchy/defaultDirection";
					}
					constructor(k, L, D, M, N) {
						(this.h = k),
							(this.i = L),
							(this.j = D),
							(this.k = M),
							(this.l = N),
							(this.e = new u.$Zc()),
							(this.f = new u.$Zc()),
							(this.c = v.bindTo(this.i)),
							(this.b = $.bindTo(this.i)),
							(this.d = S.bindTo(this.i)),
							this.e.add(
								d.Event.any(
									k.onDidChangeModel,
									k.onDidChangeModelLanguage,
									i.$O1.onDidChange,
								)(() => {
									this.b.set(k.hasModel() && i.$O1.has(k.getModel()));
								}),
							),
							this.e.add(this.f);
					}
					dispose() {
						this.b.reset(), this.c.reset(), this.e.dispose();
					}
					async startCallHierarchyFromEditor() {
						if ((this.f.clear(), !this.h.hasModel())) return;
						const k = this.h.getModel(),
							L = this.h.getPosition();
						if (!i.$O1.has(k)) return;
						const D = new w.$Ce(),
							M = i.$P1.create(k, L, D.token),
							N = I(
								this.j.get(
									y.a,
									g.StorageScope.PROFILE,
									i.CallHierarchyDirection.CallsTo,
								),
							);
						this.m(L, N, M, D);
					}
					async startCallHierarchyFromCallHierarchy() {
						if (!this.g) return;
						const k = this.g.getModel(),
							L = this.g.getFocused();
						if (!L || !k) return;
						const D = await this.k.openCodeEditor(
							{ resource: L.item.uri },
							this.h,
						);
						if (!D) return;
						const M = k.fork(L.item);
						this.f.clear(),
							y
								.get(D)
								?.m(
									o.$iL.lift(M.root.selectionRange).getStartPosition(),
									this.g.direction,
									Promise.resolve(M),
									new w.$Ce(),
								);
					}
					m(k, L, D, M) {
						this.c.set(!0),
							this.d.set(L),
							d.Event.any(
								this.h.onDidChangeModel,
								this.h.onDidChangeModelLanguage,
							)(this.endCallHierarchy, this, this.f),
							(this.g = this.l.createInstance(C.$JYc, this.h, k, L)),
							this.g.showLoading(),
							this.f.add(
								this.g.onDidClose(() => {
									this.endCallHierarchy(),
										this.j.store(
											y.a,
											this.g.direction,
											g.StorageScope.PROFILE,
											g.StorageTarget.USER,
										);
								}),
							),
							this.f.add({
								dispose() {
									M.dispose(!0);
								},
							}),
							this.f.add(this.g),
							D.then((N) => {
								M.token.isCancellationRequested ||
									(N
										? (this.f.add(N), this.g.showModel(N))
										: this.g.showMessage((0, t.localize)(4523, null)));
							}).catch((N) => {
								if ((0, l.$8)(N)) {
									this.endCallHierarchy();
									return;
								}
								this.g.showMessage((0, t.localize)(4524, null));
							});
					}
					showOutgoingCalls() {
						this.g?.updateDirection(i.CallHierarchyDirection.CallsFrom),
							this.d.set(i.CallHierarchyDirection.CallsFrom);
					}
					showIncomingCalls() {
						this.g?.updateDirection(i.CallHierarchyDirection.CallsTo),
							this.d.set(i.CallHierarchyDirection.CallsTo);
					}
					endCallHierarchy() {
						this.f.clear(), this.c.set(!1), this.h.focus();
					}
				};
				(T = y = Ne([j(1, r.$6j), j(2, g.$lq), j(3, p.$dtb), j(4, E.$Li)], T)),
					(0, m.$qtb)(T.Id, T, m.EditorContributionInstantiation.Eager),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showCallHierarchy",
									title: (0, t.localize2)(4528, "Peek Call Hierarchy"),
									menu: {
										id: f.$XX.EditorContextPeek,
										group: "navigation",
										order: 1e3,
										when: r.$Kj.and(
											$,
											n.PeekContext.notInPeekEditor,
											c.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
									},
									keybinding: {
										when: c.EditorContextKeys.editorTextFocus,
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyMod.Alt + h.KeyCode.KeyH,
									},
									precondition: r.$Kj.and($, n.PeekContext.notInPeekEditor),
									f1: !0,
								});
							}
							async runEditorCommand(k, L) {
								return T.get(L)?.startCallHierarchyFromEditor();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showIncomingCalls",
									title: (0, t.localize2)(4529, "Show Incoming Calls"),
									icon: (0, s.$$O)(
										"callhierarchy-incoming",
										b.$ak.callIncoming,
										(0, t.localize)(4525, null),
									),
									precondition: r.$Kj.and(
										v,
										S.isEqualTo(i.CallHierarchyDirection.CallsFrom),
									),
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyMod.Alt + h.KeyCode.KeyH,
									},
									menu: {
										id: C.$JYc.TitleMenu,
										when: S.isEqualTo(i.CallHierarchyDirection.CallsFrom),
										order: 1,
									},
								});
							}
							runEditorCommand(P, k) {
								return T.get(k)?.showIncomingCalls();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showOutgoingCalls",
									title: (0, t.localize2)(4530, "Show Outgoing Calls"),
									icon: (0, s.$$O)(
										"callhierarchy-outgoing",
										b.$ak.callOutgoing,
										(0, t.localize)(4526, null),
									),
									precondition: r.$Kj.and(
										v,
										S.isEqualTo(i.CallHierarchyDirection.CallsTo),
									),
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyMod.Alt + h.KeyCode.KeyH,
									},
									menu: {
										id: C.$JYc.TitleMenu,
										when: S.isEqualTo(i.CallHierarchyDirection.CallsTo),
										order: 1,
									},
								});
							}
							runEditorCommand(P, k) {
								return T.get(k)?.showOutgoingCalls();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.refocusCallHierarchy",
									title: (0, t.localize2)(4531, "Refocus Call Hierarchy"),
									precondition: v,
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyCode.Enter,
									},
								});
							}
							async runEditorCommand(P, k) {
								return T.get(k)?.startCallHierarchyFromCallHierarchy();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.closeCallHierarchy",
									title: (0, t.localize)(4527, null),
									icon: b.$ak.close,
									precondition: v,
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib + 10,
										primary: h.KeyCode.Escape,
										when: r.$Kj.not("config.editor.stablePeek"),
									},
									menu: { id: C.$JYc.TitleMenu, order: 1e3 },
								});
							}
							runEditorCommand(P, k) {
								return T.get(k)?.endCallHierarchy();
							}
						},
					);
			},
		),
		