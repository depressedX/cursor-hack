import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../editor/common/languages/language.js';
import '../../../editor/common/services/model.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/services/resolverService.js';
import '../../services/languageStatus/common/languageStatusService.js';
import '../../../base/common/lifecycle.js';
define(
			de[3400],
			he([1, 0, 9, 61, 67, 88, 101, 17, 42, 1024, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*language*/,
 w /*model*/,
 E /*extHost.protocol*/,
 C /*extHostCustomers*/,
 d /*range*/,
 m /*resolverService*/,
 r /*languageStatusService*/,
 u /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9nc = void 0);
				let a = class {
					constructor(c, n, g, p, o) {
						(this.d = n),
							(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.a = new u.$Zc()),
							(this.c = new u.$0c()),
							(this.b = c.getProxy(E.$mbb.ExtHostLanguages)),
							this.b.$acceptLanguageIds(n.getRegisteredLanguageIds()),
							this.a.add(
								n.onDidChange((f) => {
									this.b.$acceptLanguageIds(n.getRegisteredLanguageIds());
								}),
							);
					}
					dispose() {
						this.a.dispose(), this.c.dispose();
					}
					async $changeLanguage(c, n) {
						if (!this.d.isRegisteredLanguageId(n))
							return Promise.reject(new Error(`Unknown language id: ${n}`));
						const g = t.URI.revive(c),
							p = await this.f.createModelReference(g);
						try {
							p.object.textEditorModel.setLanguage(this.d.createById(n));
						} finally {
							p.dispose();
						}
					}
					async $tokensAtPosition(c, n) {
						const g = t.URI.revive(c),
							p = this.e.getModel(g);
						if (!p) return;
						p.tokenization.tokenizeIfCheap(n.lineNumber);
						const o = p.tokenization.getLineTokens(n.lineNumber),
							f = o.findTokenIndexAtOffset(n.column - 1);
						return {
							type: o.getStandardTokenType(f),
							range: new d.$iL(
								n.lineNumber,
								1 + o.getStartOffset(f),
								n.lineNumber,
								1 + o.getEndOffset(f),
							),
						};
					}
					$setLanguageStatus(c, n) {
						this.c.get(c)?.dispose(), this.c.set(c, this.g.addStatus(n));
					}
					$removeLanguageStatus(c) {
						this.c.get(c)?.dispose();
					}
				};
				(e.$9nc = a),
					(e.$9nc = a =
						Ne(
							[
								(0, C.$tmc)(E.$lbb.MainThreadLanguages),
								j(1, i.$nM),
								j(2, w.$QO),
								j(3, m.$MO),
								j(4, r.$c8),
							],
							a,
						));
			},
		)
