import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/log/common/log.js';
import '../common/search.js';
import '../common/searchExtTypes.js';
define(Pe[198], Ne([1, 0, 14, 41, 83]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Cjd = void 0),
				(t.$yjd = N),
				(t.$zjd = P),
				(t.$Ajd = I),
				(t.$Bjd = l),
				(S = tt(S));
			function N(p) {
				return p.startsWith("**") || p.startsWith("/") ? p : `/${p}`;
			}
			function P(p) {
				return process.arch === "arm64" && process.platform === "darwin"
					? p.replace(/rg$/, "rgArm")
					: process.arch === "x64" && process.platform === "darwin"
						? p.replace(/rg$/, "rgX64")
						: p;
			}
			function I(p) {
				return new r.$v7(
					p.start.line,
					p.start.character,
					p.end.line,
					p.end.character,
				);
			}
			function l(p) {
				return new S.$g7(
					p.startLineNumber,
					p.startColumn,
					p.endLineNumber,
					p.endColumn,
				);
			}
			let n = class {
				constructor(y, d) {
					(this.a = y), (this.b = d);
				}
				appendLine(y) {
					this.b.debug(`${this.a}#search`, y);
				}
			};
			(t.$Cjd = n), (t.$Cjd = n = wt([rt(1, e.$ik)], n));
		}),
		