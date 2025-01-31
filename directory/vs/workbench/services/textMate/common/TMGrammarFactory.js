import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import './TMScopeRegistry.js';
define(de[3675], he([1, 0, 3, 3674]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*TMScopeRegistry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$yyc = e.$xyc = void 0),
				(e.$xyc = "No TM Grammar registered for this language.");
			class w extends t.$1c {
				constructor(C, d, m, r) {
					super(),
						(this.a = C),
						(this.b = m.INITIAL),
						(this.c = new i.$wyc()),
						(this.f = {}),
						(this.g = {}),
						(this.h = new Map()),
						(this.j = this.D(
							new m.Registry({
								onigLib: r,
								loadGrammar: async (u) => {
									const a = this.c.getGrammarDefinition(u);
									if (!a)
										return (
											this.a.logTrace(`No grammar found for scope ${u}`), null
										);
									const h = a.location;
									try {
										const c = await this.a.readFile(h);
										return m.parseRawGrammar(c, h.path);
									} catch (c) {
										return (
											this.a.logError(
												`Unable to load and parse grammar for scope ${u} from ${h}`,
												c,
											),
											null
										);
									}
								},
								getInjections: (u) => {
									const a = u.split(".");
									let h = [];
									for (let c = 1; c <= a.length; c++) {
										const n = a.slice(0, c).join(".");
										h = [...h, ...(this.f[n] || [])];
									}
									return h;
								},
							}),
						));
					for (const u of d) {
						if ((this.c.register(u), u.injectTo)) {
							for (const a of u.injectTo) {
								let h = this.f[a];
								h || (this.f[a] = h = []), h.push(u.scopeName);
							}
							if (u.embeddedLanguages)
								for (const a of u.injectTo) {
									let h = this.g[a];
									h || (this.g[a] = h = []), h.push(u.embeddedLanguages);
								}
						}
						u.language && this.h.set(u.language, u.scopeName);
					}
				}
				has(C) {
					return this.h.has(C);
				}
				setTheme(C, d) {
					this.j.setTheme(C, d);
				}
				getColorMap() {
					return this.j.getColorMap();
				}
				async createGrammar(C, d) {
					const m = this.h.get(C);
					if (typeof m != "string") throw new Error(e.$xyc);
					const r = this.c.getGrammarDefinition(m);
					if (!r) throw new Error(e.$xyc);
					const u = r.embeddedLanguages;
					if (this.g[m]) {
						const c = this.g[m];
						for (const n of c) for (const g of Object.keys(n)) u[g] = n[g];
					}
					const a = Object.keys(u).length > 0;
					let h;
					try {
						h = await this.j.loadGrammarWithConfiguration(m, d, {
							embeddedLanguages: u,
							tokenTypes: r.tokenTypes,
							balancedBracketSelectors: r.balancedBracketSelectors,
							unbalancedBracketSelectors: r.unbalancedBracketSelectors,
						});
					} catch (c) {
						throw c.message && c.message.startsWith("No grammar provided for")
							? new Error(e.$xyc)
							: c;
					}
					return {
						languageId: C,
						grammar: h,
						initialState: this.b,
						containsEmbeddedLanguages: a,
						sourceExtensionId: r.sourceExtensionId,
					};
				}
			}
			e.$yyc = w;
		})
