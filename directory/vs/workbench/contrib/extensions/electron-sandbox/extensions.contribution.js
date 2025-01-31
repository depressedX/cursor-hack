import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/contributions.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../browser/editor.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './runtimeExtensionsEditor.js';
import './debugExtensionHostAction.js';
import '../../../common/editor.js';
import '../../../common/contextkeys.js';
import '../common/runtimeExtensionsInput.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './extensionsActions.js';
import '../../../../platform/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../platform/ipc/electron-sandbox/services.js';
import '../../../../platform/extensionRecommendations/common/extensionRecommendationsIpc.js';
import '../../../../base/common/codicons.js';
import './remoteExtensionsInit.js';
import '../../../../platform/instantiation/common/extensions.js';
import './extensionProfileService.js';
import './extensionsAutoProfiler.js';
import '../../../../base/common/lifecycle.js';
define(
			de[4079],
			he([
				1, 0, 4, 30, 11, 55, 102, 31, 5, 192, 52, 1295, 3387, 44, 100, 985, 8,
				3285, 666, 230, 2707, 14, 4078, 20, 3631, 3732, 3,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*platform*/,
				w /*actions*/,
				E /*contributions*/,
				C /*descriptors*/,
				d /*commands*/,
				m /*instantiation*/,
				r /*editor*/,
				u /*lifecycle*/,
				a /*runtimeExtensionsEditor*/,
				h /*debugExtensionHostAction*/,
				c /*editor*/,
				n /*contextkeys*/,
				g /*runtimeExtensionsInput*/,
				p /*contextkey*/,
				o /*extensionsActions*/,
				f /*extensionRecommendations*/,
				b /*services*/,
				s /*extensionRecommendationsIpc*/,
				l /*codicons*/,
				y /*remoteExtensionsInit*/,
				$ /*extensions*/,
				v /*extensionProfileService*/,
				S /*extensionsAutoProfiler*/,
				I /*lifecycle*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, $.$lK)(a.$Yfd, v.$_fd, $.InstantiationType.Delayed),
					i.$Io
						.as(c.$a1.EditorPane)
						.registerEditorPane(
							r.$vVb.create(a.$2fd, a.$2fd.ID, (0, t.localize)(6612, null)),
							[new C.$Ji(g.$UTc)],
						);
				class T {
					canSerialize(D) {
						return !0;
					}
					serialize(D) {
						return "";
					}
					deserialize(D) {
						return g.$UTc.instance;
					}
				}
				i.$Io.as(c.$a1.EditorFactory).registerEditorSerializer(g.$UTc.ID, T);
				let P = class extends I.$1c {
					constructor(D, M) {
						super(),
							M.registerChannel(
								"extensionRecommendationNotification",
								new s.$G9c(D),
							),
							this.D((0, w.$4X)(o.$8fd)),
							this.D((0, w.$4X)(o.$9fd));
					}
				};
				P = Ne([j(0, f.$HTc), j(1, b.$Vbd)], P);
				const k = i.$Io.as(E.Extensions.Workbench);
				k.registerWorkbenchContribution(P, u.LifecyclePhase.Restored),
					k.registerWorkbenchContribution(S.$agd, u.LifecyclePhase.Eventually),
					k.registerWorkbenchContribution(y.$0fd, u.LifecyclePhase.Restored),
					k.registerWorkbenchContribution(h.$7fd, u.LifecyclePhase.Restored),
					d.$fk.registerCommand(h.$6fd.ID, (L, ...D) =>
						L.get(m.$Li).createInstance(h.$6fd).run(D),
					),
					d.$fk.registerCommand(a.$3fd.ID, (L) => {
						L.get(m.$Li).createInstance(a.$3fd, a.$3fd.ID, a.$3fd.LABEL).run();
					}),
					d.$fk.registerCommand(a.$4fd.ID, (L) => {
						L.get(m.$Li).createInstance(a.$4fd, a.$4fd.ID, a.$4fd.LABEL).run();
					}),
					d.$fk.registerCommand(a.$5fd.ID, (L) => {
						L.get(m.$Li).createInstance(a.$5fd, a.$5fd.ID, a.$5fd.LABEL).run();
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: h.$6fd.ID,
							title: h.$6fd.LABEL,
							icon: l.$ak.debugStart,
						},
						group: "navigation",
						when: n.$TPb.isEqualTo(a.$2fd.ID),
					}),
					w.$ZX.appendMenuItem(w.$XX.CommandPalette, {
						command: {
							id: h.$6fd.ID,
							title: (0, t.localize)(6613, null),
							category: (0, t.localize)(6614, null),
							icon: l.$ak.debugStart,
						},
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: a.$3fd.ID,
							title: a.$3fd.LABEL,
							icon: l.$ak.circleFilled,
						},
						group: "navigation",
						when: p.$Kj.and(
							n.$TPb.isEqualTo(a.$2fd.ID),
							a.$Zfd.notEqualsTo("running"),
						),
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: a.$4fd.ID,
							title: a.$4fd.LABEL,
							icon: l.$ak.debugStop,
						},
						group: "navigation",
						when: p.$Kj.and(
							n.$TPb.isEqualTo(a.$2fd.ID),
							a.$Zfd.isEqualTo("running"),
						),
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: a.$5fd.ID,
							title: a.$5fd.LABEL,
							icon: l.$ak.saveAll,
							precondition: a.$1fd,
						},
						group: "navigation",
						when: p.$Kj.and(n.$TPb.isEqualTo(a.$2fd.ID)),
					});
			},
		)
