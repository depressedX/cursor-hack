import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/lifecycle.js';
import '../common/files.js';
import '../common/explorerModel.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/resources.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/async.js';
import '../../../services/host/browser/host.js';
import '../../../common/resources.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../platform/telemetry/common/telemetry.js';
define(
			de[3687],
			he([
				1, 0, 6, 25, 3, 220, 710, 22, 19, 10, 121, 18, 68, 199, 155, 84, 33, 15,
				87, 970, 170, 32,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*workspace*/,
				w /*lifecycle*/,
				E /*files*/,
				C /*explorerModel*/,
				d /*files*/,
				m /*resources*/,
				r /*configuration*/,
				u /*clipboardService*/,
				a /*editorService*/,
				h /*uriIdentity*/,
				c /*bulkEditService*/,
				n /*undoRedo*/,
				g /*progress*/,
				p /*cancellation*/,
				o /*async*/,
				f /*host*/,
				b /*resources*/,
				s /*filesConfigurationService*/,
				l /*telemetry*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Mc = e.$3Mc = void 0),
					(e.$3Mc = new n.$JN());
				let $ = class {
					static {
						y = this;
					}
					static {
						this.a = 500;
					}
					constructor(T, P, k, L, D, M, N, A, R, O, B) {
						(this.m = T),
							(this.n = P),
							(this.o = k),
							(this.q = L),
							(this.t = D),
							(this.u = M),
							(this.v = N),
							(this.w = A),
							(this.x = O),
							(this.y = B),
							(this.b = new w.$Zc()),
							(this.k = []),
							(this.d = this.n.getValue("explorer")),
							(this.h = new C.$IWb(this.o, this.u, this.m, this.n, this.x)),
							this.b.add(this.h),
							this.b.add(this.m.onDidRunOperation((U) => this.z(U))),
							(this.j = new o.$Yh(async () => {
								const U = this.k;
								this.k = [];
								const z = [d.FileChangeType.DELETED];
								this.d.sortOrder === E.SortOrder.Modified &&
									z.push(d.FileChangeType.UPDATED);
								let F = !1;
								this.roots.forEach((x) => {
									this.g && !F && (F = v(x, this.g, U, z));
								}),
									U.forEach((x) => {
										if (!F)
											for (const H of x.rawAdded) {
												const q = this.h.findClosest((0, m.$mh)(H));
												if (q && !q.getChild((0, m.$kh)(H))) {
													F = !0;
													break;
												}
											}
									}),
									F && (await this.refresh(!1));
							}, y.a)),
							this.b.add(
								this.m.onDidFilesChange((U) => {
									this.k.push(U),
										!this.c && (this.j.isScheduled() || this.j.schedule());
								}),
							),
							this.b.add(this.n.onDidChangeConfiguration((U) => this.B(U))),
							this.b.add(
								t.Event.any(
									this.m.onDidChangeFileSystemProviderRegistrations,
									this.m.onDidChangeFileSystemProviderCapabilities,
								)(async (U) => {
									let z = !1;
									this.h.roots.forEach((F) => {
										F.resource.scheme === U.scheme &&
											((z = !0), F.forgetChildren());
									}),
										z && this.g && (await this.g.setTreeInput());
								}),
							),
							this.b.add(
								this.h.onDidChangeRoots(() => {
									this.g?.setTreeInput();
								}),
							),
							this.b.add(
								R.onDidChangeFocus((U) => {
									U && this.refresh(!1);
								}),
							),
							(this.l = new b.$0Y(
								(U) => S(P.getValue({ resource: U })),
								(U) => U.affectsConfiguration("explorer.autoRevealExclude"),
								k,
								P,
							)),
							this.b.add(this.l);
					}
					get roots() {
						return this.h.roots;
					}
					get sortOrderConfiguration() {
						return {
							sortOrder: this.d.sortOrder,
							lexicographicOptions: this.d.sortOrderLexicographicOptions,
							reverse: this.d.sortOrderReverse,
						};
					}
					registerView(T) {
						this.g = T;
					}
					getContext(T, P = !1) {
						if (!this.g) return [];
						const k = new Set(this.g.getContext(T));
						return (
							k.forEach((L) => {
								try {
									if (T && !P && this.g?.isItemCollapsed(L) && L.nestedChildren)
										for (const D of L.nestedChildren) k.add(D);
								} catch {
									return;
								}
							}),
							[...k]
						);
					}
					async applyBulkEdit(T, P) {
						const k = new p.$Ce(),
							L = P.progressLocation ?? g.ProgressLocation.Window;
						let D;
						L === g.ProgressLocation.Window
							? (D = {
									location: L,
									title: P.progressLabel,
									cancellable: T.length > 1,
								})
							: (D = {
									location: L,
									title: P.progressLabel,
									cancellable: T.length > 1,
									delay: 500,
								});
						const M = this.w.withProgress(
							D,
							async (N) => {
								await this.v.apply(T, {
									undoRedoSource: e.$3Mc,
									label: P.undoLabel,
									code: "undoredo.explorerOperation",
									progress: N,
									token: k.token,
									confirmBeforeUndo: P.confirmBeforeUndo,
								});
							},
							() => k.cancel(),
						);
						await this.w.withProgress(
							{ location: g.ProgressLocation.Explorer, delay: 500 },
							() => M,
						),
							k.dispose();
					}
					hasViewFocus() {
						return !!this.g && this.g.hasFocus();
					}
					findClosest(T) {
						return this.h.findClosest(T);
					}
					findClosestRoot(T) {
						const P = this.h.roots
							.filter((k) => this.u.extUri.isEqualOrParent(T, k.resource))
							.sort((k, L) => L.resource.path.length - k.resource.path.length);
						return P.length ? P[0] : null;
					}
					async setEditable(T, P) {
						if (!this.g) return;
						P ? (this.c = { stat: T, data: P }) : (this.c = void 0);
						const k = this.isEditable(T);
						try {
							await this.g.setEditable(T, k);
						} catch {
							const L = T.parent,
								D = {
									parentIsDirectory: L?.isDirectory,
									isDirectory: T.isDirectory,
									isReadonly: !!T.isReadonly,
									parentIsReadonly: !!L?.isReadonly,
									parentIsExcluded: L?.isExcluded,
									isExcluded: T.isExcluded,
									parentIsRoot: L?.isRoot,
									isRoot: T.isRoot,
									parentHasNests: L?.hasNests,
									hasNests: T.hasNests,
								};
							this.y.publicLogError2("explorerView.setEditableError", D);
							return;
						}
						!this.c &&
							this.k.length &&
							!this.j.isScheduled() &&
							this.j.schedule();
					}
					async setToCopy(T, P) {
						const k = this.f;
						(this.f = P ? T : void 0),
							await this.q.writeResources(T.map((L) => L.resource)),
							this.g?.itemsCopied(T, P, k);
					}
					isCut(T) {
						return (
							!!this.f &&
							this.f.some((P) => this.u.extUri.isEqual(P.resource, T.resource))
						);
					}
					getEditable() {
						return this.c;
					}
					getEditableData(T) {
						return this.c && this.c.stat === T ? this.c.data : void 0;
					}
					isEditable(T) {
						return !!this.c && (this.c.stat === T || !T);
					}
					async select(T, P) {
						if (!this.g) return;
						const k = P === "force",
							L = this.findClosest(T);
						if (L)
							return this.A(L, k)
								? (await this.g.selectResource(L.resource, P),
									Promise.resolve(void 0))
								: void 0;
						const D = {
								resolveTo: [T],
								resolveMetadata: this.d.sortOrder === E.SortOrder.Modified,
							},
							M = this.findClosestRoot(T);
						if (M)
							try {
								const N = await this.m.resolve(M.resource, D),
									A = C.$JWb.create(
										this.m,
										this.n,
										this.x,
										N,
										void 0,
										D.resolveTo,
									);
								C.$JWb.mergeLocalWithDisk(A, M);
								const R = M.find(T);
								if ((await this.g.refresh(!0, M), R && !this.A(R, k))) return;
								await this.g.selectResource(R ? R.resource : void 0, P);
							} catch (N) {
								(M.error = N), await this.g.refresh(!1, M);
							}
					}
					async refresh(T = !0) {
						if ((this.h.roots.forEach((P) => P.forgetChildren()), this.g)) {
							await this.g.refresh(!0);
							const P = this.t.activeEditor?.resource,
								k = this.n.getValue().explorer.autoReveal;
							T && P && k && this.select(P, k);
						}
					}
					async z(T) {
						const P = this.d.fileNesting.enabled;
						if (
							T.isOperation(d.FileOperation.CREATE) ||
							T.isOperation(d.FileOperation.COPY)
						) {
							const k = T.target,
								L = (0, m.$mh)(k.resource),
								D = this.h.findAll(L);
							D.length &&
								(await Promise.all(
									D.map(async (M) => {
										const N = this.d.sortOrder === "modified";
										if (!M.isDirectoryResolved) {
											const R = await this.m.resolve(M.resource, {
												resolveMetadata: N,
											});
											if (R) {
												const O = C.$JWb.create(
													this.m,
													this.n,
													this.x,
													R,
													M.parent,
												);
												C.$JWb.mergeLocalWithDisk(O, M);
											}
										}
										const A = C.$JWb.create(
											this.m,
											this.n,
											this.x,
											k,
											M.parent,
										);
										M.removeChild(A),
											M.addChild(A),
											await this.g?.refresh(P, M);
									}),
								));
						} else if (T.isOperation(d.FileOperation.MOVE)) {
							const k = T.resource,
								L = T.target,
								D = (0, m.$mh)(k),
								M = (0, m.$mh)(L.resource),
								N = this.h.findAll(k);
							if (
								N.every((R) => !R.nestedParent) &&
								this.u.extUri.isEqual(D, M)
							)
								await Promise.all(
									N.map(async (R) => {
										R.rename(L), await this.g?.refresh(P, R.parent);
									}),
								);
							else {
								const R = this.h.findAll(M);
								R.length &&
									N.length &&
									(await Promise.all(
										N.map(async (O, B) => {
											const U = O.parent,
												z = O.nestedParent;
											O.move(R[B]),
												z && (await this.g?.refresh(!1, z)),
												await this.g?.refresh(!1, U),
												await this.g?.refresh(P, R[B]);
										}),
									));
							}
						} else if (T.isOperation(d.FileOperation.DELETE)) {
							const k = this.h.findAll(T.resource);
							await Promise.all(
								k.map(async (L) => {
									if (L.parent) {
										const D = L.parent;
										D.removeChild(L), this.g?.focusNext();
										const M = L.nestedParent;
										M && (M.removeChild(L), await this.g?.refresh(!1, M)),
											await this.g?.refresh(P, D),
											this.g?.getFocus().length === 0 && this.g?.focusLast();
									}
								}),
							);
						}
					}
					A(T, P) {
						if (T === void 0 || P) return !0;
						if (
							this.l.matches(
								T.resource,
								(D) => !!(T.parent && T.parent.getChild(D)),
							)
						)
							return !1;
						const k = T.root;
						let L = T.parent;
						for (; L !== k; ) {
							if (L === void 0) return !0;
							if (this.l.matches(L.resource)) return !1;
							L = L.parent;
						}
						return !0;
					}
					async B(T) {
						if (!T.affectsConfiguration("explorer")) return;
						let P = !1;
						T.affectsConfiguration("explorer.fileNesting") && (P = !0);
						const k = this.n.getValue(),
							L = k?.explorer?.sortOrder || E.SortOrder.Default;
						this.d.sortOrder !== L && (P = this.d.sortOrder !== void 0);
						const D =
							k?.explorer?.sortOrderLexicographicOptions ||
							E.LexicographicOptions.Default;
						this.d.sortOrderLexicographicOptions !== D &&
							(P = P || this.d.sortOrderLexicographicOptions !== void 0);
						const M = k?.explorer?.sortOrderReverse || !1;
						this.d.sortOrderReverse !== M &&
							(P = P || this.d.sortOrderReverse !== void 0),
							(this.d = k.explorer),
							P && (await this.refresh());
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$4Mc = $),
					(e.$4Mc =
						$ =
						y =
							Ne(
								[
									j(0, d.$ll),
									j(1, r.$gj),
									j(2, i.$Vi),
									j(3, u.$Vxb),
									j(4, a.$IY),
									j(5, h.$Vl),
									j(6, c.$rzb),
									j(7, g.$8N),
									j(8, f.$asb),
									j(9, s.$_Y),
									j(10, l.$km),
								],
								$,
							));
				function v(I, T, P, k) {
					for (const [L, D] of I.children)
						if (
							T.isItemVisible(D) &&
							(P.some((M) => M.contains(D.resource, ...k)) ||
								(D.isDirectory && D.isDirectoryResolved && v(D, T, P, k)))
						)
							return !0;
					return !1;
				}
				function S(I) {
					const T = I && I.explorer && I.explorer.autoRevealExclude;
					return T || {};
				}
			},
		),
		