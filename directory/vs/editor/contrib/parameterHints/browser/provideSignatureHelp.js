import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../common/core/position.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/resolverService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[1182],
			he([1, 0, 33, 29, 28, 9, 48, 74, 69, 42, 31, 8]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*errors*/,
 w /*types*/,
 E /*uri*/,
 C /*position*/,
 d /*languages*/,
 m /*languageFeatures*/,
 r /*resolverService*/,
 u /*commands*/,
 a /*contextkey*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5jc = void 0),
					(e.$6jc = h),
					(d = mt(d)),
					(e.$5jc = {
						Visible: new a.$5j("parameterHintsVisible", !1),
						MultipleSignatures: new a.$5j(
							"parameterHintsMultipleSignatures",
							!1,
						),
					});
				async function h(c, n, g, p, o) {
					const f = c.ordered(n);
					for (const b of f)
						try {
							const s = await b.provideSignatureHelp(n, g, o, p);
							if (s) return s;
						} catch (s) {
							(0, i.$5)(s);
						}
				}
				u.$fk.registerCommand(
					"_executeSignatureHelpProvider",
					async (c, ...n) => {
						const [g, p, o] = n;
						(0, w.$vg)(E.URI.isUri(g)),
							(0, w.$vg)(C.$hL.isIPosition(p)),
							(0, w.$vg)(typeof o == "string" || !o);
						const f = c.get(m.$k3),
							b = await c.get(r.$MO).createModelReference(g);
						try {
							const s = await h(
								f.signatureHelpProvider,
								b.object.textEditorModel,
								C.$hL.lift(p),
								{
									triggerKind: d.SignatureHelpTriggerKind.Invoke,
									isRetrigger: !1,
									triggerCharacter: o,
								},
								t.CancellationToken.None,
							);
							return s ? (setTimeout(() => s.dispose(), 0), s.value) : void 0;
						} finally {
							b.dispose();
						}
					},
				);
			},
		)
