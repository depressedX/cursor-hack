define(de[4338], he([1, 0, 4337]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const t = !0;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4339],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 13, 33, 9, 147, 14, 523, 36, 695, 1073, 12, 1897,
			58, 650, 135, 372, 26, 3120, 242, 4234, 1987, 2471, 2472,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hed = void 0),
				(e.$ied = _),
				(g = xi(g)),
				(y = xi(y));
			const P = (0, t.template)("<div>"),
				k = (0, t.template)(
					"<div><p>Help Improve Cursor</p><p>To make Cursor better, this option lets us collect usage data. This includes questions in chat, code snippets, edits, and editor actions.",
				),
				L = (0, t.template)(
					'<div class="welcome-screen-inner"><div class="key-bindings-section section"><h2 class="key-bindings-title title">Data Preferences</h2><div><div><p>Privacy Mode</p><p>If you enable Privacy Mode, none of your questions or code will ever be stored by us or any third-party.</p></div></div><div><p class="index-subheading"><span>You can always change this later in the settings. <span>Read more</span>.</span></p></div></div><div class="done-button-section"><div>',
				),
				D = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen">',
				),
				M = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen"><div class="welcome-screen-container"><div class="welcome-screen-inner"><div class="key-bindings-section section"></div><div class="done-button-section"><div>',
				),
				N = (0, t.template)("<div> extension<span>"),
				A = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen"><div class="welcome-screen-container"> <div class="welcome-screen-inner"><div class="key-bindings-section section"><h2 class="copilot-setup-title title">VS Code Extensions</h2><p class="key-bindings-subheading subheading">Instantly import your extensions, settings, and keybindings from VS Code to make trying out Cursor simple.</p><div class="click-area"></div></div><div class="done-button-section"><div></div><div><div>',
				),
				R = (0, t.template)("<div>Activating<span></span> "),
				O = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen"><div class="welcome-screen-container"> <div class="welcome-screen-inner"><div class="key-bindings-section section"><h2 class="copilot-setup-title title">Autocomplete Preferences</h2><p class="key-bindings-subheading subheading">Importing <!> will override Cursor Tab, a more powerful version of Copilot that can suggest mid-line completions and full diffs.</p><div class="click-area"></div></div><div class="done-button-section"><div></div><div><div>',
				),
				B = (0, t.template)('<span class="openai-switch-text">Enabled'),
				U = (0, t.template)(
					'<div class="welcome-screen-inner first-screen"><div class="key-bindings-section section"><h2 class="key-bindings-title title">Keyboard</h2><p class="key-bindings-subheading subheading">Vim, Emacs, Atom, Sublime, and Jetbrains keybindings.</p></div><div class="key-bindings-section section"><h2 class="key-bindings-title title">Language for AI</h2><p class="key-bindings-subheading subheading">You can specify a non-English language for the AI.</p></div><div class="key-bindings-section section"><h2 class="index-title title">Codebase-wide</h2><p class="index-subheading subheading">Compute embeddings for codebase-wide questions.</p><div class="click-area"> </div></div><div class="key-bindings-section section"><h2 class="key-bindings-title title">Add </h2><p class="key-bindings-subheading subheading">Launch from the<!> using `code` or `<!>`.</p><div class="click-area"><div></div></div></div><div class="done-button-section">',
				),
				z = (0, t.template)('<span class="openai-switch-text">Disabled'),
				F = (0, t.template)(
					"<div><div><div>You can find Cursor Help in the AI Pane next to the Chat tab.</div><div>",
				),
				x = (0, t.template)(
					"<div><div></div><div><div><div>Cursor Help</div><div>",
				),
				H = (0, t.template)(
					`<div class="onboarding-cursor-login"><div class="fullscreen"><div class="welcome-screen-container login-screen-container"><div class="welcome-screen-inner"><h1>You're all set!</h1><div class="done-button-section"><div>`,
				),
				q = (0, t.template)('<div class="welcome-cards">');
			e.$hed = !1;
			const V = [
					{ label: "Default (VS Code)", vsix: null },
					{ label: "Vim", vsix: "vscodevim.vim" },
					{ label: "Jetbrains", vsix: "k--kato.intellij-idea-keybindings" },
					{ label: "Emacs", vsix: "tuttieee.emacs-mcx" },
					{ label: "Sublime", vsix: "ms-vscode.sublime-keybindings" },
					{ label: "Atom", vsix: "ms-vscode.atom-keybindings" },
				],
				G = (te) => {
					const [Q, Z] = (0, m.createSignal)("");
					(0, m.createEffect)(() => {
						Z(te.plans[0].label);
					});
					const se = (re) => {
						te.onClick(re), Z(re.label);
					};
					return (0, d.createComponent)(c.$Kbc, {
						get origLabel() {
							return te.plans[0].label;
						},
						get items() {
							return te.plans.map((re) => ({ id: re.label, label: re.label }));
						},
						onSelect: (re) => {
							const le = te.plans.find((oe) => oe.label === re);
							le && se(le);
						},
						get value() {
							return Q();
						},
					});
				},
				K = (te) => {
					const Q = (0, n.$odc)(),
						Z = (0, m.createMemo)(
							() => Q.cursorAuthenticationService.reactivePrivacyMode() === !0,
						),
						se = (0, m.createMemo)(
							() =>
								Q.reactiveStorageService.applicationUserPersistentStorage
									.indexRepository === !0,
						),
						re = (fe) => {
							Q.reactiveStorageService.setApplicationUserPersistentStorage(
								"noStorageMode",
								fe,
							);
						},
						le = (fe) => {
							Q.reactiveStorageService.setApplicationUserPersistentStorage(
								"indexRepository",
								fe,
							);
						},
						oe = () => {
							try {
								Q.cursorAuthenticationService.reactivePrivacyMode() ===
									void 0 && re(!1),
									Z()
										? (Q.telemetryService.publicLogCapture(
												"onboarding.card.privacy.disabled",
											),
											Q.metricsService.increment({
												stat: "onboarding.card.privacy.disabled",
											}),
											Q.reactiveStorageService.setApplicationUserPersistentStorage(
												"selectedPrivacyForOnboarding",
												!0,
											))
										: (Q.telemetryService.publicLogCapture(
												"onboarding.card.privacy.enabled",
											),
											Q.metricsService.increment({
												stat: "onboarding.card.privacy.enabled",
											}),
											Q.reactiveStorageService.setApplicationUserPersistentStorage(
												"selectedPrivacyForOnboarding",
												!1,
											));
							} catch (fe) {
								console.error(fe);
							}
							te.onSubmit();
						},
						ae = Q.themeService
							.getColorTheme()
							.getColor("foreground")
							?.transparent(0.7).rgba;
					console.log("FOREGROUND COLOR: ", ae);
					const pe = { value: void 0 },
						[$e, ye] = (0, m.createSignal)(0),
						ue = () => {
							pe.value && ye(pe.value.clientHeight);
						};
					return (
						(0, m.createEffect)(() => {
							const fe = new ResizeObserver(ue);
							pe.value && (fe.observe(pe.value), ue()),
								(0, m.onCleanup)(() => {
									pe.value && fe.unobserve(pe.value);
								});
						}),
						(() => {
							const fe = D(),
								me = fe.firstChild;
							return (
								(0, i.insert)(
									me,
									(0, d.createComponent)(l.$w0b, {
										get style() {
											return {
												height: `${$e() + 142}px`,
												"max-height": "min(800px, 90vh)",
												overflow: "hidden",
												"max-width": "625px",
												"min-width": "500px",
											};
										},
										scrollingDirection: "vertical",
										class: "welcome-screen-container",
										get children() {
											const ve = L(),
												ge = ve.firstChild,
												be = ge.firstChild,
												Ce = be.nextSibling,
												Le = Ce.firstChild,
												Fe = Le.firstChild,
												Oe = Fe.nextSibling,
												xe = Ce.nextSibling,
												He = xe.firstChild,
												Ke = He.firstChild,
												Je = Ke.firstChild,
												Te = Je.nextSibling,
												Ee = ge.nextSibling,
												Ie = Ee.firstChild;
											return (
												ve.style.setProperty("min-width", "500px"),
												(0, C.use)((Be) => {
													pe.value = Be;
												}, ge),
												ge.style.setProperty("margin-bottom", "20px"),
												Ce.style.setProperty("display", "grid"),
												Ce.style.setProperty(
													"grid-template-columns",
													"1fr 1fr",
												),
												Ce.style.setProperty("margin-top", "50px"),
												Ce.style.setProperty("margin-bottom", "32px"),
												(0, i.insert)(
													Ce,
													(0, d.createComponent)(v.$ged, {
														get active() {
															return !Z();
														},
														get children() {
															const Be = k(),
																Se = Be.firstChild,
																ke = Se.nextSibling;
															return (
																Be.addEventListener("click", () => {
																	Z() !== !0 && oe(), re(!1);
																}),
																Be.style.setProperty("position", "relative"),
																Be.style.setProperty(
																	"box-sizing",
																	"border-box",
																),
																Be.style.setProperty(
																	"background-color",
																	"var(--vscode-editor-background)",
																),
																Be.style.setProperty("margin-right", "8px"),
																Be.style.setProperty("border-width", "2px"),
																Be.style.setProperty("border-style", "solid"),
																Be.style.setProperty("cursor", "pointer"),
																Be.style.setProperty("border-radius", "10px"),
																Be.style.setProperty("padding", "10px 20px"),
																Be.style.setProperty("padding-bottom", "24px"),
																Be.style.setProperty("height", "100%"),
																Se.style.setProperty("font-weight", "500"),
																Se.style.setProperty("font-size", "18px"),
																ke.style.setProperty("opacity", "0.7"),
																ke.style.setProperty("font-size", "11px"),
																(0, i.insert)(
																	Be,
																	(0, d.createComponent)(m.Show, {
																		get when() {
																			return !Z();
																		},
																		get children() {
																			const Ue = P();
																			return (
																				Ue.style.setProperty(
																					"position",
																					"absolute",
																				),
																				Ue.style.setProperty("bottom", "10px"),
																				Ue.style.setProperty("right", "10px"),
																				Ue.style.setProperty(
																					"color",
																					"var(--vscode-testing-iconPassed)",
																				),
																				(0, E.effect)(() =>
																					(0, w.className)(
																						Ue,
																						$.ThemeIcon.asClassName(
																							h.$ak.passFilled,
																						),
																					),
																				),
																				Ue
																			);
																		},
																	}),
																	null,
																),
																(0, E.effect)(
																	(Ue) => {
																		const qe = Z() ? "0.7" : "1",
																			Ae = Z()
																				? "rgba(0,0,0,0)"
																				: "var(--vscode-testing-iconPassed)";
																		return (
																			qe !== Ue._v$ &&
																				((Ue._v$ = qe) != null
																					? Be.style.setProperty("opacity", qe)
																					: Be.style.removeProperty("opacity")),
																			Ae !== Ue._v$2 &&
																				((Ue._v$2 = Ae) != null
																					? Be.style.setProperty(
																							"border-color",
																							Ae,
																						)
																					: Be.style.removeProperty(
																							"border-color",
																						)),
																			Ue
																		);
																	},
																	{ _v$: void 0, _v$2: void 0 },
																),
																Be
															);
														},
													}),
													Le,
												),
												Le.addEventListener("click", () => {
													re(!0);
												}),
												Le.style.setProperty("position", "relative"),
												Le.style.setProperty("margin-right", "8px"),
												Le.style.setProperty("border-width", "2px"),
												Le.style.setProperty("box-sizing", "border-box"),
												Le.style.setProperty("cursor", "pointer"),
												Le.style.setProperty("border-style", "solid"),
												Le.style.setProperty("border-radius", "10px"),
												Le.style.setProperty("padding-top", "5px"),
												Le.style.setProperty("padding", "10px 20px"),
												Le.style.setProperty("padding-bottom", "24px"),
												Le.style.setProperty("height", "100%"),
												Fe.style.setProperty("font-weight", "500"),
												Fe.style.setProperty("font-size", "18px"),
												Oe.style.setProperty("opacity", "0.7"),
												Oe.style.setProperty("font-size", "11px"),
												(0, i.insert)(
													Le,
													(0, d.createComponent)(m.Show, {
														get when() {
															return Z();
														},
														get children() {
															const Be = P();
															return (
																Be.style.setProperty("position", "absolute"),
																Be.style.setProperty("bottom", "10px"),
																Be.style.setProperty("right", "10px"),
																(0, E.effect)(() =>
																	(0, w.className)(
																		Be,
																		$.ThemeIcon.asClassName(h.$ak.lock),
																	),
																),
																Be
															);
														},
													}),
													null,
												),
												xe.style.setProperty("margin-top", "32px"),
												He.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												He.style.setProperty("font-size", "11px"),
												He.style.setProperty("max-width", "425px"),
												He.style.setProperty("margin", "12px auto 0px auto"),
												He.style.setProperty("line-height", "1.5"),
												Te.addEventListener("click", () => {
													Q.openerService.open("https://cursor.com/privacy", {
														openExternal: !0,
													});
												}),
												Te.style.setProperty("cursor", "pointer"),
												Te.style.setProperty("text-decoration", "underline"),
												Te.style.setProperty("text-underline-offset", "2px"),
												(0, i.insert)(
													Ee,
													(0, d.createComponent)(a.$rdc, {
														onClick: () => {
															te.onBack();
														},
														type: "secondary",
														title: "Back",
													}),
													Ie,
												),
												Ie.style.setProperty("flex-grow", "1"),
												(0, i.insert)(
													Ee,
													(0, d.createComponent)(a.$rdc, {
														onClick: () => {
															oe();
														},
														type: "primary",
														title: "Continue",
													}),
													null,
												),
												(0, E.effect)(
													(Be) => {
														const Se = Z() ? "1" : "0.7",
															ke = Z()
																? ae
																	? `rgba(${ae.r},${ae.g},${ae.b},${ae.a})`
																	: "var(--vscode-foreground)"
																: "rgba(0,0,0,0)";
														return (
															Se !== Be._v$3 &&
																((Be._v$3 = Se) != null
																	? Le.style.setProperty("opacity", Se)
																	: Le.style.removeProperty("opacity")),
															ke !== Be._v$4 &&
																((Be._v$4 = ke) != null
																	? Le.style.setProperty("border-color", ke)
																	: Le.style.removeProperty("border-color")),
															Be
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												ve
											);
										},
									}),
								),
								fe
							);
						})()
					);
				},
				J = (te) => {
					const Q = (0, n.$odc)();
					return (() => {
						const Z = M(),
							se = Z.firstChild,
							re = se.firstChild,
							le = re.firstChild,
							oe = le.firstChild,
							ae = oe.nextSibling,
							pe = ae.firstChild;
						return (
							re.style.setProperty("max-height", "500px"),
							re.style.setProperty("text-align", "center"),
							(0, i.insert)(
								ae,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onBack();
									},
									type: "secondary",
									title: "Back",
								}),
								pe,
							),
							pe.style.setProperty("flex-grow", "1"),
							(0, i.insert)(
								ae,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onSubmit();
									},
									title: "Continue",
								}),
								null,
							),
							Z
						);
					})();
				},
				W = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(!1),
						[re, le] = (0, m.createSignal)(!1),
						[oe, ae] = (0, m.createSignal)(0);
					(0, m.createEffect)(() => {
						const $e = async () => {
								console.log("updating");
								const ue = await (0, f.$ced)(
									Q.fileService,
									Q.productService,
									te.nativeWorkbenchEnvironmentService,
								);
								ae(ue);
							},
							ye = Q.window.setInterval($e, 1e3);
						(0, m.onCleanup)(() => Q.window.clearInterval(ye));
					});
					async function pe() {
						le(!0);
						try {
							await Q?.commandService?.executeCommand(b.$9W, !1);
						} catch ($e) {
							console.error($e);
						}
						te.onSubmit(!0), se(!0);
					}
					return (() => {
						const $e = A(),
							ye = $e.firstChild,
							ue = ye.firstChild,
							fe = ue.firstChild,
							me = fe.nextSibling,
							ve = me.firstChild,
							ge = ve.firstChild,
							be = ge.nextSibling,
							Ce = ve.nextSibling,
							Le = Ce.firstChild,
							Fe = Le.nextSibling,
							Oe = Fe.firstChild;
						return (
							ue.style.setProperty("max-height", "min(600px, 90vh)"),
							be.style.setProperty("margin-top", "12px"),
							be.style.setProperty("color", "#888"),
							(0, i.insert)(
								Ce,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onBack();
									},
									type: "secondary",
									title: "Back",
								}),
								Le,
							),
							Le.style.setProperty("flex-grow", "1"),
							Fe.style.setProperty("display", "flex"),
							Fe.style.setProperty("align-items", "center"),
							Fe.style.setProperty("gap", "6px"),
							(0, i.insert)(
								Fe,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onSubmit(!1);
									},
									type: "secondary",
									title: "Start from Scratch",
								}),
								Oe,
							),
							Oe.style.setProperty("display", "flex"),
							Oe.style.setProperty("align-items", "center"),
							Oe.style.setProperty("justify-content", "flex-end"),
							(0, i.insert)(
								Oe,
								(0, d.createComponent)(m.Switch, {
									get children() {
										return [
											(0, d.createComponent)(m.Match, {
												get when() {
													return re() === !1;
												},
												get children() {
													return (0, d.createComponent)(a.$rdc, {
														onClick: () => {
															pe(),
																Q?.telemetryService &&
																	Q.telemetryService.publicLogCapture(
																		"welcome screen:captured extensions",
																	);
														},
														type: "primary",
														title: "Use Extensions",
													});
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return Z();
												},
												get children() {
													return [
														(0, d.createComponent)(a.$rdc, {
															onClick: () => {
																te.onSubmit(!0);
															},
															type: "primary",
															title: "Continue",
														}),
														" ",
													];
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return !Z();
												},
												get children() {
													const xe = N(),
														He = xe.firstChild,
														Ke = He.nextSibling;
													return (
														xe.style.setProperty("display", "flex"),
														xe.style.setProperty("flex-direction", "row"),
														xe.style.setProperty("align-items", "center"),
														xe.style.setProperty("padding", "4px 8px"),
														(0, i.insert)(xe, oe, He),
														(0, i.insert)(
															xe,
															() => (oe() === 1 ? "" : "s"),
															Ke,
														),
														Ke.style.setProperty("width", "8px"),
														Ke.style.setProperty("display", "block"),
														(0, i.insert)(
															Ke,
															(0, d.createComponent)(S.$C$b, { show: !0 }),
														),
														xe
													);
												},
											}),
										];
									},
								}),
							),
							$e
						);
					})();
				},
				X = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(!1),
						[re, le] = (0, m.createSignal)(!1);
					async function oe() {
						le(!0);
						try {
							await Q?.commandService?.executeCommand(b.$9W, !0),
								(te.badExtNames.includes("github.copilot") ||
									te.badExtNames.includes("GH Copilot")) &&
									Q.reactiveStorageService.setApplicationUserPersistentStorage(
										"oneTimeSettings",
										"shouldDisableGithubCopilot",
										!1,
									);
						} catch (ae) {
							console.error(ae);
						}
						te.onSubmit(), se(!0);
					}
					return (() => {
						const ae = O(),
							pe = ae.firstChild,
							$e = pe.firstChild,
							ye = $e.firstChild,
							ue = ye.nextSibling,
							fe = ue.firstChild,
							me = fe.firstChild,
							ve = me.nextSibling,
							ge = ve.firstChild,
							be = ge.nextSibling,
							Ce = be.nextSibling,
							Le = fe.nextSibling,
							Fe = Le.firstChild,
							Oe = Fe.nextSibling,
							xe = Oe.firstChild;
						return (
							$e.style.setProperty("max-height", "min(600px, 90vh)"),
							ve.style.setProperty("margin-top", "12px"),
							ve.style.setProperty("color", "#888"),
							(0, i.insert)(
								ve,
								() => te.badExtNames[0] ?? "an AI autocomplete extension",
								be,
							),
							(0, i.insert)(
								Le,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onBack();
									},
									type: "secondary",
									title: "Back",
								}),
								Fe,
							),
							Fe.style.setProperty("flex-grow", "1"),
							Oe.style.setProperty("display", "flex"),
							Oe.style.setProperty("align-items", "center"),
							Oe.style.setProperty("gap", "6px"),
							(0, i.insert)(
								Oe,
								(0, d.createComponent)(m.Switch, {
									get children() {
										return [
											(0, d.createComponent)(m.Match, {
												get when() {
													return re() === !1;
												},
												get children() {
													return (0, d.createComponent)(a.$rdc, {
														onClick: () => {
															oe(),
																Q?.telemetryService &&
																	Q.telemetryService.publicLogCapture(
																		"welcome screen:imported copilot",
																	);
														},
														type: "secondary",
														get title() {
															return `Switch to ${te.badExtNames[0] ?? "extension"}`;
														},
													});
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return Z();
												},
												get children() {
													return [
														(0, d.createComponent)(a.$rdc, {
															onClick: () => {
																te.onSubmit();
															},
															type: "secondary",
															title: "Continue",
														}),
														" ",
													];
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return !Z();
												},
												get children() {
													const He = R(),
														Ke = He.firstChild,
														Je = Ke.nextSibling;
													return (
														He.style.setProperty("display", "flex"),
														He.style.setProperty("flex-direction", "row"),
														He.style.setProperty("align-items", "center"),
														He.style.setProperty("padding", "4px 8px"),
														Je.style.setProperty("width", "8px"),
														Je.style.setProperty("display", "block"),
														(0, i.insert)(
															Je,
															(0, d.createComponent)(S.$C$b, { show: !0 }),
														),
														He
													);
												},
											}),
										];
									},
								}),
								xe,
							),
							xe.style.setProperty("display", "flex"),
							xe.style.setProperty("justify-content", "flex-end"),
							xe.style.setProperty("align-items", "center"),
							(0, i.insert)(
								xe,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onSubmit();
									},
									type: "primary",
									title: "Continue with Default",
								}),
							),
							ae
						);
					})();
				},
				Y = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(null),
						[re, le] = (0, m.createSignal)(null),
						[oe, ae] = (0, m.createSignal)(null);
					async function pe(ge) {
						const be = await Q?.extensionGalleryService?.getExtensions(
							[{ id: ge }],
							r.CancellationToken.None,
						);
						if (be && be.length > 0) {
							const Ce = be[0];
							return (
								await Q?.extensionManagementService?.installFromGallery(Ce), !0
							);
						}
						return !1;
					}
					async function $e() {
						const ge = await Q?.fileService?.resolve(
							u.URI.joinPath(
								te.nativeWorkbenchEnvironmentService.userHome,
								".vscode",
								"extensions",
							),
						);
						console.log("RES", ge);
						const be = [];
						for (const Ce of ge?.children || []) {
							if (!Ce.isDirectory) continue;
							const Le = Ce.name,
								Fe = Le.lastIndexOf("-"),
								Oe = Le.substring(0, Fe);
							be.push(Oe);
						}
						return be;
					}
					(0, m.createEffect)(() => {
						$e();
					});
					const ye = { value: void 0 },
						[ue, fe] = (0, m.createSignal)(0),
						me = () => {
							ye.value && fe(ye.value.clientHeight);
						};
					(0, m.createEffect)(() => {
						const ge = new ResizeObserver(me);
						ye.value && (ge.observe(ye.value), me()),
							(0, m.onCleanup)(() => {
								ye.value && ge.unobserve(ye.value);
							});
					});
					const ve = () =>
						Q.reactiveStorageService.setApplicationUserPersistentStorage(
							"indexRepository",
							(ge) => !ge,
						);
					return (() => {
						const ge = D(),
							be = ge.firstChild;
						return (
							(0, i.insert)(
								be,
								(0, d.createComponent)(l.$w0b, {
									get style() {
										return {
											height: `${ue() + 96}px`,
											"max-height": "min(800px, 90vh)",
											overflow: "hidden",
										};
									},
									scrollingDirection: "vertical",
									class: "welcome-screen-container",
									get children() {
										const Ce = U(),
											Le = Ce.firstChild,
											Fe = Le.firstChild,
											Oe = Fe.nextSibling,
											xe = Le.nextSibling,
											He = xe.firstChild,
											Ke = He.nextSibling,
											Je = xe.nextSibling,
											Te = Je.firstChild,
											Ee = Te.nextSibling,
											Ie = Ee.nextSibling,
											Be = Ie.firstChild,
											Se = Je.nextSibling,
											ke = Se.firstChild,
											Ue = ke.firstChild,
											qe = ke.nextSibling,
											Ae = qe.firstChild,
											Me = Ae.nextSibling,
											De = Me.nextSibling,
											Re = De.nextSibling,
											je = Re.nextSibling,
											Ve = qe.nextSibling,
											Ze = Ve.firstChild,
											et = Se.nextSibling;
										return (
											(0, C.use)((rt) => {
												ye.value = rt;
											}, Ce),
											(0, i.insert)(
												Le,
												(0, d.createComponent)(G, {
													plans: V,
													onClick: (rt) => {
														se(rt);
													},
												}),
												null,
											),
											(0, i.insert)(
												xe,
												(0, d.createComponent)(g.default, {
													extras: {
														placeholder:
															"E.g. Svenska, \u4E2D\u6587, \u0939\u093F\u0902\u0926\u0940",
														onInput: (rt) => {
															ae(rt.target.value);
														},
													},
												}),
												null,
											),
											Ie.style.setProperty("padding", "4px 8px"),
											(0, i.insert)(
												Ie,
												(0, d.createComponent)(s.$dob, {
													onToggle: ve,
													subtle: !0,
													get value() {
														return Q.reactiveStorageService
															.applicationUserPersistentStorage.indexRepository;
													},
												}),
												Be,
											),
											(0, i.insert)(
												Ie,
												(0, d.createComponent)(m.Show, {
													get when() {
														return Q.reactiveStorageService
															.applicationUserPersistentStorage.indexRepository;
													},
													get fallback() {
														return z();
													},
													get children() {
														return B();
													},
												}),
												null,
											),
											(0, i.insert)(
												ke,
												o.$l ? "to Command Line" : "Terminal Command",
												null,
											),
											(0, i.insert)(
												qe,
												o.$l ? " command line" : " terminal",
												Me,
											),
											(0, i.insert)(qe, () => y.default.applicationName, Re),
											Ze.style.setProperty("display", "inline-block"),
											Ze.style.setProperty("margin-right", "8px"),
											(0, i.insert)(
												Ze,
												(0, d.createComponent)(p.$18b, {
													doneTitle: 'Installed "code"',
													get buttonProps() {
														return {
															type: "secondary",
															codicon: h.$ak.plus,
															title: 'Install "code" command',
														};
													},
													loadingProps: {},
													onClick: async () => {
														Q.telemetryService.publicLogCapture(
															"submitted.welcome.code_command",
														),
															Q.reactiveStorageService.setApplicationUserPersistentStorage(
																"cmdLineHookState",
																{ ignored: !0 },
															),
															await Q.commandService.executeCommand(
																"workbench.action.replaceCommandLine",
															);
													},
												}),
											),
											(0, i.insert)(
												Ve,
												(0, d.createComponent)(p.$18b, {
													get buttonProps() {
														return {
															type: "secondary",
															codicon: h.$ak.plus,
															title: `Install "${y.default.applicationName}"`,
														};
													},
													loadingProps: {},
													get doneTitle() {
														return `Installed "${y.default.applicationName}"`;
													},
													onClick: async () => {
														Q.telemetryService.publicLogCapture(
															"submitted.welcome.cursor_command",
														),
															Q.reactiveStorageService.setApplicationUserPersistentStorage(
																"cmdLineHookState",
																{ ignored: !0 },
															),
															await Q.commandService.executeCommand(
																"workbench.action.installCommandLine",
															);
													},
												}),
												null,
											),
											(0, i.insert)(
												et,
												(0, d.createComponent)(a.$rdc, {
													onClick: () => {
														console.log("KEYMAP PLAN", Z()),
															console.log("EDITING PLAN", re());
														const rt = re()?.vsix;
														if (
															rt != null &&
															(pe(rt),
															Q.telemetryService.publicLogCapture(
																"submitted.welcome.keybindings",
															),
															re()?.label === "Vim" &&
																y.default.todesktopAppId &&
																o.$m)
														)
															try {
																te.nativeHostService.exec2(
																	`defaults write ${y.default.todesktopAppId} ApplePressAndHoldEnabled -bool false`,
																	{ maxBuffer: 1024 * 1024, timeout: 4e3 },
																);
															} catch (bt) {
																console.warn(
																	bt,
																	"couldn't disable press and hold",
																);
															}
														const ft = Z()?.vsix;
														ft != null &&
															(pe(ft),
															Q.telemetryService.publicLogCapture(
																"submitted.welcome.shortcuts",
															)),
															oe() !== null &&
															oe()?.trim().toLowerCase() !== "english" &&
															oe()?.trim().toLowerCase() !== "null"
																? Q?.aiService.updatePersonalContext(
																		"Always respond in " + oe(),
																	)
																: Q?.aiService.updatePersonalContext(""),
															te.onSubmit();
													},
													title: "Continue",
												}),
											),
											Ce
										);
									},
								}),
							),
							ge
						);
					})();
				},
				ie = (te) => {
					const [Q, Z] = (0, m.createSignal)(!1);
					return (() => {
						const se = x(),
							re = se.firstChild,
							le = re.nextSibling,
							oe = le.firstChild,
							ae = oe.firstChild,
							pe = ae.nextSibling;
						return (
							se.style.setProperty("position", "absolute"),
							se.style.setProperty("top", "0"),
							se.style.setProperty("left", "0"),
							se.style.setProperty("width", "100%"),
							se.style.setProperty("height", "100%"),
							se.style.setProperty("background-color", "rgba(0, 0, 0, 0.5)"),
							se.style.setProperty("z-index", "10000"),
							se.style.setProperty("display", "flex"),
							se.style.setProperty("align-items", "center"),
							se.style.setProperty("justify-content", "center"),
							(0, i.insert)(
								se,
								(0, d.createComponent)(m.Show, {
									get when() {
										return Q();
									},
									get children() {
										const $e = F(),
											ye = $e.firstChild,
											ue = ye.firstChild,
											fe = ue.nextSibling;
										return (
											$e.style.setProperty("position", "absolute"),
											$e.style.setProperty("top", "0"),
											$e.style.setProperty("left", "0"),
											$e.style.setProperty("width", "100%"),
											$e.style.setProperty("height", "100%"),
											$e.style.setProperty(
												"background-color",
												"rgba(0, 0, 0, 0.5)",
											),
											$e.style.setProperty("z-index", "10001"),
											$e.style.setProperty("display", "flex"),
											$e.style.setProperty("align-items", "center"),
											$e.style.setProperty("justify-content", "center"),
											ye.style.setProperty("width", "fit-content"),
											ye.style.setProperty("margin", "0 auto"),
											ye.style.setProperty("color", "#fff"),
											ye.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											ye.style.setProperty("border-radius", "5px"),
											ye.style.setProperty(
												"border",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											ye.style.setProperty("z-index", "10000"),
											ye.style.setProperty("display", "flex"),
											ye.style.setProperty("gap", "4px"),
											ye.style.setProperty("flex-direction", "column"),
											ye.style.setProperty("padding", "8px 12px"),
											ye.style.setProperty("overflow", "hidden"),
											fe.style.setProperty("display", "flex"),
											fe.style.setProperty("align-items", "center"),
											fe.style.setProperty("transform", "scale(0.8)"),
											fe.style.setProperty("width", "100%"),
											fe.style.setProperty("justify-content", "flex-end"),
											fe.style.setProperty("transform-origin", "right"),
											fe.style.setProperty("gap", "4px"),
											(0, i.insert)(
												fe,
												(0, d.createComponent)(a.$rdc, {
													type: "secondary",
													onClick: () => {
														Z(!1);
													},
													title: "Back",
												}),
												null,
											),
											(0, i.insert)(
												fe,
												(0, d.createComponent)(a.$rdc, {
													onClick: () => {
														te.onSubmit();
													},
													title: "Close",
												}),
												null,
											),
											$e
										);
									},
								}),
								re,
							),
							re.addEventListener("click", () => {
								Z(!0);
							}),
							re.style.setProperty("position", "absolute"),
							re.style.setProperty("top", "0"),
							re.style.setProperty("left", "0"),
							re.style.setProperty("width", "100%"),
							re.style.setProperty("height", "100%"),
							le.style.setProperty("max-width", "540px"),
							le.style.setProperty("width", "100%"),
							le.style.setProperty("margin", "0 auto"),
							le.style.setProperty("color", "#fff"),
							le.style.setProperty("height", "50vh"),
							le.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							le.style.setProperty("border-radius", "5px"),
							le.style.setProperty(
								"border",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							le.style.setProperty("z-index", "10000"),
							le.style.setProperty("display", "flex"),
							le.style.setProperty("flex-direction", "column"),
							le.style.setProperty("overflow", "hidden"),
							oe.style.setProperty("display", "flex"),
							oe.style.setProperty("align-items", "center"),
							oe.style.setProperty("justify-content", "space-between"),
							oe.style.setProperty("padding", "6px 10px"),
							ae.style.setProperty("color", "var(--vscode-editor-foreground)"),
							ae.style.setProperty("font-size", "11px"),
							ae.style.setProperty("font-weight", "500"),
							ae.style.setProperty("text-transform", "uppercase"),
							ae.style.setProperty("opacity", "0.6"),
							pe.addEventListener("click", () => {
								Z(!0);
							}),
							pe.style.setProperty("font-size", "13px"),
							pe.style.setProperty("color", "var(--vscode-editor-foreground)"),
							pe.style.setProperty("cursor", "pointer"),
							(0, i.insert)(
								le,
								(0, d.createComponent)(I.$MDc, {
									customTitle: "Welcome to Cursor!",
									customSubtitle: "Discover how Cursor can help you",
									style: {},
									renderBubbleLeftRightBorders: !1,
									actionClickHook: () => {
										Z(!0);
									},
									topKQuestions: 3,
									onCloseAttempt: () => {
										Z(!0);
									},
								}),
								null,
							),
							(0, E.effect)(() =>
								(0, w.className)(
									pe,
									$.ThemeIcon.asClassName(h.$ak.x) + " cursor-help-close",
								),
							),
							se
						);
					})();
				},
				ne = (te) => {
					const [Q, Z] = (0, m.createSignal)(!1),
						se = (0, n.$odc)();
					return (
						(0, m.createEffect)(() => {
							se?.aiSettingsService.addOpenAIKeyListener((re) => {
								te.onSubmit();
							}),
								se?.cursorAuthenticationService.addOpenAIKeyChangedListener(
									(re) => {
										te.onSubmit();
									},
								);
						}),
						(0, m.createEffect)(async () => {
							e.$hed ||
								((await se?.cursorAuthenticationService.isAuthenticated()) &&
									te.onSubmit());
						}),
						(0, m.createEffect)(() => {
							console.log("One of the dependencies changed in this effect"),
								se?.cursorAuthenticationService.addLoginChangedListener(
									(re) => {
										re && te.onSubmit();
									},
								);
						}),
						(() => {
							const re = H(),
								le = re.firstChild,
								oe = le.firstChild,
								ae = oe.firstChild,
								pe = ae.firstChild,
								$e = pe.nextSibling,
								ye = $e.firstChild;
							return (
								pe.style.setProperty("font-weight", "300"),
								(0, i.insert)(
									ae,
									(0, d.createComponent)(T.$3Zc, {
										skipForNowCallback: () => {
											te.onSubmit();
										},
									}),
									$e,
								),
								(0, i.insert)(
									$e,
									(0, d.createComponent)(a.$rdc, {
										onClick: () => {
											te.onBack();
										},
										type: "secondary",
										title: "Back",
									}),
									ye,
								),
								ye.style.setProperty("flex-grow", "1"),
								re
							);
						})()
					);
				},
				ee = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(0),
						[re, le] = (0, m.createSignal)(0);
					function oe(ge) {
						Q?.telemetryService &&
							Q.telemetryService.publicLogCapture(
								"Welcome Screen Continue " + Z(),
							),
							se(Z() + (ge ?? 1));
					}
					function ae() {
						Q?.telemetryService &&
							Q.telemetryService.publicLogCapture("Welcome Screen Back " + Z()),
							se(Z() - 1);
					}
					(0, m.createEffect)(() => {
						Q?.telemetryService &&
							Q.telemetryService.publicLogCapture("Welcome Screen");
					});
					function pe() {
						te.onSubmit();
					}
					const [$e, ye] = (0, m.createSignal)([
							{
								case: "welcome",
								comp: (0, d.createComponent)(Y, {
									get nativeWorkbenchEnvironmentService() {
										return te.nativeWorkbenchEnvironmentService;
									},
									get nativeHostService() {
										return te.nativeHostService;
									},
									onBack: ae,
									onSubmit: oe,
								}),
							},
							{
								case: "privacy",
								comp: (0, d.createComponent)(K, { onSubmit: oe, onBack: ae }),
							},
							{
								case: "login",
								comp: (0, d.createComponent)(ne, { onSubmit: pe, onBack: ae }),
							},
						]),
						[ue, fe] = (0, m.createSignal)([]),
						me = {
							case: "vscode",
							comp: (0, d.createComponent)(W, {
								get nativeWorkbenchEnvironmentService() {
									return te.nativeWorkbenchEnvironmentService;
								},
								onSubmit: (ge) => {
									if ($e()[Z()].case !== "vscode") return;
									function be() {
										return $e()[Z()].case === "vscode";
									}
									ge
										? (0, f.$ded)(
												Q.fileService,
												te.nativeWorkbenchEnvironmentService,
												Q.storageService,
											)
												.then((Ce) => {
													if (be()) {
														if (
															Ce.length > 0 &&
															$e()[Z() + 1].case !== "copilot"
														) {
															fe(Ce);
															const Le = $e();
															Le.splice(Z() + 1, 0, ve), ye(Le);
														}
														oe();
													}
												})
												.catch((Ce) => {
													console.error(Ce), be() && oe();
												})
										: oe();
								},
								onBack: ae,
							}),
						},
						ve = {
							case: "copilot",
							comp: (0, d.createComponent)(X, {
								get nativeWorkbenchEnvironmentService() {
									return te.nativeWorkbenchEnvironmentService;
								},
								get badExtNames() {
									return ue();
								},
								onSubmit: oe,
								onBack: ae,
							}),
						};
					return (
						(0, m.createEffect)(async () => {
							if (
								await (0, f.$bed)(
									Q.fileService,
									te.nativeWorkbenchEnvironmentService,
								)
							) {
								const be = $e();
								be.splice(1, 0, me), ye(be);
							}
						}),
						(0, m.createEffect)(async () => {}),
						(() => {
							const ge = q();
							return (0, i.insert)(ge, () => $e()[Z()].comp), ge;
						})()
					);
				};
			function _(te, Q, Z, se, re) {
				return (0, n.$ndc)(
					() =>
						(0, d.createComponent)(ee, {
							nativeWorkbenchEnvironmentService: Z,
							nativeHostService: se,
							onSubmit: () => {
								console.log("trying to dispose"), re();
							},
						}),
					te,
					Q,
				);
			}
		},
	),
		define(
			de[4340],
			he([
				1, 0, 180, 3, 5, 18, 4339, 832, 3, 1282, 20, 21, 22, 87, 151, 45, 96,
				110, 78, 31, 256, 58,
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
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ped = void 0);
				let y = class extends m.$1c {
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.a = new i.$Zc()),
							this.h.activate();
					}
					renderPopupBar() {
						const v = this.j.get(l.$IV, a.StorageScope.APPLICATION, "true");
						if (C.$hed || (v === "true" && !this.u.skipOnboarding)) {
							(0, g.$nAb)(this.r),
								this.r.setApplicationUserPersistentStorage(
									"shouldNotTryToGetThemToNoticeCpp",
									!0,
								),
								this.r.setApplicationUserPersistentStorage(
									"bubbleTimesLeft",
									1,
								),
								this.r.setApplicationUserPersistentStorage("checklistState", {
									shouldSeeOnboardingChecklist: !0,
								}),
								this.r.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"plainChat",
									0,
								),
								this.r.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"contextChat",
									0,
								),
								this.r.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"intentChat",
									0,
								),
								this.r.setApplicationUserPersistentStorage(
									"aiSettings",
									"openAIModel",
									"claude-3.5-sonnet",
								),
								this.r.setApplicationUserPersistentStorage(
									"oneTimeSettings",
									"didMigrateFromGpt4oToClaudeSonnet",
									!0,
								),
								this.r.setApplicationUserPersistentStorage(
									"haveNotImportedFromVSC",
									!0,
								),
								this.w.executeCommand(l.$PX, 10 * 6e4);
							let S = this.c.mainContainer;
							this.b = (0, C.$ied)(S, this.f, this.q, this.t, () => {
								this.j.store(
									l.$IV,
									"false",
									a.StorageScope.APPLICATION,
									a.StorageTarget.MACHINE,
								),
									!C.$hed &&
										(this.w.executeCommand(l.$PX, 3e4), this.b?.dispose());
							});
						}
					}
					dispose() {
						super.dispose(),
							this.a.dispose(),
							this.b?.dispose(),
							(this.b = void 0);
					}
				};
				(e.$ped = y),
					(e.$ped = y =
						Ne(
							[
								j(0, t.$jEb),
								j(1, w.$Li),
								j(2, E.$IY),
								j(3, d.$u0b),
								j(4, a.$lq),
								j(5, h.$ll),
								j(6, c.$asb),
								j(7, n.$ucd),
								j(8, g.$0zb),
								j(9, p.$mEb),
								j(10, o.$y7c),
								j(11, f.$r8),
								j(12, b.$ek),
								j(13, s.$cRb),
							],
							y,
						)),
					(0, u.$lK)(r.$HAc, y, u.InstantiationType.Delayed);
			},
		),
		define(
			de[865],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 9, 38, 502, 312, 36, 64, 2529]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ibc = s);
				const o = (0, t.template)("<div>"),
					f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					);
				function s(l) {
					const y = (0, g.$odc)(),
						$ = 12,
						[v, S] = (0, r.createSignal)(!0),
						[I, T] = (0, r.createSignal)(19),
						P = (() => {
							const B = o();
							return (
								B.style.setProperty("width", "100%"),
								B.style.setProperty("height", "100%"),
								B.style.setProperty("box-sizing", "border-box"),
								B
							);
						})(),
						k = (0, r.createMemo)(() =>
							l.text.split(`
`),
						),
						L = (0, r.createMemo)(() =>
							l.wrapLines ? k().length > l.wrapLines : !1,
						),
						[D, M] = (0, r.createSignal)(null),
						[N, A] = (0, r.createSignal)(void 0);
					let R = 0;
					const O = ({ editor: B, override: U, skipLayout: z }) => {
						if (!B) return;
						const F = B.getDomNode();
						if (!F) return;
						const x = B.getModel()?.getLineCount() || 1,
							H = B.getBottomForLineNumber(x);
						(R !== H || U) &&
							(A(H), (R = H), (F.style.height = `${H}px`), z || B.layout());
					};
					return (
						(0, r.createEffect)(() => {
							const B = D();
							if (l.autoHeightForModelChanges && B) {
								const U = B?.onDidChangeModelContent(() => {
									O({ editor: B, override: !1, skipLayout: !1 });
								});
								(0, r.onCleanup)(() => {
									U && U.dispose();
								});
							}
							if (l.autoHeightForWordWrap && B) {
								const U = B?.onDidLayoutChange(() => {
									O({ editor: B, override: !1, skipLayout: !0 });
								});
								(0, r.onCleanup)(() => {
									U && U.dispose();
								});
							}
						}),
						(0, r.createEffect)(
							(0, r.on)(
								() => l.editable,
								(B) => {
									const U = D();
									U && U.updateOptions({ readOnly: !B });
								},
							),
						),
						(0, r.createEffect)(() => {
							if (D()) {
								const B = D()?.getModel();
								if (B) {
									const U = B.getValue(),
										z = k().join(`
`);
									z.startsWith(U)
										? B.applyEdits([
												{
													range: {
														startLineNumber: B.getLineCount(),
														startColumn: B.getLineMaxColumn(B.getLineCount()),
														endLineNumber: B.getLineCount(),
														endColumn: B.getLineMaxColumn(B.getLineCount()),
													},
													text: z.slice(U.length),
													forceMoveMarkers: !0,
												},
											])
										: B.setValue(z);
									const F = B.getLanguageId(),
										x =
											y.languageService.createByLanguageNameOrFilepathOrFirstLine(
												l.language ?? null,
												l.resourceForLanguage ?? null,
												void 0,
											);
									F !== x.languageId && B.setLanguage(x);
								}
							} else {
								let F = function () {
									let q = "abcdefghijklmnopqrstuvwxyz",
										V = "";
									for (let G = 0; G < 10; G++)
										V += q.charAt(Math.floor(Math.random() * q.length));
									return V;
								};
								const B = {
										...n.$X0b.getEditorOptions(y.configurationService),
										disableLayerHinting: !0,
										...l.nonReactiveEditorOptions,
										readOnly: !l.editable,
									},
									U = y.instantiationService.createInstance(n.$X0b, P, B, {
										overwriteIsSimpleWidget: l.isSimpleWidget,
									}),
									z =
										y.languageService.createByLanguageNameOrFilepathOrFirstLine(
											l.language ?? null,
											l.resourceForLanguage ?? null,
											void 0,
										);
								let x = a.URI.parse(`aichat-code-block-anysphere://${F()}`);
								const H = y.modelService.createModel(
									k().join(`
`),
									z,
									x,
									!1,
								);
								U.setModel(H),
									T(U.getOptions().get(h.EditorOption.fontSize) + 6),
									M(U),
									l.setEditor && l.setEditor(U);
							}
						}),
						(0, r.createEffect)(() => {
							const B = D();
							B &&
								(v()
									? L() &&
										(B.updateOptions({
											scrollbar: {
												vertical: "hidden",
												verticalScrollbarSize: 0,
												horizontal: "hidden",
												handleMouseWheel: !1,
												alwaysConsumeMouseWheel: !1,
												horizontalScrollbarSize: 0,
											},
										}),
										B.setScrollTop(0),
										B.setScrollLeft(0))
									: B.updateOptions({
											scrollbar: {
												vertical: "auto",
												verticalScrollbarSize: 10,
												horizontal: "auto",
												handleMouseWheel: !0,
												alwaysConsumeMouseWheel: !0,
												horizontalScrollbarSize: 10,
											},
										}));
						}),
						(0, r.createEffect)(() => {
							const B = l.setEditor;
							(0, r.onCleanup)(() => {
								const U = D();
								U && (U.getModel()?.dispose(), U.dispose(), B && B(null));
							});
						}),
						(0, r.createEffect)(() => {
							const B = D(),
								U = l.highlightLines;
							if (B && U?.length) {
								const z = B.getModel();
								if (!z) return;
								const F = {
										isWholeLine: !0,
										className: "highlighted-line-background",
										description: "Highlighted line",
										stickiness:
											p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
									x = U.map((H) => ({
										range: {
											startLineNumber: H,
											startColumn: 1,
											endLineNumber: H,
											endColumn: 1,
										},
										options: F,
									}));
								z.deltaDecorations([], x);
							}
						}),
						(0, r.createEffect)(() => {
							const B = D();
							if (B && l.scrollOnlyWhenFocused) {
								const U = B.onDidFocusEditorWidget(() => {
										B.updateOptions({
											scrollbar: {
												vertical: "visible",
												horizontal: "visible",
												handleMouseWheel: !0,
											},
										});
									}),
									z = B.onDidBlurEditorWidget(() => {
										B.updateOptions({
											scrollbar: {
												vertical: "hidden",
												horizontal: "hidden",
												handleMouseWheel: !1,
											},
										});
									});
								B.updateOptions({
									scrollbar: {
										vertical: "hidden",
										horizontal: "hidden",
										handleMouseWheel: !1,
									},
								}),
									(0, r.onCleanup)(() => {
										U.dispose(), z.dispose();
									});
							}
						}),
						(0, r.createEffect)(() => {
							const B = D();
							if (!B || !l.onFocus || !l.onBlur) return;
							const U = l.onFocus,
								z = l.onBlur,
								F = B.onDidFocusEditorWidget(() => {
									U?.();
								}),
								x = B.onDidBlurEditorWidget(() => {
									z?.();
								});
							(0, r.onCleanup)(() => {
								F.dispose(), x.dispose();
							});
						}),
						(0, r.createEffect)(() => {
							const B = D();
							if (!B || !l.onTextChange) return;
							const U = l.onTextChange,
								z = () => {
									const x = B.getValue();
									U?.(x);
								},
								F = B.onDidChangeModelContent(z);
							(0, r.onCleanup)(() => {
								F.dispose();
							});
						}),
						(() => {
							const B = o(),
								U = l.setContainerRef;
							return (
								typeof U == "function"
									? (0, m.use)(U, B)
									: (l.setContainerRef = B),
								B.addEventListener("mouseleave", () => l.onMouseLeave?.()),
								B.addEventListener("mouseenter", () => l.onMouseEnter?.()),
								(0, w.insert)(B, P, null),
								(0, w.insert)(
									B,
									(0, E.createComponent)(r.Show, {
										get when() {
											return L();
										},
										get children() {
											const z = b();
											return (
												z.addEventListener("click", () => {
													S(!v());
												}),
												(0, w.insert)(
													z,
													(0, E.createComponent)(r.Switch, {
														get children() {
															return [
																(0, E.createComponent)(r.Match, {
																	get when() {
																		return v();
																	},
																	get children() {
																		const F = f();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					F,
																					u.ThemeIcon.asClassName(c.$E0b),
																				),
																			),
																			F
																		);
																	},
																}),
																(0, E.createComponent)(r.Match, {
																	get when() {
																		return !v();
																	},
																	get children() {
																		const F = f();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					F,
																					u.ThemeIcon.asClassName(c.$F0b),
																				),
																			),
																			F
																		);
																	},
																}),
															];
														},
													}),
												),
												z
											);
										},
									}),
									null,
								),
								(0, w.insert)(B, () => l.children, null),
								(0, d.effect)(
									(z) => {
										const F = `simple-code-render ${l.class}`,
											x = {
												position: "relative",
												height: N()
													? `${N()}px`
													: l.wrapLines
														? L()
															? v()
																? `${I() * $}px`
																: `${I() * Math.min(k().length + 1, l.wrapLines) + 10}px`
															: `${I() * k().length + 10}px`
														: `${I() * (k().length + 1) + 10}px`,
												"text-align": "left",
												...l.style,
											};
										return (
											F !== z._v$ && (0, C.className)(B, (z._v$ = F)),
											(z._v$2 = (0, i.style)(B, x, z._v$2)),
											z
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								B
							);
						})()
					);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4341],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 650, 14, 26, 36, 2, 58, 12, 695, 135, 147,
			865, 331, 1008, 974, 973, 1231, 232, 134, 722, 4229, 1006,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CDc = Y),
				(e.$DDc = ie),
				(e.$EDc = ne),
				(e.$FDc = Q),
				(o = xi(o));
			const D = (0, t.template)("<div>"),
				M = (0, t.template)('<div class="fade-in">'),
				N = (0, t.template)(
					'<div><div>Invalid API Key</div><div class="settings-menu-code-render"><div><div></div><span> error message</span></div></div>Please try again, or run the following command in your terminal to verify that you have not hit your spend limit:<div class="settings-menu-code-render"><div class="settings-menu-code-render-toolbar"><div></div></div></div><div>If this command completes successfully, but you still see this error after trying again, please email us at <span></span>. Note: This requires a Google AI Studio <span>API key</span>.',
				),
				A = (0, t.template)(
					"<div>With your Cursor <!>subscription, you do not need to use your own Google key!",
				),
				R = (0, t.template)("<span>your Google AI Studio key"),
				O = (0, t.template)(
					'<div><div>Invalid API Key</div><div class="settings-menu-code-render"><div><div></div><span> error message</span></div></div>Please try again, or run the following command in your terminal to verify that you have not hit your spend limit:<div class="settings-menu-code-render"><div class="settings-menu-code-render-toolbar"><div></div></div></div><div>If this command completes successfully, but you still see this error after trying again, please email us at <span></span>. Note: This requires an Anthropic <span>API key</span>.',
				),
				B = (0, t.template)(
					"<div>With your Cursor <!>subscription, you do not need to use your own Anthropic key!",
				),
				U = (0, t.template)("<span>your Anthropic key"),
				z = (0, t.template)("<div><div>"),
				F = (0, t.template)(
					'<div><div>Invalid OpenAI API Key</div><div class="settings-menu-code-render"><div><div></div><span> error message</span></div></div>Please try again, or run the following command in your terminal to verify that you have not hit your spend limit:<div class="settings-menu-code-render"><div class="settings-menu-code-render-toolbar"><div></div></div></div><div>If this command completes successfully, but you still see this error after trying again, please email us at <span></span>. Note: This requires an OpenAI <span>API key</span>, not ChatGPT plus.',
				),
				x = (0, t.template)("<div><div>Override OpenAI Base URL <span>"),
				H = (0, t.template)("<span>Saved \u2713"),
				q = (0, t.template)("<span>Saving..."),
				V = (0, t.template)(
					'<div class="cursor-settings-error-message">Invalid credentials. Please try again.',
				),
				G = (0, t.template)(
					'<div class="openai-settings-container"><div><div class="settings_sub_item"><div class="settings_sub_item_title">Base URL</div><div class="settings_sub_item_body"></div></div><div class="settings_sub_item"><div class="settings_sub_item_title">Deployment Name</div><div class="settings_sub_item_body"></div></div><div class="settings_sub_item"><div class="settings_sub_item_title">API Key</div><div class="settings_sub_item_body"></div></div></div><div>',
				),
				K = (0, t.template)("<div>No models available"),
				J = (0, t.template)("<div><div><span></span></div><div>"),
				W = (0, t.template)(
					"<div>With your Cursor <!>subscription, you do not need to use your own OpenAI key unless you're using custom models.",
				),
				X = (0, t.template)("<span>your OpenAI key");
			function Y(Z, se) {
				return (
					se() !== T.MembershipType.FREE &&
					Z.reactiveStorageService.applicationUserPersistentStorage
						.useClaudeKey &&
					!Z.reactiveStorageService.applicationUserPersistentStorage
						.settingsDismissedClaudeKeyWarning
				);
			}
			function ie(Z, se) {
				return (
					se() !== T.MembershipType.FREE &&
					Z.reactiveStorageService.applicationUserPersistentStorage
						.useGoogleKey &&
					!Z.reactiveStorageService.applicationUserPersistentStorage
						.settingsDismissedGoogleKeyWarning
				);
			}
			function ne(Z, se) {
				return (
					se() !== T.MembershipType.FREE &&
					Z.reactiveStorageService.applicationUserPersistentStorage
						.useOpenAIKey &&
					!Z.reactiveStorageService.applicationUserPersistentStorage
						.settingsDismissedOpenAIKeyWarning
				);
			}
			function ee(Z) {
				return (() => {
					const se = D();
					return (
						se.style.setProperty("display", "flex"),
						se.style.setProperty("gap", "2px"),
						se.style.setProperty("flex-direction", "column"),
						se.style.setProperty("font-size", "12px"),
						se.style.setProperty(
							"background",
							"var(--vscode-editor-background)",
						),
						se.style.setProperty("color", "var(--vscode-foreground)"),
						se.style.setProperty("padding", "6px 8px"),
						se.style.setProperty("border-radius", "4px"),
						se.style.setProperty(
							"border",
							"1px solid var(--vscode-commandCenter-inactiveBorder)",
						),
						se.style.setProperty(
							"border-left",
							"4px solid var(--vscode-editorWarning-foreground)",
						),
						se.style.setProperty("margin-bottom", "8px"),
						(0, m.insert)(se, () => Z.children),
						se
					);
				})();
			}
			const _ = () => {
					const Z = (0, c.$odc)(),
						se = Z.cursorAuthenticationService,
						{ aiSettingsService: re } = Z,
						[le, oe] = (0, r.createSignal)(!1),
						[ae, pe] = (0, r.createSignal)(!1),
						[$e, ye] = (0, r.createSignal)(""),
						[ue, fe] = (0, r.createSignal)(!1),
						[me, ve] = (0, r.createSignal)(null),
						[ge, be] = (0, r.createSignal)(""),
						[Ce, Le] = (0, r.createSignal)(null),
						[Fe, Oe] = (0, r.createSignal)(!1),
						[xe, He] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						se.addGoogleKeyChangedListener(Le),
							(0, r.onCleanup)(() => {
								se.removeGoogleKeyChangedListener(Le);
							});
					}),
						(0, r.createEffect)((ke) => {
							const Ue =
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useGoogleKey;
							if (ke !== Ue)
								if ((console.log("Google key changed", Ue, ke), Ue))
									for (const qe of I.$E6b) Z.aiSettingsService.enableModel(qe);
								else
									for (const qe of I.$E6b) Z.aiSettingsService.removeModel(qe);
							return Ue;
						}, Z
							.reactiveStorageService
							.applicationUserPersistentStorage.useGoogleKey),
						(0, r.createEffect)(() => {
							Le(se.googleKey() ?? null), be(se.googleKey() ?? "");
						}, []);
					const Ke = async () =>
							Z.everythingProviderService.provider?.runCommand(
								T.MiscActions.CheckGoogleAPIKey,
								{ apiKey: ge() },
							),
						Je = async () => {
							if (
								(He(!0),
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useGoogleKey)
							) {
								Se();
								return;
							}
							Oe(!0);
						},
						Te = (0, r.createMemo)(() =>
							(0, l.$d$b)(Z.themeService) ? "dark" : "light",
						),
						[, Ee] = (0, P.$B$b)(),
						Ie = (0, r.createMemo)(() =>
							p.$l
								? Z.terminalService.activeInstance?.shellLaunchConfig.executable?.endsWith(
										"powershell.exe",
									)
									? `# Define headers
$headers = @{
    "Content-Type" = "application/json"
    "X-Goog-Api-Key" = "${ge()}"
}

# Define body
$body = @{
    "generationConfig" = @{}
    "safetySettings" = @()
    "contents" = @(
        @{
            "role" = "user"
            "parts" = @(
                @{
                    "text" = "Testing. Just say hi and nothing else."
                }
            )
        }
    )
} | ConvertTo-Json -Depth 5

# Make the request
Invoke-WebRequest -Uri "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent" -Method Post -Headers $headers -Body $body -Verbose`
									: `curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent -H "Content-Type: application/json" -H "X-Goog-Api-Key: ${ge()}" -d '{"generationConfig":{},"safetySettings":[],"contents":[{"role":"user","parts":[{"text":"Testing. Just say hi and nothing else."}]}]}'`
								: `curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent -H "Content-Type: application/json" --header "X-Goog-Api-Key: ${ge()}" --header "anthropic-version: 2023-06-01" -d '{
  "generationConfig": {},
  "safetySettings": [],
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Testing. Just say hi and nothing else."
        }
      ]
    }
  ]
}'`,
						),
						Be = (ke) => {
							const Ue =
								ke === void 0
									? !Z.reactiveStorageService.applicationUserPersistentStorage
											.useGoogleKey
									: ke;
							Z.reactiveStorageService.setApplicationUserPersistentStorage(
								"useGoogleKey",
								Ue,
							),
								Ue &&
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"settingsDismissedGoogleKeyWarning",
										!1,
									);
						},
						Se = async () => {
							if (xe()) {
								He(!1), Oe(!1), oe(!0);
								const ke = await Ke();
								ke?.valid
									? (se.storeGoogleKey(ge()), ve(!0))
									: (ke !== void 0 && ke.error && ye(ke.error), ve(!1)),
									se.storeGoogleKey(ge()),
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"useGoogleKey",
										!0,
									),
									oe(!1);
								return;
							}
							Be(!0), Oe(!1);
						};
					return (0, d.createComponent)(v.$VCc, {
						title: "Google API Key",
						get description() {
							return [
								(0, d.createComponent)(r.Show, {
									get when() {
										return ie(Z, Ee);
									},
									get children() {
										return (0, d.createComponent)(ee, {
											get children() {
												return [
													(() => {
														const ke = A(),
															Ue = ke.firstChild,
															qe = Ue.nextSibling,
															Ae = qe.nextSibling;
														return (
															(0, m.insert)(
																ke,
																(() => {
																	const Me = (0, C.memo)(
																		() => Ee() === T.MembershipType.PRO,
																	);
																	return () =>
																		Me()
																			? "Pro "
																			: (() => {
																					const De = (0, C.memo)(
																						() =>
																							Ee() ===
																							T.MembershipType.ENTERPRISE,
																					);
																					return () =>
																						De()
																							? "Enterprise "
																							: Ee() ===
																									T.MembershipType.FREE_TRIAL
																								? "Pro Trial "
																								: "";
																				})();
																})(),
																qe,
															),
															ke
														);
													})(),
													(() => {
														const ke = D();
														return (
															ke.style.setProperty("display", "flex"),
															ke.style.setProperty("align-items", "center"),
															ke.style.setProperty("gap", "4px"),
															ke.style.setProperty(
																"justify-content",
																"flex-end",
															),
															ke.style.setProperty("transform", "scale(0.8)"),
															ke.style.setProperty("transform-origin", "right"),
															(0, m.insert)(
																ke,
																(0, d.createComponent)(b.$rdc, {
																	type: "secondary",
																	title: "Dismiss",
																	onClick: () =>
																		Z.reactiveStorageService.setApplicationUserPersistentStorage(
																			"settingsDismissedGoogleKeyWarning",
																			!0,
																		),
																}),
																null,
															),
															(0, m.insert)(
																ke,
																(0, d.createComponent)(b.$rdc, {
																	title: "Turn Off Google Key",
																	onClick: () => Be(!1),
																}),
																null,
															),
															ke
														);
													})(),
												];
											},
										});
									},
								}),
								[
									"You can put in",
									" ",
									(() => {
										const ke = R();
										return (
											ke.addEventListener("click", () => {
												Z.openerService.open(
													"https://aistudio.google.com/app/apikey",
												);
											}),
											ke.style.setProperty("display", "inline"),
											ke.style.setProperty(
												"color",
												"var(--vscode-textLink-foreground)",
											),
											ke.style.setProperty("cursor", "pointer"),
											ke
										);
									})(),
									" ",
									"to use Google models at-cost.",
								],
							];
						},
						style: { gap: "14px" },
						get titleExtra() {
							return (0, d.createComponent)(r.Show, {
								get when() {
									return Ce() != null;
								},
								get children() {
									const ke = D();
									return (
										ke.style.setProperty("margin-left", "auto"),
										ke.style.setProperty("display", "flex"),
										ke.style.setProperty("flex-direction", "column"),
										ke.style.setProperty("align-items", "flex-end"),
										ke.style.setProperty("gap", "6px"),
										ke.style.setProperty("margin-right", "12px"),
										(0, m.insert)(
											ke,
											(0, d.createComponent)(u.$dob, {
												style: {
													transform: "scale(0.8)",
													"transform-origin": "right",
												},
												get value() {
													return (
														Z.reactiveStorageService
															.applicationUserPersistentStorage.useGoogleKey ??
														!1
													);
												},
												onToggle: () => Be(),
											}),
										),
										ke
									);
								},
							});
						},
						get children() {
							return [
								(0, d.createComponent)(k.$BDc, {
									get isOpen() {
										return Fe();
									},
									onClose: () => Oe(!1),
									onConfirm: Se,
									apiName: "Google",
								}),
								(() => {
									const ke = D();
									return (
										ke.style.setProperty("display", "flex"),
										ke.style.setProperty("width", "100%"),
										ke.style.setProperty("gap", "6px"),
										ke.style.setProperty("align-items", "center"),
										ke.style.setProperty("margin", "0px auto"),
										(0, m.insert)(
											ke,
											(0, d.createComponent)(o.default, {
												size: "small",
												extraStyles: { "font-size": "12px", flex: 1 },
												get extras() {
													return {
														type: "password",
														placeholder: "Enter your Google AI Studio API Key",
														onInput: (Ue) => {
															be(Ue.currentTarget.value);
														},
														onKeyDown: (Ue) => {
															Ue.key === "Enter" && Je();
														},
														value: ge() || "",
														spellcheck: !1,
													};
												},
											}),
											null,
										),
										(0, m.insert)(
											ke,
											(0, d.createComponent)(b.$rdc, {
												onClick: () => {
													Je();
												},
												size: "small",
												get isLoading() {
													return le();
												},
												title: "Verify",
												get codicon() {
													return a.$ak.arrowRight;
												},
												get style() {
													return {
														display: "flex",
														"flex-direction": "row-reverse",
														opacity: le() ? 0.6 : 1,
													};
												},
											}),
											null,
										),
										ke
									);
								})(),
								(0, d.createComponent)(r.Show, {
									get when() {
										return me() === !1;
									},
									get children() {
										return (0, d.createComponent)(n.Portal, {
											get mount() {
												return Z.portalElement;
											},
											get children() {
												return [
													(() => {
														const ke = D();
														return (
															ke.addEventListener("click", (Ue) => {
																Ue.stopPropagation(), ve(null);
															}),
															ke.style.setProperty("position", "fixed"),
															ke.style.setProperty("top", "0"),
															ke.style.setProperty("left", "0"),
															ke.style.setProperty("bottom", "0"),
															ke.style.setProperty("right", "0"),
															ke.style.setProperty("z-index", "1000003"),
															ke.style.setProperty(
																"background-color",
																"rgba(0, 0, 0, 0.5)",
															),
															ke
														);
													})(),
													(() => {
														const ke = M();
														return (
															ke.style.setProperty("display", "flex"),
															ke.style.setProperty("flex-direction", "column"),
															ke.style.setProperty("gap", "4px"),
															ke.style.setProperty("position", "fixed"),
															ke.style.setProperty("width", "400px"),
															ke.style.setProperty("height", "300px"),
															ke.style.setProperty("z-index", "1000004"),
															ke.style.setProperty("top", "50%"),
															ke.style.setProperty("left", "50%"),
															ke.style.setProperty(
																"transform",
																"translate(-50%, -50%)",
															),
															ke.style.setProperty("border-radius", "5px"),
															ke.style.setProperty("font-size", "12px"),
															ke.style.setProperty(
																"background-color",
																"var(--vscode-sideBar-background)",
															),
															ke.style.setProperty(
																"border",
																"1px solid var(--vscode-commandCenter-inactiveBorder)",
															),
															ke.style.setProperty(
																"color",
																"var(--vscode-foreground)",
															),
															ke.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															ke.style.setProperty("overflow", "hidden"),
															(0, m.insert)(
																ke,
																(0, d.createComponent)(f.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	get children() {
																		const Ue = N(),
																			qe = Ue.firstChild,
																			Ae = qe.nextSibling,
																			Me = Ae.firstChild,
																			De = Me.firstChild,
																			Re = De.nextSibling,
																			je = Re.firstChild,
																			Ve = Ae.nextSibling,
																			Ze = Ve.nextSibling,
																			et = Ze.firstChild,
																			rt = et.firstChild,
																			ft = Ze.nextSibling,
																			bt = ft.firstChild,
																			nt = bt.nextSibling,
																			lt = nt.nextSibling,
																			ct = lt.nextSibling;
																		return (
																			Ue.style.setProperty("padding", "16px"),
																			Ue.style.setProperty("display", "flex"),
																			Ue.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Ue.style.setProperty("gap", "12px"),
																			qe.style.setProperty("font-size", "14px"),
																			qe.style.setProperty(
																				"font-weight",
																				"500",
																			),
																			qe.style.setProperty(
																				"color",
																				"var(--vscode-editorError-foreground)",
																			),
																			Ae.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			Ae.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			Ae.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			Ae.style.setProperty("display", "flex"),
																			Ae.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Me.addEventListener("click", () => {
																				fe(!ue());
																			}),
																			Me.style.setProperty("display", "flex"),
																			Me.style.setProperty("gap", "4px"),
																			Me.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Me.style.setProperty("font-size", "12px"),
																			Me.style.setProperty("cursor", "pointer"),
																			Me.style.setProperty(
																				"padding",
																				"0px 8px",
																			),
																			De.style.setProperty("font-size", "10px"),
																			(0, m.insert)(
																				Re,
																				() => (ue() ? "Hide" : "Show"),
																				je,
																			),
																			(0, m.insert)(
																				Ae,
																				(0, d.createComponent)(r.Show, {
																					get when() {
																						return ue();
																					},
																					get children() {
																						const gt = M();
																						return (
																							gt.style.setProperty(
																								"padding",
																								"4px 8px",
																							),
																							(0, m.insert)(
																								gt,
																								(0, d.createComponent)(s.$Ibc, {
																									get text() {
																										return $e().trim();
																									},
																									language: "plaintext",
																									nonReactiveEditorOptions: {
																										fontSize: 10,
																									},
																								}),
																							),
																							gt
																						);
																					},
																				}),
																				null,
																			),
																			Ze.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			Ze.style.setProperty("padding", "8px"),
																			Ze.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			Ze.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			et.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			rt.addEventListener("click", () => {
																				(0, y.$Y$b)(Ie()),
																					pe(!0),
																					setTimeout(() => {
																						pe(!1);
																					}, 3e3);
																			}),
																			rt.style.setProperty("display", "flex"),
																			rt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			rt.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			rt.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			rt.style.setProperty("cursor", "pointer"),
																			rt.style.setProperty("padding", "4px"),
																			(0, m.insert)(
																				Ze,
																				(0, d.createComponent)(s.$Ibc, {
																					get text() {
																						return Ie();
																					},
																					language: "shellscript",
																					nonReactiveEditorOptions: {
																						fontSize: 10,
																					},
																				}),
																				null,
																			),
																			nt.addEventListener("click", () => {
																				Z.openerService.open(`mailto:${g.$vV}`);
																			}),
																			nt.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			nt.style.setProperty("cursor", "pointer"),
																			nt.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			(0, m.insert)(nt, g.$vV),
																			ct.addEventListener("click", () => {
																				Z.openerService.open(
																					"https://aistudio.google.com/app/apikey",
																				);
																			}),
																			ct.style.setProperty("display", "inline"),
																			ct.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			ct.style.setProperty("cursor", "pointer"),
																			(0, E.effect)(
																				(gt) => {
																					const ht = ue()
																							? "1px solid var(--vscode-commandCenter-inactiveBorder)"
																							: void 0,
																						Rt =
																							"settings-menu-hoverable " + Te(),
																						Nt = ue()
																							? "rotate(180deg)"
																							: void 0,
																						jt = h.ThemeIcon.asClassName(
																							a.$ak.chevronDown,
																						),
																						ti =
																							(ae()
																								? h.ThemeIcon.asClassName(
																										a.$ak.check,
																									)
																								: h.ThemeIcon.asClassName(
																										a.$ak.copy,
																									)) +
																							" settings-menu-hoverable " +
																							Te();
																					return (
																						ht !== gt._v$ &&
																							((gt._v$ = ht) != null
																								? Me.style.setProperty(
																										"border-bottom",
																										ht,
																									)
																								: Me.style.removeProperty(
																										"border-bottom",
																									)),
																						Rt !== gt._v$2 &&
																							(0, w.className)(
																								Me,
																								(gt._v$2 = Rt),
																							),
																						Nt !== gt._v$3 &&
																							((gt._v$3 = Nt) != null
																								? De.style.setProperty(
																										"transform",
																										Nt,
																									)
																								: De.style.removeProperty(
																										"transform",
																									)),
																						jt !== gt._v$4 &&
																							(0, w.className)(
																								De,
																								(gt._v$4 = jt),
																							),
																						ti !== gt._v$5 &&
																							(0, w.className)(
																								rt,
																								(gt._v$5 = ti),
																							),
																						gt
																					);
																				},
																				{
																					_v$: void 0,
																					_v$2: void 0,
																					_v$3: void 0,
																					_v$4: void 0,
																					_v$5: void 0,
																				},
																			),
																			Ue
																		);
																	},
																}),
															),
															ke
														);
													})(),
												];
											},
										});
									},
								}),
							];
						},
					});
				},
				te = () => {
					const Z = (0, c.$odc)(),
						se = Z.cursorAuthenticationService,
						[re, le] = (0, r.createSignal)(!1),
						[oe, ae] = (0, r.createSignal)(!1),
						[pe, $e] = (0, r.createSignal)(""),
						[ye, ue] = (0, r.createSignal)(!1),
						[fe, me] = (0, r.createSignal)(null),
						[ve, ge] = (0, r.createSignal)(""),
						[be, Ce] = (0, r.createSignal)(null),
						[Le, Fe] = (0, r.createSignal)(!1),
						[Oe, xe] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						se.addClaudeKeyChangedListener(Ce),
							(0, r.onCleanup)(() => {
								se.removeClaudeKeyChangedListener(Ce);
							});
					}),
						(0, r.createEffect)((Se) => {
							const ke =
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useClaudeKey;
							if (Se !== ke)
								if ((console.log("Claude key changed", ke, Se), ke))
									for (const Ue of I.$D6b) Z.aiSettingsService.enableModel(Ue);
								else
									for (const Ue of I.$D6b) Z.aiSettingsService.removeModel(Ue);
							return ke;
						}, Z
							.reactiveStorageService
							.applicationUserPersistentStorage.useClaudeKey),
						(0, r.createEffect)(() => {
							Ce(se.claudeKey() ?? null), ge(se.claudeKey() ?? "");
						}, []);
					const He = async () =>
							Z.everythingProviderService.provider?.runCommand(
								T.MiscActions.CheckClaudeAPIKey,
								{ apiKey: ve() },
							),
						Ke = async () => {
							if (
								(xe(!0),
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useClaudeKey)
							) {
								Be();
								return;
							}
							Fe(!0);
						},
						Je = (0, r.createMemo)(() =>
							(0, l.$d$b)(Z.themeService) ? "dark" : "light",
						),
						[, Te] = (0, P.$B$b)(),
						Ee = (0, r.createMemo)(() =>
							p.$l
								? Z.terminalService.activeInstance?.shellLaunchConfig.executable?.endsWith(
										"powershell.exe",
									)
									? `$headers = @{
		"Content-Type" = "application/json"
		"Authorization" = "Bearer ${ve()}"
	}

	$body = @{
		"messages" = @(
				@{
						"role" = "system"
						"content" = "You are a test assistant."
				},
				@{
						"role" = "user"
						"content" = "Testing. Just say hi and nothing else."
				}
		)
	} | ConvertTo-Json

	Invoke-WebRequest -Uri "https://api.anthropic.com/v1/messages" -Method Post -Headers $headers -Body $body`
									: `curl https://api.anthropic.com/v1/messages -H "Content-Type: application/json" -H "Authorization: Bearer ${ve()}" -d "{ \\"messages\\": [ { \\"role\\": \\"system\\", \\"content\\": \\"You are a test assistant.\\" }, { \\"role\\": \\"user\\", \\"content\\": \\"Testing. Just say hi and nothing else.\\" } ] }"`
								: `curl https://api.anthropic.com/v1/messages -H "Content-Type: application/json" --header "x-api-key: ${ve()}" --header "anthropic-version: 2023-06-01" -d '{
		"model": "claude-3-opus-20240229",
    "max_tokens": 1024,
		"messages": [
			{
				"role": "user",
				"content": "Testing. Just say hi and nothing else."
			}
		]
	}'`,
						),
						Ie = (Se) => {
							const ke =
								Se === void 0
									? !Z.reactiveStorageService.applicationUserPersistentStorage
											.useClaudeKey
									: Se;
							Z.reactiveStorageService.setApplicationUserPersistentStorage(
								"useClaudeKey",
								ke,
							),
								ke &&
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"settingsDismissedClaudeKeyWarning",
										!1,
									);
						},
						Be = async () => {
							if (Oe()) {
								xe(!1), Fe(!1), le(!0);
								const Se = await He();
								Se?.valid
									? (se.storeClaudeKey(ve()), me(!0))
									: (Se !== void 0 && Se.error && $e(Se.error), me(!1)),
									se.storeClaudeKey(ve()),
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"useClaudeKey",
										!0,
									),
									le(!1);
								return;
							}
							Ie(!0), Fe(!1);
						};
					return (0, d.createComponent)(v.$VCc, {
						title: "Anthropic API Key",
						get description() {
							return [
								(0, d.createComponent)(r.Show, {
									get when() {
										return Y(Z, Te);
									},
									get children() {
										return (0, d.createComponent)(ee, {
											get children() {
												return [
													(() => {
														const Se = B(),
															ke = Se.firstChild,
															Ue = ke.nextSibling,
															qe = Ue.nextSibling;
														return (
															(0, m.insert)(
																Se,
																(() => {
																	const Ae = (0, C.memo)(
																		() => Te() === T.MembershipType.PRO,
																	);
																	return () =>
																		Ae()
																			? "Pro "
																			: (() => {
																					const Me = (0, C.memo)(
																						() =>
																							Te() ===
																							T.MembershipType.ENTERPRISE,
																					);
																					return () =>
																						Me()
																							? "Enterprise "
																							: Te() ===
																									T.MembershipType.FREE_TRIAL
																								? "Pro Trial "
																								: "";
																				})();
																})(),
																Ue,
															),
															Se
														);
													})(),
													(() => {
														const Se = D();
														return (
															Se.style.setProperty("display", "flex"),
															Se.style.setProperty("align-items", "center"),
															Se.style.setProperty("gap", "4px"),
															Se.style.setProperty(
																"justify-content",
																"flex-end",
															),
															Se.style.setProperty("transform", "scale(0.8)"),
															Se.style.setProperty("transform-origin", "right"),
															(0, m.insert)(
																Se,
																(0, d.createComponent)(b.$rdc, {
																	type: "secondary",
																	title: "Dismiss",
																	onClick: () =>
																		Z.reactiveStorageService.setApplicationUserPersistentStorage(
																			"settingsDismissedClaudeKeyWarning",
																			!0,
																		),
																}),
																null,
															),
															(0, m.insert)(
																Se,
																(0, d.createComponent)(b.$rdc, {
																	title: "Turn Off Anthropic Key",
																	onClick: () => Ie(!1),
																}),
																null,
															),
															Se
														);
													})(),
												];
											},
										});
									},
								}),
								[
									"You can put in",
									" ",
									(() => {
										const Se = U();
										return (
											Se.addEventListener("click", () => {
												Z.openerService.open(
													"https://console.anthropic.com/settings/keys",
												);
											}),
											Se.style.setProperty("display", "inline"),
											Se.style.setProperty(
												"color",
												"var(--vscode-textLink-foreground)",
											),
											Se.style.setProperty("cursor", "pointer"),
											Se
										);
									})(),
									" ",
									'to use Claude at cost. When enabled, this key will be used for all models beginning with "claude-".',
								],
							];
						},
						style: { gap: "14px" },
						get titleExtra() {
							return (0, d.createComponent)(r.Show, {
								get when() {
									return be() != null;
								},
								get children() {
									const Se = D();
									return (
										Se.style.setProperty("margin-left", "auto"),
										Se.style.setProperty("display", "flex"),
										Se.style.setProperty("flex-direction", "column"),
										Se.style.setProperty("align-items", "flex-end"),
										Se.style.setProperty("gap", "6px"),
										Se.style.setProperty("margin-right", "12px"),
										(0, m.insert)(
											Se,
											(0, d.createComponent)(u.$dob, {
												style: {
													transform: "scale(0.8)",
													"transform-origin": "right",
												},
												get value() {
													return (
														Z.reactiveStorageService
															.applicationUserPersistentStorage.useClaudeKey ??
														!1
													);
												},
												onToggle: () => {
													!Z.reactiveStorageService
														.applicationUserPersistentStorage.useClaudeKey
														? Fe(!0)
														: Ie(!1);
												},
											}),
										),
										Se
									);
								},
							});
						},
						get children() {
							return [
								(0, d.createComponent)(k.$BDc, {
									get isOpen() {
										return Le();
									},
									onClose: () => Fe(!1),
									onConfirm: Be,
									apiName: "Anthropic",
								}),
								(() => {
									const Se = D();
									return (
										Se.style.setProperty("display", "flex"),
										Se.style.setProperty("width", "100%"),
										Se.style.setProperty("gap", "6px"),
										Se.style.setProperty("align-items", "center"),
										Se.style.setProperty("margin", "0px auto"),
										(0, m.insert)(
											Se,
											(0, d.createComponent)(o.default, {
												extraStyles: { "font-size": "12px", flex: 1 },
												size: "small",
												get extras() {
													return {
														type: "password",
														placeholder: "Enter your Anthropic API Key",
														onInput: (ke) => {
															ge(ke.currentTarget.value);
														},
														onKeyDown: (ke) => {
															ke.key === "Enter" && Ke();
														},
														value: ve() || "",
														spellcheck: !1,
													};
												},
											}),
											null,
										),
										(0, m.insert)(
											Se,
											(0, d.createComponent)(b.$rdc, {
												onClick: () => {
													Ke();
												},
												size: "small",
												get isLoading() {
													return re();
												},
												title: "Verify",
												get codicon() {
													return a.$ak.arrowRight;
												},
												get style() {
													return {
														display: "flex",
														"flex-direction": "row-reverse",
														opacity: re() ? 0.6 : 1,
													};
												},
											}),
											null,
										),
										Se
									);
								})(),
								(0, d.createComponent)(r.Show, {
									get when() {
										return fe() === !1;
									},
									get children() {
										return (0, d.createComponent)(n.Portal, {
											get mount() {
												return Z.portalElement;
											},
											get children() {
												return [
													(() => {
														const Se = D();
														return (
															Se.addEventListener("click", (ke) => {
																ke.stopPropagation(), me(null);
															}),
															Se.style.setProperty("position", "fixed"),
															Se.style.setProperty("top", "0"),
															Se.style.setProperty("left", "0"),
															Se.style.setProperty("bottom", "0"),
															Se.style.setProperty("right", "0"),
															Se.style.setProperty("z-index", "1000003"),
															Se.style.setProperty(
																"background-color",
																"rgba(0, 0, 0, 0.5)",
															),
															Se
														);
													})(),
													(() => {
														const Se = M();
														return (
															Se.style.setProperty("display", "flex"),
															Se.style.setProperty("flex-direction", "column"),
															Se.style.setProperty("gap", "4px"),
															Se.style.setProperty("position", "fixed"),
															Se.style.setProperty("width", "400px"),
															Se.style.setProperty("height", "300px"),
															Se.style.setProperty("z-index", "1000004"),
															Se.style.setProperty("top", "50%"),
															Se.style.setProperty("left", "50%"),
															Se.style.setProperty(
																"transform",
																"translate(-50%, -50%)",
															),
															Se.style.setProperty("border-radius", "5px"),
															Se.style.setProperty("font-size", "12px"),
															Se.style.setProperty(
																"background-color",
																"var(--vscode-sideBar-background)",
															),
															Se.style.setProperty(
																"border",
																"1px solid var(--vscode-commandCenter-inactiveBorder)",
															),
															Se.style.setProperty(
																"color",
																"var(--vscode-foreground)",
															),
															Se.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															Se.style.setProperty("overflow", "hidden"),
															(0, m.insert)(
																Se,
																(0, d.createComponent)(f.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	get children() {
																		const ke = O(),
																			Ue = ke.firstChild,
																			qe = Ue.nextSibling,
																			Ae = qe.firstChild,
																			Me = Ae.firstChild,
																			De = Me.nextSibling,
																			Re = De.firstChild,
																			je = qe.nextSibling,
																			Ve = je.nextSibling,
																			Ze = Ve.firstChild,
																			et = Ze.firstChild,
																			rt = Ve.nextSibling,
																			ft = rt.firstChild,
																			bt = ft.nextSibling,
																			nt = bt.nextSibling,
																			lt = nt.nextSibling;
																		return (
																			ke.style.setProperty("padding", "16px"),
																			ke.style.setProperty("display", "flex"),
																			ke.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			ke.style.setProperty("gap", "12px"),
																			Ue.style.setProperty("font-size", "14px"),
																			Ue.style.setProperty(
																				"font-weight",
																				"500",
																			),
																			Ue.style.setProperty(
																				"color",
																				"var(--vscode-editorError-foreground)",
																			),
																			qe.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			qe.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			qe.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			qe.style.setProperty("display", "flex"),
																			qe.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Ae.addEventListener("click", () => {
																				ue(!ye());
																			}),
																			Ae.style.setProperty("display", "flex"),
																			Ae.style.setProperty("gap", "4px"),
																			Ae.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Ae.style.setProperty("font-size", "12px"),
																			Ae.style.setProperty("cursor", "pointer"),
																			Ae.style.setProperty(
																				"padding",
																				"0px 8px",
																			),
																			Me.style.setProperty("font-size", "10px"),
																			(0, m.insert)(
																				De,
																				() => (ye() ? "Hide" : "Show"),
																				Re,
																			),
																			(0, m.insert)(
																				qe,
																				(0, d.createComponent)(r.Show, {
																					get when() {
																						return ye();
																					},
																					get children() {
																						const ct = M();
																						return (
																							ct.style.setProperty(
																								"padding",
																								"4px 8px",
																							),
																							(0, m.insert)(
																								ct,
																								(0, d.createComponent)(s.$Ibc, {
																									get text() {
																										return pe().trim();
																									},
																									language: "plaintext",
																									nonReactiveEditorOptions: {
																										fontSize: 10,
																									},
																								}),
																							),
																							ct
																						);
																					},
																				}),
																				null,
																			),
																			Ve.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			Ve.style.setProperty("padding", "8px"),
																			Ve.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			Ve.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			Ze.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			et.addEventListener("click", () => {
																				(0, y.$Y$b)(Ee()),
																					ae(!0),
																					setTimeout(() => {
																						ae(!1);
																					}, 3e3);
																			}),
																			et.style.setProperty("display", "flex"),
																			et.style.setProperty(
																				"align-items",
																				"center",
																			),
																			et.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			et.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			et.style.setProperty("cursor", "pointer"),
																			et.style.setProperty("padding", "4px"),
																			(0, m.insert)(
																				Ve,
																				(0, d.createComponent)(s.$Ibc, {
																					get text() {
																						return Ee();
																					},
																					language: "shellscript",
																					nonReactiveEditorOptions: {
																						fontSize: 10,
																					},
																				}),
																				null,
																			),
																			bt.addEventListener("click", () => {
																				Z.openerService.open(`mailto:${g.$vV}`);
																			}),
																			bt.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			bt.style.setProperty("cursor", "pointer"),
																			bt.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			(0, m.insert)(bt, g.$vV),
																			lt.addEventListener("click", () => {
																				Z.openerService.open(
																					"https://console.anthropic.com/settings/keys",
																				);
																			}),
																			lt.style.setProperty("display", "inline"),
																			lt.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			lt.style.setProperty("cursor", "pointer"),
																			(0, E.effect)(
																				(ct) => {
																					const gt = ye()
																							? "1px solid var(--vscode-commandCenter-inactiveBorder)"
																							: void 0,
																						ht =
																							"settings-menu-hoverable " + Je(),
																						Rt = ye()
																							? "rotate(180deg)"
																							: void 0,
																						Nt = h.ThemeIcon.asClassName(
																							a.$ak.chevronDown,
																						),
																						jt =
																							(oe()
																								? h.ThemeIcon.asClassName(
																										a.$ak.check,
																									)
																								: h.ThemeIcon.asClassName(
																										a.$ak.copy,
																									)) +
																							" settings-menu-hoverable " +
																							Je();
																					return (
																						gt !== ct._v$6 &&
																							((ct._v$6 = gt) != null
																								? Ae.style.setProperty(
																										"border-bottom",
																										gt,
																									)
																								: Ae.style.removeProperty(
																										"border-bottom",
																									)),
																						ht !== ct._v$7 &&
																							(0, w.className)(
																								Ae,
																								(ct._v$7 = ht),
																							),
																						Rt !== ct._v$8 &&
																							((ct._v$8 = Rt) != null
																								? Me.style.setProperty(
																										"transform",
																										Rt,
																									)
																								: Me.style.removeProperty(
																										"transform",
																									)),
																						Nt !== ct._v$9 &&
																							(0, w.className)(
																								Me,
																								(ct._v$9 = Nt),
																							),
																						jt !== ct._v$10 &&
																							(0, w.className)(
																								et,
																								(ct._v$10 = jt),
																							),
																						ct
																					);
																				},
																				{
																					_v$6: void 0,
																					_v$7: void 0,
																					_v$8: void 0,
																					_v$9: void 0,
																					_v$10: void 0,
																				},
																			),
																			ke
																		);
																	},
																}),
															),
															Se
														);
													})(),
												];
											},
										});
									},
								}),
							];
						},
					});
				};
			function Q(Z) {
				const se = (0, c.$odc)(),
					re = se.aiSettingsService,
					le = se.cursorAuthenticationService,
					[oe, ae] = (0, r.createSignal)(null),
					[pe, $e] = (0, r.createSignal)(""),
					[ye, ue] = (0, r.createSignal)(""),
					[fe, me] = (0, r.createSignal)(""),
					[ve, ge] = (0, r.createSignal)(""),
					[be, Ce] = (0, r.createSignal)(!1),
					Le = (0, r.createMemo)(() =>
						se.aiSettingsService.getAvailableModelsReactive(),
					),
					Fe = (0, r.createMemo)(() =>
						se.aiSettingsService.getAllPotentialModelsReactive(),
					),
					[Oe, xe] = (0, r.createSignal)(!1);
				(0, r.createEffect)(() => {
					le.addOpenAIKeyChangedListener($e),
						(0, r.onCleanup)(() => {
							le.removeOpenAIKeyChangedListener($e);
						});
				}),
					(0, r.createEffect)(() => {
						re.getApiKey().then((kt) => {
							kt && $e(kt);
						});
					}),
					(0, r.createEffect)(() => {
						ue(pe());
					}),
					(0, r.createEffect)(() => {
						ye() !== null && (Z.setIsWarningOpen(!1), ae(null));
					});
				const [He, Ke] = (0, r.createSignal)(!1),
					[Je, Te] = (0, r.createSignal)(!1),
					[Ee, Ie] = (0, r.createSignal)(!1),
					[Be, Se] = (0, r.createSignal)(!1),
					[ke, Ue] = (0, r.createSignal)(!1),
					[qe, Ae] = (0, r.createSignal)(!1),
					Me = () => {
						if (
							(Ae(!0),
							se.reactiveStorageService.applicationUserPersistentStorage
								.useOpenAIKey)
						) {
							ti();
							return;
						}
						Ue(!0);
					},
					De = (0, r.createMemo)(() =>
						p.$l
							? se.terminalService.activeInstance?.shellLaunchConfig.executable?.endsWith(
									"powershell.exe",
								)
								? `$headers = @{
		"Content-Type" = "application/json"
		"Authorization" = "Bearer ${ye()}"
}

$body = @{
		"messages" = @(
				@{
						"role" = "system"
						"content" = "You are a test assistant."
				},
				@{
						"role" = "user"
						"content" = "Testing. Just say hi and nothing else."
				}
		)
		"model" = "${se.aiSettingsService.getModelForChallenge()}"
} | ConvertTo-Json

Invoke-WebRequest -Uri "${se.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1"}/chat/completions" -Method Post -Headers $headers -Body $body`
								: `curl ${se.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1"}/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer ${ye()}" -d "{ \\"messages\\": [ { \\"role\\": \\"system\\", \\"content\\": \\"You are a test assistant.\\" }, { \\"role\\": \\"user\\", \\"content\\": \\"Testing. Just say hi and nothing else.\\" } ], \\"model\\": \\"${se.aiSettingsService.getModelForChallenge()}\\" }"`
							: `curl ${se.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1"}/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer ${ye()}" -d '{
  "messages": [
    {
      "role": "system",
      "content": "You are a test assistant."
    },
    {
      "role": "user",
      "content": "Testing. Just say hi and nothing else."
    }
  ],
  "model": "${se.aiSettingsService.getModelForChallenge()}"
}'`,
					);
				(0, r.createEffect)(() => {
					const kt = Z.setIsWarningOpen,
						hi = (Kt) => {
							Kt.key === "Escape" &&
								oe() !== null &&
								(Kt.stopImmediatePropagation(), ae(null), kt(!1));
						};
					se.window.document.addEventListener("keydown", hi),
						(0, r.onCleanup)(() => {
							se.window.document.removeEventListener("keydown", hi);
						});
				});
				const Re = (0, r.createMemo)(() =>
					(0, l.$d$b)(se.themeService) ? "dark" : "light",
				);
				let je;
				const [Ve, Ze] = (0, r.createSignal)(
						se.reactiveStorageService.applicationUserPersistentStorage
							.azureState.useAzure,
					),
					[et, rt] = (0, r.createSignal)(null),
					[, ft] = (0, P.$B$b)(),
					[bt, nt] = (0, r.createSignal)(!0),
					[lt, ct] = (0, r.createSignal)(!0);
				let gt = null;
				(0, r.createEffect)(
					(0, r.on)(bt, (kt) => {
						kt == !0
							? ((gt = setTimeout(() => {
									ct(!0);
								}, 300)),
								(0, r.onCleanup)(() => clearTimeout(gt)))
							: ct(!1);
					}),
				);
				const ht = async () => {
						if (
							se.reactiveStorageService.applicationUserPersistentStorage
								.azureState.baseUrl === void 0
						)
							return;
						let kt =
							se.reactiveStorageService.applicationUserPersistentStorage.azureState.baseUrl.trim();
						kt.endsWith("/") && (kt = kt.slice(0, -1)),
							kt.startsWith("https://") || (kt = "https://" + kt);
						const hi =
								se.reactiveStorageService.applicationUserPersistentStorage
									.azureState.deployment,
							Kt = `${kt}/openai/deployments/${hi}/chat/completions?api-version=2023-03-15-preview`;
						try {
							return (
								(
									await fetch(Kt, {
										method: "POST",
										headers: {
											"Content-Type": "application/json",
											"api-key": `${se.reactiveStorageService.applicationUserPersistentStorage.azureState.apiKey}`,
										},
										body: JSON.stringify({
											messages: [
												{
													role: "system",
													content: "You are a helpful assistant.",
												},
												{
													role: "user",
													content: "Test prompt using gpt-3.5-turbo",
												},
											],
											temperature: 1,
											top_p: 1,
											n: 1,
											max_tokens: 10,
											stream: !1,
										}),
									})
								).status === 200
							);
						} catch {
							return !1;
						}
					},
					Rt = () => {
						rt(null),
							nt(!1),
							ct(!1),
							nt(!0),
							se.reactiveStorageService.setApplicationUserPersistentStorage(
								"azureState",
								{ useAzure: !1 },
							),
							Ze(!1);
					},
					Nt = async () => {
						(await ht())
							? (se.reactiveStorageService.setApplicationUserPersistentStorage(
									"azureState",
									{ useAzure: !0 },
								),
								Ze(!0),
								rt(!0))
							: rt(!1);
					},
					jt = (kt) => {
						(
							kt === void 0
								? !se.reactiveStorageService.applicationUserPersistentStorage
										.useOpenAIKey
								: kt
						)
							? Ue(!0)
							: se.aiSettingsService.setUseOpenAIKey(!1);
					},
					ti = () => {
						if (qe()) {
							Ae(!1), Ue(!1), Ke(!0);
							const kt = Z.setIsWarningOpen;
							re.setOpenAIKey(ye()).then((hi) => {
								Ke(!1),
									hi !== !0
										? (ae(!1),
											kt(!0),
											me(`(status code ${hi.code})
${hi.error}`))
										: (ae(!0), kt(!1));
							});
							return;
						}
						se.aiSettingsService.setUseOpenAIKey(!0),
							se.reactiveStorageService.setApplicationUserPersistentStorage(
								"settingsDismissedOpenAIKeyWarning",
								!1,
							),
							Ue(!1);
					};
				return (0, d.createComponent)($.$eDc, {
					get children() {
						return [
							(0, d.createComponent)(k.$BDc, {
								get isOpen() {
									return ke();
								},
								onClose: () => Ue(!1),
								onConfirm: ti,
								apiName: "OpenAI",
							}),
							(0, d.createComponent)(v.$VCc, {
								title: "Model Names",
								description:
									"Add new models to Cursor. Often used to configure the latest OpenAI models or OpenRouter models.",
								style: { gap: "14px" },
								get children() {
									const kt = z(),
										hi = kt.firstChild;
									return (
										kt.style.setProperty("margin", "0px"),
										kt.style.setProperty("font-size", "12px"),
										kt.style.setProperty("color", "var(--vscode-foreground)"),
										kt.style.setProperty("gap", "2px"),
										kt.style.setProperty("display", "flex"),
										kt.style.setProperty("flex-direction", "column"),
										kt.style.setProperty("padding-right", "8px"),
										(0, m.insert)(
											kt,
											(0, d.createComponent)(r.For, {
												get each() {
													return Fe();
												},
												get fallback() {
													return K();
												},
												children: (Kt, di) =>
													(() => {
														const Ye = J(),
															ze = Ye.firstChild,
															Xe = ze.firstChild,
															It = ze.nextSibling;
														return (
															Ye.addEventListener("click", (Lt) => {
																Lt.stopPropagation(),
																	Le().includes(Kt)
																		? se.aiSettingsService.disableModel(Kt)
																		: se.aiSettingsService.enableModel(Kt);
															}),
															Ye.style.setProperty("display", "flex"),
															Ye.style.setProperty("padding", "4px"),
															Ye.style.setProperty("align-items", "center"),
															Ye.style.setProperty(
																"justify-content",
																"space-between",
															),
															Ye.style.setProperty("border-radius", "4px"),
															Ye.style.setProperty("cursor", "pointer"),
															ze.style.setProperty("display", "flex"),
															ze.style.setProperty("align-items", "center"),
															ze.style.setProperty("gap", "4px"),
															(0, m.insert)(
																ze,
																(0, d.createComponent)(L.$XCc, {
																	get value() {
																		return Le().includes(Kt);
																	},
																	onChange: () => {},
																}),
																Xe,
															),
															(0, m.insert)(Xe, Kt),
															It.addEventListener("click", (Lt) => {
																Lt.stopImmediatePropagation(),
																	(async () => {
																		(await se.prettyDialogService.openDialog({
																			primaryButton: {
																				id: "remove-model",
																				label: "Remove",
																			},
																			cancelButton: {
																				id: "cancel-remove-model",
																				label: "Cancel",
																			},
																			title: "Remove model",
																			message: `Are you sure you want to remove the model "${Kt}"? You can add it back later.`,
																		})) === "remove-model" &&
																			se.aiSettingsService.removeModel(Kt);
																	})();
															}),
															It.style.setProperty("padding", "2px"),
															It.style.setProperty("font-size", "12px"),
															It.style.setProperty("border-radius", "4px"),
															It.style.setProperty("cursor", "pointer"),
															(0, E.effect)(
																(Lt) => {
																	const xt = di(),
																		Vt = Le().includes(Kt) ? 1 : 0.5,
																		Bt = "settings-menu-hoverable " + Re(),
																		Gt =
																			h.ThemeIcon.asClassName(a.$ak.x) +
																			" settings-menu-hoverable " +
																			Re(),
																		Mt = se.aiSettingsService.isDefaultModel(Kt)
																			? "none"
																			: "auto",
																		Ut = se.aiSettingsService.isDefaultModel(Kt)
																			? "hidden"
																			: "visible";
																	return (
																		xt !== Lt._v$16 &&
																			(0, i.setAttribute)(
																				Ye,
																				"data-index",
																				(Lt._v$16 = xt),
																			),
																		Vt !== Lt._v$17 &&
																			((Lt._v$17 = Vt) != null
																				? Ye.style.setProperty("opacity", Vt)
																				: Ye.style.removeProperty("opacity")),
																		Bt !== Lt._v$18 &&
																			(0, w.className)(Ye, (Lt._v$18 = Bt)),
																		Gt !== Lt._v$19 &&
																			(0, w.className)(It, (Lt._v$19 = Gt)),
																		Mt !== Lt._v$20 &&
																			((Lt._v$20 = Mt) != null
																				? It.style.setProperty(
																						"pointer-events",
																						Mt,
																					)
																				: It.style.removeProperty(
																						"pointer-events",
																					)),
																		Ut !== Lt._v$21 &&
																			((Lt._v$21 = Ut) != null
																				? It.style.setProperty("visibility", Ut)
																				: It.style.removeProperty(
																						"visibility",
																					)),
																		Lt
																	);
																},
																{
																	_v$16: void 0,
																	_v$17: void 0,
																	_v$18: void 0,
																	_v$19: void 0,
																	_v$20: void 0,
																	_v$21: void 0,
																},
															),
															Ye
														);
													})(),
											}),
											hi,
										),
										hi.style.setProperty("display", "flex"),
										hi.style.setProperty("width", "100%"),
										hi.style.setProperty("gap", "6px"),
										hi.style.setProperty("align-items", "center"),
										hi.style.setProperty("margin", "0px auto"),
										hi.style.setProperty("margin-top", "4px"),
										(0, m.insert)(
											hi,
											(0, d.createComponent)(r.Show, {
												get when() {
													return be();
												},
												get children() {
													return [
														(0, d.createComponent)(o.default, {
															ref(Kt) {
																const di = je;
																typeof di == "function" ? di(Kt) : (je = Kt);
															},
															extraStyles: {
																"font-size": "12px",
																padding: "5px 12px",
																flex: 1,
															},
															size: "small",
															get extras() {
																return {
																	placeholder: "New model name",
																	onInput: (Kt) => {
																		ge(Kt.currentTarget.value);
																	},
																	onKeyDown: (Kt) => {
																		Kt.key === "Enter"
																			? (se.aiSettingsService.enableModel(ve()),
																				Ce(!1),
																				ge(""))
																			: Kt.key === "Escape" && (Ce(!1), ge(""));
																	},
																	onBlur: () => {
																		Ce(!1), ge("");
																	},
																	value: ve() || "",
																	spellcheck: !1,
																};
															},
														}),
														(0, d.createComponent)(b.$rdc, {
															onClick: () => {
																se.aiSettingsService.enableModel(ve()),
																	Ce(!1),
																	ge("");
															},
															type: "secondary",
															title: "Add model",
															get codicon() {
																return a.$ak.plus;
															},
															extras: { style: {} },
														}),
													];
												},
											}),
											null,
										),
										(0, m.insert)(
											hi,
											(0, d.createComponent)(r.Show, {
												get when() {
													return !be();
												},
												get children() {
													return (0, d.createComponent)(b.$rdc, {
														style: { "align-self": "stretch", flex: 1 },
														size: "small",
														onClick: () => {
															Ce(!0),
																setTimeout(() => {
																	je?.focus();
																}, 100);
														},
														get codicon() {
															return a.$ak.plus;
														},
														type: "secondary",
														title: "Add model",
													});
												},
											}),
											null,
										),
										kt
									);
								},
							}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(v.$VCc, {
								title: "OpenAI API Key",
								get description() {
									return [
										(0, d.createComponent)(r.Show, {
											get when() {
												return ne(se, ft);
											},
											get children() {
												return (0, d.createComponent)(ee, {
													get children() {
														return [
															(() => {
																const kt = W(),
																	hi = kt.firstChild,
																	Kt = hi.nextSibling,
																	di = Kt.nextSibling;
																return (
																	(0, m.insert)(
																		kt,
																		(() => {
																			const Ye = (0, C.memo)(
																				() => ft() === T.MembershipType.PRO,
																			);
																			return () =>
																				Ye()
																					? "Pro "
																					: (() => {
																							const ze = (0, C.memo)(
																								() =>
																									ft() ===
																									T.MembershipType.ENTERPRISE,
																							);
																							return () =>
																								ze()
																									? "Enterprise "
																									: ft() ===
																											T.MembershipType
																												.FREE_TRIAL
																										? "Pro Trial "
																										: "";
																						})();
																		})(),
																		Kt,
																	),
																	kt
																);
															})(),
															(() => {
																const kt = D();
																return (
																	kt.style.setProperty("display", "flex"),
																	kt.style.setProperty("align-items", "center"),
																	kt.style.setProperty("gap", "4px"),
																	kt.style.setProperty(
																		"justify-content",
																		"flex-end",
																	),
																	kt.style.setProperty(
																		"transform",
																		"scale(0.8)",
																	),
																	kt.style.setProperty(
																		"transform-origin",
																		"right",
																	),
																	(0, m.insert)(
																		kt,
																		(0, d.createComponent)(b.$rdc, {
																			type: "secondary",
																			title: "Dismiss",
																			onClick: () =>
																				se.reactiveStorageService.setApplicationUserPersistentStorage(
																					"settingsDismissedOpenAIKeyWarning",
																					!0,
																				),
																		}),
																		null,
																	),
																	(0, m.insert)(
																		kt,
																		(0, d.createComponent)(b.$rdc, {
																			title: "Turn Off OpenAI Key",
																			onClick: () => jt(!1),
																		}),
																		null,
																	),
																	kt
																);
															})(),
														];
													},
												});
											},
										}),
										[
											"You can put in",
											" ",
											(() => {
												const kt = X();
												return (
													kt.addEventListener("click", () => {
														se.openerService.open(
															"https://platform.openai.com/account/api-keys",
														);
													}),
													kt.style.setProperty("display", "inline"),
													kt.style.setProperty(
														"color",
														"var(--vscode-textLink-foreground)",
													),
													kt.style.setProperty("cursor", "pointer"),
													kt
												);
											})(),
											" ",
											"to use Cursor at public API costs. Note: this can cost more than pro and ",
											"won't",
											" work for custom model features.",
										],
									];
								},
								style: { gap: "14px" },
								get titleExtra() {
									return (0, d.createComponent)(r.Show, {
										get when() {
											return pe();
										},
										get children() {
											const kt = D();
											return (
												kt.style.setProperty("margin-left", "auto"),
												kt.style.setProperty("display", "flex"),
												kt.style.setProperty("flex-direction", "column"),
												kt.style.setProperty("align-items", "flex-end"),
												kt.style.setProperty("gap", "6px"),
												kt.style.setProperty("margin-right", "12px"),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(u.$dob, {
														style: {
															transform: "scale(0.8)",
															"transform-origin": "right",
														},
														get value() {
															return (
																se.reactiveStorageService
																	.applicationUserPersistentStorage
																	.useOpenAIKey ?? !1
															);
														},
														onToggle: () => jt(),
													}),
												),
												kt
											);
										},
									});
								},
								get children() {
									return [
										(() => {
											const kt = D();
											return (
												kt.style.setProperty("display", "flex"),
												kt.style.setProperty("width", "100%"),
												kt.style.setProperty("gap", "6px"),
												kt.style.setProperty("align-items", "center"),
												kt.style.setProperty("margin", "0px auto"),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(o.default, {
														extraStyles: { "font-size": "12px", flex: 1 },
														size: "small",
														get extras() {
															return {
																type: "password",
																placeholder: "Enter your OpenAI API Key",
																onInput: (hi) => {
																	ue(hi.currentTarget.value);
																},
																onKeyDown: (hi) => {
																	hi.key === "Enter" && Me();
																},
																value: ye() || "",
																spellcheck: !1,
															};
														},
													}),
													null,
												),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(b.$rdc, {
														onClick: () => {
															Me();
														},
														size: "small",
														get isLoading() {
															return He();
														},
														title: "Verify",
														get codicon() {
															return a.$ak.arrowRight;
														},
														get style() {
															return {
																display: "flex",
																"flex-direction": "row-reverse",
																opacity: He() ? 0.6 : 1,
															};
														},
													}),
													null,
												),
												kt
											);
										})(),
										(0, d.createComponent)(r.Show, {
											get when() {
												return oe() === !1;
											},
											get children() {
												return (0, d.createComponent)(n.Portal, {
													get mount() {
														return se.portalElement;
													},
													get children() {
														return [
															(() => {
																const kt = D();
																return (
																	kt.addEventListener("click", (hi) => {
																		hi.stopPropagation(),
																			ae(null),
																			Z.setIsWarningOpen(!1);
																	}),
																	kt.style.setProperty("position", "fixed"),
																	kt.style.setProperty("top", "0"),
																	kt.style.setProperty("left", "0"),
																	kt.style.setProperty("bottom", "0"),
																	kt.style.setProperty("right", "0"),
																	kt.style.setProperty("z-index", "1000003"),
																	kt.style.setProperty(
																		"background-color",
																		"rgba(0, 0, 0, 0.5)",
																	),
																	kt
																);
															})(),
															(() => {
																const kt = M();
																return (
																	kt.style.setProperty("display", "flex"),
																	kt.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	kt.style.setProperty("gap", "4px"),
																	kt.style.setProperty("position", "fixed"),
																	kt.style.setProperty("width", "400px"),
																	kt.style.setProperty("height", "300px"),
																	kt.style.setProperty("z-index", "1000004"),
																	kt.style.setProperty("top", "50%"),
																	kt.style.setProperty("left", "50%"),
																	kt.style.setProperty(
																		"transform",
																		"translate(-50%, -50%)",
																	),
																	kt.style.setProperty("border-radius", "5px"),
																	kt.style.setProperty("font-size", "12px"),
																	kt.style.setProperty(
																		"background-color",
																		"var(--vscode-sideBar-background)",
																	),
																	kt.style.setProperty(
																		"border",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	kt.style.setProperty(
																		"color",
																		"var(--vscode-foreground)",
																	),
																	kt.style.setProperty(
																		"box-shadow",
																		"0 0 8px 2px var(--vscode-widget-shadow)",
																	),
																	kt.style.setProperty("overflow", "hidden"),
																	(0, m.insert)(
																		kt,
																		(0, d.createComponent)(f.$w0b, {
																			style: { height: "100%" },
																			scrollingDirection: "vertical",
																			get children() {
																				const hi = F(),
																					Kt = hi.firstChild,
																					di = Kt.nextSibling,
																					Ye = di.firstChild,
																					ze = Ye.firstChild,
																					Xe = ze.nextSibling,
																					It = Xe.firstChild,
																					Lt = di.nextSibling,
																					xt = Lt.nextSibling,
																					Vt = xt.firstChild,
																					Bt = Vt.firstChild,
																					Gt = xt.nextSibling,
																					Mt = Gt.firstChild,
																					Ut = Mt.nextSibling,
																					ei = Ut.nextSibling,
																					mi = ei.nextSibling;
																				return (
																					hi.style.setProperty(
																						"padding",
																						"16px",
																					),
																					hi.style.setProperty(
																						"display",
																						"flex",
																					),
																					hi.style.setProperty(
																						"flex-direction",
																						"column",
																					),
																					hi.style.setProperty("gap", "12px"),
																					Kt.style.setProperty(
																						"font-size",
																						"14px",
																					),
																					Kt.style.setProperty(
																						"font-weight",
																						"500",
																					),
																					Kt.style.setProperty(
																						"color",
																						"var(--vscode-editorError-foreground)",
																					),
																					di.style.setProperty(
																						"background",
																						"var(--vscode-editor-background)",
																					),
																					di.style.setProperty(
																						"border-radius",
																						"6px",
																					),
																					di.style.setProperty(
																						"border",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					di.style.setProperty(
																						"display",
																						"flex",
																					),
																					di.style.setProperty(
																						"flex-direction",
																						"column",
																					),
																					Ye.addEventListener("click", () => {
																						Se(!Be());
																					}),
																					Ye.style.setProperty(
																						"display",
																						"flex",
																					),
																					Ye.style.setProperty("gap", "4px"),
																					Ye.style.setProperty(
																						"align-items",
																						"center",
																					),
																					Ye.style.setProperty(
																						"font-size",
																						"12px",
																					),
																					Ye.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					Ye.style.setProperty(
																						"padding",
																						"0px 8px",
																					),
																					ze.style.setProperty(
																						"font-size",
																						"10px",
																					),
																					(0, m.insert)(
																						Xe,
																						() => (Be() ? "Hide" : "Show"),
																						It,
																					),
																					(0, m.insert)(
																						di,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return Be();
																							},
																							get children() {
																								const ii = M();
																								return (
																									ii.style.setProperty(
																										"padding",
																										"4px 8px",
																									),
																									(0, m.insert)(
																										ii,
																										(0, d.createComponent)(
																											s.$Ibc,
																											{
																												get text() {
																													return fe().trim();
																												},
																												language: "plaintext",
																												nonReactiveEditorOptions:
																													{ fontSize: 10 },
																											},
																										),
																									),
																									ii
																								);
																							},
																						}),
																						null,
																					),
																					xt.style.setProperty(
																						"background",
																						"var(--vscode-editor-background)",
																					),
																					xt.style.setProperty(
																						"padding",
																						"8px",
																					),
																					xt.style.setProperty(
																						"border-radius",
																						"6px",
																					),
																					xt.style.setProperty(
																						"border",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					Vt.style.setProperty(
																						"background",
																						"var(--vscode-editor-background)",
																					),
																					Bt.addEventListener("click", () => {
																						(0, y.$Y$b)(De()),
																							Ie(!0),
																							setTimeout(() => {
																								Ie(!1);
																							}, 3e3);
																					}),
																					Bt.style.setProperty(
																						"display",
																						"flex",
																					),
																					Bt.style.setProperty(
																						"align-items",
																						"center",
																					),
																					Bt.style.setProperty(
																						"justify-content",
																						"center",
																					),
																					Bt.style.setProperty(
																						"border-radius",
																						"4px",
																					),
																					Bt.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					Bt.style.setProperty(
																						"padding",
																						"4px",
																					),
																					(0, m.insert)(
																						xt,
																						(0, d.createComponent)(s.$Ibc, {
																							get text() {
																								return De();
																							},
																							language: "shellscript",
																							nonReactiveEditorOptions: {
																								fontSize: 10,
																							},
																						}),
																						null,
																					),
																					Ut.addEventListener("click", () => {
																						se.openerService.open(
																							`mailto:${g.$vV}`,
																						);
																					}),
																					Ut.style.setProperty(
																						"color",
																						"var(--vscode-textLink-foreground)",
																					),
																					Ut.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					Ut.style.setProperty(
																						"text-decoration",
																						"none",
																					),
																					(0, m.insert)(Ut, g.$vV),
																					mi.addEventListener("click", () => {
																						se.openerService.open(
																							"https://platform.openai.com/account/api-keys",
																						);
																					}),
																					mi.style.setProperty(
																						"display",
																						"inline",
																					),
																					mi.style.setProperty(
																						"color",
																						"var(--vscode-textLink-foreground)",
																					),
																					mi.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					(0, E.effect)(
																						(ii) => {
																							const Dt = Be()
																									? "1px solid var(--vscode-commandCenter-inactiveBorder)"
																									: void 0,
																								Jt =
																									"settings-menu-hoverable " +
																									Re(),
																								si = Be()
																									? "rotate(180deg)"
																									: void 0,
																								Zt = h.ThemeIcon.asClassName(
																									a.$ak.chevronDown,
																								),
																								ci =
																									(Ee()
																										? h.ThemeIcon.asClassName(
																												a.$ak.check,
																											)
																										: h.ThemeIcon.asClassName(
																												a.$ak.copy,
																											)) +
																									" settings-menu-hoverable " +
																									Re();
																							return (
																								Dt !== ii._v$11 &&
																									((ii._v$11 = Dt) != null
																										? Ye.style.setProperty(
																												"border-bottom",
																												Dt,
																											)
																										: Ye.style.removeProperty(
																												"border-bottom",
																											)),
																								Jt !== ii._v$12 &&
																									(0, w.className)(
																										Ye,
																										(ii._v$12 = Jt),
																									),
																								si !== ii._v$13 &&
																									((ii._v$13 = si) != null
																										? ze.style.setProperty(
																												"transform",
																												si,
																											)
																										: ze.style.removeProperty(
																												"transform",
																											)),
																								Zt !== ii._v$14 &&
																									(0, w.className)(
																										ze,
																										(ii._v$14 = Zt),
																									),
																								ci !== ii._v$15 &&
																									(0, w.className)(
																										Bt,
																										(ii._v$15 = ci),
																									),
																								ii
																							);
																						},
																						{
																							_v$11: void 0,
																							_v$12: void 0,
																							_v$13: void 0,
																							_v$14: void 0,
																							_v$15: void 0,
																						},
																					),
																					hi
																				);
																			},
																		}),
																	),
																	kt
																);
															})(),
														];
													},
												});
											},
										}),
										(() => {
											const kt = x(),
												hi = kt.firstChild,
												Kt = hi.firstChild,
												di = Kt.nextSibling;
											return (
												kt.style.setProperty("display", "flex"),
												kt.style.setProperty("flex-direction", "column"),
												kt.style.setProperty("gap", "6px"),
												hi.addEventListener("click", () => {
													xe((Ye) => !Ye);
												}),
												hi.style.setProperty("font-size", "10px"),
												hi.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												hi.style.setProperty("cursor", "pointer"),
												hi.style.setProperty("display", "flex"),
												hi.style.setProperty("flex-direction", "row"),
												hi.style.setProperty("align-items", "center"),
												hi.style.setProperty("user-select", "none"),
												(0, m.insert)(
													hi,
													(0, d.createComponent)(r.Show, {
														get when() {
															return (
																se.reactiveStorageService
																	.applicationUserPersistentStorage
																	.useOpenAIKey !== !0
															);
														},
														get children() {
															return ["(when using key)", " "];
														},
													}),
													di,
												),
												di.style.setProperty("font-size", "8px"),
												di.style.setProperty("margin-left", "2px"),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(r.Show, {
														get when() {
															return (
																Oe() ||
																(se.reactiveStorageService
																	.applicationUserPersistentStorage
																	.openAIBaseUrl !== void 0 &&
																	se.reactiveStorageService
																		.applicationUserPersistentStorage
																		.useOpenAIKey === !0)
															);
														},
														get children() {
															const Ye = z(),
																ze = Ye.firstChild;
															return (
																Ye.style.setProperty("display", "flex"),
																Ye.style.setProperty("gap", "4px"),
																Ye.style.setProperty("align-items", "center"),
																(0, m.insert)(
																	Ye,
																	(0, d.createComponent)(o.default, {
																		size: "small",
																		extraStyles: {
																			"font-size": "12px",
																			flex: 1,
																		},
																		get extras() {
																			return {
																				placeholder:
																					"https://api.openai.com/v1",
																				onInput: (Xe) => {
																					se.reactiveStorageService.setApplicationUserPersistentStorage(
																						"openAIBaseUrl",
																						Xe.currentTarget.value,
																					);
																				},
																				value:
																					se.reactiveStorageService
																						.applicationUserPersistentStorage
																						.openAIBaseUrl || "",
																				spellcheck: !1,
																			};
																		},
																	}),
																	ze,
																),
																ze.style.setProperty("display", "flex"),
																ze.style.setProperty("align-items", "center"),
																ze.style.setProperty("gap", "4px"),
																(0, m.insert)(
																	ze,
																	(0, d.createComponent)(b.$rdc, {
																		onClick: () => {
																			Te(!0),
																				setTimeout(
																					() => {
																						Te(!1);
																					},
																					800 + Math.random() * 200,
																				);
																		},
																		get codicon() {
																			return a.$ak.save;
																		},
																		title: "Save",
																		size: "small",
																		get style() {
																			return {
																				opacity: Je() ? 0.5 : 1,
																				transition: "opacity 0.1s",
																				"pointer-events": Je()
																					? "none"
																					: "auto",
																			};
																		},
																		get isLoading() {
																			return Je();
																		},
																	}),
																	null,
																),
																(0, m.insert)(
																	ze,
																	(0, d.createComponent)(b.$rdc, {
																		size: "small",
																		onClick: () => {
																			se.reactiveStorageService.setApplicationUserPersistentStorage(
																				"openAIBaseUrl",
																				void 0,
																			);
																		},
																		get codicon() {
																			return a.$ak.refresh;
																		},
																		type: "tertiary",
																		title: "Reset to default",
																	}),
																	null,
																),
																Ye
															);
														},
													}),
													null,
												),
												(0, E.effect)(() =>
													(0, w.className)(
														di,
														Oe()
															? h.ThemeIcon.asClassName(a.$ak.chevronUp)
															: h.ThemeIcon.asClassName(a.$ak.chevronDown),
													),
												),
												kt
											);
										})(),
									];
								},
							}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(te, {}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(_, {}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(v.$VCc, {
								title: "Azure API Key",
								description:
									"Instead of OpenAI's API or pro, you can use Cursor at-cost through the Azure API.",
								titleStyle: { width: "100%" },
								get titleExtra() {
									return (() => {
										const kt = D();
										return (
											kt.style.setProperty("margin-left", "auto"),
											kt.style.setProperty("display", "flex"),
											kt.style.setProperty("width", "100%"),
											kt.style.setProperty("justify-content", "flex-end"),
											kt.style.setProperty("margin-right", "24px"),
											kt.style.setProperty("align-items", "flex-end"),
											kt.style.setProperty("gap", "6px"),
											(0, m.insert)(
												kt,
												(0, d.createComponent)(u.$dob, {
													style: {
														transform: "scale(0.8)",
														"transform-origin": "right",
													},
													get value() {
														return Ve();
													},
													onToggle: () => {
														Ve()
															? (se.reactiveStorageService.setApplicationUserPersistentStorage(
																	"azureState",
																	{ useAzure: !1 },
																),
																Ze(!1))
															: Nt();
													},
												}),
											),
											kt
										);
									})();
								},
								style: { gap: "14px" },
								get children() {
									const kt = G(),
										hi = kt.firstChild,
										Kt = hi.firstChild,
										di = Kt.firstChild,
										Ye = di.nextSibling,
										ze = Kt.nextSibling,
										Xe = ze.firstChild,
										It = Xe.nextSibling,
										Lt = ze.nextSibling,
										xt = Lt.firstChild,
										Vt = xt.nextSibling,
										Bt = hi.nextSibling;
									return (
										kt.style.setProperty("gap", "10px"),
										kt.style.setProperty("margin-left", "8px"),
										hi.style.setProperty("display", "flex"),
										hi.style.setProperty("flex-direction", "column"),
										hi.style.setProperty("gap", "4px"),
										(0, m.insert)(
											Ye,
											(0, d.createComponent)(o.default, {
												extraStyles: {
													width: "100%",
													"font-size": "12px",
													flex: 1,
												},
												size: "small",
												get extras() {
													return {
														placeholder:
															"E.g. https://cursor-oai.openai.azure.com/",
														onInput: (Gt) => {
															se.reactiveStorageService.setApplicationUserPersistentStorage(
																"azureState",
																{ baseUrl: Gt.currentTarget.value },
															),
																Rt();
														},
														value:
															se.reactiveStorageService
																.applicationUserPersistentStorage.azureState
																.baseUrl,
														spellcheck: !1,
													};
												},
											}),
										),
										(0, m.insert)(
											It,
											(0, d.createComponent)(o.default, {
												extraStyles: {
													width: "100%",
													"font-size": "12px",
													flex: 1,
												},
												size: "small",
												get extras() {
													return {
														placeholder:
															"The deployment name you chose when you deployed your model on azure",
														onInput: (Gt) => {
															se.reactiveStorageService.setApplicationUserPersistentStorage(
																"azureState",
																{ deployment: Gt.currentTarget.value },
															),
																Rt();
														},
														value:
															se.reactiveStorageService
																.applicationUserPersistentStorage.azureState
																.deployment,
														spellcheck: !1,
													};
												},
											}),
										),
										(0, m.insert)(
											Vt,
											(0, d.createComponent)(o.default, {
												extraStyles: {
													width: "100%",
													"font-size": "12px",
													flex: 1,
												},
												size: "small",
												get extras() {
													return {
														type: "password",
														placeholder: "Enter your Azure OpenAI Key",
														onInput: (Gt) => {
															se.reactiveStorageService.setApplicationUserPersistentStorage(
																"azureState",
																{ apiKey: Gt.currentTarget.value },
															),
																Rt();
														},
														value:
															se.reactiveStorageService
																.applicationUserPersistentStorage.azureState
																.apiKey,
														spellcheck: !1,
													};
												},
											}),
										),
										Bt.style.setProperty("display", "flex"),
										Bt.style.setProperty("width", "100%"),
										Bt.style.setProperty("align-items", "center"),
										Bt.style.setProperty("font-size", "10px"),
										Bt.style.setProperty(
											"color",
											"var(--vscode-breadcrumb-foreground)",
										),
										(0, m.insert)(
											Bt,
											(0, d.createComponent)(r.Show, {
												get when() {
													return lt();
												},
												get children() {
													const Gt = H();
													return (
														Gt.style.setProperty("margin-right", "8px"), Gt
													);
												},
											}),
											null,
										),
										(0, m.insert)(
											Bt,
											(0, d.createComponent)(r.Show, {
												get when() {
													return !lt();
												},
												get children() {
													const Gt = q();
													return (
														Gt.style.setProperty("margin-right", "8px"), Gt
													);
												},
											}),
											null,
										),
										(0, m.insert)(
											Bt,
											(0, d.createComponent)(r.Show, {
												get when() {
													return et() === !1;
												},
												get children() {
													const Gt = V();
													return (
														Gt.style.setProperty("font-size", "10px"),
														Gt.style.setProperty(
															"color",
															"var(--vscode-editorError-foreground)",
														),
														Gt
													);
												},
											}),
											null,
										),
										kt
									);
								},
							}),
						];
					},
				});
			}
		},
	),
		define(
			de[4342],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 3, 12, 242, 565, 485, 36, 564, 295, 135,
				865, 792, 216, 2422,
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
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerTerminalToolCallBlock = N);
				const y = (0, t.template)('<div><div class="terminal-prompt">$'),
					$ = (0, t.template)("<div>"),
					v = (0, t.template)(
						'<div><div class="composer-terminal-static-render">',
					),
					S = (0, t.template)(
						'<div class="hide-if-empty"><div></div><div></div><div class="hide-if-empty">',
					),
					I = (0, t.template)("<div><div></div><div>"),
					T = (0, t.template)("<div>Generating command"),
					P = (0, t.template)(
						"<div>Terminal popped out. <span>Click to focus.",
					),
					k = (0, t.template)('<div class="terminal-instance-component">');
				function L() {
					var R =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (z, F) {
										var x = Error();
										return (
											(x.name = "SuppressedError"),
											(x.error = z),
											(x.suppressed = F),
											x
										);
									},
						O = {},
						B = [];
					function U(z, F) {
						if (F != null) {
							if (Object(F) !== F)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (z)
								var x =
									F[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								x === void 0 &&
								((x = F[Symbol.dispose || Symbol.for("Symbol.dispose")]), z)
							)
								var H = x;
							if (typeof x != "function")
								throw new TypeError("Object is not disposable.");
							H &&
								(x = function () {
									try {
										H.call(F);
									} catch (q) {
										return Promise.reject(q);
									}
								}),
								B.push({ v: F, d: x, a: z });
						} else z && B.push({ d: F, a: z });
						return F;
					}
					return {
						e: O,
						u: U.bind(null, !1),
						a: U.bind(null, !0),
						d: function () {
							var z,
								F = this.e,
								x = 0;
							function H() {
								for (; (z = B.pop()); )
									try {
										if (!z.a && x === 1)
											return (x = 0), B.push(z), Promise.resolve().then(H);
										if (z.d) {
											var V = z.d.call(z.v);
											if (z.a) return (x |= 2), Promise.resolve(V).then(H, q);
										} else x |= 1;
									} catch (G) {
										return q(G);
									}
								if (x === 1)
									return F !== O ? Promise.reject(F) : Promise.resolve();
								if (F !== O) throw F;
							}
							function q(V) {
								return (F = F !== O ? new R(V, F) : V), H();
							}
							return H();
						},
					};
				}
				function D(R) {
					return "stdout" in R && "stderr" in R;
				}
				const M = a.$m ? "shellscript" : "powershell";
				function N(R) {
					try {
						var O = L();
						const B = O.u((0, l.span)("ComposerTerminalToolCallBlock")),
							U = (0, g.$odc)(),
							z = (0, m.createMemo)(() => R.status),
							F = (0, m.createMemo)(() => z() === "pending"),
							x = (0, m.createMemo)(() => z() === "loading"),
							H = (0, m.createMemo)(() => z() === "running"),
							q = (0, m.createMemo)(() => z() === "error"),
							V = (0, m.createMemo)(() => z() === "success"),
							G = (0, m.createMemo)(() => z() === "cancelled"),
							K = (be) => (a.$m ? `\u2318${be}` : `^${be}`),
							[J, W] = (0, m.createSignal)(!1),
							[X, Y] = (0, m.createSignal)(!1),
							[ie, ne] = (0, m.createSignal)(!1),
							[ee, _] = (0, m.createSignal)(!1),
							[te, Q] = (0, m.createSignal)(void 0),
							[Z, se] = (0, m.createSignal)(0),
							[re, le] = (0, m.createSignal)(0),
							oe = (0, m.createMemo)(() =>
								D(R)
									? `${R.stdout}${
											R.stderr
												? `
` + R.stderr
												: ""
										}`
									: "",
							);
						(0, m.createEffect)(() => {
							const be = oe(),
								Ce = te()?.clientHeight;
							Ce && se(Ce);
						}),
							(0, m.createEffect)(() => {
								(0, m.onMount)(() => {
									setTimeout(() => {
										const be = te();
										be && se(be.clientHeight);
									}, 1);
								});
							});
						let ae;
						(0, m.createEffect)(() => {
							J() &&
								(clearTimeout(ae),
								(ae = setTimeout(() => {
									W(!1);
								}, 2e3)));
						});
						const pe = (0, m.createMemo)(() => !R.isBlocking);
						let $e;
						(0, m.createEffect)(() => {
							ie()
								? ($e = setTimeout(() => {
										_(!0);
									}, 500))
								: (clearTimeout($e), _(!1));
						}),
							(0, m.onCleanup)(() => {
								clearTimeout($e);
							});
						const [ye, ue] = (0, m.createSignal)(!0),
							fe = (0, m.createMemo)(
								() =>
									R.terminalInstance &&
									ye() &&
									R.terminalInstance.shellLaunchConfig.hideFromUser === !0 &&
									!R.componentToShowInsteadOfTerminalInstance,
							);
						(0, m.createEffect)(() => {
							R.terminalInstance && ue(!0);
						});
						const me = (0, m.createMemo)(() => {
								const be = R.bubbleData;
								if (be) return be.toolCallId;
							}),
							ve = (0, m.createMemo)(() => {
								if (R.composerId)
									return U.composerDataService.getPendingUserDecisionGroup(
										R.composerId,
									);
							}),
							ge = (0, m.createMemo)(() => {
								const be = ve();
								return be ? be.some((Ce) => Ce.toolCallId === me()) : !1;
							});
						return (0, d.createComponent)(s.ComposerToolCallBlockContainer, {
							get style() {
								return {
									outline: ge()
										? "1px solid var(--vscode-notebook-focusedCellBorder)"
										: void 0,
									padding: "0",
								};
							},
							get children() {
								const be = I(),
									Ce = be.firstChild,
									Le = Ce.nextSibling;
								return (
									be.style.setProperty("display", "flex"),
									be.style.setProperty("flex-direction", "column"),
									be.style.setProperty("height", "100%"),
									Ce.style.setProperty("display", "flex"),
									Ce.style.setProperty("gap", "8px"),
									Ce.style.setProperty("align-items", "start"),
									Ce.style.setProperty("flex-shrink", "0"),
									Ce.style.setProperty("position", "relative"),
									Ce.style.setProperty("padding", "6px 8px"),
									(0, C.insert)(
										Ce,
										(0, d.createComponent)(m.Show, {
											get when() {
												return R.command;
											},
											get fallback() {
												return (() => {
													const Fe = T(),
														Oe = Fe.firstChild;
													return (
														Fe.style.setProperty("height", "19px"),
														Fe.style.setProperty("padding-right", "6px"),
														Fe.style.setProperty("font-family", "monospace"),
														Fe.style.setProperty("font-size", "12px"),
														Fe.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														Fe.style.setProperty("display", "flex"),
														Fe.style.setProperty("align-items", "center"),
														Fe.style.setProperty("gap", "6px"),
														(0, C.insert)(
															Fe,
															(0, d.createComponent)(o.$Y8b, { small: !0 }),
															Oe,
														),
														Fe
													);
												})();
											},
											get children() {
												const Fe = y(),
													Oe = Fe.firstChild;
												return (
													Fe.style.setProperty("flex", "1"),
													Fe.style.setProperty("display", "flex"),
													Fe.style.setProperty("width", "100%"),
													Fe.style.setProperty("align-items", "start"),
													Fe.style.setProperty("gap", "4px"),
													Fe.style.setProperty("position", "relative"),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(b.$Ibc, {
															scrollOnlyWhenFocused: !0,
															class: "show-only-on-hover-force",
															get text() {
																return R.command;
															},
															language: M,
															style: {
																flex: 1,
																"padding-right": "20px",
																"padding-left": "12px",
																width: "100%",
															},
															nonReactiveEditorOptions: {
																scrollbar: {
																	horizontal: "hidden",
																	horizontalScrollbarSize: 6,
																	ignoreVerticalScrolling: !0,
																	ignoreHorizontalScrollbarInContentHeight: !0,
																	alwaysConsumeMouseWheel: !1,
																	vertical: "hidden",
																},
																wordWrap: "on",
																rulers: [],
																overviewRulerBorder: !1,
																overviewRulerLanes: 0,
																automaticLayout: !0,
																automaticLayoutIgnoreHeight: !0,
																wordWrapOverride1: "on",
																wordWrapOverride2: "on",
															},
															autoHeightForModelChanges: !0,
															autoHeightForWordWrap: !0,
															get editable() {
																return F();
															},
															isSimpleWidget: !1,
															onTextChange: (xe) => {
																R.onCommandChange?.(xe);
															},
														}),
														null,
													),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return F();
															},
															get children() {
																return (0, d.createComponent)(
																	c.ComposerGeneralStatusIndicator,
																	{
																		pulse: !0,
																		status: "applying",
																		style: { margin: "4px" },
																	},
																);
															},
														}),
														null,
													),
													Fe
												);
											},
										}),
									),
									Le.style.setProperty("display", "flex"),
									Le.style.setProperty("flex-direction", "column"),
									Le.style.setProperty("gap", "0px"),
									Le.style.setProperty("height", "100%"),
									(0, C.insert)(
										Le,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, E.memo)(() => !!oe())() &&
													(H() || q() || G() || V())
												);
											},
											get children() {
												const Fe = v(),
													Oe = Fe.firstChild;
												return (
													Fe.style.setProperty("flex", "1"),
													Fe.style.setProperty("width", "100%"),
													Fe.style.setProperty("min-height", "0"),
													Fe.style.setProperty("display", "flex"),
													Fe.style.setProperty("flex-direction", "column"),
													Fe.style.setProperty("gap", "4px"),
													Fe.style.setProperty("position", "relative"),
													Oe.addEventListener("mouseleave", () => ne(!1)),
													Oe.addEventListener("mouseenter", () => ne(!0)),
													Oe.style.setProperty("width", "100%"),
													Oe.style.setProperty("position", "relative"),
													(0, C.insert)(
														Oe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return (
																	R.componentToShowInsteadOfTerminalInstance !==
																		"output" && R.terminalInstance
																);
															},
															get fallback() {
																return (0, d.createComponent)(f.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	innerContainerStyle: {
																		padding: "0px 8px",
																		"box-sizing": "border-box",
																	},
																	autoScrollToBottom: !0,
																	stableScrollable: !0,
																	get disableScroll() {
																		return !X();
																	},
																	nonReactiveElementOptions: {
																		verticalScrollbarSize: 6,
																		horizontalScrollbarSize: 6,
																	},
																	get children() {
																		return (0, d.createComponent)(b.$Ibc, {
																			get text() {
																				return oe().trimStart();
																			},
																			class: "show-only-on-hover-force",
																			language: M,
																			setContainerRef: Q,
																			scrollOnlyWhenFocused: !0,
																			nonReactiveEditorOptions: {
																				scrollbar: {
																					vertical: "hidden",
																					horizontal: "visible",
																					alwaysConsumeMouseWheel: !1,
																					ignoreHorizontalScrollbarInContentHeight:
																						!0,
																				},
																				wordWrap: "off",
																				wordWrapOverride1: "off",
																				wordWrapOverride2: "off",
																				rulers: [],
																				overviewRulerBorder: !1,
																				overviewRulerLanes: 0,
																				automaticLayout: !0,
																				padding: { top: 6, bottom: 6 },
																				fontSize: 12,
																			},
																			autoHeightForModelChanges: !0,
																			get style() {
																				return {
																					height:
																						oe().split(`
`).length *
																							(12 * 1.5) +
																						16 +
																						"px",
																				};
																			},
																			onFocus: () => Y(!0),
																			onBlur: () => Y(!1),
																		});
																	},
																});
															},
															children: (xe) => {
																const He = (0, m.createMemo)(() => xe());
																return (0, d.createComponent)(m.Show, {
																	get when() {
																		return fe();
																	},
																	get fallback() {
																		return (0, d.createComponent)(m.Show, {
																			get when() {
																				return R.componentToShowInsteadOfTerminalInstance;
																			},
																			get fallback() {
																				return (() => {
																					const Ke = P(),
																						Je = Ke.firstChild,
																						Te = Je.nextSibling;
																					return (
																						Ke.style.setProperty(
																							"text-overflow",
																							"ellipsis",
																						),
																						Ke.style.setProperty(
																							"overflow",
																							"hidden",
																						),
																						Ke.style.setProperty(
																							"white-space",
																							"nowrap",
																						),
																						Ke.style.setProperty(
																							"opacity",
																							"0.7",
																						),
																						Ke.style.setProperty(
																							"font-size",
																							"10px",
																						),
																						Ke.style.setProperty(
																							"user-select",
																							"none",
																						),
																						Ke.style.setProperty(
																							"text-align",
																							"center",
																						),
																						Ke.style.setProperty(
																							"padding-top",
																							"8px",
																						),
																						Ke.style.setProperty(
																							"padding-bottom",
																							"8px",
																						),
																						Te.addEventListener("click", () => {
																							U.terminalService.focusInstance(
																								xe(),
																							);
																						}),
																						Te.style.setProperty(
																							"text-decoration",
																							"underline",
																						),
																						Te.style.setProperty(
																							"cursor",
																							"pointer",
																						),
																						Ke
																					);
																				})();
																			},
																			get children() {
																				return R.componentToShowInsteadOfTerminalInstance;
																			},
																		});
																	},
																	get children() {
																		return (0, d.createComponent)(A, {
																			get terminalInstance() {
																				return He();
																			},
																			get isFocused() {
																				return X();
																			},
																			get isDone() {
																				return !H();
																			},
																			get startAtBufferLine() {
																				return R.startAtBufferLine;
																			},
																			setIsFocused: Y,
																			setTerminalOutputHeight: le,
																			get terminalOutputHeight() {
																				return re();
																			},
																		});
																	},
																});
															},
														}),
													),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return q() || G();
															},
															get children() {
																const xe = $();
																return (
																	xe.style.setProperty("font-style", "italic"),
																	xe.style.setProperty("padding", "8px"),
																	xe.style.setProperty("padding-top", "0px"),
																	(0, C.insert)(xe, () =>
																		q()
																			? "Command failed"
																			: "Command cancelled",
																	),
																	(0, w.effect)(() =>
																		(q()
																			? "var(--vscode-errorForeground)"
																			: "var(--vscode-descriptionForeground)") !=
																		null
																			? xe.style.setProperty(
																					"color",
																					q()
																						? "var(--vscode-errorForeground)"
																						: "var(--vscode-descriptionForeground)",
																				)
																			: xe.style.removeProperty("color"),
																	),
																	xe
																);
															},
														}),
														null,
													),
													(0, w.effect)(
														(xe) => {
															const He = G() ? 0.5 : 1,
																Ke = fe()
																	? re() + "px"
																	: R.terminalInstance &&
																			R.componentToShowInsteadOfTerminalInstance !==
																				"output"
																		? void 0
																		: Math.min(Z(), 300) + "px";
															return (
																He !== xe._v$ &&
																	((xe._v$ = He) != null
																		? Fe.style.setProperty("opacity", He)
																		: Fe.style.removeProperty("opacity")),
																Ke !== xe._v$2 &&
																	((xe._v$2 = Ke) != null
																		? Oe.style.setProperty("height", Ke)
																		: Oe.style.removeProperty("height")),
																xe
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													Fe
												);
											},
										}),
										null,
									),
									(0, C.insert)(
										Le,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(x() && R.command) ||
													(fe() &&
														R.showOpenInExternalTerminalCallback &&
														R.terminalInstance) ||
													F() ||
													x() ||
													H()
												);
											},
											get children() {
												const Fe = S(),
													Oe = Fe.firstChild,
													xe = Oe.nextSibling,
													He = xe.nextSibling;
												return (
													Fe.style.setProperty("display", "flex"),
													Fe.style.setProperty(
														"justify-content",
														"space-between",
													),
													Fe.style.setProperty("align-items", "baseline"),
													Fe.style.setProperty("flex-shrink", "0"),
													Fe.style.setProperty("padding", "0px 6px"),
													Fe.style.setProperty("padding-top", "0px"),
													Fe.style.setProperty("padding-bottom", "6px"),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return pe();
															},
															get children() {
																return (0, d.createComponent)(p.$nac, {
																	text: "Background",
																	type: "subtle",
																	size: "small",
																	style: {
																		"flex-shrink": 0,
																		"margin-right": "6px",
																	},
																});
															},
														}),
														Oe,
													),
													Oe.style.setProperty("text-overflow", "ellipsis"),
													Oe.style.setProperty("overflow", "hidden"),
													Oe.style.setProperty("white-space", "nowrap"),
													Oe.style.setProperty("opacity", "0.7"),
													Oe.style.setProperty("font-size", "10px"),
													(0, C.insert)(
														Oe,
														(() => {
															const Ke = (0, E.memo)(
																() => !!(x() && R.command),
															);
															return () =>
																Ke() && [
																	"Starting terminal",
																	(0, d.createComponent)(h.$C$b, {
																		show: !0,
																		speed: "slow",
																	}),
																];
														})(),
													),
													xe.style.setProperty("flex", "1"),
													He.style.setProperty("display", "flex"),
													He.style.setProperty("gap", "6px"),
													He.style.setProperty("align-items", "center"),
													(0, C.insert)(
														He,
														(0, d.createComponent)(m.Show, {
															get when() {
																return (
																	fe() &&
																	R.showOpenInExternalTerminalCallback &&
																	R.terminalInstance
																);
															},
															children: (Ke) =>
																(0, d.createComponent)(
																	n.ComposerToolbarSimpleButton,
																	{
																		onClick: () => {
																			const Je = Ke();
																			ue(!1),
																				U.terminalService.setActiveInstance(Je),
																				U.terminalService.focusInstance(Je),
																				R.showOpenInExternalTerminalCallback?.(
																					Je,
																				);
																		},
																		type: "secondary",
																		get codicon() {
																			return r.$ak.linkExternal;
																		},
																		children: "Pop out terminal",
																	},
																),
														}),
														null,
													),
													(0, C.insert)(
														He,
														(0, d.createComponent)(m.Show, {
															get when() {
																return F() || x();
															},
															get children() {
																return [
																	(0, d.createComponent)(
																		n.ComposerToolbarSimpleButton,
																		{
																			get onClick() {
																				return R.onCancel;
																			},
																			type: "secondary",
																			get children() {
																				return [
																					"Cancel",
																					(0, d.createComponent)(m.Show, {
																						get when() {
																							return ge();
																						},
																						get children() {
																							return " " + K("\u232B");
																						},
																					}),
																				];
																			},
																		},
																	),
																	(0, d.createComponent)(
																		n.ComposerToolbarSimpleButton,
																		{
																			get onClick() {
																				return R.onExecute;
																			},
																			get type() {
																				return ge() ? "primary" : "secondary";
																			},
																			get children() {
																				return [
																					"Run command",
																					(0, d.createComponent)(m.Show, {
																						get when() {
																							return ge();
																						},
																						get children() {
																							return " " + K("\u23CE");
																						},
																					}),
																				];
																			},
																		},
																	),
																];
															},
														}),
														null,
													),
													(0, C.insert)(
														He,
														(0, d.createComponent)(m.Show, {
															get when() {
																return H();
															},
															get children() {
																return (0, d.createComponent)(
																	n.ComposerToolbarSimpleButton,
																	{
																		get onClick() {
																			return R.onReset;
																		},
																		type: "true-secondary",
																		isLoading: !0,
																		children: "Cancel",
																	},
																);
															},
														}),
														null,
													),
													(0, w.effect)(
														(Ke) => {
															const Je = x() || !R.command ? 0.5 : 1,
																Te = x() || !R.command ? "none" : "auto",
																Ee = x() ? "none" : "text";
															return (
																Je !== Ke._v$3 &&
																	((Ke._v$3 = Je) != null
																		? Fe.style.setProperty("opacity", Je)
																		: Fe.style.removeProperty("opacity")),
																Te !== Ke._v$4 &&
																	((Ke._v$4 = Te) != null
																		? Fe.style.setProperty("pointer-events", Te)
																		: Fe.style.removeProperty(
																				"pointer-events",
																			)),
																Ee !== Ke._v$5 &&
																	((Ke._v$5 = Ee) != null
																		? Oe.style.setProperty("user-select", Ee)
																		: Oe.style.removeProperty("user-select")),
																Ke
															);
														},
														{ _v$3: void 0, _v$4: void 0, _v$5: void 0 },
													),
													Fe
												);
											},
										}),
										null,
									),
									(0, w.effect)(
										(Fe) => {
											const Oe = pe() ? "0.85" : "1",
												xe =
													oe() && (H() || q() || G() || V())
														? "1px solid var(--vscode-commandCenter-inactiveBorder)"
														: void 0,
												He = oe() ? "var(--vscode-panel-background)" : void 0;
											return (
												Oe !== Fe._v$6 &&
													((Fe._v$6 = Oe) != null
														? be.style.setProperty("opacity", Oe)
														: be.style.removeProperty("opacity")),
												xe !== Fe._v$7 &&
													((Fe._v$7 = xe) != null
														? Ce.style.setProperty("border-bottom", xe)
														: Ce.style.removeProperty("border-bottom")),
												He !== Fe._v$8 &&
													((Fe._v$8 = He) != null
														? Le.style.setProperty("background", He)
														: Le.style.removeProperty("background")),
												Fe
											);
										},
										{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
									),
									be
								);
							},
						});
					} catch (B) {
						O.e = B;
					} finally {
						O.d();
					}
				}
				function A(R) {
					const O = (0, g.$odc)();
					let B, U;
					const [z, F] = (0, m.createSignal)(!1),
						x = (K, J) => {
							(0, m.untrack)(() => {
								const W = K.xterm?.getBufferLength() ?? 1;
								let X = R.startAtBufferLine ?? 0;
								if ((X > W && (X = 0), z() && (X = 0), W - X < 25)) {
									const Y =
										K.xterm
											?.getBufferLines(X, K.xterm?.getBufferLength())
											.join(`
`) ?? "";
									q((ie) =>
										Math.max(
											ie,
											Y.trimEnd().split(`
`).length + (J ? 1 : 0),
										),
									);
								} else q((Y) => Math.max(Y, W));
							});
						};
					(0, m.createEffect)(() => {
						const K = R.terminalInstance,
							J = new u.$Zc();
						B &&
							(K.attachToElement(B),
							K.setVisible(!0),
							(U = new ResizeObserver((W) => {
								for (const X of W) {
									const Y = Math.max(X.contentRect.width, 800),
										ie = X.contentRect.height;
									K.layout({ width: Y, height: ie });
								}
							})),
							U.observe(B),
							K.layout({
								width: Math.max(800, B.clientWidth),
								height: B.clientHeight,
							}),
							x(K, !1)),
							J.add(
								K.onLineData((W) => {
									x(K, !0);
								}),
							),
							J.add(
								K.onDidBlur(() => {
									R.setIsFocused(!1);
								}),
							),
							J.add(
								K.onDidFocus(() => {
									F(!0), R.setIsFocused(!0), x(K, !1);
								}),
							),
							(0, m.onCleanup)(() => {
								K.setVisible(!1), K.detachFromElement(), U?.disconnect();
							});
					});
					const [H, q] = (0, m.createSignal)(0),
						[V, G] = (0, m.createSignal)(14);
					return (
						(0, m.createEffect)(() => {
							const K = () =>
								O.terminalConfigurationService.getFont(O.window, void 0, !0)
									.fontSize + 2;
							G(K());
							const J = O.terminalConfigurationService.onConfigChanged(() => {
								G(K());
							});
							(0, m.onCleanup)(() => J.dispose());
						}),
						(0, m.createEffect)(() => {
							const K = Math.max(H(), 1) * V() + 6 + 6 + 8;
							R.setTerminalOutputHeight(Math.min(K, 300)),
								R.isFocused || R.terminalInstance.scrollToBottom();
						}),
						(0, m.createEffect)(() => {
							const K = R.terminalInstance;
							if (K.xterm?.raw) {
								const J = K.xterm.raw.onKey((W) => {
									W.domEvent.key === "Escape" && K.xterm?.raw.blur();
								});
								(0, m.onCleanup)(() => {
									J.dispose();
								});
							}
						}),
						(0, m.createEffect)(() => {
							const K = R.terminalInstance;
							function J(W) {
								W.metaKey &&
									W.key === "c" &&
									(K.copySelection(), W.stopPropagation()),
									W.metaKey &&
										W.key === "v" &&
										(K.paste(), W.stopPropagation());
							}
							B?.addEventListener("keydown", J),
								(0, m.onCleanup)(() => {
									B?.removeEventListener("keydown", J);
								});
						}),
						(0, d.createComponent)(f.$w0b, {
							style: { height: "100%", width: "100%", position: "relative" },
							scrollingDirection: "horizontal",
							get disableScroll() {
								return !R.isFocused;
							},
							nonReactiveElementOptions: {
								verticalScrollbarSize: 6,
								horizontalScrollbarSize: 6,
							},
							get children() {
								return [
									(() => {
										const K = k(),
											J = B;
										return (
											typeof J == "function" ? (0, i.use)(J, K) : (B = K),
											K.style.setProperty("width", "100%"),
											(0, w.effect)(() =>
												R.terminalOutputHeight + "px" != null
													? K.style.setProperty(
															"height",
															R.terminalOutputHeight + "px",
														)
													: K.style.removeProperty("height"),
											),
											K
										);
									})(),
									(0, d.createComponent)(m.Show, {
										get when() {
											return !R.isFocused;
										},
										get children() {
											const K = $();
											return (
												K.addEventListener("click", () => {
													R.terminalInstance.focus();
												}),
												K.style.setProperty("position", "absolute"),
												K.style.setProperty("bottom", "0px"),
												K.style.setProperty("right", "0px"),
												K.style.setProperty("height", "100%"),
												K.style.setProperty("width", "100%"),
												K.style.setProperty("z-index", "1000000"),
												K
											);
										},
									}),
								];
							},
						})
					);
				}
			},
		),
		define(
			de[4343],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 167, 124, 4211, 41, 116, 4209,
				4342, 4294, 73, 3203, 4210, 9, 299, 177, 1378, 4207, 1974, 4292, 4293,
				270, 58, 4291, 4208, 4149, 311, 169, 26, 14,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerToolFormerMessage = void 0);
				const F = (0, t.template)('<div class="composer-tool-former-message">'),
					x = (0, t.template)(
						'<div class="revert-to-message-icon fade-in-fast"><div></div><span></span><span class="revert-to-message-icon-text">',
					),
					H = (0, t.template)("<div>"),
					q = (V) => {
						const G = (0, a.$odc)(),
							{ composerDataService: K, composerService: J } = G,
							{
								currentComposer: W,
								forceMode: X,
								composerDataHandle: Y,
							} = (0, S.useComposerDataHandle)(() => V.composerDataHandle),
							ie = (0, u.createMemo)(() =>
								K.getComposerBubble(W().composerId, V.bubbleId),
							),
							ne = (0, u.createMemo)(() =>
								K.getComposerCapability(
									W().composerId,
									h.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								),
							),
							ee = (0, u.createMemo)(() => {
								const ye = ne();
								if (!ye) return;
								const ue = ye.getBubbleData(V.bubbleId);
								if (ue) return ue;
							});
						function _(ye) {
							const ue = ee();
							return ue && ue.tool === ye ? ue : !1;
						}
						const te = (ye, ue) => {
								G.openerService.open(
									ue
										? (0, g.$8rb)(ye, {
												startLineNumber: ue.startLineNumber,
												startColumn: 1,
												endLineNumber: ue.endLineNumber,
												endColumn: 1,
											})
										: ye,
									{
										openToSide: !1,
										editorOptions: {
											revealIfVisible: !0,
											revealIfOpened: !0,
											source: p.EditorOpenSource.USER,
										},
										fromUserGesture: !0,
									},
								);
							},
							[Q] = (0, D.$K0b)(M.$HW, G.configurationService, !1),
							Z = (0, u.createMemo)(
								() => (Q() || V.location === "bar") && X() !== "chat",
							),
							se = (0, u.createMemo)(() => {
								const ye = ee();
								if (ye) return ye.toolCallId;
							}),
							re = (0, u.createMemo)(() =>
								G.composerDataService.getPendingUserDecisionGroup(
									W().composerId,
								),
							),
							le = (0, u.createMemo)(() => {
								const ye = re();
								return ye ? ye.some((ue) => ue.toolCallId === se()) : !1;
							}),
							oe = (0, u.createMemo)(() => {
								const ye = ee(),
									ue = ie();
								return !ye || !ue
									? !1
									: ue.checkpoint &&
											G.composerUtilsService.shouldShowCheckpointInToolFormerMessage(
												W().composerId,
												ye,
											) &&
											(W().currentBubbleId === void 0 ||
												W().currentBubbleId !== V.bubbleId);
							}),
							{ showHover: ae, hideHover: pe } = (0, O.useComposerHoverTooltip)(
								{ delay: B.COMPOSER_HOVER_TOOLTIP_DELAY },
							),
							$e = (ye) => {
								ye.stopPropagation(),
									V.bubbleId &&
										J.checkoutToCheckpoint(W().composerId, V.bubbleId);
							};
						return (0, r.createComponent)(u.Show, {
							get when() {
								return ne();
							},
							children: (ye) =>
								(() => {
									const ue = F();
									return (
										(0, m.insert)(
											ue,
											(0, r.createComponent)(u.Show, {
												get when() {
													return ee();
												},
												children: (fe) => [
													(0, r.createComponent)(u.Show, {
														get when() {
															return oe();
														},
														get children() {
															const me = x(),
																ve = me.firstChild,
																ge = ve.nextSibling,
																be = ge.nextSibling;
															return (
																me.style.setProperty("flex-shrink", "0"),
																me.style.setProperty("flex-wrap", "wrap"),
																me.style.setProperty("padding-left", "4px"),
																(0, m.insert)(ge, B.CHECKPOINT_MAIN_MESSAGE),
																(0, d.addEventListener)(be, "mouseleave", pe),
																be.addEventListener("mouseenter", (Ce) =>
																	ae(Ce, B.CHECKPOINT_HINT),
																),
																be.addEventListener("click", $e),
																(0, m.insert)(be, B.CHECKPOINT_CTA),
																(0, C.effect)(() =>
																	(0, E.className)(
																		ve,
																		`codicon ${U.ThemeIcon.asClassName(z.$ak.bookmark)} revert-to-message-icon-pin`,
																	),
																),
																me
															);
														},
													}),
													(0, r.createComponent)(u.Switch, {
														get children() {
															return [
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return fe().status === "error";
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			l.ComposerErrorToolCallBlock,
																			{
																				get error() {
																					return (
																						fe().error
																							?.clientVisibleErrorMessage ||
																						"An unknown error occurred"
																					);
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.EDIT_FILE);
																	},
																	children: (me) => {
																		const ve = (0, u.createMemo)(() => {
																			const ge =
																					G.workspaceContextService.resolveRelativePath(
																						me().params
																							?.relativeWorkspacePath ?? "",
																					),
																				be = me().additionalData?.version ?? -1;
																			return K.getComposerCodeBlock(Y(), ge, be)
																				?.content;
																		});
																		return (0, r.createComponent)(u.Show, {
																			get when() {
																				return (
																					(0, w.memo)(
																						() => ve() !== void 0,
																					)() && ve() !== ""
																				);
																			},
																			get fallback() {
																				return (0, r.createComponent)(u.Show, {
																					get when() {
																						return (
																							me().additionalData?.version !==
																							void 0
																						);
																					},
																					children: (ge) =>
																						(0, r.createComponent)(
																							P.ComposerMessageCodePill,
																							{
																								get codeBlock() {
																									return {
																										uri: G.workspaceContextService.resolveRelativePath(
																											me().params
																												?.relativeWorkspacePath ??
																												"",
																										),
																										version:
																											me().additionalData
																												?.version ?? -1,
																									};
																								},
																								get composerDataHandle() {
																									return V.composerDataHandle;
																								},
																							},
																						),
																				});
																			},
																			children: (ge) =>
																				(0, r.createComponent)(u.Show, {
																					get when() {
																						return !Z();
																					},
																					get fallback() {
																						return (0, r.createComponent)(
																							P.ComposerMessageCodePill,
																							{
																								get codeBlock() {
																									return {
																										uri: G.workspaceContextService.resolveRelativePath(
																											me().params
																												?.relativeWorkspacePath ??
																												"",
																										),
																										version:
																											me().additionalData
																												?.version ?? -1,
																									};
																								},
																								get composerDataHandle() {
																									return V.composerDataHandle;
																								},
																								get style() {
																									return {
																										outline: le()
																											? "1px solid var(--vscode-notebook-focusedCellBorder)"
																											: void 0,
																									};
																								},
																							},
																						);
																					},
																					get children() {
																						return [
																							(() => {
																								const be = H();
																								return (
																									be.style.setProperty(
																										"border-radius",
																										"2px",
																									),
																									(0, m.insert)(
																										be,
																										(0, r.createComponent)(
																											I.ComposerMessageCodeblock,
																											{
																												get codeBlock() {
																													return {
																														uri: G.workspaceContextService.resolveRelativePath(
																															me().params
																																?.relativeWorkspacePath ??
																																"",
																														),
																														version:
																															me()
																																.additionalData
																																?.version ?? -1,
																													};
																												},
																												get composerDataHandle() {
																													return V.composerDataHandle;
																												},
																											},
																										),
																									),
																									(0, C.effect)(() =>
																										(le()
																											? "1px solid var(--vscode-notebook-focusedCellBorder)"
																											: void 0) != null
																											? be.style.setProperty(
																													"outline",
																													le()
																														? "1px solid var(--vscode-notebook-focusedCellBorder)"
																														: void 0,
																												)
																											: be.style.removeProperty(
																													"outline",
																												),
																									),
																									be
																								);
																							})(),
																							(0, r.createComponent)(u.Show, {
																								get when() {
																									return me().additionalData
																										?.lintingStatus;
																								},
																								children: (be) =>
																									(0, r.createComponent)(
																										R.ComposerLintingToolCallBlock,
																										{
																											get lintingStatus() {
																												return be();
																											},
																											get linterErrors() {
																												return me().result
																													?.linterErrors;
																											},
																										},
																									),
																							}),
																						];
																					},
																				}),
																		});
																	},
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.READ_FILE);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			b.ComposerReadFileToolCallBlock,
																			{
																				get relativeWorkspacePath() {
																					return (
																						me().params
																							?.relativeWorkspacePath ?? ""
																					);
																				},
																				get startLine() {
																					return me().params
																						?.startLineOneIndexed;
																				},
																				get endLine() {
																					return me().params
																						?.endLineOneIndexedInclusive;
																				},
																				onClick: () => {
																					const ve =
																							G.workspaceContextService.resolveRelativePath(
																								me().params
																									?.relativeWorkspacePath ?? "",
																							),
																						ge =
																							me().params?.startLineOneIndexed,
																						be =
																							me().params
																								?.endLineOneIndexedInclusive;
																					(0, v.$9gc)(G, {
																						filePathOrUri: ve,
																						selection: ge
																							? {
																									startLineNumber: ge,
																									endLineNumber: be ?? ge,
																									startColumn: 1,
																									endColumn:
																										(be ?? ge) - ge > 0
																											? 1e3
																											: 1,
																								}
																							: void 0,
																					});
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2
																				.RUN_TERMINAL_COMMAND_V2,
																		);
																	},
																	children: (me) => {
																		const ve = (0, u.createMemo)(() => {
																				if (fe().userDecision === "rejected")
																					return {
																						status: "cancelled",
																						stdout: "",
																						stderr: "",
																					};
																				switch (me().additionalData?.status) {
																					case "pending":
																					case "loading":
																						return {
																							status:
																								me().additionalData?.status,
																						};
																					default:
																						return {
																							status:
																								me().additionalData?.status,
																							stdout: me().result?.output ?? "",
																							stderr: "",
																						};
																				}
																			}),
																			ge = (0, u.createMemo)(() => {
																				const Ce =
																					me().additionalData?.sessionId;
																				if (
																					!(
																						!Ce ||
																						ye().getLastBubbleIdWithTerminalSessionIdShownReactive(
																							Ce,
																						) === V.bubbleId
																					)
																				)
																					return "output";
																			}),
																			be = (0, u.createMemo)(() => {
																				const Ce =
																					me().additionalData?.sessionId;
																				if (Ce)
																					return G.terminalExecutionService.getTerminalInstance(
																						Ce,
																					);
																			});
																		return (0, r.createComponent)(
																			f.ComposerTerminalToolCallBlock,
																			(0, i.mergeProps)(
																				{
																					get command() {
																						return me().params?.command;
																					},
																					get root() {
																						return G.labelService.getWorkspaceLabel(
																							G.workspaceContextService.getWorkspace(),
																							{ verbose: s.Verbosity.LONG },
																						);
																					},
																					get isBlocking() {
																						return !me().params?.isBackground;
																					},
																					onExecute: () => {
																						ye().acceptToolCall(
																							fe().toolCallId,
																						);
																					},
																					onCancel: () => {
																						ye().rejectToolCall(
																							fe().toolCallId,
																						),
																							G.composerService.cancelCurrentStep(
																								W().composerId,
																							),
																							G.composerService.focus(
																								W().composerId,
																							);
																						const Ce =
																							me().additionalData?.sessionId;
																						if (Ce)
																							try {
																								G.terminalExecutionService.cancelStream(
																									Ce,
																								);
																							} catch (Le) {
																								console.error(Le);
																							}
																					},
																					onReset: () => {
																						const Ce =
																							me().additionalData?.sessionId;
																						if (Ce)
																							try {
																								G.terminalExecutionService.cancelStream(
																									Ce,
																								);
																							} catch (Le) {
																								console.error(Le);
																							}
																					},
																					get componentToShowInsteadOfTerminalInstance() {
																						return ge();
																					},
																					showOpenInExternalTerminalCallback: (
																						Ce,
																					) => {
																						G.terminalExecutionService.leakTerminalInstance(
																							Ce,
																						),
																							ye().popOutTerminalIntoBackground();
																					},
																					get terminalInstance() {
																						return be();
																					},
																					get startAtBufferLine() {
																						return me().additionalData
																							?.startAtBufferLine;
																					},
																				},
																				ve,
																				{
																					get composerId() {
																						return W().composerId;
																					},
																					get bubbleData() {
																						return fe();
																					},
																					onCommandChange: (Ce) => {
																						ye().updateToolCallParams(
																							fe().toolCallId,
																							{ ...me().params, command: Ce },
																						);
																					},
																				},
																			),
																		);
																	},
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.RIPGREP_SEARCH);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			o.ComposerGrepSearchToolCallBlock,
																			{
																				get query() {
																					return (
																						me().params?.patternInfo?.pattern ||
																						""
																					);
																				},
																				searchDirectory: "",
																				get matchPerLine() {
																					return (
																						me().params?.patternInfo
																							?.isWordMatch ?? !1
																					);
																				},
																				get caseInsensitive() {
																					return (
																						me().params?.patternInfo
																							?.isCaseSensitive ?? !0
																					);
																				},
																				get includes() {
																					return me().params?.options
																						?.includePattern?.pattern;
																				},
																				onResultClick: (ve) => {
																					te(ve);
																				},
																				get results() {
																					return (
																						me().result?.internal?.results ?? []
																					).flatMap((ve) =>
																						ve.results.flatMap((ge) => {
																							if (
																								ge.result &&
																								ge.result.case === "match"
																							) {
																								const be = ge.result.value;
																								return be === void 0
																									? []
																									: {
																											uri: $.URI.parse(
																												ve.resource,
																											),
																											lineNumber:
																												be.rangeLocations.at(0)
																													?.source
																													?.startLineNumber,
																											lineContent:
																												be.previewText,
																										};
																							}
																							return [];
																						}),
																					);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.LIST_DIR);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			y.ComposerListDirToolCallBlock,
																			{
																				get dirName() {
																					return (
																						me().params?.directoryPath ?? ""
																					);
																				},
																				get results() {
																					return (
																						me().result?.files?.map((ve) => ({
																							uri: G.workspaceContextService.resolveRelativePath(
																								`${me().params?.directoryPath}/${ve.name}`,
																							),
																							name: ve.name,
																							isDirectory: ve.isDirectory,
																							size:
																								ve.size !== void 0
																									? Number(ve.size)
																									: 0,
																							lastModified:
																								ve.lastModified !== void 0
																									? Number(
																											ve.lastModified.seconds,
																										) * 1e3
																									: 0,
																						})) ?? []
																					);
																				},
																				onResultClick: (ve) => te(ve),
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.FILE_SEARCH);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			T.ComposerFileSearchToolCallBlock,
																			{
																				get query() {
																					return me().params?.query ?? "";
																				},
																				get results() {
																					return (
																						me().result?.files?.map((ve) => ({
																							uri: G.workspaceContextService.resolveRelativePath(
																								ve.uri,
																							),
																						})) ?? []
																					);
																				},
																				onResultClick: (ve) => te(ve),
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2.READ_SEMSEARCH_FILES,
																		);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			n.ComposerSemanticSearchToolCallBlock,
																			{
																				get query() {
																					return me().params?.query ?? "";
																				},
																				get results() {
																					return (
																						me()
																							.result?.codeResults.filter(
																								(ve) => !!ve.codeBlock,
																							)
																							.map((ve) => ({
																								uri: G.workspaceContextService.resolveRelativePath(
																									ve.codeBlock
																										?.relativeWorkspacePath ??
																										"",
																								),
																								score: ve.score,
																								range: ve.codeBlock?.range,
																							})) ?? []
																					);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																				onResultClick: (ve) =>
																					te(
																						ve.uri,
																						ve.range && {
																							startLineNumber:
																								ve.range.startPosition?.line ??
																								0,
																							endLineNumber:
																								ve.range.endPosition?.line ?? 0,
																						},
																					),
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
																		);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			n.ComposerSemanticSearchToolCallBlock,
																			{
																				get query() {
																					return me().params?.query ?? "";
																				},
																				get includePattern() {
																					return me().params?.includePattern;
																				},
																				get excludePattern() {
																					return me().params?.excludePattern;
																				},
																				get results() {
																					return (
																						me()
																							.result?.codeResults.filter(
																								(ve) => !!ve.codeBlock,
																							)
																							.map((ve) => ({
																								uri: G.workspaceContextService.resolveRelativePath(
																									ve.codeBlock
																										?.relativeWorkspacePath ??
																										"",
																								),
																								score: ve.score,
																								range: ve.codeBlock?.range,
																							})) ?? []
																					);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				onResultClick: (ve) =>
																					te(
																						ve.uri,
																						ve.range && {
																							startLineNumber:
																								ve.range.startPosition?.line ??
																								0,
																							endLineNumber:
																								ve.range.endPosition?.line ?? 0,
																						},
																					),
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.CREATE_FILE);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			k.ComposerCreateFileToolCallBlock,
																			{
																				get relativeWorkspacePath() {
																					return me().params
																						?.relativeWorkspacePath;
																				},
																				onClick: () => {
																					const ve =
																						G.workspaceContextService.resolveRelativePath(
																							me().params
																								?.relativeWorkspacePath ?? "",
																						);
																					te(ve);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.DELETE_FILE);
																	},
																	children: (me) => {
																		const ve = (0, u.createMemo)(
																			() => fe().userDecision,
																		);
																		return (0, r.createComponent)(
																			L.ComposerDeleteFileToolCallBlock,
																			{
																				get relativeWorkspacePath() {
																					return me().params
																						?.relativeWorkspacePath;
																				},
																				onClick: () => {
																					const ge =
																						G.workspaceContextService.resolveRelativePath(
																							me().params
																								?.relativeWorkspacePath ?? "",
																						);
																					te(ge);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				onAccept: () =>
																					ye().acceptToolCall(fe().toolCallId),
																				onReject: () =>
																					ye().rejectToolCall(fe().toolCallId),
																				get decision() {
																					return fe().status !== "loading"
																						? () => "rejected"
																						: ve;
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		);
																	},
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.PARALLEL_APPLY);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			N.ComposerParallelApplyToolCallBlock,
																			{
																				get planText() {
																					return me().params?.editPlan;
																				},
																				get filesToEdit() {
																					return (
																						me().params?.fileRegions ?? []
																					).map((ve) => ({
																						uri: G.workspaceContextService.resolveRelativePath(
																							ve.relativeWorkspacePath,
																						),
																						version: 0,
																						range: ve.range && {
																							startLineNumber:
																								ve.range.startLineNumber ?? 0,
																							endLineNumber:
																								ve.range
																									.endLineNumberInclusive ?? 0,
																						},
																					}));
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																				get composerDataHandle() {
																					return V.composerDataHandle;
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2.GET_RELATED_FILES,
																		);
																	},
																	children: (me) =>
																		(() => {
																			const ve = H();
																			return (
																				ve.style.setProperty(
																					"border-radius",
																					"2px",
																				),
																				(0, m.insert)(
																					ve,
																					(0, r.createComponent)(
																						A.ComposerGetRelatedFilesToolCallBlock,
																						{
																							get targetFiles() {
																								return (
																									me().params?.targetFiles ?? []
																								);
																							},
																							get results() {
																								return (
																									me().result?.files ?? []
																								).map((ge) => ({
																									uri: G.workspaceContextService.resolveRelativePath(
																										ge.uri,
																									),
																									score: ge.score,
																								}));
																							},
																							onResultClick: (ge) => te(ge),
																							get isLoading() {
																								return (
																									fe().status === "loading"
																								);
																							},
																							get composerId() {
																								return W().composerId;
																							},
																							get bubbleData() {
																								return fe();
																							},
																						},
																					),
																				),
																				(0, C.effect)(() =>
																					(le()
																						? "1px solid var(--vscode-notebook-focusedCellBorder)"
																						: void 0) != null
																						? ve.style.setProperty(
																								"outline",
																								le()
																									? "1px solid var(--vscode-notebook-focusedCellBorder)"
																									: void 0,
																							)
																						: ve.style.removeProperty(
																								"outline",
																							),
																				),
																				ve
																			);
																		})(),
																}),
															];
														},
													}),
												],
											}),
										),
										ue
									);
								})(),
						});
					};
				e.ComposerToolFormerMessage = q;
			},
		),
		define(
			de[4344],
			he([
				1, 0, 126, 167, 124, 6, 3, 61, 45, 25, 3033, 4343, 219, 262, 395, 351,
				225, 209, 426, 617,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ToolFormer = void 0);
				const s = 5e3;
				let l = class extends c.ComposerCapability {
					getToolCategory($) {
						for (const [v, S] of this.toolCategories) if (S.has($)) return v;
					}
					areToolsSimilar($, v) {
						if ($ === v) return !0;
						const S = this.getToolCategory($),
							I = this.getToolCategory(v);
						return S !== void 0 && S === I;
					}
					constructor($, v, S, I, T, P, k, L, D) {
						super($, v),
							(this.composerDataService = S),
							(this.composerService = I),
							(this.terminalExecutionService = T),
							(this.reactiveStorageService = P),
							(this.composerUtilsService = k),
							(this.workspaceContextService = L),
							(this.languageService = D),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER),
							(this.name = "Tool Former"),
							(this.schema = g.toolFormerSchema),
							(this._disposableStore = new C.$Zc()),
							(this.toolCategories = new Map([
								[
									"file_modification",
									new Set([
										w.ClientSideToolV2.EDIT_FILE,
										w.ClientSideToolV2.PARALLEL_APPLY,
									]),
								],
							])),
							(this._onTerminalPoppedOutIntoBackground = new E.$re()),
							(this.onTerminalPoppedOutIntoBackground =
								this._onTerminalPoppedOutIntoBackground.event);
						let M;
						try {
							M = this.parseBubbleDataMap(this.data.bubbleDataMap || "{}");
						} catch (N) {
							console.error("[composer] unable to parse bubbleDataMap", N);
						}
						([this.toolFormerData, this.setToolFormerData] = (0, c.createStore)(
							M || {},
						)),
							([this.bubbleCounter, this.setBubbleCounter] = (0,
							c.createSignal)(0)),
							([this.pendingDecisions, this.setPendingDecisions] = (0,
							c.createSignal)({
								userInteractionBubbleIds: [],
								pendingDecisions: {},
							})),
							([
								this.shouldShowCancelAndResume,
								this.setShouldShowCancelAndResume,
							] = (0, c.createSignal)(!1));
					}
					silentOnBeforeSubmitChat($) {
						return !0;
					}
					async onBeforeSubmitChat($) {
						const v = this.composerDataService.getComposerData(this.composerId);
						if (!v) return;
						this.clearShowCancelAndResume();
						const S = this.pendingDecisions();
						if (
							(Object.entries(S.pendingDecisions).forEach(([L, D]) => {
								const M = D;
								M.blocking && this.rejectToolCall(M.toolCallId);
							}),
							this.composerDataService.getLastBubble(this.composerId)?.type ===
								t.ConversationMessage_MessageType.AI)
						)
							return;
						const I = v.conversation.findIndex(
							(L) => L.bubbleId === $.humanBubbleId,
						);
						if (I === -1) return;
						v.conversation
							.slice(I + 1)
							.map((L) => L.bubbleId)
							.forEach((L) => {
								L in this.toolFormerData && this.deleteBubbleData(L);
							});
						const P = {},
							k = [];
						Object.entries(S.pendingDecisions).forEach(([L, D]) => {
							const M = D;
							M.blocking || ((P[L] = M), k.push(L));
						}),
							this.setPendingDecisions({
								userInteractionBubbleIds: k,
								pendingDecisions: P,
							});
					}
					parseBubbleDataMap($) {
						let v;
						try {
							if (
								((v = (0, u.parseToolformerBubbleDataMap)($)),
								typeof v != "object")
							)
								throw new Error("[composer] unable to parse bubbleDataMap");
							for (const [S, I] of Object.entries(v))
								if (
									(I.status === "loading" && (v[S].status = "cancelled"),
									I.tool === w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2)
								) {
									const T = I.additionalData?.status;
									(T === "pending" || T === "loading" || T === "running") &&
										v[S].additionalData &&
										(v[S].additionalData.status = "cancelled");
								}
						} catch (S) {
							console.error("[composer] unable to parse bubbleDataMap", S);
						}
						return v || {};
					}
					async getSessionIdAndTerminalInstance() {
						const $ = await this.composerDataService.getComposerHandleById(
							this.composerId,
						);
						let v = 1e7;
						$ && (v = $.data.conversation.length);
						try {
							if (this._sessionId && v > (this._sessionIdNumBubbles ?? 0)) {
								const T = this.terminalExecutionService.getTerminalInstance(
									this._sessionId,
								);
								if (T)
									return { sessionId: this._sessionId, terminalInstance: T };
							}
							this.clearSessionId();
							const { sessionId: S, terminalInstance: I } =
								await this.terminalExecutionService.startSession(void 0);
							return (
								(this._sessionId = S), { sessionId: S, terminalInstance: I }
							);
						} finally {
							(this._sessionIdNumBubbles = v), $?.dispose();
						}
					}
					popOutTerminalIntoBackground() {
						const $ = this._sessionId;
						$ &&
							(this._onTerminalPoppedOutIntoBackground.fire($),
							this.clearSessionId());
					}
					clearSessionId() {
						if (this._sessionId) {
							try {
								this.terminalExecutionService.endSession(this._sessionId);
							} catch {}
							this._sessionId = void 0;
						}
					}
					dispose() {
						this._disposableStore.dispose(),
							this.shouldShowCancelAndResumeTimeout &&
								(clearTimeout(this.shouldShowCancelAndResumeTimeout),
								(this.shouldShowCancelAndResumeTimeout = void 0)),
							this.clearSessionId(),
							super.dispose();
					}
					getBubbleData($) {
						return this.toolFormerData[$];
					}
					getBubbleDataAsPlainText($) {
						const v = this.getBubbleData($);
						if (!v) return "";
						switch (v.tool) {
							case w.ClientSideToolV2.EDIT_FILE: {
								const S = v.additionalData?.version,
									I = v.params?.relativeWorkspacePath;
								if (S === void 0 || I === void 0) return "";
								const T = this.workspaceContextService.resolveRelativePath(I),
									P = this.composerDataService.getComposerCodeBlock(
										this.composerId,
										T,
										S,
									);
								return P
									? `\`\`\`${(this.languageService.getLanguageName(P.languageId ?? "") ?? "plaintext").toLowerCase()}:${I}
${P.content}
\`\`\``
									: "";
							}
							case w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
								return `\`\`\`bash
${v.params?.command || ""}
\`\`\``;
							case w.ClientSideToolV2.READ_FILE:
								return `Read file: ${v.params?.relativeWorkspacePath || ""}`;
							case w.ClientSideToolV2.READ_FILE_FOR_IMPORTS:
								return "Read files...";
							case w.ClientSideToolV2.READ_SEMSEARCH_FILES:
								return "Search files...";
						}
						return "Ran tool";
					}
					getLastBubbleIdWithTerminalSessionIdShownReactive($) {
						const v = this.bubbleCounter();
						for (const [S, I] of Object.entries(this.toolFormerData).reverse())
							if (
								I.tool === w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2 &&
								I.additionalData?.sessionId === $ &&
								["running", "error", "cancelled", "success"].includes(
									I.additionalData?.status,
								)
							)
								return S;
					}
					deleteBubbleData($) {
						this.setToolFormerData($, void 0), delete this.toolFormerData[$];
					}
					setBubbleData($, v) {
						try {
							this.setToolFormerData($, (S) => ({
								...S,
								...v,
								additionalData: { ...S?.additionalData, ...v.additionalData },
							}));
						} catch {}
					}
					onWillSaveState() {
						this.data.bubbleDataMap = (0, u.stringifyToolformerBubbleDataMap)(
							this.toolFormerData,
						);
					}
					renderAIBubble() {
						return a.ComposerToolFormerMessage;
					}
					async processStream($) {
						const v = this.composerDataService.getComposerData(this.composerId);
						if (!v) throw new Error("[composer] Composer data not found");
						return (
							(this._params = $),
							async function* () {
								for await (const I of $.stream)
									if (!(I === null || typeof I != "object")) {
										if (I.toolCall) {
											const T = I.toolCall.toolCallId,
												P = this.getOrCreateBubbleId({
													toolCallId: T,
													toolCallType: I.toolCall.tool,
													params: void 0,
													rawArgs: I.toolCall.rawArgs,
													name: I.toolCall.name,
												});
											I.toolCall.error !== void 0 &&
												I.toolCall.error !== null &&
												this.setBubbleData(P, {
													status: "error",
													error: I.toolCall.error,
												});
										}
										if (I.shouldBreakAiMessage) {
											const T = [...(v?.conversation ?? [])]
												.reverse()
												.find(
													(P) =>
														P.type === t.ConversationMessage_MessageType.AI,
												)?.bubbleId;
											T &&
												this.composerDataService.updateComposerData(
													this.composerId,
													{
														generatingBubbleIds:
															v?.generatingBubbleIds?.filter((P) => P !== T) ??
															[],
													},
												);
										}
										I.finalToolResult?.result !== void 0 &&
											this.handleToolResult(
												I.finalToolResult.result,
												I.finalToolResult.toolCallId,
											),
											I.partialToolCall &&
												this.getOrCreateBubbleId({
													toolCallId: I.partialToolCall.toolCallId,
													toolCallType: I.partialToolCall.tool,
													name: I.partialToolCall.name,
													params: void 0,
													rawArgs: void 0,
												}),
											yield I;
									}
							}.bind(this)()
						);
					}
					getBubbleDataByToolCallId($) {
						for (const [v, S] of Object.entries(this.toolFormerData))
							if (S.toolCallId === $) return S;
					}
					getBubbleIdByToolCallId($) {
						for (const [v, S] of Object.entries(this.toolFormerData))
							if (S.toolCallId === $) return v;
					}
					createBubbleFromToolCall({
						toolCallId: $,
						toolCallType: v,
						params: S,
						rawArgs: I,
						name: T,
					}) {
						const P = this.composerDataService.getComposerData(this.composerId);
						if (!P || !this._params)
							throw new Error("[composer] Composer data not found");
						let k = {
							...(0, p.createDefaultConversationMessage)(),
							codeBlocks: [],
							type: t.ConversationMessage_MessageType.AI,
							text: "",
							isThought: !1,
							isCapabilityIteration: !1,
							capabilityType:
								i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						};
						const L = S?.value ? this.createInitialDataForTool(v, S) : void 0;
						this.setBubbleData(k.bubbleId, {
							tool: v,
							toolCallId: $,
							status: "loading",
							rawArgs: I,
							name: T,
							...L,
						}),
							this.setBubbleCounter((A) => A + 1);
						const D = [...P.conversation];
						let M = {
							...(0, p.createDefaultConversationMessage)(),
							codeBlocks: [],
							type: t.ConversationMessage_MessageType.AI,
							text: "",
							isThought: this._params.submitChatProps.extra?.isThought,
							isCapabilityIteration:
								this._params.submitChatProps.extra?.isCapabilityIteration,
						};
						const N = P.conversation[P.conversation.length - 1];
						return (
							N && N.text === "" && D.pop(),
							D.push(k, M),
							this.composerDataService.updateComposerDataSetStore(
								this.composerId,
								(A) =>
									A("generatingBubbleIds", (R) => [
										...(R || []).filter((O) => O !== N?.bubbleId),
										M.bubbleId,
									]),
							),
							this.composerDataService.updateComposerData(this.composerId, {
								conversation: D,
							}),
							p.TOOLS_WITH_CHECKPOINTS.includes(v) &&
								this.composerUtilsService
									.createCurrentCheckpoint(this.composerId)
									.then((A) => {
										A &&
											this.composerDataService.updateComposerBubble(
												this.composerId,
												k.bubbleId,
												{ checkpoint: A },
											);
									}),
							k.bubbleId
						);
					}
					getOrCreateBubbleId({
						toolCallId: $,
						toolCallType: v,
						params: S,
						rawArgs: I,
						name: T,
					}) {
						const P = this.getBubbleIdByToolCallId($);
						return P
							? (this.setBubbleData(P, {
									...(I ? { rawArgs: I } : {}),
									...(T ? { name: T } : {}),
									...(S?.value ? this.createInitialDataForTool(v, S) : {}),
								}),
								P)
							: this.createBubbleFromToolCall({
									toolCallId: $,
									toolCallType: v,
									params: S,
									rawArgs: I,
									name: T,
								});
					}
					startShowCancelAndResumeTimeout($ = !1) {
						$ ||
							(this.shouldShowCancelAndResumeTimeout &&
								clearTimeout(this.shouldShowCancelAndResumeTimeout),
							(this.shouldShowCancelAndResumeTimeout = setTimeout(() => {
								this.setShouldShowCancelAndResume(!0);
							}, s)));
					}
					shouldUseYoloMode() {
						return (
							this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.useYoloMode ?? !1
						);
					}
					handleInitialToolCall({
						toolCallId: $,
						toolCallType: v,
						params: S,
						rawArgs: I,
						name: T,
						blocking: P = !0,
						isStreaming: k = !1,
					}) {
						if (
							!this.composerDataService.getComposerData(this.composerId) ||
							!this._params
						)
							throw new Error("[composer] Composer data not found");
						return (
							this.getOrCreateBubbleId({
								toolCallId: $,
								toolCallType: v,
								params: S,
								rawArgs: I,
								name: T,
							}),
							Promise.resolve(!0)
						);
					}
					addPendingDecision($, v, S, I, T = !0) {
						return (
							this.setPendingDecisions((P) => ({
								userInteractionBubbleIds: [...P.userInteractionBubbleIds, $],
								pendingDecisions: {
									...P.pendingDecisions,
									[$]: {
										decide: I,
										toolCallId: S,
										clientSideTool: v,
										accept: () => this.acceptToolCall(S),
										reject: () => this.rejectToolCall(S),
										blocking: T,
									},
								},
							})),
							() => {
								this.setPendingDecisions((P) => {
									const { userInteractionBubbleIds: k, pendingDecisions: L } =
											P,
										{ [$]: D, ...M } = L;
									return {
										userInteractionBubbleIds: k.filter((N) => N !== $),
										pendingDecisions: M,
									};
								});
							}
						);
					}
					acceptToolCall($) {
						console.log("[lukas] toolformer: accepting decision", $);
						const v = this.getBubbleIdByToolCallId($);
						if (v) {
							this.setBubbleData(v, { userDecision: "accepted" });
							const S = this.pendingDecisions().pendingDecisions[v];
							S &&
								(S.decide(!0),
								console.log("[lukas] toolformer: accepted decision", $),
								this.setPendingDecisions((I) => {
									const { userInteractionBubbleIds: T, pendingDecisions: P } =
											I,
										{ [v]: k, ...L } = P;
									return {
										userInteractionBubbleIds: T.filter((D) => D !== v),
										pendingDecisions: L,
									};
								}));
						}
					}
					rejectToolCall($) {
						console.log("[lukas] toolformer: rejecting decision", $);
						const v = this.getBubbleIdByToolCallId($);
						if (v) {
							this.setBubbleData(v, {
								userDecision: "rejected",
								status: "cancelled",
							});
							const S = this.pendingDecisions().pendingDecisions[v];
							S &&
								(S.decide(!1),
								console.log("[lukas] toolformer: rejected decision", $),
								this.setPendingDecisions((I) => {
									const { userInteractionBubbleIds: T, pendingDecisions: P } =
											I,
										{ [v]: k, ...L } = P;
									return {
										userInteractionBubbleIds: T.filter((D) => D !== v),
										pendingDecisions: L,
									};
								}));
						}
					}
					getPendingUserDecisionGroup() {
						return () => {
							const $ = this.pendingDecisions(),
								v = $.userInteractionBubbleIds;
							if (v.length === 0) return [];
							const S = [];
							for (const I of v) {
								const T = $.pendingDecisions[I];
								if (T)
									if (
										S.length === 0 ||
										this.areToolsSimilar(
											S[S.length - 1].clientSideTool,
											T.clientSideTool,
										)
									)
										S.push(T);
									else break;
							}
							return S;
						};
					}
					getIsBlockingUserDecision() {
						return () => {
							const $ = this.pendingDecisions(),
								v = $.userInteractionBubbleIds;
							return v.length === 0
								? !1
								: v.some((S) => $.pendingDecisions[S]?.blocking);
						};
					}
					handleToolResult($, v, S = !0) {
						const I = this.getBubbleIdByToolCallId(v);
						if (!I) throw new Error("[composer] ToolFormer: bubble not found");
						const T = this.getBubbleData(I);
						if (!T)
							throw new Error("[composer] ToolFormer: bubble data not found");
						if (
							(S && this.clearShowCancelAndResume(),
							$.tool === T.tool && $.result.value !== void 0)
						)
							this.setBubbleData(I, {
								result: $.result.value,
								status: S ? "completed" : T.status,
							});
						else
							throw (
								(this.setBubbleData(I, { status: "error" }),
								new Error("[composer] ToolFormer: tool types do not match"))
							);
					}
					handleToolError($) {
						this.setToolFormerData((v) => {
							const S = {};
							for (const [I, T] of Object.entries(v))
								T.status !== "completed" &&
									(S[I] = {
										...T,
										additionalData: { ...T?.additionalData, status: "error" },
									});
							return S;
						});
					}
					createInitialDataForTool($, v) {
						switch ($) {
							case w.ClientSideToolV2.READ_SEMSEARCH_FILES: {
								if (v.case !== "readSemsearchFilesParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for READ_SEMSEARCH_FILES",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.READ_FILE_FOR_IMPORTS: {
								if (v.case !== "readFileForImportsParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for READ_FILE_FOR_IMPORTS",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.RIPGREP_SEARCH: {
								if (v.case !== "ripgrepSearchParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for RIPGREP_SEARCH",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.FILE_SEARCH: {
								if (v.case !== "fileSearchParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for FILE_SEARCH",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2: {
								if (v.case !== "runTerminalCommandV2Params")
									throw new Error(
										"[composer] ToolFormer: Invalid params for RUN_TERMINAL_COMMAND",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: { status: "pending" },
								};
							}
							case w.ClientSideToolV2.RUN_TERMINAL_COMMAND: {
								if (v.case !== "runTerminalCommandParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for RUN_TERMINAL_COMMAND",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.READ_FILE: {
								if (v.case !== "readFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for READ_FILE",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.LIST_DIR: {
								if (v.case !== "listDirParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for LIST_DIR",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.EDIT_FILE: {
								if (v.case !== "editFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for EDIT_FILE",
									);
								return { params: v.value, result: void 0, additionalData: {} };
							}
							case w.ClientSideToolV2.SEMANTIC_SEARCH_FULL: {
								if (v.case !== "semanticSearchFullParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for SEMANTIC_SEARCH_FULL",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.CREATE_FILE: {
								if (v.case !== "createFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for CREATE_FILE",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.DELETE_FILE: {
								if (v.case !== "deleteFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for DELETE_FILE",
									);
								return {
									params: v.value,
									result: new w.$Iy(),
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.REAPPLY: {
								if (v.case !== "reapplyParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for REAPPLY",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.PARALLEL_APPLY: {
								if (v.case !== "parallelApplyParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for PARALLEL_APPLY",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.UNSPECIFIED:
								return {
									params: void 0,
									result: void 0,
									additionalData: void 0,
								};
							case w.ClientSideToolV2.GET_RELATED_FILES: {
								if (v.case !== "getRelatedFilesParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for GET_RELATED_FILES",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							default:
								return $;
						}
					}
					updateToolCallParams($, v) {
						const S = this.getBubbleIdByToolCallId($);
						if (!S) {
							console.error(
								`[ToolFormer] No bubble found for tool call ID: ${$}`,
							);
							return;
						}
						this.setToolFormerData((I) => {
							const T = I[S];
							return T
								? { ...I, [S]: { ...T, params: { ...T.params, ...v } } }
								: (console.error(
										`[ToolFormer] No bubble data found for bubble ID: ${S}`,
									),
									I);
						});
					}
					cancel() {
						super.cancel(), this.clearShowCancelAndResume();
					}
					clearShowCancelAndResume() {
						this.shouldShowCancelAndResumeTimeout &&
							(clearTimeout(this.shouldShowCancelAndResumeTimeout),
							(this.shouldShowCancelAndResumeTimeout = void 0)),
							this.setShouldShowCancelAndResume(!1);
					}
					setLoadingToolsToCancelled() {
						for (const [$, v] of Object.entries(this.toolFormerData))
							v.status === "loading" &&
								this.setBubbleData($, { status: "cancelled" });
					}
					addDisposable($) {
						this._disposableStore.add($);
					}
				};
				(e.ToolFormer = l),
					(e.ToolFormer = l =
						Ne(
							[
								(0, n.autoCancellableAndStatusUpdater)(),
								j(2, o.IComposerDataService),
								j(3, h.IComposerService),
								j(4, b.$Ycc),
								j(5, m.$0zb),
								j(6, f.IComposerUtilsService),
								j(7, r.$Vi),
								j(8, d.$nM),
							],
							l,
						)),
					(0, c.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						l,
					);
			},
		),
		define(
			de[4345],
			he([
				1, 0, 3955, 3924, 3925, 3953, 4283, 3923, 3952, 3951, 3922, 3954, 3926,
				4290, 4344,
			]),
			function (ce, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
			},
		),
		define(
			de[4346],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 7, 33, 54, 9, 38, 204, 41, 36, 135, 865,
				476, 312, 17, 56, 1317, 156, 428, 1746, 2481,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jZc = q),
					(u = mt(u));
				const P = (0, t.template)(
						'<div><span></span><span class="label-description monaco-highlighted-label">',
					),
					k = (0, t.template)('<div class="outline-breadcrumb">'),
					L = (0, t.template)("<span><i>"),
					D = (0, t.template)("<span>/"),
					M = (0, t.template)("<div>"),
					N = (0, t.template)("<div>This file type cannot be previewed."),
					A = (0, t.template)("<div><div>"),
					R = (0, t.template)("<div><div><span>Output:"),
					O = (0, t.template)("<div><span>Input:"),
					B = (0, t.template)(
						"<div><div><span></span><div><span></span></div></div><div><div><span><span>ttft:</span> <!>ms</span><span><span>server ttft:</span> <!>ms</span><span><span>total:</span> <!>ms</span></div><div><span>requestId:</span> ",
					),
					U = 20,
					z = 16;
				function F(V) {
					const G = (0, h.$tc)(V).toLowerCase();
					return (
						{
							".ts": "typescript",
							".tsx": "typescriptreact",
							".js": "javascript",
							".jsx": "javascriptreact",
							".py": "python",
							".cpp": "cpp",
							".c": "c",
							".h": "cpp",
							".hpp": "cpp",
							".cs": "csharp",
							".java": "java",
							".go": "go",
							".rs": "rust",
							".rb": "ruby",
							".php": "php",
							".swift": "swift",
							".kt": "kotlin",
							".scala": "scala",
							".dart": "dart",
							".r": "r",
							".sh": "shell",
							".bash": "shell",
							".zsh": "shell",
							".fish": "shell",
							".ps1": "powershell",
							".psm1": "powershell",
							".sql": "sql",
							".vue": "vue",
							".html": "html",
							".css": "css",
							".scss": "scss",
							".less": "less",
							".json": "json",
							".xml": "xml",
							".yaml": "yaml",
							".yml": "yaml",
							".md": "markdown",
							".lua": "lua",
							".m": "objective-c",
							".mm": "objective-c",
							".f90": "fortran",
							".f95": "fortran",
							".f03": "fortran",
							".f08": "fortran",
							".jl": "julia",
							".ex": "elixir",
							".exs": "elixir",
							".elm": "elm",
							".fs": "fsharp",
							".fsx": "fsharp",
							".pl": "perl",
							".pm": "perl",
							".hs": "haskell",
							".lhs": "haskell",
							".clj": "clojure",
							".cljs": "clojure",
							".erl": "erlang",
							".hrl": "erlang",
						}[G] || "plaintext"
					);
				}
				const x = (V) => {
						const G = (0, o.$odc)(),
							K = (W) => {
								W.preventDefault(), W.stopPropagation();
								const X = c.URI.file(V.fsPath);
								G.openerService.open(X);
							},
							J = (0, I.$b$b)();
						return (() => {
							const W = P(),
								X = W.firstChild,
								Y = X.nextSibling;
							return (
								W.addEventListener("mousedown", K),
								W.style.setProperty("height", "16px"),
								W.style.setProperty("display", "flex"),
								W.style.setProperty("align-items", "center"),
								W.style.setProperty(
									"border-bottom",
									"1px solid var(--vscode-quickInput-border)",
								),
								W.style.setProperty("margin-bottom", "2px"),
								W.style.setProperty("cursor", "pointer"),
								W.style.setProperty("padding", "6px 11px"),
								W.style.setProperty("padding-top", "6px"),
								W.style.setProperty("padding-bottom", "2px"),
								(0, d.insert)(
									W,
									(0, m.createComponent)(r.Show, {
										when: J,
										get children() {
											return (0, m.createComponent)(S.$k$b, {
												get fileName() {
													return V.fsPath;
												},
												get workspaceContextService() {
													return G.workspaceContextService;
												},
												get modelService() {
													return G.modelService;
												},
												get languageService() {
													return G.languageService;
												},
											});
										},
									}),
									X,
								),
								X.style.setProperty("margin", "0"),
								X.style.setProperty("font-size", "12px"),
								X.style.setProperty("overflow", "hidden"),
								X.style.setProperty("text-overflow", "ellipsis"),
								X.style.setProperty("white-space", "nowrap"),
								(0, d.insert)(X, () => V.label),
								Y.style.setProperty("margin-top", "0"),
								Y.style.setProperty("margin-bottom", "0"),
								Y.style.setProperty("margin-left", "4px"),
								Y.style.setProperty("font-size", "12px"),
								Y.style.setProperty("opacity", "0.7"),
								Y.style.setProperty("overflow", "hidden"),
								Y.style.setProperty("text-overflow", "ellipsis"),
								Y.style.setProperty("white-space", "nowrap"),
								(0, d.insert)(Y, () => V.description),
								(0, C.effect)(() =>
									(0, E.setAttribute)(W, "title", `Open ${V.fsPath}`),
								),
								W
							);
						})();
					},
					H = (V) => {
						const G = (0, o.$odc)(),
							K = (Y) => {
								const ie = [];
								let ne = Y;
								for (; ne && ne.symbol; )
									ie.unshift(ne), (ne = J(V.outlineModel, ne.id));
								return ie;
							},
							J = (Y, ie) => {
								if (!(!Y || !("children" in Y)))
									for (const ne of Y.children) {
										if (ne.id === ie) return Y;
										const ee = J(ne, ie);
										if (ee) return ee;
									}
							},
							W = (0, r.createMemo)(() => K(V.relevantLeaf)),
							X = (Y, ie) => {
								if ((Y.preventDefault(), Y.stopPropagation(), V.outlineModel)) {
									const ne = V.outlineModel.uri;
									G.openerService.open(
										(0, p.$8rb)(ne, {
											startLineNumber: ie.symbol.range.startLineNumber,
											startColumn: ie.symbol.range.startColumn,
										}),
									);
								}
							};
						return (0, m.createComponent)(r.Show, {
							get when() {
								return V.outlineModel && V.relevantLeaf;
							},
							get children() {
								const Y = k();
								return (
									Y.style.setProperty("display", "flex"),
									Y.style.setProperty("align-items", "center"),
									Y.style.setProperty("font-size", "12px"),
									Y.style.setProperty("margin-bottom", "4px"),
									Y.style.setProperty("overflow", "hidden"),
									Y.style.setProperty("white-space", "nowrap"),
									Y.style.setProperty(
										"font-family",
										"var(--vscode-font-family)",
									),
									Y.style.setProperty("width", "fit-content"),
									Y.style.setProperty("padding-left", "1px"),
									Y.style.setProperty("padding", "0px 21px"),
									(0, d.insert)(
										Y,
										(0, m.createComponent)(r.For, {
											get each() {
												return W();
											},
											children: (ie, ne) => [
												(() => {
													const ee = L(),
														_ = ee.firstChild;
													return (
														ee.addEventListener("mousedown", (te) => X(te, ie)),
														ee.style.setProperty("display", "inline-flex"),
														ee.style.setProperty("align-items", "center"),
														ee.style.setProperty("justify-content", "flex-end"),
														ee.style.setProperty("flex-shrink", "0"),
														ee.style.setProperty("overflow", "hidden"),
														ee.style.setProperty("text-overflow", "ellipsis"),
														ee.style.setProperty("cursor", "pointer"),
														ee.style.setProperty("padding", "0px 2px"),
														_.style.setProperty("margin-right", "4px"),
														_.style.setProperty("font-size", "14px"),
														(0, d.insert)(ee, () => ie.symbol.name, null),
														(0, C.effect)(
															(te) => {
																const Q = `outline-item ${ne() === W().length - 1 ? "leaf" : ""}`,
																	Z =
																		ne() === W().length - 1
																			? "var(--vscode-editor-foreground)"
																			: "var(--vscode-descriptionForeground)",
																	se =
																		ne() === W().length - 1 ? "500" : "normal",
																	re = `codicon ${(0, T.$R9b)(ie.symbol.kind)}`;
																return (
																	Q !== te._v$ &&
																		(0, i.className)(ee, (te._v$ = Q)),
																	Z !== te._v$2 &&
																		((te._v$2 = Z) != null
																			? ee.style.setProperty("color", Z)
																			: ee.style.removeProperty("color")),
																	se !== te._v$3 &&
																		((te._v$3 = se) != null
																			? ee.style.setProperty("font-weight", se)
																			: ee.style.removeProperty("font-weight")),
																	re !== te._v$4 &&
																		(0, i.className)(_, (te._v$4 = re)),
																	te
																);
															},
															{
																_v$: void 0,
																_v$2: void 0,
																_v$3: void 0,
																_v$4: void 0,
															},
														),
														ee
													);
												})(),
												(0, m.createComponent)(r.Show, {
													get when() {
														return ne() < W().length - 1;
													},
													get children() {
														const ee = D();
														return (
															ee.style.setProperty("margin", "0 2px"),
															ee.style.setProperty(
																"color",
																"var(--vscode-descriptionForeground)",
															),
															ee.style.setProperty("opacity", "0.6"),
															ee
														);
													},
												}),
											],
										}),
									),
									Y
								);
							},
						});
					};
				function q() {
					const V = (0, o.$odc)(),
						[G, K] = (0, r.createSignal)(),
						[J, W] = (0, r.createSignal)(),
						[X, Y] = (0, r.createSignal)(),
						ie = (0, r.createMemo)(
							() =>
								V.reactiveStorageService.nonPersistentStorage
									.quickInputCurrentItem,
						);
					let ne, ee, _;
					const [te, Q] = (0, r.createSignal)(!0),
						Z = [
							".obj",
							".png",
							".jpg",
							".jpeg",
							".gif",
							".bmp",
							".ico",
							".icns",
							".webp",
							".mp3",
							".wav",
							".ogg",
							".flac",
							".mp4",
							".webm",
							".avi",
							".mov",
							".zip",
							".rar",
							".7z",
							".tar",
							".gz",
							".exe",
							".dll",
							".so",
							".dylib",
							".pdf",
							".doc",
							".docx",
							".xls",
							".xlsx",
							".ppt",
							".pptx",
							".ttf",
							".otf",
							".woff",
							".woff2",
						],
						se = async (me) => {
							const ve = V.fileService;
							try {
								const ge = await ve.resolve(me, { resolveMetadata: !0 }),
									be = me.path.split(".").pop()?.toLowerCase();
								Q(!!be && !Z.includes(`.${be}`));
							} catch (ge) {
								console.error("Error checking file previewability:", ge), Q(!1);
							}
						};
					(0, r.createEffect)(() => {
						const me = ie();
						me && me.resource && se(me.resource);
					});
					let re = null,
						le;
					const oe = async (me) => {
							ae();
							try {
								ee = await V.textModelService.createModelReference(me);
								const ve = ee.object.textEditorModel,
									ge = u.$("div.quick-input-preview-editor");
								(ne = V.instantiationService.createInstance(
									l.$X0b,
									ge,
									{
										...l.$X0b.getEditorOptions(V.configurationService),
										lineNumbers: "off",
										glyphMargin: !0,
										folding: !1,
										scrollbar: {
											vertical: "auto",
											horizontal: "hidden",
											horizontalScrollbarSize: 0,
											horizontalHasArrows: !1,
										},
										hover: { enabled: !1 },
										readOnly: !0,
										wordWrap: "off",
										wordWrapOverride1: "off",
										wordWrapOverride2: "off",
										stickyScroll: {
											enabled: !0,
											defaultModel: "outlineModel",
											maxLineCount: 2,
										},
									},
									{},
								)),
									ne.setModel(ve);
								const be = ne.getOption(n.EditorOption.lineHeight),
									Ce = ve.getLineCount(),
									Le = ne.getOption(n.EditorOption.fontInfo),
									Fe = Le.spaceWidth;
								let Oe = 0;
								const xe = ve.getOptions().tabSize;
								for (let Ie = 1; Ie <= Ce; Ie++) {
									const Be = ve.getLineContent(Ie);
									let Se = 0;
									for (let ke = 0; ke < Be.length; ke++)
										Be[ke] === "	" ? (Se += xe) : (Se += 1);
									Oe = Math.max(Oe, Se);
								}
								let He = Math.max(z, Math.min(Ce, U)),
									Ke = 0;
								const Te = ie();
								if (Te.range) {
									Te.range && fe(me, Te.range);
									const Ie = Te.range.startLineNumber,
										Se = Te.range.endLineNumber - Ie + 1;
									if (Se <= He) {
										const ke = Math.floor((He - Se) / 2);
										Ke = Math.max(Ie - 1 - ke, 0);
									} else (Ke = Ie - 1), (He = Math.min(Se, U));
								}
								ne.setScrollTop(Ke * be);
								const Ee = ie()?.semSearchData?.highlightRange;
								Ee &&
									ne.changeDecorations((Ie) => {
										Ie.addDecoration(Ee, {
											className: "sem-search-highlight",
											description: "Semantic Search Highlight",
											isWholeLine: !0,
										});
									}),
									(ge.style.height = "100%"),
									(ge.style.width = "100%"),
									(ge.style.fontFamily = Le.fontFamily),
									(ge.style.fontSize = `${Le.fontSize}px`),
									(ge.style.fontWeight = Le.fontWeight),
									(ge.style.letterSpacing = `${Le.letterSpacing}px`),
									(ge.style.overflow = "hidden"),
									K(ge),
									ne.onMouseMove((Ie) => {
										const Be = Ie.target;
										if (
											Be.type === $.MouseTargetType.CONTENT_TEXT &&
											Be.position
										) {
											const Se = Be.position.lineNumber;
											pe(Se);
										} else $e();
									}),
									ne.onMouseDown((Ie) => {
										const Be = Ie.target;
										if (
											Be.type === $.MouseTargetType.CONTENT_TEXT &&
											Be.position
										) {
											const Se = Be.position.lineNumber;
											ye(Se);
										}
									}),
									(_ = new ResizeObserver(() => {
										ne && ne.layout();
									})),
									_.observe(ge),
									(le = V.instantiationService.createInstance(v.$pkc, ne)),
									le.hijackOnClickItem((Ie, Be) => {
										Be && (Ie.preventDefault(), Ie.stopPropagation(), ye(Be));
									});
							} catch (ve) {
								console.error("Failed to create preview editor:", ve), ae();
							}
						},
						ae = () => {
							ne &&
								(le && (le.dispose(), (le = void 0)),
								ne.dispose(),
								(ne = void 0)),
								ee && (ee.dispose(), (ee = void 0)),
								_ && (_.disconnect(), (_ = void 0)),
								$e();
						},
						pe = (me) => {
							ne &&
								($e(),
								(re = ne.deltaDecorations(
									[],
									[
										{
											range: new y.$iL(me, 1, me, Number.MAX_VALUE),
											options: {
												isWholeLine: !0,
												className: "hovered-line",
												hoverMessage: {
													value: "Click to navigate to this line",
												},
												description: "Hover decoration",
												inlineClassName: "hovered-line-inline",
											},
										},
									],
								)[0]));
						},
						$e = () => {
							ne && re && (ne.deltaDecorations([re], []), (re = null));
						},
						ye = (me) => {
							const ve = ie();
							if (ve && ve.resource) {
								const ge = ve.resource;
								V.openerService.open(
									(0, p.$8rb)(ge, {
										startLineNumber: me,
										startColumn: 1,
										endLineNumber: me,
										endColumn: 1,
									}),
								);
							}
						},
						ue = (me, ve) => {
							const ge = (xe, He) => {
									const Ke = Math.max(xe.startLineNumber, He.startLineNumber),
										Je = Math.min(xe.endLineNumber, He.endLineNumber);
									return Ke > Je ? 0 : Je - Ke + 1;
								},
								be = me.endLineNumber - me.startLineNumber + 1,
								Ce = ve.endLineNumber - ve.startLineNumber + 1,
								Le = ge(me, ve),
								Fe = be + Ce - Le;
							return Le / Fe;
						},
						fe = async (me, ve) => {
							const ge = a.CancellationToken.None,
								Ce = await V.outlineService.getOrCreate(
									(await V.textModelService.createModelReference(me)).object
										.textEditorModel,
									ge,
								);
							W(Ce);
							const Le = (Oe) => {
									if (
										Oe instanceof g.$8Db ||
										("children" in Oe && Oe.children.size > 0)
									) {
										let xe,
											He = -1;
										const Ke = (Oe instanceof g.$8Db, Oe.children.values());
										for (const Je of Ke) {
											const Te = Le(Je);
											if (Te) {
												const Ee = ue(Te.symbol.range, ve);
												Ee > He && ((He = Ee), (xe = Te));
											}
										}
										return xe;
									} else if ("symbol" in Oe) return Oe;
								},
								Fe = Le(Ce);
							Y(Fe);
						};
					return (
						(0, r.onMount)(() => {
							(0, r.onCleanup)(() => {
								ae();
							});
						}),
						(0, r.createEffect)(() => {
							const me = ie();
							me && me.resource
								? te() &&
									(oe(me.resource),
									me.semSearchData?.outlineModel &&
										(W(me.semSearchData.outlineModel),
										Y(me.semSearchData.relevantLeaf)))
								: ae();
						}),
						(0, m.createComponent)(r.Show, {
							get when() {
								return (
									(0, w.memo)(
										() =>
											!!(ie() && (ie().semSearchData || ie().cppReportEvent)),
									)() && ie()
								);
							},
							children: (me) =>
								(0, m.createComponent)(r.Switch, {
									get children() {
										return [
											(0, m.createComponent)(r.Match, {
												get when() {
													return (
														(0, w.memo)(() => !!me().semSearchData)() &&
														me().resource
													);
												},
												children: (ve) => (
													te() && oe(ve()),
													(() => {
														const ge = A(),
															be = ge.firstChild;
														return (
															ge.style.setProperty("display", "flex"),
															ge.style.setProperty("flex-direction", "column"),
															ge.style.setProperty(
																"background",
																"var(--vscode-quickInput-background)",
															),
															ge.style.setProperty(
																"border",
																"1px solid var(--vscode-widget-border)",
															),
															ge.style.setProperty("border-radius", "6px"),
															ge.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															ge.style.setProperty("padding", "5px"),
															ge.style.setProperty("z-index", "1000"),
															ge.style.setProperty("overflow", "hidden"),
															ge.style.setProperty("height", "256px"),
															be.style.setProperty(
																"background",
																"var(--vscode-editor-background)",
															),
															be.style.setProperty(
																"border",
																"1px solid var(--vscode-quickInput-border)",
															),
															be.style.setProperty("border-radius", "4px"),
															be.style.setProperty("height", "100%"),
															be.style.setProperty("box-sizing", "border-box"),
															be.style.setProperty("overflow", "hidden"),
															be.style.setProperty("display", "flex"),
															be.style.setProperty("flex-direction", "column"),
															(0, d.insert)(
																be,
																(0, m.createComponent)(x, {
																	get label() {
																		return me().label;
																	},
																	get description() {
																		return me().description ?? "";
																	},
																	get fsPath() {
																		return ve().fsPath;
																	},
																}),
																null,
															),
															(0, d.insert)(
																be,
																(0, m.createComponent)(r.Show, {
																	get when() {
																		return te();
																	},
																	get children() {
																		return [
																			(0, m.createComponent)(H, {
																				get outlineModel() {
																					return me().semSearchData
																						?.outlineModel;
																				},
																				get relevantLeaf() {
																					return me().semSearchData
																						?.relevantLeaf;
																				},
																			}),
																			(() => {
																				const Ce = M();
																				return (
																					Ce.style.setProperty("flex", "1"),
																					Ce.style.setProperty(
																						"overflow",
																						"hidden",
																					),
																					(0, d.insert)(Ce, G),
																					Ce
																				);
																			})(),
																		];
																	},
																}),
																null,
															),
															(0, d.insert)(
																be,
																(0, m.createComponent)(r.Show, {
																	get when() {
																		return !te();
																	},
																	get children() {
																		const Ce = N();
																		return (
																			Ce.style.setProperty("display", "flex"),
																			Ce.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Ce.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			Ce.style.setProperty("height", "100%"),
																			Ce.style.setProperty(
																				"color",
																				"var(--vscode-descriptionForeground)",
																			),
																			Ce
																		);
																	},
																}),
																null,
															),
															(0, C.effect)(() =>
																(te() ? "0px" : "42px") != null
																	? be.style.setProperty(
																			"padding-bottom",
																			te() ? "0px" : "42px",
																		)
																	: be.style.removeProperty("padding-bottom"),
															),
															ge
														);
													})()
												),
											}),
											(0, m.createComponent)(r.Match, {
												get when() {
													return me().cppReportEvent;
												},
												children: (ve) => {
													const ge = ve();
													return (() => {
														const be = M();
														return (
															be.style.setProperty(
																"background",
																"var(--vscode-editor-background)",
															),
															be.style.setProperty(
																"border",
																"1px solid var(--vscode-widget-border)",
															),
															be.style.setProperty("border-radius", "4px"),
															be.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															be.style.setProperty("z-index", "1000"),
															be.style.setProperty("width", "100%"),
															be.style.setProperty("box-sizing", "border-box"),
															be.style.setProperty("height", "360px"),
															be.style.setProperty(
																"font-family",
																"var(--monaco-monospace-font)",
															),
															be.style.setProperty("font-size", "12px"),
															be.style.setProperty("overflow", "hidden"),
															be.style.setProperty("cursor", "not-allowed"),
															(0, d.insert)(
																be,
																(0, m.createComponent)(f.$w0b, {
																	scrollingDirection: "vertical",
																	style: { height: "100%" },
																	get children() {
																		const Ce = B(),
																			Le = Ce.firstChild,
																			Fe = Le.firstChild,
																			Oe = Fe.nextSibling,
																			xe = Oe.firstChild,
																			He = Le.nextSibling,
																			Ke = He.firstChild,
																			Je = Ke.firstChild,
																			Te = Je.firstChild,
																			Ee = Te.nextSibling,
																			Ie = Ee.nextSibling,
																			Be = Ie.nextSibling,
																			Se = Je.nextSibling,
																			ke = Se.firstChild,
																			Ue = ke.nextSibling,
																			qe = Ue.nextSibling,
																			Ae = qe.nextSibling,
																			Me = Se.nextSibling,
																			De = Me.firstChild,
																			Re = De.nextSibling,
																			je = Re.nextSibling,
																			Ve = je.nextSibling,
																			Ze = Ke.nextSibling,
																			et = Ze.firstChild,
																			rt = et.nextSibling;
																		return (
																			Ce.style.setProperty("padding", "6px"),
																			Ce.style.setProperty("display", "flex"),
																			Ce.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Ce.style.setProperty("gap", "8px"),
																			Le.style.setProperty("display", "flex"),
																			Le.style.setProperty(
																				"justify-content",
																				"space-between",
																			),
																			Le.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Fe.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			(0, d.insert)(Fe, () => ge.modelName),
																			Oe.style.setProperty("display", "flex"),
																			Oe.style.setProperty("gap", "12px"),
																			Oe.style.setProperty(
																				"align-items",
																				"center",
																			),
																			xe.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(xe, () =>
																				(0, s.$Pac)(ge.timestamp),
																			),
																			He.style.setProperty("display", "flex"),
																			He.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			He.style.setProperty("gap", "4px"),
																			Ke.style.setProperty("display", "flex"),
																			Ke.style.setProperty("gap", "16px"),
																			Ke.style.setProperty("font-size", "11px"),
																			Ke.style.setProperty(
																				"font-family",
																				"var(--monaco-monospace-font)",
																			),
																			Ke.style.setProperty("opacity", "0.8"),
																			Te.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Je,
																				() =>
																					ge.metrics.timeToFirstToken.toFixed(
																						0,
																					),
																				Ie,
																			),
																			ke.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Se,
																				() =>
																					ge.metrics.serverTimeToFirstToken.toFixed(
																						0,
																					),
																				qe,
																			),
																			De.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Me,
																				() => ge.metrics.totalTime.toFixed(0),
																				je,
																			),
																			et.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Ze,
																				() => ge.requestId,
																				null,
																			),
																			(0, d.insert)(
																				Ce,
																				(0, m.createComponent)(r.Show, {
																					get when() {
																						return ge.debugInfo?.modelOutput;
																					},
																					get children() {
																						const ft = R(),
																							bt = ft.firstChild,
																							nt = bt.firstChild;
																						return (
																							ft.style.setProperty(
																								"display",
																								"flex",
																							),
																							ft.style.setProperty(
																								"flex-direction",
																								"column",
																							),
																							ft.style.setProperty(
																								"gap",
																								"4px",
																							),
																							ft.style.setProperty(
																								"pointer-events",
																								"none",
																							),
																							bt.style.setProperty(
																								"font-size",
																								"11px",
																							),
																							nt.style.setProperty(
																								"color",
																								"var(--vscode-textLink-foreground)",
																							),
																							(0, d.insert)(
																								ft,
																								(0, m.createComponent)(b.$Ibc, {
																									get text() {
																										return (
																											ge.debugInfo
																												.modelOutput ?? ""
																										);
																									},
																									get language() {
																										return F(
																											ge.relativeWorkspacePath,
																										);
																									},
																									get nonReactiveEditorOptions() {
																										return {
																											...l.$X0b.getEditorOptions(
																												V.configurationService,
																											),
																											readOnly: !0,
																											scrollbar: {
																												vertical: "hidden",
																												horizontal: "hidden",
																												handleMouseWheel: !1,
																											},
																											hover: { enabled: !1 },
																											minimap: { enabled: !1 },
																											lineNumbers: "off",
																										};
																									},
																								}),
																								null,
																							),
																							ft
																						);
																					},
																				}),
																				null,
																			),
																			(0, d.insert)(
																				Ce,
																				(0, m.createComponent)(r.Show, {
																					get when() {
																						return ge.debugInfo?.modelInput;
																					},
																					get children() {
																						const ft = O(),
																							bt = ft.firstChild;
																						return (
																							ft.style.setProperty(
																								"display",
																								"flex",
																							),
																							ft.style.setProperty(
																								"flex-direction",
																								"column",
																							),
																							ft.style.setProperty(
																								"gap",
																								"4px",
																							),
																							ft.style.setProperty(
																								"font-size",
																								"11px",
																							),
																							ft.style.setProperty(
																								"white-space",
																								"pre-wrap",
																							),
																							ft.style.setProperty(
																								"line-height",
																								"14px",
																							),
																							bt.style.setProperty(
																								"color",
																								"var(--vscode-textLink-foreground)",
																							),
																							(0, d.insert)(
																								ft,
																								() => ge.debugInfo.modelInput,
																								null,
																							),
																							ft
																						);
																					},
																				}),
																				null,
																			),
																			Ce
																		);
																	},
																}),
															),
															be
														);
													})();
												},
											}),
										];
									},
								}),
						})
					);
				}
			},
		),
		