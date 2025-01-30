import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
define(de[378], he([1, 0, 30]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TerminalExtensionsRegistry = void 0),
				(e.$qLc = i);
			function i(d, m, r = !1) {
				E.INSTANCE.registerTerminalContribution({
					id: d,
					ctor: m,
					canRunInDetachedTerminals: r,
				});
			}
			var w;
			(function (d) {
				function m() {
					return E.INSTANCE.getTerminalContributions();
				}
				d.getTerminalContributions = m;
			})(w || (e.TerminalExtensionsRegistry = w = {}));
			class E {
				static {
					this.INSTANCE = new E();
				}
				constructor() {
					this.a = [];
				}
				registerTerminalContribution(m) {
					this.a.push(m);
				}
				getTerminalContributions() {
					return this.a.slice(0);
				}
			}
			var C;
			(function (d) {
				d.TerminalContributions = "terminal.contributions";
			})(C || (C = {})),
				t.$Io.add(C.TerminalContributions, E.INSTANCE);
		}),
		