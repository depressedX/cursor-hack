import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/layout/browser/layoutService.js';
import './webview.js';
define(
			de[3406],
			he([1, 0, 7, 194, 6, 3, 47, 8, 96, 355]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*fastDomNode*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*uuid*/,
 d /*contextkey*/,
 m /*layoutService*/,
 r /*webview*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g6c = void 0);
				let u = class extends E.$1c {
					get y() {
						return (0, t.getWindowById)(this.w, !0).window;
					}
					constructor(c, n, g, p) {
						super(),
							(this.I = n),
							(this.J = g),
							(this.L = p),
							(this.a = !0),
							(this.b = new Set()),
							(this.c = this.D(new E.$2c())),
							(this.g = this.D(new E.$Zc())),
							(this.h = ""),
							(this.m = 0),
							(this.n = void 0),
							(this.u = void 0),
							(this.w = void 0),
							(this.z = this.D(new E.$2c())),
							(this.G = !1),
							(this.M = !1),
							(this.N = this.D(new w.$re())),
							(this.onDidDispose = this.N.event),
							(this.Q = this.D(new w.$re())),
							(this.onDidFocus = this.Q.event),
							(this.R = this.D(new w.$re())),
							(this.onDidBlur = this.R.event),
							(this.S = this.D(new w.$re())),
							(this.onDidClickLink = this.S.event),
							(this.U = this.D(new w.$re())),
							(this.onDidReload = this.U.event),
							(this.W = this.D(new w.$re())),
							(this.onDidScroll = this.W.event),
							(this.X = this.D(new w.$re())),
							(this.onDidUpdateState = this.X.event),
							(this.Y = this.D(new w.$re())),
							(this.onMessage = this.Y.event),
							(this.Z = this.D(new w.$re())),
							(this.onMissingCsp = this.Z.event),
							(this.$ = this.D(new w.$re())),
							(this.onDidWheel = this.$.event),
							(this.ab = this.D(new w.$re())),
							(this.onFatalError = this.ab.event),
							(this.providedViewType = c.providedViewType),
							(this.origin = c.origin ?? (0, C.$9g)()),
							(this.j = c.title),
							(this.q = c.extension),
							(this.t = c.options),
							(this.s = c.contentOptions);
					}
					get isFocused() {
						return !!this.c.value?.isFocused;
					}
					dispose() {
						(this.M = !0), this.H?.domNode.remove(), (this.H = void 0);
						for (const c of this.b) c.resolve(!1);
						this.b.clear(), this.N.fire(), super.dispose();
					}
					get container() {
						if (this.M) throw new Error("OverlayWebview has been disposed");
						if (!this.H) {
							const c = document.createElement("div");
							(c.style.position = "absolute"),
								(c.style.overflow = "hidden"),
								(this.H = new i.$Rhb(c)),
								this.H.setVisibility("hidden"),
								this.I.getContainer(this.y).appendChild(c);
						}
						return this.H.domNode;
					}
					claim(c, n, g) {
						if (this.M) return;
						const p = this.u;
						if (
							(this.w !== n.vscodeWindowId &&
								(this.release(p),
								this.c.clear(),
								this.g.clear(),
								this.H?.domNode.remove(),
								(this.H = void 0)),
							(this.u = c),
							(this.w = n.vscodeWindowId),
							this.P(n),
							p !== c)
						) {
							const o = g || this.L;
							this.z.clear(), (this.z.value = o.createScoped(this.container));
							const f = this.C?.get();
							this.C?.reset(),
								(this.C = r.$ZIb.bindTo(o)),
								this.C.set(!!f),
								this.F?.reset(),
								(this.F = r.$2Ib.bindTo(o)),
								this.F.set(!!this.options.enableFindWidget),
								this.c.value?.setContextKeyService(this.z.value);
						}
					}
					release(c) {
						this.u === c &&
							(this.z.clear(),
							(this.u = void 0),
							this.H && this.H.setVisibility("hidden"),
							this.t.retainContextWhenHidden
								? ((this.G = !!this.C?.get()), this.hideFind(!1))
								: (this.c.clear(), this.g.clear()));
					}
					layoutWebviewOverElement(c, n, g) {
						if (!this.H || !this.H.domNode.parentElement) return;
						const p = this.I.whenContainerStylesLoaded(this.y);
						p ? p.then(() => this.O(c, n, g)) : this.O(c, n, g);
					}
					O(c, n, g) {
						if (!this.H || !this.H.domNode.parentElement) return;
						const p = c.getBoundingClientRect(),
							o = this.H.domNode.parentElement.getBoundingClientRect(),
							f = (o.height - this.H.domNode.parentElement.clientHeight) / 2,
							b = (o.width - this.H.domNode.parentElement.clientWidth) / 2;
						if (
							(this.H.setTop(p.top - o.top - f),
							this.H.setLeft(p.left - o.left - b),
							this.H.setWidth(n ? n.width : p.width),
							this.H.setHeight(n ? n.height : p.height),
							g)
						) {
							const { top: s, left: l, right: y, bottom: $ } = a(p, g);
							this.H.domNode.style.clipPath = `polygon(${l}px ${s}px, ${y}px ${s}px, ${y}px ${$}px, ${l}px ${$}px)`;
						}
					}
					P(c) {
						if (this.M) throw new Error("OverlayWebview is disposed");
						if (!this.c.value) {
							const n = this.J.createWebviewElement({
								providedViewType: this.providedViewType,
								origin: this.origin,
								title: this.j,
								options: this.t,
								contentOptions: this.s,
								extension: this.extension,
							});
							(this.c.value = n),
								(n.state = this.n),
								this.z.value && this.c.value.setContextKeyService(this.z.value),
								this.h && n.setHtml(this.h),
								this.t.tryRestoreScrollPosition &&
									(n.initialScrollProgress = this.m),
								this.F?.set(!!this.options.enableFindWidget),
								n.mountTo(this.container, c),
								this.g.clear(),
								this.g.add(
									n.onDidFocus(() => {
										this.Q.fire();
									}),
								),
								this.g.add(
									n.onDidBlur(() => {
										this.R.fire();
									}),
								),
								this.g.add(
									n.onDidClickLink((g) => {
										this.S.fire(g);
									}),
								),
								this.g.add(
									n.onMessage((g) => {
										this.Y.fire(g);
									}),
								),
								this.g.add(
									n.onMissingCsp((g) => {
										this.Z.fire(g);
									}),
								),
								this.g.add(
									n.onDidWheel((g) => {
										this.$.fire(g);
									}),
								),
								this.g.add(
									n.onDidReload(() => {
										this.U.fire();
									}),
								),
								this.g.add(
									n.onFatalError((g) => {
										this.ab.fire(g);
									}),
								),
								this.g.add(
									n.onDidScroll((g) => {
										(this.m = g.scrollYPercentage), this.W.fire(g);
									}),
								),
								this.g.add(
									n.onDidUpdateState((g) => {
										(this.n = g), this.X.fire(g);
									}),
								),
								this.a &&
									this.b.forEach(async (g) => {
										g.resolve(await n.postMessage(g.message, g.transfer));
									}),
								(this.a = !1),
								this.b.clear();
						}
						this.options.retainContextWhenHidden &&
							this.G &&
							(this.showFind(!1), (this.G = !1)),
							this.H?.setVisibility("visible");
					}
					setHtml(c) {
						(this.h = c), this.bb((n) => n.setHtml(c));
					}
					setTitle(c) {
						(this.j = c), this.bb((n) => n.setTitle(c));
					}
					get initialScrollProgress() {
						return this.m;
					}
					set initialScrollProgress(c) {
						(this.m = c), this.bb((n) => (n.initialScrollProgress = c));
					}
					get state() {
						return this.n;
					}
					set state(c) {
						(this.n = c), this.bb((n) => (n.state = c));
					}
					get extension() {
						return this.q;
					}
					set extension(c) {
						(this.q = c), this.bb((n) => (n.extension = c));
					}
					get options() {
						return this.t;
					}
					set options(c) {
						this.t = { customClasses: this.t.customClasses, ...c };
					}
					get contentOptions() {
						return this.s;
					}
					set contentOptions(c) {
						(this.s = c), this.bb((n) => (n.contentOptions = c));
					}
					set localResourcesRoot(c) {
						this.bb((n) => (n.localResourcesRoot = c));
					}
					async postMessage(c, n) {
						if (this.c.value) return this.c.value.postMessage(c, n);
						if (this.a) {
							let g;
							const p = new Promise((o) => (g = o));
							return this.b.add({ message: c, transfer: n, resolve: g }), p;
						}
						return !1;
					}
					focus() {
						this.c.value?.focus();
					}
					reload() {
						this.c.value?.reload();
					}
					selectAll() {
						this.c.value?.selectAll();
					}
					copy() {
						this.c.value?.copy();
					}
					paste() {
						this.c.value?.paste();
					}
					cut() {
						this.c.value?.cut();
					}
					undo() {
						this.c.value?.undo();
					}
					redo() {
						this.c.value?.redo();
					}
					showFind(c = !0) {
						this.c.value && (this.c.value.showFind(c), this.C?.set(!0));
					}
					hideFind(c = !0) {
						this.C?.reset(), this.c.value?.hideFind(c);
					}
					runFindAction(c) {
						this.c.value?.runFindAction(c);
					}
					bb(c) {
						this.c.value && c(this.c.value);
					}
					windowDidDragStart() {
						this.c.value?.windowDidDragStart();
					}
					windowDidDragEnd() {
						this.c.value?.windowDidDragEnd();
					}
					setContextKeyService(c) {
						this.c.value?.setContextKeyService(c);
					}
				};
				(e.$g6c = u),
					(e.$g6c = u = Ne([j(1, m.$mEb), j(2, r.$3Ib), j(3, d.$6j)], u));
				function a(h, c) {
					const n = c.getBoundingClientRect(),
						g = Math.max(n.top - h.top, 0),
						p = Math.max(h.width - (h.right - n.right), 0),
						o = Math.max(h.height - (h.bottom - n.bottom), 0),
						f = Math.max(n.left - h.left, 0);
					return { top: g, right: p, bottom: o, left: f };
				}
			},
		),
		