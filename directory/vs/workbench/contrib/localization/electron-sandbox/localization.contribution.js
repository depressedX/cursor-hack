import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/severity.js';
import '../../../../platform/storage/common/storage.js';
import '../../extensions/common/extensions.js';
import './minimalTranslations.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/cancellation.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../services/localization/common/locale.js';
import '../../../../platform/product/common/productService.js';
import '../common/localization.contribution.js';
define(
		de[3529],
		he([
			1, 0, 4, 30, 55, 52, 12, 119, 40, 111, 21, 141, 3073, 32, 33, 142, 60,
			704, 62, 3458,
		]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*contributions*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*extensionManagement*/,
 m /*notification*/,
 r /*severity*/,
 u /*storage*/,
 a /*extensions*/,
 h /*minimalTranslations*/,
 c /*telemetry*/,
 n /*cancellation*/,
 g /*panecomposite*/,
 p /*views*/,
 o /*locale*/,
 f /*productService*/,
 b /*localization.contribution*/) {
			"use strict";
			var s;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(C = mt(C)),
				(r = xi(r));
			let l = class extends b.$75c {
				static {
					s = this;
				}
				static {
					this.c = "extensionsAssistant/languagePackSuggestionIgnore";
				}
				constructor(v, S, I, T, P, k, L, D) {
					super(),
						(this.f = v),
						(this.g = S),
						(this.h = I),
						(this.j = T),
						(this.m = P),
						(this.n = k),
						(this.q = L),
						(this.r = D),
						this.w(),
						this.D(this.m.onDidInstallExtensions((M) => this.s(M))),
						this.D(this.m.onDidUninstallExtension((M) => this.u(M)));
				}
				async s(v) {
					for (const S of v)
						S.operation === d.InstallOperation.Install &&
							S.local &&
							(await this.t(S.local, !!S.context?.extensionsSync));
				}
				async t(v, S) {
					const I = v.manifest.contributes?.localizations?.[0];
					if (!I || C.$z === I.languageId) return;
					const { languageId: T, languageName: P } = I;
					this.f.prompt(
						r.default.Info,
						(0, t.localize)(7414, null, this.h.nameLong, P || T),
						[
							{
								label: (0, t.localize)(7415, null),
								run: async () => {
									await this.g.setLocale(
										{ id: T, label: P ?? T, extensionId: v.identifier.id },
										!0,
									);
								},
							},
						],
						{
							sticky: !0,
							neverShowAgain: {
								id: "langugage.update.donotask",
								isSecondary: !0,
								scope: m.NeverShowAgainScope.APPLICATION,
							},
						},
					);
				}
				async u(v) {
					(await this.y(C.$z)) ||
						this.g.setLocale({ id: "en", label: "English" });
				}
				async w() {
					const v = C.$z;
					let S = C.$A ?? "";
					const I = JSON.parse(
						this.j.get(s.c, u.StorageScope.APPLICATION, "[]"),
					);
					if (
						!this.n.isEnabled() ||
						!v ||
						!S ||
						C.Language.isDefaultVariant() ||
						S.startsWith(v) ||
						I.includes(S) ||
						(await this.y(S))
					)
						return;
					const P = S;
					let k = await this.n.query(
						{ text: `tag:lp-${S}` },
						n.CancellationToken.None,
					);
					if (
						k.total === 0 &&
						((S = S.split("-")[0]),
						(k = await this.n.query(
							{ text: `tag:lp-${S}` },
							n.CancellationToken.None,
						)),
						k.total === 0)
					)
						return;
					const L =
							k.total === 1
								? k.firstPage[0]
								: k.firstPage.find(
										(G) =>
											G.publisher === "MS-CEINTL" &&
											G.name.startsWith("vscode-language-pack"),
									),
						D = L ?? k.firstPage[0];
					if (!D.assets.manifest) return;
					const [M, N] = await Promise.all([
							this.n.getManifest(D, n.CancellationToken.None),
							this.n.getCoreTranslation(D, S),
						]),
						A = M?.contributes?.localizations?.find((G) =>
							S.startsWith(G.languageId.toLowerCase()),
						),
						R = (A && A.languageName) || S,
						O = (A && (A.localizedLanguageName || A.languageName)) || S,
						B =
							N?.contents?.[
								"vs/workbench/contrib/localization/electron-sandbox/minimalTranslations"
							] ?? {},
						U = L ? "installAndRestartMessage" : "showLanguagePackExtensions",
						z = !B[U],
						F = {};
					Object.keys(h.$Tfd).forEach((G) => {
						!B[G] || z
							? (F[G] = h.$Tfd[G].replace("{0}", () => R))
							: (F[G] =
									`${B[G].replace("{0}", () => O)} (${h.$Tfd[G].replace("{0}", () => R)})`);
					});
					const x = (G) => {
							this.r.publicLog("languagePackSuggestion:popup", {
								userReaction: G,
								language: S,
							});
						},
						H = {
							label: F.searchMarketplace,
							run: async () => {
								x("search");
								const G = await this.q.openPaneComposite(
									a.$LQb,
									p.ViewContainerLocation.Sidebar,
									!0,
								);
								if (!G) return;
								const K = G.getViewPaneContainer();
								K && (K.search(`tag:lp-${S}`), K.focus());
							},
						},
						q = {
							label: F.installAndRestart,
							run: async () => {
								x("installAndRestart"),
									await this.g.setLocale(
										{
											id: S,
											label: R,
											extensionId: L?.identifier.id,
											galleryExtension: L,
										},
										!0,
									);
							},
						},
						V = F[U];
					this.f.prompt(
						r.default.Info,
						V,
						[
							L ? q : H,
							{
								label: (0, t.localize)(7416, null),
								isSecondary: !0,
								run: () => {
									I.push(P),
										this.j.store(
											s.c,
											JSON.stringify(I),
											u.StorageScope.APPLICATION,
											u.StorageTarget.USER,
										),
										x("neverShowAgain");
								},
							},
						],
						{
							onCancel: () => {
								x("cancelled");
							},
						},
					);
				}
				async y(v) {
					return (await this.m.getInstalled()).some(
						(I) =>
							!!I.manifest.contributes?.localizations?.length &&
							I.manifest.contributes.localizations.some((T) =>
								v.startsWith(T.languageId.toLowerCase()),
							),
					);
				}
			};
			(l = s =
				Ne(
					[
						j(0, m.$4N),
						j(1, o.$7Sb),
						j(2, f.$Bk),
						j(3, u.$lq),
						j(4, d.$Hp),
						j(5, d.$Ep),
						j(6, g.$6Sb),
						j(7, c.$km),
					],
					l,
				)),
				i.$Io
					.as(w.Extensions.Workbench)
					.registerWorkbenchContribution(l, E.LifecyclePhase.Eventually);
		},
	)
