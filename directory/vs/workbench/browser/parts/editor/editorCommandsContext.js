import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/common/uri.js';
import '../../../common/editor.js';
import '../../../services/editor/common/editorGroupsService.js';
define(
			de[1014],
			he([1, 0, 7, 278, 9, 44, 66]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$TVb = d);
				function d(g, p, o, f) {
					const b = m(g, p, o, f),
						s = (b.length && b[0].preserveFocus) || !1,
						l = { groupedEditors: [], preserveFocus: s };
					for (const y of b) {
						const $ = n(y, o);
						if (!$) continue;
						const { group: v, editor: S } = $;
						let I;
						for (const T of l.groupedEditors)
							if (T.group.id === v.id) {
								I = T;
								break;
							}
						I || ((I = { group: v, editors: [] }), l.groupedEditors.push(I)),
							S && I.editors.push(S);
					}
					return l;
				}
				function m(g, p, o, f) {
					const b = f.lastFocusedList;
					let s = b instanceof i.List && b.getHTMLElement() === (0, t.$Jgb)(),
						l = u(g, s, p, o, f);
					if (!l) {
						const $ = o.activeGroup,
							v = $.activeEditor;
						(l = {
							groupId: $.id,
							editorIndex: v ? $.getIndexOfEditor(v) : void 0,
						}),
							(s = !1);
					}
					const y = a(l, s, p, o, f);
					return r(l, y);
				}
				function r(g, p) {
					if (p.length <= 1) return p;
					const o = p.findIndex(
						(f) => f.groupId === g.groupId && f.editorIndex === g.editorIndex,
					);
					if (o !== -1) p.splice(o, 1), p.unshift(g);
					else if (g.editorIndex === void 0) p.unshift(g);
					else
						throw new Error("Editor context not found in multi editor context");
					return p;
				}
				function u(g, p, o, f, b) {
					const s = g.filter((l) => (0, E.$y1)(l) || w.URI.isUri(l));
					for (const l of s) if ((0, E.$y1)(l)) return l;
					for (const l of s) {
						const y = o.findEditors(l);
						if (y.length) {
							const $ = y[0],
								v = f.getGroup($.groupId);
							return {
								groupId: $.groupId,
								editorIndex: v?.getIndexOfEditor($.editor),
							};
						}
					}
					if (p) {
						const l = b.lastFocusedList;
						for (const y of l.getFocusedElements())
							if (c(y)) return h(y, void 0, f);
					}
				}
				function a(g, p, o, f, b) {
					if (p) {
						const l = b.lastFocusedList.getSelectedElements().filter(c);
						if (l.length > 1) return l.map((y) => h(y, g.preserveFocus, f));
						if (l.length === 0) return a(g, !1, o, f, b);
					} else {
						const s = f.getGroup(g.groupId),
							l =
								g.editorIndex !== void 0
									? s?.getEditorByIndex(g.editorIndex)
									: s?.activeEditor;
						if (s && l && s.isSelected(l))
							return s.selectedEditors.map((y) =>
								h({ editor: y, groupId: s.id }, g.preserveFocus, f),
							);
					}
					return [g];
				}
				function h(g, p, o) {
					if ((0, C.$GY)(g))
						return { groupId: g.id, editorIndex: void 0, preserveFocus: p };
					const f = o.getGroup(g.groupId);
					return {
						groupId: g.groupId,
						editorIndex: f ? f.getIndexOfEditor(g.editor) : -1,
						preserveFocus: p,
					};
				}
				function c(g) {
					return (0, C.$GY)(g) || (0, E.$x1)(g);
				}
				function n(g, p) {
					const o = p.getGroup(g.groupId);
					if (!o) return;
					if (g.editorIndex === void 0) return { group: o, editor: void 0 };
					const f = o.getEditorByIndex(g.editorIndex);
					return { group: o, editor: f };
				}
			},
		),
		