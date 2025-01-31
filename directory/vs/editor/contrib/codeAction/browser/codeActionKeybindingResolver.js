import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lazy.js';
import './codeAction.js';
import '../common/types.js';
import '../../../../platform/keybinding/common/keybinding.js';
define(
			de[2807],
			he([1, 0, 318, 149, 393, 291, 39]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hierarchicalKind*/,
 i /*lazy*/,
 w /*codeAction*/,
 E /*types*/,
 C /*keybinding*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WAb = void 0);
				let m = class {
					static {
						d = this;
					}
					static {
						this.a = [w.$OAb, w.$LAb, w.$QAb, w.$RAb, w.$SAb];
					}
					constructor(u) {
						this.b = u;
					}
					getResolver() {
						const u = new i.$Y(() =>
							this.b
								.getKeybindings()
								.filter((a) => d.a.indexOf(a.command) >= 0)
								.filter((a) => a.resolvedKeybinding)
								.map((a) => {
									let h = a.commandArgs;
									return (
										a.command === w.$RAb
											? (h = { kind: E.$GAb.SourceOrganizeImports.value })
											: a.command === w.$SAb &&
												(h = { kind: E.$GAb.SourceFixAll.value }),
										{
											resolvedKeybinding: a.resolvedKeybinding,
											...E.$JAb.fromUser(h, {
												kind: t.$1L.None,
												apply: E.CodeActionAutoApply.Never,
											}),
										}
									);
								}),
						);
						return (a) => {
							if (a.kind) return this.c(a, u.value)?.resolvedKeybinding;
						};
					}
					c(u, a) {
						if (!u.kind) return;
						const h = new t.$1L(u.kind);
						return a
							.filter((c) => c.kind.contains(h))
							.filter((c) => (c.preferred ? u.isPreferred : !0))
							.reduceRight(
								(c, n) => (c ? (c.kind.contains(n.kind) ? n : c) : n),
								void 0,
							);
					}
				};
				(e.$WAb = m), (e.$WAb = m = d = Ne([j(0, C.$uZ)], m));
			},
		)
