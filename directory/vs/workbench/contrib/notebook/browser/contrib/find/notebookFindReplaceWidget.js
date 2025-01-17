import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../../base/browser/ui/contextview/contextview.js';
import '../../../../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import '../../../../../../base/browser/ui/findinput/findInput.js';
import '../../../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../../../../base/browser/ui/sash/sash.js';
import '../../../../../../base/browser/ui/toggle/toggle.js';
import '../../../../../../base/browser/ui/widget.js';
import '../../../../../../base/common/actions.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/platform.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../editor/contrib/find/browser/findState.js';
import '../../../../../../editor/contrib/find/browser/findWidget.js';
import '../../../../../../editor/contrib/find/browser/replacePattern.js';
import '../../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/history/browser/contextScopedHistoryWidget.js';
import '../../../../../../platform/hover/browser/hover.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/theme/browser/defaultStyles.js';
import '../../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../../../extensions/browser/extensionsIcons.js';
import './findFilters.js';
import '../../../common/notebookCommon.js';
import '../../../../../../css!vs/workbench/contrib/notebook/browser/contrib/find/notebookFindReplaceWidget.js';
define(
			de[1839],
			he([
				1, 0, 4, 7, 105, 276, 437, 932, 436, 277, 268, 235, 50, 15, 14, 27, 3,
				12, 26, 786, 961, 1550, 92, 10, 8, 49, 413, 72, 5, 106, 51, 79, 35, 466,
				1838, 70, 2453,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SFc = e.$RFc = e.$QFc = e.$PFc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const O = t.localize(7752, null),
					B = t.localize(7753, null),
					U = t.localize(7754, null),
					z = t.localize(7755, null),
					F = t.localize(7756, null),
					x = t.localize(7757, null),
					H = t.localize(7758, null),
					q = t.localize(7759, null),
					V = t.localize(7760, null),
					G = t.localize(7761, null),
					K = t.localize(7762, null);
				e.$PFc = (0, D.$$O)(
					"find-filter",
					n.$ak.filter,
					t.localize(7763, null),
				);
				const J = t.localize(7764, null),
					W = t.localize(7765, null),
					X = t.localize(7766, null),
					Y = t.localize(7767, null),
					ie = t.localize(7768, null),
					ne = 419,
					ee = 4;
				let _ = class extends C.$Pob {
					constructor(re, le, oe, ae, pe) {
						super(le, { getActions: () => this.a() }, pe, {
							...oe,
							actionRunner: ae,
							classNames: le.class,
							anchorAlignmentProvider: () => E.AnchorAlignment.RIGHT,
						}),
							(this.filters = re);
					}
					render(re) {
						super.render(re), this.H();
					}
					a() {
						const re = {
								checked: this.filters.markupInput,
								class: void 0,
								enabled: !0,
								id: "findInMarkdownInput",
								label: W,
								run: async () => {
									this.filters.markupInput = !this.filters.markupInput;
								},
								tooltip: "",
							},
							le = {
								checked: this.filters.markupPreview,
								class: void 0,
								enabled: !0,
								id: "findInMarkdownInput",
								label: X,
								run: async () => {
									this.filters.markupPreview = !this.filters.markupPreview;
								},
								tooltip: "",
							},
							oe = {
								checked: this.filters.codeInput,
								class: void 0,
								enabled: !0,
								id: "findInCodeInput",
								label: Y,
								run: async () => {
									this.filters.codeInput = !this.filters.codeInput;
								},
								tooltip: "",
							},
							ae = {
								checked: this.filters.codeOutput,
								class: void 0,
								enabled: !0,
								id: "findInCodeOutput",
								label: ie,
								run: async () => {
									this.filters.codeOutput = !this.filters.codeOutput;
								},
								tooltip: "",
								dispose: () => null,
							};
						return o.$J ? [re, oe] : [re, le, new h.$tj(), oe, ae];
					}
					H() {
						this.element.classList.toggle("checked", this._action.checked);
					}
				};
				_ = Ne([j(4, S.$Xxb)], _);
				class te extends p.$1c {
					constructor(re, le, oe, ae, pe = J) {
						super(),
							(this.filters = re),
							(this.contextMenuService = le),
							(this.instantiationService = oe),
							(this.b = null),
							(this.f = ae.toggleStyles),
							(this.c = new h.$rj(
								"notebookFindFilterAction",
								pe,
								"notebook-filters " + f.ThemeIcon.asClassName(N.$eSb),
							)),
							(this.c.checked = !1),
							(this.a = i.$(".find-filter-button")),
							this.a.classList.add("monaco-custom-toggle"),
							this.h(this.a);
					}
					get container() {
						return this.a;
					}
					width() {
						return 22;
					}
					enable() {
						this.container.setAttribute("aria-disabled", String(!1));
					}
					disable() {
						this.container.setAttribute("aria-disabled", String(!0));
					}
					set visible(re) {
						this.a.style.display = re ? "" : "none";
					}
					get visible() {
						return this.a.style.display !== "none";
					}
					applyStyles(re) {
						const le = this.f;
						(this.a.style.border = "1px solid transparent"),
							(this.a.style.borderRadius = "3px"),
							(this.a.style.borderColor =
								(re && le.inputActiveOptionBorder) || ""),
							(this.a.style.color =
								(re && le.inputActiveOptionForeground) || "inherit"),
							(this.a.style.backgroundColor =
								(re && le.inputActiveOptionBackground) || "");
					}
					h(re) {
						(this.b = this.D(
							new w.$eib(re, {
								actionViewItemProvider: (le, oe) => {
									if (le.id === this.c.id)
										return this.instantiationService.createInstance(
											_,
											this.filters,
											le,
											oe,
											new h.$sj(),
										);
								},
							}),
						)),
							this.b.push(this.c, { icon: !0, label: !1 });
					}
				}
				e.$QFc = te;
				class Q extends d.$Uob {
					constructor(re, le, oe, ae, pe, $e, ye) {
						super(pe, $e, ye),
							(this.filters = re),
							(this.contextMenuService = oe),
							(this.instantiationService = ae),
							(this.bb = !1),
							this.D((0, I.$UCb)(le, this.inputBox)),
							(this.ab = this.D(new te(re, oe, ae, ye))),
							(this.inputBox.paddingRight =
								(this.M?.width() ?? 0) +
								(this.L?.width() ?? 0) +
								(this.J?.width() ?? 0) +
								this.ab.width()),
							this.y.appendChild(this.ab.container);
					}
					setEnabled(re) {
						super.setEnabled(re),
							re && !this.bb ? this.J?.enable() : this.J?.disable();
					}
					updateFilterState(re) {
						(this.bb = re),
							this.J &&
								(this.bb
									? (this.J.disable(),
										(this.J.domNode.tabIndex = -1),
										this.J.domNode.classList.toggle("disabled", !0))
									: (this.J.enable(),
										(this.J.domNode.tabIndex = 0),
										this.J.domNode.classList.toggle("disabled", !1))),
							this.ab.applyStyles(this.bb);
					}
					getCellToolbarActions(re) {
						const ae = { primary: [], secondary: [] };
						return (
							(0, y.$Kyb)(re, { shouldForwardArgs: !0 }, ae, (pe) =>
								/^inline/.test(pe),
							),
							ae
						);
					}
				}
				e.$RFc = Q;
				let Z = class extends a.$Uhb {
					constructor(re, le, oe, ae, pe, $e, ye = new b.$l2b(), ue) {
						super(),
							(this.cb = re),
							(this.db = oe),
							(this.eb = ae),
							(this.fb = pe),
							(this.gb = ye),
							(this.hb = ue),
							(this.Q = ne),
							(this.R = !1),
							(this.S = !1),
							(this.U = !1),
							(this.ab = []),
							(this.bb = []);
						const fe = this.db.getValue(R.$56.findFilters) ?? {
							markupSource: !0,
							markupPreview: !0,
							codeSource: !0,
							codeOutput: !0,
						};
						(this.Y = new A.$m2b(
							fe.markupSource,
							fe.markupPreview,
							fe.codeSource,
							fe.codeOutput,
							{ findScopeType: R.NotebookFindScopeType.None },
						)),
							this.gb.change({ filters: this.Y }, !1),
							this.Y.onDidChange(() => {
								this.gb.change({ filters: this.Y }, !1);
							}),
							(this.b = document.createElement("div")),
							this.b.classList.add("simple-fr-find-part-wrapper"),
							this.D(this.gb.onFindReplaceStateChange((be) => this.xb(be))),
							(this.X = le.createScoped(this.b));
						const me = i.$(".find-replace-progress");
						(this.W = new m.$bpb(me, k.$nyb)), this.b.appendChild(me);
						const ve = le.getContextKeyValue("notebookType") === "interactive";
						(this.L = this.D(
							new s.$i7b(
								{
									label: H,
									className: "codicon toggle left",
									onTrigger: ve
										? () => {}
										: () => {
												(this.S = !this.S),
													this.gb.change({ isReplaceRevealed: this.S }, !1),
													this.Eb();
											},
								},
								$e,
							),
						)),
							this.L.setEnabled(!ve),
							this.L.setExpanded(this.S),
							this.b.appendChild(this.L.domNode),
							(this.c = document.createElement("div")),
							this.c.classList.add("simple-fr-find-part"),
							(this.a = this.D(
								new Q(this.Y, this.X, this.eb, this.fb, null, this.cb, {
									label: O,
									placeholder: B,
									validation: (be) => {
										if (be.length === 0 || !this.a.getRegex()) return null;
										try {
											return new RegExp(be), null;
										} catch (Ce) {
											return (
												(this.U = !1), this.Kb(this.U), { content: Ce.message }
											);
										}
									},
									flexibleWidth: !0,
									showCommonFindToggles: !0,
									inputBoxStyles: k.$wyb,
									toggleStyles: k.$pyb,
								}),
							)),
							(this.r = new c.$Jh(500)),
							this.C(this.a.domNode, (be) => {
								(this.U = this.kb()), this.Kb(this.U), this.Fb();
							}),
							this.D(
								this.a.inputBox.onDidChange(() => {
									this.gb.change({ searchString: this.a.getValue() }, !0);
								}),
							),
							this.a.setRegex(!!this.gb.isRegex),
							this.a.setCaseSensitive(!!this.gb.matchCase),
							this.a.setWholeWords(!!this.gb.wholeWord),
							this.D(
								this.a.onDidOptionChange(() => {
									this.gb.change(
										{
											isRegex: this.a.getRegex(),
											wholeWord: this.a.getWholeWords(),
											matchCase: this.a.getCaseSensitive(),
										},
										!0,
									);
								}),
							),
							this.D(
								this.gb.onFindReplaceStateChange(() => {
									this.a.setRegex(this.gb.isRegex),
										this.a.setWholeWords(this.gb.wholeWord),
										this.a.setCaseSensitive(this.gb.matchCase),
										this.y.setPreserveCase(this.gb.preserveCase);
								}),
							),
							(this.s = document.createElement("div")),
							(this.s.className = "matchesCount"),
							this.Db(),
							(this.t = this.D(
								new s.$i7b(
									{
										label: U,
										icon: s.$c7b,
										onTrigger: () => {
											this.lb(!0);
										},
									},
									$e,
								),
							)),
							(this.w = this.D(
								new s.$i7b(
									{
										label: z,
										icon: s.$d7b,
										onTrigger: () => {
											this.lb(!1);
										},
									},
									$e,
								),
							)),
							(this.Z = this.D(
								new u.$8ib({
									icon: s.$_6b,
									title: F,
									isChecked: !1,
									inputActiveOptionBackground: (0, L.$rP)(L.$YR),
									inputActiveOptionBorder: (0, L.$rP)(L.$WR),
									inputActiveOptionForeground: (0, L.$rP)(L.$ZR),
								}),
							)),
							(this.Z.domNode.style.display = "inline"),
							this.Z.onChange(() => {
								if (this.Z.checked) {
									const Ce = this.hb.getSelections(),
										Le = this.hb.getSelectionViewModels()[0].getSelections();
									Ce.length > 1 || Ce.some((Fe) => Fe.end - Fe.start > 1)
										? ((this.Y.findScope = {
												findScopeType: R.NotebookFindScopeType.Cells,
												selectedCellRanges: Ce,
											}),
											this.zb())
										: Le.length > 1 ||
												Le.some(
													(Fe) => Fe.endLineNumber - Fe.startLineNumber >= 1,
												)
											? ((this.Y.findScope = {
													findScopeType: R.NotebookFindScopeType.Text,
													selectedCellRanges: Ce,
													selectedTextRanges: Le,
												}),
												this.Bb(Le, this.hb.getSelectionViewModels()[0]))
											: ((this.Y.findScope = {
													findScopeType: R.NotebookFindScopeType.Cells,
													selectedCellRanges: Ce,
												}),
												this.zb());
								} else
									(this.Y.findScope = {
										findScopeType: R.NotebookFindScopeType.None,
									}),
										this.Ab(),
										this.Cb();
							});
						const ge = this.D(
							new s.$i7b(
								{
									label: x,
									icon: D.$bP,
									onTrigger: () => {
										this.hide();
									},
								},
								$e,
							),
						);
						this.c.appendChild(this.a.domNode),
							this.c.appendChild(this.s),
							this.c.appendChild(this.t.domNode),
							this.c.appendChild(this.w.domNode),
							this.c.appendChild(this.Z.domNode),
							this.c.appendChild(ge.domNode),
							this.b.appendChild(this.c),
							this.z(this.c, (be) => {
								if (be.equals(g.KeyCode.Escape)) {
									this.hide(), be.preventDefault();
									return;
								}
							}),
							(this.h = this.D(i.$dhb(this.b))),
							this.D(this.h.onDidFocus(this.ob.bind(this))),
							this.D(this.h.onDidBlur(this.pb.bind(this))),
							(this.n = this.D(i.$dhb(this.a.domNode))),
							this.D(this.n.onDidFocus(this.qb.bind(this))),
							this.D(this.n.onDidBlur(this.rb.bind(this))),
							this.D(
								i.$0fb(this.c, "click", (be) => {
									be.stopPropagation();
								}),
							),
							(this.J = document.createElement("div")),
							this.J.classList.add("simple-fr-replace-part"),
							(this.y = this.D(
								new I.$XCb(
									null,
									void 0,
									{
										label: q,
										placeholder: V,
										history: [],
										inputBoxStyles: k.$wyb,
										toggleStyles: k.$pyb,
									},
									le,
									!1,
								),
							)),
							this.J.appendChild(this.y.domNode),
							(this.M = this.D(i.$dhb(this.y.domNode))),
							this.D(this.M.onDidFocus(this.sb.bind(this))),
							this.D(this.M.onDidBlur(this.tb.bind(this))),
							this.D(
								this.y.inputBox.onDidChange(() => {
									this.gb.change({ replaceString: this.y.getValue() }, !0);
								}),
							),
							this.b.appendChild(this.J),
							this.Eb(),
							(this.N = this.D(
								new s.$i7b(
									{
										label: G,
										icon: s.$a7b,
										onTrigger: () => {
											this.mb();
										},
									},
									$e,
								),
							)),
							(this.O = this.D(
								new s.$i7b(
									{
										label: K,
										icon: s.$b7b,
										onTrigger: () => {
											this.nb();
										},
									},
									$e,
								),
							)),
							this.J.appendChild(this.N.domNode),
							this.J.appendChild(this.O.domNode),
							(this.P = this.D(
								new r.Sash(
									this.b,
									{ getVerticalSashLeft: () => 0 },
									{ orientation: r.Orientation.VERTICAL, size: 2 },
								),
							)),
							this.D(
								this.P.onDidStart(() => {
									this.Q = this.jb();
								}),
							),
							this.D(
								this.P.onDidChange((be) => {
									let Ce = this.Q + be.startX - be.currentX;
									Ce < ne && (Ce = ne);
									const Le = this.ib();
									Ce > Le && (Ce = Le),
										(this.b.style.width = `${Ce}px`),
										this.S && (this.y.width = i.$vgb(this.a.domNode)),
										this.a.inputBox.layout();
								}),
							),
							this.D(
								this.P.onDidReset(() => {
									const be = this.jb();
									let Ce = ne;
									be <= ne && (Ce = this.ib()),
										(this.b.style.width = `${Ce}px`),
										this.S && (this.y.width = i.$vgb(this.a.domNode)),
										this.a.inputBox.layout();
								}),
							);
					}
					ib() {
						return this.hb.getLayoutInfo().width - 64;
					}
					jb() {
						return i.$vgb(this.b) - ee * 2;
					}
					getCellToolbarActions(re) {
						const ae = { primary: [], secondary: [] };
						return (
							(0, y.$Kyb)(re, { shouldForwardArgs: !0 }, ae, (pe) =>
								/^inline/.test(pe),
							),
							ae
						);
					}
					get ub() {
						return this.a.getValue();
					}
					get vb() {
						return this.y.getValue();
					}
					get wb() {
						return this.gb.isRegex
							? (0, l.$$1b)(this.vb)
							: l.$91b.fromStaticValue(this.vb);
					}
					get focusTracker() {
						return this.h;
					}
					xb(re) {
						this.yb(), this.Db();
					}
					yb() {
						this.a.setEnabled(this.R), this.y.setEnabled(this.R && this.S);
						const re = this.gb.searchString.length > 0;
						this.N.setEnabled(this.R && this.S && re),
							this.O.setEnabled(this.R && this.S && re),
							this.b.classList.toggle("replaceToggled", this.S),
							this.L.setExpanded(this.S),
							(this.U = this.gb.matchesCount > 0),
							this.Kb(this.U);
					}
					zb() {
						const re = [];
						this.hb.getSelectionViewModels().forEach((oe) => {
							re.push(oe.handle);
						});
						const le = [];
						for (const oe of re)
							le.push({
								handle: oe,
								options: {
									className: "nb-multiCellHighlight",
									outputClassName: "nb-multiCellHighlight",
								},
							});
						this.ab = this.hb.deltaCellDecorations([], le);
					}
					Ab() {
						this.hb.deltaCellDecorations(this.ab, []);
					}
					Bb(re, le) {
						this.hb.changeModelDecorations((oe) => {
							const ae = [];
							for (const pe of re)
								ae.push({
									ownerId: le.handle,
									decorations: [
										{
											range: pe,
											options: {
												description:
													"text search range for notebook search scope",
												isWholeLine: !0,
												className: "nb-findScope",
											},
										},
									],
								});
							this.bb = oe.deltaDecorations([], ae);
						});
					}
					Cb() {
						this.hb.changeModelDecorations((re) => {
							re.deltaDecorations(this.bb, []);
						});
					}
					Db() {}
					dispose() {
						super.dispose(), this.b.remove();
					}
					getDomNode() {
						return this.b;
					}
					reveal(re) {
						if ((re && this.a.setValue(re), this.R)) {
							this.a.select();
							return;
						}
						(this.R = !0),
							this.Kb(this.U),
							setTimeout(() => {
								this.b.classList.add("visible", "visible-transition"),
									this.b.setAttribute("aria-hidden", "false"),
									this.a.select();
							}, 0);
					}
					focus() {
						this.a.focus();
					}
					show(re, le) {
						re && this.a.setValue(re),
							(this.R = !0),
							setTimeout(() => {
								this.b.classList.add("visible", "visible-transition"),
									this.b.setAttribute("aria-hidden", "false"),
									(le?.focus ?? !0) && this.focus();
							}, 0);
					}
					showWithReplace(re, le) {
						re && this.a.setValue(re),
							le && this.y.setValue(le),
							(this.R = !0),
							(this.S = !0),
							this.gb.change({ isReplaceRevealed: this.S }, !1),
							this.Eb(),
							setTimeout(() => {
								this.b.classList.add("visible", "visible-transition"),
									this.b.setAttribute("aria-hidden", "false"),
									this.yb(),
									this.y.focus();
							}, 0);
					}
					Eb() {
						this.S
							? (this.J.style.display = "flex")
							: (this.J.style.display = "none"),
							(this.y.width = i.$vgb(this.a.domNode));
					}
					hide() {
						this.R &&
							((this.Z.checked = !1),
							this.hb.deltaCellDecorations(this.ab, []),
							this.hb.changeModelDecorations((re) => {
								re.deltaDecorations(this.bb, []);
							}),
							this.b.classList.remove("visible-transition"),
							this.b.setAttribute("aria-hidden", "true"),
							setTimeout(() => {
								(this.R = !1),
									this.Kb(this.U),
									this.b.classList.remove("visible");
							}, 200));
					}
					Fb() {
						this.r.trigger(this.Gb.bind(this));
					}
					Gb() {
						this.a.inputBox.addToHistory();
					}
					Hb() {
						return this.a.getRegex();
					}
					Ib() {
						return this.a.getWholeWords();
					}
					Jb() {
						return this.a.getCaseSensitive();
					}
					Kb(re) {
						const le = this.ub.length > 0;
						this.t.setEnabled(this.R && le && re),
							this.w.setEnabled(this.R && le && re);
					}
				};
				(e.$SFc = Z),
					(e.$SFc = Z =
						Ne(
							[
								j(0, S.$Wxb),
								j(1, v.$6j),
								j(2, $.$gj),
								j(3, S.$Xxb),
								j(4, P.$Li),
								j(5, T.$Uyb),
							],
							Z,
						)),
					(0, M.$oP)((se, re) => {
						re.addRule(`
	.notebook-editor {
		--notebook-find-width: ${ne}px;
		--notebook-find-horizontal-padding: ${ee}px;
	}
	`);
					});
			},
		),
		