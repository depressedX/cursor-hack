import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/network.js';
import '../../../base/common/resources.js';
import '../../../base/common/semver/semver.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import './extensionManagement.js';
import './extensionManagementUtil.js';
import '../../extensions/common/extensions.js';
define(
			de[2817],
			he([1, 0, 33, 29, 23, 19, 464, 9, 4, 119, 154, 109]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*errors*/,
 w /*network*/,
 E /*resources*/,
 C /*semver*/,
 d /*uri*/,
 m /*nls*/,
 r /*extensionManagement*/,
 u /*extensionManagementUtil*/,
 a /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Yq = void 0);
				const h = (g) => (0, m.localize)(1794, null, g),
					c = (0, m.localize)(1795, null, "ms-dotnettools.csharp");
				let n = class {
					constructor(p, o, f) {
						(this.a = p), (this.b = o), (this.d = f);
					}
					get f() {}
					async listExtensions(p, o, f) {
						let b = await this.b.getInstalled(a.ExtensionType.User, f);
						const s = a.$Fn.map((y) => y.toLowerCase());
						if (o && o !== "") {
							if (s.indexOf(o.toLowerCase()) < 0) {
								this.a.info(
									"Invalid category please enter a valid category. To list valid categories run --category without a category specified",
								);
								return;
							}
							b = b.filter((y) =>
								y.manifest.categories
									? y.manifest.categories
											.map((v) => v.toLowerCase())
											.indexOf(o.toLowerCase()) > -1
									: !1,
							);
						} else if (o === "") {
							this.a.info("Possible Categories: "),
								s.forEach((y) => {
									this.a.info(y);
								});
							return;
						}
						this.f && this.a.info((0, m.localize)(1796, null, this.f)),
							(b = b.sort((y, $) =>
								y.identifier.id.localeCompare($.identifier.id),
							));
						let l;
						for (const y of b)
							l !== y.identifier.id &&
								((l = y.identifier.id),
								this.a.info(p ? `${l}@${y.manifest.version}` : l));
					}
					async installExtensions(p, o, f, b) {
						const s = [];
						try {
							p.length &&
								this.a.info(
									this.f
										? (0, m.localize)(1797, null, this.f)
										: (0, m.localize)(1798, null),
								);
							const l = [],
								y = [],
								$ = (S, I, T) => {
									y.push({
										id: S,
										version: I !== "prerelease" ? I : void 0,
										installOptions: {
											...f,
											isBuiltin: T,
											installPreReleaseVersion:
												I === "prerelease" || f.installPreReleaseVersion,
										},
									});
								};
							for (const S of p)
								if (S instanceof d.URI) l.push({ vsix: S, installOptions: f });
								else {
									const [I, T] = (0, u.$9p)(S);
									$(I, T, !1);
								}
							for (const S of o)
								if (S instanceof d.URI)
									l.push({
										vsix: S,
										installOptions: {
											...f,
											isBuiltin: !0,
											donotIncludePackAndDependencies: !0,
										},
									});
								else {
									const [I, T] = (0, u.$9p)(S);
									$(I, T, !0);
								}
							const v = await this.b.getInstalled(void 0, f.profileLocation);
							if (
								(l.length &&
									(await Promise.all(
										l.map(async ({ vsix: S, installOptions: I }) => {
											try {
												await this.h(S, I, b, v);
											} catch (T) {
												this.a.error(T), s.push(S.toString());
											}
										}),
									)),
								y.length)
							) {
								const S = await this.g(y, v, b);
								s.push(...S);
							}
						} catch (l) {
							throw (
								(this.a.error((0, m.localize)(1799, null, (0, i.$bb)(l))), l)
							);
						}
						if (s.length)
							throw new Error((0, m.localize)(1800, null, s.join(", ")));
					}
					async updateExtensions(p) {
						const o = await this.b.getInstalled(a.ExtensionType.User, p),
							f = [];
						for (const y of o)
							y.identifier.uuid &&
								f.push({ ...y.identifier, preRelease: y.preRelease });
						this.a.trace((0, m.localize)(1801, null, f.length));
						const b = await this.d.getExtensions(
								f,
								{ compatible: !0 },
								t.CancellationToken.None,
							),
							s = [];
						for (const y of b)
							for (const $ of o)
								(0, u.$7p)($.identifier, y.identifier) &&
									(0, C.gt)(y.version, $.manifest.version) &&
									s.push({
										extension: y,
										options: {
											operation: r.InstallOperation.Update,
											installPreReleaseVersion: $.preRelease,
											profileLocation: p,
											isApplicationScoped: $.isApplicationScoped,
										},
									});
						if (!s.length) {
							this.a.info((0, m.localize)(1802, null));
							return;
						}
						this.a.info(
							(0, m.localize)(
								1803,
								null,
								s.map((y) => y.extension.identifier.id).join(", "),
							),
						);
						const l = await this.b.installGalleryExtensions(s);
						for (const y of l)
							y.error
								? this.a.error(
										(0, m.localize)(
											1804,
											null,
											y.identifier.id,
											(0, i.$bb)(y.error),
										),
									)
								: this.a.info(
										(0, m.localize)(
											1805,
											null,
											y.identifier.id,
											y.local?.manifest.version,
										),
									);
					}
					async g(p, o, f) {
						if (
							((p = p.filter(({ id: y, version: $ }) => {
								const v = o.find((S) => (0, u.$7p)(S.identifier, { id: y }));
								if (v) {
									if (!f && (!$ || ($ === "prerelease" && v.preRelease)))
										return (
											this.a.info(
												(0, m.localize)(1806, null, y, v.manifest.version, y),
											),
											!1
										);
									if ($ && v.manifest.version === $)
										return (
											this.a.info((0, m.localize)(1807, null, `${y}@${$}`)), !1
										);
								}
								return !0;
							})),
							!p.length)
						)
							return [];
						const b = [],
							s = [],
							l = await this.j(p);
						if (
							(await Promise.all(
								p.map(async ({ id: y, version: $, installOptions: v }) => {
									const S = l.get(y.toLowerCase());
									if (!S) {
										this.a.error(`${h($ ? `${y}@${$}` : y)}
${c}`),
											b.push(y);
										return;
									}
									try {
										const T = await this.d.getManifest(
											S,
											t.CancellationToken.None,
										);
										if (T && !this.k(T)) return;
									} catch (T) {
										this.a.error(T.message || T.stack || T), b.push(y);
										return;
									}
									const I = o.find((T) =>
										(0, u.$7p)(T.identifier, S.identifier),
									);
									if (I) {
										if (S.version === I.manifest.version) {
											this.a.info(
												(0, m.localize)(1808, null, $ ? `${y}@${$}` : y),
											);
											return;
										}
										this.a.info((0, m.localize)(1809, null, y, S.version));
									}
									v.isBuiltin
										? this.a.info(
												$
													? (0, m.localize)(1810, null, y, $)
													: (0, m.localize)(1811, null, y),
											)
										: this.a.info(
												$
													? (0, m.localize)(1812, null, y, $)
													: (0, m.localize)(1813, null, y),
											),
										s.push({
											extension: S,
											options: {
												...v,
												installGivenVersion: !!$,
												isApplicationScoped:
													v.isApplicationScoped || I?.isApplicationScoped,
											},
										});
								}),
							),
							s.length)
						) {
							const y = await this.b.installGalleryExtensions(s);
							for (const $ of y)
								$.error
									? (this.a.error(
											(0, m.localize)(
												1814,
												null,
												$.identifier.id,
												(0, i.$bb)($.error),
											),
										),
										b.push($.identifier.id))
									: this.a.info(
											(0, m.localize)(
												1815,
												null,
												$.identifier.id,
												$.local?.manifest.version,
											),
										);
						}
						return b;
					}
					async h(p, o, f, b) {
						const s = await this.b.getManifest(p);
						if (!s) throw new Error("Invalid vsix");
						if (await this.l(s, f, o.profileLocation, b))
							try {
								await this.b.install(p, { ...o, installGivenVersion: !0 }),
									this.a.info((0, m.localize)(1816, null, (0, E.$kh)(p)));
							} catch (y) {
								if ((0, i.$8)(y))
									this.a.info((0, m.localize)(1817, null, (0, E.$kh)(p)));
								else throw y;
							}
					}
					async j(p) {
						const o = new Map(),
							f = p.some((l) => l.installOptions.installPreReleaseVersion),
							b = await this.b.getTargetPlatform(),
							s = [];
						for (const l of p)
							r.$sp.test(l.id) && s.push({ ...l, preRelease: f });
						if (s.length) {
							const l = await this.d.getExtensions(
								s,
								{ targetPlatform: b },
								t.CancellationToken.None,
							);
							for (const y of l) o.set(y.identifier.id.toLowerCase(), y);
						}
						return o;
					}
					k(p) {
						return !0;
					}
					async l(p, o, f, b) {
						if (!o) {
							const s = { id: (0, u.$_p)(p.publisher, p.name) },
								l = b.find(
									(y) =>
										(0, u.$7p)(s, y.identifier) &&
										(0, C.gt)(y.manifest.version, p.version),
								);
							if (l)
								return (
									this.a.info(
										(0, m.localize)(
											1818,
											null,
											l.identifier.id,
											l.manifest.version,
											p.version,
										),
									),
									!1
								);
						}
						return this.k(p);
					}
					async uninstallExtensions(p, o, f) {
						const b = async (l) => {
								if (l instanceof d.URI) {
									const y = await this.b.getManifest(l);
									return (0, u.$0p)(y.publisher, y.name);
								}
								return l;
							},
							s = [];
						for (const l of p) {
							const y = await b(l),
								v = (await this.b.getInstalled(void 0, f)).filter((S) =>
									(0, u.$7p)(S.identifier, { id: y }),
								);
							if (!v.length)
								throw new Error(`${this.m(y)}
${c}`);
							if (v.some((S) => S.type === a.ExtensionType.System)) {
								this.a.info((0, m.localize)(1819, null, y));
								return;
							}
							if (!o && v.some((S) => S.isBuiltin)) {
								this.a.info((0, m.localize)(1820, null, y));
								return;
							}
							this.a.info((0, m.localize)(1821, null, y));
							for (const S of v)
								await this.b.uninstall(S, { profileLocation: f }), s.push(S);
							this.f
								? this.a.info((0, m.localize)(1822, null, y, this.f))
								: this.a.info((0, m.localize)(1823, null, y));
						}
					}
					async locateExtension(p) {
						const o = await this.b.getInstalled();
						p.forEach((f) => {
							o.forEach((b) => {
								if (
									b.identifier.id === f &&
									b.location.scheme === w.Schemas.file
								) {
									this.a.info(b.location.fsPath);
									return;
								}
							});
						});
					}
					m(p) {
						return this.f
							? (0, m.localize)(1824, null, p, this.f)
							: (0, m.localize)(1825, null, p);
					}
				};
				(e.$Yq = n), (e.$Yq = n = Ne([j(1, r.$Hp), j(2, r.$Ep)], n));
			},
		)
