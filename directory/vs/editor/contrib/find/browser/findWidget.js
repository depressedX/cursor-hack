import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/browser/ui/widget.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import './findModel.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/history/browser/contextScopedHistoryWidget.js';
import '../../../../platform/history/browser/historyWidgetKeybindingHint.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/theme/common/theme.js';
import '../../../../base/common/types.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../css!vs/editor/contrib/find/browser/findWidget.js';
define(
			de[961],
			he([
				1, 0, 7, 127, 268, 277, 235, 15, 14, 29, 27, 3, 12, 37, 56, 38, 17, 547,
				4, 91, 413, 664, 21, 51, 79, 35, 26, 212, 28, 106, 95, 2296,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*aria*/,
				w /*toggle*/,
				E /*sash*/,
				C /*widget*/,
				d /*async*/,
				m /*codicons*/,
				r /*errors*/,
				u /*keyCodes*/,
				a /*lifecycle*/,
				h /*platform*/,
				c /*strings*/,
				n /*editorBrowser*/,
				g /*editorOptions*/,
				p /*range*/,
				o /*findModel*/,
				f /*nls*/,
				b /*accessibility*/,
				s /*contextScopedHistoryWidget*/,
				l /*historyWidgetKeybindingHint*/,
				y /*storage*/,
				$ /*colorRegistry*/,
				v /*iconRegistry*/,
				S /*themeService*/,
				I /*themables*/,
				T /*theme*/,
				P /*types*/,
				k /*defaultStyles*/,
				L /*hoverDelegateFactory*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i7b =
						e.$h7b =
						e.$g7b =
						e.$f7b =
						e.$e7b =
						e.$d7b =
						e.$c7b =
						e.$b7b =
						e.$a7b =
						e.$_6b =
							void 0),
					(t = mt(t)),
					(h = mt(h)),
					(c = mt(c)),
					(f = mt(f));
				const D = (0, v.$$O)(
						"find-collapsed",
						m.$ak.chevronRight,
						f.localize(1020, null),
					),
					M = (0, v.$$O)(
						"find-expanded",
						m.$ak.chevronDown,
						f.localize(1021, null),
					);
				(e.$_6b = (0, v.$$O)(
					"find-selection",
					m.$ak.selection,
					f.localize(1022, null),
				)),
					(e.$a7b = (0, v.$$O)(
						"find-replace",
						m.$ak.replace,
						f.localize(1023, null),
					)),
					(e.$b7b = (0, v.$$O)(
						"find-replace-all",
						m.$ak.replaceAll,
						f.localize(1024, null),
					)),
					(e.$c7b = (0, v.$$O)(
						"find-previous-match",
						m.$ak.arrowUp,
						f.localize(1025, null),
					)),
					(e.$d7b = (0, v.$$O)(
						"find-next-match",
						m.$ak.arrowDown,
						f.localize(1026, null),
					));
				const N = f.localize(1027, null),
					A = f.localize(1028, null),
					R = f.localize(1029, null),
					O = f.localize(1030, null),
					B = f.localize(1031, null),
					U = f.localize(1032, null),
					z = f.localize(1033, null),
					F = f.localize(1034, null),
					x = f.localize(1035, null),
					H = f.localize(1036, null),
					q = f.localize(1037, null),
					V = f.localize(1038, null),
					G = f.localize(1039, null, o.$j2b);
				(e.$e7b = f.localize(1040, null)), (e.$f7b = f.localize(1041, null));
				const K = 419,
					W = 275 - 54;
				let X = 69;
				const Y = 33,
					ie = "ctrlEnterReplaceAll.windows.donotask",
					ne = h.$m ? u.KeyMod.WinCtrl : u.KeyMod.CtrlCmd;
				class ee {
					constructor(re) {
						(this.afterLineNumber = re),
							(this.heightInPx = Y),
							(this.suppressMouseDown = !1),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = "dock-find-viewzone");
					}
				}
				e.$g7b = ee;
				function _(se, re, le) {
					const oe = !!re.match(/\n/);
					if (le && oe && le.selectionStart > 0) {
						se.stopPropagation();
						return;
					}
				}
				function te(se, re, le) {
					const oe = !!re.match(/\n/);
					if (le && oe && le.selectionEnd < le.value.length) {
						se.stopPropagation();
						return;
					}
				}
				class Q extends C.$Uhb {
					static {
						this.a = "editor.contrib.findWidget";
					}
					constructor(re, le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						super(),
							(this.ib = me),
							(this.jb = ve),
							(this.y = null),
							(this.sb = []),
							(this.b = re),
							(this.g = le),
							(this.c = oe),
							(this.h = ae),
							(this.n = pe),
							(this.r = $e),
							(this.s = ue),
							(this.t = fe),
							(this.Z = !!ue.getBoolean(ie, y.StorageScope.PROFILE)),
							(this.W = !1),
							(this.X = !1),
							(this.Y = !1),
							(this.hb = new d.$Jh(500)),
							this.D((0, a.$Yc)(() => this.hb.cancel())),
							this.D(this.c.onFindReplaceStateChange((ge) => this.lb(ge))),
							this.Fb(),
							this.rb(),
							this.yb(),
							this.J.inputBox.layout(),
							this.D(
								this.b.onDidChangeConfiguration((ge) => {
									if (
										(ge.hasChanged(g.EditorOption.readOnly) &&
											(this.b.getOption(g.EditorOption.readOnly) &&
												this.c.change({ isReplaceRevealed: !1 }, !1),
											this.rb()),
										ge.hasChanged(g.EditorOption.layoutInfo) && this.yb(),
										ge.hasChanged(g.EditorOption.accessibilitySupport) &&
											this.Gb(),
										ge.hasChanged(g.EditorOption.find))
									) {
										const be = this.b.getOption(g.EditorOption.find).loop;
										this.c.change({ loop: be }, !1);
										const Ce = this.b.getOption(
											g.EditorOption.find,
										).addExtraSpaceOnTop;
										Ce && !this.db && ((this.db = new ee(0)), this.wb()),
											!Ce && this.db && this.xb();
									}
								}),
							),
							this.Gb(),
							this.D(
								this.b.onDidChangeCursorSelection(() => {
									this.W && this.qb();
								}),
							),
							this.D(
								this.b.onDidFocusEditorWidget(async () => {
									if (this.W) {
										const ge = await this.g.getGlobalBufferTerm();
										ge &&
											ge !== this.c.searchString &&
											(this.c.change({ searchString: ge }, !1),
											this.J.select());
									}
								}),
							),
							(this.ab = o.$b2b.bindTo($e)),
							(this.$ = this.D(t.$dhb(this.J.inputBox.inputElement))),
							this.D(
								this.$.onDidFocus(() => {
									this.ab.set(!0), this.Ab();
								}),
							),
							this.D(
								this.$.onDidBlur(() => {
									this.ab.set(!1);
								}),
							),
							(this.cb = o.$c2b.bindTo($e)),
							(this.bb = this.D(t.$dhb(this.L.inputBox.inputElement))),
							this.D(
								this.bb.onDidFocus(() => {
									this.cb.set(!0), this.Ab();
								}),
							),
							this.D(
								this.bb.onDidBlur(() => {
									this.cb.set(!1);
								}),
							),
							this.b.addOverlayWidget(this),
							this.b.getOption(g.EditorOption.find).addExtraSpaceOnTop &&
								(this.db = new ee(0)),
							this.D(
								this.b.onDidChangeModel(() => {
									this.W && (this.eb = void 0);
								}),
							),
							this.D(
								this.b.onDidScrollChange((ge) => {
									if (ge.scrollTopChanged) {
										this.vb();
										return;
									}
									setTimeout(() => {
										this.vb();
									}, 0);
								}),
							);
					}
					getId() {
						return Q.a;
					}
					getDomNode() {
						return this.w;
					}
					getPosition() {
						return this.W
							? {
									preference:
										n.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
								}
							: null;
					}
					lb(re) {
						if (re.searchString) {
							try {
								(this.Y = !0), this.J.setValue(this.c.searchString);
							} finally {
								this.Y = !1;
							}
							this.rb();
						}
						if (
							(re.replaceString &&
								(this.L.inputBox.value = this.c.replaceString),
							re.isRevealed && (this.c.isRevealed ? this.tb() : this.ub(!0)),
							re.isReplaceRevealed &&
								(this.c.isReplaceRevealed
									? !this.b.getOption(g.EditorOption.readOnly) &&
										!this.X &&
										((this.X = !0),
										(this.L.width = t.$vgb(this.J.domNode)),
										this.rb(),
										this.L.inputBox.layout())
									: this.X && ((this.X = !1), this.rb())),
							(re.isRevealed || re.isReplaceRevealed) &&
								(this.c.isRevealed || this.c.isReplaceRevealed) &&
								this.zb() &&
								this.wb(),
							re.isRegex && this.J.setRegex(this.c.isRegex),
							re.wholeWord && this.J.setWholeWords(this.c.wholeWord),
							re.matchCase && this.J.setCaseSensitive(this.c.matchCase),
							re.preserveCase && this.L.setPreserveCase(this.c.preserveCase),
							re.searchScope &&
								(this.c.searchScope
									? (this.Q.checked = !0)
									: (this.Q.checked = !1),
								this.qb()),
							re.searchString || re.matchesCount || re.matchesPosition)
						) {
							const le =
								this.c.searchString.length > 0 && this.c.matchesCount === 0;
							this.w.classList.toggle("no-results", le), this.ob(), this.rb();
						}
						(re.searchString || re.currentMatch) && this.vb(),
							re.updateHistory && this.mb(),
							re.loop && this.rb();
					}
					mb() {
						this.hb.trigger(this.nb.bind(this)).then(void 0, r.$4);
					}
					nb() {
						this.c.searchString && this.J.inputBox.addToHistory(),
							this.c.replaceString && this.L.inputBox.addToHistory();
					}
					ob() {
						(this.N.style.minWidth = X + "px"),
							this.c.matchesCount >= o.$j2b
								? (this.N.title = G)
								: (this.N.title = ""),
							this.N.firstChild?.remove();
						let re;
						if (this.c.matchesCount > 0) {
							let le = String(this.c.matchesCount);
							this.c.matchesCount >= o.$j2b && (le += "+");
							let oe = String(this.c.matchesPosition);
							oe === "0" && (oe = "?"), (re = c.$kf(e.$e7b, oe, le));
						} else re = e.$f7b;
						this.N.appendChild(document.createTextNode(re)),
							(0, i.$oib)(
								this.pb(re, this.c.currentMatch, this.c.searchString),
							),
							(X = Math.max(X, this.N.clientWidth));
					}
					pb(re, le, oe) {
						if (re === e.$f7b)
							return oe === ""
								? f.localize(1042, null, re)
								: f.localize(1043, null, re, oe);
						if (le) {
							const ae = f.localize(
									1044,
									null,
									re,
									oe,
									le.startLineNumber + ":" + le.startColumn,
								),
								pe = this.b.getModel();
							return pe &&
								le.startLineNumber <= pe.getLineCount() &&
								le.startLineNumber >= 1
								? `${pe.getLineContent(le.startLineNumber)}, ${ae}`
								: ae;
						}
						return f.localize(1045, null, re, oe);
					}
					qb() {
						const re = this.b.getSelection(),
							le = re
								? re.startLineNumber !== re.endLineNumber ||
									re.startColumn !== re.endColumn
								: !1,
							oe = this.Q.checked;
						this.W && (oe || le) ? this.Q.enable() : this.Q.disable();
					}
					rb() {
						this.J.setEnabled(this.W),
							this.L.setEnabled(this.W && this.X),
							this.qb(),
							this.R.setEnabled(this.W);
						const re = this.c.searchString.length > 0,
							le = !!this.c.matchesCount;
						this.O.setEnabled(this.W && re && le && this.c.canNavigateBack()),
							this.P.setEnabled(
								this.W && re && le && this.c.canNavigateForward(),
							),
							this.S.setEnabled(this.W && this.X && re),
							this.U.setEnabled(this.W && this.X && re),
							this.w.classList.toggle("replaceToggled", this.X),
							this.M.setExpanded(this.X);
						const oe = !this.b.getOption(g.EditorOption.readOnly);
						this.M.setEnabled(this.W && oe);
					}
					tb() {
						if (
							(this.sb.forEach((re) => {
								clearTimeout(re);
							}),
							(this.sb = []),
							!this.W)
						) {
							this.W = !0;
							const re = this.b.getSelection();
							switch (
								this.b.getOption(g.EditorOption.find).autoFindInSelection
							) {
								case "always":
									this.Q.checked = !0;
									break;
								case "never":
									this.Q.checked = !1;
									break;
								case "multiline": {
									const oe = !!re && re.startLineNumber !== re.endLineNumber;
									this.Q.checked = oe;
									break;
								}
								default:
									break;
							}
							this.yb(),
								this.rb(),
								this.sb.push(
									setTimeout(() => {
										this.w.classList.add("visible"),
											this.w.setAttribute("aria-hidden", "false");
									}, 0),
								),
								this.sb.push(
									setTimeout(() => {
										this.J.validate();
									}, 200),
								),
								this.b.layoutOverlayWidget(this);
							let le = !0;
							if (
								this.b.getOption(g.EditorOption.find)
									.seedSearchStringFromSelection &&
								re
							) {
								const oe = this.b.getDomNode();
								if (oe) {
									const ae = t.$tgb(oe),
										pe = this.b.getScrolledVisiblePosition(
											re.getStartPosition(),
										),
										$e = ae.left + (pe ? pe.left : 0),
										ye = pe ? pe.top : 0;
									if (this.db && ye < this.db.heightInPx) {
										re.endLineNumber > re.startLineNumber && (le = !1);
										const ue = t.$qgb(this.w).left;
										$e > ue && (le = !1);
										const fe = this.b.getScrolledVisiblePosition(
											re.getEndPosition(),
										);
										ae.left + (fe ? fe.left : 0) > ue && (le = !1);
									}
								}
							}
							this.wb(le);
						}
					}
					ub(re) {
						this.sb.forEach((le) => {
							clearTimeout(le);
						}),
							(this.sb = []),
							this.W &&
								((this.W = !1),
								this.rb(),
								this.w.classList.remove("visible"),
								this.w.setAttribute("aria-hidden", "true"),
								this.J.clearMessage(),
								re && this.b.focus(),
								this.b.layoutOverlayWidget(this),
								this.xb());
					}
					vb(re) {
						if (!this.b.getOption(g.EditorOption.find).addExtraSpaceOnTop) {
							this.xb();
							return;
						}
						if (!this.W) return;
						const oe = this.db;
						this.eb !== void 0 ||
							!oe ||
							this.b.changeViewZones((ae) => {
								(oe.heightInPx = this.getHeight()),
									(this.eb = ae.addZone(oe)),
									this.b.setScrollTop(
										re || this.b.getScrollTop() + oe.heightInPx,
									);
							});
					}
					wb(re = !0) {
						if (
							!this.W ||
							!this.b.getOption(g.EditorOption.find).addExtraSpaceOnTop
						)
							return;
						this.db === void 0 && (this.db = new ee(0));
						const oe = this.db;
						this.b.changeViewZones((ae) => {
							if (this.eb !== void 0) {
								const pe = this.getHeight();
								if (pe === oe.heightInPx) return;
								const $e = pe - oe.heightInPx;
								(oe.heightInPx = pe),
									ae.layoutZone(this.eb),
									re && this.b.setScrollTop(this.b.getScrollTop() + $e);
								return;
							} else {
								let pe = this.getHeight();
								if (
									((pe -= this.b.getOption(g.EditorOption.padding).top),
									pe <= 0)
								)
									return;
								(oe.heightInPx = pe),
									(this.eb = ae.addZone(oe)),
									re && this.b.setScrollTop(this.b.getScrollTop() + pe);
							}
						});
					}
					xb() {
						this.b.changeViewZones((re) => {
							this.eb !== void 0 &&
								(re.removeZone(this.eb),
								(this.eb = void 0),
								this.db &&
									(this.b.setScrollTop(
										this.b.getScrollTop() - this.db.heightInPx,
									),
									(this.db = void 0)));
						});
					}
					yb() {
						if (!this.W || !this.w.isConnected) return;
						const re = this.b.getLayoutInfo();
						if (re.contentWidth <= 0) {
							this.w.classList.add("hiddenEditor");
							return;
						} else
							this.w.classList.contains("hiddenEditor") &&
								this.w.classList.remove("hiddenEditor");
						const oe = re.width,
							ae = re.minimap.minimapWidth;
						let pe = !1,
							$e = !1,
							ye = !1;
						if (this.gb && t.$vgb(this.w) > K) {
							(this.w.style.maxWidth = `${oe - 28 - ae - 15}px`),
								(this.L.width = t.$vgb(this.J.domNode));
							return;
						}
						if (
							(K + 28 + ae >= oe && ($e = !0),
							K + 28 + ae - X >= oe && (ye = !0),
							K + 28 + ae - X >= oe + 50 && (pe = !0),
							this.w.classList.toggle("collapsed-find-widget", pe),
							this.w.classList.toggle("narrow-find-widget", ye),
							this.w.classList.toggle("reduced-find-widget", $e),
							!ye && !pe && (this.w.style.maxWidth = `${oe - 28 - ae - 15}px`),
							this.J.layout({
								collapsedFindWidget: pe,
								narrowFindWidget: ye,
								reducedFindWidget: $e,
							}),
							this.gb)
						) {
							const ue = this.J.inputBox.element.clientWidth;
							ue > 0 && (this.L.width = ue);
						} else this.X && (this.L.width = t.$vgb(this.J.domNode));
					}
					getHeight() {
						let re = 0;
						return (
							(re += 4),
							(re += this.J.inputBox.height + 2),
							this.X && ((re += 4), (re += this.L.inputBox.height + 2)),
							(re += 4),
							re
						);
					}
					zb() {
						const re = this.getHeight();
						return this.y !== null && this.y === re
							? !1
							: ((this.y = re),
								(this.w.style.height = `${re}px`),
								this.jb(re),
								!0);
					}
					focusFindInput() {
						this.J.select(), this.J.focus();
					}
					focusFindInputWithoutSelecting() {
						this.J.focus();
					}
					isActive() {
						return this.w.contains(t.getWindow(this.w).document.activeElement);
					}
					focusReplaceInput() {
						this.L.select(), this.L.focus();
					}
					highlightFindOptions() {
						this.J.highlightFindOptions();
					}
					Ab() {
						if (this.b.hasModel() && this.Q.checked) {
							const re = this.b.getSelections();
							re
								.map((le) => {
									le.endColumn === 1 &&
										le.endLineNumber > le.startLineNumber &&
										(le = le.setEndPosition(
											le.endLineNumber - 1,
											this.b.getModel().getLineMaxColumn(le.endLineNumber - 1),
										));
									const oe = this.c.currentMatch;
									return le.startLineNumber !== le.endLineNumber &&
										!p.$iL.equalsRange(le, oe)
										? le
										: null;
								})
								.filter((le) => !!le),
								re.length && this.c.change({ searchScope: re }, !0);
						}
					}
					Bb(re) {
						re.middleButton && re.stopPropagation();
					}
					Cb(re) {
						if (re.equals(ne | u.KeyCode.Enter))
							if (this.n.dispatchEvent(re, re.target)) {
								re.preventDefault();
								return;
							} else {
								this.J.inputBox.insertAtCursor(`
`),
									re.preventDefault();
								return;
							}
						if (re.equals(u.KeyCode.Tab)) {
							this.X ? this.L.focus() : this.J.focusOnCaseSensitive(),
								re.preventDefault();
							return;
						}
						if (re.equals(u.KeyMod.CtrlCmd | u.KeyCode.DownArrow)) {
							this.b.focus(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyCode.UpArrow))
							return _(
								re,
								this.J.getValue(),
								this.J.domNode.querySelector("textarea"),
							);
						if (re.equals(u.KeyCode.DownArrow))
							return te(
								re,
								this.J.getValue(),
								this.J.domNode.querySelector("textarea"),
							);
					}
					Db(re) {
						if (re.equals(ne | u.KeyCode.Enter))
							if (this.n.dispatchEvent(re, re.target)) {
								re.preventDefault();
								return;
							} else {
								h.$l &&
									h.$p &&
									!this.Z &&
									(this.t.info(f.localize(1046, null)),
									(this.Z = !0),
									this.s.store(
										ie,
										!0,
										y.StorageScope.PROFILE,
										y.StorageTarget.USER,
									)),
									this.L.inputBox.insertAtCursor(`
`),
									re.preventDefault();
								return;
							}
						if (re.equals(u.KeyCode.Tab)) {
							this.J.focusOnCaseSensitive(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyMod.Shift | u.KeyCode.Tab)) {
							this.J.focus(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyMod.CtrlCmd | u.KeyCode.DownArrow)) {
							this.b.focus(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyCode.UpArrow))
							return _(
								re,
								this.L.inputBox.value,
								this.L.inputBox.element.querySelector("textarea"),
							);
						if (re.equals(u.KeyCode.DownArrow))
							return te(
								re,
								this.L.inputBox.value,
								this.L.inputBox.element.querySelector("textarea"),
							);
					}
					getVerticalSashLeft(re) {
						return 0;
					}
					Eb(re) {
						const le = this.n.lookupKeybinding(re);
						return le ? ` (${le.getLabel()})` : "";
					}
					Fb() {
						(this.J = this.D(
							new s.$WCb(
								null,
								this.h,
								{
									width: W,
									label: A,
									placeholder: R,
									appendCaseSensitiveLabel: this.Eb(
										o.$i2b.ToggleCaseSensitiveCommand,
									),
									appendWholeWordsLabel: this.Eb(o.$i2b.ToggleWholeWordCommand),
									appendRegexLabel: this.Eb(o.$i2b.ToggleRegexCommand),
									validation: (me) => {
										if (me.length === 0 || !this.J.getRegex()) return null;
										try {
											return new RegExp(me, "gu"), null;
										} catch (ve) {
											return { content: ve.message };
										}
									},
									flexibleHeight: !0,
									flexibleWidth: !0,
									flexibleMaxHeight: 118,
									showCommonFindToggles: !0,
									showHistoryHint: () => (0, l.$NMb)(this.n),
									inputBoxStyles: k.$wyb,
									toggleStyles: k.$pyb,
								},
								this.r,
							),
						)),
							this.J.setRegex(!!this.c.isRegex),
							this.J.setCaseSensitive(!!this.c.matchCase),
							this.J.setWholeWords(!!this.c.wholeWord),
							this.D(this.J.onKeyDown((me) => this.Cb(me))),
							this.D(
								this.J.inputBox.onDidChange(() => {
									this.Y ||
										this.c.change({ searchString: this.J.getValue() }, !0);
								}),
							),
							this.D(
								this.J.onDidOptionChange(() => {
									this.c.change(
										{
											isRegex: this.J.getRegex(),
											wholeWord: this.J.getWholeWords(),
											matchCase: this.J.getCaseSensitive(),
										},
										!0,
									);
								}),
							),
							this.D(
								this.J.onCaseSensitiveKeyDown((me) => {
									me.equals(u.KeyMod.Shift | u.KeyCode.Tab) &&
										this.X &&
										(this.L.focus(), me.preventDefault());
								}),
							),
							this.D(
								this.J.onRegexKeyDown((me) => {
									me.equals(u.KeyCode.Tab) &&
										this.X &&
										(this.L.focusOnPreserve(), me.preventDefault());
								}),
							),
							this.D(
								this.J.inputBox.onDidHeightChange((me) => {
									this.zb() && this.wb();
								}),
							),
							h.$n && this.D(this.J.onMouseDown((me) => this.Bb(me))),
							(this.N = document.createElement("div")),
							(this.N.className = "matchesCount"),
							this.ob();
						const oe = this.D((0, L.$dib)());
						(this.O = this.D(
							new Z(
								{
									label: O + this.Eb(o.$i2b.PreviousMatchFindAction),
									icon: e.$c7b,
									hoverDelegate: oe,
									onTrigger: () => {
										(0, P.$wg)(this.b.getAction(o.$i2b.PreviousMatchFindAction))
											.run()
											.then(void 0, r.$4);
									},
								},
								this.ib,
							),
						)),
							(this.P = this.D(
								new Z(
									{
										label: B + this.Eb(o.$i2b.NextMatchFindAction),
										icon: e.$d7b,
										hoverDelegate: oe,
										onTrigger: () => {
											(0, P.$wg)(this.b.getAction(o.$i2b.NextMatchFindAction))
												.run()
												.then(void 0, r.$4);
										},
									},
									this.ib,
								),
							));
						const ae = document.createElement("div");
						(ae.className = "find-part"), ae.appendChild(this.J.domNode);
						const pe = document.createElement("div");
						(pe.className = "find-actions"),
							ae.appendChild(pe),
							pe.appendChild(this.N),
							pe.appendChild(this.O.domNode),
							pe.appendChild(this.P.domNode),
							(this.Q = this.D(
								new w.$8ib({
									icon: e.$_6b,
									title: U + this.Eb(o.$i2b.ToggleSearchScopeCommand),
									isChecked: !1,
									hoverDelegate: oe,
									inputActiveOptionBackground: (0, $.$rP)($.$YR),
									inputActiveOptionBorder: (0, $.$rP)($.$WR),
									inputActiveOptionForeground: (0, $.$rP)($.$ZR),
								}),
							)),
							this.D(
								this.Q.onChange(() => {
									if (this.Q.checked) {
										if (this.b.hasModel()) {
											let me = this.b.getSelections();
											(me = me
												.map(
													(ve) => (
														ve.endColumn === 1 &&
															ve.endLineNumber > ve.startLineNumber &&
															(ve = ve.setEndPosition(
																ve.endLineNumber - 1,
																this.b
																	.getModel()
																	.getLineMaxColumn(ve.endLineNumber - 1),
															)),
														ve.isEmpty() ? null : ve
													),
												)
												.filter((ve) => !!ve)),
												me.length && this.c.change({ searchScope: me }, !0);
										}
									} else this.c.change({ searchScope: null }, !0);
								}),
							),
							pe.appendChild(this.Q.domNode),
							(this.R = this.D(
								new Z(
									{
										label: z + this.Eb(o.$i2b.CloseFindWidgetCommand),
										icon: v.$bP,
										hoverDelegate: oe,
										onTrigger: () => {
											this.c.change({ isRevealed: !1, searchScope: null }, !1);
										},
										onKeyDown: (me) => {
											me.equals(u.KeyCode.Tab) &&
												this.X &&
												(this.S.isEnabled() ? this.S.focus() : this.b.focus(),
												me.preventDefault());
										},
									},
									this.ib,
								),
							)),
							(this.L = this.D(
								new s.$XCb(
									null,
									void 0,
									{
										label: F,
										placeholder: x,
										appendPreserveCaseLabel: this.Eb(
											o.$i2b.TogglePreserveCaseCommand,
										),
										history: [],
										flexibleHeight: !0,
										flexibleWidth: !0,
										flexibleMaxHeight: 118,
										showHistoryHint: () => (0, l.$NMb)(this.n),
										inputBoxStyles: k.$wyb,
										toggleStyles: k.$pyb,
									},
									this.r,
									!0,
								),
							)),
							this.L.setPreserveCase(!!this.c.preserveCase),
							this.D(this.L.onKeyDown((me) => this.Db(me))),
							this.D(
								this.L.inputBox.onDidChange(() => {
									this.c.change({ replaceString: this.L.inputBox.value }, !1);
								}),
							),
							this.D(
								this.L.inputBox.onDidHeightChange((me) => {
									this.X && this.zb() && this.wb();
								}),
							),
							this.D(
								this.L.onDidOptionChange(() => {
									this.c.change({ preserveCase: this.L.getPreserveCase() }, !0);
								}),
							),
							this.D(
								this.L.onPreserveCaseKeyDown((me) => {
									me.equals(u.KeyCode.Tab) &&
										(this.O.isEnabled()
											? this.O.focus()
											: this.P.isEnabled()
												? this.P.focus()
												: this.Q.enabled
													? this.Q.focus()
													: this.R.isEnabled() && this.R.focus(),
										me.preventDefault());
								}),
							);
						const $e = this.D((0, L.$dib)());
						(this.S = this.D(
							new Z(
								{
									label: H + this.Eb(o.$i2b.ReplaceOneAction),
									icon: e.$a7b,
									hoverDelegate: $e,
									onTrigger: () => {
										this.g.replace();
									},
									onKeyDown: (me) => {
										me.equals(u.KeyMod.Shift | u.KeyCode.Tab) &&
											(this.R.focus(), me.preventDefault());
									},
								},
								this.ib,
							),
						)),
							(this.U = this.D(
								new Z(
									{
										label: q + this.Eb(o.$i2b.ReplaceAllAction),
										icon: e.$b7b,
										hoverDelegate: $e,
										onTrigger: () => {
											this.g.replaceAll();
										},
									},
									this.ib,
								),
							));
						const ye = document.createElement("div");
						(ye.className = "replace-part"), ye.appendChild(this.L.domNode);
						const ue = document.createElement("div");
						(ue.className = "replace-actions"),
							ye.appendChild(ue),
							ue.appendChild(this.S.domNode),
							ue.appendChild(this.U.domNode),
							(this.M = this.D(
								new Z(
									{
										label: V,
										className: "codicon toggle left",
										onTrigger: () => {
											this.c.change({ isReplaceRevealed: !this.X }, !1),
												this.X &&
													((this.L.width = t.$vgb(this.J.domNode)),
													this.L.inputBox.layout()),
												this.wb();
										},
									},
									this.ib,
								),
							)),
							this.M.setExpanded(this.X),
							(this.w = document.createElement("div")),
							(this.w.className = "editor-widget find-widget"),
							this.w.setAttribute("aria-hidden", "true"),
							(this.w.ariaLabel = N),
							(this.w.role = "dialog"),
							(this.w.style.width = `${K}px`),
							this.w.appendChild(this.M.domNode),
							this.w.appendChild(ae),
							this.w.appendChild(this.R.domNode),
							this.w.appendChild(ye),
							(this.fb = this.D(
								new E.Sash(this.w, this, {
									orientation: E.Orientation.VERTICAL,
									size: 2,
								}),
							)),
							(this.gb = !1);
						let fe = K;
						this.D(
							this.fb.onDidStart(() => {
								fe = t.$vgb(this.w);
							}),
						),
							this.D(
								this.fb.onDidChange((me) => {
									this.gb = !0;
									const ve = fe + me.startX - me.currentX;
									if (ve < K) return;
									const ge = parseFloat(t.$ngb(this.w).maxWidth) || 0;
									ve > ge ||
										((this.w.style.width = `${ve}px`),
										this.X && (this.L.width = t.$vgb(this.J.domNode)),
										this.J.inputBox.layout(),
										this.zb());
								}),
							),
							this.D(
								this.fb.onDidReset(() => {
									const me = t.$vgb(this.w);
									if (me < K) return;
									let ve = K;
									if (!this.gb || me === K) {
										const ge = this.b.getLayoutInfo();
										(ve = ge.width - 28 - ge.minimap.minimapWidth - 15),
											(this.gb = !0);
									}
									(this.w.style.width = `${ve}px`),
										this.X && (this.L.width = t.$vgb(this.J.domNode)),
										this.J.inputBox.layout();
								}),
							);
					}
					Gb() {
						const re = this.b.getOption(g.EditorOption.accessibilitySupport);
						this.J.setFocusInputOnOptionClick(
							re !== b.AccessibilitySupport.Enabled,
						);
					}
					getViewState() {
						let re = !1;
						return (
							this.db &&
								this.eb &&
								(re = this.db.heightInPx > this.b.getScrollTop()),
							{ widgetViewZoneVisible: re, scrollTop: this.b.getScrollTop() }
						);
					}
					setViewState(re) {
						re && re.widgetViewZoneVisible && this.vb(re.scrollTop);
					}
				}
				e.$h7b = Q;
				class Z extends C.$Uhb {
					constructor(re, le) {
						super(), (this.a = re);
						let oe = "button";
						this.a.className && (oe = oe + " " + this.a.className),
							this.a.icon &&
								(oe = oe + " " + I.ThemeIcon.asClassName(this.a.icon)),
							(this.b = document.createElement("div")),
							(this.b.tabIndex = 0),
							(this.b.className = oe),
							this.b.setAttribute("role", "button"),
							this.b.setAttribute("aria-label", this.a.label),
							this.D(
								le.setupManagedHover(
									re.hoverDelegate ?? (0, L.$cib)("element"),
									this.b,
									this.a.label,
								),
							),
							this.f(this.b, (ae) => {
								this.a.onTrigger(), ae.preventDefault();
							}),
							this.u(this.b, (ae) => {
								if (ae.equals(u.KeyCode.Space) || ae.equals(u.KeyCode.Enter)) {
									this.a.onTrigger(), ae.preventDefault();
									return;
								}
								this.a.onKeyDown?.(ae);
							});
					}
					get domNode() {
						return this.b;
					}
					isEnabled() {
						return this.b.tabIndex >= 0;
					}
					focus() {
						this.b.focus();
					}
					setEnabled(re) {
						this.b.classList.toggle("disabled", !re),
							this.b.setAttribute("aria-disabled", String(!re)),
							(this.b.tabIndex = re ? 0 : -1);
					}
					setExpanded(re) {
						this.b.setAttribute("aria-expanded", String(!!re)),
							re
								? (this.b.classList.remove(...I.ThemeIcon.asClassNameArray(D)),
									this.b.classList.add(...I.ThemeIcon.asClassNameArray(M)))
								: (this.b.classList.remove(...I.ThemeIcon.asClassNameArray(M)),
									this.b.classList.add(...I.ThemeIcon.asClassNameArray(D)));
					}
				}
				(e.$i7b = Z),
					(0, S.$oP)((se, re) => {
						const le = se.getColor($.$CQ);
						le &&
							re.addRule(
								`.monaco-editor .findMatch { border: 1px ${((0, T.$gP))(se.type) ? "dotted" : "solid"} ${le}; box-sizing: border-box; }`,
							);
						const oe = se.getColor($.$DQ);
						oe &&
							re.addRule(
								`.monaco-editor .findScope { border: 1px ${((0, T.$gP))(se.type) ? "dashed" : "solid"} ${oe}; }`,
							);
						const ae = se.getColor($.$OP);
						ae &&
							re.addRule(
								`.monaco-editor .find-widget { border: 1px solid ${ae}; }`,
							);
						const pe = se.getColor($.$xQ);
						pe &&
							re.addRule(`.monaco-editor .findMatchInline { color: ${pe}; }`);
						const $e = se.getColor($.$zQ);
						$e &&
							re.addRule(
								`.monaco-editor .currentFindMatchInline { color: ${$e}; }`,
							);
					});
			},
		),
		