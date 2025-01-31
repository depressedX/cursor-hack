import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../platform/extensions/common/extensions.js';
import './webviewEditorInput.js';
import './webviewWorkbenchService.js';
define(
			de[1831],
			he([1, 0, 9, 109, 566, 623]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*extensions*/,
 w /*webviewEditorInput*/,
 E /*webviewWorkbenchService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Toc = void 0),
					(e.$Uoc = d),
					(e.$Voc = a),
					(e.$Woc = h);
				let C = class {
					static {
						this.ID = w.$W4b.typeId;
					}
					constructor(n) {
						this.a = n;
					}
					canSerialize(n) {
						return this.a.shouldPersist(n);
					}
					serialize(n) {
						if (!this.canSerialize(n)) return;
						const g = this.c(n);
						try {
							return JSON.stringify(g);
						} catch {
							return;
						}
					}
					deserialize(n, g) {
						const p = this.b(JSON.parse(g));
						return this.a.openRevivedWebview({
							webviewInitInfo: {
								providedViewType: p.providedId,
								origin: p.origin,
								title: p.title,
								options: p.webviewOptions,
								contentOptions: p.contentOptions,
								extension: p.extension,
							},
							viewType: p.viewType,
							title: p.title,
							iconPath: p.iconPath,
							state: p.state,
							group: p.group,
						});
					}
					b(n) {
						return {
							...n,
							extension: d(n.extensionId, n.extensionLocation),
							iconPath: m(n.iconPath),
							state: u(n.state),
							webviewOptions: n.options,
							contentOptions: h(n.options),
						};
					}
					c(n) {
						return {
							origin: n.webview.origin,
							viewType: n.viewType,
							providedId: n.providedId,
							title: n.getName(),
							options: { ...n.webview.options, ...n.webview.contentOptions },
							extensionLocation: n.extension?.location,
							extensionId: n.extension?.id.value,
							state: n.webview.state,
							iconPath: n.iconPath
								? { light: n.iconPath.light, dark: n.iconPath.dark }
								: void 0,
							group: n.group,
						};
					}
				};
				(e.$Toc = C), (e.$Toc = C = Ne([j(0, E.$qnc)], C));
				function d(c, n) {
					if (!c) return;
					const g = r(n);
					if (g) return { id: new i.$Gn(c), location: g };
				}
				function m(c) {
					if (!c) return;
					const n = r(c.light),
						g = r(c.dark);
					return n && g ? { light: n, dark: g } : void 0;
				}
				function r(c) {
					if (c)
						try {
							return typeof c == "string" ? t.URI.parse(c) : t.URI.from(c);
						} catch {
							return;
						}
				}
				function u(c) {
					return typeof c == "string" ? c : void 0;
				}
				function a(c) {
					return c;
				}
				function h(c) {
					return {
						...c,
						localResourceRoots: c.localResourceRoots?.map((n) => r(n)),
					};
				}
			},
		)
