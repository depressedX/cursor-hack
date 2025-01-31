import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../editor/common/core/editOperation.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/services/editorWorker.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/languages/language.js';
import '../../../editor/common/services/resolverService.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../../base/common/cancellation.js';
define(
			de[3346],
			he([1, 0, 29, 3, 9, 188, 17, 200, 67, 61, 42, 101, 88, 33]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*editOperation*/,
 C /*range*/,
 d /*editorWorker*/,
 m /*model*/,
 r /*language*/,
 u /*resolverService*/,
 a /*extHostCustomers*/,
 h /*extHost.protocol*/,
 c /*cancellation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2mc = void 0);
				let n = class {
					constructor(p, o, f, b, s) {
						(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.a = new i.$0c()),
							(this.b = new Map()),
							(this.c = p.getProxy(h.$mbb.ExtHostDocumentContentProviders));
					}
					dispose() {
						this.a.dispose(), (0, i.$Vc)(this.b.values());
					}
					$registerTextContentProvider(p, o) {
						const f = this.d.registerTextModelContentProvider(o, {
							provideTextContent: (b) =>
								this.c.$provideTextDocumentContent(p, b).then((s) => {
									if (typeof s == "string") {
										const l = s.substr(0, 1 + s.search(/\r?\n/)),
											y = this.e.createByFilepathOrFirstLine(b, l);
										return this.f.createModel(s, y, b);
									}
									return null;
								}),
						});
						this.a.set(p, f);
					}
					$unregisterTextContentProvider(p) {
						this.a.deleteAndDispose(p);
					}
					async $onVirtualDocumentChange(p, o) {
						const f = this.f.getModel(w.URI.revive(p));
						if (!f) return;
						this.b.get(f.id)?.cancel();
						const s = new c.$Ce();
						this.b.set(f.id, s);
						try {
							const l = await this.g.computeMoreMinimalEdits(f.uri, [
								{ text: o, range: f.getFullModelRange() },
							]);
							if ((this.b.delete(f.id), s.token.isCancellationRequested))
								return;
							l &&
								l.length > 0 &&
								f.applyEdits(
									l.map((y) => E.$jL.replace(C.$iL.lift(y.range), y.text)),
								);
						} catch (l) {
							(0, t.$4)(l);
						}
					}
				};
				(e.$2mc = n),
					(e.$2mc = n =
						Ne(
							[
								(0, a.$tmc)(h.$lbb.MainThreadDocumentContentProviders),
								j(1, u.$MO),
								j(2, r.$nM),
								j(3, m.$QO),
								j(4, d.$Cxb),
							],
							n,
						));
			},
		)
