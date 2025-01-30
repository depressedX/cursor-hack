import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/platform.js';
import '../../../../editor/contrib/quickAccess/browser/gotoLineQuickAccess.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../browser/quickaccess.js';
import '../../../common/views.js';
import '../../codeEditor/browser/quickaccess/gotoSymbolQuickAccess.js';
import './anythingQuickAccess.js';
import './replaceContributions.js';
import './notebookSearch/notebookSearchContributions.js';
import './searchIcons.js';
import './searchView.js';
import './searchWidget.js';
import './symbolsQuickAccess.js';
import '../common/searchHistoryService.js';
import './searchModel.js';
import '../../../services/search/common/search.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/types.js';
import '../common/search.js';
import '../common/constants.js';
import './quickTextSearch/textSearchQuickAccess.js';
import '../../../common/configuration.js';
import './searchActionsCopy.js';
import './searchActionsFind.js';
import './searchActionsNav.js';
import './searchActionsRemoveReplace.js';
import './searchActionsSymbol.js';
import './searchActionsTopBar.js';
import './searchActionsTextQuickAccess.js';
define(
			de[4173],
			he([
				1, 0, 27, 12, 1666, 4, 81, 8, 102, 20, 348, 30, 239, 473, 60, 1313, 721,
				4164, 3597, 561, 1068, 1367, 827, 1258, 405, 186, 31, 28, 568, 377,
				1972, 224, 4165, 1970, 4171, 4166, 3134, 4167, 4172,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*keyCodes*/,
				i /*platform*/,
				w /*gotoLineQuickAccess*/,
				E /*nls*/,
				C /*configurationRegistry*/,
				d /*contextkey*/,
				m /*descriptors*/,
				r /*extensions*/,
				u /*quickAccess*/,
				a /*platform*/,
				h /*viewPaneContainer*/,
				c /*quickaccess*/,
				n /*views*/,
				g /*gotoSymbolQuickAccess*/,
				p /*anythingQuickAccess*/,
				o /*replaceContributions*/,
				f /*notebookSearchContributions*/,
				b /*searchIcons*/,
				s /*searchView*/,
				l /*searchWidget*/,
				y /*symbolsQuickAccess*/,
				$ /*searchHistoryService*/,
				v /*searchModel*/,
				S /*search*/,
				I /*commands*/,
				T /*types*/,
				P /*search*/,
				k /*constants*/,
				L /*textSearchQuickAccess*/,
				D /*configuration*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(i = mt(i)),
					(E = mt(E)),
					(k = mt(k)),
					(0, r.$lK)(v.$TNc, v.$SNc, r.InstantiationType.Delayed),
					(0, r.$lK)($.$bPc, $.$cPc, r.InstantiationType.Delayed),
					(0, o.$1Nc)(),
					(0, f.$3Nc)(),
					(0, l.$GOc)();
				const M = "search.mode",
					N = a.$Io
						.as(n.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: S.$j7,
								title: E.localize2(9224, "Search"),
								ctorDescriptor: new m.$Ji(h.$ZSb, [
									S.$j7,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								hideIfEmpty: !0,
								icon: b.$gOc,
								order: 1,
							},
							n.ViewContainerLocation.Sidebar,
							{ doNotRegisterOpenCommand: !0 },
						),
					A = {
						id: S.$l7,
						containerIcon: b.$gOc,
						name: E.localize2(9225, "Search"),
						ctorDescriptor: new m.$Ji(s.$dPc),
						canToggleVisibility: !1,
						canMoveView: !0,
						openCommandActionDescriptor: {
							id: N.id,
							mnemonicTitle: E.localize(9153, null),
							keybindings: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyF,
								when: d.$Kj.regex("neverMatch", /doesNotMatch/),
							},
							order: 1,
						},
					};
				a.$Io.as(n.Extensions.ViewsRegistry).registerViews([A], N);
				const R = a.$Io.as(u.$1r.Quickaccess);
				R.registerQuickAccessProvider({
					ctor: p.$S9b,
					prefix: p.$S9b.PREFIX,
					placeholder: E.localize(9154, null, w.$uNc.PREFIX, g.$n9b.PREFIX),
					contextKey: c.$h9b,
					helpEntries: [
						{
							description: E.localize(9155, null),
							commandId: "workbench.action.quickOpen",
							commandCenterOrder: 10,
						},
					],
				}),
					R.registerQuickAccessProvider({
						ctor: y.$Ifc,
						prefix: y.$Ifc.PREFIX,
						placeholder: E.localize(9156, null),
						contextKey: "inWorkspaceSymbolsPicker",
						helpEntries: [
							{
								description: E.localize(9157, null),
								commandId: k.SearchCommandIds.ShowAllSymbolsActionId,
							},
						],
					}),
					R.registerQuickAccessProvider({
						ctor: L.$iPc,
						prefix: L.$hPc,
						contextKey: "inTextSearchPicker",
						placeholder: E.localize(9158, null),
						helpEntries: [
							{
								description: E.localize(9159, null),
								commandId: k.SearchCommandIds.QuickTextSearchActionId,
								commandCenterOrder: 25,
							},
						],
					}),
					a.$Io.as(C.$No.Configuration).registerConfiguration({
						id: "search",
						order: 13,
						title: E.localize(9160, null),
						type: "object",
						properties: {
							[S.$n7]: {
								type: "object",
								markdownDescription: E.localize(9161, null),
								default: {
									"**/node_modules": !0,
									"**/bower_components": !0,
									"**/*.code-search": !0,
								},
								additionalProperties: {
									anyOf: [
										{ type: "boolean", description: E.localize(9162, null) },
										{
											type: "object",
											properties: {
												when: {
													type: "string",
													pattern: "\\w*\\$\\(basename\\)\\w*",
													default: "$(basename).ext",
													markdownDescription: E.localize(9163, null),
												},
											},
										},
									],
								},
								scope: C.ConfigurationScope.RESOURCE,
							},
							[M]: {
								type: "string",
								enum: ["view", "reuseEditor", "newEditor"],
								default: "view",
								markdownDescription: E.localize(9164, null),
								enumDescriptions: [
									E.localize(9165, null),
									E.localize(9166, null),
									E.localize(9167, null),
								],
							},
							"search.useRipgrep": {
								type: "boolean",
								description: E.localize(9168, null),
								deprecationMessage: E.localize(9169, null),
								default: !0,
							},
							"search.maintainFileSearchCache": {
								type: "boolean",
								deprecationMessage: E.localize(9170, null),
								description: E.localize(9171, null),
								default: !1,
							},
							"search.useIgnoreFiles": {
								type: "boolean",
								markdownDescription: E.localize(9172, null),
								default: !0,
								scope: C.ConfigurationScope.RESOURCE,
							},
							"search.useGlobalIgnoreFiles": {
								type: "boolean",
								markdownDescription: E.localize(
									9173,
									null,
									"`#search.useIgnoreFiles#`",
								),
								default: !1,
								scope: C.ConfigurationScope.RESOURCE,
							},
							"search.useParentIgnoreFiles": {
								type: "boolean",
								markdownDescription: E.localize(
									9174,
									null,
									"`#search.useIgnoreFiles#`",
								),
								default: !1,
								scope: C.ConfigurationScope.RESOURCE,
							},
							"search.quickOpen.includeSymbols": {
								type: "boolean",
								description: E.localize(9175, null),
								default: !1,
							},
							"search.ripgrep.maxThreads": {
								type: "number",
								description: E.localize(9176, null),
								default: 0,
							},
							"search.quickOpen.includeHistory": {
								type: "boolean",
								description: E.localize(9177, null),
								default: !0,
							},
							"search.quickOpen.history.filterSortOrder": {
								type: "string",
								enum: ["default", "recency"],
								default: "default",
								enumDescriptions: [
									E.localize(9178, null),
									E.localize(9179, null),
								],
								description: E.localize(9180, null),
							},
							"search.followSymlinks": {
								type: "boolean",
								description: E.localize(9181, null),
								default: !0,
							},
							"search.smartCase": {
								type: "boolean",
								description: E.localize(9182, null),
								default: !1,
							},
							"search.globalFindClipboard": {
								type: "boolean",
								default: !1,
								description: E.localize(9183, null),
								included: i.$m,
							},
							"search.location": {
								type: "string",
								enum: ["sidebar", "panel"],
								default: "sidebar",
								description: E.localize(9184, null),
								deprecationMessage: E.localize(9185, null),
							},
							"search.maxResults": {
								type: ["number", "null"],
								default: S.$o7,
								markdownDescription: E.localize(9186, null),
							},
							"search.collapseResults": {
								type: "string",
								enum: ["auto", "alwaysCollapse", "alwaysExpand"],
								enumDescriptions: [E.localize(9187, null), "", ""],
								default: "alwaysExpand",
								description: E.localize(9188, null),
							},
							"search.useReplacePreview": {
								type: "boolean",
								default: !0,
								description: E.localize(9189, null),
							},
							"search.showLineNumbers": {
								type: "boolean",
								default: !1,
								description: E.localize(9190, null),
							},
							"search.usePCRE2": {
								type: "boolean",
								default: !1,
								description: E.localize(9191, null),
								deprecationMessage: E.localize(9192, null),
							},
							"search.actionsPosition": {
								type: "string",
								enum: ["auto", "right"],
								enumDescriptions: [
									E.localize(9193, null),
									E.localize(9194, null),
								],
								default: "right",
								description: E.localize(9195, null),
							},
							"search.searchOnType": {
								type: "boolean",
								default: !0,
								description: E.localize(9196, null),
							},
							"search.seedWithNearestWord": {
								type: "boolean",
								default: !1,
								description: E.localize(9197, null),
							},
							"search.seedOnFocus": {
								type: "boolean",
								default: !1,
								markdownDescription: E.localize(9198, null),
							},
							"search.searchOnTypeDebouncePeriod": {
								type: "number",
								default: 300,
								markdownDescription: E.localize(
									9199,
									null,
									"`#search.searchOnType#`",
								),
							},
							"search.searchEditor.doubleClickBehaviour": {
								type: "string",
								enum: ["selectWord", "goToLocation", "openLocationToSide"],
								default: "goToLocation",
								enumDescriptions: [
									E.localize(9200, null),
									E.localize(9201, null),
									E.localize(9202, null),
								],
								markdownDescription: E.localize(9203, null),
							},
							"search.searchEditor.singleClickBehaviour": {
								type: "string",
								enum: ["default", "peekDefinition"],
								default: "default",
								enumDescriptions: [
									E.localize(9204, null),
									E.localize(9205, null),
								],
								markdownDescription: E.localize(9206, null),
							},
							"search.searchEditor.reusePriorSearchConfiguration": {
								type: "boolean",
								default: !1,
								markdownDescription: E.localize(9207, null),
							},
							"search.searchEditor.defaultNumberOfContextLines": {
								type: ["number", "null"],
								default: 1,
								markdownDescription: E.localize(9208, null),
							},
							"search.searchEditor.focusResultsOnSearch": {
								type: "boolean",
								default: !1,
								markdownDescription: E.localize(9209, null),
							},
							"search.sortOrder": {
								type: "string",
								enum: [
									S.SearchSortOrder.Default,
									S.SearchSortOrder.FileNames,
									S.SearchSortOrder.Type,
									S.SearchSortOrder.Modified,
									S.SearchSortOrder.CountDescending,
									S.SearchSortOrder.CountAscending,
								],
								default: S.SearchSortOrder.Default,
								enumDescriptions: [
									E.localize(9210, null),
									E.localize(9211, null),
									E.localize(9212, null),
									E.localize(9213, null),
									E.localize(9214, null),
									E.localize(9215, null),
								],
								description: E.localize(9216, null),
							},
							"search.decorations.colors": {
								type: "boolean",
								description: E.localize(9217, null),
								default: !0,
							},
							"search.decorations.badges": {
								type: "boolean",
								description: E.localize(9218, null),
								default: !0,
							},
							"search.defaultViewMode": {
								type: "string",
								enum: [S.ViewMode.Tree, S.ViewMode.List],
								default: S.ViewMode.List,
								enumDescriptions: [
									E.localize(9219, null),
									E.localize(9220, null),
								],
								description: E.localize(9221, null),
							},
							"search.quickAccess.preserveInput": {
								type: "boolean",
								description: E.localize(9222, null),
								default: !1,
							},
							"search.experimental.closedNotebookRichContentResults": {
								type: "boolean",
								description: E.localize(9223, null),
								default: !1,
							},
						},
					}),
					I.$fk.registerCommand(
						"_executeWorkspaceSymbolProvider",
						async function (B, ...U) {
							const [z] = U;
							return (
								(0, T.$vg)(typeof z == "string"),
								(await (0, P.$O7)(z)).map((x) => x.symbol)
							);
						},
					),
					a.$Io
						.as(D.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "search.experimental.quickAccess.preserveInput",
								migrateFn: (B, U) => [
									["search.quickAccess.preserveInput", { value: B }],
									[
										"search.experimental.quickAccess.preserveInput",
										{ value: void 0 },
									],
								],
							},
						]);
			},
		),
		