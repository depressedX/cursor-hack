import '../../../../../require.js';
import '../../../../../exports.js';
import '../../globalPointerMoveMonitor.js';
import '../widget.js';
import '../../../common/async.js';
import '../../../common/themables.js';
import '../../dom.js';
define(
			de[1166],
			he([1, 0, 757, 235, 15, 26, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*globalPointerMoveMonitor*/,
 i /*widget*/,
 w /*async*/,
 E /*themables*/,
 C /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Whb = e.$Vhb = void 0),
					(C = mt(C)),
					(e.$Vhb = 11);
				class d extends i.$Uhb {
					constructor(r) {
						super(),
							(this.a = r.onActivate),
							(this.bgDomNode = document.createElement("div")),
							(this.bgDomNode.className = "arrow-background"),
							(this.bgDomNode.style.position = "absolute"),
							(this.bgDomNode.style.width = r.bgWidth + "px"),
							(this.bgDomNode.style.height = r.bgHeight + "px"),
							typeof r.top < "u" && (this.bgDomNode.style.top = "0px"),
							typeof r.left < "u" && (this.bgDomNode.style.left = "0px"),
							typeof r.bottom < "u" && (this.bgDomNode.style.bottom = "0px"),
							typeof r.right < "u" && (this.bgDomNode.style.right = "0px"),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = r.className),
							this.domNode.classList.add(
								...E.ThemeIcon.asClassNameArray(r.icon),
							),
							(this.domNode.style.position = "absolute"),
							(this.domNode.style.width = e.$Vhb + "px"),
							(this.domNode.style.height = e.$Vhb + "px"),
							typeof r.top < "u" && (this.domNode.style.top = r.top + "px"),
							typeof r.left < "u" && (this.domNode.style.left = r.left + "px"),
							typeof r.bottom < "u" &&
								(this.domNode.style.bottom = r.bottom + "px"),
							typeof r.right < "u" &&
								(this.domNode.style.right = r.right + "px"),
							(this.g = this.D(new t.$Thb())),
							this.D(
								C.$$fb(this.bgDomNode, C.$$gb.POINTER_DOWN, (u) => this.h(u)),
							),
							this.D(
								C.$$fb(this.domNode, C.$$gb.POINTER_DOWN, (u) => this.h(u)),
							),
							(this.b = this.D(new C.$jgb())),
							(this.c = this.D(new w.$Wh()));
					}
					h(r) {
						if (!r.target || !(r.target instanceof Element)) return;
						const u = () => {
							this.b.cancelAndSet(() => this.a(), 1e3 / 24, C.getWindow(r));
						};
						this.a(),
							this.b.cancel(),
							this.c.cancelAndSet(u, 200),
							this.g.startMonitoring(
								r.target,
								r.pointerId,
								r.buttons,
								(a) => {},
								() => {
									this.b.cancel(), this.c.cancel();
								},
							),
							r.preventDefault();
					}
				}
				e.$Whb = d;
			},
		),
		