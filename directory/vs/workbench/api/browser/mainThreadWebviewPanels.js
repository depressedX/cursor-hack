import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../platform/storage/common/storage.js';
import '../../../platform/telemetry/common/telemetry.js';
import './mainThreadWebviews.js';
import '../common/extHost.protocol.js';
import '../../common/editor/diffEditorInput.js';
import '../../contrib/webview/browser/webview.js';
import '../../contrib/webviewPanel/browser/webviewEditorInput.js';
import '../../contrib/webviewPanel/browser/webviewWorkbenchService.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/editor/common/editorService.js';
import '../../services/extensions/common/extensions.js';
define(
			de[3442],
			he([
				1, 0, 29, 6, 3, 9, 47, 10, 45, 21, 32, 831, 88, 296, 355, 566, 623, 446,
				66, 18, 53,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*errors*/,
				i /*event*/,
				w /*lifecycle*/,
				E /*uri*/,
				C /*uuid*/,
				d /*configuration*/,
				m /*reactiveStorageService*/,
				r /*storage*/,
				u /*telemetry*/,
				a /*mainThreadWebviews*/,
				h /*extHost.protocol*/,
				c /*diffEditorInput*/,
				n /*webview*/,
				g /*webviewEditorInput*/,
				p /*webviewWorkbenchService*/,
				o /*editorGroupColumn*/,
				f /*editorGroupsService*/,
				b /*editorService*/,
				s /*extensions*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Soc = void 0),
					(h = mt(h));
				class l {
					constructor() {
						(this.a = new Map()), (this.b = new Map());
					}
					add(T, P) {
						this.a.set(T, P), this.b.set(P, T);
					}
					getHandleForInput(T) {
						return this.b.get(T);
					}
					getInputForHandle(T) {
						return this.a.get(T);
					}
					delete(T) {
						const P = this.getInputForHandle(T);
						this.a.delete(T), P && this.b.delete(P);
					}
					get size() {
						return this.a.size;
					}
					[Symbol.iterator]() {
						return this.a.values();
					}
				}
				class y {
					constructor(T) {
						this.prefix = T;
					}
					fromExternal(T) {
						return this.prefix + T;
					}
					toExternal(T) {
						return T.startsWith(this.prefix)
							? T.substr(this.prefix.length)
							: void 0;
					}
				}
				let $ = class extends w.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.a = new y("mainThreadWebview-")),
							(this.c = new l()),
							(this.f = this.D(new w.$0c())),
							(this.g = new n.$6Ib("mainThreadWebviewPanel.origins", N)),
							(this.b = T.getProxy(h.$mbb.ExtHostWebviewPanels)),
							this.D(
								i.Event.any(
									D.onDidActiveEditorChange,
									D.onDidVisibleEditorsChange,
									L.onDidAddGroup,
									L.onDidRemoveGroup,
									L.onDidMoveGroup,
								)(() => {
									this.u(this.n.activeEditor);
								}),
							),
							this.D(
								R.onDidChangeActiveWebviewEditor((B) => {
									this.u(B);
								}),
							),
							this.D(
								R.registerResolver({
									canResolve: (B) => {
										const U = this.a.toExternal(B.viewType);
										return (
											typeof U == "string" &&
												M.activateByEvent(`onWebviewPanel:${U}`),
											!1
										);
									},
									resolveWebview: () => {
										throw new Error("not implemented");
									},
								}),
							);
					}
					get webviewInputs() {
						return this.c;
					}
					addWebviewInput(T, P, k) {
						this.c.add(T, P),
							this.h.addWebview(T, P.webview, k),
							P.webview.onDidDispose(() => {
								this.b.$onDidDisposeWebviewPanel(T).finally(() => {
									this.c.delete(T);
								});
							});
					}
					$createWebviewPanel(T, P, k, L, D) {
						const M =
							this.s.nonPersistentStorage
								.shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan;
						if (M !== void 0 && Date.now() < M) return;
						const N = this.t(D),
							A = D ? { preserveFocus: !!D.preserveFocus, group: N } : {},
							R = (0, a.$Mmc)(T),
							O = this.g.getOrigin(k, R.id),
							B = this.r.openWebview(
								{
									origin: O,
									providedViewType: k,
									title: L.title,
									options: S(L.panelOptions),
									contentOptions: (0, a.$Nmc)(L.webviewOptions),
									extension: R,
								},
								this.a.fromExternal(k),
								L.title,
								A,
							);
						this.addWebviewInput(P, B, {
							serializeBuffersForPostMessage: L.serializeBuffersForPostMessage,
						});
						const U = { extensionId: R.id.value, viewType: k };
						this.q.publicLog2("webviews:createWebviewPanel", U);
					}
					$disposeWebview(T) {
						const P = this.w(T);
						P && P.dispose();
					}
					$setTitle(T, P) {
						this.w(T)?.setName(P);
					}
					$setIconPath(T, P) {
						const k = this.w(T);
						k && (k.iconPath = v(P));
					}
					$reveal(T, P) {
						const k = this.w(T);
						if (!k || k.isDisposed()) return;
						const L = this.t(P);
						this.r.revealWebview(k, L, !!P.preserveFocus);
					}
					t(T) {
						if (
							typeof T.viewColumn > "u" ||
							T.viewColumn === b.$JY ||
							(this.m.count === 1 && this.m.activeGroup.isEmpty)
						)
							return b.$JY;
						if (T.viewColumn === b.$KY) return b.$KY;
						if (T.viewColumn >= 0) {
							const P = this.m.getGroups(f.GroupsOrder.GRID_APPEARANCE)[
								T.viewColumn
							];
							if (P) return P.id;
							const k = this.m.findGroup({ location: f.GroupLocation.LAST });
							if (k) {
								const L = (0, f.$HY)(this.j);
								return this.m.addGroup(k, L);
							}
						}
						return b.$JY;
					}
					$registerSerializer(T, P) {
						if (this.f.has(T))
							throw new Error(`Reviver for ${T} already registered`);
						this.f.set(
							T,
							this.r.registerResolver({
								canResolve: (k) => k.viewType === this.a.fromExternal(T),
								resolveWebview: async (k) => {
									const L = this.a.toExternal(k.viewType);
									if (!L) {
										k.webview.setHtml(
											this.h.getWebviewResolvedFailedContent(k.viewType),
										);
										return;
									}
									const D = (0, C.$9g)();
									this.addWebviewInput(D, k, P);
									let M;
									if (k.webview.state)
										try {
											M = JSON.parse(k.webview.state);
										} catch (N) {
											console.error(
												"Could not load webview state",
												N,
												k.webview.state,
											);
										}
									try {
										await this.b.$deserializeWebviewPanel(
											D,
											L,
											{
												title: k.getTitle(),
												state: M,
												panelOptions: k.webview.options,
												webviewOptions: k.webview.contentOptions,
												active: k === this.n.activeEditor,
											},
											(0, o.$b8)(this.m, k.group || 0),
										);
									} catch (N) {
										(0, t.$4)(N),
											k.webview.setHtml(
												this.h.getWebviewResolvedFailedContent(L),
											);
									}
								},
							}),
						);
					}
					$unregisterSerializer(T) {
						if (!this.f.has(T))
							throw new Error(`No reviver for ${T} registered`);
						this.f.deleteAndDispose(T);
					}
					u(T) {
						if (!this.c.size) return;
						const P = {},
							k = (L, D, M) => {
								if (!(M instanceof g.$W4b)) return;
								M.updateGroup(L.id);
								const N = this.c.getHandleForInput(M);
								N &&
									(P[N] = {
										visible: D === L.activeEditor,
										active: M === T,
										position: (0, o.$b8)(this.m, L.id),
									});
							};
						for (const L of this.m.groups)
							for (const D of L.editors)
								D instanceof c.$GVb
									? (k(L, D, D.primary), k(L, D, D.secondary))
									: k(L, D, D);
						Object.keys(P).length &&
							this.b.$onDidChangeWebviewPanelViewStates(P);
					}
					w(T) {
						return this.c.getInputForHandle(T);
					}
				};
				(e.$Soc = $),
					(e.$Soc = $ =
						Ne(
							[
								j(2, d.$gj),
								j(3, f.$EY),
								j(4, b.$IY),
								j(5, s.$q2),
								j(6, r.$lq),
								j(7, u.$km),
								j(8, p.$qnc),
								j(9, m.$0zb),
							],
							$,
						));
				function v(I) {
					if (I)
						return { light: E.URI.revive(I.light), dark: E.URI.revive(I.dark) };
				}
				function S(I) {
					return {
						enableFindWidget: I.enableFindWidget,
						retainContextWhenHidden: I.retainContextWhenHidden,
					};
				}
			},
		),
		