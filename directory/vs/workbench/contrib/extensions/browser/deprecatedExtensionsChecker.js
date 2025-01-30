import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/extensions.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './extensionsActions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
define(
			de[4075],
			he([1, 0, 141, 40, 21, 4, 5, 404, 24, 3, 119, 154, 157]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*notification*/,
 w /*storage*/,
 E /*nls*/,
 C /*instantiation*/,
 d /*extensionsActions*/,
 m /*arrays*/,
 r /*lifecycle*/,
 u /*extensionManagement*/,
 a /*extensionManagementUtil*/,
 h /*extensionManagement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Tc = void 0);
				let c = class extends r.$1c {
					constructor(g, p, o, f, b, s) {
						super(),
							(this.a = g),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							this.h(),
							this.D(
								p.onDidInstallExtensions((l) => {
									const y = [];
									for (const { local: $ } of l)
										$ &&
											g.local.find((v) =>
												(0, a.$7p)(v.identifier, $.identifier),
											)?.deprecationInfo &&
											y.push($.identifier.id.toLowerCase());
									y.length && this.m(y);
								}),
							);
					}
					async h() {
						if (
							this.c.getBoolean(
								"extensionsAssistant/doNotCheckDeprecated",
								w.StorageScope.PROFILE,
								!1,
							)
						)
							return;
						const g = await this.a.queryLocal(),
							p = this.j(),
							o = g
								.filter(
									(f) =>
										!!f.deprecationInfo && f.local && this.b.isEnabled(f.local),
								)
								.filter((f) => !p.includes(f.identifier.id.toLowerCase()));
						o.length &&
							this.f.prompt(i.Severity.Warning, (0, E.localize)(6016, null), [
								{
									label: (0, E.localize)(6017, null),
									run: async () => {
										this.m(o.map((b) => b.identifier.id.toLowerCase()));
										const f = this.g.createInstance(
											d.$NTb,
											o.map((b) => `@id:${b.identifier.id}`).join(" "),
										);
										try {
											await f.run();
										} finally {
											f.dispose();
										}
									},
								},
								{
									label: (0, E.localize)(6018, null),
									isSecondary: !0,
									run: () =>
										this.c.store(
											"extensionsAssistant/doNotCheckDeprecated",
											!0,
											w.StorageScope.PROFILE,
											w.StorageTarget.USER,
										),
								},
							]);
					}
					j() {
						return JSON.parse(
							this.c.get(
								"extensionsAssistant/deprecated",
								w.StorageScope.PROFILE,
								"[]",
							),
						);
					}
					m(g) {
						this.c.store(
							"extensionsAssistant/deprecated",
							JSON.stringify((0, m.$Qb)([...this.j(), ...g])),
							w.StorageScope.PROFILE,
							w.StorageTarget.USER,
						);
					}
				};
				(e.$2Tc = c),
					(e.$2Tc = c =
						Ne(
							[
								j(0, t.$MQb),
								j(1, u.$Hp),
								j(2, h.$IQb),
								j(3, w.$lq),
								j(4, i.$4N),
								j(5, C.$Li),
							],
							c,
						));
			},
		),
		