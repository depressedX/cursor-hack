import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/keyboardEvent.js';
import '../../../base/browser/ui/toggle/toggle.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/codicons.js';
import '../../../base/common/event.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../base/common/severity.js';
import '../../../base/common/themables.js';
import '../../../nls.js';
import '../common/quickInput.js';
import './quickInputUtils.js';
import '../../configuration/common/configuration.js';
import '../../hover/browser/hover.js';
import '../../contextkey/common/contextkey.js';
import '../../../css!vs/platform/quickinput/browser/media/quickInput.js';
define(
		de[1189],
		he([
			1, 0, 7, 114, 268, 24, 15, 14, 6, 27, 3, 12, 111, 26, 4, 63, 1625, 10, 72,
			8, 1138,
		]),
		function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*keyboardEvent*/,
 w /*toggle*/,
 E /*arrays*/,
 C /*async*/,
 d /*codicons*/,
 m /*event*/,
 r /*keyCodes*/,
 u /*lifecycle*/,
 a /*platform*/,
 h /*severity*/,
 c /*themables*/,
 n /*nls*/,
 g /*quickInput*/,
 p /*quickInputUtils*/,
 o /*configuration*/,
 f /*hover*/,
 b /*contextkey*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Hxc =
					e.$Gxc =
					e.$Fxc =
					e.$Exc =
					e.$Dxc =
					e.$Cxc =
					e.$Bxc =
					e.$Axc =
					e.$zxc =
					e.$yxc =
					e.$xxc =
					e.$wxc =
					e.$vxc =
						void 0),
				(t = mt(t)),
				(h = xi(h)),
				(e.$vxc = "inQuickInput"),
				(e.$wxc = new b.$5j(e.$vxc, !1, (0, n.localize)(2040, null))),
				(e.$xxc = b.$Kj.has(e.$vxc)),
				(e.$yxc = "quickInputType"),
				(e.$zxc = new b.$5j(e.$yxc, void 0, (0, n.localize)(2041, null))),
				(e.$Axc = "cursorAtEndOfQuickInputBox"),
				(e.$Bxc = new b.$5j(e.$Axc, !1, (0, n.localize)(2042, null))),
				(e.$Cxc = b.$Kj.has(e.$Axc)),
				(e.$Dxc = {
					iconClass: c.ThemeIcon.asClassName(d.$ak.quickInputBack),
					tooltip: (0, n.localize)(2043, null),
					handle: -1,
				});
			class s extends u.$1c {
				static {
					this.c = (0, n.localize)(2044, null);
				}
				constructor(I) {
					super(),
						(this.X = I),
						(this.j = !1),
						(this.q = !1),
						(this.r = !0),
						(this.t = !1),
						(this.u = !1),
						(this.w = []),
						(this.y = []),
						(this.z = []),
						(this.C = !1),
						(this.F = []),
						(this.G = !1),
						(this.H = s.c),
						(this.L = h.default.Ignore),
						(this.N = this.D(new m.$re())),
						(this.Q = this.D(new m.$re())),
						(this.R = this.D(new m.$re())),
						(this.S = this.D(new m.$re())),
						(this.U = this.D(new u.$Zc())),
						(this.onDidTriggerButton = this.N.event),
						(this.onDidHide = this.Q.event),
						(this.onWillHide = this.R.event),
						(this.onDispose = this.S.event);
				}
				get title() {
					return this.f;
				}
				set title(I) {
					(this.f = I), this.Z();
				}
				get description() {
					return this.g;
				}
				set description(I) {
					(this.g = I), this.Z();
				}
				get widget() {
					return this.h;
				}
				set widget(I) {
					t.$Ygb(I) && this.h !== I && ((this.h = I), (this.j = !0), this.Z());
				}
				get step() {
					return this.m;
				}
				set step(I) {
					(this.m = I), this.Z();
				}
				get totalSteps() {
					return this.n;
				}
				set totalSteps(I) {
					(this.n = I), this.Z();
				}
				get enabled() {
					return this.r;
				}
				set enabled(I) {
					(this.r = I), this.Z();
				}
				get contextKey() {
					return this.s;
				}
				set contextKey(I) {
					(this.s = I), this.Z();
				}
				get busy() {
					return this.t;
				}
				set busy(I) {
					(this.t = I), this.Z();
				}
				get ignoreFocusOut() {
					return this.u;
				}
				set ignoreFocusOut(I) {
					const T = this.u !== I && !a.$u;
					(this.u = I && !a.$u), T && this.Z();
				}
				get Y() {
					return this.w.length ? [...this.w, this.y] : this.y;
				}
				get buttons() {
					return [...this.w, ...this.y, ...this.z];
				}
				set buttons(I) {
					(this.w = I.filter((T) => T === e.$Dxc)),
						(this.y = I.filter(
							(T) =>
								T !== e.$Dxc &&
								T.location !== g.QuickInputButtonLocation.Inline,
						)),
						(this.z = I.filter(
							(T) => T.location === g.QuickInputButtonLocation.Inline,
						)),
						(this.C = !0),
						this.Z();
				}
				get toggles() {
					return this.F;
				}
				set toggles(I) {
					(this.F = I ?? []), (this.G = !0), this.Z();
				}
				get validationMessage() {
					return this.I;
				}
				set validationMessage(I) {
					(this.I = I), this.Z();
				}
				get severity() {
					return this.L;
				}
				set severity(I) {
					(this.L = I), this.Z();
				}
				show() {
					this.q ||
						(this.U.add(
							this.X.onDidTriggerButton((I) => {
								this.buttons.indexOf(I) !== -1 && this.N.fire(I);
							}),
						),
						this.X.show(this),
						(this.q = !0),
						(this.J = void 0),
						(this.M = void 0),
						this.buttons.length && (this.C = !0),
						this.toggles.length && (this.G = !0),
						this.Z());
				}
				hide() {
					this.q && this.X.hide();
				}
				didHide(I = g.QuickInputHideReason.Other) {
					(this.q = !1), this.U.clear(), this.Q.fire({ reason: I });
				}
				willHide(I = g.QuickInputHideReason.Other) {
					this.R.fire({ reason: I });
				}
				Z() {
					if (!this.q) return;
					const I = this.$();
					I && this.X.title.textContent !== I
						? (this.X.title.textContent = I)
						: !I &&
							this.X.title.innerHTML !== "&nbsp;" &&
							(this.X.title.innerText = "\xA0");
					const T = this.ab();
					if (
						(this.X.description1.textContent !== T &&
							(this.X.description1.textContent = T),
						this.X.description2.textContent !== T &&
							(this.X.description2.textContent = T),
						this.j &&
							((this.j = !1),
							this.h ? t.$hhb(this.X.widget, this.h) : t.$hhb(this.X.widget)),
						this.busy &&
							!this.W &&
							((this.W = new C.$Wh()),
							this.W.setIfNotSet(() => {
								this.q && this.X.progressBar.infinite();
							}, 800)),
						!this.busy &&
							this.W &&
							(this.X.progressBar.stop(), this.W.cancel(), (this.W = void 0)),
						this.C)
					) {
						(this.C = !1), this.X.leftActionBar.clear();
						const k = this.w.map((M, N) =>
							(0, p.$sxc)(M, `id-${N}`, async () => this.N.fire(M)),
						);
						this.X.leftActionBar.push(k, { icon: !0, label: !1 }),
							this.X.rightActionBar.clear();
						const L = this.y.map((M, N) =>
							(0, p.$sxc)(M, `id-${N}`, async () => this.N.fire(M)),
						);
						this.X.rightActionBar.push(L, { icon: !0, label: !1 }),
							this.X.inlineActionBar.clear();
						const D = this.z.map((M, N) =>
							(0, p.$sxc)(M, `id-${N}`, async () => this.N.fire(M)),
						);
						this.X.inlineActionBar.push(D, { icon: !0, label: !1 });
					}
					if (this.G) {
						this.G = !1;
						const k = this.toggles?.filter((L) => L instanceof w.$8ib) ?? [];
						this.X.inputBox.toggles = k;
					}
					(this.X.ignoreFocusOut = this.ignoreFocusOut),
						this.X.setEnabled(this.enabled),
						this.X.setContextKey(this.contextKey);
					const P = this.validationMessage || this.H;
					this.J !== P &&
						((this.J = P),
						t.$hhb(this.X.message),
						(0, p.$txc)(P, this.X.message, {
							callback: (k) => {
								this.X.linkOpenerDelegate(k);
							},
							disposables: this.U,
						})),
						this.M !== this.severity &&
							((this.M = this.severity), this.cb(this.severity));
				}
				$() {
					return this.title && this.step
						? `${this.title} (${this.bb()})`
						: this.title
							? this.title
							: this.step
								? this.bb()
								: "";
				}
				ab() {
					return this.description || "";
				}
				bb() {
					return this.step && this.totalSteps
						? (0, n.localize)(2045, null, this.step, this.totalSteps)
						: this.step
							? String(this.step)
							: "";
				}
				cb(I) {
					if ((this.X.inputBox.showDecoration(I), I !== h.default.Ignore)) {
						const T = this.X.inputBox.stylesForType(I);
						(this.X.message.style.color = T.foreground
							? `${T.foreground}`
							: ""),
							(this.X.message.style.backgroundColor = T.background
								? `${T.background}`
								: ""),
							(this.X.message.style.border = T.border
								? `1px solid ${T.border}`
								: ""),
							(this.X.message.style.marginBottom = "-2px");
					} else
						(this.X.message.style.color = ""),
							(this.X.message.style.backgroundColor = ""),
							(this.X.message.style.border = ""),
							(this.X.message.style.marginBottom = "");
				}
				dispose() {
					this.hide(), this.S.fire(), super.dispose();
				}
			}
			class l extends s {
				constructor() {
					super(...arguments),
						(this.eb = ""),
						(this.hb = this.D(new m.$re())),
						(this.ib = this.D(new m.$re())),
						(this.jb = this.D(new m.$re())),
						(this.kb = this.D(new m.$re())),
						(this.lb = []),
						(this.mb = !1),
						(this.nb = !1),
						(this.ob = !1),
						(this.pb = !1),
						(this.qb = !1),
						(this.rb = !0),
						(this.sb = "fuzzy"),
						(this.tb = !0),
						(this.ub = !1),
						(this.vb = g.ItemActivation.FIRST),
						(this.wb = []),
						(this.xb = !1),
						(this.yb = []),
						(this.zb = this.D(new m.$re())),
						(this.Ab = []),
						(this.Bb = !1),
						(this.Cb = []),
						(this.Db = this.D(new m.$re())),
						(this.Eb = this.D(new m.$re())),
						(this.Fb = this.D(new m.$re())),
						(this.Hb = !0),
						(this.Ib = "default"),
						(this.Jb = !1),
						(this.Qb = new m.$ze()),
						(this.type = g.QuickInputType.QuickPick),
						(this.filterValue = (I) => I),
						(this.onDidChangeValue = this.hb.event),
						(this.onWillAccept = this.ib.event),
						(this.onDidAccept = this.jb.event),
						(this.onDidCustom = this.kb.event),
						(this.onDidChangeActive = this.zb.event),
						(this.onDidChangeSelection = this.Db.event),
						(this.onDidTriggerItemButton = this.Eb.event),
						(this.onDidTriggerSeparatorButton = this.Fb.event);
				}
				static {
					this.db = (0, n.localize)(2046, null);
				}
				get quickNavigate() {
					return this.Mb;
				}
				set quickNavigate(I) {
					(this.Mb = I), this.Z();
				}
				get value() {
					return this.eb;
				}
				set value(I) {
					this.Rb(I);
				}
				Rb(I, T) {
					this.eb !== I &&
						((this.eb = I),
						T || this.Z(),
						this.q &&
							this.X.list.filter(this.filterValue(this.eb)) &&
							this.Tb(),
						this.hb.fire(this.eb));
				}
				set ariaLabel(I) {
					(this.fb = I), this.Z();
				}
				get ariaLabel() {
					return this.fb;
				}
				get placeholder() {
					return this.gb;
				}
				set placeholder(I) {
					(this.gb = I), this.Z();
				}
				get items() {
					return this.lb;
				}
				get Sb() {
					return this.X.list.scrollTop;
				}
				set Sb(I) {
					this.X.list.scrollTop = I;
				}
				set items(I) {
					(this.lb = I), (this.mb = !0), this.Z();
				}
				get canSelectMany() {
					return this.nb;
				}
				set canSelectMany(I) {
					(this.nb = I), this.Z();
				}
				get canAcceptInBackground() {
					return this.ob;
				}
				set canAcceptInBackground(I) {
					this.ob = I;
				}
				get matchOnDescription() {
					return this.pb;
				}
				set matchOnDescription(I) {
					(this.pb = I), this.Z();
				}
				get matchOnDetail() {
					return this.qb;
				}
				set matchOnDetail(I) {
					(this.qb = I), this.Z();
				}
				get matchOnLabel() {
					return this.rb;
				}
				set matchOnLabel(I) {
					(this.rb = I), this.Z();
				}
				get matchOnLabelMode() {
					return this.sb;
				}
				set matchOnLabelMode(I) {
					(this.sb = I), this.Z();
				}
				get sortByLabel() {
					return this.tb;
				}
				set sortByLabel(I) {
					(this.tb = I), this.Z();
				}
				get keepScrollPosition() {
					return this.ub;
				}
				set keepScrollPosition(I) {
					this.ub = I;
				}
				get itemActivation() {
					return this.vb;
				}
				set itemActivation(I) {
					this.vb = I;
				}
				get activeItems() {
					return this.wb;
				}
				set activeItems(I) {
					(this.wb = I), (this.xb = !0), this.Z();
				}
				get selectedItems() {
					return this.Ab;
				}
				set selectedItems(I) {
					(this.Ab = I), (this.Bb = !0), this.Z();
				}
				get keyMods() {
					return this.Mb ? g.$AJ : this.X.keyMods;
				}
				get valueSelection() {
					const I = this.X.inputBox.getSelection();
					if (I) return [I.start, I.end];
				}
				set valueSelection(I) {
					(this.Gb = I), (this.Hb = !0), this.Z();
				}
				get customButton() {
					return this.Jb;
				}
				set customButton(I) {
					(this.Jb = I), this.Z();
				}
				get customLabel() {
					return this.Kb;
				}
				set customLabel(I) {
					(this.Kb = I), this.Z();
				}
				get customHover() {
					return this.Lb;
				}
				set customHover(I) {
					(this.Lb = I), this.Z();
				}
				get ok() {
					return this.Ib;
				}
				set ok(I) {
					(this.Ib = I), this.Z();
				}
				inputHasFocus() {
					return this.q ? this.X.inputBox.hasFocus() : !1;
				}
				focusOnInput() {
					this.X.inputBox.setFocus();
				}
				get hideInput() {
					return !!this.Nb;
				}
				set hideInput(I) {
					(this.Nb = I), this.Z();
				}
				get hideCountBadge() {
					return !!this.Ob;
				}
				set hideCountBadge(I) {
					(this.Ob = I), this.Z();
				}
				get hideCheckAll() {
					return !!this.Pb;
				}
				set hideCheckAll(I) {
					(this.Pb = I), this.Z();
				}
				Tb() {
					this.canSelectMany || this.X.list.focus(g.QuickPickFocus.First);
				}
				show() {
					this.q ||
						(this.U.add(
							this.X.inputBox.onDidChange((I) => {
								this.Rb(I, !0);
							}),
						),
						this.U.add(
							this.X.onDidAccept(() => {
								this.canSelectMany
									? this.X.list.getCheckedElements().length ||
										((this.Ab = []), this.Db.fire(this.selectedItems))
									: this.activeItems[0] &&
										((this.Ab = [this.activeItems[0]]),
										this.Db.fire(this.selectedItems)),
									this.Ub(!1);
							}),
						),
						this.U.add(
							this.X.onDidCustom(() => {
								this.kb.fire();
							}),
						),
						this.U.add(
							this.Qb.wrapEvent(
								this.X.list.onDidChangeFocus,
								(I, T) => T,
							)((I) => {
								this.xb ||
									(this.yb !== this.wb &&
										(0, E.$yb)(I, this.wb, (T, P) => T === P)) ||
									((this.wb = I), this.zb.fire(I));
							}),
						),
						this.U.add(
							this.X.list.onDidChangeSelection(({ items: I, event: T }) => {
								if (this.canSelectMany) {
									I.length && this.X.list.setSelectedElements([]);
									return;
								}
								(this.Cb !== this.Ab &&
									(0, E.$yb)(I, this.Ab, (P, k) => P === k)) ||
									((this.Ab = I),
									this.Db.fire(I),
									I.length && this.Ub(t.$7gb(T) && T.button === 1));
							}),
						),
						this.U.add(
							this.X.list.onChangedCheckedElements((I) => {
								!this.canSelectMany ||
									!this.q ||
									(this.Cb !== this.Ab &&
										(0, E.$yb)(I, this.Ab, (T, P) => T === P)) ||
									((this.Ab = I), this.Db.fire(I));
							}),
						),
						this.U.add(this.X.list.onButtonTriggered((I) => this.Eb.fire(I))),
						this.U.add(
							this.X.list.onSeparatorButtonTriggered((I) => this.Fb.fire(I)),
						),
						this.U.add(this.Vb()),
						(this.Hb = !0)),
						super.show();
				}
				Ub(I) {
					let T = !1;
					this.ib.fire({ veto: () => (T = !0) }),
						T || this.jb.fire({ inBackground: I });
				}
				Vb() {
					return t.$0fb(this.X.container, t.$$gb.KEY_UP, (I) => {
						if (this.canSelectMany || !this.Mb) return;
						const T = new i.$7fb(I),
							P = T.keyCode;
						this.Mb.keybindings.some((D) => {
							const M = D.getChords();
							return M.length > 1
								? !1
								: M[0].shiftKey && P === r.KeyCode.Shift
									? !(T.ctrlKey || T.altKey || T.metaKey)
									: !!(
											(M[0].altKey && P === r.KeyCode.Alt) ||
											(M[0].ctrlKey && P === r.KeyCode.Ctrl) ||
											(M[0].metaKey && P === r.KeyCode.Meta)
										);
						}) &&
							(this.activeItems[0] &&
								((this.Ab = [this.activeItems[0]]),
								this.Db.fire(this.selectedItems),
								this.Ub(!1)),
							(this.Mb = void 0));
					});
				}
				Z() {
					if (!this.q) return;
					const I = this.keepScrollPosition ? this.Sb : 0,
						T = !!this.description,
						P = {
							title: !!this.title || !!this.step || !!this.Y.length,
							description: T,
							checkAll: this.canSelectMany && !this.Pb,
							checkBox: this.canSelectMany,
							inputBox: !this.Nb,
							progressBar: !this.Nb || T,
							visibleCount: !0,
							count: this.canSelectMany && !this.Ob,
							ok: this.ok === "default" ? this.canSelectMany : this.ok,
							list: !0,
							message: !!this.validationMessage,
							customButton: this.customButton,
						};
					this.X.setVisibilities(P),
						super.Z(),
						this.X.inputBox.value !== this.value &&
							(this.X.inputBox.value = this.value),
						this.Hb &&
							((this.Hb = !1),
							this.X.inputBox.select(
								this.Gb && { start: this.Gb[0], end: this.Gb[1] },
							)),
						this.X.inputBox.placeholder !== (this.placeholder || "") &&
							(this.X.inputBox.placeholder = this.placeholder || "");
					let k = this.ariaLabel;
					!k &&
						P.inputBox &&
						((k = this.placeholder || l.db),
						this.title && (k += ` - ${this.title}`)),
						this.X.list.ariaLabel !== k && (this.X.list.ariaLabel = k ?? null),
						(this.X.list.matchOnDescription = this.matchOnDescription),
						(this.X.list.matchOnDetail = this.matchOnDetail),
						(this.X.list.matchOnLabel = this.matchOnLabel),
						(this.X.list.matchOnLabelMode = this.matchOnLabelMode),
						(this.X.list.sortByLabel = this.sortByLabel),
						this.mb &&
							((this.mb = !1),
							this.Qb.bufferEvents(() => {
								switch (
									(this.X.list.setElements(this.items),
									(this.X.list.shouldLoop = !this.canSelectMany),
									this.X.list.filter(this.filterValue(this.X.inputBox.value)),
									this.vb)
								) {
									case g.ItemActivation.NONE:
										this.vb = g.ItemActivation.FIRST;
										break;
									case g.ItemActivation.SECOND:
										this.X.list.focus(g.QuickPickFocus.Second),
											(this.vb = g.ItemActivation.FIRST);
										break;
									case g.ItemActivation.LAST:
										this.X.list.focus(g.QuickPickFocus.Last),
											(this.vb = g.ItemActivation.FIRST);
										break;
									default:
										this.Tb();
										break;
								}
							})),
						this.X.container.classList.contains("show-checkboxes") !==
							!!this.canSelectMany &&
							(this.canSelectMany ? this.X.list.clearFocus() : this.Tb()),
						this.xb &&
							((this.xb = !1),
							(this.yb = this.wb),
							this.X.list.setFocusedElements(this.activeItems),
							this.yb === this.wb && (this.yb = null)),
						this.Bb &&
							((this.Bb = !1),
							(this.Cb = this.Ab),
							this.canSelectMany
								? this.X.list.setCheckedElements(this.selectedItems)
								: this.X.list.setSelectedElements(this.selectedItems),
							this.Cb === this.Ab && (this.Cb = null)),
						(this.X.customButton.label = this.customLabel || ""),
						(this.X.customButton.element.title = this.customHover || ""),
						P.inputBox ||
							(this.X.list.domFocus(),
							this.canSelectMany && this.X.list.focus(g.QuickPickFocus.First)),
						this.keepScrollPosition && (this.Sb = I);
				}
				focus(I) {
					this.X.list.focus(I), this.canSelectMany && this.X.list.domFocus();
				}
				accept(I) {
					(I && !this.ob) ||
						(this.activeItems[0] &&
							((this.Ab = [this.activeItems[0]]),
							this.Db.fire(this.selectedItems),
							this.Ub(I ?? !1)));
				}
			}
			e.$Exc = l;
			class y extends s {
				constructor() {
					super(...arguments),
						(this.db = ""),
						(this.fb = !0),
						(this.hb = !1),
						(this.jb = this.D(new m.$re())),
						(this.kb = this.D(new m.$re())),
						(this.type = g.QuickInputType.InputBox),
						(this.onDidChangeValue = this.jb.event),
						(this.onDidAccept = this.kb.event);
				}
				get value() {
					return this.db;
				}
				set value(I) {
					(this.db = I || ""), this.Z();
				}
				get valueSelection() {
					const I = this.X.inputBox.getSelection();
					if (I) return [I.start, I.end];
				}
				set valueSelection(I) {
					(this.eb = I), (this.fb = !0), this.Z();
				}
				get placeholder() {
					return this.gb;
				}
				set placeholder(I) {
					(this.gb = I), this.Z();
				}
				get password() {
					return this.hb;
				}
				set password(I) {
					(this.hb = I), this.Z();
				}
				get prompt() {
					return this.ib;
				}
				set prompt(I) {
					(this.ib = I),
						(this.H = I ? (0, n.localize)(2047, null, I) : s.c),
						this.Z();
				}
				show() {
					this.q ||
						(this.U.add(
							this.X.inputBox.onDidChange((I) => {
								I !== this.value && ((this.db = I), this.jb.fire(I));
							}),
						),
						this.U.add(this.X.onDidAccept(() => this.kb.fire())),
						(this.fb = !0)),
						super.show();
				}
				Z() {
					if (!this.q) return;
					this.X.container.classList.remove("hidden-input");
					const I = {
						title: !!this.title || !!this.step || !!this.Y.length,
						description: !!this.description || !!this.step,
						inputBox: !0,
						message: !0,
						progressBar: !0,
					};
					this.X.setVisibilities(I),
						super.Z(),
						this.X.inputBox.value !== this.value &&
							(this.X.inputBox.value = this.value),
						this.fb &&
							((this.fb = !1),
							this.X.inputBox.select(
								this.eb && { start: this.eb[0], end: this.eb[1] },
							)),
						this.X.inputBox.placeholder !== (this.placeholder || "") &&
							(this.X.inputBox.placeholder = this.placeholder || ""),
						this.X.inputBox.password !== this.password &&
							(this.X.inputBox.password = this.password);
				}
			}
			e.$Fxc = y;
			class $ extends s {
				constructor() {
					super(...arguments), (this.type = g.QuickInputType.QuickWidget);
				}
				Z() {
					if (!this.q) return;
					const I = {
						title: !!this.title || !!this.step || !!this.Y.length,
						description: !!this.description || !!this.step,
					};
					this.X.setVisibilities(I), super.Z();
				}
			}
			e.$Gxc = $;
			let v = class extends f.$Vyb {
				constructor(I, T) {
					super("element", !1, (P) => this.g(P), I, T);
				}
				g(I) {
					const T = (
						t.$Ygb(I.content)
							? (I.content.textContent ?? "")
							: typeof I.content == "string"
								? I.content
								: I.content.value
					).includes(`
`);
					return {
						persistence: { hideOnKeyDown: !1 },
						appearance: { showHoverHint: T, skipFadeInAnimation: !0 },
					};
				}
			};
			(e.$Hxc = v), (e.$Hxc = v = Ne([j(0, o.$gj), j(1, f.$Uyb)], v));
		},
	)
