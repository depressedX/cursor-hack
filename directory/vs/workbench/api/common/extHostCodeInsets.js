import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../contrib/webview/common/webview.js';
define(Pe[530], Ne([1, 0, 4, 3, 189]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$lhd = void 0);
			class N {
				constructor(I, l, n) {
					(this.d = I),
						(this.e = l),
						(this.f = n),
						(this.a = 0),
						(this.b = new r.$Zc()),
						(this.c = new Map()),
						this.b.add(
							l.onDidChangeVisibleTextEditors(() => {
								const p = l.getVisibleTextEditors();
								for (const y of this.c.values())
									p.indexOf(y.editor) < 0 && y.inset.dispose();
							}),
						);
				}
				dispose() {
					this.c.forEach((I) => I.inset.dispose()), this.b.dispose();
				}
				createWebviewEditorInset(I, l, n, p, y) {
					let d;
					for (const a of this.e.getVisibleTextEditors(!0))
						if (a.value === I) {
							d = a;
							break;
						}
					if (!d) throw new Error("not a visible editor");
					const k = this,
						g = this.a++,
						c = new e.$re(),
						h = new e.$re(),
						$ = new (class {
							constructor() {
								(this.a = ""), (this.b = Object.create(null));
							}
							asWebviewUri(a) {
								return (0, S.$V2b)(a, k.f);
							}
							get cspSource() {
								return S.$U2b;
							}
							set options(a) {
								(this.b = a), k.d.$setOptions(g, a);
							}
							get options() {
								return this.b;
							}
							set html(a) {
								(this.a = a), k.d.$setHtml(g, a);
							}
							get html() {
								return this.a;
							}
							get onDidReceiveMessage() {
								return c.event;
							}
							postMessage(a) {
								return k.d.$postMessage(g, a);
							}
						})(),
						T = new (class {
							constructor() {
								(this.editor = I),
									(this.line = l),
									(this.height = n),
									(this.webview = $),
									(this.onDidDispose = h.event);
							}
							dispose() {
								k.c.has(g) &&
									(k.c.delete(g),
									k.d.$disposeEditorInset(g),
									h.fire(),
									h.dispose(),
									c.dispose());
							}
						})();
					return (
						this.d.$createEditorInset(
							g,
							d.id,
							d.value.document.uri,
							l + 1,
							n,
							p || {},
							y.identifier,
							y.extensionLocation,
						),
						this.c.set(g, { editor: I, inset: T, onDidReceiveMessage: c }),
						T
					);
				}
				$onDidDispose(I) {
					const l = this.c.get(I);
					l && l.inset.dispose();
				}
				$onDidReceiveMessage(I, l) {
					this.c.get(I)?.onDidReceiveMessage.fire(l);
				}
			}
			t.$lhd = N;
		}),
		