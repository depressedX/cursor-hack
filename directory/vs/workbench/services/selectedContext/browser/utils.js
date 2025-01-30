import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/path.js';
import '../../../../base/common/uri.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/opener/common/opener.js';
import './selectedContextData.js';
import '../../editor/common/editorService.js';
import '../../editor/common/editorGroupsService.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
define(
			de[299],
			he([1, 0, 54, 9, 116, 41, 298, 18, 66, 23, 19]),
			function (ce /*require*/,
 e /*exports*/,
 t /*path*/,
 i /*uri*/,
 w /*editor*/,
 E /*opener*/,
 C /*selectedContextData*/,
 d /*editorService*/,
 m /*editorGroupsService*/,
 r /*network*/,
 u /*resources*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ahc = e.$_gc = e.$$gc = e.$0gc = e.$9gc = void 0),
					(e.$6gc = a),
					(e.$7gc = h),
					(e.$8gc = c),
					(e.$bhc = b),
					(e.$chc = s);
				function a(l) {
					return JSON.parse(JSON.stringify(l));
				}
				function h(l) {
					return (0, t.$sc)(l.uri.path ?? "");
				}
				function c(l) {
					return i.URI.revive(l.uri).toString();
				}
				const n = (
					l,
					{
						filePathOrUri: y,
						selection: $,
						openToSide: v,
						fromGroup: S,
						preserveFocus: I,
					},
				) => {
					try {
						let T = typeof y == "string" ? i.URI.file(y) : y;
						if (($ && (T = (0, E.$8rb)(T, $)), T.path === "/")) return;
						(0, e.$0gc)({
							uri: T,
							fileService: l.fileService,
							editorService: l.editorService,
							editorGroupsService: l.editorGroupService,
							openToSide: v,
							fromGroup: S,
							preserveFocus: I,
						});
					} catch (T) {
						console.error("Failed to open file:", y, T),
							l.notificationService.error(`Failed to open file: ${y}`);
					}
				};
				e.$9gc = n;
				const g = async ({
					uri: l,
					fileService: y,
					editorService: $,
					editorGroupsService: v,
					openToSide: S,
					fromGroup: I,
					preserveFocus: T,
				}) => {
					if (!(await y.exists(l))) return;
					let k = d.$JY;
					if (S) {
						const M = I ?? $.activeEditorPane?.group;
						if (M) {
							const N = v.findGroup({ direction: m.GroupDirection.RIGHT }, M),
								A = v.findGroup({ direction: m.GroupDirection.LEFT }, M);
							!N && A ? (k = A) : (k = d.$KY);
						} else k = d.$KY;
					}
					let { selection: L, uri: D } = (0, E.$9rb)(l);
					D.scheme === r.Schemas.file && (D = (0, u.$oh)(D)),
						$.openEditor(
							{
								resource: D,
								options: {
									selection: L,
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: w.EditorOpenSource.USER,
									preserveFocus: T ?? !0,
								},
							},
							k,
						);
				};
				e.$0gc = g;
				const p = (l) => {
					if (l === "<ALL_FILES>") return "Add all";
					const y = l.split(/[/\\]/);
					return y[y.length - 1];
				};
				e.$$gc = p;
				const o = (l) => {
					if (((l = l.trim()), l.slice(0, 3) === "```")) {
						const $ = l
							.split(`
`)[0]
							.match(/```.*?:(.+)$/);
						if ($ && $[1]) return $[1].split("/").pop() || "";
					}
					return l;
				};
				e.$_gc = o;
				const f = (l) => ({
					...l,
					fileSelections: l.fileSelections?.map((y) => ({
						...y,
						uri: i.URI.revive(y.uri),
					})),
				});
				e.$ahc = f;
				function b(l) {
					const y = { ...l, mentions: { ...l.mentions } };
					for (const $ of Object.keys(l))
						$ !== "mentions" &&
							((0, C.$Ygc)($)
								? ((y[$] = l[$].filter(
										(v) =>
											"addedWithoutMention" in v &&
											v.addedWithoutMention === !0,
									)),
									(y.mentions[$] = {}))
								: l[$] !== void 0 && ((y[$] = void 0), (y.mentions[$] = [])));
					return y;
				}
				function s(l) {
					for (const y of Object.keys(l))
						if (y !== "mentions") {
							if ((0, C.$Ygc)(y)) {
								if (l[y].length > 0) return !1;
							} else if (l[y] !== void 0 && l[y] !== !1) return !1;
						}
					return !0;
				}
			},
		),
		