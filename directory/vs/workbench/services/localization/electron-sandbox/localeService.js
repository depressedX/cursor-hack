import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/platform.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/notification/common/notification.js';
import '../../configuration/common/jsonEditing.js';
import '../common/locale.js';
import '../../../../platform/languagePacks/common/languagePacks.js';
import '../../panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import '../../textfile/common/textfiles.js';
import '../../../../base/common/jsonc.js';
import '../../editor/common/editorService.js';
import '../../host/browser/host.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/instantiation/common/extensions.js';
define(
			de[3705],
			he([
				1, 0, 12, 113, 40, 423, 704, 672, 142, 60, 119, 84, 4, 50, 85, 3426, 18,
				87, 57, 62, 20,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const l = "workbench.view.extensions";
				let y = class {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A),
							(this.k = R),
							(this.m = O);
					}
					async n() {
						try {
							const S = await this.h.read(this.b.argvResource, {
								encoding: "utf8",
							});
							(0, g.parse)(S.value);
						} catch {
							return (
								this.c.notify({
									severity: w.Severity.Error,
									message: (0, h.localize)(12563, null),
									actions: {
										primary: [
											(0, c.$wj)({
												id: "openArgv",
												label: (0, h.localize)(12564, null),
												run: () =>
													this.i.openEditor({ resource: this.b.argvResource }),
											}),
										],
									},
								}),
								!1
							);
						}
						return !0;
					}
					async o(S) {
						return (await this.n())
							? (await this.a.write(
									this.b.argvResource,
									[{ path: ["locale"], value: S }],
									!0,
								),
								!0)
							: !1;
					}
					async setLocale(S, I = !1) {
						const T = S.id;
						if (
							T === t.Language.value() ||
							(!T && t.Language.isDefaultVariant())
						)
							return;
						const P = await this.d.getInstalledLanguages();
						try {
							if (!P.some((k) => k.id === S.id)) {
								if (
									S.galleryExtension?.publisher.toLowerCase() !== "ms-ceintl"
								) {
									(
										(
											await this.e.openPaneComposite(
												l,
												r.ViewContainerLocation.Sidebar,
											)
										)?.getViewPaneContainer()
									).search(`@id:${S.extensionId}`);
									return;
								}
								await this.g.withProgress(
									{
										location: a.ProgressLocation.Notification,
										title: (0, h.localize)(12565, null, S.label),
									},
									(k) =>
										this.f.installFromGallery(S.galleryExtension, {
											isMachineScoped: !1,
										}),
								);
							}
							if (!I && !(await this.p(S.label))) return;
							await this.o(T), await this.k.restart();
						} catch (k) {
							this.c.error(k);
						}
					}
					async clearLocalePreference() {
						try {
							await this.o(void 0),
								t.Language.isDefaultVariant() || (await this.p("English"));
						} catch (S) {
							this.c.error(S);
						}
					}
					async p(S) {
						const { confirmed: I } = await this.j.confirm({
							message: (0, h.localize)(12566, null, this.m.nameLong, S),
							detail: (0, h.localize)(12567, null, S, this.m.nameLong),
							primaryButton: (0, h.localize)(12568, null),
						});
						return I;
					}
				};
				y = Ne(
					[
						j(0, E.$$Qb),
						j(1, i.$Ti),
						j(2, w.$4N),
						j(3, d.$FJ),
						j(4, m.$6Sb),
						j(5, u.$Hp),
						j(6, a.$8N),
						j(7, n.$kZ),
						j(8, p.$IY),
						j(9, f.$GO),
						j(10, o.$asb),
						j(11, b.$Bk),
					],
					y,
				);
				let $ = class {
					constructor(S) {
						this.a = S;
					}
					async getExtensionIdProvidingCurrentLocale() {
						const S = t.Language.value();
						return S === t.$j
							? void 0
							: (await this.a.getInstalledLanguages()).find((P) => P.id === S)
									?.extensionId;
					}
				};
				($ = Ne([j(0, d.$FJ)], $)),
					(0, s.$lK)(C.$7Sb, y, s.InstantiationType.Delayed),
					(0, s.$lK)(C.$8Sb, $, s.InstantiationType.Delayed);
			},
		),
		