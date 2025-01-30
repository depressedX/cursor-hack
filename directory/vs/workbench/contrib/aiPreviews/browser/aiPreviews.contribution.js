import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/symbolic_context_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../editor/contrib/folding/browser/indentRangeProvider.js';
import '../../../../editor/contrib/folding/browser/syntaxRangeProvider.js';
import '../../../../editor/contrib/gotoSymbol/browser/goToSymbol.js';
import '../../../../editor/contrib/gotoSymbol/browser/referencesModel.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/workspace/common/workspace.js';
import './renderPreview.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/ai/browser/symbolContextService.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/constants.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[4238],
			he([
				1, 0, 643, 83, 7, 33, 3, 9, 47, 56, 65, 48, 152, 69, 42, 350, 752, 660,
				414, 541, 20, 5, 45, 25, 4237, 137, 118, 1290, 359, 75, 58, 10,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*symbolic_context_pb*/,
				i /*utils_pb*/,
				w /*dom*/,
				E /*cancellation*/,
				C /*lifecycle*/,
				d /*uri*/,
				m /*uuid*/,
				r /*editorBrowser*/,
				u /*codeEditorService*/,
				a /*position*/,
				h /*languageConfigurationRegistry*/,
				c /*languageFeatures*/,
				n /*resolverService*/,
				g /*folding*/,
				p /*indentRangeProvider*/,
				o /*syntaxRangeProvider*/,
				f /*goToSymbol*/,
				b /*referencesModel*/,
				s /*extensions*/,
				l /*instantiation*/,
				y /*reactiveStorageService*/,
				$ /*workspace*/,
				v /*renderPreview*/,
				S /*aiMiscServices*/,
				I /*aiService*/,
				T /*symbolContextService*/,
				P /*gitContextService*/,
				k /*window*/,
				L /*constants*/,
				D /*configuration*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iZc = e.$hZc = void 0),
					(w = mt(w));
				const M = !1,
					N = (q, ...V) => {
						M && console.log("[ai preview] " + q, ...V);
					};
				let A = class extends C.$1c {
					constructor(V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.g = V),
							(this.h = G),
							(this.j = K),
							(this.m = J),
							(this.n = W),
							(this.q = X),
							(this.r = Y),
							(this.s = ie),
							(this.t = ne),
							(this.b = 600),
							(this.c = !0),
							(this.u = null),
							(this.z = null),
							(this.C = null),
							(this.F = null),
							(this.G = !0),
							(this.H = (_) => {
								if (_.ctrlKey || _.metaKey || _.altKey || _.key !== "Shift") {
									N(
										"Key down ignored due to ctrl/meta/alt key or non-Shift key",
									);
									return;
								}
								if (this.c === !1) {
									N("Previews are disabled, ignoring Shift key down");
									return;
								}
								if (_.key === "Shift") {
									if (this.G) {
										N(
											"Shift key down ignored because previews are already enabled",
										);
										return;
									}
									N("Shift key down detected, enabling previews"),
										(this.G = !0),
										(this.u = Date.now()),
										(this.C = k.$Bfb.setTimeout(async () => {
											this.u !== null && Date.now() - this.u >= this.b - 10
												? (N("Shift held long enough, starting preview"),
													await this.start(),
													(this.z = new E.$Ce()))
												: N("Shift not held long enough, not starting preview");
										}, this.b));
								}
								_.key !== "Shift" &&
									(this.z !== null || this.C !== null) &&
									(N("Non-Shift key down detected, disabling previews"),
									(this.G = !1),
									this.J());
							}),
							(this.I = (_) => {
								_.key === "Shift"
									? (Date.now() - (this.u ?? 0) < this.b && this.J(),
										(this.G = !0))
									: (this.G = !1);
							}),
							(this.L = []),
							(this.M = new C.$Zc()),
							(this.N = ["j", "k", "enter", "arrowup", "arrowdown"]);
						const ee = w.getWindows();
						this.D({
							dispose: () => {
								for (const _ of ee)
									_.window.document.removeEventListener("keydown", this.H),
										_.window.document.removeEventListener("keyup", this.I);
							},
						});
						for (const _ of ee)
							_.window.document.addEventListener("keydown", this.H),
								_.window.document.addEventListener("keyup", this.I);
						this.updateConfig(),
							this.D(
								this.t.onDidChangeConfiguration((_) => {
									_.affectsConfiguration(L.$AW) && this.updateConfig();
								}),
							);
					}
					updateConfig() {
						this.c = this.t.getValue(L.$AW);
					}
					J() {
						this.z !== null && this.z.cancel(),
							this.C !== null && (k.$Bfb.clearTimeout(this.C), (this.C = null)),
							(this.u = null);
					}
					async clear() {
						for (const V of this.L) V.dispose();
						return this.M.clear(), (this.L = []), Promise.resolve();
					}
					async onStartup() {}
					async shouldBeDisabled(V) {
						if (V === null || V.hasTextFocus() === !1) return !0;
						const G = V.getModel()?.uri.scheme,
							K = V.getModel()?.uri.fsPath.split(".").pop();
						return (
							G !== "file" ||
							K === "json" ||
							K === "toml" ||
							K === "ini" ||
							K === "md" ||
							K === "sh" ||
							K === "txt" ||
							K === "yaml" ||
							K === "yml" ||
							K === "xml" ||
							K === "csv" ||
							K === "log" ||
							K === "cfg" ||
							K === "conf" ||
							K === "properties"
						);
					}
					async start() {
						if ((N("starting"), this.c === !1)) {
							N("Previews are disabled");
							return;
						}
						if (
							(this.L.length > 0 && (N("Clearing shown widgets"), this.clear()),
							this.G == !1)
						) {
							N("Preview feature is disabled"), this.J();
							return;
						}
						const V = this.g.getFocusedCodeEditor();
						if (V === null) {
							N("No current code editor found");
							return;
						}
						if (await this.shouldBeDisabled(V)) {
							N("Preview should be disabled for the current editor");
							return;
						}
						this.F = new E.$Ce();
						const K = this.F.token,
							J = V.getPosition(),
							W = V.getModel(),
							X = W?.uri;
						if (J === null || X == null || W === null) {
							N("Missing cursor position, URI, or model");
							return;
						}
						const Y = this.s.getSymbolContextForSymbolAtThisPositionProto({
								symbol: { uri: X, position: J },
								model: W,
								cancellationOptions: { timeout: 5e3, token: K },
								ctxtInfo: { getRawText: !0 },
							}),
							ie = this.O(J, K, W),
							[ne, ee] = await Promise.all([Y, ie]);
						if ((0, T.$Jfc)(ne) && (ee === void 0 || ee.length === 0)) {
							N("Symbol context is empty and no files are using this symbol");
							return;
						}
						new Promise((_) => setTimeout(_, 0)).then(() => {
							if (this.G == !1) {
								N("Preview feature was disabled before showing the preview"),
									this.J();
								return;
							}
							this.showPreview({
								editor: V,
								cursorPosition: J,
								symbolAndContext: ne,
								usedInFiles: ee,
							});
						});
					}
					async showPreview({
						editor: V,
						cursorPosition: G,
						symbolAndContext: K,
						usedInFiles: J,
					}) {
						const W = (0, m.$9g)(),
							X = this.r.createInstance(H, W, G, K, J, V);
						V.addContentWidget(X);
						const Y = this.M;
						Y.add(V.onDidChangeCursorPosition(() => this.clear())),
							Y.add(V.onDidChangeCursorSelection(() => this.clear())),
							Y.add(V.onWillChangeModel(() => this.clear())),
							Y.add(V.onDidChangeModelContent(() => this.clear())),
							Y.add(V.onDidLayoutChange(() => this.clear())),
							Y.add(V.onDidScrollChange(() => this.clear())),
							Y.add(V.onDidDispose(() => this.clear())),
							Y.add(
								V.onKeyDown((ie) => {
									this.N.includes(ie.browserEvent.key.toLowerCase()) === !1 &&
										this.clear();
								}),
							),
							this.L.push(X);
					}
					async O(V, G, K) {
						let W;
						if (K === void 0) {
							const ie = this.g.getFocusedCodeEditor()?.getModel();
							if (ie == null) return;
							W = ie;
						} else W = K;
						const X = await x(() =>
							(0, f.$TOb)(this.q.referenceProvider, W, V, !0, !1, G),
						);
						return X.length === 0
							? void 0
							: X.map((ie) => ({ uri: ie.uri, range: ie.range }));
					}
					async P(V) {
						const G = new Map();
						for (const X of V) {
							const Y = X.uri;
							G.has(Y.path) || G.set(Y.path, []), G.get(Y.path)?.push(X);
						}
						const K = [...G.entries()].slice(0, 10),
							J = async ([X, Y]) => {
								const ie = d.URI.file(X),
									ne = await this.h.createModelReference(ie);
								try {
									const ee = ne.object.textEditorModel;
									if (this.q.foldingRangeProvider.all(ee).length == 0)
										return [];
									const te = await this.Q(ee);
									return te
										? Y.slice(0, 20)
												.map((Z) => this.R(ee, te, Z))
												.filter((Z) => Z !== void 0)
										: [];
								} finally {
									ne.dispose();
								}
							};
						return (await Promise.all(K.map(J))).flat();
					}
					async Q(V) {
						const G = { limit: 5e3, update: () => {} },
							K = new p.$PNb(V, this.n, G);
						let J = K;
						const W = g.$ZNb.getFoldingRangeProviders(this.q, V);
						W.length > 0 &&
							(J.dispose(), (J = new o.$XNb(V, W, () => {}, G, K)));
						const X = await J.compute(E.CancellationToken.None);
						return J.dispose(), X ?? void 0;
					}
					R(V, G, K) {
						if (K.range === void 0) {
							console.error(
								"No target selection range found for ref " +
									JSON.stringify(K, null, 2),
							);
							return;
						}
						const J = this.j.asRelativePath(V.uri),
							W = V.getLinesContent(),
							X = F(K.range.startLineNumber, G, J, W);
						return new t.$4t({
							range: new i.$Fs({
								startLineNumber: K.range.startLineNumber,
								startColumn: K.range.startColumn,
								endLineNumberInclusive: K.range.endLineNumber,
								endColumn: K.range.endColumn,
							}),
							reference: X,
						});
					}
				};
				(e.$hZc = A),
					(e.$hZc = A =
						Ne(
							[
								j(0, u.$dtb),
								j(1, n.$MO),
								j(2, $.$Vi),
								j(3, I.$Nfc),
								j(4, h.$aN),
								j(5, c.$k3),
								j(6, l.$Li),
								j(7, T.$Kfc),
								j(8, D.$gj),
							],
							A,
						));
				function R(q, V) {
					const G = [];
					if (V) {
						let K = V.findRange(q),
							J = 1;
						for (; K >= 0; ) {
							const W = V.toRegion(K);
							G.push(W), J++, (K = W.parentIndex);
						}
					}
					return G;
				}
				function O(q) {
					const V = [];
					let G = null;
					q = q.sort((K, J) => K[0] - J[0]);
					for (const K of q)
						G
							? G[1] + 1 >= K[0]
								? (G[1] = Math.max(G[1], K[1]))
								: (V.push(G), (G = K))
							: (G = K);
					return G && V.push(G), V;
				}
				function B(...q) {
					return O(q.flat());
				}
				function U(q, V, G) {
					return new t.$5t({
						relativeWorkspacePath: V,
						totalLines: G.length,
						snippets: q.map(
							(K) =>
								new t.$6t({
									startLineNumber: K.lines[0],
									endLineNumber: K.lines[1],
									lines: K.content,
								}),
						),
					});
				}
				function z(q, V, G) {
					const K = q.map(([J, W]) => ({
						lines: [J, W],
						content: G?.slice(J - 1, W) || [],
					}));
					return U(K, V, G);
				}
				function F(q, V, G, K) {
					const J = R(q, V);
					if (J.length == 0) return U([], G, K);
					const W = J[0],
						X = [[W.startLineNumber, W.endLineNumber + 1]],
						Y = J.slice(1).map((ee) => [
							ee.startLineNumber,
							ee.startLineNumber,
						]),
						ie = J.slice(1).map((ee) => [
							ee.endLineNumber + 1,
							ee.endLineNumber + 1,
						]),
						ne = B(X, Y, ie);
					return z(ne, G, K);
				}
				(0, s.$lK)(S.$nfc, A, s.InstantiationType.Eager);
				async function x(q) {
					const V = await q(),
						G = new b.$pNb(V, ""),
						K = G.references.map((J) => J.link);
					return G.dispose(), K;
				}
				let H = class extends C.$1c {
					static {
						this.b = "editor.contrib.AiPreviewWidgets";
					}
					constructor(V, G, K, J, W, X, Y, ie) {
						super(),
							(this.s = X),
							(this.t = Y),
							(this.u = ie),
							(this.allowEditorOverflow = !0),
							(this.h = C.$1c.None),
							(this.n = !1),
							(this.q = null),
							(this.r = null),
							(this.c = V),
							(this.j = W),
							(this.m = G),
							(this.g = w.$("div.aiPreviewWidget")),
							this.update(),
							this.g?.addEventListener(
								"click",
								(ye) => {
									ye.stopPropagation();
								},
								!1,
							);
						const ne = new E.$Ce();
						(this.q = ne), this.D(ne);
						const ee = () => {
							this.n = !0;
						};
						let _ = "",
							te = "",
							Q = "",
							Z;
						const [se] = K?.definitions ?? [];
						if (se) {
							const { relativeWorkspacePath: ye, symbol: ue } = se;
							if (!ue) {
								console.log("[ai preview] ?? no symbol found for context");
								return;
							}
							(_ = ue.name),
								(te = ye),
								(Q = ye.split("/").pop() || ""),
								(Z = ue.range);
						}
						const re = this.j.getModel(),
							le = re?.uri.fsPath || "",
							oe = re?.uri.path.split("/").pop() || "",
							ae = K?.originalSymbolNameAndSymbolRange.range,
							$e = (
								J?.reduce(
									(ye, ue) =>
										ye.some((fe) => fe.uri.path === ue.uri.path)
											? ye
											: [...ye, { ...ue, ranges: [ue.range] }],
									[],
								) || []
							)?.map((ye) => ({
								fileName: ye.uri.path.split("/").pop() || "",
								path: ye.uri.path,
								ranges: ye.ranges,
							}));
						this.h = (0, v.$gZc)(this.g, this.s, {
							word: _,
							closePopup: ee,
							source: { fileName: Q, path: te, range: Z },
							target: { fileName: oe, path: le, range: ae },
							cursorPosition: G,
							realContextProto: K,
							contexts: K?.definitions ?? [],
							relatedFiles: $e ?? [],
							hoverDetails: K?.hoverDetails,
						});
					}
					getId() {
						return this.c;
					}
					cancel() {
						this.q?.cancel();
					}
					update() {
						const G = this.j.getModel();
						if (!G) {
							(this.n = !0), (this.r = null);
							return;
						}
						const K = G.getWordAtPosition(this.m);
						if (this.j.getScrolledVisiblePosition(this.m) === null) {
							(this.n = !0), (this.r = null);
							return;
						}
						(this.r = new a.$hL(
							this.m.lineNumber,
							K ? K.startColumn : this.m.column,
						)),
							(this.g.style.width = "360px"),
							(this.g.style.height = "auto"),
							(this.g.style.zIndex = "1000");
					}
					getDomNode() {
						return this.g;
					}
					getPosition() {
						return this.r
							? {
									position: this.r,
									preference: [
										r.ContentWidgetPositionPreference.BELOW,
										r.ContentWidgetPositionPreference.ABOVE,
									],
								}
							: null;
					}
					dispose() {
						this.h.dispose(),
							this.q?.dispose(),
							(this.r = null),
							this.j.removeContentWidget(this),
							this.g?.remove(),
							this.g?.parentNode?.removeChild(this.g),
							super.dispose();
					}
				};
				(e.$iZc = H),
					(e.$iZc = H = Ne([j(5, l.$Li), j(6, y.$0zb), j(7, P.$$Db)], H));
			},
		),
		