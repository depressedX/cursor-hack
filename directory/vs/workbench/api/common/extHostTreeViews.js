import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../common/views.js';
import '../../../base/common/async.js';
import './extHostTypes.js';
import '../../../base/common/types.js';
import '../../../base/common/arrays.js';
import './extHostTypeConverters.js';
import '../../../base/common/htmlContent.js';
import '../../../base/common/cancellation.js';
import '../../../editor/common/services/treeViewsDnd.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[589],
			Ne([1, 0, 10, 24, 2, 4, 3, 520, 9, 11, 19, 20, 17, 135, 23, 464, 29]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$bjd = void 0),
					(n = tt(n));
				function $(u, s) {
					if ((0, p.$lg)(u)) return { label: u };
					if (u && typeof u == "object" && typeof u.label == "string") {
						let f;
						return (
							Array.isArray(u.highlights) &&
								((f = u.highlights.filter(
									(o) =>
										o.length === 2 &&
										typeof o[0] == "number" &&
										typeof o[1] == "number",
								)),
								(f = f.length ? f : void 0)),
							{ label: u.label, highlights: f }
						);
					}
				}
				class T extends P.$1c {
					constructor(s, f, o) {
						super(),
							(this.f = s),
							(this.g = f),
							(this.h = o),
							(this.a = new Map()),
							(this.b = new c.$a3b());
						function w(m) {
							return (
								m &&
								m.$treeViewId &&
								(m.$treeItemHandle ||
									m.$selectedTreeItems ||
									m.$focusedTreeItem)
							);
						}
						f.registerArgumentProcessor({
							processArgument: (m) =>
								w(m)
									? this.q(m)
									: Array.isArray(m) && m.length > 0
										? m.map((E) => (w(E) ? this.q(E) : E))
										: m,
						});
					}
					registerTreeDataProvider(s, f, o) {
						const w = this.createTreeView(s, { treeDataProvider: f }, o);
						return { dispose: () => w.dispose() };
					}
					createTreeView(s, f, o) {
						if (!f || !f.treeDataProvider)
							throw new Error("Options with treeDataProvider is mandatory");
						const w = f.dragAndDropController?.dropMimeTypes ?? [],
							m = f.dragAndDropController?.dragMimeTypes ?? [],
							E = !!f.dragAndDropController?.handleDrag,
							R = !!f.dragAndDropController?.handleDrop,
							C = this.m(s, f, o),
							O = {
								showCollapseAll: !!f.showCollapseAll,
								canSelectMany: !!f.canSelectMany,
								dropMimeTypes: w,
								dragMimeTypes: m,
								hasHandleDrag: E,
								hasHandleDrop: R,
								manuallyManageCheckboxes: !!f.manageCheckboxStateManually,
							},
							A = this.f.$registerTreeViewDataProvider(s, O),
							J = {
								get onDidCollapseElement() {
									return C.onDidCollapseElement;
								},
								get onDidExpandElement() {
									return C.onDidExpandElement;
								},
								get selection() {
									return C.selectedElements;
								},
								get onDidChangeSelection() {
									return C.onDidChangeSelection;
								},
								get activeItem() {
									return (0, h.$u2)(o, "treeViewActiveItem"), C.focusedElement;
								},
								get onDidChangeActiveItem() {
									return (
										(0, h.$u2)(o, "treeViewActiveItem"), C.onDidChangeActiveItem
									);
								},
								get visible() {
									return C.visible;
								},
								get onDidChangeVisibility() {
									return C.onDidChangeVisibility;
								},
								get onDidChangeCheckboxState() {
									return C.onDidChangeCheckboxState;
								},
								get message() {
									return C.message;
								},
								set message(L) {
									(0, k.$el)(L) && (0, h.$u2)(o, "treeViewMarkdownMessage"),
										(C.message = L);
								},
								get title() {
									return C.title;
								},
								set title(L) {
									C.title = L;
								},
								get description() {
									return C.description;
								},
								set description(L) {
									C.description = L;
								},
								get badge() {
									return C.badge;
								},
								set badge(L) {
									L !== void 0 && n.ViewBadge.isViewBadge(L)
										? (C.badge = {
												value: Math.floor(Math.abs(L.value)),
												tooltip: L.tooltip,
											})
										: L === void 0 && (C.badge = void 0);
								},
								reveal: (L, b) => C.reveal(L, b),
								dispose: async () => {
									await A, this.a.delete(s), C.dispose();
								},
							};
						return this.D(J), J;
					}
					$getChildren(s, f) {
						const o = this.a.get(s);
						return o ? o.getChildren(f) : Promise.reject(new I.$M1(s));
					}
					async $handleDrop(s, f, o, w, m, E, R, C) {
						const O = this.a.get(s);
						if (!O) return Promise.reject(new I.$M1(s));
						const A = d.DataTransfer.toDataTransfer(
							o,
							async (J) => (await this.f.$resolveDropFileData(s, f, J)).buffer,
						);
						return (
							R === s && C && (await this.j(A, O, C, m, E)), O.onDrop(A, w, m)
						);
					}
					async j(s, f, o, w, m) {
						const E = this.b.removeDragOperationTransfer(m);
						if (E)
							(await E)?.forEach((R, C) => {
								R && s.set(C, R);
							});
						else if (m && f.handleDrag) {
							const R = f.handleDrag(o, s, w);
							this.b.addDragOperationTransfer(m, R), await R;
						}
						return s;
					}
					async $handleDrag(s, f, o, w) {
						const m = this.a.get(s);
						if (!m) return Promise.reject(new I.$M1(s));
						const E = await this.j(new n.$icb(), m, f, w, o);
						if (!(!E || w.isCancellationRequested))
							return d.DataTransfer.from(E);
					}
					async $hasResolve(s) {
						const f = this.a.get(s);
						if (!f) throw new I.$M1(s);
						return f.hasResolve;
					}
					$resolve(s, f, o) {
						const w = this.a.get(s);
						if (!w) throw new I.$M1(s);
						return w.resolveTreeItem(f, o);
					}
					$setExpanded(s, f, o) {
						const w = this.a.get(s);
						if (!w) throw new I.$M1(s);
						w.setExpanded(f, o);
					}
					$setSelectionAndFocus(s, f, o) {
						const w = this.a.get(s);
						if (!w) throw new I.$M1(s);
						w.setSelectionAndFocus(f, o);
					}
					$setVisible(s, f) {
						const o = this.a.get(s);
						if (!o) {
							if (!f) return;
							throw new I.$M1(s);
						}
						o.setVisible(f);
					}
					$changeCheckboxState(s, f) {
						const o = this.a.get(s);
						if (!o) throw new I.$M1(s);
						o.setCheckboxState(f);
					}
					m(s, f, o) {
						const w = this.D(new a(s, f, this.f, this.g.converter, this.h, o));
						return this.a.set(s, w), w;
					}
					q(s) {
						const f = this.a.get(s.$treeViewId);
						return f && "$treeItemHandle" in s
							? f.getExtensionElement(s.$treeItemHandle)
							: f && "$focusedTreeItem" in s && s.$focusedTreeItem
								? f.focusedElement
								: null;
					}
				}
				t.$bjd = T;
				class a extends P.$1c {
					static {
						this.a = "0";
					}
					static {
						this.b = "1";
					}
					get visible() {
						return this.q;
					}
					get selectedElements() {
						return this.r
							.map((s) => this.getExtensionElement(s))
							.filter((s) => !(0, p.$ug)(s));
					}
					get focusedElement() {
						return this.s ? this.getExtensionElement(this.s) : void 0;
					}
					constructor(s, f, o, w, m, E) {
						if (
							(super(),
							(this.I = s),
							(this.J = o),
							(this.L = w),
							(this.M = m),
							(this.N = E),
							(this.h = void 0),
							(this.j = new Map()),
							(this.m = new Map()),
							(this.q = !1),
							(this.r = []),
							(this.s = void 0),
							(this.t = this.D(new N.$re())),
							(this.onDidExpandElement = this.t.event),
							(this.u = this.D(new N.$re())),
							(this.onDidCollapseElement = this.u.event),
							(this.w = this.D(new N.$re())),
							(this.onDidChangeSelection = this.w.event),
							(this.y = this.D(new N.$re())),
							(this.onDidChangeActiveItem = this.y.event),
							(this.z = this.D(new N.$re())),
							(this.onDidChangeVisibility = this.z.event),
							(this.C = this.D(new N.$re())),
							(this.onDidChangeCheckboxState = this.C.event),
							(this.F = this.D(new N.$re())),
							(this.G = Promise.resolve()),
							(this.H = Promise.resolve()),
							(this.O = ""),
							(this.P = ""),
							(this.Z = new g.$Ce()),
							E.contributes && E.contributes.views)
						)
							for (const A in E.contributes.views)
								for (const J of E.contributes.views[A])
									J.id === s && (this.P = J.name);
						(this.f = f.treeDataProvider),
							(this.g = f.dragAndDropController),
							this.f.onDidChangeTreeData &&
								this.D(
									this.f.onDidChangeTreeData((A) => {
										(Array.isArray(A) && A.length === 0) ||
											this.F.fire({ message: !1, element: A });
									}),
								);
						let R, C;
						const O = N.Event.debounce(
							this.F.event,
							(A, J) => (
								A || (A = { message: !1, elements: [] }),
								J.element !== !1 &&
									(R ||
										((R = new Promise((L) => (C = L))),
										(this.G = this.G.then(() => R))),
									Array.isArray(J.element)
										? A.elements.push(...J.element)
										: A.elements.push(J.element)),
								J.message && (A.message = !0),
								A
							),
							200,
							!0,
						);
						this.D(
							O(({ message: A, elements: J }) => {
								J.length &&
									(this.H = this.H.then(() => {
										const L = C;
										return (R = null), this.$(J).then(() => L());
									})),
									A &&
										this.J.$setMessage(
											this.I,
											d.MarkdownString.fromStrict(this.O) ?? "",
										);
							}),
						);
					}
					async getChildren(s) {
						const f = s ? this.getExtensionElement(s) : void 0;
						if (s && !f)
							return (
								this.M.error(`No tree item with id '${s}' found.`),
								Promise.resolve([])
							);
						let o = this.X(s);
						return (
							o || (o = await this.Y(f)), o ? o.map((w) => w.item) : void 0
						);
					}
					getExtensionElement(s) {
						return this.j.get(s);
					}
					reveal(s, f) {
						f = f || { select: !0, focus: !1 };
						const o = (0, p.$ug)(f.select) ? !0 : f.select,
							w = (0, p.$ug)(f.focus) ? !1 : f.focus,
							m = (0, p.$ug)(f.expand) ? !1 : f.expand;
						return typeof this.f.getParent != "function"
							? Promise.reject(
									new Error(
										"Required registered TreeDataProvider to implement 'getParent' method to access 'reveal' method",
									),
								)
							: s
								? this.G.then(() => this.S(s)).then(
										(E) =>
											this.W(s, E[E.length - 1]).then((R) =>
												this.J.$reveal(
													this.I,
													{ item: R.item, parentChain: E.map((C) => C.item) },
													{ select: o, focus: w, expand: m },
												),
											),
										(E) => this.M.error(E),
									)
								: this.J.$reveal(this.I, void 0, {
										select: o,
										focus: w,
										expand: m,
									});
					}
					get message() {
						return this.O;
					}
					set message(s) {
						(this.O = s), this.F.fire({ message: !0, element: !1 });
					}
					get title() {
						return this.P;
					}
					set title(s) {
						(this.P = s), this.J.$setTitle(this.I, s, this.Q);
					}
					get description() {
						return this.Q;
					}
					set description(s) {
						(this.Q = s), this.J.$setTitle(this.I, this.P, s);
					}
					get badge() {
						return this.R;
					}
					set badge(s) {
						(this.R?.value === s?.value && this.R?.tooltip === s?.tooltip) ||
							((this.R = d.ViewBadge.from(s)), this.J.$setBadge(this.I, s));
					}
					setExpanded(s, f) {
						const o = this.getExtensionElement(s);
						o &&
							(f
								? this.t.fire(Object.freeze({ element: o }))
								: this.u.fire(Object.freeze({ element: o })));
					}
					setSelectionAndFocus(s, f) {
						const o = !(0, y.$yb)(this.r, s);
						this.r = s;
						const w = this.s !== f;
						(this.s = f),
							o &&
								this.w.fire(
									Object.freeze({ selection: this.selectedElements }),
								),
							w &&
								this.y.fire(Object.freeze({ activeItem: this.focusedElement }));
					}
					setVisible(s) {
						s !== this.q &&
							((this.q = s), this.z.fire(Object.freeze({ visible: this.q })));
					}
					async setCheckboxState(s) {
						const f = (
							await Promise.all(
								s.map(async (o) => {
									const w = this.getExtensionElement(o.treeItemHandle);
									return w
										? {
												extensionItem: w,
												treeItem: await this.f.getTreeItem(w),
												newState: o.newState
													? n.TreeItemCheckboxState.Checked
													: n.TreeItemCheckboxState.Unchecked,
											}
										: Promise.resolve(void 0);
								}),
							)
						).filter((o) => o !== void 0);
						f.forEach((o) => {
							o.treeItem.checkboxState = o.newState
								? n.TreeItemCheckboxState.Checked
								: n.TreeItemCheckboxState.Unchecked;
						}),
							this.C.fire({
								items: f.map((o) => [o.extensionItem, o.newState]),
							});
					}
					async handleDrag(s, f, o) {
						const w = [];
						for (const m of s) {
							const E = this.getExtensionElement(m);
							E && w.push(E);
						}
						if (!(!this.g?.handleDrag || w.length === 0))
							return await this.g.handleDrag(w, f, o), f;
					}
					get hasHandleDrag() {
						return !!this.g?.handleDrag;
					}
					async onDrop(s, f, o) {
						const w = f ? this.getExtensionElement(f) : void 0;
						if (!((!w && f) || !this.g?.handleDrop))
							return (0, l.$Eh)(() =>
								this.g?.handleDrop ? this.g.handleDrop(w, s, o) : void 0,
							);
					}
					get hasResolve() {
						return !!this.f.resolveTreeItem;
					}
					async resolveTreeItem(s, f) {
						if (!this.f.resolveTreeItem) return;
						const o = this.j.get(s);
						if (o) {
							const w = this.m.get(o);
							if (w) {
								const m =
									(await this.f.resolveTreeItem(w.extensionItem, o, f)) ??
									w.extensionItem;
								return (
									this.hb(m),
									(w.item.tooltip = this.eb(m.tooltip)),
									(w.item.command = this.fb(w.disposableStore, m.command)),
									w.item
								);
							}
						}
					}
					S(s) {
						return this.U(s).then((f) =>
							f
								? this.S(f).then((o) =>
										this.W(f, o[o.length - 1]).then((w) => (o.push(w), o)),
									)
								: Promise.resolve([]),
						);
					}
					U(s) {
						const f = this.m.get(s);
						return f
							? Promise.resolve(
									f.parent ? this.j.get(f.parent.item.handle) : void 0,
								)
							: (0, l.$Eh)(() => this.f.getParent(s));
					}
					W(s, f) {
						const o = this.m.get(s);
						return o
							? Promise.resolve(o)
							: (0, l.$Eh)(() => this.f.getTreeItem(s))
									.then((w) => this.kb(s, w, f, !0))
									.then((w) =>
										this.getChildren(f ? f.item.handle : void 0).then(() => {
											const m = this.getExtensionElement(w);
											if (m) {
												const E = this.m.get(m);
												if (E) return Promise.resolve(E);
											}
											throw new Error(
												`Cannot resolve tree item for element ${w} from extension ${this.N.identifier.value}`,
											);
										}),
									);
					}
					X(s) {
						if (s) {
							let f;
							if (typeof s == "string") {
								const o = this.getExtensionElement(s);
								f = o ? this.m.get(o) : void 0;
							} else f = s;
							return (f && f.children) || void 0;
						}
						return this.h;
					}
					async Y(s) {
						this.rb(s);
						const f = new g.$Ce(this.Z.token);
						try {
							const o = s ? this.m.get(s) : void 0,
								w = await this.f.getChildren(s);
							if (f.token.isCancellationRequested) return;
							const m = (0, y.$Lb)(w || []),
								E = await Promise.all(
									(0, y.$Lb)(m).map((C) => this.f.getTreeItem(C)),
								);
							if (f.token.isCancellationRequested) return;
							const R = E.map((C, O) => (C ? this.db(m[O], C, o) : null));
							return (0, y.$Lb)(R);
						} finally {
							f.dispose();
						}
					}
					$(s) {
						if (s.some((o) => !o))
							return (
								this.Z.dispose(!0),
								(this.Z = new g.$Ce()),
								this.tb(),
								this.J.$refresh(this.I)
							);
						{
							const o = this.ab(s);
							if (o.length) return this.bb(o);
						}
						return Promise.resolve(void 0);
					}
					ab(s) {
						const f = new Set(),
							o = s.map((m) => this.m.get(m));
						for (const m of o)
							if (m && !f.has(m.item.handle)) {
								let E = m;
								for (
									;
									E &&
									E.parent &&
									o.findIndex(
										(R) =>
											E &&
											E.parent &&
											R &&
											R.item.handle === E.parent.item.handle,
									) === -1;
								) {
									const R = this.j.get(E.parent.item.handle);
									E = R ? this.m.get(R) : void 0;
								}
								E && !E.parent && f.add(m.item.handle);
							}
						const w = [];
						return (
							f.forEach((m) => {
								const E = this.j.get(m);
								if (E) {
									const R = this.m.get(E);
									R && (!R.parent || !f.has(R.parent.item.handle)) && w.push(m);
								}
							}),
							w
						);
					}
					bb(s) {
						const f = {};
						return Promise.all(
							s.map((o) =>
								this.cb(o).then((w) => {
									w && (f[o] = w.item);
								}),
							),
						).then(() =>
							Object.keys(f).length ? this.J.$refresh(this.I, f) : void 0,
						);
					}
					cb(s) {
						const f = this.getExtensionElement(s);
						if (f) {
							const o = this.m.get(f);
							if (o)
								return (
									this.rb(f),
									(0, l.$Eh)(() => this.f.getTreeItem(f)).then((w) => {
										if (w) {
											const m = this.ib(f, w, o.parent);
											return this.pb(f, m, o, o.parent), o.dispose(), m;
										}
										return null;
									})
								);
						}
						return Promise.resolve(null);
					}
					db(s, f, o) {
						const w = this.ib(s, f, o);
						if (f.id && this.j.has(w.item.handle))
							throw new Error((0, e.localize)(2722, null, f.id));
						return this.ob(s, w), this.qb(w, o), w;
					}
					eb(s) {
						return n.$Rbb.isMarkdownString(s) ? d.MarkdownString.from(s) : s;
					}
					fb(s, f) {
						return f
							? { ...this.L.toInternal(f, s), originalId: f.command }
							: void 0;
					}
					gb(s) {
						if (s.checkboxState === void 0) return;
						let f, o, w;
						return (
							typeof s.checkboxState == "number"
								? (f = s.checkboxState)
								: ((f = s.checkboxState.state),
									(o = s.checkboxState.tooltip),
									(w = s.checkboxState.accessibilityInformation)),
							{
								isChecked: f === n.TreeItemCheckboxState.Checked,
								tooltip: o,
								accessibilityInformation: w,
							}
						);
					}
					hb(s) {
						if (!n.$dcb.isTreeItem(s, this.N))
							throw new Error(
								`Extension ${this.N.identifier.value} has provided an invalid tree item.`,
							);
					}
					ib(s, f, o) {
						this.hb(f);
						const w = this.D(new P.$Zc()),
							m = this.kb(s, f, o),
							E = this.lb(f);
						return {
							item: {
								handle: m,
								parentHandle: o ? o.item.handle : void 0,
								label: $(f.label, this.N),
								description: f.description,
								resourceUri: f.resourceUri,
								tooltip: this.eb(f.tooltip),
								command: this.fb(w, f.command),
								contextValue: f.contextValue,
								icon: E,
								iconDark: this.mb(f) || E,
								themeIcon: this.jb(f),
								collapsibleState: (0, p.$ug)(f.collapsibleState)
									? n.TreeItemCollapsibleState.None
									: f.collapsibleState,
								accessibilityInformation: f.accessibilityInformation,
								checkbox: this.gb(f),
							},
							extensionItem: f,
							parent: o,
							children: void 0,
							disposableStore: w,
							dispose() {
								w.dispose();
							},
						};
					}
					jb(s) {
						return s.iconPath instanceof n.$mcb ? s.iconPath : void 0;
					}
					kb(s, { id: f, label: o, resourceUri: w }, m, E) {
						if (f) return `${a.b}/${f}`;
						const R = $(o, this.N),
							C = m ? m.item.handle : a.a;
						let O = R ? R.label : w ? (0, r.$kh)(w) : "";
						O = O.indexOf("/") !== -1 ? O.replace("/", "//") : O;
						const A = this.m.has(s) ? this.m.get(s).item.handle : void 0,
							J = this.X(m) || [];
						let L,
							b = 0;
						do {
							if (((L = `${C}/${b}:${O}`), E || !this.j.has(L) || A === L))
								break;
							b++;
						} while (b <= J.length);
						return L;
					}
					lb(s) {
						if (s.iconPath && !(s.iconPath instanceof n.$mcb))
							return typeof s.iconPath == "string" || S.URI.isUri(s.iconPath)
								? this.nb(s.iconPath)
								: this.nb(s.iconPath.light);
					}
					mb(s) {
						if (
							s.iconPath &&
							!(s.iconPath instanceof n.$mcb) &&
							s.iconPath.dark
						)
							return this.nb(s.iconPath.dark);
					}
					nb(s) {
						return S.URI.isUri(s) ? s : S.URI.file(s);
					}
					ob(s, f) {
						this.j.set(f.item.handle, s), this.m.set(s, f);
					}
					pb(s, f, o, w) {
						this.j.delete(f.item.handle),
							this.m.delete(s),
							f.item.handle !== o.item.handle && this.j.delete(o.item.handle),
							this.ob(s, f);
						const m = this.X(w) || [],
							E = m.filter((R) => R.item.handle === o.item.handle)[0];
						E && m.splice(m.indexOf(E), 1, f);
					}
					qb(s, f) {
						f
							? (f.children || (f.children = []), f.children.push(s))
							: (this.h || (this.h = []), this.h.push(s));
					}
					rb(s) {
						if (s) {
							const f = this.m.get(s);
							if (f) {
								if (f.children)
									for (const o of f.children) {
										const w = this.j.get(o.item.handle);
										w && this.sb(w);
									}
								f.children = void 0;
							}
						} else this.tb();
					}
					sb(s) {
						const f = this.m.get(s);
						if (f) {
							if (f.children)
								for (const o of f.children) {
									const w = this.j.get(o.item.handle);
									w && this.sb(w);
								}
							this.m.delete(s), this.j.delete(f.item.handle), f.dispose();
						}
					}
					tb() {
						(this.h = void 0),
							this.j.clear(),
							this.m.forEach((s) => s.dispose()),
							this.m.clear();
					}
					dispose() {
						super.dispose(),
							this.Z.dispose(),
							this.tb(),
							this.J.$disposeTree(this.I);
					}
				}
			},
		),
		