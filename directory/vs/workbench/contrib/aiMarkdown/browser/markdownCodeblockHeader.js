define(
		de[1373],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 33, 14, 322, 59, 54, 26, 41, 852,
			140, 156, 1371, 36, 1708, 246, 7, 12, 1004, 364, 484, 1372,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$x$b = e.$w$b = e.$v$b = void 0),
				(e.$r$b = Y),
				(e.$s$b = ne),
				(e.$t$b = ee),
				(e.$u$b = _),
				(D = xi(D));
			const M = (0, t.template)("<div>"),
				N = (0, t.template)(
					'<div><div class="markdown-codeblock-header-reply"><div class="clickable"><div></div>Ask</div></div><div class="clickable"><div></div>Copy</div><div class="clickable"><div></div>Run',
				),
				A = (0, t.template)(
					'<div class="markdown-codeblock-header-reply"><div class="clickable">Ask',
				),
				R = (0, t.template)('<div class="clickable">'),
				O = (0, t.template)('<div><div class="clickable">Apply'),
				B = (0, t.template)(
					'<div>Apply to <span id="current-file-name"></span>?',
				),
				U = (0, t.template)(
					"<div>AI did not predict an origin file for this codeblock",
				),
				z = (0, t.template)("<div><div></div>Continue"),
				F = (0, t.template)("<div><div></div>Cancel"),
				x = (0, t.template)('<div class="cursor-ai-generating-text-dots">'),
				H = (0, t.template)("<div>Done"),
				q = (0, t.template)('<div class="clickable"><div></div>Reapply'),
				V = (0, t.template)('<div class="clickable"><div></div>Reject'),
				G = (0, t.template)('<div class="clickable">Accept'),
				K = (0, t.template)("<div>No file to apply to"),
				J = (0, t.template)(
					'<div><div><div class="markdown-codeblock-header-reply"><div></div>Ask</div><div><div></div></div><div><div></div>Apply',
				),
				W = (0, t.template)("<div><div>"),
				X = (0, t.template)('<div><div><div class="show-file-icons"><div>');
			function Y(se) {
				const [re, le] = (0, a.createSignal)(se.initialValue);
				return (
					(0, a.onMount)(() => {
						let oe, ae;
						const pe = se.getModel(),
							$e = async () => {
								const ue = await se.updateFunc(pe, re());
								le(() => ue);
							},
							ye = pe.onDidChangeContent(() => {
								oe !== void 0 && clearTimeout(oe);
								const ue = se.debounceTime - (Date.now() - (ae ?? 0));
								ue > 0
									? (oe = setTimeout(async () => {
											(ae = Date.now()), await $e();
										}, ue))
									: ((ae = Date.now()), $e());
							});
						(0, a.onCleanup)(() => {
							ye.dispose(), oe !== void 0 && clearTimeout(oe);
						}),
							$e();
					}),
					[re, le]
				);
			}
			function ie(se, re, le, oe, ae, pe) {
				se.preventDefault(), se.stopPropagation();
				const $e = oe.closest(".markdown-section"),
					ye = $e?.getAttribute("data-markdown-raw"),
					ue = parseInt($e?.getAttribute("data-section-index") ?? "");
				if (!ye || isNaN(ue)) return;
				const fe =
					ae.selectedTab().lastFocusedBubbleId ??
					ae.selectedTab().bubbles[ae.selectedTab().bubbles.length - 1].id;
				ae.addContext({
					tabId: re,
					bubbleId: fe,
					contextType: "quotes",
					value: { bubbleId: le, sectionIndex: ue, markdown: ye },
				}),
					ae.focusInput();
			}
			function ne(se) {
				const re = (0, $.$odc)(),
					[le, oe] = (0, a.createSignal)(!1),
					[ae, pe] = (0, a.createSignal)(!0),
					[$e, ye, ue] = (0, k.$A0b)(),
					fe = `code-block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
				let me;
				const ve = (0, a.createMemo)(() => {
						const lt = re.chatDataService.getBubbleData(
							se.slashEditOptions?.tabId,
							se.slashEditOptions?.bubbleId,
						);
						if (!lt || !lt.text) return !1;
						const ct = /```[\w-]+:.+?\n[\s\S]*?```/g,
							gt = lt.text.match(ct);
						return gt ? gt.length === 1 : !1;
					}),
					ge = (0, a.createMemo)(() => {
						const lt = re.aiChatService.selectedTab().selectedBubbleId;
						return lt ? lt === se.slashEditOptions?.bubbleId : !1;
					}),
					[be] = (0, a.createResource)(async () => {
						await re.aiFeatureStatusService.maybeRefreshConfig(
							"applyButtonLineLimit",
						);
						const lt = re.aiFeatureStatusService.getCachedConfig(
							"applyButtonLineLimit",
						);
						return console.log("line limit", lt), lt;
					}),
					[Ce] = (0, a.createResource)(
						async () =>
							await re.applyToFileActionsService.isFileTooBigToApply(
								se.aiPredictedFilePath ?? "",
							),
					),
					Le = async (lt, ct) => {
						const gt =
							await re.applyToFileActionsService.getApplyToFileMenuItems_MAY_RUN_LONG(
								re.workspaceContextService.resolveRelativePath(
									se.aiPredictedFilePath ?? "",
								),
								lt.getValue(),
								"",
								{
									...se.slashEditOptions,
									clickedCodeBlockContents: lt.getValue(),
								},
							);
						if (ct !== void 0 && (gt === void 0 || ct.length > gt.length))
							return ct;
						const ht = gt.filter((Rt) => Rt.wholeFile);
						return (
							se.codeblockActionsCallback &&
								ht.length > 0 &&
								se.codeblockActionsCallback(ht),
							gt
						);
					},
					[Fe, Oe] = Y({
						getModel: se.getModelOfCodeBlock,
						initialValue:
							re.applyToFileActionsService.getApplyToFileMenuItemsAlwaysAvailable(
								re.workspaceContextService.resolveRelativePath(
									se.aiPredictedFilePath ?? "",
								),
								se.slashEditOptions,
							),
						updateFunc: Le,
						debounceTime: 1e3,
					}),
					[xe, He] = (0, a.createSignal)(void 0);
				(0, a.createEffect)(() => {
					He(se.aiPredictedFilePath),
						(async () => {
							const lt = new h.$Ce(),
								ct = await re.anythingQuickAccessProvider.getFilePicks(
									(0, n.$hs)(se.aiPredictedFilePath ?? ""),
									new g.$Gc(),
									lt.token,
								),
								{ path: gt } = ct[0]?.resource ?? {};
							se.aiPredictedFilePath &&
								gt?.includes(se.aiPredictedFilePath) &&
								He(gt);
						})();
				});
				const Ke = (0, a.createMemo)(() => {
						const lt = xe();
						if (lt)
							return re.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(ct) =>
									ct.uri.toString() ===
										re.workspaceContextService
											.resolveRelativePath(lt)
											.toString() && !ct.attachedToPromptBar,
							);
					}),
					Je = (0, a.createMemo)(() => {
						if (le()) return "confirming";
						const lt = Ke();
						return lt !== void 0
							? re.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
									(gt) =>
										gt.generationUUID === lt?.generationUUID &&
										gt.metadata.type === "apply",
								)
								? "generating"
								: "done"
							: "startingShow";
					}),
					[Te, Ee] = Y({
						getModel: se.getModelOfCodeBlock,
						initialValue: void 0,
						updateFunc: async (lt, ct) => {
							if (
								(console.log("updating number to link to"),
								se.aiPredictedFilePath === void 0)
							)
								return;
							const gt =
								await re.applyToFileActionsService.getLineNumberOfTopLevelScope_MAY_RUN_LONG(
									re.workspaceContextService.resolveRelativePath(
										se.aiPredictedFilePath ?? "",
									),
									lt.getValue(),
								);
							return gt === void 0 && ct !== void 0 ? ct : gt;
						},
						debounceTime: 1e3,
					});
				(0, a.createEffect)(() => {
					Je() !== "startingShow" && ue();
				});
				const [Ie, Be] = (0, a.createSignal)(0),
					[Se, ke] = (0, a.createSignal)(0);
				let Ue, qe, Ae, Me;
				const De = (0, I.$Ogb)().ResizeObserver;
				(0, a.onMount)(() => {
					const lt = new De((ct) => {
						for (const gt of ct) {
							const { width: ht, height: Rt } = gt.contentRect;
							Be(ht);
							let Nt = 0,
								jt = 0,
								ti = 0;
							qe && (Nt = qe.getBoundingClientRect().width),
								Ae && (jt = Ae.getBoundingClientRect().width),
								Me && (ti = Me.getBoundingClientRect().width),
								ke(ht - Math.max(Nt, jt, ti));
						}
					});
					Ue && lt.observe(Ue),
						(0, a.onCleanup)(() => {
							lt.disconnect();
						});
				}),
					(0, a.onMount)(() => {
						Re(xe());
					});
				const Re = (lt) => {
						if (!lt) return;
						const ct = re.workspaceContextService.resolveRelativePath(lt);
						re.commandService.executeCommand(s.$Igc, ct, {
							...se.slashEditOptions,
							clickedCodeBlockContents: se.getModelOfCodeBlock().getValue(),
						});
					},
					je = () => {
						const lt = xe();
						if (!lt) return;
						const ct = re.workspaceContextService.resolveRelativePath(lt);
						re.commandService.executeCommand("vscode.open", ct),
							re.commandService.executeCommand(s.$Hgc, ct, void 0, {
								...se.slashEditOptions,
								clickedCodeBlockContents: se.getModelOfCodeBlock().getValue(),
							});
					},
					Ve = (0, a.createMemo)(() =>
						Fe().filter(
							(lt) =>
								(Ce() !== !0 || !lt.wholeFile) &&
								(lt.lineLength === void 0 || lt.lineLength < (be() ?? 1e5)),
						),
					),
					Ze = async () => {
						try {
							const ct = se.getModelOfCodeBlock().getValue();
							await (0, v.$o$b)(re, ct, se.cwd, se.commandLanguage);
						} catch {}
					},
					et = (0, a.createMemo)(
						() =>
							(Ce() === !0 && Fe().length <= 1) ||
							re.applyToFileActionsService.isUsingAPIKeyAndNotPro(),
					),
					rt = (0, a.createMemo)(() => !et() && ve() && ge()),
					ft = (lt) => {
						lt.preventDefault(),
							lt.stopPropagation(),
							re.tooltipService.registerEvent(
								"chat.copy.codeblock.withfilename",
							);
						const gt = se.getModelOfCodeBlock().getValue() ?? "";
						re.clipboardService.writeText(gt),
							pe(!1),
							setTimeout(() => {
								pe(!0);
							}, 2e3);
					},
					bt = async (lt, ct) => {
						const { currentTarget: gt } = lt;
						if ((lt.stopPropagation(), Je() === "done")) {
							nt?.click();
							return;
						}
						const { justClickFirstAction: ht } = ct ?? {};
						if (et()) {
							console.log("cannot apply");
							return;
						}
						if ((console.log("applying"), Fe().length === 0)) {
							const kt =
								re.applyToFileActionsService.getApplyToFileMenuItemsAlwaysAvailable(
									re.workspaceContextService.resolveRelativePath(
										se.aiPredictedFilePath ?? "",
									),
									{ ...se.slashEditOptions, isReapply: ct?.isReapply },
								);
							Oe(kt);
						}
						const Rt = Fe();
						let Nt = Rt.length === 1 ? Rt[0] : void 0;
						const jt = Rt.find((kt) => kt.menuString === b.$S0b);
						jt &&
							((await jt.isCached(se.getModelOfCodeBlock().getValue())) ||
								ct?.isReapply === !0) &&
							(Nt = jt);
						const ti = !1;
						if (Nt !== void 0 && !ti)
							Nt.callback(se.getModelOfCodeBlock(), ct?.isReapply);
						else if (ht && Rt.length > 0 && !ti)
							Rt[0].callback(se.getModelOfCodeBlock(), ct?.isReapply);
						else {
							const kt = gt.getBoundingClientRect();
							ye({ x: kt.right + 2, y: kt.bottom + 2 }),
								Oe(await Le(se.getModelOfCodeBlock(), Fe()));
						}
					};
				(0, a.createEffect)(() => {
					const lt = se.slashEditOptions.tabId,
						ct = se.slashEditOptions.bubbleId;
					if (!rt()) return;
					const gt = (0, I.$Ogb)(),
						ht = (Rt) => {
							rt() &&
								(Rt.key === "Enter" && (T.$m ? Rt.metaKey : Rt.ctrlKey)
									? (Rt.stopPropagation(),
										bt(
											{
												currentTarget: Rt.currentTarget,
												stopPropagation: () => Rt.stopPropagation(),
											},
											{ justClickFirstAction: !0 },
										))
									: Rt.key === "c" && (T.$m ? Rt.metaKey : Rt.ctrlKey)
										? (Rt.preventDefault(),
											Rt.stopImmediatePropagation(),
											ft(Rt))
										: me &&
											Rt.key === "m" &&
											(T.$m ? Rt.metaKey : Rt.ctrlKey) &&
											(Rt.preventDefault(),
											Rt.stopImmediatePropagation(),
											ie(
												Rt,
												lt,
												ct,
												me,
												re.aiChatService,
												re.chatDataService,
											)));
						};
					gt.addEventListener("keydown", ht),
						(0, a.onCleanup)(() => {
							gt.removeEventListener("keydown", ht);
						});
				}),
					(0, a.createEffect)(() => {
						se.setIsGenerating && se.setIsGenerating(Je() === "generating");
					});
				let nt;
				return (() => {
					const lt = M(),
						ct = Ue;
					return (
						typeof ct == "function" ? (0, u.use)(ct, lt) : (Ue = lt),
						lt.style.setProperty("height", "100%"),
						lt.style.setProperty("width", "100%"),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return se.isCommand;
								},
								get children() {
									return (0, r.createComponent)(e.$x$b, {
										get language() {
											return se.commandLanguage;
										},
										get children() {
											return [
												(() => {
													const gt = M();
													return (
														gt.style.setProperty("cursor", "pointer"),
														(0, m.insert)(
															gt,
															(0, r.createComponent)(a.Show, {
																get when() {
																	return se.commandLanguage !== void 0;
																},
																get children() {
																	return te[se.commandLanguage ?? ""];
																},
															}),
														),
														gt
													);
												})(),
												(() => {
													const gt = M();
													return gt.style.setProperty("flex-grow", "1"), gt;
												})(),
												(() => {
													const gt = N(),
														ht = gt.firstChild,
														Rt = ht.firstChild,
														Nt = Rt.firstChild,
														jt = ht.nextSibling,
														ti = jt.firstChild,
														kt = jt.nextSibling,
														hi = kt.firstChild;
													gt.style.setProperty("display", "flex"),
														gt.style.setProperty("align-items", "center"),
														ht.addEventListener("click", (di) => {
															me &&
																ie(
																	di,
																	se.slashEditOptions.tabId,
																	se.slashEditOptions.bubbleId,
																	me,
																	re.aiChatService,
																	re.chatDataService,
																);
														});
													const Kt = me;
													return (
														typeof Kt == "function"
															? (0, u.use)(Kt, ht)
															: (me = ht),
														ht.style.setProperty("cursor", "pointer"),
														ht.style.setProperty("display", "flex"),
														ht.style.setProperty("align-items", "center"),
														ht.style.setProperty("justify-content", "center"),
														ht.style.setProperty("flex-direction", "row"),
														ht.style.setProperty("user-select", "none"),
														ht.style.setProperty("font-size", "0.8em"),
														ht.style.setProperty("padding", "0px 6px"),
														ht.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														ht.style.setProperty("position", "relative"),
														Rt.style.setProperty("display", "flex"),
														Rt.style.setProperty("align-items", "center"),
														Rt.style.setProperty("gap", "4px"),
														Nt.style.setProperty("z-index", "1"),
														Nt.style.setProperty("font-size", "1em"),
														jt.addEventListener("click", (di) => {
															di.stopPropagation(),
																re.tooltipService.registerEvent(
																	"chat.copy.codeblock.withfilename",
																);
															const ze =
																se.getModelOfCodeBlock().getValue() ?? "";
															re.clipboardService.writeText(ze),
																pe(!1),
																setTimeout(() => {
																	pe(!0);
																}, 2e3);
														}),
														jt.style.setProperty("cursor", "pointer"),
														jt.style.setProperty("display", "flex"),
														jt.style.setProperty("align-items", "center"),
														jt.style.setProperty("justify-content", "center"),
														jt.style.setProperty("flex-direction", "row"),
														jt.style.setProperty("user-select", "none"),
														jt.style.setProperty("font-size", "0.8em"),
														jt.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														jt.style.setProperty("padding", "0px 6px"),
														jt.style.setProperty("gap", "4px"),
														ti.style.setProperty("z-index", "1"),
														ti.style.setProperty("font-size", "1em"),
														kt.addEventListener("click", () => Ze()),
														kt.style.setProperty("cursor", "pointer"),
														kt.style.setProperty("display", "flex"),
														kt.style.setProperty("align-items", "center"),
														kt.style.setProperty("justify-content", "center"),
														kt.style.setProperty("flex-direction", "row"),
														kt.style.setProperty("user-select", "none"),
														kt.style.setProperty("font-size", "0.8em"),
														kt.style.setProperty("padding", "0px 6px"),
														kt.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														kt.style.setProperty("position", "relative"),
														hi.style.setProperty("z-index", "1"),
														hi.style.setProperty("font-size", "1em"),
														hi.style.setProperty("margin-right", "4px"),
														(0, d.effect)(
															(di) => {
																const Ye = o.ThemeIcon.asClassName(c.$ak.reply),
																	ze = ae()
																		? o.ThemeIcon.asClassName(c.$ak.copy)
																		: o.ThemeIcon.asClassName(c.$ak.check),
																	Xe = o.ThemeIcon.asClassName(c.$ak.play);
																return (
																	Ye !== di._v$ &&
																		(0, C.className)(Nt, (di._v$ = Ye)),
																	ze !== di._v$2 &&
																		(0, C.className)(ti, (di._v$2 = ze)),
																	Xe !== di._v$3 &&
																		(0, C.className)(hi, (di._v$3 = Xe)),
																	di
																);
															},
															{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
														),
														gt
													);
												})(),
											];
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return (
										(0, E.memo)(() => !se.isCommand)() &&
										Je() === "startingShow"
									);
								},
								get children() {
									return (0, r.createComponent)(a.Show, {
										get when() {
											return se.aiPredictedFilePath !== void 0;
										},
										get fallback() {
											return (0, r.createComponent)(
												ee,
												(0, i.mergeProps)(se, {
													setIsConfirming: oe,
													setFilePathWeAppliedOn: He,
												}),
											);
										},
										get children() {
											return (0, r.createComponent)(_, {
												get relativeFilePath() {
													return xe() ?? "";
												},
												get numLinesToLinkTo() {
													return Te();
												},
												get isGenerating() {
													return Je() === "generating";
												},
												get children() {
													return [
														(() => {
															const gt = M(),
																ht = qe;
															return (
																typeof ht == "function"
																	? (0, u.use)(ht, gt)
																	: (qe = gt),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("font-size", "0.8em"),
																(0, m.insert)(gt, () => (0, p.$sc)(xe() ?? "")),
																gt
															);
														})(),
														(() => {
															const gt = M();
															return (
																gt.addEventListener("click", () => {}),
																gt.style.setProperty("margin-left", "5px"),
																gt.style.setProperty("flex-shrink", "1"),
																gt.style.setProperty("min-width", "0"),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("font-size", "0.8em"),
																(0, d.effect)(() =>
																	(ge() ? 1 : 0.5) != null
																		? gt.style.setProperty(
																				"opacity",
																				ge() ? 1 : 0.5,
																			)
																		: gt.style.removeProperty("opacity"),
																),
																gt
															);
														})(),
														(() => {
															const gt = M();
															return gt.style.setProperty("flex-grow", "1"), gt;
														})(),
														(0, r.createComponent)(P.$q$b, {
															get children() {
																return [
																	(() => {
																		const gt = A(),
																			ht = gt.firstChild,
																			Rt = ht.firstChild;
																		gt.addEventListener("click", (jt) => {
																			me &&
																				ie(
																					jt,
																					se.slashEditOptions.tabId,
																					se.slashEditOptions.bubbleId,
																					me,
																					re.aiChatService,
																					re.chatDataService,
																				);
																		});
																		const Nt = me;
																		return (
																			typeof Nt == "function"
																				? (0, u.use)(Nt, gt)
																				: (me = gt),
																			gt.style.setProperty("cursor", "pointer"),
																			gt.style.setProperty("display", "flex"),
																			gt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			gt.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			gt.style.setProperty(
																				"flex-direction",
																				"row",
																			),
																			gt.style.setProperty(
																				"user-select",
																				"none",
																			),
																			gt.style.setProperty(
																				"font-size",
																				"0.8em",
																			),
																			gt.style.setProperty(
																				"padding",
																				"0px 6px",
																			),
																			gt.style.setProperty(
																				"border-left",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			gt.style.setProperty(
																				"position",
																				"relative",
																			),
																			ht.style.setProperty("display", "flex"),
																			ht.style.setProperty(
																				"align-items",
																				"center",
																			),
																			ht.style.setProperty("gap", "4px"),
																			(0, m.insert)(
																				ht,
																				(0, r.createComponent)(a.Show, {
																					get when() {
																						return rt();
																					},
																					get fallback() {
																						return (() => {
																							const jt = M();
																							return (
																								jt.style.setProperty(
																									"z-index",
																									"1",
																								),
																								jt.style.setProperty(
																									"font-size",
																									"1em",
																								),
																								(0, d.effect)(() =>
																									(0, C.className)(
																										jt,
																										o.ThemeIcon.asClassName(
																											c.$ak.reply,
																										),
																									),
																								),
																								jt
																							);
																						})();
																					},
																					get children() {
																						const jt = M();
																						return (
																							jt.style.setProperty(
																								"font-size",
																								"0.8em",
																							),
																							jt.style.setProperty(
																								"color",
																								"var(--vscode-descriptionForeground)",
																							),
																							(0, m.insert)(
																								jt,
																								T.$m ? "\u2318M" : "Ctrl+M",
																							),
																							jt
																						);
																					},
																				}),
																				Rt,
																			),
																			gt
																		);
																	})(),
																	(() => {
																		const gt = R();
																		return (
																			gt.addEventListener("click", ft),
																			gt.style.setProperty("cursor", "pointer"),
																			gt.style.setProperty("display", "flex"),
																			gt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			gt.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			gt.style.setProperty(
																				"flex-direction",
																				"row",
																			),
																			gt.style.setProperty(
																				"user-select",
																				"none",
																			),
																			gt.style.setProperty(
																				"font-size",
																				"0.8em",
																			),
																			gt.style.setProperty(
																				"border-left",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			gt.style.setProperty(
																				"padding",
																				"0px 6px",
																			),
																			gt.style.setProperty("gap", "4px"),
																			(0, m.insert)(
																				gt,
																				(0, r.createComponent)(a.Show, {
																					get when() {
																						return rt();
																					},
																					get fallback() {
																						return (() => {
																							const ht = M();
																							return (
																								ht.style.setProperty(
																									"z-index",
																									"1",
																								),
																								ht.style.setProperty(
																									"font-size",
																									"1em",
																								),
																								(0, d.effect)(() =>
																									(0, C.className)(
																										ht,
																										ae()
																											? o.ThemeIcon.asClassName(
																													c.$ak.copy,
																												)
																											: o.ThemeIcon.asClassName(
																													c.$ak.check,
																												),
																									),
																								),
																								ht
																							);
																						})();
																					},
																					get children() {
																						const ht = M();
																						return (
																							ht.style.setProperty(
																								"font-size",
																								"0.8em",
																							),
																							ht.style.setProperty(
																								"color",
																								"var(--vscode-descriptionForeground)",
																							),
																							(0, m.insert)(
																								ht,
																								T.$m ? "\u2318C" : "Ctrl+C",
																							),
																							ht
																						);
																					},
																				}),
																				null,
																			),
																			(0, m.insert)(
																				gt,
																				() => (ae() ? "Copy" : "Copied"),
																				null,
																			),
																			gt
																		);
																	})(),
																	(0, r.createComponent)(y.$l$b, {
																		get text() {
																			return (0, E.memo)(
																				() =>
																					!!re.applyToFileActionsService.isUsingAPIKeyAndNotPro(),
																			)()
																				? "Does not work with API key (custom model). Please upgrade to Pro."
																				: `File is too big to apply to (~${be() ?? 1e4} line limit)`;
																		},
																		leftDelta: -72,
																		get hidden() {
																			return !et();
																		},
																		get children() {
																			const gt = O(),
																				ht = gt.firstChild,
																				Rt = ht.firstChild;
																			return (
																				gt.addEventListener("click", bt),
																				gt.style.setProperty(
																					"cursor",
																					"pointer",
																				),
																				gt.style.setProperty("display", "flex"),
																				gt.style.setProperty(
																					"align-items",
																					"center",
																				),
																				gt.style.setProperty(
																					"justify-content",
																					"center",
																				),
																				gt.style.setProperty(
																					"flex-direction",
																					"row",
																				),
																				gt.style.setProperty(
																					"user-select",
																					"none",
																				),
																				gt.style.setProperty(
																					"font-size",
																					"0.8em",
																				),
																				gt.style.setProperty(
																					"padding",
																					"0px 6px",
																				),
																				gt.style.setProperty(
																					"border-left",
																					"1px solid var(--vscode-commandCenter-inactiveBorder)",
																				),
																				gt.style.setProperty(
																					"position",
																					"relative",
																				),
																				gt.style.setProperty(
																					"transition",
																					"background 0.2s",
																				),
																				(0, m.insert)(
																					ht,
																					(0, r.createComponent)(a.Show, {
																						get when() {
																							return rt();
																						},
																						get fallback() {
																							return (() => {
																								const Nt = M();
																								return (
																									Nt.style.setProperty(
																										"z-index",
																										"1",
																									),
																									Nt.style.setProperty(
																										"font-size",
																										"1em",
																									),
																									(0, d.effect)(() =>
																										(0, C.className)(
																											Nt,
																											o.ThemeIcon.asClassName(
																												c.$ak.play,
																											),
																										),
																									),
																									Nt
																								);
																							})();
																						},
																						get children() {
																							const Nt = M();
																							return (
																								Nt.style.setProperty(
																									"font-size",
																									"0.8em",
																								),
																								Nt.style.setProperty(
																									"color",
																									"var(--vscode-button-foreground)",
																								),
																								(0, m.insert)(
																									Nt,
																									T.$m
																										? "\u2318\u23CE"
																										: "Ctrl+Enter",
																								),
																								Nt
																							);
																						},
																					}),
																					Rt,
																				),
																				(0, m.insert)(
																					gt,
																					(0, r.createComponent)(a.Show, {
																						get when() {
																							return $e();
																						},
																						children: (Nt) =>
																							(0, r.createComponent)(L.Menu, {
																								isRelative: !1,
																								shouldMountInPortal: !0,
																								width: "120px",
																								get position() {
																									return Nt();
																								},
																								close: ue,
																								get reactiveCloser() {
																									return re
																										.reactiveStorageService
																										.nonPersistentStorage
																										.forceChatDropdownRerender;
																								},
																								anchor: "top-right",
																								style: {
																									"max-width": "240px",
																									"background-color":
																										"var(--vscode-settings-dropdownBackground)",
																									opacity: 1,
																									border:
																										"1px solid var(--vscode-commandCenter-inactiveBorder)",
																									"border-radius": "4px",
																									overflow: "hidden",
																									"z-index": 1,
																								},
																								get children() {
																									return (0, r.createComponent)(
																										a.For,
																										{
																											get each() {
																												return Ve();
																											},
																											children: (jt, ti) =>
																												(0, r.createComponent)(
																													D.default,
																													{
																														style: {
																															"text-overflow":
																																"ellipsis",
																															"white-space":
																																"nowrap",
																															overflow:
																																"hidden",
																															padding:
																																"0px 4px",
																															"border-radius":
																																"2px",
																															cursor: "pointer",
																														},
																														class:
																															"markdown-codeblock-apply-item",
																														onClick: () => {
																															jt.callback(
																																se.getModelOfCodeBlock(),
																																!1,
																															),
																																ue();
																														},
																														get title() {
																															return jt.menuString;
																														},
																														get children() {
																															return jt.menuString;
																														},
																													},
																												),
																										},
																									);
																								},
																							}),
																					}),
																					null,
																				),
																				(0, d.effect)(
																					(Nt) => {
																						const jt = rt()
																								? "var(--vscode-button-background)"
																								: "none",
																							ti = rt()
																								? "var(--vscode-button-foreground)"
																								: "inherit",
																							kt = {
																								display: "flex",
																								"align-items": "center",
																								gap: rt() ? "2px" : "4px",
																								...(et()
																									? {
																											opacity: 0.5,
																											cursor: "default",
																										}
																									: {}),
																								opacity: rt() ? 1 : void 0,
																							};
																						return (
																							jt !== Nt._v$4 &&
																								((Nt._v$4 = jt) != null
																									? gt.style.setProperty(
																											"background",
																											jt,
																										)
																									: gt.style.removeProperty(
																											"background",
																										)),
																							ti !== Nt._v$5 &&
																								((Nt._v$5 = ti) != null
																									? gt.style.setProperty(
																											"color",
																											ti,
																										)
																									: gt.style.removeProperty(
																											"color",
																										)),
																							(Nt._v$6 = (0, w.style)(
																								ht,
																								kt,
																								Nt._v$6,
																							)),
																							Nt
																						);
																					},
																					{
																						_v$4: void 0,
																						_v$5: void 0,
																						_v$6: void 0,
																					},
																				),
																				gt
																			);
																		},
																	}),
																];
															},
														}),
													];
												},
											});
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return Je() === "confirming";
								},
								get children() {
									return (0, r.createComponent)(a.Show, {
										get when() {
											return xe();
										},
										get fallback() {
											return (0, r.createComponent)(_, {
												get relativeFilePath() {
													return xe() ?? "";
												},
												get numLinesToLinkTo() {
													return Te();
												},
												get isGenerating() {
													return Je() === "generating";
												},
												get children() {
													return [
														(() => {
															const gt = K();
															return (
																gt.style.setProperty("white-space", "nowrap"),
																gt.style.setProperty("overflow", "hidden"),
																gt.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt
															);
														})(),
														(() => {
															const gt = M();
															return gt.style.setProperty("flex-grow", "1"), gt;
														})(),
														(() => {
															const gt = F(),
																ht = gt.firstChild;
															return (
																gt.addEventListener("click", (Rt) => {
																	Rt.stopPropagation(), oe(!1);
																}),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("display", "flex"),
																gt.style.setProperty("align-items", "center"),
																gt.style.setProperty(
																	"justify-content",
																	"center",
																),
																gt.style.setProperty("flex-direction", "row"),
																gt.style.setProperty("opacity", "0.75"),
																gt.style.setProperty("user-select", "none"),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt.style.setProperty("padding-right", "4px"),
																gt.style.setProperty("margin-right", "4px"),
																gt.style.setProperty("margin-left", "4px"),
																gt.style.setProperty(
																	"border-left",
																	"1px solid var(--vscode-commandCenter-inactiveBorder)",
																),
																ht.style.setProperty("z-index", "1"),
																ht.style.setProperty("font-size", "1em"),
																ht.style.setProperty("margin-right", "4px"),
																(0, d.effect)(() =>
																	(0, C.className)(
																		ht,
																		o.ThemeIcon.asClassName(c.$ak.x),
																	),
																),
																gt
															);
														})(),
													];
												},
											});
										},
										get children() {
											return (0, r.createComponent)(_, {
												get relativeFilePath() {
													return xe() ?? "";
												},
												get numLinesToLinkTo() {
													return Te();
												},
												get isGenerating() {
													return Je() === "generating";
												},
												get children() {
													return [
														(() => {
															const gt = B(),
																ht = gt.firstChild,
																Rt = ht.nextSibling;
															return (
																gt.style.setProperty("white-space", "nowrap"),
																gt.style.setProperty("overflow", "hidden"),
																gt.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																gt.style.setProperty("font-size", "0.8em"),
																Rt.addEventListener("click", () => {
																	const Nt = xe() ?? "",
																		jt = Nt.endsWith("/")
																			? Nt.slice(0, -1)
																			: Nt;
																	(0, S.openFileInEditorIfExists)(
																		re.workspaceContextService.resolveRelativePath(
																			jt,
																		),
																		re.fileService,
																		re.openerService,
																	);
																}),
																Rt.style.setProperty(
																	"color",
																	"var(--vscode-textLink-foreground)",
																),
																Rt.style.setProperty("cursor", "pointer"),
																(0, m.insert)(Rt, () => (0, p.$sc)(xe() ?? "")),
																gt
															);
														})(),
														(0, r.createComponent)(a.Show, {
															get when() {
																return Ie() > 500;
															},
															get children() {
																const gt = U();
																return (
																	gt.style.setProperty("opacity", "0.5"),
																	gt.style.setProperty("margin-left", "5px"),
																	gt.style.setProperty("flex-shrink", "2"),
																	gt.style.setProperty("min-width", "0"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("white-space", "nowrap"),
																	gt.style.setProperty("overflow", "hidden"),
																	gt.style.setProperty(
																		"text-overflow",
																		"ellipsis",
																	),
																	gt
																);
															},
														}),
														(() => {
															const gt = M();
															return gt.style.setProperty("flex-grow", "1"), gt;
														})(),
														(() => {
															const gt = z(),
																ht = gt.firstChild;
															return (
																gt.addEventListener("click", (Rt) => {
																	Rt.stopPropagation(), oe(!1), je();
																}),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("display", "flex"),
																gt.style.setProperty("align-items", "center"),
																gt.style.setProperty(
																	"justify-content",
																	"center",
																),
																gt.style.setProperty("flex-direction", "row"),
																gt.style.setProperty("opacity", "0.75"),
																gt.style.setProperty("user-select", "none"),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt.style.setProperty("padding-right", "4px"),
																gt.style.setProperty("margin-right", "4px"),
																gt.style.setProperty("margin-left", "4px"),
																gt.style.setProperty(
																	"border-left",
																	"1px solid var(--vscode-commandCenter-inactiveBorder)",
																),
																ht.style.setProperty("z-index", "1"),
																ht.style.setProperty("font-size", "1em"),
																ht.style.setProperty("margin-right", "4px"),
																(0, d.effect)(() =>
																	(0, C.className)(
																		ht,
																		o.ThemeIcon.asClassName(c.$ak.check),
																	),
																),
																gt
															);
														})(),
														(() => {
															const gt = F(),
																ht = gt.firstChild;
															return (
																gt.addEventListener("click", (Rt) => {
																	Rt.stopPropagation(), oe(!1);
																}),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("display", "flex"),
																gt.style.setProperty("align-items", "center"),
																gt.style.setProperty(
																	"justify-content",
																	"center",
																),
																gt.style.setProperty("flex-direction", "row"),
																gt.style.setProperty("opacity", "0.75"),
																gt.style.setProperty("user-select", "none"),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt.style.setProperty("padding-right", "4px"),
																gt.style.setProperty("margin-right", "4px"),
																gt.style.setProperty("margin-left", "4px"),
																gt.style.setProperty(
																	"border-left",
																	"1px solid var(--vscode-commandCenter-inactiveBorder)",
																),
																ht.style.setProperty("z-index", "1"),
																ht.style.setProperty("font-size", "1em"),
																ht.style.setProperty("margin-right", "4px"),
																(0, d.effect)(() =>
																	(0, C.className)(
																		ht,
																		o.ThemeIcon.asClassName(c.$ak.x),
																	),
																),
																gt
															);
														})(),
													];
												},
											});
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return Je() === "generating";
								},
								get children() {
									return (0, r.createComponent)(_, {
										get relativeFilePath() {
											return xe() ?? "";
										},
										get numLinesToLinkTo() {
											return Te();
										},
										get isGenerating() {
											return Je() === "generating";
										},
										get children() {
											return [
												(() => {
													const gt = M(),
														ht = Ae;
													return (
														typeof ht == "function"
															? (0, u.use)(ht, gt)
															: (Ae = gt),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("font-size", "0.8em"),
														(0, m.insert)(gt, () => (0, p.$sc)(xe() ?? "")),
														gt
													);
												})(),
												(() => {
													const gt = x();
													return (
														gt.style.setProperty("opacity", "0.5"),
														gt.style.setProperty("margin-left", "5px"),
														gt.style.setProperty("flex-shrink", "1"),
														gt.style.setProperty("min-width", "0"),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("font-size", "0.8em"),
														(0, m.insert)(
															gt,
															(0, r.createComponent)(a.Show, {
																get when() {
																	return Se() > 170;
																},
																children: "Generating",
															}),
														),
														gt
													);
												})(),
												(() => {
													const gt = M();
													return gt.style.setProperty("flex-grow", "1"), gt;
												})(),
												(() => {
													const gt = F(),
														ht = gt.firstChild;
													return (
														gt.addEventListener("click", (Rt) => {
															Rt.stopPropagation();
															const Nt = Ke();
															Nt && re.inlineDiffService.cancelDiff(Nt.id);
														}),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("display", "flex"),
														gt.style.setProperty("align-items", "center"),
														gt.style.setProperty("justify-content", "center"),
														gt.style.setProperty("flex-direction", "row"),
														gt.style.setProperty("opacity", "0.75"),
														gt.style.setProperty("user-select", "none"),
														gt.style.setProperty("font-size", "0.8em"),
														gt.style.setProperty("padding-left", "4px"),
														gt.style.setProperty("padding-right", "4px"),
														gt.style.setProperty("margin-right", "4px"),
														gt.style.setProperty("margin-left", "4px"),
														gt.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														ht.style.setProperty("z-index", "1"),
														ht.style.setProperty("font-size", "1em"),
														ht.style.setProperty("margin-right", "4px"),
														(0, d.effect)(() =>
															(0, C.className)(
																ht,
																o.ThemeIcon.asClassName(c.$ak.stop),
															),
														),
														gt
													);
												})(),
											];
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return Je() === "done";
								},
								get children() {
									return (0, r.createComponent)(_, {
										get relativeFilePath() {
											return xe() ?? "";
										},
										get numLinesToLinkTo() {
											return Te();
										},
										get isGenerating() {
											return Je() === "generating";
										},
										get children() {
											return [
												(() => {
													const gt = M(),
														ht = Me;
													return (
														typeof ht == "function"
															? (0, u.use)(ht, gt)
															: (Me = gt),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("font-size", "0.8em"),
														(0, m.insert)(gt, () => (0, p.$sc)(xe() ?? "")),
														gt
													);
												})(),
												(0, r.createComponent)(a.Show, {
													get when() {
														return Se() > 190;
													},
													get children() {
														const gt = H();
														return (
															gt.addEventListener("click", () => {}),
															gt.style.setProperty("opacity", "0.5"),
															gt.style.setProperty("margin-left", "5px"),
															gt.style.setProperty("cursor", "pointer"),
															gt.style.setProperty("font-size", "0.8em"),
															gt
														);
													},
												}),
												(() => {
													const gt = M();
													return gt.style.setProperty("flex-grow", "1"), gt;
												})(),
												(0, r.createComponent)(P.$q$b, {
													get children() {
														return [
															(() => {
																const gt = q(),
																	ht = gt.firstChild;
																return (
																	gt.addEventListener("click", (Rt) => {
																		Rt.stopPropagation();
																		const Nt = Ke();
																		Nt &&
																			re.inlineDiffService.rejectDiff(Nt.id),
																			bt(Rt, { isReapply: !0 });
																	}),
																	gt.style.setProperty("cursor", "pointer"),
																	gt.style.setProperty("display", "flex"),
																	gt.style.setProperty("align-items", "center"),
																	gt.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	gt.style.setProperty("flex-direction", "row"),
																	gt.style.setProperty("user-select", "none"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("padding-left", "4px"),
																	gt.style.setProperty("padding-right", "4px"),
																	gt.style.setProperty("margin-right", "4px"),
																	gt.style.setProperty("margin-left", "4px"),
																	gt.style.setProperty(
																		"border-left",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	ht.style.setProperty("z-index", "1"),
																	ht.style.setProperty("font-size", "1em"),
																	ht.style.setProperty("margin-right", "4px"),
																	(0, d.effect)(() =>
																		(0, C.className)(
																			ht,
																			o.ThemeIcon.asClassName(c.$ak.refresh),
																		),
																	),
																	gt
																);
															})(),
															(() => {
																const gt = V(),
																	ht = gt.firstChild;
																return (
																	gt.addEventListener("click", (Rt) => {
																		Rt.stopPropagation();
																		const Nt = Ke();
																		Nt &&
																			re.inlineDiffService.rejectDiff(Nt.id);
																	}),
																	gt.style.setProperty("cursor", "pointer"),
																	gt.style.setProperty("display", "flex"),
																	gt.style.setProperty("align-items", "center"),
																	gt.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	gt.style.setProperty("flex-direction", "row"),
																	gt.style.setProperty("user-select", "none"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("padding-left", "4px"),
																	gt.style.setProperty("padding-right", "4px"),
																	gt.style.setProperty("margin-right", "4px"),
																	gt.style.setProperty("margin-left", "4px"),
																	gt.style.setProperty(
																		"border-left",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	ht.style.setProperty("z-index", "1"),
																	ht.style.setProperty("font-size", "1em"),
																	ht.style.setProperty("margin-right", "4px"),
																	(0, d.effect)(() =>
																		(0, C.className)(
																			ht,
																			o.ThemeIcon.asClassName(c.$ak.x),
																		),
																	),
																	gt
																);
															})(),
															(() => {
																const gt = G(),
																	ht = gt.firstChild;
																gt.addEventListener("click", (Nt) => {
																	Nt.stopPropagation();
																	const jt = Ke();
																	jt && re.inlineDiffService.acceptDiff(jt.id);
																});
																const Rt = nt;
																return (
																	typeof Rt == "function"
																		? (0, u.use)(Rt, gt)
																		: (nt = gt),
																	gt.style.setProperty("cursor", "pointer"),
																	gt.style.setProperty("display", "flex"),
																	gt.style.setProperty("align-items", "center"),
																	gt.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	gt.style.setProperty("flex-direction", "row"),
																	gt.style.setProperty("user-select", "none"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("padding-left", "4px"),
																	gt.style.setProperty("padding-right", "4px"),
																	gt.style.setProperty("margin-left", "4px"),
																	gt.style.setProperty(
																		"border-left",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	(0, m.insert)(
																		gt,
																		(0, r.createComponent)(a.Show, {
																			get when() {
																				return rt();
																			},
																			get fallback() {
																				return (() => {
																					const Nt = M();
																					return (
																						Nt.style.setProperty(
																							"z-index",
																							"1",
																						),
																						Nt.style.setProperty(
																							"font-size",
																							"1em",
																						),
																						Nt.style.setProperty(
																							"margin-right",
																							"4px",
																						),
																						(0, d.effect)(() =>
																							(0, C.className)(
																								Nt,
																								o.ThemeIcon.asClassName(
																									c.$ak.check,
																								),
																							),
																						),
																						Nt
																					);
																				})();
																			},
																			get children() {
																				const Nt = M();
																				return (
																					Nt.style.setProperty(
																						"font-size",
																						"0.8em",
																					),
																					Nt.style.setProperty(
																						"color",
																						"var(--vscode-button-foreground)",
																					),
																					Nt.style.setProperty(
																						"margin-right",
																						"4px",
																					),
																					(0, m.insert)(
																						Nt,
																						T.$m
																							? "\u2318\u23CE"
																							: "Ctrl+Enter",
																					),
																					Nt
																				);
																			},
																		}),
																		ht,
																	),
																	(0, d.effect)(
																		(Nt) => {
																			const jt = rt()
																					? "var(--vscode-button-background)"
																					: "none",
																				ti = rt()
																					? "var(--vscode-button-foreground)"
																					: "inherit",
																				kt = rt() ? 1 : void 0;
																			return (
																				jt !== Nt._v$7 &&
																					((Nt._v$7 = jt) != null
																						? gt.style.setProperty(
																								"background",
																								jt,
																							)
																						: gt.style.removeProperty(
																								"background",
																							)),
																				ti !== Nt._v$8 &&
																					((Nt._v$8 = ti) != null
																						? gt.style.setProperty("color", ti)
																						: gt.style.removeProperty("color")),
																				kt !== Nt._v$9 &&
																					((Nt._v$9 = kt) != null
																						? gt.style.setProperty(
																								"opacity",
																								kt,
																							)
																						: gt.style.removeProperty(
																								"opacity",
																							)),
																				Nt
																			);
																		},
																		{
																			_v$7: void 0,
																			_v$8: void 0,
																			_v$9: void 0,
																		},
																	),
																	gt
																);
															})(),
														];
													},
												}),
											];
										},
									});
								},
							}),
							null,
						),
						lt
					);
				})();
			}
			function ee(se) {
				const re = (0, $.$odc)(),
					[le, oe] = (0, a.createSignal)(!0),
					[ae, pe] = (0, a.createSignal)(!1),
					$e = {
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
						gap: "2px",
						padding: "1px 4px",
						"line-height": "125%",
						background: "var(--vscode-editor-background)",
						color: "var(--vscode-input-placeholderForeground)",
						border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
						"border-radius": "2px",
						"font-size": "11px",
						cursor: "pointer",
						"white-space": "nowrap",
						transition: "background-color 0.2s",
						"font-weight": "400",
					},
					ye = {
						"font-size": "11px",
						color: "var(--vscode-input-placeholderForeground)",
					};
				let ue;
				return (() => {
					const fe = J(),
						me = fe.firstChild,
						ve = me.firstChild,
						ge = ve.firstChild,
						be = ve.nextSibling,
						Ce = be.firstChild,
						Le = be.nextSibling,
						Fe = Le.firstChild;
					fe.addEventListener("mouseleave", () => pe(!1)),
						fe.addEventListener("mouseenter", () => pe(!0)),
						fe.style.setProperty("position", "relative"),
						fe.style.setProperty("width", "100%");
					const Oe = ue;
					return (
						typeof Oe == "function" ? (0, u.use)(Oe, me) : (ue = me),
						me.style.setProperty("position", "absolute"),
						me.style.setProperty("transform", "translateY(calc(50%))"),
						me.style.setProperty("bottom", "0"),
						me.style.setProperty("right", "4px"),
						me.style.setProperty("z-index", "303"),
						me.style.setProperty("display", "flex"),
						me.style.setProperty("justify-content", "right"),
						me.style.setProperty("flex-direction", "row"),
						me.style.setProperty("gap", "4px"),
						ve.addEventListener("click", (xe) => {
							ue &&
								ie(
									xe,
									se.slashEditOptions.tabId,
									se.slashEditOptions.bubbleId,
									ue,
									re.aiChatService,
									re.chatDataService,
								);
						}),
						(0, w.style)(ve, $e),
						(0, w.style)(ge, ye),
						be.addEventListener("click", (xe) => {
							xe.stopPropagation(),
								re.tooltipService.registerEvent("chat.copy.codeblock.floating");
							const He = se.getModelOfCodeBlock().getValue();
							re.clipboardService.writeText(He),
								oe(!1),
								setTimeout(() => {
									oe(!0);
								}, 2e3);
						}),
						(0, w.style)(be, $e),
						(0, w.style)(Ce, ye),
						(0, m.insert)(be, () => (le() ? "Copy" : "Copied"), null),
						Le.addEventListener("click", async (xe) => {
							const He = re.codeEditorService
								.getActiveCodeEditor()
								?.getModel()?.uri;
							if (He !== void 0) {
								const Ke = re.workspaceContextService.asRelativePath(He);
								se.setFilePathWeAppliedOn(Ke);
							}
							se.setIsConfirming(!0);
						}),
						(0, w.style)(Le, $e),
						(0, w.style)(Fe, ye),
						(0, d.effect)(
							(xe) => {
								const He =
										ae() || se.isMouseInCodeBlock() ? "visible" : "hidden",
									Ke = o.ThemeIcon.asClassName(c.$ak.reply),
									Je = le()
										? o.ThemeIcon.asClassName(c.$ak.copy)
										: o.ThemeIcon.asClassName(c.$ak.check),
									Te = o.ThemeIcon.asClassName(c.$ak.play);
								return (
									He !== xe._v$10 &&
										((xe._v$10 = He) != null
											? me.style.setProperty("visibility", He)
											: me.style.removeProperty("visibility")),
									Ke !== xe._v$11 && (0, C.className)(ge, (xe._v$11 = Ke)),
									Je !== xe._v$12 && (0, C.className)(Ce, (xe._v$12 = Je)),
									Te !== xe._v$13 && (0, C.className)(Fe, (xe._v$13 = Te)),
									xe
								);
							},
							{ _v$10: void 0, _v$11: void 0, _v$12: void 0, _v$13: void 0 },
						),
						fe
					);
				})();
			}
			function _(se) {
				const re = (0, $.$odc)(),
					le = (0, a.createMemo)(
						() => "1px solid var(--vscode-commandCenter-inactiveBorder)",
					);
				return (() => {
					const oe = W(),
						ae = oe.firstChild;
					return (
						oe.addEventListener("click", () => {
							if (se.relativeFilePath) {
								const pe = re.workspaceContextService.resolveRelativePath(
									se.relativeFilePath,
								);
								if (se.numLinesToLinkTo !== void 0) {
									const $e = (0, f.$8rb)(pe, {
										startLineNumber: se.numLinesToLinkTo,
										startColumn: 1,
										endLineNumber: se.numLinesToLinkTo,
										endColumn: 1,
									});
									re.openerService.open($e);
								} else re.commandService.executeCommand("vscode.open", pe);
							}
						}),
						oe.style.setProperty("display", "flex"),
						oe.style.setProperty("flex-direction", "row"),
						oe.style.setProperty("align-items", "center"),
						oe.style.setProperty("box-sizing", "border-box"),
						oe.style.setProperty(
							"background-color",
							"var(--vscode-editor-background)",
						),
						oe.style.setProperty("z-index", "303"),
						oe.style.setProperty("width", "100%"),
						oe.style.setProperty("cursor", "pointer"),
						ae.style.setProperty("padding-left", "2px"),
						ae.style.setProperty("margin-right", "-2px"),
						(0, m.insert)(
							ae,
							(0, r.createComponent)(l.$k$b, {
								get fileName() {
									return se.relativeFilePath ?? "";
								},
								get workspaceContextService() {
									return re.workspaceContextService;
								},
								get modelService() {
									return re.modelService;
								},
								get languageService() {
									return re.languageService;
								},
							}),
						),
						(0, m.insert)(oe, () => se.children, null),
						(0, d.effect)(() =>
							le() != null
								? oe.style.setProperty("border-bottom", le())
								: oe.style.removeProperty("border-bottom"),
						),
						oe
					);
				})();
			}
			(e.$v$b = ["bash", "cmd", "powershell"]),
				(e.$w$b = {
					bash: "bash",
					zsh: "bash",
					pwsh: "powershell",
					powershell: "powershell",
					cmd: "cmd",
					"cmd.exe": "cmd",
				});
			const te = { bash: "Bash", cmd: "CMD.exe", powershell: "Powershell" },
				Q = {
					bash: c.$ak.terminalBash,
					cmd: c.$ak.terminalCmd,
					powershell: c.$ak.terminalPowershell,
				},
				Z = (se) =>
					(() => {
						const re = X(),
							le = re.firstChild,
							oe = le.firstChild,
							ae = oe.firstChild;
						return (
							re.style.setProperty("display", "flex"),
							re.style.setProperty("flex-direction", "row"),
							re.style.setProperty("align-items", "center"),
							re.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							re.style.setProperty("box-sizing", "border-box"),
							re.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							re.style.setProperty("z-index", "303"),
							re.style.setProperty("width", "100%"),
							re.style.setProperty("cursor", "pointer"),
							le.style.setProperty("padding-left", "2px"),
							oe.style.setProperty("height", "18px"),
							ae.style.setProperty("height", "100%"),
							(0, m.insert)(re, () => se.children, null),
							(0, d.effect)(() =>
								(0, C.className)(
									ae,
									[
										"monaco-icon-label height-override-important",
										o.ThemeIcon.asClassName(Q[se.language ?? "bash"]),
									].join(" "),
								),
							),
							re
						);
					})();
			e.$x$b = Z;
		},
	),
		