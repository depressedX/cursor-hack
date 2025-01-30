import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/browser/ui/widget.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../nls.js';
import '../../../../platform/history/browser/contextScopedHistoryWidget.js';
import '../../../../platform/history/browser/historyWidgetKeybindingHint.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
define(
			de[1748],
			he([1, 0, 7, 268, 235, 14, 6, 27, 4, 413, 664, 10, 8, 39, 106, 95]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*toggle*/,
 w /*widget*/,
 E /*codicons*/,
 C /*event*/,
 d /*keyCodes*/,
 m /*nls*/,
 r /*contextScopedHistoryWidget*/,
 u /*historyWidgetKeybindingHint*/,
 a /*configuration*/,
 h /*contextkey*/,
 c /*keybinding*/,
 n /*defaultStyles*/,
 g /*hoverDelegateFactory*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nOc = e.$mOc = e.$lOc = void 0),
					(t = mt(t)),
					(m = mt(m));
				let p = class extends w.$Uhb {
					static {
						this.OPTION_CHANGE = "optionChange";
					}
					constructor(s, l, y, $, v, S) {
						super(),
							(this.n = l),
							(this.r = $),
							(this.s = v),
							(this.t = S),
							(this.g = this.D(new C.$re())),
							(this.onSubmit = this.g.event),
							(this.h = this.D(new C.$re())),
							(this.onCancel = this.h.event),
							(y = { ariaLabel: m.localize(9141, null), ...y }),
							(this.a = y.width ?? 100),
							this.J(y),
							s.appendChild(this.b);
					}
					dispose() {
						super.dispose(), this.inputFocusTracker?.dispose();
					}
					setWidth(s) {
						(this.a = s), this.n.layout(), this.w();
					}
					getValue() {
						return this.c.value;
					}
					setValue(s) {
						this.c.value !== s && (this.c.value = s);
					}
					select() {
						this.c.select();
					}
					focus() {
						this.c.focus();
					}
					inputHasFocus() {
						return this.c.hasFocus();
					}
					w() {
						this.c.width = this.a - this.y() - 2;
					}
					y() {
						return 0;
					}
					getHistory() {
						return this.c.getHistory();
					}
					clearHistory() {
						this.c.clearHistory();
					}
					prependHistory(s) {
						this.c.prependHistory(s);
					}
					clear() {
						this.setValue("");
					}
					onSearchSubmit() {
						this.c.addToHistory();
					}
					showNextTerm() {
						this.c.showNextValue();
					}
					showPreviousTerm() {
						this.c.showPreviousValue();
					}
					J(s) {
						(this.b = document.createElement("div")),
							this.b.classList.add("monaco-findInput"),
							(this.c = new r.$VCb(
								this.b,
								this.n,
								{
									placeholder: s.placeholder,
									showPlaceholderOnFocus: s.showPlaceholderOnFocus,
									tooltip: s.tooltip,
									ariaLabel: s.ariaLabel,
									validationOptions: { validation: void 0 },
									history: s.history || [],
									showHistoryHint: () => (0, u.$NMb)(this.t),
									inputBoxStyles: s.inputBoxStyles,
								},
								this.r,
							)),
							this.D(this.c.onDidChange(() => this.g.fire(!0))),
							(this.inputFocusTracker = t.$dhb(this.c.inputElement)),
							this.z(this.c.inputElement, (y) => this.M(y));
						const l = document.createElement("div");
						(l.className = "controls"),
							this.L(l),
							this.b.appendChild(l),
							this.w();
					}
					L(s) {}
					M(s) {
						switch (s.keyCode) {
							case d.KeyCode.Enter:
								this.onSearchSubmit(), this.g.fire(!1);
								return;
							case d.KeyCode.Escape:
								this.h.fire();
								return;
						}
					}
				};
				(e.$lOc = p),
					(e.$lOc = p = Ne([j(3, h.$6j), j(4, a.$gj), j(5, c.$uZ)], p));
				let o = class extends p {
					constructor(s, l, y, $, v, S) {
						super(s, l, y, $, v, S),
							(this.N = this.D(new C.$re())),
							(this.onChangeSearchInEditorsBox = this.N.event);
					}
					dispose() {
						super.dispose(), this.O.dispose();
					}
					onlySearchInOpenEditors() {
						return this.O.checked;
					}
					setOnlySearchInOpenEditors(s) {
						(this.O.checked = s), this.N.fire();
					}
					y() {
						return super.y() + this.O.width();
					}
					L(s) {
						(this.O = this.D(
							new i.$8ib({
								icon: E.$ak.book,
								title: m.localize(9142, null),
								isChecked: !1,
								hoverDelegate: (0, g.$cib)("element"),
								...n.$pyb,
							}),
						)),
							this.D(
								this.O.onChange((l) => {
									this.N.fire(), l || this.c.focus();
								}),
							),
							s.appendChild(this.O.domNode),
							super.L(s);
					}
				};
				(e.$mOc = o),
					(e.$mOc = o = Ne([j(3, h.$6j), j(4, a.$gj), j(5, c.$uZ)], o));
				let f = class extends p {
					constructor(s, l, y, $, v, S) {
						super(s, l, y, $, v, S),
							(this.N = this.D(new C.$re())),
							(this.onChangeIgnoreBox = this.N.event);
					}
					dispose() {
						super.dispose(), this.O.dispose();
					}
					useExcludesAndIgnoreFiles() {
						return this.O.checked;
					}
					setUseExcludesAndIgnoreFiles(s) {
						(this.O.checked = s), this.N.fire();
					}
					y() {
						return super.y() + this.O.width();
					}
					L(s) {
						(this.O = this.D(
							new i.$8ib({
								icon: E.$ak.exclude,
								actionClassName: "useExcludesAndIgnoreFiles",
								title: m.localize(9143, null),
								isChecked: !0,
								hoverDelegate: (0, g.$cib)("element"),
								...n.$pyb,
							}),
						)),
							this.D(
								this.O.onChange((l) => {
									this.N.fire(), l || this.c.focus();
								}),
							),
							s.appendChild(this.O.domNode),
							super.L(s);
					}
				};
				(e.$nOc = f),
					(e.$nOc = f = Ne([j(3, h.$6j), j(4, a.$gj), j(5, c.$uZ)], f));
			},
		),
		