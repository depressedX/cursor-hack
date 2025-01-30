import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/network.js';
define(de[63], he([1, 0, 5, 23]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*network*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$DJ =
					e.$CJ =
					e.$BJ =
					e.QuickInputButtonLocation =
					e.QuickPickFocus =
					e.ItemActivation =
					e.QuickInputType =
					e.QuickInputHideReason =
					e.$AJ =
						void 0),
				(e.$AJ = { ctrlCmd: !1, alt: !1 });
			var w;
			(function (u) {
				(u[(u.Blur = 1)] = "Blur"),
					(u[(u.Gesture = 2)] = "Gesture"),
					(u[(u.Other = 3)] = "Other");
			})(w || (e.QuickInputHideReason = w = {}));
			var E;
			(function (u) {
				(u.QuickPick = "quickPick"),
					(u.InputBox = "inputBox"),
					(u.QuickWidget = "quickWidget");
			})(E || (e.QuickInputType = E = {}));
			var C;
			(function (u) {
				(u[(u.NONE = 0)] = "NONE"),
					(u[(u.FIRST = 1)] = "FIRST"),
					(u[(u.SECOND = 2)] = "SECOND"),
					(u[(u.LAST = 3)] = "LAST");
			})(C || (e.ItemActivation = C = {}));
			var d;
			(function (u) {
				(u[(u.First = 1)] = "First"),
					(u[(u.Second = 2)] = "Second"),
					(u[(u.Last = 3)] = "Last"),
					(u[(u.Next = 4)] = "Next"),
					(u[(u.Previous = 5)] = "Previous"),
					(u[(u.NextPage = 6)] = "NextPage"),
					(u[(u.PreviousPage = 7)] = "PreviousPage"),
					(u[(u.NextSeparator = 8)] = "NextSeparator"),
					(u[(u.PreviousSeparator = 9)] = "PreviousSeparator");
			})(d || (e.QuickPickFocus = d = {}));
			var m;
			(function (u) {
				(u[(u.Title = 1)] = "Title"), (u[(u.Inline = 2)] = "Inline");
			})(m || (e.QuickInputButtonLocation = m = {}));
			class r {
				constructor(a) {
					this.a = a;
				}
				getItemLabel(a) {
					return a.label;
				}
				getItemDescription(a) {
					if (!this.a?.skipDescription) return a.description;
				}
				getItemPath(a) {
					if (!this.a?.skipPath)
						return a.resource?.scheme === i.Schemas.file
							? a.resource.fsPath
							: a.resource?.path;
				}
			}
			(e.$BJ = r), (e.$CJ = new r()), (e.$DJ = (0, t.$Mi)("quickInputService"));
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	