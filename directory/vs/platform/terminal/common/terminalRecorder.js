import '../../../../require.js';
import '../../../../exports.js';
define(de[2827], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$cIb = void 0);
			var t;
			(function (w) {
				w[(w.MaxRecorderDataSize = 10485760)] = "MaxRecorderDataSize";
			})(t || (t = {}));
			class i {
				constructor(E, C) {
					(this.b = 0), (this.a = [{ cols: E, rows: C, data: [] }]);
				}
				handleResize(E, C) {
					if (
						(this.a.length > 0 &&
							this.a[this.a.length - 1].data.length === 0 &&
							this.a.pop(),
						this.a.length > 0)
					) {
						const d = this.a[this.a.length - 1];
						if (d.cols === E && d.rows === C) return;
						if (d.cols === 0 && d.rows === 0) {
							(d.cols = E), (d.rows = C);
							return;
						}
					}
					this.a.push({ cols: E, rows: C, data: [] });
				}
				handleData(E) {
					for (
						this.a[this.a.length - 1].data.push(E), this.b += E.length;
						this.b > t.MaxRecorderDataSize;
					) {
						const d = this.a[0],
							m = this.b - t.MaxRecorderDataSize;
						m >= d.data[0].length
							? ((this.b -= d.data[0].length),
								d.data.shift(),
								d.data.length === 0 && this.a.shift())
							: ((d.data[0] = d.data[0].substr(m)), (this.b -= m));
					}
				}
				generateReplayEventSync() {
					return (
						this.a.forEach((E) => {
							E.data.length > 0 && (E.data = [E.data.join("")]);
						}),
						{
							events: this.a.map((E) => ({
								cols: E.cols,
								rows: E.rows,
								data: E.data[0] ?? "",
							})),
							commands: {
								isWindowsPty: !1,
								commands: [],
								promptInputModel: void 0,
							},
						}
					);
				}
				async generateReplayEvent() {
					return this.generateReplayEventSync();
				}
			}
			e.$cIb = i;
		}),
		