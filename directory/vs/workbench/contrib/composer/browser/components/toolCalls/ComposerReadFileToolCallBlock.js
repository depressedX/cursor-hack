define(de[4294], he([1, 0, 2, 2, 1380]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerReadFileToolCallBlock = E);
			function E(C) {
				return (0, t.createComponent)(
					w.ComposerSingleFileToolCallBlock,
					(0, i.mergeProps)(C, {
						actionText: "Read file",
						loadingText: "Reading file",
					}),
				);
			}
		}),
		define(
			de[4295],
			he([1, 0, 2, 2, 2, 2, 13, 7, 650, 54, 242, 1728, 156, 135, 147, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bDc = S);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)("<div>Setting up"),
					f = (0, t.template)("<div><div>Auto-reload"),
					b = (0, t.template)("<div><div>Related Files</div><div>Base: <span>"),
					s = (0, t.template)("<div>No related files (yet)"),
					l = (0, t.template)("<div>\u2387"),
					y = (0, t.template)(
						'<div class="context-graph-clickable"><div></div><span></span><span>(<!>)</span><span>',
					),
					$ = (0, t.template)(
						"<div><div><div></div></div><div><div>Status: <span></span></div><div><div>%",
					),
					v = (0, t.template)("<div><div>DEBUG</div><pre><code>");
				function S() {
					const I = (0, g.$odc)(),
						[T, P] = (0, C.createSignal)(null),
						[k, L] = (0, C.createSignal)(!1);
					(0, C.createEffect)(() => {
						const R = (0, d.$Ogb)(),
							O = async () => {
								const U =
									await I.gitGraphService.getWorkspaceContextSyncStatus();
								P(U);
							},
							B = R.setInterval(O, 1e3);
						O(),
							(0, C.onCleanup)(() => {
								R.clearInterval(B);
							});
					});
					const D = (R) =>
							((R.successfulCommits + R.failedCommits) / R.totalCommits) * 100,
						M = (0, C.createMemo)(
							() =>
								I.reactiveStorageService.nonPersistentStorage.contextGraphState
									.relatedFiles,
						),
						N = (0, C.createMemo)(
							() =>
								I.reactiveStorageService.applicationUserPersistentStorage
									.shouldHotReloadContextGraphRelatedFiles || !1,
						);
					(0, C.createEffect)(async () => {
						if (!k() && T()) {
							if (!N()) return;
							L(!0), await I.gitGraphService.updateCurrentEditorRelatedFiles();
						}
					});
					const A = () => {
						const R = M();
						if (R) {
							const O = JSON.stringify(R, null, 2);
							I.clipboardService.writeText(O);
						}
					};
					return (() => {
						const R = p();
						return (
							R.style.setProperty("padding", "16px"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("flex-direction", "column"),
							R.style.setProperty("gap", "8px"),
							R.style.setProperty("height", "100%"),
							(0, w.insert)(
								R,
								(0, E.createComponent)(C.Show, {
									get when() {
										return T();
									},
									get fallback() {
										return (() => {
											const O = o(),
												B = O.firstChild;
											return (
												O.style.setProperty("opacity", "0.6"),
												(0, w.insert)(
													O,
													(0, E.createComponent)(u.$C$b, { show: !0 }),
													null,
												),
												O
											);
										})();
									},
									children: (O) => [
										(() => {
											const B = p();
											return (
												B.style.setProperty("display", "flex"),
												B.style.setProperty("gap", "4px"),
												B.style.setProperty("align-items", "center"),
												(0, w.insert)(
													B,
													(0, E.createComponent)(n.$rdc, {
														onClick: () => {
															(async () => {
																const F = (
																	I.codeEditorService.getFocusedCodeEditor() ||
																	I.codeEditorService.getActiveCodeEditor()
																)?.getModel();
																if (!F) {
																	console.error(
																		"[context graph] workspaceId or model not found",
																	);
																	return;
																}
																const x =
																	await I.gitGraphService.getRelatedFiles({
																		uri: F.uri,
																		maxNumFiles: a.$aEb,
																	});
																I.reactiveStorageService.setNonPersistentStorage(
																	"contextGraphState",
																	"relatedFiles",
																	{
																		baseRelativePath:
																			I.workspaceContextService.asRelativePath(
																				F.uri,
																			),
																		nodes: x
																			.slice(0, a.$aEb)
																			.map((H) => ({
																				relativePath:
																					I.workspaceContextService.asRelativePath(
																						H.uri,
																					),
																				weight: H.weight,
																			})),
																	},
																);
															})();
														},
														title: "Get Related Files",
														type: "tertiary",
													}),
												),
												B
											);
										})(),
										(() => {
											const B = f(),
												U = B.firstChild,
												z = U.firstChild;
											return (
												B.style.setProperty("display", "flex"),
												B.style.setProperty("gap", "4px"),
												B.style.setProperty("align-items", "center"),
												(0, w.insert)(
													B,
													(0, E.createComponent)(C.Show, {
														get when() {
															return M();
														},
														get children() {
															return [
																(0, E.createComponent)(n.$rdc, {
																	onClick: () => {
																		I.reactiveStorageService.setNonPersistentStorage(
																			"contextGraphState",
																			"relatedFiles",
																			null,
																		);
																	},
																	title: "Clear",
																	type: "tertiary",
																}),
																(0, E.createComponent)(n.$rdc, {
																	onClick: A,
																	title: "Copy as JSON",
																	type: "tertiary",
																}),
															];
														},
													}),
													U,
												),
												U.style.setProperty("margin-left", "4px"),
												U.style.setProperty("display", "flex"),
												U.style.setProperty("align-items", "center"),
												U.style.setProperty("gap", "4px"),
												(0, w.insert)(
													U,
													(0, E.createComponent)(m.$dob, {
														get value() {
															return N();
														},
														onToggle: () => {
															I.reactiveStorageService.setApplicationUserPersistentStorage(
																"shouldHotReloadContextGraphRelatedFiles",
																!I.reactiveStorageService
																	.applicationUserPersistentStorage
																	.shouldHotReloadContextGraphRelatedFiles,
															);
														},
													}),
													z,
												),
												B
											);
										})(),
										(0, E.createComponent)(C.Show, {
											get when() {
												return M();
											},
											children: (B) =>
												(() => {
													const U = b(),
														z = U.firstChild,
														F = z.nextSibling,
														x = F.firstChild,
														H = x.nextSibling;
													return (
														U.style.setProperty("display", "flex"),
														U.style.setProperty("flex-direction", "column"),
														U.style.setProperty("gap", "4px"),
														U.style.setProperty("padding", "2px 0px"),
														z.style.setProperty("font-weight", "500"),
														z.style.setProperty("text-transform", "uppercase"),
														z.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														F.style.setProperty(
															"border-left",
															"3px solid var(--vscode-input-placeholderForeground)",
														),
														F.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														F.style.setProperty("padding", "0px 4px"),
														F.style.setProperty("font-size", "0.85rem"),
														F.style.setProperty("overflow", "hidden"),
														F.style.setProperty("white-space", "nowrap"),
														H.style.setProperty("direction", "rtl"),
														H.style.setProperty("text-overflow", "ellipsis"),
														H.style.setProperty("overflow", "hidden"),
														H.style.setProperty("white-space", "nowrap"),
														(0, w.insert)(H, () => B().baseRelativePath),
														(0, w.insert)(
															U,
															(0, E.createComponent)(C.For, {
																get each() {
																	return B().nodes;
																},
																get fallback() {
																	return (() => {
																		const q = s();
																		return (
																			q.style.setProperty("opacity", "0.6"), q
																		);
																	})();
																},
																children: (q, V) =>
																	(() => {
																		const G = y(),
																			K = G.firstChild,
																			J = K.nextSibling,
																			W = J.nextSibling,
																			X = W.firstChild,
																			Y = X.nextSibling,
																			ie = Y.nextSibling,
																			ne = W.nextSibling;
																		return (
																			G.addEventListener("click", () => {
																				I.openerService.open(
																					I.workspaceContextService.resolveRelativePath(
																						q.relativePath,
																					),
																					{
																						openToSide: !1,
																						editorOptions: {
																							revealIfOpened: !0,
																						},
																					},
																				);
																			}),
																			G.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			G.style.setProperty("overflow", "hidden"),
																			G.style.setProperty(
																				"text-overflow",
																				"ellipsis",
																			),
																			G.style.setProperty(
																				"font-size",
																				"0.85rem",
																			),
																			G.style.setProperty("display", "flex"),
																			G.style.setProperty(
																				"align-items",
																				"center",
																			),
																			G.style.setProperty("gap", "3px"),
																			G.style.setProperty("cursor", "pointer"),
																			G.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			K.style.setProperty(
																				"margin-right",
																				"-6px",
																			),
																			(0, w.insert)(
																				K,
																				(0, E.createComponent)(h.$k$b, {
																					get fileName() {
																						return (0, r.$sc)(q.relativePath);
																					},
																					get languageService() {
																						return I.languageService;
																					},
																					get modelService() {
																						return I.modelService;
																					},
																					get workspaceContextService() {
																						return I.workspaceContextService;
																					},
																				}),
																			),
																			J.style.setProperty(
																				"color",
																				"var(--vscode-editor-foreground)",
																			),
																			(0, w.insert)(J, () =>
																				(0, r.$sc)(q.relativePath),
																			),
																			(0, w.insert)(
																				G,
																				(0, E.createComponent)(C.Show, {
																					get when() {
																						return V() < a.$_Db;
																					},
																					get children() {
																						const ee = l(),
																							_ = ee.firstChild;
																						return (
																							ee.style.setProperty(
																								"color",
																								"var(--vscode-editorWarning-foreground)",
																							),
																							(0, w.insert)(
																								ee,
																								() => V() + 1,
																								null,
																							),
																							ee
																						);
																					},
																				}),
																				W,
																			),
																			W.style.setProperty(
																				"color",
																				"var(--vscode-input-placeholderForeground)",
																			),
																			W.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			(0, w.insert)(
																				W,
																				() =>
																					(
																						Math.round(q.weight * 1e3) / 1e3
																					).toFixed(3),
																				Y,
																			),
																			ne.style.setProperty(
																				"color",
																				"var(--vscode-input-placeholderForeground)",
																			),
																			ne.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			ne.style.setProperty(
																				"overflow",
																				"hidden",
																			),
																			ne.style.setProperty(
																				"text-overflow",
																				"ellipsis",
																			),
																			ne.style.setProperty("direction", "rtl"),
																			(0, w.insert)(ne, () => q.relativePath),
																			G
																		);
																	})(),
															}),
															null,
														),
														U
													);
												})(),
										}),
										(0, E.createComponent)(C.For, {
											get each() {
												return O();
											},
											children: (B) => [
												(() => {
													const U = $(),
														z = U.firstChild,
														F = z.firstChild,
														x = z.nextSibling,
														H = x.firstChild,
														q = H.firstChild,
														V = q.nextSibling,
														G = H.nextSibling,
														K = G.firstChild,
														J = K.firstChild;
													return (
														U.style.setProperty("display", "flex"),
														U.style.setProperty("flex-direction", "column"),
														U.style.setProperty("gap", "4px"),
														z.style.setProperty("height", "16px"),
														z.style.setProperty("width", "100%"),
														z.style.setProperty(
															"background",
															"var(--vscode-button-secondaryBackground)",
														),
														z.style.setProperty("border-radius", "4px"),
														z.style.setProperty("overflow", "hidden"),
														F.style.setProperty("height", "100%"),
														F.style.setProperty(
															"background",
															"var(--vscode-progressBar-background)",
														),
														x.style.setProperty("display", "flex"),
														x.style.setProperty("align-items", "center"),
														x.style.setProperty(
															"justify-content",
															"space-between",
														),
														(0, w.insert)(V, () => B.status),
														G.style.setProperty("display", "flex"),
														G.style.setProperty("align-items", "center"),
														G.style.setProperty("gap", "4px"),
														(0, w.insert)(
															G,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return B.status === "loading";
																},
																get children() {
																	return (0, E.createComponent)(u.$C$b, {
																		show: !0,
																	});
																},
															}),
															K,
														),
														(0, w.insert)(
															K,
															() =>
																Math.min(
																	((B.successfulCommits + B.failedCommits) /
																		B.totalCommits) *
																		100,
																	100,
																).toFixed(2),
															J,
														),
														(0, i.effect)(
															(W) => {
																const X = `${D(B)}%`,
																	Y =
																		B.status === "loading"
																			? "var(--vscode-editorWarning-foreground)"
																			: B.status === "error"
																				? "var(--vscode-editorError-foreground)"
																				: "var(--vscode-charts-green)";
																return (
																	X !== W._v$ &&
																		((W._v$ = X) != null
																			? F.style.setProperty("width", X)
																			: F.style.removeProperty("width")),
																	Y !== W._v$2 &&
																		((W._v$2 = Y) != null
																			? V.style.setProperty("color", Y)
																			: V.style.removeProperty("color")),
																	W
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														U
													);
												})(),
												(() => {
													const U = p();
													return (
														U.style.setProperty("flex", "1"),
														U.style.setProperty("height", "100%"),
														(0, w.insert)(
															U,
															(0, E.createComponent)(c.$w0b, {
																scrollingDirection: "vertical",
																style: { height: "100%", width: "100%" },
																innerContainerStyle: {
																	display: "flex",
																	"flex-direction": "column",
																	gap: "6px",
																	"padding-bottom": "50px",
																},
																get children() {
																	const z = v(),
																		F = z.firstChild,
																		x = F.nextSibling,
																		H = x.firstChild;
																	return (
																		z.style.setProperty("display", "flex"),
																		z.style.setProperty(
																			"flex-direction",
																			"column",
																		),
																		z.style.setProperty("gap", "2px"),
																		F.style.setProperty("font-weight", "500"),
																		F.style.setProperty(
																			"text-transform",
																			"uppercase",
																		),
																		F.style.setProperty(
																			"color",
																			"var(--vscode-editor-foreground)",
																		),
																		x.style.setProperty(
																			"white-space",
																			"pre-wrap",
																		),
																		x.style.setProperty(
																			"word-wrap",
																			"break-word",
																		),
																		x.style.setProperty("margin", "0px"),
																		x.style.setProperty(
																			"margin-bottom",
																			"65px",
																		),
																		x.style.setProperty("user-select", "text"),
																		x.style.setProperty(
																			"-webkit-user-select",
																			"text",
																		),
																		x.style.setProperty(
																			"-moz-user-select",
																			"text",
																		),
																		x.style.setProperty(
																			"-ms-user-select",
																			"text",
																		),
																		(0, w.insert)(H, () =>
																			JSON.stringify(B, null, 2),
																		),
																		z
																	);
																},
															}),
														),
														U
													);
												})(),
											],
										}),
									],
								}),
							),
							R
						);
					})();
				}
			},
		),
		define(
			de[4296],
			he([1, 0, 2, 2, 2, 13, 9, 147, 36]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Sc = a);
				const r = (0, t.template)("<div>"),
					u = (0, t.template)(
						"<a>Don't see an extension you're looking for? Click to learn how to install it.",
					);
				function a(c, n) {
					return (0, m.$ndc)(() => (0, w.createComponent)(h, {}), c, n);
				}
				function h() {
					const c = (0, m.$odc)(),
						[n, g] = (0, E.createSignal)(
							c.cursorAuthenticationService.isAuthenticated(),
						);
					(0, E.createEffect)(() => {
						const o = (f) => g(f);
						c.cursorAuthenticationService.addLoginChangedListener(o),
							(0, E.onCleanup)(() =>
								c.cursorAuthenticationService.removeLoginChangedListener(o),
							);
					});
					const p = C.URI.parse(
						"https://www.cursor.com/how-to-install-extension",
					);
					return (0, w.createComponent)(E.Show, {
						get when() {
							return !n();
						},
						get fallback() {
							return (() => {
								const o = u();
								return (
									o.addEventListener("click", () => c.openerService.open(p)), o
								);
							})();
						},
						get children() {
							const o = r();
							return (
								o.style.setProperty("margin-top", "36px"),
								o.style.setProperty("display", "flex"),
								(0, i.insert)(
									o,
									(0, w.createComponent)(d.$rdc, {
										style: { width: "fit-content", margin: "auto" },
										title: "Login",
										type: "primary",
										onClick: () => c.cursorAuthenticationService.login(),
									}),
								),
								o
							);
						},
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1990],
		he([
			1, 0, 4, 3, 6, 29, 163, 1504, 119, 157, 314, 154, 39, 49, 7, 5, 1356, 141,
			1242, 53, 35, 32, 495, 404, 93, 10, 40, 146, 25, 24, 127, 33, 50, 109, 15,
			62, 673, 8, 60, 41, 131, 21, 384, 349, 174, 96, 160, 34, 1134, 106, 372,
			232, 4296, 30, 244, 28, 68, 72,
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
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
			te,
			Q,
			Z,
		) {
			"use strict";
			var se;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gTc =
					e.$fTc =
					e.$eTc =
					e.$dTc =
					e.$cTc =
					e.$bTc =
					e.$aTc =
					e.$_Sc =
					e.$$Sc =
					e.$0Sc =
					e.$9Sc =
					e.$8Sc =
					e.$7Sc =
					e.$6Sc =
					e.$5Sc =
					e.$4Sc =
					e.$3Sc =
					e.$2Sc =
						void 0),
				(e.$hTc = Te),
				(Y = xi(Y)),
				(e.$2Sc = "none");
			class re extends i.$1c {
				constructor() {
					super(...arguments),
						(this.a = this.D(new w.$re())),
						(this.onFocus = this.a.event),
						(this.b = this.D(new w.$re())),
						(this.onBlur = this.b.event),
						(this.c = []);
				}
				onFocusChange(Ie) {
					this.c.forEach((Be) => this.b.fire(Be)),
						(this.c = Ie),
						this.c.forEach((Be) => this.a.fire(Be));
				}
			}
			var le;
			(function (Ee) {
				Ee.UpdateDate = "UpdateDate";
			})(le || (le = {}));
			function oe(Ee) {
				switch (Ee) {
					case le.UpdateDate:
						return !0;
				}
			}
			let ae = class extends T.$TMb {
				static {
					se = this;
				}
				static {
					this.a = 7 * 24 * 60 * 60 * 1e3;
				}
				constructor(
					Ie,
					Be,
					Se,
					ke,
					Ue,
					qe,
					Ae,
					Me,
					De,
					Re,
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt,
					nt,
					lt,
					ct,
					gt,
					ht,
					Rt,
					Nt,
					jt,
					ti,
					kt,
					hi,
					Kt,
					di,
					Ye,
				) {
					super(
						{
							...Be,
							showActions: T.ViewPaneShowActions.Always,
							maximumBodySize: Ie.flexibleHeight
								? Nt.getNumber(`${Be.id}.size`, x.StorageScope.PROFILE, 0)
									? void 0
									: 0
								: void 0,
						},
						ke,
						Ue,
						Ze,
						ct,
						gt,
						qe,
						ht,
						Ae,
						je,
						Ve,
					),
						(this.t = Ie),
						(this.L = Se),
						(this.ab = Me),
						(this.sb = De),
						(this.cc = Re),
						(this.dc = et),
						(this.ec = rt),
						(this.fc = ft),
						(this.gc = bt),
						(this.hc = nt),
						(this.ic = lt),
						(this.jc = Rt),
						(this.kc = Nt),
						(this.lc = jt),
						(this.mc = ti),
						(this.nc = kt),
						(this.oc = hi),
						(this.pc = Kt),
						(this.qc = di),
						(this.rc = Ye),
						(this.f = null),
						(this.g = null),
						(this.m = this.D(new M.$sj())),
						(this.n = void 0),
						this.t.onDidChangeTitle &&
							this.D(this.t.onDidChangeTitle((ze) => this.Sb(ze))),
						this.D(this.m.onDidRun(({ error: ze }) => ze && this.L.error(ze))),
						this.sc();
				}
				sc() {}
				U(Ie) {
					Ie.classList.add("extension-view-header"),
						super.U(Ie),
						this.t.hideBadge ||
							(this.c = new y.$Hob(
								(0, n.$fhb)(Ie, (0, n.$)(".count-badge-wrapper")),
								{},
								X.$zyb,
							));
				}
				uc() {
					return !1;
				}
				vc(Ie) {
					const Be = (0, n.$fhb)(
						Ie,
						(0, n.$)(".cursor-extension-viewlet-note-2"),
					);
					(this.n = Be), this.D((0, ne.$1Sc)(Be, this.Db));
				}
				W(Ie) {
					super.W(Ie);
					const Be = (0, n.$fhb)(Ie, (0, n.$)(".extensions-list")),
						Se = (0, n.$fhb)(Ie, (0, n.$)(".message-container"));
					this.uc() && this.vc(Ie);
					const ke = (0, n.$fhb)(Se, (0, n.$)("")),
						Ue = (0, n.$fhb)(Se, (0, n.$)(".message")),
						qe = new p.$XSc(),
						Ae = new re(),
						Me = this.Db.createInstance(p.$YSc, Ae, {
							hoverOptions: {
								position: () => {
									const De = this.Cb.getViewLocationById(this.id);
									return De === U.ViewContainerLocation.Sidebar
										? this.nc.getSideBarPosition() === G.Position.LEFT
											? K.HoverPosition.RIGHT
											: K.HoverPosition.LEFT
										: De === U.ViewContainerLocation.AuxiliaryBar &&
												this.nc.getSideBarPosition() === G.Position.LEFT
											? K.HoverPosition.LEFT
											: K.HoverPosition.RIGHT;
								},
							},
						});
					(this.f = this.Db.createInstance(v.$zMb, "Extensions", Be, qe, [Me], {
						multipleSelectionSupport: !1,
						setRowLineHeight: !1,
						horizontalScrolling: !1,
						accessibilityProvider: {
							getAriaLabel(De) {
								return Te(De);
							},
							getWidgetAriaLabel() {
								return (0, t.localize)(6491, null);
							},
						},
						overrideStyles: this.Zb().listOverrideStyles,
						openOnSingleClick: !0,
					})),
						this.D(this.f.onContextMenu((De) => this.zc(De), this)),
						this.D(
							this.f.onDidChangeFocus(
								(De) => Ae.onFocusChange((0, k.$Lb)(De.elements)),
								this,
							),
						),
						this.D(this.f),
						this.D(Ae),
						this.D(
							w.Event.debounce(
								w.Event.filter(this.f.onDidOpen, (De) => De.element !== null),
								(De, Re) => Re,
								75,
								!0,
							)((De) => {
								this.md(De.element, {
									sideByside: De.sideBySide,
									...De.editorOptions,
								});
							}),
						),
						(this.b = {
							extensionsList: Be,
							messageBox: Ue,
							messageContainer: Se,
							messageSeverityIcon: ke,
						}),
						this.h && this.gd(this.h.model);
				}
				X(Ie, Be) {
					super.X(Ie, Be),
						this.b &&
							(this.n &&
								this.oc.isAuthenticated() &&
								(Ie -= this.n.clientHeight),
							(this.b.extensionsList.style.height = Ie + "px")),
						this.f?.layout(Ie, Be);
				}
				async show(Ie, Be) {
					if (this.g) {
						if (!Be && this.g.query === Ie) return this.g.request;
						this.g.request.cancel(), (this.g = null);
					}
					this.h && (this.h.disposables.dispose(), (this.h = void 0));
					const Se = f.$ZSc.parse(Ie),
						ke = { sortOrder: m.SortOrder.Default };
					switch (Se.sortBy) {
						case "installs":
							ke.sortBy = m.SortBy.InstallCount;
							break;
						case "rating":
							ke.sortBy = m.SortBy.WeightedRating;
							break;
						case "name":
							ke.sortBy = m.SortBy.Title;
							break;
						case "publishedDate":
							ke.sortBy = m.SortBy.PublishedDate;
							break;
						case "updateDate":
							ke.sortBy = le.UpdateDate;
							break;
					}
					const Ue = (0, A.$zh)(async (qe) => {
						try {
							this.h = await this.Ac(Se, ke, qe);
							const Ae = this.h.model;
							return (
								this.gd(Ae),
								this.h.onDidChangeModel &&
									this.h.disposables.add(
										this.h.onDidChangeModel((Me) => {
											this.h && ((this.h.model = Me), this.hd(Me));
										}),
									),
								Ae
							);
						} catch (Ae) {
							const Me = new d.$kp([]);
							return (
								(0, E.$8)(Ae) || (this.rc.error(Ae), this.gd(Me, Ae)),
								this.f ? this.f.model : Me
							);
						}
					});
					return (
						Ue.finally(() => (this.g = null)),
						(this.g = { query: Ie, request: Ue }),
						Ue
					);
				}
				count() {
					return this.h?.model.length ?? 0;
				}
				yc() {
					const Ie = new d.$kp([]);
					return this.gd(Ie), Promise.resolve(Ie);
				}
				async zc(Ie) {
					if (Ie.element) {
						const Be = new i.$Zc(),
							Se = Be.add(this.Db.createInstance($.$sTb)),
							ke =
								(Ie.element &&
									this.sb.local.find(
										(Ae) =>
											(0, a.$7p)(Ae.identifier, Ie.element.identifier) &&
											(!Ie.element.server || Ie.element.server === Ae.server),
									)) ||
								Ie.element;
						Se.extension = ke;
						let Ue = [];
						Se.enabled
							? (Ue = await Se.getActionGroups())
							: ke &&
								((Ue = await (0, $.$rTb)(ke, this.Bb, this.Db)),
								Ue.forEach((Ae) =>
									Ae.forEach((Me) => {
										Me instanceof $.$aTb && (Me.extension = ke);
									}),
								));
						let qe = [];
						for (const Ae of Ue) qe = [...qe, ...Ae, new M.$tj()];
						qe.pop(),
							this.zb.showContextMenu({
								getAnchor: () => Ie.anchor,
								getActions: () => qe,
								actionRunner: this.m,
								onHide: () => Be.dispose(),
							});
					}
				}
				async Ac(Ie, Be, Se) {
					const ke =
							/@id:(([a-z0-9A-Z][a-z0-9\-A-Z]*)\.([a-z0-9A-Z][a-z0-9\-A-Z]*))/g,
						Ue = [];
					let qe;
					for (; (qe = ke.exec(Ie.value)) !== null; ) {
						const Me = qe[1];
						Ue.push(Me);
					}
					if (Ue.length)
						return {
							model: await this.Bc(Ue, Be, Se),
							disposables: new i.$Zc(),
						};
					if (se.isLocalExtensionsQuery(Ie.value, Ie.sortBy))
						return this.Dc(Ie, Be);
					se.isSearchPopularQuery(Ie.value)
						? ((Ie.value = Ie.value.replace("@popular", "")),
							(Be.sortBy = Be.sortBy ? Be.sortBy : m.SortBy.InstallCount))
						: se.isSearchRecentlyPublishedQuery(Ie.value) &&
							((Ie.value = Ie.value.replace("@recentlyPublished", "")),
							(Be.sortBy = Be.sortBy ? Be.sortBy : m.SortBy.PublishedDate));
					const Ae = { ...Be, sortBy: oe(Be.sortBy) ? void 0 : Be.sortBy };
					if (Ie.value.length < 2)
						return {
							model: await this.Sc(Ie, Ae, Se),
							disposables: new i.$Zc(),
						};
					{
						const { extensions: Me, disposables: De } = await this.Cc(
							new f.$ZSc("@non-marketplace" + Ie.value, Ie.sortBy),
							Be,
						);
						return { model: await this.Sc(Ie, Ae, Se, Me), disposables: De };
					}
				}
				async Bc(Ie, Be, Se) {
					const ke = Ie.reduce(
							(Ae, Me) => (Ae.add(Me.toLowerCase()), Ae),
							new Set(),
						),
						Ue = (await this.sb.queryLocal(this.t.server)).filter((Ae) =>
							ke.has(Ae.identifier.id.toLowerCase()),
						),
						qe = Ue.length
							? Ie.filter((Ae) =>
									Ue.every((Me) => !(0, a.$7p)(Me.identifier, { id: Ae })),
								)
							: Ie;
					if (qe.length) {
						const Ae = await this.sb.getExtensions(
							qe.map((Me) => ({ id: Me })),
							{ source: "queryById" },
							Se,
						);
						Ue.push(...Ae);
					}
					return this.od(Ue);
				}
				async Cc(Ie, Be) {
					const Se = await this.sb.queryLocal(this.t.server);
					let { extensions: ke, canIncludeInstalledExtensions: Ue } =
						await this.Ec(Se, this.ab.extensions, Ie, Be);
					const qe = new i.$Zc(),
						Ae = qe.add(new w.$re());
					if (Ue) {
						let Me = !1;
						qe.add((0, i.$Yc)(() => (Me = !0))),
							qe.add(
								w.Event.debounce(
									w.Event.any(
										w.Event.filter(
											this.sb.onChange,
											(De) => De?.state === o.ExtensionState.Installed,
										),
										this.ab.onDidChangeExtensions,
									),
									() => {},
								)(async () => {
									const De = this.t.server
											? this.sb.installed.filter(
													(je) => je.server === this.t.server,
												)
											: this.sb.local,
										{ extensions: Re } = await this.Ec(
											De,
											this.ab.extensions,
											Ie,
											Be,
										);
									if (!Me) {
										const je = this.Rc(ke, Re);
										je && ((ke = je), Ae.fire(new d.$kp(ke)));
									}
								}),
							);
					}
					return {
						extensions: ke,
						onDidChangeModel: Ae.event,
						disposables: qe,
					};
				}
				async Dc(Ie, Be) {
					const {
						extensions: Se,
						onDidChangeModel: ke,
						disposables: Ue,
					} = await this.Cc(Ie, Be);
					return {
						model: new d.$kp(Se),
						onDidChangeModel: ke,
						disposables: Ue,
					};
				}
				async Ec(Ie, Be, Se, ke) {
					const Ue = Se.value;
					let qe = [],
						Ae = !0;
					return (
						/@builtin/i.test(Ue)
							? ((qe = this.Fc(Ie, Se, ke)), (Ae = !1))
							: /@installed/i.test(Ue)
								? (qe = this.Jc(Ie, Be, Se, ke))
								: /@non-marketplace/i.test(Ue)
									? (qe = this.Ic(Ie, Be, Se, ke))
									: /@outdated/i.test(Ue)
										? (qe = this.Kc(Ie, Se, ke))
										: /@disabled/i.test(Ue)
											? (qe = this.Lc(Ie, Be, Se, ke))
											: /@enabled/i.test(Ue)
												? (qe = this.Mc(Ie, Be, Se, ke))
												: /@workspaceUnsupported/i.test(Ue)
													? (qe = this.Nc(Ie, Se, ke))
													: /@deprecated/i.test(Se.value)
														? (qe = await this.Oc(Ie, Se, ke))
														: /@recentlyUpdated/i.test(Se.value)
															? (qe = this.Pc(Ie, Se, ke))
															: /@feature:/i.test(Se.value) &&
																(qe = this.Qc(Ie, Se, ke)),
						{ extensions: qe, canIncludeInstalledExtensions: Ae }
					);
				}
				Fc(Ie, Be, Se) {
					let {
						value: ke,
						includedCategories: Ue,
						excludedCategories: qe,
					} = this.Hc(Be.value);
					ke = ke
						.replace(/@builtin/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Ae = Ie.filter(
						(Me) =>
							Me.isBuiltin &&
							(Me.name.toLowerCase().indexOf(ke) > -1 ||
								Me.displayName.toLowerCase().indexOf(ke) > -1) &&
							this.Gc(Me, Ue, qe),
					);
					return this.Tc(Ae, Se);
				}
				Gc(Ie, Be, Se) {
					return !Be.length && !Se.length
						? !0
						: Ie.categories.length
							? Se.length &&
								Ie.categories.some((ke) => Se.includes(ke.toLowerCase()))
								? !1
								: Ie.categories.some((ke) => Be.includes(ke.toLowerCase()))
							: Be.includes(e.$2Sc);
				}
				Hc(Ie) {
					const Be = [],
						Se = [];
					return (
						(Ie = Ie.replace(
							/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g,
							(ke, Ue, qe) => {
								const Ae = (qe || Ue || "").toLowerCase();
								return (
									Ae.startsWith("-")
										? Se.indexOf(Ae) === -1 && Se.push(Ae)
										: Be.indexOf(Ae) === -1 && Be.push(Ae),
									""
								);
							},
						)),
						{ value: Ie, includedCategories: Be, excludedCategories: Se }
					);
				}
				Ic(Ie, Be, Se, ke) {
					let Ue = new f.$ZSc(
						Se.value.replace(/@non-marketplace/g, "@installed"),
						Se.sortBy,
					);
					const qe = this.Jc(Ie, Be, Ue, ke),
						Ae = Ie.filter(
							(Re) =>
								Y.default.anysphereBundledExtensions?.includes(
									Re.identifier.id,
								) ?? !1,
						);
					Ue = new f.$ZSc(
						Se.value.replace(/@non-marketplace/g, "@builtin"),
						Se.sortBy,
					);
					const Me = this.Fc(Ae, Ue, ke),
						De = [...qe, ...Me];
					return this.Tc(De, ke);
				}
				Jc(Ie, Be, Se, ke) {
					let {
						value: Ue,
						includedCategories: qe,
						excludedCategories: Ae,
					} = this.Hc(Se.value);
					Ue = Ue.replace(/@installed/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Me = (Re) =>
						(Re.name.toLowerCase().indexOf(Ue) > -1 ||
							Re.displayName.toLowerCase().indexOf(Ue) > -1 ||
							Re.description.toLowerCase().indexOf(Ue) > -1) &&
						this.Gc(Re, qe, Ae);
					let De;
					if (ke.sortBy !== void 0)
						(De = Ie.filter((Re) => !Re.isBuiltin && Me(Re))),
							(De = this.Tc(De, ke));
					else {
						De = Ie.filter(
							(rt) =>
								(!rt.isBuiltin || rt.outdated || rt.runtimeState !== void 0) &&
								Me(rt),
						);
						const Re = Be.reduce(
								(rt, ft) => (rt.set(ft.identifier.value, ft), rt),
								new N.$In(),
							),
							je = (rt, ft) => {
								const bt = Re.get(rt.identifier.id),
									nt =
										!!bt &&
										this.ec.getExtensionManagementServer((0, b.$x2)(bt)) ===
											rt.server,
									lt = Re.get(ft.identifier.id),
									ct =
										lt &&
										this.ec.getExtensionManagementServer((0, b.$x2)(lt)) ===
											ft.server;
								if (nt && ct)
									return rt.displayName.localeCompare(ft.displayName);
								const gt = rt.local && (0, N.$Kn)(rt.local.manifest),
									ht = ft.local && (0, N.$Kn)(ft.local.manifest);
								return !nt && !ct
									? gt
										? -1
										: ht
											? 1
											: rt.displayName.localeCompare(ft.displayName)
									: (nt && ht) || (ct && gt)
										? rt.displayName.localeCompare(ft.displayName)
										: nt
											? -1
											: 1;
							},
							Ve = [],
							Ze = [],
							et = [];
						De.forEach((rt) => {
							rt.outdated
								? Ve.push(rt)
								: rt.runtimeState
									? Ze.push(rt)
									: et.push(rt);
						}),
							(De = [...Ve.sort(je), ...Ze.sort(je), ...et.sort(je)]);
					}
					return De;
				}
				Kc(Ie, Be, Se) {
					let {
						value: ke,
						includedCategories: Ue,
						excludedCategories: qe,
					} = this.Hc(Be.value);
					ke = ke
						.replace(/@outdated/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Ae = Ie.sort((Me, De) =>
						Me.displayName.localeCompare(De.displayName),
					).filter(
						(Me) =>
							Me.outdated &&
							(Me.name.toLowerCase().indexOf(ke) > -1 ||
								Me.displayName.toLowerCase().indexOf(ke) > -1) &&
							this.Gc(Me, Ue, qe),
					);
					return this.Tc(Ae, Se);
				}
				Lc(Ie, Be, Se, ke) {
					let {
						value: Ue,
						includedCategories: qe,
						excludedCategories: Ae,
					} = this.Hc(Se.value);
					Ue = Ue.replace(/@disabled/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Me = Ie.sort((De, Re) =>
						De.displayName.localeCompare(Re.displayName),
					).filter(
						(De) =>
							Be.every(
								(Re) =>
									!(0, a.$7p)(
										{ id: Re.identifier.value, uuid: Re.uuid },
										De.identifier,
									),
							) &&
							(De.name.toLowerCase().indexOf(Ue) > -1 ||
								De.displayName.toLowerCase().indexOf(Ue) > -1) &&
							this.Gc(De, qe, Ae),
					);
					return this.Tc(Me, ke);
				}
				Mc(Ie, Be, Se, ke) {
					let {
						value: Ue,
						includedCategories: qe,
						excludedCategories: Ae,
					} = this.Hc(Se.value);
					(Ue = Ue
						? Ue.replace(/@enabled/g, "")
								.replace(/@sort:(\w+)(-\w*)?/g, "")
								.trim()
								.toLowerCase()
						: ""),
						(Ie = Ie.filter((De) => !De.isBuiltin));
					const Me = Ie.sort((De, Re) =>
						De.displayName.localeCompare(Re.displayName),
					).filter(
						(De) =>
							Be.some((Re) =>
								(0, a.$7p)(
									{ id: Re.identifier.value, uuid: Re.uuid },
									De.identifier,
								),
							) &&
							(De.name.toLowerCase().indexOf(Ue) > -1 ||
								De.displayName.toLowerCase().indexOf(Ue) > -1) &&
							this.Gc(De, qe, Ae),
					);
					return this.Tc(Me, ke);
				}
				Nc(Ie, Be, Se) {
					const Ue = Be.value.match(
						/^\s*@workspaceUnsupported(?::(untrusted|virtual)(Partial)?)?(?:\s+([^\s]*))?/i,
					);
					if (!Ue) return [];
					const qe = Ue[1]?.toLowerCase(),
						Ae = !!Ue[2],
						Me = Ue[3]?.toLowerCase();
					Me &&
						(Ie = Ie.filter(
							(Ze) =>
								Ze.name.toLowerCase().indexOf(Me) > -1 ||
								Ze.displayName.toLowerCase().indexOf(Me) > -1,
						));
					const De = (Ze, et) =>
							Ze.local &&
							this.fc.getExtensionVirtualWorkspaceSupportType(
								Ze.local.manifest,
							) === et,
						Re = (Ze, et) => {
							if (!Ze.local) return !1;
							const rt = this.mc.getEnablementState(Ze.local);
							return rt !== r.EnablementState.EnabledGlobally &&
								rt !== r.EnablementState.EnabledWorkspace &&
								rt !== r.EnablementState.DisabledByTrustRequirement &&
								rt !== r.EnablementState.DisabledByExtensionDependency
								? !1
								: this.fc.getExtensionUntrustedWorkspaceSupportType(
											Ze.local.manifest,
										) === et
									? !0
									: et === !1
										? (0, a.$eq)(
												Ie.map((bt) => bt.local),
												Ze.local,
											).some(
												(bt) =>
													this.fc.getExtensionUntrustedWorkspaceSupportType(
														bt.manifest,
													) === et,
											)
										: !1;
						},
						je = (0, q.$H8)(this.hc.getWorkspace()),
						Ve = !this.lc.isWorkspaceTrusted();
					return (
						qe === "virtual"
							? (Ie = Ie.filter(
									(Ze) =>
										je && De(Ze, Ae ? "limited" : !1) && !(Ve && Re(Ze, !1)),
								))
							: qe === "untrusted"
								? (Ie = Ie.filter(
										(Ze) => Re(Ze, Ae ? "limited" : !1) && !(je && De(Ze, !1)),
									))
								: (Ie = Ie.filter(
										(Ze) => (je && !De(Ze, !0)) || (Ve && !Re(Ze, !0)),
									)),
						this.Tc(Ie, Se)
					);
				}
				async Oc(Ie, Be, Se) {
					const ke = Be.value
							.replace(/@deprecated/g, "")
							.replace(/@sort:(\w+)(-\w*)?/g, "")
							.trim()
							.toLowerCase(),
						Ue = await this.gc.getExtensionsControlManifest(),
						qe = Object.keys(Ue.deprecated);
					return (
						(Ie = Ie.filter(
							(Ae) =>
								qe.includes(Ae.identifier.id) &&
								(!ke ||
									Ae.name.toLowerCase().indexOf(ke) > -1 ||
									Ae.displayName.toLowerCase().indexOf(ke) > -1),
						)),
						this.Tc(Ie, Se)
					);
				}
				Pc(Ie, Be, Se) {
					let {
						value: ke,
						includedCategories: Ue,
						excludedCategories: qe,
					} = this.Hc(Be.value);
					const Ae = Date.now();
					(Ie = Ie.filter(
						(De) =>
							!De.isBuiltin &&
							!De.outdated &&
							De.local?.updated &&
							De.local?.installedTimestamp !== void 0 &&
							Ae - De.local.installedTimestamp < se.a,
					)),
						(ke = ke
							.replace(/@recentlyUpdated/g, "")
							.replace(/@sort:(\w+)(-\w*)?/g, "")
							.trim()
							.toLowerCase());
					const Me = Ie.filter(
						(De) =>
							(De.name.toLowerCase().indexOf(ke) > -1 ||
								De.displayName.toLowerCase().indexOf(ke) > -1) &&
							this.Gc(De, Ue, qe),
					);
					return (Se.sortBy = Se.sortBy ?? le.UpdateDate), this.Tc(Me, Se);
				}
				Qc(Ie, Be, Se) {
					const Ue = Be.value
							.replace(/@feature:/g, "")
							.trim()
							.split(" ")[0],
						qe = ee.$Io
							.as(_.Extensions.ExtensionFeaturesRegistry)
							.getExtensionFeature(Ue);
					if (!qe) return [];
					const Ae = qe.renderer ? this.Db.createInstance(qe.renderer) : void 0;
					try {
						const Me = Ie.filter((De) =>
							De.local
								? Ae?.shouldRender(De.local.manifest) ||
									this.pc.getAccessData(new N.$Gn(De.identifier.id), Ue)
								: !1,
						);
						return this.Tc(Me, Se);
					} finally {
						Ae?.dispose();
					}
				}
				Rc(Ie, Be) {
					const Se = [...Ie],
						ke = (qe) => {
							let Ae = -1;
							const Me = Be[qe];
							return Me &&
								((Ae = Se.findIndex((De) =>
									(0, a.$7p)(De.identifier, Me.identifier),
								)),
								Ae === -1)
								? ke(qe - 1)
								: Ae;
						};
					let Ue = !1;
					for (let qe = 0; qe < Be.length; qe++) {
						const Ae = Be[qe];
						Ie.every((Me) => !(0, a.$7p)(Me.identifier, Ae.identifier)) &&
							((Ue = !0), Ie.splice(ke(qe - 1) + 1, 0, Ae));
					}
					return Ue ? Ie : void 0;
				}
				async Sc(Ie, Be, Se, ke) {
					const Ue = Be.sortBy !== void 0;
					if (
						(!Ue && !Ie.value.trim() && (Be.sortBy = m.SortBy.InstallCount),
						this.Uc(Ie))
					)
						return this.Vc(Ie, Be, Se);
					const qe = Ie.value;
					if (/\bext:([^\s]+)\b/g.test(qe))
						return (
							(Be.text = qe),
							(Be.source = "file-extension-tags"),
							this.sb.queryGallery(Be, Se).then((Re) => this.od(Re))
						);
					let Ae = [];
					if (qe) {
						if (
							((Be.text = qe.substring(0, 350)),
							(Be.source = "searchText"),
							!Ue)
						) {
							const je = (await this.gc.getExtensionsControlManifest()).search;
							if (Array.isArray(je)) {
								for (const Ve of je)
									if (
										Ve.query &&
										Ve.query.toLowerCase() === qe.toLowerCase() &&
										Array.isArray(Ve.preferredResults)
									) {
										Ae = Ve.preferredResults;
										break;
									}
							}
						}
					} else Be.source = "viewlet";
					const Me = await this.sb.queryGallery(Be, Se);
					let De = 0;
					for (const Re of Ae)
						for (let je = De; je < Me.firstPage.length; je++)
							if ((0, a.$7p)(Me.firstPage[je].identifier, { id: Re })) {
								if (De !== je) {
									const Ve = Me.firstPage.splice(je, 1)[0];
									Me.firstPage.splice(De, 0, Ve), De++;
								}
								break;
							}
					if (ke) {
						const Re = ke.filter(
							(je) =>
								!Me.firstPage.some(
									(Ve) => Ve.identifier.id === je.identifier.id,
								),
						);
						Me.firstPage.unshift(...Re);
					}
					return this.od(Me);
				}
				Tc(Ie, Be) {
					switch (Be.sortBy) {
						case m.SortBy.InstallCount:
							Ie = Ie.sort((Se, ke) =>
								typeof ke.installCount == "number" &&
								typeof Se.installCount == "number"
									? ke.installCount - Se.installCount
									: NaN,
							);
							break;
						case le.UpdateDate:
							Ie = Ie.sort((Se, ke) =>
								typeof ke.local?.installedTimestamp == "number" &&
								typeof Se.local?.installedTimestamp == "number"
									? ke.local.installedTimestamp - Se.local.installedTimestamp
									: typeof ke.local?.installedTimestamp == "number"
										? 1
										: typeof Se.local?.installedTimestamp == "number"
											? -1
											: NaN,
							);
							break;
						case m.SortBy.AverageRating:
						case m.SortBy.WeightedRating:
							Ie = Ie.sort((Se, ke) =>
								typeof ke.rating == "number" && typeof Se.rating == "number"
									? ke.rating - Se.rating
									: NaN,
							);
							break;
						default:
							Ie = Ie.sort((Se, ke) =>
								Se.displayName.localeCompare(ke.displayName),
							);
							break;
					}
					return (
						Be.sortOrder === m.SortOrder.Descending && (Ie = Ie.reverse()), Ie
					);
				}
				Uc(Ie) {
					return (
						se.isWorkspaceRecommendedExtensionsQuery(Ie.value) ||
						se.isKeymapsRecommendedExtensionsQuery(Ie.value) ||
						se.isLanguageRecommendedExtensionsQuery(Ie.value) ||
						se.isExeRecommendedExtensionsQuery(Ie.value) ||
						se.isRemoteRecommendedExtensionsQuery(Ie.value) ||
						/@recommended:all/i.test(Ie.value) ||
						se.isSearchRecommendedExtensionsQuery(Ie.value) ||
						se.isRecommendedExtensionsQuery(Ie.value)
					);
				}
				async Vc(Ie, Be, Se) {
					return se.isWorkspaceRecommendedExtensionsQuery(Ie.value)
						? this.Yc(Ie, Be, Se)
						: se.isKeymapsRecommendedExtensionsQuery(Ie.value)
							? this.Zc(Ie, Be, Se)
							: se.isLanguageRecommendedExtensionsQuery(Ie.value)
								? this.$c(Ie, Be, Se)
								: se.isExeRecommendedExtensionsQuery(Ie.value)
									? this.bd(Ie, Be, Se)
									: se.isRemoteRecommendedExtensionsQuery(Ie.value)
										? this.ad(Ie, Be, Se)
										: /@recommended:all/i.test(Ie.value)
											? this.ed(Be, Se)
											: se.isSearchRecommendedExtensionsQuery(Ie.value) ||
													(se.isRecommendedExtensionsQuery(Ie.value) &&
														Be.sortBy !== void 0)
												? this.fd(Ie, Be, Se)
												: se.isRecommendedExtensionsQuery(Ie.value)
													? this.cd(Ie, Be, Se)
													: new d.$kp([]);
				}
				async Wc(Ie, Be, Se) {
					const ke = [];
					if (Ie.length) {
						const Ue = [],
							qe = [];
						for (const Ae of Ie)
							typeof Ae == "string" ? Ue.push(Ae) : qe.push(Ae);
						if (Ue.length)
							try {
								const Ae = await this.sb.getExtensions(
									Ue.map((Me) => ({ id: Me })),
									{ source: Be.source },
									Se,
								);
								for (const Me of Ae)
									Me.gallery &&
										!Me.deprecationInfo &&
										(await this.gc.canInstall(Me.gallery)) &&
										ke.push(Me);
							} catch (Ae) {
								if (!qe.length || !this.kd(Ae)) throw Ae;
							}
						if (qe.length) {
							const Ae = await this.sb.getResourceExtensions(qe, !0);
							for (const Me of Ae)
								(await this.sb.canInstall(Me)) && ke.push(Me);
						}
					}
					return ke;
				}
				async Xc() {
					const Ie = await this.cc.getWorkspaceRecommendations(),
						{ important: Be } = await this.cc.getConfigBasedRecommendations();
					for (const Se of Be) Ie.find((ke) => ke === Se) || Ie.push(Se);
					return Ie;
				}
				async Yc(Ie, Be, Se) {
					const ke = await this.Xc(),
						Ue = await this.Wc(
							ke,
							{ ...Be, source: "recommendations-workspace" },
							Se,
						);
					return new d.$kp(Ue);
				}
				async Zc(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended:keymaps/g, "")
							.trim()
							.toLowerCase(),
						Ue = this.cc.getKeymapRecommendations(),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations-keymaps" },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(qe);
				}
				async $c(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended:languages/g, "")
							.trim()
							.toLowerCase(),
						Ue = this.cc.getLanguageRecommendations(),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations-languages" },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(qe);
				}
				async ad(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended:remotes/g, "")
							.trim()
							.toLowerCase(),
						Ue = this.cc.getRemoteRecommendations(),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations-remotes" },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(qe);
				}
				async bd(Ie, Be, Se) {
					const ke = Ie.value.replace(/@exe:/g, "").trim().toLowerCase(),
						{ important: Ue, others: qe } =
							await this.cc.getExeBasedRecommendations(
								ke.startsWith('"') ? ke.substring(1, ke.length - 1) : ke,
							),
						Ae = await this.Wc(
							[...Ue, ...qe],
							{ ...Be, source: "recommendations-exe" },
							Se,
						);
					return new d.$kp(Ae);
				}
				async cd(Ie, Be, Se) {
					const ke = await this.dd(),
						Ue = await this.Wc(
							ke,
							{ ...Be, source: "recommendations-other", sortBy: void 0 },
							Se,
						),
						qe = (0, k.$Lb)(
							ke.map((Ae) =>
								Ue.find((Me) => (0, a.$7p)(Me.identifier, { id: Ae })),
							),
						);
					return new d.$kp(qe);
				}
				async dd() {
					const Ie = (await this.sb.queryLocal(this.t.server)).map((Se) =>
							Se.identifier.id.toLowerCase(),
						),
						Be = (await this.Xc()).map((Se) =>
							(0, te.$lg)(Se) ? Se.toLowerCase() : Se,
						);
					return (0, k.$Qb)(
						(
							await Promise.all([
								this.cc.getImportantRecommendations(),
								this.cc.getFileBasedRecommendations(),
								this.cc.getOtherRecommendations(),
							])
						)
							.flat()
							.filter(
								(Se) =>
									!Ie.includes(Se.toLowerCase()) &&
									!Be.includes(Se.toLowerCase()),
							),
						(Se) => Se.toLowerCase(),
					);
				}
				async ed(Ie, Be) {
					const Se = await this.sb.queryLocal(this.t.server),
						ke = Se.map((Me) => Me.identifier.id.toLowerCase()),
						Ue = (0, k.$Qb)(
							(
								await Promise.all([
									this.Xc(),
									this.cc.getImportantRecommendations(),
									this.cc.getFileBasedRecommendations(),
									this.cc.getOtherRecommendations(),
								])
							)
								.flat()
								.filter((Me) =>
									(0, te.$lg)(Me)
										? !ke.includes(Me.toLowerCase())
										: !Se.some(
												(De) =>
													De.local &&
													this.qc.extUri.isEqual(De.local.location, Me),
											),
								),
						),
						qe = await this.Wc(
							Ue,
							{ ...Ie, source: "recommendations-all", sortBy: void 0 },
							Be,
						),
						Ae = [];
					for (let Me = 0; Me < qe.length && Ae.length < 8; Me++) {
						const De = Ue[Me];
						if ((0, te.$lg)(De)) {
							const Re = qe.find((je) => (0, a.$7p)(je.identifier, { id: De }));
							Re && Ae.push(Re);
						} else {
							const Re = qe.find(
								(je) =>
									je.resourceExtension &&
									this.qc.extUri.isEqual(je.resourceExtension.location, De),
							);
							Re && Ae.push(Re);
						}
					}
					return new d.$kp(Ae);
				}
				async fd(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended/g, "")
							.trim()
							.toLowerCase(),
						Ue = (0, k.$Qb)([...(await this.Xc()), ...(await this.dd())]),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations", sortBy: void 0 },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(this.Tc(qe, Be));
				}
				gd(Ie, Be, Se) {
					this.f &&
						((this.f.model = new d.$np(Ie)),
						Se || (this.f.scrollTop = 0),
						this.jd(Be)),
						this.c && this.c.setCount(this.count());
				}
				hd(Ie) {
					this.f && ((this.f.model = new d.$np(Ie)), this.jd()),
						this.c && this.c.setCount(this.count());
				}
				jd(Ie) {
					if (this.b) {
						const Be = this.count();
						this.b.extensionsList.classList.toggle("hidden", Be === 0),
							this.b.messageContainer.classList.toggle("hidden", Be > 0),
							Be === 0 &&
								this.isBodyVisible() &&
								(Ie
									? this.kd(Ie)
										? ((this.b.messageSeverityIcon.className =
												O.SeverityIcon.className(I.Severity.Warning)),
											(this.b.messageBox.textContent = (0, t.localize)(
												6492,
												null,
											)))
										: ((this.b.messageSeverityIcon.className =
												O.SeverityIcon.className(I.Severity.Error)),
											(this.b.messageBox.textContent = (0, t.localize)(
												6493,
												null,
												(0, E.$bb)(Ie),
											)))
									: ((this.b.messageSeverityIcon.className = ""),
										(this.b.messageBox.textContent = (0, t.localize)(
											6494,
											null,
										))),
								(0, L.$oib)(this.b.messageBox.textContent));
					}
					this.ld();
				}
				kd(Ie) {
					return Ie instanceof m.$Fp
						? Ie.code === m.ExtensionGalleryErrorCode.Offline
						: (0, W.$pp)(Ie);
				}
				ld() {
					this.t.flexibleHeight &&
						((this.maximumBodySize = this.f?.model.length
							? Number.POSITIVE_INFINITY
							: 0),
						this.kc.store(
							`${this.id}.size`,
							this.f?.model.length || 0,
							x.StorageScope.PROFILE,
							x.StorageTarget.MACHINE,
						));
				}
				md(Ie, Be) {
					(Ie =
						this.sb.local.filter((Se) =>
							(0, a.$7p)(Se.identifier, Ie.identifier),
						)[0] || Ie),
						this.sb.open(Ie, Be).then(void 0, (Se) => this.nd(Se));
				}
				nd(Ie) {
					if ((0, E.$8)(Ie)) return;
					const Be = (Ie && Ie.message) || "";
					if (/ECONNREFUSED/.test(Be)) {
						const Se = (0, C.$zj)((0, t.localize)(6495, null), [
							new M.$rj(
								"open user settings",
								(0, t.localize)(6496, null),
								void 0,
								!0,
								() => this.jc.openUserSettings(),
							),
						]);
						this.L.error(Se);
						return;
					}
					this.L.error(Ie);
				}
				od(Ie) {
					if (Array.isArray(Ie)) return new d.$kp(Ie);
					const Be = {
						total: Ie.total,
						pageSize: Ie.pageSize,
						firstPage: Ie.firstPage,
						getPage: (Se, ke) => Ie.getPage(Se, ke),
					};
					return new d.$kp(Be);
				}
				dispose() {
					super.dispose(),
						this.g && (this.g.request.cancel(), (this.g = null)),
						this.h && (this.h.disposables.dispose(), (this.h = void 0)),
						(this.f = null);
				}
				static isLocalExtensionsQuery(Ie, Be) {
					return (
						this.isInstalledExtensionsQuery(Ie) ||
						this.isSearchInstalledExtensionsQuery(Ie) ||
						this.isOutdatedExtensionsQuery(Ie) ||
						this.isEnabledExtensionsQuery(Ie) ||
						this.isDisabledExtensionsQuery(Ie) ||
						this.isBuiltInExtensionsQuery(Ie) ||
						this.isSearchBuiltInExtensionsQuery(Ie) ||
						this.isBuiltInGroupExtensionsQuery(Ie) ||
						this.isSearchDeprecatedExtensionsQuery(Ie) ||
						this.isSearchWorkspaceUnsupportedExtensionsQuery(Ie) ||
						this.isSearchRecentlyUpdatedQuery(Ie) ||
						this.isSearchExtensionUpdatesQuery(Ie) ||
						this.isSortInstalledExtensionsQuery(Ie, Be) ||
						this.isFeatureExtensionsQuery(Ie)
					);
				}
				static isSearchBuiltInExtensionsQuery(Ie) {
					return /@builtin\s.+/i.test(Ie);
				}
				static isBuiltInExtensionsQuery(Ie) {
					return /^\s*@builtin$/i.test(Ie.trim());
				}
				static isBuiltInGroupExtensionsQuery(Ie) {
					return /^\s*@builtin:.+$/i.test(Ie.trim());
				}
				static isSearchWorkspaceUnsupportedExtensionsQuery(Ie) {
					return /^\s*@workspaceUnsupported(:(untrusted|virtual)(Partial)?)?(\s|$)/i.test(
						Ie,
					);
				}
				static isInstalledExtensionsQuery(Ie) {
					return /@installed$/i.test(Ie);
				}
				static isSearchInstalledExtensionsQuery(Ie) {
					return /@installed\s./i.test(Ie) || this.isFeatureExtensionsQuery(Ie);
				}
				static isOutdatedExtensionsQuery(Ie) {
					return /@outdated/i.test(Ie);
				}
				static isEnabledExtensionsQuery(Ie) {
					return /@enabled/i.test(Ie);
				}
				static isDisabledExtensionsQuery(Ie) {
					return /@disabled/i.test(Ie);
				}
				static isSearchDeprecatedExtensionsQuery(Ie) {
					return /@deprecated\s?.*/i.test(Ie);
				}
				static isRecommendedExtensionsQuery(Ie) {
					return /^@recommended$/i.test(Ie.trim());
				}
				static isSearchRecommendedExtensionsQuery(Ie) {
					return /@recommended\s.+/i.test(Ie);
				}
				static isWorkspaceRecommendedExtensionsQuery(Ie) {
					return /@recommended:workspace/i.test(Ie);
				}
				static isExeRecommendedExtensionsQuery(Ie) {
					return /@exe:.+/i.test(Ie);
				}
				static isRemoteRecommendedExtensionsQuery(Ie) {
					return /@recommended:remotes/i.test(Ie);
				}
				static isKeymapsRecommendedExtensionsQuery(Ie) {
					return /@recommended:keymaps/i.test(Ie);
				}
				static isLanguageRecommendedExtensionsQuery(Ie) {
					return /@recommended:languages/i.test(Ie);
				}
				static isSortInstalledExtensionsQuery(Ie, Be) {
					return (
						(Be !== void 0 && Be !== "" && Ie === "") ||
						(!Be && /^@sort:\S*$/i.test(Ie))
					);
				}
				static isSearchPopularQuery(Ie) {
					return /@popular/i.test(Ie);
				}
				static isSearchRecentlyPublishedQuery(Ie) {
					return /@recentlyPublished/i.test(Ie);
				}
				static isSearchRecentlyUpdatedQuery(Ie) {
					return /@recentlyUpdated/i.test(Ie);
				}
				static isSearchExtensionUpdatesQuery(Ie) {
					return /@updates/i.test(Ie);
				}
				static isSortUpdateDateQuery(Ie) {
					return /@sort:updateDate/i.test(Ie);
				}
				static isFeatureExtensionsQuery(Ie) {
					return /@feature:/i.test(Ie);
				}
				focus() {
					super.focus(),
						this.f &&
							(this.f.getFocus().length ||
								this.f.getSelection().length ||
								this.f.focusNext(),
							this.f.domFocus());
				}
			};
			(e.$3Sc = ae),
				(e.$3Sc =
					ae =
					se =
						Ne(
							[
								j(2, I.$4N),
								j(3, h.$uZ),
								j(4, c.$Xxb),
								j(5, g.$Li),
								j(6, s.$iP),
								j(7, b.$q2),
								j(8, o.$MQb),
								j(9, u.$9Qb),
								j(10, l.$km),
								j(11, Z.$Uyb),
								j(12, S.$gj),
								j(13, P.$Vi),
								j(14, r.$EQb),
								j(15, H.$JSb),
								j(16, r.$GQb),
								j(17, P.$Vi),
								j(18, R.$Bk),
								j(19, B.$6j),
								j(20, U.$K1),
								j(21, z.$7rb),
								j(22, F.$7Z),
								j(23, x.$lq),
								j(24, V.$pO),
								j(25, r.$IQb),
								j(26, G.$mEb),
								j(27, ie.$x6b),
								j(28, _.$$Sb),
								j(29, Q.$Vl),
								j(30, J.$ik),
							],
							ae,
						));
			class pe extends ae {
				async show() {
					const Ie =
						this.ec.webExtensionManagementServer &&
						!this.ec.localExtensionManagementServer &&
						!this.ec.remoteExtensionManagementServer
							? "@web"
							: "";
					return super.show(Ie);
				}
			}
			e.$4Sc = pe;
			class $e extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@installed"),
						(!ae.isLocalExtensionsQuery(Ie) ||
							ae.isSortInstalledExtensionsQuery(Ie)) &&
							(Ie = Ie += " @installed"),
						super.show(Ie.trim())
					);
				}
			}
			e.$5Sc = $e;
			class ye extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@enabled"),
						ae.isEnabledExtensionsQuery(Ie)
							? super.show(Ie)
							: ae.isSortInstalledExtensionsQuery(Ie)
								? super.show("@enabled " + Ie)
								: this.yc()
					);
				}
			}
			e.$6Sc = ye;
			class ue extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@disabled"),
						ae.isDisabledExtensionsQuery(Ie)
							? super.show(Ie)
							: ae.isSortInstalledExtensionsQuery(Ie)
								? super.show("@disabled " + Ie)
								: this.yc()
					);
				}
			}
			e.$7Sc = ue;
			class fe extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@outdated"),
						ae.isSearchExtensionUpdatesQuery(Ie) &&
							(Ie = Ie.replace("@updates", "@outdated")),
						super.show(Ie.trim())
					);
				}
				ld() {
					super.ld(), this.setExpanded(this.count() > 0);
				}
			}
			e.$8Sc = fe;
			class me extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@recentlyUpdated"),
						ae.isSearchExtensionUpdatesQuery(Ie) &&
							(Ie = Ie.replace("@updates", "@recentlyUpdated")),
						super.show(Ie.trim())
					);
				}
			}
			e.$9Sc = me;
			let ve = class extends ae {
				constructor(
					Ie,
					Be,
					Se,
					ke,
					Ue,
					qe,
					Ae,
					Me,
					De,
					Re,
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt,
					nt,
					lt,
					ct,
					gt,
					ht,
					Rt,
					Nt,
					jt,
					ti,
					kt,
					hi,
					Kt,
					di,
					Ye,
				) {
					super(
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
					),
						(this.t = Ie),
						(this.oc = hi);
				}
				show() {
					return super.show(this.t.query);
				}
			};
			(e.$0Sc = ve),
				(e.$0Sc = ve =
					Ne(
						[
							j(2, I.$4N),
							j(3, h.$uZ),
							j(4, c.$Xxb),
							j(5, g.$Li),
							j(6, s.$iP),
							j(7, b.$q2),
							j(8, o.$MQb),
							j(9, u.$9Qb),
							j(10, l.$km),
							j(11, Z.$Uyb),
							j(12, S.$gj),
							j(13, P.$Vi),
							j(14, r.$EQb),
							j(15, H.$JSb),
							j(16, r.$GQb),
							j(17, P.$Vi),
							j(18, R.$Bk),
							j(19, B.$6j),
							j(20, U.$K1),
							j(21, z.$7rb),
							j(22, F.$7Z),
							j(23, x.$lq),
							j(24, V.$pO),
							j(25, r.$IQb),
							j(26, G.$mEb),
							j(27, ie.$x6b),
							j(28, _.$$Sb),
							j(29, Q.$Vl),
							j(30, J.$ik),
						],
						ve,
					));
			function ge(Ee, Ie) {
				if (!Ee) return "@workspaceUnsupported:" + Ie;
				const Be = Ee.match(
					new RegExp(`@workspaceUnsupported(:${Ie})?(\\s|$)`, "i"),
				);
				if (Be)
					return Be[1]
						? Ee
						: Ee.replace(
								/@workspaceUnsupported/gi,
								"@workspaceUnsupported:" + Ie,
							);
			}
			class be extends ae {
				async show(Ie) {
					const Be = ge(Ie, "untrusted");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$$Sc = be;
			class Ce extends ae {
				async show(Ie) {
					const Be = ge(Ie, "untrustedPartial");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$_Sc = Ce;
			class Le extends ae {
				async show(Ie) {
					const Be = ge(Ie, "virtual");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$aTc = Le;
			class Fe extends ae {
				async show(Ie) {
					const Be = ge(Ie, "virtualPartial");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$bTc = Fe;
			class Oe extends ae {
				async show(Ie) {
					return ae.isSearchDeprecatedExtensionsQuery(Ie)
						? super.show(Ie)
						: this.yc();
				}
			}
			e.$cTc = Oe;
			class xe extends ae {
				constructor() {
					super(...arguments),
						(this.pd = this.D(new A.$Kh(2e3))),
						(this.qd = Promise.resolve());
				}
				uc() {
					return !0;
				}
				async show(Ie) {
					if (this.oc.isAuthenticated()) {
						const Be = super.show(Ie);
						return (
							this.pd.trigger(() => this.sd()),
							(this.qd = Be.then(null, null)),
							Be
						);
					} else return this.yc(), new d.$kp([]);
				}
				async sd() {
					await this.qd,
						this.Gb.publicLog2("extensionsView:MarketplaceSearchFinished");
				}
			}
			e.$dTc = xe;
			class He extends ae {
				constructor() {
					super(...arguments), (this.pd = "@recommended:all");
				}
				W(Ie) {
					super.W(Ie),
						this.D(
							this.cc.onDidChangeRecommendations(() => {
								this.show("");
							}),
						);
				}
				async show(Ie) {
					if (Ie && Ie.trim() !== this.pd) return this.yc();
					const Be = await super.show(this.pd);
					return (
						this.sb.local.some((Se) => !Se.isBuiltin) ||
							this.setExpanded(Be.length > 0),
						Be
					);
				}
			}
			e.$eTc = He;
			class Ke extends ae {
				constructor() {
					super(...arguments), (this.pd = "@recommended");
				}
				W(Ie) {
					super.W(Ie),
						this.D(
							this.cc.onDidChangeRecommendations(() => {
								this.show("");
							}),
						);
				}
				async show(Ie) {
					return Ie && Ie.trim() !== this.pd ? this.yc() : super.show(this.pd);
				}
			}
			e.$fTc = Ke;
			class Je extends ae {
				constructor() {
					super(...arguments), (this.pd = "@recommended:workspace");
				}
				W(Ie) {
					super.W(Ie),
						this.D(
							this.cc.onDidChangeRecommendations(() => this.show(this.pd)),
						),
						this.D(this.dc.onDidChangeWorkbenchState(() => this.show(this.pd)));
				}
				async show(Ie) {
					const Se = await (Ie &&
					Ie.trim() !== "@recommended" &&
					Ie.trim() !== "@recommended:workspace"
						? this.yc()
						: super.show(this.pd));
					return this.setExpanded(Se.length > 0), Se;
				}
				async rd() {
					const Ie = (await this.sb.queryLocal()).filter(
							(Se) =>
								Se.enablementState !==
								r.EnablementState.DisabledByExtensionKind,
						),
						Be = (await this.Xc()).filter((Se) =>
							Ie.every((ke) =>
								(0, te.$lg)(Se)
									? !(0, a.$7p)({ id: Se }, ke.identifier)
									: !this.qc.extUri.isEqual(Se, ke.local?.location),
							),
						);
					return this.Wc(
						Be,
						{ source: "install-all-workspace-recommendations" },
						D.CancellationToken.None,
					);
				}
				async installWorkspaceRecommendations() {
					const Ie = await this.rd();
					if (Ie.length) {
						const Be = [],
							Se = [];
						for (const ke of Ie)
							ke.gallery
								? Be.push({ extension: ke.gallery, options: {} })
								: Se.push(ke);
						await Promise.all([
							this.gc.installGalleryExtensions(Be),
							...Se.map((ke) => this.sb.install(ke)),
						]);
					} else
						this.L.notify({
							severity: I.Severity.Info,
							message: (0, t.localize)(6497, null),
						});
				}
			}
			e.$gTc = Je;
			function Te(Ee) {
				if (!Ee) return "";
				const Ie = Ee.publisherDomain?.verified
						? (0, t.localize)(6498, null, Ee.publisherDisplayName)
						: (0, t.localize)(6499, null, Ee.publisherDisplayName),
					Be = Ee?.deprecationInfo ? (0, t.localize)(6500, null) : "",
					Se = Ee?.rating
						? (0, t.localize)(6501, null, Ee.rating.toFixed(2), Ee.ratingCount)
						: "";
				return `${Ee.displayName}, ${Be ? `${Be}, ` : ""}${Ee.version}, ${Ie}, ${Ee.description} ${Se ? `, ${Se}` : ""}`;
			}
		},
	),
		define(
			de[4297],
			he([
				1, 0, 7, 4, 3, 50, 141, 6, 5, 93, 10, 8, 35, 33, 24, 1356, 51, 114, 168,
				27, 160, 1990,
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
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kTc = e.$jTc = e.$iTc = void 0),
					(e.$lTc = D),
					(t = mt(t));
				let $ = class extends w.$1c {
					constructor(N, A, R) {
						super(),
							(this.f = R),
							(this.element = t.$fhb(N, t.$(".extensions-grid-view"))),
							(this.a = this.f.createInstance(
								g.$YSc,
								{ onFocus: d.Event.None, onBlur: d.Event.None },
								{
									hoverOptions: {
										position() {
											return s.HoverPosition.BELOW;
										},
									},
								},
							)),
							(this.b = A),
							(this.c = this.D(new w.$Zc()));
					}
					setExtensions(N) {
						this.c.clear(), N.forEach((A, R) => this.g(A, R));
					}
					g(N, A) {
						const R = t.$fhb(this.element, t.$(".extension-container"));
						(R.style.height = `${this.b.getHeight()}px`),
							R.setAttribute("tabindex", "0");
						const O = this.a.renderTemplate(R);
						this.c.add((0, w.$Yc)(() => this.a.disposeTemplate(O)));
						const B = this.f.createInstance(P);
						(B.extension = N), O.name.setAttribute("tabindex", "0");
						const U = (z) => {
							(z instanceof o.$7fb && z.keyCode !== b.KeyCode.Enter) ||
								(B.run(z.ctrlKey || z.metaKey),
								z.stopPropagation(),
								z.preventDefault());
						};
						this.c.add(
							t.$0fb(O.name, t.$$gb.CLICK, (z) =>
								U(new f.$2fb(t.getWindow(O.name), z)),
							),
						),
							this.c.add(
								t.$0fb(O.name, t.$$gb.KEY_DOWN, (z) => U(new o.$7fb(z))),
							),
							this.c.add(t.$0fb(R, t.$$gb.KEY_DOWN, (z) => U(new o.$7fb(z)))),
							this.a.renderElement(N, A, O);
					}
				};
				(e.$iTc = $), (e.$iTc = $ = Ne([j(2, m.$Li)], $));
				class v {
					hasChildren({ hasChildren: N }) {
						return N;
					}
					getChildren(N) {
						return N.getChildren();
					}
				}
				class S {
					getHeight(N) {
						return 62;
					}
					getTemplateId({ extension: N }) {
						return N ? I.TEMPLATE_ID : T.TEMPLATE_ID;
					}
				}
				let I = class {
					static {
						y = this;
					}
					static {
						this.TEMPLATE_ID = "extension-template";
					}
					constructor(N) {
						this.a = N;
					}
					get templateId() {
						return y.TEMPLATE_ID;
					}
					renderTemplate(N) {
						N.classList.add("extension");
						const A = t.$fhb(N, t.$("img.icon")),
							R = t.$fhb(N, t.$(".details")),
							O = t.$fhb(R, t.$(".header")),
							B = t.$fhb(O, t.$("span.name")),
							U = this.a.createInstance(P),
							z = [
								t.$0fb(B, "click", (q) => {
									U.run(q.ctrlKey || q.metaKey),
										q.stopPropagation(),
										q.preventDefault();
								}),
							],
							F = t.$fhb(O, t.$("span.identifier")),
							x = t.$fhb(R, t.$(".footer")),
							H = t.$fhb(x, t.$(".author"));
						return {
							icon: A,
							name: B,
							identifier: F,
							author: H,
							extensionDisposables: z,
							set extensionData(q) {
								U.extension = q.extension;
							},
						};
					}
					renderElement(N, A, R) {
						const O = N.element.extension;
						R.extensionDisposables.push(
							t.$0fb(R.icon, "error", () => (R.icon.src = O.iconUrlFallback), {
								once: !0,
							}),
						),
							(R.icon.src = O.iconUrl),
							R.icon.complete
								? (R.icon.style.visibility = "inherit")
								: ((R.icon.style.visibility = "hidden"),
									(R.icon.onload = () =>
										(R.icon.style.visibility = "inherit"))),
							(R.name.textContent = O.displayName),
							(R.identifier.textContent = O.identifier.id),
							(R.author.textContent = O.publisherDisplayName),
							(R.extensionData = N.element);
					}
					disposeTemplate(N) {
						N.extensionDisposables = (0, w.$Vc)(N.extensionDisposables);
					}
				};
				I = y = Ne([j(0, m.$Li)], I);
				class T {
					static {
						this.TEMPLATE_ID = "unknown-extension-template";
					}
					get templateId() {
						return T.TEMPLATE_ID;
					}
					renderTemplate(N) {
						const A = t.$fhb(N, t.$("div.unknown-extension"));
						return (
							(t.$fhb(A, t.$("span.error-marker")).textContent = (0,
							i.localize)(6446, null)),
							(t.$fhb(A, t.$("span.message")).textContent = (0, i.localize)(
								6447,
								null,
							)),
							{ identifier: t.$fhb(A, t.$("span.message")) }
						);
					}
					renderElement(N, A, R) {
						R.identifier.textContent = N.element.extension.identifier.id;
					}
					disposeTemplate(N) {}
				}
				let P = class extends E.$rj {
					constructor(N) {
						super("extensions.action.openExtension", ""), (this.b = N);
					}
					set extension(N) {
						this.a = N;
					}
					run(N) {
						return this.a
							? this.b.open(this.a, { sideByside: N })
							: Promise.resolve();
					}
				};
				P = Ne([j(0, C.$MQb)], P);
				let k = class extends r.$FMb {
					constructor(N, A, R, O, B, U, z, F) {
						const x = new S(),
							H = new v(),
							q = [U.createInstance(I), U.createInstance(T)],
							V = {
								getId({ extension: G, parent: K }) {
									return K
										? this.getId(K) + "/" + G.identifier.id
										: G.identifier.id;
								},
							};
						super(
							"ExtensionsTree",
							A,
							x,
							q,
							H,
							{
								indent: 40,
								identityProvider: V,
								multipleSelectionSupport: !1,
								overrideStyles: R,
								accessibilityProvider: {
									getAriaLabel(G) {
										return (0, l.$hTc)(G.extension);
									},
									getWidgetAriaLabel() {
										return (0, i.localize)(6448, null);
									},
								},
							},
							U,
							O,
							B,
							z,
						),
							this.setInput(N),
							this.u.add(
								this.onDidChangeSelection((G) => {
									t.$8gb(G.browserEvent) &&
										F.open(G.elements[0].extension, { sideByside: !1 });
								}),
							);
					}
				};
				(e.$jTc = k),
					(e.$jTc = k =
						Ne(
							[
								j(3, a.$6j),
								j(4, r.$fMb),
								j(5, m.$Li),
								j(6, u.$gj),
								j(7, C.$MQb),
							],
							k,
						));
				class L {
					constructor(N, A, R, O) {
						(this.extension = N),
							(this.parent = A),
							(this.a = R),
							(this.c = O),
							(this.b = this.a(N));
					}
					get hasChildren() {
						return (0, n.$Pb)(this.b);
					}
					async getChildren() {
						return this.hasChildren
							? (await D(this.b, this.c)).map(
									(A) => new L(A, this, this.a, this.c),
								)
							: null;
					}
				}
				e.$kTc = L;
				async function D(M, N) {
					const A = N.local.reduce(
							(B, U) => (B.set(U.identifier.id.toLowerCase(), U), B),
							new Map(),
						),
						R = [],
						O = [];
					for (const B of M) {
						const U = B.toLowerCase(),
							z = A.get(U);
						z ? R.push(z) : O.push(U);
					}
					if (O.length) {
						const B = await N.getExtensions(
							O.map((U) => ({ id: U })),
							c.CancellationToken.None,
						);
						R.push(...B);
					}
					return R;
				}
				(0, h.$oP)((M, N) => {
					const A = M.getColor(p.$AS);
					A &&
						N.addRule(
							`.extensions-grid-view .extension-container:focus { background-color: ${A}; outline: none; }`,
						);
					const R = M.getColor(p.$BS);
					R &&
						N.addRule(
							`.extensions-grid-view .extension-container:focus { color: ${R}; }`,
						);
					const O = M.getColor(p.$IP),
						B = M.getColor(p.$8P);
					if (O && B) {
						const U = O.transparent(0.9).makeOpaque(B);
						N.addRule(
							`.extensions-grid-view .extension-container:not(.disabled) .author { color: ${U}; }`,
						);
						const z = O.transparent(0.5).makeOpaque(B);
						N.addRule(
							`.extensions-grid-view .extension-container.disabled { color: ${z}; }`,
						);
					}
				});
			},
		),
		define(
			de[4298],
			he([
				1, 0, 7, 105, 95, 203, 268, 50, 24, 744, 33, 29, 6, 27, 3, 23, 12, 464,
				28, 9, 47, 71, 74, 61, 913, 4, 11, 8, 49, 119, 154, 109, 5, 43, 40, 41,
				21, 32, 106, 51, 35, 25, 217, 60, 3308, 404, 1356, 4297, 1955, 141, 382,
				1738, 355, 18, 314, 53, 142, 89, 220, 68, 72, 2436,
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
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
			) {
				"use strict";
				var oe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oTc = void 0),
					(m = mt(m)),
					(o = mt(o));
				class ae extends n.$1c {
					get onChange() {
						return this.b.event;
					}
					get currentId() {
						return this.c;
					}
					constructor(be) {
						super(), (this.b = this.D(new h.$re())), (this.c = null);
						const Ce = (0, t.$fhb)(be, (0, t.$)(".navbar"));
						(this.f = []), (this.g = this.D(new i.$eib(Ce)));
					}
					push(be, Ce, Le) {
						const Fe = new d.$rj(be, Ce, void 0, !0, () => this.h(be, !0));
						(Fe.tooltip = Le),
							this.f.push(Fe),
							this.g.push(Fe),
							this.f.length === 1 && this.h(be);
					}
					clear() {
						(this.f = (0, n.$Vc)(this.f)), this.g.clear();
					}
					switch(be) {
						const Ce = this.f.find((Le) => Le.id === be);
						return Ce ? (Ce.run(), !0) : !1;
					}
					h(be, Ce) {
						(this.c = be),
							this.b.fire({ id: be, focus: !!Ce }),
							this.f.forEach((Le) => (Le.checked = Le.id === be));
					}
				}
				var pe;
				(function (ge) {
					(ge[(ge.Readme = 0)] = "Readme"),
						(ge[(ge.Changelog = 1)] = "Changelog");
				})(pe || (pe = {}));
				const $e = new T.$5j("showPreReleaseVersion", !1);
				class ye extends W.$ESc {
					constructor() {
						super(...arguments), (this.c = null);
					}
					get gallery() {
						return this.c;
					}
					set gallery(be) {
						(this.extension &&
							be &&
							!(0, L.$7p)(this.extension.identifier, be.identifier)) ||
							((this.c = be), this.update());
					}
				}
				class ue extends ye {
					constructor(be, Ce) {
						super(),
							(this.f = (0, t.$fhb)(be, (0, t.$)("code.version"))),
							this.D(
								Ce.setupManagedHover(
									(0, w.$cib)("mouse"),
									this.f,
									(0, S.localize)(6020, null),
								),
							),
							this.render();
					}
					render() {
						!this.extension ||
							!o.valid(this.extension.version) ||
							(this.f.textContent = `v${this.gallery?.version ?? this.extension.version}${this.extension.isPreReleaseVersion ? " (pre-release)" : ""}`);
					}
				}
				let fe = class extends H.$JEb {
					static {
						oe = this;
					}
					static {
						this.ID = "workbench.editor.extension";
					}
					constructor(
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
					) {
						super(oe.ID, be, Ce, He, Ee),
							(this.gb = Le),
							(this.hb = Fe),
							(this.ib = Oe),
							(this.jb = xe),
							(this.kb = Ke),
							(this.lb = Je),
							(this.mb = Te),
							(this.nb = Ie),
							(this.ob = Be),
							(this.pb = Se),
							(this.qb = ke),
							(this.rb = Ue),
							(this.sb = qe),
							(this.tb = Ae),
							(this.ub = Me),
							(this.vb = De),
							(this.wb = Re),
							(this.b = this.D(new n.$2c())),
							(this.m = new Map()),
							(this.r = ""),
							(this.s = []),
							(this.u = this.D(new n.$Zc())),
							(this.cb = this.D(new n.$Zc())),
							(this.db = null),
							(this.f = null),
							(this.g = null),
							(this.j = null);
					}
					get scopedContextKeyService() {
						return this.b.value;
					}
					Y(be) {
						const Ce = (0, t.$fhb)(be, (0, t.$)(".extension-editor"));
						(this.b.value = this.rb.createScoped(Ce)),
							this.b.value.createKey("inExtensionEditor", !0),
							(this.fb = $e.bindTo(this.b.value)),
							(Ce.tabIndex = 0),
							(Ce.style.outline = "none"),
							Ce.setAttribute("role", "document");
						const Le = (0, t.$fhb)(Ce, (0, t.$)(".header")),
							Fe = (0, t.$fhb)(Le, (0, t.$)(".icon-container")),
							Oe = (0, t.$fhb)(
								Fe,
								(0, t.$)("img.icon", { draggable: !1, alt: "" }),
							),
							xe = this.gb.createInstance(W.$MSc, Fe, !0),
							He = (0, t.$fhb)(Le, (0, t.$)(".details")),
							Ke = (0, t.$fhb)(He, (0, t.$)(".title")),
							Je = (0, t.$fhb)(
								Ke,
								(0, t.$)("span.name.clickable", {
									role: "heading",
									tabIndex: 0,
								}),
							);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Je,
								(0, S.localize)(6021, null),
							),
						);
						const Te = new ue(Ke, this.wb),
							Ee = (0, t.$fhb)(Ke, (0, t.$)("span.preview"));
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Ee,
								(0, S.localize)(6022, null),
							),
						),
							(Ee.textContent = (0, S.localize)(6023, null));
						const Ie = (0, t.$fhb)(Ke, (0, t.$)("span.builtin"));
						Ie.textContent = (0, S.localize)(6024, null);
						const Be = (0, t.$fhb)(He, (0, t.$)(".subtitle")),
							Se = (0, t.$fhb)(
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
								(0, t.$)(".publisher.clickable", { tabIndex: 0 }),
							);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Se,
								(0, S.localize)(6025, null),
							),
						),
							Se.setAttribute("role", "button");
						const ke = (0, t.$fhb)(Se, (0, t.$)(".publisher-name")),
							Ue = this.gb.createInstance(
								W.$ISc,
								(0, t.$fhb)(Se, (0, t.$)(".verified-publisher")),
								!1,
							),
							qe = (0, t.$fhb)(
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry.resource")),
								(0, t.$)("", { tabIndex: 0 }),
							);
						qe.setAttribute("role", "button");
						const Ae = (0, t.$fhb)(
							(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
							(0, t.$)("span.install", { tabIndex: 0 }),
						);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Ae,
								(0, S.localize)(6026, null),
							),
						);
						const Me = this.gb.createInstance(W.$GSc, Ae, !1),
							De = (0, t.$fhb)(
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
								(0, t.$)("span.rating.clickable", { tabIndex: 0 }),
							);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								De,
								(0, S.localize)(6027, null),
							),
						),
							De.setAttribute("role", "link");
						const Re = this.gb.createInstance(W.$HSc, De, !1),
							je = this.gb.createInstance(
								W.$JSc,
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
							),
							Ve = [xe, Te, Ue, Me, Re, je],
							Ze = (0, t.$fhb)(He, (0, t.$)(".description")),
							et = this.gb.createInstance(G.$eTb),
							rt = [
								this.gb.createInstance(G.$DTb),
								this.gb.createInstance(G.$RTb),
								this.gb.createInstance(G.$lTb, !0),
								this.gb.createInstance(G.$ETb),
								this.gb.createInstance(G.$FTb),
								this.gb.createInstance(G.$GTb),
								this.gb.createInstance(G.$HTb),
								this.gb.createInstance(G.$ITb),
								this.gb.createInstance(G.$BTb),
								this.gb.createInstance(G.$CTb),
								this.gb.createInstance(G.$hTb, !1),
								this.gb.createInstance(G.$iTb),
								this.gb.createInstance(G.$jTb),
								et,
								this.gb.createInstance(G.$fTb),
								this.gb.createInstance(
									G.$bTb,
									"extensions.uninstall",
									G.$kTb.UninstallClass,
									[
										[
											this.gb.createInstance(G.$oTb, !1),
											this.gb.createInstance(G.$kTb),
											this.gb.createInstance(G.$wTb, null, !0),
										],
									],
								),
								this.gb.createInstance(G.$vTb),
								this.gb.createInstance(G.$mTb),
								new G.$tTb(this.scopedContextKeyService || this.rb, this.gb),
							],
							ft = (0, t.$fhb)(He, (0, t.$)(".actions-status-container")),
							bt = this.D(
								new i.$eib(ft, {
									actionViewItemProvider: (kt, hi) => {
										if (kt instanceof G.$pTb)
											return kt.createActionViewItem(hi);
										if (kt instanceof G.$bTb)
											return new G.$cTb(
												kt,
												{
													...hi,
													icon: !0,
													label: !0,
													menuActionsOrProvider: {
														getActions: () => kt.menuActions,
													},
													menuActionClassNames: kt.menuActionClassNames,
												},
												this.qb,
											);
										if (kt instanceof G.$mTb)
											return new C.$0ib(void 0, kt, {
												...hi,
												icon: !0,
												label: !0,
												checkboxStyles: U.$syb,
											});
									},
									focusOnlyEnabledItems: !0,
								}),
							);
						bt.push(rt, { icon: !0, label: !0 }),
							bt.setFocusable(!0),
							this.D(
								h.Event.any(
									...rt.map((kt) =>
										h.Event.filter(
											kt.onDidChange,
											(hi) => hi.enabled !== void 0,
										),
									),
								)(() => {
									bt.setFocusable(!1), bt.setFocusable(!0);
								}),
							);
						const nt = [],
							lt = this.gb.createInstance(G.$TTb),
							ct = this.D(
								this.gb.createInstance(
									W.$RSc,
									(0, t.$fhb)(ft, (0, t.$)(".status")),
									lt,
								),
							);
						nt.push(
							lt,
							new (class extends W.$ESc {
								render() {
									ft.classList.toggle(
										"list-layout",
										this.extension?.state === X.ExtensionState.Installed,
									);
								}
							})(),
						);
						const gt = this.gb.createInstance(
							W.$SSc,
							(0, t.$fhb)(He, (0, t.$)(".recommendation")),
						);
						Ve.push(gt),
							this.D(
								h.Event.any(
									ct.onDidRender,
									gt.onDidRender,
								)(() => {
									this.eb && this.layout(this.eb);
								}),
							);
						const ht = this.gb.createInstance(X.$SQb, [...rt, ...Ve, ...nt]);
						for (const kt of [...rt, ...Ve, ...nt, ht]) this.D(kt);
						const Rt = h.Event.chain(bt.onDidRun, (kt) =>
							kt.map(({ error: hi }) => hi).filter((hi) => !!hi),
						);
						this.D(Rt(this.Ub, this));
						const Nt = (0, t.$fhb)(Ce, (0, t.$)(".body")),
							jt = new ae(Nt),
							ti = (0, t.$fhb)(Nt, (0, t.$)(".content"));
						(ti.id = (0, s.$9g)()),
							(this.c = {
								builtin: Ie,
								content: ti,
								description: Ze,
								header: Le,
								icon: Oe,
								iconContainer: Fe,
								installCount: Ae,
								name: Je,
								navbar: jt,
								preview: Ee,
								publisher: Se,
								publisherDisplayName: ke,
								resource: qe,
								rating: De,
								actionsAndStatusContainer: ft,
								extensionActionBar: bt,
								set extension(kt) {
									ht.extension = kt;
								},
								set gallery(kt) {
									Te.gallery = kt;
								},
								set manifest(kt) {
									et.manifest = kt;
								},
							});
					}
					async setInput(be, Ce, Le, Fe) {
						await super.setInput(be, Ce, Le, Fe),
							this.yb(),
							this.c &&
								(await this.Ab(be.extension, this.c, !!Ce?.preserveFocus));
					}
					setOptions(be) {
						const Ce = this.options;
						if (
							(super.setOptions(be),
							this.yb(),
							this.input &&
								this.c &&
								Ce?.showPreReleaseVersion !== be?.showPreReleaseVersion)
						) {
							this.Ab(this.input.extension, this.c, !!be?.preserveFocus);
							return;
						}
						be?.tab && this.c?.navbar.switch(be.tab);
					}
					yb() {
						let be = this.options?.showPreReleaseVersion;
						(0, f.$sg)(be) &&
							(be =
								!!this.input.extension.gallery?.properties.isPreReleaseVersion),
							this.fb?.set(be);
					}
					async openTab(be) {
						!this.input ||
							!this.c ||
							this.c.navbar.switch(be) ||
							(be === X.ExtensionEditorTab.ExtensionPack &&
								this.c.navbar.switch(X.ExtensionEditorTab.Readme));
					}
					async zb(be, Ce) {
						return be.resourceExtension ||
							be.local?.source === "resource" ||
							(0, f.$sg)(Ce) ||
							Ce === be.gallery?.properties.isPreReleaseVersion ||
							(Ce && !be.hasPreReleaseVersion) ||
							(!Ce && !be.hasReleaseVersion)
							? null
							: (
									await this.jb.getExtensions(
										[
											{
												...be.identifier,
												preRelease: Ce,
												hasPreRelease: be.hasPreReleaseVersion,
											},
										],
										u.CancellationToken.None,
									)
								)[0] || null;
					}
					async Ab(be, Ce, Le) {
						(this.db = null), this.cb.clear();
						const Fe = this.cb.add(new u.$Ce()).token,
							Oe = await this.zb(be, this.options?.showPreReleaseVersion);
						if (Fe.isCancellationRequested) return;
						(this.f = new r.$df(() =>
							Oe ? this.jb.getReadme(Oe, Fe) : be.getReadme(Fe),
						)),
							(this.g = new r.$df(() =>
								Oe ? this.jb.getChangelog(Oe, Fe) : be.getChangelog(Fe),
							)),
							(this.j = new r.$df(() =>
								Oe ? this.jb.getManifest(Oe, Fe) : be.getManifest(Fe),
							)),
							(Ce.extension = be),
							(Ce.gallery = Oe),
							(Ce.manifest = null),
							this.cb.add(
								(0, t.$0fb)(
									Ce.icon,
									"error",
									() => (Ce.icon.src = be.iconUrlFallback),
									{ once: !0 },
								),
							),
							(Ce.icon.src = be.iconUrl),
							(Ce.name.textContent = be.displayName),
							Ce.name.classList.toggle("clickable", !!be.url),
							Ce.name.classList.toggle("deprecated", !!be.deprecationInfo),
							(Ce.preview.style.display = be.preview ? "inherit" : "none"),
							(Ce.builtin.style.display = be.isBuiltin ? "inherit" : "none"),
							(Ce.description.textContent = be.description),
							Ce.publisher.classList.toggle("clickable", !!be.url),
							(Ce.publisherDisplayName.textContent = be.publisherDisplayName),
							Ce.publisher.parentElement?.classList.toggle(
								"hide",
								!!be.resourceExtension || be.local?.source === "resource",
							);
						const xe =
							be.resourceExtension?.location ??
							(be.local?.source === "resource" ? be.local?.location : void 0);
						if (
							(Ce.resource.parentElement?.classList.toggle("hide", !xe), xe)
						) {
							const Te = this.sb.getWorkspaceFolder(xe);
							Te && be.isWorkspaceScoped
								? (Ce.resource.parentElement?.classList.add("clickable"),
									this.cb.add(
										this.wb.setupManagedHover(
											(0, w.$cib)("mouse"),
											Ce.resource,
											this.vb.extUri.relativePath(Te.uri, xe),
										),
									),
									(Ce.resource.textContent = (0, S.localize)(6028, null)),
									this.cb.add(
										(0, W.$FSc)(Ce.resource, () => {
											this.ub
												.openView(se.$wUb, !0)
												.then(() => this.tb.select(xe, !0));
										}),
									))
								: (Ce.resource.parentElement?.classList.remove("clickable"),
									this.cb.add(
										this.wb.setupManagedHover(
											(0, w.$cib)("mouse"),
											Ce.resource,
											xe.path,
										),
									),
									(Ce.resource.textContent = (0, S.localize)(6029, null)));
						}
						Ce.installCount.parentElement?.classList.toggle("hide", !be.url),
							Ce.rating.parentElement?.classList.toggle("hide", !be.url),
							Ce.rating.classList.toggle("clickable", !!be.url),
							be.url &&
								(this.cb.add(
									(0, W.$FSc)(Ce.name, () => this.lb.open(b.URI.parse(be.url))),
								),
								this.cb.add(
									(0, W.$FSc)(Ce.rating, () =>
										this.lb.open(
											b.URI.parse(`${be.url}&ssr=false#review-details`),
										),
									),
								),
								this.cb.add(
									(0, W.$FSc)(Ce.publisher, () => {
										this.hb
											.openPaneComposite(
												X.$LQb,
												q.ViewContainerLocation.Sidebar,
												!0,
											)
											.then((Te) => Te?.getViewPaneContainer())
											.then((Te) =>
												Te.search(`publisher:"${be.publisherDisplayName}"`),
											);
									}),
								));
						const He = await this.j.get().promise;
						if (Fe.isCancellationRequested) return;
						He && (Ce.manifest = He), this.Bb(be, He, Ce, Le);
						const Ke = this.mb.getAllRecommendationsWithReason();
						let Je = {};
						Ke[be.identifier.id.toLowerCase()] &&
							(Je = {
								recommendationReason:
									Ke[be.identifier.id.toLowerCase()].reasonId,
							}),
							this.Q.publicLog("extensionGallery:openExtension", {
								...be.telemetryData,
								...Je,
							});
					}
					Bb(be, Ce, Le, Fe) {
						(Le.content.innerText = ""),
							Le.navbar.clear(),
							this.r !== be.identifier.id &&
								(this.m.clear(), (this.r = be.identifier.id)),
							Le.navbar.push(
								X.ExtensionEditorTab.Readme,
								(0, S.localize)(6030, null),
								(0, S.localize)(6031, null),
							),
							Ce &&
								Le.navbar.push(
									X.ExtensionEditorTab.Features,
									(0, S.localize)(6032, null),
									(0, S.localize)(6033, null),
								),
							be.hasChangelog() &&
								Le.navbar.push(
									X.ExtensionEditorTab.Changelog,
									(0, S.localize)(6034, null),
									(0, S.localize)(6035, null),
								),
							be.dependencies.length &&
								Le.navbar.push(
									X.ExtensionEditorTab.Dependencies,
									(0, S.localize)(6036, null),
									(0, S.localize)(6037, null),
								),
							Ce &&
								Ce.extensionPack?.length &&
								!this.Ib(Ce) &&
								Le.navbar.push(
									X.ExtensionEditorTab.ExtensionPack,
									(0, S.localize)(6038, null),
									(0, S.localize)(6039, null),
								),
							this.options?.tab && Le.navbar.switch(this.options.tab),
							Le.navbar.currentId &&
								this.Cb(be, { id: Le.navbar.currentId, focus: !Fe }, Le),
							Le.navbar.onChange((Oe) => this.Cb(be, Oe, Le), this, this.cb);
					}
					clearInput() {
						this.u.clear(), this.cb.clear(), super.clearInput();
					}
					focus() {
						super.focus(), this.db?.focus();
					}
					showFind() {
						this.activeWebview?.showFind();
					}
					runFindAction(be) {
						this.activeWebview?.runFindAction(be);
					}
					get activeWebview() {
						if (!(!this.db || !this.db.runFindAction)) return this.db;
					}
					Cb(be, { id: Ce, focus: Le }, Fe) {
						if (
							(this.u.clear(),
							(Fe.content.innerText = ""),
							(this.db = null),
							Ce)
						) {
							const Oe = new u.$Ce();
							this.u.add((0, n.$Yc)(() => Oe.dispose(!0))),
								this.Db(Ce, be, Fe, Oe.token).then((xe) => {
									Oe.token.isCancellationRequested ||
										((this.db = xe), Le && this.focus());
								});
						}
					}
					Db(be, Ce, Le, Fe) {
						switch (be) {
							case X.ExtensionEditorTab.Readme:
								return this.Hb(Ce, Le, Fe);
							case X.ExtensionEditorTab.Features:
								return this.Pb(Le, Fe);
							case X.ExtensionEditorTab.Changelog:
								return this.Ob(Ce, Le, Fe);
							case X.ExtensionEditorTab.Dependencies:
								return this.Qb(Ce, Le, Fe);
							case X.ExtensionEditorTab.ExtensionPack:
								return this.Rb(Ce, Le, Fe);
						}
						return Promise.resolve(null);
					}
					async Eb(be, Ce, Le, Fe, Oe, xe, He) {
						try {
							const Ke = await this.Fb(be, Ce, Fe, He);
							if (He.isCancellationRequested) return Promise.resolve(null);
							const Je = this.u.add(
								this.ob.createWebviewOverlay({
									title: xe,
									options: {
										enableFindWidget: !0,
										tryRestoreScrollPosition: !0,
										disableServiceWorker: !0,
									},
									contentOptions: {},
									extension: void 0,
								}),
							);
							(Je.initialScrollProgress = this.m.get(Oe) || 0),
								Je.claim(this, this.window, this.scopedContextKeyService),
								(0, t.$Cgb)(Je.container, Fe),
								Je.layoutWebviewOverElement(Fe),
								Je.setHtml(Ke),
								Je.claim(this, this.window, void 0),
								this.u.add(Je.onDidFocus(() => this.y?.fire())),
								this.u.add(
									Je.onDidScroll(() =>
										this.m.set(Oe, Je.initialScrollProgress),
									),
								);
							const Te = m.$Xb(this.s, {
								layout: () => {
									Je.layoutWebviewOverElement(Fe);
								},
							});
							this.u.add((0, n.$Yc)(Te));
							let Ee = !1;
							return (
								this.u.add(
									(0, n.$Yc)(() => {
										Ee = !0;
									}),
								),
								this.u.add(
									this.n.onDidColorThemeChange(async () => {
										const Ie = await this.Fb(be, Ce, Fe);
										Ee || Je.setHtml(Ie);
									}),
								),
								this.u.add(
									Je.onDidClickLink((Ie) => {
										Ie &&
											(((0, g.$Vg)(Ie, g.Schemas.http) ||
												(0, g.$Vg)(Ie, g.Schemas.https) ||
												(0, g.$Vg)(Ie, g.Schemas.mailto)) &&
												this.lb.open(Ie),
											(0, g.$Vg)(Ie, g.Schemas.command) &&
												be.type === D.ExtensionType.System &&
												this.lb.open(Ie, { allowCommands: !0 }));
									}),
								),
								Je
							);
						} catch {
							const Je = (0, t.$fhb)(Fe, (0, t.$)("p.nocontent"));
							return (Je.textContent = Le), Je;
						}
					}
					async Fb(be, Ce, Le, Fe) {
						const Oe = await this.Tb(() => Ce, Le);
						if (Fe?.isCancellationRequested) return "";
						const xe = await (0, ie.$nTc)(Oe, this.nb, this.pb, {
							shouldSanitize: be.type !== D.ExtensionType.System,
							token: Fe,
						});
						return Fe?.isCancellationRequested ? "" : this.Gb(xe);
					}
					Gb(be) {
						const Ce = (0, s.$9g)(),
							Le = y.$lM.getColorMap(),
							Fe = Le ? (0, v.$M2b)(Le) : "";
						return `<!DOCTYPE html>
		<html>
			<head>
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https: data:; media-src https:; script-src 'none'; style-src 'nonce-${Ce}';">
				<style nonce="${Ce}">
					${ie.$mTc}

					/* prevent scroll-to-top button from blocking the body text */
					body {
						padding-bottom: 75px;
					}

					#scroll-to-top {
						position: fixed;
						width: 32px;
						height: 32px;
						right: 25px;
						bottom: 25px;
						background-color: var(--vscode-button-secondaryBackground);
						border-color: var(--vscode-button-border);
						border-radius: 50%;
						cursor: pointer;
						box-shadow: 1px 1px 1px rgba(0,0,0,.25);
						outline: none;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					#scroll-to-top:hover {
						background-color: var(--vscode-button-secondaryHoverBackground);
						box-shadow: 2px 2px 2px rgba(0,0,0,.25);
					}

					body.vscode-high-contrast #scroll-to-top {
						border-width: 2px;
						border-style: solid;
						box-shadow: none;
					}

					#scroll-to-top span.icon::before {
						content: "";
						display: block;
						background: var(--vscode-button-secondaryForeground);
						/* Chevron up icon */
						webkit-mask-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO30KPC9zdHlsZT4KPHRpdGxlPnVwY2hldnJvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04LDUuMWwtNy4zLDcuM0wwLDExLjZsOC04bDgsOGwtMC43LDAuN0w4LDUuMXoiLz4KPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+Cjwvc3ZnPgo=');
						-webkit-mask-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO30KPC9zdHlsZT4KPHRpdGxlPnVwY2hldnJvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04LDUuMWwtNy4zLDcuM0wwLDExLjZsOC04bDgsOGwtMC43LDAuN0w4LDUuMXoiLz4KPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+Cjwvc3ZnPgo=');
						width: 16px;
						height: 16px;
					}
					${Fe}
				</style>
			</head>
			<body>
				<a id="scroll-to-top" role="button" aria-label="scroll to top" href="#"><span class="icon"></span></a>
				${be}
			</body>
		</html>`;
					}
					async Hb(be, Ce, Le) {
						const Fe = (0, t.$fhb)(Ce.content, (0, t.$)(".details")),
							Oe = (0, t.$fhb)(Fe, (0, t.$)(".readme-container")),
							xe = (0, t.$fhb)(Fe, (0, t.$)(".additional-details-container")),
							He = () =>
								Fe.classList.toggle("narrow", this.eb && this.eb.width < 500);
						He(), this.u.add((0, n.$Yc)(m.$Xb(this.s, { layout: He })));
						let Ke = null;
						const Je = await this.j.get().promise;
						return (
							Je && Je.extensionPack?.length && this.Ib(Je)
								? (Ke = await this.Jb(be, Je, Oe, Le))
								: (Ke = await this.Eb(
										be,
										this.f.get(),
										(0, S.localize)(6040, null),
										Oe,
										pe.Readme,
										(0, S.localize)(6041, null),
										Le,
									)),
							this.Kb(xe, be),
							Ke
						);
					}
					Ib(be) {
						return !!be.categories?.some(
							(Ce) => Ce.toLowerCase() === "extension packs",
						);
					}
					async Jb(be, Ce, Le, Fe) {
						if (Fe.isCancellationRequested) return Promise.resolve(null);
						const Oe = (0, t.$fhb)(
							Le,
							(0, t.$)("div", { class: "extension-pack-readme" }),
						);
						(Oe.style.margin = "0 auto"), (Oe.style.maxWidth = "882px");
						const xe = (0, t.$fhb)(
							Oe,
							(0, t.$)("div", { class: "extension-pack" }),
						);
						Ce.extensionPack.length <= 3
							? Oe.classList.add("one-row")
							: Ce.extensionPack.length <= 6
								? Oe.classList.add("two-rows")
								: Ce.extensionPack.length <= 9
									? Oe.classList.add("three-rows")
									: Oe.classList.add("more-rows");
						const He = (0, t.$fhb)(xe, (0, t.$)("div.header"));
						He.textContent = (0, S.localize)(
							6042,
							null,
							Ce.extensionPack.length,
						);
						const Ke = (0, t.$fhb)(
							xe,
							(0, t.$)("div", { class: "extension-pack-content" }),
						);
						Ke.setAttribute("tabindex", "0"),
							(0, t.$fhb)(xe, (0, t.$)("div.footer"));
						const Je = (0, t.$fhb)(Oe, (0, t.$)("div.readme-content"));
						return (
							await Promise.all([
								this.Sb(Ce, Ke, Fe),
								this.Eb(
									be,
									this.f.get(),
									(0, S.localize)(6043, null),
									Je,
									pe.Readme,
									(0, S.localize)(6044, null),
									Fe,
								),
							]),
							{ focus: () => Ke.focus() }
						);
					}
					Kb(be, Ce) {
						const Le = (0, t.$)("div", {
								class: "additional-details-content",
								tabindex: "0",
							}),
							Fe = new E.$8hb(Le, {}),
							Oe = () => Fe.scanDomNode(),
							xe = m.$Xb(this.s, { layout: Oe });
						this.u.add((0, n.$Yc)(xe)),
							this.u.add(Fe),
							this.Lb(Le, Ce),
							this.Mb(Le, Ce),
							this.Nb(Le, Ce),
							(0, t.$fhb)(be, Fe.getDomNode()),
							Fe.scanDomNode();
					}
					Lb(be, Ce) {
						if (Ce.categories.length) {
							const Le = (0, t.$fhb)(
								be,
								(0, t.$)(".categories-container.additional-details-element"),
							);
							(0, t.$fhb)(
								Le,
								(0, t.$)(
									".additional-details-title",
									void 0,
									(0, S.localize)(6045, null),
								),
							);
							const Fe = (0, t.$fhb)(Le, (0, t.$)(".categories"));
							for (const Oe of Ce.categories)
								this.cb.add(
									(0, W.$FSc)(
										(0, t.$fhb)(
											Fe,
											(0, t.$)("span.category", { tabindex: "0" }, Oe),
										),
										() => {
											this.hb
												.openPaneComposite(
													X.$LQb,
													q.ViewContainerLocation.Sidebar,
													!0,
												)
												.then((xe) => xe?.getViewPaneContainer())
												.then((xe) => xe.search(`@category:"${Oe}"`));
										},
									),
								);
						}
					}
					Mb(be, Ce) {
						const Le = [];
						if (
							(Ce.url &&
								Le.push([(0, S.localize)(6046, null), b.URI.parse(Ce.url)]),
							Ce.url && Ce.supportUrl)
						)
							try {
								Le.push([
									(0, S.localize)(6047, null),
									b.URI.parse(Ce.supportUrl),
								]);
							} catch {}
						if (Ce.repository)
							try {
								Le.push([
									(0, S.localize)(6048, null),
									b.URI.parse(Ce.repository),
								]);
							} catch {}
						if (Ce.url && Ce.licenseUrl)
							try {
								Le.push([
									(0, S.localize)(6049, null),
									b.URI.parse(Ce.licenseUrl),
								]);
							} catch {}
						if (
							(Ce.publisherUrl &&
								Le.push([Ce.publisherDisplayName, Ce.publisherUrl]),
							Le.length || Ce.publisherSponsorLink)
						) {
							const Fe = (0, t.$fhb)(
								be,
								(0, t.$)(".resources-container.additional-details-element"),
							);
							(0, t.$fhb)(
								Fe,
								(0, t.$)(
									".additional-details-title",
									void 0,
									(0, S.localize)(6050, null),
								),
							);
							const Oe = (0, t.$fhb)(Fe, (0, t.$)(".resources"));
							for (const [xe, He] of Le) {
								const Ke = (0, t.$fhb)(
									Oe,
									(0, t.$)("a.resource", { tabindex: "0" }, xe),
								);
								this.cb.add((0, W.$FSc)(Ke, () => this.lb.open(He))),
									this.cb.add(
										this.wb.setupManagedHover(
											(0, w.$cib)("mouse"),
											Ke,
											He.toString(),
										),
									);
							}
						}
					}
					Nb(be, Ce) {
						const Le = Ce.gallery,
							Fe = (0, t.$fhb)(
								be,
								(0, t.$)(".more-info-container.additional-details-element"),
							);
						(0, t.$fhb)(
							Fe,
							(0, t.$)(
								".additional-details-title",
								void 0,
								(0, S.localize)(6051, null),
							),
						);
						const Oe = (0, t.$fhb)(Fe, (0, t.$)(".more-info")),
							xe = (He) =>
								`${He.getFullYear()}-${String(He.getMonth() + 1).padStart(2, "0")}-${String(He.getDate()).padStart(2, "0")}, ${He.toLocaleTimeString(p.$z, { hourCycle: "h23" })}`;
						Le &&
							(0, t.$fhb)(
								Oe,
								(0, t.$)(
									".more-info-entry",
									void 0,
									(0, t.$)("div", void 0, (0, S.localize)(6052, null)),
									(0, t.$)("div", void 0, xe(new Date(Le.releaseDate))),
								),
								(0, t.$)(
									".more-info-entry",
									void 0,
									(0, t.$)("div", void 0, (0, S.localize)(6053, null)),
									(0, t.$)("div", void 0, xe(new Date(Le.lastUpdated))),
								),
							),
							Ce.local &&
								Ce.local.installedTimestamp &&
								(0, t.$fhb)(
									Oe,
									(0, t.$)(
										".more-info-entry",
										void 0,
										(0, t.$)("div", void 0, (0, S.localize)(6054, null)),
										(0, t.$)(
											"div",
											void 0,
											xe(new Date(Ce.local.installedTimestamp)),
										),
									),
								),
							(0, t.$fhb)(
								Oe,
								(0, t.$)(
									".more-info-entry",
									void 0,
									(0, t.$)("div", void 0, (0, S.localize)(6055, null)),
									(0, t.$)("code", void 0, Ce.identifier.id),
								),
							);
					}
					Ob(be, Ce, Le) {
						return this.Eb(
							be,
							this.g.get(),
							(0, S.localize)(6056, null),
							Ce.content,
							pe.Changelog,
							(0, S.localize)(6057, null),
							Le,
						);
					}
					async Pb(be, Ce) {
						const Le = await this.Tb(() => this.j.get(), be.content);
						if (Ce.isCancellationRequested || !Le) return null;
						const Fe = this.u.add(
								this.gb.createInstance(V.$DSc, Le, this.options?.feature),
							),
							Oe = () =>
								Fe.layout(be.content.clientHeight, be.content.clientWidth),
							xe = m.$Xb(this.s, { layout: Oe });
						return (
							this.u.add((0, n.$Yc)(xe)),
							(0, t.$fhb)(be.content, Fe.domNode),
							Oe(),
							Fe.domNode
						);
					}
					Qb(be, Ce, Le) {
						if (Le.isCancellationRequested) return Promise.resolve(null);
						if (m.$Ob(be.dependencies))
							return (
								((0, t.$fhb)(Ce.content, (0, t.$)("p.nocontent")).textContent =
									(0, S.localize)(6058, null)),
								Promise.resolve(Ce.content)
							);
						const Fe = (0, t.$)("div", { class: "subcontent" }),
							Oe = new E.$8hb(Fe, {});
						(0, t.$fhb)(Ce.content, Oe.getDomNode()), this.u.add(Oe);
						const xe = this.gb.createInstance(
								J.$jTc,
								new J.$kTc(be, null, (Je) => Je.dependencies || [], this.ib),
								Fe,
								{ listBackground: z.$8P },
							),
							He = () => {
								Oe.scanDomNode();
								const Je = Oe.getScrollDimensions();
								xe.layout(Je.height);
							},
							Ke = m.$Xb(this.s, { layout: He });
						return (
							this.u.add((0, n.$Yc)(Ke)),
							this.u.add(xe),
							Oe.scanDomNode(),
							Promise.resolve({
								focus() {
									xe.domFocus();
								},
							})
						);
					}
					async Rb(be, Ce, Le) {
						if (Le.isCancellationRequested) return Promise.resolve(null);
						const Fe = await this.Tb(() => this.j.get(), Ce.content);
						return Le.isCancellationRequested || !Fe
							? null
							: this.Sb(Fe, Ce.content, Le);
					}
					async Sb(be, Ce, Le) {
						if (Le.isCancellationRequested) return null;
						const Fe = (0, t.$)("div", { class: "subcontent" }),
							Oe = new E.$8hb(Fe, { useShadows: !1 });
						(0, t.$fhb)(Ce, Oe.getDomNode());
						const xe = this.gb.createInstance(J.$iTc, Fe, new K.$XSc()),
							He = await (0, J.$lTc)(be.extensionPack, this.ib);
						return (
							xe.setExtensions(He),
							Oe.scanDomNode(),
							this.u.add(Oe),
							this.u.add(xe),
							this.u.add(
								(0, n.$Yc)(m.$Xb(this.s, { layout: () => Oe.scanDomNode() })),
							),
							Fe
						);
					}
					Tb(be, Ce) {
						Ce.classList.add("loading");
						const Le = this.u.add(be()),
							Fe = () => Ce.classList.remove("loading");
						return Le.promise.then(Fe, Fe), Le.promise;
					}
					layout(be) {
						(this.eb = be), this.s.forEach((Ce) => Ce.layout());
					}
					Ub(be) {
						(0, a.$8)(be) || this.kb.error(be);
					}
				};
				(e.$oTc = fe),
					(e.$oTc =
						fe =
						oe =
							Ne(
								[
									j(1, B.$km),
									j(2, M.$Li),
									j(3, Q.$6Sb),
									j(4, X.$MQb),
									j(5, k.$Ep),
									j(6, F.$iP),
									j(7, A.$4N),
									j(8, R.$7rb),
									j(9, _.$9Qb),
									j(10, O.$lq),
									j(11, te.$q2),
									j(12, ne.$3Ib),
									j(13, $.$nM),
									j(14, P.$Xxb),
									j(15, T.$6j),
									j(16, x.$Vi),
									j(17, Y.$LWb),
									j(18, Z.$HMb),
									j(19, re.$Vl),
									j(20, le.$Uyb),
								],
								fe,
							));
				const me = T.$Kj.and(
					T.$Kj.equals("activeEditor", fe.ID),
					l.EditorContextKeys.focus.toNegated(),
				);
				(0, I.$4X)(
					class extends I.$3X {
						constructor() {
							super({
								id: "editor.action.extensioneditor.showfind",
								title: (0, S.localize)(6059, null),
								keybinding: {
									when: me,
									weight: N.KeybindingWeight.EditorContrib,
									primary: c.KeyMod.CtrlCmd | c.KeyCode.KeyF,
								},
							});
						}
						run(be) {
							ve(be)?.showFind();
						}
					},
				),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: "editor.action.extensioneditor.findNext",
									title: (0, S.localize)(6060, null),
									keybinding: {
										when: T.$Kj.and(me, ne.$1Ib),
										primary: c.KeyCode.Enter,
										weight: N.KeybindingWeight.EditorContrib,
									},
								});
							}
							run(be) {
								ve(be)?.runFindAction(!1);
							}
						},
					),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: "editor.action.extensioneditor.findPrevious",
									title: (0, S.localize)(6061, null),
									keybinding: {
										when: T.$Kj.and(me, ne.$1Ib),
										primary: c.KeyMod.Shift | c.KeyCode.Enter,
										weight: N.KeybindingWeight.EditorContrib,
									},
								});
							}
							run(be) {
								ve(be)?.runFindAction(!0);
							}
						},
					),
					(0, F.$oP)((ge, be) => {
						const Ce = ge.getColor(z.$RP);
						Ce &&
							(be.addRule(
								`.monaco-workbench .extension-editor .content .details .additional-details-container .resources-container a.resource { color: ${Ce}; }`,
							),
							be.addRule(
								`.monaco-workbench .extension-editor .content .feature-contributions a { color: ${Ce}; }`,
							));
						const Le = ge.getColor(z.$SP);
						Le &&
							(be.addRule(`.monaco-workbench .extension-editor .content .details .additional-details-container .resources-container a.resource:hover,
			.monaco-workbench .extension-editor .content .details .additional-details-container .resources-container a.resource:active { color: ${Le}; }`),
							be.addRule(`.monaco-workbench .extension-editor .content .feature-contributions a:hover,
			.monaco-workbench .extension-editor .content .feature-contributions a:active { color: ${Le}; }`));
						const Fe = ge.getColor(z.$fS);
						Fe &&
							(be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .categories-container > .categories > .category:hover { background-color: ${Fe}; border-color: ${Fe}; }`,
							),
							be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .tags-container > .tags > .tag:hover { background-color: ${Fe}; border-color: ${Fe}; }`,
							));
						const Oe = ge.getColor(z.$cS);
						Oe &&
							(be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .categories-container > .categories > .category:hover { color: ${Oe}; }`,
							),
							be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .tags-container > .tags > .tag:hover { color: ${Oe}; }`,
							));
					});
				function ve(ge) {
					const be = ge.get(ee.$IY).activeEditorPane;
					return be instanceof fe ? be : null;
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1991],
		he([
			1, 0, 4, 15, 29, 163, 3, 6, 50, 7, 32, 5, 53, 141, 404, 119, 157, 1243,
			1990, 84, 66, 111, 260, 35, 10, 60, 21, 25, 8, 49, 34, 40, 87, 96, 239,
			1242, 1043, 127, 109, 30, 73, 102, 131, 123, 78, 100, 31, 466, 11, 142,
			24, 347, 19, 154, 41, 9, 45, 58, 518, 173, 92, 2437,
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
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
			te,
			Q,
			Z,
			se,
			re,
			le,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$yTc =
					e.$xTc =
					e.$wTc =
					e.$vTc =
					e.$uTc =
					e.$tTc =
					e.$sTc =
					e.$rTc =
					e.$qTc =
					e.$pTc =
						void 0),
				(l = xi(l)),
				(e.$pTc = new P.$5j("defaultExtensionViews", !0)),
				(e.$qTc = new P.$5j("extensionsSortByValue", "")),
				(e.$rTc = new P.$5j("searchMarketplaceExtensions", !1)),
				(e.$sTc = new P.$5j("extensionSearchHasText", !1));
			const oe = new P.$5j("installedExtensions", !1),
				ae = new P.$5j("searchInstalledExtensions", !1),
				pe = new P.$5j("searchRecentlyUpdatedExtensions", !1),
				$e = new P.$5j("searchExtensionUpdates", !1),
				ye = new P.$5j("searchOutdatedExtensions", !1),
				ue = new P.$5j("searchEnabledExtensions", !1),
				fe = new P.$5j("searchDisabledExtensions", !1),
				me = new P.$5j("hasInstalledExtensions", !0);
			e.$tTc = new P.$5j("builtInExtensions", !1);
			const ve = new P.$5j("searchBuiltInExtensions", !1),
				ge = new P.$5j("searchUnsupportedWorkspaceExtensions", !1),
				be = new P.$5j("searchDeprecatedExtensions", !1);
			e.$uTc = new P.$5j("recommendedExtensions", !1);
			const Ce = new P.$5j("sortByUpdateDate", !1),
				Le = (0, t.localize2)(6466, "Remote");
			let Fe = class extends C.$1c {
				constructor(Je, Te, Ee, Ie) {
					super(),
						(this.b = Je),
						(this.f = Te),
						(this.g = Ie),
						(this.a = Ee.getViewContainerById(c.$LQb)),
						this.h();
				}
				h() {
					const Je = [];
					Je.push(...this.j()),
						Je.push(...this.m()),
						Je.push(...this.n()),
						Je.push(...this.q()),
						Je.push(...this.s()),
						Je.push(...this.u()),
						z.$Io.as(S.Extensions.ViewsRegistry).registerViews(Je, this.a);
				}
				j() {
					const Je = [],
						Te = [];
					this.b.localExtensionManagementServer &&
						Te.push(this.b.localExtensionManagementServer),
						this.b.remoteExtensionManagementServer &&
							Te.push(this.b.remoteExtensionManagementServer),
						this.b.webExtensionManagementServer &&
							Te.push(this.b.webExtensionManagementServer);
					const Ee = (Se, ke) => (Te.length > 1 ? `${ke.label} - ${Se}` : Se);
					let Ie = d.Event.None;
					if (
						this.b.webExtensionManagementServer &&
						this.b.remoteExtensionManagementServer
					) {
						const Se = new Set();
						Se.add("hasInstalledWebExtensions"),
							(Ie = d.Event.filter(this.g.onDidChangeContext, (ke) =>
								ke.affectsSome(Se),
							));
					}
					const Be = d.Event.any(this.f.onDidChangeFormatters, Ie);
					for (const Se of Te) {
						const ke = () => Ee((0, t.localize)(6449, null), Se),
							Ue = d.Event.map(Be, () => ke()),
							qe =
								Te.length > 1
									? `workbench.views.extensions.${Se.id}.installed`
									: "workbench.views.extensions.installed";
						Je.push({
							id: qe,
							get name() {
								return { value: ke(), original: Ee("Installed", Se) };
							},
							weight: 100,
							order: 1,
							when: P.$Kj.and(e.$pTc),
							ctorDescriptor: new x.$Ji(f.$5Sc, [
								{ server: Se, flexibleHeight: !0, onDidChangeTitle: Ue },
							]),
							canToggleVisibility: Te.length === 1,
						}),
							Se === this.b.remoteExtensionManagementServer &&
								this.b.localExtensionManagementServer &&
								this.D(
									(0, W.$4X)(
										class extends W.$3X {
											constructor() {
												super({
													id: "workbench.extensions.installLocalExtensions",
													get title() {
														return (0, t.localize2)(
															6467,
															"Install Local Extensions in '{0}'...",
															Se.label,
														);
													},
													category: Le,
													icon: J.$fSb,
													f1: !0,
													menu: {
														id: W.$XX.ViewTitle,
														when: P.$Kj.equals("view", qe),
														group: "navigation",
													},
												});
											}
											run(Me) {
												return Me.get(a.$Li).createInstance(n.$XTb).run();
											}
										},
									),
								);
					}
					return (
						this.b.localExtensionManagementServer &&
							this.b.remoteExtensionManagementServer &&
							this.D(
								(0, W.$4X)(
									class extends W.$3X {
										constructor() {
											super({
												id: "workbench.extensions.actions.installLocalExtensionsInRemote",
												title: (0, t.localize2)(
													6468,
													"Install Remote Extensions Locally...",
												),
												category: Le,
												f1: !0,
											});
										}
										run(ke) {
											return ke
												.get(a.$Li)
												.createInstance(
													n.$YTb,
													"workbench.extensions.actions.installLocalExtensionsInRemote",
												)
												.run();
										}
									},
								),
							),
						Je.push({
							id: "workbench.views.extensions.popular",
							name: (0, t.localize2)(6469, "Popular"),
							ctorDescriptor: new x.$Ji(f.$4Sc, [{ hideBadge: !0 }]),
							when: P.$Kj.and(
								e.$pTc,
								P.$Kj.not("hasInstalledExtensions"),
								c.$1Qb,
							),
							weight: 60,
							order: 2,
							canToggleVisibility: !1,
						}),
						Je.push({
							id: "extensions.recommendedList",
							name: (0, t.localize2)(6470, "Recommended"),
							ctorDescriptor: new x.$Ji(f.$eTc, [{ flexibleHeight: !0 }]),
							when: P.$Kj.and(
								e.$pTc,
								Ce.negate(),
								P.$Kj.not("config.extensions.showRecommendationsOnlyOnDemand"),
								c.$1Qb,
							),
							weight: 40,
							order: 3,
							canToggleVisibility: !0,
						}),
						Te.length === 1 &&
							(Je.push({
								id: "workbench.views.extensions.enabled",
								name: (0, t.localize2)(6471, "Enabled"),
								ctorDescriptor: new x.$Ji(f.$6Sc, [{}]),
								when: P.$Kj.and(e.$pTc, P.$Kj.has("hasInstalledExtensions")),
								hideByDefault: !0,
								weight: 40,
								order: 4,
								canToggleVisibility: !0,
							}),
							Je.push({
								id: "workbench.views.extensions.disabled",
								name: (0, t.localize2)(6472, "Disabled"),
								ctorDescriptor: new x.$Ji(f.$7Sc, [{}]),
								when: P.$Kj.and(e.$pTc, P.$Kj.has("hasInstalledExtensions")),
								hideByDefault: !0,
								weight: 10,
								order: 5,
								canToggleVisibility: !0,
							})),
						Je
					);
				}
				m() {
					const Je = [];
					return (
						Je.push({
							id: "workbench.views.extensions.marketplace",
							name: (0, t.localize2)(6473, "Marketplace"),
							ctorDescriptor: new x.$Ji(f.$dTc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchMarketplaceExtensions")),
						}),
						Je.push({
							id: "workbench.views.extensions.searchInstalled",
							name: (0, t.localize2)(6474, "Installed"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.or(
								P.$Kj.has("searchInstalledExtensions"),
								P.$Kj.has("installedExtensions"),
							),
						}),
						Je.push({
							id: "workbench.views.extensions.searchRecentlyUpdated",
							name: (0, t.localize2)(6475, "Recently Updated"),
							ctorDescriptor: new x.$Ji(f.$9Sc, [{}]),
							when: P.$Kj.or($e, P.$Kj.has("searchRecentlyUpdatedExtensions")),
							order: 2,
						}),
						Je.push({
							id: "workbench.views.extensions.searchEnabled",
							name: (0, t.localize2)(6476, "Enabled"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchEnabledExtensions")),
						}),
						Je.push({
							id: "workbench.views.extensions.searchDisabled",
							name: (0, t.localize2)(6477, "Disabled"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchDisabledExtensions")),
						}),
						Je.push({
							id: c.$UQb,
							name: (0, t.localize2)(6478, "Available Updates"),
							ctorDescriptor: new x.$Ji(f.$8Sc, [{}]),
							when: P.$Kj.or($e, P.$Kj.has("searchOutdatedExtensions")),
							order: 1,
						}),
						Je.push({
							id: "workbench.views.extensions.searchBuiltin",
							name: (0, t.localize2)(6479, "Builtin"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchBuiltInExtensions")),
						}),
						Je.push({
							id: "workbench.views.extensions.searchWorkspaceUnsupported",
							name: (0, t.localize2)(6480, "Workspace Unsupported"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(
								P.$Kj.has("searchWorkspaceUnsupportedExtensions"),
							),
						}),
						Je
					);
				}
				n() {
					const Je = [];
					return (
						Je.push({
							id: c.$TQb,
							name: (0, t.localize2)(6481, "Workspace Recommendations"),
							ctorDescriptor: new x.$Ji(f.$gTc, [{}]),
							when: P.$Kj.and(
								P.$Kj.has("recommendedExtensions"),
								G.$wPb.notEqualsTo("empty"),
							),
							order: 1,
						}),
						Je.push({
							id: "workbench.views.extensions.otherRecommendations",
							name: (0, t.localize2)(6482, "Other Recommendations"),
							ctorDescriptor: new x.$Ji(f.$fTc, [{}]),
							when: P.$Kj.has("recommendedExtensions"),
							order: 2,
						}),
						Je
					);
				}
				q() {
					const Je = [],
						Te = ["themes", "programming languages"],
						Ee = U.$Fn.filter((Be) => !Te.includes(Be.toLowerCase()));
					Ee.push(f.$2Sc);
					const Ie = `${Ee.map((Be) => `category:"${Be}"`).join(" ")} ${Te.map((Be) => `category:"-${Be}"`).join(" ")}`;
					return (
						Je.push({
							id: "workbench.views.extensions.builtinFeatureExtensions",
							name: (0, t.localize2)(6483, "Features"),
							ctorDescriptor: new x.$Ji(f.$0Sc, [{ query: `@builtin ${Ie}` }]),
							when: P.$Kj.has("builtInExtensions"),
						}),
						Je.push({
							id: "workbench.views.extensions.builtinThemeExtensions",
							name: (0, t.localize2)(6484, "Themes"),
							ctorDescriptor: new x.$Ji(f.$0Sc, [
								{ query: "@builtin category:themes" },
							]),
							when: P.$Kj.has("builtInExtensions"),
						}),
						Je.push({
							id: "workbench.views.extensions.builtinProgrammingLanguageExtensions",
							name: (0, t.localize2)(6485, "Programming Languages"),
							ctorDescriptor: new x.$Ji(f.$0Sc, [
								{ query: '@builtin category:"programming languages"' },
							]),
							when: P.$Kj.has("builtInExtensions"),
						}),
						Je
					);
				}
				s() {
					const Je = [];
					return (
						Je.push({
							id: "workbench.views.extensions.untrustedUnsupportedExtensions",
							name: (0, t.localize2)(6486, "Disabled in Restricted Mode"),
							ctorDescriptor: new x.$Ji(f.$$Sc, [{}]),
							when: P.$Kj.and(ge),
						}),
						Je.push({
							id: "workbench.views.extensions.untrustedPartiallySupportedExtensions",
							name: (0, t.localize2)(6487, "Limited in Restricted Mode"),
							ctorDescriptor: new x.$Ji(f.$_Sc, [{}]),
							when: P.$Kj.and(ge),
						}),
						Je.push({
							id: "workbench.views.extensions.virtualUnsupportedExtensions",
							name: (0, t.localize2)(6488, "Disabled in Virtual Workspaces"),
							ctorDescriptor: new x.$Ji(f.$aTc, [{}]),
							when: P.$Kj.and(G.$DPb, ge),
						}),
						Je.push({
							id: "workbench.views.extensions.virtualPartiallySupportedExtensions",
							name: (0, t.localize2)(6489, "Limited in Virtual Workspaces"),
							ctorDescriptor: new x.$Ji(f.$bTc, [{}]),
							when: P.$Kj.and(G.$DPb, ge),
						}),
						Je
					);
				}
				u() {
					const Je = [];
					return (
						Je.push({
							id: "workbench.views.extensions.deprecatedExtensions",
							name: (0, t.localize2)(6490, "Deprecated"),
							ctorDescriptor: new x.$Ji(f.$cTc, [{}]),
							when: P.$Kj.and(be),
						}),
						Je
					);
				}
			};
			(e.$vTc = Fe),
				(e.$vTc = Fe =
					Ne([j(0, p.$EQb), j(1, F.$3N), j(2, S.$K1), j(3, P.$6j)], Fe));
			let Oe = class extends A.$ZSb {
				constructor(
					Je,
					Te,
					Ee,
					Ie,
					Be,
					Se,
					ke,
					Ue,
					qe,
					Ae,
					Me,
					De,
					Re,
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt,
					nt,
				) {
					super(
						c.$LQb,
						{ mergeViewWithContainerWhenSingleView: !0 },
						Ie,
						Me,
						Je,
						Ve,
						Te,
						Ze,
						Ae,
						De,
						Re,
						et,
					),
						(this.Wb = Ee),
						(this.Xb = Be),
						(this.Yb = Se),
						(this.Zb = ke),
						(this.$b = Ue),
						(this.ac = qe),
						(this.bc = je),
						(this.cc = rt),
						(this.dc = ft),
						(this.ec = bt),
						(this.fc = nt),
						(this.Sb = new i.$Jh(500)),
						(this.Ab = e.$pTc.bindTo(je)),
						(this.Bb = e.$qTc.bindTo(je)),
						(this.Cb = e.$rTc.bindTo(je)),
						(this.Db = e.$sTc.bindTo(je)),
						(this.Eb = Ce.bindTo(je)),
						(this.Fb = oe.bindTo(je)),
						(this.Gb = ae.bindTo(je)),
						(this.Hb = pe.bindTo(je)),
						(this.Ib = $e.bindTo(je)),
						(this.Pb = ge.bindTo(je)),
						(this.Qb = be.bindTo(je)),
						(this.Jb = ye.bindTo(je)),
						(this.Kb = ue.bindTo(je)),
						(this.Lb = fe.bindTo(je)),
						(this.Mb = me.bindTo(je)),
						(this.Nb = e.$tTc.bindTo(je)),
						(this.Ob = ve.bindTo(je)),
						(this.Rb = e.$uTc.bindTo(je)),
						this.D(
							this.ac.onDidPaneCompositeOpen((lt) => {
								lt.viewContainerLocation === S.ViewContainerLocation.Sidebar &&
									this.pc(lt.composite);
							}, this),
						),
						this.D(Se.onReset(() => this.refresh())),
						(this.Vb = this.F(
							I.StorageScope.WORKSPACE,
							I.StorageTarget.MACHINE,
						));
				}
				get searchValue() {
					return this.Ub?.getValue();
				}
				create(Je) {
					Je.classList.add("extensions-viewlet"), (this.Tb = Je);
					const Te = (0, r.$fhb)(this.Tb, (0, r.$)(".overlay")),
						Ee = this.w(q.$BGb) ?? "";
					(Te.style.backgroundColor = Ee), (0, r.hide)(Te);
					const Ie = (0, r.$fhb)(this.Tb, (0, r.$)(".header"));
					(Ie.style.display = "flex"), (Ie.style.flexDirection = "column");
					const Be = (0, t.localize)(6450, null),
						Se = this.Vb["query.value"] ? this.Vb["query.value"] : "",
						ke = (0, r.$fhb)(Ie, (0, r.$)(".extensions-search-container"));
					(this.Ub = this.D(
						this.bb.createInstance(
							O.$3Bc,
							`${c.$LQb}.searchbox`,
							ke,
							{
								triggerCharacters: ["@"],
								sortKey: (je) =>
									je.indexOf(":") === -1
										? "a"
										: /ext:/.test(je) || /id:/.test(je) || /tag:/.test(je)
											? "b"
											: /sort:/.test(je)
												? "c"
												: "d",
								provideResults: (je) => R.$ZSc.suggestions(je),
							},
							Be,
							"extensions:searchinput",
							{ placeholderText: Be, value: Se },
						),
					)),
						(Ie.style.height = "fit-content");
					const Ue = (0, r.$fhb)(
						Ie,
						(0, r.$)("div.cursor-extension-viewlet-note"),
					);
					(Ue.style.flex = "1"),
						(Ue.style.display = "flex"),
						(Ue.style.flexDirection = "column"),
						(Ue.style.justifyContent = "center"),
						(Ue.style.alignItems = "center"),
						(Ue.style.paddingTop = "4px");
					const qe = (0, r.$fhb)(
							Ue,
							(0, r.$)("div.cursor-extension-viewlet-note-1"),
						),
						Ae = te.URI.parse(
							"https://www.cursor.com/how-to-install-extension",
						);
					if (
						this.fc.applicationUserPersistentStorage.haveNotImportedFromVSC ===
						!0
					) {
						const je = (0, r.$fhb)(
								qe,
								(0, r.$)("a", { href: Ae }, (0, t.localize)(6451, null)),
							),
							Ve = (0, r.$fhb)(
								qe,
								(0, r.$)(
									"a",
									{
										style:
											"color: var(--vscode-foreground); font-weight: normal; opacity: 0.5; margin-left: 5px; cursor: pointer; text-align: right; font-size: 11px;",
									},
									"(don't show again)",
								),
							);
						(0, r.$0fb)(je, "click", async (Ze) => {
							Ze.stopPropagation(),
								Ze.preventDefault(),
								qe.removeChild(je),
								qe.removeChild(Ve);
							const et = (0, r.$fhb)(
								qe,
								(0, r.$)("span", void 0, (0, t.localize)(6452, null)),
							);
							await this.dc?.executeCommand(Z.$9W, !0), qe.removeChild(et);
							const rt = (0, r.$fhb)(
								qe,
								(0, r.$)("span", void 0, (0, t.localize)(6453, null)),
							);
						}),
							(0, r.$0fb)(Ve, "click", async (Ze) => {
								Ze.stopPropagation(),
									Ze.preventDefault(),
									qe.removeChild(je),
									qe.removeChild(Ve),
									this.fc.setApplicationUserPersistentStorage(
										"haveNotImportedFromVSC",
										!1,
									);
							});
					}
					this.gc(),
						this.Ub.getValue() && this.hc(),
						this.D(
							this.Ub.onInputDidChange(() => {
								this.Bb.set(R.$ZSc.parse(this.Ub?.getValue() ?? "").sortBy),
									this.hc();
							}, this),
						),
						this.D(this.Ub.onShouldFocusResults(() => this.oc(), this));
					const Me = (0, r.$fhb)(
						ke,
						(0, r.$)(".extensions-search-actions-container"),
					);
					this.D(
						this.bb.createInstance(re.$Tyb, Me, c.$5Qb, {
							toolbarOptions: { primaryGroup: () => !0 },
							actionViewItemProvider: (je, Ve) => (0, le.$Pyb)(this.bb, je, Ve),
						}),
					),
						this.D(
							new r.$Hhb(this.Tb, {
								onDragEnter: (je) => {
									this.sc(je) && (0, r.show)(Te);
								},
								onDragLeave: (je) => {
									this.sc(je) && (0, r.hide)(Te);
								},
								onDragOver: (je) => {
									this.sc(je) && (je.dataTransfer.dropEffect = "copy");
								},
								onDrop: async (je) => {
									if (this.sc(je)) {
										(0, r.hide)(Te);
										const Ve = (0, Y.$Lb)(
											(
												await this.bb.invokeFunction((Ze) =>
													(0, ie.$jzb)(Ze, je),
												)
											).map((Ze) =>
												Ze.resource && (0, ne.$lh)(Ze.resource) === ".vsix"
													? Ze.resource
													: void 0,
											),
										);
										if (Ve.length > 0)
											try {
												await this.dc.executeCommand(c.$XQb, Ve);
											} catch (Ze) {
												this.$b.error(Ze);
											}
									}
								},
							}),
						),
						super.create((0, r.$fhb)(this.Tb, (0, r.$)(".extensions")));
					const De = this.D((0, r.$dhb)(this.Tb)),
						Re = () => this.Ub?.inputWidget.hasWidgetFocus();
					this.D(
						(0, se.$D3b)({
							name: "extensionsView",
							focusNotifiers: [De],
							focusNextWidget: () => {
								Re() && this.oc();
							},
							focusPreviousWidget: () => {
								Re() || this.Ub?.focus();
							},
						}),
					);
				}
				focus() {
					super.focus(), this.Ub?.focus();
				}
				layout(Je) {
					this.Tb &&
						(this.Tb.classList.toggle("narrow", Je.width <= 250),
						this.Tb.classList.toggle("mini", Je.width <= 200)),
						this.Ub?.layout(new r.$pgb(Je.width - 34 - 8 - 24 * 2, 20)),
						super.layout(new r.$pgb(Je.width, Je.height - 88));
				}
				getOptimalWidth() {
					return 400;
				}
				search(Je) {
					this.Ub && this.Ub.getValue() !== Je && this.Ub.setValue(Je);
				}
				async refresh() {
					await this.gc(),
						this.kc(!0),
						this.cb.getValue(c.$PQb) && this.Yb.checkForUpdates();
				}
				async gc() {
					const Je = await this.Yb.queryLocal();
					this.Mb.set(Je.some((Te) => !Te.isBuiltin));
				}
				hc() {
					this.Sb.trigger(
						() => this.kc(),
						this.Ub && this.Ub.getValue() ? 500 : 0,
					).then(void 0, (Je) => this.rc(Je));
				}
				ic() {
					return this.Ub
						? this.Ub.getValue()
								.trim()
								.replace(/@category/g, "category")
								.replace(/@tag:/g, "tag:")
								.replace(/@ext:/g, "ext:")
								.replace(/@featured/g, "featured")
								.replace(
									/@popular/g,
									this.Zb.webExtensionManagementServer &&
										!this.Zb.localExtensionManagementServer &&
										!this.Zb.remoteExtensionManagementServer
										? "@web"
										: "@popular",
								)
						: "";
				}
				I() {
					const Je = this.Ub ? this.Ub.getValue() : "";
					f.$3Sc.isLocalExtensionsQuery(Je)
						? (this.Vb["query.value"] = Je)
						: (this.Vb["query.value"] = ""),
						super.I();
				}
				kc(Je) {
					const Te = this.ic();
					return (
						this.bc.bufferChangeEvents(() => {
							const Ee = f.$3Sc.isRecommendedExtensionsQuery(Te);
							this.Db.set(Te.trim() !== ""),
								this.Fb.set(f.$3Sc.isInstalledExtensionsQuery(Te)),
								this.Gb.set(f.$3Sc.isSearchInstalledExtensionsQuery(Te)),
								this.Hb.set(
									f.$3Sc.isSearchRecentlyUpdatedQuery(Te) &&
										!f.$3Sc.isSearchExtensionUpdatesQuery(Te),
								),
								this.Jb.set(
									f.$3Sc.isOutdatedExtensionsQuery(Te) &&
										!f.$3Sc.isSearchExtensionUpdatesQuery(Te),
								),
								this.Ib.set(f.$3Sc.isSearchExtensionUpdatesQuery(Te)),
								this.Kb.set(f.$3Sc.isEnabledExtensionsQuery(Te)),
								this.Lb.set(f.$3Sc.isDisabledExtensionsQuery(Te)),
								this.Ob.set(f.$3Sc.isSearchBuiltInExtensionsQuery(Te)),
								this.Pb.set(
									f.$3Sc.isSearchWorkspaceUnsupportedExtensionsQuery(Te),
								),
								this.Qb.set(f.$3Sc.isSearchDeprecatedExtensionsQuery(Te)),
								this.Nb.set(f.$3Sc.isBuiltInExtensionsQuery(Te)),
								this.Rb.set(Ee),
								this.Cb.set(!!Te && !f.$3Sc.isLocalExtensionsQuery(Te) && !Ee),
								this.Eb.set(f.$3Sc.isSortUpdateDateQuery(Te)),
								this.Ab.set(!Te || f.$3Sc.isSortInstalledExtensionsQuery(Te));
						}),
						this.qc(
							Promise.all(
								this.panes.map((Ee) =>
									Ee.show(this.ic(), Je).then((Ie) =>
										this.mc(Ie.length, Ee.id),
									),
								),
							),
						).then(() => {})
					);
				}
				tb(Je) {
					const Te = super.tb(Je);
					return (
						this.qc(
							Promise.all(
								Te.map((Ee) =>
									Ee.show(this.ic()).then((Ie) => this.mc(Ie.length, Ee.id)),
								),
							),
						),
						Te
					);
				}
				mc(Je, Te) {
					const Ee = this.P.visibleViewDescriptors.find((Ie) => Ie.id === Te);
					switch (Je) {
						case 0:
							break;
						case 1:
							Ee
								? (0, B.$oib)((0, t.localize)(6454, null, Ee.name.value))
								: (0, B.$oib)((0, t.localize)(6455, null));
							break;
						default:
							Ee
								? (0, B.$oib)((0, t.localize)(6456, null, Je, Ee.name.value))
								: (0, B.$oib)((0, t.localize)(6457, null, Je));
							break;
					}
				}
				nc() {
					for (const Je of this.panes)
						if (Je.isExpanded() && Je instanceof f.$3Sc) return Je;
				}
				oc() {
					const Je = this.nc();
					Je && Je.count() > 0 && Je.focus();
				}
				pc(Je) {
					if (!(!Je || Je.getId() === c.$LQb) && this.cb.getValue(c.$QQb)) {
						const Te = this.Xb.groups.map((Ee) => {
							const Ie = Ee.editors.filter((Be) => Be instanceof o.$KQb);
							return Ee.closeEditors(Ie);
						});
						Promise.all(Te);
					}
				}
				qc(Je) {
					return this.Wb.withProgress(
						{ location: b.ProgressLocation.Extensions },
						() => Je,
					);
				}
				rc(Je) {
					if ((0, w.$8)(Je)) return;
					const Te = (Je && Je.message) || "";
					if (/ECONNREFUSED/.test(Te)) {
						const Ee = (0, E.$zj)((0, t.localize)(6458, null), [
							new m.$rj(
								"open user settings",
								(0, t.localize)(6459, null),
								void 0,
								!0,
								() => this.cc.openUserSettings(),
							),
						]);
						this.$b.error(Ee);
						return;
					}
					this.$b.error(Je);
				}
				sc(Je) {
					return Je.dataTransfer
						? Je.dataTransfer.types
								.map((Ee) => Ee.toLocaleLowerCase())
								.indexOf("files") !== -1
						: !1;
				}
			};
			(e.$wTc = Oe),
				(e.$wTc = Oe =
					Ne(
						[
							j(0, N.$mEb),
							j(1, u.$km),
							j(2, b.$8N),
							j(3, a.$Li),
							j(4, s.$EY),
							j(5, c.$MQb),
							j(6, p.$EQb),
							j(7, D.$4N),
							j(8, X.$6Sb),
							j(9, $.$iP),
							j(10, v.$gj),
							j(11, I.$lq),
							j(12, T.$Vi),
							j(13, P.$6j),
							j(14, k.$Xxb),
							j(15, h.$q2),
							j(16, S.$K1),
							j(17, H.$7Z),
							j(18, K.$ek),
							j(19, _.$7rb),
							j(20, Q.$0zb),
						],
						Oe,
					));
			let xe = class extends C.$1c {
				constructor(Je, Te, Ee, Ie) {
					super(),
						(this.b = Je),
						(this.f = Te),
						(this.g = Ee),
						(this.h = Ie),
						(this.a = this.D(new C.$2c())),
						this.j(),
						this.D(
							d.Event.debounce(
								Te.onChange,
								() => {},
								100,
								void 0,
								void 0,
								void 0,
								this.B,
							)(this.j, this),
						);
				}
				j() {
					this.a.clear();
					const Je =
							this.h.getValue(c.$RQb) === !0
								? []
								: this.f.installed.filter((Ie) => Ie.runtimeState !== void 0),
						Te = this.f.outdated.reduce(
							(Ie, Be) =>
								Ie + (this.g.isEnabled(Be.local) && !Je.includes(Be) ? 1 : 0),
							0,
						),
						Ee = Te + Je.length;
					if (Ee > 0) {
						let Ie = "";
						Te &&
							(Ie +=
								Te === 1
									? (0, t.localize)(6460, null, Te)
									: (0, t.localize)(6461, null, Te)),
							Te > 0 && Je.length > 0 && (Ie += ", "),
							Je.length &&
								(Ie +=
									Je.length === 1
										? (0, t.localize)(6462, null, Je.length)
										: (0, t.localize)(6463, null, Je.length));
						const Be = new y.$8qc(Ee, () => Ie);
						this.a.value = this.b.showViewContainerActivity(c.$LQb, {
							badge: Be,
						});
					}
				}
			};
			(e.$xTc = xe),
				(e.$xTc = xe =
					Ne([j(0, y.$7qc), j(1, c.$MQb), j(2, p.$IQb), j(3, v.$gj)], xe));
			let He = class {
				constructor(Je, Te, Ee, Ie, Be) {
					(this.a = Je),
						(this.b = Te),
						(this.d = Ee),
						(this.f = Ie),
						(this.g = Be),
						this.g.disableExtensions || this.h();
				}
				h() {
					this.i()
						.then(() => (0, i.$Nh)(1e3 * 60 * 5))
						.then(() => this.h());
				}
				i() {
					return this.a.getExtensionsControlManifest().then(
						(Je) =>
							this.a
								.getInstalled(U.ExtensionType.User)
								.then((Te) => {
									const Ee = Te.filter((Ie) =>
										Je.malicious.some((Be) => (0, ee.$7p)(Ie.identifier, Be)),
									);
									return Ee.length
										? i.Promises.settled(
												Ee.map((Ie) =>
													this.a.uninstall(Ie).then(() => {
														this.f.prompt(
															l.default.Warning,
															(0, t.localize)(6464, null, Ie.identifier.id),
															[
																{
																	label: (0, t.localize)(6465, null),
																	run: () => this.b.reload(),
																},
															],
															{
																sticky: !0,
																priority: D.NotificationPriority.URGENT,
															},
														);
													}),
												),
											)
										: Promise.resolve(void 0);
								})
								.then(() => {}),
						(Je) => this.d.error(Je),
					);
				}
			};
			(e.$yTc = He),
				(e.$yTc = He =
					Ne(
						[j(0, g.$Hp), j(1, M.$asb), j(2, L.$ik), j(3, D.$4N), j(4, V.$r8)],
						He,
					));
		},
	),
		define(
			de[4299],
			he([
				1, 0, 4, 27, 30, 11, 20, 119, 157, 314, 55, 102, 141, 404, 1243, 4298,
				1991, 81, 250, 1731, 31, 5, 1829, 154, 192, 52, 9, 3309, 29, 3386, 33,
				60, 89, 121, 131, 8, 348, 3527, 3751, 522, 787, 18, 4077, 99, 666, 4076,
				40, 87, 100, 828, 23, 1809, 3385, 466, 109, 3, 57, 222, 1242, 44, 1059,
				3061, 63, 6, 142, 3292, 12, 677, 21, 468, 4075, 84, 68, 224,
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
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Tc = e.$4Tc = e.$3Tc = void 0),
					(f = mt(f)),
					(0, C.$lK)(h.$MQb, H.$STc, C.InstantiationType.Eager),
					(0, C.$lK)(V.$HTc, G.$TTc, C.InstantiationType.Delayed),
					(0, C.$lK)(r.$9Qb, U.$OTc, C.InstantiationType.Eager),
					w.$Io
						.as(O.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: B.$CTc,
							prefix: B.$CTc.PREFIX,
							placeholder: (0, t.localize)(6097, null),
							helpEntries: [{ description: (0, t.localize)(6098, null) }],
						}),
					w.$Io
						.as(re.$a1.EditorPane)
						.registerEditorPane(
							v.$vVb.create(g.$oTc, g.$oTc.ID, (0, t.localize)(6099, null)),
							[new a.$Ji(n.$KQb)],
						),
					w.$Io
						.as(D.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: h.$LQb,
								title: (0, t.localize2)(6195, "Extensions"),
								openCommandActionDescriptor: {
									id: h.$LQb,
									mnemonicTitle: (0, t.localize)(6100, null),
									keybindings: {
										primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyX,
									},
									order: 4,
								},
								ctorDescriptor: new a.$Ji(p.$wTc),
								icon: ee.$aSb,
								order: 4,
								rejectAddedViews: !0,
								alwaysUseContainerInfo: !0,
							},
							D.ViewContainerLocation.Sidebar,
						),
					w.$Io
						.as(o.$No.Configuration)
						.registerConfiguration({
							...m.$HQb,
							properties: {
								"extensions.autoUpdate": {
									enum: [!0, "onlyEnabledExtensions", !1],
									enumItemLabels: [
										(0, t.localize)(6101, null),
										(0, t.localize)(6102, null),
										(0, t.localize)(6103, null),
									],
									enumDescriptions: [
										(0, t.localize)(6104, null),
										(0, t.localize)(6105, null),
										(0, t.localize)(6106, null),
									],
									description: (0, t.localize)(6107, null),
									default: !0,
									scope: o.ConfigurationScope.APPLICATION,
									tags: ["usesOnlineServices"],
								},
								"extensions.autoCheckUpdates": {
									type: "boolean",
									description: (0, t.localize)(6108, null),
									default: !0,
									scope: o.ConfigurationScope.APPLICATION,
									tags: ["usesOnlineServices"],
								},
								"extensions.ignoreRecommendations": {
									type: "boolean",
									description: (0, t.localize)(6109, null),
									default: !1,
								},
								"extensions.showRecommendationsOnlyOnDemand": {
									type: "boolean",
									deprecationMessage: (0, t.localize)(6110, null),
									default: !1,
									tags: ["usesOnlineServices"],
								},
								"extensions.closeExtensionDetailsOnViewChange": {
									type: "boolean",
									description: (0, t.localize)(6111, null),
									default: !1,
								},
								"extensions.confirmedUriHandlerExtensionIds": {
									type: "array",
									items: { type: "string" },
									description: (0, t.localize)(6112, null),
									default: [],
									scope: o.ConfigurationScope.APPLICATION,
								},
								"extensions.webWorker": {
									type: ["boolean", "string"],
									enum: [!0, !1, "auto"],
									enumDescriptions: [
										(0, t.localize)(6113, null),
										(0, t.localize)(6114, null),
										(0, t.localize)(6115, null),
									],
									description: (0, t.localize)(6116, null),
									default: "auto",
								},
								"extensions.supportVirtualWorkspaces": {
									type: "object",
									markdownDescription: (0, t.localize)(6117, null),
									patternProperties: {
										"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$":
											{ type: "boolean", default: !1 },
									},
									additionalProperties: !1,
									default: {},
									defaultSnippets: [{ body: { "pub.name": !1 } }],
								},
								"extensions.experimental.affinity": {
									type: "object",
									markdownDescription: (0, t.localize)(6118, null),
									patternProperties: {
										"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$":
											{ type: "integer", default: 1 },
									},
									additionalProperties: !1,
									default: {
										"vscodevim.vim": 1,
										"asvetliakov.vscode-neovim": 1,
									},
									defaultSnippets: [{ body: { "pub.name": 1 } }],
								},
								[le.$DSb]: {
									type: "object",
									scope: o.ConfigurationScope.APPLICATION,
									markdownDescription: (0, t.localize)(6119, null),
									patternProperties: {
										"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$":
											{
												type: "object",
												properties: {
													supported: {
														type: ["boolean", "string"],
														enum: [!0, !1, "limited"],
														enumDescriptions: [
															(0, t.localize)(6120, null),
															(0, t.localize)(6121, null),
															(0, t.localize)(6122, null),
														],
														description: (0, t.localize)(6123, null),
													},
													version: {
														type: "string",
														description: (0, t.localize)(6124, null),
													},
												},
											},
									},
								},
								"extensions.experimental.deferredStartupFinishedActivation": {
									type: "boolean",
									description: (0, t.localize)(6125, null),
									default: !1,
								},
								"extensions.experimental.issueQuickAccess": {
									type: "boolean",
									description: (0, t.localize)(6126, null),
									default: !0,
								},
							},
						}),
					w.$Io.as(f.$Jo.JSONContribution).registerSchema(b.$6Qb, b.$7Qb),
					s.$fk.registerCommand("_extensions.manage", (Te, Ee, Ie, Be, Se) => {
						const ke = Te.get(h.$MQb),
							Ue = ke.local.find((qe) => (0, $.$7p)(qe.identifier, { id: Ee }));
						if (Ue) ke.open(Ue, { tab: Ie, preserveFocus: Be, feature: Se });
						else throw new Error((0, t.localize)(6127, null, Ee));
					}),
					s.$fk.registerCommand(
						"extension.open",
						async (Te, Ee, Ie, Be, Se, ke) => {
							const Ue = Te.get(h.$MQb),
								qe = Te.get(s.$ek),
								[Ae] = await Ue.getExtensions(
									[{ id: Ee }],
									L.CancellationToken.None,
								);
							return Ae
								? Ue.open(Ae, {
										tab: Ie,
										preserveFocus: Be,
										feature: Se,
										sideByside: ke,
									})
								: qe.executeCommand("_extensions.manage", Ee, Ie, Be, Se);
						},
					),
					s.$fk.registerCommand({
						id: "workbench.extensions.installExtension",
						metadata: {
							description: (0, t.localize)(6128, null),
							args: [
								{
									name: "extensionIdOrVSIXUri",
									description: (0, t.localize)(6129, null),
									constraint: (Te) =>
										typeof Te == "string" || Te instanceof I.URI,
								},
								{
									name: "options",
									description:
										"(optional) Options for installing the extension. Object with the following properties: `installOnlyNewlyAddedFromExtensionPackVSIX`: When enabled, VS Code installs only newly added extensions from the extension pack VSIX. This option is considered only when installing VSIX. ",
									isOptional: !0,
									schema: {
										type: "object",
										properties: {
											installOnlyNewlyAddedFromExtensionPackVSIX: {
												type: "boolean",
												description: (0, t.localize)(6130, null),
												default: !1,
											},
											installPreReleaseVersion: {
												type: "boolean",
												description: (0, t.localize)(6131, null),
												default: !1,
											},
											donotSync: {
												type: "boolean",
												description: (0, t.localize)(6132, null),
												default: !1,
											},
											justification: {
												type: ["string", "object"],
												description: (0, t.localize)(6133, null),
											},
											enable: {
												type: "boolean",
												description: (0, t.localize)(6134, null),
												default: !1,
											},
											context: {
												type: "object",
												description: (0, t.localize)(6135, null),
											},
										},
									},
								},
							],
						},
						handler: async (Te, Ee, Ie) => {
							const Be = Te.get(h.$MQb),
								Se = Te.get(m.$GQb),
								ke = Te.get(d.$Ep);
							try {
								if (typeof Ee == "string") {
									const [Ue, qe] = (0, $.$9p)(Ee);
									if (
										Be.local.find((Me) =>
											(0, $.$7p)(Me.identifier, { id: Ue, uuid: qe }),
										)?.enablementState ===
										m.EnablementState.DisabledByExtensionKind
									) {
										const [Me] = await ke.getExtensions(
											[{ id: Ue, preRelease: Ie?.installPreReleaseVersion }],
											L.CancellationToken.None,
										);
										if (!Me) throw new Error((0, t.localize)(6136, null, Ee));
										await Se.installFromGallery(Me, {
											isMachineScoped: Ie?.donotSync ? !0 : void 0,
											installPreReleaseVersion: Ie?.installPreReleaseVersion,
											installGivenVersion: !!qe,
											context: {
												...Ie?.context,
												[d.$vp]: d.ExtensionInstallSource.COMMAND,
											},
										});
									} else
										await Be.install(
											Ee,
											{
												version: qe,
												installPreReleaseVersion: Ie?.installPreReleaseVersion,
												context: {
													...Ie?.context,
													[d.$vp]: d.ExtensionInstallSource.COMMAND,
												},
												justification: Ie?.justification,
												enable: Ie?.enable,
												isMachineScoped: Ie?.donotSync ? !0 : void 0,
											},
											be.ProgressLocation.Notification,
										);
								} else {
									const Ue = I.URI.revive(Ee);
									await Be.install(Ue, {
										installOnlyNewlyAddedFromExtensionPack:
											Ie?.installOnlyNewlyAddedFromExtensionPackVSIX,
										installGivenVersion: !0,
									});
								}
							} catch (Ue) {
								throw ((0, P.$4)(Ue), Ue);
							}
						},
					}),
					s.$fk.registerCommand({
						id: "workbench.extensions.uninstallExtension",
						metadata: {
							description: (0, t.localize)(6137, null),
							args: [
								{
									name: (0, t.localize)(6138, null),
									schema: { type: "string" },
								},
							],
						},
						handler: async (Te, Ee) => {
							if (!Ee) throw new Error((0, t.localize)(6139, null));
							const Ie = Te.get(d.$Hp),
								Be = await Ie.getInstalled(),
								[Se] = Be.filter((ke) => (0, $.$7p)(ke.identifier, { id: Ee }));
							if (!Se) throw new Error((0, t.localize)(6140, null, Ee));
							if (Se.isBuiltin)
								throw new Error((0, t.localize)(6141, null, Ee));
							try {
								await Ie.uninstall(Se);
							} catch (ke) {
								throw ((0, P.$4)(ke), ke);
							}
						},
					}),
					s.$fk.registerCommand({
						id: "workbench.extensions.search",
						metadata: {
							description: (0, t.localize)(6142, null),
							args: [
								{
									name: (0, t.localize)(6143, null),
									schema: { type: "string" },
								},
							],
						},
						handler: async (Te, Ee = "") => {
							const Be = await Te.get($e.$6Sb).openPaneComposite(
								h.$LQb,
								D.ViewContainerLocation.Sidebar,
								!0,
							);
							Be && (Be.getViewPaneContainer().search(Ee), Be.focus());
						},
					});
				function Oe(Te, Ee) {
					Te?.addImplementation(105, "extensions-editor", (Ie) => {
						const Se = Ie.get(x.$IY).activeEditorPane;
						return Se instanceof g.$oTc && Se.activeWebview?.isFocused
							? (Ee(Se.activeWebview), !0)
							: !1;
					});
				}
				Oe(F.$BAb, (Te) => Te.copy()),
					Oe(F.$AAb, (Te) => Te.cut()),
					Oe(F.$CAb, (Te) => Te.paste()),
					(e.$3Tc = new R.$5j("hasLocalServer", !1)),
					(e.$4Tc = new R.$5j("hasRemoteServer", !1)),
					(e.$5Tc = new R.$5j("hasWebServer", !1));
				async function xe(Te) {
					try {
						await Te.run();
					} finally {
						(0, te.$Uc)(Te) && Te.dispose();
					}
				}
				let He = class extends te.$1c {
					constructor(Ee, Ie, Be, Se, ke, Ue, qe, Ae, Me) {
						super(),
							(this.a = Ee),
							(this.b = Se),
							(this.g = ke),
							(this.h = Ue),
							(this.j = qe),
							(this.m = Ae),
							(this.n = Me);
						const De = h.$1Qb.bindTo(Be);
						Ie.isEnabled() && De.set(!0);
						const Re = e.$3Tc.bindTo(Be);
						this.a.localExtensionManagementServer && Re.set(!0);
						const je = e.$4Tc.bindTo(Be);
						this.a.remoteExtensionManagementServer && je.set(!0);
						const Ve = e.$5Tc.bindTo(Be);
						this.a.webExtensionManagementServer && Ve.set(!0),
							this.s(),
							this.t(),
							this.q();
					}
					q() {
						(this.a.localExtensionManagementServer ||
							this.a.remoteExtensionManagementServer ||
							this.a.webExtensionManagementServer) &&
							w.$Io
								.as(O.$1r.Quickaccess)
								.registerQuickAccessProvider({
									ctor: B.$BTc,
									prefix: B.$BTc.PREFIX,
									placeholder: (0, t.localize)(6144, null),
									helpEntries: [{ description: (0, t.localize)(6145, null) }],
								});
					}
					s() {
						this.D(
							E.$ZX.appendMenuItem(E.$XX.MenubarPreferencesMenu, {
								command: { id: h.$LQb, title: (0, t.localize)(6146, null) },
								group: "2_configuration",
								order: 3,
							}),
						),
							this.D(
								E.$ZX.appendMenuItem(E.$XX.GlobalActivity, {
									command: { id: h.$LQb, title: (0, t.localize)(6147, null) },
									group: "2_configuration",
									order: 3,
								}),
							),
							this.u({
								id: "workbench.extensions.action.focusExtensionsView",
								title: (0, t.localize2)(6196, "Focus on Extensions View"),
								category: d.$Mp,
								f1: !0,
								run: async (qe) => {
									await qe
										.get($e.$6Sb)
										.openPaneComposite(
											h.$LQb,
											D.ViewContainerLocation.Sidebar,
											!0,
										);
								},
							}),
							this.u({
								id: "workbench.extensions.action.installExtensions",
								title: (0, t.localize2)(6197, "Install Extensions"),
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
								},
								run: async (qe) => {
									qe.get(M.$HMb).openViewContainer(h.$LQb, !0);
								},
							}),
							this.u({
								id: "workbench.extensions.action.showRecommendedKeymapExtensions",
								title: (0, t.localize2)(6198, "Keymaps"),
								category: d.$Np,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{
										id: E.$XX.EditorTitle,
										when: R.$Kj.and(ve.$qBc, h.$1Qb),
										group: "2_keyboard_discover_actions",
									},
								],
								menuTitles: {
									[E.$XX.EditorTitle.id]: (0, t.localize)(6148, null),
								},
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@recommended:keymaps ")),
							}),
							this.u({
								id: "workbench.extensions.action.showLanguageExtensions",
								title: (0, t.localize2)(6199, "Language Extensions"),
								category: d.$Np,
								menu: { id: E.$XX.CommandPalette, when: h.$1Qb },
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@recommended:languages ")),
							}),
							this.u({
								id: "workbench.extensions.action.checkForUpdates",
								title: (0, t.localize2)(6200, "Check for Extension Updates"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.and(
											R.$Kj.equals("viewContainer", h.$LQb),
											h.$1Qb,
										),
										group: "1_updates",
										order: 1,
									},
								],
								run: async () => (
									await this.g.checkForUpdates(),
									this.g.outdated.length
										? xe(this.j.createInstance(c.$NTb, "@outdated "))
										: this.m.info((0, t.localize)(6149, null))
								),
							});
						const Ee = R.$Kj.equals(`config.${h.$OQb}`, !1);
						this.u({
							id: "workbench.extensions.action.enableAutoUpdate",
							title: (0, t.localize2)(
								6201,
								"Enable Auto Update for All Extensions",
							),
							category: d.$Mp,
							precondition: Ee,
							menu: [
								{
									id: E.$XX.ViewContainerTitle,
									order: 5,
									group: "1_updates",
									when: R.$Kj.and(R.$Kj.equals("viewContainer", h.$LQb), Ee),
								},
								{ id: E.$XX.CommandPalette },
							],
							run: (qe) => qe.get(h.$MQb).updateAutoUpdateValue(!0),
						});
						const Ie = R.$Kj.notEquals(`config.${h.$OQb}`, !1);
						this.u({
							id: "workbench.extensions.action.disableAutoUpdate",
							title: (0, t.localize2)(
								6202,
								"Disable Auto Update for All Extensions",
							),
							precondition: Ie,
							category: d.$Mp,
							menu: [
								{
									id: E.$XX.ViewContainerTitle,
									order: 5,
									group: "1_updates",
									when: R.$Kj.and(R.$Kj.equals("viewContainer", h.$LQb), Ie),
								},
								{ id: E.$XX.CommandPalette },
							],
							run: (qe) => qe.get(h.$MQb).updateAutoUpdateValue(!1),
						}),
							this.u({
								id: "workbench.extensions.action.updateAllExtensions",
								title: (0, t.localize2)(6203, "Update All Extensions"),
								category: d.$Mp,
								precondition: h.$ZQb,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.and(
											R.$Kj.equals("viewContainer", h.$LQb),
											R.$Kj.or(
												R.$Kj.has(`config.${h.$OQb}`).negate(),
												R.$Kj.equals(
													`config.${h.$OQb}`,
													"onlyEnabledExtensions",
												),
											),
										),
										group: "1_updates",
										order: 2,
									},
									{
										id: E.$XX.ViewTitle,
										when: R.$Kj.equals("view", h.$UQb),
										group: "navigation",
										order: 1,
									},
								],
								icon: ee.$gSb,
								run: async () => {
									const qe = this.g.outdated;
									(await this.g.updateAll()).forEach((Me) => {
										if (Me.error) {
											const De = qe.find((Re) =>
												(0, $.$7p)(Re.identifier, Me.identifier),
											);
											De &&
												xe(
													this.j.createInstance(
														c.$_Sb,
														De,
														De.latestVersion,
														d.InstallOperation.Update,
														Me.error,
													),
												);
										}
									});
								},
							}),
							this.u({
								id: "workbench.extensions.action.enableAll",
								title: (0, t.localize2)(6204, "Enable All Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.equals("viewContainer", h.$LQb),
										group: "2_enablement",
										order: 1,
									},
								],
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!!Ae.local &&
											this.h.canChangeEnablement(Ae.local) &&
											!this.h.isEnabled(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.EnabledGlobally,
										));
								},
							}),
							this.u({
								id: "workbench.extensions.action.enableAllWorkspace",
								title: (0, t.localize2)(
									6205,
									"Enable All Extensions for this Workspace",
								),
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									),
								},
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!!Ae.local &&
											this.h.canChangeEnablement(Ae.local) &&
											!this.h.isEnabled(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.EnabledWorkspace,
										));
								},
							}),
							this.u({
								id: "workbench.extensions.action.disableAll",
								title: (0, t.localize2)(
									6206,
									"Disable All Installed Extensions",
								),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.equals("viewContainer", h.$LQb),
										group: "2_enablement",
										order: 2,
									},
								],
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!Ae.isBuiltin &&
											!!Ae.local &&
											this.h.isEnabled(Ae.local) &&
											this.h.canChangeEnablement(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.DisabledGlobally,
										));
								},
							}),
							this.u({
								id: "workbench.extensions.action.disableAllWorkspace",
								title: (0, t.localize2)(
									6207,
									"Disable All Installed Extensions for this Workspace",
								),
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									),
								},
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!Ae.isBuiltin &&
											!!Ae.local &&
											this.h.isEnabled(Ae.local) &&
											this.h.canChangeEnablement(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.DisabledWorkspace,
										));
								},
							}),
							this.u({
								id: h.$WQb,
								title: (0, t.localize2)(6208, "Install from VSIX..."),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: R.$Kj.or(e.$3Tc, e.$4Tc) },
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.and(
											R.$Kj.equals("viewContainer", h.$LQb),
											R.$Kj.or(e.$3Tc, e.$4Tc),
										),
										group: "3_install",
										order: 1,
									},
								],
								run: async (qe) => {
									const Ae = qe.get(Q.$IO),
										Me = qe.get(s.$ek),
										De = await Ae.showOpenDialog({
											title: (0, t.localize)(6150, null),
											filters: [
												{ name: "VSIX Extensions", extensions: ["vsix"] },
											],
											canSelectFiles: !0,
											canSelectMany: !0,
											openLabel: (0, Z.$DO)((0, t.localize)(6151, null)),
										});
									De && (await Me.executeCommand(h.$XQb, De));
								},
							}),
							this.u({
								id: h.$XQb,
								title: (0, t.localize)(6152, null),
								menu: [
									{
										id: E.$XX.ExplorerContext,
										group: "extensions",
										when: R.$Kj.and(
											W.$BQb.Extension.isEqualTo(".vsix"),
											R.$Kj.or(e.$3Tc, e.$4Tc),
										),
									},
								],
								run: async (qe, Ae) => {
									const Me = qe.get(h.$MQb),
										De = qe.get(J.$asb),
										Re = qe.get(K.$4N),
										je = Array.isArray(Ae) ? Ae : [Ae],
										Ve = await Promise.allSettled(
											je.map(
												async (ft) =>
													await Me.install(ft, { installGivenVersion: !0 }),
											),
										);
									let Ze,
										et = !1,
										rt = !1;
									for (const ft of Ve) {
										if (ft.status === "rejected") {
											Ze = new Error(ft.reason);
											break;
										}
										(et =
											et ||
											ft.value.runtimeState?.action ===
												h.ExtensionRuntimeActionType.ReloadWindow),
											(rt =
												rt ||
												ft.value.runtimeState?.action ===
													h.ExtensionRuntimeActionType.RestartExtensions);
									}
									if (Ze) throw Ze;
									et
										? Re.prompt(K.Severity.Info, (0, t.localize)(6153, null), [
												{
													label: (0, t.localize)(6154, null),
													run: () => De.reload(),
												},
											])
										: rt
											? Re.prompt(
													K.Severity.Info,
													(0, t.localize)(6155, null),
													[
														{
															label: (0, t.localize)(6156, null),
															run: () => Me.updateRunningExtensions(),
														},
													],
												)
											: Re.prompt(
													K.Severity.Info,
													(0, t.localize)(6157, null),
													[],
												);
								},
							}),
							this.u({
								id: "workbench.extensions.action.installExtensionFromLocation",
								title: (0, t.localize2)(
									6209,
									"Install Extension from Location...",
								),
								category: q.$ck.Developer,
								menu: [
									{ id: E.$XX.CommandPalette, when: R.$Kj.or(e.$5Tc, e.$3Tc) },
								],
								run: async (qe) => {
									const Ae = qe.get(m.$GQb);
									if (ue.$r)
										return new Promise((Me, De) => {
											const Re = qe.get(ae.$DJ),
												je = new te.$Zc(),
												Ve = je.add(Re.createQuickPick());
											(Ve.title = (0, t.localize)(6158, null)),
												(Ve.customButton = !0),
												(Ve.customLabel = (0, t.localize)(6159, null)),
												(Ve.placeholder = (0, t.localize)(6160, null)),
												(Ve.ignoreFocusOut = !0),
												je.add(
													pe.Event.any(
														Ve.onDidAccept,
														Ve.onDidCustom,
													)(async () => {
														if ((Ve.hide(), Ve.value))
															try {
																await Ae.installFromLocation(
																	I.URI.parse(Ve.value),
																);
															} catch (Ze) {
																De(Ze);
																return;
															}
														Me();
													}),
												),
												je.add(Ve.onDidHide(() => je.dispose())),
												Ve.show();
										});
									{
										const De = await qe
											.get(Q.$IO)
											.showOpenDialog({
												canSelectFolders: !0,
												canSelectFiles: !1,
												canSelectMany: !1,
												title: (0, t.localize)(6161, null),
											});
										De?.[0] && (await Ae.installFromLocation(De[0]));
									}
								},
							});
						const Be = new E.$XX("extensionsFilterSubMenu");
						E.$ZX.appendMenuItem(h.$5Qb, {
							submenu: Be,
							title: (0, t.localize)(6162, null),
							group: "navigation",
							order: 2,
							icon: ee.$eSb,
						}),
							this.u({
								id: "extensions.filter.featured",
								title: (0, t.localize2)(6210, "Show Featured Extensions"),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 1 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6163, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@featured ")),
							}),
							this.u({
								id: "workbench.extensions.action.showPopularExtensions",
								title: (0, t.localize2)(6211, "Show Popular Extensions"),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6164, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@popular ")),
							}),
							this.u({
								id: "workbench.extensions.action.showRecommendedExtensions",
								title: (0, t.localize2)(6212, "Show Recommended Extensions"),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6165, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@recommended ")),
							}),
							this.u({
								id: "workbench.extensions.action.recentlyPublishedExtensions",
								title: (0, t.localize2)(
									6213,
									"Show Recently Published Extensions",
								),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6166, null) },
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@recentlyPublished ")),
							});
						const ke = new E.$XX("extensionsCategoryFilterSubMenu");
						E.$ZX.appendMenuItem(Be, {
							submenu: ke,
							title: (0, t.localize)(6167, null),
							when: h.$1Qb,
							group: "2_categories",
							order: 1,
						}),
							_.$Fn.forEach((qe, Ae) => {
								this.u({
									id: `extensions.actions.searchByCategory.${qe}`,
									title: qe,
									menu: [{ id: ke, when: h.$1Qb, order: Ae }],
									run: () =>
										xe(
											this.j.createInstance(
												c.$NTb,
												`@category:"${qe.toLowerCase()}"`,
											),
										),
								});
							}),
							this.u({
								id: "workbench.extensions.action.listBuiltInExtensions",
								title: (0, t.localize2)(6214, "Show Built-in Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{ id: Be, group: "3_installed", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6168, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@builtin ")),
							}),
							this.u({
								id: "workbench.extensions.action.extensionUpdates",
								title: (0, t.localize2)(6215, "Show Extension Updates"),
								category: d.$Mp,
								precondition: h.$1Qb,
								f1: !0,
								menu: [
									{ id: Be, group: "3_installed", when: h.$1Qb, order: 1 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6169, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@updates")),
							}),
							this.u({
								id: h.$YQb,
								title: (0, t.localize2)(
									6216,
									"Show Extensions Unsupported By Workspace",
								),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: R.$Kj.or(e.$3Tc, e.$4Tc) },
									{
										id: Be,
										group: "3_installed",
										order: 5,
										when: R.$Kj.or(e.$3Tc, e.$4Tc),
									},
								],
								menuTitles: { [Be.id]: (0, t.localize)(6170, null) },
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@workspaceUnsupported")),
							}),
							this.u({
								id: "workbench.extensions.action.showEnabledExtensions",
								title: (0, t.localize2)(6217, "Show Enabled Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{ id: Be, group: "3_installed", order: 3 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6171, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@enabled ")),
							}),
							this.u({
								id: "workbench.extensions.action.showDisabledExtensions",
								title: (0, t.localize2)(6218, "Show Disabled Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{ id: Be, group: "3_installed", order: 4 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6172, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@disabled ")),
							});
						const Ue = new E.$XX("extensionsSortSubMenu");
						E.$ZX.appendMenuItem(Be, {
							submenu: Ue,
							title: (0, t.localize)(6173, null),
							when: R.$Kj.and(R.$Kj.or(h.$1Qb, p.$pTc)),
							group: "4_sort",
							order: 1,
						}),
							[
								{
									id: "installs",
									title: (0, t.localize)(6174, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "rating",
									title: (0, t.localize)(6175, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "name",
									title: (0, t.localize)(6176, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "publishedDate",
									title: (0, t.localize)(6177, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "updateDate",
									title: (0, t.localize)(6178, null),
									precondition: R.$Kj.and(
										p.$rTc.negate(),
										p.$uTc.negate(),
										p.$tTc.negate(),
									),
								},
							].map(({ id: qe, title: Ae, precondition: Me }, De) => {
								this.u({
									id: `extensions.sort.${qe}`,
									title: Ae,
									precondition: Me,
									menu: [{ id: Ue, when: R.$Kj.or(h.$1Qb, p.$pTc), order: De }],
									toggled: p.$qTc.isEqualTo(qe),
									run: async () => {
										const je = (
												await this.b.openPaneComposite(
													h.$LQb,
													D.ViewContainerLocation.Sidebar,
													!0,
												)
											)?.getViewPaneContainer(),
											Ve = se.$ZSc.parse(je.searchValue || "");
										je.search(new se.$ZSc(Ve.value, qe).toString()), je.focus();
									},
								});
							}),
							this.u({
								id: "workbench.extensions.action.clearExtensionsSearchResults",
								title: (0, t.localize2)(
									6219,
									"Clear Extensions Search Results",
								),
								category: d.$Mp,
								icon: ee.$cSb,
								f1: !0,
								precondition: p.$sTc,
								menu: { id: h.$5Qb, group: "navigation", order: 1 },
								run: async (qe) => {
									const Ae = qe
										.get(M.$HMb)
										.getActiveViewPaneContainerWithId(h.$LQb);
									if (Ae) {
										const Me = Ae;
										Me.search(""), Me.focus();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.refreshExtension",
								title: (0, t.localize2)(6220, "Refresh"),
								category: d.$Mp,
								icon: ee.$dSb,
								f1: !0,
								menu: {
									id: E.$XX.ViewContainerTitle,
									when: R.$Kj.equals("viewContainer", h.$LQb),
									group: "navigation",
									order: 2,
								},
								run: async (qe) => {
									const Ae = qe
										.get(M.$HMb)
										.getActiveViewPaneContainerWithId(h.$LQb);
									Ae && (await Ae.refresh());
								},
							}),
							this.u({
								id: "workbench.extensions.action.installWorkspaceRecommendedExtensions",
								title: (0, t.localize)(6179, null),
								icon: ee.$gSb,
								menu: {
									id: E.$XX.ViewTitle,
									when: R.$Kj.equals("view", h.$TQb),
									group: "navigation",
									order: 1,
								},
								run: async (qe) =>
									qe
										.get(M.$HMb)
										.getActiveViewWithId(h.$TQb)
										.installWorkspaceRecommendations(),
							}),
							this.u({
								id: c.$QTb.ID,
								title: c.$QTb.LABEL,
								icon: ee.$hSb,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: W.$wPb.notEqualsTo("empty"),
									},
									{
										id: E.$XX.ViewTitle,
										when: R.$Kj.equals("view", h.$TQb),
										group: "navigation",
										order: 2,
									},
								],
								run: () =>
									xe(this.j.createInstance(c.$QTb, c.$QTb.ID, c.$QTb.LABEL)),
							}),
							this.u({
								id: c.$VTb.ID,
								title: {
									value: c.$VTb.LABEL,
									original: "Install Specific Version of Extension...",
								},
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
								},
								run: () =>
									xe(this.j.createInstance(c.$VTb, c.$VTb.ID, c.$VTb.LABEL)),
							}),
							this.u({
								id: c.$UTb.ID,
								title: {
									value: c.$UTb.LABEL,
									original: "Reinstall Extension...",
								},
								category: q.$ck.Developer,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc)),
								},
								run: () =>
									xe(this.j.createInstance(c.$UTb, c.$UTb.ID, c.$UTb.LABEL)),
							});
					}
					t() {
						this.u({
							id: c.$ETb.ID,
							title: c.$ETb.TITLE,
							menu: {
								id: E.$XX.ExtensionContext,
								group: h.$2Qb,
								order: 0,
								when: R.$Kj.and(
									R.$Kj.not("inExtensionEditor"),
									R.$Kj.equals("extensionStatus", "installed"),
									R.$Kj.has("extensionHasColorThemes"),
								),
							},
							run: async (Ee, Ie) => {
								const Be = Ee.get(h.$MQb),
									Se = Ee.get(l.$Li),
									ke = Be.local.find((Ue) =>
										(0, $.$7p)(Ue.identifier, { id: Ie }),
									);
								if (ke) {
									const Ue = Se.createInstance(c.$ETb);
									return (Ue.extension = ke), Ue.run();
								}
							},
						}),
							this.u({
								id: c.$FTb.ID,
								title: c.$FTb.TITLE,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$2Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasFileIconThemes"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = Ee.get(l.$Li),
										ke = Be.local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Se.createInstance(c.$FTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: c.$GTb.ID,
								title: c.$GTb.TITLE,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$2Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasProductIconThemes"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = Ee.get(l.$Li),
										ke = Be.local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Se.createInstance(c.$GTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.showPreReleaseVersion",
								title: (0, t.localize2)(6221, "Show Pre-Release Version"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.has("inExtensionEditor"),
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.not("showPreReleaseVersion"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = (
											await Be.getExtensions(
												[{ id: Ie }],
												L.CancellationToken.None,
											)
										)[0];
									Be.open(Se, { showPreReleaseVersion: !0 });
								},
							}),
							this.u({
								id: "workbench.extensions.action.showReleasedVersion",
								title: (0, t.localize2)(6222, "Show Release Version"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 1,
									when: R.$Kj.and(
										R.$Kj.has("inExtensionEditor"),
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.has("extensionHasReleaseVersion"),
										R.$Kj.has("showPreReleaseVersion"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = (
											await Be.getExtensions(
												[{ id: Ie }],
												L.CancellationToken.None,
											)
										)[0];
									Be.open(Se, { showPreReleaseVersion: !1 });
								},
							}),
							this.u({
								id: c.$mTb.ID,
								title: c.$mTb.LABEL,
								category: d.$Mp,
								precondition: R.$Kj.and(
									R.$Kj.or(
										R.$Kj.notEquals(
											`config.${h.$OQb}`,
											"onlyEnabledExtensions",
										),
										R.$Kj.equals("isExtensionEnabled", !0),
									),
									R.$Kj.not("extensionDisallowInstall"),
								),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$4Qb,
									order: 1,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$mTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: c.$nTb.ID,
								title: {
									value: c.$nTb.LABEL,
									original: "Auto Update (Publisher)",
								},
								category: d.$Mp,
								precondition: R.$Kj.equals(`config.${h.$OQb}`, !1),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$4Qb,
									order: 2,
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$nTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.switchToPreRlease",
								title: (0, t.localize)(6180, null),
								category: d.$Mp,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 2,
									when: R.$Kj.and(
										h.$1Qb,
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.not("installedExtensionIsOptedToPreRelease"),
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$vTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.switchToRelease",
								title: (0, t.localize)(6181, null),
								category: d.$Mp,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 2,
									when: R.$Kj.and(
										h.$1Qb,
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.has("installedExtensionIsOptedToPreRelease"),
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$vTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: c.$ITb.ID,
								title: c.$ITb.TITLE,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.has("canSetLanguage"),
										R.$Kj.has("isActiveLanguagePackExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = (
											await Ee.get(h.$MQb).getExtensions(
												[{ id: Ie }],
												L.CancellationToken.None,
											)
										)[0],
										Ue = Be.createInstance(c.$ITb);
									return (Ue.extension = ke), Ue.run();
								},
							}),
							this.u({
								id: "workbench.extensions.action.installAndDonotSync",
								title: (0, t.localize)(6182, null),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "0_install",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "uninstalled"),
										R.$Kj.has("isGalleryExtension"),
										R.$Kj.not("extensionDisallowInstall"),
										z.$Sxc,
									),
									order: 1,
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) {
										const ke = Be.createInstance(c.$dTb, {
											isMachineScoped: !0,
										});
										return (ke.extension = Se), ke.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.installPrereleaseAndDonotSync",
								title: (0, t.localize)(6183, null),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "0_install",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "uninstalled"),
										R.$Kj.has("isGalleryExtension"),
										R.$Kj.has("extensionHasPreReleaseVersion"),
										R.$Kj.not("extensionDisallowInstall"),
										z.$Sxc,
									),
									order: 2,
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) {
										const ke = Be.createInstance(c.$dTb, {
											isMachineScoped: !0,
											preRelease: !0,
										});
										return (ke.extension = Se), ke.run();
									}
								},
							}),
							this.u({
								id: c.$wTb.ID,
								title: c.$wTb.LABEL,
								menu: {
									id: E.$XX.ExtensionContext,
									group: "0_install",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "uninstalled"),
										R.$Kj.has("isGalleryExtension"),
										R.$Kj.not("extensionDisallowInstall"),
									),
									order: 3,
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) return Be.createInstance(c.$wTb, Se, !1).run();
								},
							}),
							this.u({
								id: "workbench.extensions.action.copyExtension",
								title: (0, t.localize2)(6223, "Copy"),
								menu: { id: E.$XX.ExtensionContext, group: "1_copy" },
								run: async (Ee, Ie) => {
									const Be = Ee.get(N.$Vxb),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) {
										const ke = (0, t.localize)(6184, null, Se.displayName),
											Ue = (0, t.localize)(6185, null, Ie),
											qe = (0, t.localize)(6186, null, Se.description),
											Ae = (0, t.localize)(6187, null, Se.version),
											Me = (0, t.localize)(6188, null, Se.publisherDisplayName),
											De = Se.url
												? (0, t.localize)(6189, null, `${Se.url}`)
												: null,
											Re = `${ke}
${Ue}
${qe}
${Ae}
${Me}${
	De
		? `
` + De
		: ""
}`;
										await Be.writeText(Re);
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.copyExtensionId",
								title: (0, t.localize2)(6224, "Copy Extension ID"),
								menu: { id: E.$XX.ExtensionContext, group: "1_copy" },
								run: async (Ee, Ie) => Ee.get(N.$Vxb).writeText(Ie),
							}),
							this.u({
								id: "workbench.extensions.action.configure",
								title: (0, t.localize2)(6225, "Extension Settings"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasConfiguration"),
									),
									order: 1,
								},
								run: async (Ee, Ie) =>
									Ee.get(A.$7Z).openSettings({
										jsonEditor: !1,
										query: `@ext:${Ie}`,
									}),
							}),
							this.u({
								id: "workbench.extensions.action.configureKeybindings",
								title: (0, t.localize2)(6226, "Extension Keyboard Shortcuts"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasKeybindings"),
									),
									order: 2,
								},
								run: async (Ee, Ie) =>
									Ee.get(A.$7Z).openGlobalKeybindingSettings(!1, {
										query: `@ext:${Ie}`,
									}),
							}),
							this.u({
								id: "workbench.extensions.action.toggleApplyToAllProfiles",
								title: (0, t.localize2)(
									6227,
									"Apply Extension to all Profiles",
								),
								toggled: R.$Kj.has("isApplicationScopedExtension"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("isDefaultApplicationScopedExtension").negate(),
										R.$Kj.has("isBuiltinExtension").negate(),
										R.$Kj.equals("isWorkspaceScopedExtension", !1),
									),
									order: 3,
								},
								run: async (Ee, Ie, Be) => {
									const Se = Ee.get(Ce.$Vl),
										ke = Be.location
											? this.g.installed.find((Ue) =>
													Se.extUri.isEqual(Ue.local?.location, Be.location),
												)
											: void 0;
									if (ke) return this.g.toggleApplyExtensionToAllProfiles(ke);
								},
							}),
							this.u({
								id: h.$VQb,
								title: (0, t.localize2)(6228, "Sync This Extension"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										z.$Sxc,
										R.$Kj.equals("isWorkspaceScopedExtension", !1),
									),
									order: 4,
								},
								run: async (Ee, Ie) => {
									const Be = this.g.local.find((Se) =>
										(0, $.$7p)({ id: Ie }, Se.identifier),
									);
									if (Be) return this.g.toggleExtensionIgnoredToSync(Be);
								},
							}),
							this.u({
								id: "workbench.extensions.action.ignoreRecommendation",
								title: (0, t.localize2)(6229, "Ignore Recommendation"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.has("isExtensionRecommended"),
									order: 1,
								},
								run: async (Ee, Ie) =>
									Ee.get(r.$0Qb).toggleGlobalIgnoredRecommendation(Ie, !0),
							}),
							this.u({
								id: "workbench.extensions.action.undoIgnoredRecommendation",
								title: (0, t.localize2)(6230, "Undo Ignored Recommendation"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.has("isUserIgnoredRecommendation"),
									order: 1,
								},
								run: async (Ee, Ie) =>
									Ee.get(r.$0Qb).toggleGlobalIgnoredRecommendation(Ie, !1),
							}),
							this.u({
								id: "workbench.extensions.action.addExtensionToWorkspaceRecommendations",
								title: (0, t.localize2)(
									6231,
									"Add to Workspace Recommendations",
								),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.has("isBuiltinExtension").negate(),
										R.$Kj.has("isExtensionWorkspaceRecommended").negate(),
										R.$Kj.has("isUserIgnoredRecommendation").negate(),
										R.$Kj.notEquals("extensionSource", "resource"),
									),
									order: 2,
								},
								run: (Ee, Ie) => Ee.get(X.$DRb).toggleRecommendation(Ie),
							}),
							this.u({
								id: "workbench.extensions.action.removeExtensionFromWorkspaceRecommendations",
								title: (0, t.localize2)(
									6232,
									"Remove from Workspace Recommendations",
								),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.has("isBuiltinExtension").negate(),
										R.$Kj.has("isExtensionWorkspaceRecommended"),
									),
									order: 2,
								},
								run: (Ee, Ie) => Ee.get(X.$DRb).toggleRecommendation(Ie),
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceRecommendations",
								title: (0, t.localize2)(
									6233,
									"Add Extension to Workspace Recommendations",
								),
								category: (0, t.localize)(6190, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("workspace"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								async run(Ee) {
									const Ie = Ee.get(x.$IY),
										Be = Ee.get(X.$DRb);
									if (!(Ie.activeEditor instanceof n.$KQb)) return;
									const Se =
										Ie.activeEditor.extension.identifier.id.toLowerCase();
									(await Be.getRecommendations()).includes(Se) ||
										(await Be.toggleRecommendation(Se));
								},
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceFolderRecommendations",
								title: (0, t.localize2)(
									6234,
									"Add Extension to Workspace Folder Recommendations",
								),
								category: (0, t.localize)(6191, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("folder"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								run: () =>
									this.n.executeCommand(
										"workbench.extensions.action.addToWorkspaceRecommendations",
									),
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceIgnoredRecommendations",
								title: (0, t.localize2)(
									6235,
									"Add Extension to Workspace Ignored Recommendations",
								),
								category: (0, t.localize)(6192, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("workspace"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								async run(Ee) {
									const Ie = Ee.get(x.$IY),
										Be = Ee.get(X.$DRb);
									if (!(Ie.activeEditor instanceof n.$KQb)) return;
									const Se =
										Ie.activeEditor.extension.identifier.id.toLowerCase();
									(await Be.getUnwantedRecommendations()).includes(Se) ||
										(await Be.toggleUnwantedRecommendation(Se));
								},
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations",
								title: (0, t.localize2)(
									6236,
									"Add Extension to Workspace Folder Ignored Recommendations",
								),
								category: (0, t.localize)(6193, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("folder"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								run: () =>
									this.n.executeCommand(
										"workbench.extensions.action.addToWorkspaceIgnoredRecommendations",
									),
							}),
							this.u({
								id: c.$PTb.ID,
								title: {
									value: c.$PTb.LABEL,
									original: "Configure Recommended Extensions (Workspace)",
								},
								category: (0, t.localize)(6194, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: W.$wPb.isEqualTo("workspace"),
								},
								run: () =>
									xe(this.j.createInstance(c.$PTb, c.$PTb.ID, c.$PTb.LABEL)),
							});
					}
					u(Ee) {
						const Ie = Ee.menu
							? Array.isArray(Ee.menu)
								? Ee.menu
								: [Ee.menu]
							: [];
						let Be = [];
						const Se = [];
						if (Ee.menuTitles)
							for (let Ue = 0; Ue < Ie.length; Ue++) {
								const qe = Ie[Ue],
									Ae = Ee.menuTitles[qe.id.id];
								Ae
									? Se.push({
											id: qe.id,
											item: { ...qe, command: { id: Ee.id, title: Ae } },
										})
									: Be.push(qe);
							}
						else Be = Ie;
						const ke = new te.$Zc();
						return (
							ke.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({ ...Ee, menu: Be });
										}
										run(Ue, ...qe) {
											return Ee.run(Ue, ...qe);
										}
									},
								),
							),
							Se.length && ke.add(E.$ZX.appendMenuItems(Se)),
							ke
						);
					}
				};
				He = Ne(
					[
						j(0, m.$EQb),
						j(1, d.$Ep),
						j(2, R.$6j),
						j(3, $e.$6Sb),
						j(4, h.$MQb),
						j(5, m.$IQb),
						j(6, l.$Li),
						j(7, Q.$GO),
						j(8, s.$ek),
					],
					He,
				);
				let Ke = class {
					constructor(Ee, Ie) {
						fe.$2N.removeOutdatedExtensionVersions(Ee, Ie);
					}
				};
				Ke = Ne([j(0, d.$Hp), j(1, me.$lq)], Ke);
				const Je = w.$Io.as(u.Extensions.Workbench);
				Je.registerWorkbenchContribution(He, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(p.$xTc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(p.$yTc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(y.$NGc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(p.$vTc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(T.$zTc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(k.$ATc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(ne.$XTc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(oe.$YTc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(
						ye.$1Tc,
						S.LifecyclePhase.Eventually,
					),
					Je.registerWorkbenchContribution(
						ge.$2Tc,
						S.LifecyclePhase.Eventually,
					),
					ue.$r &&
						Je.registerWorkbenchContribution(Ke, S.LifecyclePhase.Eventually),
					(0, E.$4X)(ie.$WTc),
					w.$Io
						.as(Le.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: h.$OQb,
								migrateFn: (Te, Ee) =>
									Te === "onlySelectedExtensions" ? { value: !1 } : [],
							},
						]);
			},
		),
		define(
			de[1992],
			he([
				1, 0, 4, 15, 50, 7, 49, 5, 66, 10, 39, 44, 1057, 220, 1340, 8, 35, 51,
				93, 431, 233, 105, 32, 3, 11, 554, 100, 347, 362, 146, 323, 138, 539,
				227, 334, 170, 60, 41, 279, 535, 14, 27, 43, 31, 23, 19, 75, 1984, 72,
				22, 2441,
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
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
			) {
				"use strict";
				var Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pAc = void 0),
					(t = mt(t)),
					(E = mt(E));
				const ie = E.$;
				let ne = class extends k.$TMb {
					static {
						Y = this;
					}
					static {
						this.a = 9;
					}
					static {
						this.b = 0;
					}
					static {
						this.ID = "workbench.explorer.openEditorsView";
					}
					static {
						this.NAME = t.localize2(7011, "Open Editors");
					}
					constructor(
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
					) {
						super(oe, fe, $e, ue, me, pe, ae, Fe, ve, ge, be),
							(this.ab = ye),
							(this.sb = Ce),
							(this.cc = Le),
							(this.dc = Oe),
							(this.r = !1),
							(this.s = []),
							(this.L = !1),
							(this.h = 0),
							(this.t = ue.getValue("explorer.openEditors.sortOrder")),
							this.ec(),
							this.D(this.Ab.onDidChangeConfiguration((xe) => this.qc(xe))),
							this.D(this.sb.onDidChangeDirty((xe) => this.sc(xe)));
					}
					ec() {
						const oe = () => {
								if (!this.isBodyVisible() || !this.m) {
									this.r = !0;
									return;
								}
								this.f?.schedule(this.h);
							},
							ae = this.D(new $.$0c()),
							pe = ($e) => {
								const ye = $e.onDidModelChange((ue) => {
									if (this.f?.isScheduled()) return;
									if (!this.isBodyVisible() || !this.m) {
										this.r = !0;
										return;
									}
									const fe = this.lc($e, ue.editor);
									switch (ue.kind) {
										case a.GroupModelChangeKind.EDITOR_ACTIVE:
											this.pc();
											break;
										case a.GroupModelChangeKind.GROUP_INDEX:
										case a.GroupModelChangeKind.GROUP_LABEL:
											fe >= 0 && this.m.splice(fe, 1, [$e]);
											break;
										case a.GroupModelChangeKind.EDITOR_DIRTY:
										case a.GroupModelChangeKind.EDITOR_STICKY:
										case a.GroupModelChangeKind.EDITOR_CAPABILITIES:
										case a.GroupModelChangeKind.EDITOR_PIN:
										case a.GroupModelChangeKind.EDITOR_LABEL:
											this.m.splice(fe, 1, [new c.$UUb(ue.editor, $e)]),
												this.pc();
											break;
										case a.GroupModelChangeKind.EDITOR_OPEN:
										case a.GroupModelChangeKind.EDITOR_MOVE:
										case a.GroupModelChangeKind.EDITOR_CLOSE:
											oe();
											break;
									}
								});
								ae.set($e.id, ye);
							};
						this.ab.groups.forEach(($e) => pe($e)),
							this.D(
								this.ab.onDidAddGroup(($e) => {
									pe($e), oe();
								}),
							),
							this.D(this.ab.onDidMoveGroup(() => oe())),
							this.D(this.ab.onDidChangeActiveGroup(() => this.pc())),
							this.D(
								this.ab.onDidRemoveGroup(($e) => {
									ae.deleteAndDispose($e.id), oe();
								}),
							);
					}
					Qb(oe) {
						super.Qb(oe, this.title);
						const ae = E.$fhb(oe, ie(".open-editors-dirty-count-container"));
						(this.c = E.$fhb(ae, ie(".dirty-count.monaco-count-badge.long"))),
							(this.c.style.backgroundColor = (0, o.$rP)(o.$1P)),
							(this.c.style.color = (0, o.$rP)(o.$2P)),
							(this.c.style.border = `1px solid ${(0, o.$rP)(o.$OP)}`),
							this.sc();
					}
					W(oe) {
						super.W(oe),
							oe.classList.add("open-editors"),
							oe.classList.add("show-file-icons");
						const ae = new _();
						this.m && this.m.dispose(),
							this.n && this.n.clear(),
							(this.j = new Z(this.t, this.Db, this.ab)),
							(this.n = this.Db.createInstance(s.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							})),
							(this.m = this.Db.createInstance(
								f.$yMb,
								"OpenEditors",
								oe,
								ae,
								[
									new te(this.yb, this.Db),
									new Q(this.n, this.Db, this.yb, this.Ab),
								],
								{
									identityProvider: {
										getId: (ye) =>
											ye instanceof c.$UUb ? ye.getId() : ye.id.toString(),
									},
									dnd: this.j,
									overrideStyles: this.Zb().listOverrideStyles,
									accessibilityProvider: new se(),
								},
							)),
							this.D(this.m),
							this.D(this.n);
						let pe = [];
						(this.f = this.D(
							new i.$Yh(() => {
								if (!this.m) return;
								pe = (0, $.$Vc)(pe);
								const ye = this.m.length,
									ue = this.kc();
								this.m.splice(0, this.m.length, ue),
									this.pc(),
									ye !== this.m.length && this.rc(),
									(this.r = !1),
									(this.t === "alphabetical" || this.t === "fullPath") &&
										ue.forEach((fe) => {
											fe instanceof c.$UUb &&
												pe.push(
													fe.editor.onDidChangeLabel(() => this.f?.schedule()),
												);
										});
							}, this.h),
						)),
							this.rc(),
							this.hc(),
							this.D(this.m.onContextMenu((ye) => this.nc(ye))),
							this.D(
								this.m.onMouseMiddleClick((ye) => {
									if (ye && ye.element instanceof c.$UUb) {
										if (
											(0, a.$z1)(
												ye.element.group,
												ye.element.editor,
												a.EditorCloseMethod.MOUSE,
												this.ab.partOptions,
											)
										)
											return;
										ye.element.group.closeEditor(ye.element.editor, {
											preserveFocus: !0,
										});
									}
								}),
							),
							this.D(
								this.m.onDidOpen((ye) => {
									const ue = ye.element;
									if (ue)
										if (ue instanceof c.$UUb) {
											if (
												E.$7gb(ye.browserEvent) &&
												ye.browserEvent.button === 1
											)
												return;
											this.oc(() => {
												this.mc(ue, {
													preserveFocus: ye.editorOptions.preserveFocus,
													pinned: ye.editorOptions.pinned,
													sideBySide: ye.sideBySide,
												});
											});
										} else
											this.oc(() => {
												this.ab.activateGroup(ue),
													ye.editorOptions.preserveFocus || ue.focus();
											});
									else return;
								}),
							),
							this.f.schedule(0),
							this.D(
								this.onDidChangeBodyVisibility((ye) => {
									ye && this.r && this.f?.schedule(0);
								}),
							);
						const $e = this.Cb.getViewContainerModel(
							this.Cb.getViewContainerByViewId(this.id),
						);
						this.D(
							$e.onDidChangeAllViewDescriptors(() => {
								this.rc();
							}),
						);
					}
					hc() {
						if (!this.m) return;
						c.$HUb.bindTo(this.m.contextKeyService),
							c.$IUb.bindTo(this.m.contextKeyService);
						const oe = S.$dVb.bindTo(this.Bb),
							ae = S.$eVb.bindTo(this.Bb),
							pe = S.$fVb.bindTo(this.Bb),
							$e = S.$gVb.bindTo(this.Bb),
							ye = this.Db.createInstance(I.$BQb);
						this.D(ye),
							this.D(
								this.m.onDidChangeFocus((ue) => {
									ye.reset(), oe.reset(), ae.reset(), pe.reset();
									const fe = ue.elements.length ? ue.elements[0] : void 0;
									if (fe instanceof c.$UUb) {
										const me = fe.getResource();
										ae.set(fe.editor.isDirty() && !fe.editor.isSaving()),
											pe.set(!!fe.editor.isReadonly()),
											ye.set(me ?? null);
									} else fe && oe.set(!0);
								}),
							),
							this.D(
								this.m.onDidChangeSelection((ue) => {
									const fe = ue.elements.every((me) => {
										if (me instanceof c.$UUb) {
											const ve = me.getResource();
											return (
												ve &&
												(ve.scheme === V.Schemas.untitled ||
													this.dc.hasProvider(ve))
											);
										}
										return !1;
									});
									$e.set(fe);
								}),
							);
					}
					focus() {
						super.focus(), this.m?.domFocus();
					}
					X(oe, ae) {
						super.X(oe, ae), this.m?.layout(oe, ae);
					}
					get jc() {
						return this.ab.groups.length > 1;
					}
					kc() {
						return (
							(this.s = []),
							this.ab.getGroups(m.GroupsOrder.GRID_APPEARANCE).forEach((oe) => {
								this.jc && this.s.push(oe);
								let ae = oe.editors.map((pe) => new c.$UUb(pe, oe));
								this.t === "alphabetical"
									? (ae = ae.sort((pe, $e) =>
											(0, z.$4r)(pe.editor.getName(), $e.editor.getName()),
										))
									: this.t === "fullPath" &&
										(ae = ae.sort((pe, $e) => {
											const ye = pe.editor.resource,
												ue = $e.editor.resource;
											if (ye === void 0 && ue === void 0)
												return (0, z.$4r)(
													pe.editor.getName(),
													$e.editor.getName(),
												);
											if (ye === void 0) return -1;
											if (ue === void 0) return 1;
											{
												const fe = ye.scheme,
													me = ue.scheme;
												return fe !== V.Schemas.file && me !== V.Schemas.file
													? G.$fh.compare(ye, ue)
													: fe !== V.Schemas.file
														? -1
														: me !== V.Schemas.file
															? 1
															: G.$fh.compare(ye, ue);
											}
										})),
									this.s.push(...ae);
							}),
							this.s
						);
					}
					lc(oe, ae) {
						return ae
							? this.s.findIndex(
									(pe) =>
										pe instanceof c.$UUb &&
										pe.editor === ae &&
										pe.group.id === oe.id,
								)
							: this.s.findIndex(
									(pe) => !(pe instanceof c.$UUb) && pe.id === oe.id,
								);
					}
					mc(oe, ae) {
						oe &&
							(this.Gb.publicLog2("workbenchActionExecuted", {
								id: "workbench.files.openFile",
								from: "openEditors",
							}),
							(ae.sideBySide && ae.preserveFocus) ||
								this.ab.activateGroup(oe.group),
							(ae.sideBySide ? this.ab.sideGroup : oe.group).openEditor(
								oe.editor,
								ae,
							));
					}
					nc(oe) {
						if (!oe.element) return;
						const ae = oe.element;
						this.zb.showContextMenu({
							menuId: v.$XX.OpenEditorsContext,
							menuActionOptions: {
								shouldForwardArgs: !0,
								arg:
									ae instanceof c.$UUb ? a.$A1.getOriginalUri(ae.editor) : {},
							},
							contextKeyService: this.m?.contextKeyService,
							getAnchor: () => oe.anchor,
							getActionsContext: () =>
								ae instanceof c.$UUb
									? {
											groupId: ae.groupId,
											editorIndex: ae.group.getIndexOfEditor(ae.editor),
										}
									: { groupId: ae.id },
						});
					}
					oc(oe) {
						this.L = !0;
						try {
							oe();
						} finally {
							this.L = !1;
						}
					}
					pc() {
						if (!(!this.m || this.L)) {
							if (this.m.length && this.ab.activeGroup) {
								const oe = this.lc(
									this.ab.activeGroup,
									this.ab.activeGroup.activeEditor,
								);
								if (oe >= 0) {
									try {
										this.m.setFocus([oe]),
											this.m.setSelection([oe]),
											this.m.reveal(oe);
									} catch {}
									return;
								}
							}
							this.m.setFocus([]), this.m.setSelection([]);
						}
					}
					qc(oe) {
						oe.affectsConfiguration("explorer.openEditors") && this.rc(),
							(oe.affectsConfiguration("explorer.decorations") ||
								oe.affectsConfiguration("explorer.openEditors.sortOrder")) &&
								((this.t = this.Ab.getValue("explorer.openEditors.sortOrder")),
								this.j && (this.j.sortOrder = this.t),
								this.f?.schedule());
					}
					rc() {
						(this.minimumBodySize =
							this.orientation === U.Orientation.VERTICAL ? this.vc() : 170),
							(this.maximumBodySize =
								this.orientation === U.Orientation.VERTICAL
									? this.uc()
									: Number.POSITIVE_INFINITY);
					}
					sc(oe) {
						if (
							oe &&
							oe.isDirty() &&
							!(oe.capabilities & A.WorkingCopyCapabilities.Untitled) &&
							this.cc.hasShortAutoSaveDelay(oe.resource)
						)
							return;
						const ae = this.sb.dirtyCount;
						ae === 0
							? this.c.classList.add("hidden")
							: ((this.c.textContent = t.localize(7008, null, ae)),
								this.c.classList.remove("hidden"));
					}
					get tc() {
						return this.ab.groups
							.map((oe) => oe.count)
							.reduce((oe, ae) => oe + ae, this.jc ? this.ab.groups.length : 0);
					}
					uc() {
						let oe = this.Ab.getValue("explorer.openEditors.minVisible");
						return (
							typeof oe != "number" && (oe = Y.b),
							this.Cb.getViewContainerModel(
								this.Cb.getViewContainerByViewId(this.id),
							).visibleViewDescriptors.length <= 1
								? Number.POSITIVE_INFINITY
								: Math.max(this.tc, oe) * _.ITEM_HEIGHT
						);
					}
					vc() {
						let oe = this.Ab.getValue("explorer.openEditors.visible");
						return typeof oe != "number" && (oe = Y.a), this.wc(oe);
					}
					wc(oe = Y.a) {
						return Math.min(Math.max(oe, 1), this.tc) * _.ITEM_HEIGHT;
					}
					setStructuralRefreshDelay(oe) {
						this.h = oe;
					}
					getOptimalWidth() {
						if (!this.m) return super.getOptimalWidth();
						const oe = this.m.getHTMLElement(),
							ae = [].slice.call(oe.querySelectorAll(".open-editor > a"));
						return E.$Agb(oe, ae);
					}
				};
				(e.$pAc = ne),
					(e.$pAc =
						ne =
						Y =
							Ne(
								[
									j(1, d.$Li),
									j(2, O.$K1),
									j(3, C.$Xxb),
									j(4, m.$EY),
									j(5, r.$gj),
									j(6, u.$uZ),
									j(7, g.$6j),
									j(8, p.$iP),
									j(9, y.$km),
									j(10, W.$Uyb),
									j(11, N.$gY),
									j(12, R.$_Y),
									j(13, B.$7rb),
									j(14, X.$ll),
								],
								ne,
							));
				class ee extends w.$sj {
					async run(oe) {
						if (this.editor)
							return super.run(oe, {
								groupId: this.editor.groupId,
								editorIndex: this.editor.group.getIndexOfEditor(
									this.editor.editor,
								),
							});
					}
				}
				class _ {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight(oe) {
						return _.ITEM_HEIGHT;
					}
					getTemplateId(oe) {
						return oe instanceof c.$UUb ? Q.ID : te.ID;
					}
				}
				class te {
					static {
						this.ID = "editorgroup";
					}
					constructor(oe, ae) {
						(this.a = oe), (this.b = ae);
					}
					get templateId() {
						return te.ID;
					}
					renderTemplate(oe) {
						const ae = Object.create(null);
						(ae.root = E.$fhb(oe, ie(".editor-group"))),
							(ae.name = E.$fhb(ae.root, ie("span.name"))),
							(ae.actionBar = new l.$eib(oe));
						const pe = this.b.createInstance(h.$_Wb, h.$_Wb.ID, h.$_Wb.LABEL),
							$e = this.a.lookupKeybinding(pe.id);
						ae.actionBar.push(pe, {
							icon: !0,
							label: !1,
							keybinding: $e ? $e.getLabel() : void 0,
						});
						const ye = this.b.createInstance(h.$aXb, h.$aXb.ID, h.$aXb.LABEL),
							ue = this.a.lookupKeybinding(ye.id);
						return (
							ae.actionBar.push(ye, {
								icon: !0,
								label: !1,
								keybinding: ue ? ue.getLabel() : void 0,
							}),
							ae
						);
					}
					renderElement(oe, ae, pe) {
						(pe.editorGroup = oe),
							(pe.name.textContent = oe.label),
							(pe.actionBar.context = { groupId: oe.id });
					}
					disposeTemplate(oe) {
						oe.actionBar.dispose();
					}
				}
				class Q {
					static {
						this.ID = "openeditor";
					}
					constructor(oe, ae, pe, $e) {
						(this.c = oe),
							(this.d = ae),
							(this.f = pe),
							(this.h = $e),
							(this.a = this.d.createInstance(n.$Rrc, n.$Rrc.ID, n.$Rrc.LABEL)),
							(this.b = this.d.createInstance(n.$Src, n.$Src.ID, n.$Src.LABEL));
					}
					get templateId() {
						return Q.ID;
					}
					renderTemplate(oe) {
						const ae = Object.create(null);
						return (
							(ae.container = oe),
							(ae.actionRunner = new ee()),
							(ae.actionBar = new l.$eib(oe, {
								actionRunner: ae.actionRunner,
							})),
							(ae.root = this.c.create(oe)),
							ae
						);
					}
					renderElement(oe, ae, pe) {
						const $e = oe.editor;
						(pe.actionRunner.editor = oe),
							pe.container.classList.toggle(
								"dirty",
								$e.isDirty() && !$e.isSaving(),
							),
							pe.container.classList.toggle("sticky", oe.isSticky()),
							pe.root.setResource(
								{
									resource: a.$A1.getOriginalUri($e, {
										supportSideBySide: a.SideBySideEditor.BOTH,
									}),
									name: $e.getName(),
									description: $e.getDescription(a.Verbosity.MEDIUM),
								},
								{
									italic: oe.isPreview(),
									extraClasses: ["open-editor"].concat(
										oe.editor.getLabelExtraClasses(),
									),
									fileDecorations: this.h.getValue().explorer.decorations,
									title: $e.getTitle(a.Verbosity.LONG),
									icon: $e.getIcon(),
								},
							);
						const ye = oe.isSticky() ? this.b : this.a;
						pe.actionBar.hasAction(ye) ||
							(pe.actionBar.isEmpty() || pe.actionBar.clear(),
							pe.actionBar.push(ye, {
								icon: !0,
								label: !1,
								keybinding: this.f.lookupKeybinding(ye.id)?.getLabel(),
							}));
					}
					disposeTemplate(oe) {
						oe.actionBar.dispose(),
							oe.root.dispose(),
							oe.actionRunner.dispose();
					}
				}
				class Z {
					set sortOrder(oe) {
						this.a = oe;
					}
					constructor(oe, ae, pe) {
						(this.b = ae), (this.c = pe), (this.a = oe);
					}
					get d() {
						return this.b.createInstance(P.$OSb, { allowWorkspaceOpen: !1 });
					}
					getDragURI(oe) {
						if (oe instanceof c.$UUb) {
							const ae = oe.getResource();
							if (ae) return ae.toString();
						}
						return null;
					}
					getDragLabel(oe) {
						if (oe.length > 1) return String(oe.length);
						const ae = oe[0];
						return ae instanceof c.$UUb ? ae.editor.getName() : ae.label;
					}
					onDragStart(oe, ae) {
						const pe = oe.elements,
							$e = [];
						if (pe) for (const ye of pe) ye instanceof c.$UUb && $e.push(ye);
						$e.length && this.b.invokeFunction(P.$PSb, $e, ae);
					}
					onDragOver(oe, ae, pe, $e, ye) {
						if (
							oe instanceof M.$yib &&
							!(0, T.$mzb)(ye, L.$Ohb.FILES, T.$hzb.FILES)
						)
							return !1;
						if (this.a !== "editorOrder")
							return oe instanceof M.$wib
								? !1
								: {
										accept: !0,
										effect: { type: b.ListDragOverEffectType.Move },
										feedback: [-1],
									};
						let ue;
						switch ($e) {
							case M.ListViewTargetSector.TOP:
							case M.ListViewTargetSector.CENTER_TOP:
								ue =
									pe === 0 && ae instanceof J.$Euc
										? b.ListDragOverEffectPosition.After
										: b.ListDragOverEffectPosition.Before;
								break;
							case M.ListViewTargetSector.CENTER_BOTTOM:
							case M.ListViewTargetSector.BOTTOM:
								ue = b.ListDragOverEffectPosition.After;
								break;
						}
						return {
							accept: !0,
							effect: { type: b.ListDragOverEffectType.Move, position: ue },
							feedback: [pe],
						};
					}
					drop(oe, ae, pe, $e, ye) {
						let ue =
								ae instanceof c.$UUb
									? ae.group
									: ae || this.c.groups[this.c.count - 1],
							fe =
								ae instanceof c.$UUb ? ae.group.getIndexOfEditor(ae.editor) : 0;
						switch ($e) {
							case M.ListViewTargetSector.TOP:
							case M.ListViewTargetSector.CENTER_TOP:
								ae instanceof J.$Euc &&
									ue.index !== 0 &&
									((ue = this.c.groups[ue.index - 1]), (fe = ue.count));
								break;
							case M.ListViewTargetSector.BOTTOM:
							case M.ListViewTargetSector.CENTER_BOTTOM:
								ae instanceof c.$UUb && fe++;
								break;
						}
						if (oe instanceof M.$wib) {
							for (const me of oe.elements) {
								const ve = me.group.getIndexOfEditor(me.editor);
								me.group === ue && ve < fe && fe--,
									me.group.moveEditor(me.editor, ue, {
										index: fe,
										preserveFocus: !0,
									}),
									fe++;
							}
							this.c.activateGroup(ue);
						} else
							this.d.handleDrop(
								ye,
								K.$Bfb,
								() => ue,
								() => ue.focus(),
								{ index: fe },
							);
					}
					dispose() {}
				}
				Ne([D.$ei], Z.prototype, "d", null);
				class se {
					getWidgetAriaLabel() {
						return t.localize(7009, null);
					}
					getAriaLabel(oe) {
						return oe instanceof c.$UUb
							? `${oe.editor.getName()}, ${oe.editor.getDescription()}`
							: oe.ariaLabel;
					}
				}
				const re = "workbench.action.toggleEditorGroupLayout";
				(0, v.$4X)(
					class extends v.$3X {
						constructor() {
							super({
								id: "workbench.action.toggleEditorGroupLayout",
								title: t.localize2(
									7012,
									"Toggle Vertical/Horizontal Editor Layout",
								),
								f1: !0,
								keybinding: {
									primary: x.KeyMod.Shift | x.KeyMod.Alt | x.KeyCode.Digit0,
									mac: {
										primary: x.KeyMod.CtrlCmd | x.KeyMod.Alt | x.KeyCode.Digit0,
									},
									weight: H.KeybindingWeight.WorkbenchContrib,
								},
								icon: F.$ak.editorLayout,
								menu: {
									id: v.$XX.ViewTitle,
									group: "navigation",
									when: g.$Kj.and(g.$Kj.equals("view", ne.ID), I.$4Pb),
									order: 10,
								},
							});
						}
						async run(le) {
							const oe = le.get(m.$EY),
								ae =
									oe.orientation === m.GroupOrientation.VERTICAL
										? m.GroupOrientation.HORIZONTAL
										: m.GroupOrientation.VERTICAL;
							oe.setGroupOrientation(ae);
						}
					},
				),
					v.$ZX.appendMenuItem(v.$XX.MenubarLayoutMenu, {
						group: "5_flip",
						command: {
							id: re,
							title: {
								...t.localize2(7013, "Flip Layout"),
								mnemonicTitle: t.localize(7010, null),
							},
						},
						order: 1,
					}),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.files.saveAll",
									title: S.$aVb,
									f1: !0,
									icon: F.$ak.saveAll,
									menu: {
										id: v.$XX.ViewTitle,
										group: "navigation",
										when: g.$Kj.equals("view", ne.ID),
										order: 20,
									},
								});
							}
							async run(le) {
								await le.get(q.$ek).executeCommand(S.$_Ub);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "openEditors.closeAll",
									title: n.$Wrc.LABEL,
									f1: !1,
									icon: F.$ak.closeAll,
									menu: {
										id: v.$XX.ViewTitle,
										group: "navigation",
										when: g.$Kj.equals("view", ne.ID),
										order: 30,
									},
								});
							}
							async run(le) {
								const oe = le.get(d.$Li),
									ae = new n.$Wrc();
								await oe.invokeFunction((pe) => ae.run(pe));
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "openEditors.newUntitledFile",
									title: t.localize2(7014, "New Untitled Text File"),
									f1: !1,
									icon: F.$ak.newFile,
									menu: {
										id: v.$XX.ViewTitle,
										group: "navigation",
										when: g.$Kj.equals("view", ne.ID),
										order: 5,
									},
								});
							}
							async run(le) {
								await le.get(q.$ek).executeCommand(S.$oVb);
							}
						},
					);
			},
		),
		define(
			de[864],
			he([
				1, 0, 4, 240, 220, 10, 1351, 4021, 1992, 21, 5, 53, 25, 32, 8, 35, 60,
				49, 3, 96, 239, 27, 30, 84, 102, 100, 179, 853, 571, 12, 14, 79, 31, 7,
				2440,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sAc = e.$rAc = e.$qAc = void 0);
				const A = (0, D.$$O)(
						"explorer-view-icon",
						L.$ak.files,
						(0, t.localize)(6684, null),
					),
					R = (0, D.$$O)(
						"open-editors-view-icon",
						L.$ak.book,
						(0, t.localize)(6685, null),
					);
				let O = class extends f.$1c {
					static {
						this.ID = "workbench.contrib.explorerViewletViews";
					}
					constructor(X, Y, ie, ne, ee) {
						super(),
							(this.a = X),
							(this.b = Y),
							ne
								.withProgress({ location: $.ProgressLocation.Explorer }, () =>
									X.getCompleteWorkspace(),
								)
								.finally(() => {
									this.c(),
										this.D(X.onDidChangeWorkbenchState(() => this.c())),
										this.D(X.onDidChangeWorkspaceFolders(() => this.c()));
								});
					}
					c() {
						(0, i.mark)("code/willRegisterExplorerViews");
						const X = J.getViews(e.$sAc),
							Y = [],
							ie = [],
							ne = this.f();
						X.some((Z) => Z.id === ne.id) || Y.push(ne);
						const ee = this.h(),
							_ = X.find((Z) => Z.id === ee.id),
							te = this.g(),
							Q = X.find((Z) => Z.id === te.id);
						this.a.getWorkbenchState() === h.WorkbenchState.EMPTY ||
						this.a.getWorkspace().folders.length === 0
							? (_ && ie.push(_), Q || Y.push(te))
							: (Q && ie.push(Q), _ || Y.push(ee)),
							ie.length && J.deregisterViews(ie, e.$sAc),
							Y.length && J.registerViews(Y, e.$sAc),
							(0, i.mark)("code/didRegisterExplorerViews");
					}
					f() {
						return {
							id: m.$pAc.ID,
							name: m.$pAc.NAME,
							ctorDescriptor: new v.$Ji(m.$pAc),
							containerIcon: R,
							order: 0,
							canToggleVisibility: !0,
							canMoveView: !0,
							collapsed: !1,
							hideByDefault: !0,
							focusCommand: {
								id: "workbench.files.action.focusOpenEditorsView",
								keybindings: {
									primary: (0, l.$os)(l.$ps, l.KeyCode.KeyE),
									mac: { primary: (0, l.$os)(l.$qs, l.KeyCode.KeyE) },
								},
							},
						};
					}
					g() {
						return {
							id: d.$oAc.ID,
							name: d.$oAc.NAME,
							containerIcon: A,
							ctorDescriptor: new v.$Ji(d.$oAc),
							order: 1,
							canToggleVisibility: !0,
							focusCommand: { id: "workbench.explorer.fileView.focus" },
						};
					}
					h() {
						return {
							id: w.$wUb,
							name: (0, t.localize2)(6695, "Folders"),
							containerIcon: A,
							ctorDescriptor: new v.$Ji(C.$HXb),
							order: 1,
							canMoveView: !0,
							canToggleVisibility: !1,
							focusCommand: { id: "workbench.explorer.fileView.focus" },
						};
					}
				};
				(e.$qAc = O),
					(e.$qAc = O =
						Ne(
							[j(0, h.$Vi), j(1, E.$gj), j(2, n.$6j), j(3, $.$8N), j(4, M.$ek)],
							O,
						));
				let B = class extends s.$ZSb {
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(
							w.$vUb,
							{ mergeViewWithContainerWhenSingleView: !0 },
							_,
							ee,
							X,
							Z,
							Y,
							se,
							Q,
							ne,
							ie,
							re,
						),
							(this.c = w.$xUb.bindTo(te)),
							this.D(this.ib.onDidChangeWorkspaceName((le) => this.mb()));
					}
					create(X) {
						super.create(X), X.classList.add("explorer-viewlet");
					}
					nb(X, Y) {
						return X.id === w.$wUb
							? this.bb.createInstance(C.$HXb, {
									...Y,
									delegate: {
										willOpenElement: (ie) => {
											if (!(0, N.$7gb)(ie)) return;
											const ne = this.getOpenEditorsView();
											if (ne) {
												let ee = 0;
												this.cb.getValue().workbench?.editor?.enablePreview &&
													(ee = 250),
													ne.setStructuralRefreshDelay(ee);
											}
										},
										didOpenElement: (ie) => {
											if (!(0, N.$7gb)(ie)) return;
											this.getOpenEditorsView()?.setStructuralRefreshDelay(0);
										},
									},
								})
							: super.nb(X, Y);
					}
					getExplorerView() {
						return this.getView(w.$wUb);
					}
					getOpenEditorsView() {
						return this.getView(m.$pAc.ID);
					}
					setVisible(X) {
						this.c.set(X), super.setVisible(X);
					}
					focus() {
						const X = this.getView(w.$wUb);
						X && this.panes.every((Y) => !Y.isExpanded()) && X.setExpanded(!0),
							X?.isExpanded() ? X.focus() : super.focus();
					}
				};
				(e.$rAc = B),
					(e.$rAc = B =
						Ne(
							[
								j(0, b.$mEb),
								j(1, c.$km),
								j(2, h.$Vi),
								j(3, r.$lq),
								j(4, E.$gj),
								j(5, u.$Li),
								j(6, n.$6j),
								j(7, g.$iP),
								j(8, o.$Xxb),
								j(9, a.$q2),
								j(10, p.$K1),
							],
							B,
						));
				const U = y.$Io.as(p.Extensions.ViewContainersRegistry);
				e.$sAc = U.registerViewContainer(
					{
						id: w.$vUb,
						title: (0, t.localize2)(6696, "Explorer"),
						ctorDescriptor: new v.$Ji(B),
						storageId: "workbench.explorer.views.state",
						icon: A,
						alwaysUseContainerInfo: !0,
						hideIfEmpty: !0,
						order: 0,
						openCommandActionDescriptor: {
							id: w.$vUb,
							title: (0, t.localize2)(6697, "Explorer"),
							mnemonicTitle: (0, t.localize)(6686, null),
							keybindings: {
								primary: l.KeyMod.CtrlCmd | l.KeyMod.Shift | l.KeyCode.KeyE,
							},
							order: 0,
						},
					},
					p.ViewContainerLocation.Sidebar,
					{ isDefault: !0 },
				);
				const z = (0, t.localize)(6687, null),
					F = (0, t.localize)(6688, null),
					x = (0, t.localize)(6689, null),
					H = `[${z}](command:${T.$Ktc.ID})`,
					q = `[${F}](command:${T.$Ktc.ID})`,
					V = `[${z}](command:${k.$m && !k.$r ? T.$Jtc.ID : T.$Htc.ID})`,
					G = `[${z}](command:${T.$Itc.ID})`,
					K = `[${x}](command:${P.$Yqc.ID})`,
					J = y.$Io.as(p.Extensions.ViewsRegistry);
				J.registerViewWelcomeContent(d.$oAc.ID, {
					content: (0, t.localize)(6690, null, H),
					when: n.$Kj.and(S.$wPb.isEqualTo("workspace"), S.$yPb),
					group: p.ViewContentGroups.Open,
					order: 1,
				}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6691, null, G, K),
						when: n.$Kj.and(S.$wPb.isEqualTo("workspace"), S.$yPb.toNegated()),
						group: p.ViewContentGroups.Open,
						order: 1,
					}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6692, null, V),
						when: n.$Kj.and(
							S.$wPb.notEqualsTo("workspace"),
							S.$CPb.notEqualsTo(""),
							I.$7Lb.toNegated(),
						),
						group: p.ViewContentGroups.Open,
						order: 1,
					}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6693, null, V, q),
						when: n.$Kj.and(
							n.$Kj.has("editorIsOpen"),
							n.$Kj.or(
								n.$Kj.and(
									S.$wPb.notEqualsTo("workspace"),
									S.$CPb.isEqualTo(""),
								),
								n.$Kj.and(S.$wPb.notEqualsTo("workspace"), I.$7Lb),
							),
						),
						group: p.ViewContentGroups.Open,
						order: 1,
					}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6694, null, V),
						when: n.$Kj.and(
							n.$Kj.has("editorIsOpen")?.negate(),
							n.$Kj.or(
								n.$Kj.and(
									S.$wPb.notEqualsTo("workspace"),
									S.$CPb.isEqualTo(""),
								),
								n.$Kj.and(S.$wPb.notEqualsTo("workspace"), I.$7Lb),
							),
						),
						group: p.ViewContentGroups.Open,
						order: 1,
					});
			},
		),
		define(
			de[4300],
			he([
				1, 0, 4, 44, 313, 253, 87, 5, 25, 220, 121, 163, 31, 8, 22, 43, 27, 12,
				42, 382, 449, 1014, 23, 40, 71, 18, 66, 73, 19, 3, 113, 65, 281, 85, 68,
				29, 50, 116, 136, 10, 142, 60, 89, 554, 57, 853, 1992, 93,
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
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XMc = e.$WMc = void 0),
					(t = mt(t));
				const W = (le, oe, ae) => {
					if (Array.isArray(oe)) {
						const pe = le.get(C.$asb),
							$e = le.get(L.$Ti);
						(oe = oe.map((ye) =>
							(0, E.$tY)(ye) && ye.workspaceUri.scheme === y.Schemas.untitled
								? {
										workspaceUri: (0, P.$nh)(
											$e.untitledWorkspacesHome,
											ye.workspaceUri.path,
											m.$_i,
										),
									}
								: ye,
						)),
							pe.openWindow(oe, ae);
					}
				};
				e.$WMc = W;
				const X = (le, oe) => {
					le.get(C.$asb).openWindow(oe);
				};
				(e.$XMc = X),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: r.$OUb,
						primary: p.KeyMod.CtrlCmd | p.KeyCode.Enter,
						mac: { primary: p.KeyMod.WinCtrl | p.KeyCode.Enter },
						id: q.$XUb,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = le.get(n.$ll),
								$e = le.get(b.$LWb),
								ye = (0, b.$NWb)(oe, le.get(J.$fMb), ae, le.get(I.$EY), $e);
							if (ye.length) {
								const ue = ye.filter((be) => be.scheme === y.Schemas.untitled),
									fe = ye.filter((be) => be.scheme !== y.Schemas.untitled),
									ge = (
										await Promise.all(
											fe.map(async (be) => {
												const Ce = $e.findClosest(be);
												return Ce || (await pe.stat(be));
											}),
										)
									)
										.filter((be) => !be.isDirectory)
										.map((be) => ({
											resource: be.resource,
											options: { pinned: !0 },
										}))
										.concat(
											...ue.map((be) => ({
												resource: be,
												options: { pinned: !0 },
											})),
										);
								await ae.openEditors(ge, S.$KY);
							}
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$zUb.toNegated()),
						primary: p.KeyCode.Enter,
						mac: { primary: p.KeyMod.CtrlCmd | p.KeyCode.DownArrow },
						id: "explorer.openAndPassFocus",
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								$e = le.get(b.$LWb).getContext(!0);
							$e.length &&
								(await ae.openEditors(
									$e.map((ye) => ({
										resource: ye.resource,
										options: { preserveFocus: !1, pinned: !0 },
									})),
								));
						},
					});
				const Y = "showModifications";
				let ie = [];
				g.$TX.registerCommandAndKeybindingRule({
					id: q.$3Ub,
					when: void 0,
					weight: g.KeybindingWeight.WorkbenchContrib,
					primary: (0, p.$os)(p.$ps, p.KeyCode.KeyD),
					mac: { primary: (0, p.$os)(p.$qs, p.KeyCode.KeyD) },
					handler: async (le, oe) => {
						const ae = le.get(d.$Li),
							pe = le.get(f.$MO),
							$e = le.get(S.$IY),
							ye = le.get(n.$ll),
							ue = le.get(J.$fMb);
						let fe = !1;
						if (ie.length === 0) {
							fe = !0;
							const ve = ae.createInstance(r.$TUb);
							ie.push(ve), ie.push(pe.registerTextModelContentProvider(Y, ve));
						}
						const me = (0, b.$MWb)(oe, $e, ue);
						if (me && ye.hasProvider(me)) {
							const ve = (0, P.$kh)(me),
								ge = t.localize(6827, null, ve, ve);
							try {
								await r.$TUb.open(me, Y, ge, $e, { pinned: !0 }),
									fe &&
										ie.push(
											$e.onDidVisibleEditorsChange(() => {
												$e.editors.some(
													(be) =>
														!!i.$A1.getCanonicalUri(be, {
															supportSideBySide: i.SideBySideEditor.SECONDARY,
															filterByScheme: Y,
														}),
												) || (ie = (0, k.$Vc)(ie));
											}),
										);
							} catch {
								ie = (0, k.$Vc)(ie);
							}
						}
					},
				});
				let ne, ee;
				h.$fk.registerCommand({
					id: q.$ZUb,
					handler: (le, oe) => {
						(ne = (0, b.$MWb)(oe, le.get(S.$IY), le.get(J.$fMb))),
							ee || (ee = q.$hVb.bindTo(le.get(c.$6j))),
							ee.set(!0);
					},
				}),
					h.$fk.registerCommand({
						id: q.$1Ub,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = (0, b.$NWb)(
									oe,
									le.get(J.$fMb),
									ae,
									le.get(I.$EY),
									le.get(b.$LWb),
								);
							return pe.length === 2
								? ae.openEditor({
										original: { resource: pe[0] },
										modified: { resource: pe[1] },
										options: { pinned: !0 },
									})
								: !0;
						},
					}),
					h.$fk.registerCommand({
						id: q.$2Ub,
						handler: (le, oe) => {
							const ae = le.get(S.$IY),
								pe = (0, b.$MWb)(oe, ae, le.get(J.$fMb));
							ne &&
								pe &&
								ae.openEditor({
									original: { resource: ne },
									modified: { resource: pe },
									options: { pinned: !0 },
								});
						},
					});
				async function _(le, oe, ae, pe, $e) {
					if (le.length) {
						const ye = o.$l
							? `\r
`
							: `
`;
						let ue;
						if (oe) {
							const me = $e.getValue("explorer.copyRelativePathSeparator");
							(me === "/" || me === "\\") && (ue = me);
						}
						const fe = le
							.map((me) =>
								pe.getUriLabel(me, {
									relative: oe,
									noPrefix: !0,
									separator: ue,
								}),
							)
							.join(ye);
						await ae.writeText(fe);
					}
				}
				const te = async (le, oe) => {
					const ae = (0, b.$NWb)(
						oe,
						le.get(J.$fMb),
						le.get(S.$IY),
						le.get(I.$EY),
						le.get(b.$LWb),
					);
					await _(ae, !1, le.get(u.$Vxb), le.get(T.$3N), le.get(z.$gj));
				};
				g.$TX.registerCommandAndKeybindingRule({
					weight: g.KeybindingWeight.WorkbenchContrib,
					when: v.EditorContextKeys.focus.toNegated(),
					primary: p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyC,
					win: { primary: p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC },
					id: q.$4Ub,
					handler: te,
				}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: v.EditorContextKeys.focus,
						primary: (0, p.$os)(
							p.$ps,
							p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyC,
						),
						mac: {
							primary: (0, p.$os)(
								p.$qs,
								p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyC,
							),
						},
						win: { primary: p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC },
						id: q.$4Ub,
						handler: te,
					});
				const Q = async (le, oe) => {
					const ae = (0, b.$NWb)(
						oe,
						le.get(J.$fMb),
						le.get(S.$IY),
						le.get(I.$EY),
						le.get(b.$LWb),
					);
					await _(ae, !0, le.get(u.$Vxb), le.get(T.$3N), le.get(z.$gj));
				};
				g.$TX.registerCommandAndKeybindingRule({
					weight: g.KeybindingWeight.WorkbenchContrib,
					when: v.EditorContextKeys.focus.toNegated(),
					primary:
						p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC,
					win: {
						primary: (0, p.$os)(
							p.$ps,
							p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyC,
						),
					},
					id: q.$5Ub,
					handler: Q,
				}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: v.EditorContextKeys.focus,
						primary: (0, p.$os)(
							p.$ps,
							p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC,
						),
						mac: {
							primary: (0, p.$os)(
								p.$qs,
								p.KeyMod.CtrlCmd |
									p.KeyMod.Shift |
									p.KeyMod.Alt |
									p.KeyCode.KeyC,
							),
						},
						win: {
							primary: (0, p.$os)(
								p.$ps,
								p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyC,
							),
						},
						id: q.$5Ub,
						handler: Q,
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: (0, p.$os)(p.$ps, p.KeyCode.KeyP),
						mac: { primary: (0, p.$os)(p.$qs, p.KeyCode.KeyP) },
						id: "workbench.action.files.copyPathOfActiveFile",
						handler: async (le) => {
							const ae = le.get(S.$IY).activeEditor,
								pe = i.$A1.getOriginalUri(ae, {
									supportSideBySide: i.SideBySideEditor.PRIMARY,
								});
							await _(
								pe ? [pe] : [],
								!1,
								le.get(u.$Vxb),
								le.get(T.$3N),
								le.get(z.$gj),
							);
						},
					}),
					h.$fk.registerCommand({
						id: q.$VUb,
						handler: async (le, oe) => {
							const ae = le.get(H.$HMb),
								pe = le.get(m.$Vi),
								$e = le.get(b.$LWb),
								ye = le.get(S.$IY),
								ue = le.get(J.$fMb),
								fe = (0, b.$MWb)(oe, ye, ue);
							if (fe && pe.isInsideWorkspace(fe)) {
								const me = await ae.openView(r.$wUb, !1);
								if (me) {
									const ve = me.autoReveal;
									(me.autoReveal = !1),
										me.setExpanded(!0),
										await $e.select(fe, "force"),
										me.focus(),
										(me.autoReveal = ve);
								}
							} else {
								const me = await ae.openView(K.$pAc.ID, !1);
								me && (me.setExpanded(!0), me.focus());
							}
						},
					}),
					h.$fk.registerCommand({
						id: q.$YUb,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = le.get(J.$fMb),
								$e = (0, b.$MWb)(oe, ae, pe);
							if ($e)
								return ae.openEditor({
									resource: $e,
									options: {
										override: B.EditorResolution.PICK,
										source: B.EditorOpenSource.USER,
									},
								});
						},
					});
				async function Z(le, oe) {
					const ae = le.get(I.$EY),
						pe = le.get(D.$dtb),
						$e = le.get(N.$kZ);
					let ye = (0, b.$OWb)(le);
					if (!ye) {
						const fe = ae.activeGroup;
						fe.activeEditor &&
							((ye = []),
							fe.activeEditor instanceof w.$iY &&
							!oe?.saveAs &&
							!(
								fe.activeEditor.primary.hasCapability(
									i.EditorInputCapabilities.Untitled,
								) ||
								fe.activeEditor.secondary.hasCapability(
									i.EditorInputCapabilities.Untitled,
								)
							) &&
							fe.activeEditor.secondary.isModified()
								? (ye.push({ groupId: fe.id, editor: fe.activeEditor.primary }),
									ye.push({
										groupId: fe.id,
										editor: fe.activeEditor.secondary,
									}))
								: ye.push({ groupId: fe.id, editor: fe.activeEditor }));
					}
					if (!ye || ye.length === 0) return;
					await re(le, ye, oe);
					const ue = pe.getFocusedCodeEditor();
					if (ue instanceof M.$wDb && !ue.isSimpleWidget) {
						const fe = ue.getModel()?.uri;
						fe &&
							!ye.some(({ editor: me }) =>
								(0, P.$gh)(
									i.$A1.getCanonicalUri(me, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									fe,
								),
							) &&
							($e.files.get(fe)?.isReadonly() || (await $e.save(fe, oe)));
					}
				}
				function se(le, oe, ae) {
					const pe = [];
					for (const $e of oe)
						for (const ye of $e.getEditors(i.EditorsOrder.MOST_RECENTLY_ACTIVE))
							ye.isDirty() && pe.push({ groupId: $e.id, editor: ye });
					return re(le, pe, ae);
				}
				async function re(le, oe, ae) {
					const pe = le.get(S.$IY),
						$e = le.get($.$4N),
						ye = le.get(d.$Li);
					try {
						await pe.save(oe, ae);
					} catch (ue) {
						if (!(0, R.$8)(ue)) {
							const fe = [
									(0, O.$wj)({
										id: "workbench.action.files.saveEditors",
										label: t.localize(6828, null),
										run: () => ye.invokeFunction((ve) => re(ve, oe, ae)),
									}),
								],
								me = oe.filter(
									({ editor: ve }) =>
										!ve.hasCapability(i.EditorInputCapabilities.Untitled),
								);
							me.length > 0 &&
								fe.push(
									(0, O.$wj)({
										id: "workbench.action.files.revertEditors",
										label:
											me.length > 1
												? t.localize(6829, null)
												: t.localize(6830, null),
										run: () => pe.revert(me),
									}),
								),
								$e.notify({
									id: oe
										.map(({ editor: ve }) =>
											(0, U.$Aj)(ve.resource?.toString()),
										)
										.join(),
									severity: $.Severity.Error,
									message: t.localize(
										6831,
										null,
										oe.map(({ editor: ve }) => ve.getName()).join(", "),
										(0, a.$xj)(ue, !1),
									),
									actions: { primary: fe },
								});
						}
					}
				}
				g.$TX.registerCommandAndKeybindingRule({
					when: void 0,
					weight: g.KeybindingWeight.WorkbenchContrib,
					primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyS,
					id: q.$8Ub,
					handler: (le) => Z(le, { reason: i.SaveReason.EXPLICIT, force: !0 }),
				}),
					g.$TX.registerCommandAndKeybindingRule({
						when: void 0,
						weight: g.KeybindingWeight.WorkbenchContrib,
						primary: (0, p.$os)(p.$ps, p.KeyCode.KeyS),
						mac: { primary: (0, p.$os)(p.$qs, p.KeyCode.KeyS) },
						win: {
							primary: (0, p.$os)(
								p.$ps,
								p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyS,
							),
						},
						id: q.$0Ub,
						handler: (le) =>
							Z(le, {
								reason: i.SaveReason.EXPLICIT,
								force: !0,
								skipSaveParticipants: !0,
							}),
					}),
					g.$TX.registerCommandAndKeybindingRule({
						id: q.$6Ub,
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyS,
						handler: (le) =>
							Z(le, { reason: i.SaveReason.EXPLICIT, saveAs: !0 }),
					}),
					g.$TX.registerCommandAndKeybindingRule({
						when: void 0,
						weight: g.KeybindingWeight.WorkbenchContrib,
						primary: void 0,
						mac: { primary: p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyS },
						win: { primary: (0, p.$os)(p.$ps, p.KeyCode.KeyS) },
						id: q.$_Ub,
						handler: (le) =>
							se(
								le,
								le.get(I.$EY).getGroups(I.GroupsOrder.MOST_RECENTLY_ACTIVE),
								{ reason: i.SaveReason.EXPLICIT },
							),
					}),
					h.$fk.registerCommand({
						id: q.$bVb,
						handler: (le, oe, ae) => {
							const pe = le.get(I.$EY),
								$e = (0, l.$TVb)([ae], le.get(S.$IY), pe, le.get(J.$fMb));
							let ye;
							return (
								$e.groupedEditors.length
									? (ye = $e.groupedEditors.map(({ group: ue }) => ue))
									: (ye = pe.getGroups(I.GroupsOrder.MOST_RECENTLY_ACTIVE)),
								se(le, ye, { reason: i.SaveReason.EXPLICIT })
							);
						},
					}),
					h.$fk.registerCommand({
						id: q.$cVb,
						handler: async (le) =>
							(
								await le
									.get(S.$IY)
									.saveAll({
										includeUntitled: !1,
										reason: i.SaveReason.EXPLICIT,
									})
							).success,
					}),
					h.$fk.registerCommand({
						id: q.$WUb,
						handler: async (le) => {
							const oe = le.get(I.$EY),
								ae = le.get(S.$IY);
							let pe = (0, b.$OWb)(le);
							if (!pe) {
								const $e = oe.activeGroup;
								$e.activeEditor &&
									(pe = [{ groupId: $e.id, editor: $e.activeEditor }]);
							}
							if (!(!pe || pe.length === 0))
								try {
									await ae.revert(
										pe.filter(
											({ editor: $e }) =>
												!$e.hasCapability(i.EditorInputCapabilities.Untitled),
										),
										{ force: !0 },
									);
								} catch ($e) {
									le.get($.$4N).error(
										t.localize(
											6832,
											null,
											pe.map(({ editor: ue }) => ue.getName()).join(", "),
											(0, a.$xj)($e, !1),
										),
									);
								}
						},
					}),
					h.$fk.registerCommand({
						id: q.$iVb,
						handler: (le, oe) => {
							const ae = le.get(m.$Vi),
								pe = le.get(A.$Vl),
								$e = ae.getWorkspace(),
								ye = (0, b.$NWb)(
									oe,
									le.get(J.$fMb),
									le.get(S.$IY),
									le.get(I.$EY),
									le.get(b.$LWb),
								).filter((fe) =>
									$e.folders.some((me) => pe.extUri.isEqual(me.uri, fe)),
								);
							return ye.length === 0
								? le.get(h.$ek).executeCommand(G.$Ltc.ID)
								: le.get(s.$mRb).removeFolders(ye);
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$KUb.negate()),
						primary: p.KeyCode.LeftArrow,
						id: q.$kVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer()
								.getExplorerView()
								.previousCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$LUb.negate()),
						primary: p.KeyCode.RightArrow,
						id: q.$lVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer().getExplorerView().nextCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$KUb.negate()),
						primary: p.KeyCode.Home,
						id: q.$mVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer().getExplorerView().firstCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$LUb.negate()),
						primary: p.KeyCode.End,
						id: q.$nVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer().getExplorerView().lastCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: null,
						primary: o.$r
							? o.$l
								? (0, p.$os)(p.$ps, p.KeyCode.KeyN)
								: p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyN
							: p.KeyMod.CtrlCmd | p.KeyCode.KeyN,
						secondary: o.$r ? [p.KeyMod.CtrlCmd | p.KeyCode.KeyN] : void 0,
						id: q.$oVb,
						metadata: {
							description: q.$pVb,
							args: [
								{
									isOptional: !0,
									name: "New Untitled Text File arguments",
									description: "The editor view type or language ID if known",
									schema: {
										type: "object",
										properties: {
											viewType: { type: "string" },
											languageId: { type: "string" },
										},
									},
								},
							],
						},
						handler: async (le, oe) => {
							await le
								.get(S.$IY)
								.openEditor({
									resource: void 0,
									options: { override: oe?.viewType, pinned: !0 },
									languageId: oe?.languageId,
								});
						},
					}),
					h.$fk.registerCommand({
						id: q.$qVb,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = le.get(V.$IO),
								$e = le.get(n.$ll),
								ye = t.localize(6833, null),
								ue = (0, P.$nh)(
									await pe.defaultFilePath(),
									oe?.fileName ?? "Untitled.txt",
								),
								fe = await pe.showSaveDialog({
									saveLabel: ye,
									title: ye,
									defaultUri: ue,
								});
							fe &&
								(await $e.createFile(fe, void 0, { overwrite: !0 }),
								await ae.openEditor({
									resource: fe,
									options: { override: oe?.viewType, pinned: !0 },
									languageId: oe?.languageId,
								}));
						},
					});
			},
		),
		define(
			de[1993],
			he([
				1, 0, 4, 1057, 1882, 11, 27, 4300, 554, 31, 8, 43, 220, 633, 247, 170,
				93, 23, 100, 179, 382, 14, 99, 169, 793,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YMc = A),
					(e.$ZMc = O),
					(t = mt(t)),
					(0, E.$4X)(i.$0Wb),
					(0, E.$4X)(i.$bXb),
					(0, E.$4X)(i.$cXb),
					(0, E.$4X)(i.$gXb),
					(0, E.$4X)(i.$fXb),
					(0, E.$4X)(i.$$Wb),
					(0, E.$4X)(i.$dXb),
					(0, E.$4X)(i.$oXb),
					(0, E.$4X)(i.$pXb),
					(0, E.$4X)(i.$qXb),
					(0, E.$4X)(i.$rXb),
					r.$fk.registerCommand("_files.windowOpen", d.$WMc),
					r.$fk.registerCommand("_files.newWindow", d.$XMc);
				const S = 10,
					I = "renameFile";
				a.$TX.registerCommandAndKeybindingRule({
					id: I,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$DUb.toNegated(), h.$BUb),
					primary: C.KeyCode.F2,
					mac: { primary: C.KeyCode.Enter },
					handler: i.$hXb,
				});
				const T = "moveFileToTrash";
				a.$TX.registerCommandAndKeybindingRule({
					id: T,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$BUb, h.$FUb),
					primary: C.KeyCode.Delete,
					mac: {
						primary: C.KeyMod.CtrlCmd | C.KeyCode.Backspace,
						secondary: [C.KeyCode.Delete],
					},
					handler: i.$iXb,
				});
				const P = "deleteFile";
				a.$TX.registerCommandAndKeybindingRule({
					id: P,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$BUb),
					primary: C.KeyMod.Shift | C.KeyCode.Delete,
					mac: {
						primary: C.KeyMod.CtrlCmd | C.KeyMod.Alt | C.KeyCode.Backspace,
					},
					handler: i.$jXb,
				}),
					a.$TX.registerCommandAndKeybindingRule({
						id: P,
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$BUb, h.$FUb.toNegated()),
						primary: C.KeyCode.Delete,
						mac: { primary: C.KeyMod.CtrlCmd | C.KeyCode.Backspace },
						handler: i.$jXb,
					});
				const k = "filesExplorer.cut";
				a.$TX.registerCommandAndKeybindingRule({
					id: k,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$DUb.toNegated(), h.$BUb),
					primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyX,
					handler: i.$lXb,
				});
				const L = "filesExplorer.copy";
				a.$TX.registerCommandAndKeybindingRule({
					id: L,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$DUb.toNegated()),
					primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyC,
					handler: i.$kXb,
				});
				const D = "filesExplorer.paste";
				r.$fk.registerCommand(D, i.$mXb),
					a.$TX.registerKeybindingRule({
						id: `^${D}`,
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$BUb),
						primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyV,
					}),
					a.$TX.registerCommandAndKeybindingRule({
						id: "filesExplorer.cancelCut",
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$EUb),
						primary: C.KeyCode.Escape,
						handler: async (K) => {
							await K.get(s.$LWb).setToCopy([], !0);
						},
					}),
					a.$TX.registerCommandAndKeybindingRule({
						id: "filesExplorer.openFilePreserveFocus",
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$zUb.toNegated()),
						primary: C.KeyCode.Space,
						handler: i.$nXb,
					});
				const M = { id: m.$4Ub, title: t.localize(6698, null) },
					N = { id: m.$5Ub, title: t.localize(6699, null) };
				A(m.$4Ub, M.title, f.$BQb.IsFileSystemResource, "1_cutcopypaste", !0),
					A(m.$5Ub, N.title, f.$BQb.IsFileSystemResource, "1_cutcopypaste", !0),
					A(
						m.$VUb,
						t.localize(6700, null),
						f.$BQb.IsFileSystemResource,
						"2_files",
						!1,
						1,
					);
				function A(K, J, W, X, Y, ie) {
					const ne = Y !== !0 ? f.$6Pb.negate() : void 0;
					E.$ZX.appendMenuItem(E.$XX.EditorTitleContext, {
						command: { id: K, title: J, precondition: ne },
						when: W,
						group: X,
						order: ie,
					});
				}
				R(
					"workbench.files.action.acceptLocalChanges",
					t.localize(6701, null),
					l.$ak.check,
					-10,
					w.$UMc,
				),
					R(
						"workbench.files.action.revertLocalChanges",
						t.localize(6702, null),
						l.$ak.discard,
						-9,
						w.$VMc,
					);
				function R(K, J, W, X, Y) {
					r.$fk.registerCommand(K, Y),
						E.$ZX.appendMenuItem(E.$XX.EditorTitle, {
							command: { id: K, title: J, icon: W },
							when: u.$Kj.equals(w.$RMc, !0),
							group: "navigation",
							order: X,
						});
				}
				function O({ id: K, title: J, category: W, metadata: X }, Y) {
					E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
						command: { id: K, title: J, category: W, metadata: X },
						when: Y,
					});
				}
				O({
					id: m.$4Ub,
					title: t.localize2(6729, "Copy Path of Active File"),
					category: y.$ck.File,
				}),
					O({
						id: m.$5Ub,
						title: t.localize2(6730, "Copy Relative Path of Active File"),
						category: y.$ck.File,
					}),
					O({ id: m.$8Ub, title: m.$9Ub, category: y.$ck.File }),
					O({ id: m.$0Ub, title: m.$$Ub, category: y.$ck.File }),
					O({
						id: m.$bVb,
						title: t.localize2(6731, "Save All in Group"),
						category: y.$ck.File,
					}),
					O({
						id: m.$cVb,
						title: t.localize2(6732, "Save All Files"),
						category: y.$ck.File,
					}),
					O({
						id: m.$WUb,
						title: t.localize2(6733, "Revert File"),
						category: y.$ck.File,
					}),
					O({
						id: m.$3Ub,
						title: t.localize2(6734, "Compare Active File with Saved"),
						category: y.$ck.File,
						metadata: {
							description: t.localize2(
								6735,
								"Opens a new diff editor to compare the active file with the version on disk.",
							),
						},
					}),
					O({ id: m.$6Ub, title: m.$7Ub, category: y.$ck.File }),
					O(
						{ id: i.$UWb, title: i.$VWb, category: y.$ck.File },
						f.$xPb.notEqualsTo("0"),
					),
					O(
						{
							id: i.$WWb,
							title: i.$XWb,
							category: y.$ck.File,
							metadata: {
								description: t.localize2(
									6736,
									"Create a new folder or directory",
								),
							},
						},
						f.$xPb.notEqualsTo("0"),
					),
					O({ id: m.$oVb, title: m.$pVb, category: y.$ck.File });
				const B = u.$Kj.or(
						f.$BQb.IsFileSystemResource,
						f.$BQb.Scheme.isEqualTo(o.Schemas.untitled),
					),
					U = { id: m.$XUb, title: t.localize(6703, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "navigation",
					order: 10,
					command: U,
					when: B,
				}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "1_open",
						order: 10,
						command: { id: n.$_Vb, title: t.localize(6704, null) },
						when: u.$Kj.and(f.$UPb, m.$dVb.toNegated()),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "1_cutcopypaste",
						order: 10,
						command: M,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "1_cutcopypaste",
						order: 20,
						command: N,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "2_save",
						order: 10,
						command: { id: m.$8Ub, title: m.$9Ub, precondition: m.$eVb },
						when: u.$Kj.or(
							f.$BQb.Scheme.isEqualTo(o.Schemas.untitled),
							u.$Kj.and(
								m.$dVb.toNegated(),
								m.$fVb.toNegated(),
								g.$$Y.toNegated(),
							),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "2_save",
						order: 20,
						command: {
							id: m.$WUb,
							title: t.localize(6705, null),
							precondition: m.$eVb,
						},
						when: u.$Kj.and(
							m.$dVb.toNegated(),
							m.$fVb.toNegated(),
							f.$BQb.Scheme.notEqualsTo(o.Schemas.untitled),
							g.$$Y.toNegated(),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "2_save",
						order: 30,
						command: {
							id: m.$bVb,
							title: t.localize(6706, null),
							precondition: f.$BPb,
						},
						when: m.$dVb,
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "3_compare",
						order: 10,
						command: {
							id: m.$3Ub,
							title: t.localize(6707, null),
							precondition: m.$eVb,
						},
						when: u.$Kj.and(
							f.$BQb.IsFileSystemResource,
							g.$$Y.toNegated(),
							p.$pMb.toNegated(),
						),
					});
				const z = { id: m.$2Ub, title: t.localize(6708, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "3_compare",
					order: 20,
					command: z,
					when: u.$Kj.and(f.$BQb.HasResource, m.$hVb, B, p.$pMb.toNegated()),
				});
				const F = { id: m.$ZUb, title: t.localize(6709, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "3_compare",
					order: 30,
					command: F,
					when: u.$Kj.and(f.$BQb.HasResource, B, p.$pMb.toNegated()),
				});
				const x = { id: m.$1Ub, title: t.localize(6710, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "3_compare",
					order: 30,
					command: x,
					when: u.$Kj.and(f.$BQb.HasResource, p.$pMb, m.$gVb),
				}),
					E.$ZX.appendMenuItem(E.$XX.EditorTitleContext, {
						group: "1_compare",
						order: 30,
						command: x,
						when: u.$Kj.and(f.$BQb.HasResource, f.$7Pb, f.$8Pb),
					});
				const H = {
					id: $.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID,
					title: "Add Files to Cursor Chat",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 20,
					command: H,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				});
				const q = {
					id: $.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID,
					title: "Add Files to New Cursor Chat",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 25,
					command: q,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				});
				const V = {
					id: $.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID,
					title: "Add Files to Cursor Composer",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 20,
					command: V,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				});
				const G = {
					id: $.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID,
					title: "Add Files to New Cursor Composer",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 25,
					command: G,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 10,
						command: { id: n.$YVb, title: t.localize(6711, null) },
						when: m.$dVb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 20,
						command: { id: n.$2Vb, title: t.localize(6712, null) },
						when: m.$dVb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 30,
						command: { id: n.$UVb, title: t.localize(6713, null) },
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 40,
						command: { id: n.$VVb, title: t.localize(6714, null) },
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 4,
						command: { id: i.$UWb, title: i.$VWb, precondition: h.$BUb },
						when: h.$zUb,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 6,
						command: { id: i.$WWb, title: i.$XWb, precondition: h.$BUb },
						when: h.$zUb,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 10,
						command: U,
						when: u.$Kj.and(h.$zUb.toNegated(), f.$BQb.HasResource),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 20,
						command: { id: m.$YUb, title: t.localize(6715, null) },
						when: u.$Kj.and(h.$zUb.toNegated(), h.$CUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "3_compare",
						order: 20,
						command: z,
						when: u.$Kj.and(
							h.$zUb.toNegated(),
							f.$BQb.HasResource,
							m.$hVb,
							p.$pMb.toNegated(),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "3_compare",
						order: 30,
						command: F,
						when: u.$Kj.and(
							h.$zUb.toNegated(),
							f.$BQb.HasResource,
							p.$pMb.toNegated(),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "3_compare",
						order: 30,
						command: x,
						when: u.$Kj.and(h.$zUb.toNegated(), f.$BQb.HasResource, p.$pMb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5_cutcopypaste",
						order: 8,
						command: { id: k, title: t.localize(6716, null) },
						when: u.$Kj.and(h.$DUb.toNegated(), h.$BUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5_cutcopypaste",
						order: 10,
						command: { id: L, title: i.$1Wb },
						when: h.$DUb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5_cutcopypaste",
						order: 20,
						command: {
							id: D,
							title: i.$2Wb,
							precondition: u.$Kj.and(h.$BUb, i.$3Wb),
						},
						when: h.$zUb,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5b_importexport",
						order: 10,
						command: { id: i.$4Wb, title: i.$5Wb },
						when: u.$Kj.or(
							u.$Kj.and(
								b.$7Lb.toNegated(),
								f.$BQb.Scheme.notEqualsTo(o.Schemas.file),
							),
							u.$Kj.and(b.$7Lb, h.$zUb.toNegated(), h.$DUb.toNegated()),
							u.$Kj.and(b.$7Lb, f.$HPb),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5b_importexport",
						order: 20,
						command: { id: i.$6Wb, title: i.$7Wb },
						when: u.$Kj.and(b.$7Lb, h.$zUb, h.$BUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "6_copypath",
						order: 10,
						command: M,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "6_copypath",
						order: 20,
						command: N,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "2_workspace",
						order: 10,
						command: { id: c.$nRb, title: c.$oRb },
						when: u.$Kj.and(
							h.$DUb,
							u.$Kj.or(f.$zPb, f.$wPb.isEqualTo("workspace")),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "2_workspace",
						order: 30,
						command: { id: m.$iVb, title: m.$jVb },
						when: u.$Kj.and(
							h.$DUb,
							h.$zUb,
							u.$Kj.and(
								f.$xPb.notEqualsTo("0"),
								u.$Kj.or(f.$zPb, f.$wPb.isEqualTo("workspace")),
							),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "7_modification",
						order: 10,
						command: { id: I, title: i.$YWb, precondition: h.$BUb },
						when: h.$DUb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "7_modification",
						order: 20,
						command: { id: T, title: i.$ZWb, precondition: h.$BUb },
						alt: { id: P, title: t.localize(6717, null), precondition: h.$BUb },
						when: u.$Kj.and(h.$DUb.toNegated(), h.$FUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "7_modification",
						order: 20,
						command: {
							id: P,
							title: t.localize(6718, null),
							precondition: h.$BUb,
						},
						when: u.$Kj.and(h.$DUb.toNegated(), h.$FUb.toNegated()),
					});
				for (const K of [
					E.$XX.EmptyEditorGroupContext,
					E.$XX.EditorTabsBarContext,
				])
					E.$ZX.appendMenuItem(K, {
						command: { id: m.$oVb, title: t.localize(6719, null) },
						group: "1_file",
						order: 10,
					}),
						E.$ZX.appendMenuItem(K, {
							command: {
								id: "workbench.action.quickOpen",
								title: t.localize(6720, null),
							},
							group: "1_file",
							order: 20,
						});
				E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
					group: "1_new",
					command: { id: m.$oVb, title: t.localize(6721, null) },
					order: 1,
				}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "4_save",
						command: {
							id: m.$8Ub,
							title: t.localize(6722, null),
							precondition: u.$Kj.or(f.$TPb, u.$Kj.and(h.$yUb, f.$hQb)),
						},
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "4_save",
						command: {
							id: m.$6Ub,
							title: t.localize(6723, null),
							precondition: u.$Kj.or(f.$TPb, u.$Kj.and(h.$yUb, f.$hQb)),
						},
						order: 2,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "4_save",
						command: {
							id: m.$_Ub,
							title: t.localize(6724, null),
							precondition: f.$BPb,
						},
						order: 3,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "5_autosave",
						command: {
							id: i.$$Wb.ID,
							title: t.localize(6725, null),
							toggled: u.$Kj.notEquals("config.files.autoSave", "off"),
						},
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "6_close",
						command: {
							id: m.$WUb,
							title: t.localize(6726, null),
							precondition: u.$Kj.or(
								u.$Kj.and(f.$RPb),
								u.$Kj.and(
									f.$BQb.Scheme.notEqualsTo(o.Schemas.untitled),
									h.$yUb,
									f.$hQb,
								),
							),
						},
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "6_close",
						command: {
							id: n.$YVb,
							title: t.localize(6727, null),
							precondition: u.$Kj.or(f.$TPb, u.$Kj.and(h.$yUb, f.$hQb)),
						},
						order: 2,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarGoMenu, {
						group: "3_global_nav",
						command: {
							id: "workbench.action.quickOpen",
							title: t.localize(6728, null),
						},
						order: 1,
					});
			},
		),
		define(
			de[4301],
			he([
				1, 0, 4, 54, 30, 81, 55, 44, 22, 220, 3855, 1882, 844, 3864, 102, 12,
				864, 192, 73, 20, 3687, 842, 23, 3388, 602, 3866, 46, 155, 382, 3885,
				172, 10, 3865,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				let N = class {
					static {
						this.ID = "workbench.contrib.fileUriLabel";
					}
					constructor(B) {
						B.registerFormatter({
							scheme: y.Schemas.file,
							formatting: {
								label: "${authority}${path}",
								separator: i.sep,
								tildify: !g.$l,
								normalizeDriveLetter: g.$l,
								authorityPrefix: i.sep + i.sep,
								workspaceSuffix: "",
							},
						});
					}
				};
				(N = Ne([j(0, f.$3N)], N)),
					(0, b.$lK)(P.$LWb, s.$4Mc, b.InstantiationType.Delayed),
					w.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							o.$vVb.create(M.$oec, M.$oec.ID, t.localize(6873, null)),
							[new n.$Ji(h.$nec)],
						),
					w.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							o.$vVb.create(c.$2Mc, c.$2Mc.ID, t.localize(6874, null)),
							[new n.$Ji(h.$nec)],
						),
					w.$Io
						.as(d.$a1.EditorFactory)
						.registerFileEditorFactory({
							typeId: r.$QUb,
							createFileEditor: (O, B, U, z, F, x, H, q) =>
								q.createInstance(h.$nec, O, B, U, z, F, x, H),
							isFileEditor: (O) => O instanceof h.$nec,
						}),
					w.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(r.$QUb, k.$7Mc),
					(0, C.$s6)(k.$8Mc.ID, k.$8Mc, C.WorkbenchPhase.BlockRestore),
					(0, C.$s6)(p.$qAc.ID, p.$qAc, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)(u.$1Mc.ID, u.$1Mc, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)(a.$TMc.ID, a.$TMc, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)(N.ID, N, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)($.$5Mc.ID, $.$5Mc, C.WorkbenchPhase.AfterRestored),
					(0, C.$s6)(S.$6Mc.ID, S.$6Mc, C.WorkbenchPhase.BlockStartup);
				const A = w.$Io.as(E.$No.Configuration),
					R = g.$p
						? {
								type: "string",
								scope: E.ConfigurationScope.APPLICATION,
								enum: [
									m.$Kl.OFF,
									m.$Kl.ON_EXIT,
									m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								],
								default: m.$Kl.ON_EXIT,
								markdownEnumDescriptions: [
									t.localize(6875, null),
									t.localize(6876, null),
									t.localize(6877, null),
								],
								markdownDescription: t.localize(
									6878,
									null,
									m.$Kl.ON_EXIT,
									m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								),
							}
						: {
								type: "string",
								scope: E.ConfigurationScope.APPLICATION,
								enum: [m.$Kl.OFF, m.$Kl.ON_EXIT_AND_WINDOW_CLOSE],
								default: m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								markdownEnumDescriptions: [
									t.localize(6879, null),
									t.localize(6880, null),
								],
								markdownDescription: t.localize(
									6881,
									null,
									m.$Kl.ON_EXIT,
									m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								),
							};
				A.registerConfiguration({
					id: "files",
					order: 9,
					title: t.localize(6882, null),
					type: "object",
					properties: {
						[m.$Ml]: {
							type: "object",
							markdownDescription: t.localize(6883, null),
							default: {
								"**/.git": !0,
								"**/.svn": !0,
								"**/.hg": !0,
								"**/CVS": !0,
								"**/.DS_Store": !0,
								"**/Thumbs.db": !0,
								...(g.$r ? { "**/*.crswap": !0 } : void 0),
							},
							scope: E.ConfigurationScope.RESOURCE,
							additionalProperties: {
								anyOf: [
									{
										type: "boolean",
										enum: [!0, !1],
										enumDescriptions: [
											t.localize(6884, null),
											t.localize(6885, null),
										],
										description: t.localize(6886, null),
									},
									{
										type: "object",
										properties: {
											when: {
												type: "string",
												pattern: "\\w*\\$\\(basename\\)\\w*",
												default: "$(basename).ext",
												markdownDescription: t.localize(6887, null),
											},
										},
									},
								],
							},
						},
						[m.$Ll]: {
							type: "object",
							markdownDescription: t.localize(6888, null),
							additionalProperties: { type: "string" },
						},
						"files.encoding": {
							type: "string",
							enum: Object.keys(l.$4Y),
							default: "utf8",
							description: t.localize(6889, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							enumDescriptions: Object.keys(l.$4Y).map(
								(O) => l.$4Y[O].labelLong,
							),
							enumItemLabels: Object.keys(l.$4Y).map((O) => l.$4Y[O].labelLong),
						},
						"files.autoGuessEncoding": {
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(6890, null, "`#files.encoding#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.candidateGuessEncodings": {
							type: "array",
							items: {
								type: "string",
								enum: Object.keys(l.$5Y),
								enumDescriptions: Object.keys(l.$5Y).map(
									(O) => l.$5Y[O].labelLong,
								),
							},
							default: [],
							markdownDescription: t.localize(6891, null, "`#files.encoding#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.eol": {
							type: "string",
							enum: [
								`
`,
								`\r
`,
								"auto",
							],
							enumDescriptions: [
								t.localize(6892, null),
								t.localize(6893, null),
								t.localize(6894, null),
							],
							default: "auto",
							description: t.localize(6895, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.enableTrash": {
							type: "boolean",
							default: !0,
							description: t.localize(6896, null),
						},
						"files.trimTrailingWhitespace": {
							type: "boolean",
							default: !1,
							description: t.localize(6897, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.trimTrailingWhitespaceInRegexAndStrings": {
							type: "boolean",
							default: !0,
							description: t.localize(6898, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.insertFinalNewline": {
							type: "boolean",
							default: !1,
							description: t.localize(6899, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.trimFinalNewlines": {
							type: "boolean",
							default: !1,
							description: t.localize(6900, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSave": {
							type: "string",
							enum: [
								m.$Jl.OFF,
								m.$Jl.AFTER_DELAY,
								m.$Jl.ON_FOCUS_CHANGE,
								m.$Jl.ON_WINDOW_CHANGE,
							],
							markdownEnumDescriptions: [
								t.localize(6901, null),
								t.localize(6902, null),
								t.localize(6903, null),
								t.localize(6904, null),
							],
							default: g.$r ? m.$Jl.AFTER_DELAY : m.$Jl.OFF,
							markdownDescription: t.localize(
								6905,
								null,
								m.$Jl.OFF,
								m.$Jl.AFTER_DELAY,
								m.$Jl.ON_FOCUS_CHANGE,
								m.$Jl.ON_WINDOW_CHANGE,
								m.$Jl.AFTER_DELAY,
							),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSaveDelay": {
							type: "number",
							default: 1e3,
							minimum: 0,
							markdownDescription: t.localize(6906, null, m.$Jl.AFTER_DELAY),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSaveWorkspaceFilesOnly": {
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(6907, null, "`#files.autoSave#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSaveWhenNoErrors": {
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(6908, null, "`#files.autoSave#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.watcherExclude": {
							type: "object",
							patternProperties: { ".*": { type: "boolean" } },
							default: {
								"**/.git/objects/**": !0,
								"**/.git/subtree-cache/**": !0,
								"**/.hg/store/**": !0,
							},
							markdownDescription: t.localize(6909, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						"files.watcherInclude": {
							type: "array",
							items: { type: "string" },
							default: [],
							description: t.localize(6910, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						"files.hotExit": R,
						"files.defaultLanguage": {
							type: "string",
							markdownDescription: t.localize(6911, null),
						},
						[m.$Nl]: {
							type: "object",
							patternProperties: { ".*": { type: "boolean" } },
							default: {},
							markdownDescription: t.localize(6912, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						[m.$Ol]: {
							type: "object",
							patternProperties: { ".*": { type: "boolean" } },
							default: {},
							markdownDescription: t.localize(6913, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						[m.$Pl]: {
							type: "boolean",
							markdownDescription: t.localize(6914, null),
							default: !1,
						},
						"files.restoreUndoStack": {
							type: "boolean",
							description: t.localize(6915, null),
							default: !0,
						},
						"files.saveConflictResolution": {
							type: "string",
							enum: ["askUser", "overwriteFileOnDisk"],
							enumDescriptions: [
								t.localize(6916, null),
								t.localize(6917, null),
							],
							description: t.localize(6918, null),
							default: "askUser",
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.dialog.defaultPath": {
							type: "string",
							pattern: "^((\\/|\\\\\\\\|[a-zA-Z]:\\\\).*)?$",
							patternErrorMessage: t.localize(6919, null),
							description: t.localize(6920, null),
							scope: E.ConfigurationScope.MACHINE,
						},
						"files.simpleDialog.enable": {
							type: "boolean",
							description: t.localize(6921, null),
							default: !1,
						},
						"files.participants.timeout": {
							type: "number",
							default: 6e4,
							markdownDescription: t.localize(6922, null),
						},
					},
				}),
					A.registerConfiguration({
						...v.$DAb,
						properties: {
							"editor.formatOnSave": {
								type: "boolean",
								description: t.localize(6923, null),
								scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							},
							"editor.formatOnSaveMode": {
								type: "string",
								default: "file",
								enum: ["file", "modifications", "modificationsIfAvailable"],
								enumDescriptions: [
									t.localize(6924, null),
									t.localize(6925, null),
									t.localize(6926, null),
								],
								markdownDescription: t.localize(6927, null),
								scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							},
						},
					}),
					A.registerConfiguration({
						id: "explorer",
						order: 10,
						title: t.localize(6928, null),
						type: "object",
						properties: {
							"explorer.openEditors.visible": {
								type: "number",
								description: t.localize(6929, null),
								default: 9,
								minimum: 1,
							},
							"explorer.openEditors.minVisible": {
								type: "number",
								description: t.localize(6930, null),
								default: 0,
								minimum: 0,
							},
							"explorer.openEditors.sortOrder": {
								type: "string",
								enum: ["editorOrder", "alphabetical", "fullPath"],
								description: t.localize(6931, null),
								enumDescriptions: [
									t.localize(6932, null),
									t.localize(6933, null),
									t.localize(6934, null),
								],
								default: "editorOrder",
							},
							"explorer.autoReveal": {
								type: ["boolean", "string"],
								enum: [!0, !1, "focusNoScroll"],
								default: !0,
								enumDescriptions: [
									t.localize(6935, null),
									t.localize(6936, null),
									t.localize(6937, null),
								],
								description: t.localize(6938, null),
							},
							"explorer.autoRevealExclude": {
								type: "object",
								markdownDescription: t.localize(6939, null),
								default: { "**/node_modules": !0, "**/bower_components": !0 },
								additionalProperties: {
									anyOf: [
										{ type: "boolean", description: t.localize(6940, null) },
										{
											type: "object",
											properties: {
												when: {
													type: "string",
													pattern: "\\w*\\$\\(basename\\)\\w*",
													default: "$(basename).ext",
													description: t.localize(6941, null),
												},
											},
										},
									],
								},
							},
							"explorer.enableDragAndDrop": {
								type: "boolean",
								description: t.localize(6942, null),
								default: !0,
							},
							"explorer.confirmDragAndDrop": {
								type: "boolean",
								description: t.localize(6943, null),
								default: !0,
							},
							"explorer.confirmPasteNative": {
								type: "boolean",
								description: t.localize(6944, null),
								default: !0,
							},
							"explorer.confirmDelete": {
								type: "boolean",
								description: t.localize(6945, null),
								default: !0,
							},
							"explorer.enableUndo": {
								type: "boolean",
								description: t.localize(6946, null),
								default: !0,
							},
							"explorer.confirmUndo": {
								type: "string",
								enum: [
									r.UndoConfirmLevel.Verbose,
									r.UndoConfirmLevel.Default,
									r.UndoConfirmLevel.Light,
								],
								description: t.localize(6947, null),
								default: r.UndoConfirmLevel.Default,
								enumDescriptions: [
									t.localize(6948, null),
									t.localize(6949, null),
									t.localize(6950, null),
								],
							},
							"explorer.expandSingleFolderWorkspaces": {
								type: "boolean",
								description: t.localize(6951, null),
								default: !0,
							},
							"explorer.sortOrder": {
								type: "string",
								enum: [
									r.SortOrder.Default,
									r.SortOrder.Mixed,
									r.SortOrder.FilesFirst,
									r.SortOrder.Type,
									r.SortOrder.Modified,
									r.SortOrder.FoldersNestsFiles,
								],
								default: r.SortOrder.Default,
								enumDescriptions: [
									t.localize(6952, null),
									t.localize(6953, null),
									t.localize(6954, null),
									t.localize(6955, null),
									t.localize(6956, null),
									t.localize(6957, null),
								],
								markdownDescription: t.localize(6958, null),
							},
							"explorer.sortOrderLexicographicOptions": {
								type: "string",
								enum: [
									r.LexicographicOptions.Default,
									r.LexicographicOptions.Upper,
									r.LexicographicOptions.Lower,
									r.LexicographicOptions.Unicode,
								],
								default: r.LexicographicOptions.Default,
								enumDescriptions: [
									t.localize(6959, null),
									t.localize(6960, null),
									t.localize(6961, null),
									t.localize(6962, null),
								],
								description: t.localize(6963, null),
							},
							"explorer.sortOrderReverse": {
								type: "boolean",
								description: t.localize(6964, null),
								default: !1,
							},
							"explorer.decorations.colors": {
								type: "boolean",
								description: t.localize(6965, null),
								default: !0,
							},
							"explorer.decorations.badges": {
								type: "boolean",
								description: t.localize(6966, null),
								default: !0,
							},
							"explorer.incrementalNaming": {
								type: "string",
								enum: ["simple", "smart", "disabled"],
								enumDescriptions: [
									t.localize(6967, null),
									t.localize(6968, null),
									t.localize(6969, null),
								],
								description: t.localize(6970, null),
								default: "simple",
							},
							"explorer.autoOpenDroppedFile": {
								type: "boolean",
								description: t.localize(6971, null),
								default: !0,
							},
							"explorer.compactFolders": {
								type: "boolean",
								description: t.localize(6972, null),
								default: !0,
							},
							"explorer.copyRelativePathSeparator": {
								type: "string",
								enum: ["/", "\\", "auto"],
								enumDescriptions: [
									t.localize(6973, null),
									t.localize(6974, null),
									t.localize(6975, null),
								],
								description: t.localize(6976, null),
								default: "auto",
							},
							"explorer.excludeGitIgnore": {
								type: "boolean",
								markdownDescription: t.localize(
									6977,
									null,
									"`#files.exclude#`",
								),
								default: !1,
								scope: E.ConfigurationScope.RESOURCE,
							},
							"explorer.fileNesting.enabled": {
								type: "boolean",
								scope: E.ConfigurationScope.RESOURCE,
								markdownDescription: t.localize(6978, null),
								default: !1,
							},
							"explorer.fileNesting.expand": {
								type: "boolean",
								markdownDescription: t.localize(
									6979,
									null,
									"`#explorer.fileNesting.enabled#`",
								),
								default: !0,
							},
							"explorer.fileNesting.patterns": {
								type: "object",
								scope: E.ConfigurationScope.RESOURCE,
								markdownDescription: t.localize(
									6980,
									null,
									"`#explorer.fileNesting.enabled#`",
								),
								patternProperties: {
									"^[^*]*\\*?[^*]*$": {
										markdownDescription: t.localize(6981, null),
										type: "string",
										pattern: "^([^,*]*\\*?[^,*]*)(, ?[^,*]*\\*?[^,*]*)*$",
									},
								},
								additionalProperties: !1,
								default: {
									"*.ts": "${capture}.js",
									"*.js":
										"${capture}.js.map, ${capture}.min.js, ${capture}.d.ts",
									"*.jsx": "${capture}.js",
									"*.tsx": "${capture}.ts",
									"tsconfig.json": "tsconfig.*.json",
									"package.json":
										"package-lock.json, yarn.lock, pnpm-lock.yaml, bun.lockb",
								},
							},
						},
					}),
					I.$stb.addImplementation(110, "explorer", (O) => {
						const B = O.get(T.$GN),
							U = O.get(P.$LWb),
							F = O.get(D.$gj).getValue().explorer.enableUndo;
						return U.hasViewFocus() && B.canUndo(s.$3Mc) && F
							? (B.undo(s.$3Mc), !0)
							: !1;
					}),
					I.$ttb.addImplementation(110, "explorer", (O) => {
						const B = O.get(T.$GN),
							U = O.get(P.$LWb),
							F = O.get(D.$gj).getValue().explorer.enableUndo;
						return U.hasViewFocus() && B.canRedo(s.$3Mc) && F
							? (B.redo(s.$3Mc), !0)
							: !1;
					}),
					L.$9M.registerLanguage({
						id: r.$SUb,
						aliases: ["Binary"],
						mimetypes: ["text/x-code-binary"],
					});
			},
		),
		define(
			de[4302],
			he([
				1, 0, 4, 25, 12, 23, 110, 43, 71, 27, 382, 18, 3063, 11, 100, 1993, 44,
				8, 93, 66,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				const s = "revealFileInOS",
					l = w.$l
						? t.localize2(7036, "Reveal in File Explorer")
						: w.$m
							? t.localize2(7037, "Reveal in Finder")
							: t.localize2(7038, "Open Containing Folder"),
					y = o.$Kj.or(
						n.$BQb.Scheme.isEqualTo(E.Schemas.file),
						n.$BQb.Scheme.isEqualTo(E.Schemas.vscodeUserData),
					);
				d.$TX.registerCommandAndKeybindingRule({
					id: s,
					weight: d.KeybindingWeight.WorkbenchContrib,
					when: m.EditorContextKeys.focus.toNegated(),
					primary: r.KeyMod.CtrlCmd | r.KeyMod.Alt | r.KeyCode.KeyR,
					win: { primary: r.KeyMod.Shift | r.KeyMod.Alt | r.KeyCode.KeyR },
					handler: (I, T) => {
						const P = (0, u.$NWb)(
							T,
							I.get(f.$fMb),
							I.get(a.$IY),
							I.get(b.$EY),
							I.get(u.$LWb),
						);
						(0, h.$Ufd)(P, I.get(C.$y7c), I.get(i.$Vi));
					},
				}),
					d.$TX.registerCommandAndKeybindingRule({
						weight: d.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: (0, r.$os)(r.$ps, r.KeyCode.KeyR),
						mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.KeyR) },
						id: "workbench.action.files.revealActiveFileInWindows",
						handler: (I) => {
							const P = I.get(a.$IY).activeEditor,
								k = p.$A1.getOriginalUri(P, {
									filterByScheme: E.Schemas.file,
									supportSideBySide: p.SideBySideEditor.PRIMARY,
								}),
								L = k ? [k] : [];
							(0, h.$Ufd)(L, I.get(C.$y7c), I.get(i.$Vi));
						},
					}),
					(0, g.$YMc)(s, l.value, y, "2_files", !1, 0);
				const v = { id: s, title: l.value };
				c.$ZX.appendMenuItem(c.$XX.OpenEditorsContext, {
					group: "navigation",
					order: 20,
					command: v,
					when: y,
				}),
					c.$ZX.appendMenuItem(c.$XX.OpenEditorsContextShare, {
						title: t.localize(7035, null),
						submenu: c.$XX.MenubarShare,
						group: "share",
						order: 3,
					}),
					c.$ZX.appendMenuItem(c.$XX.ExplorerContext, {
						group: "navigation",
						order: 20,
						command: v,
						when: y,
					});
				const S = t.localize2(7039, "File");
				(0, g.$ZMc)({ id: s, title: l, category: S }, y);
			},
		),
		define(
			de[4303],
			he([1, 0, 4, 60, 3834, 30, 81, 864, 102, 14, 79, 475, 802, 3833]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const c = (0, u.$$O)(
					"outline-view-icon",
					r.$ak.symbolClass,
					(0, t.localize)(8249, null),
				);
				E.$Io
					.as(i.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: h.IOutlinePane.Id,
								name: (0, t.localize2)(8284, "Outline"),
								containerIcon: c,
								ctorDescriptor: new m.$Ji(w.$2Yc),
								canToggleVisibility: !0,
								canMoveView: !0,
								hideByDefault: !1,
								collapsed: !0,
								order: 2,
								weight: 30,
								focusCommand: { id: "outline.focus" },
							},
						],
						d.$sAc,
					),
					E.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							id: "outline",
							order: 117,
							title: (0, t.localize)(8250, null),
							type: "object",
							properties: {
								[a.OutlineConfigKeys.icons]: {
									description: (0, t.localize)(8251, null),
									type: "boolean",
									default: !0,
								},
								[a.OutlineConfigKeys.collapseItems]: {
									description: (0, t.localize)(8252, null),
									type: "string",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									enum: ["alwaysCollapse", "alwaysExpand"],
									enumDescriptions: [
										(0, t.localize)(8253, null),
										(0, t.localize)(8254, null),
									],
									default: "alwaysExpand",
								},
								[a.OutlineConfigKeys.problemsEnabled]: {
									markdownDescription: (0, t.localize)(
										8255,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
								[a.OutlineConfigKeys.problemsColors]: {
									markdownDescription: (0, t.localize)(
										8256,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
								[a.OutlineConfigKeys.problemsBadges]: {
									markdownDescription: (0, t.localize)(
										8257,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
								"outline.showFiles": {
									type: "boolean",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									default: !0,
									markdownDescription: (0, t.localize)(8258, null),
								},
								"outline.showModules": {
									type: "boolean",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									default: !0,
									markdownDescription: (0, t.localize)(8259, null),
								},
								"outline.showNamespaces": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8260, null),
								},
								"outline.showPackages": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8261, null),
								},
								"outline.showClasses": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8262, null),
								},
								"outline.showMethods": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8263, null),
								},
								"outline.showProperties": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8264, null),
								},
								"outline.showFields": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8265, null),
								},
								"outline.showConstructors": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8266, null),
								},
								"outline.showEnums": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8267, null),
								},
								"outline.showInterfaces": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8268, null),
								},
								"outline.showFunctions": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8269, null),
								},
								"outline.showVariables": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8270, null),
								},
								"outline.showConstants": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8271, null),
								},
								"outline.showStrings": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8272, null),
								},
								"outline.showNumbers": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8273, null),
								},
								"outline.showBooleans": {
									type: "boolean",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									default: !0,
									markdownDescription: (0, t.localize)(8274, null),
								},
								"outline.showArrays": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8275, null),
								},
								"outline.showObjects": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8276, null),
								},
								"outline.showKeys": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8277, null),
								},
								"outline.showNull": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8278, null),
								},
								"outline.showEnumMembers": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8279, null),
								},
								"outline.showStructs": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8280, null),
								},
								"outline.showEvents": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8281, null),
								},
								"outline.showOperators": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8282, null),
								},
								"outline.showTypeParameters": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8283, null),
								},
							},
						});
			},
		),
		define(
			de[4304],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36, 815, 147, 2480]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$gzc = s);
				const g = (0, t.template)('<div class="pretty-dialog-message">'),
					p = (0, t.template)(
						'<div class="pretty-dialog-content"><div class="pretty-dialog-header"><div></div><h1 class="pretty-dialog-title"></h1></div><div class="pretty-dialog-buttons">',
					),
					o = (0, t.template)("<div>"),
					f = (l) =>
						(0, d.createComponent)(
							n.$rdc,
							(0, m.mergeProps)(l, {
								get style() {
									return {
										"font-size": "10px",
										padding: "0px 4px",
										...l.style,
									};
								},
								get tabFocusable() {
									return l.tabFocusable;
								},
								get setRef() {
									return l.setRef;
								},
							}),
						),
					b = (l) => {
						const y = (0, h.$odc)(),
							$ = () => {
								y.prettyDialogService.closeDialog();
							};
						let v;
						const S = () => {
							const T = l.dialogData,
								P = l.dialogResolve;
							T?.onCancel?.(), T?.cancelButton && P(T.cancelButton.id), $();
						};
						(0, r.createEffect)(() => {
							(0, r.onMount)(() => {
								setTimeout(() => {
									v && v.focus();
								});
							});
							const T = (k) => {
								k.key === "Escape" && S();
							};
							y.window.addEventListener("keydown", T);
							const P = () => {
								y.window.removeEventListener("keydown", T);
							};
							(0, r.onCleanup)(P);
						});
						const I = (T) => {
							v = T;
						};
						return (0, d.createComponent)(c.$fzc, {
							isOpen: !0,
							onClose: $,
							class: "pretty-dialog-modal",
							parentStyle: {
								"flex-direction": "column",
								"align-items": "center",
								"justify-content": "flex-start",
							},
							get children() {
								const T = p(),
									P = T.firstChild,
									k = P.firstChild,
									L = k.nextSibling,
									D = P.nextSibling;
								return (
									T.addEventListener("click", () => {
										v?.focus();
									}),
									(0, C.insert)(L, () => l.dialogData.title),
									(0, C.insert)(
										T,
										(0, d.createComponent)(r.Show, {
											get when() {
												return l.dialogData.message;
											},
											get children() {
												const M = g();
												return (
													(0, C.insert)(
														M,
														(0, d.createComponent)(r.Show, {
															get when() {
																return typeof l.dialogData.message == "string";
															},
															get fallback() {
																return (0, d.createComponent)(r.For, {
																	get each() {
																		return l.dialogData.message;
																	},
																	children: (N) =>
																		(() => {
																			const A = o();
																			return (
																				(0, C.insert)(A, () => N.message),
																				(0, w.effect)(() =>
																					(0, i.className)(
																						A,
																						N.isDeemphasized
																							? "deemphasized"
																							: "",
																					),
																				),
																				A
																			);
																		})(),
																});
															},
															get children() {
																return (0, d.createComponent)(r.For, {
																	get each() {
																		return l.dialogData.message.split(`
`);
																	},
																	children: (N) =>
																		(() => {
																			const A = o();
																			return (0, C.insert)(A, N), A;
																		})(),
																});
															},
														}),
													),
													M
												);
											},
										}),
										D,
									),
									D.addEventListener("click", (M) =>
										M.stopImmediatePropagation(),
									),
									(0, C.insert)(
										D,
										(0, d.createComponent)(r.Show, {
											get when() {
												return l.dialogData.cancelButton;
											},
											get children() {
												return (0, d.createComponent)(f, {
													type: "secondary",
													onClick: S,
													class: "pretty-dialog-button",
													get style() {
														return {
															"margin-left": l.dialogData
																.placeCancelButtonOnLeft
																? "auto"
																: "0px",
														};
													},
													tabFocusable: !0,
													get children() {
														return [
															(0, E.memo)(
																() => l.dialogData.cancelButton.label,
															),
															" (esc)",
														];
													},
												});
											},
										}),
										null,
									),
									(0, C.insert)(
										D,
										(0, d.createComponent)(r.For, {
											get each() {
												return l.dialogData.extraButtons;
											},
											children: (M) =>
												(0, d.createComponent)(f, {
													tabFocusable: !0,
													get type() {
														return M.type ?? "secondary";
													},
													onClick: () => l.dialogResolve(M.id),
													class: "pretty-dialog-button",
													get children() {
														return M.label;
													},
												}),
										}),
										null,
									),
									(0, C.insert)(
										D,
										(0, d.createComponent)(f, {
											type: "primary",
											onClick: () => {
												l.dialogData.onAccept?.(),
													l.dialogResolve(l.dialogData.primaryButton.id);
											},
											class:
												"pretty-dialog-button pretty-dialog-button-primary",
											setRef: I,
											tabFocusable: !0,
											get children() {
												return [
													(0, E.memo)(() => l.dialogData.primaryButton.label),
													" (\u23CE)",
												];
											},
										}),
										null,
									),
									(0, w.effect)(
										(M) => {
											const N = `pretty-dialog-icon ${a.ThemeIcon.asClassName(u.$ak.warning)}`,
												A =
													l.dialogData.dialogIconColor ??
													"var(--vscode-editorWarning-foreground)";
											return (
												N !== M._v$ && (0, i.className)(k, (M._v$ = N)),
												A !== M._v$2 &&
													((M._v$2 = A) != null
														? k.style.setProperty("color", A)
														: k.style.removeProperty("color")),
												M
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									T
								);
							},
						});
					};
				function s(l, y) {
					return (0, h.$ndc)(
						() => {
							const $ = (0, h.$odc)(),
								v = (0, r.createMemo)(
									() =>
										$.reactiveStorageService.nonPersistentStorage.dialogData,
								),
								S = (0, r.createMemo)(
									() =>
										$.reactiveStorageService.nonPersistentStorage.dialogResolve,
								);
							return (0, d.createComponent)(r.Show, {
								get when() {
									return (0, E.memo)(() => !!S())() && v();
								},
								children: (I) =>
									(0, d.createComponent)(b, {
										get dialogData() {
											return I();
										},
										get dialogResolve() {
											return S();
										},
									}),
							});
						},
						l,
						y,
					);
				}
			},
		),
		define(
			de[4305],
			he([1, 0, 20, 45, 216, 559, 3, 4304, 5, 7, 180, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hzc = void 0),
					(r = mt(r));
				let h = class extends C.$1c {
					constructor(n, g, p) {
						super(),
							(this.f = n),
							(this.g = g),
							(this.h = p),
							(this.a = this.D(new a.$re())),
							(this.onDidCloseDialog = this.a.event),
							(this.b = r.$(".pretty-dialog")),
							r.$fhb(this.h.mainContainer, this.b),
							(this.c = (0, d.$gzc)(this.b, this.g));
					}
					dispose() {
						this.c?.dispose(), super.dispose();
					}
					closeDialog() {
						const n = this.f.nonPersistentStorage.dialogData;
						if (!n) return;
						this.f.setNonPersistentStorage("dialogData", void 0);
						const g = this.f.nonPersistentStorage.dialogResolve;
						if (!g) return;
						const p = n.cancelButton;
						p && g(p.id);
					}
					isDialogOpen() {
						return !!this.f.nonPersistentStorage.dialogData;
					}
					async openDialog(n) {
						const p = await new Promise((o) => {
							this.f.setNonPersistentStorage("dialogData", n),
								this.f.setNonPersistentStorage("dialogResolve", () => o);
						});
						return (
							this.f.setNonPersistentStorage("dialogData", void 0),
							this.f.setNonPersistentStorage("dialogResolve", void 0),
							this.a.fire(),
							p
						);
					}
				};
				(e.$hzc = h),
					Ne(
						[(0, w.$KOb)("PrettyDialogService.closeDialog")],
						h.prototype,
						"closeDialog",
						null,
					),
					Ne(
						[(0, w.$KOb)("PrettyDialogService.openDialog")],
						h.prototype,
						"openDialog",
						null,
					),
					(e.$hzc = h = Ne([j(0, i.$0zb), j(1, m.$Li), j(2, u.$jEb)], h)),
					(0, t.$lK)(E.$hdc, h, t.InstantiationType.Delayed);
			},
		),
		