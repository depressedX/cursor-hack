import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/linkedList.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/remote/common/remoteHosts.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../common/memento.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/platform.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/async.js';
define(
			de[1059],
			he([
				1, 0, 6, 3, 273, 23, 9, 10, 20, 211, 438, 349, 21, 25, 174, 282, 78, 68,
				19, 12, 22, 15,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ISb =
						e.$HSb =
						e.$GSb =
						e.$FSb =
						e.$ESb =
						e.$DSb =
						e.$CSb =
						e.$BSb =
						e.$ASb =
						e.$zSb =
						e.$ySb =
							void 0),
					(e.$ySb = "security.workspace.trust.enabled"),
					(e.$zSb = "security.workspace.trust.startupPrompt"),
					(e.$ASb = "security.workspace.trust.banner"),
					(e.$BSb = "security.workspace.trust.untrustedFiles"),
					(e.$CSb = "security.workspace.trust.emptyWindow"),
					(e.$DSb = "extensions.supportUntrustedWorkspaces"),
					(e.$ESb = "content.trust.model.key");
				class y {
					constructor(k, L, D) {
						(this.a = k), (this.b = L), (this.c = D);
					}
					get folders() {
						return this.a.folders.map((k, L) => ({
							index: k.index,
							name: k.name,
							toResource: k.toResource,
							uri: this.b[L],
						}));
					}
					get transient() {
						return this.a.transient;
					}
					get configuration() {
						return this.c ?? this.a.configuration;
					}
					get id() {
						return this.a.id;
					}
				}
				e.$FSb = y;
				let $ = class extends i.$1c {
					constructor(k, L) {
						super(), (this.a = k), (this.b = L);
					}
					isWorkspaceTrustEnabled() {
						return this.b.disableWorkspaceTrust
							? !1
							: !!this.a.getValue(e.$ySb);
					}
				};
				(e.$GSb = $), (e.$GSb = $ = Ne([j(0, d.$gj), j(1, p.$r8)], $));
				let v = class extends i.$1c {
					constructor(k, L, D, M, N, A, R, O) {
						super(),
							(this.C = k),
							(this.F = L),
							(this.G = D),
							(this.H = M),
							(this.I = N),
							(this.J = A),
							(this.L = R),
							(this.M = O),
							(this.a = e.$ESb),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeTrust = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeTrustedFolders = this.m.event),
							(this.n = []),
							(this.r = !1),
							(this.q = this.J.getWorkspace()),
							({ promise: this.b, resolve: this.c } = (0, l.$Fh)()),
							({ promise: this.g, resolve: this.h } = (0, l.$Fh)()),
							(this.y = new T(b.$r && this.ab() ? void 0 : this.G)),
							(this.z = this.D(new I())),
							(this.t = this.R()),
							(this.s = this.W()),
							this.N(),
							this.O();
					}
					N() {
						this.Q()
							.then(async () => {
								(this.r = !0), await this.X();
							})
							.finally(() => {
								this.c(), this.I.remoteAuthority || this.h();
							}),
							this.I.remoteAuthority &&
								this.F.resolveAuthority(this.I.remoteAuthority)
									.then(async (k) => {
										(this.w = k),
											await this.M.activateProvider(E.Schemas.vscodeRemote),
											await this.X();
									})
									.finally(() => {
										this.h();
									}),
							this.ab() &&
								this.g.then(() => {
									this.y.isEmptyWorkspaceTrusted === void 0 &&
										(this.y.isEmptyWorkspaceTrusted =
											this.isWorkspaceTrusted());
								});
					}
					O() {
						this.D(
							this.J.onDidChangeWorkspaceFolders(async () => await this.X()),
						),
							this.D(
								this.G.onDidChangeValue(
									h.StorageScope.APPLICATION,
									this.a,
									this.D(new i.$Zc()),
								)(async () => {
									JSON.stringify(this.t) !== JSON.stringify(this.R()) &&
										((this.t = this.R()), this.m.fire(), await this.X());
								}),
							);
					}
					async P(k) {
						let L = k;
						if (this.I.remoteAuthority && k.scheme === E.Schemas.vscodeRemote)
							L = await this.F.getCanonicalURI(k);
						else if (k.scheme === "vscode-vfs") {
							const D = k.authority.indexOf("+");
							D !== -1 && (L = k.with({ authority: k.authority.substr(0, D) }));
						}
						return L.with({ query: null, fragment: null });
					}
					async Q() {
						const k = [];
						if (
							(this.I.filesToOpenOrCreate &&
								k.push(...this.I.filesToOpenOrCreate),
							this.I.filesToDiff && k.push(...this.I.filesToDiff),
							this.I.filesToMerge && k.push(...this.I.filesToMerge),
							k.length)
						) {
							const N = k.filter((R) => !!R.fileUri).map((R) => R.fileUri),
								A = await Promise.all(N.map((R) => this.P(R)));
							this.n.push(
								...A.filter((R) =>
									this.n.every((O) => !this.H.extUri.isEqual(R, O)),
								),
							);
						}
						const L = this.J.getWorkspace().folders.map((N) => N.uri),
							D = await Promise.all(L.map((N) => this.P(N)));
						let M = this.J.getWorkspace().configuration;
						M && (0, c.$ej)(M, this.I) && (M = await this.P(M)),
							(this.q = new y(this.J.getWorkspace(), D, M));
					}
					R() {
						const k = this.G.get(this.a, h.StorageScope.APPLICATION);
						let L;
						try {
							k && (L = JSON.parse(k));
						} catch {}
						return (
							L || (L = { uriTrustInfo: [] }),
							L.uriTrustInfo || (L.uriTrustInfo = []),
							(L.uriTrustInfo = L.uriTrustInfo.map((D) => ({
								uri: C.URI.revive(D.uri),
								trusted: D.trusted,
							}))),
							(L.uriTrustInfo = L.uriTrustInfo.filter((D) => D.trusted)),
							L
						);
					}
					async S() {
						this.G.store(
							this.a,
							JSON.stringify(this.t),
							h.StorageScope.APPLICATION,
							h.StorageTarget.MACHINE,
						),
							this.m.fire(),
							await this.X();
					}
					U() {
						const k = this.q.folders.map((D) => D.uri),
							L = this.q.configuration;
						return L && (0, c.$ej)(L, this.I) && k.push(L), k;
					}
					W() {
						return this.L.isWorkspaceTrustEnabled()
							? this.r
								? this.I.remoteAuthority && this.w?.options?.isTrusted
									? this.w.options.isTrusted
									: this.ab()
										? this.y.isEmptyWorkspaceTrusted !== void 0
											? this.y.isEmptyWorkspaceTrusted
											: this.n.length
												? this.Y(this.n)
												: !!this.C.getValue(e.$CSb)
										: this.Y(this.U())
								: !1
							: !0;
					}
					async X(k) {
						this.L.isWorkspaceTrustEnabled() &&
							(k === void 0 && (await this.Q(), (k = this.W())),
							this.isWorkspaceTrusted() !== k &&
								((this.db = k), await this.z.participate(k), this.j.fire(k)));
					}
					Y(k) {
						let L = !0;
						for (const D of k) {
							const { trusted: M } = this.Z(D);
							if (!M) return (L = M), L;
						}
						return L;
					}
					Z(k) {
						if (!this.L.isWorkspaceTrustEnabled())
							return { trusted: !0, uri: k };
						if (this.bb(k)) return { trusted: !0, uri: k };
						if (this.cb(k)) return { trusted: !0, uri: k };
						let L = !1,
							D = -1,
							M = k;
						for (const N of this.t.uriTrustInfo)
							if (this.H.extUri.isEqualOrParent(k, N.uri)) {
								const A = N.uri.fsPath;
								A.length > D && ((D = A.length), (L = N.trusted), (M = N.uri));
							}
						return { trusted: L, uri: M };
					}
					async $(k, L) {
						let D = !1;
						for (const M of k)
							if (L) {
								if (this.bb(M) || this.cb(M)) continue;
								this.t.uriTrustInfo.find((A) =>
									this.H.extUri.isEqual(A.uri, M),
								) ||
									(this.t.uriTrustInfo.push({ uri: M, trusted: !0 }), (D = !0));
							} else {
								const N = this.t.uriTrustInfo.length;
								(this.t.uriTrustInfo = this.t.uriTrustInfo.filter(
									(A) => !this.H.extUri.isEqual(A.uri, M),
								)),
									N !== this.t.uriTrustInfo.length && (D = !0);
							}
						D && (await this.S());
					}
					ab() {
						if (this.J.getWorkbenchState() === c.WorkbenchState.EMPTY)
							return !0;
						const k = this.J.getWorkspace();
						return k
							? (0, c.$bj)(this.J.getWorkspace()) && k.folders.length === 0
							: !1;
					}
					bb(k) {
						return (0, a.$D8)(k) && k.scheme !== "vscode-vfs";
					}
					cb(k) {
						return !this.I.remoteAuthority || !this.w
							? !1
							: (0, f.$sh)((0, u.$wn)(k), this.w.authority.authority) &&
									!!this.w.options?.isTrusted;
					}
					set db(k) {
						(this.s = k),
							k || (this.y.acceptsOutOfWorkspaceFiles = !1),
							this.ab() && (this.y.isEmptyWorkspaceTrusted = k);
					}
					get workspaceResolved() {
						return this.b;
					}
					get workspaceTrustInitialized() {
						return this.g;
					}
					get acceptsOutOfWorkspaceFiles() {
						return this.y.acceptsOutOfWorkspaceFiles;
					}
					set acceptsOutOfWorkspaceFiles(k) {
						this.y.acceptsOutOfWorkspaceFiles = k;
					}
					isWorkspaceTrusted() {
						return this.s;
					}
					isWorkspaceTrustForced() {
						return !!(
							(this.I.remoteAuthority &&
								this.w &&
								this.w.options?.isTrusted !== void 0) ||
							this.U().filter((L) => !this.bb(L)).length === 0
						);
					}
					canSetParentFolderTrust() {
						const k = (0, c.$1i)(this.q);
						if (
							!(0, c.$Wi)(k) ||
							(k.uri.scheme !== E.Schemas.file &&
								k.uri.scheme !== E.Schemas.vscodeRemote)
						)
							return !1;
						const L = this.H.extUri.dirname(k.uri);
						return !this.H.extUri.isEqual(k.uri, L);
					}
					async setParentFolderTrust(k) {
						if (this.canSetParentFolderTrust()) {
							const L = (0, c.$1i)(this.q).uri,
								D = this.H.extUri.dirname(L);
							await this.setUrisTrust([D], k);
						}
					}
					canSetWorkspaceTrust() {
						if (
							this.I.remoteAuthority &&
							(!this.w || this.w.options?.isTrusted !== void 0)
						)
							return !1;
						if (this.ab()) return !0;
						if (this.U().filter((M) => !this.bb(M)).length === 0) return !1;
						if (!this.isWorkspaceTrusted()) return !0;
						const L = (0, c.$1i)(this.q);
						if (
							!(0, c.$Wi)(L) ||
							(L.uri.scheme !== E.Schemas.file && L.uri.scheme !== "vscode-vfs")
						)
							return !1;
						const D = this.Z(L.uri);
						if (!D.trusted || !this.H.extUri.isEqual(L.uri, D.uri)) return !1;
						if (this.canSetParentFolderTrust()) {
							const M = this.H.extUri.dirname(L.uri);
							if (this.Z(M).trusted) return !1;
						}
						return !0;
					}
					async setWorkspaceTrust(k) {
						if (this.ab()) {
							await this.X(k);
							return;
						}
						const L = this.U();
						await this.setUrisTrust(L, k);
					}
					async getUriTrustInfo(k) {
						return this.L.isWorkspaceTrustEnabled()
							? this.cb(k)
								? { trusted: !0, uri: k }
								: this.Z(await this.P(k))
							: { trusted: !0, uri: k };
					}
					async setUrisTrust(k, L) {
						this.$(await Promise.all(k.map((D) => this.P(D))), L);
					}
					getTrustedUris() {
						return this.t.uriTrustInfo.map((k) => k.uri);
					}
					async setTrustedUris(k) {
						this.t.uriTrustInfo = [];
						for (const L of k) {
							const D = await this.P(L),
								M = this.H.extUri.removeTrailingPathSeparator(D);
							let N = !1;
							for (const A of this.t.uriTrustInfo)
								if (this.H.extUri.isEqual(A.uri, M)) {
									N = !0;
									break;
								}
							N || this.t.uriTrustInfo.push({ trusted: !0, uri: M });
						}
						await this.S();
					}
					addWorkspaceTrustTransitionParticipant(k) {
						return this.z.addWorkspaceTrustTransitionParticipant(k);
					}
				};
				(e.$HSb = v),
					(e.$HSb = v =
						Ne(
							[
								j(0, d.$gj),
								j(1, r.$3l),
								j(2, h.$lq),
								j(3, o.$Vl),
								j(4, p.$r8),
								j(5, c.$Vi),
								j(6, n.$oO),
								j(7, s.$ll),
							],
							v,
						));
				let S = class extends i.$1c {
					constructor(k, L) {
						super(),
							(this.n = k),
							(this.q = L),
							(this.h = this.D(new t.$re())),
							(this.onDidInitiateOpenFilesTrustRequest = this.h.event),
							(this.j = this.D(new t.$re())),
							(this.onDidInitiateWorkspaceTrustRequest = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidInitiateWorkspaceTrustRequestOnStartup = this.m.event);
					}
					get r() {
						return this.n.getValue(e.$BSb);
					}
					set r(k) {
						this.n.updateValue(e.$BSb, k);
					}
					async completeOpenFilesTrustRequest(k, L) {
						this.b &&
							(k === n.WorkspaceTrustUriResponse.Open &&
								(this.q.acceptsOutOfWorkspaceFiles = !0),
							L &&
								(k === n.WorkspaceTrustUriResponse.Open && (this.r = "open"),
								k === n.WorkspaceTrustUriResponse.OpenInNewWindow &&
									(this.r = "newWindow")),
							this.b(k),
							(this.b = void 0),
							(this.a = void 0));
					}
					async requestOpenFilesTrust(k) {
						if (
							!this.q.isWorkspaceTrusted() ||
							(await Promise.all(k.map((D) => this.q.getUriTrustInfo(D))))
								.map((D) => D.trusted)
								.every((D) => D)
						)
							return n.WorkspaceTrustUriResponse.Open;
						if (this.r !== "prompt") {
							if (this.r === "newWindow")
								return n.WorkspaceTrustUriResponse.OpenInNewWindow;
							if (this.r === "open") return n.WorkspaceTrustUriResponse.Open;
						}
						if (this.q.acceptsOutOfWorkspaceFiles)
							return n.WorkspaceTrustUriResponse.Open;
						if (!this.a)
							this.a = new Promise((D) => {
								this.b = D;
							});
						else return this.a;
						return this.h.fire(), this.a;
					}
					s(k) {
						this.g &&
							(this.g(k ?? this.q.isWorkspaceTrusted()),
							(this.g = void 0),
							(this.c = void 0));
					}
					cancelWorkspaceTrustRequest() {
						this.g && (this.g(void 0), (this.g = void 0), (this.c = void 0));
					}
					async completeWorkspaceTrustRequest(k) {
						if (k === void 0 || k === this.q.isWorkspaceTrusted()) {
							this.s(k);
							return;
						}
						t.Event.once(this.q.onDidChangeTrust)((L) => this.s(L)),
							await this.q.setWorkspaceTrust(k);
					}
					async requestWorkspaceTrust(k) {
						if (this.q.isWorkspaceTrusted()) return this.q.isWorkspaceTrusted();
						if (!this.c)
							this.c = new Promise((L) => {
								this.g = L;
							});
						else return this.c;
						return this.j.fire(k), this.c;
					}
					requestWorkspaceTrustOnStartup() {
						this.c ||
							(this.c = new Promise((k) => {
								this.g = k;
							})),
							this.m.fire();
					}
				};
				(e.$ISb = S), (e.$ISb = S = Ne([j(0, d.$gj), j(1, n.$pO)], S));
				class I extends i.$1c {
					constructor() {
						super(...arguments), (this.a = new w.$$c());
					}
					addWorkspaceTrustTransitionParticipant(k) {
						const L = this.a.push(k);
						return (0, i.$Yc)(() => L());
					}
					async participate(k) {
						for (const L of this.a) await L.participate(k);
					}
					dispose() {
						this.a.clear(), super.dispose();
					}
				}
				class T {
					constructor(k) {
						(this.c = "acceptsOutOfWorkspaceFiles"),
							(this.d = "isEmptyWorkspaceTrusted"),
							k
								? ((this.a = new g.$eEb("workspaceTrust", k)),
									(this.b = this.a.getMemento(
										h.StorageScope.WORKSPACE,
										h.StorageTarget.MACHINE,
									)))
								: (this.b = {});
					}
					get acceptsOutOfWorkspaceFiles() {
						return this.b[this.c] ?? !1;
					}
					set acceptsOutOfWorkspaceFiles(k) {
						(this.b[this.c] = k), this.a?.saveMemento();
					}
					get isEmptyWorkspaceTrusted() {
						return this.b[this.d];
					}
					set isEmptyWorkspaceTrusted(k) {
						(this.b[this.d] = k), this.a?.saveMemento();
					}
				}
				(0, m.$lK)(n.$qO, S, m.InstantiationType.Delayed);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	