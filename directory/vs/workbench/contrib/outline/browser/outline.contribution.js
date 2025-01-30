import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../common/views.js';
import './outlinePane.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../files/browser/explorerViewlet.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../services/outline/browser/outline.js';
import './outline.js';
import './outlineActions.js';
define(
			de[4303],
			he([1, 0, 4, 60, 3834, 30, 81, 864, 102, 14, 79, 475, 802, 3833]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*views*/,
 w /*outlinePane*/,
 E /*platform*/,
 C /*configurationRegistry*/,
 d /*explorerViewlet*/,
 m /*descriptors*/,
 r /*codicons*/,
 u /*iconRegistry*/,
 a /*outline*/,
 h /*outline*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const c = (0, u.$$O)(
					"outline-view-icon",
					r.$ak.symbolClass,
					(0, t.localize)(8249, null),
				);
				E.$Io
					.as(i.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: h.IOutlinePane.Id,
								name: (0, t.localize2)(8284, "Outline"),
								containerIcon: c,
								ctorDescriptor: new m.$Ji(w.$2Yc),
								canToggleVisibility: !0,
								canMoveView: !0,
								hideByDefault: !1,
								collapsed: !0,
								order: 2,
								weight: 30,
								focusCommand: { id: "outline.focus" },
							},
						],
						d.$sAc,
					),
					E.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							id: "outline",
							order: 117,
							title: (0, t.localize)(8250, null),
							type: "object",
							properties: {
								[a.OutlineConfigKeys.icons]: {
									description: (0, t.localize)(8251, null),
									type: "boolean",
									default: !0,
								},
								[a.OutlineConfigKeys.collapseItems]: {
									description: (0, t.localize)(8252, null),
									type: "string",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									enum: ["alwaysCollapse", "alwaysExpand"],
									enumDescriptions: [
										(0, t.localize)(8253, null),
										(0, t.localize)(8254, null),
									],
									default: "alwaysExpand",
								},
								[a.OutlineConfigKeys.problemsEnabled]: {
									markdownDescription: (0, t.localize)(
										8255,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
								[a.OutlineConfigKeys.problemsColors]: {
									markdownDescription: (0, t.localize)(
										8256,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
								[a.OutlineConfigKeys.problemsBadges]: {
									markdownDescription: (0, t.localize)(
										8257,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
								"outline.showFiles": {
									type: "boolean",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									default: !0,
									markdownDescription: (0, t.localize)(8258, null),
								},
								"outline.showModules": {
									type: "boolean",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									default: !0,
									markdownDescription: (0, t.localize)(8259, null),
								},
								"outline.showNamespaces": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8260, null),
								},
								"outline.showPackages": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8261, null),
								},
								"outline.showClasses": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8262, null),
								},
								"outline.showMethods": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8263, null),
								},
								"outline.showProperties": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8264, null),
								},
								"outline.showFields": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8265, null),
								},
								"outline.showConstructors": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8266, null),
								},
								"outline.showEnums": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8267, null),
								},
								"outline.showInterfaces": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8268, null),
								},
								"outline.showFunctions": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8269, null),
								},
								"outline.showVariables": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8270, null),
								},
								"outline.showConstants": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8271, null),
								},
								"outline.showStrings": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8272, null),
								},
								"outline.showNumbers": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8273, null),
								},
								"outline.showBooleans": {
									type: "boolean",
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									default: !0,
									markdownDescription: (0, t.localize)(8274, null),
								},
								"outline.showArrays": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8275, null),
								},
								"outline.showObjects": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8276, null),
								},
								"outline.showKeys": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8277, null),
								},
								"outline.showNull": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8278, null),
								},
								"outline.showEnumMembers": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8279, null),
								},
								"outline.showStructs": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8280, null),
								},
								"outline.showEvents": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8281, null),
								},
								"outline.showOperators": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8282, null),
								},
								"outline.showTypeParameters": {
									type: "boolean",
									default: !0,
									scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, t.localize)(8283, null),
								},
							},
						});
			},
		),
		