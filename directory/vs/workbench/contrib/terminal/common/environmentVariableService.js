import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/decorators.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/terminal/common/environmentVariableCollection.js';
import '../../../../platform/terminal/common/environmentVariableShared.js';
import './terminalStorageKeys.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3313],
			he([1, 0, 6, 138, 21, 53, 1655, 774, 691, 3]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JVc = void 0);
				let u = class extends r.$1c {
					get onDidChangeCollections() {
						return this.a.event;
					}
					constructor(h, c) {
						super(),
							(this.b = h),
							(this.f = c),
							(this.collections = new Map()),
							(this.a = this.D(new t.$re())),
							this.f.remove(
								m.TerminalStorageKeys.DeprecatedEnvironmentVariableCollections,
								w.StorageScope.WORKSPACE,
							);
						const n = this.f.get(
							m.TerminalStorageKeys.EnvironmentVariableCollections,
							w.StorageScope.WORKSPACE,
						);
						n &&
							(JSON.parse(n).forEach((p) =>
								this.collections.set(p.extensionIdentifier, {
									persistent: !0,
									map: (0, d.$bK)(p.collection),
									descriptionMap: (0, d.$cK)(p.description),
								}),
							),
							this.s()),
							(this.mergedCollection = this.q()),
							this.D(this.b.onDidChangeExtensions(() => this.s()));
					}
					set(h, c) {
						this.collections.set(h, c), this.g();
					}
					delete(h) {
						this.collections.delete(h), this.g();
					}
					g() {
						this.h(), (this.mergedCollection = this.q()), this.m();
					}
					h() {
						this.j();
					}
					j() {
						const h = [];
						this.collections.forEach((n, g) => {
							n.persistent &&
								h.push({
									extensionIdentifier: g,
									collection: (0, d.$_J)(this.collections.get(g).map),
									description: (0, d.$aK)(n.descriptionMap),
								});
						});
						const c = JSON.stringify(h);
						this.f.store(
							m.TerminalStorageKeys.EnvironmentVariableCollections,
							c,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
					m() {
						this.n();
					}
					n() {
						this.a.fire(this.mergedCollection);
					}
					q() {
						return new C.$fK(this.collections);
					}
					async s() {
						await this.b.whenInstalledExtensionsRegistered();
						const h = this.b.extensions;
						let c = !1;
						this.collections.forEach((n, g) => {
							h.some((o) => o.identifier.value === g) ||
								(this.collections.delete(g), (c = !0));
						}),
							c && this.g();
					}
				};
				(e.$JVc = u),
					Ne([(0, i.$gi)(1e3)], u.prototype, "h", null),
					Ne([(0, i.$fi)(1e3)], u.prototype, "m", null),
					(e.$JVc = u = Ne([j(0, E.$q2), j(1, w.$lq)], u));
			},
		),
		