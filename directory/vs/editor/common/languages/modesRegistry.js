import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/event.js';
import '../../../platform/registry/common/platform.js';
import '../../../base/common/mime.js';
import '../../../platform/configuration/common/configurationRegistry.js';
define(
			de[172],
			he([1, 0, 4, 6, 30, 266, 81]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*event*/,
 w /*platform*/,
 E /*mime*/,
 C /*configurationRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$M = e.$0M = e.$9M = e.$8M = e.$7M = void 0),
					(t = mt(t)),
					(e.$7M = { ModesRegistry: "editor.modesRegistry" });
				class d {
					constructor() {
						(this.b = new i.$re()),
							(this.onDidChangeLanguages = this.b.event),
							(this.a = []);
					}
					registerLanguage(r) {
						return (
							this.a.push(r),
							this.b.fire(void 0),
							{
								dispose: () => {
									for (let u = 0, a = this.a.length; u < a; u++)
										if (this.a[u] === r) {
											this.a.splice(u, 1);
											return;
										}
								},
							}
						);
					}
					getLanguages() {
						return this.a;
					}
				}
				(e.$8M = d),
					(e.$9M = new d()),
					w.$Io.add(e.$7M.ModesRegistry, e.$9M),
					(e.$0M = "plaintext"),
					(e.$$M = ".txt"),
					e.$9M.registerLanguage({
						id: e.$0M,
						extensions: [e.$$M],
						aliases: [t.localize(817, null), "text"],
						mimetypes: [E.$EK.text],
					}),
					w.$Io
						.as(C.$No.Configuration)
						.registerDefaultConfigurations([
							{
								overrides: {
									"[plaintext]": {
										"editor.unicodeHighlight.ambiguousCharacters": !1,
										"editor.unicodeHighlight.invisibleCharacters": !1,
									},
								},
							},
						]);
			},
		),
		