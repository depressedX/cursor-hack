import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/theme/common/colorRegistry.js';
define(
			de[257],
			he([1, 0, 4, 11, 81, 8, 30, 51]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*configurationRegistry*/,
 E /*contextkey*/,
 C /*platform*/,
 d /*colorRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yLb =
						e.$xLb =
						e.$wLb =
						e.$vLb =
						e.$uLb =
						e.$tLb =
						e.$sLb =
						e.$rLb =
						e.$qLb =
						e.$pLb =
						e.$oLb =
						e.$nLb =
						e.$mLb =
						e.$lLb =
						e.$kLb =
						e.$jLb =
						e.$iLb =
						e.$hLb =
						e.$gLb =
						e.$fLb =
						e.$eLb =
						e.$dLb =
						e.$cLb =
						e.$bLb =
						e.$aLb =
						e.$_Kb =
						e.$$Kb =
						e.$0Kb =
						e.$9Kb =
						e.$8Kb =
						e.$7Kb =
						e.$6Kb =
						e.$5Kb =
						e.$4Kb =
						e.$3Kb =
						e.$2Kb =
						e.$1Kb =
						e.$ZKb =
						e.$YKb =
						e.$XKb =
						e.$WKb =
						e.$VKb =
						e.InlineChatResponseType =
						e.$UKb =
						e.$TKb =
						e.EditMode =
						e.InlineChatConfigKeys =
							void 0);
				var m;
				(function (a) {
					(a.Mode = "inlineChat.mode"),
						(a.FinishOnType = "inlineChat.finishOnType"),
						(a.AcceptedOrDiscardBeforeSave =
							"inlineChat.acceptedOrDiscardBeforeSave"),
						(a.StartWithOverlayWidget = "inlineChat.startWithOverlayWidget"),
						(a.ZoneToolbar = "inlineChat.experimental.enableZoneToolbar"),
						(a.HoldToSpeech = "inlineChat.holdToSpeech"),
						(a.AccessibleDiffView = "inlineChat.accessibleDiffView");
				})(m || (e.InlineChatConfigKeys = m = {}));
				var r;
				(function (a) {
					(a.Live = "live"), (a.Preview = "preview");
				})(r || (e.EditMode = r = {})),
					C.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							id: "editor",
							properties: {
								[m.Mode]: {
									description: (0, t.localize)(7109, null),
									default: r.Live,
									type: "string",
									enum: [r.Live, r.Preview],
									markdownEnumDescriptions: [
										(0, t.localize)(7110, null),
										(0, t.localize)(7111, null),
									],
									tags: ["experimental"],
								},
								[m.FinishOnType]: {
									description: (0, t.localize)(7112, null),
									default: !1,
									type: "boolean",
								},
								[m.AcceptedOrDiscardBeforeSave]: {
									description: (0, t.localize)(7113, null),
									default: !0,
									type: "boolean",
								},
								[m.HoldToSpeech]: {
									description: (0, t.localize)(7114, null),
									default: !0,
									type: "boolean",
								},
								[m.AccessibleDiffView]: {
									description: (0, t.localize)(7115, null),
									default: "auto",
									type: "string",
									enum: ["auto", "on", "off"],
									markdownEnumDescriptions: [
										(0, t.localize)(7116, null),
										(0, t.localize)(7117, null),
										(0, t.localize)(7118, null),
									],
								},
								[m.StartWithOverlayWidget]: {
									description: (0, t.localize)(7119, null),
									default: !1,
									type: "boolean",
								},
								[m.ZoneToolbar]: {
									description: (0, t.localize)(7120, null),
									default: !1,
									type: "boolean",
									tags: ["experimental"],
								},
							},
						}),
					(e.$TKb = "interactiveEditor"),
					(e.$UKb = "interactiveEditorAccessiblityHelp");
				var u;
				(function (a) {
					(a.None = "none"),
						(a.Messages = "messages"),
						(a.MessagesAndEdits = "messagesAndEdits");
				})(u || (e.InlineChatResponseType = u = {})),
					(e.$VKb = new E.$5j(
						"inlineChatHasProvider",
						!1,
						(0, t.localize)(7121, null),
					)),
					(e.$WKb = new E.$5j(
						"inlineChatVisible",
						!1,
						(0, t.localize)(7122, null),
					)),
					(e.$XKb = new E.$5j(
						"inlineChatFocused",
						!1,
						(0, t.localize)(7123, null),
					)),
					(e.$YKb = new E.$5j(
						"inlineChatEditing",
						!0,
						(0, t.localize)(7124, null),
					)),
					(e.$ZKb = new E.$5j(
						"inlineChatResponseFocused",
						!1,
						(0, t.localize)(7125, null),
					)),
					(e.$1Kb = new E.$5j(
						"inlineChatEmpty",
						!1,
						(0, t.localize)(7126, null),
					)),
					(e.$2Kb = new E.$5j(
						"inlineChatInnerCursorFirst",
						!1,
						(0, t.localize)(7127, null),
					)),
					(e.$3Kb = new E.$5j(
						"inlineChatInnerCursorLast",
						!1,
						(0, t.localize)(7128, null),
					)),
					(e.$4Kb = new E.$5j(
						"inlineChatInnerCursorStart",
						!1,
						(0, t.localize)(7129, null),
					)),
					(e.$5Kb = new E.$5j(
						"inlineChatInnerCursorEnd",
						!1,
						(0, t.localize)(7130, null),
					)),
					(e.$6Kb = new E.$5j(
						"inlineChatOuterCursorPosition",
						"",
						(0, t.localize)(7131, null),
					)),
					(e.$7Kb = new E.$5j(
						"inlineChatHasStashedSession",
						!1,
						(0, t.localize)(7132, null),
					)),
					(e.$8Kb = new E.$5j(
						"inlineChatUserDidEdit",
						void 0,
						(0, t.localize)(7133, null),
					)),
					(e.$9Kb = new E.$5j(
						"inlineChatDocumentChanged",
						!1,
						(0, t.localize)(7134, null),
					)),
					(e.$0Kb = new E.$5j(
						"inlineChatChangeHasDiff",
						!1,
						(0, t.localize)(7135, null),
					)),
					(e.$$Kb = new E.$5j(
						"inlineChatChangeShowsDiff",
						!1,
						(0, t.localize)(7136, null),
					)),
					(e.$_Kb = new E.$5j("config.inlineChat.mode", r.Live)),
					(e.$aLb = new E.$5j(
						"inlineChatRequestInProgress",
						!1,
						(0, t.localize)(7137, null),
					)),
					(e.$bLb = new E.$5j(
						"inlineChatResponseType",
						u.None,
						(0, t.localize)(7138, null),
					)),
					(e.$cLb = "inlineChat.acceptChanges"),
					(e.$dLb = "inlineChat.discardHunkChange"),
					(e.$eLb = "inlineChat.regenerate"),
					(e.$fLb = "inlineChat.viewInChat"),
					(e.$gLb = "inlineChat.toggleDiff"),
					(e.$hLb = "inlineChat.reportIssue"),
					(e.$iLb = i.$XX.for("inlineChat.content.status")),
					(e.$jLb = i.$XX.for("inlineChatWidget.status")),
					(e.$kLb = i.$XX.for("inlineChatWidget.secondary")),
					(e.$lLb = i.$XX.for("inlineChatWidget.changesZone")),
					(e.$mLb = (0, d.$wP)(
						"inlineChat.foreground",
						d.$cQ,
						(0, t.localize)(7139, null),
					)),
					(e.$nLb = (0, d.$wP)(
						"inlineChat.background",
						d.$bQ,
						(0, t.localize)(7140, null),
					)),
					(e.$oLb = (0, d.$wP)(
						"inlineChat.border",
						d.$dQ,
						(0, t.localize)(7141, null),
					)),
					(e.$pLb = (0, d.$wP)(
						"inlineChat.shadow",
						d.$bR,
						(0, t.localize)(7142, null),
					)),
					(e.$qLb = (0, d.$wP)(
						"inlineChatInput.border",
						d.$dQ,
						(0, t.localize)(7143, null),
					)),
					(e.$rLb = (0, d.$wP)(
						"inlineChatInput.focusBorder",
						d.$NP,
						(0, t.localize)(7144, null),
					)),
					(e.$sLb = (0, d.$wP)(
						"inlineChatInput.placeholderForeground",
						d.$1R,
						(0, t.localize)(7145, null),
					)),
					(e.$tLb = (0, d.$wP)(
						"inlineChatInput.background",
						d.$TR,
						(0, t.localize)(7146, null),
					)),
					(e.$uLb = (0, d.$wP)(
						"inlineChatDiff.inserted",
						(0, d.$BP)(d.$YQ, 0.5),
						(0, t.localize)(7147, null),
					)),
					(e.$vLb = (0, d.$wP)(
						"editorOverviewRuler.inlineChatInserted",
						{
							dark: (0, d.$BP)(d.$YQ, 0.6),
							light: (0, d.$BP)(d.$YQ, 0.8),
							hcDark: (0, d.$BP)(d.$YQ, 0.6),
							hcLight: (0, d.$BP)(d.$YQ, 0.8),
						},
						(0, t.localize)(7148, null),
					)),
					(e.$wLb = (0, d.$wP)(
						"editorOverviewRuler.inlineChatInserted",
						{
							dark: (0, d.$BP)(d.$YQ, 0.6),
							light: (0, d.$BP)(d.$YQ, 0.8),
							hcDark: (0, d.$BP)(d.$YQ, 0.6),
							hcLight: (0, d.$BP)(d.$YQ, 0.8),
						},
						(0, t.localize)(7149, null),
					)),
					(e.$xLb = (0, d.$wP)(
						"inlineChatDiff.removed",
						(0, d.$BP)(d.$ZQ, 0.5),
						(0, t.localize)(7150, null),
					)),
					(e.$yLb = (0, d.$wP)(
						"editorOverviewRuler.inlineChatRemoved",
						{
							dark: (0, d.$BP)(d.$ZQ, 0.6),
							light: (0, d.$BP)(d.$ZQ, 0.8),
							hcDark: (0, d.$BP)(d.$ZQ, 0.6),
							hcLight: (0, d.$BP)(d.$ZQ, 0.8),
						},
						(0, t.localize)(7151, null),
					));
			},
		)
