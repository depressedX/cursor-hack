define(
			de[3727],
			he([
				1, 0, 54, 187, 97, 333, 3714, 4, 28, 19, 51, 35, 30, 754, 3711, 778,
				3713, 120, 21, 212,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9vc = void 0),
					(i = mt(i)),
					(d = mt(d)),
					(m = mt(m)),
					(r = mt(r));
				const s = h.$Io.as(u.$uP.ColorContribution),
					l = (0, g.$nmc)(),
					y = {
						comments: ["comment", "punctuation.definition.comment"],
						strings: ["string", "meta.embedded.assembly"],
						keywords: [
							"keyword - keyword.operator",
							"keyword.control",
							"storage",
							"storage.type",
						],
						numbers: ["constant.numeric"],
						types: [
							"entity.name.type",
							"entity.name.class",
							"support.type",
							"support.class",
						],
						functions: ["entity.name.function", "support.function"],
						variables: ["variable", "entity.name.variable"],
					};
				class $ {
					static {
						this.STORAGE_KEY = "colorThemeData";
					}
					constructor(U, z, F) {
						(this.h = []),
							(this.j = []),
							(this.l = {}),
							(this.m = {}),
							(this.n = []),
							(this.o = []),
							(this.u = void 0),
							(this.v = void 0),
							(this.id = U),
							(this.label = z),
							(this.settingsId = F),
							(this.isLoaded = !1);
					}
					get semanticHighlighting() {
						return this.c !== void 0
							? this.c
							: this.g !== void 0
								? this.g
								: !!this.b;
					}
					get tokenColors() {
						if (!this.u) {
							let H = function (q) {
								q.scope &&
									q.settings &&
									(q.scope === "token.info-token" && (x = !0),
									U.push({
										scope: q.scope,
										settings: {
											foreground: R(q.settings.foreground),
											background: R(q.settings.background),
											fontStyle: q.settings.fontStyle,
										},
									}));
							};
							const U = [],
								z = this.getColor(u.$9P) || this.getDefault(u.$9P),
								F = this.getColor(u.$8P) || this.getDefault(u.$8P);
							U.push({ settings: { foreground: R(z), background: R(F) } });
							let x = !1;
							this.h.forEach(H),
								this.j.forEach(H),
								x || T[this.type].forEach(H),
								(this.u = U);
						}
						return this.u;
					}
					getColor(U, z) {
						const F = this.m[U];
						if (F instanceof w.$UL) return F;
						if (F === void 0) {
							const x = this.l[U];
							if (x !== void 0) return x;
						}
						if (z !== !1) return this.getDefault(U);
					}
					w(U, z, F, x = !0, H = {}) {
						const q = {
								foreground: void 0,
								bold: void 0,
								underline: void 0,
								strikethrough: void 0,
								italic: void 0,
							},
							V = {
								foreground: -1,
								bold: -1,
								underline: -1,
								strikethrough: -1,
								italic: -1,
							};
						function G(W, X, Y) {
							X.foreground &&
								V.foreground <= W &&
								((V.foreground = W),
								(q.foreground = X.foreground),
								(H.foreground = Y));
							for (const ie of [
								"bold",
								"underline",
								"strikethrough",
								"italic",
							]) {
								const ne = ie,
									ee = X[ne];
								ee !== void 0 &&
									V[ne] <= W &&
									((V[ne] = W), (q[ne] = ee), (H[ne] = Y));
							}
						}
						function K(W) {
							const X = W.selector.match(U, z, F);
							X >= 0 && G(X, W.style, W);
						}
						this.n.forEach(K), this.o.forEach(K);
						let J = !1;
						for (const W in V) {
							const X = W;
							V[X] === -1 ? (J = !0) : (V[X] = Number.MAX_VALUE);
						}
						if (J)
							for (const W of l.getTokenStylingDefaultRules()) {
								const X = W.selector.match(U, z, F);
								if (X >= 0) {
									let Y;
									if (
										(W.defaults.scopesToProbe &&
											((Y = this.resolveScopes(W.defaults.scopesToProbe)),
											Y && G(X, Y, W.defaults.scopesToProbe)),
										!Y && x !== !1)
									) {
										const ie = W.defaults[this.type];
										(Y = this.resolveTokenStyleValue(ie)), Y && G(X, Y, ie);
									}
								}
							}
						return g.$lmc.fromData(q);
					}
					resolveTokenStyleValue(U) {
						if (U !== void 0) {
							if (typeof U == "string") {
								const {
									type: z,
									modifiers: F,
									language: x,
								} = (0, g.$mmc)(U, "");
								return this.w(z, F, x);
							} else if (typeof U == "object") return U;
						}
					}
					getTokenColorIndex() {
						if (!this.v) {
							const U = new A();
							this.tokenColors.forEach((z) => {
								U.add(z.settings.foreground), U.add(z.settings.background);
							}),
								this.n.forEach((z) => U.add(z.style.foreground)),
								l.getTokenStylingDefaultRules().forEach((z) => {
									const F = z.defaults[this.type];
									F && typeof F == "object" && U.add(F.foreground);
								}),
								this.o.forEach((z) => U.add(z.style.foreground)),
								(this.v = U);
						}
						return this.v;
					}
					get tokenColorMap() {
						return this.getTokenColorIndex().asArray();
					}
					getTokenStyleMetadata(U, z, F, x = !0, H = {}) {
						const { type: q, language: V } = (0, g.$mmc)(U, F),
							G = this.w(q, z, V, x, H);
						if (G)
							return {
								foreground: this.getTokenColorIndex().get(G.foreground),
								bold: G.bold,
								underline: G.underline,
								strikethrough: G.strikethrough,
								italic: G.italic,
							};
					}
					getTokenStylingRuleScope(U) {
						if (this.o.indexOf(U) !== -1) return "setting";
						if (this.n.indexOf(U) !== -1) return "theme";
					}
					getDefault(U) {
						return s.resolveDefaultColor(U, this);
					}
					resolveScopes(U, z) {
						this.q || (this.q = this.h.map(D)),
							this.t || (this.t = this.j.map(D));
						for (const F of U) {
							let J = function (W, X) {
									for (let Y = 0; Y < W.length; Y++) {
										const ie = W[Y](F);
										if (ie >= 0) {
											const ne = X[Y],
												ee = X[Y].settings;
											ie >= q &&
												ee.foreground &&
												((x = ee.foreground), (q = ie), (K = ne)),
												ie >= V &&
													m.$lg(ee.fontStyle) &&
													((H = ee.fontStyle), (V = ie), (G = ne));
										}
									}
								},
								x,
								H,
								q = -1,
								V = -1,
								G,
								K;
							if (
								(J(this.q, this.h),
								J(this.t, this.j),
								x !== void 0 || H !== void 0)
							)
								return (
									z &&
										((z.foreground = K),
										(z.bold = z.italic = z.underline = z.strikethrough = G),
										(z.scope = F)),
									g.$lmc.fromSettings(x, H)
								);
						}
					}
					defines(U) {
						const z = this.m[U];
						return z instanceof w.$UL
							? !0
							: z === void 0 && this.l.hasOwnProperty(U);
					}
					setCustomizations(U) {
						this.setCustomColors(U.colorCustomizations),
							this.setCustomTokenColors(U.tokenColorCustomizations),
							this.setCustomSemanticTokenColors(
								U.semanticTokenColorCustomizations,
							);
					}
					setCustomColors(U) {
						(this.m = {}), this.x(U);
						const z = this.getThemeSpecificColors(U);
						m.$ng(z) && this.x(z),
							(this.v = void 0),
							(this.u = void 0),
							(this.t = void 0);
					}
					x(U) {
						for (const z in U) {
							const F = U[z];
							F === u.$vP
								? (this.m[z] = u.$vP)
								: typeof F == "string" && (this.m[z] = w.$UL.fromHex(F));
						}
					}
					setCustomTokenColors(U) {
						(this.j = []), (this.g = void 0), this.z(U);
						const z = this.getThemeSpecificColors(U);
						m.$ng(z) && this.z(z),
							(this.v = void 0),
							(this.u = void 0),
							(this.t = void 0);
					}
					setCustomSemanticTokenColors(U) {
						if (((this.o = []), (this.c = void 0), U)) {
							(this.c = U.enabled), U.rules && this.y(U.rules);
							const z = this.getThemeSpecificColors(U);
							m.$ng(z) &&
								(z.enabled !== void 0 && (this.c = z.enabled),
								z.rules && this.y(z.rules));
						}
						(this.v = void 0), (this.u = void 0);
					}
					isThemeScope(U) {
						return U.charAt(0) === E.$wRb && U.charAt(U.length - 1) === E.$xRb;
					}
					isThemeScopeMatch(U) {
						const z = U.charAt(0),
							F = U.charAt(U.length - 1),
							x = U.slice(0, -1),
							H = U.slice(1, -1),
							q = U.slice(1);
						return (
							U === this.settingsId ||
							(this.settingsId.includes(H) && z === E.$yRb && F === E.$yRb) ||
							(this.settingsId.startsWith(x) && F === E.$yRb) ||
							(this.settingsId.endsWith(q) && z === E.$yRb)
						);
					}
					getThemeSpecificColors(U) {
						let z;
						for (const F in U) {
							const x = U[F];
							if (
								this.isThemeScope(F) &&
								x instanceof Object &&
								!Array.isArray(x)
							) {
								const H = F.match(E.$zRb) || [];
								for (const q of H) {
									const V = q.substring(1, q.length - 1);
									if (this.isThemeScopeMatch(V)) {
										z || (z = {});
										const G = x;
										for (const K in G) {
											const J = z[K],
												W = G[K];
											Array.isArray(J) && Array.isArray(W)
												? (z[K] = J.concat(W))
												: W && (z[K] = W);
										}
									}
								}
							}
						}
						return z;
					}
					y(U) {
						for (const z in U)
							if (!this.isThemeScope(z))
								try {
									const F = M(z, U[z]);
									F && this.o.push(F);
								} catch {}
					}
					z(U) {
						for (const z in y) {
							const F = z,
								x = U[F];
							if (x) {
								const H = typeof x == "string" ? { foreground: x } : x,
									q = y[F];
								for (const V of q) this.j.push({ scope: V, settings: H });
							}
						}
						if (Array.isArray(U.textMateRules))
							for (const z of U.textMateRules)
								z.scope && z.settings && this.j.push(z);
						U.semanticHighlighting !== void 0 &&
							(this.g = U.semanticHighlighting);
					}
					ensureLoaded(U) {
						return this.isLoaded ? Promise.resolve(void 0) : this.B(U);
					}
					reload(U) {
						return this.B(U);
					}
					B(U) {
						if (!this.location) return Promise.resolve(void 0);
						(this.h = []), this.clearCaches();
						const z = {
							colors: {},
							textMateRules: [],
							semanticTokenRules: [],
							semanticHighlighting: !1,
						};
						return S(U, this.location, z).then((F) => {
							(this.isLoaded = !0),
								(this.n = z.semanticTokenRules),
								(this.l = z.colors),
								(this.h = z.textMateRules),
								(this.b = z.semanticHighlighting);
						});
					}
					clearCaches() {
						(this.v = void 0),
							(this.u = void 0),
							(this.q = void 0),
							(this.t = void 0);
					}
					toStorage(U) {
						const z = {};
						for (const x in this.l)
							z[x] = w.$UL.Format.CSS.formatHexA(this.l[x], !0);
						const F = JSON.stringify({
							id: this.id,
							label: this.label,
							settingsId: this.settingsId,
							themeTokenColors: this.h.map((x) => ({
								settings: x.settings,
								scope: x.scope,
							})),
							semanticTokenRules: this.n.map(g.SemanticTokenRule.toJSONObject),
							extensionData: E.ExtensionData.toJSONObject(this.extensionData),
							themeSemanticHighlighting: this.b,
							colorMap: z,
							watch: this.watch,
						});
						U.store(
							$.STORAGE_KEY,
							F,
							f.StorageScope.PROFILE,
							f.StorageTarget.USER,
						);
					}
					get baseTheme() {
						return this.classNames[0];
					}
					get classNames() {
						return this.id.split(" ");
					}
					get type() {
						switch (this.baseTheme) {
							case E.$sRb:
								return b.ColorScheme.LIGHT;
							case E.$uRb:
								return b.ColorScheme.HIGH_CONTRAST_DARK;
							case E.$vRb:
								return b.ColorScheme.HIGH_CONTRAST_LIGHT;
							default:
								return b.ColorScheme.DARK;
						}
					}
					static createUnloadedThemeForThemeType(U, z) {
						return $.createUnloadedTheme((0, a.$mP)(U), z);
					}
					static createUnloadedTheme(U, z) {
						const F = new $(U, "", "__" + U);
						if (((F.isLoaded = !1), (F.h = []), (F.watch = !1), z))
							for (const x in z) F.l[x] = w.$UL.fromHex(z[x]);
						return F;
					}
					static createLoadedEmptyTheme(U, z) {
						const F = new $(U, "", z);
						return (F.isLoaded = !0), (F.h = []), (F.watch = !1), F;
					}
					static fromStorageData(U) {
						const z = U.get($.STORAGE_KEY, f.StorageScope.PROFILE);
						if (z)
							try {
								const F = JSON.parse(z),
									x = new $("", "", "");
								for (const H in F)
									switch (H) {
										case "colorMap": {
											const q = F[H];
											for (const V in q) x.l[V] = w.$UL.fromHex(q[V]);
											break;
										}
										case "themeTokenColors":
										case "id":
										case "label":
										case "settingsId":
										case "watch":
										case "themeSemanticHighlighting":
											x[H] = F[H];
											break;
										case "semanticTokenRules": {
											const q = F[H];
											if (Array.isArray(q))
												for (const V of q) {
													const G = g.SemanticTokenRule.fromJSONObject(l, V);
													G && x.n.push(G);
												}
											break;
										}
										case "location":
											break;
										case "extensionData":
											x.extensionData = E.ExtensionData.fromJSONObject(
												F.extensionData,
											);
											break;
									}
								return !x.id || !x.settingsId ? void 0 : x;
							} catch {
								return;
							}
					}
					static fromExtensionTheme(U, z, F) {
						const x = U.uiTheme || "vs-dark",
							H = v(F.extensionId, U.path),
							q = `${x} ${H}`,
							V = U.label || (0, t.$sc)(U.path),
							G = U.id || V,
							K = new $(q, V, G);
						return (
							(K.description = U.description),
							(K.watch = U._watch === !0),
							(K.location = z),
							(K.extensionData = F),
							(K.isLoaded = !1),
							K
						);
					}
				}
				e.$9vc = $;
				function v(B, U) {
					U.startsWith("./") && (U = U.substr(2));
					let z = `${B}-${U}`;
					return (
						(z = z.replace(/[^_a-zA-Z0-9-]/g, "-")),
						z.charAt(0).match(/[0-9-]/) && (z = "_" + z),
						z
					);
				}
				async function S(B, U, z) {
					if (r.$lh(U) === ".json") {
						const F = await B.readExtensionResource(U),
							x = [],
							H = i.$do(F, x);
						if (x.length > 0)
							return Promise.reject(
								new Error(
									d.localize(
										12735,
										null,
										x.map((K) => (0, c.$br)(K.error)).join(", "),
									),
								),
							);
						if (i.$lo(H) !== "object")
							return Promise.reject(new Error(d.localize(12736, null)));
						if (
							(H.include && (await S(B, r.$nh(r.$mh(U), H.include), z)),
							Array.isArray(H.settings))
						)
							return (0, C.$Tvc)(H.settings, z), null;
						z.semanticHighlighting =
							z.semanticHighlighting || H.semanticHighlighting;
						const q = H.colors;
						if (q) {
							if (typeof q != "object")
								return Promise.reject(
									new Error(d.localize(12737, null, U.toString())),
								);
							for (const K in q) {
								const J = q[K];
								J === u.$vP
									? delete z.colors[K]
									: typeof J == "string" && (z.colors[K] = w.$UL.fromHex(q[K]));
							}
						}
						const V = H.tokenColors;
						if (V)
							if (Array.isArray(V)) z.textMateRules.push(...V);
							else if (typeof V == "string") await I(B, r.$nh(r.$mh(U), V), z);
							else
								return Promise.reject(
									new Error(d.localize(12738, null, U.toString())),
								);
						const G = H.semanticTokenColors;
						if (G && typeof G == "object")
							for (const K in G)
								try {
									const J = M(K, G[K]);
									J && z.semanticTokenRules.push(J);
								} catch {
									return Promise.reject(
										new Error(d.localize(12739, null, U.toString())),
									);
								}
					} else return I(B, U, z);
				}
				function I(B, U, z) {
					return B.readExtensionResource(U).then(
						(F) => {
							try {
								const H = (0, n.$Uvc)(F).settings;
								return Array.isArray(H)
									? ((0, C.$Tvc)(H, z), Promise.resolve(null))
									: Promise.reject(new Error(d.localize(12740, null)));
							} catch (x) {
								return Promise.reject(
									new Error(d.localize(12741, null, x.message)),
								);
							}
						},
						(F) =>
							Promise.reject(
								new Error(d.localize(12742, null, U.toString(), F.message)),
							),
					);
				}
				const T = {
						light: [
							{
								scope: "token.info-token",
								settings: { foreground: "#316bcd" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#cd9731" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#cd3131" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#800080" },
							},
						],
						dark: [
							{
								scope: "token.info-token",
								settings: { foreground: "#6796e6" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#cd9731" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#f44747" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#b267e6" },
							},
						],
						hcLight: [
							{
								scope: "token.info-token",
								settings: { foreground: "#316bcd" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#cd9731" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#cd3131" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#800080" },
							},
						],
						hcDark: [
							{
								scope: "token.info-token",
								settings: { foreground: "#6796e6" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#008000" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#FF0000" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#b267e6" },
							},
						],
					},
					P = (B) => -1;
				function k(B, U) {
					function z(H, q) {
						for (let V = q - 1; V >= 0; V--) if (L(H, B[V])) return V;
						return -1;
					}
					if (U.length < B.length) return -1;
					let F = U.length - 1,
						x = z(U[F--], B.length);
					if (x >= 0) {
						const H = (x + 1) * 65536 + B[x].length;
						for (; F >= 0; ) if (((x = z(U[F--], x)), x === -1)) return -1;
						return H;
					}
					return -1;
				}
				function L(B, U) {
					if (!B) return !1;
					if (B === U) return !0;
					const z = U.length;
					return B.length > z && B.substr(0, z) === U && B[z] === ".";
				}
				function D(B) {
					const U = B.scope;
					if (!U || !B.settings) return P;
					const z = [];
					if (Array.isArray(U)) for (const F of U) (0, p.$Vvc)(F, k, z);
					else (0, p.$Vvc)(U, k, z);
					return z.length === 0
						? P
						: (F) => {
								let x = z[0].matcher(F);
								for (let H = 1; H < z.length; H++)
									x = Math.max(x, z[H].matcher(F));
								return x;
							};
				}
				function M(B, U) {
					const z = l.parseTokenSelector(B);
					let F;
					if (
						(typeof U == "string"
							? (F = g.$lmc.fromSettings(U, void 0))
							: N(U) &&
								(F = g.$lmc.fromSettings(
									U.foreground,
									U.fontStyle,
									U.bold,
									U.underline,
									U.strikethrough,
									U.italic,
								)),
						F)
					)
						return { selector: z, style: F };
				}
				function N(B) {
					return (
						B &&
						(m.$lg(B.foreground) ||
							m.$lg(B.fontStyle) ||
							m.$rg(B.italic) ||
							m.$rg(B.underline) ||
							m.$rg(B.strikethrough) ||
							m.$rg(B.bold))
					);
				}
				class A {
					constructor() {
						(this.b = 0), (this.c = []), (this.g = Object.create(null));
					}
					add(U) {
						if (((U = R(U)), U === void 0)) return 0;
						let z = this.g[U];
						return z || ((z = ++this.b), (this.g[U] = z), (this.c[z] = U), z);
					}
					get(U) {
						if (((U = R(U)), U === void 0)) return 0;
						const z = this.g[U];
						return z || (console.log(`Color ${U} not in index.`), 0);
					}
					asArray() {
						return this.c.slice(0);
					}
				}
				function R(B) {
					if (!B) return;
					typeof B != "string" && (B = w.$UL.Format.CSS.formatHexA(B, !0));
					const U = B.length;
					if (
						B.charCodeAt(0) !== o.CharCode.Hash ||
						(U !== 4 && U !== 5 && U !== 7 && U !== 9)
					)
						return;
					const z = [o.CharCode.Hash];
					for (let F = 1; F < U; F++) {
						const x = O(B.charCodeAt(F));
						if (!x) return;
						z.push(x), (U === 4 || U === 5) && z.push(x);
					}
					return (
						z.length === 9 &&
							z[7] === o.CharCode.F &&
							z[8] === o.CharCode.F &&
							(z.length = 7),
						String.fromCharCode(...z)
					);
				}
				function O(B) {
					return (B >= o.CharCode.Digit0 && B <= o.CharCode.Digit9) ||
						(B >= o.CharCode.A && B <= o.CharCode.F)
						? B
						: B >= o.CharCode.a && B <= o.CharCode.f
							? B - o.CharCode.a + o.CharCode.A
							: 0;
				}
			},
		),
		