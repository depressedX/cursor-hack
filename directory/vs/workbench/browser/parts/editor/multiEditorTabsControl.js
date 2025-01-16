define(
			de[1935],
			he([
				1, 0, 12, 222, 44, 192, 114, 159, 27, 233, 105, 49, 5, 39, 8, 11, 1055,
				63, 3, 203, 195, 59, 35, 123, 51, 362, 40, 66, 7, 4, 1340, 28, 18, 19,
				15, 165, 54, 24, 212, 139, 82, 116, 247, 168, 764, 749, 231, 1700, 87,
				29, 323, 2345,
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
			) {
				"use strict";
				var ie;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ktc = void 0);
				let ne = class extends p.$qtc {
					static {
						ie = this;
					}
					static {
						this.zb = { default: 3, large: 10 };
					}
					static {
						this.Ab = { compact: 38, shrink: 80, fit: 120 };
					}
					static {
						this.Bb = 1500;
					}
					static {
						this.Cb = 150;
					}
					static {
						this.Db = 1.5;
					}
					constructor(
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
					) {
						super(_, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ve, ge),
							(this.Wb = ue),
							(this.Xb = fe),
							(this.Yb = me),
							(this.Jb = this.D(
								this.U.createInstance(L.$Trc, L.$Trc.ID, L.$Trc.LABEL),
							)),
							(this.Kb = this.D(
								this.U.createInstance(L.$Src, L.$Src.ID, L.$Src.LABEL),
							)),
							(this.Lb = this.D(this.U.createInstance(r.$uPb, r.$tPb))),
							(this.Mb = []),
							(this.Ob = []),
							(this.Pb = []),
							(this.Qb = { container: P.$pgb.None, available: P.$pgb.None }),
							(this.Rb = this.D(new f.$2c())),
							(this.Tb = t.$l ? O.$kc : O.$lc),
							(this.Ub = 0),
							(this.Vb = !1),
							(this.mc = this.D(new A.$Yh(() => this.nc(), 0))),
							(async () => (this.Tb = await this.Xb.path))(),
							this.D(this.Lb.onDidChangeDecorations(() => this.fc()));
					}
					bb(_) {
						super.bb(_),
							(this.Eb = _),
							(this.Fb = document.createElement("div")),
							this.Fb.classList.add("tabs-and-actions-container"),
							this.Eb.appendChild(this.Fb),
							(this.Gb = document.createElement("div")),
							this.Gb.setAttribute("role", "tablist"),
							(this.Gb.draggable = !0),
							this.Gb.classList.add("tabs-container"),
							this.D(d.$Qhb.addTarget(this.Gb)),
							(this.Ib = this.D(new f.$Zc())),
							this.bc(!1),
							(this.Hb = this.$b(this.Gb)),
							this.Fb.appendChild(this.Hb.getDomNode()),
							this.ec(this.Gb, this.Hb),
							this.db(this.Fb, ["editor-actions"]),
							this.Vc();
					}
					$b(_) {
						const te = this.D(
							new b.$5hb(_, {
								horizontal: s.ScrollbarVisibility.Auto,
								horizontalScrollbarSize: this.dc(),
								vertical: s.ScrollbarVisibility.Hidden,
								scrollYToX: !0,
								useShadows: !1,
							}),
						);
						return (
							this.D(
								te.onScroll((Q) => {
									Q.scrollLeftChanged && (_.scrollLeft = Q.scrollLeft);
								}),
							),
							te
						);
					}
					ac() {
						this.Hb?.updateOptions({ horizontalScrollbarSize: this.dc() });
					}
					bc(_) {
						const [te, Q] = (0, D.$xg)(this.Gb, this.Ib);
						Q.clear();
						const Z = this.P.partOptions;
						Z.tabSizing === "fixed"
							? (te.style.setProperty(
									"--tab-sizing-fixed-min-width",
									`${Z.tabSizingFixedMinWidth}px`,
								),
								te.style.setProperty(
									"--tab-sizing-fixed-max-width",
									`${Z.tabSizingFixedMaxWidth}px`,
								),
								Q.add(
									(0, P.$0fb)(te, P.$$gb.MOUSE_ENTER, () => {
										this.Vb = !0;
									}),
								),
								Q.add(
									(0, P.$0fb)(te, P.$$gb.MOUSE_LEAVE, () => {
										(this.Vb = !1), this.cc(!1);
									}),
								))
							: _ &&
								(te.style.removeProperty("--tab-sizing-fixed-min-width"),
								te.style.removeProperty("--tab-sizing-fixed-max-width"),
								this.cc(!1));
					}
					cc(_) {
						this.oc((te, Q, Z) => {
							if (_) {
								const { width: se } = Z.getBoundingClientRect();
								Z.style.setProperty("--tab-sizing-current-width", `${se}px`);
							} else Z.style.removeProperty("--tab-sizing-current-width");
						});
					}
					dc() {
						return this.P.partOptions.titleScrollbarSizing !== "large"
							? ie.zb.default
							: ie.zb.large;
					}
					ec(_, te) {
						this.D(
							(0, P.$0fb)(_, P.$$gb.SCROLL, () => {
								_.classList.contains("scroll") &&
									te.setScrollPosition({ scrollLeft: _.scrollLeft });
							}),
						);
						for (const re of [d.EventType.Tap, P.$$gb.DBLCLICK])
							this.D(
								(0, P.$0fb)(_, re, (le) => {
									if (re === P.$$gb.DBLCLICK) {
										if (le.target !== _) return;
									} else if (le.tapCount !== 2 || le.initialTarget !== _)
										return;
									P.$ahb.stop(le),
										this.Wb.openEditor(
											{
												resource: void 0,
												options: {
													pinned: !0,
													index: this.Q.count,
													override: w.$b1.id,
												},
											},
											this.Q.id,
										);
								}),
							);
						this.D(
							(0, P.$0fb)(_, P.$$gb.MOUSE_DOWN, (re) => {
								re.button === 1 && re.preventDefault();
							}),
						),
							t.$n &&
								this.D(
									(0, P.$0fb)(_, P.$$gb.MOUSE_UP, (re) => {
										re.button === 1 && re.preventDefault();
									}),
								);
						let Q,
							Z = !1;
						this.D(
							new P.$Hhb(_, {
								onDragStart: (re) => {
									Z = this.mb(re, _);
								},
								onDrag: (re) => {
									Q = re;
								},
								onDragEnter: (re) => {
									if ((_.classList.add("scroll"), re.target === _)) {
										if (!this.vc(re)) {
											re.dataTransfer && (re.dataTransfer.dropEffect = "none");
											return;
										}
										this.a.hasData(S.$LSb.prototype) ||
											(re.dataTransfer &&
												(re.dataTransfer.dropEffect = "copy")),
											this.wc(_, !0, re);
									}
								},
								onDragLeave: (re) => {
									this.wc(_, !1, re), _.classList.remove("scroll");
								},
								onDragEnd: (re) => {
									this.wc(_, !1, re),
										_.classList.remove("scroll"),
										this.nb(re, Q, _, Z);
								},
								onDrop: (re) => {
									if (
										(this.wc(_, !1, re),
										_.classList.remove("scroll"),
										re.target === _)
									) {
										const le = this.b.hasData(S.$MSb.prototype);
										this.bd(re, le ? this.Q.count : this.R.count, _);
									}
								},
							}),
						),
							this.D(
								(0, P.$0fb)(_, P.$$gb.MOUSE_WHEEL, (re) => {
									const le = this.Q.activeEditor;
									if (!le || this.Q.count < 2) return;
									if (this.P.partOptions.scrollToSwitchTabs === !0) {
										if (re.shiftKey) return;
									} else if (!re.shiftKey) return;
									const oe = Date.now();
									if (
										oe - this.Ub <
										ie.Cb - 2 * (Math.abs(re.deltaX) + Math.abs(re.deltaY))
									)
										return;
									this.Ub = oe;
									let ae;
									if (re.deltaX + re.deltaY < -ie.Db) ae = -1;
									else if (re.deltaX + re.deltaY > ie.Db) ae = 1;
									else return;
									const pe = this.Q.getEditorByIndex(
										this.Q.getIndexOfEditor(le) + ae,
									);
									pe && (this.Q.openEditor(pe), P.$ahb.stop(re, !0));
								}),
							);
						const se = (re) => {
							P.$ahb.stop(re);
							let le = _;
							(0, P.$7gb)(re) &&
								(le = new q.$2fb((0, P.getWindow)(this.N), re)),
								this.S.showContextMenu({
									getAnchor: () => le,
									menuId: g.$XX.EditorTabsBarContext,
									contextKeyService: this.W,
									menuActionOptions: { shouldForwardArgs: !0 },
									getActionsContext: () => ({ groupId: this.Q.id }),
									getKeyBinding: (oe) => this.tb(oe),
									onHide: () => this.Q.focus(),
								});
						};
						this.D((0, P.$0fb)(_, d.EventType.Contextmenu, (re) => se(re))),
							this.D((0, P.$0fb)(_, P.$$gb.CONTEXT_MENU, (re) => se(re)));
					}
					fc() {
						this.layout(this.Qb);
					}
					hb() {
						super.hb(), this.layout(this.Qb);
					}
					openEditor(_, te) {
						const Q = this.hc();
						return (
							te?.focusTabControl && this.pc(_, (Z, se, re) => re.focus()), Q
						);
					}
					openEditors(_) {
						return this.hc();
					}
					hc() {
						this.Vc();
						const [_, te] = (0, D.$xg)(this.Gb, this.Hb);
						for (let le = _.children.length; le < this.R.count; le++)
							_.appendChild(this.rc(le, _, te));
						const Q = this.ic(),
							Z = this.Nb,
							se = this.Mb.length;
						this.Fc();
						let re = !1;
						return (
							Q || se !== this.Mb.length || !this.jc(Z, this.Nb)
								? (this.Ic({ forceRevealActiveTab: !0 }), (re = !0))
								: this.layout(this.Qb, { forceRevealActiveTab: !0 }),
							re
						);
					}
					ic() {
						return !!(
							(!this.Nb?.editor && this.R.activeEditor) ||
							(this.Nb?.editor && !this.R.activeEditor) ||
							!this.Nb?.editor ||
							!this.R.isActive(this.Nb.editor)
						);
					}
					jc(_, te) {
						return _ === te
							? !0
							: !_ || !te
								? !1
								: _.name === te.name &&
									_.description === te.description &&
									_.forceDescription === te.forceDescription &&
									_.title === te.title &&
									_.ariaLabel === te.ariaLabel;
					}
					beforeCloseEditor(_) {
						if (this.Vb && this.P.partOptions.tabSizing === "fixed") {
							const te = this.R.isLast(_);
							this.cc(!te);
						}
					}
					closeEditor(_) {
						this.kc();
					}
					closeEditors(_) {
						this.kc();
					}
					kc() {
						if (this.R.count) {
							const _ = (0, D.$wg)(this.Gb);
							for (; _.children.length > this.R.count; )
								_.lastChild?.remove(), (0, f.$Vc)(this.Pb.pop());
							this.Fc(), this.Ic({ forceRevealActiveTab: !0 });
						} else
							this.Gb && (0, P.$9fb)(this.Gb),
								(this.Pb = (0, f.$Vc)(this.Pb)),
								this.Lb.clear(),
								(this.Mb = []),
								(this.Nb = void 0),
								(this.Ob = []),
								this.lb(),
								this.Vc();
					}
					moveEditor(_, te, Q) {
						const Z = this.Mb[te];
						this.Mb.splice(te, 1),
							this.Mb.splice(Q, 0, Z),
							this.oc(
								(se, re, le, oe, ae, pe) => {
									this.Jc(se, re, le, oe, ae, pe);
								},
								Math.min(te, Q),
								Math.max(te, Q),
							),
							this.layout(this.Qb, { forceRevealActiveTab: !0 });
					}
					pinEditor(_) {
						this.pc(_, (te, Q, Z, se, re) => this.Kc(te, Q, Z, se, re));
					}
					stickEditor(_) {
						this.lc(_);
					}
					unstickEditor(_) {
						this.lc(_);
					}
					lc(_) {
						this.pc(_, (te, Q, Z, se, re, le) => this.Jc(te, Q, Z, se, re, le)),
							this.oc((te, Q, Z, se, re) => {
								this.Oc(Q, Z);
							}),
							this.layout(this.Qb, { forceRevealActiveTab: !0 });
					}
					setActive(_) {
						this.oc((te, Q, Z, se, re, le) => {
							this.Lc(_, te, Z, le);
						}),
							this.hb(),
							this.layout(this.Qb, { forceRevealActiveTab: !0 });
					}
					updateEditorSelections() {
						this.oc((_, te, Q, Z, se, re) => {
							this.Lc(this.P.activeGroup === this.Q, _, Q, re);
						});
					}
					updateEditorLabel(_) {
						this.mc.schedule();
					}
					nc() {
						this.Fc(),
							this.oc((_, te, Q, Z, se) => {
								this.Kc(_, te, Q, Z, se);
							}),
							this.layout(this.Qb);
					}
					updateEditorDirty(_) {
						this.pc(_, (te, Q, Z, se, re, le) =>
							this.Lc(this.P.activeGroup === this.Q, te, Z, le),
						);
					}
					updateOptions(_, te) {
						super.updateOptions(_, te),
							_.labelFormat !== te.labelFormat && this.Fc(),
							_.titleScrollbarSizing !== te.titleScrollbarSizing && this.ac(),
							_.alwaysShowEditorActions !== te.alwaysShowEditorActions &&
								this.hb(),
							(_.tabSizingFixedMinWidth !== te.tabSizingFixedMinWidth ||
								_.tabSizingFixedMaxWidth !== te.tabSizingFixedMaxWidth ||
								_.tabSizing !== te.tabSizing) &&
								this.bc(!0),
							(_.labelFormat !== te.labelFormat ||
								_.tabActionLocation !== te.tabActionLocation ||
								_.tabActionCloseVisibility !== te.tabActionCloseVisibility ||
								_.tabActionUnpinVisibility !== te.tabActionUnpinVisibility ||
								_.tabSizing !== te.tabSizing ||
								_.pinnedTabSizing !== te.pinnedTabSizing ||
								_.showIcons !== te.showIcons ||
								_.hasIcons !== te.hasIcons ||
								_.highlightModifiedTabs !== te.highlightModifiedTabs ||
								_.wrapTabs !== te.wrapTabs ||
								!(0, F.$zo)(_.decorations, te.decorations)) &&
								this.Ic();
					}
					updateStyles() {
						this.Ic();
					}
					oc(_, te, Q) {
						this.R.getEditors(w.EditorsOrder.SEQUENTIAL).forEach((Z, se) => {
							(typeof te == "number" && te > se) ||
								(typeof Q == "number" && Q < se) ||
								this.qc(se, Z, _);
						});
					}
					pc(_, te) {
						this.qc(this.R.indexOf(_), _, te);
					}
					qc(_, te, Q) {
						const se = (0, D.$wg)(this.Gb).children[_],
							re = this.Lb.get(_),
							le = this.Mb[_],
							oe = this.Ob[_];
						se && re && le && Q(te, _, se, re, le, oe);
					}
					rc(_, te, Q) {
						const Z = document.createElement("div");
						(Z.draggable = !0),
							Z.setAttribute("role", "tab"),
							Z.classList.add("tab"),
							this.D(d.$Qhb.addTarget(Z));
						const se = document.createElement("div");
						se.classList.add("tab-border-top-container"), Z.appendChild(se);
						const re = this.Lb.create(Z, { hoverDelegate: this.xb() }),
							le = document.createElement("div");
						le.classList.add("tab-actions"), Z.appendChild(le);
						const oe = this,
							ae = new p.$ptc({
								groupId: this.Q.id,
								get editorIndex() {
									return oe.sc(_);
								},
							}),
							pe = new u.$eib(le, {
								ariaLabel: (0, k.localize)(3547, null),
								actionRunner: ae,
							}),
							$e = pe.onWillRun((ve) => {
								ve.action.id === this.Jb.id && this.$c();
							}),
							ye = (0, f.$Xc)(pe, $e, (0, f.$Yc)((0, B.$Xb)(this.Ob, pe))),
							ue = document.createElement("div");
						ue.classList.add("tab-fade-hider"), Z.appendChild(ue);
						const fe = document.createElement("div");
						fe.classList.add("tab-border-bottom-container"), Z.appendChild(fe);
						const me = this.uc(Z, _, te, Q);
						return this.Pb.push((0, f.$Xc)(me, ye, ae, re)), Z;
					}
					sc(_) {
						const te = (0, D.$wg)(this.R.getEditorByIndex(_));
						return this.Q.getIndexOfEditor(te);
					}
					uc(_, te, Q, Z) {
						const se = new f.$Zc(),
							re = async (pe, $e) => {
								if (
									(_.blur(),
									(0, P.$7gb)(pe) && (pe.button !== 0 || (t.$m && pe.ctrlKey)))
								) {
									pe.button === 1 && pe.preventDefault();
									return;
								}
								if (this.ad(pe)) return;
								const ye = this.R.getEditorByIndex(te);
								if (ye)
									if (pe.shiftKey) {
										let ue;
										if (this.tc && this.R.isSelected(this.tc)) ue = this.tc;
										else {
											const fe = (0, D.$wg)(this.Q.activeEditor);
											(this.tc = fe), (ue = fe);
										}
										await this.Cc(ye, ue);
									} else if ((pe.ctrlKey && !t.$m) || (pe.metaKey && t.$m))
										this.R.isSelected(ye)
											? await this.Dc(ye)
											: (await this.Bc(ye), (this.tc = ye));
									else {
										const ue = this.R.isSelected(ye)
											? this.Q.selectedEditors.filter((fe) => !fe.matches(ye))
											: [];
										await this.Q.openEditor(
											ye,
											{
												preserveFocus: $e,
												activation: x.EditorActivation.ACTIVATE,
											},
											{ inactiveSelection: ue, focusTabControl: !0 },
										);
									}
							},
							le = (pe) => {
								P.$ahb.stop(pe);
								const $e = this.R.getEditorByIndex(te);
								$e && this.sb($e, pe, _);
							};
						se.add((0, P.$0fb)(_, P.$$gb.MOUSE_DOWN, (pe) => re(pe, !1))),
							se.add((0, P.$0fb)(_, d.EventType.Tap, (pe) => re(pe, !0))),
							se.add(
								(0, P.$0fb)(_, d.EventType.Change, (pe) => {
									Z.setScrollPosition({
										scrollLeft:
											Z.getScrollPosition().scrollLeft - pe.translationX,
									});
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.MOUSE_UP, async (pe) => {
									if (
										(P.$ahb.stop(pe),
										_.blur(),
										((0, P.$7gb)(pe) &&
											(pe.button !== 0 || (t.$m && pe.ctrlKey))) ||
											this.ad(pe))
									)
										return;
									!((pe.ctrlKey && !t.$m) || (pe.metaKey && t.$m)) &&
										!pe.shiftKey &&
										this.Q.selectedEditors.length > 1 &&
										(await this.Ec());
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.AUXCLICK, (pe) => {
									if (pe.button === 1) {
										P.$ahb.stop(pe, !0);
										const $e = this.R.getEditorByIndex(te);
										if ($e) {
											if (
												(0, w.$z1)(
													this.R,
													$e,
													w.EditorCloseMethod.MOUSE,
													this.P.partOptions,
												)
											)
												return;
											this.$c(),
												this.Jb.run({
													groupId: this.Q.id,
													editorIndex: this.Q.getIndexOfEditor($e),
												});
										}
									}
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.KEY_DOWN, (pe) => {
									const $e = new C.$7fb(pe);
									$e.shiftKey && $e.keyCode === m.KeyCode.F10 && le(pe);
								}),
							),
							se.add(
								(0, P.$0fb)(_, d.EventType.Contextmenu, (pe) => {
									le(pe);
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.KEY_UP, (pe) => {
									const $e = new C.$7fb(pe);
									let ye = !1;
									if (
										$e.equals(m.KeyCode.Enter) ||
										$e.equals(m.KeyCode.Space)
									) {
										ye = !0;
										const ue = this.R.getEditorByIndex(te);
										ue && this.Q.openEditor(ue);
									} else if (
										[
											m.KeyCode.LeftArrow,
											m.KeyCode.RightArrow,
											m.KeyCode.UpArrow,
											m.KeyCode.DownArrow,
											m.KeyCode.Home,
											m.KeyCode.End,
										].some((ue) => $e.equals(ue))
									) {
										let ue = this.sc(te);
										$e.equals(m.KeyCode.LeftArrow) ||
										$e.equals(m.KeyCode.UpArrow)
											? (ue = ue - 1)
											: $e.equals(m.KeyCode.RightArrow) ||
													$e.equals(m.KeyCode.DownArrow)
												? (ue = ue + 1)
												: $e.equals(m.KeyCode.Home)
													? (ue = 0)
													: (ue = this.Q.count - 1);
										const fe = this.Q.getEditorByIndex(ue);
										fe &&
											((ye = !0),
											this.Q.openEditor(
												fe,
												{ preserveFocus: !0 },
												{ focusTabControl: !0 },
											));
									}
									ye && P.$ahb.stop(pe, !0),
										Z.setScrollPosition({ scrollLeft: Q.scrollLeft });
								}),
							);
						for (const pe of [d.EventType.Tap, P.$$gb.DBLCLICK])
							se.add(
								(0, P.$0fb)(_, pe, ($e) => {
									if (pe === P.$$gb.DBLCLICK) P.$ahb.stop($e);
									else if ($e.tapCount !== 2) return;
									const ye = this.R.getEditorByIndex(te);
									if (ye && this.R.isPinned(ye))
										switch (
											this.P.partOptions.doubleClickTabToToggleEditorGroupSizes
										) {
											case "maximize":
												this.P.toggleMaximizeGroup(this.Q);
												break;
											case "expand":
												this.P.toggleExpandGroup(this.Q);
												break;
											case "off":
												break;
										}
									else this.Q.pinEditor(ye);
								}),
							);
						se.add(
							(0, P.$0fb)(
								_,
								P.$$gb.CONTEXT_MENU,
								(pe) => {
									P.$ahb.stop(pe, !0);
									const $e = this.R.getEditorByIndex(te);
									$e && this.sb($e, pe, _);
								},
								!0,
							),
						);
						let oe,
							ae = !1;
						return (
							se.add(
								new P.$Hhb(_, {
									onDragStart: (pe) => {
										const $e = this.R.getEditorByIndex(te);
										if (!$e) return;
										ae = this.pb(pe);
										const ye = this.Q.selectedEditors;
										if (
											(this.a.setData(
												ye.map(
													(ue) =>
														new S.$LSb({ editor: ue, groupId: this.Q.id }),
												),
												S.$LSb.prototype,
											),
											pe.dataTransfer)
										)
											if (
												((pe.dataTransfer.effectAllowed = "copyMove"),
												ye.length > 1)
											) {
												const ue = `${$e.getName()} + ${ye.length - 1}`;
												(0, Y.$Phb)(
													pe,
													ue,
													"monaco-editor-group-drag-image",
													this.w(v.$ES),
													this.w(v.$FS),
												);
											} else pe.dataTransfer.setDragImage(_, 0, 0);
										this.rb(ye, pe, ae),
											(0, P.$hgb)((0, P.getWindow)(this.N), () =>
												this.wc(_, !1, pe, te),
											);
									},
									onDrag: (pe) => {
										oe = pe;
									},
									onDragEnter: (pe) => {
										if (!this.vc(pe)) {
											pe.dataTransfer && (pe.dataTransfer.dropEffect = "none");
											return;
										}
										this.a.hasData(S.$LSb.prototype) ||
											(pe.dataTransfer &&
												(pe.dataTransfer.dropEffect = "copy")),
											this.wc(_, !0, pe, te);
									},
									onDragOver: (pe, $e) => {
										if ($e >= ie.Bb) {
											const ye = this.R.getEditorByIndex(te);
											ye &&
												this.R.activeEditor !== ye &&
												this.Q.openEditor(ye, { preserveFocus: !0 });
										}
										this.wc(_, !0, pe, te);
									},
									onDragEnd: async (pe) => {
										this.wc(_, !1, pe, te);
										const $e = this.a.getData(S.$LSb.prototype);
										if (
											(this.a.clearData(S.$LSb.prototype),
											!ae || (0, S.$WSb)() || !$e || $e.length === 0)
										)
											return;
										const ye = await this.ob(pe, _);
										if (!ye) return;
										const ue = ye.activeGroup,
											fe = $e.map((me) => ({ editor: me.identifier.editor }));
										this.qb(oe ?? pe, ue.id, $e[0].identifier.editor)
											? this.Q.moveEditors(fe, ue)
											: this.Q.copyEditors(fe, ue),
											ue.focus();
									},
									onDrop: (pe) => {
										this.wc(_, !1, pe, te);
										let $e = te;
										this.zc(pe, _) === "right" && $e++, this.bd(pe, $e, Q);
									},
								}),
							),
							se
						);
					}
					vc(_) {
						if (this.b.hasData(S.$MSb.prototype)) {
							const te = this.b.getData(S.$MSb.prototype);
							return !(
								Array.isArray(te) &&
								te.length > 0 &&
								te[0].identifier === this.Q.id
							);
						}
						return !!(
							this.a.hasData(S.$LSb.prototype) ||
							(_.dataTransfer && _.dataTransfer.types.length > 0)
						);
					}
					wc(_, te, Q, Z) {
						const se = typeof Z == "number";
						let re;
						te
							? se
								? (re = this.Ac(Q, Z, _))
								: (re = {
										leftElement: _.lastElementChild,
										rightElement: void 0,
									})
							: (re = void 0),
							this.yc(re);
					}
					yc(_) {
						const te = this.xc;
						if (
							te === _ ||
							(te &&
								_ &&
								te.leftElement === _.leftElement &&
								te.rightElement === _.rightElement)
						)
							return;
						const Q = "drop-target-left",
							Z = "drop-target-right";
						te &&
							(te.leftElement?.classList.remove(Q),
							te.rightElement?.classList.remove(Z)),
							_ &&
								(_.leftElement?.classList.add(Q),
								_.rightElement?.classList.add(Z)),
							(this.xc = _);
					}
					zc(_, te) {
						const Q = te.getBoundingClientRect();
						return _.clientX - Q.left <= Q.width / 2 ? "left" : "right";
					}
					Ac(_, te, Q) {
						const Z = this.zc(_, Q) === "left",
							se = te === this.R.count - 1;
						if (Z && te === 0) return { leftElement: void 0, rightElement: Q };
						if (!Z && se) return { leftElement: Q, rightElement: void 0 };
						const le = Z ? Q.previousElementSibling : Q,
							oe = Z ? Q : Q.nextElementSibling;
						return { leftElement: le, rightElement: oe };
					}
					async Bc(_) {
						this.Q.isActive(_) ||
							(await this.Q.setSelection(_, this.Q.selectedEditors));
					}
					async Cc(_, te) {
						const Q = this.Q.getIndexOfEditor(_);
						if (Q === -1) throw new X.$gb();
						const Z = this.Q.getIndexOfEditor(te);
						if (Z === -1) throw new X.$gb();
						let se = this.Q.selectedEditors,
							re = Z;
						for (; re >= 0 && re <= this.Q.count - 1; ) {
							re = Z < Q ? re - 1 : re + 1;
							const $e = this.Q.getEditorByIndex(re);
							if (!$e || !this.Q.isSelected($e)) break;
							se = se.filter((ye) => !ye.matches($e));
						}
						const le = Z < Q ? Z : Q,
							oe = Z < Q ? Q : Z,
							ae = this.Q.getEditors(w.EditorsOrder.SEQUENTIAL).slice(
								le,
								oe + 1,
							);
						for (const $e of ae) this.Q.isSelected($e) || se.push($e);
						const pe = se.filter(($e) => !$e.matches(_));
						await this.Q.setSelection(_, pe);
					}
					async Dc(_) {
						const te = this.Q.isActive(_);
						if (te && this.Q.selectedEditors.length === 1) return;
						let Q = (0, D.$wg)(this.Q.activeEditor);
						if (te) {
							const se = this.Q.getEditors(w.EditorsOrder.MOST_RECENTLY_ACTIVE);
							for (let re = 1; re < se.length; re++) {
								const le = se[re];
								if (this.Q.isSelected(le)) {
									Q = le;
									break;
								}
							}
						}
						const Z = this.Q.selectedEditors.filter(
							(se) => !se.matches(_) && !se.matches(Q),
						);
						await this.Q.setSelection(Q, Z);
					}
					async Ec() {
						if (this.Q.selectedEditors.length > 1) {
							const _ = (0, D.$wg)(this.Q.activeEditor);
							await this.Q.setSelection(_, []);
						}
					}
					Fc() {
						const { labelFormat: _ } = this.P.partOptions,
							{ verbosity: te, shortenDuplicates: Q } = this.Hc(_),
							Z = [];
						let se = -1;
						this.R.getEditors(w.EditorsOrder.SEQUENTIAL).forEach((re, le) => {
							Z.push({
								editor: re,
								name: re.getName(),
								description: re.getDescription(te),
								forceDescription: re.hasCapability(
									w.EditorInputCapabilities.ForceDescription,
								),
								title: re.getTitle(w.Verbosity.LONG),
								ariaLabel: (0, E.$yVb)(re, le, this.Q, this.O.count),
							}),
								re === this.R.activeEditor && (se = le);
						}),
							Q && this.Gc(Z),
							(this.Mb = Z),
							(this.Nb = Z[se]);
					}
					Gc(_) {
						const te = new Map();
						for (const Q of _)
							typeof Q.description == "string"
								? (0, l.$Dc)(te, Q.name, []).push(Q)
								: (Q.description = "");
						for (const [, Q] of te) {
							if (Q.length === 1 && !Q[0].forceDescription) {
								Q[0].description = "";
								continue;
							}
							const Z = new Map();
							for (const oe of Q) (0, l.$Dc)(Z, oe.description, []).push(oe);
							let se = !1;
							for (const [, oe] of Z)
								if (!se && oe.length > 1) {
									const [ae, ...pe] = oe.map(({ editor: $e }) =>
										$e.getDescription(w.Verbosity.LONG),
									);
									se = pe.some(($e) => $e !== ae);
								}
							if (se) {
								Z.clear();
								for (const oe of Q)
									(oe.description = oe.editor.getDescription(w.Verbosity.LONG)),
										(0, l.$Dc)(Z, oe.description, []).push(oe);
							}
							const re = [];
							for (const [oe] of Z) re.push(oe);
							if (re.length === 1) {
								for (const oe of Z.get(re[0]) || [])
									oe.forceDescription || (oe.description = "");
								continue;
							}
							const le = (0, i.$AO)(re, this.Tb.sep);
							re.forEach((oe, ae) => {
								for (const pe of Z.get(oe) || []) pe.description = le[ae];
							});
						}
					}
					Hc(_) {
						switch (_) {
							case "short":
								return { verbosity: w.Verbosity.SHORT, shortenDuplicates: !1 };
							case "medium":
								return { verbosity: w.Verbosity.MEDIUM, shortenDuplicates: !1 };
							case "long":
								return { verbosity: w.Verbosity.LONG, shortenDuplicates: !1 };
							default:
								return { verbosity: w.Verbosity.MEDIUM, shortenDuplicates: !0 };
						}
					}
					Ic(_) {
						if (this.Fb) {
							let te = this.w($.$gFb);
							!te &&
								(0, U.$gP)(this.h.type) &&
								(te = this.w($.$YEb) || this.w(v.$OP)),
								te
									? (this.Fb.classList.add("tabs-border-bottom"),
										this.Fb.style.setProperty(
											"--tabs-border-bottom-color",
											te.toString(),
										))
									: (this.Fb.classList.remove("tabs-border-bottom"),
										this.Fb.style.removeProperty("--tabs-border-bottom-color"));
						}
						this.oc((te, Q, Z, se, re, le) => {
							this.Jc(te, Q, Z, se, re, le);
						}),
							this.hb(),
							this.layout(this.Qb, _);
					}
					Jc(_, te, Q, Z, se, re) {
						const le = this.R.isSticky(te),
							oe = this.P.partOptions;
						this.Kc(_, te, Q, Z, se);
						const ae = le && oe.tabActionUnpinVisibility,
							pe = !ae && oe.tabActionCloseVisibility,
							$e = ae || pe;
						let ye;
						$e ? (ye = ae ? this.Kb : this.Jb) : (ye = le ? this.Kb : this.Jb),
							re.hasAction(ye) ||
								(re.isEmpty() || re.clear(),
								re.push(ye, { icon: !0, label: !1, keybinding: this.ub(ye) })),
							Q.classList.toggle("pinned-action-off", le && !ae),
							Q.classList.toggle("close-action-off", !ae && !pe);
						for (const fe of ["left", "right"])
							Q.classList.toggle(
								`tab-actions-${fe}`,
								$e && oe.tabActionLocation === fe,
							);
						const ue =
							le && oe.pinnedTabSizing === "shrink" ? "shrink" : oe.tabSizing;
						for (const fe of ["fit", "shrink", "fixed"])
							Q.classList.toggle(`sizing-${fe}`, ue === fe);
						Q.classList.toggle("has-icon", oe.showIcons && oe.hasIcons),
							Q.classList.toggle("sticky", le);
						for (const fe of ["normal", "compact", "shrink"])
							Q.classList.toggle(
								`sticky-${fe}`,
								le && oe.pinnedTabSizing === fe,
							);
						if (!oe.wrapTabs && le && oe.pinnedTabSizing !== "normal") {
							let fe = 0;
							switch (oe.pinnedTabSizing) {
								case "compact":
									fe = ie.Ab.compact;
									break;
								case "shrink":
									fe = ie.Ab.shrink;
									break;
							}
							Q.style.left = `${te * fe}px`;
						} else Q.style.left = "auto";
						this.Oc(te, Q), this.Lc(this.P.activeGroup === this.Q, _, Q, re);
					}
					Kc(_, te, Q, Z, se) {
						const re = this.P.partOptions;
						let le,
							oe = !1,
							ae = !!re.decorations?.badges;
						const pe = !!re.decorations?.colors;
						let $e;
						re.pinnedTabSizing === "compact" && this.R.isSticky(te)
							? ((le =
									re.showIcons && re.hasIcons
										? ""
										: se.name?.charAt(0).toUpperCase()),
								($e = ""),
								(oe = !0),
								(ae = !1))
							: ((le = se.name), ($e = se.description || "")),
							se.ariaLabel &&
								(Q.setAttribute("aria-label", se.ariaLabel),
								Q.setAttribute("aria-description", "")),
							Z.setResource(
								{
									name: le,
									description: $e,
									resource: w.$A1.getOriginalUri(_, {
										supportSideBySide: w.SideBySideEditor.BOTH,
									}),
								},
								{
									title: this.wb(_),
									extraClasses: (0, B.$Lb)(
										["tab-label", ae ? "tab-label-has-badge" : void 0].concat(
											_.getLabelExtraClasses(),
										),
									),
									italic: !this.R.isPinned(_),
									forceLabel: oe,
									fileDecorations: { colors: pe, badges: ae },
									icon: _.getIcon(),
									hideIcon: re.showIcons === !1,
								},
							);
						const ye = w.$A1.getOriginalUri(_, {
							supportSideBySide: w.SideBySideEditor.PRIMARY,
						});
						ye
							? Q.setAttribute("data-resource-name", (0, N.$jh)(ye))
							: Q.removeAttribute("data-resource-name");
					}
					Lc(_, te, Q, Z) {
						const se = this.R.isActive(te),
							re = this.Nc(_, se, te, Q);
						this.Mc(_, !re, te, Q, Z);
					}
					Mc(_, te, Q, Z, se) {
						const re = this.R.isActive(Q),
							le = this.R.isSelected(Q);
						if (
							(Z.classList.toggle("active", re),
							Z.classList.toggle("selected", le),
							Z.setAttribute("aria-selected", re ? "true" : "false"),
							(Z.tabIndex = re ? 0 : -1),
							se.setFocusable(re),
							re)
						) {
							const ae = this.w(_ ? $.$1Eb : $.$2Eb);
							Z.classList.toggle("tab-border-bottom", !!ae),
								Z.style.setProperty("--tab-border-bottom-color", ae ?? "");
						}
						let oe = null;
						te &&
							(re && (oe = this.w(_ ? $.$3Eb : $.$4Eb)),
							oe === null && le && (oe = this.w($.$5Eb))),
							Z.classList.toggle("tab-border-top", !!oe),
							Z.style.setProperty("--tab-border-top-color", oe ?? "");
					}
					Nc(_, te, Q, Z) {
						let se = !1;
						if (Q.isDirty() && !Q.isSaving())
							if (
								(Z.classList.add("dirty"),
								this.P.partOptions.highlightModifiedTabs)
							) {
								let re;
								_ && te
									? (re = this.w($.$$Eb))
									: _ && !te
										? (re = this.w($.$_Eb))
										: !_ && te
											? (re = this.w($.$aFb))
											: (re = this.w($.$bFb)),
									re &&
										((se = !0),
										Z.classList.add("dirty-border-top"),
										Z.style.setProperty("--tab-dirty-border-top-color", re));
							} else
								Z.classList.remove("dirty-border-top"),
									Z.style.removeProperty("--tab-dirty-border-top-color");
						else
							Z.classList.remove("dirty", "dirty-border-top"),
								Z.style.removeProperty("--tab-dirty-border-top-color");
						return se;
					}
					Oc(_, te) {
						const Z = this.R.isSticky(_) && this.R.stickyCount === _ + 1,
							se = this.R.stickyCount !== this.R.count,
							re =
								(Z && se ? this.w($.$ZEb) : void 0) ||
								this.w($.$YEb) ||
								this.w(v.$OP);
						(te.style.borderRight = re ? `1px solid ${re}` : ""),
							(te.style.outlineColor = this.w(v.$PP) || "");
					}
					ib(_) {
						return this.P.activeGroup === this.Q
							? _
							: {
									primary: this.P.partOptions.alwaysShowEditorActions
										? _.primary
										: _.primary.filter((Q) => Q.id === H.$0Vb),
									secondary: _.secondary,
								};
					}
					getHeight() {
						return this.Qb.used ? this.Qb.used.height : this.Qc();
					}
					Qc() {
						let _;
						return (
							this.Wc
								? this.P.partOptions.wrapTabs &&
									this.Fb?.classList.contains("wrapping")
									? (_ = this.Fb.offsetHeight)
									: (_ = this.vb)
								: (_ = 0),
							_
						);
					}
					layout(_, te) {
						if ((Object.assign(this.Qb, _), this.Wc)) {
							if (!this.Rb.value) {
								const Q = (0, P.$hgb)((0, P.getWindow)(this.N), () => {
									this.Rc(this.Qb, this.Rb.value?.options), this.Rb.clear();
								});
								this.Rb.value = { options: te, dispose: () => Q.dispose() };
							}
							te?.forceRevealActiveTab &&
								(this.Rb.value.options = {
									...this.Rb.value.options,
									forceRevealActiveTab: !0,
								});
						}
						return (
							this.Qb.used ||
								(this.Qb.used = new P.$pgb(_.container.width, this.Qc())),
							this.Qb.used
						);
					}
					Rc(_, te) {
						_.container !== P.$pgb.None &&
							_.available !== P.$pgb.None &&
							this.Sc(_, te);
						const Q = this.Qb.used,
							Z = (this.Qb.used = new P.$pgb(_.container.width, this.Qc()));
						Q && Q.height !== Z.height && this.Q.relayout();
					}
					Sc(_, te) {
						this.Tc(_) || this.Uc(te);
					}
					Tc(_) {
						const [te, Q, Z, se] = (0, D.$xg)(
								this.Fb,
								this.Gb,
								this.g,
								this.Hb,
							),
							re = te.classList.contains("wrapping");
						let le = re;
						function oe(ae) {
							(le = ae),
								te.classList.toggle("wrapping", le),
								Q.style.setProperty(
									"--last-tab-margin-right",
									le ? `${Z.offsetWidth}px` : "0",
								);
							for (const pe of Q.children) pe.classList.remove("last-in-row");
						}
						if (this.P.partOptions.wrapTabs) {
							const ae = Q.offsetWidth,
								pe = Q.scrollWidth,
								$e = () => {
									const ye = this.Zc();
									return ye
										? !(ye.offsetWidth + Z.offsetWidth - _.available.width > 1)
										: !0;
								};
							(le || (pe > ae && $e())) && oe(!0),
								le &&
									(Q.offsetHeight > _.available.height ||
										(pe === ae && Q.offsetHeight === this.vb) ||
										!$e()) &&
									oe(!1);
						} else re && oe(!1);
						if (le && !re) {
							const ae = Q.offsetWidth;
							se.setScrollDimensions({ width: ae, scrollWidth: ae });
						}
						if (le) {
							const ae = new Map();
							let pe, $e;
							for (const ye of Q.children) {
								const ue = ye,
									fe = ue.offsetTop;
								fe !== pe && ((pe = fe), $e && ae.set($e, !0)),
									($e = ue),
									ae.set(ue, !1);
							}
							$e && ae.set($e, !0);
							for (const [ye, ue] of ae) ye.classList.toggle("last-in-row", ue);
						}
						return le;
					}
					Uc(_) {
						const [te, Q] = (0, D.$xg)(this.Gb, this.Hb),
							Z = te.offsetWidth,
							se = te.scrollWidth;
						let re = 0;
						if (this.R.stickyCount > 0) {
							let Le = 0;
							switch (this.P.partOptions.pinnedTabSizing) {
								case "compact":
									Le = ie.Ab.compact;
									break;
								case "shrink":
									Le = ie.Ab.shrink;
									break;
							}
							re = this.R.stickyCount * Le;
						}
						const le = this.R.activeEditor
								? this.Xc(this.R.activeEditor)
								: void 0,
							[oe, ae] = le ?? [void 0, void 0];
						let pe =
								this.P.partOptions.pinnedTabSizing !== "normal" &&
								typeof ae == "number" &&
								this.R.isSticky(ae),
							$e = Z - re;
						this.R.stickyCount > 0 && $e < ie.Ab.fit
							? (te.classList.add("disable-sticky-tabs"),
								($e = Z),
								(re = 0),
								(pe = !1))
							: te.classList.remove("disable-sticky-tabs");
						let ye, ue;
						!this.Sb && oe && ((ye = oe.offsetLeft), (ue = oe.offsetWidth));
						const { width: fe, scrollWidth: me } = Q.getScrollDimensions();
						Q.setScrollDimensions({ width: Z, scrollWidth: se });
						const ve = fe !== Z || me !== se;
						if (
							this.Sb ||
							typeof ye != "number" ||
							typeof ue != "number" ||
							pe ||
							(!ve && !_?.forceRevealActiveTab)
						) {
							this.Sb = !1;
							return;
						}
						const ge = Q.getScrollPosition().scrollLeft,
							be = ue <= $e,
							Ce = ye - re;
						be && ge + $e < Ce + ue
							? Q.setScrollPosition({ scrollLeft: ge + (Ce + ue - (ge + $e)) })
							: (ge > Ce || !be) && Q.setScrollPosition({ scrollLeft: Ce });
					}
					Vc() {
						(0, D.$wg)(this.Fb).classList.toggle("empty", !this.Wc),
							!this.Wc && this.Qb && (this.Qb.used = void 0);
					}
					get Wc() {
						return this.R.count > 0;
					}
					Xc(_) {
						const te = this.R.indexOf(_),
							Q = this.Yc(te);
						if (Q) return [Q, te];
					}
					Yc(_) {
						if (_ >= 0) return (0, D.$wg)(this.Gb).children[_];
					}
					Zc() {
						return this.Yc(this.R.count - 1);
					}
					$c() {
						this.Sb = !0;
					}
					ad(_) {
						let te;
						return (
							(0, P.$7gb)(_)
								? (te = _.target || _.srcElement)
								: (te = _.initialTarget),
							!!(0, P.$Egb)(te, "action-item", "tab")
						);
					}
					async bd(_, te, Q) {
						P.$ahb.stop(_, !0),
							this.wc(Q, !1, _, te),
							Q.classList.remove("scroll");
						let Z = this.R instanceof J.$jtc ? te + this.Q.stickyCount : te;
						const se = {
							sticky: this.R instanceof J.$itc && this.R.stickyCount === Z,
							index: Z,
						};
						if (this.b.hasData(S.$MSb.prototype)) {
							const re = this.b.getData(S.$MSb.prototype);
							if (Array.isArray(re) && re.length > 0) {
								const le = this.O.getGroup(re[0].identifier);
								if (le) {
									const oe = { index: Z };
									this.qb(_, le.id) ||
										(oe.mode = T.MergeGroupMode.COPY_EDITORS),
										this.P.mergeGroup(le, this.Q, oe);
								}
								this.Q.focus(), this.b.clearData(S.$MSb.prototype);
							}
						} else if (this.a.hasData(S.$LSb.prototype)) {
							const re = this.a.getData(S.$LSb.prototype);
							if (Array.isArray(re) && re.length > 0) {
								const le = this.O.getGroup(re[0].identifier.groupId);
								if (le)
									for (const oe of re) {
										const ae = oe.identifier.editor;
										if (le.id !== oe.identifier.groupId) continue;
										const pe = le.getIndexOfEditor(ae);
										le === this.Q && pe < Z && Z--,
											this.qb(_, oe.identifier.groupId, ae)
												? le.moveEditor(ae, this.Q, { ...se, index: Z })
												: le.copyEditor(ae, this.Q, { ...se, index: Z }),
											Z++;
									}
							}
							this.Q.focus(), this.a.clearData(S.$LSb.prototype);
						} else if (this.c.hasData(G.$b3b.prototype)) {
							const re = this.c.getData(G.$b3b.prototype);
							if (Array.isArray(re) && re.length > 0) {
								const le = [];
								for (const oe of re) {
									const ae = await this.Yb.removeDragOperationTransfer(
										oe.identifier,
									);
									if (ae) {
										const pe = await (0, S.$NSb)(ae);
										le.push(
											...pe.map(($e) => ({
												...$e,
												options: { ...$e.options, pinned: !0, index: Z },
											})),
										);
									}
								}
								this.Wb.openEditors(le, this.Q, { validateTrust: !0 });
							}
							this.c.clearData(G.$b3b.prototype);
						} else
							this.U.createInstance(S.$OSb, {
								allowWorkspaceOpen: !1,
							}).handleDrop(
								_,
								(0, P.getWindow)(this.N),
								() => this.Q,
								() => this.Q.focus(),
								se,
							);
					}
					dispose() {
						super.dispose(), (this.Pb = (0, f.$Vc)(this.Pb));
					}
				};
				(e.$ktc = ne),
					(e.$ktc =
						ne =
						ie =
							Ne(
								[
									j(5, a.$Xxb),
									j(6, h.$Li),
									j(7, n.$6j),
									j(8, c.$uZ),
									j(9, I.$4N),
									j(10, o.$DJ),
									j(11, y.$iP),
									j(12, M.$IY),
									j(13, R.$I8),
									j(14, V.$c3b),
									j(15, K.$E6),
									j(16, W.$asb),
								],
								ne,
							)),
					(0, y.$oP)((ee, _) => {
						const te = ee.getColor($.$YEb);
						te &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title > .tabs-and-actions-container.wrapping .tabs-container > .tab {
				border-bottom: 1px solid ${te};
			}
		`);
						const Q = ee.getColor(v.$PP);
						Q &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active,
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active:hover  {
				outline: 1px solid;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.selected:not(.active):not(:hover)  {
				outline: 1px dotted;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active:focus {
				outline-style: dashed;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active {
				outline: 1px dotted;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover  {
				outline: 1px dashed;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active:hover > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.dirty > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.sticky > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover > .tab-actions .action-label {
				opacity: 1 !important;
			}
		`);
						const Z = ee.getColor(v.$OP);
						Z &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .editor-actions {
				outline: 1px solid ${Z}
			}
		`);
						const se = ee.getColor($.$UEb);
						se &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:not(.selected):hover {
				background-color: ${se} !important;
			}
		`);
						const re = ee.getColor($.$VEb);
						re &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:not(.selected):hover  {
				background-color: ${re} !important;
			}
		`);
						const le = ee.getColor($.$WEb);
						le &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:not(.selected):hover  {
				color: ${le} !important;
			}
		`);
						const oe = ee.getColor($.$XEb);
						oe &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:not(.selected):hover  {
				color: ${oe} !important;
			}
		`);
						const ae = ee.getColor($.$8Eb);
						ae &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:hover > .tab-border-bottom-container {
				display: block;
				position: absolute;
				left: 0;
				pointer-events: none;
				width: 100%;
				z-index: 10;
				bottom: 0;
				height: 1px;
				background-color: ${ae};
			}
		`);
						const pe = ee.getColor($.$9Eb);
						if (
							(pe &&
								_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover > .tab-border-bottom-container  {
				display: block;
				position: absolute;
				left: 0;
				pointer-events: none;
				width: 100%;
				z-index: 10;
				bottom: 0;
				height: 1px;
				background-color: ${pe};
			}
		`),
							!(0, U.$gP)(ee.type) && !z.$Rfb && !Q)
						) {
							const $e = (0, $.$LEb)(ee),
								ye = ee.getColor(v.$8P),
								ue = ee.getColor($.$fFb),
								fe = ee.getColor($.$kFb);
							let me;
							ue && ye && (me = ue.flatten(ye, ye, $e));
							let ve;
							ue && ye && fe && ye && (ve = ue.flatten(ye, fe, ye, $e));
							const ge = (xe, He, Ke = !1) => `
			.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-shrink:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after,
			.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-fixed:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after {
				background: linear-gradient(to left, ${xe}, transparent) !important;
			}

			.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-shrink:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after,
			.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-fixed:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after {
				background: linear-gradient(to left, ${He}, transparent) !important;
			}
		`;
							if (se && me && ve) {
								const xe = se.flatten(me),
									He = se.flatten(ve);
								_.addRule(ge(xe, He, !0));
							}
							if (re && me && ve) {
								const xe = re.flatten(me),
									He = re.flatten(ve);
								_.addRule(ge(xe, He));
							}
							if (fe && ve) {
								const xe = fe.flatten(ve);
								_.addRule(`
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container.active > .title .tabs-container > .tab.sizing-shrink.dragged-over:not(.active):not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container:not(.active) > .title .tabs-container > .tab.sizing-shrink.dragged-over:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container.active > .title .tabs-container > .tab.sizing-fixed.dragged-over:not(.active):not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container:not(.active) > .title .tabs-container > .tab.sizing-fixed.dragged-over:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${xe}, transparent) !important;
				}
		`);
							}
							const be = (xe, He, Ke, Je) => `
				.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-shrink${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-fixed${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${xe}, transparent);
				}

				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-shrink${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-fixed${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${He}, transparent);
				}
		`,
								Ce = ee.getColor($.$MEb);
							if (Ce && me && ve) {
								const xe = Ce.flatten(me),
									He = Ce.flatten(ve);
								_.addRule(be(xe, He, !0, !0));
							}
							const Le = ee.getColor($.$NEb);
							if (Le && me && ve) {
								const xe = Le.flatten(me),
									He = Le.flatten(ve);
								_.addRule(be(xe, He, !1, !0));
							}
							const Fe = ee.getColor($.$OEb);
							if (Fe && me && ve) {
								const xe = Fe.flatten(me),
									He = Fe.flatten(ve);
								_.addRule(be(xe, He, !0, !1));
							}
							const Oe = ee.getColor($.$PEb);
							if (Oe && me && ve) {
								const xe = Oe.flatten(me),
									He = Oe.flatten(ve);
								_.addRule(be(xe, He, !1, !1));
							}
						}
					});
			},
		),
		