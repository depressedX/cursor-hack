import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../sash/sash.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
define(de[930], he([1, 0, 7, 277, 6, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*sash*/,
 w /*event*/,
 E /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dpb = void 0);
			class C {
				constructor() {
					(this.a = new w.$re()),
						(this.onDidWillResize = this.a.event),
						(this.b = new w.$re()),
						(this.onDidResize = this.b.event),
						(this.h = new E.$Zc()),
						(this.i = new t.$pgb(0, 0)),
						(this.j = new t.$pgb(0, 0)),
						(this.k = new t.$pgb(
							Number.MAX_SAFE_INTEGER,
							Number.MAX_SAFE_INTEGER,
						)),
						(this.domNode = document.createElement("div")),
						(this.d = new i.Sash(
							this.domNode,
							{ getVerticalSashLeft: () => this.i.width },
							{ orientation: i.Orientation.VERTICAL },
						)),
						(this.g = new i.Sash(
							this.domNode,
							{ getVerticalSashLeft: () => 0 },
							{ orientation: i.Orientation.VERTICAL },
						)),
						(this.c = new i.Sash(
							this.domNode,
							{ getHorizontalSashTop: () => 0 },
							{
								orientation: i.Orientation.HORIZONTAL,
								orthogonalEdge: i.OrthogonalEdge.North,
							},
						)),
						(this.f = new i.Sash(
							this.domNode,
							{ getHorizontalSashTop: () => this.i.height },
							{
								orientation: i.Orientation.HORIZONTAL,
								orthogonalEdge: i.OrthogonalEdge.South,
							},
						)),
						(this.c.orthogonalStartSash = this.g),
						(this.c.orthogonalEndSash = this.d),
						(this.f.orthogonalStartSash = this.g),
						(this.f.orthogonalEndSash = this.d);
					let m,
						r = 0,
						u = 0;
					this.h.add(
						w.Event.any(
							this.c.onDidStart,
							this.d.onDidStart,
							this.f.onDidStart,
							this.g.onDidStart,
						)(() => {
							m === void 0 && (this.a.fire(), (m = this.i), (r = 0), (u = 0));
						}),
					),
						this.h.add(
							w.Event.any(
								this.c.onDidEnd,
								this.d.onDidEnd,
								this.f.onDidEnd,
								this.g.onDidEnd,
							)(() => {
								m !== void 0 &&
									((m = void 0),
									(r = 0),
									(u = 0),
									this.b.fire({ dimension: this.i, done: !0 }));
							}),
						),
						this.h.add(
							this.d.onDidChange((a) => {
								m &&
									((u = a.currentX - a.startX),
									this.layout(m.height + r, m.width + u),
									this.b.fire({ dimension: this.i, done: !1, east: !0 }));
							}),
						),
						this.h.add(
							this.g.onDidChange((a) => {
								m &&
									((u = -(a.currentX - a.startX)),
									this.layout(m.height + r, m.width + u),
									this.b.fire({ dimension: this.i, done: !1, west: !0 }));
							}),
						),
						this.h.add(
							this.c.onDidChange((a) => {
								m &&
									((r = -(a.currentY - a.startY)),
									this.layout(m.height + r, m.width + u),
									this.b.fire({ dimension: this.i, done: !1, north: !0 }));
							}),
						),
						this.h.add(
							this.f.onDidChange((a) => {
								m &&
									((r = a.currentY - a.startY),
									this.layout(m.height + r, m.width + u),
									this.b.fire({ dimension: this.i, done: !1, south: !0 }));
							}),
						),
						this.h.add(
							w.Event.any(
								this.d.onDidReset,
								this.g.onDidReset,
							)((a) => {
								this.l &&
									(this.layout(this.i.height, this.l.width),
									this.b.fire({ dimension: this.i, done: !0 }));
							}),
						),
						this.h.add(
							w.Event.any(
								this.c.onDidReset,
								this.f.onDidReset,
							)((a) => {
								this.l &&
									(this.layout(this.l.height, this.i.width),
									this.b.fire({ dimension: this.i, done: !0 }));
							}),
						);
				}
				dispose() {
					this.c.dispose(),
						this.f.dispose(),
						this.d.dispose(),
						this.g.dispose(),
						this.h.dispose(),
						this.b.dispose(),
						this.a.dispose(),
						this.domNode.remove();
				}
				enableSashes(m, r, u, a) {
					(this.c.state = m ? i.SashState.Enabled : i.SashState.Disabled),
						(this.d.state = r ? i.SashState.Enabled : i.SashState.Disabled),
						(this.f.state = u ? i.SashState.Enabled : i.SashState.Disabled),
						(this.g.state = a ? i.SashState.Enabled : i.SashState.Disabled);
				}
				layout(m = this.size.height, r = this.size.width) {
					const { height: u, width: a } = this.j,
						{ height: h, width: c } = this.k;
					(m = Math.max(u, Math.min(h, m))), (r = Math.max(a, Math.min(c, r)));
					const n = new t.$pgb(r, m);
					t.$pgb.equals(n, this.i) ||
						((this.domNode.style.height = m + "px"),
						(this.domNode.style.width = r + "px"),
						(this.i = n),
						this.c.layout(),
						this.d.layout(),
						this.f.layout(),
						this.g.layout());
				}
				clearSashHoverState() {
					this.d.clearSashHoverState(),
						this.g.clearSashHoverState(),
						this.c.clearSashHoverState(),
						this.f.clearSashHoverState();
				}
				get size() {
					return this.i;
				}
				set maxSize(m) {
					this.k = m;
				}
				get maxSize() {
					return this.k;
				}
				set minSize(m) {
					this.j = m;
				}
				get minSize() {
					return this.j;
				}
				set preferredSize(m) {
					this.l = m;
				}
				get preferredSize() {
					return this.l;
				}
			}
			e.$dpb = C;
		})
