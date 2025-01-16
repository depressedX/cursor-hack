define(de[2871], he([1, 0, 1210, 216]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$U8c = void 0);
			class w {
				constructor(C) {
					(this.a = C), (this.onDidChangeLogLevel = this.a.onDidChangeLogLevel);
				}
				getLevel() {
					return this.a.getLevel();
				}
				setLevel(C) {
					this.a.setLevel(C);
				}
				trace(C, ...d) {
					this.a.trace(C, ...d);
				}
				debug(C, ...d) {
					this.a.debug(C, ...d);
				}
				info(C, ...d) {
					this.a.info(C, ...d);
				}
				warn(C, ...d) {
					this.a.warn(C, ...d);
				}
				error(C, ...d) {
					this.a.error(C, ...d),
						!(
							!(0, t.getProcessGlobalState)().enabled ||
							Math.random() >= (0, t.getProcessGlobalState)().loggerSampleRate
						) &&
							(C instanceof Error
								? (0, i.$MOb)(C)
								: d.length > 0 && d[0] instanceof Error
									? (0, i.$MOb)(d[0])
									: typeof C == "string" && (0, i.$MOb)(new Error(C)));
				}
				flush() {
					this.a.flush();
				}
				dispose() {
					this.a.dispose();
				}
			}
			e.$U8c = w;
		}),
		