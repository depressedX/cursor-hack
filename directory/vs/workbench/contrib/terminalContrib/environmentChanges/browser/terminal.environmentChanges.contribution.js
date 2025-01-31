import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/event.js';
import '../../../../../editor/common/services/model.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/terminal/common/environmentVariable.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/common/terminal.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[4042],
			he([1, 0, 9, 6, 67, 42, 4, 5, 1654, 363, 145, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*event*/,
 w /*model*/,
 E /*resolverService*/,
 C /*nls*/,
 d /*instantiation*/,
 m /*environmentVariable*/,
 r /*terminalActions*/,
 u /*terminal*/,
 a /*editorService*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, r.$GUc)({
						id: u.TerminalCommandId.ShowEnvironmentContributions,
						title: (0, C.localize2)(10513, "Show Environment Contributions"),
						run: async (o, f, b, s) => {
							const l = o.extEnvironmentVariableCollection;
							if (l) {
								const y = s,
									v = b.get(d.$Li).createInstance(p),
									S = b.get(a.$IY),
									I = new Date().getTime(),
									T = y?.workspaceFolder ? ` - ${y.workspaceFolder.name}` : "",
									P = await v.provideTextContent(
										t.URI.from({
											scheme: p.scheme,
											path: `Environment changes${T}`,
											fragment: c(l, y),
											query: `environment-collection-${I}`,
										}),
									);
								P && (await S.openEditor({ resource: P.uri }));
							}
						},
					});
				function c(o, f) {
					let b = `# ${(0, C.localize)(10510, null)}`;
					const s = o.getDescriptionMap(void 0),
						l = o.getDescriptionMap(f);
					for (const [y, $] of o.collections) {
						(b += `

## ${(0, C.localize)(10511, null, y)}`),
							(b += `
`);
						const v = s.get(y);
						v &&
							(b += `
${v}
`);
						const S = l.get(y);
						if (S) {
							const I = v ? ` (${(0, C.localize)(10512, null)})` : "";
							b += `
${S}${I}
`;
						}
						for (const I of $.map.values())
							n(I, f) !== !1 &&
								(b += `
- \`${g(I.type, I.value, I.variable)}\``);
					}
					return b;
				}
				function n(o, f) {
					return !!(
						!o.scope ||
						(o.scope.workspaceFolder &&
							f?.workspaceFolder &&
							o.scope.workspaceFolder.index === f.workspaceFolder.index)
					);
				}
				function g(o, f, b) {
					switch (o) {
						case m.EnvironmentVariableMutatorType.Prepend:
							return `${b}=${f}\${env:${b}}`;
						case m.EnvironmentVariableMutatorType.Append:
							return `${b}=\${env:${b}}${f}`;
						default:
							return `${b}=${f}`;
					}
				}
				let p = class {
					static {
						h = this;
					}
					static {
						this.scheme = "ENVIRONMENT_CHANGES_COLLECTION";
					}
					constructor(f, b) {
						(this.a = b), f.registerTextModelContentProvider(h.scheme, this);
					}
					async provideTextContent(f) {
						const b = this.a.getModel(f);
						return b && !b.isDisposed()
							? b
							: this.a.createModel(
									f.fragment,
									{ languageId: "markdown", onDidChange: i.Event.None },
									f,
									!1,
								);
					}
				};
				p = h = Ne([j(0, E.$MO), j(1, w.$QO)], p);
			},
		)
