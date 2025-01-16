define(de[333], he([1, 0, 5, 35, 28]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ExtensionData =
					e.$BRb =
					e.$ARb =
					e.ThemeSettingDefaults =
					e.ThemeSettings =
					e.$zRb =
					e.$yRb =
					e.$xRb =
					e.$wRb =
					e.$vRb =
					e.$uRb =
					e.$tRb =
					e.$sRb =
					e.$rRb =
						void 0),
				(e.$rRb = (0, t.$Ni)(i.$iP)),
				(e.$sRb = "vs"),
				(e.$tRb = "vs-dark"),
				(e.$uRb = "hc-black"),
				(e.$vRb = "hc-light"),
				(e.$wRb = "["),
				(e.$xRb = "]"),
				(e.$yRb = "*"),
				(e.$zRb = /\[(.+?)\]/g);
			var E;
			(function (m) {
				(m.COLOR_THEME = "workbench.colorTheme"),
					(m.FILE_ICON_THEME = "workbench.iconTheme"),
					(m.PRODUCT_ICON_THEME = "workbench.productIconTheme"),
					(m.COLOR_CUSTOMIZATIONS = "workbench.colorCustomizations"),
					(m.TOKEN_COLOR_CUSTOMIZATIONS = "editor.tokenColorCustomizations"),
					(m.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS =
						"editor.semanticTokenColorCustomizations"),
					(m.PREFERRED_DARK_THEME = "workbench.preferredDarkColorTheme"),
					(m.PREFERRED_LIGHT_THEME = "workbench.preferredLightColorTheme"),
					(m.PREFERRED_HC_DARK_THEME =
						"workbench.preferredHighContrastColorTheme"),
					(m.PREFERRED_HC_LIGHT_THEME =
						"workbench.preferredHighContrastLightColorTheme"),
					(m.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme"),
					(m.DETECT_HC = "window.autoDetectHighContrast"),
					(m.SYSTEM_COLOR_THEME = "window.systemColorTheme");
			})(E || (e.ThemeSettings = E = {}));
			var C;
			(function (m) {
				(m.COLOR_THEME_DARK = "Default Dark Modern"),
					(m.COLOR_THEME_LIGHT = "Default Light Modern"),
					(m.COLOR_THEME_HC_DARK = "Default High Contrast"),
					(m.COLOR_THEME_HC_LIGHT = "Default High Contrast Light"),
					(m.COLOR_THEME_DARK_OLD = "Default Dark+"),
					(m.COLOR_THEME_LIGHT_OLD = "Default Light+"),
					(m.FILE_ICON_THEME = "vs-seti"),
					(m.PRODUCT_ICON_THEME = "Default");
			})(C || (e.ThemeSettingDefaults = C = {})),
				(e.$ARb = {
					"activityBar.activeBorder": "#0078d4",
					"activityBar.background": "#181818",
					"activityBar.border": "#2b2b2b",
					"activityBar.foreground": "#d7d7d7",
					"activityBar.inactiveForeground": "#868686",
					"editorGroup.border": "#ffffff17",
					"editorGroupHeader.tabsBackground": "#181818",
					"editorGroupHeader.tabsBorder": "#2b2b2b",
					"statusBar.background": "#181818",
					"statusBar.border": "#2b2b2b",
					"statusBar.foreground": "#cccccc",
					"statusBar.noFolderBackground": "#1f1f1f",
					"tab.activeBackground": "#1f1f1f",
					"tab.activeBorder": "#1f1f1f",
					"tab.activeBorderTop": "#0078d4",
					"tab.activeForeground": "#ffffff",
					"tab.border": "#2b2b2b",
					"textLink.foreground": "#4daafc",
					"titleBar.activeBackground": "#181818",
					"titleBar.activeForeground": "#cccccc",
					"titleBar.border": "#2b2b2b",
					"titleBar.inactiveBackground": "#1f1f1f",
					"titleBar.inactiveForeground": "#9d9d9d",
					"welcomePage.tileBackground": "#2b2b2b",
				}),
				(e.$BRb = {
					"activityBar.activeBorder": "#005FB8",
					"activityBar.background": "#f8f8f8",
					"activityBar.border": "#e5e5e5",
					"activityBar.foreground": "#1f1f1f",
					"activityBar.inactiveForeground": "#616161",
					"editorGroup.border": "#e5e5e5",
					"editorGroupHeader.tabsBackground": "#f8f8f8",
					"editorGroupHeader.tabsBorder": "#e5e5e5",
					"statusBar.background": "#f8f8f8",
					"statusBar.border": "#e5e5e5",
					"statusBar.foreground": "#3b3b3b",
					"statusBar.noFolderBackground": "#f8f8f8",
					"tab.activeBackground": "#ffffff",
					"tab.activeBorder": "#f8f8f8",
					"tab.activeBorderTop": "#005fb8",
					"tab.activeForeground": "#3b3b3b",
					"tab.border": "#e5e5e5",
					"textLink.foreground": "#005fb8",
					"titleBar.activeBackground": "#f8f8f8",
					"titleBar.activeForeground": "#1e1e1e",
					"titleBar.border": "#E5E5E5",
					"titleBar.inactiveBackground": "#f8f8f8",
					"titleBar.inactiveForeground": "#8b949e",
					"welcomePage.tileBackground": "#f3f3f3",
				});
			var d;
			(function (m) {
				function r(h) {
					return (
						h && {
							_extensionId: h.extensionId,
							_extensionIsBuiltin: h.extensionIsBuiltin,
							_extensionName: h.extensionName,
							_extensionPublisher: h.extensionPublisher,
						}
					);
				}
				m.toJSONObject = r;
				function u(h) {
					if (
						h &&
						(0, w.$lg)(h._extensionId) &&
						(0, w.$rg)(h._extensionIsBuiltin) &&
						(0, w.$lg)(h._extensionName) &&
						(0, w.$lg)(h._extensionPublisher)
					)
						return {
							extensionId: h._extensionId,
							extensionIsBuiltin: h._extensionIsBuiltin,
							extensionName: h._extensionName,
							extensionPublisher: h._extensionPublisher,
						};
				}
				m.fromJSONObject = u;
				function a(h, c, n = !1) {
					return {
						extensionPublisher: h,
						extensionId: `${h}.${c}`,
						extensionName: c,
						extensionIsBuiltin: n,
					};
				}
				m.fromName = a;
			})(d || (e.ExtensionData = d = {}));
		}),
		define(
			de[3716],
			he([
				1, 0, 4, 7, 120, 97, 27, 3, 56, 46, 17, 74, 171, 61, 40, 1878, 841, 333,
				33, 778, 10, 1156, 23, 69, 763, 2400,
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
				y,
				$,
				v,
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
		),
		define(
			de[3717],
			he([
				1, 0, 9, 61, 31, 5, 333, 18, 44, 841, 74, 171, 1878, 97, 22, 19, 23, 37,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class f {
					constructor(l) {
						(this.a = l), (this.b = Object.create(null)), (this.d = "#000000");
						for (let y = 0, $ = this.a.tokenColors.length; y < $; y++) {
							const v = this.a.tokenColors[y];
							v.scope || (this.d = v.settings.foreground);
						}
					}
					e(l, y) {
						return `${l}: ${c.$UL.Format.CSS.formatHexA(y, !0).toUpperCase()}`;
					}
					explainTokenColor(l, y) {
						const $ = this.f(l);
						if (!$) {
							const S = c.$UL.fromHex(this.d);
							if (!y.equals(S))
								throw new Error(
									`[${this.a.label}]: Unexpected color ${c.$UL.Format.CSS.formatHexA(y)} for ${l}. Expected default ${c.$UL.Format.CSS.formatHexA(S)}`,
								);
							return this.e("default", y);
						}
						const v = c.$UL.fromHex($.settings.foreground);
						if (!y.equals(v))
							throw new Error(
								`[${this.a.label}]: Unexpected color ${c.$UL.Format.CSS.formatHexA(y)} for ${l}. Expected ${c.$UL.Format.CSS.formatHexA(v)} coming in from ${$.rawSelector}`,
							);
						return this.e($.rawSelector, y);
					}
					f(l) {
						return (
							this.b[l] || (this.b[l] = (0, h.$OXc)(this.a, l.split(" "))),
							this.b[l]
						);
					}
				}
				let b = class {
					constructor(l, y, $) {
						(this.a = l), (this.b = y), (this.d = $);
					}
					e(l, y) {
						const $ = u.$lM.getColorMap();
						let v = null;
						const S = [];
						let I = 0;
						for (let T = 0, P = y.length; T < P; T++) {
							const k = y[T],
								L = l.tokenizeLine2(k, v);
							for (let D = 0, M = L.tokens.length >>> 1; D < M; D++) {
								const N = L.tokens[D << 1],
									A = L.tokens[(D << 1) + 1],
									R = D + 1 < M ? L.tokens[(D + 1) << 1] : k.length,
									O = k.substring(N, R),
									B = a.$2L.getForeground(A);
								S[I++] = { text: O, color: $[B] };
							}
							v = L.ruleStack;
						}
						return S;
					}
					f(l, y) {
						let $ = null;
						const v = [];
						let S = 0;
						for (let I = 0, T = y.length; I < T; I++) {
							const P = y[I],
								k = l.tokenizeLine(P, $);
							let L = null;
							for (let D = 0, M = k.tokens.length; D < M; D++) {
								const N = k.tokens[D],
									A = P.substring(N.startIndex, N.endIndex),
									R = N.scopes.join(" ");
								L === R
									? (v[S - 1].c += A)
									: ((L = R),
										(v[S++] = {
											c: A,
											t: R,
											r: {
												dark_plus: void 0,
												light_plus: void 0,
												dark_vs: void 0,
												light_vs: void 0,
												hc_black: void 0,
											},
										}));
							}
							$ = k.ruleStack;
						}
						return v;
					}
					async g(l, y) {
						const $ = this.b.getColorTheme(),
							v = (P) => {
								const k = "vscode-theme-defaults-themes-",
									L = P.indexOf(k);
								if (L !== -1) return P.substring(L + k.length, P.length - 5);
							},
							S = {},
							T = (await this.b.getColorThemes()).filter((P) => !!v(P.id));
						for (const P of T) {
							const k = P.id;
							if (await this.b.setColorTheme(k, void 0)) {
								const D = v(k);
								S[D] = {
									document: new f(this.b.getColorTheme()),
									tokens: this.e(l, y),
								};
							}
						}
						return await this.b.setColorTheme($.id, void 0), S;
					}
					h(l, y) {
						const $ = {},
							v = Object.keys(y);
						for (const S of v) $[S] = 0;
						for (let S = 0, I = l.length; S < I; S++) {
							const T = l[S];
							for (const P of v) {
								const k = y[P].tokens[$[P]];
								(k.text = k.text.substr(T.c.length)),
									(T.r[P] = y[P].document.explainTokenColor(T.t, k.color)),
									k.text.length === 0 && $[P]++;
							}
						}
					}
					captureSyntaxTokens(l, y) {
						const $ = this.a.guessLanguageIdByFilepathOrFirstLine(
							t.URI.file(l),
						);
						return this.d.createTokenizer($).then((v) => {
							if (!v) return [];
							const S = (0, o.$zf)(y),
								I = this.f(v, S);
							return this.g(v, S).then(
								(T) => (this.h(I, T), I.filter((P) => P.c.length > 0)),
							);
						});
					}
				};
				(b = Ne([j(0, i.$nM), j(1, C.$rRb), j(2, r.$N6b)], b)),
					w.$fk.registerCommand(
						"_workbench.captureSyntaxTokens",
						function (s, l) {
							const y = ($) => {
								const v = s.get(n.$ll),
									S = (0, g.$kh)($),
									I = s.get(E.$Li).createInstance(b);
								return v
									.readFile($)
									.then((T) => I.captureSyntaxTokens(S, T.value.toString()));
							};
							if (l) return y(l);
							{
								const $ = s.get(d.$IY),
									v = $.activeEditor
										? m.$A1.getCanonicalUri($.activeEditor, {
												filterByScheme: p.Schemas.file,
											})
										: null;
								v
									? y(v).then((S) => {
											console.log(S);
										})
									: console.log("No file editor active");
							}
						},
					);
			},
		),
		define(
			de[3718],
			he([1, 0, 661, 6, 3, 38, 10, 51, 212, 333]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b6c = void 0),
					(d = mt(d));
				let u = class extends w.$1c {
					constructor(c, n) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.a = void 0),
							(this.b = this.D(new i.$re())),
							(this.onThemeDataChanged = this.b.event),
							this.D(
								this.c.onDidColorThemeChange(() => {
									this.g();
								}),
							);
						const g = [
							"editor.fontFamily",
							"editor.fontWeight",
							"editor.fontSize",
							"accessibility.underlineLinks",
						];
						this.D(
							this.f.onDidChangeConfiguration((p) => {
								g.some((o) => p.affectsConfiguration(o)) && this.g();
							}),
						);
					}
					getTheme() {
						return this.c.getColorTheme();
					}
					getWebviewThemeData() {
						if (!this.a) {
							const c = this.f.getValue("editor"),
								n = c.fontFamily || E.EDITOR_FONT_DEFAULTS.fontFamily,
								g = c.fontWeight || E.EDITOR_FONT_DEFAULTS.fontWeight,
								p = c.fontSize || E.EDITOR_FONT_DEFAULTS.fontSize,
								o = this.f.getValue("accessibility.underlineLinks"),
								f = this.c.getColorTheme(),
								b = d
									.$xP()
									.getColors()
									.reduce((y, $) => {
										const v = f.getColor($.id);
										return (
											v &&
												(y["vscode-" + $.id.replace(".", "-")] = v.toString()),
											y
										);
									}, {}),
								s = {
									"vscode-font-family": t.$njb,
									"vscode-font-weight": "normal",
									"vscode-font-size": "13px",
									"vscode-editor-font-family": n,
									"vscode-editor-font-weight": g,
									"vscode-editor-font-size": p + "px",
									"text-link-decoration": o ? "underline" : "none",
									...b,
								},
								l = a.fromTheme(f);
							this.a = {
								styles: s,
								activeTheme: l,
								themeLabel: f.label,
								themeId: f.settingsId,
							};
						}
						return this.a;
					}
					g() {
						(this.a = void 0), this.b.fire();
					}
				};
				(e.$b6c = u), (e.$b6c = u = Ne([j(0, r.$rRb), j(1, C.$gj)], u));
				var a;
				(function (h) {
					(h.light = "vscode-light"),
						(h.dark = "vscode-dark"),
						(h.highContrast = "vscode-high-contrast"),
						(h.highContrastLight = "vscode-high-contrast-light");
				})(a || (a = {})),
					(function (h) {
						function c(n) {
							switch (n.type) {
								case m.ColorScheme.LIGHT:
									return h.light;
								case m.ColorScheme.DARK:
									return h.dark;
								case m.ColorScheme.HIGH_CONTRAST_DARK:
									return h.highContrast;
								case m.ColorScheme.HIGH_CONTRAST_LIGHT:
									return h.highContrastLight;
							}
						}
						h.fromTheme = c;
					})(a || (a = {}));
			},
		),
		define(
			de[3719],
			he([1, 0, 6, 3, 5, 3718, 1805, 3406]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$h6c = void 0);
				let m = class extends i.$1c {
					constructor(u) {
						super(),
							(this.b = u),
							(this.g = new Set()),
							(this.h = this.D(new t.$re())),
							(this.onDidChangeActiveWebview = this.h.event),
							(this.a = this.b.createInstance(E.$b6c));
					}
					get activeWebview() {
						return this.c;
					}
					f(u) {
						u !== this.c && ((this.c = u), this.h.fire(u));
					}
					get webviews() {
						return this.g.values();
					}
					createWebviewElement(u) {
						const a = this.b.createInstance(C.$f6c, u, this.a);
						return this.j(a), a;
					}
					createWebviewOverlay(u) {
						const a = this.b.createInstance(d.$g6c, u);
						return this.j(a), a;
					}
					j(u) {
						this.g.add(u);
						const a = new i.$Zc();
						a.add(
							u.onDidFocus(() => {
								this.f(u);
							}),
						);
						const h = () => {
							this.c === u && this.f(void 0);
						};
						a.add(u.onDidBlur(h)),
							a.add(
								u.onDidDispose(() => {
									h(), a.dispose(), this.g.delete(u);
								}),
							);
					}
				};
				(e.$h6c = m), (e.$h6c = m = Ne([j(0, w.$Li)], m));
			},
		),
		