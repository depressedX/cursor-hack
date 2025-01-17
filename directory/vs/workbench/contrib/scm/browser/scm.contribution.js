import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import './dirtydiffDecorator.js';
import '../common/scm.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import './activity.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../common/scmService.js';
import '../../../common/views.js';
import './scmViewPaneContainer.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import './scmViewPane.js';
import './scmViewService.js';
import './scmRepositoriesViewPane.js';
import '../../../../editor/contrib/suggest/browser/suggest.js';
import '../../workspace/common/workspace.js';
import '../common/quickDiff.js';
import '../common/quickDiffService.js';
import '../../../../base/browser/dom.js';
import './workingSet.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/list/browser/listService.js';
import './util.js';
import './scmHistoryViewPane.js';
define(
			de[4035],
			he([
				1, 0, 4, 30, 55, 1884, 258, 27, 11, 3741, 52, 81, 8, 31, 43, 20, 3131,
				60, 4034, 102, 172, 14, 79, 1947, 1810, 3838, 373, 1787, 803, 3129, 7,
				3404, 89, 93, 614, 4033,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					s.$9M.registerLanguage({
						id: "scminput",
						extensions: [],
						aliases: [],
						mimetypes: ["text/x-scm-input"],
					}),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(E.$gnc, u.LifecyclePhase.Restored);
				const O = (0, y.$$O)(
						"source-control-view-icon",
						l.$ak.sourceControl,
						(0, t.localize)(8993, null),
					),
					B = i.$Io
						.as(o.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: C.$$6,
								title: (0, t.localize2)(9058, "Source Control"),
								ctorDescriptor: new b.$Ji(f.$MPc),
								storageId: "workbench.scm.views.state",
								icon: O,
								alwaysUseContainerInfo: !0,
								order: 2,
								hideIfEmpty: !0,
							},
							o.ViewContainerLocation.Sidebar,
							{ doNotRegisterOpenCommand: !0 },
						),
					U = i.$Io.as(o.Extensions.ViewsRegistry);
				U.registerViewWelcomeContent(C.$_6, {
					content: (0, t.localize)(8994, null),
					when: "default",
				}),
					U.registerViewWelcomeContent(C.$_6, {
						content: (0, t.localize)(8995, null),
						when: h.$Kj.and(
							h.$Kj.equals("scm.providerCount", 0),
							T.$eQc.IsEnabled,
							T.$eQc.IsTrusted.toNegated(),
						),
					}),
					U.registerViewWelcomeContent(C.$_6, {
						content: `[${(0, t.localize)(8996, null)}](command:${T.$fQc})`,
						when: h.$Kj.and(
							h.$Kj.equals("scm.providerCount", 0),
							T.$eQc.IsEnabled,
							T.$eQc.IsTrusted.toNegated(),
						),
					}),
					U.registerViews(
						[
							{
								id: C.$_6,
								name: (0, t.localize2)(9059, "Source Control"),
								ctorDescriptor: new b.$Ji($.$bQc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 40,
								order: -999,
								containerIcon: O,
								openCommandActionDescriptor: {
									id: B.id,
									mnemonicTitle: (0, t.localize)(8997, null),
									keybindings: {
										primary: 0,
										win: {
											primary:
												d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.KeyG,
										},
										linux: {
											primary:
												d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.KeyG,
										},
										mac: {
											primary:
												d.KeyMod.WinCtrl | d.KeyMod.Shift | d.KeyCode.KeyG,
										},
									},
									order: 2,
								},
							},
						],
						B,
					),
					U.registerViews(
						[
							{
								id: C.$a7,
								name: (0, t.localize2)(9060, "Source Control Repositories"),
								ctorDescriptor: new b.$Ji(S.$dQc),
								canToggleVisibility: !0,
								hideByDefault: !0,
								canMoveView: !0,
								weight: 20,
								order: -1e3,
								when: h.$Kj.and(
									h.$Kj.has("scm.providerCount"),
									h.$Kj.notEquals("scm.providerCount", 0),
								),
								containerIcon: O,
							},
						],
						B,
					),
					U.registerViews(
						[
							{
								id: C.$b7,
								name: (0, t.localize2)(9061, "Source Control Graph"),
								ctorDescriptor: new b.$Ji(R.$iQc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 40,
								order: 2,
								when: h.$Kj.and(
									h.$Kj.has("scm.providerCount"),
									h.$Kj.notEquals("scm.providerCount", 0),
								),
								containerIcon: O,
							},
						],
						B,
					),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(r.$JPc, u.LifecyclePhase.Restored),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(r.$KPc, u.LifecyclePhase.Restored),
					(0, w.$s6)(D.$hQc.ID, D.$hQc, w.WorkbenchPhase.AfterRestored),
					i.$Io
						.as(a.$No.Configuration)
						.registerConfiguration({
							id: "scm",
							order: 5,
							title: (0, t.localize)(8998, null),
							type: "object",
							scope: a.ConfigurationScope.RESOURCE,
							properties: {
								"scm.diffDecorations": {
									type: "string",
									enum: ["all", "gutter", "overview", "minimap", "none"],
									enumDescriptions: [
										(0, t.localize)(8999, null),
										(0, t.localize)(9e3, null),
										(0, t.localize)(9001, null),
										(0, t.localize)(9002, null),
										(0, t.localize)(9003, null),
									],
									default: "all",
									description: (0, t.localize)(9004, null),
								},
								"scm.diffDecorationsGutterWidth": {
									type: "number",
									enum: [1, 2, 3, 4, 5],
									default: 3,
									description: (0, t.localize)(9005, null),
								},
								"scm.diffDecorationsGutterVisibility": {
									type: "string",
									enum: ["always", "hover"],
									enumDescriptions: [
										(0, t.localize)(9006, null),
										(0, t.localize)(9007, null),
									],
									description: (0, t.localize)(9008, null),
									default: "always",
								},
								"scm.diffDecorationsGutterAction": {
									type: "string",
									enum: ["diff", "none"],
									enumDescriptions: [
										(0, t.localize)(9009, null),
										(0, t.localize)(9010, null),
									],
									description: (0, t.localize)(9011, null),
									default: "diff",
								},
								"scm.diffDecorationsGutterPattern": {
									type: "object",
									description: (0, t.localize)(9012, null),
									additionalProperties: !1,
									properties: {
										added: {
											type: "boolean",
											description: (0, t.localize)(9013, null),
										},
										modified: {
											type: "boolean",
											description: (0, t.localize)(9014, null),
										},
									},
									default: { added: !1, modified: !0 },
								},
								"scm.diffDecorationsIgnoreTrimWhitespace": {
									type: "string",
									enum: ["true", "false", "inherit"],
									enumDescriptions: [
										(0, t.localize)(9015, null),
										(0, t.localize)(9016, null),
										(0, t.localize)(9017, null),
									],
									description: (0, t.localize)(9018, null),
									default: "false",
								},
								"scm.alwaysShowActions": {
									type: "boolean",
									description: (0, t.localize)(9019, null),
									default: !1,
								},
								"scm.countBadge": {
									type: "string",
									enum: ["all", "focused", "off"],
									enumDescriptions: [
										(0, t.localize)(9020, null),
										(0, t.localize)(9021, null),
										(0, t.localize)(9022, null),
									],
									description: (0, t.localize)(9023, null),
									default: "all",
								},
								"scm.providerCountBadge": {
									type: "string",
									enum: ["hidden", "auto", "visible"],
									enumDescriptions: [
										(0, t.localize)(9024, null),
										(0, t.localize)(9025, null),
										(0, t.localize)(9026, null),
									],
									markdownDescription: (0, t.localize)(
										9027,
										null,
										"`#scm.alwaysShowRepositories#`",
									),
									default: "hidden",
								},
								"scm.defaultViewMode": {
									type: "string",
									enum: ["tree", "list"],
									enumDescriptions: [
										(0, t.localize)(9028, null),
										(0, t.localize)(9029, null),
									],
									description: (0, t.localize)(9030, null),
									default: "list",
								},
								"scm.defaultViewSortKey": {
									type: "string",
									enum: ["name", "path", "status"],
									enumDescriptions: [
										(0, t.localize)(9031, null),
										(0, t.localize)(9032, null),
										(0, t.localize)(9033, null),
									],
									description: (0, t.localize)(9034, null),
									default: "path",
								},
								"scm.autoReveal": {
									type: "boolean",
									description: (0, t.localize)(9035, null),
									default: !0,
								},
								"scm.inputFontFamily": {
									type: "string",
									markdownDescription: (0, t.localize)(9036, null),
									default: "default",
								},
								"scm.inputFontSize": {
									type: "number",
									markdownDescription: (0, t.localize)(9037, null),
									default: 13,
								},
								"scm.inputMaxLineCount": {
									type: "number",
									markdownDescription: (0, t.localize)(9038, null),
									minimum: 1,
									maximum: 50,
									default: 10,
								},
								"scm.inputMinLineCount": {
									type: "number",
									markdownDescription: (0, t.localize)(9039, null),
									minimum: 1,
									maximum: 50,
									default: 1,
								},
								"scm.alwaysShowRepositories": {
									type: "boolean",
									markdownDescription: (0, t.localize)(9040, null),
									default: !1,
								},
								"scm.repositories.sortOrder": {
									type: "string",
									enum: ["discovery time", "name", "path"],
									enumDescriptions: [
										(0, t.localize)(9041, null),
										(0, t.localize)(9042, null),
										(0, t.localize)(9043, null),
									],
									description: (0, t.localize)(9044, null),
									default: "discovery time",
								},
								"scm.repositories.visible": {
									type: "number",
									description: (0, t.localize)(9045, null),
									default: 10,
								},
								"scm.showActionButton": {
									type: "boolean",
									markdownDescription: (0, t.localize)(9046, null),
									default: !0,
								},
								"scm.showInputActionButton": {
									type: "boolean",
									markdownDescription: (0, t.localize)(9047, null),
									default: !0,
								},
								"scm.workingSets.enabled": {
									type: "boolean",
									description: (0, t.localize)(9048, null),
									default: !1,
								},
								"scm.workingSets.default": {
									type: "string",
									enum: ["empty", "current"],
									enumDescriptions: [
										(0, t.localize)(9049, null),
										(0, t.localize)(9050, null),
									],
									description: (0, t.localize)(9051, null),
									default: "current",
								},
								"scm.compactFolders": {
									type: "boolean",
									description: (0, t.localize)(9052, null),
									default: !0,
								},
							},
						}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "scm.acceptInput",
						metadata: { description: (0, t.localize)(9053, null), args: [] },
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: h.$Kj.has("scmRepository"),
						primary: d.KeyMod.CtrlCmd | d.KeyCode.Enter,
						handler: (x) => {
							const V = x
								.get(h.$6j)
								.getContext((0, L.$Jgb)())
								.getValue("scmRepository");
							if (!V) return Promise.resolve(null);
							const K = x.get(C.$c7).getRepository(V);
							if (!K?.provider.acceptInputCommand) return Promise.resolve(null);
							const J = K.provider.acceptInputCommand.id,
								W = K.provider.acceptInputCommand.arguments;
							return x.get(c.$ek).executeCommand(J, ...(W || []));
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "scm.clearInput",
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: h.$Kj.and(
							h.$Kj.has("scmRepository"),
							I.$YCb.Visible.toNegated(),
						),
						primary: d.KeyCode.Escape,
						handler: async (x) => {
							const H = x.get(C.$c7),
								G = x
									.get(h.$6j)
									.getContext((0, L.$Jgb)())
									.getValue("scmRepository");
							(G ? H.getRepository(G) : void 0)?.input.setValue("", !0);
						},
					});
				const z = {
						description: { description: (0, t.localize)(9054, null), args: [] },
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: (x) => {
							const H = x.get(h.$6j),
								q = x.get(C.$c7),
								G = H.getContext((0, L.$Jgb)()).getValue("scmRepository");
							(G ? q.getRepository(G) : void 0)?.input.showNextHistoryValue();
						},
					},
					F = {
						description: { description: (0, t.localize)(9055, null), args: [] },
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: (x) => {
							const H = x.get(h.$6j),
								q = x.get(C.$c7),
								G = H.getContext((0, L.$Jgb)()).getValue("scmRepository");
							(G
								? q.getRepository(G)
								: void 0
							)?.input.showPreviousHistoryValue();
						},
					};
				n.$TX.registerCommandAndKeybindingRule({
					...z,
					id: "scm.viewNextCommit",
					when: h.$Kj.and(
						h.$Kj.has("scmRepository"),
						h.$Kj.has("scmInputIsInLastPosition"),
						I.$YCb.Visible.toNegated(),
					),
					primary: d.KeyCode.DownArrow,
				}),
					n.$TX.registerCommandAndKeybindingRule({
						...F,
						id: "scm.viewPreviousCommit",
						when: h.$Kj.and(
							h.$Kj.has("scmRepository"),
							h.$Kj.has("scmInputIsInFirstPosition"),
							I.$YCb.Visible.toNegated(),
						),
						primary: d.KeyCode.UpArrow,
					}),
					n.$TX.registerCommandAndKeybindingRule({
						...z,
						id: "scm.forceViewNextCommit",
						when: h.$Kj.has("scmRepository"),
						primary: d.KeyMod.Alt | d.KeyCode.DownArrow,
					}),
					n.$TX.registerCommandAndKeybindingRule({
						...F,
						id: "scm.forceViewPreviousCommit",
						when: h.$Kj.has("scmRepository"),
						primary: d.KeyMod.Alt | d.KeyCode.UpArrow,
					}),
					c.$fk.registerCommand(
						"scm.openInIntegratedTerminal",
						async (x, ...H) => {
							if (!H || H.length === 0) return;
							const q = x.get(c.$ek),
								V = x.get(N.$fMb);
							let G = H.length === 1 ? H[0] : void 0;
							if (!G) {
								const K = V.lastFocusedList,
									J = K?.getHTMLElement();
								if (K instanceof N.$yMb && J && (0, L.$Kgb)(J)) {
									const [W] = K.getFocus(),
										X = K.element(W);
									(0, A.$oPc)(X) && (G = X.provider);
								}
							}
							G?.rootUri &&
								(await q.executeCommand("openInIntegratedTerminal", G.rootUri));
						},
					),
					c.$fk.registerCommand("scm.openInTerminal", async (x, H) => {
						if (!H || !H.rootUri) return;
						await x.get(c.$ek).executeCommand("openInTerminal", H.rootUri);
					}),
					m.$ZX.appendMenuItem(m.$XX.SCMSourceControl, {
						group: "100_end",
						command: {
							id: "scm.openInTerminal",
							title: (0, t.localize)(9056, null),
						},
						when: h.$Kj.and(
							h.$Kj.equals("scmProviderHasRootUri", !0),
							h.$Kj.or(
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"external",
								),
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"both",
								),
							),
						),
					}),
					m.$ZX.appendMenuItem(m.$XX.SCMSourceControl, {
						group: "100_end",
						command: {
							id: "scm.openInIntegratedTerminal",
							title: (0, t.localize)(9057, null),
						},
						when: h.$Kj.and(
							h.$Kj.equals("scmProviderHasRootUri", !0),
							h.$Kj.or(
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"integrated",
								),
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"both",
								),
							),
						),
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusPreviousInput",
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: $.$aQc.RepositoryVisibilityCount.notEqualsTo(0),
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusPreviousInput();
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusNextInput",
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: $.$aQc.RepositoryVisibilityCount.notEqualsTo(0),
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusNextInput();
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusPreviousResourceGroup",
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusPreviousResourceGroup();
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusNextResourceGroup",
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusNextResourceGroup();
						},
					}),
					(0, g.$lK)(C.$c7, p.$LPc, g.InstantiationType.Delayed),
					(0, g.$lK)(C.$d7, v.$UPc, g.InstantiationType.Delayed),
					(0, g.$lK)(P.$8mc, k.$gQc, g.InstantiationType.Delayed);
			},
		),
		