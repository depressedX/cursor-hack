define(
			de[4257],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 1377, 789, 36, 815, 859, 205, 4192,
				135, 696, 4146,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pzc = F),
					(e.$qzc = x);
				const l = (0, t.template)("<p>"),
					y = (0, t.template)("<p><strong>"),
					$ = (0, t.template)(
						'<span class="bugbot-warning-read-less">Read less',
					),
					v = (0, t.template)(
						'<span class="bugbot-view-all-link"> Changes<span>',
					),
					S = (0, t.template)(
						'<button class="bugbot-file-picker-unselect-all">Clear All',
					),
					I = (0, t.template)(
						'<div class="bugbot-modal-dev-section"><div class="bugbot-modal-dev-header">Dev Only Area</div><div class="bugbot-modal-field horizontal"><label>Model</label><div class="model-toggle-container"></div></div><div class="bugbot-modal-field"><label>Diff Context Lines <i>(defaults to <!>)</i></label><input type="number" placeholder="e.g. 10"></div><div class="bugbot-modal-field"><label>Iterations</label><input type="number" placeholder="Enter number of iterations (1-100)"></div><div class="bugbot-modal-field"><label>Approx. Input Tokens</label><div class="token-count">',
					),
					T = (0, t.template)(
						`<div class="bugbot-modal-advanced-content"><div class="bugbot-modal-field"><label>Custom Instructions <i>(optional)</i></label><input type="text" placeholder="e.g. 'focus on performance issues'"></div><div class="bugbot-modal-field"><label>Base Ref <i>(defaults to default branch)</i></label><input type="text" placeholder="e.g. origin/main"></div><div class="bugbot-modal-field"><label class="checkbox-label"><input type="checkbox">Include uncommitted changes`,
					),
					P = (0, t.template)(
						'<div class="bugbot-modal-status-bar"><span class="codicon codicon-loading codicon-modifier-spin"></span><span>',
					),
					k = (0, t.template)(
						'<div class="bugbot-modal-status-bar"><span>No files to analyze',
					),
					L = (0, t.template)(
						'<div class="bugbot-modal-content"><h1 class="bugbot-modal-title">Run Bug Finder</h1><div class="bugbot-modal-warning"><p><strong>\u26A0\uFE0F Experimental Feature (cost can be <i>very high</i> per run)</strong></p></div><div class="bugbot-modal-field"><div class="bugbot-modal-field-header"><label>Git-Tracked Files With Changes to Analyze</label></div><div class="bugbot-file-picker"><input type="text" class="bugbot-file-picker-search" placeholder="Search files..."><div class="bugbot-file-picker-header"><div class="bugbot-file-picker-header-content"><span> files selected</span></div></div><div class="bugbot-file-picker-content"></div></div></div><div class="bugbot-modal-footer"><div class="bugbot-modal-actions">',
					),
					D = (0, t.template)(
						"<div><h2>Expensive Bug Finder Run</h2><p>This bug finder run will cost <b>$</b>. Are you sure you want to proceed?</p><div>",
					),
					M = (0, t.template)(
						'<span class="bugbot-warning-read-more">Read more...',
					),
					N = (0, t.template)("<br>"),
					A = (0, t.template)(
						'<button class="bugbot-file-picker-unselect-all">Select All',
					),
					R = (0, t.template)('<div class="codicon codicon-check">'),
					O = (0, t.template)(
						'<div><div class="bugbot-file-picker-item-content"><span class="bugbot-file-picker-item-title"></span><span class="bugbot-file-picker-item-subtitle">',
					),
					B = (0, t.template)(
						'<div class="bugbot-notification-options-menu"><div class="bugbot-notification-options-item">Disable Background Bug Finding',
					),
					U = (0, t.template)(
						'<div class="bugbot-notification"><div class="bugbot-notification-content"><span class="codicon codicon-bug"></span><span></span><div class="bugbot-notification-actions"><div class="bugbot-notification-options-container">',
					),
					z = (0, t.template)(
						"<div><div><div>Included Changes</div></div><div></div><div><div>Page <!> of ",
					);
				function F() {
					const V = (0, c.$odc)(),
						G = (0, r.createMemo)(
							() =>
								V.reactiveStorageService.applicationUserPersistentStorage
									.bugbotState.preferredModelName,
						),
						K = (nt) => {
							V.reactiveStorageService.setApplicationUserPersistentStorage(
								"bugbotState",
								"preferredModelName",
								nt,
							);
						},
						[J, W] = (0, r.createSignal)(h.$7cc.defaultFallbackIterations),
						[X, Y] = (0, r.createSignal)(""),
						[ie, ne] = (0, r.createSignal)(!1),
						[ee, _] = (0, r.createSignal)(void 0),
						[te, Q] = (0, r.createSignal)(void 0),
						[Z, se] = (0, r.createSignal)(!0),
						[re, le] = (0, r.createSignal)(void 0),
						[oe, ae] = (0, r.createSignal)(void 0),
						[pe, $e] = (0, r.createSignal)(void 0),
						[ye, ue] = (0, r.createSignal)(void 0),
						[fe, me] = (0, r.createSignal)(void 0),
						[ve, ge] = (0, r.createSignal)(void 0),
						[be, Ce] = (0, r.createSignal)(void 0),
						[Le, Fe] = (0, r.createSignal)("Computing changes..."),
						[Oe, xe] = (0, r.createSignal)(void 0),
						[He, Ke] = (0, r.createSignal)(!1),
						[Je, Te] = (0, r.createSignal)(1),
						Ee = 10,
						[Ie, Be] = (0, r.createSignal)(!1),
						Se = () => {
							Ke(!He()), Te(1);
						},
						ke = () => {
							xe(void 0),
								Ce(void 0),
								V.reactiveStorageService.setNonPersistentStorage(
									"isBugBotModalOpen",
									!1,
								),
								ae(void 0),
								Ke(!1),
								Te(1),
								Fe(""),
								Be(!1);
						};
					let Ue, qe;
					const Ae = async () => {
						qe !== void 0 && clearTimeout(qe),
							(qe = V.window.setTimeout(async () => {
								if (Ue !== void 0) return;
								Ue = (async () => {
									try {
										const lt = await V.bugbotService.getGitDiff({
											baseBranch: ee() || void 0,
											includeUncommitted: Z(),
											diffContextLines: te(),
										});
										ae(lt), le(lt);
										const ct =
											await V.bugbotService.computeSuggestedBugBotIterations(
												G(),
												lt,
											);
										W(ct);
									} catch {
									} finally {
										Ue = void 0;
									}
								})();
							}, 400));
					};
					(0, r.onCleanup)(() => {
						qe !== void 0 && clearTimeout(qe);
					});
					const Me = (nt) => {
							(async () => {
								ae(nt);
								const lt =
									await V.bugbotService.computeSuggestedBugBotIterations(
										G(),
										nt,
									);
								W(lt);
							})().catch((lt) => {
								console.error("Error updating filtered diff", lt);
							});
						},
						De = (0, o.$mzc)(() => re(), Me),
						Re = async (nt, lt, ct, gt, ht, Rt, Nt, jt) => {
							const ti = oe();
							if (ti !== void 0 && Nt !== void 0 && jt !== void 0) {
								if (
									jt >
									(V.serverConfigService.cachedServerConfig.bugConfigResponse
										?.bugBotV1?.thresholdForExpensiveRunModalCents ??
										h.$7cc.thresholdForExpensiveRunModalCents) /
										100
								) {
									xe({
										modelName: nt,
										iterations: lt,
										customInstructions: ct,
										baseBranch: gt,
										includeUncommitted: ht,
										priceId: Nt,
										diff: ti,
										unifiedContextLines: Rt,
									}),
										Ce(jt);
									return;
								}
								Ze({
									diff: ti,
									modelName: nt,
									iterations: lt,
									customInstructions: ct,
									baseBranch: gt,
									includeUncommitted: ht,
									priceId: Nt,
									unifiedContextLines: Rt,
								});
							}
						},
						je = (nt) => {
							const lt = nt.target.value;
							W(Math.min(Math.max(Number(lt), h.$4cc), h.$5cc));
						},
						Ve = (nt) => {
							V.reactiveStorageService.nonPersistentStorage.isBugBotModalOpen &&
								nt.key === "Escape" &&
								ke();
						};
					(0, r.createEffect)(() => {
						V.reactiveStorageService.nonPersistentStorage.isBugBotModalOpen &&
							(Ae().catch(console.error),
							V.window.addEventListener("keydown", Ve),
							(0, r.onCleanup)(() => {
								V.window.removeEventListener("keydown", Ve);
							}));
					}),
						(0, r.createEffect)(() => {
							const nt = oe();
							if (nt === void 0) {
								Fe("Computing changes..."), Be(!1);
								return;
							}
							if (nt.diff.diffs.length === 0) {
								Fe(""), Be(!0);
								return;
							}
							Be(!1);
							const lt = G(),
								ct = J();
							Fe("Computing price..."),
								(async () => {
									const gt = await V.bugbotService.computePriceForRun(
											lt,
											nt,
											ct,
										),
										ht = gt.cost / 100;
									ue(gt.priceId), $e(ht);
									const Rt = await V.bugbotService.computePriceForRun(
											V.bugbotService.bugConfig?.cheapModelName ??
												h.$7cc.cheapModelName,
											nt,
											ct,
										),
										Nt = Rt.cost / 100;
									ge(Rt.priceId), me(Nt), Fe("");
								})().catch((gt) => {
									console.error("Error computing price for bugbot run", gt),
										Fe("Error computing price");
								});
						});
					const Ze = async (nt) => {
							ke(),
								K(p.$3zb.preferredModelName),
								Y(""),
								await V.bugbotService.runBugBot({
									unifiedContextLines: nt.unifiedContextLines,
									sizedGitDiff: nt.diff,
									modelName: nt.modelName,
									iterations: nt.iterations,
									customInstructions: nt.customInstructions,
									baseBranch: nt.baseBranch,
									includeUncommitted: nt.includeUncommitted,
									type: { type: "onDemand", priceId: nt.priceId },
								});
						},
						et = () => {
							const nt = Oe();
							nt && Ze(nt);
						},
						[rt, ft] = (0, r.createSignal)(!1),
						bt = (nt) =>
							(0, d.createComponent)(r.Show, {
								get when() {
									return nt.type === "text";
								},
								get fallback() {
									return (() => {
										const lt = y(),
											ct = lt.firstChild;
										return (
											(0, m.insert)(lt, () => nt.before, ct),
											(0, m.insert)(ct, () => nt.highlight),
											(0, m.insert)(lt, () => nt.after, null),
											lt
										);
									})();
								},
								get children() {
									const lt = l();
									return (0, m.insert)(lt, () => nt.content), lt;
								},
							});
					return [
						(0, d.createComponent)(r.Show, {
							get when() {
								return V.reactiveStorageService.nonPersistentStorage
									.bugBotNotificationState?.isOpen;
							},
							get children() {
								return (0, d.createComponent)(x, {});
							},
						}),
						(0, d.createComponent)(r.Show, {
							get when() {
								return V.reactiveStorageService.nonPersistentStorage
									.isBugBotModalOpen;
							},
							get children() {
								return (0, d.createComponent)(n.$fzc, {
									get isOpen() {
										return (
											V.reactiveStorageService.nonPersistentStorage
												.isBugBotModalOpen ?? !1
										);
									},
									onClose: ke,
									get style() {
										return {
											padding: "0px",
											"max-height": "600px",
											width: He() ? "940px" : "400px",
											overflow: "hidden",
											display: "flex",
											"flex-direction": "row",
											gap: "0px",
										};
									},
									get children() {
										return [
											(0, d.createComponent)(f.$w0b, {
												style: { height: "100%", width: "400px" },
												innerContainerStyle: { "min-height": "100%" },
												scrollingDirection: "vertical",
												get children() {
													const nt = L(),
														lt = nt.firstChild,
														ct = lt.nextSibling,
														gt = ct.firstChild,
														ht = ct.nextSibling,
														Rt = ht.firstChild,
														Nt = Rt.firstChild,
														jt = Rt.nextSibling,
														ti = jt.firstChild,
														kt = ti.nextSibling,
														hi = kt.firstChild,
														Kt = hi.firstChild,
														di = Kt.firstChild,
														Ye = kt.nextSibling,
														ze = ht.nextSibling,
														Xe = ze.firstChild;
													return (
														(0, m.insert)(
															ct,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return rt();
																},
																get fallback() {
																	return [
																		(0, d.createComponent)(r.For, {
																			each: h.$0cc,
																			children: (It) => bt(It),
																		}),
																		(() => {
																			const It = M();
																			return (
																				It.addEventListener("click", () =>
																					ft(!0),
																				),
																				It
																			);
																		})(),
																	];
																},
																get children() {
																	return [
																		(0, d.createComponent)(r.For, {
																			each: h.$$cc,
																			children: (It) =>
																				It.type === "text" && It.content === ""
																					? N()
																					: bt(It),
																		}),
																		(() => {
																			const It = $();
																			return (
																				It.addEventListener("click", () =>
																					ft(!1),
																				),
																				It
																			);
																		})(),
																	];
																},
															}),
															null,
														),
														(0, m.insert)(
															Rt,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return (
																		(0, C.memo)(() => !Le())() &&
																		(oe()?.diff.diffs.length ?? 0) > 0
																	);
																},
																get children() {
																	const It = v(),
																		Lt = It.firstChild,
																		xt = Lt.nextSibling;
																	return (
																		It.addEventListener("click", Se),
																		It.style.setProperty("display", "flex"),
																		It.style.setProperty(
																			"align-items",
																			"center",
																		),
																		(0, m.insert)(
																			It,
																			() => (He() ? "Hide" : "View"),
																			Lt,
																		),
																		xt.style.setProperty("margin-left", "4px"),
																		xt.style.setProperty("font-size", "14px"),
																		(0, E.effect)(() =>
																			(0, w.className)(
																				xt,
																				`codicon codicon-chevron-${He() ? "left" : "right"}`,
																			),
																		),
																		It
																	);
																},
															}),
															null,
														),
														ti.addEventListener("input", (It) =>
															De().onSearch(It.currentTarget.value),
														),
														(0, m.insert)(
															Kt,
															() =>
																De().items.filter((It) => It.isAdded).length,
															di,
														),
														(0, m.insert)(
															hi,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return (
																		De().items.filter((It) => It.isAdded)
																			.length > 0
																	);
																},
																get fallback() {
																	return (() => {
																		const It = A();
																		return (
																			It.addEventListener("click", (Lt) => {
																				Lt.stopPropagation(),
																					De().items.forEach((xt) =>
																						De().onItemAdd(xt.item),
																					);
																			}),
																			It
																		);
																	})();
																},
																get children() {
																	const It = S();
																	return (
																		It.addEventListener("click", (Lt) => {
																			Lt.stopPropagation(),
																				De()
																					.items.filter((xt) => xt.isAdded)
																					.forEach((xt) =>
																						De().onItemRemove(xt.item),
																					);
																		}),
																		It
																	);
																},
															}),
															null,
														),
														(0, m.insert)(
															Ye,
															(0, d.createComponent)(f.$w0b, {
																scrollingDirection: "vertical",
																style: { height: "100%" },
																get children() {
																	return (0, d.createComponent)(r.For, {
																		get each() {
																			return De().items;
																		},
																		children: (It) =>
																			(() => {
																				const Lt = O(),
																					xt = Lt.firstChild,
																					Vt = xt.firstChild,
																					Bt = Vt.nextSibling;
																				return (
																					Lt.addEventListener("click", () => {
																						It.isAdded
																							? De().onItemRemove(It.item)
																							: De().onItemAdd(It.item);
																					}),
																					(0, m.insert)(Lt, () => It.icon, xt),
																					(0, m.insert)(Vt, () => It.title),
																					(0, m.insert)(Bt, () => It.subtitle),
																					(0, m.insert)(
																						Lt,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return It.isAdded;
																							},
																							get children() {
																								return R();
																							},
																						}),
																						null,
																					),
																					(0, E.effect)(() =>
																						(0, w.className)(
																							Lt,
																							`bugbot-file-picker-item ${It.isAdded ? "selected" : ""}`,
																						),
																					),
																					Lt
																				);
																			})(),
																	});
																},
															}),
														),
														(0, m.insert)(
															nt,
															(0, d.createComponent)(b.$Zcc, {
																get isOpen() {
																	return ie();
																},
																setIsOpen: ne,
																title: "Advanced Configuration",
																get children() {
																	const It = T(),
																		Lt = It.firstChild,
																		xt = Lt.firstChild,
																		Vt = xt.nextSibling,
																		Bt = Lt.nextSibling,
																		Gt = Bt.firstChild,
																		Mt = Gt.nextSibling,
																		Ut = Bt.nextSibling,
																		ei = Ut.firstChild,
																		mi = ei.firstChild;
																	return (
																		Vt.addEventListener("input", (ii) =>
																			Y(ii.target.value),
																		),
																		Mt.addEventListener("input", (ii) => {
																			_(ii.target.value), ae(void 0), Ae();
																		}),
																		mi.addEventListener("input", (ii) => {
																			se(ii.target.checked), ae(void 0), Ae();
																		}),
																		(0, m.insert)(
																			It,
																			(0, d.createComponent)(r.Show, {
																				get when() {
																					return V.serverConfigService
																						.cachedServerConfig
																						.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers;
																				},
																				get children() {
																					const ii = I(),
																						Dt = ii.firstChild,
																						Jt = Dt.nextSibling,
																						si = Jt.firstChild,
																						Zt = si.nextSibling,
																						ci = Jt.nextSibling,
																						ri = ci.firstChild,
																						$i = ri.firstChild,
																						Wt = $i.nextSibling,
																						tt = Wt.firstChild,
																						at = tt.nextSibling,
																						pi = at.nextSibling,
																						Li = ri.nextSibling,
																						Di = ci.nextSibling,
																						Ui = Di.firstChild,
																						Wi = Ui.nextSibling,
																						Gi = Di.nextSibling,
																						qi = Gi.firstChild,
																						Oi = qi.nextSibling;
																					return (
																						(0, m.insert)(
																							Zt,
																							(0, d.createComponent)(g.$5bc, {
																								get value() {
																									return G();
																								},
																								onSelect: K,
																							}),
																							null,
																						),
																						(0, m.insert)(
																							Zt,
																							(0, d.createComponent)(a.$lzc, {
																								type: "secondary",
																								title:
																									"Switch to Cheap Custom Model",
																								onClick: () =>
																									K(
																										V.bugbotService.bugConfig
																											?.cheapModelName ??
																											h.$7cc.cheapModelName,
																									),
																							}),
																							null,
																						),
																						(0, m.insert)(
																							Wt,
																							() =>
																								h.$7cc.defaultDiffContextLines,
																							at,
																						),
																						Li.addEventListener(
																							"input",
																							(yi) => {
																								Q(Number(yi.target.value)),
																									ae(void 0),
																									Ae();
																							},
																						),
																						Wi.addEventListener("input", je),
																						(0, i.setAttribute)(
																							Wi,
																							"min",
																							h.$4cc,
																						),
																						(0, i.setAttribute)(
																							Wi,
																							"max",
																							h.$5cc,
																						),
																						(0, m.insert)(
																							Oi,
																							(() => {
																								const yi = (0, C.memo)(
																									() => !!oe()?.charLength,
																								);
																								return () =>
																									yi()
																										? Math.floor(
																												oe().charLength / 3.2,
																											).toLocaleString()
																										: 0;
																							})(),
																						),
																						(0, E.effect)(
																							() => (Li.value = te() ?? ""),
																						),
																						(0, E.effect)(
																							() => (Wi.value = J()),
																						),
																						ii
																					);
																				},
																			}),
																			null,
																		),
																		(0, E.effect)(() => (Vt.value = X())),
																		(0, E.effect)(
																			() => (Mt.value = ee() ?? ""),
																		),
																		(0, E.effect)(() => (mi.checked = Z())),
																		It
																	);
																},
															}),
															ze,
														),
														(0, m.insert)(
															ze,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return Le();
																},
																get children() {
																	const It = P(),
																		Lt = It.firstChild,
																		xt = Lt.nextSibling;
																	return (0, m.insert)(xt, Le), It;
																},
															}),
															Xe,
														),
														(0, m.insert)(
															ze,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return Ie();
																},
																get children() {
																	return k();
																},
															}),
															Xe,
														),
														(0, m.insert)(
															Xe,
															(0, d.createComponent)(a.$lzc, {
																type: "secondary",
																title: "Close",
																onClick: () => ke(),
															}),
															null,
														),
														(0, m.insert)(
															Xe,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return (
																		(0, C.memo)(
																			() => fe() !== void 0 && !Le(),
																		)() && !Ie()
																	);
																},
																get children() {
																	return (0, d.createComponent)(a.$lzc, {
																		get codicon() {
																			return u.$ak.run;
																		},
																		type: "true-secondary",
																		get title() {
																			return (0, C.memo)(
																				() =>
																					!!q(
																						oe(),
																						V.bugbotService.bugConfig
																							?.cheapAbsoluteMaxTokens ?? 1 / 0,
																					),
																			)()
																				? "Too many changes for Fast"
																				: `Run Fast (${fe() === 0 ? "Free" : "$" + fe()?.toFixed(2)})`;
																		},
																		get disabled() {
																			return q(
																				oe(),
																				V.bugbotService.bugConfig
																					?.cheapAbsoluteMaxTokens ?? 1 / 0,
																			);
																		},
																		get isNotClickable() {
																			return q(
																				oe(),
																				V.bugbotService.bugConfig
																					?.cheapAbsoluteMaxTokens ?? 1 / 0,
																			);
																		},
																		get style() {
																			return q(
																				oe(),
																				V.bugbotService.bugConfig
																					?.cheapAbsoluteMaxTokens ?? 1 / 0,
																			)
																				? {
																						padding: "2px 6px",
																						"font-size": "10px",
																						opacity: "0.5",
																					}
																				: {};
																		},
																		onClick: () =>
																			Re(
																				V.bugbotService.bugConfig
																					?.cheapModelName ??
																					h.$7cc.cheapModelName,
																				J(),
																				X(),
																				ee(),
																				Z(),
																				te(),
																				ve(),
																				fe(),
																			),
																	});
																},
															}),
															null,
														),
														(0, m.insert)(
															Xe,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return (
																		(0, C.memo)(
																			() => pe() !== void 0 && !Le(),
																		)() && !Ie()
																	);
																},
																get children() {
																	return (0, d.createComponent)(a.$lzc, {
																		class: "bugbot-run-smart",
																		get codicon() {
																			return u.$ak.runAll;
																		},
																		get title() {
																			return (0, C.memo)(
																				() =>
																					!!q(
																						oe(),
																						V.bugbotService.bugConfig
																							?.expensiveAbsoluteMaxTokens ??
																							1 / 0,
																					),
																			)()
																				? "Too many changes for Smart"
																				: `Run Smart ($${pe()?.toFixed(2)})`;
																		},
																		get disabled() {
																			return q(
																				oe(),
																				V.bugbotService.bugConfig
																					?.expensiveAbsoluteMaxTokens ?? 1 / 0,
																			);
																		},
																		get isNotClickable() {
																			return q(
																				oe(),
																				V.bugbotService.bugConfig
																					?.expensiveAbsoluteMaxTokens ?? 1 / 0,
																			);
																		},
																		get style() {
																			return q(
																				oe(),
																				V.bugbotService.bugConfig
																					?.expensiveAbsoluteMaxTokens ?? 1 / 0,
																			)
																				? {
																						padding: "2px 6px",
																						"font-size": "10px",
																						opacity: "0.5",
																					}
																				: {};
																		},
																		onClick: () =>
																			Re(
																				G(),
																				J(),
																				X(),
																				ee(),
																				Z(),
																				te(),
																				ye(),
																				pe(),
																			),
																	});
																},
															}),
															null,
														),
														nt
													);
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return He();
												},
												get children() {
													return (0, d.createComponent)(H, {
														gitDiff: oe,
														onClose: () => Ke(!1),
														currentPage: Je,
														setCurrentPage: Te,
														diffsPerPage: Ee,
													});
												},
											}),
										];
									},
								});
							},
						}),
						(0, d.createComponent)(r.Show, {
							get when() {
								return be() !== void 0;
							},
							get children() {
								return (0, d.createComponent)(n.$fzc, {
									isOpen: !0,
									onClose: () => {
										xe(void 0), Ce(void 0);
									},
									style: { padding: "1rem" },
									get children() {
										const nt = D(),
											lt = nt.firstChild,
											ct = lt.nextSibling,
											gt = ct.firstChild,
											ht = gt.nextSibling,
											Rt = ht.firstChild,
											Nt = ct.nextSibling;
										return (
											nt.style.setProperty("display", "flex"),
											nt.style.setProperty("flex-direction", "column"),
											nt.style.setProperty("gap", "1rem"),
											lt.style.setProperty("font-size", "1rem"),
											lt.style.setProperty("margin", "0"),
											ct.style.setProperty("margin", "0"),
											(0, m.insert)(ht, () => be()?.toFixed(2), null),
											Nt.style.setProperty("display", "flex"),
											Nt.style.setProperty("gap", "0.5rem"),
											Nt.style.setProperty("justify-content", "flex-end"),
											(0, m.insert)(
												Nt,
												(0, d.createComponent)(a.$lzc, {
													type: "secondary",
													title: "Cancel",
													onClick: () => {
														xe(void 0), Ce(void 0);
													},
												}),
												null,
											),
											(0, m.insert)(
												Nt,
												(0, d.createComponent)(a.$lzc, {
													type: "primary",
													get title() {
														return `Proceed (${pe()?.toFixed(2)})`;
													},
													onClick: et,
												}),
												null,
											),
											nt
										);
									},
								});
							},
						}),
					];
				}
				function x() {
					const V = (0, c.$odc)(),
						[G, K] = (0, r.createSignal)(
							"Run Bug Finder on your recent changes",
						),
						[J, W] = (0, r.createSignal)(void 0),
						[X, Y] = (0, r.createSignal)("Run"),
						[ie, ne] = (0, r.createSignal)(!1),
						ee = () => {
							V.reactiveStorageService.setNonPersistentStorage(
								"bugBotNotificationState",
								{
									...V.reactiveStorageService.nonPersistentStorage
										.bugBotNotificationState,
									isOpen: !1,
								},
							);
						},
						_ = () => {
							ee();
							const Q = J();
							Q && Q();
						},
						te = () => {
							confirm(
								"Are you sure you want to disable background bug finding? You can re-enable it in settings later.",
							) &&
								(V.reactiveStorageService.setApplicationUserPersistentStorage(
									"bugbotState",
									"backgroundBugFindingEnabled",
									!1,
								),
								ee());
						};
					return (
						(0, r.onMount)(() => {
							const Q =
								V.reactiveStorageService.nonPersistentStorage
									.bugBotNotificationState;
							Q !== void 0 &&
								(K(Q.message), W(() => Q.onClick), Y(Q.clickMessage));
						}),
						(() => {
							const Q = U(),
								Z = Q.firstChild,
								se = Z.firstChild,
								re = se.nextSibling,
								le = re.nextSibling,
								oe = le.firstChild;
							return (
								(0, m.insert)(re, G),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(a.$lzc, {
										type: "secondary",
										get codicon() {
											return u.$ak.gear;
										},
										onClick: () => ne(!ie()),
									}),
									null,
								),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return ie();
										},
										get children() {
											const ae = B();
											return ae.firstChild.addEventListener("click", te), ae;
										},
									}),
									null,
								),
								(0, m.insert)(
									Z,
									(0, d.createComponent)(a.$lzc, {
										type: "secondary",
										get codicon() {
											return u.$ak.close;
										},
										title: "Dismiss",
										onClick: () => {
											ee(),
												V.reactiveStorageService.setApplicationUserPersistentStorage(
													"bugbotState",
													"bugBotDismissedNotificationLast10Times",
													(ae) => {
														let pe;
														return (
															ae && ae.length >= 15
																? (pe = ae.slice(ae.length - 9))
																: (pe = ae ?? []),
															[...pe, Date.now()]
														);
													},
												);
										},
									}),
									null,
								),
								(0, m.insert)(
									Z,
									(0, d.createComponent)(a.$lzc, {
										get codicon() {
											return u.$ak.run;
										},
										get title() {
											return X();
										},
										onClick: () => {
											_(),
												V.reactiveStorageService.setApplicationUserPersistentStorage(
													"bugbotState",
													"bugBotViewedNotificationLast10Times",
													(ae) => {
														let pe;
														return (
															ae && ae.length >= 15
																? (pe = ae.slice(ae.length - 9))
																: (pe = ae ?? []),
															[...pe, Date.now()]
														);
													},
												);
										},
									}),
									null,
								),
								Q
							);
						})()
					);
				}
				function H(V) {
					const G = (0, f.$y0b)(),
						K = () => {
							const J = V.gitDiff();
							if (J)
								return {
									diffs: J.diff.diffs.slice(
										(V.currentPage() - 1) * V.diffsPerPage,
										V.currentPage() * V.diffsPerPage,
									),
									title: `Changes - Page ${V.currentPage()}`,
								};
						};
					return (() => {
						const J = z(),
							W = J.firstChild,
							X = W.firstChild,
							Y = W.nextSibling,
							ie = Y.nextSibling,
							ne = ie.firstChild,
							ee = ne.firstChild,
							_ = ee.nextSibling,
							te = _.nextSibling;
						return (
							J.style.setProperty("display", "flex"),
							J.style.setProperty("flex-direction", "column"),
							J.style.setProperty("height", "100%"),
							J.style.setProperty("flex", "1"),
							J.style.setProperty("min-width", "0px"),
							J.style.setProperty(
								"border-left",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							W.style.setProperty("display", "flex"),
							W.style.setProperty("justify-content", "space-between"),
							W.style.setProperty("align-items", "center"),
							W.style.setProperty("padding", "4px 8px"),
							W.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							X.style.setProperty("font-size", "12px"),
							X.style.setProperty("margin", "0"),
							(0, m.insert)(
								W,
								(0, d.createComponent)(a.$lzc, {
									type: "secondary",
									title: "Collapse",
									get onClick() {
										return V.onClose;
									},
								}),
								null,
							),
							Y.style.setProperty("flex", "1"),
							Y.style.setProperty("min-height", "0px"),
							Y.style.setProperty("overflow", "hidden"),
							(0, m.insert)(
								Y,
								(0, d.createComponent)(r.Show, {
									get when() {
										return K();
									},
									get children() {
										return (0, d.createComponent)(s.$ozc, {
											get diff() {
												return K();
											},
										});
									},
								}),
							),
							ie.style.setProperty("display", "flex"),
							ie.style.setProperty("justify-content", "space-between"),
							ie.style.setProperty("align-items", "center"),
							ie.style.setProperty(
								"border-top",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							ie.style.setProperty("padding", "6px 8px"),
							(0, m.insert)(
								ie,
								(0, d.createComponent)(a.$lzc, {
									type: "secondary",
									get codicon() {
										return u.$ak.chevronLeft;
									},
									onClick: () => {
										V.setCurrentPage(Math.max(1, V.currentPage() - 1)),
											G.setScrollPositionNow({ scrollTop: 0 });
									},
									get disabled() {
										return V.currentPage() === 1;
									},
								}),
								ne,
							),
							ne.style.setProperty("font-size", "12px"),
							ne.style.setProperty("margin", "0"),
							(0, m.insert)(ne, () => V.currentPage(), _),
							(0, m.insert)(
								ne,
								() =>
									Math.ceil(
										(V.gitDiff()?.diff.diffs.length || 0) / V.diffsPerPage,
									),
								null,
							),
							(0, m.insert)(
								ie,
								(0, d.createComponent)(a.$lzc, {
									type: "secondary",
									get codicon() {
										return u.$ak.chevronRight;
									},
									onClick: () => {
										V.setCurrentPage(
											Math.min(
												Math.ceil(
													(V.gitDiff()?.diff.diffs.length || 0) /
														V.diffsPerPage,
												),
												V.currentPage() + 1,
											),
										),
											G.setScrollPositionNow({ scrollTop: 0 });
									},
									get disabled() {
										return (
											V.currentPage() ===
											Math.ceil(
												(V.gitDiff()?.diff.diffs.length || 0) / V.diffsPerPage,
											)
										);
									},
								}),
								null,
							),
							J
						);
					})();
				}
				function q(V, G) {
					return V ? Math.floor(V.charLength / 3.2) > G : !1;
				}
			},
		),
		