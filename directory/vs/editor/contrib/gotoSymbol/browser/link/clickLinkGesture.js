define(
			de[766],
			he([1, 0, 6, 27, 3, 12, 38]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Mb = e.$5Mb = e.$4Mb = e.$3Mb = void 0),
					(E = mt(E));
				function d(c, n) {
					return !!c[n];
				}
				class m {
					constructor(n, g) {
						(this.target = n.target),
							(this.isLeftClick = n.event.leftButton),
							(this.isMiddleClick = n.event.middleButton),
							(this.isRightClick = n.event.rightButton),
							(this.hasTriggerModifier = d(n.event, g.triggerModifier)),
							(this.hasSideBySideModifier = d(
								n.event,
								g.triggerSideBySideModifier,
							)),
							(this.isNoneOrSingleMouseDown = n.event.detail <= 1);
					}
				}
				e.$3Mb = m;
				class r {
					constructor(n, g) {
						(this.keyCodeIsTriggerKey = n.keyCode === g.triggerKey),
							(this.keyCodeIsSideBySideKey =
								n.keyCode === g.triggerSideBySideKey),
							(this.hasTriggerModifier = d(n, g.triggerModifier));
					}
				}
				e.$4Mb = r;
				class u {
					constructor(n, g, p, o) {
						(this.triggerKey = n),
							(this.triggerModifier = g),
							(this.triggerSideBySideKey = p),
							(this.triggerSideBySideModifier = o);
					}
					equals(n) {
						return (
							this.triggerKey === n.triggerKey &&
							this.triggerModifier === n.triggerModifier &&
							this.triggerSideBySideKey === n.triggerSideBySideKey &&
							this.triggerSideBySideModifier === n.triggerSideBySideModifier
						);
					}
				}
				e.$5Mb = u;
				function a(c) {
					return c === "altKey"
						? E.$m
							? new u(i.KeyCode.Meta, "metaKey", i.KeyCode.Alt, "altKey")
							: new u(i.KeyCode.Ctrl, "ctrlKey", i.KeyCode.Alt, "altKey")
						: E.$m
							? new u(i.KeyCode.Alt, "altKey", i.KeyCode.Meta, "metaKey")
							: new u(i.KeyCode.Alt, "altKey", i.KeyCode.Ctrl, "ctrlKey");
				}
				class h extends w.$1c {
					constructor(n, g) {
						super(),
							(this.a = this.D(new t.$re())),
							(this.onMouseMoveOrRelevantKeyDown = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onExecute = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onCancel = this.c.event),
							(this.f = n),
							(this.g =
								g?.extractLineNumberFromMouseEvent ??
								((p) =>
									p.target.position ? p.target.position.lineNumber : 0)),
							(this.h = a(
								this.f.getOption(C.EditorOption.multiCursorModifier),
							)),
							(this.j = null),
							(this.m = !1),
							(this.n = 0),
							this.D(
								this.f.onDidChangeConfiguration((p) => {
									if (p.hasChanged(C.EditorOption.multiCursorModifier)) {
										const o = a(
											this.f.getOption(C.EditorOption.multiCursorModifier),
										);
										if (this.h.equals(o)) return;
										(this.h = o),
											(this.j = null),
											(this.m = !1),
											(this.n = 0),
											this.c.fire();
									}
								}),
							),
							this.D(this.f.onMouseMove((p) => this.r(new m(p, this.h)))),
							this.D(this.f.onMouseDown((p) => this.s(new m(p, this.h)))),
							this.D(this.f.onMouseUp((p) => this.t(new m(p, this.h)))),
							this.D(this.f.onKeyDown((p) => this.u(new r(p, this.h)))),
							this.D(this.f.onKeyUp((p) => this.w(new r(p, this.h)))),
							this.D(this.f.onMouseDrag(() => this.y())),
							this.D(this.f.onDidChangeCursorSelection((p) => this.q(p))),
							this.D(this.f.onDidChangeModel((p) => this.y())),
							this.D(this.f.onDidChangeModelContent(() => this.y())),
							this.D(
								this.f.onDidScrollChange((p) => {
									(p.scrollTopChanged || p.scrollLeftChanged) && this.y();
								}),
							);
					}
					q(n) {
						n.selection &&
							n.selection.startColumn !== n.selection.endColumn &&
							this.y();
					}
					r(n) {
						(this.j = n), this.a.fire([n, null]);
					}
					s(n) {
						(this.m = n.hasTriggerModifier), (this.n = this.g(n));
					}
					t(n) {
						const g = this.g(n);
						this.m && this.n && this.n === g && this.b.fire(n);
					}
					u(n) {
						this.j &&
						(n.keyCodeIsTriggerKey ||
							(n.keyCodeIsSideBySideKey && n.hasTriggerModifier))
							? this.a.fire([this.j, n])
							: n.hasTriggerModifier && this.c.fire();
					}
					w(n) {
						n.keyCodeIsTriggerKey && this.c.fire();
					}
					y() {
						(this.j = null), (this.m = !1), this.c.fire();
					}
				}
				e.$6Mb = h;
			},
		),
		