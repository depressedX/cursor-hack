import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../contrib/ui/browser/aiInput/plugins/mentions/types.js';
import '../../../../../proto/aiserver/v1/repository_pb.js';
define(de[298], he([1, 0, 9, 310, 272]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ygc = e.$Xgc = e.$Wgc = e.$Vgc = e.$Ugc = e.$Tgc = void 0),
				(e.$Zgc = C),
				(e.$1gc = m),
				(e.$2gc = r),
				(e.$3gc = u),
				(e.$4gc = a),
				(e.$5gc = h),
				(e.$Tgc = "embeddings"),
				(e.$Ugc = {
					numResultsPerSearch: 100,
					includePattern: "",
					excludePattern: "",
					reranker: w.RerankerAlgorithm.LULEA,
					reasoningStep: !1,
				}),
				(e.$Vgc = [
					"editTrailContexts",
					"notepads",
					"quotes",
					"selectedCommits",
					"selectedPullRequests",
					"gitDiff",
					"gitDiffFromBranchToMain",
					"selectedImages",
					"usesCodebase",
					"useWeb",
					"folderSelections",
					"fileSelections",
					"terminalFiles",
					"selections",
					"terminalSelections",
					"selectedDocs",
					"externalLinks",
					"useLinterErrors",
					"useDiffReview",
					"useContextPicking",
					"useRememberThis",
					"diffHistory",
				]),
				(e.$Wgc = e.$Vgc),
				(e.$Xgc = e.$Vgc);
			const E = (c) =>
				[
					"selections",
					"fileSelections",
					"folderSelections",
					"selectedDocs",
					"selectedCommits",
					"selectedPullRequests",
					"terminalSelections",
					"terminalFiles",
					"quotes",
					"externalLinks",
					"selectedImages",
					"notepads",
					"editTrailContexts",
				].includes(c);
			e.$Ygc = E;
			function C(c, n) {
				switch (c) {
					case "fileSelections":
					case "terminalFiles":
						return t.URI.revive(n.uri).toString();
					case "selections":
					case "terminalSelections":
						return d(n);
					case "selectedDocs":
						return n.docId;
					case "notepads":
						return n.notepadId;
					case "selectedImages":
						return n.path;
					case "editTrailContexts":
						return n.uniqueId;
					case "quotes":
						return JSON.stringify({
							bubbleId: n.bubbleId,
							sectionIndex: n.sectionIndex,
						});
					case "externalLinks":
						return n.url;
					default: {
						const { uuid: g, ...p } = n;
						return JSON.stringify(p);
					}
				}
			}
			const d = (c) =>
				JSON.stringify({
					uri: t.URI.revive(c.uri).toString(),
					range: c.range,
					text: c.text,
				});
			function m(c, n, g) {
				return !n && !g ? !0 : !n || !g ? !1 : C(c, n) === C(c, g);
			}
			function r() {
				const c = {};
				return (
					e.$Xgc.forEach((n) => {
						(0, e.$Ygc)(n) ? (c[n] = []) : (c[n] = void 0);
					}),
					{ ...c, mentions: u() }
				);
			}
			function u() {
				const c = {};
				return (
					e.$Xgc.forEach((n) => {
						(0, e.$Ygc)(n) ? (c[n] = {}) : (c[n] = []);
					}),
					c
				);
			}
			function a(c) {
				return { ...r(), ...c };
			}
			function h(c) {
				switch (c) {
					case "selections":
						return i.TypeaheadOptionType.code;
					case "fileSelections":
						return i.TypeaheadOptionType.file;
					case "folderSelections":
						return i.TypeaheadOptionType.folder;
					case "selectedDocs":
						return i.TypeaheadOptionType.doc;
					case "selectedCommits":
						return i.TypeaheadOptionType.git_commit;
					case "selectedPullRequests":
						return i.TypeaheadOptionType.git_pr;
					case "quotes":
						return i.TypeaheadOptionType.notepad;
					case "externalLinks":
						return i.TypeaheadOptionType.web;
					case "notepads":
						return i.TypeaheadOptionType.notepad;
					case "gitDiff":
						return i.TypeaheadOptionType.git_diff;
					case "gitDiffFromBranchToMain":
						return i.TypeaheadOptionType.git_diff;
					case "usesCodebase":
						return i.TypeaheadOptionType.codebase;
					case "useWeb":
						return i.TypeaheadOptionType.web;
					case "useLinterErrors":
						return i.TypeaheadOptionType.lint;
					case "useDiffReview":
						return i.TypeaheadOptionType.diff_review;
					case "selectedImages":
						return i.TypeaheadOptionType.image;
					case "terminalFiles":
						return i.TypeaheadOptionType.file;
					case "terminalSelections":
						return i.TypeaheadOptionType.code;
					case "useContextPicking":
						return i.TypeaheadOptionType.context_picking;
					case "useRememberThis":
						return i.TypeaheadOptionType.remember_this;
					default:
						return i.TypeaheadOptionType.code;
				}
			}
		}),
		