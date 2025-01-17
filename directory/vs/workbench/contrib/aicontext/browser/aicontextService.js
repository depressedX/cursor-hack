import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/fuzzyScorer.js';
import '../../../../base/common/map.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../search/browser/anythingQuickAccess.js';
import '../../../services/ai/browser/aiService.js';
import '../../recentFilesTrackerService/browser/recentFilesTrackerService.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[1964],
			he([1, 0, 148, 3, 33, 322, 59, 65, 22, 20, 5, 45, 721, 118, 560, 47, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vcc = void 0),
					(e.$Vcc = (0, u.$Mi)("IAiContextService"));
				let o = class extends i.$1c {
					constructor(b, s, l, y, $, v, S) {
						super(),
							(this.n = b),
							(this.q = s),
							(this.r = l),
							(this.s = y),
							(this.t = $),
							(this.u = v),
							(this.w = S),
							(this.f = new Map()),
							(this.g = 5 * 60 * 1e3),
							(this.h = []),
							(this.j = !1),
							(this.c = this.n.createInstance(h.$S9b)),
							this.z(),
							this.D(
								this.t.onChangeEffectManuallyDisposed({
									deps: [
										() => this.t.applicationUserPersistentStorage.personalDocs,
									],
									onChange: () => this.z(),
								}),
							),
							this.D(
								this.t.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.t.applicationUserPersistentStorage
												.shouldShowAtSymbolSuggestions,
									],
									onChange: () => {
										this.t.applicationUserPersistentStorage
											.shouldShowAtSymbolSuggestions && this.z();
									},
								}),
							);
					}
					async findClosestFiles(b, s, l = new w.$Ce().token) {
						const y = `${b}:${s.toString()}`,
							$ = this.f.get(y),
							v = Date.now();
						if ($ && v - $.timestamp < this.g) return $.result;
						this.f.forEach((P, k) => {
							v - P.timestamp >= this.g && this.f.delete(k);
						});
						const T = (await this.c.getFilePicks((0, E.$hs)(b), new C.$Gc(), l))
							.filter((P) => "resource" in P && !!P.resource)
							.map((P) => ({
								pick: P,
								similarity: this.y(P.resource.path, s.fsPath),
							}))
							.sort((P, k) => k.similarity - P.similarity)
							.map((P) => P.pick.resource)
							.filter((P) => !!P);
						return this.f.set(y, { result: T, timestamp: v }), T;
					}
					async retrieveAtSymbolSuggestions(b) {
						this.m && this.m.abort(), (this.m = new AbortController());
						const s = this.m.signal;
						try {
							const $ =
								(
									this.q.getActiveCodeEditor() || this.q.getFocusedCodeEditor()
								)?.getModel()?.uri ?? this.w.getWorkspace()?.folders[0]?.uri;
							if (!$) return [];
							const v = await this.findClosestFiles("package.json", $),
								S = await this.findClosestFiles("Cargo.toml", $),
								I = v[0],
								T = S[0],
								[P, k] = await Promise.all([
									this.r.readFile(I),
									this.r.readFile(T),
								]),
								L = P.value.toString(),
								D = L ? JSON.parse(L) : {},
								M = D.dependencies || {},
								N = D.devDependencies || {},
								A = D.peerDependencies || {},
								R = k.value.toString(),
								B = this.C(R).dependencies || {},
								U = [];
							[
								...Object.keys(M),
								...(!1 ? [...Object.keys(N), ...Object.keys(A)] : []),
							].forEach((J) => {
								U.push(new t.$9D({ name: J, fromFile: "package.json" }));
							}),
								Object.entries(B).forEach(([J, W]) => {
									U.push(new t.$9D({ name: J, fromFile: "Cargo.toml" }));
								});
							const F = [];
							for (let J = 0; J < this.h.length; J++) {
								const W = this.h[J];
								W.metadata &&
									F.push({
										index: J,
										text: W.metadata.docName + " - " + W.metadata?.prefixUrl,
										type: "documentation",
										docSelection: {
											docId: W.docIdentifier,
											name: W.metadata.docName,
											url: W.metadata.prefixUrl,
											uuid: (0, g.$9g)(),
										},
									});
							}
							const x = await this.s.getCurrentFileInfo($),
								H = new t.$0D({
									atSymbolDependencies: U,
									currentFileInfo: x,
									atSymbolOptions: F,
									userQuery: b,
								});
							if (!H || !F.length) return [];
							const V = await (await this.s.aiClient()).getAtSymbolSuggestions(
									H,
									{ signal: s },
								),
								{ indices: G } = V,
								K = G.map((J) => F[J]).filter((J) => !!J);
							return console.log(V.explanation), K;
						} catch (l) {
							return (
								l.name === "AbortError"
									? console.log("Request was aborted")
									: console.error("Error in retrieveAtSymbolSuggestions:", l),
								[]
							);
						} finally {
							this.m = void 0;
						}
					}
					y(b, s) {
						if (b === s) return 1;
						const l = b.split("/"),
							y = s.split("/"),
							$ = Math.min(l.length, y.length),
							v = l.slice(0, $).findIndex((S, I) => S !== y[I]);
						return v === -1
							? $ / Math.max(l.length, y.length)
							: v / Math.max(l.length, y.length);
					}
					async z() {
						const b = await this.s.availableDocs({
							additionalDocIdentifiers:
								this.t.applicationUserPersistentStorage.personalDocs.map(
									(s) => s.identifier,
								),
						});
						(this.h = b), (this.j = !0);
					}
					C(b) {
						function s(P) {
							if (P !== void 0)
								return (
									(P = P.trim()),
									P === "true"
										? !0
										: P === "false"
											? !1
											: P === "null"
												? null
												: (P.startsWith('"') && P.endsWith('"')) ||
														(P.startsWith("'") && P.endsWith("'"))
													? P.slice(1, -1)
													: isNaN(Number(P))
														? P.startsWith("{") && P.endsWith("}")
															? l(P.slice(1, -1))
															: P.startsWith("[") && P.endsWith("]")
																? P.slice(1, -1)
																		.split(",")
																		.map((k) => s(k.trim()))
																: P
														: Number(P)
								);
						}
						function l(P) {
							const k = {},
								L = P.split(",");
							for (const D of L) {
								const M = D.split("=");
								if (M.length < 2) continue;
								const N = M[0].trim(),
									A = M.slice(1).join("=").trim();
								N && A !== void 0 && (k[N] = s(A));
							}
							return k;
						}
						const y = {},
							$ = b.split(`
`);
						let v = y,
							S = null,
							I = "";
						function T(P, k) {
							S !== null ? S.push(k) : (v[P] = k);
						}
						for (let P = 0; P < $.length; P++) {
							const k = $[P].trim();
							if (!(k === "" || k.startsWith("#"))) {
								if (k.startsWith("[") && k.endsWith("]")) {
									const L = k.slice(1, -1).split(".");
									v = y;
									for (const D of L) v[D] || (v[D] = {}), (v = v[D]);
									S = null;
									continue;
								}
								if (k.includes("=")) {
									const [L, ...D] = k.split("=");
									I = L.trim();
									let M = D.join("=").trim();
									if (M.startsWith('"') && !M.endsWith('"')) {
										for (; !$[++P].trim().endsWith('"'); )
											M +=
												`
` + $[P];
										M +=
											`
` + $[P].trim();
									}
									if (M.startsWith("{") && !M.endsWith("}")) {
										for (; !$[++P].trim().endsWith("}"); ) M += $[P];
										M += $[P].trim();
									}
									if (M.startsWith("[") && !M.endsWith("]")) {
										for (S = [], T(I, S); !$[++P].trim().endsWith("]"); ) {
											const A = s($[P].trim());
											A !== void 0 && S.push(A);
										}
										const N = s($[P].trim().slice(0, -1));
										N !== void 0 && S.push(N), (S = null);
									} else T(I, s(M));
								}
							}
						}
						return y;
					}
				};
				(o = Ne(
					[
						j(0, u.$Li),
						j(1, d.$dtb),
						j(2, m.$ll),
						j(3, c.$Nfc),
						j(4, a.$0zb),
						j(5, n.$lcc),
						j(6, p.$Vi),
					],
					o,
				)),
					(0, r.$lK)(e.$Vcc, o, r.InstantiationType.Delayed);
			},
		),
		