import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/solid.js';
define(de[534], he([1, 0, 13]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$m8b =
					e.MultiFileEditingState =
					e.$l8b =
					e.$k8b =
					e.EditMode =
					e.$j8b =
					e.$i8b =
					e.$h8b =
					e.$g8b =
					e.$f8b =
					e.$e8b =
					e.$d8b =
					e.$c8b =
					e.$b8b =
					e.$a8b =
					e.$_7b =
					e.$$7b =
					e.$07b =
					e.$97b =
						void 0),
				(e.$n8b = E),
				(e.$97b = "editor.action.inlineDiffs.acceptAll"),
				(e.$07b = "editor.action.inlineDiffs.acceptAllAcrossAllEditors"),
				(e.$$7b = "editor.action.inlineDiffs.acceptPartialEdit"),
				(e.$_7b = "editor.action.inlineDiffs.rejectAll"),
				(e.$a8b = "editor.action.inlineDiffs.rejectAllAcrossAllEditors"),
				(e.$b8b = "editor.action.inlineDiffs.rejectPartialEdit"),
				(e.$c8b = "editor.action.inlineDiffs.cancelEdits"),
				(e.$d8b = "editor.action.inlineDiffs.undoWhenGenerating"),
				(e.$e8b = "editor.action.inlineDiffs.undoWhenDone"),
				(e.$f8b = "editor.action.inlineDiffs.viewAllChanges"),
				(e.$g8b = "editor.action.inlineDiffs.nextChange"),
				(e.$h8b = "editor.action.inlineDiffs.previousChange"),
				(e.$i8b = "editor.action.inlineDiffs.previousDiffFile"),
				(e.$j8b = "editor.action.inlineDiffs.nextDiffFile");
			var i;
			(function (C) {
				(C.MultiFile = "multi-file"), (C.SingleFile = "single-file");
			})(i || (e.EditMode = i = {})),
				(e.$k8b = ["gpt-4", "gpt-4-32k", "gpt-4-1106-preview"]),
				(e.$l8b = 16);
			var w;
			(function (C) {
				(C[(C.None = 0)] = "None"),
					(C[(C.FindingLocations = 1)] = "FindingLocations"),
					(C[(C.WaitingForUserInput = 2)] = "WaitingForUserInput"),
					(C[(C.SelectingFilesWithChainOfThought = 3)] =
						"SelectingFilesWithChainOfThought"),
					(C[(C.Editing = 4)] = "Editing");
			})(w || (e.MultiFileEditingState = w = {})),
				(e.$m8b = (0, t.createContext)());
			function E() {
				return (0, t.useContext)(e.$m8b);
			}
		}),
		