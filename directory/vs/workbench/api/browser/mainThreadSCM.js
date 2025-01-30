import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/uri.js';
import '../../../base/common/event.js';
import '../../../base/common/observable.js';
import '../../../base/common/lifecycle.js';
import '../../contrib/scm/common/scm.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/themables.js';
import '../../contrib/scm/common/quickDiff.js';
import '../../../base/common/resourceTree.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../platform/workspace/common/workspace.js';
import '../../../base/common/resources.js';
import '../../services/ai/browser/gitContextService.js';
import '../../../editor/common/languages/language.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/services/resolverService.js';
import '../../../base/common/network.js';
define(
			de[3446],
			he([
				1, 0, 15, 9, 6, 77, 3, 258, 88, 101, 33, 221, 26, 803, 1171, 68, 25, 19,
				359, 61, 67, 42, 23,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*uri*/,
				w /*event*/,
				E /*observable*/,
				C /*lifecycle*/,
				d /*scm*/,
				m /*extHost.protocol*/,
				r /*extHostCustomers*/,
				u /*cancellation*/,
				a /*marshallingIds*/,
				h /*themables*/,
				c /*quickDiff*/,
				n /*resourceTree*/,
				g /*uriIdentity*/,
				p /*workspace*/,
				o /*resources*/,
				f /*gitContextService*/,
				b /*language*/,
				s /*model*/,
				l /*resolverService*/,
				y /*network*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$noc = void 0);
				function $(D) {
					if (D !== void 0) {
						if (i.URI.isUri(D)) return i.URI.revive(D);
						if (h.ThemeIcon.isThemeIcon(D)) return D;
						{
							const M = D;
							return {
								light: i.URI.revive(M.light),
								dark: i.URI.revive(M.dark),
							};
						}
					}
				}
				function v(D) {
					const M = $(D.icon),
						N = D.labels?.map((A) => ({ title: A.title, icon: $(A.icon) }));
					return { ...D, icon: M, labels: N };
				}
				class S extends C.$1c {
					constructor(M, N, A) {
						super(),
							(this.a = N),
							(this.b = A),
							this.D(
								M.registerTextModelContentProvider(
									y.Schemas.vscodeSourceControl,
									this,
								),
							);
					}
					async provideTextContent(M) {
						const N = this.a.getModel(M);
						return (
							N || this.a.createModel("", this.b.createById("scminput"), M)
						);
					}
				}
				class I {
					get resourceTree() {
						if (!this.a) {
							const M = this.provider.rootUri ?? i.URI.file("/");
							this.a = new n.$06(this, M, this.f.extUri);
							for (const N of this.resources) this.a.add(N.sourceUri, N);
						}
						return this.a;
					}
					get hideWhenEmpty() {
						return !!this.features.hideWhenEmpty;
					}
					constructor(M, N, A, R, O, B, U, z) {
						(this.d = M),
							(this.e = N),
							(this.provider = A),
							(this.features = R),
							(this.label = O),
							(this.id = B),
							(this.multiDiffEditorEnableViewChanges = U),
							(this.f = z),
							(this.resources = []),
							(this.b = new w.$re()),
							(this.onDidChange = this.b.event),
							(this.c = new w.$re()),
							(this.onDidChangeResources = this.c.event);
					}
					toJSON() {
						return {
							$mid: a.MarshalledId.ScmResourceGroup,
							sourceControlHandle: this.d,
							groupHandle: this.e,
						};
					}
					splice(M, N, A) {
						this.resources.splice(M, N, ...A), (this.a = void 0), this.c.fire();
					}
					$updateGroup(M) {
						(this.features = { ...this.features, ...M }), this.b.fire();
					}
					$updateGroupLabel(M) {
						(this.label = M), this.b.fire();
					}
				}
				class T {
					constructor(M, N, A, R, O, B, U, z, F, x, H) {
						(this.a = M),
							(this.b = N),
							(this.c = A),
							(this.d = R),
							(this.sourceUri = O),
							(this.resourceGroup = B),
							(this.decorations = U),
							(this.contextValue = z),
							(this.command = F),
							(this.multiDiffEditorOriginalUri = x),
							(this.multiDiffEditorModifiedUri = H);
					}
					open(M) {
						return this.a.$executeResourceCommand(this.b, this.c, this.d, M);
					}
					toJSON() {
						return {
							$mid: a.MarshalledId.ScmResource,
							sourceControlHandle: this.b,
							groupHandle: this.c,
							handle: this.d,
						};
					}
				}
				class P {
					get currentHistoryItemGroup() {
						return this.a;
					}
					constructor(M, N) {
						(this.b = M),
							(this.c = N),
							(this.currentHistoryItemGroupId = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.id,
							)),
							(this.currentHistoryItemGroupName = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.name,
							)),
							(this.currentHistoryItemGroupRevision = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.revision,
							)),
							(this.currentHistoryItemGroupRemoteId = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.remote?.id,
							)),
							(this.currentHistoryItemGroupRemoteRevision = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.remote?.revision,
							)),
							(this.a = (0, E.observableValueOpts)(
								{ owner: this, equalsFn: () => !1 },
								void 0,
							));
					}
					async resolveHistoryItemGroupCommonAncestor(M, N) {
						return this.b.$resolveHistoryItemGroupCommonAncestor(
							this.c,
							M,
							N,
							u.CancellationToken.None,
						);
					}
					async resolveHistoryItemGroupCommonAncestor2(M) {
						return this.b.$resolveHistoryItemGroupCommonAncestor2(
							this.c,
							M,
							u.CancellationToken.None,
						);
					}
					async provideHistoryItems(M, N) {
						return (
							await this.b.$provideHistoryItems(
								this.c,
								M,
								N,
								u.CancellationToken.None,
							)
						)?.map((R) => v(R));
					}
					async provideHistoryItems2(M) {
						return (
							await this.b.$provideHistoryItems2(
								this.c,
								M,
								u.CancellationToken.None,
							)
						)?.map((A) => v(A));
					}
					async provideHistoryItemSummary(M, N) {
						const A = await this.b.$provideHistoryItemSummary(
							this.c,
							M,
							N,
							u.CancellationToken.None,
						);
						return A ? v(A) : void 0;
					}
					async provideHistoryItemChanges(M, N) {
						return (
							await this.b.$provideHistoryItemChanges(
								this.c,
								M,
								N,
								u.CancellationToken.None,
							)
						)?.map((R) => ({
							uri: i.URI.revive(R.uri),
							originalUri: R.originalUri && i.URI.revive(R.originalUri),
							modifiedUri: R.modifiedUri && i.URI.revive(R.modifiedUri),
							renameUri: R.renameUri && i.URI.revive(R.renameUri),
						}));
					}
					$onDidChangeCurrentHistoryItemGroup(M) {
						this.a.set(M, void 0);
					}
				}
				class k {
					static {
						this.a = 0;
					}
					get id() {
						return this.b;
					}
					get handle() {
						return this.s;
					}
					get label() {
						return this.u;
					}
					get rootUri() {
						return this.v;
					}
					get inputBoxTextModel() {
						return this.w;
					}
					get contextValue() {
						return this.t;
					}
					get acceptInputCommand() {
						return this.g.acceptInputCommand;
					}
					get actionButton() {
						return this.g.actionButton ?? void 0;
					}
					get remotes() {
						return this.g.remotes;
					}
					get count() {
						return this.h;
					}
					get statusBarCommands() {
						return this.i;
					}
					get name() {
						return this.j ?? this.u;
					}
					get commitTemplate() {
						return this.m;
					}
					get historyProvider() {
						return this.p;
					}
					constructor(M, N, A, R, O, B, U, z, F) {
						if (
							((this.q = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.v = O),
							(this.w = B),
							(this.x = U),
							(this.y = z),
							(this.z = F),
							(this.b = `scm${k.a++}`),
							(this.groups = []),
							(this.c = new w.$re()),
							(this.onDidChangeResourceGroups = this.c.event),
							(this.d = new w.$re()),
							(this.onDidChangeResources = this.d.event),
							(this.e = new w.$re()),
							(this.onDidChangeHistoryProvider = this.e.event),
							(this.f = Object.create(null)),
							(this.g = {}),
							(this.h = (0, E.observableValue)(this, void 0)),
							(this.i = (0, E.observableValue)(this, void 0)),
							(this.k = new w.$re()),
							(this.onDidChangeRemotes = this.k.event),
							(this.m = (0, E.observableValue)(this, "")),
							(this.n = new w.$re()),
							(this.onDidChange = this.n.event),
							(this.isSCM = !0),
							(this.p = (0, E.observableValue)(this, void 0)),
							O)
						) {
							const x = this.z.getWorkspaceFolder(O);
							x?.uri.toString() === O.toString()
								? (this.j = x.name)
								: O.path !== "/" && (this.j = (0, o.$kh)(O));
						}
					}
					$updateSourceControl(M) {
						if (
							((this.g = { ...this.g, ...M }),
							this.n.fire(),
							typeof M.commitTemplate < "u" &&
								this.m.set(M.commitTemplate, void 0),
							typeof M.count < "u" && this.h.set(M.count, void 0),
							typeof M.statusBarCommands < "u" &&
								this.i.set(M.statusBarCommands, void 0),
							M.hasQuickDiffProvider && !this.o
								? (this.o = this.x.addQuickDiffProvider({
										label: M.quickDiffLabel ?? this.label,
										rootUri: this.rootUri,
										isSCM: this.isSCM,
										getOriginalResource: (N) => this.getOriginalResource(N),
									}))
								: M.hasQuickDiffProvider === !1 &&
									this.o &&
									(this.o.dispose(), (this.o = void 0)),
							typeof M.remotes < "u" && this.k.fire(this.remotes),
							M.hasHistoryProvider && !this.historyProvider.get())
						) {
							const N = new P(this.q, this.handle);
							this.p.set(N, void 0);
						} else
							M.hasHistoryProvider === !1 &&
								this.historyProvider.get() &&
								this.p.set(void 0, void 0);
					}
					$registerGroups(M) {
						const N = M.map(([A, R, O, B, U]) => {
							const z = new I(this.handle, A, this, B, O, R, U, this.y);
							return (this.f[A] = z), z;
						});
						this.groups.splice(this.groups.length, 0, ...N), this.c.fire();
					}
					$updateGroup(M, N) {
						const A = this.f[M];
						A && A.$updateGroup(N);
					}
					$updateGroupLabel(M, N) {
						const A = this.f[M];
						A && A.$updateGroupLabel(N);
					}
					$spliceGroupResourceStates(M) {
						for (const [N, A] of M) {
							const R = this.f[N];
							if (!R) {
								console.warn(
									`SCM group ${N} not found in provider ${this.label}`,
								);
								continue;
							}
							A.reverse();
							for (const [O, B, U] of A) {
								const z = U.map((F) => {
									const [x, H, q, V, G, K, J, W, X, Y] = F,
										[ie, ne] = q,
										ee = h.ThemeIcon.isThemeIcon(ie) ? ie : i.URI.revive(ie),
										_ =
											(h.ThemeIcon.isThemeIcon(ne) ? ne : i.URI.revive(ne)) ||
											ee,
										te = {
											icon: ee,
											iconDark: _,
											tooltip: V,
											strikeThrough: G,
											faded: K,
										};
									return new T(
										this.q,
										this.handle,
										N,
										x,
										i.URI.revive(H),
										R,
										te,
										J || void 0,
										W,
										i.URI.revive(X),
										i.URI.revive(Y),
									);
								});
								R.splice(O, B, z);
							}
						}
						this.d.fire();
					}
					$unregisterGroup(M) {
						const N = this.f[M];
						N &&
							(delete this.f[M],
							this.groups.splice(this.groups.indexOf(N), 1),
							this.c.fire());
					}
					async getOriginalResource(M) {
						if (!this.g.hasQuickDiffProvider) return null;
						const N = await this.q.$provideOriginalResource(
							this.handle,
							M,
							u.CancellationToken.None,
						);
						return N && i.URI.revive(N);
					}
					$onDidChangeHistoryProviderCurrentHistoryItemGroup(M) {
						this.historyProvider.get() &&
							this.p.get()?.$onDidChangeCurrentHistoryItemGroup(M);
					}
					toJSON() {
						return { $mid: a.MarshalledId.ScmProvider, handle: this.handle };
					}
					dispose() {
						this.o?.dispose();
					}
				}
				let L = class {
					constructor(M, N, A, R, O, B, U, z, F, x) {
						(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.i = O),
							(this.j = B),
							(this.k = U),
							(this.m = z),
							(this.n = F),
							(this.o = x),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.e = new C.$Zc()),
							(this.a = M.getProxy(m.$mbb.ExtHostSCM)),
							this.e.add(new S(this.j, this.i, this.h));
					}
					dispose() {
						(0, C.$Vc)(this.b.values()),
							this.b.clear(),
							(0, C.$Vc)(this.d.values()),
							this.d.clear(),
							this.e.dispose();
					}
					async $registerSourceControl(M, N, A, R, O) {
						this.c.set(M, new t.$Lh());
						const B = await this.j.createModelReference(i.URI.revive(O)),
							U = new k(
								this.a,
								M,
								N,
								A,
								R ? i.URI.revive(R) : void 0,
								B.object.textEditorModel,
								this.k,
								this.n,
								this.o,
							),
							z = this.f.registerSCMProvider(U);
						this.b.set(M, z);
						const F = (0, C.$Xc)(
							B,
							w.Event.filter(
								this.g.onDidFocusRepository,
								(x) => x === z,
							)((x) => this.a.$setSelectedSourceControl(M)),
							z.input.onDidChange(({ value: x }) =>
								this.a.$onInputBoxValueChange(M, x),
							),
						);
						this.d.set(M, F),
							this.g.focusedRepository === z &&
								setTimeout(() => this.a.$setSelectedSourceControl(M), 0),
							z.input.value &&
								setTimeout(
									() => this.a.$onInputBoxValueChange(M, z.input.value),
									0,
								),
							this.c.get(M)?.open();
					}
					$registerGitContextProvider() {
						this.m.registerGitContextProvider({
							getGitRoot: this.a.$getGitRoot.bind(this.a),
							getCommits: this.a.$searchAllCommits.bind(this.a),
							getFullCommit: this.a.$getFullCommit.bind(this.a),
							getFullPullRequest: this.a.$getFullPR.bind(this.a),
							getPullRequests: this.a.$searchPRs.bind(this.a),
							getDiffRaw: this.a.$getDiffRaw.bind(this.a),
							getCurrentDiff: this.a.$getCurrentDiff.bind(this.a),
							getBranchDiff: this.a.$getDiffToMain.bind(this.a),
							getLastCommit: this.a.$getLastCommit.bind(this.a),
							getLastCommits: this.a.$getLastCommits.bind(this.a),
							getGitLineBlame: this.a.$getGitLineBlame.bind(this.a),
							getGitFileBlame: this.a.$getGitFileBlame.bind(this.a),
							getGitUpstreamURL: this.a.$getGitUpstreamURL.bind(this.a),
							getFilenamesInCommit: this.a.$getFilenamesInCommit.bind(this.a),
							getCommitRawByCommitHash: this.a.$getCommitRawByCommitHash.bind(
								this.a,
							),
							getFileContentAtRef: this.a.$getFileContentAtRef.bind(this.a),
							createWorktree: this.a.$createWorktree.bind(this.a),
							syncWorktreeToBranch: this.a.$syncWorktreeToBranch.bind(this.a),
							syncBranchToWorktree: this.a.$syncBranchToWorktree.bind(this.a),
							resetWorktreeToDefaultBranch:
								this.a.$resetWorktreeToDefaultBranch.bind(this.a),
							removeWorktree: this.a.$removeWorktree.bind(this.a),
							listAllWorktrees: this.a.$listAllWorktrees.bind(this.a),
							cleanupOldWorktrees: this.a.$cleanupOldWorktrees.bind(this.a),
							getCurrentBranch: this.a.$getCurrentBranch.bind(this.a),
							getDefaultBranch: this.a.$getDefaultBranch.bind(this.a),
							getGitUser: this.a.$getGitUser.bind(this.a),
						});
					}
					$unregisterGitContextProvider() {
						this.m.unregisterGitContextProvider();
					}
					$gitStatusWasRun(M) {
						this.m._onDidRunGitStatus.fire(M);
					}
					async $updateSourceControl(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$updateSourceControl(N);
					}
					async $unregisterSourceControl(M) {
						await this.c.get(M)?.wait();
						const N = this.b.get(M);
						N &&
							(this.d.get(M).dispose(),
							this.d.delete(M),
							N.dispose(),
							this.b.delete(M));
					}
					async $registerGroups(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						if (!R) return;
						const O = R.provider;
						O.$registerGroups(N), O.$spliceGroupResourceStates(A);
					}
					async $updateGroup(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						if (!R) return;
						R.provider.$updateGroup(N, A);
					}
					async $updateGroupLabel(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						if (!R) return;
						R.provider.$updateGroupLabel(N, A);
					}
					async $spliceResourceStates(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$spliceGroupResourceStates(N);
					}
					async $unregisterGroup(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$unregisterGroup(N);
					}
					async $setInputBoxValue(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && A.input.setValue(N, !1);
					}
					async $setInputBoxPlaceholder(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && (A.input.placeholder = N);
					}
					async $setInputBoxEnablement(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && (A.input.enabled = N);
					}
					async $setInputBoxVisibility(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && (A.input.visible = N);
					}
					async $showValidationMessage(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						R && R.input.showValidationMessage(N, A);
					}
					async $setValidationProviderIsEnabled(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A &&
							(N
								? (A.input.validateInput = async (R, O) => {
										const B = await this.a.$validateInput(M, R, O);
										return B && { message: B[0], type: B[1] };
									})
								: (A.input.validateInput = async () => {}));
					}
					async $onDidChangeHistoryProviderCurrentHistoryItemGroup(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$onDidChangeHistoryProviderCurrentHistoryItemGroup(N);
					}
				};
				(e.$noc = L),
					(e.$noc = L =
						Ne(
							[
								(0, r.$tmc)(m.$lbb.MainThreadSCM),
								j(1, d.$c7),
								j(2, d.$d7),
								j(3, b.$nM),
								j(4, s.$QO),
								j(5, l.$MO),
								j(6, c.$8mc),
								j(7, f.$$Db),
								j(8, g.$Vl),
								j(9, p.$Vi),
							],
							L,
						));
			},
		),
		