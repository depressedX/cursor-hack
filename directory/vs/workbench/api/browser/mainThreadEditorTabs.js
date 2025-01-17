import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/log/common/log.js';
import '../common/extHost.protocol.js';
import '../../common/editor.js';
import '../../common/editor/diffEditorInput.js';
import '../../common/editor/editorGroupModel.js';
import '../../common/editor/sideBySideEditorInput.js';
import '../../common/editor/textResourceEditorInput.js';
import '../../contrib/chat/browser/chatEditorInput.js';
import '../../contrib/customEditor/browser/customEditorInput.js';
import '../../contrib/interactive/browser/interactiveEditorInput.js';
import '../../contrib/mergeEditor/browser/mergeEditorInput.js';
import '../../contrib/multiDiffEditor/browser/multiDiffEditorInput.js';
import '../../contrib/notebook/common/notebookEditorInput.js';
import '../../contrib/terminal/browser/terminalEditorInput.js';
import '../../contrib/webviewPanel/browser/webviewEditorInput.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/editor/common/editorService.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3876],
			he([
				1, 0, 6, 3, 19, 9, 10, 34, 88, 44, 296, 1287, 313, 478, 552, 849, 1302,
				711, 712, 360, 833, 566, 446, 66, 18, 101,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vnc = void 0);
				let I = class {
					constructor(P, k, L, D, M) {
						(this.g = k),
							(this.h = L),
							(this.i = D),
							(this.a = new i.$Zc()),
							(this.c = []),
							(this.d = new Map()),
							(this.e = new Map()),
							(this.f = new i.$0c()),
							(this.b = P.getProxy(m.$mbb.ExtHostEditorTabs)),
							this.a.add(
								M.onDidEditorsChange((N) => {
									try {
										this.w(N);
									} catch {
										this.i.error("Failed to update model, rebuilding"),
											this.v();
									}
								}),
							),
							this.a.add(this.f),
							this.a.add(this.g.onDidAddGroup(() => this.v())),
							this.a.add(this.g.onDidRemoveGroup(() => this.v())),
							this.g.whenReady.then(() => this.v());
					}
					dispose() {
						this.d.clear(), this.e.clear(), this.a.dispose();
					}
					j(P, k, L) {
						const D = k.editorId;
						return {
							id: this.l(k, P.id),
							label: k.getName(),
							editorId: D,
							input: this.k(k),
							isPinned: P.isSticky(L),
							isPreview: !P.isPinned(L),
							isActive: P.isActive(k),
							isDirty: k.isDirty(),
						};
					}
					k(P) {
						if (P instanceof o.$Enc)
							return {
								kind: m.TabInputKind.TextMergeInput,
								base: P.base,
								input1: P.input1.uri,
								input2: P.input2.uri,
								result: P.resource,
							};
						if (P instanceof c.$R1b)
							return { kind: m.TabInputKind.TextInput, uri: P.resource };
						if (P instanceof h.$iY && !(P instanceof u.$GVb)) {
							const k = P.primary.resource,
								L = P.secondary.resource;
							return P.primary instanceof c.$R1b &&
								P.secondary instanceof c.$R1b &&
								(0, w.$gh)(k, L) &&
								k &&
								L
								? { kind: m.TabInputKind.TextInput, uri: k }
								: { kind: m.TabInputKind.UnknownInput };
						}
						if (P instanceof b.$TIb)
							return {
								kind: m.TabInputKind.NotebookInput,
								notebookType: P.viewType,
								uri: P.resource,
							};
						if (P instanceof g.$tnc)
							return {
								kind: m.TabInputKind.CustomEditorInput,
								viewType: P.viewType,
								uri: P.resource,
							};
						if (P instanceof l.$W4b)
							return {
								kind: m.TabInputKind.WebviewEditorInput,
								viewType: P.viewType,
							};
						if (P instanceof s.$Unc)
							return { kind: m.TabInputKind.TerminalEditorInput };
						if (P instanceof u.$GVb) {
							if (P.modified instanceof c.$R1b && P.original instanceof c.$R1b)
								return {
									kind: m.TabInputKind.TextDiffInput,
									modified: P.modified.resource,
									original: P.original.resource,
								};
							if (P.modified instanceof b.$TIb && P.original instanceof b.$TIb)
								return {
									kind: m.TabInputKind.NotebookDiffInput,
									notebookType: P.original.viewType,
									modified: P.modified.resource,
									original: P.original.resource,
								};
						}
						if (P instanceof p.$ync)
							return {
								kind: m.TabInputKind.InteractiveEditorInput,
								uri: P.resource,
								inputBoxUri: P.inputResource,
							};
						if (P instanceof n.$cMb)
							return { kind: m.TabInputKind.ChatEditorInput };
						if (P instanceof f.$Lnc) {
							const k = [];
							for (const L of P?.resources.get() ?? [])
								L.originalUri &&
									L.modifiedUri &&
									k.push({
										kind: m.TabInputKind.TextDiffInput,
										original: L.originalUri,
										modified: L.modifiedUri,
									});
							return {
								kind: m.TabInputKind.MultiDiffEditorInput,
								diffEditors: k,
							};
						}
						return { kind: m.TabInputKind.UnknownInput };
					}
					l(P, k) {
						let L;
						const D = r.$A1.getCanonicalUri(P, {
							supportSideBySide: r.SideBySideEditor.BOTH,
						});
						return (
							D instanceof E.URI
								? (L = D.toString())
								: (L = `${D?.primary?.toString()}-${D?.secondary?.toString()}`),
							`${k}~${P.editorId}-${P.typeId}-${L} `
						);
					}
					m() {
						const P = this.g.activeGroup.id,
							k = this.d.get(P);
						k && ((k.isActive = !0), this.b.$acceptTabGroupUpdate(k));
					}
					n(P, k, L) {
						const D = this.l(k, P),
							M = this.e.get(D);
						M
							? ((M.tab.label = k.getName()),
								this.b.$acceptTabOperation({
									groupId: P,
									index: L,
									tabDto: M.tab,
									kind: m.TabModelOperationKind.TAB_UPDATE,
								}))
							: (this.i.error("Invalid model for label change, rebuilding"),
								this.v());
					}
					o(P, k, L) {
						const D = this.g.getGroup(P),
							M = this.d.get(P) !== void 0;
						if (!D || !M) {
							this.v();
							return;
						}
						const N = this.d.get(P)?.tabs;
						if (!N) return;
						const A = this.j(D, k, L);
						N.splice(L, 0, A);
						const R = this.l(k, P);
						this.e.set(R, { group: D, editorInput: k, tab: A }),
							k instanceof f.$Lnc &&
								this.f.set(
									k,
									t.Event.fromObservableLight(k.resources)(() => {
										const O = this.e.get(R);
										O &&
											((O.tab = this.j(D, k, L)),
											this.b.$acceptTabOperation({
												groupId: P,
												index: L,
												tabDto: O.tab,
												kind: m.TabModelOperationKind.TAB_UPDATE,
											}));
									}),
								),
							this.b.$acceptTabOperation({
								groupId: P,
								index: L,
								tabDto: A,
								kind: m.TabModelOperationKind.TAB_OPEN,
							});
					}
					p(P, k) {
						const L = this.g.getGroup(P),
							D = this.d.get(P)?.tabs;
						if (!L || !D) {
							this.v();
							return;
						}
						const M = D.splice(k, 1);
						M.length !== 0 &&
							(this.e.delete(M[0]?.id ?? ""),
							M[0]?.input instanceof f.$Lnc &&
								this.f.deleteAndDispose(M[0]?.input),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: M[0],
								kind: m.TabModelOperationKind.TAB_CLOSE,
							}));
					}
					q(P, k) {
						const L = this.d.get(P)?.tabs;
						if (!L) return;
						const D = L[k];
						(D.isActive = !0),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: D,
								kind: m.TabModelOperationKind.TAB_UPDATE,
							});
					}
					r(P, k, L) {
						const D = this.l(L, P),
							M = this.e.get(D);
						if (!M) {
							this.i.error("Invalid model for dirty change, rebuilding"),
								this.v();
							return;
						}
						(M.tab.isDirty = L.isDirty()),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: M.tab,
								kind: m.TabModelOperationKind.TAB_UPDATE,
							});
					}
					s(P, k, L) {
						const D = this.l(L, P),
							M = this.e.get(D),
							N = M?.group,
							A = M?.tab;
						if (!N || !A) {
							this.i.error("Invalid model for sticky change, rebuilding"),
								this.v();
							return;
						}
						(A.isPinned = N.isSticky(k)),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: A,
								kind: m.TabModelOperationKind.TAB_UPDATE,
							});
					}
					t(P, k, L) {
						const D = this.l(L, P),
							M = this.e.get(D),
							N = M?.group,
							A = M?.tab;
						if (!N || !A) {
							this.i.error("Invalid model for sticky change, rebuilding"),
								this.v();
							return;
						}
						(A.isPreview = !N.isPinned(k)),
							this.b.$acceptTabOperation({
								kind: m.TabModelOperationKind.TAB_UPDATE,
								groupId: P,
								tabDto: A,
								index: k,
							});
					}
					u(P, k, L, D) {
						const M = this.d.get(P)?.tabs;
						if (!M) {
							this.i.error("Invalid model for move change, rebuilding"),
								this.v();
							return;
						}
						const N = M.splice(L, 1);
						N.length !== 0 &&
							(M.splice(k, 0, N[0]),
							this.b.$acceptTabOperation({
								kind: m.TabModelOperationKind.TAB_MOVE,
								groupId: P,
								tabDto: N[0],
								index: k,
								oldIndex: L,
							}));
					}
					v() {
						if (this.g.groups.length === 0) return;
						(this.c = []), this.d.clear(), this.e.clear();
						let P = [];
						for (const k of this.g.groups) {
							const L = {
								groupId: k.id,
								isActive: k.id === this.g.activeGroup.id,
								viewColumn: (0, y.$b8)(this.g, k),
								tabs: [],
							};
							k.editors.forEach((D, M) => {
								const N = this.j(k, D, M);
								P.push(N),
									this.e.set(this.l(D, k.id), {
										group: k,
										tab: N,
										editorInput: D,
									});
							}),
								(L.tabs = P),
								this.c.push(L),
								this.d.set(k.id, L),
								(P = []);
						}
						this.b.$acceptEditorTabModel(this.c);
					}
					w(P) {
						const k = P.event,
							L = P.groupId;
						switch (k.kind) {
							case r.GroupModelChangeKind.GROUP_ACTIVE:
								if (L === this.g.activeGroup.id) {
									this.m();
									break;
								} else return;
							case r.GroupModelChangeKind.EDITOR_LABEL:
								if (k.editor !== void 0 && k.editorIndex !== void 0) {
									this.n(L, k.editor, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_OPEN:
								if (k.editor !== void 0 && k.editorIndex !== void 0) {
									this.o(L, k.editor, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_CLOSE:
								if (k.editorIndex !== void 0) {
									this.p(L, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_ACTIVE:
								if (k.editorIndex !== void 0) {
									this.q(L, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_DIRTY:
								if (k.editorIndex !== void 0 && k.editor !== void 0) {
									this.r(L, k.editorIndex, k.editor);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_STICKY:
								if (k.editorIndex !== void 0 && k.editor !== void 0) {
									this.s(L, k.editorIndex, k.editor);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_PIN:
								if (k.editorIndex !== void 0 && k.editor !== void 0) {
									this.t(L, k.editorIndex, k.editor);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_TRANSIENT:
								break;
							case r.GroupModelChangeKind.EDITOR_MOVE:
								if (
									(0, a.$oY)(k) &&
									k.editor &&
									k.editorIndex !== void 0 &&
									k.oldEditorIndex !== void 0
								) {
									this.u(L, k.editorIndex, k.oldEditorIndex, k.editor);
									break;
								}
							default:
								this.v();
						}
					}
					$moveTab(P, k, L, D) {
						const M = (0, y.$a8)(this.g, this.h, L),
							N = this.e.get(P);
						if (!N?.tab)
							throw new Error(
								`Attempted to close tab with id ${P} which does not exist`,
							);
						let R;
						const O = this.g.getGroup(N.group.id);
						if (!O) return;
						if (this.d.get(M) === void 0) {
							let U = $.GroupDirection.RIGHT;
							L === v.$KY && (U = (0, $.$HY)(this.h)),
								(R = this.g.addGroup(
									this.g.groups[this.g.groups.length - 1],
									U,
								));
						} else R = this.g.getGroup(M);
						if (!R) return;
						(k < 0 || k > R.editors.length) && (k = R.editors.length);
						const B = N?.editorInput;
						B && O.moveEditor(B, R, { index: k, preserveFocus: D });
					}
					async $closeTab(P, k) {
						const L = new Map();
						for (const M of P) {
							const N = this.e.get(M),
								A = N?.tab,
								R = N?.group,
								O = N?.editorInput;
							if (!R || !A || !N || !O) continue;
							const B = L.get(R);
							B ? B.push(O) : L.set(R, [O]);
						}
						const D = [];
						for (const [M, N] of L)
							D.push(await M.closeEditors(N, { preserveFocus: k }));
						return D.every((M) => M);
					}
					async $closeGroup(P, k) {
						const L = [];
						for (const D of P) {
							const M = this.g.getGroup(D);
							M &&
								(L.push(await M.closeAllEditors()),
								M.count === 0 &&
									this.g.getGroup(M.id) &&
									this.g.removeGroup(M));
						}
						return L.every((D) => D);
					}
				};
				(e.$Vnc = I),
					(e.$Vnc = I =
						Ne(
							[
								(0, S.$tmc)(m.$lbb.MainThreadEditorTabs),
								j(1, $.$EY),
								j(2, C.$gj),
								j(3, d.$ik),
								j(4, v.$IY),
							],
							I,
						));
			},
		),
		