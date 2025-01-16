define(de[2591], he([1, 0, 3]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dDb = void 0);
			class i {
				static {
					this.a = 51200;
				}
				constructor(E, C) {
					(this.b = new t.$Zc()),
						(this.c = []),
						(this.d = !1),
						this.b.add(
							E.onWillType(() => {
								if (this.d || !E.hasModel()) return;
								const d = E.getSelections(),
									m = d.length;
								let r = !1;
								for (let a = 0; a < m; a++)
									if (!d[a].isEmpty()) {
										r = !0;
										break;
									}
								if (!r) {
									this.c.length !== 0 && (this.c.length = 0);
									return;
								}
								this.c = [];
								const u = E.getModel();
								for (let a = 0; a < m; a++) {
									const h = d[a];
									if (u.getValueLengthInRange(h) > i.a) return;
									this.c[a] = {
										value: u.getValueInRange(h),
										multiline: h.startLineNumber !== h.endLineNumber,
									};
								}
							}),
						),
						this.b.add(
							C.onDidTrigger((d) => {
								this.d = !0;
							}),
						),
						this.b.add(
							C.onDidCancel((d) => {
								this.d = !1;
							}),
						);
				}
				getLastOvertypedInfo(E) {
					if (E >= 0 && E < this.c.length) return this.c[E];
				}
				dispose() {
					this.b.dispose();
				}
			}
			e.$dDb = i;
		}),
		