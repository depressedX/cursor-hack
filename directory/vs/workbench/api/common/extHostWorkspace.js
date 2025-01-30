import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/ternarySearchTree.js';
import '../../../base/common/network.js';
import '../../../base/common/numbers.js';
import '../../../base/common/resources.js';
import '../../../base/common/strings.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../../platform/files/common/files.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import '../../../platform/notification/common/notification.js';
import '../../../platform/workspace/common/workspace.js';
import './extHostFileSystemInfo.js';
import './extHostInitDataService.js';
import './extHostRpcService.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import './extHostUriTransformerService.js';
import '../../services/search/common/search.js';
import './extHost.protocol.js';
import '../../../base/common/marshalling.js';
import '../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../services/search/common/searchExtTypes.js';
define(
			Pe[63],
			Ne([
				1, 0, 20, 9, 23, 4, 3, 90, 16, 263, 24, 15, 2, 10, 32, 5, 14, 491, 61,
				92, 34, 21, 17, 11, 112, 41, 6, 50, 169, 83,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
				o,
				w,
				m,
				E,
				R,
				C,
				O,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$m9 = t.$l9 = void 0);
				function A(H, B, U) {
					return new p.$ch((Z) => F(Z, U)).isEqual(H, B);
				}
				function J(H, B, U) {
					return A(H.uri, B.uri, U)
						? 0
						: (0, y.$Ff)(H.uri.toString(), B.uri.toString());
				}
				function L(H, B, U) {
					return H.index !== B.index
						? H.index < B.index
							? -1
							: 1
						: A(H.uri, B.uri, U)
							? (0, y.$Ff)(H.name, B.name)
							: (0, y.$Ff)(H.uri.toString(), B.uri.toString());
				}
				function b(H, B, U, Z) {
					const W = H.slice(0).sort((fe, ae) => U(fe, ae, Z)),
						G = B.slice(0).sort((fe, ae) => U(fe, ae, Z));
					return (0, e.$Ib)(W, G, (fe, ae) => U(fe, ae, Z));
				}
				function F(H, B) {
					const U = B.getCapabilities(H.scheme);
					return !(U && U & g.FileSystemProviderCapabilities.PathCaseSensitive);
				}
				class D extends T.$6i {
					static toExtHostWorkspace(B, U, Z, W) {
						if (!B) return { workspace: null, added: [], removed: [] };
						const {
								id: G,
								name: fe,
								folders: ae,
								configuration: Se,
								transient: he,
								isUntitled: _,
							} = B,
							oe = [],
							ke = U;
						U
							? ae.forEach((ne, de) => {
									const Le = d.URI.revive(ne.uri),
										Ce = D.o(Z || U, Le, W);
									Ce
										? ((Ce.name = ne.name), (Ce.index = ne.index), oe.push(Ce))
										: oe.push({ uri: Le, name: ne.name, index: de });
								})
							: oe.push(
									...ae.map(({ uri: ne, name: de, index: Le }) => ({
										uri: d.URI.revive(ne),
										name: de,
										index: Le,
									})),
								),
							oe.sort((ne, de) => (ne.index < de.index ? -1 : 1));
						const ge = new D(
								G,
								fe,
								oe,
								!!he,
								Se ? d.URI.revive(Se) : null,
								!!_,
								(ne) => F(ne, W),
							),
							{ added: ee, removed: me } = b(
								ke ? ke.workspaceFolders : [],
								ge.workspaceFolders,
								J,
								W,
							);
						return { workspace: ge, added: ee, removed: me };
					}
					static o(B, U, Z) {
						for (let W = 0; W < B.folders.length; W++) {
							const G = B.workspaceFolders[W];
							if (A(G.uri, U, Z)) return G;
						}
					}
					constructor(B, U, Z, W, G, fe, ae) {
						super(
							B,
							Z.map((Se) => new T.$7i(Se)),
							W,
							G,
							ae,
						),
							(this.t = U),
							(this.u = fe),
							(this.q = []),
							(this.s = I.$Si.forUris(ae, () => !0)),
							Z.forEach((Se) => {
								this.q.push(Se), this.s.set(Se.uri, Se);
							});
					}
					get name() {
						return this.t;
					}
					get isUntitled() {
						return this.u;
					}
					get workspaceFolders() {
						return this.q.slice(0);
					}
					getWorkspaceFolder(B, U) {
						return (
							U && this.s.get(B) && (B = (0, p.$mh)(B)), this.s.findSubstr(B)
						);
					}
					resolveWorkspaceFolder(B) {
						return this.s.get(B);
					}
				}
				let M = class {
					constructor(B, U, Z, W, G) {
						(this.c = new N.$re()),
							(this.onDidChangeWorkspace = this.c.event),
							(this.g = new N.$re()),
							(this.onDidGrantWorkspaceTrust = this.g.event),
							(this.u = []),
							(this.v = !1),
							(this.w = new Map()),
							(this.x = new Map()),
							(this.A = 0),
							(this.D = 0),
							(this.F = new N.$te()),
							(this.G = new Map()),
							(this.h = W),
							(this.s = Z),
							(this.t = G),
							(this.j = new n.$2m()),
							(this.k = new r.$Lh()),
							(this.o = B.getProxy(E.$lbb.MainThreadWorkspace)),
							(this.q = B.getProxy(E.$lbb.MainThreadMessageService));
						const fe = U.workspace;
						this.l = fe
							? new D(
									fe.id,
									fe.name,
									[],
									!!fe.transient,
									fe.configuration ? d.URI.revive(fe.configuration) : null,
									!!fe.isUntitled,
									(ae) => F(ae, Z),
								)
							: void 0;
					}
					$initializeWorkspace(B, U) {
						(this.v = U), this.$acceptWorkspaceData(B), this.k.open();
					}
					waitForInitializeCall() {
						return this.k.wait();
					}
					get workspace() {
						return this.y;
					}
					get name() {
						return this.y ? this.y.name : void 0;
					}
					get workspaceFile() {
						if (this.y && this.y.configuration)
							return this.y.isUntitled
								? d.URI.from({
										scheme: l.Schemas.untitled,
										path: (0, p.$kh)((0, p.$mh)(this.y.configuration)),
									})
								: this.y.configuration;
					}
					get y() {
						return this.n || this.l;
					}
					getWorkspaceFolders() {
						if (this.y) return this.y.workspaceFolders.slice(0);
					}
					async getWorkspaceFolders2() {
						if ((await this.k.wait(), !!this.y))
							return this.y.workspaceFolders.slice(0);
					}
					updateWorkspaceFolders(B, U, Z, ...W) {
						const G = [];
						if (
							(Array.isArray(W) &&
								W.forEach((_) => {
									d.URI.isUri(_.uri) &&
										!G.some((oe) => A(oe.uri, _.uri, this.s)) &&
										G.push({ uri: _.uri, name: _.name || (0, p.$jh)(_.uri) });
								}),
							this.n ||
								[U, Z].some((_) => typeof _ != "number" || _ < 0) ||
								(Z === 0 && G.length === 0))
						)
							return !1;
						const fe = this.y ? this.y.workspaceFolders : [];
						if (U + Z > fe.length) return !1;
						const ae = fe.slice(0);
						ae.splice(
							U,
							Z,
							...G.map((_) => ({
								uri: _.uri,
								name: _.name || (0, p.$jh)(_.uri),
								index: void 0,
							})),
						);
						for (let _ = 0; _ < ae.length; _++) {
							const oe = ae[_];
							if (ae.some((ke, ge) => ge !== _ && A(oe.uri, ke.uri, this.s)))
								return !1;
						}
						ae.forEach((_, oe) => (_.index = oe));
						const { added: Se, removed: he } = b(fe, ae, L, this.s);
						if (Se.length === 0 && he.length === 0) return !1;
						if (this.o) {
							const _ = B.displayName || B.name;
							this.o.$updateWorkspaceFolders(_, U, Z, G).then(void 0, (oe) => {
								this.n = void 0;
								const ke = {
									source: {
										identifier: B.identifier,
										label: B.displayName || B.name,
									},
								};
								this.q.$showMessage(
									$.Severity.Error,
									(0, k.localize)(2725, null, _, oe.toString()),
									ke,
									[],
								);
							});
						}
						return this.z(ae), !0;
					}
					getWorkspaceFolder(B, U) {
						if (this.y) return this.y.getWorkspaceFolder(B, U);
					}
					async getWorkspaceFolder2(B, U) {
						if ((await this.k.wait(), !!this.y))
							return this.y.getWorkspaceFolder(B, U);
					}
					async resolveWorkspaceFolder(B) {
						if ((await this.k.wait(), !!this.y))
							return this.y.resolveWorkspaceFolder(B);
					}
					getPath() {
						if (!this.y) return;
						const { folders: B } = this.y;
						if (B.length !== 0) return B[0].uri.fsPath;
					}
					getRelativePath(B, U) {
						let Z,
							W = "";
						if (
							(typeof B == "string"
								? ((Z = d.URI.file(B)), (W = B))
								: typeof B < "u" && ((Z = B), (W = B.fsPath)),
							!Z)
						)
							return W;
						const G = this.getWorkspaceFolder(Z, !0);
						if (!G) return W;
						typeof U > "u" && this.y && (U = this.y.folders.length > 1);
						let fe = (0, p.$ph)(G.uri, Z);
						return U && G.name && (fe = `${G.name}/${fe}`), fe;
					}
					z(B) {
						this.y &&
							(this.n =
								D.toExtHostWorkspace(
									{
										id: this.y.id,
										name: this.y.name,
										configuration: this.y.configuration,
										folders: B,
										isUntitled: this.y.isUntitled,
									},
									this.y,
									void 0,
									this.s,
								).workspace || void 0);
					}
					$acceptWorkspaceData(B) {
						const {
							workspace: U,
							added: Z,
							removed: W,
						} = D.toExtHostWorkspace(B, this.l, this.n, this.s);
						(this.l = U || void 0),
							(this.n = void 0),
							this.c.fire(Object.freeze({ added: Z, removed: W }));
					}
					registerControlProvider(B, U) {
						if (this.x.has(B))
							throw new Error(
								`A control provider for the scheme '${B}' is already registered.`,
							);
						this.x.set(B, U);
						const Z = this.t.transformOutgoingScheme(B),
							W = this.A++;
						return (
							this.o.$registerControlProvider(W, Z),
							(0, P.$Yc)(() => {
								this.o.$unregisterControlProvider(W), this.x.delete(B);
							})
						);
					}
					async $controlGetDataframeSummary(B) {
						const U = "vscode-jupyter",
							Z = this.x.get(U);
						if (!Z)
							throw new Error(`No control provider for scheme '${U}' found.`);
						const W = d.URI.revive(B);
						if (!W) {
							this.h.warn("Unable to resolve workspace folder");
							return;
						}
						return await Z.getDataframeSummary(W);
					}
					async $controlGetFullDiff(B, U) {
						const Z = "git",
							W = this.x.get(Z);
						if (!W)
							throw new Error(`No control provider for scheme '${Z}' found.`);
						return await W.getFullDiff(B, U);
					}
					async $controlGetTokenizedQuery(B) {
						const U = "cursor-retrieval",
							Z = this.x.get(U);
						if (!Z)
							throw new Error(`No control provider for scheme '${U}' found.`);
						return await Z.getTokenizedQuery(B);
					}
					async $controlAppendCppTelem(B, U) {
						const Z = "cursor-retrieval",
							W = this.x.get(Z);
						if (!W)
							throw new Error(`No control provider for scheme '${Z}' found.`);
						await W.appendCppTelem(B.buffer, U);
					}
					async $controlStreamCpp(B, U) {
						const Z = "cursor-retrieval",
							W = this.x.get(Z);
						if (!W)
							throw new Error(`No control provider for scheme '${Z}' found.`);
						await W.streamCpp(C.$QG.fromBinary(B.buffer), U);
					}
					async $controlFlushCpp(B) {
						const U = "cursor-retrieval",
							Z = this.x.get(U);
						if (!Z)
							throw new Error(`No control provider for scheme '${U}' found.`);
						const W = await Z.flushCpp(B);
						return W === null
							? { type: "failure", reason: "flushCppResponse is null" }
							: W === void 0
								? { type: "failure", reason: "flushCppResponse is undefined" }
								: W;
					}
					async $controlGetCppReport() {
						const B = "cursor-retrieval",
							U = this.x.get(B);
						if (!U)
							throw new Error(`No control provider for scheme '${B}' found.`);
						const Z = await U.getCppReport();
						if (Z !== null) return Z;
					}
					async $controlCancelCpp(B) {
						const U = "cursor-retrieval",
							Z = this.x.get(U);
						if (!Z)
							throw new Error(`No control provider for scheme '${U}' found.`);
						await Z.cancelCpp(B);
					}
					async $controlTokenizeBPE(B, U) {
						const Z = "cursor-tokenize",
							W = this.x.get(Z);
						if (!W)
							throw new Error(`No control provider for scheme '${Z}' found.`);
						return await W.tokenizeBPE(B, U);
					}
					findFiles(B, U, Z, W, G = S.CancellationToken.None) {
						this.h.trace(
							`extHostWorkspace#findFiles: fileSearch, extension: ${W.value}, entryPoint: findFiles`,
						);
						let fe = "",
							ae = !0;
						return (
							U === null
								? (ae = !1)
								: U !== void 0 &&
									(typeof U == "string" ? (fe = U) : (fe = U.pattern)),
							this.B(
								B,
								void 0,
								{
									exclude: [fe],
									maxResults: Z,
									useExcludeSettings: ae
										? O.ExcludeSettingOptions.FilesExclude
										: O.ExcludeSettingOptions.None,
									useIgnoreFiles: { local: !1 },
								},
								G,
							)
						);
					}
					findFiles2(B, U = {}, Z, W = S.CancellationToken.None) {
						this.h.trace(
							`extHostWorkspace#findFiles2: fileSearch, extension: ${Z.value}, entryPoint: findFiles2`,
						);
						const G = U.useDefaultExcludes ?? !0,
							fe = U.useDefaultSearchExcludes ?? !0,
							ae = G
								? fe
									? O.ExcludeSettingOptions.SearchAndFilesExclude
									: O.ExcludeSettingOptions.FilesExclude
								: O.ExcludeSettingOptions.None,
							Se = {
								exclude: U.exclude ? [U.exclude] : void 0,
								useIgnoreFiles: {
									local: U.useIgnoreFiles,
									global: U.useGlobalIgnoreFiles,
									parent: U.useParentIgnoreFiles,
								},
								useExcludeSettings: ae,
								followSymlinks: U.followSymlinks,
								maxResults: U.maxResults,
							};
						return this.B(void 0, B !== void 0 ? [B] : [], Se, W);
					}
					findFiles2New(B, U = {}, Z, W = S.CancellationToken.None) {
						return (
							this.h.trace(
								`extHostWorkspace#findFiles2New: fileSearch, extension: ${Z.value}, entryPoint: findFiles2New`,
							),
							this.B(void 0, B, U, W)
						);
					}
					async B(B, U, Z, W = S.CancellationToken.None) {
						if (W && W.isCancellationRequested) return Promise.resolve([]);
						const fe =
							(B !== void 0 ? [B] : U)?.map((ae) => {
								const Se = Q(Z.exclude),
									he = {
										ignoreSymlinks:
											typeof Z.followSymlinks == "boolean"
												? !Z.followSymlinks
												: void 0,
										disregardIgnoreFiles:
											typeof Z.useIgnoreFiles?.local == "boolean"
												? !Z.useIgnoreFiles.local
												: void 0,
										disregardGlobalIgnoreFiles:
											typeof Z.useIgnoreFiles?.global == "boolean"
												? !Z.useIgnoreFiles.global
												: void 0,
										disregardParentIgnoreFiles:
											typeof Z.useIgnoreFiles?.parent == "boolean"
												? !Z.useIgnoreFiles.parent
												: void 0,
										disregardExcludeSettings:
											Z.useExcludeSettings !== void 0 &&
											Z.useExcludeSettings === O.ExcludeSettingOptions.None,
										disregardSearchExcludeSettings:
											Z.useExcludeSettings !== void 0 &&
											Z.useExcludeSettings !==
												O.ExcludeSettingOptions.SearchAndFilesExclude,
										maxResults: Z.maxResults,
										excludePattern: Se.length > 0 ? Se : void 0,
										_reason: "startFileSearch",
										shouldGlobSearch: B ? void 0 : !0,
									},
									_ = z(f.GlobPattern.from(ae)),
									oe = _?.folder;
								return (
									B
										? (he.includePattern = _?.pattern)
										: (he.filePattern = _?.pattern),
									{ folder: oe, options: he }
								);
							}) ?? [];
						return this.C(fe, W);
					}
					async C(B, U) {
						return (
							await Promise.all(
								B?.map((W) =>
									this.o
										.$startFileSearch(W.folder ?? null, W.options, U)
										.then((G) =>
											Array.isArray(G) ? G.map((fe) => d.URI.revive(fe)) : [],
										),
								) ?? [],
							)
						).flat();
					}
					findTextInFilesNew(B, U, Z, W) {
						this.h.trace(
							`extHostWorkspace#findTextInFilesNew: textSearch, extension: ${U.value}, entryPoint: findTextInFilesNew`,
						);
						const G = (_) => {
								if (!Z) return { folder: void 0, options: {} };
								const oe = _ ? z(f.GlobPattern.from(_)) : void 0,
									ke = Q(Z.exclude);
								return {
									options: {
										ignoreSymlinks:
											typeof Z.followSymlinks == "boolean"
												? !Z.followSymlinks
												: void 0,
										disregardIgnoreFiles:
											typeof Z.useIgnoreFiles == "boolean"
												? !Z.useIgnoreFiles
												: void 0,
										disregardGlobalIgnoreFiles:
											typeof Z.useIgnoreFiles?.global == "boolean"
												? !Z.useIgnoreFiles?.global
												: void 0,
										disregardParentIgnoreFiles:
											typeof Z.useIgnoreFiles?.parent == "boolean"
												? !Z.useIgnoreFiles?.parent
												: void 0,
										disregardExcludeSettings:
											Z.useExcludeSettings !== void 0 &&
											Z.useExcludeSettings === O.ExcludeSettingOptions.None,
										disregardSearchExcludeSettings:
											Z.useExcludeSettings !== void 0 &&
											Z.useExcludeSettings !==
												O.ExcludeSettingOptions.SearchAndFilesExclude,
										fileEncoding: Z.encoding,
										maxResults: Z.maxResults,
										previewOptions: Z.previewOptions
											? {
													matchLines: Z.previewOptions?.numMatchLines ?? 100,
													charsPerLine: Z.previewOptions?.charsPerLine ?? 1e4,
												}
											: void 0,
										surroundingContext: Z.surroundingContext,
										includePattern: oe?.pattern,
										excludePattern: ke,
									},
									folder: oe?.folder,
								};
							},
							ae = (Z?.include?.map((_) => G(_)) ?? [G(void 0)]).filter(
								(_) => !!_,
							),
							Se = Promise.resolve(void 0);
						return {
							results: new r.$ai(async (_) => {
								const oe = (ke, ge) => (
									(0, m.$q7)(ke)
										? _.emitOne(
												new O.$h7(
													ge,
													ke.rangeLocations.map((ee) => ({
														previewRange: new o.$pbb(
															ee.preview.startLineNumber,
															ee.preview.startColumn,
															ee.preview.endLineNumber,
															ee.preview.endColumn,
														),
														sourceRange: new o.$pbb(
															ee.source.startLineNumber,
															ee.source.startColumn,
															ee.source.endLineNumber,
															ee.source.endColumn,
														),
													})),
													ke.previewText,
												),
											)
										: _.emitOne(new O.$i7(ge, ke.text, ke.lineNumber)),
									ke
								);
								await Se.then((ke) => this.findTextInFilesBase(B, ae, oe, W));
							}),
							complete: Se.then((_) => ({ limitHit: _?.limitHit ?? !1 })),
						};
					}
					async findTextInFilesBase(B, U, Z, W = S.CancellationToken.None) {
						const G = this.j.getNext();
						let fe = !1;
						if (
							(W.onCancellationRequested((ae) => {
								fe = !0;
							}),
							(this.u[G] = (ae) => {
								if (fe) return;
								const Se = d.URI.revive(ae.resource);
								ae.results.forEach((he) => {
									const _ = (0, R.$ji)(he);
									Z(_, Se);
								});
							}),
							W.isCancellationRequested)
						)
							return {};
						try {
							const ae = await Promise.all(
								U?.map(
									(Se) =>
										this.o.$startTextSearch(
											B,
											Se.folder ?? null,
											Se.options,
											G,
											W,
										) || {},
								) ?? [],
							);
							return (
								delete this.u[G],
								ae.reduce(
									(Se, he) => ({
										limitHit: Se?.limitHit || (he?.limitHit ?? !1),
										message: [Se?.message ?? [], he?.message ?? []].flat(),
									}),
									{},
								) ?? { limitHit: !1 }
							);
						} catch (ae) {
							throw (delete this.u[G], ae);
						}
					}
					async findTextInFiles(B, U, Z, W, G = S.CancellationToken.None) {
						this.h.trace(
							`extHostWorkspace#findTextInFiles: textSearch, extension: ${W.value}, entryPoint: findTextInFiles`,
						);
						const fe =
								typeof U.previewOptions > "u"
									? { matchLines: 100, charsPerLine: 1e4 }
									: U.previewOptions,
							ae = z(f.GlobPattern.from(U.include)),
							Se =
								typeof U.exclude == "string"
									? U.exclude
									: U.exclude
										? U.exclude.pattern
										: void 0,
							he = {
								ignoreSymlinks:
									typeof U.followSymlinks == "boolean"
										? !U.followSymlinks
										: void 0,
								disregardIgnoreFiles:
									typeof U.useIgnoreFiles == "boolean"
										? !U.useIgnoreFiles
										: void 0,
								disregardGlobalIgnoreFiles:
									typeof U.useGlobalIgnoreFiles == "boolean"
										? !U.useGlobalIgnoreFiles
										: void 0,
								disregardParentIgnoreFiles:
									typeof U.useParentIgnoreFiles == "boolean"
										? !U.useParentIgnoreFiles
										: void 0,
								disregardExcludeSettings:
									typeof U.useDefaultExcludes == "boolean"
										? !U.useDefaultExcludes
										: !0,
								disregardSearchExcludeSettings:
									typeof U.useSearchExclude == "boolean"
										? !U.useSearchExclude
										: !0,
								fileEncoding: U.encoding,
								maxResults: U.maxResults,
								previewOptions: fe,
								surroundingContext: U.afterContext,
								includePattern: ae?.pattern,
								excludePattern: Se ? [{ pattern: Se }] : void 0,
							},
							_ = (oe, ke) => {
								(0, m.$q7)(oe)
									? Z({
											uri: ke,
											preview: {
												text: oe.previewText,
												matches: (0, e.$5b)(
													oe.rangeLocations,
													(ge) =>
														new o.$pbb(
															ge.preview.startLineNumber,
															ge.preview.startColumn,
															ge.preview.endLineNumber,
															ge.preview.endColumn,
														),
												),
											},
											ranges: (0, e.$5b)(
												oe.rangeLocations,
												(ge) =>
													new o.$pbb(
														ge.source.startLineNumber,
														ge.source.startColumn,
														ge.source.endLineNumber,
														ge.source.endColumn,
													),
											),
										})
									: Z({ uri: ke, text: oe.text, lineNumber: oe.lineNumber });
							};
						return this.findTextInFilesBase(
							B,
							[{ options: he, folder: ae?.folder }],
							_,
							G,
						);
					}
					$handleTextSearchResult(B, U) {
						this.u[U]?.(B);
					}
					async save(B) {
						const U = await this.o.$save(B, { saveAs: !1 });
						return d.URI.revive(U);
					}
					async saveAs(B) {
						const U = await this.o.$save(B, { saveAs: !0 });
						return d.URI.revive(U);
					}
					saveAll(B) {
						return this.o.$saveAll(B);
					}
					resolveProxy(B) {
						return this.o.$resolveProxy(B);
					}
					lookupAuthorization(B) {
						return this.o.$lookupAuthorization(B);
					}
					lookupKerberosAuthorization(B) {
						return this.o.$lookupKerberosAuthorization(B);
					}
					loadCertificates() {
						return this.o.$loadCertificates();
					}
					get trusted() {
						return this.v;
					}
					requestWorkspaceTrust(B) {
						return this.o.$requestWorkspaceTrust(B);
					}
					$onDidGrantWorkspaceTrust() {
						this.v || ((this.v = !0), this.g.fire());
					}
					registerEditSessionIdentityProvider(B, U) {
						if (this.w.has(B))
							throw new Error(
								`A provider has already been registered for scheme ${B}`,
							);
						this.w.set(B, U);
						const Z = this.t.transformOutgoingScheme(B),
							W = this.D++;
						return (
							this.o.$registerEditSessionIdentityProvider(W, Z),
							(0, P.$Yc)(() => {
								this.w.delete(B),
									this.o.$unregisterEditSessionIdentityProvider(W);
							})
						);
					}
					async $getEditSessionIdentifier(B, U) {
						this.h.info(
							"Getting edit session identifier for workspaceFolder",
							B,
						);
						const Z = await this.resolveWorkspaceFolder(d.URI.revive(B));
						if (!Z) {
							this.h.warn("Unable to resolve workspace folder");
							return;
						}
						this.h.info(
							"Invoking #provideEditSessionIdentity for workspaceFolder",
							Z,
						);
						const W = this.w.get(Z.uri.scheme);
						if (
							(this.h.info(
								`Provider for scheme ${Z.uri.scheme} is defined: `,
								!!W,
							),
							!W)
						)
							return;
						const G = await W.provideEditSessionIdentity(Z, U);
						if (
							(this.h.info("Provider returned edit session identifier: ", G),
							!!G)
						)
							return G;
					}
					async $provideEditSessionIdentityMatch(B, U, Z, W) {
						this.h.info(
							"Getting edit session identifier for workspaceFolder",
							B,
						);
						const G = await this.resolveWorkspaceFolder(d.URI.revive(B));
						if (!G) {
							this.h.warn("Unable to resolve workspace folder");
							return;
						}
						this.h.info(
							"Invoking #provideEditSessionIdentity for workspaceFolder",
							G,
						);
						const fe = this.w.get(G.uri.scheme);
						if (
							(this.h.info(
								`Provider for scheme ${G.uri.scheme} is defined: `,
								!!fe,
							),
							!fe)
						)
							return;
						const ae = await fe.provideEditSessionIdentityMatch?.(U, Z, W);
						if (
							(this.h.info(
								"Provider returned edit session identifier match result: ",
								ae,
							),
							!!ae)
						)
							return ae;
					}
					getOnWillCreateEditSessionIdentityEvent(B) {
						return (U, Z, W) => {
							const G = function (ae) {
								U.call(Z, ae);
							};
							return (G.extension = B), this.F.event(G, void 0, W);
						};
					}
					async $onWillCreateEditSessionIdentity(B, U, Z) {
						const W = await this.resolveWorkspaceFolder(d.URI.revive(B));
						if (W === void 0)
							throw new Error("Unable to resolve workspace folder");
						await this.F.fireAsync({ workspaceFolder: W }, U, async (G, fe) => {
							const ae = Date.now();
							await Promise.resolve(G),
								Date.now() - ae > Z &&
									this.h.warn(
										"SLOW edit session create-participant",
										fe.extension.identifier,
									);
						}),
							U.isCancellationRequested;
					}
					registerCanonicalUriProvider(B, U) {
						if (this.G.has(B))
							throw new Error(
								`A provider has already been registered for scheme ${B}`,
							);
						this.G.set(B, U);
						const Z = this.t.transformOutgoingScheme(B),
							W = this.D++;
						return (
							this.o.$registerCanonicalUriProvider(W, Z),
							(0, P.$Yc)(() => {
								this.G.delete(B), this.o.$unregisterCanonicalUriProvider(W);
							})
						);
					}
					async provideCanonicalUri(B, U, Z) {
						const W = this.G.get(B.scheme);
						if (!W) return;
						const G = await W.provideCanonicalUri?.(d.URI.revive(B), U, Z);
						if (G) return G;
					}
					async $provideCanonicalUri(B, U, Z) {
						return this.provideCanonicalUri(
							d.URI.revive(B),
							{ targetScheme: U },
							Z,
						);
					}
				};
				(t.$l9 = M),
					(t.$l9 = M =
						wt(
							[
								rt(0, s.$08),
								rt(1, u.$98),
								rt(2, a.$88),
								rt(3, h.$ik),
								rt(4, w.$j9),
							],
							M,
						)),
					(t.$m9 = (0, c.$Mi)("IExtHostWorkspace"));
				function z(H) {
					let B, U;
					if (H)
						return (
							typeof H == "string"
								? (B = H)
								: ((B = H.pattern), (U = d.URI.revive(H.baseUri))),
							{ pattern: B, folder: U }
						);
				}
				function Q(H) {
					return (
						H?.map((B) => {
							if (typeof B == "string")
								return B === "" ? void 0 : { pattern: B, uri: void 0 };
							{
								const U = z(B);
								return U ? { pattern: U.pattern, uri: U.folder } : void 0;
							}
						}) ?? []
					).filter((B) => !!B);
				}
			},
		),
		