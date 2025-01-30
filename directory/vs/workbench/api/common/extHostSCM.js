import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../base/common/event.js';
import '../../../base/common/decorators.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/async.js';
import './extHost.protocol.js';
import '../../../base/common/arrays.js';
import '../../../base/common/comparers.js';
import '../../../platform/log/common/log.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/themables.js';
import './extHostTypeConverters.js';
import '../../services/extensions/common/extensions.js';
import '../../../base/common/network.js';
import '../../../base/common/platform.js';
define(
			Pe[581],
			Ne([1, 0, 2, 4, 89, 3, 9, 6, 20, 269, 14, 25, 55, 72, 17, 29, 16, 13]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $) {
				"use strict";
				var T;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$1id = t.$Zid = void 0);
				function a(D) {
					return D instanceof e.URI;
				}
				function u(D, M) {
					return D.scheme === h.Schemas.file &&
						M.scheme === h.Schemas.file &&
						$.$n
						? D.toString() === M.toString()
						: D.toString().toLowerCase() === M.toString().toLowerCase();
				}
				function s(D) {
					if (D)
						return typeof D.iconPath == "string"
							? e.URI.file(D.iconPath)
							: e.URI.isUri(D.iconPath) || k.ThemeIcon.isThemeIcon(D.iconPath)
								? D.iconPath
								: void 0;
				}
				function f(D) {
					if (D) {
						if (e.URI.isUri(D)) return D;
						if (k.ThemeIcon.isThemeIcon(D)) return D;
						{
							const M = D;
							return { light: M.light, dark: M.dark };
						}
					} else return;
				}
				function o(D) {
					const M = f(D.icon),
						z = D.labels?.map((Q) => ({ title: Q.title, icon: f(Q.icon) }));
					return { ...D, icon: M, labels: z };
				}
				function w(D, M) {
					if (!D.iconPath && !M.iconPath) return 0;
					if (D.iconPath) {
						if (!M.iconPath) return 1;
					} else return -1;
					const z =
							typeof D.iconPath == "string"
								? D.iconPath
								: e.URI.isUri(D.iconPath)
									? D.iconPath.fsPath
									: D.iconPath.id,
						Q =
							typeof M.iconPath == "string"
								? M.iconPath
								: e.URI.isUri(M.iconPath)
									? M.iconPath.fsPath
									: M.iconPath.id;
					return (0, n.$as)(z, Q);
				}
				function m(D, M) {
					let z = 0;
					if (D.strikeThrough !== M.strikeThrough)
						return D.strikeThrough ? 1 : -1;
					if (D.faded !== M.faded) return D.faded ? 1 : -1;
					if (D.tooltip !== M.tooltip)
						return (D.tooltip || "").localeCompare(M.tooltip || "");
					if (((z = w(D, M)), z !== 0)) return z;
					if (D.light && M.light) z = w(D.light, M.light);
					else {
						if (D.light) return 1;
						if (M.light) return -1;
					}
					if (z !== 0) return z;
					if (D.dark && M.dark) z = w(D.dark, M.dark);
					else {
						if (D.dark) return 1;
						if (M.dark) return -1;
					}
					return z;
				}
				function E(D, M) {
					if (D.command !== M.command) return D.command < M.command ? -1 : 1;
					if (D.title !== M.title) return D.title < M.title ? -1 : 1;
					if (D.tooltip !== M.tooltip) {
						if (D.tooltip !== void 0 && M.tooltip !== void 0)
							return D.tooltip < M.tooltip ? -1 : 1;
						if (D.tooltip !== void 0) return 1;
						if (M.tooltip !== void 0) return -1;
					}
					if (D.arguments === M.arguments) return 0;
					if (D.arguments)
						if (M.arguments) {
							if (D.arguments.length !== M.arguments.length)
								return D.arguments.length - M.arguments.length;
						} else return 1;
					else return -1;
					for (let z = 0; z < D.arguments.length; z++) {
						const Q = D.arguments[z],
							H = M.arguments[z];
						if (Q !== H && !(a(Q) && a(H) && u(Q, H))) return Q < H ? -1 : 1;
					}
					return 0;
				}
				function R(D, M) {
					let z = (0, n.$as)(D.resourceUri.fsPath, M.resourceUri.fsPath, !0);
					if (z !== 0) return z;
					if (D.command && M.command) z = E(D.command, M.command);
					else {
						if (D.command) return 1;
						if (M.command) return -1;
					}
					if (z !== 0) return z;
					if (D.decorations && M.decorations)
						z = m(D.decorations, M.decorations);
					else {
						if (D.decorations) return 1;
						if (M.decorations) return -1;
					}
					if (
						D.multiFileDiffEditorModifiedUri &&
						M.multiFileDiffEditorModifiedUri
					)
						z = (0, n.$as)(
							D.multiFileDiffEditorModifiedUri.fsPath,
							M.multiFileDiffEditorModifiedUri.fsPath,
							!0,
						);
					else {
						if (D.multiFileDiffEditorModifiedUri) return 1;
						if (M.multiFileDiffEditorModifiedUri) return -1;
					}
					if (D.multiDiffEditorOriginalUri && M.multiDiffEditorOriginalUri)
						z = (0, n.$as)(
							D.multiDiffEditorOriginalUri.fsPath,
							M.multiDiffEditorOriginalUri.fsPath,
							!0,
						);
					else {
						if (D.multiDiffEditorOriginalUri) return 1;
						if (M.multiDiffEditorOriginalUri) return -1;
					}
					return z;
				}
				function C(D, M) {
					for (let z = 0; z < D.length; z++) if (D[z] !== M[z]) return !1;
					return !0;
				}
				function O(D, M) {
					return (
						D.command === M.command &&
						D.title === M.title &&
						D.tooltip === M.tooltip &&
						(D.arguments && M.arguments
							? C(D.arguments, M.arguments)
							: D.arguments === M.arguments)
					);
				}
				function A(D, M) {
					return (0, l.$yb)(D, M, O);
				}
				class J {
					#e;
					#t;
					get value() {
						return this.d;
					}
					set value(M) {
						(M = M ?? ""), this.#e.$setInputBoxValue(this.m, M), this.o(M);
					}
					get onDidChange() {
						return this.e.event;
					}
					get placeholder() {
						return this.f;
					}
					set placeholder(M) {
						this.#e.$setInputBoxPlaceholder(this.m, M), (this.f = M);
					}
					get validateInput() {
						return (0, c.$u2)(this.k, "scmValidation"), this.g;
					}
					set validateInput(M) {
						if (
							((0, c.$u2)(this.k, "scmValidation"), M && typeof M != "function")
						)
							throw new Error(
								`[${this.k.identifier.value}]: Invalid SCM input box validation function`,
							);
						(this.g = M), this.#e.$setValidationProviderIsEnabled(this.m, !!M);
					}
					get enabled() {
						return this.h;
					}
					set enabled(M) {
						(M = !!M),
							this.h !== M &&
								((this.h = M), this.#e.$setInputBoxEnablement(this.m, M));
					}
					get visible() {
						return this.j;
					}
					set visible(M) {
						(M = !!M),
							this.j !== M &&
								((this.j = M), this.#e.$setInputBoxVisibility(this.m, M));
					}
					get document() {
						return (
							(0, c.$u2)(this.k, "scmTextDocument"), this.#t.getDocument(this.n)
						);
					}
					constructor(M, z, Q, H, B) {
						(this.k = M),
							(this.m = H),
							(this.n = B),
							(this.d = ""),
							(this.e = new r.$re()),
							(this.f = ""),
							(this.h = !0),
							(this.j = !0),
							(this.#t = z),
							(this.#e = Q);
					}
					showValidationMessage(M, z) {
						(0, c.$u2)(this.k, "scmValidation"),
							this.#e.$showValidationMessage(this.m, M, z);
					}
					$onInputBoxValueChange(M) {
						this.o(M);
					}
					o(M) {
						(this.d = M), this.e.fire(M);
					}
				}
				t.$Zid = J;
				class L {
					static {
						this.d = 0;
					}
					get disposed() {
						return this.m;
					}
					get id() {
						return this.v;
					}
					get label() {
						return this.w;
					}
					set label(M) {
						(this.w = M), this.s.$updateGroupLabel(this.u, this.handle, M);
					}
					get hideWhenEmpty() {
						return this.q;
					}
					set hideWhenEmpty(M) {
						(this.q = M),
							this.s.$updateGroup(this.u, this.handle, this.features);
					}
					get features() {
						return { hideWhenEmpty: this.hideWhenEmpty };
					}
					get resourceStates() {
						return [...this.f];
					}
					set resourceStates(M) {
						(this.f = [...M]), this.k.fire();
					}
					constructor(M, z, Q, H, B, U, Z) {
						(this.s = M),
							(this.t = z),
							(this.u = Q),
							(this.v = H),
							(this.w = B),
							(this.multiDiffEditorEnableViewChanges = U),
							(this.x = Z),
							(this.e = 0),
							(this.f = []),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.k = new r.$re()),
							(this.onDidUpdateResourceStates = this.k.event),
							(this.m = !1),
							(this.n = new r.$re()),
							(this.onDidDispose = this.n.event),
							(this.o = []),
							(this.p = []),
							(this.q = void 0),
							(this.handle = L.d++);
					}
					getResourceState(M) {
						return this.g.get(M);
					}
					$executeResourceCommand(M, z) {
						const Q = this.h.get(M);
						return Q
							? (0, P.$Eh)(() =>
									this.t.executeCommand(Q.command, ...(Q.arguments || []), z),
								)
							: Promise.resolve(void 0);
					}
					_takeResourceStateSnapshot() {
						const M = [...this.f].sort(R),
							Q = (0, l.$Hb)(this.p, M, R).map((U) => {
								const Z = U.toInsert.map((W) => {
									const G = this.e++;
									this.g.set(G, W);
									const fe = W.resourceUri;
									let ae;
									if (W.command)
										if (
											W.command.command === "vscode.open" ||
											W.command.command === "vscode.diff" ||
											W.command.command === "vscode.changes"
										) {
											const je = new N.$Zc();
											(ae = this.t.converter.toInternal(W.command, je)),
												this.j.set(G, je);
										} else this.h.set(G, W.command);
									const Se = (0, c.$t2)(this.x, "scmMultiDiffEditor"),
										he = Se ? W.multiDiffEditorOriginalUri : void 0,
										_ = Se ? W.multiFileDiffEditorModifiedUri : void 0,
										oe = s(W.decorations),
										ke = (W.decorations && s(W.decorations.light)) || oe,
										ge = (W.decorations && s(W.decorations.dark)) || oe,
										ee = [ke, ge],
										me = (W.decorations && W.decorations.tooltip) || "",
										ne = W.decorations && !!W.decorations.strikeThrough,
										de = W.decorations && !!W.decorations.faded,
										Le = W.contextValue || "";
									return {
										rawResource: [G, fe, ee, me, ne, de, Le, ae, he, _],
										handle: G,
									};
								});
								return {
									start: U.start,
									deleteCount: U.deleteCount,
									toInsert: Z,
								};
							}),
							H = Q.map(({ start: U, deleteCount: Z, toInsert: W }) => [
								U,
								Z,
								W.map((G) => G.rawResource),
							]),
							B = Q.reverse();
						for (const { start: U, deleteCount: Z, toInsert: W } of B) {
							const G = W.map((ae) => ae.handle),
								fe = this.o.splice(U, Z, ...G);
							for (const ae of fe)
								this.g.delete(ae),
									this.h.delete(ae),
									this.j.get(ae)?.dispose(),
									this.j.delete(ae);
						}
						return (this.p = M), H;
					}
					dispose() {
						(this.m = !0), this.n.fire();
					}
				}
				class b {
					static {
						this.d = 0;
					}
					#e;
					get id() {
						return this.B;
					}
					get label() {
						return this.C;
					}
					get rootUri() {
						return this.D;
					}
					get inputBox() {
						return this.f;
					}
					get count() {
						return this.g;
					}
					set count(M) {
						this.g !== M &&
							((this.g = M),
							this.#e.$updateSourceControl(this.y, { count: M }));
					}
					get remotes() {
						return this.h;
					}
					set remotes(M) {
						(this.h = M), this.#e.$updateSourceControl(this.y, { remotes: M });
					}
					get quickDiffProvider() {
						return this.j;
					}
					set quickDiffProvider(M) {
						this.j = M;
						let z;
						(0, c.$t2)(this.z, "quickDiffProvider") && (z = M?.label),
							this.#e.$updateSourceControl(this.y, {
								hasQuickDiffProvider: !!M,
								quickDiffLabel: z,
							});
					}
					get historyProvider() {
						return (0, c.$u2)(this.z, "scmHistoryProvider"), this.k;
					}
					set historyProvider(M) {
						(0, c.$u2)(this.z, "scmHistoryProvider"),
							(this.k = M),
							(this.m.value = new N.$Zc()),
							this.#e.$updateSourceControl(this.y, { hasHistoryProvider: !!M }),
							M &&
								this.m.value.add(
									M.onDidChangeCurrentHistoryItemGroup(() => {
										(this.n = M?.currentHistoryItemGroup),
											this.#e.$onDidChangeHistoryProviderCurrentHistoryItemGroup(
												this.y,
												this.n,
											);
									}),
								);
					}
					get commitTemplate() {
						return this.o;
					}
					set commitTemplate(M) {
						M !== this.o &&
							((this.o = M),
							this.#e.$updateSourceControl(this.y, { commitTemplate: M }));
					}
					get acceptInputCommand() {
						return this.q;
					}
					set acceptInputCommand(M) {
						(this.p.value = new N.$Zc()), (this.q = M);
						const z = this.A.converter.toInternal(M, this.p.value);
						this.#e.$updateSourceControl(this.y, { acceptInputCommand: z });
					}
					get actionButton() {
						return (0, c.$u2)(this.z, "scmActionButton"), this.t;
					}
					set actionButton(M) {
						(0, c.$u2)(this.z, "scmActionButton"),
							(this.s.value = new N.$Zc()),
							(this.t = M);
						const z =
							M !== void 0
								? {
										command: this.A.converter.toInternal(
											M.command,
											this.s.value,
										),
										secondaryCommands: M.secondaryCommands?.map((Q) =>
											Q.map((H) =>
												this.A.converter.toInternal(H, this.s.value),
											),
										),
										description: M.description,
										enabled: M.enabled,
									}
								: void 0;
						this.#e.$updateSourceControl(this.y, { actionButton: z ?? null });
					}
					get statusBarCommands() {
						return this.v;
					}
					set statusBarCommands(M) {
						if (this.v && M && A(this.v, M)) return;
						(this.u.value = new N.$Zc()), (this.v = M);
						const z = (M || []).map((Q) =>
							this.A.converter.toInternal(Q, this.u.value),
						);
						this.#e.$updateSourceControl(this.y, { statusBarCommands: z });
					}
					get selected() {
						return this.w;
					}
					constructor(M, z, Q, H, B, U, Z) {
						(this.z = M),
							(this.A = H),
							(this.B = B),
							(this.C = U),
							(this.D = Z),
							(this.e = new Map()),
							(this.g = void 0),
							(this.h = void 0),
							(this.j = void 0),
							(this.m = new N.$2c()),
							(this.o = void 0),
							(this.p = new N.$2c()),
							(this.q = void 0),
							(this.s = new N.$2c()),
							(this.u = new N.$2c()),
							(this.v = void 0),
							(this.w = !1),
							(this.x = new r.$re()),
							(this.onDidChangeSelection = this.x.event),
							(this.y = b.d++),
							(this.E = new Map()),
							(this.F = new Set()),
							(this.#e = Q);
						const W = e.URI.from({
							scheme: h.Schemas.vscodeSourceControl,
							path: `${B}/scm${this.y}/input`,
							query: Z ? `rootUri=${encodeURIComponent(Z.toString())}` : void 0,
						});
						(this.f = new J(M, z, this.#e, this.y, W)),
							this.#e.$registerSourceControl(this.y, B, U, Z, W);
					}
					createResourceGroup(M, z, Q) {
						const H =
								(0, c.$t2)(this.z, "scmMultiDiffEditor") &&
								Q?.multiDiffEditorEnableViewChanges === !0,
							B = new L(this.#e, this.A, this.y, M, z, H, this.z),
							U = r.Event.once(B.onDidDispose)(() => this.E.delete(B));
						return this.E.set(B, U), this.eventuallyAddResourceGroups(), B;
					}
					eventuallyAddResourceGroups() {
						const M = [],
							z = [];
						for (const [Q, H] of this.E) {
							H.dispose();
							const B = Q.onDidUpdateResourceStates(() => {
								this.F.add(Q), this.eventuallyUpdateResourceStates();
							});
							r.Event.once(Q.onDidDispose)(() => {
								this.F.delete(Q),
									B.dispose(),
									this.e.delete(Q.handle),
									this.#e.$unregisterGroup(this.y, Q.handle);
							}),
								M.push([
									Q.handle,
									Q.id,
									Q.label,
									Q.features,
									Q.multiDiffEditorEnableViewChanges,
								]);
							const U = Q._takeResourceStateSnapshot();
							U.length > 0 && z.push([Q.handle, U]), this.e.set(Q.handle, Q);
						}
						this.#e.$registerGroups(this.y, M, z), this.E.clear();
					}
					eventuallyUpdateResourceStates() {
						const M = [];
						this.F.forEach((z) => {
							const Q = z._takeResourceStateSnapshot();
							Q.length !== 0 && M.push([z.handle, Q]);
						}),
							M.length > 0 && this.#e.$spliceResourceStates(this.y, M),
							this.F.clear();
					}
					getResourceGroup(M) {
						return this.e.get(M);
					}
					setSelectionState(M) {
						(this.w = M), this.x.fire(M);
					}
					dispose() {
						this.p.dispose(),
							this.s.dispose(),
							this.u.dispose(),
							this.e.forEach((M) => M.dispose()),
							this.#e.$unregisterSourceControl(this.y);
					}
				}
				wt([(0, S.$fi)(100)], b.prototype, "eventuallyAddResourceGroups", null),
					wt(
						[(0, S.$fi)(100)],
						b.prototype,
						"eventuallyUpdateResourceStates",
						null,
					);
				let F = class {
					static {
						T = this;
					}
					static {
						this.d = 0;
					}
					get onDidChangeActiveProvider() {
						return this.k.event;
					}
					constructor(M, z, Q, H) {
						(this.n = z),
							(this.o = Q),
							(this.p = H),
							(this.g = new Map()),
							(this.h = new y.$In()),
							(this.j = void 0),
							(this.k = new r.$re()),
							(this.e = M.getProxy(I.$lbb.MainThreadSCM)),
							(this.f = M.getProxy(I.$lbb.MainThreadTelemetry)),
							z.registerArgumentProcessor({
								processArgument: (B) => {
									if (B && B.$mid === d.MarshalledId.ScmResource) {
										const U = this.g.get(B.sourceControlHandle);
										if (!U) return B;
										const Z = U.getResourceGroup(B.groupHandle);
										return Z ? Z.getResourceState(B.handle) : B;
									} else if (B && B.$mid === d.MarshalledId.ScmResourceGroup) {
										const U = this.g.get(B.sourceControlHandle);
										return U ? U.getResourceGroup(B.groupHandle) : B;
									} else if (B && B.$mid === d.MarshalledId.ScmProvider) {
										const U = this.g.get(B.handle);
										return U || B;
									}
									return B;
								},
							});
					}
					registerGitContextProvider(M) {
						return (
							(this.j = M),
							this.e.$registerGitContextProvider(),
							(0, N.$Yc)(() => {
								this.e.$unregisterGitContextProvider(), (this.j = void 0);
							})
						);
					}
					gitStatusWasRun(M) {
						this.e.$gitStatusWasRun(M);
					}
					async $getFullCommit(M) {
						return this.j && (await this.j.getFullCommit(M));
					}
					async $searchAllCommits(M) {
						return this.j && (await this.j.getCommits(M));
					}
					async $searchPRs(M) {
						return this.j && (await this.j.getPullRequests(M));
					}
					async $getFullPR(M) {
						return this.j && (await this.j.getFullPullRequest(M));
					}
					async $getCurrentDiff() {
						return this.j && (await this.j.getCurrentDiff());
					}
					async $getDiffToMain(M) {
						return this.j && (await this.j.getBranchDiff(M));
					}
					async $getDiffRaw() {
						return this.j && (await this.j.getDiffRaw());
					}
					async $getGitRoot(M) {
						return this.j && (await this.j.getGitRoot(M));
					}
					async $getLastCommit() {
						return this.j && (await this.j.getLastCommit());
					}
					async $getLastCommits(M, z) {
						const Q = this.j && (await this.j.getLastCommits(M, z));
						return Q === void 0 ? [] : Q;
					}
					async $getFilenamesInCommit(M) {
						return (this.j && (await this.j.getFilenamesInCommit(M))) || [];
					}
					async $getGitLineBlame(M, z, Q) {
						return this.j && this.j.getGitLineBlame(M, z, Q);
					}
					async $getGitFileBlame(M, z) {
						return this.j && this.j.getGitFileBlame(M, z);
					}
					async $getGitUpstreamURL() {
						return this.j && (await this.j.getGitUpstreamURL());
					}
					async $getCommitRawByCommitHash(M, z) {
						return this.j && (await this.j.getCommitRawByCommitHash(M, z));
					}
					async $getFileContentAtRef(M, z, Q) {
						return this.j && (await this.j.getFileContentAtRef(M, z, Q));
					}
					async $createWorktree(M) {
						return this.j && (await this.j.createWorktree(M));
					}
					async $syncWorktreeToBranch(M, z) {
						return this.j && (await this.j.syncWorktreeToBranch(M, z));
					}
					async $syncBranchToWorktree(M, z) {
						return this.j && (await this.j.syncBranchToWorktree(M, z));
					}
					async $resetWorktreeToDefaultBranch(M) {
						return this.j && (await this.j.resetWorktreeToDefaultBranch(M));
					}
					async $removeWorktree(M) {
						return this.j && (await this.j.removeWorktree(M));
					}
					async $listAllWorktrees() {
						return this.j && (await this.j.listAllWorktrees());
					}
					async $cleanupOldWorktrees() {
						return this.j && (await this.j.cleanupOldWorktrees());
					}
					async $getCurrentBranch() {
						return this.j && (await this.j.getCurrentBranch());
					}
					async $getDefaultBranch() {
						return this.j && (await this.j.getDefaultBranch());
					}
					async $getGitUser() {
						return this.j && (await this.j.getGitUser());
					}
					createSourceControl(M, z, Q, H) {
						this.p.trace(
							"ExtHostSCM#createSourceControl",
							M.identifier.value,
							z,
							Q,
							H,
						),
							this.f.$publicLog2("api/scm/createSourceControl", {
								extensionId: M.identifier.value,
							});
						const B = T.d++,
							U = new b(M, this.o, this.e, this.n, z, Q, H);
						this.g.set(B, U);
						const Z = this.h.get(M.identifier) || [];
						return Z.push(U), this.h.set(M.identifier, Z), U;
					}
					getLastInputBox(M) {
						this.p.trace("ExtHostSCM#getLastInputBox", M.identifier.value);
						const z = this.h.get(M.identifier),
							Q = z && z[z.length - 1];
						return Q && Q.inputBox;
					}
					$provideOriginalResource(M, z, Q) {
						const H = e.URI.revive(z);
						this.p.trace(
							"ExtHostSCM#$provideOriginalResource",
							M,
							H.toString(),
						);
						const B = this.g.get(M);
						return !B ||
							!B.quickDiffProvider ||
							!B.quickDiffProvider.provideOriginalResource
							? Promise.resolve(null)
							: (0, P.$Eh)(() =>
									B.quickDiffProvider.provideOriginalResource(H, Q),
								).then((U) => U || null);
					}
					$onInputBoxValueChange(M, z) {
						this.p.trace("ExtHostSCM#$onInputBoxValueChange", M);
						const Q = this.g.get(M);
						return (
							Q && Q.inputBox.$onInputBoxValueChange(z), Promise.resolve(void 0)
						);
					}
					$executeResourceCommand(M, z, Q, H) {
						this.p.trace("ExtHostSCM#$executeResourceCommand", M, z, Q);
						const B = this.g.get(M);
						if (!B) return Promise.resolve(void 0);
						const U = B.getResourceGroup(z);
						return U
							? U.$executeResourceCommand(Q, H)
							: Promise.resolve(void 0);
					}
					$validateInput(M, z, Q) {
						this.p.trace("ExtHostSCM#$validateInput", M);
						const H = this.g.get(M);
						return !H || !H.inputBox.validateInput
							? Promise.resolve(void 0)
							: (0, P.$Eh)(() => H.inputBox.validateInput(z, Q)).then((B) => {
									if (!B) return Promise.resolve(void 0);
									const U = g.MarkdownString.fromStrict(B.message);
									return U
										? Promise.resolve([U, B.type])
										: Promise.resolve(void 0);
								});
					}
					$setSelectedSourceControl(M) {
						return (
							this.p.trace("ExtHostSCM#$setSelectedSourceControl", M),
							M !== void 0 && this.g.get(M)?.setSelectionState(!0),
							this.m !== void 0 && this.g.get(this.m)?.setSelectionState(!1),
							(this.m = M),
							Promise.resolve(void 0)
						);
					}
					async $resolveHistoryItemGroupCommonAncestor(M, z, Q, H) {
						return (
							(await this.g
								.get(M)
								?.historyProvider?.resolveHistoryItemGroupCommonAncestor(
									z,
									Q,
									H,
								)) ?? void 0
						);
					}
					async $resolveHistoryItemGroupCommonAncestor2(M, z, Q) {
						return (
							(await this.g
								.get(M)
								?.historyProvider?.resolveHistoryItemGroupCommonAncestor2(
									z,
									Q,
								)) ?? void 0
						);
					}
					async $provideHistoryItems(M, z, Q, H) {
						return (
							(
								await this.g
									.get(M)
									?.historyProvider?.provideHistoryItems(z, Q, H)
							)?.map((Z) => o(Z)) ?? void 0
						);
					}
					async $provideHistoryItems2(M, z, Q) {
						return (
							(
								await this.g.get(M)?.historyProvider?.provideHistoryItems2(z, Q)
							)?.map((U) => o(U)) ?? void 0
						);
					}
					async $provideHistoryItemSummary(M, z, Q, H) {
						const B = this.g.get(M)?.historyProvider;
						if (typeof B?.provideHistoryItemSummary != "function") return;
						const U = await B.provideHistoryItemSummary(z, Q, H);
						return U ? o(U) : void 0;
					}
					async $provideHistoryItemChanges(M, z, Q, H) {
						return (
							(await this.g
								.get(M)
								?.historyProvider?.provideHistoryItemChanges(z, Q, H)) ?? void 0
						);
					}
				};
				(t.$1id = F), (t.$1id = F = T = wt([rt(3, p.$ik)], F));
			},
		),
		