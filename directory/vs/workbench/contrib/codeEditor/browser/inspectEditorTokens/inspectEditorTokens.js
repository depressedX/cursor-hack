import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/charCode.js';
import '../../../../../base/common/color.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/editorBrowser.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/languages.js';
import '../../../../../editor/common/encodedTokenAttributes.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../services/textMate/common/TMHelper.js';
import '../../../../services/textMate/browser/textMateTokenizationFeature.js';
import '../../../../services/themes/common/workbenchThemeService.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../platform/theme/common/tokenClassificationRegistry.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../editor/contrib/semanticTokens/common/semanticTokensConfig.js';
import '../../../../../base/common/network.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../editor/common/services/treeSitterParserService.js';
import '../../../../../css!vs/workbench/contrib/codeEditor/browser/inspectEditorTokens/inspectEditorTokens.js';
define(
			de[3716],
			he([
				1, 0, 4, 7, 120, 97, 27, 3, 56, 46, 17, 74, 171, 61, 40, 1878, 841, 333,
				33, 778, 10, 1156, 23, 69, 763, 2400,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dom*/,
				w /*charCode*/,
				E /*color*/,
				C /*keyCodes*/,
				d /*lifecycle*/,
				m /*editorBrowser*/,
				r /*editorExtensions*/,
				u /*range*/,
				a /*languages*/,
				h /*encodedTokenAttributes*/,
				c /*language*/,
				n /*notification*/,
				g /*TMHelper*/,
				p /*textMateTokenizationFeature*/,
				o /*workbenchThemeService*/,
				f /*cancellation*/,
				b /*tokenClassificationRegistry*/,
				s /*configuration*/,
				l /*semanticTokensConfig*/,
				y /*network*/,
				$ /*languageFeatures*/,
				v /*treeSitterParserService*/,
) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(i = mt(i));
				const I = i.$;
				let T = class extends d.$1c {
					static {
						S = this;
					}
					static {
						this.ID = "editor.contrib.inspectEditorTokens";
					}
					static get(M) {
						return M.getContribution(S.ID);
					}
					constructor(M, N, A, R, O, B, U, z) {
						super(),
							(this.a = M),
							(this.b = N),
							(this.c = A),
							(this.f = O),
							(this.g = R),
							(this.h = B),
							(this.j = U),
							(this.m = z),
							(this.n = null),
							this.D(this.a.onDidChangeModel((F) => this.stop())),
							this.D(this.a.onDidChangeModelLanguage((F) => this.stop())),
							this.D(
								this.a.onKeyUp(
									(F) => F.keyCode === C.KeyCode.Escape && this.stop(),
								),
							);
					}
					dispose() {
						this.stop(), super.dispose();
					}
					launch() {
						this.n ||
							(this.a.hasModel() &&
								this.a.getModel().uri.scheme !== y.Schemas.vscodeNotebookCell &&
								(this.n = new L(
									this.a,
									this.b,
									this.c,
									this.g,
									this.f,
									this.h,
									this.j,
									this.m,
								)));
					}
					stop() {
						this.n && (this.n.dispose(), (this.n = null));
					}
					toggle() {
						this.n ? this.stop() : this.launch();
					}
				};
				T = S = Ne(
					[
						j(1, p.$N6b),
						j(2, v.$nV),
						j(3, c.$nM),
						j(4, o.$rRb),
						j(5, n.$4N),
						j(6, s.$gj),
						j(7, $.$k3),
					],
					T,
				);
				class P extends r.$itb {
					constructor() {
						super({
							id: "editor.action.inspectTMScopes",
							label: t.localize(4878, null),
							alias: "Developer: Inspect Editor Tokens and Scopes",
							precondition: void 0,
						});
					}
					run(M, N) {
						T.get(N)?.toggle();
					}
				}
				function k(D) {
					D.length > 40 &&
						(D = D.substr(0, 20) + "\u2026" + D.substr(D.length - 20));
					let M = "";
					for (let N = 0, A = D.length; N < A; N++) {
						const R = D.charCodeAt(N);
						switch (R) {
							case w.CharCode.Tab:
								M += "\u2192";
								break;
							case w.CharCode.Space:
								M += "\xB7";
								break;
							default:
								M += String.fromCharCode(R);
						}
					}
					return M;
				}
				class L extends d.$1c {
					static {
						this.a = "editor.contrib.inspectEditorTokensWidget";
					}
					constructor(M, N, A, R, O, B, U, z) {
						super(),
							(this.allowEditorOverflow = !0),
							(this.b = !1),
							(this.c = M),
							(this.f = R),
							(this.g = O),
							(this.h = N),
							(this.j = A),
							(this.m = B),
							(this.n = U),
							(this.q = z),
							(this.r = this.c.getModel()),
							(this.s = document.createElement("div")),
							(this.s.className = "token-inspect-widget"),
							(this.u = new f.$Ce()),
							this.w(this.c.getPosition()),
							this.D(
								this.c.onDidChangeCursorPosition((F) =>
									this.w(this.c.getPosition()),
								),
							),
							this.D(
								O.onDidColorThemeChange((F) => this.w(this.c.getPosition())),
							),
							this.D(
								U.onDidChangeConfiguration(
									(F) =>
										F.affectsConfiguration(
											"editor.semanticHighlighting.enabled",
										) && this.w(this.c.getPosition()),
								),
							),
							this.c.addContentWidget(this);
					}
					dispose() {
						(this.b = !0),
							this.c.removeContentWidget(this),
							this.u.cancel(),
							super.dispose();
					}
					getId() {
						return L.a;
					}
					w(M) {
						const N = this.h.createTokenizer(this.r.getLanguageId()),
							A = this.L(M),
							R = this.j.getParseResult(this.r);
						i.$9fb(this.s),
							this.s.appendChild(
								document.createTextNode(t.localize(4879, null)),
							),
							Promise.all([N, A]).then(
								([O, B]) => {
									this.b ||
										(this.z(O, B, R?.f, M),
										(this.s.style.maxWidth = `${Math.max(this.c.getLayoutInfo().width * 0.66, 500)}px`),
										this.c.layoutContentWidget(this));
								},
								(O) => {
									this.m.warn(O),
										setTimeout(() => {
											T.get(this.c)?.stop();
										});
								},
							);
					}
					y() {
						const M = this.n.getValue(l.$dPb, {
							overrideIdentifier: this.r.getLanguageId(),
							resource: this.r.uri,
						})?.enabled;
						return typeof M == "boolean"
							? M
							: this.g.getColorTheme().semanticHighlighting;
					}
					z(M, N, A, R) {
						const O = M && this.H(M, R),
							B = N && this.M(N, R),
							U = A && this.O(A, R);
						if (!O && !B && !U) {
							i.$hhb(this.s, "No grammar or semantic tokens available.");
							return;
						}
						const z = O?.metadata,
							F = B?.metadata,
							x = B && k(this.r.getValueInRange(B.range)),
							H =
								O &&
								k(
									this.r
										.getLineContent(R.lineNumber)
										.substring(O.token.startIndex, O.token.endIndex),
								),
							q = x || H || "";
						if (
							(i.$hhb(
								this.s,
								I(
									"h2.tiw-token",
									void 0,
									q,
									I(
										"span.tiw-token-length",
										void 0,
										`${q.length} ${q.length === 1 ? "char" : "chars"}`,
									),
								),
							),
							i.$fhb(
								this.s,
								I("hr.tiw-metadata-separator", { style: "clear:both" }),
							),
							i.$fhb(
								this.s,
								I(
									"table.tiw-metadata-table",
									void 0,
									I(
										"tbody",
										void 0,
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, "language"),
											I("td.tiw-metadata-value", void 0, z?.languageId || ""),
										),
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, "standard token type"),
											I(
												"td.tiw-metadata-value",
												void 0,
												this.G(z?.tokenType || h.StandardTokenType.Other),
											),
										),
										...this.C(F, z),
									),
								),
							),
							B)
						) {
							i.$fhb(this.s, I("hr.tiw-metadata-separator"));
							const V = i.$fhb(this.s, I("table.tiw-metadata-table", void 0)),
								G = i.$fhb(
									V,
									I(
										"tbody",
										void 0,
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, "semantic token type"),
											I("td.tiw-metadata-value", void 0, B.type),
										),
									),
								);
							if (
								(B.modifiers.length &&
									i.$fhb(
										G,
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, "modifiers"),
											I("td.tiw-metadata-value", void 0, B.modifiers.join(" ")),
										),
									),
								B.metadata)
							) {
								const K = [
										"foreground",
										"bold",
										"italic",
										"underline",
										"strikethrough",
									],
									J = {},
									W = new Array();
								for (const X of K)
									if (B.metadata[X] !== void 0) {
										const Y = B.definitions[X],
											ie = this.P(Y, X),
											ne = ie.map((_) => (i.$Ygb(_) ? _.outerHTML : _)).join();
										let ee = J[ne];
										ee || ((J[ne] = ee = []), W.push([ie, ne])), ee.push(X);
									}
								for (const [X, Y] of W)
									i.$fhb(
										G,
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, J[Y].join(", ")),
											I("td.tiw-metadata-value", void 0, ...X),
										),
									);
							}
						}
						if (O) {
							const V = this.g.getColorTheme();
							i.$fhb(this.s, I("hr.tiw-metadata-separator"));
							const G = i.$fhb(this.s, I("table.tiw-metadata-table")),
								K = i.$fhb(G, I("tbody"));
							H &&
								H !== q &&
								i.$fhb(
									K,
									I(
										"tr",
										void 0,
										I("td.tiw-metadata-key", void 0, "textmate token"),
										I("td.tiw-metadata-value", void 0, `${H} (${H.length})`),
									),
								);
							const J = new Array();
							for (let Y = O.token.scopes.length - 1; Y >= 0; Y--)
								J.push(O.token.scopes[Y]), Y > 0 && J.push(I("br"));
							i.$fhb(
								K,
								I(
									"tr",
									void 0,
									I("td.tiw-metadata-key", void 0, "textmate scopes"),
									I("td.tiw-metadata-value.tiw-metadata-scopes", void 0, ...J),
								),
							);
							const W = (0, g.$OXc)(V, O.token.scopes, !1),
								X = B?.metadata?.foreground;
							if (W) {
								if (X !== O.metadata.foreground) {
									let Y = I(
										"code.tiw-theme-selector",
										void 0,
										W.rawSelector,
										I("br"),
										JSON.stringify(W.settings, null, "	"),
									);
									X && (Y = I("s", void 0, Y)),
										i.$fhb(
											K,
											I(
												"tr",
												void 0,
												I("td.tiw-metadata-key", void 0, "foreground"),
												I("td.tiw-metadata-value", void 0, Y),
											),
										);
								}
							} else
								X ||
									i.$fhb(
										K,
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, "foreground"),
											I("td.tiw-metadata-value", void 0, "No theme selector"),
										),
									);
						}
						if (U) {
							i.$fhb(this.s, I("hr.tiw-metadata-separator"));
							const V = i.$fhb(this.s, I("table.tiw-metadata-table")),
								G = i.$fhb(V, I("tbody"));
							i.$fhb(
								G,
								I(
									"tr",
									void 0,
									I("td.tiw-metadata-key", void 0, "tree-sitter token"),
									I("td.tiw-metadata-value", void 0, `${U.text}`),
								),
							);
							const K = new Array();
							let J = U;
							for (; J.parent; )
								K.push(J.type), (J = J.parent), J && K.push(I("br"));
							i.$fhb(
								G,
								I(
									"tr",
									void 0,
									I("td.tiw-metadata-key", void 0, "tree-sitter scopes"),
									I("td.tiw-metadata-value.tiw-metadata-scopes", void 0, ...K),
								),
							);
							const X = a.$mM
								.get(this.r.getLanguageId())
								?.captureAtPosition(R.lineNumber, R.column, this.r);
							X &&
								X.length > 0 &&
								i.$fhb(
									G,
									I(
										"tr",
										void 0,
										I("td.tiw-metadata-key", void 0, "foreground"),
										I("td.tiw-metadata-value", void 0, X[0].name),
									),
								);
						}
					}
					C(M, N) {
						const A = new Array();
						function R(F) {
							const x = M?.[F] || N?.[F];
							if (x !== void 0) {
								const H = M?.[F] ? "tiw-metadata-semantic" : "";
								A.push(
									I(
										"tr",
										void 0,
										I("td.tiw-metadata-key", void 0, F),
										I(`td.tiw-metadata-value.${H}`, void 0, x),
									),
								);
							}
							return x;
						}
						const O = R("foreground"),
							B = R("background");
						if (O && B) {
							const F = E.$UL.fromHex(B),
								x = E.$UL.fromHex(O);
							F.isOpaque()
								? A.push(
										I(
											"tr",
											void 0,
											I("td.tiw-metadata-key", void 0, "contrast ratio"),
											I(
												"td.tiw-metadata-value",
												void 0,
												F.getContrastRatio(x.makeOpaque(F)).toFixed(2),
											),
										),
									)
								: A.push(
										I(
											"tr",
											void 0,
											I(
												"td.tiw-metadata-key",
												void 0,
												"Contrast ratio cannot be precise for background colors that use transparency",
											),
											I("td.tiw-metadata-value"),
										),
									);
						}
						const U = new Array();
						function z(F) {
							let x;
							M && M[F]
								? (x = I("span.tiw-metadata-semantic", void 0, F))
								: N && N[F] && (x = F),
								x && (U.length && U.push(" "), U.push(x));
						}
						return (
							z("bold"),
							z("italic"),
							z("underline"),
							z("strikethrough"),
							U.length &&
								A.push(
									I(
										"tr",
										void 0,
										I("td.tiw-metadata-key", void 0, "font style"),
										I("td.tiw-metadata-value", void 0, ...U),
									),
								),
							A
						);
					}
					F(M) {
						const N = this.g.getColorTheme().tokenColorMap,
							A = h.$2L.getLanguageId(M),
							R = h.$2L.getTokenType(M),
							O = h.$2L.getFontStyle(M),
							B = h.$2L.getForeground(M),
							U = h.$2L.getBackground(M);
						return {
							languageId: this.f.languageIdCodec.decodeLanguageId(A),
							tokenType: R,
							bold: O & h.FontStyle.Bold ? !0 : void 0,
							italic: O & h.FontStyle.Italic ? !0 : void 0,
							underline: O & h.FontStyle.Underline ? !0 : void 0,
							strikethrough: O & h.FontStyle.Strikethrough ? !0 : void 0,
							foreground: N[B],
							background: N[U],
						};
					}
					G(M) {
						switch (M) {
							case h.StandardTokenType.Other:
								return "Other";
							case h.StandardTokenType.Comment:
								return "Comment";
							case h.StandardTokenType.String:
								return "String";
							case h.StandardTokenType.RegEx:
								return "RegEx";
							default:
								return "??";
						}
					}
					H(M, N) {
						const A = N.lineNumber,
							R = this.I(M, A),
							O = M.tokenizeLine(this.r.getLineContent(A), R),
							B = M.tokenizeLine2(this.r.getLineContent(A), R);
						let U = 0;
						for (let F = O.tokens.length - 1; F >= 0; F--) {
							const x = O.tokens[F];
							if (N.column - 1 >= x.startIndex) {
								U = F;
								break;
							}
						}
						let z = 0;
						for (let F = B.tokens.length >>> 1; F >= 0; F--)
							if (N.column - 1 >= B.tokens[F << 1]) {
								z = F;
								break;
							}
						return {
							token: O.tokens[U],
							metadata: this.F(B.tokens[(z << 1) + 1]),
						};
					}
					I(M, N) {
						let A = null;
						for (let R = 1; R < N; R++)
							A = M.tokenizeLine(this.r.getLineContent(R), A).ruleStack;
						return A;
					}
					J(M) {
						return M && M.data;
					}
					async L(M) {
						if (!this.y()) return null;
						const N = this.q.documentSemanticTokensProvider.ordered(this.r);
						if (N.length) {
							const R = N[0],
								O = await Promise.resolve(
									R.provideDocumentSemanticTokens(this.r, null, this.u.token),
								);
							if (this.J(O)) return { tokens: O, legend: R.getLegend() };
						}
						const A = this.q.documentRangeSemanticTokensProvider.ordered(
							this.r,
						);
						if (A.length) {
							const R = A[0],
								O = M.lineNumber,
								B = new u.$iL(O, 1, O, this.r.getLineMaxColumn(O)),
								U = await Promise.resolve(
									R.provideDocumentRangeSemanticTokens(this.r, B, this.u.token),
								);
							if (this.J(U)) return { tokens: U, legend: R.getLegend() };
						}
						return null;
					}
					M(M, N) {
						const A = M.tokens.data,
							R = this.r.getLanguageId();
						let O = 0,
							B = 0;
						const U = N.lineNumber - 1,
							z = N.column - 1;
						for (let F = 0; F < A.length; F += 5) {
							const x = A[F],
								H = A[F + 1],
								q = A[F + 2],
								V = A[F + 3],
								G = A[F + 4],
								K = O + x,
								J = x === 0 ? B + H : H;
							if (U === K && J <= z && z < J + q) {
								const W = M.legend.tokenTypes[V] || "not in legend (ignored)",
									X = [];
								let Y = G;
								for (
									let Z = 0;
									Y > 0 && Z < M.legend.tokenModifiers.length;
									Z++
								)
									Y & 1 && X.push(M.legend.tokenModifiers[Z]), (Y = Y >> 1);
								Y > 0 && X.push("not in legend (ignored)");
								const ie = new u.$iL(K + 1, J + 1, K + 1, J + 1 + q),
									ne = {},
									ee = this.g.getColorTheme().tokenColorMap,
									te = this.g
										.getColorTheme()
										.getTokenStyleMetadata(W, X, R, !0, ne);
								let Q;
								return (
									te &&
										(Q = {
											languageId: void 0,
											tokenType: h.StandardTokenType.Other,
											bold: te?.bold,
											italic: te?.italic,
											underline: te?.underline,
											strikethrough: te?.strikethrough,
											foreground: ee[te?.foreground || h.ColorId.None],
											background: void 0,
										}),
									{
										type: W,
										modifiers: X,
										range: ie,
										metadata: Q,
										definitions: ne,
									}
								);
							}
							(O = K), (B = J);
						}
						return null;
					}
					N(M, N) {
						const A = this.r.getOffsetAt(N);
						M.gotoFirstChild();
						let R = !1,
							O = null;
						do
							M.currentNode.startIndex <= A && A < M.currentNode.endIndex
								? ((R = !0), (O = M.currentNode))
								: (R = !1);
						while (R ? M.gotoFirstChild() : M.gotoNextSibling());
						return O;
					}
					O(M, N) {
						const A = M.walk();
						return this.N(A, N);
					}
					P(M, N) {
						const A = new Array();
						if (M === void 0) return A;
						const R = this.g.getColorTheme();
						if (Array.isArray(M)) {
							const O = {};
							R.resolveScopes(M, O);
							const B = O[N];
							if (B && O.scope) {
								const U = I("ul.tiw-metadata-values"),
									z = Array.isArray(B.scope) ? B.scope : [String(B.scope)];
								for (const F of z)
									U.appendChild(
										I("li.tiw-metadata-value.tiw-metadata-scopes", void 0, F),
									);
								return (
									A.push(
										O.scope.join(" "),
										U,
										I(
											"code.tiw-theme-selector",
											void 0,
											JSON.stringify(B.settings, null, "	"),
										),
									),
									A
								);
							}
							return A;
						} else if (b.SemanticTokenRule.is(M)) {
							const O = R.getTokenStylingRuleScope(M);
							return O === "setting"
								? (A.push(
										`User settings: ${M.selector.id} - ${this.Q(M.style, N)}`,
									),
									A)
								: (O === "theme" &&
										A.push(
											`Color theme: ${M.selector.id} - ${this.Q(M.style, N)}`,
										),
									A);
						} else {
							const O = R.resolveTokenStyleValue(M);
							return A.push(`Default: ${O ? this.Q(O, N) : ""}`), A;
						}
					}
					Q(M, N) {
						switch (N) {
							case "foreground":
								return M.foreground
									? E.$UL.Format.CSS.formatHexA(M.foreground, !0)
									: "";
							default:
								return M[N] !== void 0 ? String(M[N]) : "";
						}
					}
					getDomNode() {
						return this.s;
					}
					getPosition() {
						return {
							position: this.c.getPosition(),
							preference: [
								m.ContentWidgetPositionPreference.BELOW,
								m.ContentWidgetPositionPreference.ABOVE,
							],
						};
					}
				}
				(0, r.$qtb)(T.ID, T, r.EditorContributionInstantiation.Lazy),
					(0, r.$ntb)(P);
			},
		)
