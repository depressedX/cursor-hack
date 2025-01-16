define(de[1697], he([1, 0, 24, 76]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$4nc = void 0);
			class w {
				constructor() {
					(this.a = 0), (this.b = new Map());
				}
				add(C) {
					const d = this.a++;
					return (
						this.b.set(d, (0, t.$Lb)(Array.from(C, ([, m]) => m.asFile()))),
						{
							id: d,
							dispose: () => {
								this.b.delete(d);
							},
						}
					);
				}
				async resolveFileData(C, d) {
					const m = this.b.get(C);
					if (!m) throw new Error("No data transfer found");
					const r = m.find((u) => u.id === d);
					if (!r) throw new Error("No matching file found in data transfer");
					return i.$Te.wrap(await r.data());
				}
				dispose() {
					this.b.clear();
				}
			}
			e.$4nc = w;
		}),
		