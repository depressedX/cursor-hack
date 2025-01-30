import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import './ComposerCapabilitiesMessage.js';
import '../hooks/useComposerDataHandle.js';
define(
			de[2008],
			he([1, 0, 2, 13, 36, 4397, 177]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*solid*/,
 E /*ComposerCapabilitiesMessage*/,
 C /*useComposerDataHandle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerCapabilityMessageRenderer = void 0);
				const d = (m) => {
					const r = (0, w.$odc)(),
						{ composerDataService: u } = r,
						{ composerDataHandle: a, currentComposer: h } = (0,
						C.useComposerDataHandle)(() => m.composerDataHandle),
						c = (0, i.createMemo)(() => m.process),
						n = (0, i.createMemo)(() => {
							const g = [],
								p = [],
								o = m.statuses;
							for (const f of o) {
								const b = u.getComposerCapability(h().composerId, f.type);
								let s;
								if (b) {
									switch (c()) {
										case "start-submit-chat":
											s = b.renderStartSubmitChat?.();
											break;
										case "before-submit-chat":
											s = b.renderBeforeSubmitChat?.();
											break;
										case "after-submit-chat":
											s = b.renderAfterSubmitChat?.();
											break;
										case "composer-settled":
											s = b.renderComposerSettled?.();
											break;
										case "composer-done":
											s = b.renderComposerDone?.();
											break;
										case "mutate-request":
											s = b.renderMutateRequest?.();
											break;
									}
									if (s) {
										p.push([s, f]);
										continue;
									}
								}
								g.push(f);
							}
							return [g, p];
						});
					return [
						(0, t.createComponent)(i.Show, {
							get when() {
								return n()[0];
							},
							children: (g) =>
								(0, t.createComponent)(E.ComposerCapabilitiesMessage, {
									get status() {
										return g();
									},
								}),
						}),
						(0, t.createComponent)(i.Show, {
							get when() {
								return n()[1];
							},
							children: (g) =>
								(0, t.createComponent)(i.For, {
									get each() {
										return g();
									},
									children: (p) => {
										const o = p[0];
										return (0, t.createComponent)(o, {
											get composerDataHandle() {
												return a();
											},
											get bubbleId() {
												return m.bubbleId;
											},
											get status() {
												return p[1];
											},
											get location() {
												return m.location;
											},
										});
									},
								}),
						}),
					];
				};
				e.ComposerCapabilityMessageRenderer = d;
			},
		),
		