import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../../editor/browser/services/codeEditorService.js';
import './mainThreadWebviews.js';
import '../common/extHost.protocol.js';
import '../../contrib/webview/browser/webview.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3375],
			he([1, 0, 7, 3, 19, 9, 65, 831, 88, 355, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*resources*/,
 E /*uri*/,
 C /*codeEditorService*/,
 d /*mainThreadWebviews*/,
 m /*extHost.protocol*/,
 r /*webview*/,
 u /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Omc = void 0);
				class a {
					constructor(n, g, p, o) {
						(this.editor = n),
							(this.line = g),
							(this.height = p),
							(this.webview = o),
							(this.domNode = document.createElement("div")),
							(this.domNode.style.zIndex = "10"),
							(this.afterLineNumber = g),
							(this.afterColumn = 1),
							(this.heightInLines = p),
							n.changeViewZones((f) => (this.a = f.addZone(this))),
							o.mountTo(this.domNode, (0, t.getWindow)(n.getDomNode()));
					}
					dispose() {
						this.editor.changeViewZones((n) => this.a && n.removeZone(this.a));
					}
				}
				let h = class {
					constructor(n, g, p) {
						(this.d = g),
							(this.e = p),
							(this.b = new i.$Zc()),
							(this.c = new Map()),
							(this.a = n.getProxy(m.$mbb.ExtHostEditorInsets));
					}
					dispose() {
						this.b.dispose();
					}
					async $createEditorInset(n, g, p, o, f, b, s, l) {
						let y;
						g = g.substr(0, g.indexOf(","));
						for (const T of this.d.listCodeEditors())
							if (
								T.getId() === g &&
								T.hasModel() &&
								(0, w.$gh)(T.getModel().uri, E.URI.revive(p))
							) {
								y = T;
								break;
							}
						if (!y) {
							setTimeout(() => this.a.$onDidDispose(n));
							return;
						}
						const $ = new i.$Zc(),
							v = this.e.createWebviewElement({
								title: void 0,
								options: { enableFindWidget: !1 },
								contentOptions: (0, d.$Nmc)(b),
								extension: { id: s, location: E.URI.revive(l) },
							}),
							S = new a(y, o, f, v),
							I = () => {
								$.dispose(), this.a.$onDidDispose(n), this.c.delete(n);
							};
						$.add(y.onDidChangeModel(I)),
							$.add(y.onDidDispose(I)),
							$.add(S),
							$.add(v),
							$.add(
								v.onMessage((T) => this.a.$onDidReceiveMessage(n, T.message)),
							),
							this.c.set(n, S);
					}
					$disposeEditorInset(n) {
						const g = this.f(n);
						this.c.delete(n), g.dispose();
					}
					$setHtml(n, g) {
						this.f(n).webview.setHtml(g);
					}
					$setOptions(n, g) {
						const p = this.f(n);
						p.webview.contentOptions = (0, d.$Nmc)(g);
					}
					async $postMessage(n, g) {
						return this.f(n).webview.postMessage(g), !0;
					}
					f(n) {
						const g = this.c.get(n);
						if (!g) throw new Error("Unknown inset");
						return g;
					}
				};
				(e.$Omc = h),
					(e.$Omc = h =
						Ne(
							[
								(0, u.$tmc)(m.$lbb.MainThreadEditorInsets),
								j(1, C.$dtb),
								j(2, r.$3Ib),
							],
							h,
						));
			},
		)
