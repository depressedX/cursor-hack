import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/terminal.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './terminal.js';
import '../../../common/views.js';
import '../../../../platform/terminal/common/terminal.js';
import './terminalStatusList.js';
import '../../../../base/browser/dom.js';
import '../../../services/views/browser/viewsService.js';
import '../../../../base/common/arrays.js';
define(
			de[4059],
			he([1, 0, 145, 6, 3, 279, 96, 5, 107, 60, 117, 806, 7, 1352, 24]),
			function (ce /*require*/,
 e /*exports*/,
 t /*terminal*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*splitview*/,
 C /*layoutService*/,
 d /*instantiation*/,
 m /*terminal*/,
 r /*views*/,
 u /*terminal*/,
 a /*terminalStatusList*/,
 h /*dom*/,
 c /*viewsService*/,
 n /*arrays*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YUc = void 0);
				var g;
				(function (b) {
					(b[(b.SplitPaneMinSize = 80)] = "SplitPaneMinSize"),
						(b[(b.ResizePartCellCount = 4)] = "ResizePartCellCount");
				})(g || (g = {}));
				class p extends w.$1c {
					get onDidChange() {
						return this.m;
					}
					constructor(s, l) {
						super(),
							(this.n = s),
							(this.orientation = l),
							(this.g = this.D(new w.$Zc())),
							(this.h = []),
							(this.j = new Map()),
							(this.m = i.Event.None),
							(this.b = this.n.offsetWidth),
							(this.a = this.n.offsetHeight),
							this.q(),
							this.f.layout(
								this.orientation === E.Orientation.HORIZONTAL ? this.b : this.a,
							);
					}
					q() {
						(this.f = new E.$vob(this.n, { orientation: this.orientation })),
							this.g.clear(),
							this.g.add(
								this.f.onDidSashReset(() => this.f.distributeViewSizes()),
							);
					}
					split(s, l) {
						this.r(s, l);
					}
					resizePane(s, l, y) {
						if (this.h.length <= 1) return;
						const $ = [];
						for (let I = 0; I < this.f.length; I++)
							$.push(this.f.getViewSize(I));
						const v = s !== this.h.length - 1,
							S = v ? s + 1 : s - 1;
						((v && l === m.Direction.Left) ||
							(!v && l === m.Direction.Right) ||
							(v && l === m.Direction.Up) ||
							(!v && l === m.Direction.Down)) &&
							(y *= -1),
							$[s] + y < g.SplitPaneMinSize
								? (y = g.SplitPaneMinSize - $[s])
								: $[S] - y < g.SplitPaneMinSize &&
									(y = $[S] - g.SplitPaneMinSize),
							($[s] += y),
							($[S] -= y);
						for (let I = 0; I < this.f.length - 1; I++)
							this.f.resizeView(I, $[I]);
					}
					resizePanes(s) {
						if (this.h.length <= 1) return;
						s[s.length - 1] += 1 - s.reduce((y, $) => y + $, 0);
						let l = 0;
						for (let y = 0; y < this.f.length; y++) l += this.f.getViewSize(y);
						for (let y = 0; y < this.f.length; y++)
							this.f.resizeView(y, l * s[y]);
					}
					getPaneSize(s) {
						const l = this.j.get(s);
						if (!l) return 0;
						const y = this.h.indexOf(l);
						return this.f.getViewSize(y);
					}
					r(s, l) {
						const y = new o(
							s,
							this.orientation === E.Orientation.HORIZONTAL ? this.a : this.b,
						);
						(y.orientation = this.orientation),
							typeof l == "number" ? this.h.splice(l, 0, y) : this.h.push(y),
							this.j.set(s, this.h[this.h.indexOf(y)]),
							this.s(() => this.f.addView(y, E.Sizing.Distribute, l)),
							this.layout(this.b, this.a),
							(this.m = i.Event.any(...this.h.map(($) => $.onDidChange)));
					}
					remove(s) {
						let l = null;
						for (let y = 0; y < this.h.length; y++)
							this.h[y].instance === s && (l = y);
						l !== null &&
							(this.h.splice(l, 1),
							this.j.delete(s),
							this.f.removeView(l, E.Sizing.Distribute),
							s.detachFromElement());
					}
					layout(s, l) {
						(this.b = s),
							(this.a = l),
							this.orientation === E.Orientation.HORIZONTAL
								? (this.h.forEach((y) => y.orthogonalLayout(l)),
									this.f.layout(s))
								: (this.h.forEach((y) => y.orthogonalLayout(s)),
									this.f.layout(l));
					}
					setOrientation(s) {
						if (this.orientation !== s) {
							for (this.orientation = s; this.n.children.length > 0; )
								this.n.children[0].remove();
							this.g.clear(),
								this.f.dispose(),
								this.q(),
								this.s(() => {
									this.h.forEach((l) => {
										(l.orientation = s), this.f.addView(l, 1);
									});
								});
						}
					}
					s(s) {
						this.h.forEach((l) => (l.instance.disableLayout = !0)),
							s(),
							this.h.forEach((l) => (l.instance.disableLayout = !1));
					}
				}
				class o {
					get onDidChange() {
						return this.a;
					}
					constructor(s, l) {
						(this.instance = s),
							(this.orthogonalSize = l),
							(this.minimumSize = g.SplitPaneMinSize),
							(this.maximumSize = Number.MAX_VALUE),
							(this.a = i.Event.None),
							(this.element = document.createElement("div")),
							(this.element.className = "terminal-split-pane"),
							this.instance.attachToElement(this.element);
					}
					layout(s) {
						!s ||
							!this.orthogonalSize ||
							(this.orientation === E.Orientation.VERTICAL
								? this.instance.layout({
										width: this.orthogonalSize,
										height: s,
									})
								: this.instance.layout({
										width: s,
										height: this.orthogonalSize,
									}));
					}
					orthogonalLayout(s) {
						this.orthogonalSize = s;
					}
				}
				let f = class extends w.$1c {
					get terminalInstances() {
						return this.a;
					}
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.F = s),
							(this.G = y),
							(this.H = $),
							(this.I = v),
							(this.J = S),
							(this.L = I),
							(this.a = []),
							(this.g = C.Position.BOTTOM),
							(this.h = r.ViewContainerLocation.Panel),
							(this.j = new Map()),
							(this.m = -1),
							(this.q = !1),
							(this.r = this.D(new i.$re())),
							(this.onDidDisposeInstance = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidFocusInstance = this.s.event),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeInstanceCapability = this.u.event),
							(this.w = this.D(new i.$re())),
							(this.onDisposed = this.w.event),
							(this.y = this.D(new i.$re())),
							(this.onInstancesChanged = this.y.event),
							(this.z = this.D(new i.$re())),
							(this.onDidChangeActiveInstance = this.z.event),
							(this.C = this.D(new i.$re())),
							(this.onPanelOrientationChanged = this.C.event),
							l && this.addInstance(l),
							this.F && this.attachToElement(this.F),
							this.C.fire(
								this.h === r.ViewContainerLocation.Panel && (0, C.$nEb)(this.g)
									? E.Orientation.HORIZONTAL
									: E.Orientation.VERTICAL,
							),
							this.D(
								(0, w.$Yc)(() => {
									this.F && this.f && (this.f.remove(), (this.f = void 0));
								}),
							);
					}
					addInstance(s, l) {
						let y;
						const $ = l ? this.a.findIndex((v) => v.instanceId === l) : this.m;
						"instanceId" in s
							? (y = s)
							: (y = this.H.createInstance(s, u.TerminalLocation.Panel)),
							this.a.length === 0
								? (this.a.push(y), (this.m = 0))
								: this.a.splice($ + 1, 0, y),
							this.M(y),
							this.b && this.b.split(y, $ + 1),
							this.y.fire();
					}
					dispose() {
						(this.a = []), this.y.fire(), super.dispose();
					}
					get activeInstance() {
						if (this.a.length !== 0) return this.a[this.m];
					}
					getLayoutInfo(s) {
						const l = this.terminalInstances.filter(
								($) =>
									typeof $.persistentProcessId == "number" && $.shouldPersist,
							),
							y = l
								.map(($) => this.b?.getPaneSize($) || 0)
								.reduce(($, v) => ($ += v), 0);
						return {
							isActive: s,
							activePersistentProcessId: this.activeInstance
								? this.activeInstance.persistentProcessId
								: void 0,
							terminals: l.map(($) => ({
								relativeSize: y > 0 ? this.b.getPaneSize($) / y : 0,
								terminal: $.persistentProcessId || 0,
							})),
						};
					}
					M(s) {
						this.j.set(s.instanceId, [
							s.onDisposed((l) => {
								this.r.fire(l), this.N(l);
							}),
							s.onDidFocus((l) => {
								this.P(l), this.s.fire(l);
							}),
							s.capabilities.onDidAddCapabilityType(() => this.u.fire(s)),
							s.capabilities.onDidRemoveCapabilityType(() => this.u.fire(s)),
						]);
					}
					N(s) {
						this.O(s);
					}
					removeInstance(s) {
						this.O(s);
					}
					O(s) {
						const l = this.a.indexOf(s);
						if (l === -1) return;
						const y = s === this.activeInstance;
						if ((this.a.splice(l, 1), y && this.a.length > 0)) {
							const v = l < this.a.length ? l : this.a.length - 1;
							this.setActiveInstanceByIndex(v), this.activeInstance?.focus(!0);
						} else l < this.m && this.m--;
						this.b?.remove(s),
							this.a.length === 0
								? (this.w.fire(this), this.dispose())
								: this.y.fire();
						const $ = this.j.get(s.instanceId);
						$ && ((0, w.$Vc)($), this.j.delete(s.instanceId));
					}
					moveInstance(s, l, y) {
						if (
							((s = (0, n.$6b)(s)),
							s.some((S) => !this.terminalInstances.includes(S)))
						)
							return;
						const v = y === "before" ? l : l + 1;
						this.a.splice(v, 0, ...s);
						for (const S of s) {
							const I =
								y === "after" ? this.a.indexOf(S) : this.a.lastIndexOf(S);
							this.a.splice(I, 1);
						}
						if (this.b)
							for (let S = 0; S < s.length; S++) {
								const I = s[S];
								this.b.remove(I), this.b.split(I, l + (y === "before" ? S : 0));
							}
						this.y.fire();
					}
					P(s) {
						this.setActiveInstanceByIndex(this.Q(s.instanceId));
					}
					Q(s) {
						let l = -1;
						if (
							(this.terminalInstances.forEach((y, $) => {
								y.instanceId === s && (l = $);
							}),
							l === -1)
						)
							throw new Error(
								`Terminal with ID ${s} does not exist (has it already been disposed?)`,
							);
						return l;
					}
					setActiveInstanceByIndex(s, l) {
						if (s < 0 || s >= this.a.length) return;
						const y = this.activeInstance;
						(this.m = s),
							(y !== this.activeInstance || l) &&
								(this.y.fire(), this.z.fire(this.activeInstance));
					}
					attachToElement(s) {
						if (
							((this.F = s),
							this.f ||
								((this.f = document.createElement("div")),
								this.f.classList.add("terminal-group")),
							this.F.appendChild(this.f),
							!this.b)
						) {
							(this.g = this.I.getPanelPosition()),
								(this.h = this.J.getViewLocationById(t.$geb));
							const l =
								this.h === r.ViewContainerLocation.Panel && (0, C.$nEb)(this.g)
									? E.Orientation.HORIZONTAL
									: E.Orientation.VERTICAL;
							(this.b = this.L.createInstance(p, this.f, l)),
								this.terminalInstances.forEach((y) =>
									this.b.split(y, this.m + 1),
								);
						}
					}
					get title() {
						if (this.a.length === 0) return "";
						let s =
							this.terminalInstances[0].title +
							this.R(this.terminalInstances[0]);
						this.terminalInstances[0].description &&
							(s += ` (${this.terminalInstances[0].description})`);
						for (let l = 1; l < this.terminalInstances.length; l++) {
							const y = this.terminalInstances[l];
							y.title &&
								((s += `, ${y.title + this.R(y)}`),
								y.description && (s += ` (${y.description})`));
						}
						return s;
					}
					R(s) {
						return this.G.config.enableBell &&
							s.statusList.statuses.some((l) => l.id === a.TerminalStatus.Bell)
							? "*"
							: "";
					}
					setVisible(s) {
						(this.q = s),
							this.f && (this.f.style.display = s ? "" : "none"),
							this.terminalInstances.forEach((l) => l.setVisible(s));
					}
					split(s) {
						const l = this.H.createInstance(s, u.TerminalLocation.Panel);
						return this.addInstance(l, s.parentTerminalId), this.P(l), l;
					}
					addDisposable(s) {
						this.D(s);
					}
					layout(s, l) {
						if (this.b) {
							const y = this.I.getPanelPosition(),
								$ = this.J.getViewLocationById(t.$geb);
							if (y !== this.g || $ !== this.h) {
								const S =
									$ === r.ViewContainerLocation.Panel && (0, C.$nEb)(y)
										? E.Orientation.HORIZONTAL
										: E.Orientation.VERTICAL;
								this.b.setOrientation(S),
									(this.g = y),
									(this.h = $),
									this.C.fire(this.b.orientation);
							}
							this.b.layout(s, l),
								this.n &&
									this.q &&
									(this.resizePanes(this.n), (this.n = void 0));
						}
					}
					focusPreviousPane() {
						const s = this.m === 0 ? this.a.length - 1 : this.m - 1;
						this.setActiveInstanceByIndex(s);
					}
					focusNextPane() {
						const s = this.m === this.a.length - 1 ? 0 : this.m + 1;
						this.setActiveInstanceByIndex(s);
					}
					S() {
						switch (this.h) {
							case r.ViewContainerLocation.Panel:
								return this.g;
							case r.ViewContainerLocation.Sidebar:
								return this.I.getSideBarPosition();
							case r.ViewContainerLocation.AuxiliaryBar:
								return this.I.getSideBarPosition() === C.Position.LEFT
									? C.Position.RIGHT
									: C.Position.LEFT;
						}
					}
					U() {
						return (0, C.$nEb)(this.S())
							? E.Orientation.HORIZONTAL
							: E.Orientation.VERTICAL;
					}
					resizePane(s) {
						if (!this.b) return;
						const l = s === m.Direction.Left || s === m.Direction.Right,
							y = this.U(),
							$ =
								(l && y === E.Orientation.VERTICAL) ||
								(!l && y === E.Orientation.HORIZONTAL),
							v = this.G.getFont((0, h.getWindow)(this.f)),
							S = l ? v.charWidth : v.charHeight;
						if (S) {
							let I = S * g.ResizePartCellCount;
							if ($) {
								const T = this.S();
								((T === C.Position.LEFT && s === m.Direction.Left) ||
									(T === C.Position.RIGHT && s === m.Direction.Right) ||
									(T === C.Position.BOTTOM && s === m.Direction.Down) ||
									(T === C.Position.TOP && s === m.Direction.Up)) &&
									(I *= -1),
									this.I.resizePart((0, c.$4uc)(this.h), I, I);
							} else this.b.resizePane(this.m, s, I);
						}
					}
					resizePanes(s) {
						if (!this.b) {
							this.n = s;
							return;
						}
						this.b.resizePanes(s);
					}
				};
				(e.$YUc = f),
					(e.$YUc = f =
						Ne(
							[
								j(2, m.$jIb),
								j(3, m.$mIb),
								j(4, C.$mEb),
								j(5, r.$K1),
								j(6, d.$Li),
							],
							f,
						));
			},
		)
