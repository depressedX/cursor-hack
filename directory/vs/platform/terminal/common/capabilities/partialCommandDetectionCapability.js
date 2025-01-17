import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import './capabilities.js';
define(de[2825], he([1, 0, 6, 3, 189]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PHb = void 0);
			var E;
			(function (d) {
				d[(d.MinimumPromptLength = 2)] = "MinimumPromptLength";
			})(E || (E = {}));
			class C extends i.$Zc {
				get commands() {
					return this.a;
				}
				constructor(m) {
					super(),
						(this.c = m),
						(this.type = w.TerminalCapability.PartialCommandDetection),
						(this.a = []),
						(this.b = this.add(new t.$re())),
						(this.onCommandFinished = this.b.event),
						this.add(this.c.onData((r) => this.h(r))),
						this.add(
							this.c.parser.registerCsiHandler(
								{ final: "J" },
								(r) => (
									r.length >= 1 && (r[0] === 2 || r[0] === 3) && this.m(), !1
								),
							),
						);
				}
				h(m) {
					m === "\r" && this.j();
				}
				j() {
					if (this.c && this.c.buffer.active.cursorX >= E.MinimumPromptLength) {
						const m = this.c.registerMarker(0);
						m && (this.a.push(m), this.b.fire(m));
					}
				}
				m() {
					let m = 0;
					for (
						let r = this.a.length - 1;
						r >= 0 && !(this.a[r].line < this.c.buffer.active.baseY);
						r--
					)
						m++;
					this.a.splice(this.a.length - m, m);
				}
			}
			e.$PHb = C;
		}),
		