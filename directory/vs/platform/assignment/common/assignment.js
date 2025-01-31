import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/platform.js';
define(de[2702], he([1, 0, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$f4b = e.Filters = e.TargetPopulation = e.$e4b = e.$d4b = void 0),
				(t = mt(t)),
				(e.$d4b = "VSCode.ABExp.FeatureData"),
				(e.$e4b = 0);
			var i;
			(function (C) {
				(C.Insiders = "insider"),
					(C.Public = "public"),
					(C.Exploration = "exploration");
			})(i || (e.TargetPopulation = i = {}));
			var w;
			(function (C) {
				(C.Market = "X-MSEdge-Market"),
					(C.CorpNet = "X-FD-Corpnet"),
					(C.ApplicationVersion = "X-VSCode-AppVersion"),
					(C.Build = "X-VSCode-Build"),
					(C.ClientId = "X-MSEdge-ClientId"),
					(C.ExtensionName = "X-VSCode-ExtensionName"),
					(C.ExtensionVersion = "X-VSCode-ExtensionVersion"),
					(C.Language = "X-VSCode-Language"),
					(C.TargetPopulation = "X-VSCode-TargetPopulation");
			})(w || (e.Filters = w = {}));
			class E {
				constructor(d, m, r, u) {
					(this.a = d), (this.b = m), (this.c = r), (this.d = u);
				}
				static e(d) {
					const m = /\-[a-zA-Z0-9]+$/;
					return d.split(m)[0];
				}
				getFilterValue(d) {
					switch (d) {
						case w.ApplicationVersion:
							return E.e(this.a);
						case w.Build:
							return this.b;
						case w.ClientId:
							return this.c;
						case w.Language:
							return t.$z;
						case w.ExtensionName:
							return "vscode-core";
						case w.ExtensionVersion:
							return "999999.0";
						case w.TargetPopulation:
							return this.d;
						default:
							return "";
					}
				}
				getFilters() {
					const d = new Map(),
						m = Object.values(w);
					for (const r of m) d.set(r, this.getFilterValue(r));
					return d;
				}
			}
			e.$f4b = E;
		})
