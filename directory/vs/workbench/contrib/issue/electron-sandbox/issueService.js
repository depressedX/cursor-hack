import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/window.js';
import '../../../../base/parts/sandbox/electron-sandbox/globals.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/issue/common/issue.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../common/theme.js';
import '../common/issue.js';
import '../../../services/assignment/common/assignmentService.js';
import '../../../services/authentication/common/authentication.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/integrity/common/integrity.js';
define(
			de[3573],
			he([
				1, 0, 139, 75, 320, 11, 10, 8, 119, 109, 20, 769, 51, 35, 174, 123, 376,
				708, 357, 157, 1297,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*browser*/,
				i /*window*/,
				w /*globals*/,
				E /*actions*/,
				C /*configuration*/,
				d /*contextkey*/,
				m /*extensionManagement*/,
				r /*extensions*/,
				u /*extensions*/,
				a /*issue*/,
				h /*colorRegistry*/,
				c /*themeService*/,
				n /*workspaceTrust*/,
				g /*theme*/,
				p /*issue*/,
				o /*assignmentService*/,
				f /*authentication*/,
				b /*extensionManagement*/,
				s /*integrity*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cgd = void 0),
					(e.$dgd = y),
					(e.$egd = $);
				let l = class {
					constructor(I, T, P, k, L, D, M, N, A, R, O, B) {
						(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.i = M),
							(this.j = N),
							(this.k = A),
							(this.l = R),
							(this.m = O),
							(this.n = B),
							(this.a = new r.$Hn()),
							w.$P.on("vscode:triggerReporterMenu", async (U, z) => {
								const F = z.extensionId;
								this.l
									.getMenuActions(E.$XX.IssueReporter, this.m, {
										renderShortTitle: !0,
									})
									.flatMap((H) => H[1])
									.forEach(async (H) => {
										try {
											H.item &&
												"source" in H.item &&
												H.item.source?.id === F &&
												(this.a.add(F), await H.run());
										} catch (q) {
											console.error(q);
										}
									}),
									this.a.has(F) ||
										w.$P.send(
											`vscode:triggerReporterMenuResponse:${F}`,
											void 0,
										);
							});
					}
					async openReporter(I = {}) {
						const T = [],
							P = [],
							k = I;
						try {
							const B = (await this.f.getInstalled()).filter(
								(U) =>
									this.g.isEnabled(U) ||
									(I.extensionId && U.identifier.id === I.extensionId),
							);
							T.push(
								...B.map((U) => {
									const { manifest: z } = U,
										F = z.contributes ? Object.keys(z.contributes) : [],
										x =
											!z.main &&
											!z.browser &&
											F.length === 1 &&
											F[0] === "themes",
										H = U.type === r.ExtensionType.System;
									return {
										name: z.name,
										publisher: z.publisher,
										version: z.version,
										repositoryUrl: z.repository && z.repository.url,
										bugsUrl: z.bugs && z.bugs.url,
										displayName: z.displayName,
										id: U.identifier.id,
										data: I.data,
										uri: I.uri,
										isTheme: x,
										isBuiltin: H,
										extensionData: "Extensions data loading",
									};
								}),
							),
								P.push(
									...B.map((U) => {
										const { manifest: z } = U,
											F = z.contributes ? Object.keys(z.contributes) : [],
											x =
												!z.main &&
												!z.browser &&
												F.length === 1 &&
												F[0] === "themes",
											H = U.type === r.ExtensionType.System;
										return {
											name: z.name,
											publisher: z.publisher,
											version: z.version,
											repositoryUrl: z.repository && z.repository.url,
											bugsUrl: z.bugs && z.bugs.url,
											displayName: z.displayName,
											id: U.identifier.id,
											data: I.data,
											uri: I.uri,
											isTheme: x,
											isBuiltin: H,
											extensionData: "Extensions data loading",
										};
									}),
								);
						} catch (O) {
							T.push({
								name: "Workbench Issue Service",
								publisher: "Unknown",
								version: "0.0.0",
								repositoryUrl: void 0,
								bugsUrl: void 0,
								extensionData: "Extensions data loading",
								displayName: `Extensions not loaded: ${O}`,
								id: "workbench.issue",
								isTheme: !1,
								isBuiltin: !0,
							}),
								P.push({
									name: "Workbench Issue Service",
									publisher: "Unknown",
									version: "0.0.0",
									repositoryUrl: void 0,
									bugsUrl: void 0,
									extensionData: "Extensions data loading",
									displayName: `Extensions not loaded: ${O}`,
									id: "workbench.issue",
									isTheme: !1,
									isBuiltin: !0,
								});
						}
						const L = await this.i.getCurrentExperiments();
						let D = "";
						try {
							D = (await this.j.getSessions("github")).filter((U) =>
								U.scopes.includes("repo"),
							)[0]?.accessToken;
						} catch {}
						let M = !1;
						try {
							M = !(await this.k.isPure()).isPure;
						} catch {}
						const N = this.d.getColorTheme(),
							A = Object.assign(
								{
									styles: y(N),
									zoomLevel: (0, t.$Hfb)(i.$Bfb),
									enabledExtensions: T,
									experiments: L?.join(`
`),
									restrictedMode: !this.h.isWorkspaceTrusted(),
									isUnsupported: M,
									githubAccessToken: D,
								},
								I,
							),
							R = Object.assign(
								{
									styles: $(N),
									zoomLevel: (0, t.$Hfb)(i.$Bfb),
									enabledExtensions: P,
									experiments: L?.join(`
`),
									restrictedMode: !this.h.isWorkspaceTrusted(),
									isUnsupported: M,
									githubAccessToken: D,
								},
								k,
							);
						return (
							A.extensionId &&
								(T.some((B) => r.$Gn.equals(B.id, A.extensionId)) ||
									console.error(
										`Extension with ID ${A.extensionId} does not exist.`,
									)),
							A.extensionId &&
								this.a.has(A.extensionId) &&
								(w.$P.send(
									`vscode:triggerReporterMenuResponse:${A.extensionId}`,
									A,
								),
								this.a.delete(new r.$Gn(A.extensionId))),
							this.n.getValue("issueReporter.experimental.auxWindow")
								? this.c.openReporter(A)
								: this.b.openReporter(R)
						);
					}
				};
				(e.$cgd = l),
					(e.$cgd = l =
						Ne(
							[
								j(0, a.$4Xb),
								j(1, p.$6Xb),
								j(2, c.$iP),
								j(3, m.$Hp),
								j(4, b.$IQb),
								j(5, n.$pO),
								j(6, o.$h4b),
								j(7, f.$$7),
								j(8, s.$k4c),
								j(9, E.$YX),
								j(10, d.$6j),
								j(11, C.$gj),
							],
							l,
						));
				function y(S) {
					return {
						backgroundColor: v(S, g.$wGb),
						color: v(S, h.$IP),
						textLinkColor: v(S, h.$RP),
						textLinkActiveForeground: v(S, h.$SP),
						inputBackground: v(S, h.$TR),
						inputForeground: v(S, h.$UR),
						inputBorder: v(S, h.$VR),
						inputActiveBorder: v(S, h.$WR),
						inputErrorBorder: v(S, h.$0R),
						inputErrorBackground: v(S, h.$8R),
						inputErrorForeground: v(S, h.$9R),
						buttonBackground: v(S, h.$eS),
						buttonForeground: v(S, h.$cS),
						buttonHoverBackground: v(S, h.$fS),
						sliderActiveColor: v(S, h.$6P),
						sliderBackgroundColor: v(S, g.$wGb),
						sliderHoverColor: v(S, h.$5P),
					};
				}
				function $(S) {
					return {
						backgroundColor: v(S, g.$wGb),
						color: v(S, h.$IP),
						textLinkColor: v(S, h.$RP),
						textLinkActiveForeground: v(S, h.$SP),
						inputBackground: v(S, h.$TR),
						inputForeground: v(S, h.$UR),
						inputBorder: v(S, h.$VR),
						inputActiveBorder: v(S, h.$WR),
						inputErrorBorder: v(S, h.$0R),
						inputErrorBackground: v(S, h.$8R),
						inputErrorForeground: v(S, h.$9R),
						buttonBackground: v(S, h.$eS),
						buttonForeground: v(S, h.$cS),
						buttonHoverBackground: v(S, h.$fS),
						sliderActiveColor: v(S, h.$6P),
						sliderBackgroundColor: v(S, h.$4P),
						sliderHoverColor: v(S, h.$5P),
					};
				}
				function v(S, I) {
					const T = S.getColor(I);
					return T ? T.toString() : void 0;
				}
				(0, u.$lK)(p.$7Xb, l, u.InstantiationType.Delayed);
			},
		)
