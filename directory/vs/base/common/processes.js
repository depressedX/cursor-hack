import '../../../require.js';
import '../../../exports.js';
import './platform.js';
define(de[919], he([1, 0, 12]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TerminateResponseCode = e.Source = void 0),
				(e.$zm = E),
				(e.$Am = C);
			var i;
			(function (d) {
				(d[(d.stdout = 0)] = "stdout"), (d[(d.stderr = 1)] = "stderr");
			})(i || (e.Source = i = {}));
			var w;
			(function (d) {
				(d[(d.Success = 0)] = "Success"),
					(d[(d.Unknown = 1)] = "Unknown"),
					(d[(d.AccessDenied = 2)] = "AccessDenied"),
					(d[(d.ProcessNotFound = 3)] = "ProcessNotFound");
			})(w || (e.TerminateResponseCode = w = {}));
			function E(d, ...m) {
				const r = m.reduce((h, c) => ((h[c] = !0), h), {}),
					u = [
						/^ELECTRON_.+$/,
						/^VSCODE_(?!(PORTABLE|SHELL_LOGIN|ENV_REPLACE|ENV_APPEND|ENV_PREPEND)).+$/,
						/^SNAP(|_.*)$/,
						/^GDK_PIXBUF_.+$/,
					];
				Object.keys(d)
					.filter((h) => !r[h])
					.forEach((h) => {
						for (let c = 0; c < u.length; c++)
							if (h.search(u[c]) !== -1) {
								delete d[h];
								break;
							}
					});
			}
			function C(d) {
				d && (delete d.DEBUG, t.$n && delete d.LD_PRELOAD);
			}
		}),
		