import '../../../require.js';
import '../../../exports.js';
import './strings.js';
define(de[111], he([1, 0, 37]), function (ce /*require*/,
 e /*exports*/,
 t /*strings*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
			var i;
			(function (w) {
				(w[(w.Ignore = 0)] = "Ignore"),
					(w[(w.Info = 1)] = "Info"),
					(w[(w.Warning = 2)] = "Warning"),
					(w[(w.Error = 3)] = "Error"),
					(w[(w.AI = 4)] = "AI");
			})(i || (i = {})),
				(function (w) {
					const E = "error",
						C = "warning",
						d = "warn",
						m = "info",
						r = "ignore";
					function u(h) {
						return h
							? t.$Mf(E, h)
								? w.Error
								: t.$Mf(C, h) || t.$Mf(d, h)
									? w.Warning
									: t.$Mf(m, h)
										? w.Info
										: w.Ignore
							: w.Ignore;
					}
					w.fromValue = u;
					function a(h) {
						switch (h) {
							case w.Error:
								return E;
							case w.Warning:
								return C;
							case w.Info:
								return m;
							default:
								return r;
						}
					}
					w.toString = a;
				})(i || (i = {})),
				(e.default = i);
		})
