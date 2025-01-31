import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/selectedContext/browser/hooks/useContextSideEffects.js';
import '../../../../services/selectedContext/browser/selectedContextData.js';
define(
			de[4410],
			he([1, 0, 13, 36, 2011, 298]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*solid*/,
 w /*useContextSideEffects*/,
 E /*selectedContextData*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerContextSideEffects = void 0);
				const C = (d, m, r) => {
					const u = (0, i.$odc)(),
						{ composerService: a, composerDataService: h } = u,
						c = (0, t.createMemo)(() => {
							if (r)
								return h.getComposerBubble(d(), r())?.context ?? (0, E.$2gc)();
							const o = d().data;
							if (!o)
								throw new Error("[composer] No current composer available");
							return o.context;
						}),
						n = (o, f, b, s) => {
							r
								? a.addBubbleContext({
										composerId: d().data.composerId,
										bubbleId: r(),
										contextType: o,
										value: f,
										uuid: b,
										addToUndoRedo: s,
									})
								: a.addContext({
										composerId: d().data.composerId,
										contextType: o,
										value: f,
										uuid: b,
										addToUndoRedo: s,
									});
						},
						g = (o, f, b) => {
							r
								? a.removeBubbleContext({
										composerId: d().data.composerId,
										bubbleId: r(),
										contextType: o,
										index: f,
										addToUndoRedo: b,
									})
								: a.removeContext({
										composerId: d().data.composerId,
										contextType: o,
										index: f,
										addToUndoRedo: b,
									});
						},
						p = (o) => {
							r
								? a.removeBubbleMention(d().data.composerId, r(), o)
								: a.removeMention(d().data.composerId, o);
						};
					return (0, w.$bbc)(n, g, p, m, c);
				};
				e.useComposerContextSideEffects = C;
			},
		)
