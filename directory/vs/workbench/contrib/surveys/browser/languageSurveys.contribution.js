import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../../editor/common/languages/language.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/notification/common/notification.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/process.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/extensions/common/extensions.js';
define(
			de[3694],
			he([
				1, 0, 4, 12, 61, 55, 30, 32, 21, 62, 52, 40, 85, 41, 9, 344, 15, 3, 53,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class b extends o.$1c {
					constructor(y, $, v, S, I, T, P, k) {
						super();
						const L = `${y.surveyId}.sessionCount`,
							D = `${y.surveyId}.lastSessionDate`,
							M = `${y.surveyId}.skipVersion`,
							N = `${y.surveyId}.isCandidate`,
							A = `${y.surveyId}.editedCount`,
							R = `${y.surveyId}.editedDate`;
						if ($.get(M, m.StorageScope.APPLICATION, "")) return;
						const B = new Date().toDateString();
						if ($.getNumber(A, m.StorageScope.APPLICATION, 0) < y.editCount) {
							const x = this.D(
								new p.$1h((H) => {
									H.forEach((q) => {
										if (
											q.getLanguageId() === y.languageId &&
											B !== $.get(R, m.StorageScope.APPLICATION)
										) {
											const V =
												$.getNumber(A, m.StorageScope.APPLICATION, 0) + 1;
											$.store(
												A,
												V,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											),
												$.store(
													R,
													B,
													m.StorageScope.APPLICATION,
													m.StorageTarget.USER,
												);
										}
									});
								}, 250),
							);
							this.D(T.files.onDidSave((H) => x.work(H.model)));
						}
						const U = $.get(
							D,
							m.StorageScope.APPLICATION,
							new Date(0).toDateString(),
						);
						if (B === U) return;
						const z = $.getNumber(L, m.StorageScope.APPLICATION, 0) + 1;
						if (
							($.store(D, B, m.StorageScope.APPLICATION, m.StorageTarget.USER),
							$.store(L, z, m.StorageScope.APPLICATION, m.StorageTarget.USER),
							z < 9 ||
								$.getNumber(A, m.StorageScope.APPLICATION, 0) < y.editCount)
						)
							return;
						const F =
							$.getBoolean(N, m.StorageScope.APPLICATION, !1) ||
							Math.random() < y.userProbability;
						if (
							($.store(N, F, m.StorageScope.APPLICATION, m.StorageTarget.USER),
							!F)
						) {
							$.store(
								M,
								k.version,
								m.StorageScope.APPLICATION,
								m.StorageTarget.USER,
							);
							return;
						}
						v.prompt(
							a.Severity.Info,
							(0, t.localize)(
								9520,
								null,
								I.getLanguageName(y.languageId) ?? y.languageId,
							),
							[
								{
									label: (0, t.localize)(9521, null),
									run: () => {
										S.publicLog(`${y.surveyId}.survey/takeShortSurvey`),
											P.open(
												n.URI.parse(
													`${y.surveyUrl}?o=${encodeURIComponent(g.$ic)}&v=${encodeURIComponent(k.version)}&m=${encodeURIComponent(S.machineId)}`,
												),
											),
											$.store(
												N,
												!1,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											),
											$.store(
												M,
												k.version,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											);
									},
								},
								{
									label: (0, t.localize)(9522, null),
									run: () => {
										S.publicLog(`${y.surveyId}.survey/remindMeLater`),
											$.store(
												L,
												z - 3,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											);
									},
								},
								{
									label: (0, t.localize)(9523, null),
									isSecondary: !0,
									run: () => {
										S.publicLog(`${y.surveyId}.survey/dontShowAgain`),
											$.store(
												N,
												!1,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											),
											$.store(
												M,
												k.version,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											);
									},
								},
							],
							{ sticky: !0 },
						);
					}
				}
				let s = class {
					constructor(y, $, v, S, I, T, P, k) {
						(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							this.j();
					}
					async j() {
						this.g.surveys &&
							(await this.i.whenInstalledExtensionsRegistered(),
							this.g.surveys
								.filter(
									(y) =>
										y.surveyId &&
										y.editCount &&
										y.languageId &&
										y.surveyUrl &&
										y.userProbability,
								)
								.map(
									(y) =>
										new b(
											y,
											this.a,
											this.b,
											this.c,
											this.h,
											this.d,
											this.f,
											this.g,
										),
								));
					}
				};
				(s = Ne(
					[
						j(0, m.$lq),
						j(1, a.$4N),
						j(2, d.$km),
						j(3, h.$kZ),
						j(4, c.$7rb),
						j(5, r.$Bk),
						j(6, w.$nM),
						j(7, f.$q2),
					],
					s,
				)),
					i.$z === "en" &&
						C.$Io
							.as(E.Extensions.Workbench)
							.registerWorkbenchContribution(s, u.LifecyclePhase.Restored);
			},
		),
		