import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/strings.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/contrib/suggest/browser/suggest.js';
import '../../../../nls.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/workspace/common/workspace.js';
import './snippetsFile.js';
import '../../../services/extensions/common/extensionsRegistry.js';
import '../../../services/language/common/languageService.js';
import './snippetCompletionProvider.js';
import '../../../../platform/extensionResourceLoader/common/extensionResourceLoader.js';
import '../../../../base/common/map.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/types.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../base/common/arrays.js';
define(
			de[1898],
			he([
				1, 0, 3, 19, 37, 61, 373, 4, 113, 22, 52, 34, 25, 805, 175, 701, 1752,
				546, 59, 21, 28, 5, 85, 152, 133, 24,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*resources*/,
				w /*strings*/,
				E /*language*/,
				C /*suggest*/,
				d /*nls*/,
				m /*environment*/,
				r /*files*/,
				u /*lifecycle*/,
				a /*log*/,
				h /*workspace*/,
				c /*snippetsFile*/,
				n /*extensionsRegistry*/,
				g /*languageService*/,
				p /*snippetCompletionProvider*/,
				o /*extensionResourceLoader*/,
				f /*map*/,
				b /*storage*/,
				s /*types*/,
				l /*instantiation*/,
				y /*textfiles*/,
				$ /*languageConfigurationRegistry*/,
				v /*userDataProfile*/,
				S /*arrays*/,
) {
				"use strict";
				var I, T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uYb = void 0),
					(e.$vYb = N),
					(i = mt(i));
				var P;
				(function (A) {
					function R(O, B, U) {
						if ((0, w.$jf)(B.path))
							return (
								O.collector.error(
									(0, d.localize)(
										9479,
										null,
										O.description.name,
										String(B.path),
									),
								),
								null
							);
						if ((0, w.$jf)(B.language) && !B.path.endsWith(".code-snippets"))
							return (
								O.collector.error(
									(0, d.localize)(
										9480,
										null,
										O.description.name,
										String(B.path),
									),
								),
								null
							);
						if (
							!(0, w.$jf)(B.language) &&
							!U.isRegisteredLanguageId(B.language)
						)
							return (
								O.collector.error(
									(0, d.localize)(
										9481,
										null,
										O.description.name,
										String(B.language),
									),
								),
								null
							);
						const z = O.description.extensionLocation,
							F = i.$nh(z, B.path);
						return i.$hh(F, z)
							? { language: B.language, location: F }
							: (O.collector.error(
									(0, d.localize)(
										9482,
										null,
										O.description.name,
										F.path,
										z.path,
									),
								),
								null);
					}
					(A.toValidSnippet = R),
						(A.snippetsContribution = {
							description: (0, d.localize)(9483, null),
							type: "array",
							defaultSnippets: [{ body: [{ language: "", path: "" }] }],
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											language: "${1:id}",
											path: "./snippets/${2:id}.json.",
										},
									},
								],
								properties: {
									language: {
										description: (0, d.localize)(9484, null),
										type: "string",
									},
									path: {
										description: (0, d.localize)(9485, null),
										type: "string",
									},
								},
							},
						}),
						(A.point = n.$n2.registerExtensionPoint({
							extensionPoint: "snippets",
							deps: [g.$qYb],
							jsonSchema: A.snippetsContribution,
						}));
				})(P || (P = {}));
				function k(A, R, O) {
					return (0, t.$Xc)(
						A.watch(R),
						A.onDidFilesChange((B) => {
							B.affects(R) && O();
						}),
					);
				}
				let L = class {
					static {
						I = this;
					}
					static {
						this.c = "snippets.ignoredSnippets";
					}
					constructor(R) {
						this.f = R;
						const O = R.get(I.c, b.StorageScope.PROFILE, "");
						let B;
						try {
							B = JSON.parse(O);
						} catch {}
						this.d = (0, s.$mg)(B) ? new Set(B) : new Set();
					}
					isIgnored(R) {
						return this.d.has(R);
					}
					updateIgnored(R, O) {
						let B = !1;
						this.d.has(R) && !O
							? (this.d.delete(R), (B = !0))
							: !this.d.has(R) && O && (this.d.add(R), (B = !0)),
							B &&
								this.f.store(
									I.c,
									JSON.stringify(Array.from(this.d)),
									b.StorageScope.PROFILE,
									b.StorageTarget.USER,
								);
					}
				};
				L = I = Ne([j(0, b.$lq)], L);
				let D = class {
					static {
						T = this;
					}
					static {
						this.c = "snippets.usageTimestamps";
					}
					constructor(R) {
						this.f = R;
						const O = R.get(T.c, b.StorageScope.PROFILE, "");
						let B;
						try {
							B = JSON.parse(O);
						} catch {
							B = [];
						}
						this.d = Array.isArray(B) ? new Map(B) : new Map();
					}
					getUsageTimestamp(R) {
						return this.d.get(R);
					}
					updateUsageTimestamp(R) {
						this.d.delete(R), this.d.set(R, Date.now());
						const O = [...this.d].slice(-100);
						this.f.store(
							T.c,
							JSON.stringify(O),
							b.StorageScope.PROFILE,
							b.StorageTarget.USER,
						);
					}
				};
				D = T = Ne([j(0, b.$lq)], D);
				let M = class {
					constructor(R, O, B, U, z, F, x, H, q, V, G) {
						(this.i = R),
							(this.j = O),
							(this.k = B),
							(this.l = U),
							(this.m = z),
							(this.n = F),
							(this.o = x),
							(this.p = H),
							(this.c = new t.$Zc()),
							(this.d = []),
							(this.f = new f.$Gc()),
							this.d.push(
								Promise.resolve(
									q.when(u.LifecyclePhase.Restored).then(() => {
										this.t(), this.w(), this.u();
									}),
								),
							),
							(0, C.$4Cb)(new p.$tYb(this.l, this, G)),
							(this.g = V.createInstance(L)),
							(this.h = V.createInstance(D));
					}
					dispose() {
						this.c.dispose();
					}
					isEnabled(R) {
						return !this.g.isIgnored(R.snippetIdentifier);
					}
					updateEnablement(R, O) {
						this.g.updateIgnored(R.snippetIdentifier, !O);
					}
					updateUsageTimestamp(R) {
						this.h.updateUsageTimestamp(R.snippetIdentifier);
					}
					q() {
						const R = this.d.slice(0);
						return (this.d.length = 0), Promise.all(R);
					}
					async getSnippetFiles() {
						return await this.q(), this.f.values();
					}
					async getSnippets(R, O) {
						await this.q();
						const B = [],
							U = [];
						if (R) {
							if (this.l.isRegisteredLanguageId(R))
								for (const z of this.f.values())
									U.push(
										z
											.load()
											.then((F) => F.select(R, B))
											.catch((F) => this.m.error(F, z.location.toString())),
									);
						} else
							for (const z of this.f.values())
								U.push(
									z
										.load()
										.then((F) => (0, S.$8b)(B, B.length, F.data))
										.catch((F) => this.m.error(F, z.location.toString())),
								);
						return await Promise.all(U), this.r(B, O);
					}
					getSnippetsSync(R, O) {
						const B = [];
						if (this.l.isRegisteredLanguageId(R))
							for (const U of this.f.values())
								U.load().catch((z) => {}), U.select(R, B);
						return this.r(B, O);
					}
					r(R, O) {
						const B = [];
						for (const U of R)
							(!U.prefix && !O?.includeNoPrefixSnippets) ||
								(!this.isEnabled(U) && !O?.includeDisabledSnippets) ||
								(typeof O?.fileTemplateSnippets == "boolean" &&
									O.fileTemplateSnippets !== U.isFileTemplate) ||
								B.push(U);
						return B.sort((U, z) => {
							let F = 0;
							if (!O?.noRecencySort) {
								const x = this.h.getUsageTimestamp(U.snippetIdentifier) ?? -1;
								F = (this.h.getUsageTimestamp(z.snippetIdentifier) ?? -1) - x;
							}
							return F === 0 && (F = this.s(U, z)), F;
						});
					}
					s(R, O) {
						return R.snippetSource < O.snippetSource
							? -1
							: R.snippetSource > O.snippetSource
								? 1
								: R.source < O.source
									? -1
									: R.source > O.source || R.name > O.name
										? 1
										: R.name < O.name
											? -1
											: 0;
					}
					t() {
						P.point.setHandler((R) => {
							for (const [O, B] of this.f)
								B.source === c.SnippetSource.Extension && this.f.delete(O);
							for (const O of R)
								for (const B of O.value) {
									const U = P.toValidSnippet(O, B, this.l);
									if (!U) continue;
									const z = this.f.get(U.location);
									if (z)
										z.defaultScopes
											? z.defaultScopes.push(U.language)
											: (z.defaultScopes = []);
									else {
										const F = new c.$fYb(
											c.SnippetSource.Extension,
											U.location,
											U.language ? [U.language] : void 0,
											O.description,
											this.n,
											this.p,
										);
										this.f.set(F.location, F),
											this.i.isExtensionDevelopment &&
												F.load().then(
													(x) => {
														x.data.some((H) => H.isBogous) &&
															O.collector.warn(
																(0, d.localize)(9486, null, O.description.name),
															);
													},
													(x) => {
														O.collector.warn(
															(0, d.localize)(
																9487,
																null,
																F.location.toString(),
															),
														);
													},
												);
									}
								}
						});
					}
					u() {
						const R = new t.$Zc(),
							O = () => {
								R.clear(), this.d.push(this.v(this.k.getWorkspace(), R));
							};
						this.c.add(R),
							this.c.add(this.k.onDidChangeWorkspaceFolders(O)),
							this.c.add(this.k.onDidChangeWorkbenchState(O)),
							O();
					}
					async v(R, O) {
						const B = R.folders.map(async (U) => {
							const z = U.toResource(".vscode");
							(await this.n.exists(z))
								? this.x(c.SnippetSource.Workspace, z, O)
								: O.add(
										this.n.onDidFilesChange((x) => {
											x.contains(z, r.FileChangeType.ADDED) &&
												this.x(c.SnippetSource.Workspace, z, O);
										}),
									);
						});
						await Promise.all(B);
					}
					async w() {
						const R = new t.$Zc(),
							O = async () => {
								R.clear();
								const B = this.j.currentProfile.snippetsHome;
								await this.n.createFolder(B),
									await this.x(c.SnippetSource.User, B, R);
							};
						this.c.add(R),
							this.c.add(
								this.j.onDidChangeCurrentProfile((B) =>
									B.join(
										(async () => {
											this.d.push(O());
										})(),
									),
								),
							),
							await O();
					}
					x(R, O, B) {
						const U = new t.$Zc(),
							z = async () => {
								if ((U.clear(), !!(await this.n.exists(O))))
									try {
										const F = await this.n.resolve(O);
										for (const x of F.children || [])
											U.add(this.y(x.resource, R));
									} catch (F) {
										this.m.error(
											`Failed snippets from folder '${O.toString()}'`,
											F,
										);
									}
							};
						return (
							B.add(
								this.o.files.onDidSave((F) => {
									i.$hh(F.model.resource, O) && z();
								}),
							),
							B.add(k(this.n, O, z)),
							B.add(U),
							z()
						);
					}
					y(R, O) {
						const B = i.$lh(R);
						if (O === c.SnippetSource.User && B === ".json") {
							const U = i.$kh(R).replace(/\.json/, "");
							this.f.set(R, new c.$fYb(O, R, [U], void 0, this.n, this.p));
						} else
							B === ".code-snippets" &&
								this.f.set(R, new c.$fYb(O, R, void 0, void 0, this.n, this.p));
						return { dispose: () => this.f.delete(R) };
					}
				};
				(e.$uYb = M),
					(e.$uYb = M =
						Ne(
							[
								j(0, m.$Ti),
								j(1, v.$P8),
								j(2, h.$Vi),
								j(3, E.$nM),
								j(4, a.$ik),
								j(5, r.$ll),
								j(6, y.$kZ),
								j(7, o.$bYb),
								j(8, u.$n6),
								j(9, l.$Li),
								j(10, $.$aN),
							],
							M,
						));
				function N(A, R) {
					const B = A.getLineContent(R.lineNumber).substr(0, R.column - 1),
						U = Math.max(0, B.length - 100);
					for (let z = B.length - 1; z >= U; z--) {
						const F = B.charAt(z);
						if (/\s/.test(F)) return B.substr(z + 1);
					}
					return U === 0 ? B : "";
				}
			},
		),
		