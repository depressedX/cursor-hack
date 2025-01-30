import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/result.js';
define(de[2696], he([1, 0, 19, 529]), function (ce /*require*/,
 e /*exports*/,
 t /*resources*/,
 i /*result*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.AiInterfaceFileType = void 0),
				(e.$jlc = E),
				(e.$klc = C),
				(e.$llc = d);
			var w;
			(function (m) {
				(m.Interface = "interface"),
					(m.Implementation = "implementation"),
					(m.Test = "test");
			})(w || (e.AiInterfaceFileType = w = {}));
			function E(m) {
				return m
					? m.path.endsWith(".ai.ts")
						? (0, i.Ok)(w.Interface)
						: m.path.endsWith(".ai.test.ts")
							? (0, i.Ok)(w.Test)
							: m.path.endsWith(".ai.impl.ts")
								? (0, i.Ok)(w.Implementation)
								: (0, i.Err)("not an ai interface file")
					: (0, i.Err)("no uri");
			}
			function C(m, r) {
				let u = m;
				switch (r) {
					case w.Interface:
						u = u.with({
							path: m.path.replace(/(\.ai)?(\.test)?(\.impl)?\.ts$/, ".ai.ts"),
						});
						break;
					case w.Test:
						u = u.with({
							path: m.path.replace(
								/(\.ai)?(\.test)?(\.impl)?\.ts$/,
								".ai.test.ts",
							),
						});
						break;
					case w.Implementation:
						u = u.with({
							path: m.path.replace(
								/(\.ai)?(\.test)?(\.impl)?\.ts$/,
								".ai.impl.ts",
							),
						});
						break;
				}
				return u;
			}
			function d(m, r) {
				if (!r) return !1;
				const u = r.with({
					path: r.path.replace(/(\.ai)?(\.test)?(\.impl)?\.ts$/, ".ai.ts"),
				});
				return t.$dh.isEqual(m, u);
			}
		}),
		