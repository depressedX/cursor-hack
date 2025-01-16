define(de[4331], he([1, 0, 4330, 3618, 4177, 1743]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[1073],
			he([1, 0, 2, 2, 2, 2, 2, 13, 147, 58, 14, 2520]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$18b = void 0);
				const a = (0, t.template)(
						'<div class="cursor-loading-button-error">Something went wrong. Please contact <!> if this persists.',
					),
					h = (0, t.template)(
						'<div class="cursor-outer-loading-button-group"><div class="cursor-loading-button-group">',
					),
					c = (n) => {
						const [g, p] = (0, d.createSignal)("before"),
							[o, f] = (0, d.createSignal)(!1),
							b = (0, d.createMemo)(() => ({
								"border-radius": "2px",
								gap: "4px",
								...n.buttonProps.style,
							}));
						return (() => {
							const s = h(),
								l = s.firstChild;
							return (
								(0, i.insert)(
									l,
									(0, w.createComponent)(d.Show, {
										get when() {
											return (
												g() === "before" ||
												g() === "error" ||
												(n.revertToOrig && g() === "after")
											);
										},
										get children() {
											return (0, w.createComponent)(
												m.$rdc,
												(0, E.mergeProps)(() => n.buttonProps, {
													get style() {
														return b();
													},
													onClick: () => {
														f(!0);
														try {
															n.onClick()
																.then(() => {
																	f(!1), p("after");
																})
																.catch((y) => {
																	console.error(y), p("error");
																});
														} catch {
															p("error");
														}
													},
													get isLoading() {
														return o();
													},
												}),
											);
										},
									}),
									null,
								),
								(0, i.insert)(
									l,
									(0, w.createComponent)(d.Show, {
										get when() {
											return (
												(0, C.memo)(() => !n.revertToOrig)() && g() === "after"
											);
										},
										get children() {
											return (0, w.createComponent)(
												m.$rdc,
												(0, E.mergeProps)(() => n.buttonProps, {
													get style() {
														return { ...b(), opacity: 0.5 };
													},
													get codicon() {
														return u.$ak.check;
													},
													get title() {
														return n.doneTitle || "Done";
													},
													type: "disabled",
												}),
											);
										},
									}),
									null,
								),
								(0, i.insert)(
									s,
									(0, w.createComponent)(d.Show, {
										get when() {
											return g() === "error";
										},
										get children() {
											const y = a(),
												$ = y.firstChild,
												v = $.nextSibling,
												S = v.nextSibling;
											return (0, i.insert)(y, r.$vV, v), y;
										},
									}),
									null,
								),
								s
							);
						})();
					};
				e.$18b = c;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4332],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 13, 1374, 695, 147, 14, 134,
			650, 26, 58, 295, 83, 47, 893, 191, 4315, 1073, 51, 9, 4228, 331, 862,
			340, 401, 4227, 1006, 2363,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Kfd = void 0),
				(e.$Lfd = Je),
				(e.$Mfd = Ze),
				(p = xi(p));
			const z = (0, t.template)("<div>ERROR"),
				F = (0, t.template)("<div>"),
				x = (0, t.template)("<div>New AI Interface"),
				H = (0, t.template)(
					"<div>Please paste the link to the documentation that you'd like the AI to learn from. <br>Your link returned a not found error.",
				),
				q = (0, t.template)("<div>Add docs"),
				V = (0, t.template)(
					'<div><div><div class="cursor-docs-textarea-title"><div><i></i>@</div>Name <div></div></div></div><div><div class="cursor-docs-textarea-title"><div><i></i></div>Prefix <div>',
				),
				G = (0, t.template)(
					'<div><div class="cursor-docs-textarea-title"><div><i></i></div>Entrypoint<div>',
				),
				K = (0, t.template)(
					"<div>The name <i></i> is already taken. Please choose a different name.",
				),
				J = (0, t.template)(
					'<div><div class="cursor-docs-textarea-title"><div><i></i><i></i></div>Share with team',
				),
				W = (0, t.template)('<div class="cursor-model-switch">'),
				X = (0, t.template)("<div>Add new doc"),
				Y = (0, t.template)(
					'<div><video autoplay loop muted><source type="video/mp4"></video><div></div><div>',
				),
				ie = (0, t.template)(
					'<div class="cursor-modal-title">Have the AI crawl that link?',
				),
				ne = (0, t.template)(
					'<div class="cursor-modal-description">You can choose to have the AI use a web browser to scan the contents of <span></span>.',
				),
				ee = (0, t.template)(
					'<div class="cursor-card-modal-bottom"><div class="cursor-card-modal-spacer">',
				),
				_ = (0, t.template)('<div><img width="500">'),
				te = (0, t.template)("<div>New Feature"),
				Q = (0, t.template)("<div>Introducing Cursor Tab"),
				Z = (0, t.template)(
					'<div class="cursor-modal-marketing-description">This is a more powerful version of Copilot that <i>suggests entire diffs</i>. Based on a custom model that autocompletes on sequences of edits, Cursor Tab is especially adept at understanding what you want to do next.',
				),
				se = (0, t.template)(
					'<ul class="cursor-modal-marketing-description-ul"><li>Suggests normal autocompletes and entire diffs</li><li>Understands your revision history</li><li>Can replace any AI autocomplete plugin</li><li>Free to try for all users and unlimited for pro users',
				),
				re = (0, t.template)("<div>You're all set!"),
				le = (0, t.template)(
					'<div class="cursor-modal-marketing-description">To get started, just try typing. When you see grey text or a suggestion box, just hit Tab to accept. Please let us know if you have <span>questions or thoughts</span>. Our goal is to make Cursor Tab excellent for the programming you do.',
				),
				oe = (0, t.template)('<div><img width="980">'),
				ae = (0, t.template)(
					'<div class="fade-in"><div class="mention-link-toolbar-item"><div></div>Open</div><div class="mention-link-toolbar-item"><div></div>Unlink',
				),
				pe = (0, t.template)(
					'<div class="cursor-modal-marketing-description">For <!>: <!>.',
				),
				$e = (0, t.template)("<div><span>"),
				ye = (0, t.template)("<span>"),
				ue = (0, t.template)(
					'<div><span>Hard limit</span><div><input type="text" placeholder="Enter usage-based spend limit">',
				),
				fe = (0, t.template)(
					'<div class="cursor-modal-marketing-description">You can see your usage and change your hard limit in the <span>account settings</span>.',
				),
				me = (0, t.template)(
					'<div><div><span>Configure Usage-Based Pricing</span><span></span></div><div class="cursor-modal-marketing-description">Skip the wait. Pay only for what you use.',
				),
				ve = (0, t.template)("<div>Turbo Mode"),
				ge = (0, t.template)(
					'<div class="cursor-modal-marketing-description">Turbo Mode makes Composer faster.<br>In Turbo Mode, each Composer request counts as 2 fast requests.',
				),
				be = (0, t.template)("<div><div><span>Enable Turbo Mode:"),
				Ce = (0, t.template)('<div class="settings-container-backing">'),
				Le = (0, t.template)('<div class="fade-in-fast">'),
				Fe = (0, t.template)(
					`<div class="error-container-backing"><div class="error-container"><div class="error"><div><i class="fas fa-times"></i></div><div class="error__content"><div>You've used up your free autocomplete requests.</div><div class="error__content_subtitle">To cover the costs of running the model, unlimited access to Cursor's autocomplete (Cursor Tab) requires subscribing to Pro. Cursor Pro also comes with much higher GPT-4 and Claude limits.</div><div><div><button>Turn off autocomplete</button></div><div><button><div></div>Upgrade to keep</button></div></div><div></div></div></div><div class="cover-bar">`,
				),
				Oe = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage({
								...rt.reactiveStorageService.nonPersistentStorage,
								showingErrorMetadata: { case: null, error: void 0 },
							});
						},
						bt = (0, h.createMemo)(
							() =>
								rt.reactiveStorageService.nonPersistentStorage
									.showingErrorMetadata.case !== null &&
								rt.reactiveStorageService.nonPersistentStorage
									.showingErrorMetadata.source === "other",
						);
					return (0, a.createComponent)(n.Show, {
						get when() {
							return bt();
						},
						get children() {
							return (0, a.createComponent)(h.Switch, {
								get children() {
									return (0, a.createComponent)(h.Match, {
										get when() {
											return rt.reactiveStorageService.nonPersistentStorage
												.showingErrorMetadata;
										},
										children: (nt) =>
											(0, a.createComponent)(g.$ufd, {
												closeModal: ft,
												disableClickOff: !1,
												get children() {
													return [
														(() => {
															const lt = z();
															return (
																lt.style.setProperty("position", "absolute"),
																lt.style.setProperty("top", "16px"),
																lt.style.setProperty("left", "28px"),
																lt.style.setProperty("opacity", "0.4"),
																lt.style.setProperty("font-size", "11px"),
																lt
															);
														})(),
														(() => {
															const lt = F();
															return lt.style.setProperty("height", "10px"), lt;
														})(),
														(0, a.createComponent)(A.$0ac, {
															get generationUUID() {
																return (() => {
																	const lt = nt();
																	return lt.case === "internet"
																		? lt.generationUUID
																		: (0, S.$9g)();
																})();
															},
															get error() {
																return nt().error;
															},
															message: void 0,
															rerun: () => {
																ft(), rt.aiErrorService.tryRerun();
															},
														}),
													];
												},
											}),
									});
								},
							});
						},
					});
				},
				xe = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage(
								"aiInterfaceState",
								"showingNewModal",
								!1,
							);
						},
						[bt, nt] = (0, h.createSignal)(""),
						[lt, ct] = (0, h.createSignal)(!1),
						gt = async () => {
							bt() == "" ? ct(!0) : ct(!1),
								!lt() &&
									(rt.interfaceAgentService.newInterfaceFromName(bt()), ft());
						};
					return (
						(0, h.createEffect)(() => {
							rt.reactiveStorageService.nonPersistentStorage.aiInterfaceState
								.showingNewModal &&
								setTimeout(() => {
									const ht = rt.window.document.getElementById(
										"doc-modal-url-input-interface",
									);
									ht && ht.focus();
								}, 200);
						}),
						(0, a.createComponent)(n.Show, {
							get when() {
								return rt.reactiveStorageService.nonPersistentStorage
									.aiInterfaceState.showingNewModal;
							},
							get children() {
								return (0, a.createComponent)(g.$ufd, {
									closeModal: ft,
									disableClickOff: !1,
									disableX: !0,
									extras: {
										style: {
											padding: "0px",
											width: "600px",
											position: "relative",
										},
									},
									get children() {
										return [
											(0, a.createComponent)(p.default, {
												get extraStyles() {
													return {
														width: "100%",
														"font-size": "16px",
														padding: "16px",
														...(lt() ? { border: "1px solid red" } : {}),
													};
												},
												extras: {
													id: "doc-modal-url-input-interface",
													placeholder: "New AI interface name...",
													onInput: (ht) => {
														nt(ht.currentTarget.value);
													},
													onKeyDown: (ht) => {
														ht.keyCode == 13 && gt();
													},
												},
											}),
											(() => {
												const ht = x();
												return (
													ht.style.setProperty("padding", "4px"),
													ht.style.setProperty("border-radius", "3px"),
													ht.style.setProperty("position", "absolute"),
													ht.style.setProperty("top", "-34px"),
													ht.style.setProperty("left", "0px"),
													ht.style.setProperty("font-size", "12px"),
													ht.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													ht.style.setProperty(
														"background-color",
														"var(--vscode-input-background)",
													),
													ht
												);
											})(),
										];
									},
								});
							},
						})
					);
				},
				He = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage({
								...rt.reactiveStorageService.nonPersistentStorage,
								showingDocsModal: !1,
							});
						},
						[bt, nt] = (0, h.createSignal)(""),
						[lt, ct] = (0, h.createSignal)(""),
						[gt, ht] = (0, h.createSignal)(""),
						[Rt, Nt] = (0, h.createSignal)(!1),
						[jt, ti] = (0, h.createSignal)(""),
						[kt, hi] = (0, h.createSignal)(!1),
						[Kt, di] = (0, h.createSignal)(!1),
						[Ye, ze] = (0, h.createSignal)(!1);
					(0, h.createEffect)(() => {
						rt.cursorAuthenticationService.membershipType() ===
							b.MembershipType.ENTERPRISE && ze(!0);
					});
					const [Xe, It] = (0, h.createSignal)(!1);
					(0, h.createEffect)(() => {
						rt.reactiveStorageService.nonPersistentStorage.showingDocsModal &&
							(nt(""), ct(""), mi(0), Nt(!1), hi(!1), di(!1));
					}),
						(0, h.createEffect)(() => {
							const ci =
								rt.reactiveStorageService.applicationUserPersistentStorage.personalDocs.filter(
									(ri) => ri.indexingStatus === "indexing",
								);
							for (const ri of ci)
								rt.aiDocsService.startDocsPullingListener(
									ri.identifier,
									void 0,
									1e4,
								);
						});
					const Lt = (Zt) => {
							if (!Zt) return !1;
							try {
								return new URL(Zt).hostname.includes(".");
							} catch {
								return !1;
							}
						},
						xt = async (Zt) => !0,
						[Vt, Bt] = (0, h.createSignal)([]);
					(0, h.createEffect)(async () => {
						const ci = (
							await rt.aiService.availableDocs({
								additionalDocIdentifiers:
									rt.reactiveStorageService.applicationUserPersistentStorage.personalDocs.map(
										(ri) => ri.identifier,
									),
							})
						)
							.map((ri) => ri.metadata?.docName)
							.filter((ri) => ri !== void 0);
						(ci.length !== Vt().length ||
							!ci.every((ri, $i) => ri === Vt()[$i])) &&
							Bt(ci);
					});
					const [Gt, Mt] = (0, h.createSignal)(!1),
						Ut = async () => {
							if (
								(gt() == "" || Vt().includes(gt())
									? (Nt(!0), ti(gt()))
									: Nt(!1),
								Lt(bt()) ? hi(!1) : hi(!0),
								Lt(lt()) ? di(!1) : di(!0),
								Rt() || kt())
							)
								return;
							Mt(!0);
							const Zt = await rt.aiService.uploadClient(),
								ci = {
									identifier: bt(),
									name: gt(),
									url: bt(),
									docUrlRoot: bt(),
									docUrlPrefix: lt(),
									indexingStatus: "indexing",
									pages: [],
									indexingPageName: "started",
									publishToTeam: Xe(),
								};
							rt.reactiveStorageService.setNonPersistentStorage("newDoc", ci);
							const ri =
								I.$6_.typeName + "/" + I.$6_.methods.uploadDocumentation.name;
							try {
								const Wt = (
									await Zt.uploadDocumentation(
										{
											docIdentifier: ci.identifier,
											metadata: {
												docName: ci.name,
												prefixUrl: ci.url,
												truePrefixUrl: lt(),
												isDifferentPrefixOrigin: !!ci.isDifferentPrefixOrigin,
											},
											publishToTeam: Xe(),
											clientHandlesUuid: !0,
										},
										{ headers: (0, T.$m6b)((0, S.$9g)()) },
									)
								).docUuid;
								(ci.identifier = Wt),
									rt.reactiveStorageService.applicationUserPersistentStorage.personalDocs.some(
										(at) => at.identifier === Wt,
									)
										? (rt.reactiveStorageService.setApplicationUserPersistentStorage(
												"personalDocs",
												(at) =>
													at.map((pi) =>
														pi.identifier === Wt
															? { ...pi, name: ci.name }
															: pi,
													),
											),
											rt.aiDocsService.startDocsPullingListener(Wt))
										: rt.reactiveStorageService.setApplicationUserPersistentStorage(
												"personalDocs",
												(at) => [...at, ci],
											),
									rt.commandService.executeCommand(
										y.$QV,
										"features",
										"cursor-settings-docs",
									),
									ft();
							} catch ($i) {
								rt.aiErrorService.handleError(
									$i,
									new v.$Zs(),
									(0, S.$9g)(),
									ri,
									"other",
									() => {
										Ut();
									},
								);
							}
							Mt(!1);
						},
						[ei, mi] = (0, h.createSignal)(0);
					(0, h.createEffect)(() => {
						const Zt = ei();
						rt.reactiveStorageService.nonPersistentStorage.showingDocsModal &&
							setTimeout(() => {
								const ci = rt.window.document.getElementById(
									"doc-modal-url-input",
								);
								ci && ci.focus();
							}, 200);
					});
					const ii = async (Zt) => {
							const ci = `I will give you a link to a documentation page. Your task is to answer me with the name of the project/library/technology that the documentation page is for.
<link>
${Zt}
</link>

What is the name of the project/library/technology?`,
								ri = "Name of the project e.g. Tailwind";
							try {
								const Wt = (await rt.aiService.getSimplePrompt(ci, ri)).trim();
								return Wt.length < 20 ? Wt : "";
							} catch {
								return "";
							}
						},
						[Dt, Jt] = (0, h.createSignal)(!1),
						si = {
							position: "relative",
							width: "100%",
							display: "flex",
							"flex-direction": "column",
							gap: "4px",
							"align-items": "flex-start",
						};
					return (0, a.createComponent)(n.Show, {
						get when() {
							return rt.reactiveStorageService.nonPersistentStorage
								.showingDocsModal;
						},
						get children() {
							return [
								(0, a.createComponent)(n.Show, {
									get when() {
										return ei() == 0;
									},
									get children() {
										return (0, a.createComponent)(g.$ufd, {
											closeModal: ft,
											disableClickOff: !1,
											disableX: !0,
											extras: {
												style: {
													padding: "0px",
													width: "500px",
													position: "relative",
												},
											},
											get children() {
												return [
													(0, a.createComponent)(p.default, {
														get extraStyles() {
															return {
																width: "100%",
																"font-size": "16px",
																padding: "12px",
																...(kt()
																	? {
																			"background-color":
																				"var(--vscode-inputValidation-errorBackground)",
																		}
																	: {}),
															};
														},
														extras: {
															id: "doc-modal-url-input",
															placeholder: "https://pytorch.org/docs/page",
															onInput: (Zt) => {
																nt(Zt.currentTarget.value);
															},
															onKeyDown: async (Zt) => {
																if (Zt.keyCode == 13) {
																	try {
																		if (
																			(bt().startsWith("http") ||
																				nt("https://" + bt()),
																			!bt().endsWith("/") &&
																				(
																					bt().split("//").pop() ?? bt()
																				).includes("/"))
																		) {
																			let ri = bt().split("/");
																			ri.pop(), ct(ri.join("/"));
																		} else ct(bt());
																	} catch {}
																	if (Lt(bt()) && (await xt(bt()))) {
																		Jt(!0);
																		const ri = await ii(bt());
																		ht(ri), Jt(!1), hi(!1), mi(1);
																	} else hi(!0);
																}
															},
														},
													}),
													(0, a.createComponent)(n.Show, {
														get when() {
															return kt();
														},
														get children() {
															const Zt = H();
															return (
																Zt.style.setProperty("font-size", "12px"),
																Zt.style.setProperty("color", "red"),
																Zt.style.setProperty("border-radius", "3px"),
																Zt.style.setProperty("margin", "12px 16px"),
																Zt
															);
														},
													}),
													(() => {
														const Zt = q(),
															ci = Zt.firstChild;
														return (
															Zt.style.setProperty("padding", "4px"),
															Zt.style.setProperty("border-radius", "3px"),
															Zt.style.setProperty("position", "absolute"),
															Zt.style.setProperty("top", "-34px"),
															Zt.style.setProperty("left", "0px"),
															Zt.style.setProperty("font-size", "12px"),
															Zt.style.setProperty(
																"color",
																"var(--vscode-editor-foreground)",
															),
															Zt.style.setProperty(
																"background-color",
																"var(--vscode-input-background)",
															),
															Zt.style.setProperty("display", "flex"),
															Zt.style.setProperty("align-items", "center"),
															Zt.style.setProperty("gap", "4px"),
															(0, u.insert)(
																Zt,
																(0, a.createComponent)(n.Show, {
																	get when() {
																		return Dt();
																	},
																	get children() {
																		return (0, a.createComponent)($.$Y8b, {
																			onInputBackground: !0,
																		});
																	},
																}),
																null,
															),
															Zt
														);
													})(),
												];
											},
										});
									},
								}),
								(0, a.createComponent)(n.Show, {
									get when() {
										return ei() == 1;
									},
									get children() {
										return (0, a.createComponent)(g.$ufd, {
											closeModal: ft,
											disableClickOff: !1,
											disableX: !0,
											extras: {
												style: {
													padding: "16px",
													width: "500px",
													position: "relative",
												},
											},
											interiorStyle: {
												display: "flex",
												"flex-direction": "column",
												gap: "8px",
											},
											get children() {
												return [
													(() => {
														const Zt = V(),
															ci = Zt.firstChild,
															ri = ci.firstChild,
															$i = ri.firstChild,
															Wt = $i.firstChild,
															tt = $i.nextSibling,
															at = tt.nextSibling,
															pi = ci.nextSibling,
															Li = pi.firstChild,
															Di = Li.firstChild,
															Ui = Di.firstChild,
															Wi = Di.nextSibling,
															Gi = Wi.nextSibling;
														return (
															Zt.style.setProperty("display", "flex"),
															Zt.style.setProperty("gap", "8px"),
															(0, r.style)(ci, si),
															$i.style.setProperty("display", "flex"),
															$i.style.setProperty("margin-right", "2px"),
															$i.style.setProperty("align-items", "center"),
															$i.style.setProperty("justify-content", "center"),
															Wt.style.setProperty("font-size", "11px"),
															at.style.setProperty("margin-left", "4px"),
															(0, u.insert)(
																ci,
																(0, a.createComponent)(p.default, {
																	get value() {
																		return gt();
																	},
																	get extraStyles() {
																		return {
																			width: "100%",
																			"font-size": "14px",
																			padding: "8px 12px",
																			"background-color": "transparent",
																			...(Rt()
																				? {
																						"background-color":
																							"var(--vscode-inputValidation-errorBackground)",
																					}
																				: {}),
																		};
																	},
																	extras: {
																		id: "doc-modal-url-input",
																		placeholder: "Name, e.g. Pytorch",
																		onKeyDown: (qi) => {
																			qi.keyCode == 13 && Ut();
																		},
																		onInput: (qi) => {
																			ht(qi.currentTarget.value);
																		},
																	},
																}),
																null,
															),
															(0, r.style)(pi, si),
															Di.style.setProperty("display", "flex"),
															Di.style.setProperty("margin-right", "2px"),
															Di.style.setProperty("align-items", "center"),
															Di.style.setProperty("justify-content", "center"),
															Ui.style.setProperty("font-size", "11px"),
															Gi.style.setProperty("margin-left", "4px"),
															(0, u.insert)(
																pi,
																(0, a.createComponent)(p.default, {
																	get value() {
																		return lt();
																	},
																	get extraStyles() {
																		return {
																			width: "100%",
																			"font-size": "14px",
																			padding: "8px 12px",
																			...(Kt()
																				? {
																						"background-color":
																							"var(--vscode-inputValidation-errorBackground)",
																					}
																				: {}),
																		};
																	},
																	extras: {
																		id: "doc-modal-prefix-url-input",
																		placeholder: "https://pytorch.org/docs/",
																		onInput: (qi) => {
																			ct(qi.currentTarget.value);
																		},
																		onKeyDown: (qi) => {
																			qi.keyCode == 13 && Ut();
																		},
																	},
																}),
																null,
															),
															(0, m.effect)(() =>
																(0, d.className)(
																	Ui,
																	l.ThemeIcon.asClassName(f.$ak.folder),
																),
															),
															Zt
														);
													})(),
													(() => {
														const Zt = G(),
															ci = Zt.firstChild,
															ri = ci.firstChild,
															$i = ri.firstChild,
															Wt = ri.nextSibling,
															tt = Wt.nextSibling;
														return (
															(0, r.style)(Zt, si),
															ri.style.setProperty("display", "flex"),
															ri.style.setProperty("margin-right", "2px"),
															ri.style.setProperty("align-items", "center"),
															ri.style.setProperty("justify-content", "center"),
															$i.style.setProperty("font-size", "11px"),
															tt.style.setProperty("margin-left", "4px"),
															(0, u.insert)(
																Zt,
																(0, a.createComponent)(p.default, {
																	get value() {
																		return bt();
																	},
																	get extraStyles() {
																		return {
																			width: "100%",
																			"font-size": "14px",
																			padding: "8px 12px",
																			...(kt()
																				? {
																						"background-color":
																							"var(--vscode-inputValidation-errorBackground)",
																					}
																				: {}),
																		};
																	},
																	extras: {
																		placeholder:
																			"https://pytorch.org/docs/page",
																		onInput: (at) => {
																			nt(at.currentTarget.value);
																		},
																		onKeyDown: (at) => {
																			at.keyCode == 13 && Ut();
																		},
																	},
																}),
																null,
															),
															(0, m.effect)(() =>
																(0, d.className)(
																	$i,
																	l.ThemeIcon.asClassName(f.$ak.link),
																),
															),
															Zt
														);
													})(),
													(0, a.createComponent)(n.Show, {
														get when() {
															return (0, C.memo)(() => !!Rt())() && jt() !== "";
														},
														get children() {
															const Zt = K(),
																ci = Zt.firstChild,
																ri = ci.nextSibling;
															return (
																Zt.style.setProperty("font-size", "12px"),
																Zt.style.setProperty("color", "red"),
																Zt.style.setProperty("border-radius", "3px"),
																Zt.style.setProperty("text-align", "center"),
																Zt.style.setProperty("padding", "8px 12px"),
																Zt.style.setProperty("padding-bottom", "8px"),
																(0, u.insert)(ri, jt),
																Zt
															);
														},
													}),
													(() => {
														const Zt = W();
														return (
															Zt.style.setProperty("display", "flex"),
															Zt.style.setProperty(
																"justify-content",
																"space-between",
															),
															Zt.style.setProperty("align-items", "center"),
															Zt.style.setProperty("gap", "20px"),
															Zt.style.setProperty("width", "100%"),
															Zt.style.setProperty("margin-top", "8px"),
															(0, u.insert)(
																Zt,
																(0, a.createComponent)(n.Show, {
																	get when() {
																		return Ye();
																	},
																	get children() {
																		const ci = J(),
																			ri = ci.firstChild,
																			$i = ri.firstChild,
																			Wt = $i.firstChild,
																			tt = Wt.nextSibling;
																		return (
																			ci.style.setProperty(
																				"position",
																				"relative",
																			),
																			ci.style.setProperty("display", "flex"),
																			ci.style.setProperty("gap", "8px"),
																			ci.style.setProperty(
																				"align-items",
																				"center",
																			),
																			ci.style.setProperty(
																				"justify-content",
																				"space-between",
																			),
																			$i.style.setProperty("display", "flex"),
																			$i.style.setProperty(
																				"margin-right",
																				"4px",
																			),
																			$i.style.setProperty(
																				"align-items",
																				"center",
																			),
																			$i.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			Wt.style.setProperty("font-size", "9px"),
																			tt.style.setProperty("font-size", "9px"),
																			(0, u.insert)(
																				ci,
																				(0, a.createComponent)(s.$dob, {
																					get value() {
																						return Xe();
																					},
																					onToggle: () => It(!Xe()),
																				}),
																				null,
																			),
																			(0, m.effect)(() =>
																				(0, d.className)(
																					tt,
																					l.ThemeIcon.asClassName(
																						f.$ak.liveShare,
																					),
																				),
																			),
																			ci
																		);
																	},
																}),
																null,
															),
															(0, u.insert)(
																Zt,
																(0, a.createComponent)(o.$rdc, {
																	onClick: () => {
																		Ut();
																	},
																	get disabled() {
																		return Gt();
																	},
																	get isLoading() {
																		return Gt();
																	},
																	type: "primary",
																	title: "Confirm",
																	codicon: "\u23CE",
																	extras: {
																		style: {
																			"border-radius": "4px",
																			padding: "4px 6px",
																			"margin-left": "auto",
																		},
																	},
																}),
																null,
															),
															Zt
														);
													})(),
													(() => {
														const Zt = X();
														return (
															Zt.style.setProperty("padding", "4px 6px"),
															Zt.style.setProperty("border-radius", "3px"),
															Zt.style.setProperty("position", "absolute"),
															Zt.style.setProperty("top", "-34px"),
															Zt.style.setProperty("left", "0px"),
															Zt.style.setProperty("font-size", "12px"),
															Zt.style.setProperty(
																"color",
																"var(--vscode-input-foreground)",
															),
															Zt.style.setProperty(
																"background-color",
																"var(--vscode-input-background)",
															),
															Zt
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
				Ke = (et) =>
					(() => {
						const rt = Y(),
							ft = rt.firstChild,
							bt = ft.firstChild,
							nt = ft.nextSibling,
							lt = nt.nextSibling;
						return (
							rt.style.setProperty("display", "flex"),
							rt.style.setProperty("flex-direction", "column"),
							rt.style.setProperty("align-items", "center"),
							rt.style.setProperty("gap", "20px"),
							rt.style.setProperty("margin-bottom", "24px"),
							ft.style.setProperty("width", "100%"),
							ft.style.setProperty("height", "300px"),
							nt.style.setProperty("font-size", "24px"),
							nt.style.setProperty("margin", "0"),
							(0, u.insert)(nt, () => et.title),
							lt.style.setProperty("font-size", "16px"),
							lt.style.setProperty("margin", "0"),
							lt.style.setProperty(
								"color",
								"var(--vscode-descriptionForeground)",
							),
							(0, u.insert)(lt, () => et.body),
							(0, m.effect)(() => (0, E.setAttribute)(bt, "src", et.imgSrc)),
							rt
						);
					})();
			e.$Kfd = Ke;
			function Je() {
				const et = (0, c.$odc)(),
					rt = (ft) => {
						et.reactiveStorageService.setNonPersistentStorage(
							"okToIndexDocsLink",
							ft,
						),
							et.reactiveStorageService.setNonPersistentStorage(
								"showDocsLinkConfirmation",
								!1,
							);
					};
				return (
					(0, h.createEffect)(() => {
						const ft = (bt) => {
							bt.key === "Enter" && rt(!0);
						};
						et.window.document.addEventListener("keydown", ft),
							(0, h.onCleanup)(() => {
								et.window.document.removeEventListener("keydown", ft);
							});
					}),
					(0, a.createComponent)(n.Show, {
						get when() {
							return et.reactiveStorageService.nonPersistentStorage
								.showDocsLinkConfirmation;
						},
						get children() {
							return (0, a.createComponent)(g.$ufd, {
								closeModal: rt,
								disableClickOff: !1,
								get children() {
									return [
										(() => {
											const ft = ie();
											return ft.style.setProperty("font-weight", "600"), ft;
										})(),
										(() => {
											const ft = ne(),
												bt = ft.firstChild,
												nt = bt.nextSibling;
											return (
												ft.style.setProperty("font-size", "14px"),
												ft.style.setProperty("margin", "12px 0px 12px 0px"),
												ft.style.setProperty("text-overflow", "ellipsis"),
												ft.style.setProperty("overflow", "hidden"),
												nt.addEventListener("click", (lt) => {
													lt.preventDefault(),
														et.openerService.open(
															et.reactiveStorageService.nonPersistentStorage
																.potentialIndexLink ?? "",
														);
												}),
												nt.style.setProperty("cursor", "pointer"),
												(0, u.insert)(
													nt,
													() =>
														et.reactiveStorageService.nonPersistentStorage
															.potentialIndexLink,
												),
												ft
											);
										})(),
										(() => {
											const ft = ee(),
												bt = ft.firstChild;
											return (
												(0, u.insert)(
													ft,
													(0, a.createComponent)(o.$rdc, {
														title: "Skip",
														type: "secondary",
														onClick: () => {
															rt(!1);
														},
														extras: {
															style: {
																padding: "8px 12px",
																color: "#bbb",
																"margin-right": "8px",
																"font-size": "14px",
															},
														},
													}),
													null,
												),
												(0, u.insert)(
													ft,
													(0, a.createComponent)(o.$rdc, {
														title: "Index Link \u23CE",
														onClick: () => {
															rt(!0);
														},
														extras: {
															style: {
																padding: "8px 12px",
																"font-size": "14px",
															},
														},
													}),
													null,
												),
												ft
											);
										})(),
									];
								},
							});
						},
					})
				);
			}
			const Te = (et) => {
					const rt = (0, c.$odc)(),
						[ft, bt] = (0, h.createSignal)(!1),
						nt = () => {
							const lt = rt.themeService.getColorTheme().getColor(L.$8P);
							bt(lt ? lt.isLighter() : !1);
						};
					return (
						nt(),
						(0, h.createEffect)(() => {
							const lt = rt.themeService.onDidColorThemeChange((ct) => {
								nt();
							});
							(0, h.onCleanup)(() => {
								lt.dispose();
							});
						}),
						(() => {
							const lt = _(),
								ct = lt.firstChild;
							return (
								lt.addEventListener("click", () => {
									rt.reactiveStorageService.setNonPersistentStorage(
										"cppPopupState",
										"cardState",
										rt.reactiveStorageService.nonPersistentStorage.cppPopupState
											.cardState === "first"
											? "firstzoom"
											: "secondzoom",
									);
								}),
								lt.style.setProperty("overflow", "none"),
								lt.style.setProperty("border-radius", "5px"),
								lt.style.setProperty("cursor", "pointer"),
								ct.style.setProperty("border-radius", "5px"),
								(0, m.effect)(
									(gt) => {
										const ht = ft() ? "" : "crop-just-top-cursor",
											Rt = ft()
												? "https://cursor.com/_next/image?url=%2Fcpp_demo_4mb.gif&w=3840&q=75"
												: "https://cursor.com/_next/image?url=%2Fcpp_demo_4mb_dark_cropped.gif&w=3840&q=75",
											Nt = ft() ? 326 : 269 * 1.177;
										return (
											ht !== gt._v$ && (0, d.className)(ct, (gt._v$ = ht)),
											Rt !== gt._v$2 &&
												(0, E.setAttribute)(ct, "src", (gt._v$2 = Rt)),
											Nt !== gt._v$3 &&
												(0, E.setAttribute)(ct, "height", (gt._v$3 = Nt)),
											gt
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								lt
							);
						})()
					);
				},
				Ee = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage(
								"cppPopupState",
								"cardState",
								"off",
							);
						};
					return (0, a.createComponent)(n.Show, {
						get when() {
							return ["first"].includes(
								rt.reactiveStorageService.nonPersistentStorage.cppPopupState
									.cardState ?? "",
							);
						},
						get children() {
							return (0, a.createComponent)(g.$ufd, {
								closeModal: ft,
								backOpacity: 0.2,
								xOpacity: 0.5,
								balanceSides: !0,
								disableClickOff: !1,
								extras: { style: { width: "500px" } },
								get children() {
									return [
										(() => {
											const bt = te();
											return (
												bt.style.setProperty("opacity", "0.5"),
												bt.style.setProperty("font-size", "12px"),
												bt.style.setProperty("display", "flex"),
												bt.style.setProperty("align-items", "center"),
												bt.style.setProperty("justify-content", "center"),
												bt.style.setProperty("margin-top", "-15px"),
												bt.style.setProperty("margin-bottom", "15px"),
												bt.style.setProperty("cursor", "default"),
												bt
											);
										})(),
										(0, a.createComponent)(Te, {}),
										(() => {
											const bt = Q();
											return (
												bt.style.setProperty("margin", "24px 0px 16px 0px"),
												bt.style.setProperty("font-size", "18px"),
												bt.style.setProperty("cursor", "default"),
												bt
											);
										})(),
										Z(),
										se(),
										(() => {
											const bt = ee(),
												nt = bt.firstChild;
											return (
												bt.style.setProperty("margin-top", "24px"),
												(0, u.insert)(
													bt,
													(0, a.createComponent)(o.$rdc, {
														title: "Ignore",
														type: "secondary",
														onClick: ft,
														extras: {
															style: {
																padding: "8px 12px",
																"margin-right": "8px",
																"font-size": "14px",
															},
														},
													}),
													null,
												),
												(0, u.insert)(
													bt,
													(0, a.createComponent)(k.$18b, {
														buttonProps: {
															title: "Try Cursor Tab",
															extras: {
																style: {
																	padding: "8px 12px",
																	"font-size": "14px",
																},
															},
														},
														loadingProps: { onInputBackground: !0 },
														onClick: async () => {
															rt.telemetryService.publicLogCapture(
																"cppMarketingPopup.clickedToTry",
															),
																await new Promise((lt) => setTimeout(lt, 1e3)),
																rt.commandService.executeCommand(y.$NX),
																rt.commandService.executeCommand(y.$MX),
																rt.reactiveStorageService.setNonPersistentStorage(
																	"cppPopupState",
																	"cardState",
																	"second",
																),
																rt.telemetryService.publicLogCapture(
																	"cppMarketingPopup.didClickedToTry",
																);
														},
													}),
													null,
												),
												bt
											);
										})(),
									];
								},
							});
						},
					});
				},
				Ie = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage(
								"cppPopupState",
								"cardState",
								"off",
							),
								rt.commandService.executeCommand(
									"workbench.action.reloadWindow",
								);
						};
					return (0, a.createComponent)(n.Show, {
						get when() {
							return (
								rt.reactiveStorageService.nonPersistentStorage.cppPopupState
									.cardState === "second"
							);
						},
						get children() {
							return (0, a.createComponent)(g.$ufd, {
								closeModal: ft,
								backOpacity: 0.2,
								xOpacity: 0.5,
								balanceSides: !0,
								disableClickOff: !1,
								extras: { style: { width: "500px" } },
								get children() {
									return [
										(() => {
											const bt = te();
											return (
												bt.style.setProperty("opacity", "0.5"),
												bt.style.setProperty("font-size", "12px"),
												bt.style.setProperty("display", "flex"),
												bt.style.setProperty("align-items", "center"),
												bt.style.setProperty("justify-content", "center"),
												bt.style.setProperty("margin-top", "-15px"),
												bt.style.setProperty("margin-bottom", "15px"),
												bt.style.setProperty("cursor", "default"),
												bt
											);
										})(),
										(0, a.createComponent)(Te, {}),
										(() => {
											const bt = re();
											return (
												bt.style.setProperty("margin", "24px 0px 16px 0px"),
												bt.style.setProperty("font-size", "18px"),
												bt.style.setProperty("cursor", "default"),
												bt
											);
										})(),
										(() => {
											const bt = le(),
												nt = bt.firstChild,
												lt = nt.nextSibling;
											return (
												lt.addEventListener("click", () => {
													rt.openerService.open("https://forum.cursor.com");
												}),
												lt.style.setProperty("cursor", "pointer"),
												bt
											);
										})(),
										(() => {
											const bt = ee(),
												nt = bt.firstChild;
											return (
												bt.style.setProperty("margin-top", "24px"),
												(0, u.insert)(
													bt,
													(0, a.createComponent)(o.$rdc, {
														title: "Done",
														type: "primary",
														onClick: ft,
														extras: {
															style: {
																padding: "8px 12px",
																"font-size": "14px",
															},
														},
													}),
													null,
												),
												bt
											);
										})(),
									];
								},
							});
						},
					});
				},
				Be = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage(
								"cppPopupState",
								"cardState",
								rt.reactiveStorageService.nonPersistentStorage.cppPopupState
									.cardState === "firstzoom"
									? "first"
									: "second",
							);
						},
						[bt, nt] = (0, h.createSignal)(!1),
						lt = () => {
							const ct = rt.themeService.getColorTheme().getColor(L.$8P);
							nt(ct ? ct.isLighter() : !1);
						};
					return (
						lt(),
						(0, h.createEffect)(() => {
							const ct = rt.themeService.onDidColorThemeChange((gt) => {
								lt();
							});
							(0, h.onCleanup)(() => {
								ct.dispose();
							});
						}),
						(0, a.createComponent)(n.Show, {
							get when() {
								return ["firstzoom", "secondzoom"].includes(
									rt.reactiveStorageService.nonPersistentStorage.cppPopupState
										.cardState ?? "",
								);
							},
							get children() {
								return (0, a.createComponent)(g.$ufd, {
									closeModal: ft,
									backOpacity: 0.2,
									xOpacity: 0.5,
									balanceSides: !0,
									disableClickOff: !1,
									get extras() {
										return {
											style: {
												width: "1000px",
												height:
													(
														(1e3 / 500) *
														(bt() ? 326 : 269 * 1.177)
													).toString() + "px",
												"padding-bottom": "12px",
											},
										};
									},
									get children() {
										const ct = oe(),
											gt = ct.firstChild;
										return (
											ct.style.setProperty("overflow", "none"),
											ct.style.setProperty("display", "flex"),
											ct.style.setProperty("align-items", "center"),
											ct.style.setProperty("justify-content", "center"),
											ct.style.setProperty("height", "100%"),
											ct.style.setProperty("width", "100%"),
											gt.addEventListener("click", () => {
												ft();
											}),
											gt.style.setProperty("border-radius", "5px"),
											gt.style.setProperty("cursor", "pointer"),
											(0, m.effect)(
												(ht) => {
													const Rt = bt() ? "" : "crop-just-top-cursor-big",
														Nt = bt()
															? "https://cursor.com/_next/image?url=%2Fcpp_demo_4mb.gif&w=3840&q=75"
															: "https://cursor.com/_next/image?url=%2Fcpp_demo_4mb_dark_cropped.gif&w=3840&q=75",
														jt = (bt() ? 326 : 269 * 1.177) * (980 / 500);
													return (
														Rt !== ht._v$4 &&
															(0, d.className)(gt, (ht._v$4 = Rt)),
														Nt !== ht._v$5 &&
															(0, E.setAttribute)(gt, "src", (ht._v$5 = Nt)),
														jt !== ht._v$6 &&
															(0, E.setAttribute)(gt, "height", (ht._v$6 = jt)),
														ht
													);
												},
												{ _v$4: void 0, _v$5: void 0, _v$6: void 0 },
											),
											ct
										);
									},
								});
							},
						})
					);
				},
				Se = (et) => {
					const rt = (0, c.$odc)(),
						ft = () => {
							rt.reactiveStorageService.setNonPersistentStorage(
								"mentionLinkToolbarInfo",
								null,
							);
						},
						bt = (0, N.$f$b)(rt.themeService);
					return (0, a.createComponent)(n.Show, {
						get when() {
							return rt.reactiveStorageService.nonPersistentStorage
								.mentionLinkToolbarInfo;
						},
						children: (nt) => [
							(() => {
								const lt = F();
								return (
									lt.addEventListener("click", ft),
									lt.style.setProperty("top", "0"),
									lt.style.setProperty("left", "0"),
									lt.style.setProperty("bottom", "0"),
									lt.style.setProperty("right", "0"),
									lt.style.setProperty("position", "fixed"),
									lt.style.setProperty("z-index", "100000"),
									lt
								);
							})(),
							(() => {
								const lt = ae(),
									ct = lt.firstChild,
									gt = ct.firstChild,
									ht = ct.nextSibling,
									Rt = ht.firstChild;
								return (
									lt.style.setProperty("position", "fixed"),
									lt.style.setProperty("z-index", "100001"),
									lt.style.setProperty("display", "flex"),
									lt.style.setProperty("align-items", "center"),
									lt.style.setProperty("gap", "2px"),
									lt.style.setProperty("padding", "2px"),
									lt.style.setProperty("border-radius", "4px"),
									lt.style.setProperty(
										"background-color",
										"var(--vscode-editor-background)",
									),
									ct.addEventListener("click", () => {
										const Nt = nt().link;
										rt.openerService.open(Nt), ft();
									}),
									gt.style.setProperty("font-size", "10px"),
									ht.addEventListener("click", () => {
										nt().onRemove(), ft();
									}),
									Rt.style.setProperty("font-size", "10px"),
									(0, m.effect)(
										(Nt) => {
											const jt = nt().y + "px",
												ti = nt().x + "px",
												kt = "1px solid " + bt(),
												hi = l.ThemeIcon.asClassName(f.$ak.linkExternal),
												Kt = l.ThemeIcon.asClassName(f.$ak.close);
											return (
												jt !== Nt._v$7 &&
													((Nt._v$7 = jt) != null
														? lt.style.setProperty("top", jt)
														: lt.style.removeProperty("top")),
												ti !== Nt._v$8 &&
													((Nt._v$8 = ti) != null
														? lt.style.setProperty("left", ti)
														: lt.style.removeProperty("left")),
												kt !== Nt._v$9 &&
													((Nt._v$9 = kt) != null
														? lt.style.setProperty("border", kt)
														: lt.style.removeProperty("border")),
												hi !== Nt._v$10 &&
													(0, d.className)(gt, (Nt._v$10 = hi)),
												Kt !== Nt._v$11 &&
													(0, d.className)(Rt, (Nt._v$11 = Kt)),
												Nt
											);
										},
										{
											_v$7: void 0,
											_v$8: void 0,
											_v$9: void 0,
											_v$10: void 0,
											_v$11: void 0,
										},
									),
									lt
								);
							})(),
						],
					});
				};
			function ke(et) {
				const rt = (0, c.$odc)(),
					[ft, bt] = (0, h.createSignal)();
				return (
					(0, h.createEffect)(() => {
						rt.aiService
							.aiClient()
							.then(async (lt) => {
								const ct = await lt.checkUsageBasedPrice({
									usageEventDetails: et.details,
								});
								bt(ct);
							})
							.catch((lt) => console.warn(lt));
					}),
					(0, a.createComponent)(n.Show, {
						get when() {
							return ft();
						},
						children: (nt) =>
							(() => {
								const lt = pe(),
									ct = lt.firstChild,
									gt = ct.nextSibling,
									ht = gt.nextSibling,
									Rt = ht.nextSibling,
									Nt = Rt.nextSibling;
								return (
									(0, u.insert)(
										lt,
										(0, a.createComponent)(h.Switch, {
											get children() {
												return [
													(0, a.createComponent)(h.Match, {
														get when() {
															return (
																et.details.feature.case === "chat" &&
																et.details.feature.value
															);
														},
														children: (jt) => [
															"chat requests with ",
															(0, C.memo)(() => jt().modelIntent),
														],
													}),
													(0, a.createComponent)(h.Match, {
														get when() {
															return (
																et.details.feature.case === "cmdK" &&
																et.details.feature.value
															);
														},
														children: (jt) => [
															"cmd-k requests with ",
															(0, C.memo)(() => jt().modelIntent),
														],
													}),
													(0, a.createComponent)(h.Match, {
														get when() {
															return (
																et.details.feature.case === "contextChat" &&
																et.details.feature.value
															);
														},
														children: (jt) => [
															"context chat requests with ",
															(0, C.memo)(() => jt().modelIntent),
														],
													}),
													(0, a.createComponent)(h.Match, {
														get when() {
															return (
																et.details.feature.case === "terminalCmdK" &&
																et.details.feature.value
															);
														},
														children: (jt) => [
															"terminal cmd-k requests with ",
															(0, C.memo)(() => jt().modelIntent),
														],
													}),
													(0, a.createComponent)(h.Match, {
														get when() {
															return (
																et.details.feature.case === "interpreterChat" &&
																et.details.feature.value
															);
														},
														children: (jt) => [
															"interpreter chat requests with ",
															(0, C.memo)(() => jt().modelIntent),
														],
													}),
													(0, a.createComponent)(h.Match, {
														get when() {
															return (
																et.details.feature.case === "slashEdit" &&
																et.details.feature.value
															);
														},
														children: (jt) => [
															"slash edit requests with ",
															(0, C.memo)(() => jt().modelIntent),
														],
													}),
													(0, a.createComponent)(h.Match, {
														when: !0,
														get children() {
															return JSON.stringify(et.details);
														},
													}),
												];
											},
										}),
										gt,
									),
									(0, u.insert)(lt, () => nt().markdownResponse, Rt),
									lt
								);
							})(),
					})
				);
			}
			function Ue(et) {
				return (() => {
					const rt = $e(),
						ft = rt.firstChild;
					return (
						rt.addEventListener("click", (bt) => {
							et.isLoading || et.onToggle(!et.value);
						}),
						rt.style.setProperty("display", "flex"),
						rt.style.setProperty("align-items", "center"),
						rt.style.setProperty("gap", "10px"),
						rt.style.setProperty("justify-content", "space-between"),
						ft.style.setProperty("font-size", "12px"),
						ft.style.setProperty("color", "var(--vscode-input-foreground)"),
						(0, u.insert)(ft, () => et.title),
						(0, u.insert)(
							rt,
							(0, a.createComponent)(U.$XCc, {
								get value() {
									return et.value;
								},
								onChange: () => {},
							}),
							null,
						),
						(0, m.effect)(
							(bt) => {
								const nt = et.isLoading ? "default" : "pointer",
									lt = et.isLoading ? 0.7 : 1;
								return (
									nt !== bt._v$12 &&
										((bt._v$12 = nt) != null
											? rt.style.setProperty("cursor", nt)
											: rt.style.removeProperty("cursor")),
									lt !== bt._v$13 &&
										((bt._v$13 = lt) != null
											? rt.style.setProperty("opacity", lt)
											: rt.style.removeProperty("opacity")),
									bt
								);
							},
							{ _v$12: void 0, _v$13: void 0 },
						),
						rt
					);
				})();
			}
			function qe() {
				const et = (0, c.$odc)(),
					[rt, ft] = (0, h.createSignal)(void 0),
					[bt, nt] = (0, h.createSignal)(""),
					[lt, ct] = (0, h.createSignal)(!1),
					[gt, ht] = (0, h.createSignal)(null),
					[Rt, Nt] = (0, h.createSignal)(null),
					[jt, ti] = (0, h.createSignal)(void 0),
					[kt, hi] = (0, h.createSignal)(!0),
					Kt = async () => {
						try {
							const It = await et.cursorAuthenticationService.dashboardClient(),
								Lt =
									et.cursorAuthenticationService.membershipType() ===
									b.MembershipType.ENTERPRISE
										? et.reactiveStorageService.applicationUserPersistentStorage
												.aiSettings.teamIds
										: [],
								xt = await It.getHardLimit({ teamId: Lt?.at(0) });
							xt.noUsageBasedAllowed
								? (ft("no-usage-based"), nt("$0"))
								: (ft(xt.hardLimit),
									nt("$" + (xt.hardLimit?.toString() || "")));
						} catch (It) {
							console.error("Error fetching hard limit:", It);
						}
					},
					di = async (It) => {
						const Lt =
							It === "$0" ? "no-usage-based" : parseInt(It.substring(1));
						ct(!0), Nt(null);
						try {
							const xt = await et.cursorAuthenticationService.dashboardClient(),
								Vt =
									et.cursorAuthenticationService.membershipType() ===
									b.MembershipType.ENTERPRISE
										? et.reactiveStorageService.applicationUserPersistentStorage
												.aiSettings.teamIds
										: [];
							await xt.setHardLimit({
								teamId: Vt?.at(0),
								hardLimit: Lt === "no-usage-based" ? void 0 : Lt,
								noUsageBasedAllowed: Lt === "no-usage-based",
							}),
								await Kt(),
								await ze(),
								ct(!1),
								ht(!0),
								setTimeout(() => ht(null), 2e3);
						} catch (xt) {
							ct(!1), ht(!1);
							let Vt = xt instanceof Error ? xt.message : String(xt);
							if (xt instanceof R.ConnectError) {
								const Bt = (0, O.$X6b)(xt);
								Bt?.details &&
									(Vt = `${Bt.details.title} ${Bt.details.detail}`);
							}
							Nt(Vt);
						}
					},
					Ye = () => {
						const It = rt();
						di(It === "no-usage-based" ? "$50" : "$0");
					},
					ze = async () => {
						try {
							const It = await et.cursorAuthenticationService.dashboardClient(),
								Lt =
									et.cursorAuthenticationService.membershipType() ===
									b.MembershipType.ENTERPRISE
										? et.reactiveStorageService.applicationUserPersistentStorage
												.aiSettings.teamIds
										: [],
								xt = await It.getUsageBasedPremiumRequests({
									teamId: Lt?.at(0),
								});
							ti(xt.usageBasedPremiumRequests);
						} catch {
							ti(void 0);
						}
					},
					Xe = async () => {
						ct(!0), Nt(null);
						try {
							const It = await et.cursorAuthenticationService.dashboardClient(),
								Lt =
									et.cursorAuthenticationService.membershipType() ===
									b.MembershipType.ENTERPRISE
										? et.reactiveStorageService.applicationUserPersistentStorage
												.aiSettings.teamIds
										: [];
							await It.setUsageBasedPremiumRequests({
								teamId: Lt?.at(0),
								usageBasedPremiumRequests: !jt(),
							}),
								await ze(),
								ct(!1),
								ht(!0),
								setTimeout(() => ht(null), 2e3);
						} catch (It) {
							ct(!1), ht(!1);
							let Lt = It instanceof Error ? It.message : String(It);
							if (It instanceof R.ConnectError) {
								const xt = (0, O.$X6b)(It);
								xt?.details &&
									(Lt = `${xt.details.title} ${xt.details.detail}`);
							}
							Nt(Lt);
						}
					};
				return (
					(0, h.onMount)(async () => {
						try {
							await Promise.all([Kt(), ze()]);
						} finally {
							hi(!1);
						}
					}),
					(() => {
						const It = F();
						return (
							It.style.setProperty("display", "flex"),
							It.style.setProperty("flex-direction", "column"),
							It.style.setProperty("gap", "1rem"),
							It.style.setProperty("padding", "1rem 0px"),
							(0, u.insert)(
								It,
								(0, a.createComponent)(n.Show, {
									get when() {
										return !kt();
									},
									get fallback() {
										return (() => {
											const Lt = F();
											return (
												Lt.style.setProperty("display", "flex"),
												Lt.style.setProperty("align-items", "center"),
												Lt.style.setProperty("justify-content", "center"),
												Lt.style.setProperty("height", "100px"),
												(0, u.insert)(
													Lt,
													(0, a.createComponent)($.$Y8b, {
														onInputBackground: !0,
													}),
												),
												Lt
											);
										})();
									},
									get children() {
										return [
											(0, a.createComponent)(Ue, {
												title: "Enable usage-based pricing",
												get value() {
													return typeof rt() == "number";
												},
												onToggle: Ye,
												get isLoading() {
													return lt();
												},
											}),
											(0, C.memo)(
												() =>
													(0, C.memo)(
														() => typeof rt() == "number" && jt() !== void 0,
													)() &&
													(0, a.createComponent)(Ue, {
														title:
															"Enable usage-based pricing for premium models",
														get value() {
															return jt() ?? !1;
														},
														onToggle: Xe,
														get isLoading() {
															return lt();
														},
													}),
											),
											(() => {
												const Lt = ue(),
													xt = Lt.firstChild,
													Vt = xt.nextSibling,
													Bt = Vt.firstChild;
												return (
													Lt.style.setProperty("display", "flex"),
													Lt.style.setProperty("flex-direction", "column"),
													Lt.style.setProperty("gap", "4px"),
													xt.style.setProperty("font-size", "12px"),
													xt.style.setProperty(
														"color",
														"var(--vscode-input-foreground)",
													),
													Vt.style.setProperty("display", "flex"),
													Vt.style.setProperty("align-items", "center"),
													Vt.style.setProperty("gap", "4px"),
													Vt.style.setProperty("width", "100%"),
													Bt.addEventListener("keydown", (Gt) => {
														Gt.key === "Enter" && di(bt());
													}),
													Bt.addEventListener("blur", () => {
														bt() !== "$" + (rt()?.toString() || "0") &&
															di(bt());
													}),
													Bt.addEventListener("input", (Gt) => {
														nt(Gt.target.value);
													}),
													Bt.style.setProperty(
														"color",
														"var(--vscode-input-foreground)",
													),
													Bt.style.setProperty(
														"background-color",
														"var(--vscode-input-background)",
													),
													Bt.style.setProperty(
														"border",
														"1px solid var(--vscode-input-border)",
													),
													Bt.style.setProperty("border-radius", "2px"),
													Bt.style.setProperty("font-size", "12px"),
													Bt.style.setProperty("padding", "4px"),
													Bt.style.setProperty("box-sizing", "border-box"),
													Bt.style.setProperty("height", "22px"),
													Bt.style.setProperty("outline", "none"),
													Bt.style.setProperty("flex", "1"),
													(0, u.insert)(
														Vt,
														(0, a.createComponent)(o.$rdc, {
															get title() {
																return (0, C.memo)(() => !!lt())()
																	? "Saving..."
																	: gt()
																		? "Saved \u2713"
																		: "Save";
															},
															onClick: () => {
																rt() === "no-usage-based" ||
																	lt() ||
																	gt() !== null ||
																	di(bt());
															},
															style: {
																"font-size": "12px",
																padding: "2px 6px",
																height: "22px",
																"box-sizing": "border-box",
															},
														}),
														null,
													),
													(0, u.insert)(
														Lt,
														(0, a.createComponent)(n.Show, {
															get when() {
																return Rt();
															},
															get children() {
																const Gt = ye();
																return (
																	Gt.style.setProperty(
																		"color",
																		"var(--vscode-errorForeground)",
																	),
																	Gt.style.setProperty("font-size", "12px"),
																	(0, u.insert)(Gt, Rt),
																	Gt
																);
															},
														}),
														null,
													),
													(0, m.effect)(
														(Gt) => {
															const Mt =
																	rt() === "no-usage-based" || lt() ? 0.5 : 1,
																Ut = rt() === "no-usage-based" || lt();
															return (
																Mt !== Gt._v$14 &&
																	((Gt._v$14 = Mt) != null
																		? Lt.style.setProperty("opacity", Mt)
																		: Lt.style.removeProperty("opacity")),
																Ut !== Gt._v$15 &&
																	(Bt.disabled = Gt._v$15 = Ut),
																Gt
															);
														},
														{ _v$14: void 0, _v$15: void 0 },
													),
													(0, m.effect)(() => (Bt.value = bt())),
													Lt
												);
											})(),
											(() => {
												const Lt = fe(),
													xt = Lt.firstChild,
													Vt = xt.nextSibling;
												return (
													Lt.style.setProperty("font-size", "12px"),
													Vt.addEventListener("click", () => {
														try {
															let Bt = D.URI.parse(
																et.cursorCredsService.getSettingsUrl(),
															);
															et.openerService.open(Bt, {
																fromUserGesture: !0,
															});
														} catch (Bt) {
															console.error("error", Bt);
														}
													}),
													Vt.style.setProperty("display", "inline"),
													Vt.style.setProperty(
														"color",
														"var(--vscode-textLink-foreground)",
													),
													Vt.style.setProperty("cursor", "pointer"),
													(0, m.effect)(() =>
														(rt() === "no-usage-based" || lt() ? 0.5 : 1) !=
														null
															? Lt.style.setProperty(
																	"opacity",
																	rt() === "no-usage-based" || lt() ? 0.5 : 1,
																)
															: Lt.style.removeProperty("opacity"),
													),
													Lt
												);
											})(),
										];
									},
								}),
							),
							It
						);
					})()
				);
			}
			function Ae() {
				const et = (0, c.$odc)(),
					rt = () => {
						et.reactiveStorageService.setNonPersistentStorage(
							"showUsageBasedPricingModal",
							void 0,
						);
					};
				return (
					(0, h.createEffect)(() => {
						console.log("UsageBasedPricingModal"),
							console.log(
								et.reactiveStorageService.nonPersistentStorage
									.showUsageBasedPricingModal,
							);
					}),
					(0, a.createComponent)(n.Show, {
						get when() {
							return et.reactiveStorageService.nonPersistentStorage
								.showUsageBasedPricingModal;
						},
						children: (ft) =>
							(0, a.createComponent)(g.$ufd, {
								closeModal: rt,
								backOpacity: 0.2,
								xOpacity: 0.5,
								disableClickOff: !1,
								center: !0,
								disableX: !0,
								extras: { style: { width: "300px", padding: "20px" } },
								get children() {
									return [
										(() => {
											const bt = me(),
												nt = bt.firstChild,
												lt = nt.firstChild,
												ct = lt.nextSibling;
											return (
												bt.style.setProperty("display", "flex"),
												bt.style.setProperty("flex-direction", "column"),
												bt.style.setProperty("gap", "8px"),
												nt.style.setProperty("font-size", "16px"),
												nt.style.setProperty("display", "flex"),
												nt.style.setProperty("align-items", "center"),
												nt.style.setProperty(
													"justify-content",
													"space-between",
												),
												nt.style.setProperty("cursor", "default"),
												lt.style.setProperty("font-weight", "500"),
												ct.addEventListener("click", rt),
												ct.style.setProperty("cursor", "pointer"),
												ct.style.setProperty("font-size", "14px"),
												(0, m.effect)(() =>
													(0, d.className)(
														ct,
														`${l.ThemeIcon.asClassName(f.$ak.x)} clickable`,
													),
												),
												bt
											);
										})(),
										(0, a.createComponent)(n.Show, {
											get when() {
												return (() => {
													const bt = ft();
													return bt !== "justshow" && bt;
												})();
											},
											children: (bt) =>
												(0, a.createComponent)(ke, {
													get details() {
														return bt();
													},
												}),
										}),
										(0, a.createComponent)(qe, {}),
									];
								},
							}),
					})
				);
			}
			function Me() {
				const et = (0, c.$odc)(),
					rt = () => {
						et.reactiveStorageService.setNonPersistentStorage(
							"showTurboModeModal",
							void 0,
						);
					};
				return (0, a.createComponent)(n.Show, {
					get when() {
						return et.reactiveStorageService.nonPersistentStorage
							.showTurboModeModal;
					},
					children: (ft) =>
						(0, a.createComponent)(g.$ufd, {
							closeModal: rt,
							backOpacity: 0.2,
							xOpacity: 0.5,
							balanceSides: !0,
							disableClickOff: !1,
							center: !0,
							extras: { style: { width: "500px" } },
							get children() {
								return [
									(() => {
										const bt = ve();
										return (
											bt.style.setProperty("opacity", "0.5"),
											bt.style.setProperty("font-size", "12px"),
											bt.style.setProperty("display", "flex"),
											bt.style.setProperty("align-items", "center"),
											bt.style.setProperty("justify-content", "center"),
											bt.style.setProperty("margin-top", "-15px"),
											bt.style.setProperty("margin-bottom", "15px"),
											bt.style.setProperty("cursor", "default"),
											bt
										);
									})(),
									ge(),
									(0, a.createComponent)(De, {}),
								];
							},
						}),
				});
			}
			function De() {
				const et = (0, c.$odc)();
				return (() => {
					const rt = be(),
						ft = rt.firstChild,
						bt = ft.firstChild;
					return (
						rt.style.setProperty("display", "flex"),
						rt.style.setProperty("flex-direction", "column"),
						rt.style.setProperty("gap", "10px"),
						rt.style.setProperty("margin-bottom", "10px"),
						rt.style.setProperty("margin-top", "20px"),
						ft.style.setProperty("display", "flex"),
						ft.style.setProperty("align-items", "center"),
						ft.style.setProperty("gap", "10px"),
						bt.style.setProperty("margin-right", "8px"),
						bt.style.setProperty("font-size", "14px"),
						bt.style.setProperty("color", "var(--vscode-input-foreground)"),
						(0, u.insert)(
							ft,
							(0, a.createComponent)(s.$dob, {
								get value() {
									return (
										et.reactiveStorageService.applicationUserPersistentStorage
											.turboModeOptions.useTurboMode ?? !1
									);
								},
								onToggle: () => {
									et.reactiveStorageService.setApplicationUserPersistentStorage(
										"turboModeOptions",
										"useTurboMode",
										!et.reactiveStorageService.applicationUserPersistentStorage
											.turboModeOptions.useTurboMode,
									);
								},
							}),
							null,
						),
						rt
					);
				})();
			}
			const Re = () => {
				const et = (0, c.$odc)();
				let rt;
				return (0, a.createComponent)(n.Show, {
					get when() {
						return et.reactiveStorageService.nonPersistentStorage
							.showingInviteModal;
					},
					get children() {
						return [
							(() => {
								const ft = Ce();
								return (
									ft.addEventListener("click", (bt) => {
										et.reactiveStorageService.setNonPersistentStorage(
											"showingInviteModal",
											!1,
										),
											bt.stopPropagation();
									}),
									ft.style.setProperty("z-index", "1000003"),
									ft
								);
							})(),
							(() => {
								const ft = Le(),
									bt = rt;
								return (
									typeof bt == "function" ? (0, w.use)(bt, ft) : (rt = ft),
									ft.style.setProperty("position", "absolute"),
									ft.style.setProperty("z-index", "1000004"),
									ft.style.setProperty("top", "50%"),
									ft.style.setProperty("left", "50%"),
									ft.style.setProperty("transform", "translate(-50%, -50%)"),
									ft.style.setProperty("border-radius", "5px"),
									ft.style.setProperty("font-size", "12px"),
									ft.style.setProperty(
										"background-color",
										"var(--vscode-sideBar-background)",
									),
									ft.style.setProperty(
										"border",
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									),
									ft.style.setProperty("color", "var(--vscode-foreground)"),
									ft.style.setProperty(
										"box-shadow",
										"0 0 8px 2px var(--vscode-widget-shadow)",
									),
									ft.style.setProperty("overflow", "hidden"),
									ft.style.setProperty("display", "flex"),
									ft.style.setProperty("flex-direction", "column"),
									(0, u.insert)(
										ft,
										(0, a.createComponent)(M.$Ifd, {
											setShowInvite: (nt) => {
												et.reactiveStorageService.setNonPersistentStorage(
													"showingInviteModal",
													nt,
												);
											},
										}),
									),
									ft
								);
							})(),
						];
					},
				});
			};
			function je() {
				const et = (0, c.$odc)(),
					rt = () => {
						et.reactiveStorageService.setNonPersistentStorage(
							"showingCppUpsell",
							!1,
						);
					};
				return (0, a.createComponent)(n.Show, {
					get when() {
						return et.reactiveStorageService.nonPersistentStorage
							.showingCppUpsell;
					},
					get children() {
						const ft = Fe(),
							bt = ft.firstChild,
							nt = bt.firstChild,
							lt = nt.firstChild,
							ct = lt.nextSibling,
							gt = ct.firstChild,
							ht = gt.nextSibling,
							Rt = ht.nextSibling,
							Nt = Rt.firstChild,
							jt = Nt.firstChild,
							ti = Nt.nextSibling,
							kt = ti.firstChild,
							hi = kt.firstChild,
							Kt = Rt.nextSibling;
						return (
							ft.addEventListener("click", (di) => {
								di.stopPropagation();
							}),
							ft.style.setProperty("background-color", "rgba(0, 0, 0, 0.5)"),
							bt.addEventListener("click", (di) => {
								di.stopPropagation();
							}),
							bt.style.setProperty("padding", "32px 24px 12px 24px"),
							lt.addEventListener("click", () => {
								rt();
							}),
							gt.style.setProperty("font-size", "18px"),
							gt.style.setProperty("margin-bottom", "24px"),
							gt.style.setProperty("color", "var(--vscode-foreground)"),
							ht.style.setProperty("font-size", "14px"),
							ht.style.setProperty("line-height", "1.5"),
							Rt.style.setProperty("display", "flex"),
							Rt.style.setProperty("grid-template-columns", "1fr 1fr"),
							Rt.style.setProperty("margin-top", "48px"),
							Rt.style.setProperty("justify-content", "right"),
							Rt.style.setProperty("align-items", "center"),
							Rt.style.setProperty("gap", "12px"),
							Nt.style.setProperty("display", "flex"),
							Nt.style.setProperty("justify-content", "center"),
							jt.addEventListener("click", () => {
								rt();
							}),
							jt.style.setProperty("background-color", "transparent"),
							jt.style.setProperty("border", "none"),
							jt.style.setProperty("cursor", "pointer"),
							jt.style.setProperty("color", "var(--vscode-foreground)"),
							ti.style.setProperty("display", "flex"),
							ti.style.setProperty("justify-content", "center"),
							(0, i.addEventListener)(
								kt,
								"click",
								et.cursorAuthenticationService.pay,
							),
							kt.style.setProperty(
								"background-color",
								"var(--vscode-button-background)",
							),
							kt.style.setProperty("border", "none"),
							kt.style.setProperty("border-radius", "5px"),
							kt.style.setProperty("color", "var(--vscode-button-foreground)"),
							kt.style.setProperty("cursor", "pointer"),
							kt.style.setProperty("padding", "10px 20px"),
							kt.style.setProperty("gap", "7px"),
							kt.style.setProperty("display", "flex"),
							kt.style.setProperty("align-items", "center"),
							hi.style.setProperty("color", "var(--vscode-button-foreground)"),
							Kt.style.setProperty("font-size", "12px"),
							Kt.style.setProperty("opacity", "0.5"),
							(0, m.effect)(
								(di) => {
									const Ye = [
											"error__dismiss",
											l.ThemeIcon.asClassName(f.$ak.x),
										].join(" "),
										ze = l.ThemeIcon.asClassName(f.$ak.rocket);
									return (
										Ye !== di._v$16 && (0, d.className)(lt, (di._v$16 = Ye)),
										ze !== di._v$17 && (0, d.className)(hi, (di._v$17 = ze)),
										di
									);
								},
								{ _v$16: void 0, _v$17: void 0 },
							),
							ft
						);
					},
				});
			}
			const Ve = (et) => [
				(0, a.createComponent)(Oe, {}),
				(0, a.createComponent)(je, {}),
				(0, a.createComponent)(He, {}),
				(0, a.createComponent)(Je, {}),
				(0, a.createComponent)(Se, {}),
				(0, a.createComponent)(xe, {}),
				(0, a.createComponent)(P.$Hfd, {}),
				(0, a.createComponent)(Ee, {}),
				(0, a.createComponent)(Ie, {}),
				(0, a.createComponent)(Be, {}),
				(0, a.createComponent)(Ae, {}),
				(0, a.createComponent)(Re, {}),
				(0, a.createComponent)(B.$Jfd, {}),
			];
			function Ze({
				container: et,
				instantiationService: rt,
				mainProcessService: ft,
			}) {
				return (0, c.$ndc)(
					() => (0, a.createComponent)(Ve, { mainProcessService: ft }),
					et,
					rt,
				);
			}
		},
	),
		define(
			de[4333],
			he([1, 0, 30, 55, 52, 25, 96, 21, 31, 45, 180, 5, 4332, 371, 3940]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nfd = void 0);
				let n = class {
					constructor(p, o, f, b, s, l, y, $) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.d = b),
							(this.e = s),
							(this.f = l),
							(this.g = y),
							(this.h = $);
						let v = this.f.mainContainer;
						v &&
							(0, h.$Mfd)({
								container: v,
								instantiationService: this.g,
								mainProcessService: this.h,
							});
					}
				};
				(e.$Nfd = n),
					(e.$Nfd = n =
						Ne(
							[
								j(0, E.$Vi),
								j(1, C.$mEb),
								j(2, d.$lq),
								j(3, m.$ek),
								j(4, r.$0zb),
								j(5, u.$jEb),
								j(6, a.$Li),
								j(7, c.$V8c),
							],
							n,
						)),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(n, w.LifecyclePhase.Restored);
			},
		),
		define(
			de[4334],
			he([
				1, 0, 2, 2, 2, 2, 13, 147, 36, 2623, 14, 650, 1375, 242, 47, 1073, 76,
				134, 4295, 270, 523, 19, 2365,
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
					(e.$cDc = x),
					(r = mt(r));
				const y = (0, t.template)("<div>Loading "),
					$ = (0, t.template)("<div>"),
					v = (0, t.template)(
						'<div class="settings__item_link">Configure ignored files',
					),
					S = (0, t.template)("<div><div><span>"),
					I = (0, t.template)(
						"<div>Not automatically computing index because number of files is <!>.",
					),
					T = (0, t.template)("<div>error: "),
					P = (0, t.template)(
						'<div class="indexing_progress__label-container">',
					),
					k = (0, t.template)('<div class="show-file-icons"><div>'),
					L = (0, t.template)("<div><div>"),
					D = (0, t.template)('<div class="indexing-view">'),
					M = (0, t.template)("<div>Setting up indexing "),
					N = (0, t.template)(
						'<div class="advanced-settings-dropdown__header"><i class="codicon codicon-chevron-up"></i>Hide Settings',
					),
					A = (0, t.template)('<span class="openai-switch-text">Enabled'),
					R = (0, t.template)(
						'<span class="settings__item_link">See all included files.',
					),
					O = (0, t.template)('<span class="settings__item_link"> debug view.'),
					B = (0, t.template)(
						'<div class="advanced-indexing-container"><div class="settings__item"><div><div> </div></div></div><div class="settings__item"><div><div><span class="settings__item_link">Configure ignored files</span></div></div></div><div class="settings__item"><div><div>',
					),
					U = (0, t.template)(
						'<div class="advanced-settings-dropdown__header"><i class="codicon codicon-chevron-down"></i>Show Settings',
					),
					z = (0, t.template)('<span class="openai-switch-text">Disabled'),
					F = "Too many files to upload.";
				function x() {
					const J = (0, m.$odc)(),
						W = J.reactiveStorageService,
						X = J.repositoryService,
						Y = (0, C.createMemo)(
							() => W.nonPersistentStorage.repositoryIndexingError?.message,
						),
						[ie, ne] = (0, C.createSignal)(!1),
						ee = (0, C.createMemo)(() =>
							parseFloat(
								(
									(W.nonPersistentStorage.mainLocalRepositoryProgress
										?.progress ?? 0) * 100
								).toFixed(1),
							),
						),
						_ = (0, C.createMemo)(
							() => W.nonPersistentStorage.repositoryIndexingStatus,
						);
					async function te() {
						const Q =
							J.workspaceContextService.resolveRelativePath(".cursorignore");
						if (!(await J.fileService.exists(Q))) {
							await J.fileService.createFile(Q);
							const se =
								new TextEncoder().encode(`# Add directories or file patterns to ignore during indexing (e.g. foo/ or *.csv)
`);
							await J.fileService.writeFile(Q, p.$Te.wrap(se));
						}
						J.openerService.open(Q);
					}
					return (() => {
						const Q = D();
						return (
							(0, w.insert)(
								Q,
								(0, E.createComponent)(C.Switch, {
									get children() {
										return [
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "loading"
													);
												},
												get children() {
													const Z = y(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("display", "flex"),
														Z.style.setProperty("margin-bottom", "8px"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(c.$C$b, { show: !0 }),
															null,
														),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "not-indexed"
													);
												},
												get children() {
													const Z = $();
													return (
														Z.style.setProperty("display", "flex"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(d.$rdc, {
																style: { width: "fit-content" },
																title: "Compute Index",
																onClick: () => {
																	J.reactiveStorageService.setWorkspaceUserPersistentStorage(
																		"onboardingMetadata",
																		{ shouldHideWarning: !0 },
																	),
																		X.indexMainRepository();
																},
																type: "primary",
															}),
														),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "error"
													);
												},
												get children() {
													return [
														(0, E.createComponent)(d.$rdc, {
															style: { width: "fit-content", margin: "8px" },
															title: "Retry Index",
															get codicon() {
																return u.$ak.refresh;
															},
															onClick: () => {
																J.reactiveStorageService.setWorkspaceUserPersistentStorage(
																	"onboardingMetadata",
																	{ shouldHideWarning: !0 },
																),
																	X.indexMainRepository();
															},
															type: "primary",
														}),
														(() => {
															const Z = S(),
																se = Z.firstChild,
																re = se.firstChild;
															return (
																Z.style.setProperty("margin-bottom", "10px"),
																Z.style.setProperty(
																	"color",
																	"var(--vscode-errorForeground)",
																),
																se.style.setProperty("display", "flex"),
																se.style.setProperty(
																	"justify-content",
																	"space-between",
																),
																(0, w.insert)(re, Y),
																(0, w.insert)(
																	se,
																	(0, E.createComponent)(C.Show, {
																		get when() {
																			return (
																				(0, i.memo)(() => Y() === F)() &&
																				ie() === !1
																			);
																		},
																		get children() {
																			const le = v();
																			return (
																				le.addEventListener("click", () => {
																					te();
																				}),
																				le
																			);
																		},
																	}),
																	null,
																),
																Z
															);
														})(),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "not-auto-indexing"
													);
												},
												get children() {
													return [
														(0, E.createComponent)(d.$rdc, {
															style: { width: "fit-content", margin: "8px" },
															title: "Do Compute Index",
															onClick: () => {
																J.reactiveStorageService.setWorkspaceUserPersistentStorage(
																	"onboardingMetadata",
																	{ shouldHideWarning: !0 },
																),
																	X.indexMainRepository();
															},
															type: "primary",
														}),
														(() => {
															const Z = I(),
																se = Z.firstChild,
																re = se.nextSibling,
																le = re.nextSibling;
															return (
																Z.style.setProperty("margin-bottom", "10px"),
																Z.style.setProperty(
																	"color",
																	"var(--vscode-errorForeground)",
																),
																(0, w.insert)(
																	Z,
																	() =>
																		W.nonPersistentStorage
																			.repositoryIndexingStatus?.case ===
																		"not-auto-indexing"
																			? W.nonPersistentStorage
																					.repositoryIndexingStatus?.numFiles
																			: 0,
																	re,
																),
																Z
															);
														})(),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "error"
													);
												},
												get children() {
													const Z = T(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("margin-bottom", "10px"),
														Z.style.setProperty(
															"color",
															"var(--vscode-errorForeground)",
														),
														(0, w.insert)(Z, Y, null),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "indexing" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "out-of-sync" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "paused" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "creating-index" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "indexing-setup"
													);
												},
												get children() {
													const Z = L(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("margin-top", "6px"),
														Z.style.setProperty("margin-right", "10px"),
														Z.style.setProperty("margin-bottom", "6px"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return (
																		W.nonPersistentStorage
																			.mainLocalRepositoryProgress?.progress !==
																			void 0 &&
																		(W.nonPersistentStorage
																			.mainLocalRepositoryProgress?.progress >
																			0 ||
																			W.nonPersistentStorage
																				.repositoryIndexingStatus?.case ===
																				"indexing")
																	);
																},
																get fallback() {
																	return (() => {
																		const re = M(),
																			le = re.firstChild;
																		return (
																			(0, w.insert)(
																				re,
																				(0, E.createComponent)(c.$C$b, {
																					show: !0,
																				}),
																				null,
																			),
																			re
																		);
																	})();
																},
																get children() {
																	return (0, E.createComponent)(r.Root, {
																		get value() {
																			return ee();
																		},
																		class: "progress",
																		get children() {
																			return [
																				(() => {
																					const re = P();
																					return (
																						(0, w.insert)(
																							re,
																							(0, E.createComponent)(r.Label, {
																								class:
																									"indexing_progress__label",
																								get children() {
																									return (0, E.createComponent)(
																										C.Switch,
																										{
																											get children() {
																												return [
																													(0,
																													E.createComponent)(
																														C.Match,
																														{
																															get when() {
																																return (
																																	W
																																		.nonPersistentStorage
																																		.repositoryIndexingStatus
																																		?.case ===
																																	"paused"
																																);
																															},
																															children:
																																"Paused",
																														},
																													),
																													(0,
																													E.createComponent)(
																														C.Match,
																														{
																															get when() {
																																return (
																																	W
																																		.nonPersistentStorage
																																		.repositoryIndexingStatus
																																		?.case ===
																																	"creating-index"
																																);
																															},
																															get children() {
																																return [
																																	"Building an efficient index",
																																	(0,
																																	E.createComponent)(
																																		c.$C$b,
																																		{
																																			show: !0,
																																		},
																																	),
																																];
																															},
																														},
																													),
																													(0,
																													E.createComponent)(
																														C.Match,
																														{
																															when: !0,
																															get children() {
																																return [
																																	"Syncing",
																																	(0,
																																	E.createComponent)(
																																		c.$C$b,
																																		{
																																			show: !0,
																																		},
																																	),
																																];
																															},
																														},
																													),
																												];
																											},
																										},
																									);
																								},
																							}),
																							null,
																						),
																						(0, w.insert)(
																							re,
																							(0, E.createComponent)(
																								r.ValueLabel,
																								{
																									class:
																										"indexing_progress__value-label",
																								},
																							),
																							null,
																						),
																						re
																					);
																				})(),
																				(0, E.createComponent)(r.Track, {
																					class: "indexing_progress__track",
																					get children() {
																						return (0, E.createComponent)(
																							r.Fill,
																							{
																								class:
																									"indexing_progress__fill",
																							},
																						);
																					},
																				}),
																			];
																		},
																	});
																},
															}),
															se,
														),
														se.style.setProperty("display", "flex"),
														se.style.setProperty("flex-direction", "row"),
														se.style.setProperty("margin-top", "5px"),
														se.style.setProperty("align-items", "center"),
														se.style.setProperty("gap", "8px"),
														(0, w.insert)(
															se,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return (
																		_()?.case === "indexing" ||
																		_()?.case === "indexing-setup"
																	);
																},
																get fallback() {
																	return (0, E.createComponent)(g.$18b, {
																		get buttonProps() {
																			return {
																				style: { width: "fit-content" },
																				title: "Resume Indexing",
																				type: "primary",
																				codicon: u.$ak.debugStart,
																				codiconStyle: {
																					color: "var(--vscode-foreground)",
																				},
																			};
																		},
																		loadingProps: {},
																		revertToOrig: !0,
																		onClick: async () => {
																			J.repositoryService.indexMainLocalRepository();
																			const re = new Promise((oe) => {
																					function ae() {
																						return (
																							J.reactiveStorageService
																								.nonPersistentStorage
																								.repositoryIndexingStatus
																								?.case !== "paused"
																						);
																					}
																					if (ae()) return;
																					const pe = J.window.setInterval(
																						() => {
																							ae() &&
																								(oe(void 0),
																								J.window.clearInterval(pe));
																						},
																						50,
																					);
																				}),
																				le = new Promise((oe) => {
																					setTimeout(() => {
																						oe(void 0);
																					}, 5e3);
																				});
																			await Promise.race([re, le]);
																		},
																	});
																},
																get children() {
																	return (0, E.createComponent)(g.$18b, {
																		get buttonProps() {
																			return {
																				style: { width: "fit-content" },
																				title: "Pause Indexing",
																				type: "primary",
																				codicon: u.$ak.debugPause,
																				codiconStyle: {
																					color:
																						"var(--vscode-editor-background)",
																				},
																			};
																		},
																		loadingProps: {},
																		revertToOrig: !0,
																		onClick: async () => {
																			J.repositoryService.pauseIndexingJob();
																			function re() {
																				return (
																					J.reactiveStorageService
																						.nonPersistentStorage
																						.repositoryIndexingStatus?.case !==
																						"indexing" &&
																					J.reactiveStorageService
																						.nonPersistentStorage
																						.repositoryIndexingStatus?.case !==
																						"indexing-setup"
																				);
																			}
																			if (re()) return;
																			const le = new Promise((ae) => {
																					const pe = J.window.setInterval(
																						() => {
																							re() &&
																								(ae(void 0),
																								J.window.clearInterval(pe));
																						},
																						50,
																					);
																				}),
																				oe = new Promise((ae) => {
																					setTimeout(() => {
																						ae(void 0);
																					}, 5e3);
																				});
																			await Promise.race([le, oe]);
																		},
																	});
																},
															}),
															null,
														),
														(0, w.insert)(
															se,
															(0, E.createComponent)(G, {}),
															null,
														),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return (
																		(
																			W.nonPersistentStorage
																				.repositoryIndexingJobs ?? []
																		).length > 0
																	);
																},
																get children() {
																	const re = k(),
																		le = re.firstChild;
																	return (
																		le.style.setProperty("max-height", "600px"),
																		le.style.setProperty("padding", "12px"),
																		(0, w.insert)(
																			le,
																			(0, E.createComponent)(C.For, {
																				get each() {
																					return W.nonPersistentStorage
																						.repositoryIndexingJobs;
																				},
																				children: (oe) =>
																					(0, E.createComponent)(h.$$$b, {
																						get uri() {
																							return J.workspaceContextService.resolveRelativePath(
																								oe.fileName,
																							);
																						},
																						get uniqueId() {
																							return (0, n.$9g)();
																						},
																					}),
																			}),
																		),
																		re
																	);
																},
															}),
															null,
														),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "synced"
													);
												},
												get children() {
													const Z = L(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("margin-top", "6px"),
														Z.style.setProperty("margin-bottom", "6px"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(r.Root, {
																value: 100,
																class: "indexing_progress",
																get children() {
																	return [
																		(() => {
																			const re = P();
																			return (
																				(0, w.insert)(
																					re,
																					(0, E.createComponent)(r.Label, {
																						class: "indexing_progress__label",
																						children: "Synced",
																					}),
																					null,
																				),
																				(0, w.insert)(
																					re,
																					(0, E.createComponent)(r.ValueLabel, {
																						class:
																							"indexing_progress__value-label",
																					}),
																					null,
																				),
																				re
																			);
																		})(),
																		(0, E.createComponent)(r.Track, {
																			class: "indexing_progress__track",
																			get children() {
																				return (0, E.createComponent)(r.Fill, {
																					class: "indexing_progress__fill",
																				});
																			},
																		}),
																	];
																},
															}),
															se,
														),
														se.style.setProperty("display", "flex"),
														se.style.setProperty("flex-direction", "row"),
														se.style.setProperty("margin-top", "8px"),
														(0, w.insert)(
															se,
															(0, E.createComponent)(d.$rdc, {
																style: {
																	width: "fit-content",
																	"margin-right": "8px",
																},
																title: "Resync Index",
																type: "primary",
																get codicon() {
																	return u.$ak.refresh;
																},
																onClick: () => {
																	J.repositoryService.indexMainLocalRepository();
																},
															}),
															null,
														),
														(0, w.insert)(
															se,
															(0, E.createComponent)(G, {}),
															null,
														),
														Z
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, w.insert)(
								Q,
								(0, E.createComponent)(K, {
									showOptions: ie,
									setShowOptions: ne,
									openOrCreateFile: te,
								}),
								null,
							),
							Q
						);
					})();
				}
				const H = (J) =>
						(() => {
							const W = $();
							return (
								W.style.setProperty("margin-top", "8px"),
								W.style.setProperty("padding-left", "4px"),
								W.style.setProperty("font-size", "10px"),
								W.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								(0, w.insert)(W, () => J.children),
								W
							);
						})(),
					q = (J) =>
						(() => {
							const W = $();
							return (
								W.style.setProperty("padding-left", "4px"),
								W.style.setProperty("font-size", "12px"),
								W.style.setProperty("color", "var(--vscode-foreground)"),
								(0, w.insert)(W, () => J.children),
								W
							);
						})();
				function V(J) {
					return (0, E.createComponent)(C.Show, {
						get when() {
							return !J.showOptions();
						},
						get children() {
							return (0, E.createComponent)(H, {
								children:
									"For improved codebase-wide answers, you can have Cursor compute vector embeddings over your entire codebase. This process will run in the background and take a few minutes to complete.",
							});
						},
					});
				}
				function G() {
					const J = (0, m.$odc)();
					return (0, E.createComponent)(d.$rdc, {
						title: "Delete Index",
						type: "secondary",
						get codicon() {
							return u.$ak.trash;
						},
						onClick: () => {
							J.indexPopupService.renderCustomChoicePopup({
								title: "Delete Index",
								description:
									"Are you sure you want to delete the index for this repository?",
								primaryText: "Cancel",
								secondaryText: "Confirm",
								onPrimary: () => {},
								onSecondary: async () => {
									await J.repositoryService.deleteMainLocalRepository();
								},
							});
						},
					});
				}
				function K(J) {
					const W = (0, m.$odc)(),
						X = () =>
							W.reactiveStorageService.setApplicationUserPersistentStorage(
								"indexRepository",
								(_) => !_,
							),
						[Y, ie] = (0, b.$K0b)(o.$yJ, W.configurationService, "default"),
						[ne, ee] = (0, C.createSignal)(!1);
					return (() => {
						const _ = $();
						return (
							_.style.setProperty("padding", "6px 0px"),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("flex-direction", "column"),
							_.style.setProperty("align-items", "flex-start"),
							_.style.setProperty("gap", "6px"),
							(0, w.insert)(
								_,
								(0, E.createComponent)(C.Show, {
									get when() {
										return J.showOptions();
									},
									get fallback() {
										return (() => {
											const te = U();
											return (
												te.addEventListener("click", () =>
													J.setShowOptions(!0),
												),
												te
											);
										})();
									},
									get children() {
										return [
											(() => {
												const te = N();
												return (
													te.addEventListener("click", () =>
														J.setShowOptions(!1),
													),
													te
												);
											})(),
											(() => {
												const te = B(),
													Q = te.firstChild,
													Z = Q.firstChild,
													se = Z.firstChild,
													re = se.firstChild,
													le = Q.nextSibling,
													oe = le.firstChild,
													ae = oe.firstChild,
													pe = ae.firstChild,
													$e = le.nextSibling,
													ye = $e.firstChild,
													ue = ye.firstChild;
												return (
													te.style.setProperty("display", "flex"),
													te.style.setProperty("flex-direction", "column"),
													te.style.setProperty("gap", "8px"),
													Q.style.setProperty("margin", "0"),
													Z.style.setProperty("display", "flex"),
													Z.style.setProperty("flex-direction", "row"),
													Z.style.setProperty(
														"justify-content",
														"space-between",
													),
													(0, w.insert)(
														Z,
														(0, E.createComponent)(q, {
															children: "Index new folders by default",
														}),
														se,
													),
													se.style.setProperty("display", "flex"),
													se.style.setProperty("flex-direction", "row"),
													se.style.setProperty("gap", "5px"),
													se.style.setProperty("padding-right", "2px"),
													se.style.setProperty("align-items", "center"),
													(0, w.insert)(
														se,
														(0, E.createComponent)(a.$dob, {
															onToggle: X,
															get value() {
																return W.reactiveStorageService
																	.applicationUserPersistentStorage
																	.indexRepository;
															},
														}),
														re,
													),
													(0, w.insert)(
														se,
														(0, E.createComponent)(C.Show, {
															get when() {
																return W.reactiveStorageService
																	.applicationUserPersistentStorage
																	.indexRepository;
															},
															get fallback() {
																return z();
															},
															get children() {
																return A();
															},
														}),
														null,
													),
													(0, w.insert)(
														Q,
														(0, E.createComponent)(H, {
															get children() {
																return [
																	'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
																	" ",
																	(0, i.memo)(() =>
																		W.serverConfigService.cachedServerConfig?.indexingConfig?.autoIndexingMaxNumFiles.toLocaleString(
																			"en-US",
																			{ useGrouping: !0 },
																		),
																	),
																	" ",
																	"files will not be auto-indexed.",
																];
															},
														}),
														null,
													),
													le.style.setProperty("margin", "0"),
													oe.style.setProperty("display", "flex"),
													oe.style.setProperty("flex-direction", "row"),
													oe.style.setProperty(
														"justify-content",
														"space-between",
													),
													oe.style.setProperty("align-items", "center"),
													(0, w.insert)(
														oe,
														(0, E.createComponent)(q, {
															children: "Ignore files",
														}),
														ae,
													),
													ae.style.setProperty("padding", "4px"),
													pe.addEventListener("click", () => {
														J.openOrCreateFile();
													}),
													(0, w.insert)(
														le,
														(0, E.createComponent)(H, {
															get children() {
																return [
																	"Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).",
																	" ",
																	(() => {
																		const fe = R();
																		return (
																			fe.addEventListener("click", () => {
																				W.openerService.open(
																					(0, l.$nh)(
																						W.environmentService
																							.workspaceStorageHome,
																						W.workspaceContextService.getWorkspace()
																							.id,
																						"anysphere.cursor-retrieval",
																						"embeddable_files.txt",
																					),
																					{ openToSide: !0 },
																				);
																			}),
																			fe.style.setProperty("cursor", "pointer"),
																			fe
																		);
																	})(),
																];
															},
														}),
														null,
													),
													$e.style.setProperty("margin", "0"),
													ye.style.setProperty("display", "flex"),
													ye.style.setProperty("flex-direction", "row"),
													ye.style.setProperty(
														"justify-content",
														"space-between",
													),
													ye.style.setProperty("align-items", "center"),
													(0, w.insert)(
														ye,
														(0, E.createComponent)(q, {
															children: "Git graph file relationships",
														}),
														ue,
													),
													ue.style.setProperty("display", "flex"),
													ue.style.setProperty("flex-direction", "row"),
													ue.style.setProperty("gap", "5px"),
													ue.style.setProperty("padding-right", "2px"),
													ue.style.setProperty("align-items", "center"),
													(0, w.insert)(
														ue,
														(0, E.createComponent)(s.$Kbc, {
															get origLabel() {
																return Y();
															},
															get value() {
																return Y();
															},
															items: [
																{ id: "default", label: "default" },
																{ id: "enabled", label: "enabled" },
																{ id: "disabled", label: "disabled" },
															],
															onSelect: (fe) => {
																ie(fe);
															},
														}),
														null,
													),
													(0, w.insert)(
														ue,
														(0, E.createComponent)(C.Show, {
															get when() {
																return (
																	Y() === "enabled" ||
																	(Y() === "default" &&
																		(W.reactiveStorageService
																			.applicationUserPersistentStorage
																			.indexRepository ||
																			[
																				"indexing",
																				"out-of-sync",
																				"synced",
																				"creating-index",
																			].includes(
																				W.reactiveStorageService
																					.nonPersistentStorage
																					.repositoryIndexingStatus?.case ?? "",
																			)))
																);
															},
															get fallback() {
																return z();
															},
															get children() {
																return A();
															},
														}),
														null,
													),
													(0, w.insert)(
														$e,
														(0, E.createComponent)(H, {
															get children() {
																return [
																	"When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.",
																	" ",
																	(() => {
																		const fe = O(),
																			me = fe.firstChild;
																		return (
																			fe.addEventListener("click", () =>
																				ee(!ne()),
																			),
																			fe.style.setProperty("cursor", "pointer"),
																			(0, w.insert)(
																				fe,
																				() => (ne() ? "Hide" : "Show"),
																				me,
																			),
																			fe
																		);
																	})(),
																];
															},
														}),
														null,
													),
													te
												);
											})(),
											(0, E.createComponent)(C.Show, {
												get when() {
													return ne();
												},
												get children() {
													return (0, E.createComponent)(f.$bDc, {});
												},
											}),
										];
									},
								}),
							),
							_
						);
					})();
				}
			},
		),
		define(
			de[4335],
			he([1, 0, 2, 2, 2, 2, 2, 147, 14, 26, 79, 1966, 1073, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$28b = p);
				const n = (0, t.template)(
						'<div class="settings-container-backing"><div><div><div><i class="fas fa-times"></i></div><div class="settings__buttons">',
					),
					g = (0, u.$$O)(
						"tabbar-remove-chat",
						m.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function p(o) {
					const f = (0, c.$qdc)();
					return (() => {
						const b = n(),
							s = b.firstChild,
							l = s.firstChild,
							y = l.firstChild,
							$ = y.nextSibling;
						return (
							b.addEventListener("click", (v) => {
								f.close(), v.stopPropagation();
							}),
							a.$W8b != null
								? b.style.setProperty("z-index", a.$W8b)
								: b.style.removeProperty("z-index"),
							s.style.setProperty("position", "absolute"),
							s.style.setProperty("top", "30%"),
							s.style.setProperty("left", "50%"),
							s.style.setProperty("transform", "translate(-50%, -50%)"),
							a.$W8b + 1 != null
								? s.style.setProperty("z-index", a.$W8b + 1)
								: s.style.removeProperty("z-index"),
							s.style.setProperty("border-radius", "5px"),
							s.style.setProperty("font-size", "16px"),
							s.style.setProperty(
								"background-color",
								"var(--vscode-sideBar-background)",
							),
							s.style.setProperty(
								"border",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							s.style.setProperty("width", "400px"),
							l.addEventListener("click", (v) => {
								v.stopPropagation();
							}),
							l.style.setProperty("height", "100%"),
							l.style.setProperty("width", "100%"),
							l.style.setProperty("padding", "24px 24px 16px 24px"),
							l.style.setProperty("box-sizing", "border-box"),
							l.style.setProperty("line-height", "150%"),
							y.addEventListener("click", () => {
								f.close();
							}),
							(0, E.insert)(l, () => o.description, $),
							$.style.setProperty("justify-content", "flex-end"),
							$.style.setProperty("margin-top", "4px"),
							(0, E.insert)(
								$,
								(0, C.createComponent)(d.$rdc, {
									type: "primary",
									get title() {
										return o.primaryText;
									},
									onClick: () => {
										f.close(), o.onPrimary();
									},
									style: { padding: "4px 8px" },
								}),
								null,
							),
							(0, E.insert)(
								$,
								(0, C.createComponent)(h.$18b, {
									loadingProps: {},
									get buttonProps() {
										return {
											type: "secondary",
											title: o.secondaryText,
											style: { padding: "4px 8px" },
										};
									},
									onClick: async () => {
										try {
											const v = o.onSecondary();
											v instanceof Promise && (await v);
										} finally {
											f.close();
										}
									},
								}),
								null,
							),
							(0, w.effect)(() =>
								(0, i.className)(
									y,
									["settings__dismiss", r.ThemeIcon.asClassName(g)].join(" "),
								),
							),
							b
						);
					})();
				}
			},
		),
		define(
			de[4336],
			he([1, 0, 2, 4335, 1966, 36]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lZc = C),
					(e.$mZc = d);
				function C({
					container: m,
					instantiationService: r,
					onClose: u,
					dangerousActionType: a,
					dangerousActionParams: h,
				}) {
					return (0, E.$ndc)(
						() =>
							(0, t.createComponent)(w.$X8b, {
								dangerousActionType: a,
								dangerousActionParams: h,
							}),
						m,
						r,
						{ onClose: u },
					);
				}
				function d({
					container: m,
					instantiationService: r,
					onClose: u,
					...a
				}) {
					return (0, E.$ndc)(() => (0, t.createComponent)(i.$28b, a), m, r, {
						onClose: u,
					});
				}
			},
		),
		define(
			de[4337],
			he([1, 0, 445, 3, 20, 180, 5, 4336]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends i.$1c {
					constructor(u, a) {
						super(), (this.g = u), (this.h = a);
					}
					renderSettings() {}
					closeSettings() {
						this.a?.dispose();
					}
					maybeRenderHint() {}
					renderGitHint() {}
					renderHint() {}
					renderHintModal() {}
					closeHint() {
						this.b?.dispose();
					}
					dispose() {
						super.dispose(), this.a?.dispose(), this.b?.dispose();
					}
					renderDangerousActionPopup(u, a) {
						const h = this.g.activeContainer;
						this.c = (0, d.$lZc)({
							container: h,
							instantiationService: this.h,
							onClose: () => this.c?.dispose(),
							dangerousActionType: u,
							dangerousActionParams: a,
						});
					}
					closeDangerousActionPopup() {
						this.c?.dispose();
					}
					renderCustomChoicePopup(u) {
						const a = this.g.activeContainer;
						this.f = (0, d.$mZc)({
							container: a,
							instantiationService: this.h,
							onClose: () => this.f?.dispose(),
							...u,
						});
					}
					closeCustomChoicePopup() {
						this.f?.dispose();
					}
				};
				(m = Ne([j(0, E.$jEb), j(1, C.$Li)], m)),
					(0, w.$lK)(t.$78b, m, w.InstantiationType.Delayed);
			},
		),
		