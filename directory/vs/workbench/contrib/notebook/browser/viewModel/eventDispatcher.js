define(de[3107], he([1, 0, 6, 3, 990]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$E1b = void 0);
			class E extends i.$1c {
				constructor() {
					super(...arguments),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeLayout = this.a.event),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeMetadata = this.b.event),
						(this.c = this.D(new t.$re())),
						(this.onDidChangeCellState = this.c.event);
				}
				emit(d) {
					for (let m = 0, r = d.length; m < r; m++) {
						const u = d[m];
						switch (u.type) {
							case w.NotebookViewEventType.LayoutChanged:
								this.a.fire(u);
								break;
							case w.NotebookViewEventType.MetadataChanged:
								this.b.fire(u);
								break;
							case w.NotebookViewEventType.CellStateChanged:
								this.c.fire(u);
								break;
						}
					}
				}
			}
			e.$E1b = E;
		}),
		