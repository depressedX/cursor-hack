define(
			de[1981],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 195, 26, 51, 79, 135, 36, 3e3, 134,
				2381,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tDc = B),
					(e.$uDc = U),
					(e.$vDc = F),
					(e.$wDc = x),
					(e.$xDc = q);
				const b = (0, t.template)("<div>"),
					s = (0, t.template)("<div><span>Saved \u2713"),
					l = (0, t.template)("<span>Saving..."),
					y = (0, t.template)(
						'<div><div><span>(<!>)</span><span></span><div class="file-more"><div><span class="aicontext-clickable-link">Summarize</span><span class="aicontext-clickable-link">Re-Link</span><span class="aicontext-clickable-link">Re-Read</span></div><span>...',
					),
					$ = (0, t.template)("<span><span></span><span>SUMMARIZED"),
					v = (0, t.template)("<span>LINKED"),
					S = (0, t.template)(
						'<div><span></span><span></span><div class="file-more"><div><span class="aicontext-clickable-link">Summarize</span><span class="aicontext-clickable-link">Re-Link</span></div><span>...',
					),
					I = (0, t.template)(
						"<span><span></span><span></span><span>SUMMARIZED",
					),
					T = (0, t.template)(
						"<div><span>Topological Order</span><button>Compute",
					),
					P = (0, t.template)(
						'<div><div>TARGET: <span></span></div><div>IGNORE: <span></span></div><div><span>Index ID</span><input type="text"><button>Update</button><button>New Index</button></div><div><span>Add File</span><input type="text"><button>Add</button></div><div><span></span><span>Unread Files (<!>)</span><input type="text" placeholder="Filter"><button>Read </button></div><div><span></span><span>Read Files (<!>)</span><input type="text" placeholder="Filter"><button>Summarize </button></div><div><span></span><span>Summarized Files (<!>)</span><input type="text" placeholder="Filter">',
					),
					k = (0, t.template)("<div><span>(<!>)</span><span></span><a>Read"),
					L = (0, t.template)('<input type="checkbox">'),
					D = (0, t.template)("<label>"),
					M = (0, t.template)("<br>"),
					N = {
						"text-transform": "uppercase",
						"font-size": "11px",
						"font-weight": "bold",
						"padding-inline": "16px",
						"margin-top": "24px",
						"margin-bottom": "8px",
					},
					A = (0, n.$_O)().registerIcon(
						"aicontext-file-icon",
						u.$ak.fileCode,
						"Icon showing an additional context file.",
					),
					R = (0, n.$_O)().registerIcon(
						"aicontext-file-close",
						{ color: (0, h.$bk)(c.$hS), ...u.$ak.x },
						"Icon to close additional files.",
					),
					O = {
						"radius-10-every-cursor-move":
							"ft:gpt-3.5-turbo-0125:anysphere::8zgyJa8E",
						"radius-10-tab-tab-tab":
							"ft:gpt-3.5-turbo-0125:anysphere::8zwdtq5A",
					};
				function B(G) {
					const K = (0, p.$odc)(),
						[J, W] = (0, r.createSignal)(!0),
						[X, Y] = (0, r.createSignal)(!0);
					let ie = null;
					return (
						(0, r.createEffect)(
							(0, r.on)(J, (ne) => {
								ne == !0
									? ((ie = setTimeout(() => {
											Y(!0);
										}, 300)),
										(0, r.onCleanup)(() => clearTimeout(ie)))
									: Y(!1);
							}),
						),
						[
							(() => {
								const ne = b();
								return (
									ne.style.setProperty("display", "block"),
									ne.style.setProperty("width", "100%"),
									ne.style.setProperty("overflow", "hidden"),
									ne.style.setProperty("border-radius", "3px"),
									ne.style.setProperty(
										"border",
										"1px solid var(--vscode-input-border)",
									),
									(0, d.insert)(
										ne,
										(0, m.createComponent)(o.$mDc, {
											placeholder:
												'e.g., "always use functional React, never use unwrap in rust, always output your answers in Portuguese"',
											get delegate() {
												return G.inputBoxDelegate;
											},
											onUpdate: (ee) => {
												W(!1),
													Y(!1),
													K.aiService.updatePersonalContext(ee),
													W(!0);
											},
											rows: 3,
											get initText() {
												return K.aiService.getPersonalContext();
											},
										}),
									),
									ne
								);
							})(),
							(() => {
								const ne = b();
								return (
									ne.style.setProperty("display", "flex"),
									ne.style.setProperty("align-items", "center"),
									ne.style.setProperty("font-size", "12px"),
									ne.style.setProperty("margin", "4px 4px"),
									ne.style.setProperty("justify-content", "flex-end"),
									ne.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									(0, d.insert)(
										ne,
										(0, m.createComponent)(r.Show, {
											get when() {
												return X();
											},
											get children() {
												const ee = s(),
													_ = ee.firstChild;
												return (
													ee.style.setProperty("display", "flex"),
													ee.style.setProperty("align-items", "center"),
													_.style.setProperty("margin-right", "8px"),
													ee
												);
											},
										}),
										null,
									),
									(0, d.insert)(
										ne,
										(0, m.createComponent)(r.Show, {
											get when() {
												return !X();
											},
											get children() {
												const ee = l();
												return ee.style.setProperty("margin-right", "8px"), ee;
											},
										}),
										null,
									),
									ne
								);
							})(),
						]
					);
				}
				function U(G) {
					return (0, m.createComponent)(x, G);
				}
				const z = (G, K, J, W) => {
					const [X, Y] = (0, r.createSignal)(!0),
						ie = (0, p.$odc)();
					return (() => {
						const ne = y(),
							ee = ne.firstChild,
							_ = ee.firstChild,
							te = _.firstChild,
							Q = te.nextSibling,
							Z = Q.nextSibling,
							se = _.nextSibling,
							re = se.nextSibling,
							le = re.firstChild,
							oe = le.firstChild,
							ae = oe.nextSibling,
							pe = ae.nextSibling;
						return (
							ee.style.setProperty("display", "flex"),
							ee.style.setProperty("flex-direction", "row"),
							ee.style.setProperty("gap", "0.25rem"),
							_.addEventListener("click", () => {
								G.nodes.length > 1 && Y(!X());
							}),
							(0, d.insert)(_, () => G.nodes?.length, Q),
							se.style.setProperty("flex-grow", "1"),
							se.style.setProperty("font-family", "monospace"),
							se.style.setProperty("white-space", "nowrap"),
							se.style.setProperty("overflow", "hidden"),
							se.style.setProperty("text-overflow", "ellipsis"),
							(0, d.insert)(se, () => G.relativePath),
							(0, d.insert)(
								ee,
								(() => {
									const $e = (0, C.memo)(
										() => !!G.nodes.every((ye) => ye.stage === "summarized"),
									);
									return () =>
										$e()
											? (() => {
													const ye = $(),
														ue = ye.firstChild,
														fe = ue.nextSibling;
													return (
														ye.style.setProperty("display", "flex"),
														ye.style.setProperty("flex-direction", "row"),
														ye.style.setProperty("gap", "0.25rem"),
														ye.style.setProperty("align-items", "center"),
														ue.addEventListener("click", () => {}),
														ue.style.setProperty("cursor", "pointer"),
														fe.style.setProperty("font-weight", "semibold"),
														(0, E.effect)(() =>
															(0, w.className)(
																ue,
																h.ThemeIcon.asClassName(u.$ak.preview),
															),
														),
														ye
													);
												})()
											: (() => {
													const ye = (0, C.memo)(
														() => !!G.nodes.every((ue) => ue.stage !== ""),
													);
													return () =>
														ye()
															? (() => {
																	const ue = v();
																	return (
																		ue.style.setProperty(
																			"font-weight",
																			"semibold",
																		),
																		ue
																	);
																})()
															: void 0;
												})();
								})(),
								re,
							),
							re.style.setProperty("padding-right", "0.5rem"),
							re.style.setProperty("display", "flex"),
							re.style.setProperty("flex-direction", "row"),
							re.style.setProperty("flex-shrink", "0"),
							re.style.setProperty("gap", "0.25rem"),
							oe.addEventListener("click", () => {
								G.nodes.forEach(($e) => K(G.relativePath, $e.nodeId));
							}),
							ae.addEventListener("click", () => {
								G.nodes.forEach(($e) => W(G.relativePath, $e.nodeId));
							}),
							pe.addEventListener("click", () => J(G.relativePath)),
							(0, d.insert)(
								ne,
								(0, m.createComponent)(r.Show, {
									get when() {
										return !X();
									},
									get children() {
										const $e = b();
										return (
											$e.style.setProperty("padding-left", "1rem"),
											$e.style.setProperty("opacity", "0.75"),
											(0, d.insert)(
												$e,
												(0, m.createComponent)(r.For, {
													get each() {
														return G.nodes;
													},
													children: (ye) =>
														(() => {
															const ue = S(),
																fe = ue.firstChild,
																me = fe.nextSibling,
																ve = me.nextSibling,
																ge = ve.firstChild,
																be = ge.firstChild,
																Ce = be.nextSibling;
															return (
																ue.style.setProperty("display", "flex"),
																ue.style.setProperty("flex-direction", "row"),
																ue.style.setProperty("gap", "0.25rem"),
																fe.addEventListener("click", () => {
																	const Le = document.createElement("textarea");
																	(Le.value = ye.nodeId),
																		ie.window.document.body.appendChild(Le),
																		Le.select(),
																		ie.window.document.execCommand("copy"),
																		ie.window.document.body.removeChild(Le);
																}),
																fe.style.setProperty("cursor", "pointer"),
																me.style.setProperty("flex-grow", "1"),
																me.style.setProperty(
																	"font-family",
																	"monospace",
																),
																me.style.setProperty("white-space", "nowrap"),
																me.style.setProperty("overflow", "hidden"),
																me.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																(0, d.insert)(me, () => ye.nodeId),
																(0, d.insert)(
																	ue,
																	(() => {
																		const Le = (0, C.memo)(
																			() => ye.stage === "summarized",
																		);
																		return () =>
																			Le()
																				? (() => {
																						const Fe = I(),
																							Oe = Fe.firstChild,
																							xe = Oe.nextSibling,
																							He = xe.nextSibling;
																						return (
																							Fe.style.setProperty(
																								"display",
																								"flex",
																							),
																							Fe.style.setProperty(
																								"flex-direction",
																								"row",
																							),
																							Fe.style.setProperty(
																								"gap",
																								"0.25rem",
																							),
																							Fe.style.setProperty(
																								"align-items",
																								"center",
																							),
																							Oe.addEventListener(
																								"click",
																								() => {
																									const Ke = `\`${G.relativePath}\`:
${ye.summary}`,
																										Je =
																											document.createElement(
																												"textarea",
																											);
																									(Je.value = Ke),
																										ie.window.document.body.appendChild(
																											Je,
																										),
																										Je.select(),
																										ie.window.document.execCommand(
																											"copy",
																										),
																										ie.window.document.body.removeChild(
																											Je,
																										);
																								},
																							),
																							Oe.style.setProperty(
																								"cursor",
																								"pointer",
																							),
																							xe.style.setProperty(
																								"cursor",
																								"pointer",
																							),
																							He.style.setProperty(
																								"font-weight",
																								"semibold",
																							),
																							(0, E.effect)(
																								(Ke) => {
																									const Je =
																											h.ThemeIcon.asClassName(
																												u.$ak.copy,
																											),
																										Te =
																											h.ThemeIcon.asClassName(
																												u.$ak.preview,
																											);
																									return (
																										Je !== Ke._v$ &&
																											(0, w.className)(
																												Oe,
																												(Ke._v$ = Je),
																											),
																										Te !== Ke._v$2 &&
																											(0, w.className)(
																												xe,
																												(Ke._v$2 = Te),
																											),
																										Ke
																									);
																								},
																								{ _v$: void 0, _v$2: void 0 },
																							),
																							Fe
																						);
																					})()
																				: (() => {
																						const Fe = (0, C.memo)(
																							() => ye.stage !== "",
																						);
																						return () =>
																							Fe()
																								? (() => {
																										const Oe = v();
																										return (
																											Oe.style.setProperty(
																												"font-weight",
																												"semibold",
																											),
																											Oe
																										);
																									})()
																								: void 0;
																					})();
																	})(),
																	ve,
																),
																ve.style.setProperty("padding-right", "0.5rem"),
																ve.style.setProperty("display", "flex"),
																ve.style.setProperty("flex-direction", "row"),
																ve.style.setProperty("flex-shrink", "0"),
																ve.style.setProperty("gap", "0.25rem"),
																be.addEventListener("click", () => {
																	K(G.relativePath, ye.nodeId);
																}),
																Ce.addEventListener("click", () => {
																	W(G.relativePath, ye.nodeId);
																}),
																(0, E.effect)(() =>
																	(0, w.className)(
																		fe,
																		h.ThemeIcon.asClassName(u.$ak.copy),
																	),
																),
																ue
															);
														})(),
												}),
											),
											$e
										);
									},
								}),
								null,
							),
							(0, E.effect)(() =>
								(G.nodes.length > 1 ? "pointer" : "default") != null
									? _.style.setProperty(
											"cursor",
											G.nodes.length > 1 ? "pointer" : "default",
										)
									: _.style.removeProperty("cursor"),
							),
							ne
						);
					})();
				};
				function F(G) {
					const K = (0, p.$odc)(),
						J = () => "vscode/src/",
						W = () => [
							"backend/server/src/tests/testDocs",
							"backend/server/src/tests/testChunks",
							"backend/server/src/tests/testFiles",
							"backend/server/src/proto",
							"backend/server/priompt/**/*.yaml",
							"backend/server/scripts/embeddings",
							"**/*.test.*",
							"**/*.svg",
							"**/*.ttf",
							"**/*.png",
							"**/*.mp3",
							"**/*.scpt",
							"**/*.d.ts",
							"**/lorem.txt",
							"vscode/src/proto/aiserver/v1/",
							"vscode/src/**/test",
						],
						X = () => G.contextPaneData.experimentalIndexId,
						[Y, ie] = (0, r.createSignal)(X()),
						[ne, ee] = (0, r.createSignal)(""),
						[_, te] = (0, r.createSignal)(""),
						[Q, Z] = (0, r.createSignal)(""),
						[se, re] = (0, r.createSignal)("");
					(0, r.createEffect)(() => {
						ie(X());
					}, [X()]);
					const le = () =>
							G.contextPaneData.files
								.filter((Je) => Je.stage === "unread")
								.filter((Je) =>
									Je.relativePath.toLowerCase().includes(ne().toLowerCase()),
								),
						oe = () =>
							G.contextPaneData.files
								.filter((Je) => Je.stage === "read")
								.filter(
									(Je) => !Je.nodes.every((Te) => Te.stage === "summarized"),
								)
								.filter((Je) =>
									Je.relativePath.toLowerCase().includes(_().toLowerCase()),
								),
						ae = () =>
							G.contextPaneData.files
								.filter((Je) => Je.stage === "read")
								.filter((Je) =>
									Je.nodes.every((Te) => Te.stage === "summarized"),
								)
								.filter((Je) =>
									Je.relativePath.toLowerCase().includes(Q().toLowerCase()),
								),
						pe = () => {
							K.aiContextservice.reloadIndexFiles(X()).then((Je) => {
								G.setContextPaneData("files", Je);
							});
						},
						$e = new a.$KK({ stickyScrollVertical: "down", ...(0, g.$x0b)() }),
						ye = new a.$KK({ stickyScrollVertical: "down", ...(0, g.$x0b)() }),
						ue = new a.$KK({ stickyScrollVertical: "down", ...(0, g.$x0b)() }),
						[fe, me] = (0, r.createSignal)(le().length === 0),
						[ve, ge] = (0, r.createSignal)(oe().length === 0),
						[be, Ce] = (0, r.createSignal)(ae().length === 0),
						Le = (Je) => {
							G.setContextPaneData(
								"files",
								(Te) => Te.relativePath === Je,
								"stage",
								"unread",
							),
								K.aiContextservice.buildFileEdges(X(), Je, (Te) => {
									G.setContextPaneData(
										"files",
										(Ee) => Ee.relativePath === Je,
										Te,
									);
								});
						},
						Fe = (Je, Te) => {
							K.aiContextservice
								.linkNode(X(), Te)
								.then((Ee) => {
									G.setContextPaneData(
										"files",
										(Ie) => Ie.relativePath === Je,
										"nodes",
										(Ie) => Ie.nodeId === Te,
										"stage",
										"linked",
									);
								})
								.catch((Ee) => {
									console.error(Ee);
								});
						},
						Oe = (Je) => {
							G.setContextPaneData(
								"files",
								(Te) => Te.nodes.some((Ee) => Ee.nodeId === Je),
								"nodes",
								(Te) => Te.nodeId === Je,
								"stage",
								"linked",
							);
						},
						xe = (Je, Te) => {
							G.contextPaneData.files
								.flatMap((Ee) => Ee.nodes)
								.find((Ee) => Ee.nodeId === Je)?.stage !== "summarized" &&
								(console.log("Got first summary for node", Je),
								console.log(Te)),
								G.setContextPaneData(
									"files",
									(Ee) => Ee.nodes.some((Ie) => Ie.nodeId === Je),
									"nodes",
									(Ee) => Ee.nodeId === Je,
									(Ee) => ({ ...Ee, stage: "summarized", summary: Te }),
								);
						},
						He = (Je) => {
							const Te = G.contextPaneData.files
								.flatMap((Ee) => Ee.nodes)
								.find((Ee) => Ee.nodeId === Je);
							if (Te !== void 0 && Te.stage === "summarized") return Te.summary;
						},
						Ke = (Je, Te) => {
							K.aiContextservice
								.summarizeNode(X(), Te, {
									onLink: Oe,
									onSummarize: xe,
									cachedSummary: He,
								})
								.catch((Ee) => {
									console.error(Ee);
								});
						};
					return (() => {
						const Je = P(),
							Te = Je.firstChild,
							Ee = Te.firstChild,
							Ie = Ee.nextSibling,
							Be = Te.nextSibling,
							Se = Be.firstChild,
							ke = Se.nextSibling,
							Ue = Be.nextSibling,
							qe = Ue.firstChild,
							Ae = qe.nextSibling,
							Me = Ae.nextSibling,
							De = Me.nextSibling,
							Re = Ue.nextSibling,
							je = Re.firstChild,
							Ve = je.nextSibling,
							Ze = Ve.nextSibling,
							et = Re.nextSibling,
							rt = et.firstChild,
							ft = rt.nextSibling,
							bt = ft.firstChild,
							nt = bt.nextSibling,
							lt = nt.nextSibling,
							ct = ft.nextSibling,
							gt = ct.nextSibling,
							ht = gt.firstChild,
							Rt = et.nextSibling,
							Nt = Rt.firstChild,
							jt = Nt.nextSibling,
							ti = jt.firstChild,
							kt = ti.nextSibling,
							hi = kt.nextSibling,
							Kt = jt.nextSibling,
							di = Kt.nextSibling,
							Ye = di.firstChild,
							ze = Rt.nextSibling,
							Xe = ze.firstChild,
							It = Xe.nextSibling,
							Lt = It.firstChild,
							xt = Lt.nextSibling,
							Vt = xt.nextSibling,
							Bt = It.nextSibling;
						return (
							Je.style.setProperty("padding", "0 1rem"),
							Je.style.setProperty("display", "flex"),
							Je.style.setProperty("flex-direction", "column"),
							Je.style.setProperty("gap", "0.25rem"),
							Te.style.setProperty("display", "flex"),
							Te.style.setProperty("flex-direction", "row"),
							Te.style.setProperty("gap", "0.25rem"),
							Ie.style.setProperty("font-family", "monospace"),
							(0, d.insert)(Ie, J),
							Be.style.setProperty("display", "flex"),
							Be.style.setProperty("flex-direction", "row"),
							Be.style.setProperty("gap", "0.25rem"),
							ke.style.setProperty("font-family", "monospace"),
							(0, d.insert)(ke, () => W().join(", ")),
							Ue.style.setProperty("display", "flex"),
							Ue.style.setProperty("flex-direction", "row"),
							Ue.style.setProperty("gap", "0.25rem"),
							Ae.addEventListener("input", (Gt) => ie(Gt.target.value)),
							Ae.style.setProperty("flex-grow", "1"),
							Ae.style.setProperty("color", "var(--vscode-input-foreground)"),
							Ae.style.setProperty(
								"background",
								"var(--vscode-input-background)",
							),
							Ae.style.setProperty("border", "none"),
							Ae.style.setProperty("outline", "none"),
							Me.addEventListener("click", () => {
								G.setContextPaneData("experimentalIndexId", Y()), pe();
							}),
							De.addEventListener("click", () => {
								K.aiContextservice
									.createNewExperimentalIndex(J(), W())
									.then(
										(Gt) => (
											G.setContextPaneData("experimentalIndexId", Gt),
											K.aiContextservice.reloadIndexFiles(Gt)
										),
									)
									.then((Gt) => {
										G.setContextPaneData("files", Gt);
									});
							}),
							Re.style.setProperty("display", "flex"),
							Re.style.setProperty("flex-direction", "row"),
							Re.style.setProperty("gap", "0.25rem"),
							Ve.addEventListener("input", (Gt) => re(Gt.target.value)),
							Ve.style.setProperty("flex-grow", "1"),
							Ve.style.setProperty("color", "var(--vscode-input-foreground)"),
							Ve.style.setProperty(
								"background",
								"var(--vscode-input-background)",
							),
							Ve.style.setProperty("border", "none"),
							Ve.style.setProperty("outline", "none"),
							Ze.addEventListener("click", () => {
								K.aiContextservice.buildFileEdges(X(), se(), (Gt) => {
									G.setContextPaneData("files", (Mt) => [
										...Mt.filter((Ut) => Ut.relativePath !== Gt.relativePath),
										Gt,
									]);
								});
							}),
							et.style.setProperty("font-weight", "bold"),
							et.style.setProperty("display", "flex"),
							et.style.setProperty("flex-direction", "row"),
							rt.addEventListener("click", () => me(!fe())),
							(0, d.insert)(ft, () => le().length, nt),
							ct.addEventListener("input", (Gt) => ee(Gt.target.value)),
							ct.style.setProperty("flex-grow", "1"),
							ct.style.setProperty("color", "var(--vscode-input-foreground)"),
							ct.style.setProperty(
								"background",
								"var(--vscode-input-background)",
							),
							ct.style.setProperty("border", "none"),
							ct.style.setProperty("outline", "none"),
							gt.addEventListener("click", () => {
								K.aiContextservice.buildIndexEdges(
									{
										experimentalIndexId: G.contextPaneData.experimentalIndexId,
										files: le(),
									},
									(Gt, Mt) => {
										G.setContextPaneData(
											"files",
											(Ut) => Ut.relativePath === Gt,
											Mt,
										);
									},
								);
							}),
							(0, d.insert)(gt, () => le().length, null),
							(0, d.insert)(
								Je,
								(0, m.createComponent)(g.$w0b, {
									get style() {
										return {
											height: "300px",
											position: "relative",
											width: "100%",
											display: fe() ? "none" : "flex",
											"flex-direction": "column",
										};
									},
									scrollingDirection: "vertical",
									scrollable: $e,
									get children() {
										return (0, m.createComponent)(r.For, {
											get each() {
												return le();
											},
											children: (Gt) =>
												(() => {
													const Mt = k(),
														Ut = Mt.firstChild,
														ei = Ut.firstChild,
														mi = ei.nextSibling,
														ii = mi.nextSibling,
														Dt = Ut.nextSibling,
														Jt = Dt.nextSibling;
													return (
														Mt.style.setProperty("display", "flex"),
														Mt.style.setProperty("flex-direction", "row"),
														Mt.style.setProperty("gap", "0.25rem"),
														(0, d.insert)(Ut, () => Gt.nodes?.length, mi),
														Dt.style.setProperty("flex-grow", "1"),
														Dt.style.setProperty("font-family", "monospace"),
														Dt.style.setProperty("white-space", "nowrap"),
														Dt.style.setProperty("overflow", "hidden"),
														Dt.style.setProperty("text-overflow", "ellipsis"),
														(0, d.insert)(Dt, () => Gt.relativePath),
														Jt.addEventListener("click", () => {
															Le(Gt.relativePath);
														}),
														Jt.style.setProperty(
															"text-decoration",
															"underline",
														),
														Jt.style.setProperty("flex-shrink", "0"),
														Mt
													);
												})(),
										});
									},
								}),
								Rt,
							),
							Rt.style.setProperty("font-weight", "bold"),
							Rt.style.setProperty("display", "flex"),
							Rt.style.setProperty("flex-direction", "row"),
							Nt.addEventListener("click", () => ge(!ve())),
							(0, d.insert)(jt, () => oe().length, kt),
							Kt.addEventListener("input", (Gt) => te(Gt.target.value)),
							Kt.style.setProperty("flex-grow", "1"),
							Kt.style.setProperty("color", "var(--vscode-input-foreground)"),
							Kt.style.setProperty(
								"background",
								"var(--vscode-input-background)",
							),
							Kt.style.setProperty("border", "none"),
							Kt.style.setProperty("outline", "none"),
							di.addEventListener("click", () => {
								K.aiContextservice.summarizeNodes(
									X(),
									oe().flatMap((Gt) => Gt.nodes.map((Mt) => Mt.nodeId)),
									{ onLink: Oe, onSummarize: xe, cachedSummary: He },
								);
							}),
							(0, d.insert)(di, () => oe().length, null),
							(0, d.insert)(
								Je,
								(0, m.createComponent)(g.$w0b, {
									get style() {
										return {
											height: "300px",
											position: "relative",
											width: "100%",
											display: ve() ? "none" : "flex",
											"flex-direction": "column",
										};
									},
									scrollingDirection: "vertical",
									scrollable: ye,
									get children() {
										return (0, m.createComponent)(r.For, {
											get each() {
												return oe();
											},
											children: (Gt) => z(Gt, Ke, Le, Fe),
										});
									},
								}),
								ze,
							),
							ze.style.setProperty("font-weight", "bold"),
							ze.style.setProperty("display", "flex"),
							ze.style.setProperty("flex-direction", "row"),
							Xe.addEventListener("click", () => Ce(!be())),
							(0, d.insert)(It, () => ae().length, xt),
							Bt.addEventListener("input", (Gt) => Z(Gt.target.value)),
							Bt.style.setProperty("flex-grow", "1"),
							Bt.style.setProperty("color", "var(--vscode-input-foreground)"),
							Bt.style.setProperty(
								"background",
								"var(--vscode-input-background)",
							),
							Bt.style.setProperty("border", "none"),
							Bt.style.setProperty("outline", "none"),
							(0, d.insert)(
								Je,
								(0, m.createComponent)(g.$w0b, {
									get style() {
										return {
											height: "300px",
											position: "relative",
											width: "100%",
											display: be() ? "none" : "flex",
											"flex-direction": "column",
										};
									},
									scrollingDirection: "vertical",
									scrollable: ue,
									get children() {
										return (0, m.createComponent)(r.For, {
											get each() {
												return ae();
											},
											children: (Gt) => z(Gt, Ke, Le, Fe),
										});
									},
								}),
								null,
							),
							(0, d.insert)(
								Je,
								(0, m.createComponent)(r.Show, {
									get when() {
										return le().length === 0;
									},
									get children() {
										const Gt = T(),
											Mt = Gt.firstChild,
											Ut = Mt.nextSibling;
										return (
											Gt.style.setProperty("font-weight", "bold"),
											Gt.style.setProperty("display", "flex"),
											Gt.style.setProperty("flex-direction", "row"),
											Ut.addEventListener("click", () => {
												K.aiContextservice.computeIndexTopo(X()).then(pe);
											}),
											Ut.style.setProperty("margin-left", "auto"),
											Gt
										);
									},
								}),
								null,
							),
							(0, E.effect)(
								(Gt) => {
									const Mt = h.ThemeIcon.asClassName(
											fe() ? u.$ak.chevronRight : u.$ak.chevronDown,
										),
										Ut = h.ThemeIcon.asClassName(
											ve() ? u.$ak.chevronRight : u.$ak.chevronDown,
										),
										ei = h.ThemeIcon.asClassName(
											be() ? u.$ak.chevronRight : u.$ak.chevronDown,
										);
									return (
										Mt !== Gt._v$3 && (0, w.className)(rt, (Gt._v$3 = Mt)),
										Ut !== Gt._v$4 && (0, w.className)(Nt, (Gt._v$4 = Ut)),
										ei !== Gt._v$5 && (0, w.className)(Xe, (Gt._v$5 = ei)),
										Gt
									);
								},
								{ _v$3: void 0, _v$4: void 0, _v$5: void 0 },
							),
							(0, E.effect)(() => (Ae.value = Y())),
							(0, E.effect)(() => (Ve.value = se())),
							(0, E.effect)(() => (ct.value = ne())),
							(0, E.effect)(() => (Kt.value = _())),
							(0, E.effect)(() => (Bt.value = Q())),
							Je
						);
					})();
				}
				function x(G) {
					let K = !1;
					const J = (0, p.$odc)(),
						[W, X] = (0, r.createSignal)(J.aiService.getAdditionalFiles()),
						[Y, ie] = (0, r.createSignal)("");
					function ne(re) {
						X(re), J.aiService.updateAdditionalFiles(re);
					}
					function ee(re) {
						return J.workspaceContextService
							.getWorkspace()
							.folders[0].toResource(re);
					}
					const _ = J.cursorAuthenticationService,
						[te, Q] = (0, r.createSignal)(!1),
						[Z, se] = (0, r.createSignal)(f.MembershipType.FREE);
					return (
						(0, r.createEffect)(() => {
							const re = (le) => {
								se(le);
							};
							_.addLoginChangedListener(Q),
								_.addSubscriptionChangedListener(re),
								Q(_.isAuthenticated()),
								se(_.membershipType()),
								(0, r.onCleanup)(() => {
									_.removeLoginChangedListener(Q),
										_.removeSubscriptionChangedListener(re);
								});
						}),
						b()
					);
				}
				const H = [
					"specific rules",
					"compile errors",
					"change behavior",
					"match code",
					"relevance",
					"user awareness",
				];
				function q(G) {
					return (() => {
						const K = b();
						return (
							(0, d.insert)(
								K,
								(0, m.createComponent)(r.For, {
									each: H,
									children: (J) => [
										(() => {
											const W = L();
											return (
												W.addEventListener("click", () => {
													G.reactiveStorageServices.setApplicationUserPersistentStorage(
														"linterDebuggerState",
														V(J),
														(X) => !X,
													);
												}),
												(0, i.setAttribute)(W, "id", "lint-debug" + J),
												(0, i.setAttribute)(W, "name", J),
												(W.value = J),
												(0, E.effect)(
													() =>
														(W.checked =
															G.reactiveStorageServices.applicationUserPersistentStorage.linterDebuggerState[
																V(J)
															]),
												),
												W
											);
										})(),
										(() => {
											const W = D();
											return (
												(0, i.setAttribute)(W, "for", "lint-debug" + J),
												(0, d.insert)(W, J),
												W
											);
										})(),
										M(),
									],
								}),
							),
							K
						);
					})();
				}
				function V(G) {
					const K = G.split(" ");
					return (
						K[0] +
						K.slice(1)
							.map((J) => J[0].toUpperCase() + J.slice(1))
							.join("")
					);
				}
			},
		),
		