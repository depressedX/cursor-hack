import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../../proto/aiserver/v1/dashboard_pb.js';
import '../../../../../base/common/codicons.js';
define(
			de[4228],
			he([1, 0, 2, 2, 2, 2, 2, 13, 36, 147, 894, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ifd = void 0);
				const h = (0, t.template)(
						'<div><div><span>Invite team members</span></div><div><div>Invite link</div><div><input type="text" readonly></div></div><div><div>Invite by email</div><div><input type="email" placeholder="Email, comma separated">',
					),
					c = (n) => {
						const g = (0, m.$odc)(),
							[p, o] = (0, d.createSignal)(!1),
							[f, b] = (0, d.createSignal)(""),
							s = (D) => /\S+@\S+\.\S+/.test(D),
							[l, y] = (0, d.createSignal)(!1);
						(0, d.createEffect)(() => {
							l() &&
								setTimeout(() => {
									y(!1);
								}, 2e3);
						});
						const $ = (g.reactiveStorageService.applicationUserPersistentStorage
								.aiSettings.teamIds ?? [])[0],
							v = async (D) => {
								if (!s(D)) return;
								const N = await (
									await g.cursorAuthenticationService.dashboardClient()
								).sendTeamInvite({
									teamId: $,
									email: D,
									role: u.TeamRole.MEMBER,
								});
							},
							[S, I] = (0, d.createSignal)(null);
						(0, d.createEffect)(() => {
							(async () => {
								const N = await (
									await g.cursorAuthenticationService.dashboardClient()
								).getTeamInviteLink({ teamId: $ });
								N.inviteLink
									? I(N.inviteLink)
									: console.error("Failed to fetch invite link");
							})();
						});
						const T = async () => {
								console.log("clicked"), o(!0);
								const D = f().split(","),
									M = Date.now();
								await Promise.all(D.map((N) => v(N))),
									Date.now() - M < 200 &&
										(await new Promise((N) =>
											setTimeout(N, 200 - (Date.now() - M)),
										)),
									console.log("done"),
									o(!1),
									n.setShowInvite(!1);
							},
							[P, k] = (0, d.createSignal)(!0);
						(0, d.createEffect)(() => {
							const D = f();
							console.log("e", D), k(!s(D));
						});
						const L = { value: void 0 };
						return (
							(0, d.createEffect)(() => {
								setTimeout(() => {
									L.value && L.value.focus();
								}, 100);
							}),
							(() => {
								const D = h(),
									M = D.firstChild,
									N = M.firstChild,
									A = M.nextSibling,
									R = A.firstChild,
									O = R.nextSibling,
									B = O.firstChild,
									U = A.nextSibling,
									z = U.firstChild,
									F = z.nextSibling,
									x = F.firstChild;
								return (
									D.style.setProperty(
										"background-color",
										"var(--vscode-editor-background)",
									),
									D.style.setProperty("border-radius", "6px"),
									D.style.setProperty("padding", "16px"),
									D.style.setProperty(
										"color",
										"var(--vscode-editor-foreground)",
									),
									D.style.setProperty("width", "auto"),
									D.style.setProperty("min-width", "500px"),
									D.style.setProperty("position", "relative"),
									D.style.setProperty("display", "flex"),
									D.style.setProperty("flex-direction", "column"),
									D.style.setProperty("gap", "16px"),
									M.style.setProperty("font-size", "14px"),
									M.style.setProperty("display", "flex"),
									M.style.setProperty("align-items", "center"),
									M.style.setProperty("justify-content", "space-between"),
									N.style.setProperty("font-weight", "bold"),
									(0, E.insert)(
										M,
										(0, C.createComponent)(r.$rdc, {
											title: "",
											get codicon() {
												return a.$ak.close;
											},
											type: "secondary",
											onClick: () => n.setShowInvite(!1),
											style: { padding: 0 },
											codiconStyle: {
												width: "14px",
												height: "14px",
												display: "flex",
												"align-items": "center",
												"justify-content": "center",
											},
										}),
										null,
									),
									R.style.setProperty("margin-bottom", "8px"),
									R.style.setProperty("font-size", "12px"),
									O.style.setProperty("display", "flex"),
									O.style.setProperty("align-items", "center"),
									O.style.setProperty("gap", "8px"),
									O.style.setProperty("user-select", "none"),
									B.style.setProperty("flex-grow", "1"),
									B.style.setProperty("padding", "8px 10px"),
									B.style.setProperty("border-radius", "4px"),
									B.style.setProperty(
										"border",
										"1px solid var(--vscode-settings-dropdownBorder)",
									),
									B.style.setProperty("user-select", "none"),
									B.style.setProperty(
										"background-color",
										"var(--vscode-input-background)",
									),
									B.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									B.style.setProperty("font-size", "12px"),
									B.style.setProperty("outline", "none"),
									(0, E.insert)(
										O,
										(0, C.createComponent)(r.$rdc, {
											title: "Copy link",
											type: "primary",
											get codicon() {
												return l() ? a.$ak.check : a.$ak.copy;
											},
											get disabled() {
												return !S();
											},
											onClick: () => {
												S() && (g.clipboardService.writeText(S() ?? ""), y(!0));
											},
											style: {
												"border-radius": "4px",
												width: "110px",
												padding: "6px 0px",
											},
										}),
										null,
									),
									z.style.setProperty("margin-bottom", "8px"),
									z.style.setProperty("font-size", "12px"),
									F.style.setProperty("display", "flex"),
									F.style.setProperty("align-items", "center"),
									F.style.setProperty("gap", "8px"),
									x.addEventListener("change", (H) => b(H.target.value)),
									x.addEventListener("keyup", (H) => {
										L.value && L.value.value && b(L.value.value);
									}),
									x.addEventListener("keydown", (H) => {
										H.key === "Enter" && T();
									}),
									(0, i.use)((H) => {
										L.value = H;
									}, x),
									x.style.setProperty("flex-grow", "1"),
									x.style.setProperty("padding", "8px 10px"),
									x.style.setProperty("border-radius", "4px"),
									x.style.setProperty(
										"border",
										"1px solid var(--vscode-settings-dropdownBorder)",
									),
									x.style.setProperty(
										"background-color",
										"var(--vscode-input-background)",
									),
									x.style.setProperty("font-size", "12px"),
									x.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									x.style.setProperty("outline", "none"),
									(0, E.insert)(
										F,
										(0, C.createComponent)(r.$rdc, {
											title: "Send invite",
											get codicon() {
												return p() ? a.$ak.loading : a.$ak.arrowRight;
											},
											onClick: async () => {
												T();
											},
											style: {
												padding: "6px 0px",
												width: "110px",
												"border-radius": "4px",
											},
											get disabled() {
												return P();
											},
										}),
										null,
									),
									(0, w.effect)(() => (B.value = S() ?? "Loading...")),
									D
								);
							})()
						);
					};
				e.$Ifd = c;
			},
		),
		