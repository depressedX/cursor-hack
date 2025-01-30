import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../amdX.js';
import '../../../../base/common/amd.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/color.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/encodedTokenAttributes.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/languages/supports/tokenization.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/extensionResourceLoader/common/extensionResourceLoader.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../environment/common/environmentService.js';
import './tokenizationSupport/textMateTokenizationSupport.js';
import './tokenizationSupport/tokenizationSupportWithLineLimit.js';
import './backgroundTokenization/threadedBackgroundTokenizerFactory.js';
import '../common/TMGrammarFactory.js';
import '../common/TMGrammars.js';
import '../../themes/common/workbenchThemeService.js';
define(
			de[3724],
			he([
				1, 0, 536, 455, 7, 24, 97, 29, 3, 23, 77, 12, 19, 28, 171, 74, 61, 913,
				4, 10, 546, 5, 34, 40, 84, 32, 78, 3669, 3670, 3662, 3675, 1877, 333,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*amdX*/,
				i /*amd*/,
				w /*dom*/,
				E /*arrays*/,
				C /*color*/,
				d /*errors*/,
				m /*lifecycle*/,
				r /*network*/,
				u /*observable*/,
				a /*platform*/,
				h /*resources*/,
				c /*types*/,
				n /*encodedTokenAttributes*/,
				g /*languages*/,
				p /*language*/,
				o /*tokenization*/,
				f /*nls*/,
				b /*configuration*/,
				s /*extensionResourceLoader*/,
				l /*instantiation*/,
				y /*log*/,
				$ /*notification*/,
				v /*progress*/,
				S /*telemetry*/,
				I /*environmentService*/,
				T /*textMateTokenizationSupport*/,
				P /*tokenizationSupportWithLineLimit*/,
				k /*threadedBackgroundTokenizerFactory*/,
				L /*TMGrammarFactory*/,
				D /*TMGrammars*/,
				M /*workbenchThemeService*/,
) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kyc = void 0),
					(w = mt(w)),
					(h = mt(h)),
					(c = mt(c)),
					(f = mt(f));
				let A = class extends m.$1c {
					static {
						N = this;
					}
					static {
						this.c = { sync: 0, async: 0 };
					}
					constructor(F, x, H, q, V, G, K, J, W, X) {
						super(),
							(this.y = F),
							(this.z = x),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.L = W),
							(this.M = X),
							(this.g = []),
							(this.h = []),
							(this.j = !1),
							(this.m = () => {}),
							(this.n = null),
							(this.q = null),
							(this.s = new m.$Zc()),
							(this.t = null),
							(this.u = null),
							(this.w = this.L.createInstance(
								k.$Iyc,
								(Y, ie, ne, ee, _) => this.$(Y, ie, ne, ee, !0, _),
								() => this.N(),
							)),
							(this.X = null),
							(this.f = w.$Rgb()),
							(this.f.className = "vscode-tokens-styles"),
							D.$Jyc.setHandler((Y) => this.P(Y)),
							this.W(this.z.getColorTheme(), !0),
							this.D(
								this.z.onDidColorThemeChange(() => {
									this.W(this.z.getColorTheme(), !1);
								}),
							),
							this.D(
								this.y.onDidRequestRichLanguageFeatures((Y) => {
									this.g.push(Y);
								}),
							);
					}
					N() {
						return !!this.H.getValue("editor.experimental.asyncTokenization");
					}
					O() {
						return !!this.H.getValue(
							"editor.experimental.asyncTokenizationVerification",
						);
					}
					P(F) {
						(this.n = null),
							this.q && (this.q.dispose(), (this.q = null)),
							this.s.clear(),
							(this.n = []);
						for (const x of F) {
							const H = x.value;
							for (const q of H) {
								const V = this.Q(x, q);
								if (V && (this.n.push(V), V.language)) {
									const G = new g.$kM(() => this.U(V.language));
									this.s.add(G),
										this.s.add(g.$lM.registerFactory(V.language, G));
								}
							}
						}
						this.w.setGrammarDefinitions(this.n);
						for (const x of this.g) g.$lM.getOrCreate(x);
					}
					Q(F, x) {
						if (!B(F.description.extensionLocation, x, F.collector, this.y))
							return null;
						const H = h.$nh(F.description.extensionLocation, x.path),
							q = Object.create(null);
						if (x.embeddedLanguages) {
							const J = Object.keys(x.embeddedLanguages);
							for (let W = 0, X = J.length; W < X; W++) {
								const Y = J[W],
									ie = x.embeddedLanguages[Y];
								typeof ie == "string" &&
									this.y.isRegisteredLanguageId(ie) &&
									(q[Y] = this.y.languageIdCodec.encodeLanguageId(ie));
							}
						}
						const V = Object.create(null);
						if (x.tokenTypes) {
							const J = Object.keys(x.tokenTypes);
							for (const W of J)
								switch (x.tokenTypes[W]) {
									case "string":
										V[W] = n.StandardTokenType.String;
										break;
									case "other":
										V[W] = n.StandardTokenType.Other;
										break;
									case "comment":
										V[W] = n.StandardTokenType.Comment;
										break;
								}
						}
						const G =
							x.language && this.y.isRegisteredLanguageId(x.language)
								? x.language
								: void 0;
						function K(J, W) {
							return !Array.isArray(J) || !J.every((X) => typeof X == "string")
								? W
								: J;
						}
						return {
							location: H,
							language: G,
							scopeName: x.scopeName,
							embeddedLanguages: q,
							tokenTypes: V,
							injectTo: x.injectTo,
							balancedBracketSelectors: K(x.balancedBracketScopes, ["*"]),
							unbalancedBracketSelectors: K(x.unbalancedBracketScopes, []),
							sourceExtensionId: F.description.id,
						};
					}
					startDebugMode(F, x) {
						if (this.j) {
							this.F.error(f.localize(12678, null));
							return;
						}
						(this.m = F),
							(this.j = !0),
							this.j &&
								this.I.withProgress(
									{
										location: v.ProgressLocation.Notification,
										buttons: [f.localize(12679, null)],
									},
									(H) => (
										H.report({ message: f.localize(12680, null) }),
										this.Y().then(
											(q) => (
												q.setDefaultDebugCall(!0),
												H.report({ message: f.localize(12681, null) }),
												new Promise((V, G) => {})
											),
										)
									),
									(H) => {
										this.Y().then((q) => {
											(this.m = () => {}),
												(this.j = !1),
												q.setDefaultDebugCall(!1),
												x();
										});
									},
								);
					}
					R() {
						return !!this.n;
					}
					async S() {
						if (this.q) return this.q;
						const [F, x] = await Promise.all([
								(0, t.$Tq)("vscode-textmate", "release/main.js"),
								this.Y(),
							]),
							H = Promise.resolve({
								createOnigScanner: (q) => x.createOnigScanner(q),
								createOnigString: (q) => x.createOnigString(q),
							});
						return this.q
							? this.q
							: ((this.q = new L.$yyc(
									{
										logTrace: (q) => this.G.trace(q),
										logError: (q, V) => this.G.error(q, V),
										readFile: (q) => this.C.readExtensionResource(q),
									},
									this.n || [],
									F,
									H,
								)),
								this.W(this.z.getColorTheme(), !0),
								this.q);
					}
					async U(F) {
						if (!this.y.isRegisteredLanguageId(F) || !this.R()) return null;
						try {
							const x = await this.S();
							if (!x.has(F)) return null;
							const H = this.y.languageIdCodec.encodeLanguageId(F),
								q = await x.createGrammar(F, H);
							if (!q.grammar) return null;
							const V = U("editor.maxTokenizationLineLength", F, -1, this.H),
								G = new T.$uyc(
									q.grammar,
									q.initialState,
									q.containsEmbeddedLanguages,
									(J, W) => this.w.createBackgroundTokenizer(J, W, V),
									() => this.O(),
									(J, W, X) => {
										this.$(J, F, q.sourceExtensionId, W, !1, X);
									},
									!0,
								),
								K = G.onDidEncounterLanguage((J) => {
									if (!this.h[J]) {
										const W = this.y.languageIdCodec.decodeLanguageId(J);
										(this.h[J] = !0), this.y.requestBasicLanguageFeatures(W);
									}
								});
							return new P.$vyc(H, G, K, V);
						} catch (x) {
							return (x.message && x.message === L.$xyc) || (0, d.$4)(x), null;
						}
					}
					W(F, x) {
						if (
							!x &&
							this.t &&
							this.u &&
							O(this.t.settings, F.tokenColors) &&
							(0, E.$yb)(this.u, F.tokenColorMap)
						)
							return;
						(this.t = { name: F.label, settings: F.tokenColors }),
							(this.u = F.tokenColorMap),
							this.q?.setTheme(this.t, this.u);
						const H = R(this.u),
							q = (0, o.$M2b)(H);
						(this.f.textContent = q),
							g.$lM.setColorMap(H),
							this.t && this.u && this.w.acceptTheme(this.t, this.u);
					}
					async createTokenizer(F) {
						if (!this.y.isRegisteredLanguageId(F)) return null;
						const x = await this.S();
						if (!x.has(F)) return null;
						const H = this.y.languageIdCodec.encodeLanguageId(F),
							{ grammar: q } = await x.createGrammar(F, H);
						return q;
					}
					Y() {
						return (
							this.X ||
								(this.X = (async () => {
									const [F, x] = await Promise.all([
										(0, t.$Tq)("vscode-oniguruma", "release/main.js"),
										this.Z(),
									]);
									return (
										await F.loadWASM({
											data: x,
											print: (H) => {
												this.m(H);
											},
										}),
										F
									);
								})()),
							this.X
						);
					}
					async Z() {
						return a.$r
							? await (
									await fetch(
										i.$V
											? (0, t.$Uq)("vscode-oniguruma", "release/onig.wasm")
											: r.$7g
													.asBrowserUri("vscode-oniguruma/../onig.wasm")
													.toString(!0),
									)
								).arrayBuffer()
							: await fetch(
									i.$W && this.J.isBuilt
										? r.$7g
												.asBrowserUri(
													`${r.$5g}/vscode-oniguruma/release/onig.wasm`,
												)
												.toString(!0)
										: r.$7g
												.asBrowserUri(
													`${r.$3g}/vscode-oniguruma/release/onig.wasm`,
												)
												.toString(!0),
								);
					}
					$(F, x, H, q, V, G) {
						const K = V ? "async" : "sync";
						N.c[K] > 50 ||
							(N.c[K] === 0 &&
								setTimeout(
									() => {
										N.c[K] = 0;
									},
									1e3 * 60 * 60,
								),
							N.c[K]++,
							this.M.publicLog2("editor.tokenizedLine", {
								timeMs: F,
								languageId: x,
								lineLength: q,
								fromWorker: V,
								sourceExtensionId: H,
								isRandomSample: G,
								tokenizationSetting: this.N() ? (this.O() ? 2 : 1) : 0,
							}));
					}
				};
				(e.$Kyc = A),
					(e.$Kyc =
						A =
						N =
							Ne(
								[
									j(0, p.$nM),
									j(1, M.$rRb),
									j(2, s.$bYb),
									j(3, $.$4N),
									j(4, y.$ik),
									j(5, b.$gj),
									j(6, v.$8N),
									j(7, I.$r8),
									j(8, l.$Li),
									j(9, S.$km),
								],
								A,
							));
				function R(z) {
					const F = [null];
					for (let x = 1, H = z.length; x < H; x++) F[x] = C.$UL.fromHex(z[x]);
					return F;
				}
				function O(z, F) {
					if (!F || !z || F.length !== z.length) return !1;
					for (let x = F.length - 1; x >= 0; x--) {
						const H = F[x],
							q = z[x];
						if (H.scope !== q.scope) return !1;
						const V = H.settings,
							G = q.settings;
						if (V && G) {
							if (
								V.fontStyle !== G.fontStyle ||
								V.foreground !== G.foreground ||
								V.background !== G.background
							)
								return !1;
						} else if (!V || !G) return !1;
					}
					return !0;
				}
				function B(z, F, x, H) {
					if (
						F.language &&
						(typeof F.language != "string" ||
							!H.isRegisteredLanguageId(F.language))
					)
						return (
							x.error(f.localize(12682, null, D.$Jyc.name, String(F.language))),
							!1
						);
					if (!F.scopeName || typeof F.scopeName != "string")
						return (
							x.error(
								f.localize(12683, null, D.$Jyc.name, String(F.scopeName)),
							),
							!1
						);
					if (!F.path || typeof F.path != "string")
						return (
							x.error(f.localize(12684, null, D.$Jyc.name, String(F.path))), !1
						);
					if (
						F.injectTo &&
						(!Array.isArray(F.injectTo) ||
							F.injectTo.some((V) => typeof V != "string"))
					)
						return (
							x.error(
								f.localize(
									12685,
									null,
									D.$Jyc.name,
									JSON.stringify(F.injectTo),
								),
							),
							!1
						);
					if (F.embeddedLanguages && !c.$ng(F.embeddedLanguages))
						return (
							x.error(
								f.localize(
									12686,
									null,
									D.$Jyc.name,
									JSON.stringify(F.embeddedLanguages),
								),
							),
							!1
						);
					if (F.tokenTypes && !c.$ng(F.tokenTypes))
						return (
							x.error(
								f.localize(
									12687,
									null,
									D.$Jyc.name,
									JSON.stringify(F.tokenTypes),
								),
							),
							!1
						);
					const q = h.$nh(z, F.path);
					return (
						h.$hh(q, z) ||
							x.warn(f.localize(12688, null, D.$Jyc.name, q.path, z.path)),
						!0
					);
				}
				function U(z, F, x, H) {
					return (0, u.observableFromEvent)(
						(q) =>
							H.onDidChangeConfiguration((V) => {
								V.affectsConfiguration(z, { overrideIdentifier: F }) && q(V);
							}),
						() => H.getValue(z, { overrideIdentifier: F }) ?? x,
					);
				}
			},
		),
		