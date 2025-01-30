import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/action/common/action.js';
define(
			de[3535],
			he([1, 0, 50, 9, 252, 67, 61, 4, 63, 131, 31, 30, 81, 46, 11, 39, 599]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*uri*/,
 w /*getIconClasses*/,
 E /*model*/,
 C /*language*/,
 d /*nls*/,
 m /*quickInput*/,
 r /*preferences*/,
 u /*commands*/,
 a /*platform*/,
 h /*configurationRegistry*/,
 c /*editorExtensions*/,
 n /*actions*/,
 g /*keybinding*/,
 p /*action*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pCc = void 0),
					(d = mt(d));
				let o = class extends t.$rj {
					static {
						this.ID = "workbench.action.configureLanguageBasedSettings";
					}
					static {
						this.LABEL = d.localize2(
							8437,
							"Configure Language Specific Settings...",
						);
					}
					constructor(b, s, l, y, $, v) {
						super(b, s), (this.a = l), (this.b = y), (this.c = $), (this.f = v);
					}
					async run() {
						const s = this.b
							.getSortedRegisteredLanguageNames()
							.map(({ languageName: l, languageId: y }) => {
								const $ = d.localize(8435, null, y);
								let v;
								const S = this.b.getExtensions(y);
								if (S.length) v = i.URI.file(S[0]);
								else {
									const I = this.b.getFilenames(y);
									I.length && (v = i.URI.file(I[0]));
								}
								return {
									label: l,
									iconClasses: (0, w.$BDb)(this.a, this.b, v),
									description: $,
								};
							});
						await this.c
							.pick(s, { placeHolder: d.localize(8436, null) })
							.then((l) => {
								if (l) {
									const y = this.b.getLanguageIdByLanguageName(l.label);
									if (typeof y == "string")
										return this.f.openLanguageSpecificSettings(y);
								}
							});
					}
				};
				(e.$pCc = o),
					(e.$pCc = o =
						Ne([j(2, E.$QO), j(3, C.$nM), j(4, m.$DJ), j(5, r.$7Z)], o)),
					u.$fk.registerCommand({
						id: "_getAllSettings",
						handler: () =>
							a.$Io.as(h.$No.Configuration).getConfigurationProperties(),
					}),
					u.$fk.registerCommand("_getAllCommands", function (f) {
						const b = f.get(g.$uZ),
							s = [];
						for (const l of c.EditorExtensionsRegistry.getEditorActions()) {
							const y = b.lookupKeybinding(l.id);
							s.push({
								command: l.id,
								label: l.label,
								description: (0, p.$gk)(l.metadata?.description)
									? l.metadata.description.value
									: l.metadata?.description,
								precondition: l.precondition?.serialize(),
								keybinding: y?.getLabel() ?? "Not set",
							});
						}
						for (const l of n.$ZX.getMenuItems(n.$XX.CommandPalette))
							if ((0, n.$VX)(l)) {
								const y =
										typeof l.command.title == "string"
											? l.command.title
											: l.command.title.value,
									$ = l.command.category
										? typeof l.command.category == "string"
											? l.command.category
											: l.command.category.value
										: void 0,
									v = $ ? `${$}: ${y}` : y,
									S = (0, p.$gk)(l.command.metadata?.description)
										? l.command.metadata.description.value
										: l.command.metadata?.description,
									I = b.lookupKeybinding(l.command.id);
								s.push({
									command: l.command.id,
									label: v,
									description: S,
									precondition: l.when?.serialize(),
									keybinding: I?.getLabel() ?? "Not set",
								});
							}
						return s;
					});
			},
		),
		