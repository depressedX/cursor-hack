define(de[3156], he([1, 0, 562]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dWc = void 0);
			class i {
				constructor(E, C, d) {
					(this.id = E),
						(this.xterm = C),
						(this.a = d),
						(this.maxLinkLength = 2e3);
				}
				async detect(E, C, d) {
					const m = (0, t.$_Vc)(
						this.xterm.buffer.active,
						C,
						d,
						this.xterm.cols,
					);
					if (m === "" || m.length > this.maxLinkLength) return [];
					const r = await this.a(m);
					return r
						? r.map((a) => {
								const h = (0, t.$0Vc)(
									E,
									this.xterm.cols,
									{
										startColumn: a.startIndex + 1,
										startLineNumber: 1,
										endColumn: a.startIndex + a.length + 1,
										endLineNumber: 1,
									},
									C,
								);
								return {
									text:
										m.substring(a.startIndex, a.startIndex + a.length) || "",
									label: a.label,
									bufferRange: h,
									type: { id: this.id },
									activate: a.activate,
								};
							})
						: [];
				}
			}
			e.$dWc = i;
		}),
		