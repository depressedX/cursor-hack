define(de[1377], he([1, 0, 2, 2, 147]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$lzc = void 0);
			const E = (C) =>
				(0, t.createComponent)(
					w.$rdc,
					(0, i.mergeProps)(C, {
						get style() {
							return { padding: "2px 6px", "font-size": "11px", ...C.style };
						},
						get tabFocusable() {
							return C.tabFocusable;
						},
					}),
				);
			e.$lzc = E;
		}),
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
		define(
			de[4258],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 338, 4182, 135, 1377, 14, 36, 422,
				160, 1269, 815, 862, 26, 156, 54, 2386,
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
					(e.$2zc = void 0);
				const S = (0, t.template)("<span>Custom Instructions: "),
					I = (0, t.template)(
						'<span class="bugbot-uncommitted-changes">(including working tree changes)',
					),
					T = (0, t.template)(
						'<div class="bugbot-commit-info"><span class="bugbot-commit-info-header">Comparing branches: <!> &lt;-> </span><span>Commit: <!> - </span><span>Author: </span><span>Date: ',
					),
					P = (0, t.template)(
						'<span class="bugbot-background-badge"><span class="codicon codicon-eye"></span>This report was generated in the background at no cost to you. We will occasionally run background analysis for a subset of users to help improve this feature.',
					),
					k = (0, t.template)('<span class="bugbot-model-name">'),
					L = (0, t.template)(
						'<span class="bugbot-iterations">\u2022 <!> iterations',
					),
					D = (0, t.template)(
						'<div class="bugbot-generation-info"><span></span><span class="bugbot-id">',
					),
					M = (0, t.template)(
						'<div class="bugbot-modal-warning"><p><strong>\u26A0\uFE0F Do not reload the window or quit the app</strong></p><p>Bug Finder is still analyzing your code. Reloading or quitting the editor will interrupt the analysis and any detected bugs will be lost. You may safely close this tab (you can re-open it later from the Bug Finder sidebar).',
					),
					N = (0, t.template)(
						'<div class="bugbot-status-footer"><div class="bugbot-status-header"><span class="bugbot-loading-icon codicon codicon-loadin"></span><div class="bugbot-status-text">',
					),
					A = (0, t.template)('<div class="bugbot-status-footer">'),
					R = (0, t.template)(
						'<div class="bugbot-stats-wrapper"><div class="bugbot-stats"><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>input tokens</span></div><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>output tokens</span></div><div class="bugbot-stat total"><span class="bugbot-stat-value"></span><span>total tokens</span></div></div><div class="bugbot-stats"><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>input cost</span></div><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>output cost</span></div><div class="bugbot-stat total"><span class="bugbot-stat-value"></span><span>total cost',
					),
					O = (0, t.template)(
						'<div class="bugbot-editor-wrapper"><div class="bugbot-editor-header"><div class="bugbot-editor-title"><h2>Bug Report</h2><div class="bugbot-actions"></div></div><div class="bugbot-metadata"><div class="bugbot-metadata-container"><div><span>Generated </span></div></div></div></div><div class="bugbot-editor-content">',
					),
					B = (0, t.template)(
						"<div><h2>Delete Bug Report</h2><p>Are you sure you want to delete this bug finder report? This action cannot be undone.</p><div>",
					),
					U = (0, t.template)('<div class="bugbot-editor">'),
					z = (0, t.template)(
						'<div class="bugbot-no-reports"><span>No bugs were found in the analyzed code.',
					),
					F = (0, t.template)("<span>"),
					x = (0, t.template)(
						'<div><div class="bugbot-bug-header"><div class="bugbot-bug-header-left"><span>Bug </span><div class="bugbot-file-pills"></div></div><div><div class="bugbot-confidence-group"><span class="bugbot-confidence-value">% confidence</span><div class="bugbot-confidence-bar"><div class="bugbot-confidence-fill"></div></div></div></div></div><div class="bugbot-bug-report-content"><div class="bugbot-actions-group"><div></div></div><div class="bugbot-bug-report-text">',
					),
					H = (0, t.template)('<span class="bugbot-file-pill">'),
					q = (0, t.template)('<div class="bugbot-bug-location">'),
					V = (ie) => (ie ? `$${ie.toFixed(2)}` : "-"),
					G = "bugbot-bug-report",
					K = "bugbot-bug-report-text",
					J = "data-bug-report-id",
					W = (ie) => (ie ? ie.toLocaleString() : "-"),
					X = 5e3,
					Y = (ie) => {
						const ne = (0, p.$odc)(),
							{
								composerService: ee,
								workspaceContextService: _,
								bugbotService: te,
							} = ne,
							[Q, Z] = (0, u.createSignal)(!1),
							{ showHover: se, hideHover: re } = (0, o.$z$b)(300),
							le = (0, u.createMemo)(
								() =>
									ne.reactiveStorageService.applicationUserPersistentStorage
										.composerState.unification,
							);
						(0, u.createEffect)(() => {
							(ie.bugbot.status.type === "errored" ||
								ie.bugbot.status.type === "completed") &&
								ne.bugbotDataService.updateBugBotData(ie.bugbot.bugbotId, {
									isUnread: !1,
								});
						});
						const oe = (me) =>
								me < 0.25 ? "low" : me < 0.6 ? "medium" : "high",
							ae = () => {
								Z(!0);
							},
							pe = async () => {
								try {
									ne.bugbotDataService.deleteBugBot(ie.bugbot.bugbotId),
										Z(!1),
										ie.onClose?.();
								} catch (me) {
									console.error("Error deleting bug finder report:", me);
								}
							};
						(0, u.createEffect)(() => {});
						const $e = () => {
								const me = ie.bugbot.usage?.processedCost || 0,
									ve = ie.bugbot.usage?.thinkingCost || 0;
								return V(me + ve);
							},
							ye = (0, u.createMemo)(() =>
								[...(ie.bugbot.bugReports?.bugReports || [])].sort(
									(me, ve) => (ve.confidence || 0) - (me.confidence || 0),
								),
							),
							ue = (me) => {
								Q() &&
									(me.key === "Enter" ? pe() : me.key === "Escape" && Z(!1));
							};
						(0, u.createEffect)(() => {
							Q() &&
								(ne.window.addEventListener("keydown", ue),
								(0, u.onCleanup)(() => {
									ne.window.removeEventListener("keydown", ue);
								}));
						});
						let fe;
						return (
							(0, u.onMount)(() => {
								const me = ne.window.setInterval(() => {
									const ve = ne.window.document.querySelectorAll(`.${G}`),
										ge = ne.window.document.querySelector(
											".part.panel.basepanel.bottom",
										),
										be = fe?.getBoundingClientRect(),
										Ce = be?.bottom ?? ne.window.innerHeight,
										Le = be?.top ?? 0,
										Fe = ge?.getBoundingClientRect().top ?? 0,
										Oe = Fe > 10 ? Math.min(Fe, Ce) : Ce,
										xe = Fe > 10 ? Math.min(Fe, Le) : Le;
									function He(Je) {
										const Te = Je.height;
										if (Te <= 0) return 0;
										const Ee = Math.max(xe, Je.top),
											Ie = Math.min(Oe, Je.bottom),
											Be = Math.max(0, Ie - Ee);
										return Math.min((Be / Te) * 100, 100);
									}
									const Ke = [];
									ve.forEach((Je) => {
										const Te = Je.getBoundingClientRect(),
											Ee = Je.getAttribute(J);
										if (!Ee || ie.bugbot.resolvedBugs[Ee]) return;
										const Ie = He(Te),
											Se = Je.querySelector(`.${K}`)?.getBoundingClientRect(),
											ke = Se ? He(Se) : 0;
										Ke.push([Ee, { fullPercentage: Ie, textPercentage: ke }]);
									}),
										Ke.length > 0 &&
											te.reportViewSideEffects(ie.bugbot.bugbotId, X / 1e3, Ke);
								}, X);
								(0, u.onCleanup)(() => {
									ne.window.clearInterval(me), te.flushTelemetry();
								});
							}),
							(() => {
								const me = U(),
									ve = fe;
								return (
									typeof ve == "function" ? (0, r.use)(ve, me) : (fe = me),
									(0, d.insert)(
										me,
										(0, m.createComponent)(c.$w0b, {
											style: { height: "100%" },
											scrollingDirection: "vertical",
											get children() {
												const ge = O(),
													be = ge.firstChild,
													Ce = be.firstChild,
													Le = Ce.firstChild,
													Fe = Le.nextSibling,
													Oe = Ce.nextSibling,
													xe = Oe.firstChild,
													He = xe.firstChild,
													Ke = He.firstChild,
													Je = Ke.firstChild,
													Te = be.nextSibling;
												return (
													(0, d.insert)(
														Fe,
														(0, m.createComponent)(n.$lzc, {
															onMouseEnter: (Ee) =>
																se({
																	target: Ee.target,
																	content: "Delete Bug Report",
																	position: {
																		hoverPosition: f.HoverPosition.BELOW,
																	},
																}),
															onMouseLeave: re,
															type: "secondary",
															get codicon() {
																return g.$ak.trash;
															},
															onClick: ae,
														}),
													),
													He.style.setProperty("display", "flex"),
													He.style.setProperty("flex-direction", "column"),
													He.style.setProperty("gap", "4px"),
													(0, d.insert)(
														Ke,
														() =>
															new Date(ie.bugbot.createdAt).toLocaleString(),
														null,
													),
													(0, d.insert)(
														He,
														(0, m.createComponent)(u.Show, {
															get when() {
																return (
																	ie.bugbot.customInstructions &&
																	ie.bugbot.customInstructions.length > 0
																);
															},
															get children() {
																const Ee = S(),
																	Ie = Ee.firstChild;
																return (
																	(0, d.insert)(
																		Ee,
																		() => ie.bugbot.customInstructions,
																		null,
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														He,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.branch && ie.bugbot.commit;
															},
															get children() {
																const Ee = T(),
																	Ie = Ee.firstChild,
																	Be = Ie.firstChild,
																	Se = Be.nextSibling,
																	ke = Se.nextSibling,
																	Ue = Ie.nextSibling,
																	qe = Ue.firstChild,
																	Ae = qe.nextSibling,
																	Me = Ae.nextSibling,
																	De = Ue.nextSibling,
																	Re = De.firstChild,
																	je = De.nextSibling,
																	Ve = je.firstChild;
																return (
																	(0, d.insert)(
																		Ie,
																		() => ie.bugbot.baseBranch,
																		Se,
																	),
																	(0, d.insert)(
																		Ie,
																		() => ie.bugbot.branch,
																		null,
																	),
																	(0, d.insert)(
																		Ie,
																		(0, m.createComponent)(u.Show, {
																			get when() {
																				return ie.bugbot.includeUncommitted;
																			},
																			get children() {
																				return I();
																			},
																		}),
																		null,
																	),
																	(0, d.insert)(
																		Ue,
																		() => ie.bugbot.commit?.sha.slice(0, 7),
																		Ae,
																	),
																	(0, d.insert)(
																		Ue,
																		() => ie.bugbot.commit?.message,
																		null,
																	),
																	(0, d.insert)(
																		De,
																		() => ie.bugbot.commit?.author,
																		null,
																	),
																	(0, d.insert)(
																		je,
																		() =>
																			new Date(
																				ie.bugbot.commit?.date || "",
																			).toLocaleString(),
																		null,
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														xe,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.isBackground;
															},
															get children() {
																return P();
															},
														}),
														null,
													),
													(0, d.insert)(
														Oe,
														(0, m.createComponent)(u.Show, {
															get when() {
																return (
																	ie.bugbot.generationInfo &&
																	ne.serverConfigService.cachedServerConfig
																		.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers
																);
															},
															get children() {
																const Ee = D(),
																	Ie = Ee.firstChild,
																	Be = Ie.nextSibling;
																return (
																	(0, d.insert)(
																		Ie,
																		(0, m.createComponent)(u.Show, {
																			get when() {
																				return ie.bugbot.generationInfo
																					?.modelNameUsed;
																			},
																			get children() {
																				const Se = k();
																				return (
																					(0, d.insert)(
																						Se,
																						() =>
																							ie.bugbot.generationInfo
																								?.modelNameUsed,
																					),
																					Se
																				);
																			},
																		}),
																		null,
																	),
																	(0, d.insert)(
																		Ie,
																		(0, m.createComponent)(u.Show, {
																			get when() {
																				return ie.bugbot.generationInfo
																					?.iterations;
																			},
																			get children() {
																				const Se = L(),
																					ke = Se.firstChild,
																					Ue = ke.nextSibling,
																					qe = Ue.nextSibling;
																				return (
																					(0, d.insert)(
																						Se,
																						() =>
																							ie.bugbot.generationInfo
																								?.iterations,
																						Ue,
																					),
																					Se
																				);
																			},
																		}),
																		null,
																	),
																	(0, d.insert)(Be, () => ie.bugbot.bugbotId),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.status.type === "generating";
															},
															get children() {
																return M();
															},
														}),
														Te,
													),
													(0, d.insert)(
														Te,
														(0, m.createComponent)(u.For, {
															get each() {
																return ye();
															},
															get fallback() {
																return (0, m.createComponent)(u.Show, {
																	get when() {
																		return (
																			ie.bugbot.status.type === "completed"
																		);
																	},
																	get children() {
																		return z();
																	},
																});
															},
															children: (Ee, Ie) => {
																const Be = (0, u.createMemo)(
																		() => ie.bugbot.resolvedBugs[Ee.id],
																	),
																	[Se, ke] = (0, u.createSignal)(0);
																(0, u.createEffect)(() => {
																	Be() || ke((De) => De + 1);
																});
																const Ue = (0, u.createMemo)(
																		() =>
																			ie.bugbot.bugFeedback[Ee.id] === "good",
																	),
																	qe = (0, u.createMemo)(
																		() =>
																			ie.bugbot.bugFeedback[Ee.id] === "bad",
																	),
																	Ae = (De) => {
																		te.userFeedbackSideEffects(
																			ie.bugbot.bugbotId,
																			Ee.id,
																			De,
																		);
																	},
																	Me = (De) => {
																		if (
																			(De === "good" && Ue()) ||
																			(De === "bad" && qe())
																		) {
																			ne.bugbotDataService.updateBugBotData(
																				ie.bugbot.bugbotId,
																				{
																					bugFeedback: {
																						...ie.bugbot.bugFeedback,
																						[Ee.id]: void 0,
																					},
																				},
																			),
																				Ae(void 0);
																			return;
																		}
																		if (
																			(ne.bugbotDataService.updateBugBotData(
																				ie.bugbot.bugbotId,
																				{
																					resolvedBugs: {
																						...ie.bugbot.resolvedBugs,
																						[Ee.id]: !Be(),
																					},
																				},
																			),
																			De === "good" || De === "bad")
																		) {
																			ne.bugbotDataService.updateBugBotData(
																				ie.bugbot.bugbotId,
																				{
																					bugFeedback: {
																						...ie.bugbot.bugFeedback,
																						[Ee.id]: De,
																					},
																				},
																			),
																				Ae(De);
																			const Re = ye()[Ie() + 1];
																			Re &&
																				ie.bugbot.resolvedBugs[Re.id] &&
																				!ie.bugbot.bugFeedback[Re.id] &&
																				ne.bugbotDataService.updateBugBotData(
																					ie.bugbot.bugbotId,
																					{
																						resolvedBugs: {
																							...ie.bugbot.resolvedBugs,
																							[Re.id]: !1,
																						},
																					},
																				);
																		}
																	};
																return (() => {
																	const De = x(),
																		Re = De.firstChild,
																		je = Re.firstChild,
																		Ve = je.firstChild,
																		Ze = Ve.firstChild,
																		et = Ve.nextSibling,
																		rt = je.nextSibling,
																		ft = rt.firstChild,
																		bt = ft.firstChild,
																		nt = bt.firstChild,
																		lt = bt.nextSibling,
																		ct = lt.firstChild,
																		gt = Re.nextSibling,
																		ht = gt.firstChild,
																		Rt = ht.firstChild,
																		Nt = ht.nextSibling;
																	return (
																		(0, E.spread)(
																			De,
																			(0, C.mergeProps)(
																				{
																					get class() {
																						return `${G} ${Be() ? "resolved" : ""}`;
																					},
																					get style() {
																						return {
																							"padding-bottom": Be()
																								? "12px"
																								: "18px",
																							"padding-top": "12px",
																						};
																					},
																				},
																				() => ({ [J]: Ee.id }),
																			),
																			!1,
																			!0,
																		),
																		Re.addEventListener("click", (jt) => {
																			jt.target === jt.currentTarget && Me();
																		}),
																		je.addEventListener("click", (jt) => {
																			Me();
																		}),
																		(0, d.insert)(
																			je,
																			(0, m.createComponent)(n.$lzc, {
																				get class() {
																					return `bugbot-resolve-button ${Be() ? "resolved" : ""}`;
																				},
																				codiconStyle: { "font-size": "14px" },
																				get codicon() {
																					return g.$ak.chevronDown;
																				},
																				type: "secondary",
																			}),
																			Ve,
																		),
																		(0, d.insert)(Ve, () => Ie() + 1, null),
																		(0, d.insert)(
																			je,
																			(0, m.createComponent)(u.Show, {
																				get when() {
																					return Ue();
																				},
																				get children() {
																					const jt = F();
																					return (
																						(0, w.effect)(() =>
																							(0, i.className)(
																								jt,
																								`${y.ThemeIcon.asClassName(g.$ak.passFilled)} bugbot-feedback-icon good`,
																							),
																						),
																						jt
																					);
																				},
																			}),
																			et,
																		),
																		(0, d.insert)(
																			je,
																			(0, m.createComponent)(u.Show, {
																				get when() {
																					return qe();
																				},
																				get children() {
																					const jt = F();
																					return (
																						(0, w.effect)(() =>
																							(0, i.className)(
																								jt,
																								`${y.ThemeIcon.asClassName(g.$ak.error)} bugbot-feedback-icon bad`,
																							),
																						),
																						jt
																					);
																				},
																			}),
																			et,
																		),
																		(0, d.insert)(
																			et,
																			(0, m.createComponent)(u.For, {
																				get each() {
																					return [
																						...new Set(
																							Ee.locations.map((jt) =>
																								(0, v.$sc)(jt.file),
																							),
																						),
																					];
																				},
																				children: (jt) =>
																					(() => {
																						const ti = H();
																						return (
																							(0, d.insert)(
																								ti,
																								(0, m.createComponent)($.$k$b, {
																									fileName: jt,
																									get workspaceContextService() {
																										return ne.workspaceContextService;
																									},
																									get modelService() {
																										return ne.modelService;
																									},
																									get languageService() {
																										return ne.languageService;
																									},
																								}),
																								null,
																							),
																							(0, d.insert)(ti, jt, null),
																							ti
																						);
																					})(),
																			}),
																		),
																		rt.addEventListener("click", (jt) => {
																			jt.stopPropagation();
																		}),
																		(0, d.insert)(
																			bt,
																			() =>
																				Math.round((Ee.confidence || 0) * 100),
																			nt,
																		),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.arrowRight;
																				},
																				title: "Fix in Composer",
																				onClick: () => {
																					te.fixInComposerSideEffects(
																						ie.bugbot.bugbotId,
																						Ee.id,
																					),
																						ee.fixBugReport(
																							Ee,
																							Object.fromEntries(
																								Object.entries(
																									ie.bugbot.fileSnapshots,
																								).map(([jt, ti]) => [
																									jt,
																									(0, b.$Pyc)(ti),
																								]),
																							),
																							Object.fromEntries(
																								Object.entries(
																									ie.bugbot
																										.fileSnapshotsPreDiff,
																								).map(([jt, ti]) => [
																									jt,
																									(0, b.$Pyc)(ti),
																								]),
																							),
																						);
																				},
																			}),
																			Rt,
																		),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.plus;
																				},
																				get title() {
																					return le()
																						? "Add to Composer"
																						: "Add to Chat";
																				},
																				type: "secondary",
																				onClick: async () => {
																					const jt = le()
																						? ne.composerDataService
																								.selectedComposerId
																						: ne.composerDataService
																								.selectedChatId;
																					await ne.composerViewsService.showAndFocus(
																						jt,
																					),
																						te.addToChatSideEffects(
																							ie.bugbot.bugbotId,
																							Ee.id,
																						);
																					const ti =
																							ne.chatDataService.chatData
																								.selectedTabId ??
																							ne.chatDataService.chatData
																								.tabs[0].tabId,
																						kt =
																							ne.chatDataService.chatData.tabs.find(
																								(Xe) => Xe.tabId === ti,
																							),
																						hi =
																							kt.bubbles[kt.bubbles.length - 1]
																								.id,
																						Kt = new Set(),
																						di = await (0, b.$Qyc)({
																							report: Ee,
																							fileSnapshots:
																								ie.bugbot.fileSnapshots,
																							fileSnapshotsPreDiff:
																								ie.bugbot.fileSnapshotsPreDiff,
																							workspaceContextService:
																								ne.workspaceContextService,
																							modelService: ne.modelService,
																							editorWorkerService:
																								ne.editorWorkerService,
																						});
																					di &&
																						ne.composerService.addContext({
																							composerId: jt,
																							contextType: "selections",
																							value: di,
																							shouldShowPreview: !1,
																						});
																					const Ye = new Set();
																					for (const Xe of Ee.locations) {
																						const It =
																							ne.workspaceContextService.resolveRelativePath(
																								Xe.file,
																							);
																						Kt.add(It), Ye.add(Xe.file);
																						const Lt =
																							ie.bugbot.fileSnapshots[Xe.file];
																						if (!Lt) continue;
																						const xt = (0, b.$Pyc)(Lt);
																						if (!xt) continue;
																						const Vt = (0, b.$Ryc)(
																							Xe,
																							xt,
																							ne.workspaceContextService,
																							ne.languageService,
																						);
																						Vt &&
																							ne.composerService.addContext({
																								composerId: jt,
																								contextType: "selections",
																								value: Vt,
																								shouldShowPreview: !1,
																							});
																					}
																					for (const Xe of Kt)
																						ne.composerService.addContext({
																							composerId: jt,
																							contextType: "fileSelections",
																							value: { uri: Xe },
																							shouldShowPreview: !1,
																						});
																					const ze = (0, b.$Syc)({
																						report: Ee,
																						workspaceContextService:
																							ne.workspaceContextService,
																						fileLocations: Array.from(Ye),
																					});
																					ze &&
																						ne.composerService.addContext({
																							composerId: jt,
																							contextType: "selections",
																							value: ze,
																							shouldShowPreview: !0,
																						}),
																						await ne.aiChatService.show();
																				},
																			}),
																			Rt,
																		),
																		Rt.style.setProperty("flex-grow", "1"),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.circleSlash;
																				},
																				title: "Unhelpful",
																				type: "secondary",
																				onClick: () => {
																					Me("bad");
																				},
																			}),
																			null,
																		),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.thumbsup;
																				},
																				title: "Good Find",
																				type: "secondary",
																				onClick: () => {
																					Me("good");
																				},
																			}),
																			null,
																		),
																		(0, d.insert)(
																			Nt,
																			(0, m.createComponent)(a.$4$b, {
																				get rawText() {
																					return Ee.description;
																				},
																				finished: !0,
																				get codeBlockProps() {
																					return { shouldRecompute: Se() };
																				},
																			}),
																		),
																		(0, d.insert)(
																			De,
																			(0, m.createComponent)(u.For, {
																				get each() {
																					return Ee.locations;
																				},
																				children: (jt) => {
																					const ti =
																							ie.bugbot.fileSnapshots[jt.file],
																						kt =
																							ie.bugbot.fileSnapshotsPreDiff[
																								jt.file
																							];
																					return (() => {
																						const hi = q();
																						return (
																							(0, d.insert)(
																								hi,
																								(0, m.createComponent)(h.$1zc, {
																									get bugbotId() {
																										return ie.bugbot.bugbotId;
																									},
																									location: jt,
																									report: Ee,
																									get delegate() {
																										return ie.delegate;
																									},
																									fileSnapshot: ti,
																									fileSnapshotPreDiff: kt,
																								}),
																							),
																							hi
																						);
																					})();
																				},
																			}),
																			null,
																		),
																		(0, w.effect)(
																			(jt) => {
																				const ti = `bugbot-bug-confidence bugbot-confidence-${oe(Ee.confidence || 0)}`,
																					kt = `${(Ee.confidence || 0) * 100}%`;
																				return (
																					ti !== jt._v$ &&
																						(0, i.className)(rt, (jt._v$ = ti)),
																					kt !== jt._v$2 &&
																						((jt._v$2 = kt) != null
																							? ct.style.setProperty(
																									"width",
																									kt,
																								)
																							: ct.style.removeProperty(
																									"width",
																								)),
																					jt
																				);
																			},
																			{ _v$: void 0, _v$2: void 0 },
																		),
																		De
																	);
																})();
															},
														}),
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.status.type === "generating";
															},
															get children() {
																const Ee = N(),
																	Ie = Ee.firstChild,
																	Be = Ie.firstChild,
																	Se = Be.nextSibling;
																return (
																	(0, d.insert)(
																		Se,
																		() =>
																			ie.bugbot.status.message ||
																			"Analyzing code...",
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.status.type === "errored";
															},
															get children() {
																const Ee = A();
																return (
																	(0, d.insert)(
																		Ee,
																		(0, m.createComponent)(l.$0ac, {
																			get generationUUID() {
																				return ie.bugbot.bugbotId;
																			},
																			get error() {
																				return ie.bugbot.status.errorDetails;
																			},
																			get message() {
																				return ie.bugbot.status.message;
																			},
																			rerun: void 0,
																			extraDetail:
																				"(Don't worry, you did not get charged.)",
																		}),
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return (
																	ie.bugbot.status.type === "completed" &&
																	ie.bugbot.usage &&
																	ne.serverConfigService.cachedServerConfig
																		.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers
																);
															},
															get children() {
																const Ee = R(),
																	Ie = Ee.firstChild,
																	Be = Ie.firstChild,
																	Se = Be.firstChild,
																	ke = Be.nextSibling,
																	Ue = ke.firstChild,
																	qe = ke.nextSibling,
																	Ae = qe.firstChild,
																	Me = Ie.nextSibling,
																	De = Me.firstChild,
																	Re = De.firstChild,
																	je = De.nextSibling,
																	Ve = je.firstChild,
																	Ze = je.nextSibling,
																	et = Ze.firstChild;
																return (
																	(0, d.insert)(Se, () =>
																		W(ie.bugbot.usage?.processedTokens),
																	),
																	(0, d.insert)(Ue, () =>
																		W(ie.bugbot.usage?.thinkingTokens),
																	),
																	(0, d.insert)(Ae, () =>
																		W(
																			(ie.bugbot.usage?.processedTokens || 0) +
																				(ie.bugbot.usage?.thinkingTokens || 0),
																		),
																	),
																	(0, d.insert)(Re, () =>
																		V(ie.bugbot.usage?.processedCost),
																	),
																	(0, d.insert)(Ve, () =>
																		V(ie.bugbot.usage?.thinkingCost),
																	),
																	(0, d.insert)(et, $e),
																	Ee
																);
															},
														}),
														null,
													),
													ge
												);
											},
										}),
										null,
									),
									(0, d.insert)(
										me,
										(0, m.createComponent)(u.Show, {
											get when() {
												return Q();
											},
											get children() {
												return (0, m.createComponent)(s.$fzc, {
													isOpen: !0,
													onClose: () => Z(!1),
													style: { padding: "1rem" },
													get children() {
														const ge = B(),
															be = ge.firstChild,
															Ce = be.nextSibling,
															Le = Ce.nextSibling;
														return (
															ge.style.setProperty("display", "flex"),
															ge.style.setProperty("flex-direction", "column"),
															ge.style.setProperty("gap", "1rem"),
															be.style.setProperty("font-size", "1rem"),
															be.style.setProperty("margin", "0"),
															Ce.style.setProperty("margin", "0"),
															Le.style.setProperty("display", "flex"),
															Le.style.setProperty("gap", "0.5rem"),
															Le.style.setProperty(
																"justify-content",
																"flex-end",
															),
															(0, d.insert)(
																Le,
																(0, m.createComponent)(n.$lzc, {
																	type: "secondary",
																	title: "Cancel",
																	onClick: () => Z(!1),
																}),
																null,
															),
															(0, d.insert)(
																Le,
																(0, m.createComponent)(n.$lzc, {
																	type: "danger",
																	title: "Delete",
																	onClick: pe,
																}),
																null,
															),
															ge
														);
													},
												});
											},
										}),
										null,
									),
									me
								);
							})()
						);
					};
				e.$2zc = Y;
			},
		),
		define(
			de[4259],
			he([
				1, 0, 2, 2, 2, 2, 2, 13, 36, 135, 1377, 14, 3003, 815, 564, 693, 2387,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rzc = void 0);
				const p = (0, t.template)(
						'<div><div><div><span class="codicon codicon-bug"></span><span>Bug Finder</span></div><div>',
					),
					o = (0, t.template)(
						"<div><h2>Delete All Bug Reports</h2><p>Are you sure you want to delete all bug finder reports? This action cannot be undone.</p><div>",
					),
					f = (0, t.template)("<div>"),
					b = (0, t.template)(
						'<div>No existing bug finder runs. <a class="bugbot-run-new">Run New',
					),
					s = (0, t.template)("<div> @ "),
					l = (0, t.template)(
						'<div class="bugbot-instance-content"><div class="bugbot-summary"></div><div class="bugbot-generation-info">',
					),
					y = (0, t.template)(
						'<div class="bugbot-instance"><div class="bugbot-instance-header"><div><div class="bugbot-instance-date">',
					),
					$ = () => {
						const v = (0, m.$odc)(),
							{ bugbotService: S, bugbotDataService: I } = v,
							[T, P] = (0, d.createSignal)(!1),
							k = async () => {
								v.reactiveStorageService.setNonPersistentStorage(
									"isBugBotModalOpen",
									!0,
								);
							},
							L = async (U) => {
								try {
									await S.openBugBotReport(U);
								} catch (z) {
									console.error("Error opening bug finder report:", z);
								}
							},
							D = (U) =>
								U.bugReports?.bugReports?.length
									? `${U.bugReports.bugReports.length} potential ${U.bugReports.bugReports.length === 1 ? "issue" : "issues"} found`
									: "No bugs found",
							M = (U) =>
								U.generationInfo &&
								U.generationInfo.modelNameUsed !== void 0 &&
								U.generationInfo.iterations !== void 0 &&
								v.serverConfigService.cachedServerConfig
									.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers
									? `${U.generationInfo.modelNameUsed} \u2022 ${U.generationInfo.iterations} iterations`
									: "",
							N = () => {
								P(!0);
							},
							A = async () => {
								try {
									I.deleteAllBugBots(), P(!1);
								} catch (U) {
									console.error("Error deleting all bug finder reports:", U);
								}
							},
							R = (U) => {
								T() && (U.key === "Enter" ? A() : U.key === "Escape" && P(!1));
							};
						(0, d.createEffect)(() => {
							T() &&
								(v.window.addEventListener("keydown", R),
								(0, d.onCleanup)(() => {
									v.window.removeEventListener("keydown", R);
								}));
						});
						let O;
						const B = (0, g.$A$b)(() => O);
						return (() => {
							const U = f(),
								z = O;
							return (
								typeof z == "function" ? (0, C.use)(z, U) : (O = U),
								U.style.setProperty("height", "100%"),
								U.style.setProperty("display", "flex"),
								U.style.setProperty("flex-direction", "column"),
								(0, w.insert)(
									U,
									(0, E.createComponent)(r.$w0b, {
										scrollingDirection: "vertical",
										style: { flex: 1, "min-height": 0 },
										get children() {
											const F = p(),
												x = F.firstChild,
												H = x.firstChild,
												q = H.firstChild,
												V = q.nextSibling,
												G = H.nextSibling;
											return (
												F.style.setProperty("padding", "12px 16px"),
												F.style.setProperty("display", "flex"),
												F.style.setProperty("flex-direction", "column"),
												F.style.setProperty("gap", "8px"),
												x.style.setProperty("display", "flex"),
												x.style.setProperty("align-items", "center"),
												x.style.setProperty("justify-content", "space-between"),
												x.style.setProperty("height", "24px"),
												x.style.setProperty("padding", "0 4px"),
												H.style.setProperty("display", "flex"),
												H.style.setProperty("align-items", "center"),
												H.style.setProperty("gap", "6px"),
												H.style.setProperty("font-weight", "600"),
												H.style.setProperty(
													"color",
													"var(--vscode-foreground)",
												),
												V.style.setProperty("white-space", "nowrap"),
												(0, w.insert)(
													H,
													(0, E.createComponent)(d.Show, {
														get when() {
															return B().width > 400;
														},
														get children() {
															return (0, E.createComponent)(n.$nac, {
																text: "Experimental",
																type: "subtle",
																size: "small",
															});
														},
													}),
													null,
												),
												G.style.setProperty("display", "flex"),
												G.style.setProperty("gap", "0.5rem"),
												(0, w.insert)(
													G,
													(0, E.createComponent)(d.Show, {
														get when() {
															return (
																(0, i.memo)(
																	() => I.allBugBotsData.allBugBots.length > 0,
																)() && B().width > 350
															);
														},
														get children() {
															return (0, E.createComponent)(u.$lzc, {
																type: "secondary",
																get codicon() {
																	return a.$ak.trash;
																},
																title: "Delete All",
																onClick: N,
															});
														},
													}),
													null,
												),
												(0, w.insert)(
													G,
													(0, E.createComponent)(u.$lzc, {
														get codicon() {
															return a.$ak.run;
														},
														title: "Run New",
														onClick: k,
													}),
													null,
												),
												(0, w.insert)(
													F,
													(0, E.createComponent)(d.For, {
														get each() {
															return I.allBugBotsData.allBugBots;
														},
														get fallback() {
															return (() => {
																const K = b(),
																	J = K.firstChild,
																	W = J.nextSibling;
																return (
																	K.style.setProperty(
																		"color",
																		"var(--vscode-descriptionForeground)",
																	),
																	K.style.setProperty("font-size", "11px"),
																	K.style.setProperty("padding", "4px"),
																	W.addEventListener("click", k),
																	W.style.setProperty(
																		"color",
																		"var(--vscode-textLink-foreground)",
																	),
																	W.style.setProperty("cursor", "pointer"),
																	K
																);
															})();
														},
														children: (K) =>
															(() => {
																const J = y(),
																	W = J.firstChild,
																	X = W.firstChild,
																	Y = X.firstChild;
																return (
																	J.addEventListener("click", () =>
																		L(K.bugbotId),
																	),
																	J.style.setProperty("cursor", "pointer"),
																	X.style.setProperty("display", "flex"),
																	X.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	X.style.setProperty("gap", "2px"),
																	(0, w.insert)(Y, () =>
																		new Date(
																			K.lastUpdatedAt || K.createdAt,
																		).toLocaleString(),
																	),
																	(0, w.insert)(
																		X,
																		(0, E.createComponent)(d.Show, {
																			get when() {
																				return K.branch && K.commit;
																			},
																			get children() {
																				const ie = s(),
																					ne = ie.firstChild;
																				return (
																					ie.style.setProperty(
																						"font-size",
																						"11px",
																					),
																					ie.style.setProperty(
																						"color",
																						"var(--vscode-descriptionForeground)",
																					),
																					(0, w.insert)(ie, () => K.branch, ne),
																					(0, w.insert)(
																						ie,
																						() => K.commit?.sha.slice(0, 7),
																						null,
																					),
																					ie
																				);
																			},
																		}),
																		null,
																	),
																	(0, w.insert)(
																		W,
																		(0, E.createComponent)(h.$Qzc, {
																			bugbot: K,
																			size: "medium",
																		}),
																		null,
																	),
																	(0, w.insert)(
																		J,
																		(0, E.createComponent)(d.Show, {
																			get when() {
																				return K.status.type === "completed";
																			},
																			get children() {
																				const ie = l(),
																					ne = ie.firstChild,
																					ee = ne.nextSibling;
																				return (
																					(0, w.insert)(ne, () => D(K)),
																					(0, w.insert)(ee, () => M(K)),
																					ie
																				);
																			},
																		}),
																		null,
																	),
																	J
																);
															})(),
													}),
													null,
												),
												F
											);
										},
									}),
									null,
								),
								(0, w.insert)(
									U,
									(0, E.createComponent)(d.Show, {
										get when() {
											return T();
										},
										get children() {
											return (0, E.createComponent)(c.$fzc, {
												isOpen: !0,
												onClose: () => P(!1),
												style: { padding: "1rem" },
												get children() {
													const F = o(),
														x = F.firstChild,
														H = x.nextSibling,
														q = H.nextSibling;
													return (
														F.style.setProperty("display", "flex"),
														F.style.setProperty("flex-direction", "column"),
														F.style.setProperty("gap", "1rem"),
														x.style.setProperty("font-size", "1rem"),
														x.style.setProperty("margin", "0"),
														H.style.setProperty("margin", "0"),
														q.style.setProperty("display", "flex"),
														q.style.setProperty("gap", "0.5rem"),
														q.style.setProperty("justify-content", "flex-end"),
														(0, w.insert)(
															q,
															(0, E.createComponent)(u.$lzc, {
																type: "secondary",
																title: "Cancel",
																onClick: () => P(!1),
															}),
															null,
														),
														(0, w.insert)(
															q,
															(0, E.createComponent)(u.$lzc, {
																type: "danger",
																title: "Delete All",
																onClick: A,
															}),
															null,
														),
														F
													);
												},
											});
										},
									}),
									null,
								),
								U
							);
						})();
					};
				e.$Rzc = $;
			},
		),
		