import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../extensions/common/extensionsUtils.js';
import '../../../../services/extensionManagement/common/extensionManagement.js';
import '../../../../services/lifecycle/common/lifecycle.js';
import '../../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../common/memento.js';
import '../../../../../base/common/arrays.js';
define(
			de[3433],
			he([1, 0, 29, 6, 3, 4, 5, 40, 1829, 157, 52, 119, 154, 21, 282, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PGc = void 0),
					(e.$QGc = b);
				function p(s) {
					const l = s.get(a.$Hp),
						y = s.get(r.$IQb),
						$ = i.Event.chain(l.onDidInstallExtensions, (v) =>
							v
								.filter((S) =>
									S.some(
										({ operation: I }) => I === a.InstallOperation.Install,
									),
								)
								.map((S) => S.map(({ identifier: I }) => I)),
						);
					return i.Event.debounce(
						i.Event.any(
							i.Event.any(
								$,
								i.Event.map(l.onDidUninstallExtension, (v) => [v.identifier]),
							),
							i.Event.map(y.onEnablementChanged, (v) =>
								v.map((S) => S.identifier),
							),
						),
						(v, S) => {
							v = v || (S.length ? [S[0]] : []);
							for (const I of S) v.some((T) => !(0, h.$7p)(T, I)) && v.push(I);
							return v;
						},
					);
				}
				const o = "hasRecommendedKeymap";
				let f = class extends w.$1c {
					constructor(l, y, $, v, S) {
						super(),
							(this.c = l),
							(this.f = y),
							(this.g = $),
							(this.a = new n.$eEb("notebookKeymap", v)),
							(this.b = this.a.getMemento(
								c.StorageScope.PROFILE,
								c.StorageTarget.USER,
							)),
							this.D(S.onDidShutdown(() => this.dispose())),
							this.D(
								this.c.invokeFunction(p)((I) => {
									Promise.all(I.map((T) => this.h(T))).then(void 0, t.$4);
								}),
							);
					}
					h(l) {
						return this.c.invokeFunction(m.$OGc).then((y) => {
							const $ = y.filter((S) => b(S)),
								v = $.find((S) => (0, h.$7p)(S.identifier, l));
							if (v && v.globallyEnabled) {
								(this.b[o] = !0), this.a.saveMemento();
								const S = $.filter(
									(I) => !(0, h.$7p)(I.identifier, l) && I.globallyEnabled,
								);
								if (S.length) return this.j(v, S);
							}
						});
					}
					j(l, y) {
						const $ = (v) => {
							v &&
								this.f.setEnablement(
									y.map((S) => S.local),
									r.EnablementState.DisabledGlobally,
								);
						};
						this.g.prompt(
							d.Severity.Info,
							(0, E.localize)(
								8179,
								null,
								(0, g.$Qb)(y.map((v) => v.local.manifest.displayName))
									.map((v) => `'${v}'`)
									.join(", "),
							),
							[
								{ label: (0, E.localize)(8180, null), run: () => $(!0) },
								{ label: (0, E.localize)(8181, null), run: () => $(!1) },
							],
						);
					}
				};
				(e.$PGc = f),
					(e.$PGc = f =
						Ne(
							[
								j(0, C.$Li),
								j(1, r.$IQb),
								j(2, d.$4N),
								j(3, c.$lq),
								j(4, u.$n6),
							],
							f,
						));
				function b(s) {
					if (s.local.manifest.extensionPack) return !1;
					const l = s.local.manifest.keywords;
					return l ? l.indexOf("notebook-keymap") !== -1 : !1;
				}
			},
		),
		