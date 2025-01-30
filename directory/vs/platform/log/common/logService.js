import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import './log.js';
define(de[1621], he([1, 0, 3, 34]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*log*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_eb = void 0);
			class w extends t.$1c {
				constructor(C, d = []) {
					super(),
						(this.a = new i.$sk([C, ...d])),
						this.D(C.onDidChangeLogLevel((m) => this.setLevel(m)));
				}
				get onDidChangeLogLevel() {
					return this.a.onDidChangeLogLevel;
				}
				setLevel(C) {
					this.a.setLevel(C);
				}
				getLevel() {
					return this.a.getLevel();
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
					this.a.error(C, ...d);
				}
				flush() {
					this.a.flush();
				}
			}
			e.$_eb = w;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	