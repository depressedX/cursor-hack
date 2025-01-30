import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../services/extensions/common/extensionDescriptionRegistry.js';
import '../../../platform/extensions/common/extensions.js';
import '../../services/extensions/common/extensions.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/async.js';
define(
			Pe[536],
			Ne([1, 0, 12, 3, 295, 25, 29, 14, 9]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Lhd = t.$Khd = t.$Jhd = t.$Ihd = t.$Hhd = t.$Ghd = void 0),
					(e = tt(e));
				class n {
					static {
						this.NONE = new n(!1, -1, -1, -1);
					}
					constructor(T, a, u, s) {
						(this.startup = T),
							(this.codeLoadingTime = a),
							(this.activateCallTime = u),
							(this.activateResolvedTime = s);
					}
				}
				t.$Ghd = n;
				class p {
					constructor(T) {
						(this.a = T),
							(this.b = -1),
							(this.c = -1),
							(this.d = -1),
							(this.f = -1),
							(this.g = -1),
							(this.h = -1);
					}
					j(T, a) {
						return T === -1 || a === -1 ? -1 : a - T;
					}
					build() {
						return new n(
							this.a,
							this.j(this.b, this.c),
							this.j(this.d, this.f),
							this.j(this.g, this.h),
						);
					}
					codeLoadingStart() {
						this.b = Date.now();
					}
					codeLoadingStop() {
						this.c = Date.now();
					}
					activateCallStart() {
						this.d = Date.now();
					}
					activateCallStop() {
						this.f = Date.now();
					}
					activateResolveStart() {
						this.g = Date.now();
					}
					activateResolveStop() {
						this.h = Date.now();
					}
				}
				t.$Hhd = p;
				class y {
					constructor(T, a, u, s, f, o) {
						(this.activationFailed = T),
							(this.activationFailedError = a),
							(this.activationTimes = u),
							(this.module = s),
							(this.exports = f),
							(this.disposable = o);
					}
				}
				t.$Ihd = y;
				class d extends y {
					constructor(T) {
						super(
							!1,
							null,
							T,
							{ activate: void 0, deactivate: void 0 },
							void 0,
							r.$1c.None,
						);
					}
				}
				t.$Jhd = d;
				class k extends y {
					constructor() {
						super(
							!1,
							null,
							n.NONE,
							{ activate: void 0, deactivate: void 0 },
							void 0,
							r.$1c.None,
						);
					}
				}
				t.$Khd = k;
				class g extends y {
					constructor(T) {
						super(
							!0,
							T,
							n.NONE,
							{ activate: void 0, deactivate: void 0 },
							void 0,
							r.$1c.None,
						);
					}
				}
				let c = class {
					constructor(T, a, u, s) {
						(this.g = s),
							(this.a = T),
							(this.b = a),
							(this.c = u),
							(this.d = new N.$In()),
							(this.f = Object.create(null));
					}
					dispose() {
						for (const [T, a] of this.d) a.dispose();
					}
					async waitForActivatingExtensions() {
						const T = [];
						for (const [a, u] of this.d) T.push(u.wait());
						await Promise.all(T);
					}
					isActivated(T) {
						const a = this.d.get(T);
						return !!(a && a.value);
					}
					getActivatedExtension(T) {
						const a = this.d.get(T);
						if (!a || !a.value)
							throw new Error(
								`Extension '${T.value}' is not known or not activated`,
							);
						return a.value;
					}
					async activateByEvent(T, a) {
						if (this.f[T]) return;
						const u = this.a.getExtensionDescriptionsForActivationEvent(T);
						await this.h(
							u.map((s) => ({
								id: s.identifier,
								reason: {
									startup: a,
									extensionId: s.identifier,
									activationEvent: T,
								},
							})),
						),
							(this.f[T] = !0);
					}
					activateById(T, a) {
						const u = this.a.getExtensionDescription(T);
						if (!u) throw new Error(`Extension '${T.value}' is not known`);
						return this.h([{ id: u.identifier, reason: a }]);
					}
					async h(T) {
						const a = T.filter((u) => !this.isActivated(u.id)).map((u) =>
							this.j(u),
						);
						await Promise.all(a.map((u) => u.wait()));
					}
					j(T) {
						if (this.d.has(T.id)) return this.d.get(T.id);
						if (this.l(T.id)) return this.k(T, null, [], null);
						const a = this.a.getExtensionDescription(T.id);
						if (!a) {
							const f = new Error(
									`Cannot activate unknown extension '${T.id.value}'`,
								),
								o = this.k(T, null, [], new g(f));
							return (
								this.c.onExtensionActivationError(
									T.id,
									f,
									new P.$r2(T.id.value),
								),
								o
							);
						}
						const u = [],
							s =
								typeof a.extensionDependencies > "u"
									? []
									: a.extensionDependencies;
						for (const f of s) {
							if (this.m(f)) continue;
							const o = this.d.get(f);
							if (o) {
								u.push(o);
								continue;
							}
							if (this.l(f)) {
								u.push(
									this.j({
										id: this.b.getExtensionDescription(f).identifier,
										reason: T.reason,
									}),
								);
								continue;
							}
							const w = this.a.getExtensionDescription(f);
							if (w) {
								if (!w.main && !w.browser) continue;
								u.push(this.j({ id: w.identifier, reason: T.reason }));
								continue;
							}
							const m = a.displayName || a.identifier.value,
								E = new Error(
									`Cannot activate the '${m}' extension because it depends on unknown extension '${f}'`,
								),
								R = this.k(T, a.displayName, [], new g(E));
							return (
								this.c.onExtensionActivationError(
									a.identifier,
									E,
									new P.$r2(f),
								),
								R
							);
						}
						return this.k(T, a.displayName, u, null);
					}
					k(T, a, u, s) {
						const f = new h(T.id, a, T.reason, u, s, this.c, this.g);
						return this.d.set(T.id, f), f;
					}
					l(T) {
						return S.$I4c.isHostExtension(T, this.a, this.b);
					}
					m(T) {
						const a = this.b.getExtensionDescription(T);
						return a ? !a.main && !a.browser : !1;
					}
				};
				(t.$Lhd = c), (t.$Lhd = c = wt([rt(3, I.$ik)], c));
				let h = class {
					get value() {
						return this.h;
					}
					get friendlyName() {
						return this.d || this.c.value;
					}
					constructor(T, a, u, s, f, o, w) {
						(this.c = T),
							(this.d = a),
							(this.f = u),
							(this.g = s),
							(this.h = f),
							(this.j = o),
							(this.k = w),
							(this.a = new l.$Lh()),
							(this.b = !1),
							this.l();
					}
					dispose() {
						this.b = !0;
					}
					wait() {
						return this.a.wait();
					}
					async l() {
						await this.m(), this.a.open();
					}
					async m() {
						if (!this.h) {
							for (; this.g.length > 0; ) {
								for (let T = 0; T < this.g.length; T++) {
									const a = this.g[T];
									if (a.value && !a.value.activationFailed) {
										this.g.splice(T, 1), T--;
										continue;
									}
									if (a.value && a.value.activationFailed) {
										const u = new Error(
											`Cannot activate the '${this.friendlyName}' extension because its dependency '${a.friendlyName}' failed to activate`,
										);
										(u.detail = a.value.activationFailedError),
											(this.h = new g(u)),
											this.j.onExtensionActivationError(this.c, u, null);
										return;
									}
								}
								this.g.length > 0 &&
									(await Promise.race(this.g.map((T) => T.wait())));
							}
							await this.n();
						}
					}
					async n() {
						try {
							this.h = await this.j.actualActivateExtension(this.c, this.f);
						} catch (T) {
							const a = new Error();
							if (
								(T && T.name && (a.name = T.name),
								T && T.message
									? (a.message = `Activating extension '${this.c.value}' failed: ${T.message}.`)
									: (a.message = `Activating extension '${this.c.value}' failed: ${T}.`),
								T && T.stack && (a.stack = T.stack),
								(this.h = new g(a)),
								this.b && e.$8(T))
							)
								return;
							this.j.onExtensionActivationError(this.c, a, null),
								this.k.error(
									`Activating extension ${this.c.value} failed due to an error:`,
								),
								this.k.error(T);
						}
					}
				};
				h = wt([rt(6, I.$ik)], h);
			},
		);
	var On =
		(this && this.__importDefault) ||
		function (we) {
			return we && we.__esModule ? we : { default: we };
		};
	