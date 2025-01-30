import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../../../external/bufbuild/connect.js';
import '../../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../services/aiErrors/browser/aiErrorService.js';
import './SlowPoolGenerationIndicator.js';
import '../../../../../../base/common/constants.js';
define(
			de[1072],
			he([1, 0, 2, 2, 2, 2, 2, 13, 36, 134, 340, 147, 401, 863, 58]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*solid*/,
 m /*solid*/,
 r /*reactiveStorageTypes*/,
 u /*connect*/,
 a /*simpleButton*/,
 h /*aiErrorService*/,
 c /*SlowPoolGenerationIndicator*/,
 n /*constants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l_b = f),
					(e.$m_b = b);
				const g = (0, t.template)(
						"<div><div>Confirm to enable usage-based pricing with a $20 monthly limit.</div><div>",
					),
					p = (0, t.template)(
						"<div><div>Or set a  <span>custom limit</span>.</div><div>",
					),
					o = (0, t.template)("<br>");
				function f(s) {
					const l = (0, m.$odc)(),
						y = async () => {
							try {
								const v = await l.cursorAuthenticationService.dashboardClient(),
									S =
										l.cursorAuthenticationService.membershipType() ===
										r.MembershipType.ENTERPRISE
											? l.reactiveStorageService
													.applicationUserPersistentStorage.aiSettings.teamIds
											: [];
								await v.setHardLimit({
									teamId: S?.at(0),
									hardLimit: 20,
									noUsageBasedAllowed: !1,
								}),
									await (0, c.$i_b)(l),
									l.notificationService.info(
										"Usage-based pricing enabled successfully. You can manage this setting at cursor.com/settings",
									),
									s.setIsUpsellingUsageBasedPricing(!1);
							} catch (v) {
								let S =
									"Failed to enable usage-based pricing. Please try again.";
								if (v instanceof u.ConnectError) {
									const I = (0, h.$X6b)(v);
									I?.details && (S = `${I.details.title} ${I.details.detail}`);
								}
								l.notificationService.error(S),
									s.setIsUpsellingUsageBasedPricing(!1);
							}
						},
						$ = (0, d.createMemo)(() =>
							s.isCompact ? { padding: "0px 4px", "font-size": "10px" } : {},
						);
					return (() => {
						const v = g(),
							S = v.firstChild,
							I = S.nextSibling;
						return (
							(0, E.insert)(
								I,
								(0, C.createComponent)(a.$rdc, {
									onClick: () => s.setIsUpsellingUsageBasedPricing(!1),
									title: "Cancel",
									type: "secondary",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...$() };
									},
								}),
								null,
							),
							(0, E.insert)(
								I,
								(0, C.createComponent)(a.$rdc, {
									onClick: y,
									title: "Confirm",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...$() };
									},
								}),
								null,
							),
							(0, w.effect)(
								(T) => {
									const P = {
											padding: "8px",
											display: "flex",
											"flex-direction": "column",
											gap: "8px",
											...(s.isCompact && {
												"flex-direction": "row",
												"justify-content": "space-between",
												padding: "0px",
												"padding-left": "8px",
												"border-left":
													"2px solid var(--vscode-textBlockQuote-border)",
											}),
										},
										k = {
											"font-size": "12px",
											color: "var(--vscode-editor-foreground)",
											...(s.isCompact && { "font-size": "11px" }),
										},
										L = {
											display: "flex",
											"justify-content": "flex-end",
											gap: "6px",
											...(s.isCompact && { gap: "4px" }),
										};
									return (
										(T._v$ = (0, i.style)(v, P, T._v$)),
										(T._v$2 = (0, i.style)(S, k, T._v$2)),
										(T._v$3 = (0, i.style)(I, L, T._v$3)),
										T
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							v
						);
					})();
				}
				function b(s) {
					const l = (0, m.$odc)(),
						y = (0, d.createMemo)(
							() =>
								l.reactiveStorageService.applicationUserPersistentStorage
									.aiSettings.usageHardLimit,
						),
						$ = async (S) => {
							try {
								const I = await l.cursorAuthenticationService.dashboardClient(),
									T =
										l.cursorAuthenticationService.membershipType() ===
										r.MembershipType.ENTERPRISE
											? l.reactiveStorageService
													.applicationUserPersistentStorage.aiSettings.teamIds
											: [];
								if (S)
									await I.setHardLimit({
										teamId: T?.at(0),
										hardLimit: S * 2,
										noUsageBasedAllowed: !1,
									}),
										l.notificationService.info(
											`Monthly limit increased to $${S * 2}. You can manage this setting at cursor.com/settings`,
										);
								else {
									const P = await (0, c.$k_b)(l);
									await I.setHardLimit({
										teamId: T?.at(0),
										hardLimit: P + 20,
										noUsageBasedAllowed: !1,
									}),
										l.notificationService.info(
											"Monthly limit increased by $20. You can manage this setting at cursor.com/settings",
										);
								}
								s.setIsUpsellingHardLimit(!1);
							} catch (I) {
								let T = "Failed to increase usage limit. Please try again.";
								if (I instanceof u.ConnectError) {
									const P = (0, h.$X6b)(I);
									P?.details && (T = `${P.details.title} ${P.details.detail}`);
								}
								l.notificationService.error(T), s.setIsUpsellingHardLimit(!1);
							} finally {
								(0, c.$k_b)(l);
							}
						},
						v = (0, d.createMemo)(() =>
							s.isCompact ? { padding: "0px 4px", "font-size": "10px" } : {},
						);
					return (() => {
						const S = p(),
							I = S.firstChild,
							T = I.firstChild,
							P = T.nextSibling,
							k = I.nextSibling;
						return (
							(0, E.insert)(
								I,
								(0, C.createComponent)(d.Show, {
									get when() {
										return y();
									},
									fallback:
										"Confirm to increase your monthly limit by another $20.",
									children: (L) =>
										`Confirm to increase your monthly limit from $${L()} to $${L() * 2}.`,
								}),
								T,
							),
							(0, E.insert)(
								I,
								(0, C.createComponent)(d.Show, {
									get when() {
										return !s.isCompact;
									},
									get fallback() {
										return o();
									},
									children: " ",
								}),
								T,
							),
							P.addEventListener("click", () => {
								l.commandService.executeCommand(n.$YW),
									s.setIsUpsellingHardLimit(!1);
							}),
							P.style.setProperty("color", "var(--vscode-textLink-foreground)"),
							P.style.setProperty("cursor", "pointer"),
							(0, E.insert)(
								k,
								(0, C.createComponent)(a.$rdc, {
									onClick: () => s.setIsUpsellingHardLimit(!1),
									title: "Cancel",
									type: "secondary",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...v() };
									},
								}),
								null,
							),
							(0, E.insert)(
								k,
								(0, C.createComponent)(a.$rdc, {
									onClick: () => $(y()),
									title: "Confirm",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...v() };
									},
								}),
								null,
							),
							(0, w.effect)(
								(L) => {
									const D = {
											padding: "8px",
											display: "flex",
											"flex-direction": "column",
											gap: "8px",
											...(s.isCompact && {
												padding: "0px",
												"padding-left": "8px",
												"border-left":
													"2px solid var(--vscode-textBlockQuote-border)",
												"flex-direction": "row",
												"justify-content": "space-between",
											}),
										},
										M = {
											"font-size": "12px",
											color: "var(--vscode-editor-foreground)",
											...(s.isCompact && { "font-size": "11px" }),
										},
										N = {
											display: "flex",
											"justify-content": "flex-end",
											gap: "6px",
											...(s.isCompact && {
												gap: "4px",
												"align-items": "center",
											}),
										};
									return (
										(L._v$4 = (0, i.style)(S, D, L._v$4)),
										(L._v$5 = (0, i.style)(I, M, L._v$5)),
										(L._v$6 = (0, i.style)(k, N, L._v$6)),
										L
									);
								},
								{ _v$4: void 0, _v$5: void 0, _v$6: void 0 },
							),
							S
						);
					})();
				}
			},
		),
		