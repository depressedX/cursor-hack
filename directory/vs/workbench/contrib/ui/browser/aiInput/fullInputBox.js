define(
			de[2009],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 922, 158, 13, 7, 160, 12, 9, 47, 606, 205,
				1994, 1727, 36, 450, 4319, 310, 4320, 1777, 422, 364, 1982, 135, 4399,
				573, 1523,
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
					(e.$Vbc = e.$Ubc = void 0);
				const A = (0, t.template)('<div tabindex="0">'),
					R = (0, t.template)("<div>"),
					O = (0, t.template)(
						'<div class="full-input-box"><div><div tabindex="0"><div></div></div></div><div>',
					);
				e.$Ubc =
					"solid 1px var(--vscode-input-border,var(--vscode-commandCenter-inactiveBorder))";
				function B(z) {
					return (0, m.createComponent)(
						L.$ubc,
						(0, r.mergeProps)(
							{
								get position() {
									return z.position;
								},
								get close() {
									return z.close;
								},
								get nonBlockingRoot() {
									return z.nonBlockingRoot;
								},
							},
							() => z.getPickerMenuProps(),
						),
					);
				}
				const U = (z) => {
					const F = (0, y.$odc)();
					let x, H;
					const q = (0, h.createMemo)(() => z.role ?? "bottom"),
						[V, G] = (0, h.createSignal)(!1),
						[K, J] = (0, h.createSignal)(!1),
						[W, X] = (0, h.createSignal)(null),
						[Y, ie] = (0, h.createSignal)(-1),
						[ne, ee] = (0, h.createSignal)(-1),
						[_, te] = (0, h.createSignal)(null),
						[Q, Z] = (0, h.createSignal)(!1),
						se = (0, h.createMemo)(() => z.inputBoxDelegate ?? new b.$Zzb()),
						[re, le, oe] = (0, k.$A0b)();
					(0, h.onCleanup)(() => {
						oe();
					});
					const ae = (ht) => {
							le(ht), z.setIsPickerMenuOpen?.(!0);
						},
						pe = () => {
							oe(), z.setIsPickerMenuOpen?.(!1);
						};
					let $e;
					const ye = (ht) => {
							q() === "bottom"
								? ae({ x: ht.left, y: ht.top - 4 })
								: ae({ x: ht.left, y: ht.bottom + 4 });
						},
						ue = (ht) => {
							if (re()) {
								pe();
								return;
							}
							ht.stopPropagation();
							const Rt = $e?.getBoundingClientRect();
							Rt && ye(Rt);
						},
						fe = {
							...(0, $.$Rac)(),
							namespace: "chat-input" + z.id,
							onError: (ht) => {
								console.error(ht);
							},
						},
						me = () => (z.text?.trim() ?? "").length === 0,
						ve = (ht) => (
							ct(!1),
							G(!1),
							z.triggerScrollToBottom && z.triggerScrollToBottom(),
							ge(),
							z.onSubmit?.(ht)
						),
						ge = () => {
							z.onPreSubmit?.(), G(!1);
						},
						be = (0, h.createMemo)(() =>
							z.shouldMergeSuggestedPillsWithAllPills
								? [...z.allPills(), ...(z.suggestedPills?.() ?? [])]
								: z.allPills(),
						),
						Ce = (0, h.createMemo)(() =>
							z.shouldMergeSuggestedPillsWithAllPills
								? []
								: (z.suggestedPills?.() ?? []),
						),
						Le = () => {
							if (K()) return !1;
							const ht = _()?.getRootElement();
							if (!ht || !(0, $.$Vac)(ht)) return !1;
							const Rt = Be();
							let Nt = Rt === -1 ? -2 : Math.min(Rt, be().length - 1);
							return (
								(Nt = Nt === -1 ? -2 : Nt), ie(Nt), se().getRef()?.blur(), !0
							);
						},
						Fe = (0, h.createMemo)(() => [
							{
								command: a.KEY_ALT_UP_COMMAND,
								callback: (ht) =>
									z.setIsAltPressed ? (z.setIsAltPressed(!1), !0) : !1,
							},
							{
								command: a.KEY_ALT_COMMAND,
								callback: (ht) =>
									z.setIsAltPressed ? (z.setIsAltPressed(!0), !0) : !1,
							},
							{
								command: a.KEY_COMMAND_COMMAND,
								callback: (ht) =>
									z.setIsCmdPressed ? (z.setIsCmdPressed(!0), !0) : !1,
							},
							{
								command: a.KEY_COMMAND_UP_COMMAND,
								callback: (ht) =>
									z.setIsCmdPressed ? (z.setIsCmdPressed(!1), !0) : !1,
							},
							{
								command: a.KEY_ARROW_UP_COMMAND,
								callback: (ht) => (ht.shiftKey ? !1 : Le()),
								priority: a.COMMAND_PRIORITY_LOW,
							},
							{
								command: a.KEY_COMMAND_K_COMMAND,
								callback: (ht) =>
									(g.$m && (!ht.ctrlKey || ht.metaKey)) ||
									(!g.$m && (!ht.metaKey || ht.ctrlKey))
										? !1
										: Le(),
							},
							{
								command: a.KEY_ARROW_DOWN_COMMAND,
								callback: (ht) => {
									const Rt = _()?.getRootElement();
									if (!Rt || !(0, $.$Wac)(Rt) || ht.shiftKey) return !1;
									if (Ce() && Ce().length > 0) {
										const Nt = ke(),
											jt = Nt === -1 ? 0 : Math.min(Nt, Ce().length - 1);
										return ee(jt), !0;
									}
									return z.onFurtherArrowDown ? z.onFurtherArrowDown() : !1;
								},
								priority: a.COMMAND_PRIORITY_LOW,
							},
							...(z.allowCmdPFilePicker
								? [
										{
											command: a.KEY_COMMAND_P_COMMAND,
											callback: (ht) =>
												ht.shiftKey
													? !1
													: z.makeCmdPAlt
														? ht.altKey
															? (ue(ht), !0)
															: !1
														: (ue(ht), !0),
										},
									]
								: []),
							...(z.extraCommandListeners?.find(
								(ht) => ht.command === a.KEY_COMMAND_ENTER_COMMAND,
							)
								? []
								: [
										{
											command: a.KEY_COMMAND_ENTER_COMMAND,
											callback: (ht) => !!ve(ht),
										},
									]),
							{
								command: a.KEY_COMMAND_R_COMMAND,
								callback: (ht) =>
									ht.shiftKey ? !1 : (G(!1), z.onReset?.(), !0),
							},
							...(z.extraCommandListeners ?? []),
						]);
					(0, h.onMount)(() => {
						(0, h.createEffect)(() => {
							if (x) {
								z.setContainerWidth?.(x.offsetWidth);
								const ht = (0, c.$Ogb)(),
									Rt = z.setContainerWidth;
								new ht.ResizeObserver((jt) => {
									for (const ti of jt) Rt?.(ti.contentRect.width);
								}).observe(x);
							}
						});
					});
					const Oe = () => {
						let ht = 3;
						const Rt = (Nt = 0) => {
							Nt >= ht ||
								setTimeout(() => {
									se().focus(), se().isFocused() || Rt(Nt + 1);
								}, 10);
						};
						Rt();
					};
					(0, h.createEffect)(() => {
						const ht = z.autofocus;
						(0, h.onMount)(() => {
							ht && Oe();
						});
					}),
						(0, h.createEffect)(() => {
							Y() >= be().length && ie(be().length - 1);
						});
					let xe = !1,
						He,
						Ke,
						Je = !1;
					const Te = [];
					function Ee() {
						const ht = Te.shift();
						ht && X(ht);
					}
					(0, h.createEffect)(() => {
						const ht = z.mentionIdsToDelete?.();
						if (ht && ht.length > 0) {
							for (const Rt of ht) Te.push(Rt);
							Je || ((Je = !0), Ee());
						}
					}),
						(0, h.createEffect)(() => {
							const ht = z.forceShouldShowPillPreview,
								Rt = be().length;
							ht !== void 0 &&
								ht !== -1 &&
								ht < Rt &&
								(G(!0), Se(ht), z.resetForceShouldShowPillPreview?.());
						}),
						(0, h.createEffect)(
							(0, h.on)(
								() => W(),
								(ht) => {
									ht === null && Te.length > 0 ? Ee() : (Je = !1);
								},
							),
						);
					const Ie = (ht, Rt = !0) => {
						if (!ht.onRemove) return;
						const Nt = Y();
						let jt = Nt;
						const ti =
							ht.type === "gitGraphFileSuggestion"
								? be().length
								: be().filter((hi) => hi.type !== "gitGraphFileSuggestion")
										.length;
						Nt === ti - 1 ? (jt = Nt - 1) : Nt === 0 && ti === 1 && (jt = -1);
						const kt = () => {
							jt === -1 ? (ie(-1), se().isFocused() || se().focus()) : ie(jt);
						};
						setTimeout(() => {
							kt();
						}),
							ht.onRemove?.(Rt),
							G(!1);
					};
					(0, h.createEffect)(() => {
						const ht = Y() !== -1 ? "pill" : "suggestedPill",
							Rt = ht === "pill" ? Y() : ne(),
							Nt = ht === "pill" ? ie : ee,
							jt = ht === "pill" ? be().length : Ce().length,
							ti = ht === "pill" ? be() : Ce();
						if (
							(Rt !== void 0 && Rt !== -1 && jt === 0 && Nt?.(-2),
							Nt && Rt !== -1 && Rt !== void 0)
						) {
							const kt = (0, c.$Ogb)(),
								hi = (Kt) => {
									if (!Q) {
										Nt(-1);
										return;
									}
									if (Rt === -1) {
										se().focus();
										return;
									}
									const di = (xt, Vt) => {
											if (!xt) return;
											const Bt = De(xt, Vt, ht === "suggestedPill"),
												Gt = kt.document.getElementById(Bt);
											if (Gt) return Gt;
										},
										Ye = () => {
											if (Rt === -2) return $e;
											const xt = ti[Rt];
											if (xt) return di(xt, Rt);
										},
										ze = (xt) => {
											const Vt = Ye();
											if (!Vt) return;
											const Bt = [],
												Gt = $e;
											Gt && ht === "pill" && Bt.push({ dom: Gt, index: -2 });
											for (let Jt = 0; Jt < ti.length; Jt++) {
												const si = ti[Jt],
													Zt = di(si, Jt);
												Zt && Bt.push({ dom: Zt, index: Jt });
											}
											const Mt = new Map(),
												Ut = (Jt) => Math.floor((Jt.top + Jt.height / 2) / 10);
											for (const Jt of Bt) {
												const si = Jt.dom.getBoundingClientRect(),
													Zt = Ut(si);
												Mt.has(Zt) || Mt.set(Zt, []), Mt.get(Zt)?.push(Jt);
											}
											const ei = Array.from(Mt.entries()).sort(
													(Jt, si) => Jt[0] - si[0],
												),
												mi = Vt.getBoundingClientRect(),
												ii = Ut(mi),
												Dt = ei.findIndex((Jt) => Jt[0] === ii);
											if (Dt !== -1) {
												if (xt === "up") {
													const Jt = Dt - 1,
														[si, Zt] = ei[Jt] ?? [];
													if (!Zt) return;
													const ci = Vt.getBoundingClientRect(),
														ri = ci.left + ci.width / 2,
														$i = ci.top + ci.height / 2;
													let Wt = 1 / 0,
														tt;
													for (const at of Zt) {
														const pi = at.dom.getBoundingClientRect(),
															Li = pi.left + pi.width / 2,
															Di = pi.top + pi.height / 2,
															Ui = (Li - ri) ** 2 + (Di - $i) ** 2;
														Ui < Wt && ((Wt = Ui), (tt = at));
													}
													return tt;
												} else if (xt === "down") {
													const Jt = Dt + 1,
														[si, Zt] = ei[Jt] ?? [];
													if (!Zt) return;
													const ci = Vt.getBoundingClientRect(),
														ri = ci.left + ci.width / 2,
														$i = ci.top + ci.height / 2;
													let Wt = 1 / 0,
														tt;
													for (const at of Zt) {
														const pi = at.dom.getBoundingClientRect(),
															Li = pi.left + pi.width / 2,
															Di = pi.top + pi.height / 2,
															Ui = (Li - ri) ** 2 + (Di - $i) ** 2;
														Ui < Wt && ((Wt = Ui), (tt = at));
													}
													return tt;
												} else if (xt === "left" || xt === "right") {
													const [Jt, si] = ei[Dt] ?? [],
														Zt = si.findIndex((ci) => ci.dom === Vt);
													return xt === "left"
														? si[Zt - 1] || si[si.length - 1]
														: si[Zt + 1] || si[0];
												}
											}
										},
										Xe =
											Kt.key === "ArrowUp" || Kt.key === "k"
												? "up"
												: Kt.key === "ArrowDown" || Kt.key === "j"
													? "down"
													: Kt.key === "ArrowLeft" || Kt.key === "h"
														? "left"
														: Kt.key === "ArrowRight" || Kt.key === "l"
															? "right"
															: void 0,
										It = Xe ? ze(Xe) : void 0,
										Lt = g.$m
											? Kt.ctrlKey && !Kt.metaKey
											: Kt.metaKey && !Kt.ctrlKey;
									switch (Kt.key) {
										case "ArrowUp":
										case "k": {
											if (Kt.key === "k" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It
													? Nt(It.index)
													: ht === "suggestedPill"
														? se().focus()
														: q() === "bottom" && z.onFurtherArrowUp?.();
											break;
										}
										case "ArrowDown":
										case "j": {
											if (Kt.key === "j" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It
													? Nt(It.index)
													: ht === "pill" || !z.onFurtherArrowDown
														? se().focus()
														: z.onFurtherArrowDown?.();
											break;
										}
										case "ArrowLeft":
										case "h": {
											if (Kt.key === "h" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It && Nt(It.index);
											break;
										}
										case "ArrowRight":
										case "l": {
											if (Kt.key === "l" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It && Nt(It.index);
											break;
										}
										case "Delete":
										case "Backspace": {
											Ie(ti[Rt]);
											break;
										}
										case "Enter": {
											if (Rt === -2) {
												$e?.click();
												break;
											}
											const xt = ti[Rt];
											xt.onClick &&
												(xt.onClick(),
												Kt.preventDefault(),
												Kt.stopPropagation()),
												!z.disablePreview &&
													!V() &&
													xt.type !== "gitGraphFileSuggestion" &&
													G(!0);
											break;
										}
										case "Escape": {
											V() ? G(!1) : (Nt(-1), se().focus());
											break;
										}
									}
								};
							kt.document.addEventListener("keydown", hi),
								(0, h.onCleanup)(() => {
									kt.document.removeEventListener("keydown", hi);
								});
						}
					});
					const [Be, Se] = (0, h.createSignal)(-2),
						[ke, Ue] = (0, h.createSignal)(-1);
					(0, h.createEffect)(() => {
						Y() !== -1 && Se(Y());
					}),
						(0, h.createEffect)(() => {
							ne() !== -1 && Ue(ne());
						}),
						(0, h.createEffect)(
							(0, h.on)(
								() => z.suggestedPills?.(),
								() => {
									const ht = z.suggestedPills?.().length ?? 0;
									ht === 0 ? ee(-1) : ne() >= ht && ee(ht - 1);
								},
							),
						);
					const qe = (0, h.createMemo)(() => {
							const ht = Be();
							return be()[ht];
						}),
						Ae = (0, o.$9g)(),
						Me = (0, h.createMemo)(() => `add-file-pill-${z.id}-${Ae}`);
					function De(ht, Rt, Nt = !1) {
						return `pill-${z.id}-${Rt}-${ht.type}-${Ae}-${Nt ? "suggested" : ""}`;
					}
					(0, h.createEffect)(() => {
						if (z.selectPillSignal) {
							if (!z.turnOffSelectPillSignal) {
								console.error(
									"[fullInputBox] turnOffSelectPillSignal is not defined",
								);
								return;
							}
							const ht = Be();
							ie(ht !== -1 ? ht : 0), z.turnOffSelectPillSignal?.();
						}
					}),
						(0, h.createEffect)(() => {
							if (z.selectSuggestedPillSignal) {
								if (!z.turnOffSelectSuggestedPillSignal) {
									console.error(
										"[fullInputBox] turnOffSelectSuggestedPillSignal is not defined",
									);
									return;
								}
								if (!z.suggestedPills?.().length) se().focus();
								else {
									const ht = ke();
									ee(ht !== -1 ? ht : 0);
								}
								z.turnOffSelectSuggestedPillSignal?.();
							}
						});
					function Re(ht, Rt) {
						if (ht.type === "gitGraphFileSuggestion") {
							ht.onAdd?.(), ht.onRemove?.();
							return;
						}
						const Nt = Rt === Y();
						((V() && Nt) || z.disablePreview) && ht.onClick && ht.onClick(),
							z.disablePreview ||
								(Rt !== Y() || !V() ? (ie(Rt), G(!0)) : (ie(-1), G(!1)));
					}
					const je = (0, h.createMemo)(() => (0, T.$dbc)(be())),
						Ve = ["file", "code"];
					(0, h.createEffect)(() => {
						F.reactiveStorageService.nonPersistentStorage
							.reactiveDragTakeover && ct(!1);
					});
					const { showHover: Ze, hideHover: et } = (0, P.$z$b)(500),
						rt = [
							(() => {
								const ht = A();
								return (
									ht.addEventListener("focusout", () => {
										Z(!1);
									}),
									ht.addEventListener("focusin", () => {
										Z(!0);
									}),
									ht.style.setProperty("display", "flex"),
									ht.style.setProperty("gap", "4px"),
									ht.style.setProperty("align-items", "center"),
									ht.style.setProperty("outline", "none"),
									(0, C.insert)(
										ht,
										(0, m.createComponent)(N.$hbc, {
											get id() {
												return Me();
											},
											get isSelected() {
												return Y() === -2 || !!re();
											},
											setDomRef: (Rt) => {
												$e = Rt;
											},
											onClick: (Rt) => {
												ue(Rt);
											},
											onMouseEnter: (Rt) => {
												if (!z.allowCmdPFilePicker) return;
												const Nt = z.makeCmdPAlt
													? `${g.$m ? "\u2318\u2325P" : "Ctrl+Alt+P"}`
													: `${g.$m ? "\u2318P" : "Ctrl+P"}`;
												Nt &&
													Ze({
														content: Nt,
														target: Rt.target,
														position: { hoverPosition: n.HoverPosition.RIGHT },
														appearance: { showPointer: !0, compact: !0 },
														additionalClasses: ["chat-hover-tooltip"],
													});
											},
											onMouseLeave: () => {
												et();
											},
											get disableFocusOnSelect() {
												return !!re();
											},
											get label() {
												return be().length === 0 ? "Add context" : void 0;
											},
										}),
										null,
									),
									(0, C.insert)(
										ht,
										(0, m.createComponent)(h.Show, {
											get when() {
												return be().length > 0;
											},
											children: (Rt) => {
												const Nt = (0, h.createMemo)(() => {
													const jt = be()[0];
													if (
														jt.type === "file" &&
														jt.data &&
														typeof jt.data == "object" &&
														"uri" in jt.data
													) {
														const ti = F.customEditorLabelService.getName(
															p.URI.revive(jt.data.uri),
														);
														if (ti) return { ...jt, extraString: ti };
													}
													return jt;
												});
												return (0, m.createComponent)(
													N.$ibc,
													(0, r.mergeProps)(
														{
															get id() {
																return De(Nt(), 0);
															},
														},
														Nt,
														{
															get onRemove() {
																return Nt().onRemove
																	? () => {
																			Ie(Nt());
																		}
																	: void 0;
															},
															get isSelected() {
																return Y() === 0;
															},
															onClick: () => {
																Re(Nt(), 0);
															},
														},
													),
												);
											},
										}),
										null,
									),
									ht
								);
							})(),
							(0, m.createComponent)(h.For, {
								get each() {
									return je();
								},
								children: (ht, Rt) => {
									const Nt = (0, h.createMemo)(() => {
										if (
											ht.type === "file" &&
											ht.data &&
											typeof ht.data == "object" &&
											"uri" in ht.data
										) {
											const jt = F.customEditorLabelService.getName(
												p.URI.revive(ht.data.uri),
											);
											if (jt) return { ...ht, extraString: jt };
										}
										return ht;
									});
									return (0, m.createComponent)(h.Show, {
										get when() {
											return Rt() !== 0;
										},
										get children() {
											return (0, m.createComponent)(
												N.$ibc,
												(0, r.mergeProps)(
													{
														get id() {
															return De(Nt(), Rt());
														},
													},
													Nt,
													{
														get onRemove() {
															return Nt().onRemove
																? () => {
																		Ie(Nt());
																	}
																: void 0;
														},
														get isSelected() {
															return Rt() === Y();
														},
														onClick: () => {
															Re(Nt(), Rt());
														},
													},
												),
											);
										},
									});
								},
							}),
						],
						ft = (0, D.$y0b)();
					(0, l.useAutoHorizontalScroll)(
						ft,
						() => H,
						() =>
							Y() === -2
								? Me()
								: Y() !== -1 && be().length > 0
									? De(be()[Y()], Y())
									: "",
						() => [be(), Y()],
						() => !!z.shouldDisplayMultiRowPills,
					);
					const bt = (0, m.createComponent)(M.$Tbc, {
							get getContext() {
								return z.getContext;
							},
							get setContext() {
								return z.setContext;
							},
							get pillProps() {
								return qe();
							},
							hidePreview: () => G(!1),
							get setCodebaseSearchSettings() {
								return z.setCodebaseSearchSettings;
							},
							get getCodebaseSearchSettings() {
								return z.getCodebaseSearchSettings;
							},
							get isHighlighted() {
								return Y() !== -1;
							},
							onPinContext: () => {
								z.onPinContext && z.onPinContext(qe());
							},
							onUnpinContext: () => {
								z.onUnpinContext && z.onUnpinContext(qe());
							},
							get isContextPinned() {
								return z.checkIsContextPinned?.(qe());
							},
						}),
						nt = (0, h.createMemo)(
							() => !z.role || z.role === "top" || z.role === "selected",
						),
						[lt, ct] = (0, h.createSignal)(!1);
					let gt;
					return (() => {
						const ht = O(),
							Rt = ht.firstChild,
							Nt = Rt.firstChild,
							jt = Nt.firstChild,
							ti = Rt.nextSibling;
						ht.addEventListener("mouseup", () => {
							ct(!1);
						}),
							ht.addEventListener("mousedown", (Kt) => {
								Kt.target === Kt.currentTarget && z.onStartDrag?.(Kt);
							}),
							ht.addEventListener("click", (Kt) => {
								Kt.target === Kt.currentTarget &&
									!F.window.getSelection()?.toString() &&
									se().focus();
							}),
							ht.addEventListener("drop", (Kt) => {
								if (
									(clearTimeout(gt),
									ct(!1),
									Kt.defaultPrevented || Kt.hardCodedStopper)
								)
									return;
								Kt.preventDefault(), Kt.stopPropagation();
								const di = x?.querySelector(".aislash-editor-input");
								if (di) {
									const Ye = new DragEvent(Kt.type, Kt);
									(Ye.hardCodedStopper = !0), di.dispatchEvent(Ye);
								}
							}),
							ht.addEventListener("mouseleave", () => {
								ct(!1);
							}),
							ht.addEventListener("dragleave", (Kt) => {
								Kt.preventDefault(),
									(gt = setTimeout(() => {
										ct(!1);
									}, 50));
							}),
							ht.addEventListener("dragover", (Kt) => {
								Kt.preventDefault(), clearTimeout(gt), ct(!0);
							}),
							ht.addEventListener("dragenter", (Kt) => {
								Kt.preventDefault(), clearTimeout(gt), ct(!0);
							}),
							(0, E.use)((Kt) => {
								(x = Kt), z.setContainerRef?.(Kt);
							}, ht),
							(0, C.insert)(ht, () => z.children, Rt),
							(0, C.insert)(
								ht,
								(0, m.createComponent)(h.Show, {
									get when() {
										return z.topContent;
									},
									get children() {
										return z.topContent;
									},
								}),
								Rt,
							),
							(0, C.insert)(
								ht,
								(0, m.createComponent)(h.Show, {
									get when() {
										return re();
									},
									children: (Kt) =>
										(0, m.createComponent)(B, {
											get position() {
												return Kt();
											},
											close: (di) => {
												pe(), di || se().focus();
											},
											get nonBlockingRoot() {
												return `#${Me()}`;
											},
											get getPickerMenuProps() {
												return z.getPickerMenuProps;
											},
										}),
								}),
								Rt,
							),
							Rt.style.setProperty("border-bottom", "none"),
							Rt.style.setProperty("display", "flex"),
							Rt.style.setProperty("flex-direction", "column"),
							Rt.style.setProperty("gap", "2px"),
							Nt.addEventListener("focusout", () => {
								setTimeout(() => {
									(!He || !He.contains(F.window.document.activeElement)) &&
										((xe = !1), ie(-1));
								});
							}),
							Nt.addEventListener("focusin", () => {
								xe || (xe = !0);
							});
						const kt = He;
						typeof kt == "function" ? (0, E.use)(kt, Nt) : (He = Nt),
							Nt.style.setProperty("display", "flex"),
							Nt.style.setProperty("flex-direction", "column"),
							Nt.style.setProperty("gap", "4px"),
							Nt.style.setProperty("outline", "none"),
							Nt.style.setProperty("overflow", "hidden"),
							(0, C.insert)(
								Nt,
								(0, m.createComponent)(h.Show, {
									get when() {
										return (
											(0, d.memo)(
												() => !!(!nt() && V() && !z.disablePreview),
											)() &&
											(z.disableCodebasePillPreview !== !0 ||
												qe()?.type !== "codebase")
										);
									},
									children: bt,
								}),
								jt,
							);
						const hi = H;
						return (
							typeof hi == "function" ? (0, E.use)(hi, jt) : (H = jt),
							jt.style.setProperty("flex", "1"),
							jt.style.setProperty("display", "flex"),
							jt.style.setProperty("align-items", "center"),
							jt.style.setProperty("gap", "4px"),
							(0, C.insert)(
								jt,
								(0, m.createComponent)(h.Show, {
									get when() {
										return z.shouldDisplayMultiRowPills;
									},
									get fallback() {
										return [
											(0, m.createComponent)(D.$w0b, {
												scrollable: ft,
												scrollingDirection: "horizontal",
												style: { flex: 1, width: "1px", height: "20px" },
												innerContainerStyle: {
													display: "inline-flex",
													"align-items": "center",
													"padding-right": "4px",
												},
												nonReactiveElementOptions: {
													horizontalScrollbarSize: 4,
													verticalScrollbarSize: 0,
												},
												onlyShowScrollbarOnHover: !0,
												get children() {
													const Kt = R();
													return (
														Kt.addEventListener("mouseup", (di) => {
															di.target === di.currentTarget &&
																!F.window.getSelection()?.toString() &&
																se().focus();
														}),
														Kt.addEventListener("mousedown", (di) => {
															di.target === di.currentTarget &&
																z.onStartDrag &&
																z.onStartDrag(di);
														}),
														Kt.style.setProperty("display", "flex"),
														Kt.style.setProperty("gap", "4px"),
														Kt.style.setProperty("width", "100%"),
														(0, C.insert)(Kt, rt),
														Kt
													);
												},
											}),
											(0, m.createComponent)(h.Show, {
												get when() {
													return z.buttonArea;
												},
												get children() {
													const Kt = R();
													return (
														Kt.style.setProperty("margin-left", "auto"),
														(0, C.insert)(Kt, () => z.buttonArea),
														Kt
													);
												},
											}),
										];
									},
									get children() {
										const Kt = R();
										return (
											Kt.addEventListener("click", (di) => {
												di.target === di.currentTarget && se().focus();
											}),
											Kt.style.setProperty("align-items", "center"),
											Kt.style.setProperty("display", "flex"),
											Kt.style.setProperty("gap", "4px"),
											Kt.style.setProperty("width", "100%"),
											(0, C.insert)(Kt, rt),
											(0, w.effect)(() =>
												(be().length > 1 ? "wrap" : "nowrap") != null
													? Kt.style.setProperty(
															"flex-wrap",
															be().length > 1 ? "wrap" : "nowrap",
														)
													: Kt.style.removeProperty("flex-wrap"),
											),
											Kt
										);
									},
								}),
							),
							(0, C.insert)(
								Nt,
								(0, m.createComponent)(h.Show, {
									get when() {
										return (
											(0, d.memo)(
												() => !!(nt() && V() && !z.disablePreview),
											)() &&
											(z.disableCodebasePillPreview !== !0 ||
												qe()?.type !== "codebase")
										);
									},
									children: bt,
								}),
								null,
							),
							ti.addEventListener("click", (Kt) => {
								Kt.target === Kt.currentTarget && se().focus();
							}),
							ti.style.setProperty("position", "relative"),
							ti.style.setProperty("overflow", "hidden"),
							ti.style.setProperty("padding-top", "0px"),
							(0, C.insert)(
								ti,
								(0, m.createComponent)(
									I.$sbc,
									(0, r.mergeProps)(
										z,
										{
											get placeholder() {
												return z.placeholder;
											},
											get reactiveScrollableOptions() {
												return {
													verticalScrollbarSize: z.shouldNarrowScrollbar
														? 6
														: 10,
												};
											},
											ignoreTextForLastSelectionRemoval: !0,
											get minHeight() {
												return z.minHeight ?? 40;
											},
											get maxHeight() {
												return z.maxHeight ?? 240;
											},
										},
										S.$w_b,
										() => z.sideEffects(),
										() => z.supports(),
										{
											onMentionsMenuOpen: () => J(!0),
											onMentionsMenuClose: () => J(!1),
											get onEscape() {
												return z.onEscape;
											},
											get extraPlugins() {
												return [
													(0, m.createComponent)(v.$rbc, {}),
													(0, m.createComponent)(s.$_ac, {
														get text() {
															return z.text;
														},
														get richText() {
															return z.richText;
														},
														get force() {
															return z.forceText;
														},
														get setForce() {
															return z.setForceText;
														},
													}),
													...(z.extraPlugins ?? []),
												];
											},
											enableAddFilePlugin: !0,
											showDocs: !0,
											source: "chat",
											editorConfig: () => fe,
											useArrowsForHistory: !1,
											get isLongContextMode() {
												return z.longContextModeEnabled ?? !1;
											},
											get extraCommandListeners() {
												return Fe();
											},
											onFocus: () => {
												ie(-1), z.onFocus?.();
											},
											onBlur: () => {
												z.setIsAltPressed?.(!1),
													z.setIsCmdPressed?.(!1),
													z.onBlur?.();
											},
											get initText() {
												return z.richText;
											},
											get setText() {
												return z.setText;
											},
											get setRichText() {
												return z.setRichText;
											},
											get inputBoxDelegate() {
												return se();
											},
											style: { padding: "0px" },
											placeholderStyle: { padding: "0px" },
											setEditor: (Kt) => {
												z.setEditor?.(Kt),
													te(Kt),
													Kt.registerCommand(
														a.DROP_COMMAND,
														(di) => (ct(!1), !1),
														a.COMMAND_PRIORITY_LOW,
													);
											},
											get mentionIdToDelete() {
												return W();
											},
											setMentionIdToDelete: X,
											onTryDeleteContext: () => {
												const Kt = be();
												if (Kt.length === 0) return !1;
												const di = Kt.slice()
													.reverse()
													.find((Ye) => Ye.type !== "gitGraphFileSuggestion");
												return di?.onRemove ? (Ie(di, !0), !0) : !1;
											},
											externalHistoryBundle: {
												runExternalUndo: () => {
													z.undoRedoUri &&
														F.undoRedoService.undo(z.undoRedoUri);
												},
												runExternalRedo: () => {
													z.undoRedoUri &&
														F.undoRedoService.redo(z.undoRedoUri);
												},
												addToExternalUndoStack: (Kt) => {
													const di = _();
													if (!di) return;
													const Ye = JSON.stringify(di.getEditorState()),
														ze = JSON.stringify(
															Kt.historyState.current?.editorState,
														);
													if (Ye === ze) return;
													const Xe = z.undoRedoUri;
													Xe &&
														F.undoRedoService.pushElement(
															new f.$x7b(
																"Lexical Operation",
																"lexical-op",
																Xe,
																() => {
																	const It = _();
																	It && (0, u.undo)(It, Kt.historyState);
																},
																() => {
																	const It = _();
																	It && (0, u.redo)(It, Kt.historyState);
																},
															),
														);
												},
											},
											onSubmit: (Kt) => {
												ve?.(Kt);
											},
											onAddFile: (Kt) => {
												F.selectedContextService.addContext({
													contextType: "fileSelections",
													value: { uri: Kt },
													setContext: z.setContext,
													getContext: z.getContext,
												});
											},
										},
									),
								),
								null,
							),
							(0, C.insert)(
								ti,
								(0, m.createComponent)(h.Show, {
									get when() {
										return (
											z.bottomContent ||
											z.bottomLeftContent ||
											z.bottomRightContent
										);
									},
									get children() {
										const Kt = R();
										return (
											(0, C.insert)(
												Kt,
												(0, m.createComponent)(h.Show, {
													get when() {
														return z.bottomContent;
													},
													get fallback() {
														return [
															(0, d.memo)(() => z.bottomLeftContent),
															(() => {
																const di = R();
																return di.style.setProperty("flex", "1"), di;
															})(),
															(0, d.memo)(() => z.bottomRightContent),
														];
													},
													get children() {
														return z.bottomContent;
													},
												}),
											),
											(0, w.effect)((di) =>
												(0, i.style)(
													Kt,
													{
														display: "flex",
														"align-items": "center",
														"justify-content": "space-between",
														gap: "0.25rem",
														"flex-shrink": "0",
														height: "19px",
														...z.bottomContainerStyle,
													},
													di,
												),
											),
											Kt
										);
									},
								}),
								null,
							),
							(0, C.insert)(
								ht,
								(0, m.createComponent)(h.Show, {
									get when() {
										return lt();
									},
									get children() {
										const Kt = R();
										return (
											Kt.style.setProperty("position", "absolute"),
											Kt.style.setProperty("top", "0"),
											Kt.style.setProperty("left", "0"),
											Kt.style.setProperty("right", "0"),
											Kt.style.setProperty("bottom", "0"),
											Kt.style.setProperty("border-radius", "0.25rem"),
											Kt.style.setProperty(
												"background-color",
												"var(--vscode-editor-hoverHighlightBackground)",
											),
											Kt.style.setProperty("z-index", "1000"),
											Kt.style.setProperty("display", "flex"),
											Kt.style.setProperty("justify-content", "center"),
											Kt.style.setProperty("align-items", "center"),
											Kt.style.setProperty("font-size", "16px"),
											Kt.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											Kt.style.setProperty("cursor", "copy"),
											Kt.style.setProperty("pointer-events", "none"),
											Kt.style.setProperty("opacity", "0.5"),
											Kt
										);
									},
								}),
								null,
							),
							(0, w.effect)((Kt) =>
								(0, i.style)(
									ht,
									{
										display: "flex",
										"flex-direction": "column",
										"align-items": "stretch",
										margin: q() !== "selected" ? "10px" : "0px",
										"flex-shrink": "0",
										border: e.$Ubc,
										"border-radius": "0.25rem",
										padding: "6px",
										gap: "6px",
										contain: "paint",
										"background-color": "var(--vscode-input-background)",
										position: "relative",
										...z.style,
									},
									Kt,
								),
							),
							ht
						);
					})();
				};
				e.$Vbc = U;
			},
		),
		