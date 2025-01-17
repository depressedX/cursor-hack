import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../nls.js';
import '../../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/commands/common/commands.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../../platform/storage/common/storage.js';
import '../../../../../common/contributions.js';
import '../../../../../common/memento.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookContextKeys.js';
import '../../../common/notebookEditorInput.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
define(
			de[3481],
			he([
				1, 0, 3, 4, 99, 11, 31, 10, 8, 30, 21, 55, 282, 70, 176, 360, 18, 52,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XFc = void 0);
				const f = "hasOpenedNotebook",
					b = "hasShownNotebookGettingStarted";
				let s = class extends t.$1c {
					constructor(y, $, v, S, I) {
						super();
						const T = n.$jJb.bindTo(v),
							P = new h.$eEb("notebookGettingStarted2", $),
							k = P.getMemento(u.StorageScope.PROFILE, u.StorageTarget.USER);
						k[f] && T.set(!0);
						const L = I.getValue(c.$56.openGettingStarted) && !k[b];
						if (!k[f] || L) {
							const D = () => {
								T.set(!0),
									(k[f] = !0),
									L &&
										(S.executeCommand(
											"workbench.action.openWalkthrough",
											{ category: "notebooks", step: "notebookProfile" },
											!0,
										),
										(k[b] = !0)),
									P.saveMemento();
							};
							if (y.activeEditor?.typeId === g.$TIb.ID) {
								D();
								return;
							}
							const M = this.D(
								y.onDidActiveEditorChange(() => {
									y.activeEditor?.typeId === g.$TIb.ID && (M.dispose(), D());
								}),
							);
						}
					}
				};
				(e.$XFc = s),
					(e.$XFc = s =
						Ne(
							[j(0, p.$IY), j(1, u.$lq), j(2, m.$6j), j(3, C.$ek), j(4, d.$gj)],
							s,
						)),
					r.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(s, o.LifecyclePhase.Restored),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.gettingStarted",
									title: (0, i.localize2)(
										7776,
										"Reset notebook getting started",
									),
									f1: !0,
									precondition: m.$Kj.equals(
										`config.${c.$56.openGettingStarted}`,
										!0,
									),
									category: w.$ck.Developer,
								});
							}
							run(y) {
								const $ = y.get(u.$lq),
									v = new h.$eEb("notebookGettingStarted", $),
									S = v.getMemento(
										u.StorageScope.PROFILE,
										u.StorageTarget.USER,
									);
								(S[f] = void 0), v.saveMemento();
							}
						},
					);
			},
		),
		