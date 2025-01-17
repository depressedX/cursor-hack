import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/strings.js';
import './languagesAssociations.js';
import '../encodedTokenAttributes.js';
import '../languages/modesRegistry.js';
import '../../../platform/configuration/common/configurationRegistry.js';
import '../../../platform/registry/common/platform.js';
define(
			de[2773],
			he([1, 0, 6, 3, 37, 671, 171, 172, 81, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oYb = e.$nYb = void 0);
				const u = Object.prototype.hasOwnProperty,
					a = "vs.editor.nullLanguage";
				class h {
					constructor() {
						(this.e = []),
							(this.f = new Map()),
							this.g(a, C.LanguageId.Null),
							this.g(d.$0M, C.LanguageId.PlainText),
							(this.c = 2);
					}
					g(g, p) {
						(this.e[p] = g), this.f.set(g, p);
					}
					register(g) {
						if (this.f.has(g)) return;
						const p = this.c++;
						this.g(g, p);
					}
					encodeLanguageId(g) {
						return this.f.get(g) || C.LanguageId.Null;
					}
					decodeLanguageId(g) {
						return this.e[g] || a;
					}
				}
				e.$nYb = h;
				class c extends i.$1c {
					static {
						this.instanceCount = 0;
					}
					constructor(g = !0, p = !1) {
						super(),
							(this.c = this.D(new t.$re())),
							(this.onDidChange = this.c.event),
							c.instanceCount++,
							(this.f = p),
							(this.languageIdCodec = new h()),
							(this.g = []),
							(this.h = {}),
							(this.j = {}),
							(this.n = {}),
							(this.q = {}),
							g &&
								(this.r(),
								this.D(
									d.$9M.onDidChangeLanguages((o) => {
										this.r();
									}),
								));
					}
					dispose() {
						c.instanceCount--, super.dispose();
					}
					setDynamicLanguages(g) {
						(this.g = g), this.r();
					}
					r() {
						(this.h = {}),
							(this.j = {}),
							(this.n = {}),
							(this.q = {}),
							(0, E.$jYb)();
						const g = [].concat(d.$9M.getLanguages()).concat(this.g);
						this._registerLanguages(g);
					}
					registerLanguage(g) {
						return d.$9M.registerLanguage(g);
					}
					_registerLanguages(g) {
						for (const p of g) this.s(p);
						(this.j = {}),
							(this.n = {}),
							(this.q = {}),
							Object.keys(this.h).forEach((p) => {
								const o = this.h[p];
								o.name && (this.n[o.name] = o.identifier),
									o.aliases.forEach((f) => {
										this.q[f.toLowerCase()] = o.identifier;
									}),
									o.mimetypes.forEach((f) => {
										this.j[f] = o.identifier;
									});
							}),
							r.$Io
								.as(m.$No.Configuration)
								.registerOverrideIdentifiers(this.getRegisteredLanguageIds()),
							this.c.fire();
					}
					s(g) {
						const p = g.id;
						let o;
						u.call(this.h, p)
							? (o = this.h[p])
							: (this.languageIdCodec.register(p),
								(o = {
									identifier: p,
									name: null,
									mimetypes: [],
									aliases: [],
									extensions: [],
									filenames: [],
									configurationFiles: [],
									icons: [],
								}),
								(this.h[p] = o)),
							this.t(o, g);
					}
					t(g, p) {
						const o = p.id;
						let f = null;
						if (
							(Array.isArray(p.mimetypes) &&
								p.mimetypes.length > 0 &&
								(g.mimetypes.push(...p.mimetypes), (f = p.mimetypes[0])),
							f || ((f = `text/x-${o}`), g.mimetypes.push(f)),
							Array.isArray(p.extensions))
						) {
							p.configuration
								? (g.extensions = p.extensions.concat(g.extensions))
								: (g.extensions = g.extensions.concat(p.extensions));
							for (const l of p.extensions)
								(0, E.$hYb)({ id: o, mime: f, extension: l }, this.f);
						}
						if (Array.isArray(p.filenames))
							for (const l of p.filenames)
								(0, E.$hYb)({ id: o, mime: f, filename: l }, this.f),
									g.filenames.push(l);
						if (Array.isArray(p.filenamePatterns))
							for (const l of p.filenamePatterns)
								(0, E.$hYb)({ id: o, mime: f, filepattern: l }, this.f);
						if (typeof p.firstLine == "string" && p.firstLine.length > 0) {
							let l = p.firstLine;
							l.charAt(0) !== "^" && (l = "^" + l);
							try {
								const y = new RegExp(l);
								(0, w.$yf)(y) ||
									(0, E.$hYb)({ id: o, mime: f, firstline: y }, this.f);
							} catch (y) {
								console.warn(
									`[${p.id}]: Invalid regular expression \`${l}\`: `,
									y,
								);
							}
						}
						g.aliases.push(o);
						let b = null;
						if (
							(typeof p.aliases < "u" &&
								Array.isArray(p.aliases) &&
								(p.aliases.length === 0 ? (b = [null]) : (b = p.aliases)),
							b !== null)
						)
							for (const l of b) !l || l.length === 0 || g.aliases.push(l);
						const s = b !== null && b.length > 0;
						if (!(s && b[0] === null)) {
							const l = (s ? b[0] : null) || o;
							(s || !g.name) && (g.name = l);
						}
						p.configuration && g.configurationFiles.push(p.configuration),
							p.icon && g.icons.push(p.icon);
					}
					isRegisteredLanguageId(g) {
						return g ? u.call(this.h, g) : !1;
					}
					getRegisteredLanguageIds() {
						return Object.keys(this.h);
					}
					getSortedRegisteredLanguageNames() {
						const g = [];
						for (const p in this.n)
							u.call(this.n, p) &&
								g.push({ languageName: p, languageId: this.n[p] });
						return (
							g.sort((p, o) => (0, w.$Hf)(p.languageName, o.languageName)), g
						);
					}
					getLanguageName(g) {
						return u.call(this.h, g) ? this.h[g].name : null;
					}
					getMimeType(g) {
						return (u.call(this.h, g) && this.h[g].mimetypes[0]) || null;
					}
					getExtensions(g) {
						return u.call(this.h, g) ? this.h[g].extensions : [];
					}
					getFilenames(g) {
						return u.call(this.h, g) ? this.h[g].filenames : [];
					}
					getIcon(g) {
						return (u.call(this.h, g) && this.h[g].icons[0]) || null;
					}
					getConfigurationFiles(g) {
						return u.call(this.h, g) ? this.h[g].configurationFiles || [] : [];
					}
					getLanguageIdByLanguageName(g) {
						const p = g.toLowerCase();
						return u.call(this.q, p) ? this.q[p] : null;
					}
					getLanguageIdByMimeType(g) {
						return g && u.call(this.j, g) ? this.j[g] : null;
					}
					guessLanguageIdByFilepathOrFirstLine(g, p) {
						return !g && !p ? [] : (0, E.$mYb)(g, p);
					}
				}
				e.$oYb = c;
			},
		),
		