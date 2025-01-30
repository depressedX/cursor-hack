import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/pixelRatio.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/globalPointerMoveMonitor.js';
import '../../../../base/browser/ui/widget.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/color.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../css!vs/editor/contrib/colorPicker/browser/colorPicker.js';
define(
			de[2836],
			he([1, 0, 345, 7, 757, 235, 14, 97, 6, 3, 26, 4, 51, 79, 1136]),
			function (ce /*require*/,
 e /*exports*/,
 t /*pixelRatio*/,
 i /*dom*/,
 w /*globalPointerMoveMonitor*/,
 E /*widget*/,
 C /*codicons*/,
 d /*color*/,
 m /*event*/,
 r /*lifecycle*/,
 u /*themables*/,
 a /*nls*/,
 h /*colorRegistry*/,
 c /*iconRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Bb = e.$8Bb = e.$7Bb = e.$6Bb = void 0),
					(i = mt(i));
				const n = i.$;
				class g extends r.$1c {
					constructor(S, I, T, P = !1) {
						super(),
							(this.t = I),
							(this.u = P),
							(this.n = null),
							(this.c = n(".colorpicker-header")),
							i.$fhb(S, this.c),
							(this.f = i.$fhb(this.c, n(".picked-color"))),
							i.$fhb(this.f, n("span.codicon.codicon-color-mode")),
							(this.j = i.$fhb(this.f, document.createElement("span"))),
							this.j.classList.add("picked-color-presentation");
						const k = (0, a.localize)(952, null);
						this.f.setAttribute("title", k),
							(this.m = i.$fhb(this.c, n(".original-color"))),
							(this.m.style.backgroundColor =
								d.$UL.Format.CSS.format(this.t.originalColor) || ""),
							(this.q = T.getColorTheme().getColor(h.$FQ) || d.$UL.white),
							this.D(
								T.onDidColorThemeChange((L) => {
									this.q = L.getColor(h.$FQ) || d.$UL.white;
								}),
							),
							this.D(
								i.$0fb(this.f, i.$$gb.CLICK, () =>
									this.t.selectNextColorPresentation(),
								),
							),
							this.D(
								i.$0fb(this.m, i.$$gb.CLICK, () => {
									(this.t.color = this.t.originalColor), this.t.flushColor();
								}),
							),
							this.D(I.onDidChangeColor(this.w, this)),
							this.D(I.onDidChangePresentation(this.y, this)),
							(this.f.style.backgroundColor =
								d.$UL.Format.CSS.format(I.color) || ""),
							this.f.classList.toggle(
								"light",
								I.color.rgba.a < 0.5 ? this.q.isLighter() : I.color.isLighter(),
							),
							this.w(this.t.color),
							this.u &&
								(this.c.classList.add("standalone-colorpicker"),
								(this.n = this.D(new p(this.c))));
					}
					get domNode() {
						return this.c;
					}
					get closeButton() {
						return this.n;
					}
					get pickedColorNode() {
						return this.f;
					}
					get originalColorNode() {
						return this.m;
					}
					w(S) {
						(this.f.style.backgroundColor = d.$UL.Format.CSS.format(S) || ""),
							this.f.classList.toggle(
								"light",
								S.rgba.a < 0.5 ? this.q.isLighter() : S.isLighter(),
							),
							this.y();
					}
					y() {
						this.j.textContent = this.t.presentation
							? this.t.presentation.label
							: "";
					}
				}
				e.$6Bb = g;
				class p extends r.$1c {
					constructor(S) {
						super(),
							(this.f = this.D(new m.$re())),
							(this.onClicked = this.f.event),
							(this.c = document.createElement("div")),
							this.c.classList.add("close-button"),
							i.$fhb(S, this.c);
						const I = document.createElement("div");
						I.classList.add("close-button-inner-div"),
							i.$fhb(this.c, I),
							i
								.$fhb(
									I,
									n(
										".button" +
											u.ThemeIcon.asCSSSelector(
												(0, c.$$O)(
													"color-picker-close",
													C.$ak.close,
													(0, a.localize)(953, null),
												),
											),
									),
								)
								.classList.add("close-icon"),
							this.D(
								i.$0fb(this.c, i.$$gb.CLICK, () => {
									this.f.fire();
								}),
							);
					}
				}
				class o extends r.$1c {
					constructor(S, I, T, P = !1) {
						super(),
							(this.q = I),
							(this.t = T),
							(this.n = null),
							(this.c = n(".colorpicker-body")),
							i.$fhb(S, this.c),
							(this.f = new f(this.c, this.q, this.t)),
							this.D(this.f),
							this.D(this.f.onDidChange(this.w, this)),
							this.D(this.f.onColorFlushed(this.u, this)),
							(this.m = new s(this.c, this.q, P)),
							this.D(this.m),
							this.D(this.m.onDidChange(this.y, this)),
							this.D(this.m.onColorFlushed(this.u, this)),
							(this.j = new l(this.c, this.q, P)),
							this.D(this.j),
							this.D(this.j.onDidChange(this.z, this)),
							this.D(this.j.onColorFlushed(this.u, this)),
							P &&
								((this.n = this.D(new y(this.c))),
								this.c.classList.add("standalone-colorpicker"));
					}
					u() {
						this.q.flushColor();
					}
					w({ s: S, v: I }) {
						const T = this.q.color.hsva;
						this.q.color = new d.$UL(new d.$TL(T.h, S, I, T.a));
					}
					y(S) {
						const I = this.q.color.hsva;
						this.q.color = new d.$UL(new d.$TL(I.h, I.s, I.v, S));
					}
					z(S) {
						const I = this.q.color.hsva,
							T = (1 - S) * 360;
						this.q.color = new d.$UL(
							new d.$TL(T === 360 ? 0 : T, I.s, I.v, I.a),
						);
					}
					get domNode() {
						return this.c;
					}
					get saturationBox() {
						return this.f;
					}
					get opacityStrip() {
						return this.m;
					}
					get hueStrip() {
						return this.j;
					}
					get enterButton() {
						return this.n;
					}
					layout() {
						this.f.layout(), this.m.layout(), this.j.layout();
					}
				}
				e.$7Bb = o;
				class f extends r.$1c {
					constructor(S, I, T) {
						super(),
							(this.w = I),
							(this.y = T),
							(this.t = new m.$re()),
							(this.onDidChange = this.t.event),
							(this.u = new m.$re()),
							(this.onColorFlushed = this.u.event),
							(this.c = n(".saturation-wrap")),
							i.$fhb(S, this.c),
							(this.j = document.createElement("canvas")),
							(this.j.className = "saturation-box"),
							i.$fhb(this.c, this.j),
							(this.f = n(".saturation-selection")),
							i.$fhb(this.c, this.f),
							this.layout(),
							this.D(i.$0fb(this.c, i.$$gb.POINTER_DOWN, (P) => this.z(P))),
							this.D(this.w.onDidChangeColor(this.H, this)),
							(this.q = null);
					}
					get domNode() {
						return this.c;
					}
					get canvas() {
						return this.j;
					}
					z(S) {
						if (!S.target || !(S.target instanceof Element)) return;
						this.q = this.D(new w.$Thb());
						const I = i.$tgb(this.c);
						S.target !== this.f && this.C(S.offsetX, S.offsetY),
							this.q.startMonitoring(
								S.target,
								S.pointerId,
								S.buttons,
								(P) => this.C(P.pageX - I.left, P.pageY - I.top),
								() => null,
							);
						const T = i.$0fb(
							S.target.ownerDocument,
							i.$$gb.POINTER_UP,
							() => {
								this.u.fire(),
									T.dispose(),
									this.q && (this.q.stopMonitoring(!0), (this.q = null));
							},
							!0,
						);
					}
					C(S, I) {
						const T = Math.max(0, Math.min(1, S / this.m)),
							P = Math.max(0, Math.min(1, 1 - I / this.n));
						this.G(T, P), this.t.fire({ s: T, v: P });
					}
					layout() {
						(this.m = this.c.offsetWidth),
							(this.n = this.c.offsetHeight),
							(this.j.width = this.m * this.y),
							(this.j.height = this.n * this.y),
							this.F();
						const S = this.w.color.hsva;
						this.G(S.s, S.v);
					}
					F() {
						const S = this.w.color.hsva,
							I = new d.$UL(new d.$TL(S.h, 1, 1, 1)),
							T = this.j.getContext("2d"),
							P = T.createLinearGradient(0, 0, this.j.width, 0);
						P.addColorStop(0, "rgba(255, 255, 255, 1)"),
							P.addColorStop(0.5, "rgba(255, 255, 255, 0.5)"),
							P.addColorStop(1, "rgba(255, 255, 255, 0)");
						const k = T.createLinearGradient(0, 0, 0, this.j.height);
						k.addColorStop(0, "rgba(0, 0, 0, 0)"),
							k.addColorStop(1, "rgba(0, 0, 0, 1)"),
							T.rect(0, 0, this.j.width, this.j.height),
							(T.fillStyle = d.$UL.Format.CSS.format(I)),
							T.fill(),
							(T.fillStyle = P),
							T.fill(),
							(T.fillStyle = k),
							T.fill();
					}
					G(S, I) {
						(this.f.style.left = `${S * this.m}px`),
							(this.f.style.top = `${this.n - I * this.n}px`);
					}
					H(S) {
						if (this.q && this.q.isMonitoring()) return;
						this.F();
						const I = S.hsva;
						this.G(I.s, I.v);
					}
				}
				class b extends r.$1c {
					constructor(S, I, T = !1) {
						super(),
							(this.t = I),
							(this.n = new m.$re()),
							(this.onDidChange = this.n.event),
							(this.q = new m.$re()),
							(this.onColorFlushed = this.q.event),
							T
								? ((this.c = i.$fhb(S, n(".standalone-strip"))),
									(this.f = i.$fhb(this.c, n(".standalone-overlay"))))
								: ((this.c = i.$fhb(S, n(".strip"))),
									(this.f = i.$fhb(this.c, n(".overlay")))),
							(this.j = i.$fhb(this.c, n(".slider"))),
							(this.j.style.top = "0px"),
							this.D(i.$0fb(this.c, i.$$gb.POINTER_DOWN, (P) => this.w(P))),
							this.D(I.onDidChangeColor(this.u, this)),
							this.layout();
					}
					layout() {
						this.m = this.c.offsetHeight - this.j.offsetHeight;
						const S = this.C(this.t.color);
						this.z(S);
					}
					u(S) {
						const I = this.C(S);
						this.z(I);
					}
					w(S) {
						if (!S.target || !(S.target instanceof Element)) return;
						const I = this.D(new w.$Thb()),
							T = i.$tgb(this.c);
						this.c.classList.add("grabbing"),
							S.target !== this.j && this.y(S.offsetY),
							I.startMonitoring(
								S.target,
								S.pointerId,
								S.buttons,
								(k) => this.y(k.pageY - T.top),
								() => null,
							);
						const P = i.$0fb(
							S.target.ownerDocument,
							i.$$gb.POINTER_UP,
							() => {
								this.q.fire(),
									P.dispose(),
									I.stopMonitoring(!0),
									this.c.classList.remove("grabbing");
							},
							!0,
						);
					}
					y(S) {
						const I = Math.max(0, Math.min(1, 1 - S / this.m));
						this.z(I), this.n.fire(I);
					}
					z(S) {
						this.j.style.top = `${(1 - S) * this.m}px`;
					}
				}
				class s extends b {
					constructor(S, I, T = !1) {
						super(S, I, T),
							this.c.classList.add("opacity-strip"),
							this.u(this.t.color);
					}
					u(S) {
						super.u(S);
						const { r: I, g: T, b: P } = S.rgba,
							k = new d.$UL(new d.$RL(I, T, P, 1)),
							L = new d.$UL(new d.$RL(I, T, P, 0));
						this.f.style.background = `linear-gradient(to bottom, ${k} 0%, ${L} 100%)`;
					}
					C(S) {
						return S.hsva.a;
					}
				}
				class l extends b {
					constructor(S, I, T = !1) {
						super(S, I, T), this.c.classList.add("hue-strip");
					}
					C(S) {
						return 1 - S.hsva.h / 360;
					}
				}
				class y extends r.$1c {
					constructor(S) {
						super(),
							(this.f = this.D(new m.$re())),
							(this.onClicked = this.f.event),
							(this.c = i.$fhb(S, document.createElement("button"))),
							this.c.classList.add("insert-button"),
							(this.c.textContent = "Insert"),
							this.D(
								i.$0fb(this.c, i.$$gb.CLICK, () => {
									this.f.fire();
								}),
							);
					}
					get button() {
						return this.c;
					}
				}
				e.$8Bb = y;
				class $ extends E.$Uhb {
					static {
						this.c = "editor.contrib.colorPickerWidget";
					}
					constructor(S, I, T, P, k = !1) {
						super(),
							(this.model = I),
							(this.t = T),
							this.D(
								t.$sjb
									.getInstance(i.getWindow(S))
									.onDidChange(() => this.layout()),
							),
							(this.n = n(".colorpicker-widget")),
							S.appendChild(this.n),
							(this.header = this.D(new g(this.n, this.model, P, k))),
							(this.body = this.D(new o(this.n, this.model, this.t, k)));
					}
					getId() {
						return $.c;
					}
					layout() {
						this.body.layout();
					}
					get domNode() {
						return this.n;
					}
				}
				e.$9Bb = $;
			},
		),
		