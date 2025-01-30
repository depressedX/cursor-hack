import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/json.js';
import '../common/workbenchThemeService.js';
import '../../../../base/common/jsonErrorMessages.js';
import '../../../../platform/storage/common/storage.js';
import '../common/productIconThemeSchema.js';
import '../../../../base/common/types.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/themables.js';
define(
			de[1890],
			he([1, 0, 4, 54, 19, 187, 333, 754, 21, 1322, 28, 79, 26]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*path*/,
 w /*resources*/,
 E /*json*/,
 C /*workbenchThemeService*/,
 d /*jsonErrorMessages*/,
 m /*storage*/,
 r /*productIconThemeSchema*/,
 u /*types*/,
 a /*iconRegistry*/,
 h /*themables*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lwc = e.$kwc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E)),
					(e.$kwc = "");
				class c {
					static {
						this.STORAGE_KEY = "productIconThemeData";
					}
					constructor(f, b, s) {
						(this.iconThemeDocument = { iconDefinitions: new Map() }),
							(this.id = f),
							(this.label = b),
							(this.settingsId = s),
							(this.isLoaded = !1);
					}
					getIcon(f) {
						return p(f, this.iconThemeDocument);
					}
					ensureLoaded(f, b) {
						return this.isLoaded
							? Promise.resolve(this.styleSheetContent)
							: this.a(f, b);
					}
					reload(f, b) {
						return this.a(f, b);
					}
					async a(f, b) {
						const s = this.location;
						if (!s) return Promise.resolve(this.styleSheetContent);
						const l = [];
						return (
							(this.iconThemeDocument = await n(f, s, l)),
							(this.isLoaded = !0),
							l.length &&
								b.error(
									t.localize(
										12700,
										null,
										s.toString(),
										l.join(`
`),
									),
								),
							this.styleSheetContent
						);
					}
					static fromExtensionTheme(f, b, s) {
						const l = s.extensionId + "-" + f.id,
							y = f.label || i.$sc(f.path),
							$ = f.id,
							v = new c(l, y, $);
						return (
							(v.description = f.description),
							(v.location = b),
							(v.extensionData = s),
							(v.watch = f._watch),
							(v.isLoaded = !1),
							v
						);
					}
					static createUnloadedTheme(f) {
						const b = new c(f, "", "__" + f);
						return (
							(b.isLoaded = !1), (b.extensionData = void 0), (b.watch = !1), b
						);
					}
					static {
						this.b = null;
					}
					static get defaultTheme() {
						let f = c.b;
						return (
							f ||
								((f = c.b =
									new c(
										e.$kwc,
										t.localize(12701, null),
										C.ThemeSettingDefaults.PRODUCT_ICON_THEME,
									)),
								(f.isLoaded = !0),
								(f.extensionData = void 0),
								(f.watch = !1)),
							f
						);
					}
					static fromStorageData(f) {
						const b = f.get(c.STORAGE_KEY, m.StorageScope.PROFILE);
						if (b)
							try {
								const s = JSON.parse(b),
									l = new c("", "", "");
								for (const v in s)
									switch (v) {
										case "id":
										case "label":
										case "description":
										case "settingsId":
										case "styleSheetContent":
										case "watch":
											l[v] = s[v];
											break;
										case "location":
											break;
										case "extensionData":
											l.extensionData = C.ExtensionData.fromJSONObject(
												s.extensionData,
											);
											break;
									}
								const { iconDefinitions: y, iconFontDefinitions: $ } = s;
								if (Array.isArray(y) && (0, u.$ng)($)) {
									const v = new Map();
									for (const S of y) {
										const { id: I, fontCharacter: T, fontId: P } = S;
										if ((0, u.$lg)(I) && (0, u.$lg)(T))
											if ((0, u.$lg)(P)) {
												const k = a.IconFontDefinition.fromJSONObject($[P]);
												k &&
													v.set(I, {
														fontCharacter: T,
														font: { id: P, definition: k },
													});
											} else v.set(I, { fontCharacter: T });
									}
									l.iconThemeDocument = { iconDefinitions: v };
								}
								return l;
							} catch {
								return;
							}
					}
					toStorage(f) {
						const b = [],
							s = {};
						for (const y of this.iconThemeDocument.iconDefinitions.entries()) {
							const $ = y[1].font;
							b.push({
								id: y[0],
								fontCharacter: y[1].fontCharacter,
								fontId: $?.id,
							}),
								$ &&
									s[$.id] === void 0 &&
									(s[$.id] = a.IconFontDefinition.toJSONObject($.definition));
						}
						const l = JSON.stringify({
							id: this.id,
							label: this.label,
							description: this.description,
							settingsId: this.settingsId,
							styleSheetContent: this.styleSheetContent,
							watch: this.watch,
							extensionData: C.ExtensionData.toJSONObject(this.extensionData),
							iconDefinitions: b,
							iconFontDefinitions: s,
						});
						f.store(
							c.STORAGE_KEY,
							l,
							m.StorageScope.PROFILE,
							m.StorageTarget.MACHINE,
						);
					}
				}
				e.$lwc = c;
				function n(o, f, b) {
					return o.readExtensionResource(f).then((s) => {
						const l = [],
							y = E.$do(s, l);
						if (l.length > 0)
							return Promise.reject(
								new Error(
									t.localize(
										12702,
										null,
										l.map((T) => (0, d.$br)(T.error)).join(", "),
									),
								),
							);
						if (E.$lo(y) !== "object")
							return Promise.reject(new Error(t.localize(12703, null)));
						if (
							!y.iconDefinitions ||
							!Array.isArray(y.fonts) ||
							!y.fonts.length
						)
							return Promise.reject(new Error(t.localize(12704, null)));
						const $ = w.$mh(f),
							v = new Map();
						for (const T of y.fonts)
							if ((0, u.$lg)(T.id) && T.id.match(r.$0vc)) {
								const P = T.id;
								let k;
								(0, u.$lg)(T.weight) && T.weight.match(r.$_vc)
									? (k = T.weight)
									: b.push(t.localize(12705, null, T.id));
								let L;
								(0, u.$lg)(T.style) && T.style.match(r.$$vc)
									? (L = T.style)
									: b.push(t.localize(12706, null, T.id));
								const D = [];
								if (Array.isArray(T.src))
									for (const M of T.src)
										if (
											(0, u.$lg)(M.path) &&
											(0, u.$lg)(M.format) &&
											M.format.match(r.$bwc)
										) {
											const N = w.$nh($, M.path);
											D.push({ location: N, format: M.format });
										} else b.push(t.localize(12707, null, T.id));
								D.length
									? v.set(P, { weight: k, style: L, src: D })
									: b.push(t.localize(12708, null, T.id));
							} else b.push(t.localize(12709, null, T.id));
						const S = new Map(),
							I = y.fonts[0].id;
						for (const T in y.iconDefinitions) {
							const P = y.iconDefinitions[T];
							if ((0, u.$lg)(P.fontCharacter)) {
								const k = P.fontId ?? I,
									L = v.get(k);
								if (L) {
									const D = { id: `pi-${k}`, definition: L };
									S.set(T, { fontCharacter: P.fontCharacter, font: D });
								} else b.push(t.localize(12710, null, T));
							} else b.push(t.localize(12711, null, T));
						}
						return { iconDefinitions: S };
					});
				}
				const g = (0, a.$_O)();
				function p(o, f) {
					const b = f.iconDefinitions;
					let s = b.get(o.id),
						l = o.defaults;
					for (; !s && h.ThemeIcon.isThemeIcon(l); ) {
						const y = g.getIcon(l.id);
						if (y) (s = b.get(y.id)), (l = y.defaults);
						else return;
					}
					if (s) return s;
					if (!h.ThemeIcon.isThemeIcon(l)) return l;
				}
			},
		),
		