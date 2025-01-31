import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './terminalGroup.js';
import './terminalUri.js';
import '../common/terminal.js';
import '../common/terminalContextKey.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../base/common/arrays.js';
define(
			de[4060],
			he([1, 0, 15, 6, 3, 8, 5, 60, 89, 63, 4059, 690, 145, 237, 308, 24]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*contextkey*/,
 C /*instantiation*/,
 d /*views*/,
 m /*viewsService*/,
 r /*quickInput*/,
 u /*terminalGroup*/,
 a /*terminalUri*/,
 h /*terminal*/,
 c /*terminalContextKey*/,
 n /*tooltipService*/,
 g /*arrays*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Uc = void 0);
				let p = class extends w.$1c {
					get instances() {
						return this.groups.reduce(
							(f, b) => f.concat(b.terminalInstances),
							[],
						);
					}
					constructor(f, b, s, l, y, $) {
						super(),
							(this.C = f),
							(this.F = b),
							(this.G = s),
							(this.H = l),
							(this.I = y),
							(this.J = $),
							(this.groups = []),
							(this.activeGroupIndex = -1),
							(this.lastAccessedMenu = "inline-tab"),
							(this.j = !1),
							(this.m = this.D(new i.$re())),
							(this.onDidChangeActiveGroup = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidDisposeGroup = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeGroups = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidShow = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidDisposeInstance = this.s.event),
							(this.t = this.D(new i.$re())),
							(this.onDidFocusInstance = this.t.event),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeActiveInstance = this.u.event),
							(this.w = this.D(new i.$re())),
							(this.onDidChangeInstances = this.w.event),
							(this.y = this.D(new i.$re())),
							(this.onDidChangeInstanceCapability = this.y.event),
							(this.z = this.D(new i.$re())),
							(this.onDidChangePanelOrientation = this.z.event),
							(this.O = (v) =>
								new Set(
									v
										.map((S) => this.getGroupForInstance(S))
										.filter((S) => S !== void 0),
								)),
							(this.f = c.TerminalContextKeys.groupCount.bindTo(this.C)),
							this.D(this.onDidDisposeGroup((v) => this.M(v))),
							this.D(
								this.onDidChangeGroups(() => this.f.set(this.groups.length)),
							),
							this.D(
								i.Event.any(
									this.onDidChangeActiveGroup,
									this.onDidChangeInstances,
								)(() => this.updateVisibility()),
							),
							this.D(this.J.onShow(() => (this.j = !0))),
							this.D(this.J.onHide(() => (this.j = !1)));
					}
					hidePanel() {
						const f = this.H.getViewContainerByViewId(h.$geb);
						f &&
							this.H.getViewContainerModel(f).activeViewDescriptors.length ===
								1 &&
							(this.G.closeView(h.$geb),
							c.TerminalContextKeys.tabsMouse.bindTo(this.C).set(!1));
					}
					get activeGroup() {
						if (
							!(
								this.activeGroupIndex < 0 ||
								this.activeGroupIndex >= this.groups.length
							)
						)
							return this.groups[this.activeGroupIndex];
					}
					set activeGroup(f) {
						if (f === void 0) return;
						const b = this.groups.findIndex((s) => s === f);
						this.setActiveGroupByIndex(b);
					}
					get activeInstance() {
						return this.activeGroup?.activeInstance;
					}
					setActiveInstance(f) {
						this.setActiveInstanceByIndex(this.L(f.instanceId));
					}
					L(f) {
						const b = this.instances.findIndex((s) => s.instanceId === f);
						if (b === -1)
							throw new Error(
								`Terminal with ID ${f} does not exist (has it already been disposed?)`,
							);
						return b;
					}
					setContainer(f) {
						(this.h = f), this.groups.forEach((b) => b.attachToElement(f));
					}
					async focusTabs() {
						if (this.instances.length === 0) return;
						await this.showPanel(!0),
							this.G.getActiveViewWithId(
								h.$geb,
							)?.terminalTabbedView?.focusTabs();
					}
					async focusHover() {
						if (this.instances.length === 0) return;
						this.G.getActiveViewWithId(
							h.$geb,
						)?.terminalTabbedView?.focusHover();
					}
					async focusInstance(f) {
						return this.showPanel(!0);
					}
					async focusActiveInstance() {
						return this.showPanel(!0);
					}
					createGroup(f) {
						const b = this.F.createInstance(u.$YUc, this.h, f);
						return (
							this.groups.push(b),
							b.addDisposable(
								i.Event.forward(b.onPanelOrientationChanged, this.z),
							),
							b.addDisposable(i.Event.forward(b.onDidDisposeInstance, this.s)),
							b.addDisposable(i.Event.forward(b.onDidFocusInstance, this.t)),
							b.addDisposable(
								i.Event.forward(b.onDidChangeInstanceCapability, this.y),
							),
							b.addDisposable(i.Event.forward(b.onInstancesChanged, this.w)),
							b.addDisposable(i.Event.forward(b.onDisposed, this.n)),
							b.addDisposable(
								b.onDidChangeActiveInstance((s) => {
									b === this.activeGroup && this.u.fire(s);
								}),
							),
							b.terminalInstances.length > 0 && this.w.fire(),
							this.instances.length === 1 && this.setActiveInstanceByIndex(0),
							this.q.fire(),
							b
						);
					}
					async showPanel(f) {
						this.I.registerEvent("terminal.show");
						const b =
							this.G.getActiveViewWithId(h.$geb) ??
							(await this.G.openView(h.$geb, f));
						if ((b?.setExpanded(!0), f)) {
							await (0, t.$Nh)(0);
							const s = this.activeInstance;
							s &&
								(b && !b.isVisible() && (await this.G.openView(h.$geb, f)),
								await s.focusWhenReady(!0));
						}
						this.r.fire();
					}
					getInstanceFromResource(f) {
						return (0, a.$WUc)(this.instances, f);
					}
					M(f) {
						const b = this.activeGroup,
							s = f === b,
							l = this.groups.indexOf(f);
						if ((l !== -1 && (this.groups.splice(l, 1), this.q.fire()), s)) {
							if (this.groups.length > 0 && !this.j) {
								const y = l < this.groups.length ? l : this.groups.length - 1;
								this.setActiveGroupByIndex(y, !0),
									this.activeInstance?.focus(!0);
							}
						} else
							this.activeGroupIndex > l &&
								this.setActiveGroupByIndex(this.activeGroupIndex - 1);
						this.activeGroupIndex >= this.groups.length &&
							this.setActiveGroupByIndex(this.groups.length - 1),
							this.w.fire(),
							this.q.fire(),
							s &&
								(this.m.fire(this.activeGroup),
								this.u.fire(this.activeInstance));
					}
					setActiveGroupByIndex(f, b) {
						if (f === -1 && this.groups.length === 0) {
							this.activeGroupIndex !== -1 &&
								((this.activeGroupIndex = -1),
								this.m.fire(this.activeGroup),
								this.u.fire(this.activeInstance));
							return;
						}
						if (f < 0 || f >= this.groups.length) return;
						const s = this.activeGroup;
						(this.activeGroupIndex = f),
							(b || s !== this.activeGroup) &&
								(this.m.fire(this.activeGroup),
								this.u.fire(this.activeInstance));
					}
					N(f) {
						let b = 0;
						for (; f >= 0 && b < this.groups.length; ) {
							const s = this.groups[b],
								l = s.terminalInstances.length;
							if (f < l)
								return {
									group: s,
									groupIndex: b,
									instance: s.terminalInstances[f],
									instanceIndex: f,
								};
							(f -= l), b++;
						}
					}
					setActiveInstanceByIndex(f) {
						const b = this.activeInstance,
							s = this.N(f),
							l = s?.group.terminalInstances[s.instanceIndex];
						if (!s || b === l) return;
						const y = s.instanceIndex;
						(this.activeGroupIndex = s.groupIndex),
							this.m.fire(this.activeGroup),
							s.group.setActiveInstanceByIndex(y, !0);
					}
					setActiveGroupToNext() {
						if (this.groups.length <= 1) return;
						let f = this.activeGroupIndex + 1;
						f >= this.groups.length && (f = 0), this.setActiveGroupByIndex(f);
					}
					setActiveGroupToPrevious() {
						if (this.groups.length <= 1) return;
						let f = this.activeGroupIndex - 1;
						f < 0 && (f = this.groups.length - 1),
							this.setActiveGroupByIndex(f);
					}
					moveGroup(f, b) {
						f = (0, g.$6b)(f);
						const s = this.O(f),
							l = this.getGroupForInstance(b);
						if (!l || s.size === 0) return;
						if (s.size === 1 && s.has(l)) {
							const T = l.terminalInstances.indexOf(b),
								P = f.sort(
									(D, M) =>
										l.terminalInstances.indexOf(D) -
										l.terminalInstances.indexOf(M),
								),
								L = l.terminalInstances.indexOf(P[0]) < T ? "after" : "before";
							l.moveInstance(P, T, L), this.w.fire();
							return;
						}
						const y = this.groups.indexOf(l),
							$ = Array.from(s).sort(
								(T, P) => this.groups.indexOf(T) - this.groups.indexOf(P),
							),
							S = this.groups.indexOf($[0]) < y ? "after" : "before",
							I = S === "after" ? y + 1 : y;
						this.groups.splice(I, 0, ...$);
						for (const T of $) {
							const P =
								S === "after"
									? this.groups.indexOf(T)
									: this.groups.lastIndexOf(T);
							this.groups.splice(P, 1);
						}
						this.w.fire();
					}
					moveGroupToEnd(f) {
						f = (0, g.$6b)(f);
						const b = this.O(f);
						if (b.size === 0) return;
						const s = this.groups.length - 1,
							l = Array.from(b).sort(
								(y, $) => this.groups.indexOf(y) - this.groups.indexOf($),
							);
						this.groups.splice(s + 1, 0, ...l);
						for (const y of l) {
							const $ = this.groups.indexOf(y);
							this.groups.splice($, 1);
						}
						this.w.fire();
					}
					moveInstance(f, b, s) {
						const l = this.getGroupForInstance(f),
							y = this.getGroupForInstance(b);
						if (!l || !y) return;
						l !== y && (l.removeInstance(f), y.addInstance(f));
						const $ = y.terminalInstances.indexOf(b) + (s === "after" ? 1 : 0);
						y.moveInstance(f, $, s);
					}
					unsplitInstance(f) {
						const b = this.getGroupForInstance(f);
						!b ||
							b.terminalInstances.length < 2 ||
							(b.removeInstance(f), this.createGroup(f));
					}
					joinInstances(f) {
						const b = this.getGroupForInstance(f[0]);
						if (b) {
							let $ = !0;
							for (let v = 1; v < b.terminalInstances.length; v++)
								if (b.terminalInstances.includes(f[v])) {
									$ = !1;
									break;
								}
							if (!$ && b.terminalInstances.length === f.length) return;
						}
						let s, l;
						for (const $ of f) {
							const v = this.getGroupForInstance($);
							if (v?.terminalInstances.length === 1) {
								(s = $), (l = v);
								break;
							}
						}
						l || (l = this.createGroup());
						const y = this.activeGroup === l;
						for (const $ of f) {
							if ($ === s) continue;
							const v = this.getGroupForInstance($);
							v && (v.removeInstance($), l.addInstance($));
						}
						this.setActiveInstance(f[0]),
							this.w.fire(),
							y || this.m.fire(this.activeGroup);
					}
					instanceIsSplit(f) {
						const b = this.getGroupForInstance(f);
						return b ? b.terminalInstances.length > 1 : !1;
					}
					getGroupForInstance(f) {
						return this.groups.find((b) => b.terminalInstances.includes(f));
					}
					getGroupLabels() {
						return this.groups
							.filter((f) => f.terminalInstances.length > 0)
							.map((f, b) => `${b + 1}: ${f.title ? f.title : ""}`);
					}
					updateVisibility() {
						const f = this.G.isViewVisible(h.$geb);
						this.groups.forEach((b, s) =>
							b.setVisible(f && s === this.activeGroupIndex),
						);
					}
				};
				(e.$6Uc = p),
					(e.$6Uc = p =
						Ne(
							[
								j(0, E.$6j),
								j(1, C.$Li),
								j(2, m.$HMb),
								j(3, d.$K1),
								j(4, n.$5X),
								j(5, r.$DJ),
							],
							p,
						));
			},
		)
