import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import './extensionFeatures.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/types.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../nls.js';
import '../../extensions/common/extensions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/objects.js';
define(
			de[3320],
			he([1, 0, 6, 109, 3, 244, 20, 21, 30, 28, 57, 4, 53, 24, 82]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*extensions*/,
 w /*lifecycle*/,
 E /*extensionFeatures*/,
 C /*extensions*/,
 d /*storage*/,
 m /*platform*/,
 r /*types*/,
 u /*dialogs*/,
 a /*nls*/,
 h /*extensions*/,
 c /*arrays*/,
 n /*objects*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const g = "extension.features.state";
				let p = class extends w.$1c {
					constructor(f, b, s) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeAccessData = this.b.event),
							(this.f = new Map()),
							(this.c = m.$Io.as(E.Extensions.ExtensionFeaturesRegistry)),
							(this.f = this.r()),
							this.D(
								f.onDidChangeValue(
									d.StorageScope.PROFILE,
									g,
									this.B,
								)((l) => this.q(l)),
							);
					}
					isEnabled(f, b) {
						const s = this.c.getExtensionFeature(b);
						if (!s) return !1;
						const l = this.m(f, b)?.disabled;
						if ((0, r.$rg)(l)) return !l;
						const y = s.access.extensionsList?.[f.value];
						return (0, r.$rg)(y) ? y : !s.access.requireUserConsent;
					}
					setEnablement(f, b, s) {
						if (!this.c.getExtensionFeature(b))
							throw new Error(`No feature with id '${b}'`);
						const y = this.n(f, b);
						y.disabled !== !s &&
							((y.disabled = !s),
							this.a.fire({ extension: f, featureId: b, enabled: s }),
							this.s());
					}
					getEnablementData(f) {
						const b = [];
						if (this.c.getExtensionFeature(f))
							for (const [l, y] of this.f) {
								const $ = y.get(f);
								$?.disabled !== void 0 &&
									b.push({ extension: new i.$Gn(l), enabled: !$.disabled });
							}
						return b;
					}
					async getAccess(f, b, s) {
						const l = this.c.getExtensionFeature(b);
						if (!l) return !1;
						const y = this.n(f, b);
						if (y.disabled) return !1;
						if (y.disabled === void 0) {
							let $ = !0;
							if (l.access.requireUserConsent) {
								const v = this.j.extensions.find((I) =>
									i.$Gn.equals(I.identifier, f),
								);
								$ = (
									await this.h.confirm({
										title: (0, a.localize)(12285, null, l.label),
										message: (0, a.localize)(
											12286,
											null,
											v?.displayName ?? f.value,
											l.label,
										),
										detail: s ?? l.description,
										custom: !0,
										primaryButton: (0, a.localize)(12287, null),
										cancelButton: (0, a.localize)(12288, null),
									})
								).confirmed;
							}
							if ((this.setEnablement(f, b, $), !$)) return !1;
						}
						return (
							(y.accessData.current = {
								count: y.accessData.current?.count
									? y.accessData.current?.count + 1
									: 1,
								lastAccessed: Date.now(),
								status: y.accessData.current?.status,
							}),
							(y.accessData.totalCount = y.accessData.totalCount + 1),
							this.s(),
							this.b.fire({
								extension: f,
								featureId: b,
								accessData: y.accessData,
							}),
							!0
						);
					}
					getAccessData(f, b) {
						if (this.c.getExtensionFeature(b)) return this.m(f, b)?.accessData;
					}
					setStatus(f, b, s) {
						if (!this.c.getExtensionFeature(b))
							throw new Error(`No feature with id '${b}'`);
						const y = this.n(f, b);
						(y.accessData.current = {
							count: y.accessData.current?.count ?? 0,
							lastAccessed: y.accessData.current?.lastAccessed ?? 0,
							status: s,
						}),
							this.b.fire({
								extension: f,
								featureId: b,
								accessData: this.getAccessData(f, b),
							});
					}
					m(f, b) {
						return this.f.get(f.value)?.get(b);
					}
					n(f, b) {
						let s = this.f.get(f.value);
						s || ((s = new Map()), this.f.set(f.value, s));
						let l = s.get(b);
						return (
							l || ((l = { accessData: { totalCount: 0 } }), s.set(b, l)), l
						);
					}
					q(f) {
						if (f.external) {
							const b = this.f;
							this.f = this.r();
							for (const s of (0, c.$Qb)([...b.keys(), ...this.f.keys()])) {
								const l = new i.$Gn(s),
									y = b.get(s),
									$ = this.f.get(s);
								for (const v of (0, c.$Qb)([
									...(y?.keys() ?? []),
									...($?.keys() ?? []),
								])) {
									const S = this.isEnabled(l, v),
										I = !y?.get(v)?.disabled;
									S !== I &&
										this.a.fire({ extension: l, featureId: v, enabled: S });
									const T = this.getAccessData(l, v),
										P = y?.get(v)?.accessData;
									(0, n.$zo)(T, P) ||
										this.b.fire({
											extension: l,
											featureId: v,
											accessData: T ?? { totalCount: 0 },
										});
								}
							}
						}
					}
					r() {
						let f = {};
						const b = this.g.get(g, d.StorageScope.PROFILE, "{}");
						try {
							f = JSON.parse(b);
						} catch {}
						const s = new Map();
						for (const l in f) {
							const y = new Map(),
								$ = f[l];
							for (const v in $) {
								const S = $[v];
								y.set(v, {
									disabled: S.disabled,
									accessData: { totalCount: S.accessCount },
								});
							}
							s.set(l, y);
						}
						return s;
					}
					s() {
						const f = {};
						this.f.forEach((b, s) => {
							const l = {};
							b.forEach((y, $) => {
								l[$] = {
									disabled: y.disabled,
									accessCount: y.accessData.totalCount,
								};
							}),
								(f[s] = l);
						}),
							this.g.store(
								g,
								JSON.stringify(f),
								d.StorageScope.PROFILE,
								d.StorageTarget.USER,
							);
					}
				};
				(p = Ne([j(0, d.$lq), j(1, u.$GO), j(2, h.$q2)], p)),
					(0, C.$lK)(E.$$Sb, p, C.InstantiationType.Delayed);
			},
		),
		