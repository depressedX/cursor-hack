import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/progress/common/progress.js';
import '../../../common/editor.js';
define(de[707], he([1, 0, 6, 3, 84, 44]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*progress*/,
 E /*editor*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LMb = e.$KMb = e.$JMb = void 0);
			class C extends i.$1c {
				constructor(a, h) {
					super(), (this.a = a), (this.b = h), this.c();
				}
				c() {
					this.b &&
						this.D(
							this.b.onDidModelChange((a) => {
								(a.kind === E.GroupModelChangeKind.EDITOR_ACTIVE ||
									(a.kind === E.GroupModelChangeKind.EDITOR_CLOSE &&
										this.b &&
										this.b.isEmpty)) &&
									this.a.stop().hide();
							}),
						);
				}
				show(a, h) {
					return this.b && this.b.isEmpty
						? w.$9N
						: a === !0
							? this.f(!0, h)
							: this.f(a, h);
				}
				f(a, h) {
					return (
						typeof a == "boolean"
							? this.a.infinite().show(h)
							: this.a.total(a).show(h),
						{
							total: (c) => {
								this.a.total(c);
							},
							worked: (c) => {
								this.a.hasTotal() ? this.a.worked(c) : this.a.infinite().show();
							},
							done: () => {
								this.a.stop().hide();
							},
						}
					);
				}
				async showWhile(a, h) {
					if (this.b && this.b.isEmpty)
						try {
							await a;
						} catch {}
					return this.g(a, h);
				}
				async g(a, h) {
					try {
						this.a.infinite().show(h), await a;
					} catch {
					} finally {
						this.a.stop().hide();
					}
				}
			}
			e.$JMb = C;
			var d;
			(function (u) {
				let a;
				(function (n) {
					(n[(n.None = 0)] = "None"),
						(n[(n.Done = 1)] = "Done"),
						(n[(n.Infinite = 2)] = "Infinite"),
						(n[(n.While = 3)] = "While"),
						(n[(n.Work = 4)] = "Work");
				})((a = u.Type || (u.Type = {}))),
					(u.None = { type: a.None }),
					(u.Done = { type: a.Done }),
					(u.Infinite = { type: a.Infinite });
				class h {
					constructor(g, p, o) {
						(this.whilePromise = g),
							(this.whileStart = p),
							(this.whileDelay = o),
							(this.type = a.While);
					}
				}
				u.While = h;
				class c {
					constructor(g, p) {
						(this.total = g), (this.worked = p), (this.type = a.Work);
					}
				}
				u.Work = c;
			})(d || (d = {}));
			class m extends i.$1c {
				constructor(a, h) {
					super(),
						(this.b = a),
						(this.c = h),
						(this.a = d.None),
						this.registerListeners();
				}
				registerListeners() {
					this.D(
						this.c.onDidChangeActive(() => {
							this.c.isActive ? this.f() : this.g();
						}),
					);
				}
				f() {
					if (this.a.type !== d.Done.type)
						if (this.a.type === d.Type.While) {
							let a;
							if (this.a.whileDelay > 0) {
								const h = this.a.whileDelay - (Date.now() - this.a.whileStart);
								h > 0 && (a = h);
							}
							this.h(a);
						} else
							this.a.type === d.Type.Infinite
								? this.b.infinite().show()
								: this.a.type === d.Type.Work &&
									(this.a.total && this.b.total(this.a.total).show(),
									this.a.worked && this.b.worked(this.a.worked).show());
				}
				g() {
					this.b.stop().hide();
				}
				show(a, h) {
					return (
						typeof a == "boolean"
							? (this.a = d.Infinite)
							: (this.a = new d.Work(a, void 0)),
						this.c.isActive &&
							(this.a.type === d.Type.Infinite
								? this.b.infinite().show(h)
								: this.a.type === d.Type.Work &&
									typeof this.a.total == "number" &&
									this.b.total(this.a.total).show(h)),
						{
							total: (c) => {
								(this.a = new d.Work(
									c,
									this.a.type === d.Type.Work ? this.a.worked : void 0,
								)),
									this.c.isActive && this.b.total(c);
							},
							worked: (c) => {
								!this.c.isActive || this.b.hasTotal()
									? ((this.a = new d.Work(
											this.a.type === d.Type.Work ? this.a.total : void 0,
											this.a.type === d.Type.Work &&
												typeof this.a.worked == "number"
												? this.a.worked + c
												: c,
										)),
										this.c.isActive && this.b.worked(c))
									: ((this.a = d.Infinite), this.b.infinite().show());
							},
							done: () => {
								(this.a = d.Done), this.c.isActive && this.b.stop().hide();
							},
						}
					);
				}
				async showWhile(a, h) {
					this.a.type === d.Type.While &&
						(a = Promise.all([a, this.a.whilePromise])),
						(this.a = new d.While(a, h || 0, Date.now()));
					try {
						this.h(h), await a;
					} catch {
					} finally {
						(this.a.type !== d.Type.While || this.a.whilePromise === a) &&
							((this.a = d.None), this.c.isActive && this.b.stop().hide());
					}
				}
				h(a) {
					this.c.isActive && this.b.infinite().show(a);
				}
			}
			e.$KMb = m;
			class r extends i.$1c {
				get isActive() {
					return this.f;
				}
				constructor(a, h) {
					super(),
						(this.b = a),
						(this.f = h),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeActive = this.a.event);
				}
				PUBLIC_BE_CAREFUL_onScopeOpened(a) {
					this.g(a);
				}
				PUBLIC_BE_CAREFUL_onScopeClosed(a) {
					this.h(a);
				}
				g(a) {
					a === this.b && (this.f || ((this.f = !0), this.a.fire()));
				}
				h(a) {
					a === this.b && this.f && ((this.f = !1), this.a.fire());
				}
			}
			e.$LMb = r;
		}),
		