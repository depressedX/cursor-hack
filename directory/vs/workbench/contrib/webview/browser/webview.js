import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/memento.js';
define(
			de[355],
			he([1, 0, 24, 19, 47, 8, 5, 21, 282]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*resources*/,
 w /*uuid*/,
 E /*contextkey*/,
 C /*instantiation*/,
 d /*storage*/,
 m /*memento*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Ib =
						e.$5Ib =
						e.WebviewContentPurpose =
						e.$3Ib =
						e.$2Ib =
						e.$1Ib =
						e.$ZIb =
							void 0),
					(e.$4Ib = u),
					(e.$ZIb = new E.$5j("webviewFindWidgetVisible", !1)),
					(e.$1Ib = new E.$5j("webviewFindWidgetFocused", !1)),
					(e.$2Ib = new E.$5j("webviewFindWidgetEnabled", !1)),
					(e.$3Ib = (0, C.$Mi)("webviewService"));
				var r;
				(function (n) {
					(n.NotebookRenderer = "notebookRenderer"),
						(n.CustomEditor = "customEditor"),
						(n.WebviewView = "webviewView");
				})(r || (e.WebviewContentPurpose = r = {}));
				function u(n, g) {
					return (
						n.allowMultipleAPIAcquire === g.allowMultipleAPIAcquire &&
						n.allowScripts === g.allowScripts &&
						n.allowForms === g.allowForms &&
						(0, t.$yb)(n.localResourceRoots, g.localResourceRoots, i.$gh) &&
						(0, t.$yb)(
							n.portMapping,
							g.portMapping,
							(p, o) =>
								p.extensionHostPort === o.extensionHostPort &&
								p.webviewPort === o.webviewPort,
						) &&
						a(n, g)
					);
				}
				function a(n, g) {
					return n.enableCommandUris === g.enableCommandUris
						? !0
						: Array.isArray(n.enableCommandUris) &&
								Array.isArray(g.enableCommandUris)
							? (0, t.$yb)(n.enableCommandUris, g.enableCommandUris)
							: !1;
				}
				let h = class {
					constructor(g, p) {
						(this.c = new m.$eEb(g, p)),
							(this.d = this.c.getMemento(
								d.StorageScope.APPLICATION,
								d.StorageTarget.MACHINE,
							));
					}
					getOrigin(g, p) {
						const o = this.e(g, p),
							f = this.d[o];
						if (f && typeof f == "string") return f;
						const b = (0, w.$9g)();
						return (this.d[o] = b), this.c.saveMemento(), b;
					}
					e(g, p) {
						return JSON.stringify({ viewType: g, key: p });
					}
				};
				(e.$5Ib = h), (e.$5Ib = h = Ne([j(1, d.$lq)], h));
				let c = class {
					constructor(g, p) {
						this.c = new h(g, p);
					}
					getOrigin(g, p) {
						return this.c.getOrigin(g, p.value);
					}
				};
				(e.$6Ib = c), (e.$6Ib = c = Ne([j(1, d.$lq)], c));
			},
		),
		