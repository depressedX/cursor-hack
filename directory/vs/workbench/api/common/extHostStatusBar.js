import '../../../../require.js';
import '../../../../exports.js';
import './extHostTypes.js';
import './extHost.protocol.js';
import '../../../nls.js';
import '../../../base/common/lifecycle.js';
import './extHostTypeConverters.js';
import '../../../base/common/types.js';
define(
			Pe[583],
			Ne([1, 0, 11, 6, 10, 3, 17, 19]),
			function (we, t, e, r, S, N, P, I) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$5id = t.$4id = void 0);
				class l {
					static {
						this.a = 0;
					}
					static {
						this.b = new Map([
							[
								"statusBarItem.errorBackground",
								new e.$ncb("statusBarItem.errorForeground"),
							],
							[
								"statusBarItem.warningBackground",
								new e.$ncb("statusBarItem.warningForeground"),
							],
						]);
					}
					#e;
					#t;
					constructor(d, k, g, c, h, $ = e.StatusBarAlignment.Left, T) {
						if (
							((this.i = !1),
							(this.k = ""),
							(this.q = new N.$Zc()),
							(this.#e = d),
							(this.#t = k),
							h && c)
						) {
							this.c = (0, e.$2bb)(c.identifier, h);
							const a = g.get(this.c);
							a &&
								(($ = a.alignLeft
									? e.StatusBarAlignment.Left
									: e.StatusBarAlignment.Right),
								(T = a.priority),
								(this.j = !0),
								(this.name = a.name),
								(this.text = a.text),
								(this.tooltip = a.tooltip),
								(this.command = a.command),
								(this.accessibilityInformation = a.accessibilityInformation));
						} else this.c = String(l.a++);
						(this.e = c), (this.f = h), (this.g = $), (this.h = this.u(T));
					}
					u(d) {
						if ((0, I.$pg)(d))
							return d === Number.POSITIVE_INFINITY
								? Number.MAX_VALUE
								: d === Number.NEGATIVE_INFINITY
									? -Number.MAX_VALUE
									: d;
					}
					get id() {
						return this.f ?? this.e.identifier.value;
					}
					get alignment() {
						return this.g;
					}
					get priority() {
						return this.h;
					}
					get text() {
						return this.k;
					}
					get name() {
						return this.m;
					}
					get tooltip() {
						return this.l;
					}
					get color() {
						return this.n;
					}
					get backgroundColor() {
						return this.o;
					}
					get command() {
						return this.r?.fromApi;
					}
					get accessibilityInformation() {
						return this.t;
					}
					set text(d) {
						(this.k = d), this.v();
					}
					set name(d) {
						(this.m = d), this.v();
					}
					set tooltip(d) {
						(this.l = d), this.v();
					}
					set color(d) {
						(this.n = d), this.v();
					}
					set backgroundColor(d) {
						d && !l.b.has(d.id) && (d = void 0), (this.o = d), this.v();
					}
					set command(d) {
						this.r?.fromApi !== d &&
							(this.p && this.q.add(this.p),
							(this.p = new N.$Zc()),
							typeof d == "string"
								? (this.r = {
										fromApi: d,
										internal: this.#t.toInternal(
											{ title: "", command: d },
											this.p,
										),
									})
								: d
									? (this.r = {
											fromApi: d,
											internal: this.#t.toInternal(d, this.p),
										})
									: (this.r = void 0),
							this.v());
					}
					set accessibilityInformation(d) {
						(this.t = d), this.v();
					}
					show() {
						(this.j = !0), this.v();
					}
					hide() {
						clearTimeout(this.s), (this.j = !1), this.#e.$disposeEntry(this.c);
					}
					v() {
						this.i ||
							!this.j ||
							(clearTimeout(this.s),
							(this.s = setTimeout(() => {
								this.s = void 0;
								let d;
								this.e
									? this.f
										? (d = `${this.e.identifier.value}.${this.f}`)
										: (d = this.e.identifier.value)
									: (d = this.f);
								let k;
								this.m
									? (k = this.m)
									: (k = (0, S.localize)(
											2718,
											null,
											this.e.displayName || this.e.name,
										));
								let g = this.n;
								this.o && (g = l.b.get(this.o.id));
								const c = P.MarkdownString.fromStrict(this.l);
								this.#e.$setEntry(
									this.c,
									d,
									this.e?.identifier.value,
									k,
									this.k,
									c,
									this.r?.internal,
									g,
									this.o,
									this.g === e.StatusBarAlignment.Left,
									this.h,
									this.t,
								),
									this.q.clear();
							}, 0)));
					}
					dispose() {
						this.hide(), (this.i = !0);
					}
				}
				t.$4id = l;
				class n {
					constructor(d) {
						(this.b = []),
							(this.a = d.createStatusBarEntry(
								void 0,
								"status.extensionMessage",
								e.StatusBarAlignment.Left,
								Number.MIN_VALUE,
							)),
							(this.a.name = (0, S.localize)(2719, null));
					}
					dispose() {
						(this.b.length = 0), this.a.dispose();
					}
					setMessage(d) {
						const k = { message: d };
						return (
							this.b.unshift(k),
							this.c(),
							new e.$nbb(() => {
								const g = this.b.indexOf(k);
								g >= 0 && (this.b.splice(g, 1), this.c());
							})
						);
					}
					c() {
						this.b.length > 0
							? ((this.a.text = this.b[0].message), this.a.show())
							: this.a.hide();
					}
				}
				class p {
					constructor(d, k) {
						(this.e = new Map()),
							(this.a = d.getProxy(r.$lbb.MainThreadStatusBar)),
							(this.b = k),
							(this.c = new n(this));
					}
					$acceptStaticEntries(d) {
						for (const k of d) this.e.set(k.entryId, k);
					}
					createStatusBarEntry(d, k, g, c) {
						return new l(this.a, this.b, this.e, d, k, g, c);
					}
					setStatusBarMessage(d, k) {
						const g = this.c.setMessage(d);
						let c;
						return (
							typeof k == "number"
								? (c = setTimeout(() => g.dispose(), k))
								: typeof k < "u" &&
									k.then(
										() => g.dispose(),
										() => g.dispose(),
									),
							new e.$nbb(() => {
								g.dispose(), clearTimeout(c);
							})
						);
					}
				}
				t.$5id = p;
			},
		),
		